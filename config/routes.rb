Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.rg/routing.html
  root 'quizzes#index'
  get  'quizzes/show1' => 'quizzes#show1'
  get  'quizzes/show2' => 'quizzes#show2'
  get  'quizzes/show3' => 'quizzes#show3'
  get  'quizzes/show4' => 'quizzes#show4'
  get  'quizzes/show5' => 'quizzes#show5'
  get  'quizzes/show6' => 'quizzes#show6'
  get  'quizzes/show7' => 'quizzes#show7'
  get  'quizzes/show8' => 'quizzes#show8'
end
