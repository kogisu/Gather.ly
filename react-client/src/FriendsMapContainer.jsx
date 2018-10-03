// DoctorMapContainer.js

import React from "react";
import FriendsMap from "./components/FriendsMap.jsx";
const config = require('../../config');

export default class FriendsMapContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<FriendsMap
					friends={this.props.friends}
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `600px`, width: `600px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}