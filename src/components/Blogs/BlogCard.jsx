// External Dependencies
import { Container, Text, Image, Button, Link } from "@jds/core";

// Internal Dependencies
import styles from "@/styles/Home/Blogs.module.scss";

const BlogCard = (props) => {
  // const { blogTitle, blogContent, blogDescription, slug } = props;
  const {blog}=props


  return (
    <Container className={styles.blogCard}>
      <Container className={styles.blogCardImg}>
        <Image
          src={blog.img}
          alt="blogImg"
          aspectRatio="16:9"
        />
      </Container>

      <Container className={styles.blogCardText}>
        <Text appearance="body-m-bold" className={styles.blogCardTitle}>
         {/* {blog?.attributes?.title} */}
          {blog.title}
        </Text>
        <Text appearance="body-s" className={styles.blogCardDesc}>
         {/* {blog?.attributes?.blogContent} */}
           {blog.description}
        </Text>
        <Link
          className={styles.blogCardBtn}
        //   href={`/blogs/${blog?.attributes?.slug}`}
          href="/blogs/1"
        //   onClick={function noRefCheck() {}}
          title="Continue reading"
        />
      </Container>
    </Container>
  );
};

export default BlogCard;
