class RestaurantsController < ApplicationController

    skip_before_action :authorized, only: [:index, :show]

    def index
    #     if params[:restaurant_id]
    #         restaurant = Item.find_by(params[:restaurant_id])
    #     else 
    #         restaurant = Restaurant.all
    #     end
    #     render json: restaurant, include: 
    #     [:items => {:only => [:id, :name, :price, :restaurant_id]}]
        restaurants = Restaurant.all
        return render json: restaurants, include: 
             [:items => {:only => [:id, :name, :price, :restaurant_id]}], status: 200 
            #  :reviews => {:only => [:review]}], status: 200
    end
   
    # def items_index
    #     restaurant = Restaurant.find(params[:id])
    #     items = restaurant.items
    #     # items = Item.find(id: params[:restaurant_id])
    #     render json: items, include: :restaurant
    # end

    # def item
    #     item = Item.find(params[:id])
    #     render json: item, include: :restaurant
    # end
    
    def show 
        restaurant = Restaurant.find_by(id: params[:id])
        return render json: restaurant
    end 
    
end
