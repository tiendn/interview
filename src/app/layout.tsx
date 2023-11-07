import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import "./globals.css";

/**
 * Default metadata.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata
 */
export const metadata: Metadata = {
	title: "",
	description: "",
};

/**
 * The homepage root layout.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
