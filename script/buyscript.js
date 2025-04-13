function openConfirmation(imgData, i) {
  let currentImg = i;
  const boxDialog = document.createElement("dialog");
  boxDialog.classList.add("box_privew");
  boxDialog.id = "dialog5";
  const navig = document.createElement("div");
  navig.id = "navig";
  navig.classList.add("box_navi");
  const _imgBig = renderCurrentImage(imgData.img_src);
  const _rightBtn = createBtnRight();
  const _leftBtn = createBtnLeft();
  navig.append(_leftBtn, _imgBig, _rightBtn);
  const _disc = createDiscription(imgData.img_capt, currentImg);
  const _btnClose = createBtnClose();
  boxDialog.append(navig, _disc, _btnClose);
  document.body.appendChild(boxDialog);
  _btnClose.onclick = () => closePreview();
  UpdateObjImg(currentImg);
  boxDialog.showModal();
  backToGallery();
}
function creatConfirmationOrder(params) {}

function creatConfirmationImg(params) {}
