json.extract! @post, :id, :body, :created_at, :auther_id, :profile
json.author @post.author, :id, :name
json.postPhotoUrl url_for(@post.photo) if (@post.photo.attahed?)

