import React from 'react'
import '../_styles/_home.scss'
import { CgArrowLongDown, CgArrowLongRight } from 'react-icons/cg'
import Header from '../_components/_header'

const Home = () => {
    return (
        <div className='home-container flex col'>
            <Header />
            <div className="top-container flex">
                <div className="left-intro flex col">
                    <h1>Welcome to the Smart Way to Plan Your Career.</h1>
                </div>
                <div className="bottom-container flex">
                    <div className="arrow-bottom flex">
                        <div className="icon flex">
                            <CgArrowLongDown />
                        </div>
                    </div>
                </div>
            </div>
            <div className="how-it-works flex col">
                <h1>Understand the flow</h1>
                <div className="cards flex">
                    <div className="card flex col">
                        <h2>create your profile</h2>
                        <p>Fill out a simple form to share your goals, skills, and interests and get logged in</p>
                        <button className="btn flex">
                            Let's Start
                            <div className="icon flex">
                                <CgArrowLongRight />
                            </div>
                        </button>
                    </div>
                    <div className="card flex col">
                        <h2>Receive Personalized Insights</h2>
                        <p>Our AI analyzes your input to recommend personalized career paths.</p>
                        <button className="btn flex">
                            Let's Start
                            <div className="icon flex">
                                <CgArrowLongRight />
                            </div>
                        </button>
                    </div>
                    <div className="card flex col">
                        <h2>Get Mentored</h2>
                        <p>Engage with your AI mentor or connect with industry professionals for advice.</p>
                        <button className="btn flex">
                            Let's Start
                            <div className="icon flex">
                                <CgArrowLongRight />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="why-choose-us flex col">
                <h1>Why Choose Us</h1>
                <p>At the heart of our platform is a blend of cutting-edge AI technology and expert mentorship, offering you a personalized, data-driven career growth experience. Here's why thousands of professionals trust us to guide their careers.</p>
                <div className="cards flex">
                    <div className="card flex col">
                        <h2>Expert Mentorship</h2>
                        <p>Connect with seasoned professionals who offer valuable, real-world guidance....</p>
                        <button className="btn flex">
                            Read More
                            <div className="icon flex">
                                <CgArrowLongRight />
                            </div>
                        </button>
                    </div>
                    <div className="card flex col">
                        <h2>Actionable Career Roadmaps</h2>
                        <p>Get more than just advice. Our platform gives you a clear, step-by-step car....</p>
                        <button className="btn flex">
                            Read More
                            <div className="icon flex">
                                <CgArrowLongRight />
                            </div>
                        </button>
                    </div>
                    <div className="card flex col">
                        <h2>Seamless User Experience</h2>
                        <p>We’ve designed our platform with simplicity in mind. From signing up to int....</p>
                        <button className="btn flex">
                            Read More
                            <div className="icon flex">
                                <CgArrowLongRight />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
           

        </div>
    )
}

export default Home