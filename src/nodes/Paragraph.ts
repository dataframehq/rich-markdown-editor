import { setBlockType } from "prosemirror-commands";
import Node from "./Node";

export default class Paragraph extends Node {
  get name() {
    return "paragraph";
  }

  get schema() {
    return {
      content: "inline*",
      group: "block",
      parseDOM: [{ tag: "p" }],
      toDOM: (node) => {
        console.log(
          node,
          "ParagraphNode",
          node.attrs.layoutClass,
          "node.attrs.layoutClass"
        );

        const isImageParagraph = node.content.lastChild?.type.name === "image";
        const className = isImageParagraph ? `image-paragraph` : "";
        console.log(isImageParagraph, className);
        return ["p", { class: className }];
      },
    };
  }

  keys({ type }) {
    return {
      "Shift-Ctrl-0": setBlockType(type),
    };
  }

  commands({ type }) {
    return () => setBlockType(type);
  }

  toMarkdown(state, node) {
    // render empty paragraphs as hard breaks to ensure that newlines are
    // persisted between reloads (this breaks from markdown tradition)
    if (
      node.textContent.trim() === "" &&
      node.childCount === 0 &&
      !state.inTable
    ) {
      state.write("\\\n");
    } else {
      state.renderInline(node);
      state.closeBlock(node);
    }
  }

  parseMarkdown() {
    return { block: "paragraph" };
  }
}
