import { searchProducts } from '@/app/actions';
import InfiniteScrollTimes from '../components/InfiniteScrollTimes';

type timeProps = {
  params: {
    time: string | undefined;
  }
}

const page = async ({params: {time}}: timeProps) => {
  const { formatedProducts, has_more, next_page } = await searchProducts({ time: time });

  return (
    <div>
      {formatedProducts.length === 0 ? (
        <div className='text-slate-900 font-xl w-screen h-screen text-center flex items-center justify-center'>Nenhum produto foi encontrado</div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 lg:grid-cols-4 gap-3 sm:gap-5 xl:gap-6 pb-10'>
          <InfiniteScrollTimes initialProducts={formatedProducts} time={time} next_page={next_page!} />
        </div>
      )}
    </div>
  );
};

export default page;