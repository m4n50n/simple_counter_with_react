// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include styles into the webpack bundle
import "../styles/index.css";
import "../styles/bootstrap.min.css";

// import main component
import Home from "./component/home.jsx";

// counter control
let countdown = false;
const alarm = {
	status: false,
	seconds: null,
};

const pause = 1;
const play = 2;
const reset = 3;

let CounterStatus = play;

let counter = 0; // counter value
setInterval(() => {
	counter =
		CounterStatus === pause
			? counter
			: CounterStatus === play
			? !countdown
				? counter + 1
				: counter - 1
			: CounterStatus === reset
			? 0
			: counter;

	/* check alarm */
	if (alarm.status && parseInt(alarm.seconds) === counter) {
		alert(`${alarm.seconds} seconds alarm!!`);
	}

	MainRender();
}, 1000);

const MainRender = () => {
	CounterStatus = CounterStatus === reset ? play : CounterStatus;

	ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
};

const ChangeDirection = () => {
	countdown = !countdown;
};

const PauseCounter = () => {
	CounterStatus = pause;
};

const PlayCounter = () => {
	CounterStatus = play;
};

const ResetCounter = () => {
	CounterStatus = reset;
};

const SetAlarm = () => {
	const Alarmvalue = document.querySelector("#alarm-seconds").value;
	if (Alarmvalue.length > 0) {
		alarm.status = !alarm.status;
		alarm.seconds = Alarmvalue;
	}
};

export { ChangeDirection, PauseCounter, PlayCounter, ResetCounter, SetAlarm };
