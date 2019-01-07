import React from "react";
import "./pledge-form.css"

class CustomerContact extends React.Component {
	render() {
		return (
			<div>
				<div className="two-col">
	    			<div className="col1">
		    			<label>First Name</label>
						<input name="fname" type="text"/>
					</div>

					<div className="col2">
						<label>Last Name</label>
						<input name="lname" type="text"/>
					</div>
				</div>
				<div className="two-col">
					<div className="col1">
	    				<label>Phone Number</label>
	    				<input name="ph" type="text"/>
					</div>

					<div className="col2">
	    				<label>Email</label>
	    				<input name="email" type="text"/>
					</div>
				</div>
				<label>Address</label>
	    		<textarea rows="4" name="address" type="text" />
    		</div>
		);
	}
}


export default CustomerContact