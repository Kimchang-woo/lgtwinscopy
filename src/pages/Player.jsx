import React,{useState, useEffect} from 'react'
import topData from '../datas/Player.json'
import '../style/datas.scss'

const Player = () => {
  const [selectedPosition, setselectedPosition] = useState('전체');
  const [filteredData, setfilteredData] =useState(topData);
  const [animatingItems, setAnimatingItems] =useState(new Set());

  const positions = ['전체', ...new Set(topData.map(item=>item.position))];

useEffect(()=>{
  let tempSet = new Set();
  topData.forEach((item)=> tempSet.add(item.id))
  setAnimatingItems(tempSet);

  setTimeout(()=>{
    setfilteredData(
      selectedPosition ==='전체'
      ? topData
      : topData.filter(item => item.position === selectedPosition)
    );
    setAnimatingItems(new Set());
  },300)
},[selectedPosition])
  return (
    <div className='page'>
      <h1>LG TWINS 선수단</h1>
      <div className='tab_position'>
        {positions.map(position => (
          <button
          key={position}
          className={selectedPosition === position ? 'active' : ''}
          onClick={()=> setselectedPosition(position)}
          >{position}</button>
        ))}
          
      </div>
      <div className='player conBox'>  
        {
          filteredData.map(item => (
            <div key={item.id} className='inBox'>
              <img 
              src={process.env.PUBLIC_URL+ '/' +item.image} 
              alt={item.name} 
              className={animatingItems.has(item.id) ? 'fade-out' : 'fade-in'} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Player