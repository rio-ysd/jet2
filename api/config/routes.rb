Jets.application.routes.draw do
  any "*catchall", to: "error#index"
end
