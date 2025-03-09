import { updateNameDialog } from "./updateNameDialog.js";

const newDirBtn = document.querySelector("#newDirBtn");
const newDirDialog = document.querySelector("#newDirDialog");
const changeDirNameBtns = document.querySelectorAll("#changeDirNameBtn");
newDirBtn.addEventListener("click", (e) => {
  newDirDialog.showModal();
});
changeDirNameBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const dirId = btn.dataset.dirid;
    const dirName = btn.dataset.dirname;
    const type = "directory";
    const dialog = updateNameDialog(type, dirId, dirName);
    dialog.showModal();
  });
});
