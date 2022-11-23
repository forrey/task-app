import { useRef, useState } from "react";
import { useRouter } from "next/router";
import FormRow from "../form-row";
import FormSpacer from "../form-spacer";
import Form from "../form";
import TextArea from "../text-area";
import TextInput from "../text-input";
import ButtonPrimary from "../../ui/button-primary";
import { eftaProjectsToSelectFormat } from "../../../efta-projects";
import ButtonSecondary from "../../ui/button-secondary";
import slugify from "react-slugify";
import ButtonGroup from "../../ui/button-group";
import SelectReact from "../select-react";
import { priorityLevels } from "../../../helpers/utility-helpers";

function NewRequestForm() {
  const router = useRouter();

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const projectInputRef = useRef();
  const priorityInputRef = useRef();

  const [isSending, setIsSending] = useState(false);
  // We need to convert the efta sites into the proper format
  // select.js expects an object of key/value pairs like:
  // {"Option 1": "option-1", "Option 2" : "option-2"}

  function formSubmissionHandler(event) {
    event.preventDefault();
    setIsSending(true);

    var currentDate = new Date();

    const reqBody = {
      title: titleInputRef.current.value,
      slug: slugify(titleInputRef.current.value),
      description: descriptionInputRef.current.value,
      project: projectInputRef.current.value,
      priority: priorityInputRef.current.value,
      taskType: "request",
      status: "new",
      date: currentDate,
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
        projectInputRef.current.value = null;
        priorityInputRef.current.value = null;

        setIsSending(false);
        router.push("/");
      })
      .catch((error) => {
        console.log("Something went wrong");
        setIsSending(false);
      });
  }

  return (
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
          height="xl"
          ref={descriptionInputRef}
        />
      </FormRow>

      <FormSpacer size="s" />

      <FormRow>
        <SelectReact
          hasLabel={true}
          labelText="Project"
          options={eftaProjectsToSelectFormat}
          defaultOptionText="Select a project"
          id="project"
          ref={projectInputRef}
          isSearchable={true}
        />
        <SelectReact
          hasLabel={true}
          labelText="Priority"
          options={priorityLevels}
          defaultOptionText="Choose a priority"
          id="priority"
          ref={priorityInputRef}
          isSearchable={false}
        />
      </FormRow>

      <FormSpacer hasDivider={true} size="xl" />

      <FormRow hasMargin={false} contentAlignment={"right"}>
        <ButtonGroup>
          <ButtonSecondary text="Cancel" link="/" />
          <ButtonPrimary
            text="Add Request"
            link=""
            onClick={formSubmissionHandler}
            hasSpinner={true}
            isSpinning={isSending}
          />
        </ButtonGroup>
      </FormRow>
    </Form>
  );
}

export default NewRequestForm;
