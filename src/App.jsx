import { useState } from "react";
import Directory from "./components/Directory";
import "./index.css";

import DirFolders from "./scripts/dirTree";
const root = new DirFolders("root");
const folders = [];

function App() {
  const [directory, setDirectory] = useState({ root });
  console.log(root)

  //Creating new folder
  function handleNewFolder(node) {
    const newFolderName = prompt("Ingresar el nombre de la carpeta a crear.");
    if (!newFolderName) return;

    node = typeof node === "string" ? folders[Number(node)] : node;
    folders.push(node.add(newFolderName));
    setDirectory({ ...directory, root });
  }

  function handleEditFolder(event) {
    const newFolderName = prompt("Ingresar el nombre de la carpeta a editar.");
    if (!newFolderName) return;
    
    const folderIndex = event.target.dataset.folderIndex;
    folders[folderIndex].edit(newFolderName);
    folders.splice(folderIndex, 1);
    setDirectory({ ...directory, root });
    
  }

  //Remove a folder of directory
  function handleRemoveFolder(event) {
    const confirmFolderRemove = confirm("¿Desea eliminar esta carpeta?");
    if (!confirmFolderRemove) return;

    const folderIndex = event.target.dataset.folderIndex;
    folders[folderIndex].parent.remove(folderIndex);
    folders.splice(folderIndex, 1);
    setDirectory({ ...directory, root });
  }

  return (
    <>
      <button
        className="my-4 rounded-lg bg-green-100 p-3 text-green-600 hover:bg-green-200"
        onClick={() => handleNewFolder(root)}
      >
        Nueva Carpeta
      </button>

      <Directory
        newFolder={handleNewFolder}
        editFolder={handleEditFolder}
        removeFolder={handleRemoveFolder}
        dirTree={directory.root.folders}
      />

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
