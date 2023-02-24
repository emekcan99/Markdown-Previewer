import React from "react";
import "./styles.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useDispatch, useSelector } from "react-redux";
import { setMarkdown } from "../../redux/markdownSlice";

function TextAreas() {
  const dispatch = useDispatch();

  const text = useSelector((state) => state.markdownSlice.text);

  return (
    <div className="textAreas">
      <div>
        <textarea
          onChange={(e) => dispatch(setMarkdown(e.target.value))}
          className="inputArea"
          value={text}
        ></textarea>
      </div>
      <div className="outputArea">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={text}
        ></ReactMarkdown>
      </div>
    </div>
  );
}

export default TextAreas;
