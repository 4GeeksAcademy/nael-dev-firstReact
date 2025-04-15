import React from "react";
import { Card,Nav,Foot,GroupCard} from "./Card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";




//create your first component
const Home = () => {

	

	return (
		<>
			<Nav/>
			<div className="p-5 mb-4 bg-body-tertiary rounded-3">
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold"></h1>
					<p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron,
						just like the one in previous versions of Bootstrap.
						Check out the examples below for how you can remix and restyle it to your liking.
					</p>
					<button className="btn btn-primary btn-lg" type="button">Ejemplo</button>
				</div>
			</div>
			

			<GroupCard/>
				
			


			
			<div className="d-flex justify-content-center bg-success">
				<Foot/>
			</div>


		</>
	);
};

export default Home;