@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :liker_id, :notable_id, :notable_type
    end
end