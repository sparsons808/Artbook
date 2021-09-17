class Api::PostsController < ApplicationController

    before_action :enssure_logged_in

    def create
        @post = Post.new(post_params)

        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.all

        
    end

    private

    def post_params
        params.require(:post).permit(:body, :post_photo, :auther_id)
    end
end