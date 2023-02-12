class CreateChoices < ActiveRecord::Migration[6.1]
  def change
    create_table :choices do |t|
      t.integer :question_id, null: false
      t.string :body, null: false
      t.boolean :is_answer, null: false, default: false

      t.timestamps
    end
  end
end
