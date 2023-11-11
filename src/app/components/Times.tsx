import React from 'react'
import SwiperTimes from './SwiperTimes/SwiperTimes';
import Link from 'next/link';

const Times = () => {
  const timesCarousel = [{src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png', time: 'flamengo'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png', time: 'flamengo'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png', time: 'flamengo'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png', time: 'flamengo'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png', time: 'flamengo'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png', time: 'flamengo'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png', time: 'flamengo'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png', time: 'flamengo'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png', time: 'flamengo'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png', time: 'flamengo'}];
  return (
    <section className='mb-5'>
      <div className='flex justify-between items-center font-bold p-2'>
      <h2 className='text-xl sm:text-2xl md:text-3xl my-5'>Seu time do coração</h2>
      </div>
      <SwiperTimes carouselItems={timesCarousel} />
    </section>
  )
}

export default Times