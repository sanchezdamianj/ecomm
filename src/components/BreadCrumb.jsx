import React from 'react'

const BreadCrumb = () => {

  return (
    <nav aria-label="Breadcrumb">
    <ol
      className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <li>
        <div className="flex items-center">
          <a href="2" className="mr-2 text-sm font-medium text-gray-900">
            Category 1
          </a>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-5 w-4 text-gray-300"
          >
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>
        </div>
      </li>

      <li>
        <div className="flex items-center">
          <a href="3" className="mr-2 text-sm font-medium text-gray-900">
            Category 2
          </a>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-5 w-4 text-gray-300"
          >
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>
        </div>
      </li>

      <li className="text-sm">
        <a
          href="4"
          aria-current="page"
          className="font-medium text-gray-500 hover:text-gray-600"
        >
          Category 3
        </a>
      </li>
    </ol>
  </nav>

  )
}

export default BreadCrumb