
export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);

export const fetchUsers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
);

export const updateUserInfo = user => {
    // //debugger
   return ( 
       $.ajax({
            method: 'PATCH',
            url: `/api/users/${user.get('user[id]')}`,
            data: user,
            contentType: false,
            processData: false
        })
   )
};

export const updteUser = user => {
    // //debugger
   return ( 
       $.ajax({
            method: 'PATCH',
            url: `/api/users/${user.id}`,
            data: user,
        })
   )
};

export const fetchAllUsers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
)