let b = document.body
console.log("First child of b is ", b.firstChild)
console.log("First  elemnt child of b is ", b.firstElementChild)
let t = document.body.firstElementChild
console.log(t)
console.log(t.rows)
let ctext = document.getElementsByClassName("card-text")[0]
ctext.style.color = "blue"
let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "red"
ctitles[1].style.color = "blue"
ctitles[2].style.color = "green"
let cla = document.getElementById("id")
console.log(cla)
console.log(cla.matches(".spa"))
console.log(cla.matches(".box"))
let ma = document.getElementById("man")
console.log(ma)
console.log(ma.matches(".box"))
console.log(ma.closest(".box"))
let sp1 = document.getElementById("sp1")
document.getElementByTagName("nav")[0].firstElementChild.style.color = "green"
