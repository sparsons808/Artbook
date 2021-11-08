json.extract! user, :id, :name, :email, :bio, :work, :location
json.coverPhotoUrl url_for(user.cover_photo) if user.cover_photo.attached?
json.profilePhotoUrl url_for(user.profile_photo) if user.profile_photo.attached?