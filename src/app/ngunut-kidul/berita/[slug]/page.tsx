import { Content } from "@/components/Layout/Content";
import axios from "axios";

const getData = async (slug: string) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/articles?filters[slug]=${slug}&populate=image,author.image`
    );
    const article = response.data;
    return article;
  } catch (error) {
    return error;
  }
};

const Page = async ({ params }: any) => {
  const { slug } = params;
  const article = await getData(slug);
  const finalArticle = article.data[0];

  return (
    <main>
      <Content
        article={{
          title: finalArticle.attributes.title,
          image: finalArticle.attributes.image.data.attributes.url,
          date: finalArticle.attributes.createdAt,
          content: finalArticle.attributes.content,
          author: {
            name: finalArticle.attributes.author.data.attributes.name,
            image:
              finalArticle.attributes.author.data.attributes.image.data
                .attributes.url,
          },
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
            title: finalArticle.attributes.title,
            href: `/ngunut-kidul/berita/${finalArticle.attributes.slug}`,
          },
        ]}
      />
    </main>
  );
};

export default Page;
