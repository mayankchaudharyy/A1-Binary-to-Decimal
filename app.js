let btn1 = document.querySelector(".btn");
let bin = document.querySelector("#binary");
let res = document.querySelector(".result");

btn1.addEventListener('click', () =>{
    let ans = 0;
    for(let i = 0; i< bin.value.length; i++){
        if(bin.value[i] === '1'){
            ans += Math.pow(2,bin.value.length-i-1)
        }else{
            continue;
        }
    }
    res.innerHTML = "Decimal Number: " + ans;
})