import { Hero } from "@/components/KKN/TentangKami/Hero"
import axios from "axios"

const getData = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/kkn-tentang-kami`)
    const about = response.data
    return about
  } catch (error) {
    return error
  }
}

export default async function KKNTentangKamiPage() {
  const about = await getData()

  return (
    <div className="relative h-screen">
      <Hero
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        image={about.hero.image.url}
      />
    </div>
  )
}