import React from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar";

function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content className="flex-1">Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default Home;
