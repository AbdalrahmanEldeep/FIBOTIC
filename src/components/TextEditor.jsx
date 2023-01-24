import React from "react";
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { dracula } from "@uiw/codemirror-themes-all";

export const TextEditor = () => {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <CodeMirror
      value="//Write Your Answers Here"
      height="100%"
      extensions={[langs.cpp()]}
      onChange={onChange}
      theme={dracula}
    />
  );
};
