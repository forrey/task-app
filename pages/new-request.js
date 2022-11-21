import { useRef } from "react";
import FormRow from "../components/forms/form-row";
import FormSpacer from "../components/forms/form-spacer";
import Form from "../components/forms/form";
import Select from "../components/forms/select";
import TextArea from "../components/forms/text-area";
import TextInput from "../components/forms/text-input";
import Container from "../components/layout/container";
import Header from "../components/layout/header";
import ButtonPrimary from "../components/ui/button-primary";
import Card from "../components/ui/card";
import EFTA_SITES from "../efta-sites";
import ButtonSecondary from "../components/ui/button-secondary";

function NewRequestPage() {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const websiteInputRef = useRef();
  const priorityInputRef = useRef();

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

  function formSubmissionHandler(event) {
    event.preventDefault();

    const reqBody = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      website: websiteInputRef.current.value,
      priority: priorityInputRef.current.value,
    };

    fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something Went Wrong");
        });
      })
      .then((data) => {
        titleInputRef.current.value = null;
        descriptionInputRef.current.value = null;
        websiteInputRef.current.value = null;
        priorityInputRef.current.value = null;
      })
      .catch((error) => {
        console.log("Something went wrong");
      });
  }

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
          <Form>
            <FormRow>
              <TextInput
                labelText="Request name"
                id="title"
                placeholderText="i.e. New page on EFTA main site"
                ref={titleInputRef}
              />
            </FormRow>

            <FormRow>
              <TextArea
                labelText="Request description"
                id="description"
                placeholderText="Be as detailed as possible."
                height="10"
                ref={descriptionInputRef}
              />
            </FormRow>

            <FormSpacer />

            <FormRow>
              <Select
                labelText="Website"
                options={eftaSitesConverted}
                hasDefaultOption={true}
                defaultOptionText="Choose a website"
                ref={websiteInputRef}
              />
              <Select
                labelText="Priority"
                options={priorityLevels}
                hasDefaultOption={true}
                defaultOptionText="Choose a priority"
                ref={priorityInputRef}
              />
            </FormRow>

            <FormSpacer hasDivider={true} />

            <FormRow hasMargin={false} contentAlignment={"right"}>
              <ButtonSecondary text="Cancel" link="/" />
              <ButtonPrimary
                text="Add Request"
                link=""
                onClick={formSubmissionHandler}
              />
            </FormRow>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default NewRequestPage;
