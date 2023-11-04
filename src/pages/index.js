import { useState } from "react";
import { BottomSheet, Container, Icon, Modal } from "@jds/core";
import FaqsComponent from "@/components/AboutUs/FaqsComponent";
import Careers from "@/components/AboutUs/Careers";
import DownloadApp from "@/components/AboutUs/DownloadApp";
import BlogsCorner from "@/components/Blogs/BlogsCorner";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/Home/HeroSection";
import JioAdvantages from "@/components/Home/JioAdvantages";
import Insurances from "@/components/Home/Insurances";
import Contact from "@/components/Home/Contact";
import Partners from "@/components/Home/Partners";
import FamilyMembers from "@/components/HealthFlow/PreQuote/FamilyMembers";
import styles from "../styles/Overlay.module.scss";

import ConfirmationCard from "@/components/BikeFlow/PreQuote/ConfirmationCard";
import ModalComponent from "@/components/BikeFlow/PreQuote/ModalComponent";

// import styles from '@/styles/Home.module.css'

export default function Home(props) {
  const { isLoading, setIsLoading, vechileType, setVechileType } = props;
  const [insuranceType, setInsuranceType] = useState("Health");
  // console.log(homepageData)
  const [bottomSheet, setBottomSheet] = useState(false);
  const [view, setView] = useState(false);
  const [isHealth, setIsHealth] = useState(false);
  const [isBike, setIsBike] = useState(false);
  const [isConfirmationBS, setIsConfirmationBS] = useState(false);
  const [isConfirmationModal, setIsConfirmationModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(" ");
  const [selectedRtu, setSelectedRtu] = useState(" ");
  const [isCar, setIsCar] = useState(false);

  return (
    <>
      {!view && (
        <>
          <HeroSection />

          <Insurances
            isHealth={isHealth}
            setIsHealth={setIsHealth}
            setView={setView}
            isBike={isBike}
            setIsBike={setIsBike}
            setIsConfirmationBS={setIsConfirmationBS}
            setIsConfirmationModal={setIsConfirmationModal}
            isCar={isCar}
            setIsCar={setIsCar}
            vechileType={vechileType}
            setVechileType={setVechileType}
          />
          <JioAdvantages />
          <BlogsCorner />
          <Testimonials />
          <Partners />
          <FaqsComponent />
          <Contact />
          <Careers />
          <DownloadApp />
        </>
      )}

      {(isHealth || isBike || isCar) && (
        <Container
          className={styles.modelOverlay}
          displayOn="desktop"
        ></Container>
      )}
      {isHealth && (
        <FamilyMembers
          bottomSheet={bottomSheet}
          setBottomSheet={setBottomSheet}
          setView={setView}
          setIsHealth={setIsHealth}
        />
      )}
      <Container displayOn="tablet">
        <BottomSheet
          close={!isConfirmationBS}
          onClose={() => setIsConfirmationBS(false)}
          onRequestClose={() => setIsConfirmationBS(false)}
        >
          <Container>
            <ConfirmationCard
              setView={setView}
              setIsBike={setIsBike}
              isBike={isBike}
              isCar={isCar}
              setIsCar={setIsCar}
              setIsConfirmationBS={setIsConfirmationBS}
              vechileType={vechileType}
              setVechileType={setVechileType}
              setIsConfirmationModal={setIsConfirmationModal}
            />
          </Container>
        </BottomSheet>
      </Container>
      <Container displayOn="desktop">
        <Modal
          kind="informational"
          onCloseCallback={() => setIsConfirmationModal(false)}
          onRequestClose={() => isConfirmationModal}
          size="m"
          closed={!isConfirmationModal}
        >
          <ConfirmationCard
            setView={setView}
            setIsBike={setIsBike}
            isBike={isBike}
            setIsConfirmationBS={setIsConfirmationBS}
            isCar={isCar}
            setIsCar={setIsCar}
            setIsConfirmationModal={setIsConfirmationModal}
            vechileType={vechileType}
            setVechileType={setVechileType}
          />
        </Modal>
      </Container>
      {(isBike || isCar) && (
        <>
          <Container displayOn="desktop">
            <ModalComponent
              setView={setView}
              setIsBike={setIsBike}
              setIsCar={setIsCar}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setSelectedCity={setSelectedCity}
              selectedCity={selectedCity}
              setSelectedRtu={setSelectedRtu}
              selectedRtu={selectedRtu}
              vechileType={vechileType}
              setVechileType={setVechileType}
            />
          </Container>
          <Container displayOn="tablet">
            <ModalComponent
              setView={setView}
              setIsBike={setIsBike}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setIsCar={setIsCar}
              vechileType={vechileType}
              setVechileType={setVechileType}
            />
          </Container>
        </>
      )}
    </>
  );
}
// export async function getServerSideProps() {
//   const homepage = await fetchPageContent("/homepage", {
//     populate: {
//       Faq: {populate: "QandA"},
//       // Faq : {populate: {QandA:{populate:"images"}}},
//     },
//   });

//   return {
//     props: {
//      homepageData: homepage?.data
//     },
//   };
// }
