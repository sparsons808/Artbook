
export const createComment = comment => {
    return (

        $.ajax({
            method: 'POST',
            url: '/api/comments',
            data: { comment }
        })
    )
};

export const updateComment = (comment, id) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/comments/${id}`,
        data: comment,
        processData: false,
        contentType: false
    })
)

export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
)

export const fetchComments = () => (
    $.ajax({
        method: 'GET',
        url: '/api/comments'
    })
)