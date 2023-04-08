import { useState } from "react";
import Folder from "./components/Folder";
import "./index.css";

function App() {
  const [directory, setDirectory] = useState([]);
  // console.log(directory)

  function newFolderClick() {
    const newFolderName = prompt('Ingresar el nombre de la carpeta a crear.')
    if (newFolderName === null) return;

    const newDirectory = [...directory];
    newDirectory.push({ name: newFolderName });
    setDirectory(newDirectory);
  }

  return (
    <>
      <button
        className="rounded-lg bg-green-100 p-3 text-green-600 hover:bg-green-200"
        onClick={newFolderClick}
      >
        Nueva Carpeta
      </button>

      {directory.map((folder, index) => (
        <Folder key={index} folderName={folder.name}></Folder>
      ))}

      {/* <Folder folderName="Hola" />
      <div className="border-l-2">
        <div className="ms-auto w-[95%]">
          <Folder />
          <Folder />
          <Folder />
          <div className="border-l-2">
            <div className="ms-auto w-[95%]">
              <Folder />
              <Folder />
              <Folder />
            </div>
          </div>
        </div>
      </div>
      <Folder />
      <Folder /> */}
    </>
  );
}

export default App;
