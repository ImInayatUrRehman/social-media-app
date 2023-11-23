const { createContext, useReducer, useEffect, useState } = require("react");
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.PostId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  // const [postList, dispatchPostList] = useReducer(
  //   postListReducer,
  //   DEFAULT_POST_LIST
  // );
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (PostId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        PostId,
      },
    });
  };
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
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        fetching: fetching,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going To Battagram",
//     body: "Hi I ma Going To battagram ......... ......",
//     rections: "2",
//     userId: "user-4",
//     tags: ["battagram", "btm", "going"],
//   },
//   {
//     id: "2",
//     title: "Meet To Sajid",
//     body: "Hi ma Sajid sa mill rha hu ......... ......",
//     rections: "5",
//     userId: "user-2",
//     tags: ["battagram", "going"],
//   },
// ];
export default PostListProvider;
