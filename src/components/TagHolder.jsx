import "./TagHolder.css";
import Button from "./UI/Button";

const TagHolder = ({lifeSpan, weight, origin, onBanLife, onBanWeight, onBanOrigin}) => {

  const lifeHandler = () => {
    onBanLife();
  }

  const weightHandler = () => {
    onBanWeight();
  }

  const originHandler = () => {
    onBanOrigin();
  }

  return (
    <div className="tag-holder-container">
      <div className="tag-holder">
        <Button onClick={lifeHandler} type={50}>{lifeSpan} years</Button>
        <Button onClick={weightHandler} type={50}>Weight: {weight}lbs</Button>
        <Button onClick={originHandler} type={50}>Origin: {origin}</Button>
      </div>
    </div>
  );
};

export default TagHolder;
