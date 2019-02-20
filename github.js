// class Github{
//     constructor(){
//         this.client_id = 'f74fbda1f315b0454950';
//         this.client_secret = '524ae342cb022874f535fe2824bb597efa2639cc'
//     }

//     async getUser(user){
//          const profileResponse = fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

//          const profile = await profileResponse.json;
         
//          return {
//              profile
//          }
//     }



// }


// class Github{
//     constructor(){
//         this.client_id = 'f74fbda1f315b0454950' ;
//         this.client_secret = '524ae342cb022874f535fe2824bb597efa2639cc';
//     }

//    async getUser(user){
//         const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
//         const profile = await profileResponse.json();

//         return{
//             profile
//         }
//     }
// }

// class Github{
//     constructor(){
//         this.client_id = 'f74fbda1f315b0454950';
//         this.client_secret = '524ae342cb022874f535fe2824bb597efa2639cc'
//     }

//     async getUser(user){
//             const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

//             const profile = await profileResponse.json(); 

//             return{
//                 profile
//             }
//     }

// }

class Github{
    constructor(){
        this.client_id = 'f74fbda1f315b0454950';
        this.client_secret = '524ae342cb022874f535fe2824bb597efa2639cc';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json()

        return{
            profile,
            repos
        }

    }
}