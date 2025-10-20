import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary mb-5"
				target="_blank"
				rel="noreferrer"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};
Jumbotron.defaultProps = {
	title: "Bienvenido a REACT",
	description: "React es la librería de renderizado más popular",
	buttonLabel: "Go to the official website",
	buttonURL: "https://reactjs.org/"
};

Jumbotron.propTypes = {

    
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};
