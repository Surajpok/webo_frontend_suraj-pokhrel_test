import React from 'react'
import "../../assets/scss/Quote.scss"

const Quote = (props) => {
    return (
        <div className="section_heading_quote">
            <img src={props.img} alt="quote" />
            <div className="quote">
                <q>
                    {props.quote}
                </q>
            </div>
            <div className="author">
                <p>{props.author}</p>
            </div>
        </div>
    )
}

export default Quote