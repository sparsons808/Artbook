
export const getAllLikes = () => (
    $.ajax({
        method: 'GET',
        url: '/api/likes'
    })
);

export const makeLike = (like) => (
    $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: like
    })
);

export const deleteLike = (likeId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
);