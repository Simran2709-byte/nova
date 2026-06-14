import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-2xl font-bold text-cyan-400 mt-6 mb-2">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xl font-bold text-purple-400 mt-5 mb-2">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-bold text-cyan-300 mt-4 mb-2">{children}</h3>,
        p: ({ children }) => <p className="text-slate-300 mb-3 leading-7">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside mb-3 space-y-1 text-slate-300 ml-4">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside mb-3 space-y-1 text-slate-300 ml-4">{children}</ol>,
        li: ({ children }) => <li className="leading-7">{children}</li>,
        strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
        em: ({ children }) => <em className="text-purple-300 italic">{children}</em>,
        code: ({ inline, children, className }) => {
          if (inline) {
            return <code className="bg-white/10 text-cyan-300 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>;
          }
          return (
            <pre className="bg-black/40 border border-white/10 rounded-xl p-4 my-4 overflow-x-auto">
              <code className="text-sm text-green-300 font-mono">{children}</code>
            </pre>
          );
        },
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-purple-500 pl-4 italic text-slate-400 my-4">{children}</blockquote>
        ),
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
            {children}
          </a>
        ),
        hr: () => <hr className="border-white/10 my-6" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}