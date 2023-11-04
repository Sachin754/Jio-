import DownloadApp from '@/components/AboutUs/DownloadApp'
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
import React from 'react'

const Car = () => {
    const banners = [
        {
          banner: "/images/Landing/InsurancePlans/car1.svg",
        },
        {
          banner: "/images/Landing/InsurancePlans/car2.svg",
        },
        {
          banner: "/images/Landing/InsurancePlans/car3.svg",
        },
        {
            banner: "/images/Landing/InsurancePlans/car4.svg",
        },
       
      ];
  const heroData=[
    {
        img:"/images/LandingPage/bannerImg.svg",
        title:"Buy Car Insurance ",
        feature:[
          "Choice of multiple plans",
          "Superfast claims",
          "Fully online process"
        ]
    }
   ]
    const insuranceType = 'Car'
    const car = {
        question:"What to consider while buying a car insurance policy online?",
        factorText:'There are some factors that you should look out for when purchasing car insurance policy online.',
        points:[
          {title:"1. Scope of insurance coverage", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus erat, volutpat eget interdum vel, rutrum ut arcu. Phasellus at id neque tristique tempor id ut orci."},
          {title:"2. Network and cashless hospitals", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus erat, volutpat eget interdum vel, rutrum ut arcu. Phasellus at id neque tristique tempor id ut orci."},
          {title:"3. Add on covers / Rider options", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus erat, volutpat eget interdum vel, rutrum ut arcu. Phasellus at id neque tristique tempor id ut orci."}
        ]
     }
    
  return (
    <>
    <LandingHeroBanner  heroData={heroData} insuranceType={insuranceType}/>  
    <InsuranceCardLandingPage  insuranceType={insuranceType}/>
    <JioAdvantages/>
    <InsurancePlansSection insuranceType={insuranceType}/>
    <KnowledgeHub insuranceType={insuranceType} KnowledgeHub={car}/>
    <HowToBuy/>
    <BlogsCorner/>
    <Testimonials/>
    <Partners/>
    <InsurancePolicyPlans banners={banners}/>
    <Compare/>
    <FaqsComponent/>
    <DownloadApp/>
    <Contact bg={"var(--primary-color-50)"}/>

    
    </>
  )
}

export default Car