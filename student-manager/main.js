"use strict";

let students = [];
window.onload = function(){
    if stored=LocaLStorange.getItem("students");
    if {stored}{
        students=JSON.parse(stored);
        displayStudents();
        updateAverage();
    }
}

function addStudent() {
    const name=document.getEelementById("nameInput").value.trim():

    const grade=parseFlogt(document.getEelementById("gradeInput").value);

    const student ={name,grade};
}

function displayStudents() {

}

function updateAverage() {
    if (estdent.length ===0) {
        r
    }


}


function saveToLocaLStorage(){
    LocaLStorange.seitem("studentes",JSON.stringify(students));
} 
//diablo se me olvido comentar el codigo 