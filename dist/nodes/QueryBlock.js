"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QueryFence_1 = __importDefault(require("./QueryFence"));
class QueryBlock extends QueryFence_1.default {
    get name() {
        return "query_block";
    }
    get markdownToken() {
        return "query_block";
    }
}
exports.default = QueryBlock;
//# sourceMappingURL=QueryBlock.js.map