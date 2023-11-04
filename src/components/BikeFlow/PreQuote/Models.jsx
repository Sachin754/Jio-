import { Button, Container, Text } from "@jds/core";
import React, { useState } from "react";
import styles from "@/styles/BikeFlow/PreQuote/Cities.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";

import { useRouter } from "next/router";

const Models = (props) => {
  const { onStateCodeClick, vechileData , selectedCompany,setModelType, setIndex  } = props;
  const router = useRouter();
  const currentPath = router.pathname;
  const models = vechileData.brandData[selectedCompany];
  const fuelType = models[0].fuelType;

  const modelAndFuel = [];

  for (let i = 0; i < models.length; i += 2) {
    const model1 = models[i];
    const model2 = i + 1 < models.length ? models[i + 1] : null;

    const row = {
      model1,
      model2,
    
    };

    modelAndFuel.push(row);
  }

  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedFuelType, setSelectedFuelType] = useState(null);


  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  return (
    <Container className={styles.citiesSection}>
      {modelAndFuel.map((row, index) => (
        <Container key={index}>
          <Container className={styles.cityRow}>
            {/* <Text
              appearance="body-s-bold"
              className={styles.cityName}
              onClick={() => setSelectedCity(row.model1.model)}
            >
              {row.model1.model}
            </Text> */}
            <Button
              title={row.model1.model}
              kind="secondary"
              onClick={() => {
                setSelectedModel(row.model1.model);
              
                dispatch(updateField("bikeModel", row.model1.model));
              }}
              className={
                row.model1.model === selectedModel
                  ? styles.selectedCityName
                  : styles.cityName
              }
            />
            {row.model2 && (
              //   <Text
              //     appearance="body-s-bold"
              //     className={styles.cityName}
              //     onClick={() => setSelectedCity(row.model2.model)}
              //   >
              //     {row.model2.model}
              //   </Text>
              <Button
                title={row.model2.model}
                kind="secondary"
                onClick={() => {
                  setSelectedModel(row.model2.model);
                  dispatch(updateField("model2", row.model2.model));
                }}
                className={
                  row.model2.model === selectedModel
                    ? styles.selectedCityName
                    : styles.cityName
                }
              />
            )}
          </Container>
          <Container className={styles.rtuRow}>
            <Container className={styles.rtuBtns}>
              {selectedModel === row.model1.model &&
                row.model1.fuelType?.map((fuel,index) => (
                  //   <li key={rtuNumber.no}>
                  //     <Text appearance="body-xs" className={styles.rtus}>
                  //       {rtuNumber.no}
                  //     </Text>
                  //   </li>
                  <Button
                    title={fuel}
                    key={index}
                    onClick={() => {
                      setSelectedFuelType(fuel);
                       if (currentPath == "/") {
                        setModelType(selectedModel);
                        setIndex(3)
                      }
                      dispatch(
                         updateField( "fuelType", fuel)
                      );
                    }}
                    className={
                      selectedFuelType === fuel
                        ? styles.selectedRtuBtn
                        : styles.rtuBtn
                    }
                    style={{width:"max-content"}}
                  />
                ))}
            </Container>
            {row.model2 && (
              <Container className={styles.rtuBtns}>
                {selectedModel === row.model2.model &&
                  row.model2.fuelType.map((fuel, index) => (
                    // <li key={rtuNumber.no}>
                    //   <Text appearance="body-xs" className={styles.rtus}>
                    //     {rtuNumber.no}
                    //   </Text>
                    // </li>
                    <Button
                      title={fuel}
                      key={index}
                      onClick={() => {
                        setSelectedFuelType(fuel);
                        // onStateCodeClick();
                         dispatch(updateField("rtuNumber2", rtuNumber.no));
                        setIndex(3);
                        setModelType(selectedModel);
                      }}
                      className={
                        selectedFuelType === fuel
                          ? styles.selectedRtuBtn
                          : styles.rtuBtn
                      }
                      style={{width:"max-content"}}
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

export default Models;
