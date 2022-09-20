function getUsers(){
    let request = new XMLHttpRequest;

    function renderlogika(){
        let x = this.responseText;
        let y = JSON.parse(x);
        console.log(y);


        let ul = document.createElement("ul");

        y.data.forEach(element => {
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.setAttribute("src", element.avatar);
            li.textContent = element.first_name;
            li.appendChild(img);
            ul.appendChild(li);
        });

        document.getElementById("fnimg").appendChild(ul);
    }

    

    request.addEventListener("load", renderlogika);
    request.open("GET", "https://reqres.in/api/users?page=2");
    request.send();
};

getUsers();


function getUsers2(){
    let request2 = new XMLHttpRequest; 

    function renderlogika2(){
        let z = this.responseText;
        let d = JSON.parse(z);
        console.log(d);

        let ul = document.createElement('ul');

        let li = document.createElement("li");
        li.textContent = d.data[0].name + " "+ d.data[0].year;
        ul.appendChild(li);
        document.getElementById("fny").appendChild(ul);
        
    }

    request2.addEventListener("load", renderlogika2);
    request2.open("GET", "https://reqres.in/api/unknown");
    request2.send();
};

getUsers2();











