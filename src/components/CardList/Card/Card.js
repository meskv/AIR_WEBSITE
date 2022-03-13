import React from "react";

const Post = (props) => {
  const url = props.post.image ? props.post.image : "/images/Home/bg1.jpg";

  const addElipis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) : str;
  };

  return (
    <>
      <div className="post-container col s12 m4">
        <div className="banner">
          <img className="banner-image" src={url} alt="" />
        </div>
        <div className="post-body">
          <div className="post-info">
            <p className="author-name">{props.post.author}</p>
            <p className="publish-date">{props.post.createdDate}</p>
          </div>
          <h5 className="post-title">{addElipis(props.post.title, 30)}</h5>
          <p className="post-description">
            {addElipis(props.post.description, 100)}
          </p>
          <a href={props.post.link}>Read More</a>
        </div>
      </div>
    </>
  );
};

export default Post;
