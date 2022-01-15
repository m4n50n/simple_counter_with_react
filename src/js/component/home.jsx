import React from "react";
import PropTypes from "prop-types";

import SecondsCounter from "./SecondsCounter.jsx";
import CounterControls from "./CounterControls.jsx";

const Home = (props) => {
	const digits = {
		one: Math.floor(props.counter % 10),
		two: Math.floor((props.counter / 10) % 10),
		three: Math.floor((props.counter / 100) % 10),
		four: Math.floor((props.counter / 1000) % 10),
	};

	return (
		<div className="container-fluid bg-dark bg-opacity-25">
			<div className="row pt-3 justify-content-center">
				<div className="col-auto">
					<h1 className="text-center">
						Seconds-Counter with{" "}
						<strong>
							<i>React</i>
						</strong>
					</h1>

					<SecondsCounter digits={digits} />
					<CounterControls />
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	counter: PropTypes.number,
};

export default Home;
