import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

import Directory from "./components/Directory";
import "./index.css";

import DirFolders from "./scripts/dirTree";
import getFolderIndex from "./scripts/getFolderIndex";
import copyToClip from "./scripts/copyToClip";

const root = new DirFolders("root");
const folders = [];

function App() {
  const [directory, setDirectory] = useState({ root });

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

    const folderIndex = getFolderIndex(event.target);

    folders[folderIndex].edit(newFolderName);
    setDirectory({ ...directory, root });
  }

  //Remove a folder of directory
  function handleRemoveFolder(event) {
    const confirmFolderRemove = confirm("¿Desea eliminar esta carpeta?");
    if (!confirmFolderRemove) return;

    const folderIndex = getFolderIndex(event.target);

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

      {/* Botones Generador */}
      <div className="flex">
        <button
          className="mt-6 w-full rounded-lg bg-purple-100 p-3 text-purple-600 hover:bg-purple-200 sm:w-auto"
          onClick={() => console.log("Generar ASCII")}
        >
          Generar Ascii
        </button>
        <button
          className="ms-2 mt-6 w-auto rounded-lg bg-gray-100 p-3 px-10 text-gray-600 hover:bg-gray-200 sm:px-3"
          onClick={copyToClip}
        >
          <FontAwesomeIcon icon={faClipboard} />
          <span className="ms-2 hidden sm:inline-block">Copiar</span>
        </button>
      </div>

      <div className="my-5 w-full border-2 border-gray-200 p-3 text-gray-500">
        <textarea id="asciiDir" rows="10" cols="50" disabled>
          hola&#013;chao
        </textarea>
      </div>
    </div>
  );
}

export default App;
