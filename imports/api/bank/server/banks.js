if (Banks.find().count() === 0) {
    var data = JSON.parse(Assets.getText("data/banks.json"));

    data.forEach(function (bank) {
       Banks.insert(bank);
    });
}

