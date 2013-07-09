#!/usr/bin/env ruby
require 'rubygems'
require 'csv'
require 'json'

powers = Array.new()
CSV.foreach("dcskills") do |line|
	power = Hash.new()
	power['name'] = line[0]
	power['link'] = line[1]
	power['base'] = line[2]
	power['factor'] = line[3]
	powers << power	
end
puts JSON.generate(powers)
