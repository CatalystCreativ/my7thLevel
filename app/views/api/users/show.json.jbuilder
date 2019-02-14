json.partial! "/api/users/user", user: @user
json.seventhLevelId do
  json.extract! @seventh_level_id, :id
end
