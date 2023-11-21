"use client";
import SideBar from "@/components/sidebar";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import CreatePostComponent from "@/components/createpost";
import PostComponent from "@/components/post";
import { useState } from "react";
import PostListProvider from "@/store/post-list-store";

export default function Home() {
  const [selectedTab, setSalectedTab] = useState("Home");
  return (
    <PostListProvider>
      <main className="main-container">
        <div className="side-bar">
          <SideBar selectedTab={selectedTab} setSelectedTab={setSalectedTab} />
        </div>
        <div className="main-side">
          <HeaderComponent />
          {selectedTab === "Home" ? <PostComponent /> : <CreatePostComponent />}
          <FooterComponent />
        </div>
      </main>
    </PostListProvider>
  );
}
