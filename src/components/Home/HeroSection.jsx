import React from "react";
import styles from "@/styles/Home/HeroSection.module.scss";
import { Container, Text, Button } from "@jds/core";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IcArrowNext } from "@jds/core-icons";
import Link from "next/link";

const HeroSection = () => {
  const banners = [
    // {
    //   banner: "/images/Home/PlansMobBanner.svg",
    // },
    {
      banner: "/images/Home/PlansMobBanner2.svg",link:"/car",
    },
    {
      banner: "/images/Home/PlansMobBanner3.svg",link:"/health",
    },
    {
      banner: "/images/Home/PlansMobBanner4.svg",link:"/bike",
    },
  ];
  const Webbanners = [
    // {
    //   banner: "/images/Home/PlansWebBanner.svg",
    // },
    {
      banner: "/images/Home/PlansWebBanner2.svg",link:"/car",
    },
    {
      banner: "/images/Home/PlansWebBanner3.svg",link:"/health",
    },
    {
      banner: "/images/Home/PlansWebBanner4.svg",link:"/bike",
    },
  ];
  return (
    <>
      <Container className={styles.carouselSection}>
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
        >
          {banners.map((item, index) => (
            <Link href={item.link} key={index}>
            <Container className={styles.banner}>
              <Image
                src={item.banner}
                width={312}
                height={140}
                className={styles.img}
                alt="banner"
              />
            </Container>
            </Link>
          ))}
        </Carousel>
      </Container>

      <Container className={styles.desktop}>
        <Container className={styles.carouselSectionWeb}>
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
            stopOnHover={true}
            infiniteLoop={true}
          >
            {Webbanners.map((item, index) => (
               <Link href={item.link} key={index}>
              <Container className={styles.banner} >
                <Image
                  src={item.banner}
                  width={312}
                  height={140}
                  alt="banner"
                  className={styles.img}
                />
              </Container>
              </Link>
            ))}
          </Carousel>
        </Container>
      </Container>
    </>
  );
};

export default HeroSection;
