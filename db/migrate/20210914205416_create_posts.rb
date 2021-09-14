class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :auther_id, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :posts, :auther_id
  end
end
