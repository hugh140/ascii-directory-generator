import { useState } from "react";
import Directory from "./components/Directory";
import "./index.css";

import DirFolders from "./scripts/dirTree";
import getFolderIndex from "./scripts/getFolderIndex";

const root = new DirFolders("root");
const folders = [];

function App() {
  const [directory, setDirectory] = useState({ root });

  function handleNewFolder(node) {
    console.log(node)
    const newFolderName = prompt("Ingresar el nombre de la carpeta a crear.");
    if (!newFolderName) return;

    node = typeof node === "string" ? folders[Number(node)] : node;
    folders.push(node.add(newFolderName));
    setDirectory({ ...directory, root });
  }

  function handleEditFolder(event) {
    const newFolderName = prompt("Ingresar el nombre de la carpeta a editar.");
    if (!newFolderName) return;

    const folderIndex = getFolderIndex(event.target)

    folders[folderIndex].edit(newFolderName);
    setDirectory({ ...directory, root });
  }

  //Remove a folder of directory
  function handleRemoveFolder(event) {
    const confirmFolderRemove = confirm("¿Desea eliminar esta carpeta?");
    if (!confirmFolderRemove) return;

    const folderIndex = getFolderIndex(event.target)

    folders[folderIndex].parent.remove(folderIndex);
    folders.splice(folderIndex, 1);
    setDirectory({ ...directory, root });
  }

  return (
    <div className="container mx-auto p-2">
      <button
        className="my-4 w-full rounded-lg bg-green-100 p-3 text-green-600 hover:bg-green-200 sm:w-auto"
        onClick={() => handleNewFolder(root)}
      >
        Nueva Carpeta
      </button>
      <div className="h-[80vh] overflow-y-scroll border-2 border-x-gray-50 border-y-gray-200 p-2">
        {!folders.length ? (
          <div className="grid h-full place-items-center text-gray-500">
            <div>
              Agrega una nueva carpeta. <br />
            </div>
          </div>
        ) : (
          <Directory
            newFolder={handleNewFolder}
            editFolder={handleEditFolder}
            removeFolder={handleRemoveFolder}
            dirTree={directory.root.folders}
          />
        )}
      </div>
    </div>
  );
}

export default App;
