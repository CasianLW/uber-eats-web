import Image from 'next/image'
import CategoriesSectionComponent from './components/homepage/categories-section-component'
import OffersSectionComponent from './components/homepage/offersComponent'
import ListeCategoriesProduitsComponent from './components/homepage/liste-categories-produits'

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-12">
        <CategoriesSectionComponent />
        <OffersSectionComponent />

        <p>Contenu de la page</p>
        <section className="grid grid-cols-12 w-full">
          <div className="col-span-3 bg-gray-200 ">filtres</div>
          <div className="col-span-9">
            <ListeCategoriesProduitsComponent />
          </div>
        </section>
      </main>
    </div>
  )
}
