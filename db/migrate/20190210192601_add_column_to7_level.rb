class AddColumnTo7Level < ActiveRecord::Migration[5.2]
  def change
    add_column :seventh_levels, :title, :string
  end
end
