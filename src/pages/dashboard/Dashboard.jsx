import Sidebar from "../../components/commonComponents/sidebar/Sidebar";

import { Outlet } from 'react-router-dom';

const Dashaboard = () => {
  return (
    <div style={{ height: "100%", background: "#EDEDED" }}>
      <Sidebar />

      <div
        style={{
          width: "calc(100% - 200px)",
          height: "auto",
          position: "absolute",
          top: "0",
          left: "200px",
          background: "#EDEDED",
        }}
      >
        <Outlet />
      </div>
      
    </div>
  );
};



export default Dashaboard;
