import MarkdownIt from "markdown-it";
import customFence from "markdown-it-container";

export default function queryblock(md: MarkdownIt): void {
  return customFence(md, "notice", {
    marker: ";",
    validate: () => true,
    render: function(tokens, idx) {
      const { info } = tokens[idx];

      if (tokens[idx].nesting === 1) {
        // opening tag
        return `<div class="notice notice-${md.utils.escapeHtml(info)}">\n`;
      } else {
        // closing tag
        return "</div>\n";
      }
    },
  });
}
