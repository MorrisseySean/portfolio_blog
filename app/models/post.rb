class Post < ActiveRecord::Base
#This validates presence of title, and makes sure that the length is not more than 30 words
  validates :title, presence: true, length: {maximum: 30}
  #This validates presence of body
  validates :body, presence: true
end
