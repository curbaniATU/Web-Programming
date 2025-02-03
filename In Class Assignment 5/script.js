let output = document.getElementById("output");

document.getElementById("arrowButton").addEventListener("click", () => {
    const greet = name => 'Hello, ' +name+'!';
    output.textContent = greet("Student");
});

document.getElementById("promiseButton").addEventListener("click", () => {
    function fetchData(){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve("Data fetched using Promise!");
            }, 2000);
        });
    }

    fetchData().then(response =>{
        output.textContent = response;
    });
});

document.getElementById("asyncButton").addEventListener("click", async () => {
    function fetchData(){
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve("Data fetched using Async/Await");
            }, 2000);
        });
    }

    let response = await fetchData();
    output.textContent = response;
});