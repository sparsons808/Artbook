# == Schema Information
#
# Table name: posts
#
#  id              :bigint           not null, primary key
#  auther_id       :integer          not null
#  body            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  user_id_profile :integer
#
class Post < ApplicationRecord
    validates :body, :author_id, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :auther_id,
    class_name: :User

    has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment

    has_many :likers,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :Like
    
end
