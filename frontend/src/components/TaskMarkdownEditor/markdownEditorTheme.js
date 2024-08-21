import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export const markdownTheme = createTheme({
  styles: [
    {
      tag: t.heading1,
      class: "text-2xl sm:text-[2em] font-bold",
    },
    {
      tag: t.heading2,
      class: "text-xl sm:text-[1.5em] font-bold",
    },
    {
      tag: t.heading3,
      class: "text-lg sm:text-[1.17em] font-bold",
    },
    {
      tag: t.heading4,
      class: "text-base sm:text-[1em] font-bold",
    },
    {
      tag: t.heading5,
      class: "text-sm sm:text-[0.83em] font-bold",
    },
    {
      tag: t.heading6,
      class: "text-xs sm:text-[0.67em] font-bold",
    },
  ],
});
