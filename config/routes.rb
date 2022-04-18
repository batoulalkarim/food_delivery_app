Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :users, only: [:show, :create]
  # resources :restaurants
  # resources :items
  # resources :orders 

 

  post "/login", to: "sessions#create"

  
end
