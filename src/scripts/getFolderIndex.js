function getFolderIndex(target) {
  let folderTarget = target
  while (!folderTarget.dataset.folderIndex) {
    folderTarget = folderTarget.parentElement
  }
  return folderTarget.dataset.folderIndex
}
export default getFolderIndex