"use client";
import Clock from "@/views/blog/Clock";
import { Metadata } from "next";
import { use, useEffect, useState } from "react";

/**
 * Default metadata.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata
 */
export const metadata: Metadata = {
	title: "Next.js WordPress",
	description: "It's headless WordPress",
};

// export const runtime = "edge";
export const revalidate = 60;

/**
 * The blog homepage.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */
export default function BlogHomepage() {
	// Fetch all posts from WordPress.
	const [count, setCount] = useState(0);
	useEffect(() => {
		setInterval(() => setCount((prevCount) => prevCount + 1), 1000);
	}, []);

	return (
		<h1>
			{" "}
			Hello Blog, {count}
			<Clock count={5} />{" "}
		</h1>
	);
}
