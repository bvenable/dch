#!/usr/bin/env ruby
require 'rubygems'
require 'csv'
require 'json'
require 'net/http'

uri = URI.parse("http://sheltered-plateau-4479.herokuapp.com/api/powers/get")
http = Net::HTTP.new(uri.host, uri.port)
response = http.get(uri.path)

powers = JSON.parse(response.body)

powers.each do |power|
	name = power['name']
	link = power['link']
	base = power['base']
	factor = power['factor']
	puts "#{name},#{link},#{base},#{factor}"
end
