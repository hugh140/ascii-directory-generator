import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Directory from "../Directory";
import DirDropzone from "./DirDropzone";

import getFolderIndex from "../../scripts/getFolderIndex";
import unzip from "../../scripts/unzipFile";
import DirFolders from "../../scripts/dirTree";

function DirPanel({ root, folders }) {
  const [directory, setDirectory] = useState({ root });
  const [loading, setLoading] = useState(false);

  function handleNewFolder(node) {
    const newFolderName = prompt("Ingresar el nombre de la carpeta a crear.");
    if (!newFolderName) return;

    node = typeof node === "string" ? folders[Number(node)] : node;
    folders.push(node.add(newFolderName));
    setDirectory({ ...node });
  }

  function handleEditFolder(event) {
    const newFolderName = prompt("Ingresar el nombre de la carpeta a editar.");
    if (!newFolderName) return;

    const folderIndex = getFolderIndex(event.target);

    folders[folderIndex].edit(newFolderName);
    setDirectory({ ...directory, root });
  }

  function handleRemoveFolder(event) {
    const confirmFolderRemove = confirm("¿Desea eliminar esta carpeta?");
    if (!confirmFolderRemove) return;

    const folderIndex = getFolderIndex(event.target);

    folders[folderIndex].parent.remove(folderIndex);
    folders.splice(folderIndex, 1);
    setDirectory({ ...directory, root });
  }

  function handleEmptyDirPanel() {
    Object.assign(root, new DirFolders("root"));
    folders.splice(0, folders.length);
    root.resetIndex();
    setDirectory({ ...directory, root });
  }

  function generateDir(file) {
    unzip(file[0], folders, root, directory, setDirectory, setLoading);
  }

  return (
    <>
      <div className="flex">
        <button
          className="my-4 w-full rounded-lg bg-green-100 p-3 text-green-600 hover:bg-green-200 sm:w-auto"
          onClick={() => handleNewFolder(root)}
        >
          New Folder
        </button>

        <button
          className="my-4 ms-3 w-full rounded-lg bg-red-100 p-3 text-red-600 hover:bg-red-200 sm:w-auto"
          onClick={handleEmptyDirPanel}
        >
          Clean Panel
        </button>
      </div>

      <div className="lg:flex lg:flex-row-reverse">
        <DirDropzone
          root={root}
          folders={folders}
          generateZipDir={generateDir}
        />

        <div className="h-[70vh] w-full overflow-y-scroll border-2 border-x-gray-50 border-y-gray-200 p-2">
          {!folders.length ? (
            <div className="grid h-full w-full place-items-center text-gray-500">
              <div>
                {!loading ? (
                  <div>Add a new folder.</div>
                ) : (
                  <div>
                    <span className="me-2">Loading</span>
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Directory
              newFolder={handleNewFolder}
              editFolder={handleEditFolder}
              removeFolder={handleRemoveFolder}
              dirTree={root.folders}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default DirPanel;
