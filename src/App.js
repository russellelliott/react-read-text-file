import logo from './logo.svg';
import './App.css';

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

  return (
    <div>
      <input type="file" onChange={showFile} />
    </div>
  );
}

export default App;
