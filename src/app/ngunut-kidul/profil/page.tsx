import { Content } from "@/components/Layout/Content"
import axios from "axios"
import { NewsHighlight } from "@/components/NgunutKidul/Profil/NewsHighlight"

const getData = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/ngunut-kidul-profil`)
    const profil = response.data
    return profil
  } catch (error) {
    return error
  }
}

const getHighlight = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/article-highlight`)
    const highlight = response.data
    return highlight.articles
  } catch (error) {
    return error
  }
}

export default async function NgunutKidulProfilPage() {
  const profil = await getData()
  const highlight = await getHighlight()

  return (
    <>
      <Content
        article={{
          title: profil.title,
          image: profil.image.url,
          content: profil.content
        }}
        breadcrumbs={[
          {
            title: "Beranda",
            href: "/ngunut-kidul",
          },
          {
            title: "Profil Dusun",
            href: "/ngunut-kidul/profil",
          }
        ]}
      />
      <NewsHighlight data={highlight} />
    </>
  )
}