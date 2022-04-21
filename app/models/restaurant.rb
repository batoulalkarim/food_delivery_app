class Restaurant < ApplicationRecord
    has_many :orders 
    has_many :items 
    has_many :users, through: :orders 
    
    accepts_nested_attributes_for :items
end
