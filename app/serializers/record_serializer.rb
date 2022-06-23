class RecordSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :image, :release_date

  has_many :reviews
end
