class RestaurantsController < ApplicationController


    def index
        restaurants = Restaurant.all
        return render json: restaurants, include: 
             [:items => {:only => [:id, :name, :price, :restaurant_id]}], status: 200
    end
   
    
        def show 
            restaurant = Restaurant.find_by(id: params[:id])
            return render json: restaurant, include: :items
        end 
    
end
