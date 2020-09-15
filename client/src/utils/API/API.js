import axios from 'axios'

const API = {
    getCharacters: () => axios.get(`/characters`),
    addCharacters: (character) => axios.post(`/characters`, character),
    updateCharacters: (id, values) => axios.put(`/characters/${id}`, values),
    deleteCharacters: (id) => axios.delete(`/characters/${id}`)
}

export default API