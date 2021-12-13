# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Comment.destroy_all
Request.destroy_all

user_1 = User.create!( { password: "password123", email: "moshebilds@yahoo.com", name: "Moses", bio: "why did i ever do this"} )
user_2 = User.create!( { password: "password1234", email: "yaelbilds@yahoo.com", name: "Yelly", bio: "why did i ever not do this"} )
user_3 = User.create!( { password: "password12345", email: "ryanparsnip@yahoo.com", name: "Ry", bio: "why did i never do this"} )
user_4 = User.create!( { password: "password", email: "demo@gmail.com", name: "Demo", bio: "Hello World"} )

post_1 = Post.create!({auther_id: user_1.id, body:"this is a post"})
post_2 = Post.create!({ auther_id: user_2.id, body:"this is another post"})
post_3 = Post.create!({ auther_id: user_3.id, body:"this is the third post"})
post_4 = Post.create!({ auther_id: user_4.id, body:"this is the fourth post", profile: user_1.id})

comment_1 = Comment.create!({ post_id: post_1.id, body: "I am a comment on this post", commentor_id: user_1.id })
comment_2 = Comment.create!({ post_id: post_1.id, body: "I am another comment on this post", commentor_id: user_2.id })
comment_3 = Comment.create!({ post_id: post_1.id, body: "user 3 worte this post", commentor_id: user_3.id })
comment_4 = Comment.create!({ post_id: post_2.id, body: "I am a commentting on post two", commentor_id: user_4.id })
comment_5 = Comment.create!({ post_id: post_3.id, body: "I am a comment on this posssst", commentor_id: user_4.id })
comment_6 = Comment.create!({ post_id: post_3.id, body: "I am a commmmment on this post", commentor_id: user_1.id })
comment_7 = Comment.create!({ post_id: post_4.id, body: "I am aaaaa comment on this post", commentor_id: user_4.id })

friend_1 = Request.create!({ user_id: user_4.id, friend_id: user_1.id, accepted: true})
friend_2 = Request.create!({ user_id: user_4.id, friend_id: user_2.id, accepted: true})
friend_1 = Request.create!({ user_id: user_3.id, friend_id: user_4.id, accepted: true})