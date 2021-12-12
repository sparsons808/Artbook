# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  post_id      :integer          not null
#  body         :text             not null
#  commentor_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, :post_id, :commentor_id, presence: true

    belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post

    belongs_to :author,
    primary_key: :id,
    foreign_key: :commentor_id,
    class_name: :User

    has_many :comment_likers,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :Like

    has_many :likes, as: :notable
end
