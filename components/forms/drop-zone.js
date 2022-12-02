import { useState } from "react";
import Card from "../ui/card";
import Files from "../visuals/illustrations/files";
import classNames from "classnames";
import Upload from "../visuals/illustrations/upload";

function DropZone(props) {
  const { hasLabel, labelText } = props;
  const [files, setFiles] = useState();
  const [dragOver, setDragOver] = useState(false);
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  function onDragOver(e) {
    e.preventDefault();
    setDragOver(true);
  }

  function onDragLeave() {
    setDragOver(false);
  }

  async function onDrop(e) {
    e.preventDefault();
    setDragOver(false);

    let newFiles = [...e.dataTransfer.files];

    setFiles(newFiles);

    console.log(files);

    if (newFiles && newFiles.length > 0) {
      const data = await fetch(
        "https://api.cloudinary.com/v1_1/dgp6lwhl2/image/upload",
        {
          method: "POST",
          body: files,
        }
      ).then((r) => r.json());

      setImageSrc(data.secure_url);
      setUploadData(data);
    }
  }

  return (
    <div
      className={classNames(
        "h-44 border border-dashed rounded flex flex-col gap-4 items-center justify-center py-5.5 px-6",
        dragOver ? "bg-b70 border-b50" : "bg-white border-b60"
      )}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {!dragOver && <Files />}
      {!dragOver && (
        <div className="flex flex-col gap-1 items-center justify-center">
          <span className="text-base font-medium text-d10">
            Drag & Drop your files
          </span>
          <span className="text-xs text-d30">
            i.e. images to display, text files with content, etc
          </span>
        </div>
      )}
      {dragOver && (
        <div className="flex flex-col gap-4 items-center">
          <Upload />
          <span className="text-base font-regular text-b10">
            Drop your files to upload
          </span>
        </div>
      )}
    </div>
  );
}

export default DropZone;
