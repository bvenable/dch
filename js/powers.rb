#!/usr/bin/env ruby
require 'rubygems'
require 'csv'
require 'json'

powers = Array.new()
CSV.foreach("dcdata_all_powers") do |line|
	power = Hash.new()
	power['name'] = line[0]
	power['link'] = line[1]
	power['base'] = line[2]
	power['factor'] = line[3]
	powers << power	
end
puts JSON.generate(powers)
