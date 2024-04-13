import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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
			<body className={ibmPlexMono.className}>{children}</body>
		</html>
	);
}
