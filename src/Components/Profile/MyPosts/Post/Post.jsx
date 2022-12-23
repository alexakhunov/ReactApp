import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"></img>

      {props.song}
      {props.band}
      {props.genre}
      {props.legend}

      <div>
        <span>Like {props.likescount}</span>
      </div>
    </div>
  );
};

export default Post;
