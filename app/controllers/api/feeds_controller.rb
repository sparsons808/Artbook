class Api::FeedsController < ApplicationController
    before_action :enssure_logged_in

    def show
        
        @posts = []
        friends = current_user.friends_requested.where(accepted: true).includes(requestee: [:posts])
        other_friends = current_user.friend_requests.where(accepted: true).includes(requestor: [:posts])

        @comments = []

        friends.each do |friend|
            @posts += friend.requestee.posts
            friend.requestee.posts.each do |post|
                debugger
                @comments += post.comments
            end
        end

        other_friends.each do |friend|
            @posts += friend.requestor.posts
            friend.requestor.posts.each do |post|
                @comments += post.comments
            end
        end
        
        current_users_posts = current_user.posts.order(created_at: :desc)

        @posts += current_users_posts
        
        render :show
    end

end