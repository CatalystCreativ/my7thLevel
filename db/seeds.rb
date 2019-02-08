# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

SeventhLevel.destroy_all

# Users
user1 = User.create!(first_name:'Demo',last_name:'User',email:'demo_user@notMail.com',password:'123456', organization:'TheBestOrganization')

seventh_level1 = SeventhLevel.create!(
  phrase: 'phrase1',
  core1: 'core1',
  core2: 'core2',
  core3: 'core3',
  core4: 'core4',
  core5: 'core5',
  action1: 'action1',
  question1: 'question1',
  goal1: 'goal1',
  action2: 'action2',
  question2: 'question2',
  goal2: 'goal2',
  action3: 'action3',
  question3: 'question3',
  goal3: 'goal3',
  action4: 'action4',
  question4: 'question4',
  goal4: 'goal4',
  action5: 'action5',
  question5: 'question5',
  goal5: 'goal5',
  action6: 'action6',
  question6: 'question6',
  goal6: 'goal6',
  action7: 'action7',
  question7: 'question7',
  goal7: 'goal7',
  user_id: user1.id,
  notes: 'notes')
