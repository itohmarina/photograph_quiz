class Question < ApplicationRecord

  belongs_to :quiz
  has_many :choices, foreign_key: "question_id", dependent: :destroy

  validates :quiz_id, presence: true
  validates :q_sentence, presence: true

end
