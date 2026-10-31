import React from "react";
import Link from "next/link";
import styles from "../../styles/Blogs.module.scss";
import BlogImage from "./BlogImage";

const BlogCard = ({ post }) => (
  <Link href={`/blogs/${post.slug}`} className={styles["blog-card"]}>
    <div className={styles["blog-thumb"]}>
      <BlogImage post={post} />
    </div>
    <div className={styles["blog-body"]}>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span className={styles["blog-readmore"]}>
        Read more{" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </div>
  </Link>
);

export default BlogCard;
