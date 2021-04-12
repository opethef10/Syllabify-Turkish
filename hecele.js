let UNACCEPTED = /[^aıoueiöüİbcçdfgğhjklmnprsştvyz \t\n\r]/i
let desen = /([bcçdfgğhjklmnprsştvyz]*[aıoueiöüİ][bcçdfgğhjklmnprsştvyz]*?)([bcçdfgğhjklmnprsştvyz]?[aıoueiöüİ].*)/i

function temizle () {t1.value = ''; t2.value = '';}
function hecele(cümle){
    cümle = cümle.replace(/[.,\/#!$%\^&\*;:{}=\-_'"`~?()]/g," ").replace(/\s{2,}/g," ");
    if (UNACCEPTED.test(cümle))
        return new Error("Geçersiz harf ya da rakam girdiniz.");
    sözcükler = cümle.replace("I","ı").replace("İ","i").toLowerCase().split(/\s/);
    heceMatrix = [];
    for (let sözcük of sözcükler) {
        heceMatrix.push(sözcükHecele(sözcük));
    }
	return heceMatrix.join(" ");
}

function sözcükHecele(parça){
	matched = parça.match(desen);
	if (matched) 
		return matched[1] + "-" + sözcükHecele(matched[2]);
	return parça;
}