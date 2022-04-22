class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review,  :dateposted, :rating, :restaurant_id, :likes

  belongs_to :restaurant 
end
