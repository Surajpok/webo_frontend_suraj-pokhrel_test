import React from 'react'
import "../assets/scss/Stats.scss"
import { statsData } from '../data'
import Scruid from "../assets/images/scruid.svg"
const Stats = () => {
    return (
        <div className="stats_container">
            <img className="scruid" src={Scruid} alt="" />
            <div className="stats_wrapper">
                {statsData.map((item, key) => (
                    <div className={item.class}>
                        <div className="stars_text">
                            <p>{item.proof}</p>
                        </div>
                        <div className="datas">
                            <p className='data'>{item.data}</p>
                            <div className="subdata">
                                <img src={item.svg} alt="" />
                                <p className='text'>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Stats