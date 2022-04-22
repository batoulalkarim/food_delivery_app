class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :review
      t.string :username
      t.string :dateposted
      t.integer :rating
      t.references :restaurant

      t.timestamps
    end
  end
end
