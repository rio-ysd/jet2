Jets.application.routes.draw do
  resources :tweets
  any "*catchall", to: "error#index"
end
