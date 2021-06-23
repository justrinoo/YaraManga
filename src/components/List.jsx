import React from "react";

export default function List(props) {
	const data = props.data;
	return (
		<>
			<h1>{data.title}</h1>
		</>
	);
}
