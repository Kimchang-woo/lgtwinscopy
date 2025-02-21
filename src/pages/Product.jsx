import React, {useEffect} from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom';
import '../style/datas.scss'

import Teamwear from '../datas/Teamwear.json'
import Fashion from '../datas/Fashion.json'
import Cap from '../datas/Cap.json'
import Acc from '../datas/Acc.json'

const ProductList = ({data}) => {
  return(
    <div className='product conBox'>
      {data.map((item)=> (
        <div key={item.id} className='product-item'>
          <img src={process.env.PUBLIC_URL +item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}원</p>
        </div>
      ))}
    </div>
  )
}

const Product = () => {
  const navigate =useNavigate();

  useEffect(()=>{
    navigate('teamwear', { replace: true });
  },[])
  
  return (
    <div className='page'> 
    <h1>TWINS 쇼핑몰</h1>
      <div className="btnBox">
        <button onClick={() => navigate('/product/teamwear')}>Teamwear</button>
        <button onClick={() => navigate('/product/fashion')}>Fashion</button>
        <button onClick={() => navigate('/product/cap')}>Cap</button>
        <button onClick={() => navigate('/product/acc')}>Acc</button>
      </div>  

      <Routes>
          <Route path="teamwear" element={<ProductList data={Teamwear} />} />
          <Route path="fashion" element={<ProductList data={Fashion} />} />
          <Route path="cap" element={<ProductList data={Cap} />} />
          <Route path="acc" element={<ProductList data={Acc} />} />
      </Routes>
    </div>
  )
}

export default Product