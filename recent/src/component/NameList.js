import React from 'react';
import LadiesList from './LadiesList';

function NameList() {
    const name =["Durga", "Laxmi","Ganesh","Kartikeya","Saraswati"]
    
const nameList = name.map((name,index) =><h2 key={index}>{index} {name}</h2>)
return (
    <div>
     {nameList}
    </div>
  );
}

export default NameList;
