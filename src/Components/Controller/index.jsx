import React, { useState } from 'react'
// import info from './info.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faEnvelope } from '@fortawesome/free-regular-svg-icons'


export default function Controller(props) {
	// const{person,email,name,adress}=this.props
	const [isWork] = useState(false);
	const changeType = () => {
	
	}
	return (
	  <>
	 <li onClick={changeType} value={1}><FontAwesomeIcon icon={faPerson} /></li>
	 <li><FontAwesomeIcon icon={faEnvelope} /></li>
	<li><FontAwesomeIcon icon={faPhone} /></li>
	 <li><FontAwesomeIcon icon={faBookmark} /></li>
  </>
)
}
