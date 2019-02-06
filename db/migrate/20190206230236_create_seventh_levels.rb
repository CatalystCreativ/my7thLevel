class CreateSeventhLevels < ActiveRecord::Migration[5.2]
  def change
    create_table :seventh_levels do |t|
      t.text :phrase
      t.text :core1
      t.text :core2
      t.text :core3
      t.text :core4
      t.text :core5
      t.text :action1
      t.text :question1
      t.text :goal1
      t.text :action2
      t.text :question2
      t.text :goal2
      t.text :action3
      t.text :question3
      t.text :goal3
      t.text :action4
      t.text :question4
      t.text :goal4
      t.text :action5
      t.text :question5
      t.text :goal5
      t.text :action6
      t.text :question6
      t.text :goal6
      t.text :action7
      t.text :question7
      t.text :goal7
      t.integer :user_id, null:false

      t.timestamps
    end

    add_index :seventh_levels, :user_id
  end
end
