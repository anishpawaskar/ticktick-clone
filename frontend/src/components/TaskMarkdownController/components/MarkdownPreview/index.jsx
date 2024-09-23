import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./markdownPreview.style.css";

export const MarkdownPreview = () => {
  const title = `
  # Anish
  `;

  //   const content = `
  //   # Anish
  //   ## Anish
  //   ### Anish
  //   Anish
  //   - anish
  //   ~~~js
  // console.log('It works!')
  // var value = 10;
  // value++
  // ~~~
  //   `;
  const content =
    "# Anish\n## Anish\n### Anish\n* anish\n- [ ] anish\n> \tanish\n> anish\n---\nAnish";

  return (
    <div className="w-full h-full">
      <div className="markdown-preview-title w-full">
        <Markdown className="markdown-title" remarkPlugins={[remarkGfm]}>
          {title}
        </Markdown>
      </div>
      <div className="markdown-preview-content w-full">
        <Markdown
          className="markdown-content"
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  className="text-sm"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={docco}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
};
