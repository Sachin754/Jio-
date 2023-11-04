//External Dependencies
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Text, Image, Button, Icon, Divider } from "@jds/core";
// import overlayStyles from "../../styles/OverLay.module.scss";
// Internal Dependencies
import BlogCard from "@/components/Blogs/BlogCard";
import styles from "@/styles/Blogs/Blogs.module.scss";
// import { fetchPageContent } from "@/lib/api";

const Index = (props) => {
//   const { showModal, setShowModal, blogs } = props;
  const [dropDown, setDropDown] = useState(false);
  const [selectedIndex,setSelectedIndex]=useState(0);
  const [selectedInsuranceType, setSelectedInsuranceType] = useState("");

  const categories = [
    {
      id: 1,
      slug: 1,
      title: "Health and Life Insurance",
    //   icon: "",
    },
    {
      id: 2,
      slug: 2,
      title: "Automobile Insurance",
    //   icon: "",
    },
    {
      id: 3,
      slug: 3,
      title: "Buying Insurance Help",
    //   icon: "",
    },
  ];

  const blogsData = [
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
    <>
      <section className={styles.blogsSection}>
        <Container className={styles.blogsBanner}>
          <Container className={styles.blogsBannerContent}>
            <Text appearance="heading-l" className={styles.blogsBannerTitle}>
              Our Blogs
            </Text>

            {/* Desktop view */}
            {/* <Container className={styles.blogsCategories}>
              {categories.map((category,index) => (
                <Container
                  className={styles.blogsCategory}
                  style={{ cursor: "pointer",border:selectedIndex===index?'3px solid #6d17ce':'none' }}
                  key={category.id}
                  onClick={() => {
                    setSelectedIndex(index)
                    handleBlogsChange(category.title)}}
                >
                  <Container className={styles.imgWrapper}>
                    <Image src={category.icon} alt={category.title} />
                  </Container>
                  <Text className={styles.blogsCategoryTitle}>
                    {category.title}
                  </Text>
                </Container>
              ))}
            </Container> */}
            {/* MobileView */}
            <Container
              className={styles.dropdownAlltopics}
              onClick={() => {
                setDropDown(() => !dropDown);
              }}
            >
              <Text
                appearance="body-s-bold"
                color="white"
                className={styles.topicsText}
              >
                 { selectedInsuranceType || "All topics"}
              </Text>
              <Icon
                className={styles.dropdownIcon}
                ic={dropDown ? "IcChevronUp" : "IcChevronDown"}
                size="l"
              />

              {dropDown && (
                <Container className={styles.dropdownElements}>
                  {categories.map((item, index) => (
                    <Container
                      className={styles.blockContainer}
                      key={index}
                      onClick={() => {
                        setSelectedInsuranceType(item.title);
                        // handleBlogsChange(item.title);
                      }}
                    >
                      <Container className={styles.block}>
                        {/* <Image
                          src={item.icon}
                          width={32}
                          height={32}
                          className={styles.icon}
                          alt="cardIcon"
                        ></Image> */}
                        <Text className={styles.dtitle} appearance="body-s">{item.title}</Text>
                      </Container>
                    </Container>
                  ))}
                </Container>
              )}
            </Container>
          </Container>
        </Container>

        <Container className={styles.blogsCards}>
          {blogsData?.map((blog, index) => (
            <BlogCard key={String(index)}  blog={blog} />
          ))}
        </Container>
      </section>
      {/* {showModal && <div className={overlayStyles.modelOverlay} />} */}
    </>
  );
};

export default Index;

// export async function getServerSideProps(context) {
//   const blogs = await fetchPageContent("/blogs", {
//     populate: {
//       blogsSection: {
//         populate: "*",
//       },
//     },
//   });

//   return {
//     props: {
//       blogs: blogs.data,
//     },
//   };
// }
