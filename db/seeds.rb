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

user_1 = User.create!( { password: "password123", email: "moshebilds@yahoo.com", name: "Moses Baker", bio: "Artist Living in Brooklyn"} )
user_2 = User.create!( { password: "password1234", email: "yaelbilds@yahoo.com", name: "Yelly Baker", bio: "Writer Actor Lover"} )
user_3 = User.create!( { password: "password12345", email: "ryanparsnip@yahoo.com", name: "Ryan Tyler", bio: "Traveling the world!"} )
user_4 = User.create!( { password: "password", email: "demo@gmail.com", name: "Demo Artist", bio: "Hello World"} )
user_5 = User.create!( { password: "password123", email: "noahhuber@yahoo.com", name: "Noah Huber", bio: "Artist Living in Brooklyn"} )
user_6 = User.create!( { password: "password1234", email: "alexis@yahoo.com", name: "Alexis Pasely", bio: "Writer Actor Lover"} )
user_7 = User.create!( { password: "password12345", email: "charlotte@yahoo.com", name: "Charlotte Fernandez", bio: "Traveling the world!"} )
user_8 = User.create!( { password: "password", email: "trenton@gmail.com", name: "Trenton Polanco", bio: "Ridding wild"} )
user_9 = User.create!( { password: "password12345", email: "tiare@yahoo.com", name: "Tiare Pahia", bio: "Traveling the world!"} )
user_10 = User.create!( { password: "password", email: "milopearl@gmail.com", name: "Milo Baxter", bio: "Swimming in my thoughts"} )

post_1 = Post.create!({auther_id: user_1.id, body:"Anyone want to go to the Whitney tomorrow?"})
post_2 = Post.create!({ auther_id: user_2.id, body:"Having a little painters block today."})
post_3 = Post.create!({ auther_id: user_3.id, body:"Come check out my site at thebestartistintheworld.com"})
post_4 = Post.create!({ auther_id: user_4.id, body:"Thanks to everone who came to my show last night!!", profile: user_1.id})
post_5 = Post.create!({auther_id: user_6.id, body:"Bushwhick galleries anyone?"})
post_6 = Post.create!({ auther_id: user_2.id, body:"Come to my show at 46th and 5th!!"})
post_8 = Post.create!({ auther_id: user_7.id, body:"Staying in tonight...."})
post_9 = Post.create!({ auther_id: user_10.id, body:"My band is playing at hart bar tomorrow night, hope to see you all there", profile: user_1.id})
post_10 = Post.create!({ auther_id: user_2.id, body:"Paint and park tomorrow?", profile: user_4.id})
post_11 = Post.create!({ auther_id: user_7.id, body:"Loved your show las month!!!", profile: user_4.id})
post_12 = Post.create!({ auther_id: user_10.id, body:"Lets do dinner next week!!!", profile: user_4.id})

comment_1 = Comment.create!({ post_id: post_1.id, body: "Lets do tomorrow at noon.", commentor_id: user_1.id })
comment_2 = Comment.create!({ post_id: post_1.id, body: "Let's do it!", commentor_id: user_2.id })
comment_3 = Comment.create!({ post_id: post_1.id, body: "Have fun, I will be back in the city next week.", commentor_id: user_3.id })
comment_4 = Comment.create!({ post_id: post_2.id, body: "You got this Yelly!", commentor_id: user_4.id })
comment_5 = Comment.create!({ post_id: post_1.id, body: "I would LOVE to go!", commentor_id: user_4.id })
comment_6 = Comment.create!({ post_id: post_3.id, body: "Yeah great site!!!!", commentor_id: user_1.id })
comment_7 = Comment.create!({ post_id: post_3.id, body: "Greate site Ryan!!", commentor_id: user_4.id })

friend_1 = Request.create!({ user_id: user_4.id, friend_id: user_1.id, accepted: true})
friend_2 = Request.create!({ user_id: user_4.id, friend_id: user_2.id, accepted: true})
friend_3 = Request.create!({ user_id: user_3.id, friend_id: user_4.id, accepted: true})
friend_4 = Request.create!({ user_id: user_4.id, friend_id: user_5.id, accepted: true})
friend_5 = Request.create!({ user_id: user_4.id, friend_id: user_6.id, accepted: true})
friend_6 = Request.create!({ user_id: user_7.id, friend_id: user_4.id, accepted: true})
friend_7 = Request.create!({ user_id: user_4.id, friend_id: user_8.id, accepted: true})
friend_8 = Request.create!({ user_id: user_4.id, friend_id: user_9.id, accepted: true})
friend_9 = Request.create!({ user_id: user_10.id, friend_id: user_4.id, accepted: true})
