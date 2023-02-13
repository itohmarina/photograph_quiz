class QuizzesController < ApplicationController

  def show
    @quiz = Quiz.order("RAND()").limit(1)
  end

  def new
    @quiz = Quiz.new
    @question = Question.new
    @choice = Choice.new
  end

  def create
    unless params[:answer_image].present?
      render "quizzes/new"
    end
    @quiz = Quiz.new(quiz_params)
    if @quiz.save
      @question = Question.new
      redirect_to new_quiz_question_path(@quiz.id)
    else
      render "quizzes/new"
    end
  end

  def index
    @quizzes = Quiz.all
  end


  private

  def quiz_params
    params.require(:quiz).permit(:answer, :explanation, :answer_image, :q_sentence)
  end

end
