import React from "react";
import styles from "../../styles/BlogDetail.module.scss";
import BlogImage from "./BlogImage";
import BlogContent from "./BlogContent";
import ShareLinks from "./ShareLinks";
import RecentBlogs from "./RecentBlogs";

const BlogDetail = ({ post }) => {
  const content = post.content || {};
  const intro = content.intro || post.excerpt;

  return (
    <article className={styles["detail-sec"]}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.hero}>
          <BlogImage post={post} variant="hero" />
        </div>

        <div className={styles.layout}>
          <div className={styles.main}>
            <p className={styles.intro}>{intro}</p>

            {content.tags && (
              <ul className={styles.tags}>
                {content.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}

            {post.content && <BlogContent content={post.content} />}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles["sidebar-inner"]}>
              <ShareLinks path={`/blogs/${post.slug}`} title={post.title} />
              <RecentBlogs slug={post.slug} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
