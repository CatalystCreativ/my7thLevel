Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_page#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :seventh_levels, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
  end
end
