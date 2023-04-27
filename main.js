let birinchi_son = +prompt('Birirnchi sonni kirirting : ')
let Amallar = prompt("Amallardan bittasini tanlang :: \n 1: + ; \n 2:  - ; \n 3: * ;  \n 4: / ;  \n 5:  % ;")
let ikkinchi_son = +prompt('Ikkinchi sonni kirirting : ')
if(Amallar === '1'){
    koshish()
}else if(Amallar === '2'){
    ayirish()
}else if(Amallar === '3'){
    kopaytirish()
}else if(Amallar === '4'){
    bolish()
}else if(Amallar === '5'){
    foiz_chiqarish()
}

function koshish(){
    alert(`${birinchi_son} + ${ikkinchi_son} = ${birinchi_son+ikkinchi_son}`)
}
function ayirish(){

    alert(`${birinchi_son} - ${ikkinchi_son} = ${birinchi_son-ikkinchi_son}`)
    
}
function kopaytirish(){
    alert(`${birinchi_son} * ${ikkinchi_son} = ${birinchi_son*ikkinchi_son}`)
}
function bolish(){
    alert(`${birinchi_son} / ${ikkinchi_son} = ${birinchi_son/ikkinchi_son}`)  
}

function foiz_chiqarish(){
    let foiz = (birinchi_son+ikkinchi_son) *1/ 100
    alert(`${birinchi_son} + ${ikkinchi_son} = ${birinchi_son+ikkinchi_son} %  =  ${foiz}`)
}