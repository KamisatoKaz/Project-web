
function getData() {
    const name = document.getElementById("in-name").value
    const email = document.getElementById("in-email").value
    const phone = document.getElementById("in-phone").value
    const subject = document.getElementById("in-subject").value
    const message = document.getElementById("in-message").value

    if(name == ""){
        return alert("Name must be filled!")
    } else if(email == "") {
        return alert("Email cannot be empty!") 
    } else if(phone == "") {
        return alert("Phone number must be filled!") 
    } else if(subject == "") {
        return alert("Subject must be filled!") 
    } else if(message == "") {
        return alert("Message must be filled!") 
    }

    const emailReceiver = "modemango33@gmail.com"
    let q = document.createElement("q")
    q.href =`mailto:${emailReceiver}?subject=${subject}&body=Hi, my name is ${name} and my email is ${email} I can be contacted through phone number ${phone} and my message is ${message} Thankyou!`
    q.click()

    let data = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(data)
}