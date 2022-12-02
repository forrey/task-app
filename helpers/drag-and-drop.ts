import React, { useState } from "react";

export default function dragAndDrop() {
  const [dragOver, setDragOver] = useState(false);
  const [fileDropError, setFileDropError] = useState("");

  function onDragOver(e: React.SyntheticEvent) {
    e.preventDefault();
    setDragOver(true);
  }

  function onDragLeave() {
    setDragOver(false);
  }

  return {
    dragOver,
    setDragOver,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
  };
}
