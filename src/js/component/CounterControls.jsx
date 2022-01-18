import React from "react";
import {
	ChangeDirection,
	PauseCounter,
	PlayCounter,
	ResetCounter,
} from "../index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faExchangeAlt,
	faPause,
	faPlay,
	faUndo,
	faUserClock,
} from "@fortawesome/free-solid-svg-icons";

const CounterControls = () => {
	return (
		<div className="d-flex justify-content-center mt-2">
			<div className="counter-controls d-flex justify-content-center p-2 gap-4 bg-light rounded-3 shadow-sm">
				<FontAwesomeIcon
					title="Countdown / Countup"
					icon={faExchangeAlt}
					onClick={ChangeDirection}
				/>
				<FontAwesomeIcon
					title="Pause counter"
					icon={faPause}
					onClick={PauseCounter}
				/>
				<FontAwesomeIcon
					title="Play counter"
					icon={faPlay}
					onClick={PlayCounter}
				/>
				<FontAwesomeIcon
					title="Restart counter"
					icon={faUndo}
					onClick={ResetCounter}
				/>
				<FontAwesomeIcon
					title="Set alarm"
					icon={faUserClock}
					data-bs-toggle="modal"
					data-bs-target="#alarm-modal"
				/>
			</div>
		</div>
	);
};

export default CounterControls;
