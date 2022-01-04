json.extract! @comment, :body, :commentor_id, :id, :post_id
json.author @comment.author, :id, :name
json.userphoto url_for(@comment.author.profile_photo) if @comment.author.profile_photo.attached?
