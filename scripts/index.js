// import navbar from "../components/navbar.js";

// document.getElementById("main_nav").innerHTML=navbar()



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
      



        let offer=document.createElement("h3")
        offer.innerText=el.off
        offer.style.color="red"
        offer.style.marginTop="10px"



        div.append(image,hr,name,offer)
        data_div.append(div)


    })
}
appendCategories(data)


let new_launches=document.getElementById("new_launches")


let new_launches_p= document.createElement("h2")
new_launches_p.innerText="New Launches"
new_launches_p.style.fontSize="1.5em"
new_launches_p.style.fontSize= "30px"

let p= document.createElement("p")
p.innerText="New wellness range just for you!"
p.style.color="grey"
p.style.marginTop="15px"
p.style.fontSize="20px"
p.style.lineHeight="1"

new_launches.append(new_launches_p,p)





let newlaunches_arr =[
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/U65148/baidyanath-nagpur-mahamanjisthadi-kadha-ayurvedic-blood-purifier-syrup-450-ml-2-1655533130.jpg?dim=1440x0",
        name:"Baidyanath Nagpur Mahamanjisthadi Kadha, Ayurvedic Blood Purifier Syrup, 450 Ml",
        price:"MRP ₹210.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/P71315/pharmeasy-vitamin-b-complex-with-folic-acid-improves-energy-heart-eye-health-bottle-of-60-2-1659444053.jpg?dim=1440x0",
        name:"Pharmeasy Vitamin B Complex With Folic Acid - Improves Energy - Heart & Eye Health - Bottle Of 60",
        price:"MRP ₹649.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/U13516/fixderma-kairfoll-anti-hair-loss-conditioner-200ml-2-1652259133.jpg?dim=1440x0",
        name:"Fixderma Kairfoll Anti Hair Loss Conditioner 200ml",
        price:" MRP ₹825.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/H68051/godrej-hit-flies-mosquitoes-black-insect-killer-spray-400-ml-2-1641793715.jpg?dim=1440x0",
        name:"Godrej Hit Flies & Mosquitoes Black Insect Killer (Spray)-400 Ml",
        price:"MRP ₹225.00"
    },

    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/D90191/liveasy-wellness-pain-relief-spray-55gm-2-1659963248.jpg?dim=1440x0",
        name:"Liveasy Wellness Pain Relief Spray 55gm",
        price:"MRP ₹199.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/E00158/all-out-ultra-mosquito-repellant-refills-pack-of-6-2-1645196377.jpg?dim=1440x0",
        name:"All Out Ultra Mosquito Repellant Refills (Pack Of 6)",
        price:"MRP ₹438.00"
    },
    // {
    //     img:"https://cdn01.pharmeasy.in/dam/products_otc/051229/dabur-badam-tail-100ml-2-1652176042.jpg?dim=1440x0",
    //     name:"Dabur Badam Tail 100ml",
    //     price:"MRP ₹425.00"
    // },
    // {
    //     img:"https://cdn01.pharmeasy.in/dam/products_otc/247233/slc-face-wash-tube-of-50-g-3-1643020421.jpg?dim=1440x0",
    //     name:"Slc Face Wash Tube Of 50 G",
    //     price:"MRP  ₹325.00"
    // },
    // {
    //     img:"https://cdn01.pharmeasy.in/dam/products_otc/I38062/glolip-cream-10gm-1-1663677651.jpg?dim=1440x0",
    //     name:"Glolip Cream 10gm",
    //     price:"MRP ₹250.00"
    // },
    // {
    //     img:"https://cdn01.pharmeasy.in/dam/products_otc/H61321/kiwi-paste-black-40-gm-2-1645196480.jpg?dim=1440x0",
    //     name:"Kiwi Paste Black - 40 Gm",
    //     price:"MRP ₹70.00"
    // },



]

localStorage.setItem("newlaunches",JSON.stringify(newlaunches_arr))
let newlaunches_data = JSON.parse(localStorage.getItem("newlaunches"))||[]

function appendNewLaunches(newlaunches_arr){

let new_launches_div=document.querySelector(".new_launches_div")


newlaunches_arr.forEach((el,index)=>{



    

    let div = document.createElement("div")
    div.setAttribute("id","new_launc_container")
    div.addEventListener("click",function(){
        localStorage.setItem("newlaunches",JSON.stringify(newlaunches_arr[index]))
        window.location.href="product.html"
    })
    
    let image_div=document.createElement("div")
    image_div.setAttribute("id","image_div")
    let image=document.createElement("img")
    image.src=el.img
    image.setAttribute("id","new_launches_img")
   

    let div2=document.createElement("div")
    div2.setAttribute("id","inside_div")
    div2.append(image)
    image_div.append(div2)


    let content_div=document.createElement("div")

   

    let name=document.createElement("h3")
    name.innerText=el.name
    name.style.marginTop="10px"
    name.setAttribute("id","new_launches_name")
    // name.style.fontSize="20px"
    // name.style.display=""
    // name.style. 

    



    let price=document.createElement("p")
    price.innerText=el.price

    price.style.color="grey"
    price.style.marginTop="10px"
    price.style.textAlign="left"
    content_div.append(name,price )




    div.append( image_div,content_div)
    new_launches_div.append(div)


})


}
 appendNewLaunches(newlaunches_arr)



 let offeryou=document.getElementById("offers_for_you")

 let p_offer = dcoument.createElement("p")
 p_offer.innerText=""



