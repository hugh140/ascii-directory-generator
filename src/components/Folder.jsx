function Folder({ folderName = "Foo Text", indexFolder, removeFolderClick }) {
  return (
    <div
      className="relative mx-auto mt-1 rounded-xl border-2
      border-zinc-200 p-2 text-zinc-800"
    >
      {folderName}
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <div className="grid grid-cols-2 gap-2">
          <button
            className="unded-lg top-1/2 w-10 rounded-lg bg-blue-100
          p-1 text-center text-blue-500 hover:bg-blue-200 "
          >
            +
          </button>
          <button
            className="unded-lg top-1/2 w-10 rounded-lg bg-red-100
          p-1 text-center text-red-500 hover:bg-red-200"
            data-folder-index={indexFolder}
            onClick={removeFolderClick}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
export default Folder;
