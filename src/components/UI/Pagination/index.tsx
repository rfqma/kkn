import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import cx from 'clsx'

interface Props {
  totalPage: number
  totalData: number
  limit: number
  currentPage: number
  hasPrevious: boolean
  hasNext: boolean
}

export const Pagination = (props: Props) => {
  const generatePaginationArray = (
    currentPage: number,
    totalPages: number,
    maxVisiblePages: number,
  ): (number | string)[] => {
    const paginationArray: (number | string)[] = []

    // Add first page
    paginationArray.push(1)

    // Add dots if necessary
    if (currentPage - maxVisiblePages > 2) {
      paginationArray.push("...")
    }

    // Add visible pages
    const start = Math.max(2, currentPage - maxVisiblePages)
    const end = Math.min(totalPages - 1, currentPage + maxVisiblePages)
    for (let i = start; i <= end; i++) {
      paginationArray.push(i)
    }

    // Add dots if necessary
    if (currentPage + maxVisiblePages < totalPages - 1) {
      paginationArray.push("...")
    }

    // Add last page
    if (totalPages !== 1) {
      paginationArray.push(totalPages)
    }

    return paginationArray
  }

  // Example usage
  const currentPage = props.currentPage
  const totalPages = props.totalPage
  const maxVisiblePages = 2
  const pagination = generatePaginationArray(
    currentPage,
    totalPages,
    maxVisiblePages,
  )

  return (
    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
      <div
        className={cx(
          'flex flex-1 sm:hidden',
          `${props.currentPage === 1 ? 'justify-end' : 'justify-between'}`
        )}
      >
        {
          props.currentPage > 1 ?
            <a
              href={`/ngunut-kidul/berita/halaman/${props.currentPage - 1}`}
              className={cx(
                'relative inline-flex items-center px-4 py-2 text-sm font-medium',
                'text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
              )}
            >
              Previous
            </a>
            :
            null
        }
        {
          props.hasNext ?
            <a
              href={`/ngunut-kidul/berita/halaman/${props.currentPage + 1}`}
              className={cx(
                'relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium',
                'text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
              )}
            >
              Next
            </a>
            :
            null
        }
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {props.limit * props.currentPage - props.limit + 1}
            </span>
            {" "}to{" "}
            <span className="font-medium">
              {
                !props.hasNext && props.currentPage * props.limit !== props.totalData ?
                  props.totalData
                  :
                  props.currentPage * props.limit
              }
            </span>
            {" "}of{" "}
            <span className="font-medium">{props.totalData}</span>
            {" "}results
          </p>
        </div>
        <div>
          <nav className="inline-flex -space-x-px rounded-md shadow-sm isolate">
            <a
              href={`/ngunut-kidul/berita/halaman/${props.currentPage - 1}`}
              className={cx(
                'relative inline-flex items-center rounded-l-md px-2 py-2',
                'text-gray-400 ring-1 ring-inset ring-gray-300',
                'hover:bg-gray-50 focus:z-20 focus:outline-offset-0',
                `${props.hasPrevious ? '' : 'hidden'}`
              )}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </a>

            {
              pagination.map((page, index) => {
                if (page === "...") {
                  return (
                    <span
                      key={index}
                      className={cx(
                        'relative inline-flex items-center px-4 py-2 text-sm font-semibold',
                        'text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'
                      )}
                    >
                      ...
                    </span>
                  )
                }

                return (
                  <a
                    key={index}
                    href={`/ngunut-kidul/berita/halaman/${page}`}
                    className={cx(
                      page === props.currentPage ?
                        ('relative z-10 inline-flex items-center bg-darkGreen px-4 py-2 text-sm') +
                        ('font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2') +
                        ('focus-visible:outline-offset-2 focus-visible:outline-whiteGreen')
                        :
                        ('relative hidden items-center px-4 py-2 text-sm') +
                        ('font-semibold text-gray-900 ring-1 ring-inset ring-gray-300') +
                        ('hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex')
                    )}
                  >
                    {page}
                  </a>
                )
              })
            }

            <a
              href={`/ngunut-kidul/berita/halaman/${props.currentPage + 1}`}
              className={cx(
                'relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400',
                'ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0',
                `${props.hasNext ? '' : 'hidden'}`
              )}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}