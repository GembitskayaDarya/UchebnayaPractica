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
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '2',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '3',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '4',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '5',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '6',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '7',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '8',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '9',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '10',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '11',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '12',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '13',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '14',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '15',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '16',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '17',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '18',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg"
        },
        {
            id: '19',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
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
daxaModule.getPhotoPosts(0, 10);
daxaModule.addPhotoPost();