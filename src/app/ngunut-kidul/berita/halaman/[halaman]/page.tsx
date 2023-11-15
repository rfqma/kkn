export const dynamic = 'force-dynamic'

import { NewsList } from "@/components/NgunutKidul/Berita/NewsList"
import { BreadCrumbs } from "@/components/UI/Breadcrumbs"
import { Pagination } from "@/components/UI/Pagination"
import axios from "axios"

const getData = async (page: any) => {
  try {
    const response = await axios.get(`${process.env.API_URL}/articles?page=${page}`)
    const articles = response.data
    return articles
  } catch (error) {
    return error
  }
}

const Page = async ({ params }: any) => {
  const { halaman } = params
  const articles = await getData(parseInt(halaman))

  return (
    <main>
      <div className="py-16 max-w-3xl mx-auto text-base leading-7 text-gray-700">
        <BreadCrumbs
          breadcrumbs={[
            {
              title: "Beranda",
              href: "/ngunut-kidul",
            },
            {
              title: "Berita",
              href: `/ngunut-kidul/berita/halaman/${parseInt(halaman)}`,
            },
          ]}
        />

        <NewsList data={articles.data} />

        <div className="pt-6">
          <Pagination
            totalPage={articles.pagination.totalPages}
            currentPage={articles.pagination.currentPage}
            limit={articles.pagination.limit}
            hasPrevious={articles.pagination.hasPreviousPage}
            hasNext={articles.pagination.hasNextPage}
            totalData={articles.pagination.totalData}
          />
        </div>
      </div>
    </main>
  )
}

export default Page