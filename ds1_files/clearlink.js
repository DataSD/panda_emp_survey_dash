/*
 * CLCP v2.1 Clear Links to Current Page; Jonathan Snook  * 11/18/2004;09/17/2005; updated 2/1/2010 m2
 */

window.onload = clearCurrentLink;

function clearCurrentLink(){

//    var bottomnav = document.getElementById('bottomnav');
	
//    var a = bottomnav.getElementsByTagName("A");
    var a = document.getElementsByTagName("A");
    for(var i=0;i<a.length;i++)
 
 
      if(a[i].href == window.location.href.split("index.shtml")[0] || 
         a[i].href == window.location.href.split(" ")[0] ||
         a[i].href == window.location.href.split("#")[0])
          removeNode(a[i]);
 
//      if(a[i].href == window.location.href.split("index.shtml")[0] || a[i].href == window.location.href || a[i].href == window.location.href.split("#")[0])
//          removeNode(a[i]); 


}


function removeNode(n){
    if(n.hasChildNodes())
        for(var i=0;i<n.childNodes.length;i++)
            n.parentNode.insertBefore(n.childNodes[i].cloneNode(true),n);          
    n.parentNode.removeChild(n);
}

