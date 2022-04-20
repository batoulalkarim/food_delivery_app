class ItemsController < ApplicationController
    def index
        return render json: Item.where(restaurant_id:[params[:restaurant_id]]), status: 200
    end
    def show 
        item = Item.find_by(id: params[:id])
        if item
            return render json: item
        else
            return render json:{ error: "Not Found"}, status: :not_found
        end 
    end 
end
