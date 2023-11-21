const { createContext, useReducer } = require("react");
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  return currentPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = () => {};
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
    tags: ["battagram", "btm", "going"],
  },
];
export default PostListProvider;
