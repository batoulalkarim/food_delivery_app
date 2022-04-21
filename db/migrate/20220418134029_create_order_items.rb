class CreateOrderItems < ActiveRecord::Migration[6.1]
  def change
    create_table :order_items do |t|
      t.references :order
      t.references :item

      t.timestamps
    end
  end
end
