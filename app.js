


// const searchUser = document.getElementById('searchUser')


// searchUser.addEventListener('keyup', (e)=>{
//     // Get input text
//     const userText = e.target.value;

//     // Print text
//     console.log(userText);
// })

// const github = new Github;

// const searchUser = document.getElementById('searchUser');

// searchUser.addEventListener('keyup', (e)=>{

//     const userText = e.target.value;

//     if(userText !== ''){
//         // Display user
//         github.getUser(userText).
//         then(data => {
//             if(data.profile.message === "Not Found"){
//                 // Error Message
//             } else{

//             }
//         })
//     } 

// })



// const github = new Github;



// const searchUser = document.getElementById('searchUser');

// searchUser.addEventListener('keyup', (e)=>{
//     // Instantiate value
//     const userText = e.target.value;

//     if(userText !== ''){
//         // Display user
//         github.getUser(userText).
//         then(data =>{
//            console.log(data)
//         })
//     }
// })


// const github = new Github;

// const ui = new UI

// const searchUser = document.getElementById("searchUser");

// searchUser.addEventListener('keyup', (e)=>{
//     const userText = e.target.value;

//     if(userText !== ''){
//         github.getUser(userText).
//         then(data => {
//             if(data.profile.message === 'Not Found'){
//                 // Error Message
//                 ui.setMessage('User Not Found', 'alert alert-danger')
//             } else{
//                 // Show Profile
//                 ui.showProfile(data.profile)
                
//             }
//         })
//     } else{
//         ui.clearProfile()
//     }



// })

const github = new Github;

const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=>{

    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText).
        then((data)=>{
            if(data.profile.message==='Not Found'){
                // Show error
                    ui.setMessage('User Not Found', 'alert alert-danger')
                    
            } else{
                // Show profile
                ui.showProfile(data.profile)



            }



        })

    } else{
            ui.clearProfile()
    }

})