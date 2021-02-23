class Story {
    constructor(title, creator) {
        this._title = title;
        this._creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        let liker = this._likes[0] + '';

        if (this._likes.length === 0) {
            return `${this._title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${liker}` + ` likes this story!`
        } else {
            return `${liker} and ${this._likes.length - 1} others like this story!`
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (this._creator === username) {
            throw new Error("You can't like your own story!")
        }
        this._likes.push(username);
        return `${username} liked ${this._title}!`
    }

    dislike(username) {
        if (!this.likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        this._likes = this._likes.filter(e => e !== username)
        //  this._likes.remove().indexOf(username);
        return `${username} disliked ${this._title}`
    }

    comment(username, content, id) {
        if (Number.isInteger(id) || !this._comments.some(item => item.id === id)) {
            this._comments.push({
                Id: id,
                Username: username,
                Content: content,
                Replies: [],
            });
            return `${username} commented on ${this._title}`;
        }

        this._comments.Replies.push({id, username, content});
        // const founded = this._comments.find(c => c.Replies);
        // this._comments.find(c => c.Replies).push()
        return "You replied successfully";

    }

    toString(sortingType) {
        let firstPart = `Title: ${this._title}\n` +
            `Creator: ${this._creator}\n` +
            `Likes: ${this._likes.length}\n` +
            `Comments:\n`
        let secondPart = '';
        if (sortingType === 'asc') {
            secondPart += this._comments.sort((a, b) => a - b) + '\n';
        }
        if (sortingType === 'desc') {
            secondPart += this._comments.sort((a, b) => b - a) + '\n';
        }
        if (sortingType === 'username') {
            secondPart += this._comments.sort((a, b) => a.localeCompare(b)) + '\n';
        }


        let concated = firstPart + secondPart;
        return concated.trimEnd();

    }

}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));