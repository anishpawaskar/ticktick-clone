import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
import { markdownTheme } from "./markdownEditorTheme";

export const TaskMarkdownEditor = () => {
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
