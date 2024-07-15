import { Content } from "@/components/Layout/Content";
import axios from "axios";
import { NewsHighlight } from "@/components/NgunutKidul/Profil/NewsHighlight";

const getData = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/ngunut-kidul-profil?populate=*`
    );
    const profil = response.data;
    return profil;
  } catch (error) {
    return error;
  }
};

const getHighlight = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/article-highlight?populate=articles.image`
    );
    const highlight = response.data;
    return highlight;
  } catch (error) {
    return error;
  }
};

export default async function NgunutKidulProfilPage() {
  const profil = await getData();
  const highlight = await getHighlight();

  return (
    <>
      <Content
        article={{
          title: profil.data.attributes.title,
          image: profil.data.attributes.image.data.attributes.url,
          content: profil.data.attributes.content,
        }}
        breadcrumbs={[
          {
            title: "Beranda",
            href: "/ngunut-kidul",
          },
          {
            title: "Profil Dusun",
            href: "/ngunut-kidul/profil",
          },
        ]}
      />
      <NewsHighlight data={highlight.data.attributes.articles.data} />
    </>
  );
}
