class Api::RequestsController < ApplicationController

    def create
        @request = Request.new(request_params)

        if @request.save
            render 'api/users/show'
        else
            render json: ["could not request friendship"], status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        @users = []
        friends = current_user.friends_requested.where(accepted: true).includes(:requestee)
        other_friends = current_user.friend_requests.where(accepted: true).includes(:requestor)
        friends += other_friends

        friends.each do |friend|
            if current_user != friend.requestee
                @users += friend.requestee
            else
                @users += friend.requestor
            end
        end

        

        render 'api/users/index'
    end

    def update
        @request = Request.find(param[:id])

        if @request.update(request_params)
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
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
        params.require(:request).permit(:user_id, :friend_id, :accepted)
    end
end