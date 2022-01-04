class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render :show
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render json: { message: 'success'}
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])

        if @comment.update(comment_params)
            render :index
        else
            render json: @comment.errors.full_messages, status: 422
        end

    end

    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment.destroy
            render json: { message: 'success' }
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:post_id, :body, :commentor_id, :id)
    end

end