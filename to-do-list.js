const getList=()=>{
fetch("https://jsonplaceholder.typicode.com/todos").then(
    res=>{
      res.json().then(
        data=>{
          console.log(data);
          if(data.length>0){
            var temp="";
            var c="";
            data.forEach((u)=>{
              temp+="<tr>";
              temp+="<td>"+u.id+"</td>";
              temp+="<td>"+u.title+"</td>";
              c=u.completed;
               var uncheckedOnLoad=0;
              if(c==false)
              {

                //  "<td>"+"<input type=checkbox oninput=checkChange() id=checkBox${uncheckedOnLoad}>" +"</td>";
                 
                temp+= `<td><input type="checkbox" oninput="checkChange()" id="bt" id="checkBox${uncheckedOnLoad}"></td>`;
              }
              else{
                temp+= `<td><input type="checkbox" checked disabled onchange="checkChange()"></td>`;

                //   temp+= "<td>"+"<input type=checkbox checked disabled onchange=checkChange()>" +"</td>";
                  uncheckedOnLoad+=1;
                }
                temp+= "</tr>";
            })
            document.getElementById("progress").setAttribute("hidden", true);
           

            document.getElementById("data").innerHTML=temp;
          }
        }
        
      )
 }
)
}
getList();


 var storeCount = 0; // Used to store previous value of checkCount

 // Below function gets called everytime checkbox input is modified
 function checkChange() {
     var promise = new Promise(function (resolve, reject) {
         var checkCount = 0;
 
         // Loops thorugh all the checkboxes and counts the checked boxes
         for (var i = 0; i < uncheckedOnLoad; i++) {
             if ((document.getElementById("checkBox" + i)).checked == true) {
                 checkCount += 1;
             }
         }
 
         // Resolves only when the total checkbox count comes upto 5 from a lower number
         if (checkCount == 5 && storeCount < 5) {
             resolve();
         }
         else {
             storeCount = checkCount;
         }
     });
     promise.then(function () {
         setTimeout(function () {
             alert("Congrats! 5 Tasks have been Successfully Completed!");
         }, 10)
     });
 }
