class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :image_url
      t.integer :item_id

      t.timestamps
    end
  end
end
