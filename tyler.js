let requestHandler = (method, url) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open(method, url);
        request.send();
        request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
                resolve(request);
            } else {
                reject("Status was " + request.status);
            }
        };
    });
};


let display = (request) => {
    console.log(request.response);
    console.log(request.status);
}
async function display1() {
    let request = await requestHandler("get", "http://localhost:8081/note/");
    console.log(request.response)
}
requestHandler("GET", "http://localhost:8081/note/")
    .then((request) => {
        console.log(request.response);
    }).catch((error) => {
        console.log(error);
    })

display1();


async function getty() {
    let response = await fetch("http://localhost:8081/note/",{
        method:"get"
    });
    let json = await response.json();
    console.log(json);
}

getty()

class Dog{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    static defaultDog(){
        return new Dog("default",0);
    }
    bark(){
        console.log("woof");
    }
}
let dog = new Dog();
let c = Dog.defaultDog();
c.bark();
dog.bark();
console.log(dog.name)