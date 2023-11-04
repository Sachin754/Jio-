import { Button, Container, Input, Text } from "@jds/core";
import React, { useEffect, useState } from "react";
import styles from "@/styles/BikeFlow/PreQuote/AdditionalDetails.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from "@/components/Redux/action";

const AdditionalDetails = ({ onStateCodeClick }) => {

  const years = [
    { year: "2023" },
    { year: "2022" },
    { year: "2021" },
    { year: "2020" },
    { year: "2019" },
    { year: "2018" },
    { year: "2017" },
    { year: "2016" },
    { year: "2015" },
    { year: "2014" },
    { year: "2013" },
    { year: "2012" },
    { year: "2011" },
    { year: "2010" },
    { year: "2009" },
    { year: "2008" },
    { year: "2007" },
    { year: "2006" },
    { year: "2005" },
    { year: "2004" },
    { year: "2003" },
  ];
  const policyTypes = [{ type: "Comprehensive" }, { type: "TP Liability" }];

  const [selectedYear, setSelectedYear] = useState(null);
  const [policyType, setPolicyType] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);
 
  useEffect(() => {
    if (selectedYear!=null && policyType!=null) {
    
      router.push("/quote");
    }
  }, [selectedYear, policyType]);

  return (
    <Container className={styles.additionalDetailsSection}>
      <Text appearance="heading-xs">Select Registration Year</Text>
      <Container className={styles.years}>
        {years.map((item, index) => (
          <Container
            key={index}
            className={
              selectedYear === item.year ? styles.selectedYear : styles.year
            }
            onClick={() => {
              setSelectedYear(item.year);
              dispatch(updateField('registrationYear', item.year));
            }}
          >
            <Text>{item.year}</Text>
          </Container>
        ))}
      </Container>
      <Text appearance="heading-xs">
        What Type of Policy do you want to buy ?
      </Text>
      <Container className={styles.policyTypes} displayOn="desktop">
        {policyTypes.map((item, index) => (
          <Button
            title={item.type}
            className={
              policyType === item.type ? styles.selectedbtn : styles.btn
            }
            kind="secondary"
            onClick={() => {
              setPolicyType(item.type);
              dispatch(updateField('bikePolicy', item.type));
            }}
            key={index}
          />
        ))}
      </Container>
      {/* <Container className={styles.policyTypes} displayOn='tablet' >
         {policyTypes.map((item,index)=>(
            <Button title={item.type} className={policyType===item.type?styles.selectedbtn:styles.btn} kind='secondary' onClick={()=>setPolicyType(item.type)} key={index}/>
         ))}
        </Container> */}
      <Container className={styles.mobilePolicyTypes} displayOn="tablet">
        <Input
        style={{marginBottom:"3rem",width: "100%"}}
          type="dropdown"
          label="Select policy type"       
          onChange={(e) => {setPolicyType(e.target.value)
            dispatch(updateField('bikePolicy', e.target.value));
          }}
          typeConfig={{
            dropdown: {
              items: [
                {
                  disabled: false,
                  label: "Comprehensive Policy",
                  prefix: undefined,
                  value: "comprehensive policy",
                },
                {
                  type: "divider",
                },
                {
                  disabled: false,
                  label: "Third Party",
                  prefix: undefined,
                  value: "third party",
                },
                {
                  type: "divider",
                },
                //  {
                //     disabled: false,
                //     label: 'Standalone Own Damage',
                //     prefix: undefined,
                //     value: 'standalone own damage'
                //   },
                //   {
                //       type: 'divider'
                //     },
              ],
            },
          }}
        />
      </Container>
    </Container>
  );
};

export default AdditionalDetails;
