let arr=[]
for(let i=0;i<4;i++){
    arr.push(prompt("Enter a number"))
}
    document.write(`<ul class='graph'>`)
    for(let i=0;i<arr.length;i++){
        document.write(`<li style='height:${arr[i]}px'>`)
        document.write(`<span>${arr[i]}</span>`)
        document.write(`<h4>第${i}季度</h4>`)
        document.write(`</li>`)
    }
    document.write(`</ul>`)
    