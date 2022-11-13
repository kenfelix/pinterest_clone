import React from 'react'
import Image from 'next/image'

const Card = ({image, username}) => {
  return (
      <div>
          <div className='max-h-auto max-w-[100%]'>
              <Image src={image} className="object-cover rounded-[1rem]" />
              <div className='absolute hidden hover:block'>
                hi
              </div>
          </div>
    </div>
  )
}

export default Card