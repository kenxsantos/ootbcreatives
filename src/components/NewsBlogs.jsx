import React from "react";
import articles from "../json/articles-blogs.json";
import news from "../json/news.json";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const NewsBlogs = () => {
  const { slug } = useParams();

  const content = slug === "articles-blogs" ? articles : news;

  return (
    <div className="w-4/5 mx-auto mt-12 rounded-xl h-screen flex flex-col gap-4 overflow-auto hide-scrollbar">
      {content.map((item, index) => (
        <motion.div
          key={index}
          className="flex w-full h-36 rounded-xl font-jost text-white text-base bg-gray-500 bg-opacity-60"
        >
          <div className="w-[40%] rounded-l-xl p-6 uppercase">{item.title}</div>
          <div className="w-[60%] rounded-r-xl p-6 text-justify overflow-auto hide-scrollbar">
            {item.content}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default NewsBlogs;
