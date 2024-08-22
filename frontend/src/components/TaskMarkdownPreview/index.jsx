import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import supersub from "remark-supersub";

export const TaskMarkdownPreview = () => {
  const value = "# abc";
  return (
    <div className="px-4 py-5 w-full h-full xs:h-[350px] xs:max-h-[700px] xs:overflow-auto xs:transition-all react-markdown-preview">
      <Markdown remarkPlugins={[remarkGfm, remarkGemoji, supersub]}>
        {value}
      </Markdown>
    </div>
  );
};
