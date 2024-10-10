function xorStrings(str, key) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

key1 = atob('andsZWU=');
key2 = atob('dGpkZ2hrczk5NA==');
key3 = atob('ZXN0aGVy');
key4 = atob('a2FydS1ycmVzcw==');
key5 = atob('c2hwYXJr');

function encrypt(plainText) {
    cipher = btoa(plainText)
    cipher = xorStrings(cipher, key1);

    cipher = btoa(cipher)
    cipher = xorStrings(cipher, key2);

    cipher = btoa(cipher)
    cipher = xorStrings(cipher, key3);

    cipher = btoa(cipher)
    cipher = xorStrings(cipher, key4);

    cipher = btoa(cipher)
    cipher = xorStrings(cipher, key5);

    return cipher;
}

function decrypt(cipherText) {
    plain = xorStrings(cipherText, key5);
    plain = atob(plain)

    plain = xorStrings(plain, key4);
    plain = atob(plain)

    plain = xorStrings(plain, key3);
    plain = atob(plain)

    plain = xorStrings(plain, key2);
    plain = atob(plain)

    plain = xorStrings(plain, key1);
    plain = atob(plain)

    return plain
}

const cookie = `9\x10\x03\x16=,\x14Z=\x16B\x069\x11E289\v'>2;\x13=\x03%\x0F1.*\x02\x15"+\\+,)4>\f*G:\x19':8\x00\x07\x02#8\x10\x04=Q\n\x03>X)\t?\x0221%\x1B\x11\x06;<D\b8\x1C!19 B-;?)\x16#\f*\x1173\x05\x049\x11*\x123?\x18[;\t'\f>\x02\x13Q\x10/=8' OV`;
document.cookie = `cookie=${cookie}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;