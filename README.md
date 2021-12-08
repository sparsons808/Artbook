# artbook
![splash page](https://github.com/sparsons808/Artbook/blob/main/images/Screen%20Shot%202021-11-12%20at%209.53.10%20AM.png)

## Live Site

[artbook](https://artb00k.herokuapp.com/#/)

## Introduction

artbook is a social networking application for artist, galleries and collectors to connect, trade, and discuss art.

## Technologies

* Javascript
* Ruby on Rails
* JBuilder
* HTML/CSS
* React
* Redux
* Amazon Web Services(AWS S3
* PostgresSQL
* Heroku

## Feature Highlights

### Posts

Users can share photos and posts to their walls. User can only edit their own posts.
Users can delete posts that they have authored.

![post](https://github.com/sparsons808/Artbook/blob/main/images/Screen%20Shot%202021-11-12%20at%209.55.05%20AM.png)

### Profile
Users can create their own profile as well as add a profile photo and cover photo, usersing can post on their own wall and edit their information.
![profile](https://github.com/sparsons808/Artbook/blob/main/images/Screen%20Shot%202021-11-12%20at%209.55.50%20AM.png)

## Code Snippets
### Friend Request
This snippet handles the main functionality of uploading a photo to your own profile.

```javascript
    handleFile(type) {
        let url;

        if(type === 'profilePhoto') {
            url = 'profilePhotoUrl'
        } else {
            url = 'coverPhotoUrl'
        }
        return (e) => {
            const file = e.currentTarget.files[0]
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                this.setState({ [type]:  file, [url]: fileReader.result })

            }
            if(file) {
                fileReader.readAsDataURL(file);
            }

        }
        
        
    }


    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('user[id]', this.props.user.id)

        if(this.state.profilePhoto) {
            formData.append('user[profile_photo]', this.state.profilePhoto)
        }

        if(this.state.coverPhoto) {
            formData.append('user[cover_photo]', this.state.coverPhoto)
        }

        this.props.updateUser(formData)
    }


    render() {
       
        if(!this.props.user) return null;

        const { user } = this.props
        const coverPhoto = () => (
            <div className="cover-photo-container">
                {user.coverPhotoUrl ? (
                    <img src={user.coverPhotoUrl} alt="" />
                ) : (
                    <div className="cover-replacement"></div>
                )
                }
            </div>
        );
        const profilePhoto = () => (
            <div className="profile-photo-container"> 
                {user.profilePhotoUrl ? (
                    <img src={user.profilePhotoUrl}/>
                ): (
                    <p>{user.name}</p>
                )
                } 
            </div>
        );

        
        return (
            <div className="edit-nav-container">
        
                {coverPhoto()}
                
                <div className="cover-photo-edit">
                    <label classname="camera-icon-label" htmlFor="cover">
                        <img 
                            className="camera-icon"
                            src={camera} 
                            alt="Credit: www.flaticon.com/authors/kiranshastry" 
                        />
                    </label>
                    <input
                        className="file"
                        type="file"
                        id="cover"
                        onChange={this.handleFile('coverPhoto')}
                    />

                    <button onClick={this.handleSubmit}>Save</button>
                </div>  
               
                {profilePhoto()}
                <div className="profile-photo-edit">
                    <label classname="camera-icon-label" htmlFor="profile">
                        <img 
                            className="camera-icon"
                            src={camera} 
                            alt="Credit: www.flaticon.com/authors/kiranshastry" 
                        />
                    </label>
                    <input
                        className="file"
                        id="profile"
                        type="file"
                        onChange={this.handleFile('profilePhoto')}
                    />
                    <button onClick={this.handleSubmit}>Save</button>
                </div>
```

## Features to Add
* CRUD comments
* Friends
* Friend Requests
* Messaging

## Future Direction
* Adding a market place so users can sell their work
