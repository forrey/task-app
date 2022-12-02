import DropZone from "../components/forms/drop-zone";
import Container from "../components/layout/container";
import Card from "../components/ui/card";
import DropdownMenu from "../components/ui/dropdown-menu";
import ActionsIcon from "../components/visuals/icons/actions-icon";
import DropdownMenuItem from "../components/ui/dropdown-menu-item";
import DeleteIcon from "../components/visuals/icons/delete-icon";
import EditIcon from "../components/visuals/icons/edit-icon";

function TestingPage() {
  return (
    <div className="flex-1 justify-center">
      <Container>
        <div className="flex gap-4 flex-col">
          <Card>
            <DropZone />
          </Card>
          <Card>
            <DropdownMenu triggerIcon={<ActionsIcon />}>
              <DropdownMenuItem icon={<EditIcon size="s" />} text="Edit" />
              <DropdownMenuItem icon={<DeleteIcon size="s" />} text="Delete" />
            </DropdownMenu>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default TestingPage;
