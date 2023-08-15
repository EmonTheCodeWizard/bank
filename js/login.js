// Step 1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
    // Step 3: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step 3: get Password
    // 3.a : set id on the html element
    // 3.b : get the element 
    // 3.c : get the value from element
    const passField = document.getElementById('user-pass');
    const pass = passField.value;

    // DANGER: DO NOT VERIFY email password on the client side
    // Step 4: verify email and password check either valid user or not!
    if (email === "amianik5566@gmail.com" && pass === "amianik5566") {
        window.location.href = 'bank.html';
    } else{
        alert('You Put Wrong Credentials')
    }
})
