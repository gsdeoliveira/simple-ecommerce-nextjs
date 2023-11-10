import { fetchProducts } from './actions';
import Hero from './components/Hero';
import InfiniteScroll from './components/InfiniteScroll';
import Times from './components/Times';

export default async function Home() {
  const {formatedProducts } = await fetchProducts({});
  
  return (
    <div className='max-w-7xl mx-auto pt-8 lg:px-8 xl:px-0'>
      <Hero />
      <Times />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-5 xl:gap-6 pb-10'>
        <InfiniteScroll initialProducts={formatedProducts} />
      Ti</div>
    </div>
  )
}
