import { useContext } from "react";
import { dirStateContext } from "../../App";
import Directory from "../Directory";
import DirDropzone from "./DirDropzone";

import getFolderIndex from "../../scripts/getFolderIndex";
import unzip from "../../scripts/unzipFile";

function DirPanel({ folders }) {
  const { directory, setDirectory, root } = useContext(dirStateContext);
  console.log(directory);

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

  function generateDir(file) {
    const info = unzip(file[0]);
    Object.assign(root, info.root);
    folders.concat(info.folders);
    setDirectory({ ...directory, root });
  }

  return (
    <>
      <h1 className="mt-5 text-center text-2xl font-semibold uppercase text-blue-950">
        Ascii Dir Generator
      </h1>

      <button
        className="my-4 w-full rounded-lg bg-green-100 p-3 text-green-600 hover:bg-green-200 sm:w-auto"
        onClick={() => handleNewFolder(root)}
      >
        Nueva Carpeta
      </button>

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
                Agrega una nueva carpeta. <br />
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
