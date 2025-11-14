"use client";
import { blogs } from "@/contents/blogs";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "@/utils/animations";

const Blogs = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="py-10"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {blogs.slice(0, 2).map((blog, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <div className="flex items-center gap-x-4 mb-4">
                  <span className="text-accent text-sm">{blog.date}</span>
                  <span className="text-gray-400 text-sm">
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="flex items-center gap-x-2 text-accent"
                >
                  Read More
                  <span className="text-xl">
                    <BsArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;
