# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  age             :date             not null
#  bio             :text
#  location        :string
#  work            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :name, :age, presence: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    #makes the connection between posts and their authors
    has_many :written_posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post

    # makes the connection between a user and their friends
    has_many :friends,
    primary_key: :id,
    foreign_key: :friend_id,
    class_name: :Friend

    # makes the connection between the user and their friends
    has_many :written_comments,
    primary_key: :id,
    foreign_key: :commentor_id,
    class_name: :Comment

    # the people the user requested as friends
    has_many :friends_requested,
    primary_key: :id,
    foreign_key: :user_requested_id,
    class_name: :Request

    # the people who ask to be the users friend
    has_many :friend_requests,
    primary_key: :id,
    foreign_key: :user_requesting_id,
    class_name: :Request

    has_many :likes,
    primary_key: :id,
    foreign_key: :liked_id,
    class_name: :Like

    has_many :posts_on_profile,
    primary_key: :id,
    foreign_key: :user_id_profile,
    class_name: :Post


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end
