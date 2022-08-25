import React from 'react'

const Footer = () => {
  return (
    <footer className="container mx-auto py-6 border-t border-gray-700">
    <div className="container flex px-3 py-8 " id='footer'>
      <div className="w-full mx-auto flex flex-wrap">
        <div className="flex w-full lg:w-1/2 ">
          <div className="px-3 md:px-0">
            <h3 className="font-bold text-gray-900 text-md">About</h3>
            <p className="py-4 text-sm">
            <span>Copyright DJS - https://github.com/sanchezdamianj/ecomm</span> 
            </p>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
          <div className="px-3 md:px-0">
            <h3 className="font-bold text-gray-900">Social</h3>
            <ul className="list-reset items-center pt-3">
              <li>
                <a className="inline-block no-underline hover:text-black hover:underline py-1 text-sm" href='https://www.linkedin.com/in/damianjaviersanchez/'>
                  <span>https://www.linkedin.com/in/damianjaviersanchez/</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer