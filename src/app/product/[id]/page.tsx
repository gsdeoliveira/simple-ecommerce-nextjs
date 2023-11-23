import AddCart from '@/app/components/AddCart';
import Personalizar from '@/app/components/Personalizar';
import ProductImage from '@/app/components/ProductImage';
import { formatPrice } from '@/lib/formatPrice';
import Stripe from 'stripe';

type ProductPageProps = {
  params: {
    id: string;
  }
}

async function getProduct(id: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
  });

  const product = await stripe.products.retrieve(id);
  const price = await stripe.prices.list({
    product: product.id,
  });

  return {
    id: product.id,
    name: product.name,
    price: price.data[0].unit_amount,
    description: product.description,
    image: product.images[0],
    currency: price.data[0].currency,
  }

}

const ProductPage = async ({ params: { id }}: ProductPageProps) => {
  const product = await getProduct(id);
  return (
    <div className=' flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto mt-8 md:mt-10'>
      <ProductImage product={product} width={500} />
      <div className='flex flex-col items-start justify-center md:p-5 mt-5 md:mt-0 gap-3 w-full'>
        <div className='pb-0'>
          <h1 className='text-2xl font-bold text-slate-900'>{product.name}</h1>
          {/* <h2 className='text-xl text-cyan-400 font-bold'>{formatPrice(product.price)}</h2> */}
        </div>
        <div className='pb-0'>
          <p className='text-sm text-slate-800'>{product.description}</p>
        </div>
        <div className='w-full h-[0.1rem] mb-4 bg-black'></div>
        <div className='flex flex-col gap-3'>
            <p className='text-slate-900 font-semibold'>Tamanho: </p>
            <div className='flex gap-1 tamanho'>
            <label className='flex items-center justify-center text-center text-slate-900'>
              <input className='hidden' name='tamanho' type="radio" id='P' value='P' defaultChecked />
              <span className='border border-slate-900 rounded-full w-6 h-6 transition-all'>P</span>
            </label>
            <label className='flex items-center justify-center text-center text-slate-900'>
              <input className='hidden' name='tamanho' type="radio" id='M' value='M' />
              <span className='border border-slate-900 rounded-full w-6 h-6 transition-all'>M</span>
            </label>
            <label className='flex items-center justify-center text-center text-slate-900'>
              <input className='hidden' name='tamanho' type="radio" id='G' value='G' />
              <span className='border border-slate-900 rounded-full w-6 h-6 transition-all'>G</span>
            </label>
            </div>        
      </div>
      <Personalizar />
      <div className='text-slate-900'>
        <p className='font-semibold'>Total: <span className='text-cyan-400'>{formatPrice(product.price)}</span></p>
      </div>
      <AddCart product={product} className='border border-slate-900 px-5 py-2 self-center text-slate-900 mt-5 mb-5 md:mb-0 font-semibold' />
      </div>
    </div>
  )
}

export default ProductPage