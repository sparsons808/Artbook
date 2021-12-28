
export const fetchAllFriends = (id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/requests${id}`
        })
    )
}

export const addFriend = (userId, friendId) => {
    return (
        $.ajax({
            method: 'POST',
            url: 'api/rquests',
            data: { userId, friendId}
        })
    )
}

