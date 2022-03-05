import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { date, author, title, image, description, body, link };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create container">
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Publishing Date</label>
        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Blog author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog short description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* <label>Blog Image</label>
        <input
          type="file"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        /> */}
        <br />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {!isPending && <button className="create-btn">Add Blog</button>}
        {isPending && <button>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
