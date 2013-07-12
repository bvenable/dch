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
	skill['base'] = line[2]
	skill['factor'] = line[3]
	skills << skill
end
uri = URI.parse("http://sheltered-plateau-4479.herokuapp.com/api/skills/put")
http = Net::HTTP.new(uri.host, uri.port)
response = http.post(uri.path, JSON.generate(skills))
puts response.inspect