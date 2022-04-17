class Item < ApplicationRecord
    belongs_to :restaurant
    has_many :orders 
    has_many :users, through: :orders 
end
