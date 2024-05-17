> Consegna:
> L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.Bonus
> Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

    con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
> Consigli del giorno:
> :party_wizard: Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.Ad esempio: Di cosa ho bisogno per generare i numeri?
> Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.


Esercizio Campo Minato

1) Per prima cosa creiamo un header con un bottone dove andremo a clicclare per creare la griglia .
2) Dopo creiamo anche un contenitore dove appenade la griglia .
3) Nel file css iniziamo a crearci le classi che aggiungeremo dopo in css con la parte estetica.
4) Iniziamo con il JS : per prima cosa ho bisogno di assegnare ad una variabile il bottone selezionandolo tramite il suo selettore
5) Dopo averlo selezionato correttamente richiamo la variabile ed utilizzo una funzione evento click per dare istruzioni al bottone
    - all'interno dell'event ho bisogno di un ciclo che verrà ripetuto da 1 a 100 volte (quindi uso un for)
        -nel ciclo mi creo una variabile che corrisponderà al nostro quadrato
        - appendiamo il quadrato facendo in modo che sia figlia del nostro container precedentemente inserito nell'html 
        - appendiamo la/le classi che vogliamo all'interno del nostro elemento che modificheranno il nostro quadrato
    -Dopo aver fatto ciò creiamo un altro event che ci permette di visualizzare i numeri e cambiare il colore del quadrato quando clicco su di esso
        - appendiamo uno span che corrisponderà al nostro indice di iterazione 1-100 
        - per modificare lo sfondo appendiamo una classe al nostro quadrato precedentemente creata nel css 
        - inseriamo un console log che ci mostra la cifra cliccata in console.

        