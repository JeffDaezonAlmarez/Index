const createUser = async () => {
    const fullName = document.getElementById("fullname")
    const Address = document.getElementById("address")
    const Age = document.getElementById("age")
    const phoneNumber = document.getElementById("number")
    const Email = document.getElementById("emailRegistration")
    const Password = document.getElementById("passwordRegistration")

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            responseType: "json",
        },
        body: JSON.stringify({
            fullName: fullName.value,
            Address: Address.value,
            Age: Age.value,
            phoneNumber: phoneNumber.value,
            Email: Email.value,
            Password: Password.value,
        })
    }
    
    const response = await fetch("http://localhost:8080/api/user/register", options);
    const resData = await response.json();
    console.log(resData);
    }
const registerForm = document.getElementById("registrationform");
registerForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    alert("AccountCreated");
    createUser();
    window.location.replace('./login.html');
})