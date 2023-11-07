"use client";
import React, { useState, useEffect, memo } from "react";
import Now from "./Now";

const Clock = ({ count }) => {
	const [time, setTime] = useState(new Date());

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setTime(new Date());
	// 	}, 1000);

	// 	return () => clearInterval(interval);
	// }, []);

	return (
		<div>
			<h1>Current Time: {count}</h1>
			<h2>{time.toLocaleTimeString()}</h2>
			<Now />
		</div>
	);
};

export default Clock;
