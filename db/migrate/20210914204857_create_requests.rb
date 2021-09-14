class CreateRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :requests do |t|
      t.integer :user_requesting_id
      t.integer :user_requested_id
      t.timestamps
    end
    add_index :requests, [:user_requesting_id, :user_requested_id], unique: true
  end
end
