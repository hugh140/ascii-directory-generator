import { useState } from "react";
import Folder from "./components/Folder";
import "./index.css";

function App() {
  const [directory, setDirectory] = useState([
    { name: "hola", folders: [{ name: "hola" }, { name: "hola" }] },
  ]);
  console.log(directory);

  function handleNewFolder() {
    const newFolderName = prompt("Ingresar el nombre de la carpeta a crear.");
    if (newFolderName === null) return;

    const newDirectory = [...directory];
    newDirectory.push({ name: newFolderName, folders: [] });
    setDirectory(newDirectory);
  }

  function handleRemoveFolder(event) {
    const confirmFolderRemove = confirm("¿Desea eliminar esta carpeta?");
    if (!confirmFolderRemove) return;

    const folderIndex = event.target.dataset.folderIndex;
    const newDirectory = [...directory];
    newDirectory.splice(folderIndex, 1);
    setDirectory(newDirectory);
  }

  return (
    <>
      <button
        className="my-4 rounded-lg bg-green-100 p-3 text-green-600 hover:bg-green-200"
        onClick={handleNewFolder}
      >
        Nueva Carpeta
      </button>

      {directory.map((folder, index) => (
        <>
          <Folder
            key={index}
            folderName={folder.name}
            indexFolder={index}
            removeFolderClick={handleRemoveFolder}
          ></Folder>
          <div className="border-l-2">
            <div className="ms-auto w-[95%]">
              {folder.folders.map((folder1, index1) => (
                <Folder
                  key={index1}
                  folderName={folder1.name}
                  indexFolder={index1}
                  removeFolderClick={handleRemoveFolder}
                ></Folder>
              ))}
            </div>
          </div>
        </>
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
