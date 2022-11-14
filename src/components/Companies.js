import React from "react"
import "../assets/scss/Companies.scss"
import { companiesData } from "../data"
import company1 from "../assets/images/companies/Group.png"
import company2 from "../assets/images/companies/Group-1.png"
import company3 from "../assets/images/companies/Group-2.png"
import company4 from "../assets/images/companies/Group-3.png"
import company5 from "../assets/images/companies/Group-4.png"
import company6 from "../assets/images/companies/Group-5.png"
import company7 from "../assets/images/companies/Group-6.png"

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
