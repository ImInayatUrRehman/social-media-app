import { PostList } from "@/store/post-list-store";
import { useContext } from "react";

const PostListComponents = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="post-list">
      <div className="modal-content rounded-4 p-4 shadow">
        <div className="modal-header border-bottom-0">
          <h1 className="modal-title fs-5">{post.title}</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => deletePost(post.id)}
          ></button>
        </div>
        <div className="modal-body py-0">{post.body}</div>
        <div className="p-2 ">
          {post.tags.map((tag, index) => (
            <span key={index} className="badge bg m-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
          <span className="bg p-2 rounded">
            This post has been reacted by {post.rections} pepole.
          </span>
        </div>
      </div>
    </div>
  );
};
export default PostListComponents;
