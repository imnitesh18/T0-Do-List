import React, { useState } from "react";
import ToDoList from "./ToDoList";

const Home = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemevent = (e) => {
    setInputList(e.target.value);
  };
  const listOfitems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br />
          <input
            type="text"
            placeholder="Add a item"
            value={inputList}
            onChange={itemevent}
          />
          <button onClick={listOfitems}>+</button>
          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
