import Container from "../components/layout/container";
import Header from "../components/layout/header";

function NewBugPage() {
  return (
    <div className="flex-1 justify-center">
      <Container>
        <Header
          text="New Bug"
          hasButton={false}
          hasBack={true}
          hasCounter={false}
        />
      </Container>
    </div>
  );
}

export default NewBugPage;
