import Link from "next/link";
import HeaderDescription from "./HeaderDescription";

/**
 * The shared header component.
 */
export default function Header() {
	return (
		<header className="text-center sm:text-left">
			<nav className="flex flex-row gap-4"></nav>

			<HeaderDescription />
		</header>
	);
}
