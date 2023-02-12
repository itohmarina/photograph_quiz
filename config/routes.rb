Rails.application.routes.draw do
  root to: 'quizzes#show'
  resources :quizzes, only:[:new, :create, :index]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
