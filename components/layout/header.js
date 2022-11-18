import ButtonPrimary from "../ui/button-primary";
import ArrowLeft from "../visuals/icons/arrow-left";
import Link from "next/link";
import Router from "next/router";

function Header(props) {
  const { text, hasButton, buttonText, hasBack, hasCounter } = props;

  return (
    <div className="flex h-10 mb-6">
      {hasBack && (
        <div
          className="back-arrow h-full flex items-center mr-4 hover:cursor-pointer"
          onClick={() => Router.back()}
        >
          <ArrowLeft size="xl" color="#222" />
        </div>
      )}
      <div className="header-text grow">
        <h1 className="text-4xl font-bold text-d10">
          {text}
          {hasCounter && <span className="text-d60 font-light ml-4">12</span>}
        </h1>
      </div>
      {hasButton && (
        <ButtonPrimary
          text={buttonText}
          type="primary"
          hasIcon="true"
          link="/new-task-type"
        />
      )}
    </div>
  );
}

export default Header;
