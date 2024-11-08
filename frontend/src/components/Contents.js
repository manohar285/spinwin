import React from "react";
import Sidebar from "./Sidebar";
import Tasks from "./Tasks";

const Contents = () => {
  return (
    <section className="content">
      <Sidebar />
      <Tasks />
    </section>
  );
};

export default Contents;
