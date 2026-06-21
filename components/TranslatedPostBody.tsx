"use client";
// DIAGNOSTIC MODE
import type { Post } from "@/types/post";

interface TranslatedPostBodyProps {
  post: Post;
  content: string;
}

export default function TranslatedPostBody({ post, content }: TranslatedPostBodyProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-white text-2xl mb-4">DIAGNOSTIC: Article Content</h2>
      <p className="text-white mb-2">Title: {post.title}</p>
      <p className="text-gray-400 mb-4">Description: {post.description}</p>
      <div className="bg-gray-800 p-4 rounded-lg text-sm">
        <pre className="whitespace-pre-wrap">{content.substring(0, 1000)}...</pre>
      </div>
    </div>
  );
}