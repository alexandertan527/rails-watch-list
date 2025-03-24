# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


require 'uri'
require 'net/http'
require 'json'

puts "Deleting movies and bookmarks..."

Movie.destroy_all
Bookmark.destroy_all

puts "Deleted all movies and bookmarks"

puts "Putting movies into array..."

movies = []

(1..14).each do |page|
  url = URI("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=#{page}")

  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = true

  request = Net::HTTP::Get.new(url)
  request["accept"] = 'application/json'
  request["Authorization"] = 'Bearer API_READ_ACCESS_TOKEN_HERE '

  response = http.request(request)
  data = JSON.parse(response.read_body)
  movies.concat(data["results"])
end

movies = movies.uniq { |movie| movie["title"] }.first(250)

puts "Movies array populated with top 250 movies"

puts "Creating movies in database..."

base_url = "https://image.tmdb.org/t/p/w500"

movies.each do |movie|
  Movie.create!(
    title: movie["title"],
    overview: movie["overview"],
    poster_url: base_url + movie["poster_path"],
    rating: movie["vote_average"]
  )
end

puts "Movies created"
