import React from "react"
import "../assets/scss/Companies.scss"
import Company1 from "../assets/images/companies/Group.png"
import Company2 from "../assets/images/companies/Group-1.png"
import Company3 from "../assets/images/companies/Group-2.png"
import Company4 from "../assets/images/companies/Group-3.png"
import Company5 from "../assets/images/companies/Group-4.png"
import Company6 from "../assets/images/companies/Group-5.png"
import Company7 from "../assets/images/companies/Group-6.png"

const Companies = () => {
  return (
    <div className="companies_container">
      <div class="wrapper">
        <div className="text">
          <p>Over 32k+ software businesses growing with AR Shakir.</p>
        </div>
        <div className="companies">
          <img src={Company1} alt="" />
          <img src={Company2} alt="" />
          <img src={Company3} alt="" />
          <img src={Company4} alt="" />
          <img src={Company5} alt="" />
          <img src={Company6} alt="" />
          <img src={Company7} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Companies
