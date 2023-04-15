import JSZip from "jszip";
import DirFolders from "./dirTree";

function unzip(file) {
  let folders = [];
  let root = new DirFolders("root");

  JSZip.loadAsync(file).then((zip) => {
    zip.forEach((relativePath, zipEntry) => {
      const fileName = zipEntry.name.split("/");
      if (!fileName.at(-1)) fileName.splice(-1, 1);

      let folder = root;
      fileName.forEach((file) => {
        let index = 0;
        const equalName = folder.folders.some((e) => {
          index++;
          return e.name === file;
        });

        if (equalName) folder = folder.folders[index - 1];
        else {
          folder = folder.add(file);
          folders.push(folder);
        }
      });
    });
  });
  return { root, folders };
}
export default unzip;