/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPost } from "@/app/_services/notion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CSSProperties } from "react";

interface PropsSlug {
	params: {
		slug: string
	}
}

export default async function Blog({ params }: PropsSlug) {

	const post = await getPost(params.slug);

	const stylesForMarkdown = {
		p: ({ _, children }: any ) => <p className="xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-base text-TXT300">{children}</p>,
		strong: ({ node, children }: any) => {
			return <span className='text-Primary underline font-semibold decoration-solid xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-base'>{children}</span>;
		},
		hr: ({ node, props }: any) => {
			return <hr className='w-[500px] h-[2px] bg-TXT100' {...props} />;
		},
		h1: ({ node, children }: any) => {
			return <h1 
				className={`
					text-Primary font-bold xs:text-xl xs:mt-4 xs:mb-4 sm:text-xl sm:mt-4 sm:mb-4 md:text-3xl 
					md:mt-5 md:mb-5 lg:text-3xl lg:mt-5 lg:mb-5 xl:text-4xl xl:mt-6 xl:mb-6 
				`}
			>{children}</h1>;
		},
		h2:  ({ node, children }: any) => {
			return <h2 
				style={{ color: "transparent" }}
				className={`
					font-semibold xs:text-lg xs:mt-5 xs:mb-3 sm:text-lg sm:mt-5 sm:mb-3 md:text-2xl md:mt-6 md:mb-4 lg:text-2xl lg:mt-6 lg:mb-4 xl:text-3xl xl:mt-7 
					xl:mb-5 bg-gradient-to-r from-TXT100 to-TXT300 bg-clip-text text-transparent w-fit 
				`}
			>{children}</h2>;
		},
		h3:  ({ node, children }: any) => {
			return <h3 
				className={`
					text-T300 font-medium xs:text-base xs:mt-3 xs:mb-3 sm:text-base sm:mt-3 sm:mb-3 md:text-xl md:mt-4 md:mb-4 lg:text-xl lg:mt-4 
					lg:mb-4 xl:text-2xl xl:mt-5 xl:mb-5
				`}
			>{children}</h3>;
		},
		code: ({ node, className, children, ...props }: any) => {
			const match = /language-(\w+)/.exec(className || "");

			const newStyles: CSSProperties = {
				marginTop: "10px",
				border: "1px solid #DEDEDE",
				boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
				borderRadius: "8px",
				marginBottom: "10px",
				padding: "5px",
			};

			if (!match) {
				return (
					<code className={className} style={newStyles} {...props}>
						{children}
					</code>
				);
			}

			const syntaxHighlighterProps = {
				language: match[1],
				PreTag: "div",
				style: { ...coy, background: "none" },
				...props,
			};

			return (
				<div style={newStyles}>
					<SyntaxHighlighter {...syntaxHighlighterProps as any}>
						{String(children).replace(/\n$/, "")}
					</SyntaxHighlighter>
				</div>
			);
		},
		li: ({ node, children }: any) => {

			const isNested = node.depth > 0;

			return (
				<li className={isNested ? "nested-list-item" : "top-level-list-item"}>
					{children}
				</li>
			);
		},
		ul: ({ node, children }: any) => (
			<ul className="text-TXT300 list-inside list-disc ml-5">{children}</ul>
		),
		ol: ({ node, children }: any) => (
			<ol className="text-TXT300 list-inside list-decimal ml-5">{children}</ol>
		),
		blockquote: ({ node, children }: any) => (
			<blockquote className="text-TXT300 border-l-4 border-Primary pl-4 py-2 my-4">{children}</blockquote>
		),
		a: ({ node, children, href }: any) => (
			<a className="text-Primary underline hover:no-underline" href={href}>
				{children}
			</a>
		),
		img: ({ node, src, alt }: any) => (
			<img className="mx-auto my-4" src={src} alt={alt} />
		)
	};

	return (
		<main className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72 pb-4 xl:pb-12">
			<ReactMarkdown
				remarkPlugins={[gfm]}
				rehypePlugins={[rehypeRaw, rehypeStringify]}
				components={stylesForMarkdown}
			>{post.content}</ReactMarkdown>
		</main>
	);
}
