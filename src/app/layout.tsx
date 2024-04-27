import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/shared/layout/Footer";

const ibmPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: [
		"100",
		"200",
		"300",
		"400",
		"500",
		"600",
		"700"
	]
});

export const metadata: Metadata = {
	title: "Mikael Bernardes",
	description: "Portfolio Web Engenheiro de Software",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body className={ibmPlexMono.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
