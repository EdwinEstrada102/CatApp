import Button from "./UI/Button";

const BanList = ({bannedLife, bannedWeight, bannedOrigin, onRemoveLifeBan, onRemoveWeightBan, onRemoveOrignBan}) => {

  const removeLifeBanHandler = () => {
    onRemoveLifeBan();
  }

  const removeWeightBanHandler = () => {
    onRemoveWeightBan();
  }

  const removeOriginBanHandler = () => {
    onRemoveOrignBan();
  }

  return (
    <div>
      <h1>Ban List</h1>
      <div>
        {bannedLife.map(life => <Button onClick={removeLifeBanHandler} type={44}>{life} years</Button>)}
        {bannedWeight.map(weight => <Button onClick={removeWeightBanHandler} type={44}>{weight} lbs</Button>)}
        {bannedOrigin.map(origin => <Button onClick={removeOriginBanHandler} type={44}>{origin}</Button>)}
      </div>
    </div>
  );
};

export default BanList;
