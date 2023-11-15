import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

export interface BreadCrumbsProps {
  breadcrumbs: Array<{
    title: string
    href: string
  }>
}

export const BreadCrumbs = (props: BreadCrumbsProps) => {
  return (
    <div>
      <nav className="sm:hidden">
        <a
          href={props.breadcrumbs[props.breadcrumbs.length - 2].href}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <ChevronLeftIcon className="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400" />
          Back
        </a>
      </nav>
      <nav className="hidden sm:flex">
        <ol role="list" className="flex items-center space-x-2">
          {
            props.breadcrumbs.map((item, index) => {
              if (index === 0) {
                return (
                  <li key={item.title}>
                    <div className="flex">
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        {item.title}
                      </Link>
                    </div>
                  </li>
                )
              }

              return (
                <li key={item.title}>
                  <div className="flex items-center">
                    <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-400" />
                    <Link
                      href={item.href}
                      className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                      {...(index === props.breadcrumbs.length - 1 && {
                        "aria-current": "page",
                      })}
                    >
                      {item.title}
                    </Link>
                  </div>
                </li>
              )
            })
          }
        </ol>
      </nav>
    </div>
  )
}