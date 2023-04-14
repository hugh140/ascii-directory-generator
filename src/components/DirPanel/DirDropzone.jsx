import { useState } from "react";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const zip = new JSZip();

function DirDropzone() {
  const [zipName, setZipName] = useState('')
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "application/zip": [".zip"],
    },
  });

  function unzip(file) {
    JSZip.loadAsync(file).then((zip) => {
      zip.forEach((relativePath, zipEntry) => {
        console.log(zipEntry);
      });
    });
  }

  function generateZipDir() {
    acceptedFiles.map(unzip);
  }

  return (
    <div className="text-center lg:ms-5 lg:w-1/4">
      <div
        {...getRootProps()}
        className="grid w-full cursor-pointer place-items-center border-2 border-dashed border-gray-200 
        p-7 text-gray-500 focus-within:border-blue-400 lg:mb-0"
      >
        <div>
          <input {...getInputProps()} />
          <FontAwesomeIcon className="text-2xl" icon={faPlus} />
          <br />
          Arrastra archivos comprimidos
          <br />
        </div>
      </div>
      <div className="mb-5 text-center">
        {!acceptedFiles[0] ? null : (
          <button
            className="mt-3 w-full border-2 border-blue-400 p-3 text-gray-500
          hover:bg-blue-50 active:bg-blue-400 active:text-white"
            onClick={generateZipDir}
          >
            Generar {acceptedFiles[0].name}
          </button>
        )}
      </div>
    </div>
  );
}
export default DirDropzone;
