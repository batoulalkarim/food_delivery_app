class User < ApplicationRecord
    has_many :orders 
    has_many :restaurants, through: :orders 

    has_secure_password
end
