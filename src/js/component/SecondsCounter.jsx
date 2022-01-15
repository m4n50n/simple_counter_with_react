import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const SecondsCounter = (props) => {
	return (
		<div className="d-flex justify-content-center p-1 rounded-3">
			<div className="digit icon">
				<FontAwesomeIcon icon={faClock} />
			</div>

			<div className="digit">{props.digits.four}</div>
			<div className="digit">{props.digits.three}</div>
			<div className="digit">{props.digits.two}</div>
			<div className="digit">{props.digits.one}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	digits: PropTypes.object,
};

export default SecondsCounter;
