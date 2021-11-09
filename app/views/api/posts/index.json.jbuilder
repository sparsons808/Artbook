json.array! @posts do |post|
    json.extract! post, :id, :body, :auther_id, :created_at
    json.comments post.comments
end

