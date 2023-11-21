const PostListComponents = ({ post }) => {
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
          ></button>
        </div>
        <div className="modal-body py-0">{post.body}</div>
        <div className="p-2 ">
          {post.tags.map((tag) => (
            <span class="badge text-bg-primary m-1">{post.tags}</span>
          ))}
        </div>
        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
          <alert className="bg-primary p-2 rounded">Post Rection</alert>
        </div>
      </div>
    </div>
  );
};
export default PostListComponents;
