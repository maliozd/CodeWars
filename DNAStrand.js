console.log('-----------------')
function DNAStrand(dna) {
    //your code here
    let strand = "";
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            strand += "T";
        }
        if (dna[i] === "T") {
            strand += "A";
        }
        if (dna[i] === "G") {
            strand += "C";
        }
        if (dna[i] === "C") {
            strand += "G";
        }
    }
    return strand
}
function DNAStrand(dna) {
    return dna.replace(/./g, function (c) {
        return DNAStrand.pairs[c]
    })
}
DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

