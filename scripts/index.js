import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()



 var slideshow = () => {
    let arr =[ "https://cms-contents.pharmeasy.in/banner/fcf06e6cf90-STAYHOMEDWEB.jpg?dim=1440x0&dpr=1.25&q=100",
    "https://cms-contents.pharmeasy.in/banner/3b30799ae78-COVIDFREE8JUNE.jpg?dim=1440x0&dpr=1.25&q=100",
    "https://cms-contents.pharmeasy.in/banner/fef1ef3c06a-DWEBCOVID.jpg?dim=1440x0&dpr=1.25&q=100",]


    let i=0;
    let cont = document.getElementById("slideshow")
    cont.innerHTML=null
    let img=document.createElement("img")
    img.src=arr[0]
    cont.append(img)
    i++;
    setInterval(function(){
        if(i==2){
            i=0
        }
        img.src=arr[i]
        cont.append(img)
        i++
    },3000)

}
slideshow()



let arr2=[
    {
        img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0",
        name:"Medicine",
        off:"UPTO 20% OFF"
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0",
        name:"Lab Test",
        off:"UPTO 70% OFF"
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0",
        name:"Health Care",
        off:"UPTO 60% OFF"
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0",
        name:"Health Blogs",
        off:""
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0",
        name:"Plus",
        off:"SAVE 5% EXTRA"
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0",
        name:"Offers",
        off:""
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=720x0",
        name:"Surgeries",
        off:""
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0",
        name:"Value Store",
        off:"UPTO 50% OFF"
    }
]
localStorage.setItem("category",JSON.stringify(arr2))
let data = JSON.parse(localStorage.getItem("category"))||[]

function appendCategories(data){
    let data_div=document.getElementById("category")

    data.forEach((el,index)=>{

        let div = document.createElement("div")
        div.id="container"
        
        let image=document.createElement("img")
        image.src=el.img
        image.setAttribute("id","image")
        let hr=document.createElement("hr")

        let name=document.createElement("h3")
        name.innerText=el.name
        name.style.marginTop="10px"
        // name.style.fontSize="20px"
        // name.style.textDecoration="bold"



        let offer=document.createElement("h3")
        offer.innerText=el.off
        offer.style.color="red"
        offer.style.marginTop="10px"



        div.append(image,hr,name,offer)
        data_div.append(div)


    })
}
appendCategories(data)

