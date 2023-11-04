//External Dependencies
import { Container, Badge, Text, Tooltip, Image, Button } from "@jds/core";
// import Image from "next/image";
import React, { useState, useEffect } from "react";
// Internal Dependencies
import BlogCard from "@/components/Blogs/BlogCard";

import styles from "@/styles/Blogs/BlogPost.module.scss";
import BlogsCorner from "@/components/Blogs/BlogsCorner";
import HeroSection from "@/components/Home/HeroSection";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";
// import overlayStyles from "../../styles/OverLay.module.scss";

const BlogPost = (props) => {
  //   const { blog, blogs, showModal, setShowModal } = props;
  //   const [isApp, setIsApp] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };
  const shareOnWhatsApp = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://web.whatsapp.com/send?text=${url}`, "_blank");
  };
  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${url}`, "_blank");
  };
  const copyUrl = () => {
    // let link = window.location.href;
    // link.select();

    // Hide the tooltip after a short delay (e.g., 1500ms)
    var dummy = document.createElement("input"),
      text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 1500);
  };

  const blogs = [
    {
      img: "/images/Blogs/blogImg.svg",
      title:
        "Step-by-Step Guide: Choosing Insurances for Instant Health Policies with Max Coverage",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
    },
    {
      img: "/images/Blogs/blogImg.svg",
      title:
        "Step-by-Step Guide: Choosing Insurances for Instant Health Policies with Max Coverage",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
    },
    {
      img: "/images/Blogs/blogImg.svg",
      title:
        "Step-by-Step Guide: Choosing Insurances for Instant Health Policies with Max Coverage",
      description:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
    },
  ];


  const blogData=[
    {
      step:"Step 1: Browse Products and Select Your Desired Item",
      stepContent:"Begin by browsing through the range of products available at the partner store. Choose the consumer durable item that you wish to purchase, whether it&#39;s a smartphone, TV, or any other product that catches your interest"
    },
    {
      step:"Step 2: Approach the Store Representative/Billing Counter",
      stepContent:"Locate a store representative or approach the billing counter and express your interest in purchasing the selected item through a consumer durable loan. Inform them that you would like to choose Jio Finance as your financing option. The representative will guide you through the necessary steps to proceed with Jio Finance."
    },
    
    {
      step:"Step 3: Provide Required Information ",
      stepContent:" The store representative will request certain information to initiate the loan application process. Provide them with your mobile number, PAN number, and Aadhaar card number. This information will be used to initiate the digital loan disbursal process with Jio Finance. Benefits of choosing Jio Finance, include instant loan disbursal and the no cost EMI option. Jio Finance ensures a hassle-free and quick loan approval process, allowing you to make your purchase immediately without any interest charges."
    },
    
    {
      step:" Step 5: Complete the Loan Application",
      stepContent:"The store representative will guide you through the loan application process. This typically involves filling out a simple application form digitally, where you provide your personal details and select the desired loan repayment tenure."
    },
    
    {
      step:"Step 6: Await Loan Approval and Disbursal",
      stepContent:"Once you have completed the loan application, wait for Jio Finance to process your request. The loan approval and disbursal are typically instant, ensuring a seamless and efficient experience. The loan amount will be disbursed digitally to the store, allowing you to complete your purchase without delay. "
    },
    
    {
      step:"  Step 7: Complete Your Purchase and Enjoy No Cost EMI:",
      stepContent:" With the loan disbursed to the store directly, you can take your purchase with you."
    },
  ]

  


  return (
    <>
      <Container className={styles.blogPost}>
        <Container className={styles.blogPostBody}>
          <Container className={styles.content}>
            <Container className={styles.headingSection}>
              <Text appearance="heading-l" className={styles.title}>
                Jio Insurance Durable Loan:
              </Text>
              <Text appearance="heading-l" className={styles.title}>
                Quick Approval Process
              </Text>
            </Container>
            <Container className={styles.dateAndBadges}>
              <Text className={styles.date} appearance="heading-xs">
                July 18,2023
              </Text>
              <Container className={styles.badges}>
                <Badge label="Insurances" className={styles.badge} />
                <Badge label="Health" className={styles.badge} />
              </Container>
            </Container>
            <Image
              src="/images/Blogs/blogImg.svg"
              alt="blogPostImg"
              aspectRatio="16:9"
              width={300}
              height={300}
              className={styles.blogPostImg}
            />
            <Container className={styles.blogContent}>
            <Container className={styles.blogHeading}>
            <Text appearance="body-m">
              When visiting a insurance store to buy a policy, the right option
              can make your experience more convenient. Jio Insurance offers
              instant health and automobile policies at your fingertips.
            </Text>
            <Text appearance="body-m">
              In this step-by-step guide, we will walk you through the process
              of selecting and buying insurances that make your life easier.
            </Text>
            </Container>
            <Container>
              {
                blogData.map((item,index)=>(
                  <Container style={{margin:"2rem 0rem"}} key={index}>
                   <Text appearance="body-m-bold" style={{margin:"1rem 0rem"}}>{item.step}</Text>
                   <Text appearance="body-m">{item.stepContent}</Text>
                   </Container>
                ))
              }
            </Container>
            </Container>
          </Container>
          <Container className={styles.dateAndSocialMedia}>
            <Container
              className={styles.shareinSocialMedia}
              style={{ position: "relative" }}
            >
              <Text appearance="body-m">Share</Text>
              <Image
                src="/images/Blogs/faceBook.svg"
                className={styles.socialMediaIcon}
                alt="facebook"
                width={32}
                height={32}
                onClick={shareOnFacebook}
              />
              <Image
                src="/images/Blogs/whatsApp.svg"
                className={styles.socialMediaIcon}
                alt="whatsapp"
                width={32}
                height={32}
                onClick={shareOnWhatsApp}
              />
              <Image
                src="/images/Blogs/twitter.svg"
                className={styles.socialMediaIcon}
                alt="twitter"
                width={32}
                height={32}
                onClick={shareOnTwitter}
              />
              {tooltipVisible && (
                <div
                  className={styles.toolTip}
                  style={{
                    position: "absolute",
                    top: "-30px",
                    right: "-10px",
                  }}
                >
                  Copied
                </div>
              )}
              <Image
                src="/images/Blogs/copy.svg"
                className={styles.socialMediaIcon}
                alt="copy"
                width={32}
                height={32}
                onClick={copyUrl}
              />
            </Container>
          </Container>
        </Container>

        <Container className={styles.readMoreContainer}>
          <Text className={styles.readMoreText} appearance="heading-m">
            You May Also Like
          </Text>

          <Container className={styles.blogs}>
            {blogs.map((blog, index) => (
              <BlogCard key={String(index)} blog={blog} />
            ))}
          </Container>

          {/* <Container className={styles.readMoreCards}>
            {blogs
              ?.filter(
                (item) => item?.attributes?.slug !== blog?.attributes?.slug
              )
              ?.map((blog, index) => (
                <BlogCard key={String(index)} blog={blog} />
              ))}
          </Container> */}
        </Container>
      </Container>
      <Container className={styles.trendingPoliciesContainer}>
        <Text className={styles.text} appearance="heading-s">
          Trending Policies
        </Text>
        <HeroSection />
      </Container>
    </>
  );
};

export default BlogPost;

// function LatestCard() {
//   return (
//     <Container className={styles.latestCard}>
//       <Text className={styles.latestCardTitle}>
//         Smart Strategies for Paying Off Your Loans Easer & Faster
//       </Text>
//       <Container className={styles.blogInfo}>
//         <Text className={`j-text-body-xxs ${styles.author}`}>
//           by Joanna Wellick
//         </Text>
//         <Text className={`j-text-body-xxs ${styles.duration}`}>
//           {" "}
//           2 minute read
//         </Text>
//       </Container>
//     </Container>
//   );
// }
// export async function getStaticPaths() {
//   const blogsRes = await fetchPageContent("/blogs", { fields: ["slug"] });

//   return {
//     paths: blogsRes.data.map((blog) => ({
//       params: {
//         slug: blog.attributes.slug,
//       },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const BlogRes = await fetchPageContent("/blogs", {
//     filters: { slug: params.slug },
//     populate: "cover",
//   });

//   const AllBlogs = await fetchPageContent("/blogs", {
//     populate: "cover",
//   });

//   return {
//     props: {
//       blog: BlogRes.data[0],
//       blogs: AllBlogs.data,
//     },
//   };
// }
