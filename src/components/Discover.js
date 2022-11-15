import React from 'react'
import "../assets/scss/Discover.scss"
import Netsvg from "../assets/images/net.svg"
import Conesvg from "../assets/images/cone.svg"
import ConeOne from "../assets/images/cone1.svg"
import Jigjag from "../assets/images/jigjag.png"
import JigjagOne from "../assets/images/jigjag1.png"



const Discover = () => {
    return (
        <div className="discover_container">
            <div className="discover_wrapper">
                <img className="net_svg" src={Netsvg} alt="" />
                <img className="cone_svg" src={Conesvg} alt="" />
                <img className="cone_one_svg" src={ConeOne} alt="" />
                <img className="jigjag_svg" src={Jigjag} alt="" />
                <img className="jigjag_one_svg" src={JigjagOne} alt="" />
                <div className="discover_title">
                    <h2>Discover a better way to manage spendings</h2>
                </div>
                <div className="discover_button">
                    <button>
                        Get Started Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Discover