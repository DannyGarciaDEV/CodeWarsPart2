# The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
# "GCAT"  =>  "GCAU"

def dna_to_rna(dna):
    # Replace 'T' with 'U' using the str.replace() method
    rna = dna.replace('T', 'U')
    return rna