const cont = document.querySelectorAll('case')
const x_o = document.getElementById('x-o')

let count = 0

function addX_O(){
    if(count%2==0){
        //append x
        x_o.innerHTML('X')
    }else{
        //append y
        x_o.innerHTML('O')
    }
}


cont.forEach(contv=>{
    contv.addEventListener('click',(e)=>{
        addX_O();
    })
} )