class Api::FriendsController < ApplicationController
    def index
        @friends = Friend.all.where(:user_id => params[:id])
        render :index
    end

    private

    def friend_pramas
        params.require.(:friend).permit(:user_id, :friend_id)
    end
end