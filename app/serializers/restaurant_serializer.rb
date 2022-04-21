class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :distance, :items_id, :delivery_fee

  has_many :items, include_nested_associations: true
end
