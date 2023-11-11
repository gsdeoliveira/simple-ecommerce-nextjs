import { searchProducts } from '@/app/actions';
import InfiniteScroll from '../components/infiniteScroll';

type timeProps = {
  params: {
    time: string | undefined;
  }
}

const page = async ({params: {time}}: timeProps) => {
  const { formatedProducts, has_more, next_page } = await searchProducts({time: time});

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 lg:grid-cols-4 gap-10 sm:gap-5 xl:gap-6 pb-10'>
    <InfiniteScroll initialProducts={formatedProducts} time={time} next_page={next_page!} />
  </div>

  )
}

export default page