# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Deleting data"
Review.destroy_all
Record.destroy_all 
puts "🌱 Planting Record Store..."



r4 = Record.create(name: "Carrie & Lowell", artist:"Sufjan Stevens", release_date: 2015, image:"https://m.media-amazon.com/images/I/81opDuEYnGL._SY355_.jpg" )
r1 = Record.create(name: "Chip Chrome & The Mono-Tones", artist:"The Neighbourhood", release_date: 2020, image:"https://m.media-amazon.com/images/I/61KqonKUtKL._SY355_.jpg" )
r2 = Record.create(name: "Lemonade", artist:"Beyonce", release_date: 2017, image:"https://m.media-amazon.com/images/I/910OY-+zCaL._SY355_.jpg" )
r3 = Record.create(name: "Abbey Road Aniversary ", artist:"The Beatles", release_date: 2019, image:"https://m.media-amazon.com/images/I/81dUVKQDBEL._SY355_.jpg" )

r1= Review.create(date: Date.parse("Dec 8 2013"), comment:"Pretty Good", score: rand(1..10),  record_id:Record.ids.sample)
r2= Review.create(date: Date.parse("Dec 8 2018"), comment: "Not so good ", score: rand(1..10),  record_id:Record.ids.sample)
r3= Review.create(date: Date.parse("Dec 8 2019"), comment: "My Favorite!!", score: rand(1..10),  record_id:Record.ids.sample)
r4= Review.create(date: Date.parse("Dec 8 2011"), comment: "A good Listen", score: rand(1..10), record_id:Record.ids.sample)

 
puts "✅ Done seeding!"