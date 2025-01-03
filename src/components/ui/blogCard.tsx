import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

function BlogCard(props: BlogCardProps) {
  return (
    <div className="bg-white w-full rounded-2xl overflow-hidden mx-auto mt-4 shadow-drop-center shadow-inset-center">
      <div>
        <Image
          src={`${props.image}`}
          className="w-full rounded-2xl object-cover brightness-110 h-48"
          width={500}
          height={500}
          alt="blog image"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl text-[#333333] playfairdisplay">
          {props.title}
        </h3>
        <p className="text-[#666666]">{props.description}</p>

        <div className="flex items-center justify-between">
          <Link href={`/blogs/${props.slug}`}>
            <Button className="rounded-full poppins bg-[#FF8F52]">
              Read More
            </Button>
          </Link>
          <div className="bg-pink-100 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              className="fill-pink-600"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
