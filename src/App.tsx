import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./components/SideBar";
import Table from "./components/Table";
import Graph from "./components/Graph";
import { RootStore } from "./store/store";
import { GetItem } from "./actions/itemActions";
import "./styles/App.css"

const App: React.FC = () => {

  const dispatch = useDispatch();
  const { loading, item } = useSelector((state: RootStore) => state.item);

  useEffect(() => {
    dispatch(GetItem());
  }, []);
 
  return (
    <>
    <div className="top-banner"> <img src="./utils/images/stackline_logo.svg" alt="Stackline Logo" /> Stackline </div>
      <div className="main-container">
        {loading ? (
          <div> loading... </div>
        ) : (
          <>
            <div className="side-bar-container">
              <SideBar
                title={item[0].title}
                image={item[0].image}
                subtitle={item[0].subtitle}
                tags={item[0].tags}
              />
            </div>
            <div className="detail-container">
              <Graph sales={item[0].sales}/>
              <Table sales={item[0].sales} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
