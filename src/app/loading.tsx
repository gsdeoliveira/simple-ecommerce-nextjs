import SkeletonCard from './components/SkeletonCard'

const loading = () => {
  return (
      <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <div className='flex flex-wrap justify-center items-center gap-5'>
        <SkeletonCard isLoading />
        <SkeletonCard isLoading />
        <SkeletonCard isLoading />
        <SkeletonCard isLoading />
        <SkeletonCard isLoading />
        <SkeletonCard isLoading />
        <SkeletonCard isLoading />
        <SkeletonCard isLoading />
      </div>
    </div>
  )
}

export default loading