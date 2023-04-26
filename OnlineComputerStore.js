/*

const processor_data = {
    "INTEL PENTIUM III 3.0 GHz": "Intel Pentium III 3.0 GHz - 100$",
    "INTEL PENTIUM IV 3.5 GHz": "Intel Pentium IV 3.5GHz - 150$",
    "INTEL PENTIUM V 4.5 GHz": "Intel Pentium V 4.5 GHz - 250$"
}

for (let key in processor_data) {
    let option = document.createElement("option");
    let optionText =document.createTextNode(key)
    option.setAttribute("value", processor_data[key]);
    option.appendChild(optionText);
    processor.appendChild(option);
}*/

function compute_price() {
    computer_configuration.selected_configuration_price = computer_configuration.selected_ram + computer_configuration.selected_hdd + computer_configuration.selected_processor + computer_configuration.selected_video + computer_configuration.selected_displayt + computer_configuration.selected_displays
}



function thankyou() {
    alert("Thank you!")
    resetForm()
}


function resetForm() {
    document.getElementById("selected_processor").innerText = ""
    document.getElementById("selected_hdd").innerText = ""
    document.getElementById("selected_ram").innerText = ""
    document.getElementById("selected_video").innerText = ""
    document.getElementById("selected_displays").innerText = ""
    document.getElementById("selected_displayt").innerText = ""
    document.getElementById("total_price").innerText = ""
    form.reset()
}

let computer_configuration = {
    selected_configuration_price: 0,

    selected_ram: 0,
    selected_hdd: 0,
    selected_processor: 0,
    selected_video: 0,
    selected_displays: 0,
    selected_displayt: 0,
/*    selected_ram_price: "",
    selected_hdd_price: "",
    selected_processor_price: "",
    selected_video_price: "",
    selected_displays_price: "",
    selected_displayt_price: ""*/
}

let hdd_data = [{id: "seagate256gb", name: "Seagate Barracuda 256Gb SSD", price: 100 },
    {id: "seagate512gb", name: "Seagate Barracuda 512Gb SSD", price: 150},
    {id: "seagate1tb", name: "Seagate Barracuda II 1Tb SSD", price: 350},
    {id: "wd512gb", name: "Western Digital 512Gb SSD", price: 150},
    {id: "wd1tb", name: "Western Digital 1Tb SSD", price: 330}]

let processor_data = [{id: "intel3ghz", name: "Intel Xenon 3GHz", price: 150 },
    {id: "intel4ghz", name: "Intel Xenon II 4GHz", price: 200},
    {id: "intel 5ghz", name: "Intel Ultra 5GHz Dual Core", price: 350},
    {id: "amd3.5ghz", name: "AMD Ryzen 3.5 GHz Dual Core", price: 200},
    {id: "amd4ghz", name: "AMD Ryzen II 4GHz Dual Core", price: 350}]

let video_data = [{id: "nvidia256", name: "Nvidia GeForce GTX 256", price: 175 },
    {id: "nvidia512", name: "Nvidia GeForce GTX 512", price: 250},
    {id: "nvidia512ti", name: "Nvidia GeForce GTX II Titanium 512", price: 350},
    {id: "ati256", name: "ATI Radeon NX 256", price: 200},
    {id: "ati512", name: "ATI Radeon VX 512", price: 330}]

let ram_data = [{id: "kingston8", name: "Kingston DDR3 8Gb", price: 90 },
    {id: "kingston16", name: "Kingston DDR3 16Gb", price: 200},
    {id: "kingston32", name: "Kingston DDR3 32Gb", price: 350},
    {id: "corsair16", name: "Corsair DDR3 16Gb", price: 200},
    {id: "corsair32", name: "Corsair DDR3 32Gb", price: 350}]

let displays_data = [{id: "display13.4", name: "Display Monitor 13.4 inch", price: 100 },
    {id: "display15", name: "Display Monitor 15 inch", price: 140},
    {id: "display17", name: "Display Monitor 17 inch", price: 200},
    {id: "display19", name: "Display Monitor 19 inch", price: 250},
    {id: "display21", name: "Display Monitor 21 inch", price: 250}]

let displayt_data = [{id: "lcd", name: "Acer LCD Display", price: 150 },
    {id: "led", name: "Acer LED Display", price: 100},
    {id: "oled", name: "Acer OLED Display", price: 150},
    {id: "qled", name: "Acer QLED Display", price: 175},
    {id: "amoled", name: "Acer AMOLED Display", price: 200}]

let parameter = [processor_data, hdd_data, ram_data, video_data, displays_data, displayt_data]

const processor = document.getElementById("processor");
const hdd = document.getElementById("hdd");
const ram = document.getElementById("ram");
const video = document.getElementById("video");
const displays = document.getElementById("displays");
const displayt = document.getElementById("displayt");

const allItems = [processor, hdd, ram, video, displays, displayt]
let total_price = document.getElementById("total_price")
let form = document.getElementById("form")

for (let i=0; i<parameter.length; i++) {
    for (let i2=0; i2<parameter[i].length; i2++) {
       let option = document.createElement("option");
       option.textContent = parameter[i][i2].name;
       option.setAttribute("value", parameter[i][i2].price);
       allItems[i].appendChild(option)

    }

}


function select_cpu(selected) {
    computer_configuration.selected_processor = (+selected)
    let x = processor.options[processor.selectedIndex].textContent
    document.getElementById("selected_processor").innerHTML = x + " " + selected + "$"
    compute_price()
    total_price.textContent = "Your total is: " + computer_configuration.selected_configuration_price + "$"
}

function select_hdd(selected) {
    computer_configuration.selected_hdd = (+selected)
    let x = hdd.options[hdd.selectedIndex].textContent
    document.getElementById("selected_hdd").innerHTML = x + " " + selected + "$"
    compute_price()
    total_price.innerHTML = "Your total is: " + computer_configuration.selected_configuration_price + "$"

}

function select_ram(selected) {
    computer_configuration.selected_ram = (+selected)
    let x = ram.options[ram.selectedIndex].textContent
    document.getElementById("selected_ram").innerHTML = x + " " + selected + "$"
    compute_price()
    total_price.innerHTML = "Your total is: " + computer_configuration.selected_configuration_price + "$"
}

function select_video(selected) {
    computer_configuration.selected_video = (+selected)
    let x = video.options[video.selectedIndex].textContent
    document.getElementById("selected_video").innerHTML = x + " " + selected + "$"
    compute_price()
    total_price.innerHTML = "Your total is: " + computer_configuration.selected_configuration_price + "$"
}

function select_displays(selected) {
    computer_configuration.selected_displays = (+selected)
    let x = displays.options[displays.selectedIndex].textContent
    document.getElementById("selected_displays").innerHTML = x + " " + selected + "$"
    compute_price()
    total_price.innerHTML = "Your total is: " + computer_configuration.selected_configuration_price + "$"
}

function select_displayt(selected) {
    computer_configuration.selected_displayt = (+selected)
    let x = displayt.options[displayt.selectedIndex].textContent
    document.getElementById("selected_displayt").innerHTML = x + " " + selected + "$"
    compute_price()
    total_price.innerHTML = "Your total is: " + computer_configuration.selected_configuration_price + "$"
}







