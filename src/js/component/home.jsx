import React from "react";
import PropTypes from "prop-types";

import SecondsCounter from "./SecondsCounter.jsx";

const Home = (props) => {
	const digits = {
		one: Math.floor(props.counter),
		two: Math.floor(props.counter / 10),
		three: Math.floor(props.counter / 100),
		four: Math.floor(props.counter / 1000),
		five: Math.floor(props.counter / 10000),
		six: Math.floor(props.counter / 100000),
	};

	return <SecondsCounter digits={digits} />;
};

Home.propTypes = {
	counter: PropTypes.number,
};

export default Home;
