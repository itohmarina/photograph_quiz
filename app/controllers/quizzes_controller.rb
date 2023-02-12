class QuizzesController < ApplicationController
  
  def show
    @quiz = Quiz.order("RAND()").limit(1)
  end
  
  def new
    @quiz = Quiz.new
  end
  
  def create
    unless params[:answer_image].attached?
      render "quizzes/new"
    end 
    @quiz = Quiz.new
    unless @quiz.save(quiz_params)
      render "quizzes/new"
    end 
  end
  
  def index
    @quizzes = Quiz.all
  end 
  
  
  private
  
  def quiz_params
    params.require(:quiz).permit(:title, :body, :answer_image)
  end 

end
