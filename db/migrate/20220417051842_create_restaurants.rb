class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :image_url
      t.integer :distance
      t.float :delivery_fee
      t.string :name
      t.references :items 
      t.references :reviews
      
      t.timestamps
    end
  end
end
