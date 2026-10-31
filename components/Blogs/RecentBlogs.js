import React from "react";
import Link from "next/link";
import styles from "../../styles/BlogDetail.module.scss";
import BlogImage from "./BlogImage";
import { getRecentPosts } from "./blogData";

const RecentBlogs = ({ slug }) => (
  <div className={styles["recent"]}>
    <h3>Read recent blogs</h3>
    <div className={styles["recent-list"]}>
      {getRecentPosts(slug).map((post) => (
        <Link key={post.slug} href={`/blogs/${post.slug}`} className={styles["recent-card"]}>
          <div className={styles["recent-thumb"]}>
            <BlogImage post={post} />
          </div>
          <div className={styles["recent-body"]}>
            <h4>{post.title}</h4>
            <p>{post.excerpt}</p>
            <span className={styles["read-more"]}>
              Read more{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default RecentBlogs;
