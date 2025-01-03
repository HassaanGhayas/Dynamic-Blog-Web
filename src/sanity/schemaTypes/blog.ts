import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "authorName",
      type: "string",
      title: "Author Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required().max(90),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Blog Image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "object",
          title: "Subheadings With Content",
          fields: [
            {
              name: "subheading",
              type: "string",
            },
            {
              name: "content",
              type: "text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "publishedAt",
      type: "date",
      title: "Published At",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (rule) => rule.required().max(3).error("Max 3 tags allowed"),
    }),
  ],
});
