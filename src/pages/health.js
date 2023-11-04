import DownloadApp from '@/components/AboutUs/DownloadApp'
import Faqs from '@/components/AboutUs/Faqs'
import FaqsComponent from '@/components/AboutUs/FaqsComponent'
import BlogsCorner from '@/components/Blogs/BlogsCorner'
import Contact from '@/components/Home/Contact'
import JioAdvantages from '@/components/Home/JioAdvantages'
import Partners from '@/components/Home/Partners'
import InsurancePlansSection from '@/components/InsurancePlansSection'
import Compare from '@/components/Landing/Compare'
import HowToBuy from '@/components/Landing/HowToBuy'
import InsuranceCardLandingPage from '@/components/Landing/InsuranceCardLandingPage'
import InsurancePolicyPlans from '@/components/Landing/InsurancePolicyPlans'
import KnowledgeHub from '@/components/Landing/KnowledgeHub'
import LandingHeroBanner from '@/components/Landing/LandingHeroBanner'
import Testimonials from '@/components/Testimonials'
import React,{useState} from 'react'

const Health = () => {

const insuranceType = 'Health'
const health ={
  question:"What to consider while buying a health insurance policy online?",
  factorText:'There are some factors that you should look out for when purchasing health insurance policy online.',
  points:[
    {title:"1. Scope of insurance coverage", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus erat, volutpat eget interdum vel, rutrum ut arcu. Phasellus at id neque tristique tempor id ut orci."},
    {title:"2. Network and cashless hospitals", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus erat, volutpat eget interdum vel, rutrum ut arcu. Phasellus at id neque tristique tempor id ut orci."},
    {title:"3. Add on covers / Rider options", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus erat, volutpat eget interdum vel, rutrum ut arcu. Phasellus at id neque tristique tempor id ut orci."}
  ]
}


   const heroData=[
    {
        img:"/images/LandingPage/bannerImg.svg",
        title:"Buy Health Policy ",
        feature:[
          "Hassle-free buying process",
          "Superfast claims",
          "Fully online process"
        ]
    }
   ]
   const banners = [
    {
      banner: "/images/Landing/InsurancePlans/healthbanner1.svg",
    },
    {
      banner: "/images/Landing/InsurancePlans/healthbanner2.svg",
    },
    {
      banner: "/images/Landing/InsurancePlans/healthbanner3.svg",
    },
    // {
    //   banner: "/images/Landing/InsurancePlans/banner4.png",
    // },
  ];

  return (
   <>
    <LandingHeroBanner heroData={heroData}  insuranceType={insuranceType}/>
    <InsuranceCardLandingPage insuranceType={insuranceType}/>
    <JioAdvantages/>
    <InsurancePlansSection insuranceType={insuranceType}/>
    
    <KnowledgeHub insuranceType={insuranceType} KnowledgeHub={health}/>
    <HowToBuy/>
    <BlogsCorner/>
    <Testimonials/>
    <Partners/>
    <InsurancePolicyPlans banners={banners}/>
    <Compare/>
    <FaqsComponent/>
    <DownloadApp/>
    <Contact />
   </>
  )
}

export default Health;
