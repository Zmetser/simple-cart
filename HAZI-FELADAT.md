# 1. Kosárból törlés

A kosárban lévő elemek melletti X-re kattintva tűnjön el a kosárból az elem. Akkor is ha több, mint 1 van belőle.

Arra kell figyelni, hogy a kosár egy dinamikusan generált elem, ezért az eseménykezelőt is dinamikusan kell kezelni.
 - csinálhatod úgy, hogy az egész kosárra egy eseménykezelőt teszel és ellenőrzöd, hogy a kattintás az X-en történt-e
 - vagy minden X-nek külön adsz eseménykezelőt és amit akkor adsz hozzá amikor a kosár frissül `renderCart`

Ha én csinálnám, akkor a `Cart`-ra tennék egy metódust ami kitörli `id` alapján a kosárból a terméket.
Ezt a metódust meghívnám a kattintáskor, és utána frissíteném a kosarat `renderCart`.
Lehet máshogy is csinálni, ez csak az én megközelítésem

# 2. Minden binding bekötése

Még csak a Total price-t kötöttük be, de azt is rosszul, mert nem veszi figyelembe a szállítási költséget, itt az idő, hogy a többi dinamikus elemet is működésre bírjuk.
Működjön:
 - 2.1. A kosár Summary: "Items [elemek száma] $[elemek ára]"
 - 2.2. Total Price: A kosárban lévő elemek ára plussz a szállítási költség
 - 2.3. Van egy "1 items" felirat is a kosár címében az is működjön.
 - 2.4. A kosár elemekben lévő inputtal lehessen változtatni az elemek számát.

# 2.1 Summary

Itt kell használni a már megírt `getTotalPrice` metodust az elemek árához.
Az elemek számához én írnék egy másik `getItemCount` metódust.

# 2.2 Total Price

A `getTotalPrice` már megvan, az a feladat, hogy hozzáadjuk a select-ből kiválasztott elem értékét.
A select value-ja lesz a szallitasi koltseg, de figyelj, mert string, nem szam!

# 2.3 n items

Ezt már egyszer ki kellett számolni a 2.1-es feladatban, újra tudod használni a kódot amit ott írtál.
De ha én csinálnám akkor a html úgy nézne ki, hogy `<span class="js_cart-item-count"></span> items` és a `js_cart-item-count` classu elemeket updatelném. Így egyszerre lehet updatelni ezt is és a Summary-t is.

# 2.4 input

Mondjuk ha valaki enter nyom az inputban állva `keypress` akkor frissüljön annak az elemnek a száma.