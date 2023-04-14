import Directory from "../Directory";
import getFolderIndex from "../../scripts/getFolderIndex";

function EditDirPanel({edit, remove}) {
  return (
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
          dirTree={directory.root.folders}
        />
      )}
    </div>
  );
}
export default EditDirPanel;
