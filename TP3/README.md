# Exercices en JavaScript

Ce fichier contient la description et l'implémentation des exercices en JavaScript.

## Exercice 1 : Conversion de températures

Écrire une fonction `degreeC` qui convertit une température en degrés Fahrenheit en degrés Celsius en utilisant la formule :

\[ tempC = \frac{5}{9} \times (tempF - 32) \]

### Implémentation en JavaScript :

```javascript
function toTempC(tempF) {
            const tempC = (5./9) * (tempF - 32)
            document.write(`<h3>Une temperature en Fahrenheit : ${tempF}</h3>`)
            document.write(`<h3>Cette temperature équivaut a  ${tempC.toFixed(2)} en degrés Celsius</h3>`)65
        }
        let tempF = parseFloat(prompt("Entrez une température en Fahrenheit :"));
        toTempC(tempF);65
```

---

## Exercice 2 : Conversion de durées

Écrire une fonction `hjms` qui prend un nombre de secondes et le convertit en jours, heures, minutes et secondes.

### Implémentation en JavaScript :

```javascript
function hjms(seconds) {
        let jours = Math.floor(seconds / (24 * 3600));
        seconds %= 24 * 3600;
        let heures = Math.floor(seconds / 3600);
        seconds %= 3600;
        let minutes = Math.floor(seconds / 60);
        let secondes = seconds % 60;

        document.write(`<h2>Une durée en secondes : ${seconds}</h2>`);
        document.write(`<h2>Cette durée équivaut à ${jours} jours ${heures} heures ${minutes} minutes ${secondes} secondes</h2>`);
    }
    function hjms_ameliore(seconds) {
        let jours = Math.floor(seconds / (24 * 3600));
        seconds %= 24 * 3600;
        let heures = Math.floor(seconds / 3600);
        seconds %= 3600;
        let minutes = Math.floor(seconds / 60);
        let secondes = seconds % 60;

        document.write(`<h2>Une durée en secondes : ${seconds}</h2>`);
        document.write(`<h2>Cette durée équivaut à ${jours ? `${jours} jours`:""} ${heures?`${heures} heures` : ""} ${minutes ? `${minutes} minutes` : ""} ${secondes ? `${secondes} secondes` : ""}</h2>`);
    }

        let duree = parseInt(prompt("Entrez une durée en secondes (s) :"));
        hjms_ameliore(duree)
```

---

## Exercice 3 : Classer 3 nombres

Écrire un programme `troisNombres` qui trie trois nombres dans l'ordre croissant.

### Implémentation en JavaScript :

```javascript
   function troisNombres(a, b, c) {
            let nombres = [a, b, c];
            nombres.sort((x, y) => x - y);
            document.write(`Les nombres dans l'ordre croissant : ${nombres.join(' ')}`);
        }

        const n1 = prompt("Premier nombre")
        const n2 = prompt("Deuxieme nombre")
        const n3 = prompt("Troisieme nombre")
        troisNombres(n1, n2, n3);
```

---

## Exercice 4 : Affichage de motifs - escaliers

### a) Version avec `while`

```javascript
function triangle1(taille) {
            let i = 1;
            while (i <= taille) {
                let j = 1;
                while(j <= i){
                    document.write('*');
                    j++
                }
                document.write("<br>")
                i++;
            }
        }

```

### b) Version avec `for`

```javascript
function triangle2(taille) {
            for (let i = 1; i <= taille; i++) {
                    document.write('*'.repeat(i));
                    document.write("<br>"); 
            }
        }
```

---

## Exercice 4-bis : Affichage de motifs - pyramides

Affichage d'un motif en forme de pyramide.

```javascript
function pyramide(taille) {
            for (let i = 1; i <= taille; i++) {
                let espaces = "&nbsp;".repeat((taille - i) * 2); // Espaces en HTML pour centrer
                let etoiles = "*".repeat(2 * i - 1); // Calcul du nombre d'étoiles
                document.write(espaces + etoiles + "<br>"); // Affichage avec saut de ligne
            }
        }
```

---

## Exercice 5 : Tester si un nombre est premier

Un nombre est premier s'il a exactement deux diviseurs : `1` et lui-même.

```javascript
   function estPremier(n) {
            if (n < 2) return false; 
            for (let i = 2; i <= Math.sqrt(n); i++) { 
                if (n % i === 0) {
                    return i; 
                }
            }
            return true; 
        }
        
        let nombre = parseInt(prompt("Donnez un entier positif :"));
        
        if (isNaN(nombre) || nombre < 1) {
            document.write("Veuillez entrer un entier positif valide.");
        } else {
            let resultat = estPremier(nombre);
            if (resultat === true) {
                document.write(nombre + " est un nombre premier.");
            } else {
                document.write(nombre + " n'est pas un nombre premier, il est divisible par " + resultat + ".");
            }
        }
```

## Exercice 6 : Suite de Fibonacci

```javascript
function fibo1(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}

const n = parseInt(prompt("Entrez le rang n pour calculer le nième terme de Fibonacci :"));
document.write(`<h3>Le terme ${n} de la suite de Fibonacci est : ${fibo1(n)}</h3>`);
```

---

## Exercice 7 : Racine carrée approchée

```javascript
function Raca1(A) {
    if (A <= 0) {
        document.write("Le nombre A doit être positif.\n");
        return;
    }

    let u = A / 2;
    const epsilon = 1e-10;

    while (Math.abs(u * u - A) > epsilon) {
        u = (u + A / u) / 2;
    }

    document.write(`<h3>Valeur approchée de la racine carrée de ${A} est ${u}</h3>`);
}

const A = parseFloat(prompt("Entrez un nombre entre 1 et 100 pour calculer sa racine carrée approximée :"));
Raca1(A);
```

---

## Auteur
Exercices réalisés en JavaScript.
