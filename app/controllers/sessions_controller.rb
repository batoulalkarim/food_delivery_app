class SessionsController < ApplicationController

    skip_before_action :authorized, only: [:show, :create, :destroy]

    # def create
    #   user = User.find_by(username: params[:username])
    #   if user&.authenticate(params[:password])
    #   session[:user_id] = user.id
    #   render json: user, status: :created
    #   else
    #     render json: {error: "Invalid username or password"}, status: :unauthorized
    #   end 
    # end

    def create
      user = User.find_by(username: params[:username])
      session[:user_id] = user.id
      render json: user
    end
    
  def show 
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
        session[:user_id] =user.id
        render json: user, status: :created
        puts user
    else
        render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
    end
  end
  

  def destroy 
    session.delete :user_id
    head :no_content
  end

end
