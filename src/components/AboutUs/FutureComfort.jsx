// External Dependencies
import { Container, Text, Image, Button, Heading } from "@jds/core";

// Internal Dependencies
import styles from "@/styles/AboutUs/FutureComfort.module.scss";

const FutureComfort = (props) => {
  const features = [
    {
      id: 1,
      title: "Curated Selection",
      description:
        "Navigating the world of insurance can be overwhelming. That's why we've carefully selected a range of insurance products from top-tier providers.",
      img: "/images/AboutUs/ticketstatus.svg",
    },
    {
      id: 2,
      title: "Simplicity and Transparency",
      description:
        "We're committed to demystifying jargons and complexities. Our transparency to information make it easy for you to understand.",
      img: "/images/AboutUs/rupeecoin.svg",
    },
    {
      id: 3,
      title: "Tailored for You",
      description:
        "Your insurance needs are as unique as you are. Customise and compare policies and find the perfect coverage that aligns with your requirements.",
      img: "/images/AboutUs/contacts.svg",
    },
    {
      id: 4,
      title: "Expert Guidance",
      description:
        "Whether you're a first-time buyer or looking to switch policies, we're here to answer your questions and provide expert guidance.",
      img: "/images/AboutUs/verified.svg",
    },
    {
        id: 5,
        title: "Trust and Security",
        description:
          "Your trust is paramount to us. We prioritize your safety with a secure online environment to explore and purchase insurance.",
        img: "/images/AboutUs/verified.svg",
      }
  ];
  return (
    <>
      <section className={styles.featuresSection}>
        <Container className={styles.featuresContent}>
          <Text className={styles.featuresText}>
            protection meets convenience
          </Text>
          <Text className={styles.featuresTitle}>
            Catering for your relaxed future
          </Text>
        </Container>

        <Container className={styles.featuresContainer}>
          <Container className={styles.featureImg}>
            <Image src="/images/AboutUs/futurecomfort.svg" alt="feature img" />
          </Container>
          <Container className={styles.features}>
            {features.map((feature, index) => (
              <Container key={feature.id} className={styles.feature}>
                <Container className={styles.featureImg}>
                  <Image src={feature.img} alt="feature img" aspectRatio="round" />
                </Container>
                <Container className={styles.featureText}>
                  <Text
                    appearance="body-m-bold"
                    className={styles.featureTitle}
                  >
                    {feature.title}
                  </Text>
                  <Text
                    appearance="body-xs"
                    className={styles.featureDescription}
                  >
                    {feature.description}
                  </Text>
                </Container>
              </Container>
            ))}
          </Container>
        </Container>
      </section>
    </>
  );
};

export default FutureComfort;
