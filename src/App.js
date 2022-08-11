import logo from './logo.svg';
import './App.css';

import langFile from "./test-files/languages.txt"
import educationFile from "./test-files/education.txt"

function App() {
  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      console.log(text);
      //alert(text);
      var preview = document.getElementById('userFile');
      preview.innerHTML = text;
    };
    reader.readAsText(e.target.files[0]);
  };

  function test(){
    fetch(langFile)
      .then(r => r.text())
      .then(text => {
        console.log('text decoded:', text);
        var preview = document.getElementById('langFile');
        preview.innerHTML = text;
        //TEXT = text;
        //alert(text);
        //alert('text decoded:', text);
      });
  }

  return (
    <div>
      <input type="file" onChange={showFile} />
      <button onClick = {test()}>View Text</button>

      <h1>Text from user file</h1>
      <div id="userFile">Choose text File</div>

      <h1>Text from langFile</h1>
      <div id="langFile">Choose text File</div>
    </div>
  );
}

export default App;
