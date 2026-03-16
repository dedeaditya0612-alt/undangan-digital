function bukaUndangan(){

document.getElementById("cover").style.display="none"

let musik = document.getElementById("musik")

musik.play().catch(()=>{})

}


simplyCountdown('.countdown',{

year:2026,
month:12,
day:20,
hours:8

})


new Swiper(".mySwiper",{
loop:true,
autoplay:{
delay:3000
}
})


const urlParams = new URLSearchParams(window.location.search)
const nama = urlParams.get("to")

if(nama){

document.getElementById("namaTamu").innerText = nama
document.getElementById("namaHero").innerText = nama

}


function kirimUcapan(){

let nama = document.getElementById("namaUcapan").value
let pesan = document.getElementById("isiUcapan").value

let tampil = document.getElementById("daftarUcapan")

let item = document.createElement("p")

item.innerHTML = "<b>"+nama+"</b> : "+pesan

tampil.prepend(item)

}


function copyRek(){

let rek = document.getElementById("rekening").innerText

navigator.clipboard.writeText(rek)

alert("Nomor rekening disalin")

}