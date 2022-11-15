import { React, useState } from 'react';
import "../../assets/scss/Faq.scss"

const Faq = ({ question, visibleAtStart }) => {
    const [answerVisible, setAnswerVisible] = useState(visibleAtStart ? true : false);
    return (

        <div onClick={() => setAnswerVisible(prev => !prev)} className="FAQCard">
            <div className="questionHeader">
                <h3>{question.question}</h3>
                <div className={`${answerVisible ? "chefron-down" : "chefron-right"}`} />
            </div>
            <p className={`${answerVisible ? "visible" : "invisible"} answer`}>{question.answer}</p>
        </div>

    )
}

export default Faq