class Quiz < ApplicationRecord
  has_one_attached :answer_image

  has_many :questions, foreign_key: "quiz_id", dependent: :destroy
end
