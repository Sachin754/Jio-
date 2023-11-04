import { Button, Container, Text } from "@jds/core";
import React, { useState } from "react";
import styles from "@/styles/BikeFlow/PreQuote/Cities.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";

import { useRouter } from "next/router";

const Cities = (props) => {
  const { onStateCodeClick } = props;
  const router = useRouter();

  // Access the current pathname from the router object
  const currentPath = router.pathname;
  const cities = [
    { city: "Jaipur" },
    { city: "Mumbai" },
    { city: "Delhi" },
    { city: "Chennai" },
    { city: "Bengaluru" },
    { city: "Noida" },
    { city: "Agra" },
    { city: "Kota" },
  ];

  const rtu = {
    Jaipur: [
      { no: "RJ1" },
      { no: "RJ2" },
      { no: "RJ3" },
      { no: "RJ4" },
      { no: "RJ5" },
      { no: "RJ6" },
    ],
    Mumbai: [{ no: "MH1" }, { no: "MH2" }, { no: "MH3" }],
    Delhi: [{ no: "DH1" }, { no: "DH2" }, { no: "DH3" }],
    Chennai: [{ no: "TN1" }, { no: "TN2" }, { no: "TN3" }],
    Bengaluru: [{ no: "KA1" }, { no: "KA2" }],
    Noida: [{ no: "N1" }, { no: "N2" }],
    Agra: [{ no: "UP1" }, { no: "UP2" }, { no: "UP3" }, { no: "UP4" }],
    Kota: [{ no: "K1" }, { no: "K2" }],
  };
  const citiesAndRTU = [];

  for (let i = 0; i < cities.length; i += 2) {
    const city1 = cities[i];
    const city2 = i + 1 < cities.length ? cities[i + 1] : null;

    const row = {
      city1,
      city2,
      rtus1: rtu[city1.city],
      rtus2: city2 ? rtu[city2.city] : null,
    };

    citiesAndRTU.push(row);
  }
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRtu, setSelectedRtu] = useState(null);

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  return (
    <Container className={styles.citiesSection}>
      {citiesAndRTU.map((row, index) => (
        <Container key={index}>
          <Container className={styles.cityRow}>
            {/* <Text
              appearance="body-s-bold"
              className={styles.cityName}
              onClick={() => setSelectedCity(row.city1.city)}
            >
              {row.city1.city}
            </Text> */}
            <Button
              title={row.city1.city}
              kind="secondary"
              onClick={() => {
                setSelectedCity(row.city1.city);
                dispatch(updateField("city1", row.city1.city));
              }}
              className={
                row.city1.city === selectedCity
                  ? styles.selectedCityName
                  : styles.cityName
              }
            />
            {row.city2 && (
              //   <Text
              //     appearance="body-s-bold"
              //     className={styles.cityName}
              //     onClick={() => setSelectedCity(row.city2.city)}
              //   >
              //     {row.city2.city}
              //   </Text>
              <Button
                title={row.city2.city}
                kind="secondary"
                onClick={() => {
                  setSelectedCity(row.city2.city);
                  dispatch(updateField("city2", row.city2.city));
                }}
                className={
                  row.city2.city === selectedCity
                    ? styles.selectedCityName
                    : styles.cityName
                }
              />
            )}
          </Container>
          <Container className={styles.rtuRow}>
            <Container className={styles.rtuBtns}>
              {selectedCity === row.city1.city &&
                row.rtus1.map((rtuNumber) => (
                  //   <li key={rtuNumber.no}>
                  //     <Text appearance="body-xs" className={styles.rtus}>
                  //       {rtuNumber.no}
                  //     </Text>
                  //   </li>
                  <Button
                    title={rtuNumber.no}
                    key={rtuNumber.no}
                    onClick={() => {
                      setSelectedRtu(rtuNumber.no);
                      if (currentPath == "/") {
                        onStateCodeClick();
                        }
                      dispatch(updateField('rtuNumber1', rtuNumber.no));
                    }}
                    className={
                      selectedRtu === rtuNumber.no
                        ? styles.selectedRtuBtn
                        : styles.rtuBtn
                    }
                  />
                ))}
            </Container>
            {row.city2 && (
              <Container className={styles.rtuBtns}>
                {selectedCity === row.city2.city &&
                  row.rtus2.map((rtuNumber) => (
                    // <li key={rtuNumber.no}>
                    //   <Text appearance="body-xs" className={styles.rtus}>
                    //     {rtuNumber.no}
                    //   </Text>
                    // </li>
                    <Button
                      title={rtuNumber.no}
                      key={rtuNumber.no}
                      onClick={() => {
                        setSelectedRtu(rtuNumber.no);
                        if(currentPath=='/'){
                           onStateCodeClick();
                        }
                        dispatch(updateField("rtuNumber2", rtuNumber.no));
                      }}
                      className={
                        selectedRtu === rtuNumber.no
                          ? styles.selectedRtuBtn
                          : styles.rtuBtn
                      }
                    />
                  ))}
              </Container>
            )}
          </Container>
        </Container>
      ))}
    </Container>
  );
};

export default Cities;
