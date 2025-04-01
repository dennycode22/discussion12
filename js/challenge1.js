document.addEventListener("dblclick", function() {
    const time = Date.now();
    const seconds = time / 1000
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24
    const years = days / 365
    alert(years);
});

document.getElementById("subscribe").addEventListener("change", function() {
    console.log("got the checkbox");
    if(this.checked){
        document.querySelector("#email").style.display="block";
        console.log("query selector worked");
    }
})