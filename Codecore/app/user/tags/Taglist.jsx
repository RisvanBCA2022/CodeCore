import React from "react";
import "./Tags.css";
import Link from "next/link";

const TagsList = ({ tag }) => {
  return (
    <div className="tag">
      <Link href={`/user/questionbytag/${tag.tagName}`}><h5>{tag.tagName}</h5></Link>
      <p>{tag.tagDesc}</p>
    </div>
  );
};

export default TagsList;