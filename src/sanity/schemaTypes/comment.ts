import { defineField, defineType } from "sanity";

export const comment = defineType({
    name:"comment",
    type:"document",
    title:"Comment",
    fields: [
        defineField(
            {
                name:'commenterName',
                title: 'Commenter Name',
                type: 'string'
            }
        ),
        defineField(
            {
                name:'comment',
                title: 'Comment',
                type: 'text'
            }
        ),
        defineField(
            {
                name:'post',
                title: 'Post',
                type: 'reference',
                to: [{type: "blog"}]
            }
        )
    ]
})