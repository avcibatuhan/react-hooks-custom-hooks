import React, { useEffect, useState } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useDocumentTitle from "../hooks/useDocumentTitle";

function HomePage() {
  // fetch data for posts
  const { data: posts, isLoaded } = useQuery("http://localhost:4000/posts");

  const { posts, isLoaded } = useQuery();
  const [isLoaded, setIsLoaded] = useState(false);
 // const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    fetch("http://localhost:4000/posts")
      .then((r) => r.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoaded(true);
      });
  }, []);

  // set the document title
  useDocumentTitle("Underreacted | Home");

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
