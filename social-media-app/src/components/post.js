import { useContext, useEffect, useState } from "react";
import PostListComponents from "./postlist";
import { PostList } from "@/store/post-list-store";
import LoadingSpinner from "./loading";
import WelcomeMsg from "./welcomemsg";

const PostComponent = () => {
  const { postList, addInitialPosts } = useContext(PostList);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      // console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);

  return (
    <div>
      {fetching && <LoadingSpinner />}
      {!fetching && (
        <>
          {postList.length === 0 && <WelcomeMsg />}
          {postList.map((post) => (
            <PostListComponents key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  );
};
export default PostComponent;
