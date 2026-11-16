const VOWELS = '[aıoueiöü]'
const CONSONANTS = '[bcçdfgğhjklmnprsştvyz]'
const PATTERN = new RegExp('(C*VC*?)(C?V.*)'.replace(/C/g, CONSONANTS).replace(/V/g, VOWELS))
const UNACCEPTED = /[^aıoueiöübcçdfgğhjklmnprsştvyz ]/
const PUNCTUATION = /[.,;:'"]/g

function syllabifySentence(sentence){
    sentence = sentence.toLocaleLowerCase('tr-TR').replace(PUNCTUATION, '').replace(/\s+/g,' ')
    if (UNACCEPTED.test(sentence))
        return new Error('You entered an invalid character. Please use whitespace or the following characters only:\n\nabcçdefgğhıijklmnoöprsştuüvyz\'.,;:"')
    let words = sentence.split(/\s/)
    return words.map(syllabifyWord).join(' ')
}

function syllabifyWord(partition){
	if (matched = partition.match(PATTERN))
		return matched[1] + '-' + syllabifyWord(matched[2])
	return partition
}
