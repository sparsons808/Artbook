# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!( { password: "password123", email: "moshebilds@yahoo.com", name: "Moses", bio: "why did i ever do this"} )
User.create!( { password: "password1234", email: "yaelbilds@yahoo.com", name: "Yelly", bio: "why did i ever not do this"} )
User.create!( { password: "password12345", email: "ryanparsnip@yahoo.com", name: "Ry", bio: "why did i never do this"} )
User.create!( { password: "password", email: "demo@gmail.com", name: "Demo", bio: "Hello World"} )