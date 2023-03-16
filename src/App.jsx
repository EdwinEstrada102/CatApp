import "./App.css";
import TagHolder from "./components/TagHolder";
import Button from "./components/UI/Button";
import BanList from "./components/BanList";

function App() {
  const generateHandler = async () => {
    const data = await fetch("https://api.thecatapi.com/v1/images/search");
    console.log(data);
  }

  return (
    <div className="App">
      <div className="container">
        <div>
          <h1>Title</h1>
          <h2>Caption</h2>
          <h2>Cat Name</h2>
          <TagHolder />
          <figure>
            <img src="https://cdn2.thecatapi.com/images/-LIBXM5Jt.png" />
          </figure>
          <Button type={68} onClick={generateHandler}>Generate</Button>
        </div>
        <BanList />
      </div>
    </div>
  );
}

export default App;
