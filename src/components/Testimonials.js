import React from 'react'
import { testimonialsData } from '../data'
import "../assets/scss/Testimonials.scss"
const Testimonials = () => {
    return (
        <div className="testimonials_container">
            {testimonialsData.map((item, key) => (
                <div className="testimonials_wrappers">
                    <h1>{item.heading}</h1>
                    <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
                    <div className="testimonials_boxes">
                        {item.subData.map((box, key) => (
                            <>
                                <div className="testimonial">
                                    <div className="testimonial_content">
                                        <h3>{box.title}</h3>
                                        <p>{box.content}</p>
                                    </div>
                                    <div className="testimonial_img">
                                        <img src={box.img} alt="" />
                                    </div>
                                </div>

                            </>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Testimonials