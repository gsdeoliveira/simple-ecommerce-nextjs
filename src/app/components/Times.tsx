import React from 'react'
import SwiperCarousel from './Swiper/Swiper'
import SwiperTimes from './SwiperTimes/SwiperTimes';

const Times = () => {
  const timesCarousel = [{src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'}, {src: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'}];
  return (
    <section className='mb-5'>
      <h2 className='text-3xl my-5'>Seu time do coração</h2>
      <SwiperTimes carouselItems={timesCarousel} />
    </section>
  )
}

export default Times