import { PostList } from "@/store/post-list-store";
import { useContext, useRef } from "react";

const CreatePostComponent = () => {
  const { addPost } = useContext(PostList);
  const UserIdElement = useRef();
  const PostTitleElement = useRef();
  const PostBodyElement = useRef();
  const RectionsElement = useRef();
  const PostTagsElement = useRef();

  const handleOnClick = (event) => {
    event.preventDefault();
    const userId = UserIdElement.current.value;
    const postTitle = PostTitleElement.current.value;
    const postBody = PostBodyElement.current.value;
    const rections = RectionsElement.current.value;
    const tags = PostTagsElement.current.value.split(" ");

    UserIdElement.current.value = "";
    PostTitleElement.current.value = "";
    PostBodyElement.current.value = "";
    RectionsElement.current.value = "";
    PostTagsElement.current.value = "";
    addPost(userId, postTitle, postBody, rections, tags);
  };

  return (
    <form className="post-list" onSubmit={handleOnClick}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your UserId here.
        </label>
        <input
          type="text"
          ref={UserIdElement}
          className="form-control m-1"
          id="userId"
          placeholder="Your UserId"
        />
        <label htmlFor="title" className="form-label">
          Post Title.
        </label>
        <input
          type="text"
          ref={PostTitleElement}
          className="form-control m-1"
          id="title"
          placeholder="How many pepole rected to this post"
        />
        <label htmlFor="body" className="form-label">
          Post Content.
        </label>
        <textarea
          type="textarea"
          ref={PostBodyElement}
          className="form-control m-1"
          rows={"5"}
          id="body"
          placeholder="Tell Us more about it"
        />
        <label htmlFor="tags" className="form-label">
          Number of rections.
        </label>
        <input
          type="text"
          ref={RectionsElement}
          className="form-control m-1"
          id="rections"
          placeholder="How many pepole rected to this post"
        />
        <label htmlFor="tags" className="form-label">
          Enter Your hastags here.
        </label>
        <input
          type="text"
          ref={PostTagsElement}
          className="form-control m-1"
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
