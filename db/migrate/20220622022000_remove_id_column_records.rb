class RemoveIdColumnRecords < ActiveRecord::Migration[6.1]
  def change
    remove_column :records, :review_id
  end
end
