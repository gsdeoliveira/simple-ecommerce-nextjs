import SkeletonCard from '../components/SkeletonCard'

const loading = () => {
  return (
    //   <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
    //   <div className='flex flex-wrap justify-center items-center gap-5'>
    //     <SkeletonCard isLoading />
    //     <SkeletonCard isLoading />
    //     <SkeletonCard isLoading />
    //     <SkeletonCard isLoading />
    //     <SkeletonCard isLoading />
    //     <SkeletonCard isLoading />
    //     <SkeletonCard isLoading />
    //     <SkeletonCard isLoading />
    //   </div>
    // </div>
  <div>
    <span className="bg-cyan-400 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 right-0 bottom-0 flex justify-center items-center loading loading-spinner text-red-500 w-20 md:w-32"></span>
  </div>

  )
}

export default loading