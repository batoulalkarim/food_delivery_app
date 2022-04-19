class RestaurantsController < ApplicationController
    def index
        return render json: Restaurant.all, status: 200
    end
    
end
