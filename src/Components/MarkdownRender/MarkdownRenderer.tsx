// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm' // GitHub Flavored Markdown 지원
// import rehypeRaw from 'rehype-raw' // HTML 태그 허용
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism' // 코드 하이라이트 스타일

// interface MarkdownRendererProps {
//   content: string
// }

// const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
//   return (
//     <ReactMarkdown
//       remarkPlugins={[remarkGfm]} // GFM 지원 (테이블, 취소선 등)
//       rehypePlugins={[rehypeRaw]} // HTML 태그 허용
//       components={{
//         // 코드 블록 하이라이트
//         code({ node, inline, className, children, ...props }: any) {
//           const match = /language-(\w+)/.exec(className || '')
//           return !inline && match ? (
//             <SyntaxHighlighter
//               style={tomorrow} // 코드 스타일
//               language={match[1]} // 언어 설정
//               PreTag="div"
//               {...props}
//             >
//               {String(children).replace(/\n$/, '')}
//             </SyntaxHighlighter>
//           ) : (
//             <code className={className} {...props}>
//               {children}
//             </code>
//           )
//         },
//         // 이미지 태그 스타일 조정
//         img({ alt, ...props }: any) {
//           return <img {...props} style={{ maxWidth: '100%' }} alt={alt || ''} />
//         },
//       }}
//     >
//       {content}
//     </ReactMarkdown>
//   )
// }

// export default MarkdownRenderer
