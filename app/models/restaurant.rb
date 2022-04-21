class Restaurant < ApplicationRecord
    has_many :orders 
    has_many :items 
    has_many :users, through: :orders 
    has_many :reviews
    
    accepts_nested_attributes_for :items
    accepts_nested_attributes_for :reviews
end
