class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    debugger
    @user = User.new(user_params)

    if @user.save
      @user.seventh_levels += SeventhLevel.create({
        :title => '',
        :phrase => '',
        :core1 => '',
        :core2 => '',
        :core3 => '',
        :core4 => '',
        :core5 => '',
        :action1 => '',
        :question1 => '',
        :goal1 => '',
        :action2 => '',
        :question2 => '',
        :goal2 => '',
        :action3 => '',
        :question3 => '',
        :goal3 => '',
        :action4 => '',
        :question4 => '',
        :goal4 => '',
        :action5 => '',
        :question5 => '',
        :goal5 => '',
        :action6 => '',
        :question6 => '',
        :goal6 => '',
        :action7 => '',
        :question7 => '',
        :goal7 => '',
        :user_id => @user.id,
        :notes => ''
      })
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :organization, :email, :password)
  end
end
