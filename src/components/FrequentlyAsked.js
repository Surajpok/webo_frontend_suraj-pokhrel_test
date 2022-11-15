import React from 'react'
import { FAQ } from '../data'
import Faq from './reuseable/Faq'
import "../assets/scss/FrequentlyAsked.scss"

const FrequentlyAsked = () => {
    return (

        <div className="frequently_container">
            <div className="frequently_wrapper">
                <div className="faq_section">
                    {FAQ.map((obj, idx) => (
                        <Faq visibleAtStart={idx === 0} question={obj} />
                    ))}
                </div>
                <div className="have_any_question">
                    <div className="have_any_content">
                        <h3>Have Any Question</h3>
                    </div>
                    <div className="have_any_button">Ok lets see</div>
                </div>
            </div>
        </div>
    )
}

export default FrequentlyAsked