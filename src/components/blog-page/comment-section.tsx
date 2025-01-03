"use client"
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

interface Comment {
  name: string;
  comment: string;
}

export default function CommentSection() {
  const [allComments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission

    // Check if both fields are filled
    if (name.trim() && comment.trim()) {
      const newCommentData = {
        name,
        comment,
      };

      // Update the local state with the new comment
      const updatedComments = [newCommentData, ...allComments];
      setComments(updatedComments);

      // Save the updated comments to localStorage
      localStorage.setItem("comments", JSON.stringify(updatedComments));

      // Clear the inputs after submission
      setName("");
      setComment("");
    } else {
      // Optionally, show an alert or message if inputs are empty
      return;
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl space-y-4">
      <h1 className="text-2xl playfairdisplay">Comments</h1>
      <form
        className="flex flex-col gap-2 text-sm"
        onSubmit={handleCommentSubmit}
      >
        <input
          type="text"
          className="p-2 bg-[#e6e6e6] w-full outline-none rounded-xl"
          placeholder="Enter Your Name"
          value={name}  // Bind the name input to state
          onChange={(e) => setName(e.target.value)}  // Update state on input change
          maxLength={20}  // Limit the name input to 20 characters
        />
        <input
          type="text"
          className="p-2 bg-[#e6e6e6] w-full outline-none rounded-xl"
          placeholder="Enter Your Comment"
          value={comment}  // Bind the comment input to state
          onChange={(e) => setComment(e.target.value)}  // Update state on input change
        />
        <Button type="submit">Add Comment</Button>
      </form>

      <div className="flex flex-col gap-2">
        {allComments?.map((comment, index) => (
          <div className="bg-[#E6E6FA] p-2 rounded-xl" key={index}>
            <span className="text-xl font-semibold lora text-[#333333] break-words">
              {comment.name}
            </span>
            <p className="poppins text-[#666666] break-words">
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
