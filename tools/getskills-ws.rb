#!/usr/bin/env ruby
require 'rubygems'
require 'csv'
require 'json'
require 'net/http'

uri = URI.parse("http://sheltered-plateau-4479.herokuapp.com/api/skills/get")
http = Net::HTTP.new(uri.host, uri.port)
response = http.get(uri.path)

skills = JSON.parse(response.body)

skills.each do |skill|
	name = skill['name']
	link = skill['link']
	base = skill['base']
	factor = skill['factor']
	puts "#{name},#{link},#{base},#{factor}"
end
