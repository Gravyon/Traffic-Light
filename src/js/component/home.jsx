import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [stateRed, setRed] = useState("btn btn-dark");
	const [stateYellow, setYellow] = useState("btn btn-dark");
	const [stateGreen, setGreen] = useState("btn btn-dark");

	const prenderRojo = () => {
		if (stateRed === "btn btn-dark" || stateRed === "btn btn-success") {
			setRed("btn btn-danger")
			setYellow("btn btn-dark")
			setGreen("btn btn-dark")
		}
		// stateRed === "btn btn-dark"?setRed("btn btn-danger"):setYellow("btn btn-dark")
		
	}
	const prenderAmarillo = () => {
		if (stateYellow === "btn btn-dark" || stateYellow === "btn btn-success") {
			setYellow("btn btn-warning")
			setRed("btn btn-dark")
			setGreen("btn btn-dark")
		}
		// stateYellow === "btn btn-dark"?setYellow("btn btn-warning"):setYellow("btn btn-dark")
	}
	const prenderVerde = () => {
		if (stateGreen === "btn btn-dark" || stateGreen === "btn btn-warning") {
			setGreen("btn btn-success")
			setRed("btn btn-dark")
			setYellow("btn btn-dark")

		}
		// stateGreen === "btn btn-dark"?setGreen("btn btn-success"):setGreen("btn btn-dark")
	}
	const buttonCycle = () =>{

		prenderRojo()
		prenderAmarillo()
		prenderVerde()


	}

	const botonExtra = () => {		
		return (
		<div className="col-mx extra p-1">
		<button type="button" className="btn btn-info btn-lg p-5 rounded-circle" style={{fontSize : "15rem"}}></button></div>
		);
}

	return (
	<div className="container-fluid p-2 p-5 d-flex justify-content-center">
		<div className="row text-center bg-secondary " style={{width : "7rem", height: "20rem"}}>
			<div className="container-fluid col-mx rojo p-1">
			<button type="button" onClick={prenderRojo} className={stateRed+" btn-lg p-5 rounded-circle"} style={{fontSize : "15rem"}}></button></div>
			<div className="col-mx amarillo p-1">
			<button type="button" onClick={prenderAmarillo} className={stateYellow+" btn-lg p-5 rounded-circle"} style={{fontSize : "15rem"}}></button></div>
			<div className="col-mx verde p-1">
			<button type="button" onClick={prenderVerde} className={stateGreen+" btn-lg p-5 rounded-circle"} style={{fontSize : "15rem"}}></button></div>
			<div>
			<button type="button" onClick={buttonCycle} class="btn btn-dark p-3 mt-3">Cycle</button>
			</div>
	</div>
</div>  

	);
};

export default Home;
