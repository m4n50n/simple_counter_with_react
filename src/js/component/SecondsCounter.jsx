import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const SecondsCounter = (props) => {
	return (
		<div className="counter-container">
			<div className="digit">
				<span className="digit-box">
					<FontAwesomeIcon icon={faClock} />
				</span>
			</div>
			<div className="digit">
				<span className="digit-box">{props.digits.six % 10}</span>
			</div>
			<div className="digit">
				<span className="digit-box">{props.digits.five % 10}</span>
			</div>
			<div className="digit">
				<span className="digit-box">{props.digits.four % 10}</span>
			</div>
			<div className="digit">
				<span className="digit-box">{props.digits.three % 10}</span>
			</div>
			<div className="digit">
				<span className="digit-box">{props.digits.two % 10}</span>
			</div>
			<div className="digit">
				<span className="digit-box">{props.digits.one % 10}</span>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	digits: PropTypes.object,
};

export default SecondsCounter;
