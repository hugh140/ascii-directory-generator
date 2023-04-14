import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";

function DirDropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
  });

  const files = acceptedFiles.map((file) => console.log(file));
  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className="mb-5 grid w-full cursor-pointer place-items-center border-2 border-gray-200 
        p-7 text-center text-gray-500 focus-within:border-blue-400 lg:mb-0 lg:ms-5 lg:w-1/4"
    >
      <div>
        <input {...getInputProps()} />
        <FontAwesomeIcon className="text-2xl" icon={faPlus} />
        <br />
        Arrastra archivos comprimidos
      </div>
    </div>
  );
}
export default DirDropzone;
