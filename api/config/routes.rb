Jets.application.routes.draw do
  scope :api do
    resources :tweets
  end
  any "*catchall", to: "error#index"
end
