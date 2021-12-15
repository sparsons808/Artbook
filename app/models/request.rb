# == Schema Information
#
# Table name: requests
#
#  id                 :bigint           not null, primary key
#  user_requesting_id :integer
#  user_requested_id  :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  accepted           :boolean          default(FALSE)
#
class Request < ApplicationRecord
    validates :user_id, :friend_id, presence: true
    
    belongs_to :requestor,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :requestee,
    primary_key: :id,
    foreign_key: :friend_id,
    class_name: :User
end
