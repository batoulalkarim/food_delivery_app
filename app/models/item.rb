class Item < ApplicationRecord
    belongs_to :restaurant
    has_many :order_items 
    has_many :orders, through: :order_items

    # accepts_nested_attributes_for :restaurant
    
end
