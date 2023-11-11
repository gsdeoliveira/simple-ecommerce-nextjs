import { fetchProducts } from '../actions';
import InfiniteScroll from '../components/InfiniteScroll'

const Destaque = async () => {
  const {formatedProducts } = await fetchProducts({});

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 lg:grid-cols-4 gap-3 sm:gap-5 xl:gap-6 pb-10'>
    <InfiniteScroll initialProducts={formatedProducts} />
  </div>

  )
}

export default Destaque