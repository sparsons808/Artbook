class Api::RequestsController < ApplicationController

    def create
        @request = Request.new(request_params)

        if @request.save
            render :show
        else
            render json: ["could not request friendship"], status: 422
        end
    end

    def index
        @user = User.find(params[:user_id])

        @requests = @user.friends_requested
        @recieved_requests = @user.friend_requests

        @requests += current_user.friends_requested
        @recieved_requests += current_user.friend_requests

        render :index
    end

    def update
        @request = Request.find(param[:id])

        if @request.update(request_params)
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
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
        params.require(:request).permit(:user_id, :friend_id, :accepted)
    end
end