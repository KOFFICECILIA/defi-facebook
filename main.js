function changeimg(url,e) {
    document.getElementById("img").src = url;
    let nodes = document.getElementById("thumb_img");
    let img_child = nodes.children;
    for (i = 0; i < img_child.length; i++) {
      img_child[i].classList.remove('active')
    }
    e.classList.add('active');
  
  }


  // palette de couleur

  var palette_color = document.getElementById("palette-color");
var choixColor = document.getElementById("choixColor");
palette_color.onchange = function() {
	choixColor.style.backgroundColor = palette_color.value;
  palette_color.style.backgroundColor = palette_color.value;
}
choixColor.style.backgroundColor = palette_color.value;

