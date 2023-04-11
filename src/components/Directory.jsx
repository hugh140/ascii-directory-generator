import Folder from "./Folder";

function Directory({ newFolder, removeFolder, dirTree }) {
  return (
    <>
      {dirTree.map((folder, index) => (
        <div key={index}>
          <Folder
            folderName={folder.name}
            indexFolder={folder.index}
            removeFolderClick={removeFolder}
            newFolderClick={(event) =>
              newFolder(event.target.dataset.folderIndex)
            }
          ></Folder>
          <div className="border-l-2">
            <div className="ms-auto w-[95%]">
              {folder.folders ? (
                <Directory
                  newFolder={newFolder}
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
