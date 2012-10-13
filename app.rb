require 'sinatra'
require 'yajl'
require 'logger'

before do
  @logger = Logger.new(File.expand_path('../log/development.log', __FILE__))
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
