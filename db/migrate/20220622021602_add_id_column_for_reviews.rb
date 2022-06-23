class AddIdColumnForReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :record_id, :integer  
  end
end
