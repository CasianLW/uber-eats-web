import {
  UberLogo,
  bakeryHomepageCategory,
  convenienceHomepageCategory,
  dealsHomepageCategory,
  groceryHomepageCategory,
  panierIcon,
  pinAdresse,
  searchIcon,
} from '@/app/assets'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

const CategoriesSectionComponent: FC = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-4">
      <CategorieComponent name={'Offres'} image={dealsHomepageCategory} />
      <CategorieComponent name={'Courses'} image={groceryHomepageCategory} />
      <CategorieComponent
        name={'Epicerie'}
        image={convenienceHomepageCategory}
      />
      <CategorieComponent name={'Boulangerie'} image={bakeryHomepageCategory} />
      <CategorieComponent name={'Offres'} image={dealsHomepageCategory} />
      <CategorieComponent name={'Courses'} image={groceryHomepageCategory} />
      <CategorieComponent
        name={'Epicerie'}
        image={convenienceHomepageCategory}
      />
      <CategorieComponent name={'Boulangerie'} image={bakeryHomepageCategory} />
      <CategorieComponent name={'Offres'} image={dealsHomepageCategory} />
      <CategorieComponent name={'Courses'} image={groceryHomepageCategory} />
      <CategorieComponent
        name={'Epicerie'}
        image={convenienceHomepageCategory}
      />
      <CategorieComponent name={'Offres'} image={dealsHomepageCategory} />
      <CategorieComponent name={'Boulangerie'} image={bakeryHomepageCategory} />
      <CategorieComponent name={'Courses'} image={groceryHomepageCategory} />
    </div>
  )
}

export default CategoriesSectionComponent

interface CategorieProps {
  name: string
  image: StaticImageData
}
const CategorieComponent: FC<CategorieProps> = ({ name, image }) => {
  return (
    <div className="text-center mr-4 last:mr-0">
      <Image
        className="rounded-full p-2 min-w-[80px] min-h-[80px] hover:bg-gray-200 mx-auto"
        src={image}
        alt={name}
      />

      <p className="text-xs font-semibold">{name}</p>
    </div>
  )
}
