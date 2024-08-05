
import CardComponents from './cardComponets'

function card({data}) {
  return (
    <div className='cards'>
      {
      data.map((item,index)=>
      <CardComponents plan = {item.plan} price= {item.price} feature = {item.features} nofeature={item.nofeature} key={index}/>
      )
    }
    </div>
  )
}

export default card