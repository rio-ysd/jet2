class ErrorController < ApplicationController
    def index
        render json: '', status: 404
    end
end
