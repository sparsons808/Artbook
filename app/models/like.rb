# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  liked_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    belongs_to :liker,
    primary_key: :id,
    foreign_key: :liked_id,
    class_name: :User

    belongs_to :liked_post,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :Post

    belongs_to :liked_comment,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :Comment
end
