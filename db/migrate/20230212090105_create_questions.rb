class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.integer :quiz_id, null: false
      t.string :q_sentence, null: false

      t.timestamps
    end
  end
end
