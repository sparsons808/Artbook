class ApplicationController < ActionController::Base

    helper_method :current_user, :enssure_logged_in, :enssure_logged_out, :logged_in?

    def login!(user)
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout!
        current_user.reset_session_token!

        session[:session_token] = nil
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def enssure_logged_out
        redircted_to "/show/#{@user.id}" if logged_in?
    end

    def enssure_logged_in
        redirect_to '/' unless logged_in?
    end
end
