import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import copyToClip from "../scripts/copyToClip";
import generateAsciiTree from "../scripts/generateAsciiTree";

function DirAsciiPanel({ root }) {
  const [copyButton, setCopyButton] = useState({
    icon: faClipboard,
    message: "Copiar",
  });

  function copyButtonMessage() {
    setCopyButton({ icon: faCheck, message: copyToClip() });
    setTimeout(
      () => setCopyButton({ icon: faClipboard, message: "Copiar" }),
      1500
    );
  }

  function generateAscii() {
    const textarea = document.getElementById("asciiTextarea");
    textarea.value = generateAsciiTree(root);
  }

  return (
    <>
      <div className="flex">
        <button
          className="mt-6 w-full rounded-lg bg-purple-100 p-3 text-purple-600 hover:bg-purple-200 sm:w-auto"
          onClick={generateAscii}
        >
          Generar Ascii
        </button>
        <button
          className="ms-2 mt-6 w-auto rounded-lg bg-gray-100 p-3 px-10 text-gray-600 hover:bg-gray-200 sm:px-3"
          onClick={copyButtonMessage}
        >
          <FontAwesomeIcon icon={copyButton.icon} />
          <span className="ms-2 hidden sm:inline-block">
            {copyButton.message}
          </span>
        </button>
      </div>

      <textarea
        className="my-5 line-clamp-3 w-full border-2 border-gray-200 bg-white p-3 font-mono text-gray-500"
        placeholder={`
          Dir Generator Example:

          bootstrap/
          ├── css/
          │   ├── bootstrap-grid.css
          │   ├── bootstrap-grid.css.map
        `}
        id="asciiTextarea"
        cols={30}
        rows={10}
        disabled={true}
      ></textarea>
    </>
  );
}
export default DirAsciiPanel;
