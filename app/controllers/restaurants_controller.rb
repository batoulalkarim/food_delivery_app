class RestaurantsController < ApplicationController
    def index
        return render json: Restaurant.all, status: 200
    end
   
        def show 
            restaurant = Restaurant.find_by(id: params[:id])
            if restaurant
                return render json: restaurant
            else
                return render json:{ error: "Not Found"}, status: :not_found
            end 
        end 
    
end
