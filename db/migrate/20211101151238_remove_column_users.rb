class RemoveColumnUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :age, :date
  end
end
