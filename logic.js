let inputfield = document.querySelector(".input");
let checkbtn = document.querySelector(".checkbtn");
let yesornot = document.querySelector(".yesornot");
let showdata = document.querySelector(".showdata");

function checkpalindrome() {
  if (inputfield.value) {
    let originalStr = inputfield.value;
    let check = "";
    for (let index = originalStr.length - 1; index >= 0; index--) {
      check = check + originalStr[index];
    }
    if (originalStr === check) {
      yesornot.style.color = "green";
      yesornot.textContent = "yes it is palindrome";
    } else {
      yesornot.style.color = "red";
      yesornot.textContent = "NO it is not palindrome";
    }
  }
}

checkbtn.addEventListener("click", checkpalindrome);
// let array = ["faizan", "ali"];
// array.forEach((data) => (showdata.textContent = data));

// const student = [
//   { id: 1, name: "Student1", obMarks: 700, tMarks: 1100, status: "pass" },
//   { id: 2, name: "Student2", obMarks: 995, tMarks: 1100, status: "fail" },
//   { id: 3, name: "Student3", obMarks: 555, tMarks: 1100, status: "fail" },
//   { id: 4, name: "Student4", obMarks: 401, tMarks: 1100, status: "pass" },
//   { id: 5, name: "Student5", obMarks: 855, tMarks: 1100, status: "pass" },
//   { id: 6, name: "Student6", obMarks: 235, tMarks: 1100, status: "pass" },
//   { id: 7, name: "Student7", obMarks: 400, tMarks: 1100, status: "fail" },
//   { id: 8, name: "Student8", obMarks: 832, tMarks: 1100, status: "pass" },
//   { id: 9, name: "Student9", obMarks: 999, tMarks: 1100, status: "pass" },
//   { id: 10, name: "Student10", obMarks: 132, tMarks: 1100, status: "fail" },
// ];

// const newdata = student.filter((value) => value.status === "pass");
// const updated = newdata.map((setobj) => (setobj.status = "passed exams"));

// console.log(student);

// console.log(newdata);
// console.log(updated);

let a = 15;
let b = 10;
console.log(~b);
