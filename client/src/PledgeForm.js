import React from "react";
import "./pledge-form.css"
import FormID from "./FormID"
import CustomerContact from "./CustomerContact"
import OrnamentDetails from "./OrnamentDetails"

class PledgeForm extends React.Component {
    render() {
		return (
			<div className="container">
				<h1>Pledge Form</h1>
				<FormID />
				<form id="pedge-form">
					<CustomerContact />
					<OrnamentDetails />
				</form>
			</div>
		);
	}
}

export default PledgeForm;