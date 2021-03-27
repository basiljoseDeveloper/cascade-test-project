import React, { useState } from "react";
import { useHistory } from "react-router";

import Dropdown from "./dropdown";
import "./index.css";
import Listing from "./List";

const Home = () => {
  const history = useHistory();
  const [tableData, setTableData] = useState([]);
  const submitData = (data) => setTableData(data);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className="container">
      <div className="">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="col-12 col-md-6 dropdown-wrapper">
        <Dropdown
          classNameDiv="dropdwn-select"
          data={[
            { checkId: "1", id: 1 },
            { checkId: "2", id: 2 },
            { checkId: "3", id: 3 },
          ]}
          submitData={submitData}
        />
      </div>
      <div className="py-3">
        <Listing {...{ tableData }} />
      </div>
    </div>
  );
};

export default Home;
