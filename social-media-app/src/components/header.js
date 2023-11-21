const HeaderComponent = () => {
  return (
    <div className="container text-bg-dark header">
      <header className="d-flex justify-content-center  py-2">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link ">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/ImInayatUrRehman"
              target="_blank"
              className="nav-link "
            >
              GitHub
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default HeaderComponent;
