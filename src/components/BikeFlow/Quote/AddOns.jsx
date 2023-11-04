import { Accordion, AccordionPanel, Container, Input, Text } from "@jds/core";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/BikeFlow/Quote/AddOns.module.scss";
import { Ic404Error } from "@jds/extended-icons";
const AddOns = () => {
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
    sort: {
      options: [
        { option: "Relevance" },
        { option: "Premium: Low to High" },
        { option: "Hospitals: High to Low" },
      ],
    },
  };
  const [sortBy, setSortBy] = useState("");
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
      setAccessories((prevSelectedValues) => [...prevSelectedValues, value]);
    }
  };
  // console.log(selectedValues);
  const [tppd, setTppd] = useState(false);
  return (
    <Container className={styles.addOnFilters}>
      <Text appearance="heading-xs" className={styles.heading}>
        Add-on & Filter
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
          <AccordionPanel header="Value of Accessories">
            <Container className={styles.accessories}>
              <Container className={styles.option}>
                <Input
                  type="checkbox"
                  label="Electrical Accessories"
                  size="small"
                  value="Electrical Accessories"
                  checked={accessories.includes("Electrical Accessories")}
                  onChange={() =>
                    handleAccessoriesCheckBoxChange("Electrical Accessories")
                  }
                />
                <Container className={styles.range}>
                  <Input
                    type="range"
                    label="Select Amount"
                    max={50000}
                    maxLength={250}
                    min={10000}
                  />
                </Container>
              </Container>
              <Container className={styles.option}>
                <Input
                  type="checkbox"
                  value="Non-Electrical Accessories"
                  label="Non-Electrical Accessories"
                  size="small"
                  checked={accessories.includes("Non-Electrical Accessories")}
                  onChange={() => {
                    handleAccessoriesCheckBoxChange(
                      "Non-Electrical Accessories"
                    );
                  }}
                />
              </Container>
            </Container>
          </AccordionPanel>
          <AccordionPanel header="Discounts">
            <Container className={styles.discounts}>
              <Input
                type="dropdown"
                typeConfig={{
                  dropdown: {
                    items: [
                      {
                        disabled: false,
                        label: "Voluntary Deductible",
                        prefix: undefined,
                        value: "Voluntary Deductible",
                      },
                      {
                        type: "divider",
                      },
                    ],
                  },
                }}
              />
              <Container className={styles.option}>
                <Input
                  type="radio"
                  label="TPPD"
                  size="small"
                  value="TPPD"
                  onChange={() => setTppd(!tppd)}
                />
              </Container>
            </Container>
          </AccordionPanel>
          <AccordionPanel header="Sort by">
            <Container className={styles.sort}>
              {filters.sort.options.map((item, index) => (
                <Container className={styles.option} key={index}>
                  <Input
                    type="radio"
                    label={item.option}
                    size="small"
                    value={item.option}
                    onChange={() => setSortBy(item.option)}
                    checked={sortBy === item.option}
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

export default AddOns;
