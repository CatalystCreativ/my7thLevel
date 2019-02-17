class Api::SessionsController < ApplicationController

  def create

    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    
    if @user
      login(@user)
      # @user.recent_seventh_level_id = @user.seventh_levels.last.id
      render 'api/users/show'
    else
      render json: ['Invalid Username and/or Password'], status: 422
    end
  end

  def destroy
    logout
    render json: {}
  end

end
