var passwd_db = [
        {
            key: "AD-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.FtT4.v4X1KE8UTkSXeVszdVREPnG.Xe",
            magazine: "archdigest",
            display_name: "Architectural Digest"
        },
        {
            key: "AL-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.GaQULf078Plv0WHrA0l3hWR/1B9/w8y",
            magazine: "allure",
            display_name: "Allure"
        },
        {
            key: "BA-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.lJbN9cTWHaTMvAj8RTr0s.EKxjj6FZC",
            magazine: "bonappetit",
            display_name: "Bon Appétit"
        },
        {
            key: "de.condenast@gmail.com",
            hash: "$2a$10$lW8U1ChNcJyYsmtDsL.ao.TXSlljFDyMbXlhYDrEw8XzAdSCUE80y",
            magazine: "cngeneric",
            display_name: "CNGeneric"
        },
        {
            key: "GQ-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.FD4RuhWPSCdJRYi.tnQCK4frGt0dISi",
            magazine: "gq",
            display_name: "GQ"
        },
        {
            key: "caitlin_martin@newyorker.com",
            hash: "$2a$10$LjQz9OusVFG65/SgRdEg/.ljSLnYG9S8F97DKLLMUwAMYlaF/m5dO",
            magazine: "newyorker",
            display_name: "The New Yorker"
        },
        {
            key: "TR-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5./UMeei/wQhua6h7QZ7YTqXo8dJ7ORqe",
            magazine: "traveler",
            display_name: "Condé Nast Traveler"
        },
        {
            key: "VF-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.BINkj9cNJlajZQawLaD/MsiWQb.HiM6",
            magazine: "vanityfair",
            display_name: "Vanity Fair"
        },
        {
            key: "VO-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.ly5cGENkPVZ/lG3e7afrmDvZ.uHEsl2",
            magazine: "vogue",
            display_name: "Vogue"
        },
        {
            key: "WI-DE-Review@condenast.com",
            hash: "$2a$10$AUs8Co7OcHn/9xKLXQzK5.g3AzNk1tq.uo7sA1.2yTAT5G8GooXvy",
            magazine: "wired",
            display_name: "Wired"
        }
]

exports.match = function(key, password) {
    var bcrypt = require('bcryptjs');
    for(const record of passwd_db) {
        if(key.toLowerCase().trim() === record.key.toLowerCase()) {
            var isSame = bcrypt.compareSync(password, record.hash);
            if(isSame === true) {
                return {magazine: record.magazine, display_name: record.display_name};
            }
        }
    }
    return {magazine: '', display_name: ''};
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