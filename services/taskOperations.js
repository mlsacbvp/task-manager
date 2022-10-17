let form = document.getElementsByClassName("adder");
let input = document.getElementsByClassName("input");
let posts = document.getElementsByClassName("container");

form.addEventListener("click", () => {
    acceptData();
    
});

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += 
  `<ul class="containerr">
  <li class="new-task" draggable="true">${data.text}  </li>
</ul>
  `;
  input.value = "";
};
