import Card from "../../ui/card";
import Link from "next/link";

function TaskTypeSelector(props) {
  const { icon, title, description, link } = props;

  return (
    <Link href={link} className="basis-0 grow">
      <Card hasHover={true} paddingSize="l">
        <div className="flex w-full justify-center items-center flex-col">
          <div className="mb-6">{icon}</div>
          <h2 className="font-semibold text-2xl text-d10 mb-2">{title}</h2>
          <p className="text-base text-d40 text-center">{description}</p>
        </div>
      </Card>
    </Link>
  );
}

export default TaskTypeSelector;
