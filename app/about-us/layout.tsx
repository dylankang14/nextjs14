export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			{children}
			&copy; copyright from zzz
		</div>
	);
}
