let counterList = 0
let resultWhistlist;
const counterWhistList = () => {
  counterList += 1;
  document.getElementById("result-whistlist").innerHTML = counterList

  resultWhistlist = document.getElementById("result-whistlist")
  resultWhistlist.style.display = "block"
  resultWhistlist.style.display = "inline-grid"
}

const openTabs = (event, paramContent) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    console.log(tabcontent)
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(paramContent).style.display = "block";
    event.currentTarget.className += " active";
  }



var modal = document.getElementById("myModal");


var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

document.onkeydown = function (e) {
  if(e.keyCode === 27) {
    modal.style.display = "none";
  } 
} 