/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
import { InputRule } from "prosemirror-inputrules";
import { Plugin } from "prosemirror-state";
import Editor from "..";

type Command = (attrs) => (state, dispatch) => any;

export default class Extension {
  options: Record<string, any>;
  editor: Editor;
  component?: any; //React.Component | React.FC<any>;

  constructor(options: Record<string, any> = {}) {
    this.options = {
      ...this.defaultOptions,
      ...options,
    };
  }

  bindEditor(editor: Editor) {
    this.editor = editor;
  }

  get type() {
    return "extension";
  }

  get name() {
    return "";
  }

  get plugins(): Plugin[] {
    return [];
  }

  keys(options) {
    return {};
  }

  inputRules(options): InputRule[] {
    return [];
  }

  commands(options): Record<string, Command> | Command {
    return attrs => () => false;
  }

  get defaultOptions() {
    return {};
  }
}
