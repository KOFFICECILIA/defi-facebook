function changeimg(url,e) {
    document.getElementById("img").src = url;
    let nodes = document.getElementById("thumb_img");
    let node = document.getElementById("subject-blok");
    let img_child = nodes.children;
    let sub_img = node.children;
    for (i = 0; i < img_child.length; i++) {
      img_child[i].classList.remove('active')
    }
    e.classList.add('active');

    for (i = 0; i < sub_child.length; i++) {
      sub_child[i].classList.remove('active')
    }
    e.classList.add('active');
  
  }


  // palette de couleur

  var palette_color = document.getElementById("palette-color");
palette_color.onchange = function() {
  document.documentElement.style.setProperty('--color-primary', palette_color.value);
  document.documentElement.style.setProperty('--color-secondary', palette_color.value);

}


// you in