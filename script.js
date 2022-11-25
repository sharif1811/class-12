let checked = document.getElementById("checked");
checked.addEventListener("click",function(){
    // let q1 = document.querySelector("#q1").checked;
    // let q2 = document.querySelector("#q2").checked;
    // let q3 =doucment.querySelector("#q3").checked;
    // let  count=0;
    // if(q1){
    //     count++;
    // }
    // if(q2){
    //     count++;
    // }
    // if(q3){
    //     count++;
    // }
    // alert("Your score is : " + count)
    let q1 = documetn.getElementById("q1").checked;
    let q2 = document.getElementById("q2").checked;
    let q3 = document.getElementById("q3").checked;
    let checkeds = document.getElementById("checkeds");
    checked.addEventListener("click",myfun)
    function myfun (){
        let q1 = documetn.getElementById("q1").checked;
        let q2 = document.getElementById("q2").checked;
        let q3 = document.getElementById("q3").checked;
        let count = 0;
        if(q1){
            count++;
        }
        if(q2){
            count++;
        }
        if(q3){
            count++;
        }
        alert("Your score is : " + count)

    }

})