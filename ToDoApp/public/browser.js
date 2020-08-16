// Delete Feature
document.addEventListener("click", function(e) {

    //console.log(e.target.classList);
if (e.target.classList.contains("delete-me")) {

    //alert("Here");
    if (confirm("Do you really want to delete this item permanently?")) {
      axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function () {
        e.target.parentElement.parentElement.remove()
      }).catch(function() {
        console.log("Please try again later.")
      })
    }
  }




//document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-me")) {
        //alert("Here");
      let userInput = prompt("Enter your desired new text", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
      if (userInput) {
        axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function () {
          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
        }).catch(function() {
          console.log("Please try again later.")
        })
      }
    }
  })