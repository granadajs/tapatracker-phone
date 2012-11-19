require 'sinatra'
require 'yajl'
require 'logger'

before do
  @logger = Logger.new(File.expand_path('../log/development.log', __FILE__))
  headers['Access-Control-Allow-Origin'] = '*'
end

# POST Create User
post "/api/users" do
  @logger.debug params.inspect
  Yajl::Encoder.encode token: 1234567
end

# POST Sign in User
post "/api/sessions" do
  @logger.debug params.inspect
  Yajl::Encoder.encode token: 1234567
end

# GET Tapas index
get "/api/tapas" do
  Yajl::Encoder.encode [
    { rating: 4, venue: { name: "Bob's Buns" }, image_url: "http://localhost:3000/assets/default.png" },
    { rating: 3, venue: { name: "Tony's" }, image_url: "http://localhost:3000/assets/default.png" },
    { rating: 5, venue: { name: "Meathead Mary" }, image_url: "http://localhost:3000/assets/default.png" }
  ]
end
