import { Hero } from "@/components/KKN/TentangKami/Hero";
import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/tentang-kami?populate=*`
    );
    const about = response.data;
    return about;
  } catch (error) {
    return error;
  }
};

export default async function KKNTentangKamiPage() {
  const about = await getData();

  return (
    <div className="relative h-screen">
      <Hero
        title={about.data.attributes.title}
        subtitle={about.data.attributes.subtitle}
        image={about.data.attributes.image.data.attributes.url}
      />
    </div>
  );
}
