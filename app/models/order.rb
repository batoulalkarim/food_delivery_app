class Order < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant 
    has_many :items 
end
