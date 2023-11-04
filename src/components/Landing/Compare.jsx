import React from "react";
import styles from "../../styles/Landing/Compare.module.scss";
import { Button, Container, Icon, Text } from "@jds/core";
const Compare = () => {
//   const compares = [
//     { id: 1, index: "", firstCol: "Most Preffered", secondCol: "" },
//   ];
  const features = [
    { pt: " ", first: "Most Preffered", second: " ",icon:"IcEnterpreneurial" },
    {
      pt: "",
      first: "Comprehensive cover",
      second: "Third party liability only cover",
    },
    {
      pt: "Damage due to natural calamity - Earthquakes, etc",
      first: "IcSuccessColored",
      second: "IcErrorColored",
    },
    { pt: "Damage due to events like- Fire, theft, vandalism, etc", first: "IcSuccessColored", second: "IcErrorColored" },
    { pt: "Add on choices - Zero depreciation, NCM protect, etc", first: "IcSuccessColored", second: "IcErrorColored" },
    { pt: "Customization of car value", first: "IcSuccessColored", second: "IcSuccessColored" },
    {pt:"Personal accident cover of ₹15 lakh* ",first: "IcSuccessColored", second: "IcSuccessColored"},
    {pt:"No hefty fines levied if valid policy found",first: "IcSuccessColored", second: "IcSuccessColored"},
    {pt:"Injury to a third person",first: "IcSuccessColored", second: "IcSuccessColored"},
    {pt:"Damage to third party vehicle/property",first: "IcSuccessColored", second: "IcSuccessColored"},
    
  ];

  return (
    <Container className={styles.compareSection}>
      <Text appearance="heading-xs" className={styles.title}>Compare and select best health insurance</Text>

      <Container className={styles.points}>
        <Container>
        <Container style={{ display: "flex", flexDirection: "column" }} className={styles.pts}>
          {features.map((item, index) => (
            <Container
             key={index}
              className={styles.point}
              style={{
                // borderLeft:"none",
                // borderTop: "none",
                // borderRight: index >1 ? "1px solid lightgrey" : "none", // Right border
                // borderLeft: index>1?"1px solid lightgrey":"none",
                borderBottom: index > 1 ? "1px solid lightgrey" : "none",
                height: index === 0 ? "3rem" : index === 1 ? "4rem" : "5rem",
              }}
            >
              <Text appearance="body-xs">{item.pt}</Text>
            </Container>
          ))}
          </Container>
          </Container>
          <Container className={styles.twoContainers}>
            <Container style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Container className={styles.container1} >
            {features.map((item, index) => (
              <Container
              key={index}
                className={styles.first}
                style={{
                    borderRadius:index==0?"0.75rem 0.75rem 0rem 0rem":"none",
                    backgroundColor: index===1 ?"#0C52731a":index===0?"#1ECCB0":"white",
                    color:index===1?"var(--primary-color-60)":"#08332C",
                  height: index === 0 ? "3rem" : index === 1 ? "4rem" : "5rem",
                }}
              >
               {index >1 ?
               <Icon ic={item.first} style={{width:"3rem"}}/> :  <Container style={{display:"flex",alignItems:"center"}}><Text appearance="body-xs-bold">{item.first}</Text> <Icon ic={item.icon} style={{width:"2rem"}}
               />
               </Container>
             }

              </Container>
             
            ))}
            </Container>
             <Button title="Buy Now" kind="secondary" size="medium" style={{width:"max-content",marginTop:"1rem", backgroundColor:"var(--primary-color-50)",color:"white"}}/>
            </Container>
            <Container className={styles.container2}>
            {features.map((item, index) => (
              <Container
              key={index}
                className={styles.second}
                style={{
                  backgroundColor: index===1 ?"#0C52731a":"white",
                  color:index===1?"var(--primary-color-60)":"white",
                //   border: index===0?"none":"1px solid lightgrey",
                height: index === 0 ? "3rem" : index === 1 ? "4rem" : "5rem",
                borderRight: index===0?"none":"1px solid lightgrey",                 
                }}
              >
               {index >1 ?
               <Icon ic={item.second} style={{width:"3rem"}}/> :
                <Text appearance="body-xs-bold">{item.second}</Text>
              
             }
              </Container>
            ))}
            
            </Container>
          </Container>
        </Container>
      
    </Container>
  );
};

export default Compare;
