class RecordsController < ApplicationController
    def index 
        render json: Record.all 
    end

    
    
    # def create 
    #     record=Record.create!(record_params)
    #     render json: record, status: :created
    # end 

    # private
    # def current_user
    #     User.find_by(id: session[:user_id])
    # end 

    # def record_params
    #     params.permit(:name, :artist, :image, :release_date)
    # end 
end
