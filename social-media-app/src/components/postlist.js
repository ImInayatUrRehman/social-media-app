const PostList = () => {
  return (
    <div className="post-list">
      <div className="modal-content rounded-4 p-4 shadow">
        <div className="modal-header border-bottom-0">
          <h1 className="modal-title fs-5">Modal title</h1>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body py-0">
          <p>
            This is a modal sheet, a variation of the modal that docs itself to
            the bottom of the viewport like the newer share sheets in iOS.
          </p>
        </div>
        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
          <alert className="bg-primary p-2 rounded">Post Rection</alert>
        </div>
      </div>
    </div>
  );
};
export default PostList;
