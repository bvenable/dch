#!/usr/bin/env ruby
require 'rubygems'
require 'csv'
require 'json'
require 'net/http'

powers = Array.new()
CSV.foreach("dcpowers") do |line|
	power = Hash.new()
	power['name'] = line[0]
	power['link'] = line[1]
	power['base'] = line[2].to_i
	power['factor'] = line[3].to_i
	powers << power
end
uri = URI.parse("http://localhost:4567/api/powers/put")
http = Net::HTTP.new(uri.host, uri.port)
response = http.post(uri.path, JSON.generate(powers))
puts response.inspect
