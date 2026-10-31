import React from "react";
import styles from "../../styles/BlogMedia.module.scss";

// Renders a post's image; the detail page hero can use a larger `heroImage`.
const BlogImage = ({ post, variant = "card", className = "" }) => {
  const src = variant === "hero" && post.heroImage ? post.heroImage : post.image;
  return (
    <div className={`${styles["media"]} ${className}`} style={{ background: post.bg || "#eef0fe" }}>
      <img
        src={src}
        alt={post.title}
        loading={variant === "hero" ? "eager" : "lazy"}
        className={post.fit === "contain" ? styles["fit-contain"] : undefined}
      />
    </div>
  );
};

export default BlogImage;
