class Api::FriendsController < ApplicationController
    def index
        @friends = Friend.all.where(:user_id => params[:id])
        render :index
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