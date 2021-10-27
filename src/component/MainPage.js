import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Logout from "./user/Logout.js";
import BlogList from "./blog/BlogList.js";
function MainPage() {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <BlogList />
      </div>

      <Logout />
    </div>
  );
}

export default MainPage;