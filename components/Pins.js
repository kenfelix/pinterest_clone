import React from 'react'
import Card from './Card'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

const Pins = () => {
    const cards = [
        { username: "ken", image: img1 },
        { username: "joan", image: img2 },
        { username: "ken ij", image: img3 },
        { username: "jkn pa", image: img4 },
        { username: "ka bew", image: img5 },
        { username: "ken", image: img1 },
        { username: "joan", image: img2 },
        { username: "ken ij", image: img3 },
        { username: "jkn pa", image: img4 },
        { username: "ka bew", image: img5 },
        { username: "ken", image: img1 },
        { username: "joan", image: img2 },
        { username: "ken ij", image: img3 },
        { username: "jkn pa", image: img4 },
        {username: "ka bew", image: img5},
    ];
  return (
    <div className='w-full'>
        <div className='max-w-[90vw] mx-auto columns-2 xs:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 space-y-3 gap-3'>
            {cards.map((card) => (<Card image={card.image}/>))}
        </div>
    </div>
  )
}

export default Pins