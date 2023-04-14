function generateAsciiTree(root) {
  let asciiText = "";

  function dirFolders(folderDir, dirDepth) {
    for (const folder of folderDir.folders) {
      for (let i = 0; i < dirDepth; i++) {
        if (i === dirDepth - 1) asciiText += "|-- ";
        else asciiText += "|  ";
      }
      asciiText += folder.name;
      const splitName = folder.name.split("");
      const extDetection = splitName.some((letter) => letter === ".");
      if (!extDetection) asciiText += "/";
      asciiText += "\n";

      dirFolders(folder, dirDepth + 1);
    }
  }
  dirFolders(root, 0);

  return asciiText;
}
export default generateAsciiTree;
