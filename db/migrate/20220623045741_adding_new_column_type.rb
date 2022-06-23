class AddingNewColumnType < ActiveRecord::Migration[6.1]
  def change
    change_column :reviews, :date, :date 
  end
end
