
function CardComponents({plan,price,feature,nofeature}){
    return(
        <div className="card-area">
            <div className="plan">{plan}</div>
            <div className="price">{price}</div>
            <div className="feature">
                {
                    feature.map((item,index)=>
                    <p>&#x2713; {item}</p> 
                    )
                }
            </div>
            <div className="nofeature">
                {
                    nofeature.map((item,index)=>
                    <p>&#x2715; {item}</p> 
                    )
                }
            </div>
            <button className="button">BUTTON</button>
        </div>
    )
}
export default CardComponents