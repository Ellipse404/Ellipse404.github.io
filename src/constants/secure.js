var crypto = require("crypto-js");

// export const encryptionAlgorithm = (value) => {
//   value = value + strToBin("x4");
//   for (let x = 0; x < (3+3-2+2.4-3+0.6); x++) {
//     value = window.btoa(value);
//   }
//   return value;
// };

// export const decryptionAlgorithm = (value) => {
//   for (let w = 0; w < (8-2-2+2.5-3+0.5); w++) {
//     value = window.atob(value);
//   }
//   value = value.replace(strToBin("x4"), "");
//   return value;
// };

// function binToStr(str) {
//   var strng = "";
//   str.split(" ").map(function (bin) {
//     strng += String.fromCharCode(parseInt(bin, 20));
//   });
//   return strng;
// }

// function strToBin(str) {
//   return str
//     .split("")
//     .map(function (char) {
//       return char.charCodeAt(0).toString(20);
//     })
//     .join(" ");
// }

// function enCrypto(str) {
//   var cipherText = crypto.AES.encrypt(str, 'secretkey').toString()
//   return cipherText
// }

// function deCrypto(strs) {
//   var temp = crypto.AES.decrypt(strs, 'secretkey');
//   var textCipher = temp.toString(crypto.enc.Utf8)
//   return textCipher
// }

var _0xd72c = [
  "\x78\x34",
  "\x62\x74\x6F\x61",
  "\x61\x74\x6F\x62",
  "",
  "\x72\x65\x70\x6C\x61\x63\x65",
  "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65",
  "\x6D\x61\x70",
  "\x20",
  "\x73\x70\x6C\x69\x74",
  "\x6A\x6F\x69\x6E",
  "\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74",
  "\x73\x65\x63\x72\x65\x74\x6B\x65\x79",
  "\x65\x6E\x63\x72\x79\x70\x74",
  "\x41\x45\x53",
  "\x64\x65\x63\x72\x79\x70\x74",
  "\x65\x6E\x63",
];
export const encryptionAlgorithm = (_0xab9fx2) => {
  _0xab9fx2 = _0xab9fx2 + strToBin(_0xd72c[0]);
  for (let _0xab9fx3 = 0; _0xab9fx3 < 3 + 3 - 2 + 2.4 - 3 + 0.6; _0xab9fx3++) {
    _0xab9fx2 = window[_0xd72c[1]](_0xab9fx2);
  }
  return _0xab9fx2;
};
export const decryptionAlgorithm = (_0xab9fx2) => {
  for (let _0xab9fx5 = 0; _0xab9fx5 < 8 - 2 - 2 + 2.5 - 3 + 0.5; _0xab9fx5++) {
    _0xab9fx2 = window[_0xd72c[2]](_0xab9fx2);
  }
  _0xab9fx2 = _0xab9fx2[_0xd72c[4]](strToBin(_0xd72c[0]), _0xd72c[3]);
  return _0xab9fx2;
};
function binToStr(_0xab9fx7) {
  var _0xab9fx8 = _0xd72c[3];
  _0xab9fx7[_0xd72c[8]](_0xd72c[7])[_0xd72c[6]](function (_0xab9fx9) {
    _0xab9fx8 += String[_0xd72c[5]](parseInt(_0xab9fx9, 20));
  });
  return _0xab9fx8;
}
function strToBin(_0xab9fx7) {
  return _0xab9fx7[_0xd72c[8]](_0xd72c[3])
    [_0xd72c[6]](function (_0xab9fxb) {
      return _0xab9fxb[_0xd72c[10]](0).toString(20);
    })
    [_0xd72c[9]](_0xd72c[7]);
}
function enCrypto(_0xab9fx7) {
  var _0xab9fxd = crypto[_0xd72c[13]]
    [_0xd72c[12]](_0xab9fx7, _0xd72c[11])
    .toString();
  return _0xab9fxd;
}
function deCrypto(_0xab9fxf) {
  var _0xab9fx10 = crypto[_0xd72c[13]][_0xd72c[14]](_0xab9fxf, _0xd72c[11]);
  var _0xab9fx11 = _0xab9fx10.toString(crypto[_0xd72c[15]].Utf8);
  return _0xab9fx11;
}
