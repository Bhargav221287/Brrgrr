class DataEntity {
    constructor(id, createdAt) {
        if (this.constructor === DataEntity) {
            throw new Error("Abstract Class 'DataEntity' cannot be instantiated directly.");
        }
        this.id = id;
        this.createdAt = createdAt;
    }
}

class User extends DataEntity {
    constructor(id, username, password, role, createdAt) {
        super(id, createdAt);
        this.username = username;
        this.password = password;
        this.role = role;
    }
}

class Post extends DataEntity {
    constructor(id, title, content, authorId, createdAt, authorName = null) {
        super(id, createdAt);
        this.title = title;
        this.content = content;
        this.authorId = authorId;
        this.authorName = authorName;
    }
}

module.exports = { User, Post };