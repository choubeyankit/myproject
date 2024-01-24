let home = document.getElementById("home")
let experience = document.getElementById("experience")
let education =document.getElementById("education")
let  projects=document.getElementById("projects")
let  skills=document.getElementById("skills")
let  contact=document.getElementById("contact")
let explink = document.getElementById("explink")
let  edulink=document.getElementById("edulink")
let  prolink=document.getElementById("prolink")
let skilink =document.getElementById("skilink")
let  contlink=document.getElementById("contlink")

home.style.display ="block"
experience.style.display="none"
education.style.display="none"
projects.style.display="none"
skills.style.display="none"
contact.style.display="none"
nav.style.display="block"

explink.addEventListener("click" ,()=>{
    home.style.display ="none"
    experience.style.display="block"
    education.style.display="none"
    projects.style.display="none"
    skills.style.display="none"
    contact.style.display="none"
    nav.style.display="block"
})

edulink.addEventListener("click" ,()=>{
    home.style.display ="none"
    experience.style.display="none"
    education.style.display="block"
    projects.style.display="none"
    skills.style.display="none"
    contact.style.display="none"
    nav.style.display="block"
})

prolink.addEventListener("click" ,()=>{
    home.style.display ="none"
    experience.style.display="none"
    education.style.display="none"
    projects.style.display="block"
    skills.style.display="none"
    contact.style.display="none"
    nav.style.display="block"
})

skilink.addEventListener("click" ,()=>{
    home.style.display ="none"
    experience.style.display="none"
    education.style.display="none"
    projects.style.display="none"
    skills.style.display="block"
    contact.style.display="none"
    nav.style.display="block"
})

contlink.addEventListener("click" ,()=>{
    home.style.display ="none"
    experience.style.display="none"
    education.style.display="none"
    projects.style.display="none"
    skills.style.display="none"
    contact.style.display="block"
    nav.style.display="block"
})
