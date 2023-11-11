"use client";

import { searchProducts } from '@/app/actions';
import Product from '@/app/components/Product';
import { ProductType } from '@/app/types/ProductType';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const InfiniteScroll = ({initialProducts, time, next_page}: {initialProducts: ProductType[], time?: string, next_page: string | undefined}) => {
  const [products, setProducts] = useState<ProductType[]>(initialProducts);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<string | undefined>(next_page);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const loadMoreProducts = useCallback(async () => {
    const { formatedProducts, has_more, next_page } = await searchProducts({time: time, nextPage: nextPage});

    if(formatedProducts) {
      if(next_page) {
        setNextPage(next_page);
      }
      setProducts((prevProducts) => [...prevProducts, ...formatedProducts]);
      setHasMore(has_more);
    }


    setIsLoading(false);
  }, [nextPage, time]);

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