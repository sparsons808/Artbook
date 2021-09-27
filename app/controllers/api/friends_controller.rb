class Api::FriendsController < ApplicationController
    def index
        @friends = Friend.all.where(:user_id => params[:id])
        render :index
    end

    def create 
        @friend = Friend.new(user_id: current_user.id, friend_id: params[:user_requesting_id])
        @become_friend = Friend.new(user_id: params[:user_requesting_id], friend_id: current_user.id)
       
        if @friend.save && @become_friend.save
            @request.destroy!
            render :show
        else
            render json: ['Could not add friend'], status: 422
        end
    end

    def destroy
        @friend = Friend.find_by(id: params[:id])

        if @friend && @friend.destroy
            render json: {}
        else
            render json: @friend.errors.full_messages, status: 401
        end
    end

    private

    def friend_pramas
        params.require.(:friend).permit(:user_id, :friend_id)
    end
end