import React from 'react'
import topData from '../datas/Gg.json'
import '../style/datas.scss'


const Gg = () => {
  return (
    <div className='page'>
      <h1>LG TWINS 역대 골든 글러버</h1>
      <div className='gg conBox'>
        {
          topData.map(item => (
            <div key={item.id} className='inBox'>
              <img src={process.env.PUBLIC_URL +item.image} alt={item.name}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gg