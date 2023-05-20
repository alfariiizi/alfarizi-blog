---
title: "Caesar Chiper"
date: "2022-12-25"
---

**Caesar Cipher** merupakan salah satu metode enkripsi pertama dan yang paling simple. Metode ini menggunakan _substitution cipher_, yakni melakukan _shifting_ dengan _nilai yang fixed_ pada suatu _text_. Contohnya adalah:

- `abc`, shifting 1 menjadi `bcd`.
- `klm`, shifting 4 menjadi `pqr`.

Secara matematis, _Encryption Phase_ nya dapat ditulis sebagai

$$
E_{n}(x) = (x + n)\, \text{mod}\, 26
$$

sedangkan _Decryption Phase_ nya dapat ditulis sebagai

$$
D_{n}(x) = (x - n)\, \text{mod}\, 26
$$

_Time Complexity_ nya adalah $O(N)$, dimana $N$ adalah panjang text nya. Misalkan text `HalLo`, maka didapat $N = 5$, sehingga time complexity nya adalah $O(5)$. Untuk implementasi nya, dapat dilihat pada Listing 1 yang mana menggunakan code C++, dan Listing 2 yang mana menggunakan code Python.

```cpp
// A C++ program to illustrate Caesar Cipher Technique
#include <iostream>
using namespace std;

// This function receives text and shift and
// returns the encrypted text
string encrypt(string text, int s)
{
    string result = "";

    // traverse text
    for (int i = 0; i < text.length(); i++) {
        // apply transformation to each character
        // Encrypt Uppercase letters
        if (isupper(text[i]))
            result += char(int(text[i] + s - 65) % 26 + 65);

        // Encrypt Lowercase letters
        else
            result += char(int(text[i] + s - 97) % 26 + 97);
    }

    // Return the resulting string
    return result;
}

// Driver program to test the above function
int main()
{
    string text = "ATTACKATONCE";
    int s = 4;
    cout << "Text : " << text;
    cout << "\nShift: " << s;
    cout << "\nCipher: " << encrypt(text, s);
    return 0;
}
```

```python
# A python program to illustrate Caesar Cipher Technique
def encrypt(text,s):
    result = ""

    # traverse text
    for i in range(len(text)):
        char = text[i]

        # Encrypt uppercase characters
        if (char.isupper()):
            result += chr((ord(char) + s-65) % 26 + 65)

        # Encrypt lowercase characters
        else:
            result += chr((ord(char) + s - 97) % 26 + 97)

    return result

# check the above function
text = "ATTACKATONCE"
s = 4
print ("Text  : " + text)
print ("Shift : " + str(s))
print ("Cipher: " + encrypt(text,s))
```
