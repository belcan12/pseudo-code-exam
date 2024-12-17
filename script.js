// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

START

// Be användaren mata in värden
INPUT "Ange summan av notan" --> SET nota
INPUT "Ange antal vänner" --> SET antalVänner
INPUT "Ange dricks i decimalform (t.ex. 0.10)" --> SET dricks

// Kontrollera att antalVänner är större än 0
IF antalVänner > 0 THEN

    // Beräkna totalsumma inklusive dricks
    CALCULATE notaMedDricks = nota + (nota * dricks)

    // Dela totalsumman mellan vännerna
    CALCULATE beloppPerPerson = notaMedDricks / antalVänner

    // Visa resultatet
    PRINT "Varje vän ska betala: " + beloppPerPerson

ELSE
    // Felhantering om antalVänner är 0
    PRINT "Antalet vänner måste vara större än 0"

END // Avslutar IF-satsen

END // Avslutar programmet

*/

// VG-Version - Lewis Carroll Word Puzzle
/*

play();

FUNCTION play()
    // Initiera variabler
    SET ordbok = [EYE, LIE, LID, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; 
    SET startOrd = "EYE";
    SET slutOrd = "LID";
    SET aktuelltOrd = startOrd;

    PRINT "Välkommen till Lewis Carroll Word Puzzle!";
    PRINT "Startord: " + startOrd + ", Slutord: " + slutOrd;

    // Starta spelets loop
    LOOP through 1 to 100 // Max antal försök
        INPUT nyttOrd;

        // Kontrollera att ordet finns i ordbok
        IF nyttOrd NOT IN ordbok THEN
            PRINT "Ogiltigt ord. Försök igen.";
            CONTINUE;
        ENDIF

        // Kontrollera att endast en bokstav ändrats
        CALL FUNCTION isOneLetterApart(aktuelltOrd, nyttOrd);
        IF isOneLetterApart RETURN false THEN
            PRINT "Endast en bokstav får ändras. Försök igen.";
            CONTINUE;
        ENDIF

        // Uppdatera aktuellt ord
        SET aktuelltOrd = nyttOrd;

        // Kontrollera om spelet är vunnet
        IF aktuelltOrd == slutOrd THEN
            PRINT "Grattis! Du vann spelet.";
            END;
        ENDIF
    ENDLOOP

    PRINT "Spelet avslutas. Du nådde inte slutordet.";
ENDFUNCTION

FUNCTION isOneLetterApart(wordOne, wordTwo)
    SET diffCount = 0;

    // Loopa igenom varje bokstav
    LOOP through 0 to LENGTH(wordOne) - 1
        IF wordOne[INDEX] != wordTwo[INDEX] THEN
            SET diffCount = diffCount + 1;
        ENDIF
    ENDLOOP

    // Returnera resultat
    IF diffCount == 1 THEN
        RETURN true;
    ELSE
        RETURN false;
    ENDIF
ENDFUNCTION

*/
