import { Button, Container, Icon, SearchBox, Text } from "@jds/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/styles/BikeFlow/PreQuote/BikeDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";

import { useRouter } from "next/router";
import ModelsDesktop from "./ModelsDesktop";
import Models from "./Models";

const BikeDetails = (props) => {
  const {
    edit,
    setIsEditDetailsBS,
    setShowVechileDetails,
    onStateCodeClick,
    vechileType,
  } = props;
  const router = useRouter();

  // Access the current pathname from the router object
  const currentPath = router.pathname;
  const bikeData = {
    brandData: {
      Honda: [
        { model: "Passion Pro" ,fuelType: ["Petrol", "Electric"]},
        { model: "Splendor Plus" ,fuelType: ["Petrol", "Electric"]},
        { model: "HF Deluxe",fuelType: ["Petrol", "Electric"] },
        { model: "Passion XPro",fuelType: ["Petrol", "Electric"] },
        { model: "Glamour",fuelType: ["Petrol", "Electric"] },
        { model: "Splendor Pro" ,fuelType: ["Petrol", "Electric"]},
        { model: "Super Splendor" ,fuelType: ["Petrol", "Electric"]},
        { model: "Xtreme",fuelType: ["Petrol", "Electric"] },
        // { model: "Passion Pro" },
        // { model: "Splendor Plus" },
        // { model: "HF Deluxe" },
        // { model: "Passion XPro" },
        // { model: "Glamour" },
        // { model: "Splendor Pro" },
        // { model: "Super Splendor" },
        // { model: "Xtreme" },
      ],

      Suzuki: [
        { model: "Suzuki Pro",fuelType: ["Petrol", "Electric"] },
        { model: "Suzuki Plus",fuelType: ["Petrol"] },
        { model: "Suzuki Deluxe",fuelType: ["Petrol", "Electric"] },
        { model: "Suzuki XPro" ,fuelType: ["Petrol"]},
        { model: "Suzuki",fuelType: ["Petrol", "Electric"] },
      ],
    },

    companies: [
      { img: "/images/BikeFlow/Hyundai.svg", name: "Honda" },
      { img: "/images/BikeFlow/Suzuki.svg", name: "Suzuki" },
      { img: "/images/BikeFlow/TataMotors.svg", name: "Tata" },
      { img: "/images/BikeFlow/AmericanHonda.svg", name: "Bajaj" },
      { img: "/images/BikeFlow/Suzuki.svg", name: "zixer" },
      { img: "/images/BikeFlow/Hyundai.svg", name: "Vespa" },
      { img: "/images/BikeFlow/AmericanHonda.svg", name: "Bajaj" },
      { img: "/images/BikeFlow/TataMotors.svg", name: "Yamaha" },
      { img: "/images/BikeFlow/Hyundai.svg", name: "Honda" },
      { img: "/images/BikeFlow/Suzuki.svg", name: "Suzuki" },
      { img: "/images/BikeFlow/TataMotors.svg", name: "Tata" },
      { img: "/images/BikeFlow/AmericanHonda.svg", name: "Bajaj" },
      { img: "/images/BikeFlow/Suzuki.svg", name: "zixer" },
      { img: "/images/BikeFlow/Hyundai.svg", name: "Vespa" },
      { img: "/images/BikeFlow/AmericanHonda.svg", name: "Bajaj" },
      { img: "/images/BikeFlow/TataMotors.svg", name: "Yamaha" },
    ],

    variantData: {
      "Passion Pro": [
        { variant: "1.4 E PLUS (1396 cc) pp" },
        { variant: "1.4 S (1396 cc) pp" },
        { variant: "1.6 SX Diesel (1582 cc) pp" },
        { variant: "E 1.5 Diesel (1493 cc) pp" },
        { variant: "1.6 SX Diesel (1582 cc) pps" },
        { variant: "E 1.5 Diesel (1493 cc) pps" },
      ],
      "Splendor Plus": [
        { variant: "1.4 E PLUS (1396 cc) sp" },
        { variant: "1.4 S (1396 cc) sp" },
        { variant: "1.6 SX Diesel (1582 cc) sp" },
        { variant: "E 1.5 Diesel (1493 cc) sp" },
        { variant: "1.6 SX Diesel (1582 cc) sps" },
        { variant: "E 1.5 Diesel (1493 cc) sps" },
      ],
      "Suzuki Pro": [
        { variant: "1.4 E PLUS (1396 cc) suzukipro" },
        { variant: "1.4 S (1396 cc) suzukipro" },
        { variant: "1.6 SX Diesel (1582 cc) suzukipro" },
        { variant: "E 1.5 Diesel (1493 cc) suzukipro" },
        { variant: "1.6 SX Diesel (1582 cc) suzukipros" },
        { variant: "E 1.5 Diesel (1493 cc) suzukipros" },
      ],
      "Suzuki Plus": [
        { variant: "1.4 E PLUS (1396 cc) suzukiplus" },
        { variant: "1.4 S (1396 cc) suzukiplus" },
        { variant: "1.6 SX Diesel (1582 cc) suzukiplus" },
        { variant: "E 1.5 Diesel (1493 cc) suzukiplus" },
        { variant: "1.6 SX Diesel (1582 cc) suzukipluss" },
        { variant: "E 1.5 Diesel (1493 cc) suzukipluss" },
      ],
    },
  };

  const carData = {
    companies: [
      { img: "/images/BikeFlow/Hyundai.svg", name: "Honda" },
      { img: "/images/BikeFlow/Suzuki.svg", name: "Suzuki" },
      { img: "/images/BikeFlow/TataMotors.svg", name: "Tata" },
      { img: "/images/BikeFlow/AmericanHonda.svg", name: "Bajaj" },
      { img: "/images/BikeFlow/Suzuki.svg", name: "zixer" },
      { img: "/images/BikeFlow/Hyundai.svg", name: "Vespa" },
      { img: "/images/BikeFlow/AmericanHonda.svg", name: "Bajaj" },
      { img: "/images/BikeFlow/TataMotors.svg", name: "Yamaha" },
      { img: "/images/BikeFlow/Hyundai.svg", name: "Honda" },
      { img: "/images/BikeFlow/Suzuki.svg", name: "Suzuki" },
      { img: "/images/BikeFlow/TataMotors.svg", name: "Tata" },
      { img: "/images/BikeFlow/AmericanHonda.svg", name: "Bajaj" },
      { img: "/images/BikeFlow/Suzuki.svg", name: "zixer" },
      { img: "/images/BikeFlow/Hyundai.svg", name: "Vespa" },
      { img: "/images/BikeFlow/AmericanHonda.svg", name: "Bajaj" },
      { img: "/images/BikeFlow/TataMotors.svg", name: "Yamaha" },
    ],
    variantData: {
      Creta: [
        { variant: "1.4 E PLUS (1396 cc) pp" },
        { variant: "1.4 S (1396 cc) pp" },
        { variant: "1.6 SX Diesel (1582 cc) pp" },
        { variant: "E 1.5 Diesel (1493 cc) pp" },
        { variant: "1.6 SX Diesel (1582 cc) pps" },
        { variant: "E 1.5 Diesel (1493 cc) pps" },
      ],
      Aura: [
        { variant: "1.4 E PLUS (1396 cc) sp" },
        { variant: "1.4 S (1396 cc) sp" },
        { variant: "1.6 SX Diesel (1582 cc) sp" },
        { variant: "E 1.5 Diesel (1493 cc) sp" },
        { variant: "1.6 SX Diesel (1582 cc) sps" },
        { variant: "E 1.5 Diesel (1493 cc) sps" },
      ],
      i10: [
        { variant: "1.4 E PLUS (1396 cc) suzukipro" },
        { variant: "1.4 S (1396 cc) suzukipro" },
        { variant: "1.6 SX Diesel (1582 cc) suzukipro" },
        { variant: "E 1.5 Diesel (1493 cc) suzukipro" },
        { variant: "1.6 SX Diesel (1582 cc) suzukipros" },
        { variant: "E 1.5 Diesel (1493 cc) suzukipros" },
      ],
      Elite: [
        { variant: "1.4 E PLUS (1396 cc) suzukiplus" },
        { variant: "1.4 S (1396 cc) suzukiplus" },
        { variant: "1.6 SX Diesel (1582 cc) suzukiplus" },
        { variant: "E 1.5 Diesel (1493 cc) suzukiplus" },
        { variant: "1.6 SX Diesel (1582 cc) suzukipluss" },
        { variant: "E 1.5 Diesel (1493 cc) suzukipluss" },
      ],
    },

    brandData: {
      Honda: [
        {
          model: "Creta",
          fuelType: ["Petrol", "Diesel", "LPG", "CNG", "External CNG"],
        },
        {
          model: "Aura",
          fuelType: ["Petrol", "Diesel", "LPG", "CNG", "External CNG"],
        },
        {
          model: "Elite",
          fuelType: ["Petrol", "Diesel", "LPG", "CNG", "External CNG"],
        },
        {
          model: "Aaura",
          fuelType: ["Petrol", "Diesel", "LPG", "CNG", "External CNG"],
        },
        {
          model: "i10",
          fuelType: ["Petrol", "Diesel", "LPG", "CNG", "External CNG"],
        },
        {
          model: "i20",
          fuelType: ["Petrol", "Diesel", "LPG", "CNG", "External CNG"],
        },
      ],

      Suzuki: [
        {
          model: "New Creta",
          fuelType: ["Petrol", "Diesel", "LPG", "CNG", "External CNG"],
        },
        {
          model: "New i20",
          fuelType: ["Petrol", "Diesel", "LPG", "CNG", "External CNG"],
        },
        {
          model: "New i10",
          fuelType: ["Petrol", "Diesel", "LPG", "CNG", "External CNG"],
        },
        {
          model: "Suzuki alcazar",
          fuelType: ["Petrol", "Diesel", "LPG", "CNG", "External CNG"],
        },
      ],
    },
  };

  const [vechileData, setVechileData] = useState(bikeData);

  const [modelName, setModelName] = useState("");

  const [selectedCompany, setSelectedCompany] = useState("");
  // const [object, setObject] = useState(selectBikeCompany);
  const [modelType, setModelType] = useState("");
  const [variantType, setVariantType] = useState("");
  const [initialModels, setInitialModels] = useState(6);
  const [initialBrands, setInitialBrands] = useState(6);

  const [index, setIndex] = useState(1);

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  useEffect(() => {
    if (vechileType === "Car") {
      setVechileData(carData);
    } else {
      setVechileData(bikeData);
    }
    // console.log(currentPath)
  
  }, [vechileType]);

  return (
    <>
      {index === 1 || selectedCompany == "" ? (
        <>
          <Container className={styles.bikeSection}>
            <Container className={styles.topContainer}>
              <Text appearance="heading-xs">
                Select your {vechileType}&apos;s Brand
              </Text>
              <Container className={styles.pagination}>
                {/* <Icon ic='IcChevronLeft' /> */}
                <Text>{index}/3</Text>
                <Icon ic="IcChevronRight" onClick={(prev) => setIndex(2)} />
              </Container>
            </Container>
            <SearchBox
              className={styles.searchBar}
              kind="normal"
              label={`Search ${vechileType} brand`}
              name="search"
              onBack={function noRefCheck() {}}
              onChange={function noRefCheck() {}}
            />
            <Container className={styles.popularCompanies}>
              <Container className={styles.heading}>
                <hr className={styles.hr}></hr>
                <Text appearance="body-xs-bold" className={styles.headingText}>
                  Popular Companies
                </Text>
                <hr className={styles.hr}></hr>
              </Container>

              <Container className={styles.companies}>
                {vechileData?.companies
                  ?.slice(0, initialBrands)
                  .map((item, index) => (
                    <Container
                      key={index}
                      className={
                        selectedCompany == item.name
                          ? styles.selectedCompany
                          : styles.company
                      }
                      onClick={() => {
                        setSelectedCompany(item.name);
                        //   setModelName(item.name);
                        setIndex(2);
                        dispatch(updateField("bikeCompany", item.name));
                      }}
                    >
                      <Image
                        src={item.img}
                        alt="bike-company"
                        width={200}
                        height={100}
                        style={{ width: "2.5rem", height: "1.5rem" }}
                      />
                      <Text appearance="body-xs">{item.name}</Text>
                    </Container>
                  ))}

                {vechileData?.companies
                  ?.slice(0, initialBrands)
                  .map((item, index) => (
                    <Container
                      key={index}
                      className={
                        selectedCompany == item.name
                          ? styles.selectedCompany
                          : styles.company
                      }
                      onClick={() => {
                        setSelectedCompany(item.name);
                        //   setModelName(item.name);
                        setIndex(2);

                        dispatch(updateField("bikeCompany", item.name));
                      }}
                    >
                      <Image
                        src={item.img}
                        alt="bike-company"
                        width={200}
                        height={100}
                        style={{ width: "2.5rem", height: "1.5rem" }}
                      />
                      <Text appearance="body-xs">{item.name}</Text>
                    </Container>
                  ))}
              </Container>
            </Container>
            <Container displayOn="desktop">
              {vechileData.companies.length != initialBrands && (
                <Button
                  title={"All 70 Brands"}
                  kind="secondary"
                  style={{
                    width: "40vw",
                    margin: "1rem auto",
                    color: "var(--secondary-color-80)",
                  }}
                  onClick={() => setInitialBrands(vechileData.companies.length)}
                />
              )}
            </Container>
          </Container>
        </>
      ) : (
        <>
          {index == 2 || modelType == "" ? (
            <Container className={styles.bikeSection}>
              <Container className={styles.topContainer}>
                <Text appearance="heading-xs">
                  Select {selectedCompany} model{" "}
                </Text>
                <Container className={styles.pagination}>
                  <Icon ic="IcChevronLeft" onClick={(prev) => setIndex(1)} />
                  <Text>{index}/3</Text>
                  <Icon ic="IcChevronRight" onClick={(prev) => setIndex(3)} />
                </Container>
              </Container>

              <SearchBox
                className={styles.searchBar}
                kind="normal"
                label={`Search ${selectedCompany} model`}
                name="search"
                onBack={function noRefCheck() {}}
                onChange={function noRefCheck() {}}
              />
              <Container className={styles.popularCompanies}>
                <Container className={styles.heading}>
                  <hr className={styles.hr} />
                  <Text
                    appearance="body-xs-bold"
                    className={styles.headingText}
                  >
                    Popular Model
                  </Text>
                  <hr className={styles.hr} />
                </Container>

                {/* <Container className={styles.companies}>
                  {vechileData.brandData[selectedCompany]
                    ?.slice(0, initialModels)
                    ?.map((item, index) => (
                      <Container
                        key={index}
                        className={
                          modelType == item.model
                            ? styles.selectedCompany
                            : styles.company
                        }
                        onClick={() => {
                          setModelType(item.model);
                          setIndex(3);
                          dispatch(updateField("bikeModel", item.model));
                        }}
                      >
                        <Text appearance="body-xs">{item.model}</Text>
                      </Container>
                    ))}
                </Container> */}
                <Container displayOn="tablet">
                  <Models vechileData={vechileData} selectedCompany={selectedCompany} onStateCodeClick={onStateCodeClick} setModelType={setModelType} setIndex={setIndex}/>
                </Container>
                <Container displayOn="desktop">
                  <ModelsDesktop  vechileData={vechileData} onStateCodeClick={onStateCodeClick} selectedCompany={selectedCompany} setModelType={setModelType} setIndex={setIndex}/>
                </Container>
              </Container>
              {vechileData.brandData[selectedCompany]?.length !=
                initialModels && (
                <Button
                  title="Others"
                  kind="secondary"
                  style={{
                    width: "40vw",
                    margin: "1rem auto",
                    color: "var(--secondary-color-80)",
                  }}
                  onClick={() =>
                    setInitialModels(
                      vechileData.brandData[selectedCompany]?.length
                    )
                  }
                />
              )}
            </Container>
          ) : (
            <Container className={styles.bikeSection}>
              <Container className={styles.topContainer}>
                <Text appearance="heading-xs">
                  Select {selectedCompany} {modelType} Variant{" "}
                </Text>
                <Container className={styles.pagination}>
                  <Icon ic="IcChevronLeft" onClick={(prev) => setIndex(2)} />
                  <Text>{index}/3</Text>
                  {/* <Icon ic='IcChevronRight' /> */}
                </Container>
              </Container>

              <SearchBox
                className={styles.searchBar}
                kind="normal"
                label={`Search ${modelType} variant `}
                name="search"
                onBack={function noRefCheck() {}}
                onChange={function noRefCheck() {}}
              />
              <Container className={styles.popularCompanies}>
                <Container className={styles.heading}>
                  <hr className={styles.hr}></hr>
                  <Text
                    appearance="body-xs-bold"
                    className={styles.headingText}
                  >
                    Popular Variants
                  </Text>
                  <hr className={styles.hr}></hr>
                </Container>

                <Container className={styles.companies}>
                  {vechileData.variantData[modelType].map((item, index) => (
                    <Container
                      key={index}
                      className={
                        variantType == item.variant
                          ? styles.selectedVariant
                          : styles.variant
                      }
                      onClick={() => {
                        setVariantType(item.variant);
                        if (currentPath == "/") {
                          onStateCodeClick();
                        }
                      }}
                    >
                      <Text appearance="body-xs">{item.variant}</Text>
                    </Container>
                  ))}
                </Container>
              </Container>
              {edit && (
                <Button
                  title="Update"
                  style={{ marginTop: "3rem" }}
                  onClick={() => {
                    setShowVechileDetails(false);
                    setIsEditDetailsBS(true);
                  }}
                />
              )}
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default BikeDetails;
