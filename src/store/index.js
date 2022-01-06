import { createStore } from "vuex";
import data from '@/projects.json'

export default createStore({
    state: {
        projects: data
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        getProjects: state =>
        {
            return state.projects
        },
        getProject: state => id =>
        {
            return state.projects.find(project => project.id === id)
        }
    }
})