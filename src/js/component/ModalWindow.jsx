import React from "react";
import { SetAlarm } from "../index";

const ModalWindow = () => {
	return (
		<div className="modal" id="alarm-modal">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header py-2 px-3 border-1">
						<h5 className="modal-title">Add alarm</h5>
						<button
							type="button"
							className="btn-close btn-sm"
							data-bs-dismiss="modal"
							aria-label="Close"></button>
					</div>
					<div className="modal-body d-flex flex-wrap justify-content-start align-items-center gap-2">
						<p className="m-0">
							Notify me when the counter value is
						</p>
						<input
							type="number"
							id="alarm-seconds"
							className="form-control form-control-sm shadow-none w-auto"
						/>
					</div>
					<div className="modal-footer border-0 justify-content-start pt-0">
						<button
							type="button"
							className="btn btn-dark"
							data-bs-dismiss="modal"
							onClick={SetAlarm}>
							<strong>Set</strong> alarm
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalWindow;
