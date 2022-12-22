const apiUrl = 'https://api.github.com/users/';

let searchedUser = document.querySelector("#searchedUser");
let form = document.querySelector("#form");
let main = document.querySelector("#main");

form.addEventListener("submit", e => {
    e.preventDefault();

    let username = searchedUser.value;
    
    fetch(apiUrl + username)
        .then(res => res.json())
        .then(data => {
            console.log(data);
    
            let name = data.name;
            let bio = data.bio;
            let followers = data.followers;
            let following = data.following;
            let repos = parseInt(data.public_repos);
            let avatar = data.avatar_url;
    
            let newInnerHtml = `
                <div id="userWrapper">
                    <img src=${avatar} id="userImg">
                    <div id="data">
                        <p id="name">${name}</p>
                        <p id="bio">${bio}</p>
                        <div id="dataWrapper">
                            <span>${followers} <b>Followers</b></span>
                            <span>${following} <b>Following</b></span>
                            <span>${repos} <b>Repos</b></span>
                        </div>
                    </div>
                </div>
            `;
            main.innerHTML = newInnerHtml;
        });
});