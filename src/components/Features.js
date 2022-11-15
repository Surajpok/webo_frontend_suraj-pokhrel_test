import React from 'react'
import "../assets/scss/Features.scss"
import { featuresData } from "../data"
import Dashsvg from "../assets/images/dash.png"
const Features = () => {
    return (
        <div className="features_container">
            <img className="dash_svg" src={Dashsvg} alt="" />
            {featuresData.map((item, key) => (
                <div className="features_wrappers">
                    <h1>{item.heading}</h1>
                    <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
                    <div className="features_boxes">
                        {item.subData.map((box, key) => (
                            <div className={box.class}>
                                <img src={box.img} alt="" />
                                <h3>{box.title}</h3>
                                <p>{box.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Features