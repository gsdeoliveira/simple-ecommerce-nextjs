"use server";

import { stripe } from '@/lib/stripe';

export async function fetchProducts( {lastProductId}: { lastProductId?: string | undefined } ) {
  const params = lastProductId ? { starting_after: lastProductId, limit: 12 } : { limit: 12}
  const {data: products, has_more} = await stripe.products.list(params);
  const formatedProducts = await Promise.all(
    products.map( async (product) => {
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
    })
  )

  return {formatedProducts, has_more};
}

export async function searchProducts({time, nextPage}: {time: string | undefined, nextPage?: string | undefined}) {
  const {data: products, has_more, next_page } = await stripe.products.search({
    query: `metadata['time']:'${time}'`, limit: 12, page: nextPage ? nextPage : undefined
  });

  const formatedProducts = await Promise.all(
    products.map( async (product) => {
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
    })
  )
  return { formatedProducts, has_more, next_page };

}