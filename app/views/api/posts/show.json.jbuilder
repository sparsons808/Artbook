json.extract! post, :id, :body, :created_at, :auther_id
json.auther @post.author, :id, :name
json.poshPhotoUrl url_for(@post.photo) if @post.photo.attahed?

