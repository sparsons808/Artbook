json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :auther_id, :body, :created_at, :profile
            json.author post.author, :id, :name
            json.photo url_for(post.photo) if post.photo.attached?
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