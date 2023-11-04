import { Accordion, AccordionPanel, Container, Input, Text } from "@jds/core";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/BikeFlow/Quote/AddOns.module.scss";

const AddonFilter = () => {
  const [addOnSelectedValues, setAddOnSelectedValues] = useState([]);
  const filters = {
    addons: {
      header: "Add-ons Cover",
      options: [
        { option: "PA Owner Driver" },
        { option: "Zero Depreciation" },
        { option: "Engine Protection" },
        { option: "NCB Protector" },
        { option: "Consumable Cover" },
        { option: "Return to Invoice" },
        { option: "Roadside Assistance" },
        { option: "Paid Driver Legal Liability" },
        { option: "Employee Driver Legal Liability" },
        { option: "Passenger PA Cover" },
      ],
    },
    sort :{
        options:[
            {option:"Relevance"},
            {option:"Premium: Low to High"},
            {option:"Hospitals: High to Low"}
        ]
    }
  };
  const [sortBy, setSortBy] = useState('');
  const handleCheckboxChange = (value) => {
    if (addOnSelectedValues.includes(value)) {
      setAddOnSelectedValues((prevSelectedValues) =>
        prevSelectedValues.filter((item) => item !== value)
      );
    } else {
      setAddOnSelectedValues((prevSelectedValues) => [
        ...prevSelectedValues,
        value,
      ]);
    }
  };
 const [accessories, setAccessories] = useState([]);
 const handleAccessoriesCheckBoxChange = (value) => {
    if (accessories.includes(value)) {
      setAccessories((prevSelectedValues) =>
        prevSelectedValues.filter((item) => item !== value)
      );
    } else {
      setAccessories((prevSelectedValues) => [
        ...prevSelectedValues,
        value,
      ]);
    }
  };
  // console.log(selectedValues);
  const [tppd, setTppd] = useState(false);
  return (
    <Container className={styles.addOnFilters}>
      <Text appearance="heading-xs" className={styles.heading}>
        Add-on
      </Text>
      <Container className={styles.addOnSection}>
        <Accordion expanded={[0]}>
          <AccordionPanel header={filters.addons.header}>
            <Container className={styles.addonOptions}>
              {filters.addons.options.map((item, index) => (
                <Container className={styles.options} key={index}>
                  <Input
                    type="checkbox"
                    label={item.option}
                    value={item.option}
                    checked={addOnSelectedValues.includes(item.option)}
                    onChange={(e) => {
                      handleCheckboxChange(item.option);
                    }}
                  />
                </Container>
              ))}
            </Container>
          </AccordionPanel>
        </Accordion>
      </Container>
    </Container>
  );
};

export default AddonFilter;
