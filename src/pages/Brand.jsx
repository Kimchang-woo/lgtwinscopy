import React from 'react'
import topData from '../datas/Brand.json'
import '../style/datas.scss'

const Brand = () => {
  return (
    <div className='page'>
      <h1>LG TWINS BI</h1>
      <div className='brand conBox'>
        {
          topData.map(item => (
            <div key={item.id} className='inBox'>
              <h2>{item.name}</h2>
              <img src={process.env.PUBLIC_URL+ '/' + item.img} alt={item.name}/>
            </div>
          ))
       }
      </div>
    </div>
  )
}

export default Brand

