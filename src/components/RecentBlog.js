import React from 'react'
import { blogData } from '../data'
import "../assets/scss/RecentBlog.scss"
const RecentBlog = () => {
    return (
        <div className="blog_container">
            {blogData.map((item, key) => (
                <div className="blog_wrapper">
                    <h1>{item.heading}</h1>
                    <div className="blog_boxes">
                        {item.subData.map((box, key) => (
                            <>
                                <div className={box.class}>
                                    <div className="blog_content">
                                        <p>{box.top}</p>
                                        <h3>{box.title}</h3>
                                    </div>
                                    <div className="blog_img">
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

export default RecentBlog