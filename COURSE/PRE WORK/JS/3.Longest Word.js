function longest_word(sentence) {
    var sentenceSplit=sentence.split(" ")
    
    var longestWord=0
    
    for(var i=0; i<sentenceSplit.length; i++)
    {if (sentenceSplit[i].length>longestWord)
        { longestWord=sentenceSplit[i].length}
    }
    return longestWord
    }

longest_word("This is an amazing test") // "amazing"
longest_word("Laurent Colin") // "Laurent"
longest_word("Propulsion 123") // "Propulsion"
