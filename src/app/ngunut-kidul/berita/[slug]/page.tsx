import { Content } from "@/components/Layout/Content"
import axios from "axios"

const getData = async (slug: string) => {
  try {
    const response = await axios.get(`${process.env.API_URL}/articles/${slug}`)
    const article = response.data
    return article
  } catch (error) {
    return error
  }
}

const Page = async ({ params }: any) => {
  const { slug } = params
  const article = await getData(slug)

  return (
    <main>
      <Content
        article={{
          title: article.title,
          image: article.image.url,
          date: article.createdAt,
          content: article.content,
          author: {
            name: article.author.name,
            image: article.author.picture.url
          }
        }}
        breadcrumbs={[
          {
            title: "Beranda",
            href: "/ngunut-kidul",
          },
          {
            title: "Berita",
            href: "/ngunut-kidul/berita/halaman/1",
          },
          {
            title: article.title,
            href: `/ngunut-kidul/berita/${article.slug}`,
          },
        ]}
      />
    </main>
  )
}

export default Page