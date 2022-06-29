// Add your code here

// Add your code here
function submitData(name, email){
    let postRequest = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify(name, email)
    };
    fetch('http://localhost:3000/users', postRequest)
    .then (res => res.json())
    .then (info => console.log(info))
    .catch (e => {
        alert("Something went wrong!")
        console.log(e.message)
    })
};
