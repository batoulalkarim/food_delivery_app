class RestaurantsController < ApplicationController


    def index
        if params[:restaurant_id]
            restaurant = Item.find_by(params[:restaurant_id])
        else 
            restaurant = Restaurant.all
        end
        render json: restaurant, include: 
        [:items => {:only => [:id, :name, :price, :restaurant_id]}]
        # restaurants = Restaurant.all
        # return render json: restaurants, include: 
        #      [:items => {:only => [:id, :name, :price, :restaurant_id]}], status: 200
    end
   
    def items_index
        restaurant = Restaurant.find(id: params[:restaurant_id])
        items = restaurant.items
        # items = Item.find(id: params[:restaurant_id])
        render json: items, include: :items
    end

    def item
        item = Item.find(params[:id])
        render json: item, include: :restaurant
    end
    
    def show 
        restaurant = Restaurant.find_by(id: params[:id])
        return render json: restaurant, include: :items
    end 
    
end
