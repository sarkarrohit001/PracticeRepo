const searchUser = document.getElementById('searchUser');
const github = new GitHub;
const ui = new UI;

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText != '')
    {
    
        //console.log(userText);
        github.getUser(userText).then(data => {

            console.log(data.profileData);
            if(data.profileData.message === 'Not Found'){
                ui.showAlert('User not found!', 'alert alert-danger');
            }
            else{

                //console.log(data);
                ui.showProfile(data.profileData);
                ui.showRepos(data.repoData);
            }
        })
    }
    else{
            ui.clearProfile();
    }
});