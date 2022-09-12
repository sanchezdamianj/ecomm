import React from 'react'
import {Link} from 'react-router-dom'

const ItemGridNavContainer = ({productType}) => {
 
  return (
    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3 text-xs font-bold">
      <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-xl ">
        {productType}
      </div>
      <div className="flex items-center" id="store-nav-content">
        <div className="pl-3 inline-block no-underline hover:text-black">
        <svg
            className="fill-current hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            color="currentColor"
          >
            <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
          </svg>
        </div>
        <div className="pl-3 inline-block no-underline hover:text-black">
       <Link to= {`/items/search/${'Motos'}`} >
          Motorcycles 
        </Link>
        </div>
        <div className="pl-3 inline-block no-underline hover:text-black">
        <Link to= {`/items/search/${'Accesorios de moto'}`} >
         Accesories
         </Link>
        </div>
        <div className="pl-3 inline-block no-underline hover:text-black">
        <Link to= {`/items/search/${'Cubiertas'}`} >
          Tyres
        </Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default ItemGridNavContainer