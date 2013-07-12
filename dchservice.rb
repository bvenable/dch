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
dch = db['dch']
powers = dch['powers']
skills = dch['skills']

set(:json_encoder,:to_json)

not_found{
  json(nil)
}

get('/api/powers/get') {
	selector=Hash.new()
	params.each_pair {|param, value|
		newselect = {"#{param}"=>Regexp.new("#{value}", "i")}
		selector = selector.merge(newselect)
	}
	results = powers.find(selector).sort(:name).to_a
	json(results)
}

post('/api/powers/put') {
	content_type :json
	new_id = powers.insert(params)
	powers.find_one(:_id => new_id).to_json
}

get('/api/powers/clear') {
	results = powers.remove
	json(results)
}

get('/api/skills/get') {
	selector=Hash.new()
	params.each_pair {|param, value|
		newselect = {"#{param}"=>Regexp.new("#{value}", "i")}
		selector = selector.merge(newselect)
	}
	results = skills.find(selector).sort(:name).to_a
	json(results)
}

post('/api/skills/put') {
	content_type :json
	data = JSON.parse(request.body.read)
	data.each {|record|
		new_id = skills.insert(record)
		skills.find_one(:_id => new_id).to_json
	}
}

get('/api/skills/clear') {
	results = skills.remove
	json(results)
}

