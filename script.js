function calculate(id,increase,tk){
    let pcs=document.getElementById(id);
    let parPcs=parseInt(pcs.innerText);
    if(increase==true){
        parPcs=parPcs+1
    }
    if(increase==false && parPcs>0){
        parPcs=parPcs-1
    }

    pcs.innerText=parPcs

    let tk=document.getElementById(tk);
    let parTk=parseInt(tk.innerText);
    let result=parPcs*parTk;
    document.getElementById("fTotal").innerText=result;
}