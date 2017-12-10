Meteor.methods({
    colocaZeros: function (tamanho, valor) {

        const str = valor.toString();

        return str.padStart(tamanho, '0');
    },
    pad: function (num, size) {

        check(num, Match.Any);
        check(size, Match.Any);

        var s = num + "";
        while (s.length < size) s = "0" + s;

        console.log(s);
        return s;
    },
    geraReferencia: function (entidade, tipoDoc, codigo, numPrestacao) {

        var referencia="";
        var sReferenciaSCheck = "";

        var sReferenciaSCheckCalc = "";

        var I = 1;
        var P = 0;
        var S = 0;
        var numPos = 0;
        var CheckDigitReferencia = 0;

        sReferenciaSCheck = (tipoDoc.substr(0, 1) || "") + (this.pad(6, codigo.toString()) || "") +
            (this.pad(2, numPrestacao.toString()) || "");

        sReferenciaSCheckCalc = (this.pad(5, entidade) || "") + (sReferenciaSCheck || "");

        while (I <= 15) {
            if (I === 1) {
                P = 0;
            }
            if (I < 15) {
                numPos = System.Int32.parse(sReferenciaSCheckCalc.substr(((I - 1) | 0), 1));
            } else {
                numPos = 0;
            }

            S = (P + numPos) | 0;
            P = (Bridge.Int.mul(S, 10)) % 97;

            I = (I + 1) | 0;
        }

        CheckDigitReferencia = (98 - P) | 0;

        referencia =(sReferenciaSCheck || "") + (this.pad(2, CheckDigitReferencia.toString()) || "");
        return referencia;
    }
});

