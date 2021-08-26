export const loadNews = (id, text, date, confirmed) => {
    return  {
        type: 'newComment/add',
        payload: id, text, date, confirmed

    }
}

export const confirmComment = () => {
    return {
        type: 'admin/confirm/add',
    }
}

export const adminSign = () => {
    return {
        type: 'admin/singIn'
    }
}

export const userSing = () => {
    return {
        type: 'user/singIn'
    }
}