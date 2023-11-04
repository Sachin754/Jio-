import { Button, Container, Text } from "@jds/core";
import React, { useEffect, useState } from "react";
import styles from "@/styles/BikeFlow/PreQuote/DesktopCities.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";
import { useRouter } from "next/router";

const ModelsDesktop = ({ onStateCodeClick, vechileData, selectedCompany, setModelType, setIndex }) => {
  const router = useRouter();

//   useEffect(() => {
//     console.log(brandData);
//   }, []);

  // Access the current pathname from the router object
  const currentPath = router.pathname;
  const models = vechileData.brandData[selectedCompany];
//   const fuelType = vechileData.brandData[selectedCompany].fuelType;
  const fuelType = models[0].fuelType;

  useEffect(()=>{
   console.log(fuelType,"Fuellllllllllllllllllllllllllllllllllllll");
   console.log(models,"Mooooooooooooooooooooooodelllllllllllllll");
  },[]);
   
//   const rtu = {
//     Jaipur: [{ no: "RJ1" }, { no: "RJ2" }, { no: "RJ3" }, { no: "RJ4" }],
//     Mumbai: [{ no: "MH1" }, { no: "MH2" }, { no: "MH3" }],
//     Delhi: [{ no: "DH1" }, { no: "DH2" }, { no: "DH3" }],
//     Chennai: [{ no: "TN1" }, { no: "TN2" }, { no: "TN3" }],
//     Bengaluru: [{ no: "KA1" }, { no: "KA2" }],
//     Noida: [{ no: "N1" }, { no: "N2" }],
//     Agra: [{ no: "UP1" }, { no: "UP2" }, { no: "UP3" }, { no: "UP4" }],
//     Kota: [{ no: "K1" }, { no: "K2" }],
//   };

  const modelAndFuel = [];

  for (let i = 0; i < models?.length; i += 4) {
    const model1 = models[i];
    const model2 = i + 1 < models.length ? models[i + 1] : null;
    const model3 = i + 2 < models.length ? models[i + 2] : null;
    const model4 = i + 3 < models.length ? models[i + 3] : null;

    const row = {
      model1,
      model2,
      model3,
      model4,
      // fuel1: rtu[model1.model],
      // rtus2: model2 ? rtu[model2.model] : null,
      // rtus3: model3 ? rtu[model3.model] : null,
      // rtus4: model4 ? rtu[model4.model] : null,
    };

    modelAndFuel.push(row);
  }

  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedFuelType, setSelectedFuelType] = useState(null);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  return (
    <Container className={styles.citiesSection}>
      {modelAndFuel?.map((row, index) => (
        <Container key={index}>
          <Container className={styles.cityRow}>
            <Button
              title={row.model1.model}
              kind="secondary"
              onClick={() => {
                setSelectedModel(row.model1.model);
                // dispatch(updateField("city1", row.model1.model));
              }}
              className={
                row.model1.model === selectedModel
                  ? styles.selectedCityName
                  : styles.cityName
              }
            />
            {row.model2 && (
              <Button
                title={row.model2.model}
                kind="secondary"
                onClick={() => {
                  setSelectedModel(row.model2.model);
                  //  dispatch(updateField("city2", row.city2.city));
                }}
                className={
                  row.model2.model === selectedModel
                    ? styles.selectedCityName
                    : styles.cityName
                }
              />
            )}
            {row.model3 && (
              <Button
                title={row.model3.model}
                kind="secondary"
                onClick={() => {
                  setSelectedModel(row.model3.model);
                  // dispatch(updateField( "city3", row.model3.model));
                }}
                className={
                  row.model3.model === selectedModel
                    ? styles.selectedCityName
                    : styles.cityName
                }
              />
            )}
            {row.model4 && (
              <Button
                title={row.model4.model}
                kind="secondary"
                onClick={() => {
                  setSelectedModel(row.model4.model);
                  if (currentPath === "/") {
                    onStateCodeClick();
                  }
                  //  dispatch(updateField("bikeData", "city4", row.city4.city));
                }}
                className={
                  row.model4.model === selectedModel
                    ? styles.selectedCityName
                    : styles.cityName
                }
              />
            )}
          </Container>
          <Container className={styles.rtuRow}>
            <Container className={styles.rtuBtns}>
              {selectedModel === row.model1.model &&
                row.model1.fuelType?.map((fuel, index) => (
                  <Button
                    title={fuel}
                    key={index}
                    // size="small"

                    onClick={() => {
                      setSelectedFuelType(fuel);
                      // dispatch(
                      //   updateField("rtuNumber1", rtuNumber.no)
                      // );
                  
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
            {row.model2 && (
              <Container className={styles.rtuBtns}>
                {selectedModel === row.model2.model &&
                  row.model2.fuelType?.map((fuel,index) => (
                    <Button
                      title={fuel}
                      //   size="small"

                      key={index}
                      onClick={() => {
                        setSelectedFuelType(fuel);
                        setIndex(3);
                        setModelType(selectedModel);
                        // dispatch(
                        //   updateField("rtuNumber2", rtuNumber.no)
                        // );
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
            {row.model3 && (
              <Container className={styles.rtuBtns}>
                {selectedModel === row.model3.model &&
                  row.model3.fuelType?.map((fuel,index) => (
                    <Button
                      title={fuel}
                      //   size="small"
                      //   style={{ width: 'max-content' }}
                      key={index}
                      onClick={() => {
                        setSelectedFuelType(fuel);
                        setIndex(3);
                        setModelType(selectedModel);
                        // dispatch(
                        //   updateField("rtuNumber2", rtuNumber.no)
                        // );
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
            {row.model4 && (
              <Container className={styles.rtuBtns}>
                {selectedModel === row.model4.model &&
                  row.model4.fuelType?.map((fuel,index) => (
                    <Button
                      title={fuel}
                      //   size="small"
                      //   style={{ in
                      key={index}
                      onClick={() => {
                        setSelectedFuelType(fuel);
                        setIndex(3);
                        setModelType(selectedModel);
                        // dispatch(
                        //   updateField( "rtuNumber4", rtuNumber.no)
                        // );
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

export default ModelsDesktop;
