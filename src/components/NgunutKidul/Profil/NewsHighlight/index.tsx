import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/NgunutKidul/Profil/Button"

interface Props {
  data: Array<{
    title: string
    image: {
      url: string
    }
    datePublished: string
    description: string
    id: string
    slug: string
  }>
}

export const NewsHighlight = ({ data }: Props) => {
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Link href="/ngunut-kidul/berita/halaman/1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Berita Terbaru
            </h2>
          </Link>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Seputar kegiatan dan perkembangan dari Desa Bambangin
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {
            data.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Image
                    src={post.image.url}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={`/ngunut-kidul/berita/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))
          }
        </div>
        <div className="mt-5 mx-auto flex justify-center">
          <Link href="/ngunut-kidul/berita/halaman/1">
            <Button>
              Lihat Semua Berita
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}