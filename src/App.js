import "./styles.css";
import FolderStructure from "./components/FolderStructure";
import folderData from "./data/folderData";

export default function App() {
  return (
    <div>
      <FolderStructure data={folderData} />
    </div>
  );
}
