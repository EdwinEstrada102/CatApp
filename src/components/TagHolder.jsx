import "./TagHolder.css";
import Button from "./UI/Button";

const TagHolder = () => {
  return (
    <div className="tag-holder-container">
      <div className="tag-holder">
        <Button type={50}>Grey</Button>
        <Button type={50}>Height: 2' 3"</Button>
        <Button type={50}>Weight: 75lbs</Button>
        <Button type={50}>Breed</Button>
      </div>
    </div>
  );
};

export default TagHolder;
