import React, { useCallback } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { xcodeDark } from "@uiw/codemirror-themes-all";
import { useAuth } from "../context/ContextProvider";

export const TextEditor = () => {
  const { users, dispatch } = useAuth();

  const onChange = useCallback((value, viewUpdate) => {
    dispatch({
      type: "UPD_STD_DATA",
      data:{value:value}
    });
  }, []);
  return (
    <CodeMirror
      value="//Write Your Answers Here"
      height="100%"
      extensions={[langs.cpp()]}
      onChange={onChange}
      theme={xcodeDark}
    />
  );
};
