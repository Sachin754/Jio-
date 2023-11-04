// External Dependencies
import { Container, Text, Image, Button } from "@jds/core";
// Internal Dependencies
import BlogCard from "@/components/Blogs/BlogCard";
import styles from "@/styles/Blogs/BlogsCorner.module.scss";

const BlogsCorner = (props) => {
  // const { blogs } = props;
  // const sortedBlogs =blogs.sort((a, b) => parseInt(a.blogCategory) - parseInt(b.blogCategory));
  // console.log(sortedBlogs, "sorted");
  const blogs = [
    {
      img: "/images/Blogs/blogImg.svg",
      title: "Step-by-Step Guide: Choosing Insurances for Instant Health Policies with Max Coverage",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
    },
    {
      img: "/images/Blogs/blogImg.svg",
      title: "Step-by-Step Guide: Choosing Insurances for Instant Health Policies with Max Coverage",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
    },
    {
      img: "/images/Blogs/blogImg.svg",
      title: "Step-by-Step Guide: Choosing Insurances for Instant Health Policies with Max Coverage",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
    },
  ];
  
  return (
    <Container className={styles.blogsCorner}>
      <Container className={styles.sectionHeading}>
        <Text className={styles.subTitle} appearance="body-s-bold">
          Resource Hub
        </Text>
        <Text className={styles.title} appearance="heading-xs">
          Blog Article
        </Text>
      </Container>

      <Container className={styles.blogs}>
        {blogs.map((blog, index) => (
          <BlogCard key={String(index)} blog={blog} />
        ))}
      </Container>
      <Button
              size="small"
              title="Read more articles"
              className={styles.articlesBtn}
            />
    </Container>
  );
};

export default BlogsCorner;
