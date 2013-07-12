#!/usr/bin/env ruby
require 'rubygems'
require 'json'
require 'sinatra'
require 'sinatra/json'
require 'mongo'
require 'uri'

def get_connection
  return @db_connection if @db_connection
  db = URI.parse(ENV['MONGOHQ_URL'])
  db_name = db.path.gsub(/^\//, '')
  @db_connection = Mongo::Connection.new(db.host, db.port).db(db_name)
  @db_connection.authenticate(db.user, db.password) unless (db.user.nil? || db.user.nil?)
  @db_connection
end


db = get_connection
puts db.inspect
db.database_names.each
dch = db['dch']
powers = dch['powers']

set(:json_encoder,:to_json)

not_found{
  json(nil)
}

get('/api/powers/get') {
	results = powers.find();
	json(results)
}

post('/api/powers/put') {
	content_type :json
	new_id = powers.insert params
	document_by_id(new_id).to_json
}

#get('/api/search') {
#	selector=Hash.new()
#	params.each_pair {|param, value|
#		newselect = {"#{param}"=>Regexp.new("#{value}", "i")}
#		selector = selector.merge(newselect)
#	}
#}

