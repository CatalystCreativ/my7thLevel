class Api::SeventhLevelsController < ApplicationController
  def index
    @seventh_levels = current_user.seventh_levels
    render :index
  end

  def show
    @seventh_level = SeventhLevel.find(params[:id])
    render :show
  end

  def show_most_recently_created
    @seventh_level = current_user.seventh_levels.last
    render :show
  end

  def create
    @seventh_level = current_user.seventh_levels.new(seventh_level_params)
    if @seventh_level.save
      render :show
    else
      render json: @seventh_level.errors.full_messages, status: 422
    end
  end

  def update
    @seventh_level = SeventhLevel.find(params[:id])
    if @seventh_level.update(seventh_level_params)
      # if @seventh_level.update_attribute([attr]: seventh_level_params[attr])
      # update_attributes/update_attribute
      # commented this out for now because it was giving errors - Jess 
      render json: @seventh_level
    else
      render json: @seventh_level.errors.full_messages, status: 422
    end
  end

  private

  def seventh_level_params
    # Possibly add attr param for specific attribute updating
    params.require(:seventh_level).permit(
    :phrase,
    :core1,
    :core2,
    :core3,
    :core4,
    :core5,
    :action1,
    :question1,
    :goal1,
    :action2,
    :question2,
    :goal2,
    :action3,
    :question3,
    :goal3,
    :action4,
    :question4,
    :goal4,
    :action5,
    :question5,
    :goal5,
    :action6,
    :question6,
    :goal6,
    :action7,
    :question7,
    :goal7,
    :title)
  end

end
