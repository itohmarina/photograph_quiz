class Quiz < ApplicationRecord
  has_one_attached :answer_image

  has_many :questions, foreign_key: "quiz_id", dependent: :destroy
  
  validates :answer, presence: true
  validates :explanation, presence: true
  validates :answer_image, presence: true
  validates :q_sentence, presence: true

end
