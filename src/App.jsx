import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Don't forget to 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        {/* This code is rendering an icon element with a class name "fas fa-plus" and an onClick event
        listener. When the icon is clicked, the onClick event listener triggers an arrow function
        that updates the state of the toDos array using the setToDos function. The new state of the
        toDos array is created by spreading the existing toDos array and adding a new object with
        three properties: id (generated using the Date.now() method), text (set to the current value
        of the toDo state), and status (set to false). This allows the user to add a new to-do item
        to the list by clicking on the plus icon. */}
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(obj);
                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                {/* This is rendering an icon element with a unique id and a class name. It also has an
                onClick event listener that triggers a function when the icon is clicked. The
                function finds the index of the object in the toDos array that has the same id as
                the clicked icon, removes that object from the array using the splice method, and
                updates the state of the toDos array using the setToDos function. This allows the
                user to delete a to-do item from the list by clicking on the corresponding icon. */}
                <i
                  id={obj.id}
                  className="fas fa-times" 
                  onClick={(e) => {
                    let index = toDos.findIndex((obj) => {
                      return obj.id == e.target.id;
                    });
                    if (index !== -1) {
                      toDos.splice(index, 1);
                      setToDos([...toDos]);
                    }
                  }}
                ></i>
              </div>
            </div>
          );
        })}
        {toDos.map((obj) => {
          if (obj.status) {
            return <h1>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
