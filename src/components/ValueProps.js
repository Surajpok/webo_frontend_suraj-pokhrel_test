import React from "react"
import "../assets/scss/ValueProps.scss"
import { valuePropsData } from "../data"
const ValueProps = () => {
    return (
        <div className="value_pops_container">
            <div className="wrapper">
                {valuePropsData.map((item, key) => (
                    <div key={key} className="row">
                        <p className="number">{item.position}</p>
                        <div className="image">
                            <img src={item.img} alt={item.desc} />
                        </div>
                        <div className="title">
                            <h2>{item.title}</h2>
                        </div>
                        <div className="paragraph">
                            <p>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))
                }

                {/* <div className="row">
                    <p className="number">02</p>
                    <div className="image">
                        <img src={Transaction} alt="" />
                    </div>
                    <div className="title">
                        <h2>Review transactions</h2>
                    </div>
                    <div className="paragraph">
                        <p>
                            Indulgence way everything joy alteration boisterous the
                            attachment. Party we years to order allow asked of.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p className="number">03</p>
                    <div className="image">
                        <img src={Income} alt="" />
                    </div>
                    <div className="title">
                        <h2>Get income insights</h2>
                    </div>
                    <div className="paragraph">
                        <p>
                            Indulgence way everything joy alteration boisterous the
                            attachment. Party we years to order allow asked of.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ValueProps
