import { updateNameDialog } from "./updateNameDialog.js";

const changeDirNameBtn = document.querySelector("#changeFileNameBtn");

changeDirNameBtn.addEventListener("click", (e) => {
  const fileId = changeDirNameBtn.dataset.fileid;
  const fileName = changeDirNameBtn.dataset.filename;
  const type = "file";
  const dialog = updateNameDialog(type, fileId, fileName);
  dialog.showModal();
});
