import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//icons
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function Folder({
  folderName = "Foo Text",
  indexFolder,
  newFolderClick,
  editFolderClick,
  removeFolderClick,
}) {
  return (
    <div
      className="relative mx-auto mt-1 rounded-xl border-2
      border-zinc-100 p-2 text-zinc-800"
    >
      <div className="w-3/4">
        {folderName}
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <div className="grid grid-cols-3 gap-2">
          <button
            className="unded-lg top-1/2 w-10 rounded-lg bg-orange-100
          p-1 text-center text-orange-500 hover:bg-orange-200"
            data-folder-index={indexFolder}
            onClick={editFolderClick}
          >
            e
            {/* <FontAwesomeIcon data-folder-index={indexFolder} icon={faPenToSquare} /> */}
          </button>
          <button
            className="unded-lg top-1/2 w-10 rounded-lg bg-blue-100
          p-1 text-center text-blue-500 hover:bg-blue-200"
            data-folder-index={indexFolder}
            onClick={newFolderClick}
          >
            +
            {/* <FontAwesomeIcon data-folder-index={indexFolder} icon={faPlus} /> */}
          </button>
          <button
            className="unded-lg top-1/2 w-10 rounded-lg bg-red-100
          p-1 text-center text-red-500 hover:bg-red-200"
            data-folder-index={indexFolder}
            onClick={removeFolderClick}
          >
            -
            {/* <FontAwesomeIcon data-folder-index={indexFolder} icon={faMinus} /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Folder;
