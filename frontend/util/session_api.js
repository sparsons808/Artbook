
// sends the information a user has typed in (who they are) to the user controller
// to create a new user
export const postUser = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

// sends a user information to the sessions controller which
// verifies the users info and gives the user a session token
// and logs which gives them accesses to protected routes ie posts chirps friends etc
export const postSession = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

// sends a request to the session controller to delete the session of
// the current user which effectively logs them out which means
// they could no longer access protected routes (in theory)
export const deleteSession = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);