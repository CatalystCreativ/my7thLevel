class AddColumnUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :recent_seventh_level_id, :integer
  end
end
