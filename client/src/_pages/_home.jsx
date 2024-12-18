import React from 'react'
import '../_styles/_home.scss'
import { CgArrowLongDown } from 'react-icons/cg'
import Header from '../_components/_header'

const Home = () => {
    return (
        <div className='home-container flex'>
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
        </div>
    )
}

export default Home