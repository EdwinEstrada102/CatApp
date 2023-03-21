import "./App.css";
import TagHolder from "./components/TagHolder";
import Button from "./components/UI/Button";
import BanList from "./components/BanList";
import { useEffect, useState } from "react";

function App() {
  const [photo, setPhoto] = useState("");
  const [breed, setBreed] = useState("");
  const [lifeSpan, setLifeSpan] = useState("");
  const [weight, setWeight] = useState("");
  const [origin, setOrigin] = useState("");
  const [bannedLife, setBannedLife] = useState([]);
  const [bannedWeight, setBannedWeight] = useState([]);
  const [bannedOrigin, setBannedOrigin] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bannedAttributes"));
    if(data){
      if(data.bannedLife){
        setBannedLife(data.bannedLife);
      }
      if(data.bannedWeight){
        setBannedWeight(data.bannedWeight);
      }
      if(data.bannedOrigin){
        setBannedOrigin(data.bannedOrigin);
      }
    }
  }, []);

  const banLifeHandler = () => {
    setBannedLife((prevState) => {
      localStorage.setItem(
        "bannedAttributes",
        JSON.stringify({
          bannedLife: [...prevState, lifeSpan],
          bannedWeight,
          bannedOrigin,
        })
      );
      return [...prevState, lifeSpan];
    });
  };

  const banWeightHandler = () => {
    setBannedWeight((prevState) => {
      localStorage.setItem(
        "bannedAttributes",
        JSON.stringify({
          bannedLife,
          bannedWeight: [...prevState, weight],
          bannedOrigin,
        })
      );
      return [...prevState, weight];
    });
  };

  const banOriginHandler = () => {
    setBannedOrigin((prevState) => {
      localStorage.setItem(
        "bannedAttributes",
        JSON.stringify({
          bannedLife,
          bannedWeight,
          bannedOrigin: [...prevState, origin],
        })
      );
      return [...prevState, origin];
    });
  };

  const removeLifeBanHandler = () => {
    console.log(lifeSpan);
    setBannedLife((prevState) => {
      localStorage.setItem(
        "bannedAttributes",
        JSON.stringify({
          bannedLife: prevState.filter((life) => life !== lifeSpan),
          bannedWeight,
          bannedOrigin,
        })
      );
      return prevState.filter((life) => life !== lifeSpan);
    });
  };

  const removeWeightBanHandler = () => {
    setBannedWeight((prevState) => {
      localStorage.setItem(
        "bannedAttributes",
        JSON.stringify({
          bannedLife,
          bannedWeight: prevState.filter((curWeight) => curWeight !== weight),
          bannedOrigin,
        })
      );
      return prevState.filter((curWeight) => curWeight !== weight);
    });
  };

  const removeOriginBanHandler = () => {
    console.log(origin);
    console.log(bannedOrigin);
    setBannedOrigin((prevState) => {
      localStorage.setItem(
        "bannedAttributes",
        JSON.stringify({
          bannedLife,
          bannedWeight,
          bannedOrigin: prevState.filter((curOrigin) => curOrigin !== origin),
        })
      );
      return prevState.filter((curOrigin) => curOrigin !== origin);
    });
  };

  const generateHandler = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_MWX0rwZQonnQaGNHHngj7OuQKqfuNdXubs9fqzZeZCiPpmdjgFAYYl56zQZ7I9Z9"
    );
    const data = await response.json();
    const cat = data[0].breeds[0];
    if (
      !(
        bannedLife.includes(cat.life_span) ||
        bannedWeight.includes(cat.weight.imperial) ||
        bannedOrigin.includes(cat.origin)
      )
    ) {
      setPhoto(data[0].url);
      setBreed(cat.name);
      setLifeSpan(cat.life_span);
      setWeight(cat.weight.imperial);
      setOrigin(cat.origin);
    } else {
      generateHandler();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <h1>Cat App</h1>
          <h2>Homework got you down? Look at some cat photos!!!</h2>
          {breed && <h2>Breed: {breed}</h2>}
          {lifeSpan && (
            <TagHolder
              lifeSpan={lifeSpan}
              weight={weight}
              origin={origin}
              onBanLife={banLifeHandler}
              onBanWeight={banWeightHandler}
              onBanOrigin={banOriginHandler}
            />
          )}
          {photo && (
            <figure>
              <img src={photo} />
            </figure>
          )}
          <Button type={68} onClick={generateHandler}>
            Generate
          </Button>
        </div>

        <BanList
          bannedLife={bannedLife}
          bannedWeight={bannedWeight}
          bannedOrigin={bannedOrigin}
          onRemoveLifeBan={removeLifeBanHandler}
          onRemoveWeightBan={removeWeightBanHandler}
          onRemoveOrignBan={removeOriginBanHandler}
        />
      </div>
    </div>
  );
}

export default App;
