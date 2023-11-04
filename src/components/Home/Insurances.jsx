import { Container, Text, Image } from "@jds/core";
// import Image from 'next/image'
import React, { useState } from "react";
import styles from "../../styles/Home/Insurances.module.scss";
import InsuranceCard from "./InsuranceCard";
import { useDispatch } from "react-redux";
import { updateField } from "../Redux/action";
const Insurances = (props) => {
  const{isHealth, setIsHealth, setView, setIsBike, isBike,setIsConfirmationBS, isCar, setIsCar, vechileType, setVechileType,setIsConfirmationModal} =props;
  const insuranceTypes = [
    { icon: "/images/Home/Iconbike.svg", text: "Bike" },
    { icon: "/images/Home/Iconcar.svg", text: "Car" },
    { icon: "/images/Home/Iconhealth.svg", text: "Health" },
    // { icon: "/images/Home/Iconlife.svg", text: "Life" },
  ];
  const [insuranceIndex, setInsuranceIndex] = useState(0);
  const [insuranceType, setInsuranceType] = useState("Bike");
  const dispatch = useDispatch();

  return (
    <Container className={styles.insuranceSection}>
      <Container>
         <Container className={styles.headingSection}>
          <Text appearance="heading-xs" className={styles.title}>Smart Insurances</Text>
          <Text appearance="heading-xs" className={styles.titleContinuation}>for a Smarter Generation</Text>
         </Container>
      <Container className={styles.insuranceTopSection}>
        <Text appearance="heading-xxs" className={styles.title }>
          I am looking to insure..
        </Text>
        <Container className={styles.types}>
          {insuranceTypes.map((item, index) => (
            <Container
              className={
                insuranceIndex === index
                  ? styles.activeTypeContainer
                  : styles.typeContainer
              }
              key={index}
              onClick={() => {
                setInsuranceIndex(index);
                setInsuranceType(item.text);
                dispatch(updateField('vehicaleType', item.text))
                if(item.text==='Car' || item.text==='Bike'){

                  setVechileType(item.text);
                }
              }}
            >
              <Container className={styles.type}>
                <Image src={item.icon} style={{ objectFit: "none" }} alt="insurance types"></Image>
              </Container>
              <Text className={styles.typeText} appearance="body-xs">
                {item.text}
              </Text>
            </Container>
          ))}
        </Container>
      </Container>
      <Container className={styles.insuranceCardSection}>
        <InsuranceCard insuranceType={insuranceType} isHealth={isHealth} setIsHealth={setIsHealth} setView={setView} isBike={isBike} setIsBike={setIsBike} isCar={isCar} setIsCar={setIsCar} setIsConfirmationBS={setIsConfirmationBS}  setIsConfirmationModal={setIsConfirmationModal}/>
      </Container>
      </Container>  
    </Container>
  );
};

export default Insurances;
