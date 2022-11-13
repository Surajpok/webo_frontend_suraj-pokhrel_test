import React from "react"
import "../assets/scss/ValueProps.scss"
import Wallet from "../assets/images/wallet.png"
import Transaction from "../assets/images/transaction.png"
import Income from "../assets/images/income.png"
const ValueProps = () => {
    return (
        <div className="value_pops_container">
            <div className="wrapper">
                <div className="row">
                    <p className="number">01</p>
                    <div className="image">
                        <img src={Wallet} alt="" />
                    </div>
                    <div className="title">
                        <h2>Connect wallets & companies</h2>
                    </div>
                    <div className="paragraph">
                        <p>
                            Indulgence way everything joy alteration boisterous the
                            attachment. Party we years to order allow asked of.
                        </p>
                    </div>
                </div>
                <div className="row">
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
                </div>
            </div>
        </div>
    )
}

export default ValueProps
