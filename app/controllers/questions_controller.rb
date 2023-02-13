class QuestionsController < ApplicationController

  def new
    @quiz = Quiz.find(params[:quiz_id])
    @question = Question.new
    @questions = @quiz.questions
    @choice = Choice.new
  end

  def create
    @quiz = Quiz.find(params[:quiz_id])
    @question = Question.new(question_params)
    @question.quiz_id = @quiz.id
    if @question.save!

      choice_1 = @question.choices.new(body: choice_params[:body_1])
      choice_1.is_answer = true
      choice_1.save
      choice_2 = @question.choices.new(body: choice_params[:body_2])
      choice_2.save
      choice_3 = @question.choices.new(body: choice_params[:body_3])
      choice_3.save

      redirect_to new_quiz_question_path(@quiz.id)
    else
      render "questions/new"
    end
  end


  private


  def question_params
    params.require(:question).permit(:quiz_id, :q_sentence)
  end

  def choice_params
    params.require(:question).permit(:body_1, :body_2, :body_3)
  end


end
