const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;
    newRow.querySelector(".delete-btn").addEventListener("click",function(){
        newRow.remove();
    });
    tableBody.appendChild(newRow);

    form.reset();

});
