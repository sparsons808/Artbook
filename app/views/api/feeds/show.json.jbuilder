json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :auther_id, :body, :created_at, :profile
            json.photo url_for(post.photo) if post.photo.attached?
        end
    end
end

