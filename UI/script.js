var daxaModule = (function () {
    var photoPosts = [
        {
            id: '0',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '1',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User1",
            photoLink: "photo/1.jpg"
        },
        {
            id: '2',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User2",
            photoLink: "photo/1.jpg"
        },
        {
            id: '3',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User3",
            photoLink: "photo/1.jpg"
        },
        {
            id: '4',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User4",
            photoLink: "photo/1.jpg"
        },
        {
            id: '5',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User5",
            photoLink: "photo/1.jpg"
        },
        {
            id: '6',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User6",
            photoLink: "photo/1.jpg"
        },
        {
            id: '7',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User7",
            photoLink: "photo/1.jpg"
        },
        {
            id: '8',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User8",
            photoLink: "photo/1.jpg"
        },
        {
            id: '9',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User9",
            photoLink: "photo/1.jpg"
        },
        {
            id: '10',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User10",
            photoLink: "photo/1.jpg"
        },
        {
            id: '11',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User11",
            photoLink: "photo/1.jpg"
        },
        {
            id: '12',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User12",
            photoLink: "photo/1.jpg"
        },
        {
            id: '13',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User13",
            photoLink: "photo/1.jpg"
        },
        {
            id: '14',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User14",
            photoLink: "photo/1.jpg"
        },
        {
            id: '15',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User15",
            photoLink: "photo/1.jpg"
        },
        {
            id: '16',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User16",
            photoLink: "photo/1.jpg"
        },
        {
            id: '17',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User17",
            photoLink: "photo/1.jpg"
        },
        {
            id: '18',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User18",
            photoLink: "photo/1.jpg"
        },
        {
            id: '19',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User19",
            photoLink: "photo/1.jpg"
        }
    ];


    return {
        getPhotoPosts: function (skip, top, filterConfig) {
            var foundPosts = [];
            var count = 0;
            if (filterConfig || filterConfig.createdAt === undefined && filterConfig.author === undefined) {
                for (var i = skip; i < photoPosts.length && count < top; i++) {
                    foundPosts.push(photoPosts[i]);
                    count++;
                }
            } else if (filterConfig.createdAt === undefined) {
                for (var j = skip; j < photoPosts.length && count < top; j++) {
                    if (filterConfig.author === photoPosts[j].author) {
                        foundPosts.push(photoPosts[j]);
                        count++;
                    }
                }
            } else if (filterConfig.author === undefined) {
                for (var k = skip; k < photoPosts.length && count < top; k++)
                    if (filterConfig.createdAt.getUTCDate() === photoPosts[k].createdAt.getUTCDate() && filterConfig.createdAt.getUTCMonth() === photoPosts[k].createdAt.getUTCMonth() && filterConfig.createdAt.getUTCFullYear() === photoPosts[k].createdAt.getUTCFullYear()) {
                        foundPosts.push(photoPosts[k]);
                        count++;
                    }
            } else {
                for (var g = skip; g < photoPosts.length && count < top; g++)
                    if (filterConfig.author === photoPosts[g].author && filterConfig.createdAt.getUTCDate() === photoPosts[g].createdAt.getUTCDate() && filterConfig.createdAt.getUTCMonth() === photoPosts[g].createdAt.getUTCMonth() && filterConfig.createdAt.getUTCFullYear() === photoPosts[g].createdAt.getUTCFullYear()) {
                        foundPosts.push(photoPosts[g]);
                        count++;
                    }
            }

            /*let tempPosts  = [].join(photoPosts);
            if( author){
                tempPosts = tempPosts.filter((post) => post.author === author);
            }
            if(crea)

                tempPosts.sort();
                tempPosts.slise ()
                */

            return foundPosts;
        },
        getPhotoPost: function (id) {
            for (var i = 0; i < photoPosts.length; i++) { //.find
                if (photoPosts[i].id === id)
                    return photoPosts[i];
            }
            return null;
        },
        validatePhotoPost: function (photoPost) {
            if (photoPost === undefined) {
                return false;
            } else if (photoPost.id === undefined || (typeof(photoPost.id) !== "string")) {
                return false;
            } else if (photoPost.descriprion === undefined || (typeof(photoPost.descriprion) !== "string" || photoPost.descriprion.length === 0 ||
                    photoPost.descriprion.length >= 200)) {
                return false;
            } else if (photoPost.createdAt === undefined || !(photoPost.createdAt instanceof Date)) {
                return false;
            } else if (photoPost.author === undefined || (typeof(photoPost.author) !== "string" || photoPost.author.length === 0)) {
                return false;
            } else return !(photoPost.photoLink === undefined || ((typeof(photoPost.photoLink) !== "string") || photoPost.photoLink.length === 0));
        },
        addPhotoPost: function (photoPost) {
            if (validatePhotoPost(photoPost)) {
                photoPost.id = photoPosts.length;
                photoPosts.push(photoPost);
                return true;
            }
            return false;
        },
        editPhotoPost: function (id, photoPost) {
            var post = getPhotoPost(id);
            if (post != null) {
                photoPost.id = post.id;
                photoPost.createdAt = post.createdAt;
                photoPost.author = post.author;
                if (validatePhotoPost(photoPost)) {
                    post.photoLink = photoPost.photoLink;
                    post.description = photoPost.description;
                    return true;
                }


            }
            return false;
        },
        removePhotoPost: function (id) {
            if (getPhotoPost(id)) {
                var index;
                for (var i = 0; i < photoPosts.length ; i++) {
                    if (photoPosts[i].id === id)
                        index = i;
                }
                if (index === undefined) {
                    return false;
                } else {
                    photoPosts.splice(index, 1);
                    return true;
                }
            }

        }
    };


})();
var dom = (function(){
    var user = "Daxa";
    return {
        createPostHtml: function (photoPost){
        var container = document.getElementById('posts');
        container.setAttribute('class', 'post-container');
        var post = document.createElement('article');
        post.setAttribute('class', 'post');
        var photo = document.createElement('img');
        photo.setAttribute('class', 'photo');
        photo.setAttribute('src', 'photo/1.jpg');
        post.appendChild(photo);
        var infoAll = document.createElement('div');
        infoAll.setAttribute('class', 'photoBut');
        var info = document.createElement('div');
        info.setAttribute('class', 'inf');
        var photoUserName = document.createElement('div');
        photoUserName.setAttribute('class', 'photoUserName');
        info.appendChild(photoUserName);
        var photoShortDesctription = document.createElement('div');
        photoShortDesctription.setAttribute('class', 'photoShortDesctription');
        info.appendChild(photoShortDesctription);
        var photoHashtag = document.createElement('div');
        photoHashtag.setAttribute('class', 'photoHashtag');
        info.appendChild(photoHashtag);
        var photoDate = document.createElement('div');
        photoDate.setAttribute('class', 'photoDate');
        info.appendChild(photoDate);
        infoAll.appendChild(info);
        var photoLike = document.createElement('button');
        photoLike.setAttribute('class', 'photoLike');
        var phLike = document.createElement('img');
        phLike.setAttribute('class', 'phBut');
        phLike.setAttribute('src', 'photo/NotPressed.png');
        photoLike.appendChild(phLike);
        infoAll.appendChild(photoLike);
            if (user === photoPost.author) {
                var photoEdit = document.createElement('button');
                photoEdit.setAttribute('class', 'photoEdit');
                var phEdit = document.createElement('img');
                phEdit.setAttribute('class', 'phBut');
                phEdit.setAttribute('src', 'photo/edit.png');
                photoEdit.appendChild(phEdit);
                infoAll.appendChild(photoEdit);
            }
            if (user === photoPost.author) {
                var photoDelete = document.createElement('button');
                photoDelete.setAttribute('class', 'photoDelete');
                var phDel = document.createElement('img');
                phDel.setAttribute('class', 'phBut');
                phDel.setAttribute('src', 'photo/delete.png');
                photoDelete.appendChild(phDel);
                infoAll.appendChild(photoDelete);
                post.appendChild(infoAll);
                container.appendChild(post);
            }


    },
        showPosts: function () {
            var postsToBeShown = daxaModule.getPhotoPosts(0, 10);
            for(var i = 0; i < postsToBeShown.length; i++){
                this.createPostHtml(postsToBeShown[i]);
            }

        },
        addPhotoPost: function (photoPost) {
            if (daxaModule.addPhotoPost(photoPost)) {
                this.createPostHtml(photoPost);
                return true;
            }
            return false;
        },
        removePhotoPost: function (id) {
            daxaModule.removePhotoPost(id);
            var container = document.getElementById('posts');
             var postToBeRemoved = document.getElementById(id);
            if (postToBeRemoved != null) {
                container.removeChild(postToBeRemoved);
                return true;
            }
            return false;
        },
        editPhotoPost: function (id, photoPost) {
            if (daxaModule.editPhotoPost(id, photoPost)) {
                var container = document
                    .getElementById('posts')
                    .replaceChild(
                        this.createPostHtml(daxaModule.getPhotoPost(id)),
                        document.getElementById(id)
                    );
                return true;
            }
            return false;
        },
        showUserElements: function () {

            if (user !== undefined) {

                var userInfoHeader = document.getElementById('header');
                var addPhoto = document.createElement('button');
                addPhoto.setAttribute('id', 'addPhoto');
                var img = document.createElement('button');
                img.setAttribute('id', 'addPhotoPic');
                img.setAttribute('src', 'photo/addPhoto.png');
                addPhoto.appendChild(img);
                userInfoHeader.appendChild(addPhoto);
                var userName = document.createElement('div');
                userName.setAttribute('id', 'userName');
                userName.setAttribute('class', 'header-item');
                userInfoHeader.appendChild(userName);

            }

        }

    };
})();
daxaModule.getPhotoPosts(0, 10);
daxaModule.getPhotoPost('5');
daxaModule.validatePhotoPost({description: 'hjbdfshjbdfshjbfdhjbfhjbfs'});
daxaModule.addPhotoPost({id: '6',
    description: 'Description',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: "User15",
    photoLink: "photo/1.jpg"});
dom.showPosts();
dom.addPhotoPost({id: '6',
    description: 'Description',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: "User15",
    photoLink: "photo/1.jpg"});
dom.removePhotoPost('8');
dom.editPhotoPost('5', {description: 'lol'});
