import React from "react";
import BlogCard from "../ui/blogCard";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";


interface BlogPost {
  title: string;
  slug: {
    current: string;
  };
  description: string;
  image: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
}

async function BlogSectionOne() {

  const query = `
    *[_type == "blog"] {
      title,
      slug,
      description,
      image
    }
  `;
  const blogPosts = await client.fetch<BlogPost[]>(query, {}, { cache: 'no-store' });

  return (
    <section>
      <div className="max-w-screen-lg mx-auto py-10 px-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-x-8 gap-y-5 justify-center">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug.current}
              title={post.title}
              description={post.description}
              image={urlFor(post.image).url()}
              slug={post.slug.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSectionOne;
