import {
  UberLogo,
  bakeryHomepageCategory,
  convenienceHomepageCategory,
  dealsHomepageCategory,
  groceryHomepageCategory,
  offre1HomepageSalad,
  panierIcon,
  pinAdresse,
  productListExample,
  searchIcon,
} from '@/app/assets'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

const ListeCategoriesProduitsComponent: FC = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-4">
      <ProductListComponent name={'Courses'} title="Récemment consultés" />
    </div>
  )
}

export default ListeCategoriesProduitsComponent

interface ProductType {
  title: string
  image: string
  greenMessage: string
  uberOne: boolean
  fraisDeLivraison: number
  rating: number
}

interface CategorieProps {
  title: string
  name: string
}
const ProductListComponent: FC<CategorieProps> = ({ name, title }) => {
  return (
    <div className="mr-4">
      <h3>{title}</h3>

      <ProductComponent
        message="Livraison à 0€ (à partir de 15€)"
        name={'Courses'}
        image={offre1HomepageSalad}
      />
      <p className="text-xs font-semibold">{name}</p>
    </div>
  )
}
interface ProductProps {
  name: string
  image: StaticImageData
  message: string
}
const ProductComponent: FC<ProductType> = ({
  title,
  image,
  greenMessage,
  uberOne,
  fraisDeLivraison,
  rating,
}) => {
  return (
    <div className="text-center mr-4 last:mr-0 rounded-3xl h-2/4 overflow-clip ">
      <div className="grid bg-red-200">
        <Image
          className="stack-item w-full justify-center items-center"
          src={image ?? productListExample}
          width={400}
          height={100}
          alt={title}
        />
        <div className="overflow-clip px-2 mt-6 bg-green-700 rounded-r-full stack-item h-fit w-2/3 text-white text-xs py-1">
          {greenMessage}
        </div>
        <div className="stack-item right-0 ">
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            <svg
              id="heart-svg"
              viewBox="467 392 58 57"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Group"
                fill="none"
                fill-rule="evenodd"
                transform="translate(467 392)"
              >
                <path
                  id="heart"
                  d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                  fill="#ffffff"
                />
                <circle
                  id="main-circ"
                  fill="#E2264D"
                  opacity="0"
                  cx="29.5"
                  cy="29.5"
                  r="1.5"
                />

                <g id="grp7" opacity="0" transform="translate(7 6)">
                  <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                  <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                </g>

                <g id="grp6" opacity="0" transform="translate(0 28)">
                  <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                  <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                </g>

                <g id="grp3" opacity="0" transform="translate(52 28)">
                  <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                  <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                </g>

                <g id="grp2" opacity="0" transform="translate(44 6)">
                  <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                  <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                </g>

                <g id="grp5" opacity="0" transform="translate(14 50)">
                  <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                  <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                </g>

                <g id="grp4" opacity="0" transform="translate(35 50)">
                  <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                  <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                </g>

                <g id="grp1" opacity="0" transform="translate(24)">
                  <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                  <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                </g>
              </g>
            </svg>
          </label>
        </div>
      </div>

      <h4 className="text-base font-semibold">{title}</h4>
      <div>
        <Image src={}
      </div>
    </div>
  )
}
