function () {
    var s = 'gokul';
    var front, back, vowel = '';
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if ((c == 'A') || (c == 'a') || (c == 'E') || (c == 'e') || (c == 'I') || (c == 'i') || (c == 'O') || (c == 'o') || (c == 'U') || (c == 'u')) {
            front = s.substring(0, i);
            vowel += c;
            back = s.substring(i + 1);
            s = front + back;
        }
    }
    console.log(vowel); 
    