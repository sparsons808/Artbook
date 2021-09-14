class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :liked_id, null: false
      t.timestamps
    end
    add_index :likes, :liker_id
    add_index :likes, :liked_id
  end
end
