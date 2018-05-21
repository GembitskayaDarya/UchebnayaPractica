const service = (function(){
   return {
       getPosts: function () {
           return fetch('/posts', {}).then((res)=>res.json());
       }
   };
})();
let dom = (function () {
    let user = "Daxa";
    return {
        createPostHtml: function (photoPost) {
            let container = document.getElementById('posts');
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
            service.getPosts().then((data)=>{
                data.forEach((post) => this.createPostHtml(post));
            });
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

(function controller() {
    document.getElementById('logInBtn').addEventListener('click', function () {
        document.getElementById('loginDlg').showModal();
    });
    document.getElementById('addPhoto').addEventListener('click', function () {
        document.getElementById('addPhotoDlg').showModal();
    });
    document.getElementById('loadMore').addEventListener('click', function () {
        dom.showPosts();
    });
    document.getElementById('fitterButton').addEventListener('click', function () {
        dom.showPosts().showModal();
    });
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
