import Image from "next/image";
import { formatDate } from "@/lib/utilities/formatDate";

export const NewsList = (props: any) => {
  return (
    <div className="py-10 sm:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Berita Terbaru
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Seputar kegiatan dan perkembangan dari Dusun Ngunut Kidul
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {props.data.map((post: any) => (
              <article
                key={post.attributes.slug}
                className="relative flex flex-col gap-8 isolate lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    src={post.attributes.image.data.attributes.url}
                    alt={post.attributes.title}
                    height={1200}
                    width={800}
                    className="absolute inset-0 object-cover w-full h-full rounded-2xl bg-gray-50"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center text-xs gap-x-4">
                    <time
                      dateTime={post.attributes.createdAt}
                      className="text-gray-500"
                    >
                      {formatDate(post.attributes.createdAt)}
                    </time>
                  </div>
                  <div className="relative max-w-xl group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={`/ngunut-kidul/berita/${post.attributes.slug}`}>
                        <span className="absolute inset-0" />
                        {post.attributes.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      {post.attributes.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
