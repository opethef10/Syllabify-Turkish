# Syllabify Turkish
A simple Javascript program which divides a Turkish sentence into its syllables.  
Use [this link](https://raw.githack.com/opethef10/Syllabify-Turkish/main/syllabifyTurkish.html) for HTML page

## How it works

### Syllabication rules
Turkish syllabication rules are fairly easy.  
- There is only one vowel in each syllable  
- Consonants surround the sole vowel in the syllable in these ways: (C for consonant, V for vowel)
    - In Turkish origin words, the maximal syllable structure is **(C)V(C)(C)**
    - Examples: 
        - a
        - da
        - dar
        - darp 
        - ar
        - arp
     - However, in foreign loanwords, theoretically there can be multiple consonants in the beginning and/or in the end.
     - Examples:
        - star
        - start
        - tart
        - sfenks
        - stres
     - Due to the nature of Turkish syllabication, despite not being a word/syllable in real life, this is theoretically allowed in the algorithm:
        - sdfdsgahghdfghg
 - Although Turkish words can take multiple final consonants, the possibilities are limited. Multi-syllable words are syllabified to have **C.CV** or **V.CV** syllable splits, **C.V** split is disallowed, **V.V** split is only found in rare specific occurrences.
 - That is, unless there are two adjacent vowels, next syllable must start with a consonant.
 - Examples:
     - ab.la
     - a.li
     - a.it
 - Whenever a one syllable word takes a suffix starting with a vowel, the last consonant of the first syllable is transferred to the beginning of the next syllable.
 - Examples:
     - kök + ü ➡️ kö.kü 
     - öz + üm ➡️ ö.züm
     - türk + ü ➡️ tür.kü
     - sfenks + e ➡️ sfenk.se

### Algorithm
Therefore the syllabication pattern can be represented in one regular expression:  
- `(C*VC*?)(C?V.*)` where C is `[bcçdfgğhjklmnprsştvyz]` V is `[aıoueiöü]`  

The "?" in the pattern ensures that second syllable begins with a consonant unless there are adjacent vowels in the word.   
This pattern splits a word into two parts: First syllable and the rest of the word.  
Then the algorithm recursively syllabify the rest of the word until the termination condition which is, the rest of the word has only one vowel.  

Basic function for syllabication is as follows:  
(Guard checks for invalid input are added in the file)  
```javascript
const PATTERN = /([bcçdfgğhjklmnprsştvyz]*[aıoueiöü][bcçdfgğhjklmnprsştvyz]*?)([bcçdfgğhjklmnprsştvyz]?[aıoueiöü].*)/

function syllabifyWord(partition){
	if (matched = partition.match(PATTERN))
		return matched[1] + '-' + syllabifyWord(matched[2])
	return partition
}
```

## Screenshots
An example sentence (which is the first line of Turkish National Anthem) is divided into its syllables.  
![](screenshot.png)
