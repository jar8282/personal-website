function open() {
  document.getElementById(`navbar`).style.display = `flex`;
  if(document.documentElement.clientWidth >= 900){
    document.getElementById(`main`).style.marginLeft = `15em`;
  }
}

function close(){
  document.getElementById(`navbar`).style.display = `none`;
  document.getElementById(`main`).style.marginLeft = `0`;
}

function toggle(){
  if(document.getElementById(`navbar`).style.display == `flex`){
    close();
  }
  else {
    open();
  }
}