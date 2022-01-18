import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	const digits = {
		units: Math.floor(Math.abs(props.seconds) % 10),
		ten: Math.floor((Math.abs(props.seconds) / 10) % 10),
		hundred: Math.floor((Math.abs(props.seconds) / 100) % 10),
		thousand: Math.floor((Math.abs(props.seconds) / 1000) % 10),
	};

	return (
		<div className="d-flex justify-content-center p-0 rounded-3">
			<div
				className="digit icon px-2"
				style={
					props.seconds < 0
						? { display: "block" }
						: { display: "none" }
				}>
				-
			</div>

			<div className="digit">{digits.thousand}</div>
			<div className="digit">{digits.hundred}</div>
			<div className="digit">{digits.ten}</div>
			<div className="digit">{digits.units}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number,
};

export default SecondsCounter;
