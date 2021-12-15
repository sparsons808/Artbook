class DeleteColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :user_id_profile
  end
end
