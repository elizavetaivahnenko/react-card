import React, { useEffect, useState } from 'react'
import Card2 from './Card/Card2/card2';
import './card.scss'

export default function Card() {
	const [data, setData] = useState([]);
	const [isActive, setActive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`https://randomuser.me/api/?results=10`)
				.then(res => res.json())
				.then(data=>setData(data.results))
				.catch(rej => rej);
			setIsLoading(true)
		};
		if (isActive && !isLoading) {
			getData()
		}
	}, [isActive, setData, setIsLoading, isLoading]);
  return (
	  <div className='cardContainer'>
		  <div className="card">
		  <div className="imageContainer">
			  {isLoading ? <Card2 data={data}/>: <p>Loading...</p>}
		  </div>
		  <div className='infoContainer'>
			  <button onClick={()=>setActive(true)}>get new user</button>
			  </div>
			  </div>
	 </div>
  )
}
