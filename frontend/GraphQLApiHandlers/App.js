import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useGetPosts } from "./useRequest";
import Post from "./components/Post";
import PostTemplate from "./PostTemplate";
import Layout from "./components/Layout";


export default function App () {
  const { data, error, isLoading, isSuccess } = useGetPosts();

  if (error) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Router>
      <Layout>
        <Route path="/" exact>
          {isSuccess &&
            data.items.map((post) => <Post key={post._id} article={post} />)}
        </Route>
        <Route path="/single-post/:id">
          <PostTemplate />
        </Route>
      </Layout>
    </Router>
  );
}
