import apiUrl from '../apiConfig'
import Axios from 'axios';

export const index = (user) => {
    return Axios({
        method: 'GET',
        url: apiUrl + `/`,
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    })
}


export const update = (user, museumId) => {
    console.log(user)
    return Axios({
        method: 'PATCH',
        url: apiUrl + `/MuseumList/${user.museumList[0]._id}`,
        headers: {
            'Authorization': `Bearer ${user.token}`
        },
        data: {
            museumId: museumId
        }
    })
}


export const destroy = (user, newArray) => {
    console.log(user)
    return axios({
        method: 'PATCH',
        url: apiUrl + `/MuseumList/${user.museumList[0]._id}`,
        headers: {
            'Authorization': `Bearer ${user.token}`
        },
        data: {
            newArray: newArray
        }
    })
}