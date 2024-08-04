import './maincontent.css';
import LeftSide from './leftside';
import RightSide from './rightside';
import CentreSide from './centreside';
import { useEffect, useState } from 'react';

function MainContent(props) {
  const [activeFilter, setActiveFilter] = useState("")
  
  return(
    <div className='maincontent'>
               <LeftSide onFilterSelected={filter=>setActiveFilter(filter)}></LeftSide>
               <CentreSide activeFilter={activeFilter}></CentreSide>
               <RightSide></RightSide>
    </div>
  );
}

export default MainContent