import React, { useState ,useEffect} from "react";
import styles from "../../../styles/HealthFlow/PreQuote/NoOfChildren.module.scss";
import { Container, Icon, Input, Text } from "@jds/core";
const NoOfChildren = (props) => {
  const { bottomSheet, setBottomSheet, text, setChildrenCount, childrenCount,setChildrenBrackets } =
    props;
  const children = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <>
      {bottomSheet && (
        <Container className={styles.card}>
          <Container className={styles.topSection}>
            <Icon
              ic={"IcClose"}
              className={styles.close}
              onClick={() => setBottomSheet(false)}
            />
          </Container>
          <Container className={styles.content}>
            <Container>
              <Text appearance="heading-xs">
                How many {text.toLowerCase()}s do you have?
              </Text>
            </Container>
            <Container className={styles.options}>
              {children.map((item, index) => (
                <Container className={styles.checkboxContainer} key={index}>
                  <Input
                    type="radio"
                    size="small"
                    label={item.id}
                    value={item.id}
                    onChange={() => {
                      setChildrenBrackets(true);
                      text === "Son"
                        ? setChildrenCount((prevState) => [
                            { son: item.id },
                            { daughter: prevState[1].daughter },
                          ])
                        : setChildrenCount((prevState) => [
                            {
                              son: prevState[0].son,
                            },
                            {
                              daughter: item.id,
                            },
                          ]);
                      setBottomSheet(false);
                    }}
                    checked={item.id === childrenCount}
                  />
                </Container>
              ))}
            </Container>
          </Container>
        </Container>
      )}
    </>
  );
};

export default NoOfChildren;
