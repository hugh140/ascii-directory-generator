import Folder from "../components/Folder";
let currentIndex = -1;

class DirFolders {
  constructor(name, parent = null, folders = []) {
    this.name = name;
    this.index = currentIndex++;
    this.parent = parent;
    this.folders = folders;
  }

  add(name) {
    const newFolder = new DirFolders(name);
    newFolder.parent = this;
    this.folders.push(newFolder);
    return newFolder;
  }

  edit(name) {
    this.name = name;
    return name;
  }

  remove(folderIndex) {
    this.folders.forEach((child, index) => {
      if (child.index === Number(folderIndex)) this.folders.splice(index, 1);
    });
  }

  // getAllFolders(callback) {
  //   let foldersArray = [];
  //   for (const folder of this.folders) {
  //     foldersArray.push(callback(folder));
  //     foldersArray = foldersArray.concat(folder.getAllFolders(callback));
  //   }
  //   return foldersArray;
  // }
}
export default DirFolders;
