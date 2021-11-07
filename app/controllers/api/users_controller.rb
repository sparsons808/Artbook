class Api::UsersController < ApplicationController

    def create
        # debugger
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update
        @user = selected_user
        if @user && @user.update(user_params)
            render :show
        elsif !@user
            render json: ['could not update user'], status: 422
            # i think that if there is no user they need to be redircted to 
            # sign up no quite sure how to do that here but i think,
            # i can use react router for that so that someone not logged in
            # isnt able to even get to the update from.
        end
    end

    def show
        @user = selected_user

        render :show
        # try render json: @user or user
    
    end

    def index
        @users = User.all
        render :index
    end

    def destroy
        @user = selected_user
        if @user
            @user.destroy
            render :show
        else
            # again here i think that my routers can take care of this else statement
            # before the frontend calls the backend
            render json: ['User could not be found'], status: 401
        end
    end

    private

    def selected_user
        User.find_by(id: params[:id])
    end

    def user_params
        params.require(:user).permit(:id, :name, :email, :password, :bio, :location, :work)
    end
end