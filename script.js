let popoverList=document.querySelectorAll('[data-bs-toggle="popover"]');
let popoverArray=Array.from(popoverList);
let finalList=[];
for(let i=0;i<popoverArray.length;i++){
    let elem=popoverArray[i];
    let popover=new bootstrap.Popover(elem,{html:true});
    finalList.push(popover)
}

