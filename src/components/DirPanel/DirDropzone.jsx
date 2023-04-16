import { useDropzone } from "react-dropzone";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function DirDropzone({ generateZipDir }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => generateZipDir(files),
    multiple: false,
    accept: {
      "application/zip": [".zip"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="mb-4 grid w-full cursor-pointer place-items-center border-2 border-dashed border-gray-200 
        p-7 text-center text-gray-500 focus-within:border-blue-400 lg:mb-0 lg:ms-5 lg:w-1/4"
    >
      <div>
        <input {...getInputProps()} />
        <FontAwesomeIcon className="text-2xl" icon={faPlus} />
        <br />
        Select or drop a .zip file with wish directory.
        <br />
      </div>
    </div>
  );
}
export default DirDropzone;
