//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include styles into the webpack bundle
import "../styles/index.css";
import "../styles/bootstrap.min.css";

// import main component
import Home from "./component/home.jsx";

// counter status control
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
			? counter + 1
			: CounterStatus === reset
			? 0
			: counter;

	MainRender();
}, 1000);

const MainRender = () => {
	CounterStatus = CounterStatus === reset ? play : CounterStatus;

	ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
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

export { PauseCounter, PlayCounter, ResetCounter };
