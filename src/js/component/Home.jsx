import React from "react";
import Timer from "./Timer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Simple Counter</h1>
			<Timer />
			<p>
				Made by Jessie B
			</p>
		</div>
	);
};

export default Home;
