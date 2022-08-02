import React from 'react'
import style from './card.scss'
import Controller from '../Controller'

export default function Card(props) {
	// const{imsge, name, infoType}=this.props
  return (
	  <div className="cardContainer">
		  <div className="card">
		  <div className="imageContainer">
			  <img src="" alt="" />
		  </div>
			  <div className="infoContainer">
				  <p>liza</p>
				  <p>lllll</p>
			  {/* <p>{infoType}:</p>
			  <p>{name}</p> */}
		  </div>
		  <section className='atherInformation'>
			 <Controller/>
		  </section>
		  <div className="btnContainer">
			  <button>RANDOME USER</button>
			  </div>
		</div>
	 </div>
  )
}
