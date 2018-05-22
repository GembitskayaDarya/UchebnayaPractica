const postsPath = './server/data/posts.json';
const fs = require('fs');
//let photoPosts = JSON.parse(fs.readFileSync(postsPath));

let daxaModule = (function () {
    var photoPosts;
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

    }
})();