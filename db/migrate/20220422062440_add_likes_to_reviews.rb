class AddLikesToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :likes, :integer, null: false, default: 0
  end
end
