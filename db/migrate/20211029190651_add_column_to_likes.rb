class AddColumnToLikes < ActiveRecord::Migration[6.1]
  def change
    add_reference :likes, :notable, polymorphic: true
    remove_column :likes, :liked_id, :integer
  end
end
