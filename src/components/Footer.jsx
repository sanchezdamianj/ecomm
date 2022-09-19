import React from 'react'

const Footer = () => {
  return (
    <footer className="container  bg-gray-100 mx-auto py-6 border-t border-gray-500 h-full my-6">
    <div className="container flex px-3 py-8" id='footer'>
      <div className="w-full mx-auto flex flex-wrap">
        <div className="flex w-full lg:w-1/2 ">
          <div className="px-3 md:px-0">
            <h3 className="font-bold text-md text-gray-400">About</h3>
            <p className="py-4 text-xs font-bold">
            <span>Copyright DJS - https://github.com/sanchezdamianj/ecomm</span> 
            </p>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
          <div className="px-3 md:px-0">
            <h3 className="font-bold text-gray-400 text-md">Social</h3>
            <ul className="list-reset items-center pt-3">
              <li>
                <a className="inline-block no-underline hover:text-black hover:underline py-1 text-xs font-bold" href='https://www.linkedin.com/in/damianjaviersanchez/'>
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