import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = [
    { id: 0, message: "for whom the bell tolls", likesCount: 2 },
    { id: 1, message: "Metallica", likesCount: 132 },
    { id: 2, message: "metal", likesCount: 112 },
    { id: 3, message: "asdfwefesf", likesCount: 12 },
    { id: 4, message: "efefefe", likesCount: 1144 },
    { id: 5, message: "true 100%", likesCount: 1212 },
    { id: 6, message: "true 100%", likesCount: 1212 },
    { id: 7, message: "true 100%", likesCount: 1212 },
    { id: 8, message: "true 100%", likesCount: 1212 },
  ];

  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post
          song={postsData[0].message}
          likescount={postsData[0].likesCount}
        />
        <Post
          song={postsData[1].message}
          likescount={postsData[1].likesCount}
        />
        <Post
          song={postsData[2].message}
          likescount={postsData[2].likesCount}
        />
        <Post
          song={postsData[3].message}
          likescount={postsData[3].likesCount}
        />
        <Post
          song={postsData[4].message}
          likescount={postsData[4].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
