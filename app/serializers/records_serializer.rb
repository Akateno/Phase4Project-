class RecordsSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :image, :release_date
end
