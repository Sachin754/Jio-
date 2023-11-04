import {
  Button,
  Container,
  ContentBlock,
  Input,
  SearchBox,
  StepItem,
  Stepper,
  Text,
} from "@jds/core";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/BikeFlow/PreQuote/RTO.module.scss";
import Cities from "./Cities";
import DesktopCities from "./DesktopCities";
import { useRouter } from "next/router";
const RTUDetails = (props) => {
  const {
    selectedCity,
    selectedRtu,
    setSelectedCity,
    setSelectedRtu,
    ref,
    onStateCodeClick,
    vechileType,
  } = props;
  const router = useRouter();

  // Access the current pathname from the router object
  const currentPath = router.pathname;
  const cities = [
    { city: "Jaipur" },
    { city: "Mumbai" },
    { city: "New Delhi" },
    { city: "Chennai" },
    { city: "Bengaluru" },
    { city: "Noida" },
    { city: "Agra" },
    { city: "Kota" },
    { city: "Hyderabad" },
    { city: "Vizag" },
    { city: "Delhi" },
    { city: "Kolkata" },
    { city: "Orissa" },
    { city: "J&K" },
  ];

  const rtu = {
    Jaipur: [{ no: "RJ1" }, { no: "RJ2" }, { no: "RJ3" }, { no: "RJ4" }],
    Mumbai: [{ no: "MH1" }, { no: "MH2" }, { no: "MH3" }],
  };
  const [initialCities, setInitialCities] = useState(8);
  return (
    <Container className={styles.rtuSection}>
      <Text appearance="heading-xs">
        Select RTO or City for your {vechileType}
      </Text>
      <SearchBox
        className={styles.searchBar}
        kind="normal"
        label="Search RTO or City (eg. RJ20 or Kota)"
        name="search"
        onBack={function noRefCheck() {}}
        onChange={function noRefCheck() {}}
      />
      <Container className={styles.popularCities}>
        <Container className={styles.heading}>
          <hr className={styles.hr}></hr>
          <Text appearance="body-xs-bold" className={styles.headingText}>
            Poputlar Cities
          </Text>
          <hr className={styles.hr}></hr>
        </Container>

        {/* <Container className={styles.cities}>
          {cities.slice(0, initialCities).map((item, index) => (
            <Container  key={index} style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              <Container key={index} className={styles.city}>
                <Button
                  className={
                    selectedCity === item.city
                      ? styles.selectedCityBtn
                      : styles.cityBtn
                  }
                  title={item.city}
                  kind="secondary"

                  size="small"
                  onClick={() => setSelectedCity(item.city)}
                />
              </Container>
              {selectedCity ===item.city && (
                <Container className={styles.cityRtu} 
              //   style={{marginLeft:index%2!=0?"-10rem":"0rem" 
              // }}
                >
                  {rtu[selectedCity]?.map((item, index) => ( 
                    <Container key={index}>
                    <Button
                      title={item.no}
                      className={
                        selectedRtu === item.no
                          ? styles.selectedRtuBtn
                          : styles.rtuBtn
                      }
                      onClick={() => {
                        setSelectedRtu(item.no);
                      }}
                      kind="secondary"
                    />
                    </Container>
                  ))}
                </Container>
              )}
            </Container>
          ))}
        </Container> */}
        <Container displayOn="tablet">
          <Cities onStateCodeClick={onStateCodeClick} />
        </Container>
        <Container displayOn="desktop">
          <DesktopCities onStateCodeClick={onStateCodeClick} />
        </Container>
      </Container>
      <Container displayOn="desktop">
        {initialCities < cities.length && (
          <Button
            title="Others"
            kind="secondary"
            onClick={() => setInitialCities(cities.length)}
            className={styles.bottomButton}
          />
        )}
      </Container>
    </Container>
  );
};

export default RTUDetails;
