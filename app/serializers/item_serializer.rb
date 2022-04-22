class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :restaurant_id, :description

  belongs_to :restaurant
end
