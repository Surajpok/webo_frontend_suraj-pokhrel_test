import React from 'react'
import { FAQ } from '../data'
import Faq from './reuseable/Faq'
import "../assets/scss/FrequentlyAsked.scss"
import Mail from "../assets/images/mail.png"
import Starsvg from "../assets/images/star.png"
import Roll from "../assets/images/roll.png"
const FrequentlyAsked = () => {
    return (

        <div className="frequently_container">
            <div className="star_svg_box">
                <img className="star_svg" src={Starsvg} alt="" />
                <img className="rool_svg" src={Roll} alt="" />

            </div>
            <div className="faq_wrapper">
                <h1>Fequently asked questions</h1>
                <div className="frequently_wrapper">
                    <div className="faq_section">
                        {FAQ.map((obj, idx) => (
                            <Faq visibleAtStart={idx === 0} question={obj} />
                        ))}
                    </div>
                    <div className="have_any_question">
                        <div className="have_any_content">
                            <img src={Mail} alt="" />
                            <h3>Do you have more questions?</h3>
                            <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>

                        </div>
                        <div className="have_any_button">
                            <button>Shoot a Direct Mail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrequentlyAsked