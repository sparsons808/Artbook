class CreateTableUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.date :age, null: false
      t.text :bio
      t.string :location
      t.string :work
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :name

  end
end
