"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/styles/navigation.module.css";

export default function Navigation() {
	const pathname = usePathname();
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href={"/"}>Home {pathname === "/" && "❤️"}</Link>
				</li>
				<li>
					<Link href={"/about-us"}>About us {pathname === "/about-us" && "❤️"}</Link>
				</li>
			</ul>
		</nav>
	);
}
