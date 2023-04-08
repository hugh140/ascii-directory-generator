function Folder({folderName = 'Foo Text'}) {
  return (
    <div
      className="relative mx-auto mt-5 rounded-xl border-2 border-zinc-400
      p-3 text-xl text-zinc-800"
    >
      {folderName}
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <div className="grid grid-cols-2 gap-2">
          <div
            className="unded-lg top-1/2 w-10 cursor-pointer rounded-lg
          bg-blue-100 p-1 text-center text-blue-500 "
          >
            +
          </div>
          <div
            className="unded-lg top-1/2 w-10 cursor-pointer rounded-lg
          bg-red-100 p-1 text-center text-red-500"
          >
            -
          </div>
        </div>
      </div>
    </div>
  );
}
export default Folder;
