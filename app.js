//Init Github
const github = new GitHub();
//Init ui class
const ui = new UI();

//Search input
const searchUser = document.getElementById("searchUser");

//Search input event listener
searchUser.addEventListener("keyup", e => {
  //Get input text
  const userText = e.target.value;

  if (userText !== "") {
    //make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not found") {
        //show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    //clear the profile
    ui.clearProfile();
  }
});
