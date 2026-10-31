import React from "react";
import cardStyles from "../../styles/Blogs.module.scss";
import styles from "../../styles/BlogListing.module.scss";
import BlogCard from "./BlogCard";
import { getListPosts } from "./blogData";

// Reuses the home-page blog card styles (styles/Blogs.module.scss) for the 3-column grid.
const BlogList = () => (
  <section className={`${cardStyles["blog-sec"]} ${styles["list-sec"]}`}>
    <div className={cardStyles.wrap}>
      <h2 className={styles["sr-only"]}>All blogs</h2>
      <div className={`${cardStyles["blog-grid"]} ${styles["list-grid"]}`}>
        {getListPosts().map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  </section>
);

export default BlogList;
