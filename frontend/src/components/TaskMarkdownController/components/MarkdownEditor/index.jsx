import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { markdown } from "@codemirror/lang-markdown";
import {
  markdownContentEditorTheme,
  markdownTitleEditorTheme,
} from "./markdownEditorTheme";
import { useState } from "react";

const taskTitle = "";

export const MarkdownEditor = () => {
  const [title, setTitle] = useState("What would you like to do?");
  const [description, setDescription] = useState("# heading 1");

  return (
    <div className="w-full h-full">
      <div className="markdown-title w-full">
        <CodeMirror
          value={title}
          theme={markdownTitleEditorTheme}
          extensions={[
            markdown(),
            EditorView.theme({
              "&.cm-focused": {
                outline: "none",
              },
            }),
            EditorView.lineWrapping,
          ]}
          basicSetup={{
            lineNumbers: false,
            foldGutter: false,
            highlightActiveLine: false,
            syntaxHighlighting: false,
            highlightSelectionMatches: false,
            indentOnInput: false,
          }}
        />
      </div>
      <div className="markdown-description w-full">
        <CodeMirror
          value={description}
          theme={markdownContentEditorTheme}
          extensions={[
            markdown(),
            EditorView.theme({
              "&.cm-focused": {
                outline: "none",
              },
            }),
            EditorView.lineWrapping,
          ]}
          basicSetup={{
            lineNumbers: false,
            foldGutter: false,
            highlightActiveLine: false,
            syntaxHighlighting: false,
            highlightSelectionMatches: false,
            indentOnInput: false,
          }}
        />
      </div>
    </div>
  );
};
