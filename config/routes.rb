Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'
  
  # says that this route is going to start with a /api and that to expect a json 
  # view file not an html view file
  
  namespace :api, defaults: { format: :json } do

    resources :users, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    
    # resources :comments, only: [:index, :show, :create, :update, :destroy] do
    #   resources :likes
    # end
  end


end
