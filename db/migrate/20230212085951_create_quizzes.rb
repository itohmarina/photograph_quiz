class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.string :answer, null: false
      t.text :explanation, null: false
      t.string :q_sentence, null: false

      t.timestamps
    end
  end
end
