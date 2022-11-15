import React from "react"
import "../assets/scss/Companies.scss"
import { companiesData } from "../data"


const Companies = () => {
  return (
    <div className="companies_container">
      {companiesData.map((item, key) => (
        <div key={item.key} class="wrapper">
          <div className="text">
            <p>{item.content}</p>
          </div>
          <div className="companies">
            <img src={item.company1} alt="" />
            <img src={item.company2} alt="" />
            <img src={item.company3} alt="" />
            <img src={item.company4} alt="" />
            <img src={item.company5} alt="" />
            <img src={item.company6} alt="" />
            <img src={item.company7} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Companies
