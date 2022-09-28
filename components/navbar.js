function navbar(){
    return ` <img id="logo" src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=360x0" alt="">
    <hr>
    <div id="pin">
        <div>
            <p style="color: #4f585e;;"><img src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=32x0" alt="">Express delivery to</p>
        </div>
    
        <div>
            <h3>Select pincode <img id="showmore" src="./images/show-more.png" alt=""></h3>
        </div>
    </div>
    <div id="search">
        <img id="searchlogo" src="./images/search.png" alt="">
        <input id="searchinput" type="text" placeholder="Search for ...">
        <button  id="search_btn" >Search</button>
    </div>
    <div style="margin-left: 30px ;" id="login_div">
        <div>
            <img id="person_img" src="./images/profile.png" alt="">
        </div>
        <div id="text">
                <a id="login" href="#login"> <span >Hello,Log in</span></a>
        </div> 
    </div>

    <div id="offer_div">
        <div>
            <img id="offer_img" src="./images/offer.png" alt="">
        </div>
        <div id="offer_txt">
            <a id="offer" href="offer.html"><span>Offers</span></a>
        </div>

    </div>

    <div id="cart_main">
        <div id="cart_div">
        
            <img id="cart_img" src="./images/carts.png" alt="">
            
        </div>
        <div id="count">0</div>
        <div id="offer_txt">
            <a id="offer" href="#offer"><span>Cart</span></a>
        </div>
    </div>
    
 

    `
}
export default navbar