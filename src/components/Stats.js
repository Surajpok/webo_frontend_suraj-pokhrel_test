import React from 'react'
import "../assets/scss/Stats.scss"
import { statsData } from '../data'
const Stats = () => {
    return (
        <div className="stats_container">

            <div className="stats_wrapper">
                {statsData.map((item, key) => (
                    <div className={item.class}>
                        <div className="stars_text">
                            <p>{item.proof}</p>
                        </div>
                        <div className="datas">
                            <p>{item.data}</p>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Stats