import { PostList } from "@/store/post-list-store";
import { useContext, useEffect, useRef } from "react";

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
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        rections: rections,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
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
          required
        />
        <label htmlFor="title" className="form-label">
          Post Title.
        </label>
        <input
          type="text"
          ref={PostTitleElement}
          className="form-control m-1"
          id="title"
          placeholder="Enter Post Title"
          required
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
          required
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
          required
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
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePostComponent;
