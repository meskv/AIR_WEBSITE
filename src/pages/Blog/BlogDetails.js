import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../components/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <>
      <div className="blog-details container">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>Published on {blog.date}</p>
          <div>{blog.body}</div>
          <button className="delete-btn" onClick={handleClick}>Delete</button>
        </article>
      </div>
    </>
  );
};

export default BlogDetails;
