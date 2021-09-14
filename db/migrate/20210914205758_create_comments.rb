class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :post_id, null: false
      t.text :body, null: false
      t.integer :commentor_id, null: false
      t.timestamps
    end
    add_index :comments, :commentor_id
    add_index :comments, :post_id
  end
end
