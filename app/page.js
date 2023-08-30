import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/navbar'
import Filters from './components/filters'
import Products from './components/products'
import Offerzone from './components/offerzone'

export default function Home() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Offerzone></Offerzone>
        <Filters></Filters>
        <div className=" mr-7 ml-7">
          <h1 className=' font-semibold text-[20px]'>Products available for you.!</h1>
        </div>
        <Products></Products>
      </div>
    </>
  )
}
