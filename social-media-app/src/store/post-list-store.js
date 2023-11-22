const { createContext, useReducer } = require("react");
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.PostId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, rections, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        rections: rections,
        userId: userId,
        tags: tags,
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
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Battagram",
    body: "Hi I ma Going To battagram ......... ......",
    rections: "2",
    userId: "user-4",
    tags: ["battagram", "btm", "going"],
  },
  {
    id: "2",
    title: "Meet To Sajid",
    body: "Hi ma Sajid sa mill rha hu ......... ......",
    rections: "5",
    userId: "user-2",
    tags: ["battagram", "going"],
  },
];
export default PostListProvider;
