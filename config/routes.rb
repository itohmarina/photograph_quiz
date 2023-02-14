Rails.application.routes.draw do
  root to: 'quizzes#show'
  get 'quizzes/judge' => 'quizzes#judge'
  resources :quizzes, only:[:new, :create, :index] do
    resources :questions, only:[:new, :create, :index]
  end 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
