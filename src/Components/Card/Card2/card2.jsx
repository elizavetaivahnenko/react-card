import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'


export default function Card2(props) {
	const { isActive, data } = props;
	const [counter, setCounter] = useState(0);
	const [selectInfo, setSelectInfo] = useState(false);
	const [responce, setResponce] = useState();
	const [buttonIndex, setButtonIndex] = useState();
	const [index, setIndex] = useState();
	const [isClick, setIsClick] = useState(false);
   
	// useEffect(() => {        неудачная попытка сделать отображение информации при нажатии книпки
	// 	if (buttonIndex === 1) {
	// 		setResponce(`phone number: ${data.phone}`);
	// 	} else if (buttonIndex === 2) {
	// 		setResponce(`email: ${data.name}`)
	// 	}
	// }, [setResponce, data]
	// );
	return (
	  <>
	  <div className='imgCont'>
		  <img src={data[counter].picture.large} alt="#" />
		</div>
		<div>
				<p>{data[counter].name.title} {data[counter].name.first}{data[counter].name.last} </p>
				<p>{data[counter].phone}</p>
				<p>{data[counter].email}</p>
		</div>
		<div><button onClick={() => counter === data.length - 1 ? setCounter(0) : setCounter(counter + 1)}>next</button></div> 
			<div><button onClick={()=> counter===0 ?  setCounter(data.length-1): setCounter(counter-1)}>prev</button></div> 
			{/* <p>{responce}</p> */}
	<div>
	{/* <button onClick={()=>buttonIndex===1?setButtonIndex(0):setButtonIndex(1)}><FontAwesomeIcon icon={faPerson} /></button>
	<button onClick={()=>buttonIndex===2 ? setButtonIndex(0):setButtonIndex(2)}><FontAwesomeIcon icon={faPhone} /></button>
	// <button onClick={()=>isClick(true)&&buttonIndex(1)}><FontAwesomeIcon icon={faEnvelope} /></button> */}  
				

				{/* неудачные попытки сделать иконки и при нажатии чтоб менялся текст(((()))) */}
	</div>	
	</>
	
  )
}


