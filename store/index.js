export const state = () => ({
    githubProjects: []
})


export const mutations = {
    updateGithubProjects: (state, payload) => {
        state.githubProjects = payload
    }
}

export const actions = {
    async getGithubProjects({ state, commit }) {
        if (state.githubProjects.lenght) return

        try {
            let githubProjects = await fetch("https://api.github.com/users/bartech-customs/repos?page=1&per_page=100").then(res => res.json())

            githubProjects = githubProjects.filter(el => el.fork === false).map(({name, description, id, html_url, created_at}) => ({name, description, id, html_url, created_at}))

            commit('updateGithubProjects', githubProjects)
            
        } catch (error) {
            console.log(error);
        }

    }
}