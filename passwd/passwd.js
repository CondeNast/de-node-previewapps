var passwd_db = [
        {
            key: "AD-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.FtT4.v4X1KE8UTkSXeVszdVREPnG.Xe",
            magazine: "archdigest"
        },
        {
            key: "AL-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.GaQULf078Plv0WHrA0l3hWR/1B9/w8y",
            magazine: "allure"
        },
        {
            key: "BA-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.lJbN9cTWHaTMvAj8RTr0s.EKxjj6FZC",
            magazine: "bonappetit"
        },
        {
            key: "de.condenast@gmail.com",
            hash: "$2a$10$lW8U1ChNcJyYsmtDsL.ao.TXSlljFDyMbXlhYDrEw8XzAdSCUE80y",
            magazine: "cngeneric"
        },
        {
            key: "GQ-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.FD4RuhWPSCdJRYi.tnQCK4frGt0dISi",
            magazine: "gq"
        },
        {
            key: "caitlin_martin@newyorker.com",
            hash: "$2a$10$LjQz9OusVFG65/SgRdEg/.ljSLnYG9S8F97DKLLMUwAMYlaF/m5dO",
            magazine: "newyorker"
        },
        {
            key: "TR-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5./UMeei/wQhua6h7QZ7YTqXo8dJ7ORqe",
            magazine: "traveler"
        },
        {
            key: "VF-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.BINkj9cNJlajZQawLaD/MsiWQb.HiM6",
            magazine: "vanityfair"
        },
        {
            key: "VO-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.ly5cGENkPVZ/lG3e7afrmDvZ.uHEsl2",
            magazine: "vogue"
        },
        {
            key: "WI-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.g3AzNk1tq.uo7sA1.2yTAT5G8GooXvy",
            magazine: "wired"
        }
]

exports.match = function(key, password) {
    var bcrypt = require('bcryptjs');
    for(const record of passwd_db) {
        if(key.toLowerCase() === record.key.toLowerCase()) {
            var isSame = bcrypt.compareSync(password, record.hash);
            return record.magazine;
        }
    }
    return '';
}

exports.test = function() {
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = '';
    for(const record of passwd_db) {
       hash = bcrypt.hashSync(record.hash, salt);
    }

    var ismatch = bcrypt.compareSync("testest", hash); // true
    var nomatch = bcrypt.compareSync("not_bacon", hash); // false
    var isSame = this.match("someone@somewhere","XXXX");
}