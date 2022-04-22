class Restaurant < ApplicationRecord
    has_many :reviews
    has_many :orders 
    has_many :items
    has_many :users, through: :orders 
    
    
    accepts_nested_attributes_for :reviews, :items
    
end
