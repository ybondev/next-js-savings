export const login = (username, password) => {
    if(username === 'systematic' && password === 'systematic') {
        localStorage.setItem('username', JSON.stringify({username}))

        return true
    }

    return false
}

export const isLoggedIn = () => {
    return !!localStorage.getItem('username')
}