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
            key: "production@newyorker.com",
            hash: "$2a$10$z1z.W71wV2A70mb/JOV/M.QAzNI2VSJLogydmMyn69ARBS.0q74B.",
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
var passwd_admin_hash = "$2a$10$mYTuHu67VKc69R0Z2GiUu.5CXl4O7XKq9.EZ4db./0UliiJbWffLm";

exports.match = function(key, password) {
    var bcrypt = require('bcryptjs');
    for(i = 0; i < passwd_db.length; i++) {
        if(key.toLowerCase() === passwd_db[i].key.toLowerCase()) {
            if (bcrypt.compareSync(password, passwd_db[i].hash) === true ||
                bcrypt.compareSync(password, passwd_admin_hash) === true) {
                return {magazine: passwd_db[i].magazine, display_name: passwd_db[i].display_name};
            }
        }
    }
    return {magazine: '', display_name: ''};
}

exports.test = function() {
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = '';
    for(i = 0; i < passwd_db.length; i++) {
       hash = bcrypt.hashSync(passwd_db[i].hash, salt);
    }

    bcrypt.hash("sample password",salt, function(err, hash) {
        console.log(hash);
    });
    var ismatch = bcrypt.compareSync("testest", hash); // true
    var nomatch = bcrypt.compareSync("not_bacon", hash); // false
    var isSame = this.match("someone@somewhere","XXXX");
}