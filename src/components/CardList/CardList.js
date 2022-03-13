import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Card from "./Card/Card";
// import { getAllPosts } from "../../service/api";
import { cardDetails } from "../../static data/cardDetails";

const style = {
  textDecoration: "none",
};

const CardList = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = cardDetails;
      // let data = await getAllPosts(search);
      console.log(data);
      setPosts(data);
    };
    fetchPosts();
  }, [search]);

  return posts.length > 0 ? (
    posts.map((p, i) => {
      const link = `/article`;
      return (
        <>
          <Link to={link} style={style}>
            <Card post={p} link={link} />
          </Link>
        </>
      );
    })
  ) : (
    <h4>No Posts exists</h4>
  );

  // return props.cardList.length > 0 ? (
  //   props.cardList.map((card, i) => {
  //     return (
  //       <>
  //         <Link to="/details" style={style}>
  //           <Card card={card} index={i} key={i} />
  //         </Link>
  //       </>
  //     );
  //   })
  // ) : (
  //   <h1>No Posts exists</h1>
  // );
};

export default CardList;
