import { Meteor } from "meteor/meteor";
import { check } from 'meteor/check';

Meteor.methods({
    colocaZeros: function (tamanho, valor) {

        const str = valor.toString();

        return str.padStart(tamanho, '0');
    },
    pad: function (num, size) {

        
        check(num, Match.Any);
        check(size, Match.Any);

        var s = num + "";
        while (s.length < size) s = "0" + num;

        return s;
    },
    geraReferencia: function (codigoBanco,banco, codigoEmpresa, factura) {

        //         '----------------------------------------------------------------
        //         'Validacao dos Codigo de Banco
        //         '----------------------------------------------------------------
        //         If Len(Banco) <> 4 Then
        //            MsgBox ("Codigo Banco deve ter 4 digitos")
                 
        //             Exit Function
        //         End If
        //         '----------------------------------------------------------------
        //         'Validacao do Codigo da empresa
        //         '----------------------------------------------------------------
        //         If Len(CodigoEmpresa) <> 4 Then
        //             MsgBox ("Codigo Balcão deve ter 4 digitos")
                      
        //             Exit Function
        //         End If


        //check([banco, codigoEmpresa, factura],[]);
        
        switch(codigoBanco){
            case "BIM":
                
                if(banco.length != 4){
                    console.log("Codigo Banco deve ter 4 digitos");
                    return;
                }

                if(codigoEmpresa.length != 4){
                    console.log("Codigo Balcão deve ter 4 digitos");
                    return;
                }

                var arrayPeso= [73,17,89,38,62,45,53,15,50,5,49,34,81,76,27,90,9,30,3,10,1];

                
                var strAuxConta = Meteor.call('pad',factura,11);

                var strNib = banco.toString() + codigoEmpresa.toString() + strAuxConta.toString() + "00"

                
                var lngSoma = 0;
                var soma1 = 0;
                //var i = 0;

                for (var i = 0; i<21;i++){
                    var num= strNib.charAt(i);
                    soma1 = num * arrayPeso[i]; 
                    lngSoma = lngSoma + soma1;
                }
                console.log(lngSoma);
                var lngModSoma = lngSoma % 97;

                var intChDj = 98 - lngModSoma;

                
                var strNibFinal = strNib.substring(0,19).toString() ;
                
                
                strNibFinal += Meteor.call('pad',intChDj,2);

                console.log(strNibFinal);
                return;
                //----------------------------------------------------------------
                //         ' Calculo dos Pesos e a Soma St'
                //         Dim soma1 As Long
                //         '----------------------------------------------------------------
                //         For I = 1 To 21
                //             soma1 = (Val(Mid(strNib, I, 1)) * ArrayPeso(I - 1))
                //             lngSoma = lngSoma + soma1
                //         Next

                break;
        }

        var referencia="";
        var sReferenciaSCheck = "";

        var sReferenciaSCheckCalc = "";

        var I = 1;
        var P = 0;
        var S = 0;
        var numPos = 0;
        var CheckDigitReferencia = 0;

        sReferenciaSCheck = this.pad(4,refCashDirecto) + this.pad(11, codigo.toString());

        sReferenciaSCheckCalc = this.pad(4, codBanco) + sReferenciaSCheck ;

        while (I <= 15) {
            if (I === 1) {
                P = 0;
            }
            if (I < 15) {
                numPos = sReferenciaSCheckCalc.substr(((I - 1) | 0), 1);
            } else {
                numPos = 0;
            }

            S = (P + numPos) | 0;
            P = (Bridge.Int.mul(S, 10)) % 97;

            I = (I + 1) | 0;
        }

        CheckDigitReferencia = (98 - P) | 0;

        referencia = sReferenciaSCheck + this.pad(2, CheckDigitReferencia.toString());
        return referencia;
    }
});

// Function CheckDigitNIB(ByVal Banco As String, ByVal CodigoEmpresa As String, ByVal Factura As String) As String

//         Dim iTamStr As Integer, strNib As String, strNibFinal As String
//         Dim I As Integer, lngSoma As Long, lngModSoma As Long
//         Dim intChDj As Long
//         '-------------------------------------------------------------------------------------------
//         'Posicao     21, 20, 19, 18, 17, 16, 15, 14, 13,12, 11, 10, 09, 08, 07, 06, 5, 04, 3, 02, 1
//         '-------------------------------------------------------------------------------------------
//         'Pesos
//         '--------------------------------------------------------------------------------------------
//         Dim ArrayPeso(21) As Integer
//         ArrayPeso(0) = 73
//         ArrayPeso(1) = 17
//         ArrayPeso(2) = 89
//         ArrayPeso(3) = 38
//         ArrayPeso(4) = 62
//         ArrayPeso(5) = 45
//         ArrayPeso(6) = 53
//         ArrayPeso(7) = 15
//         ArrayPeso(8) = 50
//         ArrayPeso(9) = 5
//         ArrayPeso(10) = 49
//         ArrayPeso(11) = 34
//         ArrayPeso(12) = 81
//         ArrayPeso(13) = 76
//         ArrayPeso(14) = 27
//         ArrayPeso(15) = 90
//         ArrayPeso(16) = 9
//         ArrayPeso(17) = 30
//         ArrayPeso(18) = 3
//         ArrayPeso(19) = 10
//         ArrayPeso(20) = 1

            
//         '----------------------------------------------------------------
//         'Validacao dos Codigo de Banco
//         '----------------------------------------------------------------
//         If Len(Banco) <> 4 Then
//            MsgBox ("Codigo Banco deve ter 4 digitos")
         
//             Exit Function
//         End If
//         '----------------------------------------------------------------
//         'Validacao do Codigo da empresa
//         '----------------------------------------------------------------
//         If Len(CodigoEmpresa) <> 4 Then
//             MsgBox ("Codigo Balcão deve ter 4 digitos")
              
//             Exit Function
//         End If
//         '----------------------------------------------------------------
//         'Formatacao do nr da factura para 11 digitos
//         '----------------------------------------------------------------
//         Dim StrAuxConta As String
//         StrAuxConta = Format(CDbl(Factura), "00000000000")

//         '------------------------------------------------------------------
//         ' Compor o NIB
//         ' Composicao do NIB pelos dados de Input e
//         ' acrescentar dois zeros como check digito "00"
//         '-----------------------------------------------------------------
        
//         strNib = Banco & CodigoEmpresa & StrAuxConta & "00"

//         'J = Len(strNib)


//         lngSoma = 0
//         '----------------------------------------------------------------
//         ' Calculo dos Pesos e a Soma St'
//         Dim soma1 As Long
//         '----------------------------------------------------------------
//         For I = 1 To 21
//             soma1 = (Val(Mid(strNib, I, 1)) * ArrayPeso(I - 1))
//             lngSoma = lngSoma + soma1
//         Next
//         '----------------------------------------------------------------
//         'Wi = St' MOD 97
//         '----------------------------------------------------------------
//         lngModSoma = lngSoma Mod 97
//         '----------------------------------------------------------------
//         ' Check Digito = (97+1) - Wi
//         '----------------------------------------------------------------
//         intChDj = 98 - lngModSoma
//         '----------------------------------------------------------------
//         'Composição Final do NIB
//         '----------------------------------------------------------------
//         strNibFinal = Left(strNib, 19) & Format(CLng(Str(intChDj)), "00")
//         '----------------------------------------------------------------
//         'Retorno da Função(Resultado Final)
//         '----------------------------------------------------------------
//         CheckDigitNIB = strNibFinal
//     End Function

