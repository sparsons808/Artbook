
export const fetchAllPosts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/feed'
    })
);

export const fetchPost = postId => (
    $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}`
    })
);

export const createPost = post => (
    $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: post,
        processData: false,
        contentType: false
    })
);

export const updatePost = (post, id) => {
    
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/posts/${id}`,
            data: post,
            processData: false,
            contentType: false
        })

    )
}

export const deletePost = postId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}`
    })
);