json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :body, :auther_id, :profile,
            json.photo url_for(post.photo) if (post.photo.attahed?)
        end
    end
end

json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :body, :commentor_id, :id, :post_id
        end
    end
end