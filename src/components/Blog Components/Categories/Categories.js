import { categories } from "../../../static data/categories";
import { Link } from "react-router-dom";


const Categories = () => {
  // const [post, setPost] = useState({});

  return (
    <div className="category">
      {/* <h4 className="subtitle">Categories</h4> */}
      <table className="table">
        <tbody>
          <tr>
            <td>
              <Link className="link" to={`/blog`}>
                All Category
              </Link>
            </td>
            {/* <td>All Categories</td> */}
          </tr>
        </tbody>
        <tbody>
          {categories.map((category) => (
            <tr>
              <td>
                <Link className="link" to={`/blog?category=${category}`}>
                  {category}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
