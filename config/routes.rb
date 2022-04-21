Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  # resources :users, only: [:show, :create]
  # resources :restaurants
  resources :items, only: [:show, :index]
  resources :restaurants, only: [:show, :index] do
    resources :items, only: [:show, :index]
  end
  
  # resources :orders 



  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
