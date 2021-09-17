class EditPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :user_id_profile, :integer
    add_index :posts, :user_id_profile
  end
end
