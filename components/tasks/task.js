import Card from "../ui/card";

function Task(props) {
  return (
    <Card>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </Card>
  );
}

export default Task;
