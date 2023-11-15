import Image from "next/image"
import { BreadCrumbs, type BreadCrumbsProps } from "@/components/UI/Breadcrumbs"
import { formatDate } from "@/lib/utilities/formatDate"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"

interface Props {
  breadcrumbs: BreadCrumbsProps["breadcrumbs"]
  article: {
    title: string
    image: string
    date?: string
    content: string
    author?: {
      name: string
      image: string
    }
  }
}

export const Content = ({
  breadcrumbs,
  article: { title, image, date, content, author }
}:
  Props
) => {
  return (
    <div className="max-w-3xl px-6 lg:px-0 mx-auto text-base leading-7 text-gray-700 py-16">
      <BreadCrumbs breadcrumbs={breadcrumbs} />

      <div className="pt-4 pb-4">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={630}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[2/1]"
        />
      </div>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h1>

      <div className="flex flex-col pt-5 md:flex-row md:items-center gap-y-3 md:gap-x-3 md:gap-y-0">
        {
          author ?
            <>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={1000}
                    height={1000}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-600 text-md">
                    {author.name}
                  </p>
                </div>
              </div>
              <svg
                viewBox="0 0 2 2"
                className="-ml-0.5 h-0.5 w-0.5 flex-none fill-black hidden md:block"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
            </>
            :
            null
        }

        {
          date ?
            <p className="items-center text-gray-600">
              {formatDate(date)}
            </p>
            :
            null
        }
      </div>

      <hr className="my-3" />

      <div className="prose">
        <Markdown rehypePlugins={[rehypeRaw]}>{content}</Markdown>
      </div>
    </div>
  )
}