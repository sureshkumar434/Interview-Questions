import React, { useState } from "react";

function FolderStructure({ data }) {
  const [expend, setExpand] = useState(false);
  const { name, isFolder, elements } = data;

  const handleFolderExpand = () => {
    setExpand(!expend);
  };
  return (
    <>
      <span onClick={handleFolderExpand}>
        {name}
        <br />
      </span>
      <div style={{ paddingLeft: "10px" }}>
        {expend &&
          isFolder &&
          elements.map((data) => (
            <span key={data.name} style={{ paddingLeft: "10px" }}>
              <FolderStructure data={data} />
            </span>
          ))}
      </div>
    </>
  );
}
export default FolderStructure;
