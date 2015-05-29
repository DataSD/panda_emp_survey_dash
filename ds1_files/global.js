function cc(elementId, newClass) {
  if (elem = document.getElementById(elementId)) {
    //alert("Changing class of "+elementId+" to "+newClass);
    elem.className = newClass;
  }
}

function csrc(elementId, newSrc) {
  if (elem = document.getElementById(elementId)) {
    //alert("Changing src of "+elementId+" to "+newSrc);
    elem.src = newSrc;
  }
}

