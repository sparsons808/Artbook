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

    def update
        if current_user.id != @post.auther_id
            render json: ['you can only delete your own posts']
        end

        @post = Post.find_by(params[:id])
        
        if @post && @post.update_attributes(post_params)
            render :index
        else
            render json: ['could not update post'], status: 401
        end
    end

    def destroy
        @post = Post.find_by(params[:id])
        if @post
            @user.destroy
            render :index
        else
            render json: ['could not delete post'], status: 401
        end
    end
    private

    def post_params
        params.require(:post).permit(:body, :post_photo, :auther_id)
    end
end