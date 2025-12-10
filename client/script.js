async function callServer() {
    const res = await fetch('http://localhost:5000/api');
    const data = await res.json();
    console.log(data);

    document.getElementById("output1").textContent = data.message;
    document.getElementById("output2").textContent = JSON.stringify(data, null, 2);
    
}