import React from 'react'
import Card from "./components/card"

const cardData = [{
  plan: "FREE",
  price: "$0/Month",
  features: ["Single users","50GB storage","Unlimited Public Projects","Community Access"],
  nofeature:["Unlimited Private Projects","Dedicated Phone Supports","Free Subdomain","Monthly Status Report"]
  },
  {
    plan: "PLUS",
    price: "$9/Month",
    features: ["5 users","50GB storage","Unlimited Public Projects","Community Access",
      "Unlimited Private Projects","Dedicated Phone Supports","Free Subdomain"],
    nofeature:["Monthly Status Report"]   
  },
  {
    plan: "PRO",
    price: "$49/Month",
    features: ["Unlimited users","50GB storage","Unlimited Public Projects","Community Access",
      "Unlimited Private Projects","Dedicated Phone Supports","Free Subdomain","Monthly Status Report"],
    nofeature:[]
  }
  ]
function App() {
  
  
    return(
      <Card data={cardData}></Card>
    )
}

export default App
