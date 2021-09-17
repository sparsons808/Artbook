# == Schema Information
#
# Table name: requests
#
#  id                 :bigint           not null, primary key
#  user_requesting_id :integer
#  user_requested_id  :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Request < ApplicationRecord
    validates :user_requesting_id, uniqueness: { scope: :user_requested_id }
    
    belongs_to :requester,
    primary_key: :id,
    foreign_key: :user_requested_id,
    class_name: :User

    belongs_to :requested,
    primary_key: :id,
    foreign_key: :user_requesting_id,
    class_name: :User
end
