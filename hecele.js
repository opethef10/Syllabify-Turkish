const VOWELS = '[aıoueiöü]'
const CONSONANTS = '[bcçdfgğhjklmnprsştvyz]'
const PATTERN = new RegExp('(C*VC*?)(C?V.*)'.replace(/C/g, CONSONANTS).replace(/V/g, VOWELS))
const UNACCEPTED = /[^aıoueiöübcçdfgğhjklmnprsştvyz ]/

function hecele(cümle){
    cümle = cümle.replace(/[.,;:'"]/g,'').replace(/\s+/g,' ')
    if (UNACCEPTED.test(cümle))
        return new Error('Geçersiz harf ya da rakam girdiniz.')
    let sözcükler = cümle.toLocaleLowerCase('tr-TR').split(/\s/)
    return sözcükler.map(sözcükHecele).join(' ')
}

function sözcükHecele(parça){
	if (matched = parça.match(PATTERN))
		return matched[1] + '-' + sözcükHecele(matched[2])
	return parça
}
