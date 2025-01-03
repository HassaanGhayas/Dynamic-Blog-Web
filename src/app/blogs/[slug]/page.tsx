// app/blog/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import CommentSection from "@/components/blog-page/comment-section";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "blog" && slug.current == $slug][0]`;
  const blog = await client.fetch(query, { slug: params.slug }, {cache: 'no-store'});

  if (!blog) return <div>Blog post not found!</div>;

  return (
    <section>
      <div className="max-w-[800px] m-auto py-10 px-4 flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-5xl playfairdisplay text-[#333333] text-center">
            {blog.title}
          </h1>
          <div className="text-center uppercase text-[#333333] poppins">
            {blog.publishedAt} by {blog.authorName}
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Image
            src={urlFor(blog.image).url()}
            alt="blog image"
            height={500}
            width={500}
            className="w-full object-cover rounded-lg"
            priority
          />
        </div>
        <div className="text-lg lora space-y-4">
          {blog.content.map(
            (
              section: { subheading: string; content: string },
              index: number
            ) => {
              return (
                <div key={index}>
                  <div className="text-2xl text-[#333333] underline">
                    {section.subheading}
                  </div>
                  <div className="text-[#666666]">{section.content}</div>
                </div>
              );
            }
          )}
        </div>
        <CommentSection/>
      </div>
    </section>
  );
}
