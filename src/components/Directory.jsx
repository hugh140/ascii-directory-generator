import Folder from "./Folder";

function Directory({ newFolder, editFolder, removeFolder, dirTree }) {
  return (
    <>
      {dirTree.map((folder, index) => (
        <div key={index}>
          <Folder
            folderName={folder.name}
            indexFolder={folder.index}
            removeFolderClick={removeFolder}
            editFolderClick={editFolder}
            newFolderClick={(event) =>
              newFolder(event.target.dataset.folderIndex)
            }
          ></Folder>
          <div className="border-l-2">
            <div className="ms-auto w-[95%]">
              {folder.folders ? (
                <Directory
                  newFolder={newFolder}
                  editFolder={editFolder}
                  removeFolder={removeFolder}
                  dirTree={folder.folders}
                />
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Directory;
