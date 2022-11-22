import NewBugForm from "../components/forms/instances/new-bug-form";
import Container from "../components/layout/container";
import Header from "../components/layout/header";
import Card from "../components/ui/card";

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

        <Card paddingSize="l">
          <NewBugForm />
        </Card>
      </Container>
    </div>
  );
}

export default NewBugPage;
