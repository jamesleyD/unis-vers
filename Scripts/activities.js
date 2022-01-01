const activities_list = [
  {
    id:0,
    titre: "test",
    descripton: "test",
    image: "./Image/image7.jpeg",
  },
  {
    id:1,
    titre: "test2",
    descripton: "test2",
    image: "./Image/image7.jpeg",
  },
  {
    id:2,
    titre: "test3",
    descripton: "test3",
    image: "./Image/image7.jpeg",
  },
  {
    id:3,
    titre: "test4",
    descripton: "test4",
    image: "./Image/image7.jpeg",
  },
  {
    id:4,
    titre: "test5",
    descripton: "test5",
    image: "./Image/image7.jpeg",
  },
  {
    id:5,
    titre: "test6",
    descripton: "test6",
    image: "./Image/image7.jpeg",
  },
  {
    id:6,
    titre: "test7",
    descripton: "test7",
    image: "./Image/image7.jpeg",
  },
]

var activities_container = document.getElementById("activities_container");

activities_list.map(activity => {
  if (activity.id%2 == 0) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute("data-aos", "fade-left");
    newDiv.setAttribute("data-aos-easing", "ease");
    newDiv.setAttribute("data-aos-duration", "1000");

    var DivChild = document.createElement('div');
    DivChild.classList.add("activité_cont");
    newDiv.appendChild(DivChild);

    var div_presentation = document.createElement('div');
    div_presentation.classList.add("activité_presentation");
    DivChild.appendChild(div_presentation);

    var h2 = document.createElement('h2');
    h2.classList.add("activité_titre_y");
    h2.innerHTML=activity.titre;
    div_presentation.appendChild(h2);

    var p = document.createElement('p');
    p.classList.add("activité_p");
    p.innerHTML=activity.descripton;
    div_presentation.appendChild(p);

    var div_img = document.createElement('div');
    div_img.classList.add("img_activité_div");
    DivChild.appendChild(div_img);

    var img = document.createElement('img');
    img.classList.add("img_activité");
    img.setAttribute("src",activity.image);
    img.setAttribute("alt",activity.titre);
    div_img.appendChild(img);

    activities_container.appendChild(newDiv);
  } else {
    var newDiv = document.createElement('div');
    newDiv.setAttribute("data-aos", "fade-right");
    newDiv.setAttribute("data-aos-easing", "ease");
    newDiv.setAttribute("data-aos-duration", "1000");

    var DivChild = document.createElement('div');
    DivChild.classList.add("activité_cont");
    DivChild.classList.add("reverse");
    newDiv.appendChild(DivChild);

    var div_presentation = document.createElement('div');
    div_presentation.classList.add("activité_presentation");
    DivChild.appendChild(div_presentation);

    var h2 = document.createElement('h2');
    h2.classList.add("activité_titre_g");
    h2.innerHTML=activity.titre;
    div_presentation.appendChild(h2);

    var p = document.createElement('p');
    p.classList.add("activité_p");
    p.innerHTML=activity.descripton;
    div_presentation.appendChild(p);

    var div_img = document.createElement('div');
    div_img.classList.add("img_activité_div");
    DivChild.appendChild(div_img);

    var img = document.createElement('img');
    img.classList.add("img_activité");
    img.setAttribute("src",activity.image);
    img.setAttribute("alt",activity.titre);
    div_img.appendChild(img);

    activities_container.appendChild(newDiv);
  }
});

