import { useContext } from "react";
import PostListComponents from "./postlist";
import { PostList } from "@/store/post-list-store";

const PostComponent = () => {
  const { postList } = useContext(PostList);
  return (
    <div>
      {postList.map((post) => (
        <PostListComponents key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostComponent;
