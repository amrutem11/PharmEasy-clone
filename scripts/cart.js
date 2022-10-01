
let arr = JSON.parse(localStorage.getItem('cart'));
console.log(arr)

 
const appendItem = (data) => {


data.forEach(function (ele){
    console.log(ele.img)
    let cont = document.getElementById('img1');
    cont.innerHTML=null;

    let image = document.createElement('img');
    image.src=ele.img;

    cont.append(image)
})


}

appendItem(arr)



// let carts = JSON.parse(localStorage.getItem("cart"))
// console.log("cart:",carts)

// appendimg(carts)

// appenddetails(carts)

//  appendmrp(carts)



// function appendimg(data){
//     //console.log(data)

//     let soap=document.getElementById("left")

//     let image=document.createElement("img")
//     image.src=data.img
//     console.log(image)

//     soap.append(image)
// }

// function appenddetails(data){

//      let details=document.getElementById("name")
//     //  let card=document.createElement("div")


//     let title=document.createElement("h2")
//     title.innerText=data.name

 

//      details.append(title)
//     // details.append(card)
// }

// function appendmrp(data){
//     let mrp=document.getElementById("mrp")

//     let mrps=document.createElement("h3")
//     mrps.innerText=data.price

//  mrp.append(mrps)

//  let del=document.getElementById("delete")
// del.addEventListener("click",function(){
//     todelete()
// })
// }



// // todelete(){
   
// //         console.log(index);
// //         arrProductData.splice(index, 1)
// // }

