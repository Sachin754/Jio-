import { Container, ScrollBar, SearchBox, Text } from '@jds/core'
import React, { useState } from 'react'
import styles from '@/styles/BikeFlow/Quote/CityDropdown.module.scss'
const CityDropdown = () => {
    const cityDetails = [
        {detail:"RJ1"},
        {detail:"RJ2"},
        {detail:"RJ3"},
        {detail:"RJ1"},
        {detail:"RJ2"},
        {detail:"RJ3"},
        {detail:"RJ1"},
        {detail:"RJ2"},
        {detail:"RJ3"},
        {detail:"RJ1"},
        {detail:"RJ2"},
        {detail:"RJ3"},
       
    ]
    const [selectedCityRtuDetail, setSelectedCityRtuDetail] = useState(null);
  return (
    <Container className={styles.dropdown}>
         <ScrollBar > 
        <SearchBox className={styles.searchBox}
    kind="normal"
    label="Search RTO or City"
    name="search"
    onBack={function noRefCheck(){}}
    onChange={function noRefCheck(){}}
    onSuffixClick={function noRefCheck(){}}
    showBack
    suffix={<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15a3 3 0 003-3V5a3 3 0 00-6 0v7a3 3 0 003 3zm6-5a1 1 0 00-1 1v1a5 5 0 11-10 0v-1a1 1 0 10-2 0v1a7 7 0 1014 0v-1a1 1 0 00-1-1zm-3 10H9a1 1 0 000 2h6a1 1 0 000-2z" fill="currentColor"/></svg>}
  />

  <Container className={styles.detailsContainer}>

  {cityDetails.map((item,index)=>
   <Container className={styles.data} key={index} onClick={()=>setSelectedCityRtuDetail(item.detail)}>
     <Text appearance='body-s' style={{color:"#141414"}}>{item.detail}</Text>
     {/* <hr></hr> */}
   </Container>
    )} 
</Container>
</ScrollBar>
    </Container>
  )
}

export default CityDropdown