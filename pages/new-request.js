import FormRow from "../components/forms/form-row";
import FormSpacer from "../components/forms/form-spacer";
import Select from "../components/forms/select";
import TextArea from "../components/forms/text-area";
import TextInput from "../components/forms/text-input";
import Container from "../components/layout/container";
import Header from "../components/layout/header";
import ButtonPrimary from "../components/ui/button-primary";
import Card from "../components/ui/card";
import EFTA_SITES from "../efta-sites";

function NewRequestPage() {
  // We need to convert the efta sites into the proper format
  // select.js expects an object of key/value pairs like:
  // {"Option 1": "option-1", "Option 2" : "option-2"}
  const eftaSitesConverted = EFTA_SITES.reduce(function (map, obj) {
    map[obj.name] = obj.slug;
    return map;
  }, {});

  const priorityLevels = {
    Low: 4,
    Medium: 3,
    High: 2,
    Critical: 1,
  };

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
          <FormRow>
            <TextInput
              labelText="Request name"
              id="title"
              placeholderText="i.e. New page on EFTA main site"
            />
          </FormRow>

          <FormRow>
            <TextArea
              labelText="Request description"
              id="description"
              placeholderText="Be as detailed as possible."
              height="10"
            />
          </FormRow>

          <FormSpacer />

          <FormRow>
            <Select
              labelText="Website"
              options={eftaSitesConverted}
              hasDefaultOption={true}
              defaultOptionText="Choose a website"
            />
            <Select
              labelText="Priority"
              options={priorityLevels}
              hasDefaultOption={true}
              defaultOptionText="Choose a priority"
            />
          </FormRow>

          <FormSpacer hasDivider={true} />

          <FormRow hasMargin={false} contentAlignment={"right"}>
            <ButtonPrimary text="Add Request" link="" />
          </FormRow>
        </Card>
      </Container>
    </div>
  );
}

export default NewRequestPage;
