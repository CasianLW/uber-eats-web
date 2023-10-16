'use client'
import React, { useState } from 'react'
import { offre1HomepageSalad } from '@/app/assets'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import offersData from '@/app/content/offersData.json'
import { limitCharacters } from '@/app/utils/toolbox'

const imageMap: { [key: string]: StaticImageData } = {
  offre1HomepageSalad: offre1HomepageSalad,
}

const OffersSectionComponent: FC = () => {
  const [translateX, setTranslateX] = useState(0) // Tracking the horizontal movement

  const prevSlide = () => {
    if (translateX < 0) setTranslateX(translateX + 50) // Move right by 50%
  }

  const nextSlide = () => {
    // The conditional checks if 2 items are currently displayed.
    // If true, it slides by 50%. If false, it slides by 100% to show the next 3 items.
    if (translateX > -50) {
      setTranslateX(translateX - 50) // Move left by 50%
    } else if (translateX > -150) {
      setTranslateX(translateX - 100) // Move left by 100%
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Add transition for smooth sliding */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${translateX}%)`, width: '500%' }}
      >
        {offersData.map((offer, index) => (
          <div key={index} className="max-w-[500px] w-1/5">
            <OfferComponent
              text={offer.text}
              image={imageMap[offer.image] || offre1HomepageSalad}
              buttonText={offer.buttonText}
              link={offer.link}
              hexColor={offer.hexColor}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        disabled={translateX === 0}
      >
        &#x3C;&#x3C;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        disabled={translateX <= -150}
      >
        &#x3E;&#x3E;
      </button>
    </div>
  )
}
export default OffersSectionComponent

interface OfferProps {
  text: string
  image: StaticImageData
  buttonText: string
  link: string
  hexColor?: string
}
const OfferComponent: FC<OfferProps> = ({
  text,
  image,
  link,
  buttonText,
  hexColor,
}) => {
  // console.log(hexColor)
  return (
    <Link
      style={{
        backgroundColor: `${hexColor ? ` ${hexColor} ` : ' #f9f9f9 '}`,
      }}
      className={`mx-3 max-w-[500px] border border-[rgb(226, 226, 226)] grid grid-cols-3 min-h-[140px] rounded-2xl overflow-clip`}
      href={link}
    >
      <div className="col-span-2 h-full flex justify-between flex-col p-5">
        <p className="text-lg font-semibold">{text}</p>
        <p className="text-sm font-medium px-2 py-1 bg-white rounded-full">
          {limitCharacters(buttonText, 30)} →
        </p>
      </div>
      <Image className="" src={image} alt={text} />
    </Link>
  )
}
