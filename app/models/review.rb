class Review < ApplicationRecord
    belongs_to :record
    # has_many :users, through: :records 
end
