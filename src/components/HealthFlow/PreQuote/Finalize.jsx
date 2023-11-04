import { Button, Container, Input, Text } from '@jds/core'
import React from 'react'
import styles from '../../../styles/HealthFlow/PreQuote/Finalize.module.scss'
const Finalize = () => {
    const dropdownItems = [
       
]
      
  return (
    <Container className={styles.card}>
        <Text appearance='heading-xs'>Before we finalize... Please help Additional Details</Text>
        <Input type='number' label='Enter your city pincode' required/>
        <Input type='dropdown' dr label='Enter your Annual income' helperText='Eg. Under 5lac, 5-10lac, 10-15lac, 15+'   typeConfig={{
    checkbox: {
      indeterminate: false
    },
    code: {
      length: 6
    },
    dropdown: {
      items: [
        {
            "label": "Under 5 lac",
            "value": "Under 5 lac",
            "disabled": false
          },
          {
            "type": "divider"
          },
          {
            "label": "5 lac to 15 lac",
            "value": "5 lac to 15 lac",
            "disabled": false
          },
          {
            "type": "divider"
          },
          {
            "label": "15 lac to 25 lac",
            "value": "15 lac to 25 lac",
            "disabled": false
          },
          {
            "type": "divider"
          },
          {
            "label": "25 lac +",
            "value": "25 lac +",
            "disabled": false
          },
          {
            "type": "divider"
          },
      ]
    },
    range: {
      editableTextBox: true
    },
    toggle: {
      labelPosition: 'left'
    }
  }}
/>
<Container className={styles.btn}>
    <Button title='Continue'  style={{backgroundColor:"var(--primary-color-60)"}}/>
</Container>

    </Container>
  )
}

export default Finalize