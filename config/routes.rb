Rails.application.routes.draw do
  # API routes should be in /api/v1
  namespace :api do
    namespace :v1 do
      resources :recipes
    end
  end
end
