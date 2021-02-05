class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        return this.innerLength === 0
            ? '...'
            : this.innerString.slice(0, this.innerLength)
            + '...';
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString());



