import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export const markdownTitleEditorTheme = createTheme({
  styles: [
    {
      tag: t.content,
      class: "text-xl font-bold",
    },
  ],
});

export const markdownContentEditorTheme = createTheme({
  styles: [
    {
      tag: t.heading1,
      class: "text-lg font-bold",
    },
    {
      tag: t.heading2,
      class: "text-base font-bold",
    },
    {
      tag: t.heading3,
      class: "text-sm font-bold",
    },
    {
      tag: t.strong,
      class: "font-black",
    },
    {
      tag: t.emphasis,
      class: "italic",
    },
    {
      tag: t.url,
      class: "text-[--secondary-color] border-b-[--secondary-color]",
    },
  ],
});
