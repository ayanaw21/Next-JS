import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
	title: "MyStore",
	description: "Buy Cool products",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`flex min-h-full flex-col bg-white `}>
				<Navbar />
				<main className="flex-grow container mxx-auto px-4 py-8 max-w-5xl mx-auto">
					{children}
				</main>
			</body>
		</html>
	);
}
