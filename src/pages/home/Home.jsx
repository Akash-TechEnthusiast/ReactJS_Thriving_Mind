// import Sidebar from "../../components/sidebar/Sidebar";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import List from "../../components/table/List";
import CircularProgress from "@mui/material/CircularProgress";

import "./home.scss";
import Featured from "../../components/featured/Featured";
import Charts from "../../components/charts/Charts";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widgets />
          <Widgets />
          <Widgets />
          <Widgets />
        </div>

        <div className="charts">
          <Featured />
          <Charts />
        </div>

        <div className="listContainer">
          <div className="listTitle">Last Trasactions List</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
