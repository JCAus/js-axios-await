let p = document.querySelector('p')
const btn = document.getElementById("btn")

function showTrivia(res){
    let h3 = document.createElement('h3')
    h3.innerHTML = res
    p.append(h3)
}

let getTrivia = async () =>{
    p.innerHTML = ""
    let favNum = document.getElementById("number").value;
    let url = `http://numbersapi.com/${favNum}/`
    for(let i=0;i<4;i++){
        let res = await axios.get(url);
        showTrivia(res.data)
    }
}

btn.addEventListener('click', getTrivia)

