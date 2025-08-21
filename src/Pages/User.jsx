import React from 'react'
import { useEffect } from 'react'

const getuser = () => {
    fetch("/api/user")
    if (!res) {
        throw new Error('problem is with converting data from html to json :${res.status}')
    }
    return res.json()
        // .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error(`getuser error :${err}`))
}


const User = () => {
    useEffect(() => {
        getuser()
    }, [])

    return (
        <div>
            App
        </div>
    )
}

export default User





