const CreatePostComponent = () => {
  return (
    <form className="post-list">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your UserId here.
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your UserId"
        />
        <label htmlFor="title" className="form-label">
          Post Title.
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How many pepole rected to this post"
        />
        <label htmlFor="body" className="form-label">
          Post Content.
        </label>
        <input
          type="text"
          className="form-control"
          rows={5}
          id="body"
          placeholder="Tell Us more about it"
        />
        <label htmlFor="tags" className="form-label">
          Number of rections.
        </label>
        <input
          type="text"
          className="form-control"
          id="rections"
          placeholder="How many pepole rected to this post"
        />
        <label htmlFor="tags" className="form-label">
          Enter Your hastags here.
        </label>
        <input
          type="email"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePostComponent;
