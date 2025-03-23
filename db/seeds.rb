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

movies = []

(1..13).each do |page|
  url = URI("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=#{page}")

  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = true

  request = Net::HTTP::Get.new(url)
  request["accept"] = 'application/json'
  request["Authorization"] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmEyYTU5YTk1M2U3NjQ2ZTg1M2NkNWExNjlmZGNhNiIsIm5iZiI6MTc0Mjc1NjM0My4zMDU5OTk4LCJzdWIiOiI2N2UwNTlmN2MwYjQzODdhNmVjNzI5OGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LPwPCPtKCQhpB0T-9m_Pp8BxY9Q0z21LBgGLGoDZ7xc'

  response = http.request(request)
  data = JSON.parse(response.read_body)
  movies.concat(data["results"])
end

movies = movies.first(250)

movies.each do |movie|
  base_url = 'https://image.tmdb.org/t/p/w300'
  new_movie = Movie.new()
  new_movie.save!
end
