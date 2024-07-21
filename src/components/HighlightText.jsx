import React from "react";

const HighlightText = ({ text, highlight, highlightClassName }) => {
  const highlightWords = highlight.split(" ");

  return text
    .split(new RegExp(`(${highlightWords.join("|")})`, "gi"))
    .map((word, index) => (
      <span
        key={index}
        className={highlightWords.includes(word) ? highlightClassName : ""}
      >
        {word}{" "}
      </span>
    ));
};

export default HighlightText;
