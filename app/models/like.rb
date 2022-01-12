# == Schema Information
#
# Table name: likes
#
#  id           :bigint           not null, primary key
#  liker_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  notable_type :string
#  notable_id   :bigint
#
class Like < ApplicationRecord
    validates :notable_type, :liker_id, :notable_id, presence: true
    belongs_to :notable, 
        polymorphic: :true
    
    
end
