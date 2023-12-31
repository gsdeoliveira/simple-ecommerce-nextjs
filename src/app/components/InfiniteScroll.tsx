"use client";

import { useCallback, useEffect, useState } from 'react';
import { ProductType } from '../types/ProductType';
import Product from './Product';
import { useInView } from 'react-intersection-observer';
import { fetchProducts } from '../actions';

const InfiniteScroll = ({initialProducts, time}: {initialProducts: ProductType[], time?: boolean}) => {
  const [products, setProducts] = useState<ProductType[]>(initialProducts);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const lastProductId = products[products.length - 1]?.id;

  const loadMoreProducts = useCallback(async () => {
    const { formatedProducts, has_more } = await fetchProducts({ lastProductId });

    if(formatedProducts) {
      setProducts((prevProducts) => [...prevProducts, ...formatedProducts]);
      setHasMore(has_more);
    }

    setIsLoading(false);
  }, [lastProductId]);

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMoreProducts();
    }
  }, [inView, hasMore, isLoading, loadMoreProducts]);

  if (!products)
    return <div>Loading...</div>
  return (
    <>
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
    { hasMore &&
       (
        <div ref={ref} className='flex justify-center items-center p-10 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4'>
          <span className="loading loading-spinner text-cyan-400"></span>
        </div>
      )
    }
    </>
  )
}

export default InfiniteScroll