Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  # resources :users, only: [:show, :create]
  # resources :restaurants
  resources :items, only: [:show, :index] do 
    resources :restaurants, only: [:show, :index]
  end
  resources :restaurants, only: [:show, :index] do
    resources :items, only: [:show, :index]
  end

  resources :restaurants, only: [:show, :index] do
    resources :reviews, only: [:show, :index]
  end
  
  # resources :orders 


  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#show"
  post "/users", to: "users#create"
  get "/auth", to: "users#show"
  
  get "/restaurants/:id", to: "restaurants#show"
  # get '/restaurants/:restaurant_id/items/:id', to: "items#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
