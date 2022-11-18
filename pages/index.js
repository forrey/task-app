import Container from "../components/layout/container";
import Header from "../components/layout/header";

function HomePage(props) {
  return (
    <div className="flex-1 justify-center">
      <Container>
        <Header
          text="Open Tasks"
          buttonText="Add"
          hasButton={true}
          hasCounter={true}
        />
      </Container>
    </div>
  );
}

export default HomePage;
