class User < ApplicationRecord
    has_secure_password
    # has_many :records
    # has_many :reviews, through: :records
end
