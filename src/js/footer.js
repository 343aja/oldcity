import React from 'react'
import facebook from '../img/facebook.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import dribbble from '../img/dribbble.svg'
import "../css/footer.css"


const Footer = () => {
  return (
    <section className='footer'>
        <div className='container'>
            <div className='frame-containerr'>
                <div className="frame-chiled-container">
                Copyright © 2023 Oldcity Studio. All rights reserved.
                </div>
                <div className='frame-contact'>
                    <div className="facrbook">
                        <img  src={facebook} alt="" />
                    </div>
                    <div className='linkdin'>
                        <img src={linkedin} alt="" />
                    </div>
                    <div className='github'>
                        <img src={github} alt="" />
                    </div>
                    <div className='dribble'>
                        <img src={dribbble} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Footer