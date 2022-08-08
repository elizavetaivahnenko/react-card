import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'


export default function Card2(props) {
	const { isActive, data } = props;
	const [counter, setCounter] = useState(0);
	const user = data[counter];
	const [getUserID, setGetUserID] = useState();
	const [infoText, setInfoText] = useState();

	const buttonClick = (id) => getUserID === id ? setGetUserID(0) : setGetUserID(id);
	useEffect(() => {
		if (getUserID === 1) {
			setInfoText(`${user.name.first} ${user.name.last}`)
		} else if (getUserID === 2) {
			setInfoText(user.phone)
		} else if(getUserID===3) {
			setInfoText(user.email)
		} else {
		setInfoText('hello')
		}
	}, [getUserID, setInfoText])
	
	return (
	  <>
	  <div className='imgCont'>
		  <img src={user.picture.large} alt="#" />
		</div>
		<div>
				<p>{infoText}</p>
		</div>
		<div><button onClick={() => counter === data.length - 1 ? setCounter(0) : setCounter(counter + 1)}>next</button></div> 
		<div><button onClick={()=> counter===0 ?  setCounter(data.length-1): setCounter(counter-1)}>prev</button></div> 
	<div>
	<button onClick={()=>buttonClick(1)}><FontAwesomeIcon icon={faPerson} /></button>
	<button onClick={()=>buttonClick(2)}><FontAwesomeIcon icon={faPhone} /></button>
	<button onClick={()=>buttonClick(3)}><FontAwesomeIcon icon={faEnvelope} /></button> 
	</div>	
	</>
	
  )
}


