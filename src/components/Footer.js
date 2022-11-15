import React from 'react'
import "../assets/scss/Footer.scss"
import Linkedin from "../assets/images/linkedin.png"
import Facebook from "../assets/images/facebook.png"
import Twitter from "../assets/images/twitter.png"
import Twoo from "../assets/images/twoo.png"
const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_wrapper">
                <div className="about">
                    <h3>AR Shakir</h3>
                    <div className="about_content">
                        <p>Finance helps companies manage payments easily.</p>
                        <div className="social_img">
                            <img src={Linkedin} alt="" />
                            <img src={Facebook} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Twoo} alt="" />
                        </div>
                    </div>
                    <div className="social_icons"></div>
                </div>
                <div className="company">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="resources">
                    <h3>Resources</h3>
                    <ul>
                        <li>Proposal Template</li>
                        <li>Invoice Template</li>
                        <li>Tutoroial</li>
                        <li>How to write a contract</li>
                    </ul>

                </div>
                <div className="newsletter">
                    <h3>Join Our Newsletter</h3>
                    <div className="form">
                        <input type="gmail" placeholder="Your email address" />
                        <button type='submit'>Subscribe</button>
                    </div>
                    <p>*  Will send you weekly updates for your better finance management.</p>
                </div>
            </div>
            <div className="hr" ></div>
            <div className="copyright">
                <p>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer