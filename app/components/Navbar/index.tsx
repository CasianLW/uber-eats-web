import { UberLogo, panierIcon, pinAdresse, searchIcon } from '@/app/assets'
import Image from 'next/image'
import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <header className=" lateral-space">
      <div className="items-center flex text-white h-[60px] justify-between gap-4 mt-4">
        <div className="flex flex-col gap-1 ">
          <div className="rounded h-[3px] w-5 bg-black"></div>
          <div className="rounded h-[3px] w-5 bg-black"></div>
          <div className="rounded h-[3px] w-5 bg-black"></div>
        </div>
        <Image
          className="max-w-[146px] max-h-[24px]"
          width={146}
          height={24}
          src={UberLogo}
          alt={'Uber logo'}
        ></Image>

        <div className="w-full flex gap-3">
          <div className="text-black font-medium rounded-full bg-uber-gray-200 flex h-fit w-fit min-w-[200px] p-1">
            <p className=" whitespace-nowrap rounded-full self-center bg-white  py-2 px-4">
              Livraison
            </p>{' '}
            <p className=" whitespace-nowrap rounded-full self-center  py-2 px-4">
              A emporter
            </p>
          </div>
          <div className="text-black font-medium rounded-full bg-uber-gray-200 flex h-fit w-fit min-w-[250px] p-1 px-3">
            <Image src={pinAdresse} alt={'pin'}></Image>
            <p className=" whitespace-nowrap rounded-full self-center  py-2 px-4">
              6 Rue Yves Toudic - Maintenant
            </p>
          </div>
        </div>
        <div className="text-black font-medium rounded-full bg-uber-gray-200 flex h-fit w-full p-1 px-3 items-center ">
          <Image src={pinAdresse} alt={'search'}></Image>
          <p className=" whitespace-nowrap rounded-full self-center  py-2 px-4">
            Rechercher
          </p>
        </div>
        <button className="flex rounded-full text-white bg-black p-1 px-3">
          <Image
            className="self-center"
            src={panierIcon}
            alt={'search'}
          ></Image>
          <p className=" whitespace-nowrap font-medium py-2 px-4">0 paniers</p>
        </button>
      </div>
    </header>
  )
}

export default Navbar
