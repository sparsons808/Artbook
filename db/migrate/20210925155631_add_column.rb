class AddColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :requests, :accepted, :boolean, default: false
  end
end
