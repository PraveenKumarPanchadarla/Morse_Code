const morse=[".- ","-... ","-.-. ","-.. ",". ","..-. ","--. ",".... ",".. ",".--- ","-.- ",".-.. ","-- ","-. ","--- ",".--. ","--.- ",".-. ","... ","- ","..- ","...- ",".-- ","-..- ","-.-- ","--.. "]
const morsi=["----- ",".---- ","..--- ","...-- ","....- ","..... ","-.... ","--... ","---.. ","----. "]
const alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num="0123456789";
const copy=document.getElementById("copy");
let out=document.getElementById("out");
const btn=document.querySelector("#polo");
const bn=document.querySelector("#reset");
btn.addEventListener("click",adam);
bn.addEventListener("click",sub);
function adam(){
    const word=document.getElementById("org").value;
    let wor=String(word).toUpperCase();
    console.log(wor.length);
    out.textContent = '';
    for(let i=0;i<wor.length;i+=1){
        for(let j=0;j<alphabets.length;j++){
            if(wor.charAt(i)==alphabets.charAt(j)){
                out.textContent+=morse[j];
            }
        }
        for(let k=0;k<num.length;k++){
            if(wor.charAt(i)==num.charAt(k)){
                out.textContent+=morsi[k];
        }
    }
}
}
function sub(){
    out.textContent="";
}
window.addEventListener("keydown", event=>{
    if(event.key=="Enter"){
        adam();
    }
} )
copy.addEventListener("click",textcopy);

function textcopy(){
    navigator.clipboard.writeText(out.textContent)
    .then(es=>{
        alert("copied");
    })
}
