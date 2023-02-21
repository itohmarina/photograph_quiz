class QuizzesController < ApplicationController

  def show
    @quiz = Quiz.order("rand()").first
    @questions = @quiz.questions.includes(:choices)
  end

  def new
    @quiz = Quiz.new
    @question = Question.new
    @choice = Choice.new
  end

  def create
    @quiz = Quiz.new(quiz_params)
    if @quiz.save
      @question = Question.new
      redirect_to new_quiz_question_path(quiz_id: @quiz.id) and return
    else
      render "quizzes/new"
    end
  end

  def index
    @quizzes = Quiz.all
  end


  def judge
    @quiz = Quiz.find(params[:quiz_id])
    if @quiz.answer == params[:word]
     render "quizzes/correct.js.erb"
    end
  end

  def destroy
    @quiz = Quiz.find(params[:id])
    if @quiz.destroy
      redirect_to quizzes_path, notice: 'クイズが削除されました'
    end
  end


  private

  def quiz_params
    params.require(:quiz).permit(:answer, :explanation, :answer_image, :q_sentence)
  end

end
