import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./counter.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Simple Counter</h1>
			<Counter />
			<p>
				Made by Jessie B
			</p>
		</div>
	);
};

export default Home;
