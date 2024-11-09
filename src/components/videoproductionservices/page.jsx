import DigitalMarketingServices from '@/components/digitalmarketingservices/Digital-Marketing-Services'
import React from 'react'
import WhyChooseUsForYourNextVideoProject from './WhyChooseUsForYourNextVideoProject'
import Whatkindofvideodoyouneed from './Whatkindofvideodoyouneed'
import VideoProductionServicesBreakdown from './VideoProductionServicesBreakdown'

const page = () => {
    return (
        <>
            <div className="pd_top_70" />
            <DigitalMarketingServices />
            <WhyChooseUsForYourNextVideoProject />
            <Whatkindofvideodoyouneed />
            <VideoProductionServicesBreakdown />
        </>
    )
}

export default page