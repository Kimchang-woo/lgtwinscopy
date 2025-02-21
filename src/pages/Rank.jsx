import React,{useState} from 'react'
import topData from '../datas/Rank.json'
import '../style/datas.scss'

const Rank = () => {
  const [selectedYear, setselectedYear] = useState('2024');
  const years = [...new Set(topData.map(item => item.name))].sort();
  const filteredData =topData.filter(item => item.name === selectedYear);
  return (
    <div className='page'>
    <h1>LG TWINS 최근 5년간 순위</h1>

    <div className='tab_year'>
      {years.map(year =>(
        <button
        key={year}
        className={selectedYear === year ? 'active' : ''}
        onClick={()=>setselectedYear(year)}
        >{year}</button>
      ))}
    </div>
    <div className='rank conBox'>
      {
        filteredData.map(item => (
          <div key={item.id} className='inBox'>
            <img src={process.env.PUBLIC_URL+ '/' +item.img} alt={item.name}/>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Rank