Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :users, only: [:show, :create]
  resources :restaurants, only: [:show, :index]
  resources :items, only: [:show, :index]
  # resources :orders 

 

  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"

end
