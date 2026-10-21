import React from "react";
import styles from "../../styles/Blogs.module.scss";

const Blogs = () => {
  const blogsData = [
    {
      title: "Why should you choose CPaaS for your business?",
      desc: "Tubelight Communications is a leading CPaaS service provider in India — here's why a single API beats juggling vendors….",
      img: "/images/blog-cpaas.png",
      alt: "Why should you choose CPaaS",
      link: "#",
    },
    {
      title: "How communication platforms contribute to a safer internet",
      desc: "On this Safer Internet Day, let us explore how communication companies are keeping customer conversations secure….",
      img: "/images/blog-safer.png",
      alt: "Safer internet",
      link: "#",
    },
    {
      title: "Cloud Contact Center: the modern way to support customers",
      desc: "Tubelight Communications is a leading Cloud Contact Center platform with multiple channels, AI and analytics built in….",
      img: "/images/blog-ccc.png",
      alt: "Cloud Contact Center",
      link: "#",
    },
  ];

  return (
    <section className={styles["blog-sec"]} id="blog">
      <div className={styles.wrap}>
        <div className={styles["section-head"]}>
          <h2>Blogs &amp; Articles</h2>
        </div>

        <div className={styles["blog-grid"]}>
          {blogsData.map((blog, index) => (
            <a key={index} className={styles["blog-card"]} href={blog.link}>
              <div className={styles["blog-thumb"]}>
                <img src={blog.img} alt={blog.alt} loading="lazy" />
              </div>
              <div className={styles["blog-body"]}>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <span className={styles["blog-readmore"]}>
                  Read more{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles["blog-all"]}>
          <a href="#">You can find all blogs here</a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;