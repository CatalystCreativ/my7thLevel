# == Schema Information
#
# Table name: seventh_levels
#
#  id         :bigint(8)        not null, primary key
#  phrase     :text
#  core1      :text
#  core2      :text
#  core3      :text
#  core4      :text
#  core5      :text
#  action1    :text
#  question1  :text
#  goal1      :text
#  action2    :text
#  question2  :text
#  goal2      :text
#  action3    :text
#  question3  :text
#  goal3      :text
#  action4    :text
#  question4  :text
#  goal4      :text
#  action5    :text
#  question5  :text
#  goal5      :text
#  action6    :text
#  question6  :text
#  goal6      :text
#  action7    :text
#  question7  :text
#  goal7      :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  notes      :text
#

class SeventhLevel < ApplicationRecord
  
  belongs_to :user

end
