

let newlaunches_data = JSON.parse(localStorage.getItem("newlaunches"))||[]

appendimg(newlaunches_data)

appenddetails(newlaunches_data)


function appendimg(data){

    let soap=document.getElementById("left")

    let image=document.createElement("img")
    image.src=data.img

    soap.append(image)
}

function appenddetails(data){

    let details=document.getElementById("middle")

    let title=document.createElement("h2")
    title.innerText=data.name
   

    let mrp=document.createElement("h3")
    mrp.innerText=data.price


    details.append(title,mrp)
}




