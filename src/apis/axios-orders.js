import axios from 'axios'

const firebaseDb = axios.create({
  baseURL: 'https://react-myburger-41444.firebaseio.com/'
})

export default firebaseDb;