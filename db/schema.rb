# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_10_192601) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "seventh_levels", force: :cascade do |t|
    t.text "phrase"
    t.text "core1"
    t.text "core2"
    t.text "core3"
    t.text "core4"
    t.text "core5"
    t.text "action1"
    t.text "question1"
    t.text "goal1"
    t.text "action2"
    t.text "question2"
    t.text "goal2"
    t.text "action3"
    t.text "question3"
    t.text "goal3"
    t.text "action4"
    t.text "question4"
    t.text "goal4"
    t.text "action5"
    t.text "question5"
    t.text "goal5"
    t.text "action6"
    t.text "question6"
    t.text "goal6"
    t.text "action7"
    t.text "question7"
    t.text "goal7"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "notes"
    t.string "title"
    t.index ["user_id"], name: "index_seventh_levels_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "organization"
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
