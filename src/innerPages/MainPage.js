import React from 'react'
import innerStyles from './innerstyles.module.css'
import QuickAppoitment from './QuickAppoitment'
import WelcomeSurgiConnect from './WelcomeSurgiConnect'
import WhyChooseUS from './WhyChooseUS'
import HomeBlogs from './HomeBlogs'
import Hospitals from './Hospitals'
const MainPage = () => {
    const steps = [
        { number: "01", text: "Consultation to assess your condition." },
        { number: "02", text: "Suggestion of all possible treatment/surgical options." },
        { number: "03", text: "Admission and care under our expert team." },
        { number: "04", text: "Post care consult and home care services." },
    ]
    return (
        <main>
            <section className='container-fluid p-0'>
                <div className={innerStyles.home}>
                    {/* <h1>WELCOME TO SURGICONNCET</h1> */}
                </div>
            </section>
            <section>
                <WelcomeSurgiConnect />
            </section>

            <section>
                <QuickAppoitment />
            </section>
            <section>
                <WhyChooseUS />
            </section>
            <section>
                <Hospitals />
            </section>
            <section>
                <HomeBlogs />
            </section>
        </main>
    )
}

export default MainPage