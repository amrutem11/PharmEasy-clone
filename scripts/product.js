

let newlaunches_data = JSON.parse(localStorage.getItem("newlaunches"))||[]

appendimg(newlaunches_data)

appenddetails(newlaunches_data)

 appendmrp(newlaunches_data)



function appendimg(data){

    let soap=document.getElementById("left")

    let image=document.createElement("img")
    image.src=data.img

    soap.append(image)
}

function appenddetails(data){

     let details=document.getElementById("name")
    //  let card=document.createElement("div")


    let title=document.createElement("h2")
    title.innerText=data.name

 

     details.append(title)
    // details.append(card)
}

function appendmrp(data){
    let mrp=document.getElementById("mrp")

    let mrps=document.createElement("h3")
    mrps.innerText=data.price

 mrp.append(mrps)
}

btn.addEventListener("click",()=>{
    
    cart(newlaunches_data)
   })
   
   
   
   let items=JSON.parse(localStorage.getItem("cart")) || []
   function cart(element,index){
       console.log(element )
   items.push(element);
   localStorage.setItem("cart",JSON.stringify(items))
   
   }
// console.log(items)
