import { Hero } from "@/components/NgunutKidul/Home/Hero"
import axios from "axios"

const getData = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/ngunut-kidul-home`)
    const home = response.data
    return home
  } catch (error) {
    return error
  }
}

export default async function NgunutKidulHomePage() {
  const home = await getData()

  return (
    <div className="relative h-screen">
      <Hero
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        image={home.hero.image.url}
      />
    </div>
  )
}