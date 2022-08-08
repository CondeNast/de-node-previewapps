const bcrypt = require("bcryptjs");
var passwd_db = [
        {
            key: "ad-FolioReview@condenast.com",
            hash: "$2a$10$9/mi8l48Qqo8vBmGOirxH.LxzXBcp4IOKjK5kGHp1Ne9HpJImckau"
        },
        {
            key: "al-FolioReview@condenast.com",
            hash: "$2a$10$jtVqipGMIBLXmFipLvmELu83PCkwZBmP9OjexOMdc4B70adluB9XW"
        },
        {
            key: "ba-FolioReview@condenast.com",
            hash: "$2a$10$BSib1EhEjeQ686ZpLzmh4O6jvRn.TcI2Oi7f7y/j34HZHbs22MXaK"
        },
        {
            key: "GQ-FolioReview@condenast.com",
            hash: "$2a$10$fkMqyg6Bdb5vRAtPgCy4zOKOYUqrQjdtuiadwg26YZJyYNB7I0k5S"
        },
        {
            key: "tr-FolioReview@condenast.com",
            hash: "$2a$10$HEgW3CrZgHhrfndSN39pN.E2aHAK1Sf8mEZBHubMGaBcS.1YI2R82"
        },
        {
            key: "VF-FolioReview@condenast.com",
            hash: "$2a$10$1ASrd0FU/rB6HB3figwZVutMZCOCPyusjBu2QvImu4tkS3EFbu8ce"
        },
        {
            key: "VO-FolioReview@condenast.com",
            hash: "$2a$10$X95K90lx9q4VUJJMfZt/ke7NRSQhuqXMNPtZZ66yFrJQ6tC4jMVJa"
        },
        {
            key: "WI-FolioReview@condenast.com",
            hash: "$2a$10$pQk6x2JmMFhcnl3.TXQeieHpJy/LT.3CXmwbPKejosuRNr4EG4CL6"
        }
]

exports.match = function(key, password) {
    var bcrypt = require('bcryptjs');
    for(const record of passwd_db) {
        if(key.toLowerCase() === record.key.toLowerCase()) {
            var isSame = bcrypt.compareSync(password, record.hash);
            return isSame;
        }
    }
}

exports.test = function() {
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("testest", salt);

    var ismatch = bcrypt.compareSync("testest", hash); // true
    var nomatch = bcrypt.compareSync("not_bacon", hash); // false
    var isSame = this.match("AD-FolioReview@condenast.com","xxx");
}