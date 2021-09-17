class Api::PostsController < ApplicationController
    def create
        @post = Post.create(post_params)
    end

    private

    def post_params
        
    end
end