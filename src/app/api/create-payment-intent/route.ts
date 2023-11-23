import { ProductType } from '@/app/types/ProductType';
import { stripe } from '@/lib/stripe';
import { auth } from '@clerk/nextjs';
import prisma from '@/lib/prisma';

const calculateOrderAmount = (items: ProductType[]) => {
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price! * item.quantity!;
  }, 0);
  return totalPrice;
}

export async function POST(req: Request) {
  const { userId } = auth();
  const { items, payment_intent_id } = await req.json();

  if (!userId) {
    return new Response('Acesso não autorizado', { status: 401 })
  }

  const customerIdTemp = 'cus_Oy8nYzSyAnsPJO';
  const total = calculateOrderAmount(items);

  const orderData = {
    user: { connect: { id: 1 } },
    amount: total,
    currency: 'brl',
    status: 'pending',
    paymentIntentID: payment_intent_id,
    products: {
      create: items.map((item: ProductType) => ({
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image
      }))
    }
  }

  if (payment_intent_id) {
    const currentIntent = await stripe.paymentIntents.retrieve(payment_intent_id);
    if (currentIntent) {
      const updatedIntent = await stripe.paymentIntents.update(payment_intent_id, {
        amount: total
      })

      const [existingOrder, updatedOrder] = await Promise.all([
        prisma.order.findFirst({
          where: { paymentIntentID: payment_intent_id },
          include: {products: true}
        }),
        prisma.order.update({
          where: { paymentIntentID: payment_intent_id },
          data: {
            amount: total,
            products: {
              deleteMany: {},
              create: items.map((item: ProductType) => ({
                name: item.name,
                description: item.description,
                quantity: item.quantity,
                price: item.price,
                image: item.image
              }))
            }
          }
        })
      ])

      if (!existingOrder) {
        return new Response('Pedido não encontrado', { status: 404 })
      }

      return Response.json({paymentIntent: updatedIntent}, {status: 200})
    }
  } else {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'brl',
      automatic_payment_methods: { enabled: true },
    })

    orderData.paymentIntentID = paymentIntent.id;
    const newOrder = await prisma.order.create({
      data: orderData
    })

    return Response.json({paymentIntent}, {status: 200})
  }
}