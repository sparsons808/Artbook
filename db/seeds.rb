# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

user_1 = User.create!( { password: "password123", email: "moshebilds@yahoo.com", name: "Moses", bio: "why did i ever do this"} )
user_2 = User.create!( { password: "password1234", email: "yaelbilds@yahoo.com", name: "Yelly", bio: "why did i ever not do this"} )
user_3 = User.create!( { password: "password12345", email: "ryanparsnip@yahoo.com", name: "Ry", bio: "why did i never do this"} )
user_4 = User.create!( { password: "password", email: "demo@gmail.com", name: "Demo", bio: "Hello World"} )

Post.create!({auther_id: user_1.id, body:"this is a post"})
Post.create!({ auther_id: user_2.id, body:"this is another post"})
Post.create!({ auther_id: user_3.id, body:"this is the third post"})
Post.create!({ auther_id: user_4.id, body:"this is the fourth post"})
