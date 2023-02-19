import React, { useState } from 'react';
import "./App.scss";
import Name from './Name';

function App(): JSX.Element {

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [text, setText] = useState("");

  const [addName, setAddName] = useState("");
  const [addId, setAddId] = useState("");
  const [addText, setAddText] = useState("");

  const onClickAddText = () => {
    setAddName(name);
    setAddId(id);
    setAddText(text);

    setName("");
    setId("");
    setText("");

  };

  const handleClear = () => {
    setAddName("");
    setAddId("");
    setAddText("");
  };




  return (
    <div className="App">
      <h1>Demo Tweet</h1>
      <hr />
      <div className='container'>
        <h3 className='App-text'>Create Tweet</h3>
        <div className='border border-primary m-2 row'>
          <div className='col-6'>
            <p>Name</p>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className='col-6'>
            <p>ID</p>
            <input
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </div>
          <div>
            <p className='mt-3'>TextArea</p>
            <textarea
              className="form-control" id="exampleFormControlTextarea1"
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></textarea>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2 m-3" type="button" onClick={onClickAddText}>Create Tweet</button>
          </div>
        </div>
        <hr />
        {/* <p>リアルタイム : {name}</p>
        <p>リアルタイム : {id}</p>
        <p>リアルタイム : {text}</p> */}
        <div>
          <h3 className='App-text answer'>Tweet Image</h3>
          <div className='border border-dark'>
            <div className="card">
              <h5 className="card-header">{addName}</h5>
              <div className="card-body">
                <h5 className="card-title">{addId}</h5>
                <p className="card-text">{addText}</p>
                <a href="#" className="btn btn-primary" onClick={handleClear}>Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
