import { useContext, useEffect, useState } from "react";
import PostListComponents from "./postlist";
import { PostList } from "@/store/post-list-store";
import LoadingSpinner from "./loading";
import WelcomeMsg from "./welcomemsg";

const PostComponent = () => {
  const { postList, fetching } = useContext(PostList);
 
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
