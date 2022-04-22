class RestaurantsController < ApplicationController

    skip_before_action :authorized, only: [:index, :show]

    def index
        restaurants = Restaurant.all
        return render json: restaurants, include: [:reviews, :items]
            #  [:items => {:only => [:id, :name, :price, :restaurant_id]}, :reviews => {:only => [:id, :review, :restaurant_id]}], status: 200
    end
   
   
    
    def show 
        restaurant = Restaurant.find_by(id: params[:id])
        return render json: restaurant, include: [:reviews, :items]
        # [:reviews => {:only => [:id, :review, :restaurant_id]}, :items => {:only => [:id, :name, :price, :restaurant_id]}], status: 200
        # [:reviews => {:only => [:id, :review, :restaurant_id]}]
    end 
    
end
