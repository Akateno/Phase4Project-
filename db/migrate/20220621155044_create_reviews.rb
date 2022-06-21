class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.datetime :date
      t.string :comment
      t.integer :score

      t.timestamps
    end
  end
end
