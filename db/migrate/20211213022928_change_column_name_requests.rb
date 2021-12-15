class ChangeColumnNameRequests < ActiveRecord::Migration[6.1]
  def change
    rename_column :requests, :user_requesting_id, :user_id
    rename_column :requests, :user_requested_id, :friend_id
  end
end
