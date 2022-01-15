import React from "react";
import { PauseCounter, PlayCounter, ResetCounter } from "../index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faUndo } from "@fortawesome/free-solid-svg-icons";

const CounterControls = () => {
	return (
		<div className="d-flex justify-content-center mt-2">
			<div className="counter-controls d-flex justify-content-center p-2 gap-4 bg-light rounded-3 shadow-sm">
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
			</div>
		</div>
	);
};

export default CounterControls;
