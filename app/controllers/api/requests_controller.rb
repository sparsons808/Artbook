class Api::RequestsController < ApplicationController

    def create
        @request = Request.new(request_params)

        if @request.save
            render :show
        else
            render json: ["could not request friendship"], status: 422
        end
    end

    def destroy
        @request = Request.find_by(id: params[:id])

        if @request.destroy
            render :show
        else
            render json: @request.errors.full_messages, status: 422
        end
    end

    private

    def request_params
        params.require(:request).permit(:user_requesting_id, :user_requested_id)
    end
end