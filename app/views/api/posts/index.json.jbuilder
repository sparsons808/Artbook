json.array! @posts do |post|
    json.extract! post, :id, :body, :auther_id, :created_at
    json.author post.author, :id, :name
    # json.comments post.comments.map { |comment| comment.id }
end



