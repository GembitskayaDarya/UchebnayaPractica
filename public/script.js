let daxaModule = (function () {
    let photoPosts = [
        {
            id: '0',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User0",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '1',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User1",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '2',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User2",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '3',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User3",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '4',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User4",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '5',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User5",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '6',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User6",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '7',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User7",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '8',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User8",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '9',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User9",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '10',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User10",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '11',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User11",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '12',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User12",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '13',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User13",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '14',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User14",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '15',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User15",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '16',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User16",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '17',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User17",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '18',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User18",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        },
        {
            id: '19',
            description: 'Description',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: "User19",
            photoLink: "photo/1.jpg",
            isDeleted: 'false'
        }
    ];


    return {

        getPhotoPosts: function (skip = 0, top = 10, filterConfig = {}) {
            let result;
            if (
                arguments.length < 3 ||
                filterConfig === undefined ||
                Object.getOwnPropertyNames(filterConfig).length === 0
            ) {
                result = photoPosts.slice(skip, skip + top);
            } else {
                result = photoPosts.slice(skip, skip + top).filter(element => {
                    let flag = false;
                    if (filterConfig.hasOwnProperty("author")) {
                        flag = element.author === filterConfig.author;
                    }
                    if (filterConfig.hasOwnProperty("createdAt")) {
                        flag =
                            filterConfig.createdAt.getFullYear() ===
                            element.createdAt.getFullYear() &&
                            filterConfig.createdAt.getMonth() ===
                            element.createdAt.getMonth() &&
                            filterConfig.createdAt.getDate() === element.createdAt.getDate();
                    }
                    /* if (filterConfig.hasOwnProperty("hashTags")) {
                         flag = filterConfig.hashTags.every(tag => {
                             return element.hashTags.includes(tag);
                         });
                     }*/
                    return flag;
                });
            }
            return result;
        },
        getPhotoPost: function (id) {
            for (let i = 0; i < photoPosts.length; i++) { //.find
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
            if (daxaModule.validatePhotoPost(photoPost)) {
                photoPost.id = photoPosts.length;
                photoPosts.push(photoPost);
                return true;
            }
            return false;
        },
        editPhotoPost: function (id, photoPost) {
            let post = daxaModule.getPhotoPost(id);
            if (post) {
                photoPost.id = post.id;
                photoPost.createdAt = post.createdAt;
                photoPost.author = post.author;
                if (daxaModule.validatePhotoPost(photoPost)) {
                    post.photoLink = photoPost.photoLink;
                    post.description = photoPost.description;
                    return true;
                }


            }
            return false;
        },
        removePhotoPost: function (id) {
            if (daxaModule.getPhotoPost(id)) {
                let index;
                for (let i = 0; i < photoPosts.length; i++) {
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
let dom = (function () {
    let user = "Daxa";
    return {
        createPostHtml: function (photoPost) {
            let container = document.getElementById('posts');
            container.setAttribute('class', 'post-container');
            let post = document.createElement('article');
            post.setAttribute('class', 'post');


            post.innerHTML = `
                <img src="${photoPost.photoLink}"  class="photo"/>
                <div class="photoBut">
                    <div class="inf">
    
                        <div class="photoUserName">${photoPost.author}</div>
    
                        <div class="photoShortDesctription">${photoPost.description}</div>
    
                        <div class="photoHashtag">#tag</div>
    
    
                        <div class="photoDate">${photoPost.createdAt}</div>
                    </div>
    
                    <button class="photoLike"><img src="photo/NotPressed.png" class="phBut"></button>
                    `;
            if (user === photoPost.author) {
                post.innerHTML += `
                    <button class="photoEdit"><img src="photo/edit.png" class="phBut"></button>
                    <button class="photoDelete"><img src="photo/delete.png" class="phBut"></button>}
                                               
                </div>
                       `;
            }
            else {
                post.innerHTML += `
                            </div>
                            `;
            }
            container.appendChild(post);

        },
        showPosts: function () {
            let postsToBeShown = daxaModule.getPhotoPosts(0, 10);
            postsToBeShown.forEach((post) => this.createPostHtml(post));


        },
        addPhotoPost: function (photoPost) {
            if (daxaModule.addPhotoPost(photoPost)) {
                this.createPostHtml(photoPost);
                return true;
            }
            return false;
        },
        markRemovedPhotoPost: function (id) {

            let post = daxaModule.getPhotoPost(id);
            let container = document.getElementById('posts');
            let postToBeRemoved = document.getElementById(id);
            if (postToBeRemoved) {
                post.isDeleted = 'true';
                return true;
            }
            return false;
        },
        removePhotoPost: function (id) {
            daxaModule.removePhotoPost(id);
            let container = document.getElementById('posts');
            let postToBeRemoved = document.getElementById(id);
            if (postToBeRemoved != null) {
                container.removeChild(postToBeRemoved);
                return true;
            }
            return false;
        },
        editPhotoPost: function (id, photoPost) {
            let post;
            if (post = daxaModule.editPhotoPost(id, photoPost)) {
                let container = document
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

            if (user) {

                let userInfoHeader = document.getElementById('header');
                let addPhoto = document.createElement('button');
                addPhoto.setAttribute('id', 'addPhoto');
                let img = document.createElement('button');
                img.setAttribute('id', 'addPhotoPic');
                img.setAttribute('src', 'photo/addPhoto.png');
                addPhoto.appendChild(img);
                userInfoHeader.appendChild(addPhoto);
                let userName = document.createElement('div');
                userName.setAttribute('id', 'userName');
                userName.setAttribute('class', 'header-item');
                userInfoHeader.appendChild(userName);

            }

        }

    };
})();
/*daxaModule.getPhotoPosts(0, 10);
daxaModule.getPhotoPost('5');
daxaModule.validatePhotoPost({description: 'hjbdfshjbdfshjbfdhjbfhjbfs'});
daxaModule.addPhotoPost({id: '6',
    description: 'Description',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: "User15",
    photoLink: "photo/1.jpg"});*/
dom.showPosts();
/*dom.addPhotoPost({id: '6',
    description: 'Description',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: "User15",
    photoLink: "photo/1.jpg"});*/
//dom.removePhotoPost('8');
//dom.removePhotoPost('6');
//dom.editPhotoPost('5', {description: 'lol'});
