import isMarkActive from "./isMarkActive";

export default function isInCode(state) {
  const $head = state.doc.content;
  for (let d = state.doc.length; d > 0; d--) {
    if (
      $head.node(d).type === state.schema.nodes.code_block ||
      $head.node(d).type === state.schema.nodes.container_query_block
    ) {
      return true;
    }
  }

  return isMarkActive(state.schema.marks.code_inline)(state);
}
