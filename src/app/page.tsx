import Destaque from './components/Destaque';
import Hero from './components/Hero';
import Times from './components/Times';

export default async function Home() {
  
  return (
    <div className='max-w-7xl mx-auto pt-8 lg:px-8 xl:px-0'>
      <Hero />
      <Times />
      <Destaque />
    </div>
  )
}
