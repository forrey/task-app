import Container from "../components/layout/container";
import Header from "../components/layout/header";
import Card from "../components/ui/card";
import NewRequestForm from "../components/forms/instances/new-request-form";

function NewRequestPage() {
  return (
    <div className="flex-1 justify-center">
      <Container>
        <Header
          text="New Request"
          hasButton={false}
          hasBack={true}
          hasCounter={false}
        />

        <Card paddingSize="l">
          <NewRequestForm />
        </Card>
      </Container>
    </div>
  );
}

export default NewRequestPage;
