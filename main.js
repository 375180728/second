    function People({
        brothers,
        friends,
        parents,
        grandParents,
        signature,
        girlFriend
    } = {}) {
        this.brothers = new Set(brothers);

        this.friends = new Set([]);

        this.parents = new Set([]);

        this.grandParents = new Set([]);

        Object.defineProperty(this, "signature", {
            value: signature,
            configurable: true,
            enumerable: true,
            writable: false
        });

        Object.defineProperty(this, "girlFriend", {
            value: girlFriend,
            configurable: false,
            enumerable: true,
            writable: false
        });

    };

    // People.prototype.write = function() {
    //     for (let p in this)
    // };

    People.prototype.changeSignature = function(signature) {
        Object.defineProperty(this, "signature", {
            writable: true,
            value: word
        });
        Object.defineProperty(this, "signature", {
            writable: false
        });
    };

    People.prototype.setTime = function(signature) {
        setTimeout(() => {
            this.changeSignature(signature)
        }, 1000)
    };

    People.prototype.add = function(name) {
        this.add(name);
    };

    People.prototype.delete = function(name) {
        this.delete(name);
    };


    var psx = new People({
        signature: 'xxx',
        girlFriend: {
            name: 'asd',
        },
        brothers: ['asds', 'asdd', 'asd', 'das'],
        friends: ['qed', 'asasddd', 'addsd', 'das'],
        parents: ['dggg', 'asdd', 'aosd', 'das'],
        grandParents: ['adsd', 'asdd', 'asd', 'das']
    });