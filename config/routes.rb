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

  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  
  # resources :orders 
  
  patch "/restaurants/:restaurant_id/reviews/:restaurant_id", to: "reviews#destroy"
 
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#show"
  # post "/signup", to: "users#create"
  # post "/login", to: "sessions#show"
  post "/users", to: "users#create"
  delete "items/:id", to: "items#delete"
  delete "/restaurants/:restaurant_id/reviews/:restaurant_id", to: "reviews#destroy"
  get "/me", to: "users#show"
  post "/restaurants/:restaurant_id/reviews", to: "reviews#create"
  
  get "/restaurants/:restaurant_id/reviews", to: "reviews#show"
  # get "/restaurants/:id", to: "restaurants#show"
  get '/restaurants/:restaurant_id/items/:id', to: "items#show"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
