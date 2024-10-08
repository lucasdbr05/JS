interface GithubUserResponse {
    id: number
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
    message?: "Not Found"
}

interface GithubRepoResponse {
    name: string 
    description: string
    fork: boolean
    stargazers_count: number
}

const users: GithubUserResponse[] = []

async function fetchUser(username:string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user: GithubUserResponse = await response.json()
    if (user.message){
        alert('Usuário não encontrado!')
    } else {
        users.push(user)

        alert(`O usário ${user.login} foi salvo
        id: ${user.id}
        login: ${user.login}
        Nome: ${user.name}
        Bio: ${user.bio}
        Repositórios públicos: ${user.public_repos}
        `)
    }
}

async function showUser(username:string) {
    const user = users.find(u => u.login === username)

    if (typeof user === 'undefined'){
        alert('User not found')
    } else{
        const response = await fetch(user.repos_url)
        const repos: GithubRepoResponse[] = await response.json()

        let message = `id: ${user.id}
        login: ${user.login}
        Nome: ${user.name}
        Bio: ${user.bio}
        Repositórios públicos: ${user.public_repos}
        `

        repos.forEach(repo => {
            message += `Nome: ${repo.name}
            Descrição: ${repo.description}
            Estrelas: ${repo.stargazers_count}
            É um fork: ${repo.fork?'Sim':'Não'} 
            `
        })
        alert(message)
    }
}

function showReposTotal(){
    const reposTotal = users.reduce((accumulator, user)=>(accumulator+user.public_repos),0)

    alert(`O grupo possui um total  de ${reposTotal} repositórios publicos!`)
}

function showAllUsers(){
    let message = 'Users:\n'

    users.forEach(user=>{
        message += `\n- ${user.login}`
    })

    alert(message)
}

function showTopFive(){
    const topFive = users.slice().sort((a,b)=> b.public_repos - a.public_repos).slice(0,5)

    let message = `Top 5 usuários com mais repositórios públicos:\n`

    topFive.forEach((user, index)=>{
        message += `\n${index+1} - ${user.login}: ${user.public_repos} repositórios`
    })
    alert(message)
}

async function main() {
    await fetchUser('isaacpontes')
    await fetchUser('julianaconde')
    await fetchUser('pcaldass')
    await fetchUser('lucasqueirogaa')
    await fetchUser('frans203')
    await fetchUser('LeDragoX')
    await fetchUser('lucasdbr')
    
  
    await showUser('isaacpontes')
    await showUser('julianaconde')
  
    showAllUsers()
    showReposTotal()
    showTopFive()
  }
  
  main()