Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_page#root'
  get '/home/', to: 'seventh_levels#show_most_recently_created';

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :seventh_levels, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :seventh_levels, only: [:create, :show, :destroy, :update]
  end
end
