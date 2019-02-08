class AddNotesToSeventhLevel < ActiveRecord::Migration[5.2]
  def change
    add_column :seventh_levels, :notes, :text
  end
end
