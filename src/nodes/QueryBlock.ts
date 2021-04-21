import QueryFence from "./QueryFence";

export default class QueryBlock extends QueryFence {
  get name() {
    return "query_block";
  }

  get markdownToken() {
    return "query_block";
  }
}
