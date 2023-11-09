import { fetchProducts } from './actions';
import InfiniteScroll from './components/InfiniteScroll';

export default async function Home() {
  const {formatedProducts } = await fetchProducts({});
  
  return (
    <div className='max-w-7xl mx-auto pt-8 lg:px-8 xl:px-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-5 xl:gap-6 pb-10'>
        <InfiniteScroll initialProducts={formatedProducts} />
      </div>
    </div>
  )
}
