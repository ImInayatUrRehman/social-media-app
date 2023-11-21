import SideBar from "@/components/sidebar";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import CreatePostComponent from "@/components/createpost";
import PostComponent from "@/components/post";

export default function Home() {
  return (
    <main className="main-container">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="main-side">
        <HeaderComponent />
        <PostComponent />
        <CreatePostComponent />
        <FooterComponent />
      </div>
    </main>
  );
}
