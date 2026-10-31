import React from "react";
import Link from "next/link";
import styles from "../../styles/BlogListing.module.scss";
import { featuredSlug, getPost } from "./blogData";

const FeaturedBlog = () => {
  const post = getPost(featuredSlug);

  return (
    <section className={styles["featured-sec"]}>
      <div className={styles.wrap}>
        <Link href={`/blogs/${post.slug}`} className={styles["featured-visual"]} aria-label={post.title}>
          <img src={post.image} alt={post.title} className={styles["featured-svg"]} />
        </Link>
        <div className={styles["featured-text"]}>
          <span className={styles["featured-label"]}>Featured Blog</span>
          <h1>
            <Link href={`/blogs/${post.slug}`}>
              What is CPaaS?
              <br /> Everything you need to know about CPaaS.
            </Link>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
