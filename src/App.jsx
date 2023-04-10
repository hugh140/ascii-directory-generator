import { useState } from "react";
import Folder from "./components/Folder";
import "./index.css";

import DirFolders from "./scripts/dirTree";
const root = new DirFolders("root");
const folders = [];

function App() {
  const [directory, setDirectory] = useState({root});

  const a = root.getAllFolders(folder => folder.index)
  console.log(a)

  //Creación de nueva carpeta principal
  function handleNewFolder(node) {
    const newFolderName = prompt("Ingresar el nombre de la carpeta a crear.");
    if (newFolderName === null) return;

    node = typeof node === "string" ? folders[Number(node)] : node;
    folders.push(node.add(newFolderName));
    setDirectory({ ...directory, root });
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
        onClick={() => handleNewFolder(root)}
      >
        Nueva Carpeta
      </button>

      {root.getAllFolders(folder => (
        <Folder
          key={folder.index}
          folderName={folder.name}
          indexFolder={folder.index}
          removeFolderClick={handleRemoveFolder}
          newFolderClick={(event) =>
            handleNewFolder(event.target.dataset.folderIndex)
          }
        ></Folder>
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
