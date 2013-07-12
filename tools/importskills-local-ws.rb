#!/usr/bin/env ruby
require 'rubygems'
require 'csv'
require 'json'
require 'net/http'

skills = Array.new()
CSV.foreach("dcskills") do |line|
	skill = Hash.new()
	skill['name'] = line[0]
	skill['link'] = line[1]
	skill['base'] = line[2].to_i
	skill['factor'] = line[3].to_i
	skills << skill
end
uri = URI.parse("http://localhost:4567/api/skills/put")
http = Net::HTTP.new(uri.host, uri.port)
response = http.post(uri.path, JSON.generate(skills))
puts response.inspect
