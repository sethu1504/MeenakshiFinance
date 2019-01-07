import React from "react";
import "./pledge-form.css"

class OrnamentDetails extends React.Component {
	render() {
		return(
			<div>
				<div className="two-col">
					<div className="col1">
						<label>Type</label>
						<select name="type">
	      					<option value="gold">Gold</option>
	      					<option value="silver">Silver</option>
	    				</select>
	    			</div>

					<div className="col2">
						<label>Ornament Type</label>
						<select name="ornament-type">
	      					<option value="bangle">Bangle</option>
	      					<option value="chain">Chain</option>
	      					<option value="ring">Ring</option>
	   					</select>
					</div>
				</div>
				<div className="small-box">
					<label>Weight</label>
	    			<input name="ph" type="text"/>
	    		</div>
				<label>Ornament Details</label>
		   		<textarea rows="4" name="address" type="text" />
	   		</div>
		);
	}
}

export default OrnamentDetails;