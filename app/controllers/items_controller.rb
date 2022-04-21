class ItemsController < ApplicationController
    # def index
    #     return render json: Item.where(restaurant_id:[params[:restaurant_id]]), status: 200
    # end

    skip_before_action :authorized, only: [:index, :show]
    
    def index 
        if params[:restaurant_id]
            restaurant = Restaurant.where(id: [:restaurant_id])
            items = restaurant.items
        else
            items = Item.all
        end
        render json: items, include: :restaurant
    end

    def show 
        item = Item.find_by(id: params[:id])
        if item
            return render json: item, include: :restaurant
        else
            return render json:{ error: "Not Found"}, status: :not_found
        end 
    end 
end
