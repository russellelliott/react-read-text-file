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
      alert(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  function test(){
    fetch(langFile)
      .then(r => r.text())
      .then(text => {
        console.log('text decoded:', text);
        var preview = document.getElementById('show-text');
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
      <div id="show-text">Choose text File</div>
    </div>
  );
}

export default App;
