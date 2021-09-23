const getDataFromBackend = async () => {
    const rest = await fetch("http://localhost:8000/users");
    const data = await rest.json();
    //console.log(data);
    return data;
  };
  
  // Note that top-level await is only available in modern browsers
  // https://caniuse.com/mdn-javascript_operators_await_top_level
  const res = await getDataFromBackend();
  //console.log(res);

const container = document.getElementById("container");
const openFormButton = document.getElementById("newUserButton");
const closeFormButton = document.getElementById("closeFormButton");
const addUserFormContainer = document.getElementById("addUserFormContainer");

openFormButton.addEventListener("click", () => {
  addUserFormContainer.style.display = "flex";
});

closeFormButton.addEventListener("click", () => {
  addUserFormContainer.style.display = "none";
});

//   // Add data to HTML
// const addData = async () => {
//     const data = await getDataFromBackend();
  
//     data.forEach((value) => {
//       const div = document.createElement("div");
//       div.classList.add("userContainer");
//       div.innerHTML = `
//           <h3>${value.name}</h3>
//           <p>${value.role}</p>
//       `;
//       container.append(div);
//     });
//   };
  //const obj = [];
  function sendRequest2() {
    $.ajax({
      type: 'GET',
      url: "http://localhost:8000/users", 
      //data: {getDataFromBackend()},
      dataType: "json",
      success: function(res) {
        res.forEach((value) => {
            const div = document.createElement("div");
            div.classList.add("userContainer");
            div.innerHTML = `
                <h3>${value.name}</h3>
                <p>${value.role}</p>
            `;
            container.append(div);
        })
        //container.append(div).delay(2000);
        setTimeout(function(){
            sendRequest2(); //this will send request again and again;
        }, 100);
      }
      } 
    );
    $("#container").empty();
    
    // console.log(obj);
    // container.replaceChildren(obj);
    // obj.length = 0;
}
  // function sendRequest() {
  //     $.ajax({
  //       type: 'GET',
  //       url: "http://localhost:8000/users", 
  //       //data: {getDataFromBackend()},
  //       dataType: "json",
  //       success: function(res) {
  //         //console.log(data);
  //         const data = res;
  //         data.forEach((value) => {
  //           const div = document.createElement("div");
  //           div.classList.add("userContainer");
  //           div.innerHTML = `
  //               <h3>${value.name}</h3>
  //               <p>${value.role}</p>
  //           `;
  //           container.append(div);
  //         });
  //         //$('#container').html(res).delay(2000);
  //           setTimeout(function(){
  //               sendRequest(); //this will send request again and again;
  //           }, 5000);
  //       }
  //       } 
  //     ); 
  // }
//   function sendRequest(){
//     $.ajax({
//         url: "test.php",
//         success: 
//         function(result){
//             $('#links').text(result); //insert text of test.php into your div
//             setTimeout(function(){
//                 sendRequest(); //this will send request again and again;
//             }, 5000);
//         }
//     });
// }

  
 // addData();
  sendRequest2();
  //sendRequest();
  // (function hello() {
  //   $.ajax({
  //     type: 'POST',
  //         url: "http://localhost:8000/users", 
  //         data: getDataFromBackend(),
  //         success: function(res) {
  //           console.log(data);
  //           $('#container').html(res).delay(2000);
  //         }
  //     });
  // })();

    