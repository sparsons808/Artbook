class Api::PostsController < ApplicationController

    before_action :enssure_logged_in

    def create
        @post = Post.new(post_params)
        # 
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end


    def update

        @post = Post.find(params[:id]) 
        # have current_user update post same with create
        
        if @post && @post.update(post_params)
            render :show
        else
            render json: ['could not update post'], status: 401
        end
    end

    def destroy
        @post = Post.find_by(params[:id])
        if @post && current_user.id == @post.auther_id
            @user.destroy
            render :index
        else
            render json: ['could not delete post'], status: 401
        end
    end
    private

    def post_params
        params.require(:post).permit(:body, :photo, :auther_id, :profile)
    end
end