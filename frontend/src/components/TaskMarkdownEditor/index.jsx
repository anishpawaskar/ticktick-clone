import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { markdownTheme } from "./markdownEditorTheme";

export const TaskMarkdownEditor = () => {
  // TODO: When code editor gets mount it should be focused
  return (
    <CodeMirror
      className="px-4 py-5 w-full h-full xs:h-[350px] xs:max-h-[700px] xs:overflow-auto xs:transition-all"
      value="# abc"
      theme={markdownTheme}
      extensions={[markdown()]}
      basicSetup={{
        foldGutter: false,
        lineNumbers: false,
        highlightActiveLine: false,
      }}
    />
  );
};
