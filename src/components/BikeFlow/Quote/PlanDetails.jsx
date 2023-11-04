import { Button, Container, Icon, Text } from '@jds/core'
import React from 'react'
import styles from '../../../styles/BikeFlow/Quote/PlanDetails.module.scss'
import Image from 'next/image'

import { IcChevronRight } from '@jds/core-icons'
import { useRouter } from 'next/router'
const PlanDetails = (props) => {

    const router = useRouter();
    const { setShowPlanDetails, basicCover, DiscountAmount, TaxAmount, selectedPlan, NCBValue } = props;
    const policyDetails = [
        { field: "Cover Value (IDV)", value: `₹ ${selectedPlan?.CoverAmount || 0}` },
        { field: "Tenure", value: `₹ ${selectedPlan?.Tenure || 0} Yrs` },
        { field: "No claim bonus", value: NCBValue }
    ]
    const premiumAmount = selectedPlan?.BasicTPPremium + selectedPlan?.NewNcbDiscountAmount + selectedPlan?.TaxAmount

    return (
        <Container className={styles.planDetails}>
            <Container className={styles.topContainer} displayOn='tablet'>
                <Icon ic='IcClose' className={styles.close} style={{ cursor: "pointer" }} onClick={() => setShowPlanDetails(false)} />
            </Container>
            <Container className={styles.bankDetails}>
                <Container>
                    <Image src={selectedPlan?.InsuranceImg} width={200} height={100} alt="bank" />
                </Container>
                <Container>
                    <Text appearance='body-m-bold' className={styles.bankName}>{selectedPlan?.InsuranceFrom}</Text>
                    <Text appearance='body-xxs' className={styles.policyType}>Third Party Policy</Text>
                </Container>

            </Container>
            <Container className={styles.policyDetails}>
                {policyDetails.map((item, index) =>
                    <Container className={styles.policyData} key={index}>
                        <Text className={styles.field} appearance='body-xxs'>{item.field}</Text>
                        <Text className={styles.value} appearance='body-s-bold'>{item.value}</Text>
                    </Container>
                )}

            </Container>
            <hr></hr>
            <Container className={styles.breakupSection}>
                <Text appearance='heading-xs' className={styles.heading}>
                    Premium breakup
                </Text>
                <Container className={styles.priceBreak}>
                    <Text className={styles.title} appearance='body-s-bold'>Base Cover</Text>
                    <Container className={styles.subPrice}>
                        <Text className={styles.subTitle} appearance='body-s'>Basic Third Party Cover</Text>
                        <Text className={styles.amount} appearance='body-s-bold'>₹{selectedPlan?.BasicTPPremium || 0}</Text>
                    </Container>
                </Container>
                <Container className={styles.priceBreak}>
                    <Text className={styles.title} appearance='body-s-bold'>Add-on & Accessories</Text>
                    <Container className={styles.subPrice}>
                        <Text className={styles.subTitle} appearance='body-s'>Bi Fuel Liability Premium</Text>
                        <Text className={styles.amount} appearance='body-s-bold'>₹{selectedPlan?.BasicODPremium || 0}</Text>
                    </Container>
                </Container>
                <Container className={styles.priceBreak}>
                    <Text className={styles.title} appearance='body-s-bold'>Discount</Text>
                    <Container className={styles.subPrice}>
                        <Text className={styles.subTitle} appearance='body-s'>No Claim Bonus</Text>
                        <Text className={styles.amount} appearance='body-s-bold'>₹{selectedPlan?.NewNcbDiscountAmount || 0}</Text>
                    </Container>
                </Container>
                <hr></hr>
                <Container className={styles.priceBreak}>
                    <Container style={{ display: "flex", justifyContent: "space-between" }}>
                        <Text className={styles.title} appearance='body-s-bold'>Total Premium</Text>
                        <Text appearance='body-s-bold'>₹{(selectedPlan?.BasicTPPremium + selectedPlan?.NewNcbDiscountAmount) || 0}</Text>
                    </Container>
                    <Container className={styles.subPrice}>
                        <Text className={styles.subTitle} appearance='body-s'>GST (18%)</Text>
                        <Text className={styles.amount} appearance='body-s-bold'>₹{selectedPlan?.TaxAmount}</Text>
                    </Container>
                </Container>
                <hr></hr>
                <Container className={styles.priceBreak}>
                    <Container style={{ display: "flex", justifyContent: "space-between" }}>
                        <Text className={styles.title} appearance='body-s-bold'>Final Premium</Text>
                        <Text appearance='heading-xs' style={{ color: "#249F21" }}>₹ {premiumAmount ? premiumAmount : 0}</Text>
                    </Container>
                </Container>
            </Container>
            <Container className={styles.btnSection}>
                <Button className={styles.btn} title='Proceed to KYC' onClick={() => router.push('/kyc')} />
            </Container>
        </Container>
    )
}

export default PlanDetails