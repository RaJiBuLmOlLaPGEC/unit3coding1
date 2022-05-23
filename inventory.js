function display(){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    data.forEach(function(el,i){
        let p=document.createElement("div")
        let img=document.createElement("img");
        img.src=el.image;
        let desc=document.createElement("p");
        desc.innerText=el.desc;
        let type=document.createElement("p");
        type.innerText=el.type;
        let price=document.createElement("p");
        price.innerText=el.price;
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute("id","remove_product");
        btn.addEventListener("click",function(){
            remove(el,i);
        });
        p.append(img,type,desc,price,btn);
        document.querySelector("#all_products").append(p);
    });
}

display();

function remove(el,a){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    data.splice(a,1);
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
    console.log(el,a);
}