json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :body, :commentor_id, :id, :post_id
            json.author comment.author, :id, :name
        end
    end
end