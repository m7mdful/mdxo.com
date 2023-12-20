function Colors() {

    var lightCheck = document.getElementById("lightCheckBox");
    if(lightCheck.checked){
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("Title1").style.color = "white";
        document.getElementById("Title2").style.color = "white";
        document.getElementById("Title3").style.color = "white";
        document.getElementById("link1").style.color = "white";
        document.getElementById("mainBox").style.backgroundColor = "#2b2b2b";
        document.getElementById("icon").style.display = "none";
        document.getElementById("icon2").style.display = "inline";
    }
    else{
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("Title1").style.color = "black";
        document.getElementById("Title2").style.color = "black";
        document.getElementById("Title3").style.color = "black";
        document.getElementById("link1").style.color = "black";
        document.getElementById("mainBox").style.backgroundColor = "#ccc";
        document.getElementById("icon2").style.display = "none";
        document.getElementById("icon").style.display = "inline";
    }

}