export const dynamic = "force-dynamic";

import { Hero } from "@/components/NgunutKidul/Home/Hero";
import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/ngunut-kidul-home?populate=*`
    );
    const home = response.data;
    return home;
  } catch (error) {
    return error;
  }
};

export default async function NgunutKidulHomePage() {
  const home = await getData();

  return (
    <div className="relative h-screen">
      <Hero
        title={home.data.attributes.title}
        subtitle={home.data.attributes.subtitle}
        image={home.data.attributes.image.data.attributes.url}
      />
    </div>
  );
}
