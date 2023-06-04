var inputText = document.getElementById("budgetInput");
console.log(inputText.value)
var amount = document.getElementById("amount");
console.log(amount)
var listCategories = document.getElementById("categories");
var dueDate = document.getElementById("date");
var tableList = document.getElementById("tableList");

let userarray = [];
DisplayInfo();

function setBudgetUser() {
   

   
    if (amount.value > inputText.value) {
        alert("Sorry! your expensive is high your budget");

    }
    else {
        document.getElementById("totalBudget").innerText = inputText.value;
        console.log(inputText.value)

        var expensive = document.getElementById("expensive").innerText = amount.value;

        var balance = inputText.value - amount.value;
        var final = document.getElementById("balance").innerText = balance;
    userarray.push({ "categories": listCategories.value, "DateUser": dueDate.value, "Amount": amount.value });
    // console.log(userarray);
    DisplayInfo();
    SaveInfo(userarray);
    dueDate.value = '';
    listCategories.value = '';

    }
};



let objStr = localStorage.getItem('users');
if (objStr!=null) {
    userarray = JSON.parse(objStr);
    
}



function SaveInfo(userarray) {
    let str = JSON.stringify(userarray);
    localStorage.setItem('users', str);
    DisplayInfo();
}

function DisplayInfo(){
    let statement = '';
    userarray.forEach( (users,id)=>{
statement += `<tr>
<th>${users.categories} <br>${users.DateUser}</th>
<th>${users.Amount}</th>
<th><button id="btn"><i class="fa fa-trash" onclick='deleteData(${id})'></i></button></th>

</tr>`
    
});
tableList.innerHTML = statement;

}
function deleteData(id){

    userarray.splice(id,1);
    console.log(id);
   console.log(userarray.splice(id,1));
    SaveInfo(userarray);

}

