import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const News = () => {
  const [newData, setNewData] = useContext(DataContext);
  return (
    <div>
      <ul>
        <li>{newData[0].name}</li>
      </ul>
    </div>
  );
};

export default News;
