class ReviewsController < ApplicationController

    skip_before_action :authorized, only: [:index, :show, :create, :increment_likes, :delete]

    def index 
        reviews = Review.all
        render json: reviews
    end

    def create
        review = Review.new(review: params[:review], username: params[:username], dateposted: params[:dateposted], rating: params[:rating], restaurant_id: params[:restaurant_id])
        review.save!
        render json: review, status: :created
    end

    def delete
        if params[:restaurant_id]
        review = Review.find_by(id: params[:restaurant_id])
        if review
            review.destroy
            head :no_content
        else
            render json: { error: "Review not found"}, status: :not_found
        end
    end
    end

    def increment_likes
        review = Restaurant.includes(:reviews).where(reviews: {restaurant_id: restaurant_id})
        review.update(likes: review.likes + 1)
        render json review
    end

    # def show 
    #     review = Review.find_by(id: params[:id])
    #     render json: review
    # end

    def show 
        if params[:restaurant_id]
            restaurant = Restaurant.find_by(id: params[:id])
            reviews = restaurant.reviews
        else
            reviews = Review.all
        end
        render json: reviews, include: :restaurant
    end
    # def show 
    #     restaurant = Restaurant.find_by(params[:restaurant_id])
    #     review = restaurant.reviews
    #     render json: review
    # end

    private 
    
    def review_params 
        params.permit(:review, :rating, :likes)
    end

end
