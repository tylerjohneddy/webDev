let cats = document.createElement("div");
cats.id = "cats";
let heading = document.createElement("h1");
heading.className = "title";
heading.innerText = "Cats";
cats.append(heading);
let catalist = document.createElement("ul");
let names = ["pancake", "Cat Duku", "Caty Purry"];
for (let name of names) {
    let item = document.createElement("li");
    item.innerText = name;
    catalist.append(item);
}
cats.append(catalist);
document.body.append(cats);

let body = document.body;
// body.addEventListener("mousemove", (e) => {
//     console.log("X:" + e.clientX);
//     console.log("y:" + e.clientY);
// }
// )

let image = document.createElement("img");
image.src = "https://cdn.mos.cms.futurecdn.net/6nbg258oLcessJQa7x3Z8E-320-80.jpg";
image.alt = "Image of Gollum";

let image2 = document.createElement("img");
image2.src = "https://www.irishtimes.com/polopoly_fs/1.2453158.1449152864!/image/image.jpg_gen/derivatives/box_620_330/image.jpg";
image2.alt = "Image moving";
let imageId = "restarting";
image.alt = "image moving";
image.style.position = "absolute";
image.style.bottom = "110px";
image.style.left = "300px";
image.style.width = "20%";
body.append(image);
body.addEventListener("mousemove", (e) => {
    image.style.left = (e.clientX + 25) + "px";
    image.style.top = (e.clientY + 25) + "px";
});
// image.src = "https://cdn.mos.cms.futurecdn.net/6nbg258oLcessJQa7x3Z8E-320-80.jpg";
// image.alt = "Image moving";
// image.style.position = "absolute";

body.append(image);

document.getElementById("newButton").addEventListener("click", function () {
    body.append(image2);
    body.append("Gollum ");
    // setInterval((c))
})

body.addEventListener("keydown", (q) => {
    var currWidth = image.clientWidth;
    if (event.keyCode == 17) {
        if (currWidth == 500) {
            alert("Maximum zoom-in level reached.");
        } else {
            image.style.width = (currWidth + 50) + "px";
        }
    } else if (event.keyCode == 16) {
        if (currWidth == 50) {
            alert("Maximum zoom-out level reached.");
        } else {
            image.style.width = (currWidth - 50) + "px";
        }
    }
});

// let button = getElementById("new Button");

// body.addEventListener("keydown", (q) => {
//     var currWidth = button.clientWidth;
//     if (event.keyCode == 17) {
//         if(currWidth == 500){
//             alert("Maximum zoom-in level reached.");
//         } else{
//             button.style.width = (currWidth + 50) + "px";
//      }
//     } else if(event.keyCode == 16){
//         if(currWidth == 50){
//             alert("Maximum zoom-out level reached.");
//         } else{
//             button.style.width = (currWidth - 50) + "px";
//         }
//     }
// });

let getData = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8081/note/");
    request.send();
    request.onload = () => {
        let data = JSON.parse(request.response);
        let list = document.getElementById("tasks");
        list.innerText = "";
        for (let task of data) {
            let listItem = document.createElement("li");
            let div = document.createElement("div");
            let input = document.createElement("input");
            input.value = task.text;
            let button = document.createElement("button");
            let updateButton = document.createElement("button");
            updateButton.className = "btn btn-primary";
            updateButton.innerText = "Update"
            input.addEventListener("change", (event) => {
                updateData(task.id, para);
            })
            button.className = "btn btn-danger";
            button.innerText = "Delete"
            button.addEventListener("click", () => {
                deleteData(task.id);
            })
            div.appendChild(input);
            div.appendChild(button);
            // div.appendChild(updateButton);
            listItem.appendChild(div);
            list.appendChild(listItem);
        }
    }
}
let postData = (event) => {
    event.preventDefault();
    let form = event.target;
    let obj = {};
    let inputs = form.getElementsByTagName("input");
    for (let input of inputs) {
        if (input.name) {
            obj[input.name] = input.value;
        }
    }
    console.log(obj);
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8081/note/");
    request.setRequestHeader("Content-Type", "application/json")
    let body = JSON.stringify(obj);
    console.log(body);
    request.send(body);
    request.onload = () => {
        getData();
    }
}

let deleteData = (id) => {
    console.log(id);
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://localhost:8081/note/" + id);
    request.send();
    request.onload = () => {
        getData();
    }
}
let updateData = (id, input) => {
    let request = new XMLHttpRequest();
    console.log(id);
    let obj = {};
    obj.id = id;
    obj.text = input.value;
    request.open("PUT", "http://localhost:8081/note/");
    request.setRequestHeader("Content-Type", "application/json")
    console.log(obj);
    let body = JSON.stringify(obj);
    console.log(body);
    request.send(body);
    request.onload = () => {
        getData();
    }

}
getData();
// let x = function(){console.log("a")};
// let run = function(func,num){
//     for (let i = 0; i<num;i++){

//     }
//     func();
// }
// run(x,100000);
// let requestHandler = (method, url, callback) => {
//     let request = new XMLHttpRequest();
//     request.open(method, url);
//     request.send();
//     request.onload = () => {
//         callback(request)
//     };
// }
