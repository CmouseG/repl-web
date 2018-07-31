/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.9.0(2e2613f7739c31832496f617356f5fb8eadc2ca1)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.hu",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (ismét előfordult)"],"vs/base/browser/ui/findinput/findInput":["bemeneti adat"],"vs/base/browser/ui/findinput/findInputCheckboxes":["Kis- és nagybetűk megkülönböztetése","Csak teljes szavas egyezés","Reguláris kifejezés használata"],"vs/base/browser/ui/inputbox/inputBox":["Hiba: {0}","Figyelmeztetés: {0}","Információ: {0}"],"vs/base/common/keybindingLabels":["Ctrl","Shift","Alt","Windows","Control","Shift","Alt","Parancs","Control","Shift","Alt","Windows"],"vs/base/common/severity":["Hiba","Figyelmeztetés","Információ"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, választó","választó"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Gyorsválasztó. Kezdjen el gépelni a találati lista szűkítéséhez!","Gyorsválasztó"],"vs/base/parts/tree/browser/treeDefaults":["Összecsukás"],"vs/editor/browser/widget/diffEditorWidget":["A fájlok nem hasonlíthatók össze, mert az egyik fájl túl nagy."],"vs/editor/browser/widget/diffReview":["Bezárás","{0}. eltérés, összesen: {1}. Eredeti: {2}., {3}. sorok, módosított: {4}., {5}. sorok","üres","eredeti {0}., módosított {1}.: {2}","+ módosított {0}.: {1}","- eredeti {0}.: {1}","Ugrás a következő eltérésre","Ugrás az előző eltérésre"],"vs/editor/common/config/commonEditorConfig":["Szerkesztőablak","Ez a beállítás a betűkészletet határozza meg.","Meghatározza a betűvastagságot.","Meghatározza a betű méretét, pixelekben.","Meghatározza a sormagasságot. A 0 érték használata esetén a sormagasság a fontSize értékéből van számolva.","Meghatározza a betűközt, pixelekben.","Meghatározza, hogy megjelenjenek-e a sorszámok. A lehetséges értékek 'on', 'off' és 'relative'. A 'relative' érték használata esetén a kurzor aktuális pozíciójához képest számított sorszám jelenik meg.","Függőleges vonalzók kirajzolása bizonyos számú fix szélességű karakter után. Több vonalzó használatához adjon meg több értéket. Nincs kirajzolva semmi, ha a tömb üres.","Azon karakterek listája, amelyek szóelválasztónak vannak tekintve szavakkal kapcsolatos navigáció vagy műveletek során.","Egy tabulátor hány szóköznek felel meg. Ez a beállítás felülírásra kerül a fájl tartalma alapján, ha az 'editor.detectIndentation' beállítás aktív.","A várt érték 'number' típusú. Megjegyzés: az \"auto\" értéket az 'editor.detectIndentation' beállítás helyettesíti.","Tabulátor billentyű lenyomásánál szóközök legyenek-e beszúrva.  Ez a beállítás felülírásra kerül a fájl tartalma alapján, ha az 'editor.detectIndentation' beállítás aktív.","A várt érték 'boolean' típusú. Megjegyzés: az \"auto\" értéket az 'editor.detectIndentation' beállítás helyettesíti.","Fájl megnyitásakor az `editor.tabSize` és az `editor.insertSpaces` értéke a fájl tartalma alapján lesz meghatározva.","Itt adható meg, hogy a kijelölt elemek sarkai lekerekítettek legyenek-e","Meghatározza, hogy a szerkesztőablak görgethető-e az utolsó sor után.","Meghatározza, hogy a szerkesztőablak animálva van-e görgetve.","Meghatározza, hogy megjelenjen-e a kódtérkép.","Meghatározza, hogy automatikusan el legyen-e rejtve a kódtérképes görgetősáv. Lehetséges értékek: 'always' és 'mouseover'.","Meghatározza, hogy a tényleges karakterek legyenek-e megjelenítve (színes téglalapok helyett)","Meghatározza, hogy a kódtérképen legfeljebb hány oszlop legyen kirajzolva.","Meghatározza, hogy a keresés modulba automatikusan bekerüljön-e a szerkesztőablakban kiválasztott szöveg.","Meghatározza, hogy a keresés a kijelölésben beállítás be van-e kapcsolva, ha több karakternyi vagy sornyi szöveg ki van jelölve a szerkesztőablakban.","A sorok soha nem lesznek tördelve.","A sorok tördelve lesznek a nézetablak szélességénél.","A sorok tördelve lesznek az `editor.wordWrapColumn` oszlopnál.","A sorok tördelve lesznek a nézetablak szélességének és az `editor.wordWrapColumn` értékének minimumánál.","Ez a beállítás meghatározza, hogy a sorok hogyan legyenek tördelve. Lehetséges értékek:\n- 'off' (nincs sortörés)\n- 'on' (sortörés a nézetablakban)\n- 'wordWrapColumn' (sortörés az `editor.wordWrapColumn` oszlopnál) vagy\n- 'bounded' (sortörés az `editor.wordWrapColumn` és a nézetablak minimumánál)","Meghatározza a sortöréshez használt oszlopszámot a szerkesztőablakban, ha az `editor.wordWrap` értéke 'wordWrapColumn' vagy 'bounded'.","Meghatározza a tördelt sorok behúzását. Értéke 'none', 'same' vagy 'indent' lehet.","Az egér görgetési eseményeinél keletkező `deltaX` és `deltaY` paraméterek szorzója","Windows és Linux alatt a `Control`, OSX alatt a `Command` billentyűt jelenti.","Windows és Linux alatt az `Alt`, OSX alatt az `Option` billentyűt jelenti.","Több kurzor hozzáadásához használt módosítóbillentyű. A `ctrlCmd` Windows és Linux alatt a `Control`, OSX alatt a `Command` billentyűt jelenti. A Definíció megkeresése és Hivatkozás megnyitása egérgesztusok automatikusan alkalmazkodnak úgy, hogy ne ütközzenek a többkurzorhoz tartozó módosítóval.","Kiegészítési javaslatok engedélyezése karakterláncokban (stringekben)","Kiegészítési javaslatok engedélyezése megjegyzésekben","Kiegészítési javaslatok engedélyezése karakterláncokon (stringeken) és megjegyzéseken kívül","Meghatározza, hogy automatikusan megjelenjenek-e a javaslatok gépelés közben","Meghatározza, hogy hány ezredmásodperc késleltetéssel jelenjenek meg a kiegészítési javaslatok","Paraméterinformációkat és típusinformációkat tartalmazó felugró ablak engedélyezése gépelés közben","Meghatározza, hogy a szerkesztő automatikusan beszúrja-e a nyitó zárójelek záró párját","Meghatározza, hogy a szerkesztő automatikusan formázza-e a sort a gépelés után","Meghatározza, hogy a szerkesztő automatikusan formázza-e a beillesztett tartalmat. Ehhez szükség van egy formázóra, illetve a formázónak tudnia kell a dokumentum egy részét formázni.","Meghatározza, hogy a szerkesztőablak automatikusan állítsa-e az indentálást miközben a felhasználó gépel, beilleszt vagy mozgatja a sorokat. Az adott nyelv indentálási szabályainak rendelkezésre kell állnia.","Itt adható meg, hogy eseményindító karakterek beírásakor automatikusan megjelenjenek-e a javaslatok","Meghatározza, hogy a javaslatok az 'Enter' gomb leütésére is el legyenek fogadva a 'Tab' mellett. Segít feloldani a bizonytalanságot az új sorok beillesztése és a javaslatok elfogadása között. A 'smart' érték azt jelenti, hogy csak akkor fogadja el a javaslatot az Enter leütése esetén, ha az módosítja a szöveget.","Meghatározza, hogy a javaslaok a zárókarakterek leütésére is el legyenek fogadva. A JavaScriptben például a pontosvessző (';') számít zárókarakternek, leütésére a javaslat elfogadásra kerül és beillesztődik az adott karakter. ","A javasolt kódrészletek a többi javaslat előtt jelenjenek meg.","A javasolt kódrészletek a többi javaslat után jelenjenek meg.","A javasolt kódrészletek a többi javaslattal együtt jelenjenek meg.","Ne jelenjenek meg a javasolt kódrészletek.","Meghatározza, hogy a kódtöredékek megjelenjenek-e a javaslatok között, illetve hogy hogyan legyenek rendezve.","Meghatározza, hogy kijelölés nélküli másolás esetén a teljes sor legyen-e másolva.","Meghatározza, hogy a kiegészítések listája a dokumentumban lévő szövegek alapján legyen-e meghatározva.","Az ajánlásokat tartalmazó modul betűmérete","Az ajánlásokat tartalmazó modul sormagassága","Itt adható meg, hogy a szerkesztő kiemelje-e a kijelöléshez hasonló találatokat","Meghatározza, hogy a szerkesztőablakban ki legyenek-e emelve a szimbólum szemantikailag hozzá tartozó előfordulásai.","Meghatározza, hogy hány dekoráció jelenhet meg azonos pozícióban az áttekintő sávon.","Meghatározza, hogy legyen-e kerete az áttekintő sávnak.","Meghatározza a kurzor animációjának stílusát. Lehetséges értékek: 'blink', 'smooth', 'phase', 'expand' vagy 'solid'","A szerkesztőablak betűtípusának nagyítása vagy kicsinyítése az egérgörgő Ctrl lenyomása mellett történő használata esetén","Meghatározza a kurzor stílusát. Lehetséges értékek: 'block', 'block-outline', 'line', 'line-thin', 'underline' vagy 'underline-thin'","Engedélyezi a betűtípusban található ligatúrák használatát","Meghatározza, hogy a kurzor pozíciója el legyen-e rejtve az áttekintő sávon.","Meghatározza, hogy a szerkesztőablakban hogyan legyenek kirajzolva a szóköz karakterek. Lehetséges értékek: 'none', 'boundary', vagy 'all'. A 'boundary' beállítás esetén, ha szavak között egyetlen szóköz található, akkor az nem lesz kirajzolva.","Meghatározza, hogy a szerkesztőablakban ki legyenek-e rajzolva a vezérlőkarakterek.","Meghatározza, hogy a szerkesztőablakban ki legyenek-e rajzolva az indentálási segédvonalak.","Meghatározza, hogy a szerkesztőablakban hogyan legyen kirajzolva az aktuális sor kiemelése. Lehetséges értékek: 'none', 'gutter', 'line', vagy 'all'.","Meghatározza, hogy megjelenjenek-e a kódlencsék","Meghatározza, hogy engedélyezve van-e a kódrészletek bezárása a szerkesztőablakban.","Meghatározza, hogy a kódrészletek bezárásához tartozó vezérlőelemek automatikusan el legyenek-e rejtve.","Zárójel kiválasztása esetén a hozzátartozó zárójel kiemelése.","Meghatározza, hogy legyen-e vertikális szimbólummargó a szerkesztőablakban. A szimbólummargó elsősorban hibakeresésnél van használva.","Szóközök beillesztése és törlése során követve vannak a tabulátorok.","A sorok végén lévő, automatikusan beillesztett szóközök eltávolítása","A betekintőablakok maradjanak nyitva akkor is, ha duplán kattintanak a tartalmára vagy megnyomják az Escape gombot.","Meghatározza, hogy a szerkesztőablakban engedélyezett-e a kijelölt szövegrészletek áhelyezése húzással.","A szerkesztő a platform által biztosított API-kat használja annak megállapításához, hogy van-e képernyőolvasó csatlakoztatva.","A szerkesztő folyamatos képernyőolvasóval való használatára van optimalizálva.","A szerkesztő soha nincs képernyőolvasó használatára optimalizálva.","Meghatározza, hogy a szerkesztő olyan módban fusson-e, ami optimalizálva van képernyőolvasóval való használathoz.","Meghatározza, hogy a szerkesztőablak érzékelje-e a hivatkozásokat, és kattinthatóvá tegye-e őket.","Meghatározza, hogy a szerkesztőablakban ki legyenek-e rajzolva a színdekorátorok és színválasztók.","Engedélyezi a kódműveletek végrehajtásához használható villanykörtét","Meghatározza, hogy a differenciaszerkesztő ablakban egymás mellett vagy a sorban jelenjenek meg az eltérések","Meghatározza, hogy a differenciaszerkesztő ablakban megjelenjenek-e a sor elején vagy végén a szóközökben talált különbségek","Meghatározza, hogy a differenciaszerkesztő ablakban megjelenjenek-e a +/- jelzők az hozzáadott/eltávolított változásoknál","Meghatározza-e, hogy támogatva van-e az elsődleges vágólap Linux alatt"],"vs/editor/common/config/editorOptions":["A szerkesztőablak jelenleg nem elérhető. Nyomja meg az Alt+F1-et a beállítási lehetőségek megjelenítéséhez!","Szerkesztőablak tartalma"],"vs/editor/common/controller/cursor":["Váratlan kivétel egy parancs végrehajtása során."],"vs/editor/common/model/textModelWithTokens":["Ebben az üzemmódban nem sikerült lexikális elemekre bontani a bemenetet."],"vs/editor/common/modes/modesRegistry":["Egyszerű szöveg"],"vs/editor/common/services/bulkEdit":["A következő fájlok módosultak időközben: {0}","Nem történtek változtatások","{0} változtatást végzett {0} fájlban","{0} változtatást végzett egy fájlban"],"vs/editor/common/services/modelServiceImpl":["[{0}]\n{1}","[{0}] {1}"],"vs/editor/common/view/editorColorRegistry":["A kurzor pozícióján található sor kiemelési háttérszíne.","A kurzor pozícióján található sor keretszíne.","A kiemelt területek háttérszíne, pl. a gyors megnyitás és keresés funkcióknál.","A szerkesztőablak kurzorának színe.","A szerkesztőablak kurzorának háttérszíne. Lehetővé teszik az olyan karakterek színének módosítását, amelyek fölött egy blokk-típusú kurzor áll.","A szerkesztőablakban található szóköz karakterek színe.","A szerkesztőablak segédvonalainak színe.","A szerkesztőablak sorszámainak színe.","A szerkesztőablak sávjainak színe.","A szerkesztőablakban található kódlencsék előtérszíne","Hozzátartozó zárójelek háttérszíne","Az összetartozó zárójelek dobozának színe","Az áttekintő sáv keretszíne.","A szerkesztőablag margójának háttérszíne. A margón található a szimbólummargó és a sorszámok.","A hibákat jelző hullámvonal előtérszíne a szerkesztőablakban.","A hibákat jelző hullámvonal keretszíne a szerkesztőablakban.","A figyelmeztetéseket jelző hullámvonal előtérszíne a szerkesztőablakban.","A figyelmeztetéseket jelző hullámvonal keretszíne a szerkesztőablakban.","Az információkat jelző hullámvonal előtérszíne a szerkesztőablakban.","Az információkat jelző hullámvonal keretszíne a szerkesztőablakban. ","A kiemelt tartományokat jelölő jelzések színe az áttekintősávon.","A hibákat jelölő jelzések színe az áttekintősávon.","A figyelmeztetéseket jelölő jelzések színe az áttekintősávon.","Az információkat jelölő jelzések színe az áttekintősávon."],"vs/editor/contrib/bracketMatching/common/bracketMatching":["Ugrás a zárójelre"],"vs/editor/contrib/caretOperations/common/caretOperations":["Kurzor mozgatása balra","Kurzor mozgatása jobbra"],"vs/editor/contrib/caretOperations/common/transpose":["Betűk megcserélése"],"vs/editor/contrib/clipboard/browser/clipboard":["Kivágás","Másolás","Beillesztés","Másolás szintaktikai kiemeléssel"],"vs/editor/contrib/comment/common/comment":["Egysoros megjegyzés ki-/bekapcsolása","Egysoros megjegyzés hozzáadása","Egysoros megjegyzés eltávolítása","Megjegyzésblokk ki-/bekapcsolása"],"vs/editor/contrib/contextmenu/browser/contextmenu":["Szerkesztőablak helyi menüjének megjelenítése"],"vs/editor/contrib/find/browser/findWidget":["Keresés","Keresés","Előző találat","Következő találat","Keresés kijelölésben","Bezárás","Csere","Csere","Csere","Az összes előfordulás cseréje","Váltás csere módra","Csak az első 999 találat van kiemelve, de minden keresési művelet a teljes szöveggel dolgozik.","{0} (összesen {1})","Nincs eredmény"],"vs/editor/contrib/find/common/findController":["Keresés","Következő találat","Előző találat","Következő kijelölés","Előző kijelölés","Csere","Kijelölés hozzáadása a következő keresési találathoz","Kijelölés hozzáadása az előző keresési találathoz","Utolsó kijelölés áthelyezése a következő keresési találatra","Utolsó kijelölés áthelyezése az előző keresési találatra","Az összes keresési találat kijelölése","Minden előfordulás módosítása","Következő keresési kifejezés megjelenítése","Előző keresési kifejezés megjelenítése"],"vs/editor/contrib/folding/browser/folding":["Kibontás","Kibontás rekurzívan","Bezárás","Bezárás rekurzívan","Az összes bezárása","Az összes kinyitása","{0} szintű blokkok bezárása"],"vs/editor/contrib/format/browser/formatActions":["Egy formázást végzett a(z) {0}. sorban","{0} formázást végzett a(z) {1}. sorban","Egy formázást végzett a(z) {0}. és {1}. sorok között","{0} formázást végzett a(z) {1}. és {2}. sorok között","Dokumentum formázása","Kijelölt tartalom formázása"],"vs/editor/contrib/goToDeclaration/browser/goToDeclarationCommands":["Nem található a(z) '{0}' definíciója","Definíció nem található"," – {0} definíció","Ugrás a definícióra","Definíció megnyitása oldalt","Betekintés a definícióba","Nem található a(z) '{0}' implementációja","Implementáció nem található"," – {0} implementáció","Ugrás az implementációra","Betekintés az implementációba","Nem található a(z) '{0}' típusdefiníciója","Típusdefiníció nem található"," – {0} típusdefiníció","Ugrás a típusdefinícióra","Betekintés a típusdefinícióba"],"vs/editor/contrib/goToDeclaration/browser/goToDeclarationMouse":["Kattintson {0} definíció megjelenítéséhez."],"vs/editor/contrib/gotoError/browser/gotoError":["({0}/{1})","Következő hiba vagy figyelmeztetés","Előző hiba vagy figyelmeztetés","A szerkesztőablak jelzőnavigációs moduljának színe hiba esetén.","A szerkesztőablak jelzőnavigációs moduljának színe figyelmeztetés esetén.","A szerkesztőablak jelzőnavigációs moduljának színe információ esetén.","A szerkesztőablak jelzőnavigációs moduljának háttérszíne."],"vs/editor/contrib/hover/browser/hover":["Súgószöveg megjelenítése"],"vs/editor/contrib/hover/browser/modesContentHover":["Betöltés..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Csere az előző értékre","Csere a következő értékre"],"vs/editor/contrib/linesOperations/common/linesOperations":["Sor másolása eggyel feljebb","Sor másolása eggyel lejjebb","Sor feljebb helyezése","Sor lejjebb helyezése","Rendezés növekvő sorrendben","Rendezés csökkenő sorrendben","Sor végén található szóközök levágása","Sor törlése","Sor behúzása","Sor kihúzása","Sor beszúrása eggyel feljebb","Sor beszúrása eggyel lejjebb","Balra lévő tartalom törlése","Jobbra lévő tartalom törlése","Sorok egyesítése","A kurzor körüli karakterek felcserélése","Átalakítás nagybetűssé","Átalakítás kisbetűssé"],"vs/editor/contrib/links/browser/links":["Hivatkozott oldal megnyitása Cmd + kattintás paranccsal","Hivatkozott oldal megnyitása Ctrl + kattintás paranccsal","Cmd + kattintás a parancs végrehajtásához","Ctrl + kattintás a parancs végrehajtásához","Hivatkozás megnyitása Alt + kattintás paranccsal","Alt + kattintás a parancs végrehajtásához","A hivatkozást nem sikerült megnyitni, mert nem jól formázott: {0}","A hivatkozást nem sikerült megnyitni, hiányzik a célja.","Hivatkozás megnyitása"],"vs/editor/contrib/multicursor/common/multicursor":["Kurzor beszúrása egy sorral feljebb","Kurzor beszúrása egy sorral lejjebb","Kurzor beszúrása a sorok végére"],"vs/editor/contrib/parameterHints/browser/parameterHints":["Paraméterinformációk megjelenítése"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, információ"],"vs/editor/contrib/quickFix/browser/quickFixCommands":["Javítások megjelenítése ({0})","Javítások megjelenítése","Gyorsjavítás"],"vs/editor/contrib/referenceSearch/browser/peekViewWidget":["Bezárás"],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" – {0} referencia","Minden hivatkozás megkeresése"],"vs/editor/contrib/referenceSearch/browser/referencesController":["Betöltés..."],"vs/editor/contrib/referenceSearch/browser/referencesModel":["szimbólum a következő helyen: {0}, sor: {1}, oszlop: {2}","Egy szimbólum a következő helyen: {0}, teljes elérési út: {1}","{0} szimbólum a következő helyen: {1}, teljes elérési út: {2}","Nincs találat","Egy szimbólum a következő helyen: {0}","{0} szimbólum a következő helyen: {1}","{0} szimbólum {1} fájlban"],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Nem sikerült feloldani a fájlt.","{0} referencia","{0} referencia","előnézet nem érhető el","Referenciák","Nincs eredmény","Referenciák","A betekintőablak címsorának háttérszíne.","A betekintőablak címének színe.","A betekintőablak címsorában található információ színe.","A betekintőablak keretének és nyilainak színe.","A betekintőablak eredménylistájának háttérszíne.","A betekintőablak eredménylistájában található sorhivatkozások előtérszíne.","A betekintőablak eredménylistájában található fájlhivatkozások előtérszíne.","A betekintőablak eredménylistájában kiválaszott elem háttérszíne.","A betekintőablak eredménylistájában kiválaszott elem előtérszíne.","A betekintőablak szerkesztőablakának háttérszíne.","A betekintőablak szerkesztőablakában található margó háttérszíne.","Kiemelt keresési eredmények színe a betekintőablak eredménylistájában.","Kiemelt keresési eredmények színe a betekintőablak szerkesztőablakában."],"vs/editor/contrib/rename/browser/rename":["Nincs eredmény.","'{0}' sikeresen át lett nevezve a következőre: '{1}'. Összefoglaló: {2}","Az átnevezést nem sikerült végrehajtani.","Szimbólum átnevezése"],"vs/editor/contrib/rename/browser/renameInputField":["Átnevezésre szolgáló beviteli mező. Adja meg az új nevet, majd nyomja meg az Enter gombot a változtatások elvégzéséhez."],"vs/editor/contrib/smartSelect/common/smartSelect":["Kijelölés bővítése","Kijelölés szűkítése"],"vs/editor/contrib/suggest/browser/suggestController":["A(z) '{0}' elfogadása a következő szöveg beszúrását eredményezte: {1}","Javaslatok megjelenítése"],"vs/editor/contrib/suggest/browser/suggestWidget":["A javaslatokat tartalmazó modul háttérszíne.","A javaslatokat tartalmazó modul keretszíne.","A javaslatokat tartalmazó modul előtérszíne.","A javaslatokat tartalmazó modulban kiválasztott elem háttérszíne.","Az illeszkedő szövegrészletek kiemelése a javaslatok modulban.","További információk megjelenítése...{0}","{0}, javaslat, részletekkel","{0}, javaslat","Kevesebb információ megjelenítése...{0}","Betöltés...","Nincsenek javaslatok.","{0}, elfogadva","{0}, javaslat, részletekkel","{0}, javaslat"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Tab billentyűvel mozgatott fókusz ki- és bekapcsolása"],"vs/editor/contrib/wordHighlighter/common/wordHighlighter":["Szimbólumok háttérszíne olvasási hozzáférés, páldául változó olvasása esetén.","Szimbólumok háttérszíne írási hozzáférés, páldául változó írása esetén.","A kiemelt szimbólumokat jelölő jelzések színe az áttekintősávon.","A kiemelt, írási hozzáférésű szimbólumokat jelölő jelzések színe az áttekintősávon."],"vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp":["No selection","Line {0}, Column {1} ({2} selected)","Line {0}, Column {1}","{0} selections ({1} characters selected)","{0} selections","Now changing the setting `accessibilitySupport` to 'on'.","Now opening the Editor Accessibility documentation page."," in a read-only pane of a diff editor."," in a pane of a diff editor."," in a read-only code editor"," in a code editor","To configure the editor to be optimized for usage with a Screen Reader press Command+E now.","To configure the editor to be optimized for usage with a Screen Reader press Control+E now.","The editor is configured to be optimized for usage with a Screen Reader.","The editor is configured to never be optimized for usage with a Screen Reader, which is not the case at this time.","Pressing Tab in the current editor will move focus to the next focusable element. Toggle this behavior by pressing {0}.","Pressing Tab in the current editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.","Pressing Tab in the current editor will insert the tab character. Toggle this behavior by pressing {0}.","Pressing Tab in the current editor will insert the tab character. The command {0} is currently not triggerable by a keybinding.","Press Command+H now to open a browser window with more information related to editor accessibility.","Press Control+H now to open a browser window with more information related to editor accessibility.","You can dismiss this tooltip and return to the editor by pressing Escape or Shift+Escape.","Show Accessibility Help"],"vs/editor/standalone/browser/inspectTokens/inspectTokens":["Developer: Inspect Tokens"],"vs/editor/standalone/browser/quickOpen/gotoLine":["Go to line {0} and character {1}","Go to line {0}","Type a line number between 1 and {0} to navigate to","Type a character between 1 and {0} to navigate to","Go to line {0}","Type a line number, followed by an optional colon and a character number to navigate to","Go to Line..."],"vs/editor/standalone/browser/quickOpen/quickCommand":["{0}, commands","Type the name of an action you want to execute","Command Palette"],"vs/editor/standalone/browser/quickOpen/quickOutline":["{0}, symbols","Type the name of an identifier you wish to navigate to","Go to Symbol...","symbols ({0})","modules ({0})","classes ({0})","interfaces ({0})","methods ({0})","functions ({0})","properties ({0})","variables ({0})","variables ({0})","constructors ({0})","calls ({0})"],"vs/editor/standalone/browser/standaloneCodeEditor":["Editor content","Press Ctrl+F1 for Accessibility Options.","Press Alt+F1 for Accessibility Options."],"vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast":["Toggle High Contrast Theme"],"vs/platform/configuration/common/configurationRegistry":["Felülírt alapértelmezett konfigurációk","A szerkesztő beállításainak felülírása a(z) {0} nyelvre vonatkozóan","A szerkesztő beállításainak felülírása egy adott nyelvre vonatkozóan","A(z) '{0}' nem regisztrálható. Ez a beállítás illeszkedik a '\\\\[.*\\\\]$' mintára, ami a nyelvspecifikus szerkesztőbeállításokhoz van használva. Használja a 'configurationDefaults' szolgáltatási lehetőséget.","A(z) '{0}' nem regisztrálható: ez a tulajdonság már regisztrálva van."],"vs/platform/keybinding/common/abstractKeybindingService":["Lenyomta a következőt: ({0}). Várakozás a kombináció második billentyűjére...","A(z) ({0}, {1}) billentyűkombináció nem egy parancs."],"vs/platform/message/common/message":["Bezárás","Később","Mégse"],"vs/platform/theme/common/colorRegistry":["Érvénytelen színformátum. Az #RGB, #RGBA, #RRGGBB vagy #RRGGBBAA formátum használható.","A munkaterületen használt színek.","Általános előtérszín. Csak akkor van használva, ha nem írja felül az adott komponens.","A hibaüzenetek általános előtérszíne. Csak akkor van használva, ha nem írja felül az adott komponens.","A további információkat szolgáltató leíró szövegek, pl. a címkék előtérszíne.","Fókuszált elemek keretének általános színe. Csak akkor van használva, ha nem írja felül az adott komponens.","Az elemek körüli extra keret, mely arra szolgál, hogy elválassza egymástól őket, így növelve a kontrasztot.","Az aktív elemek körüli extra keret, mely arra szolgál, hogy elválassza egymástól őket, így növelve a kontrasztot.","A munkaterületen kijelölt szövegek háttérszíne (pl. beviteli mezők vagy szövegmezők esetén). Ez a beállítás nem vonatkozik a szerkesztőablakban végzett kijelölésekre. ","A szövegelválasztók színe.","A szövegben található hivatkozások előtérszíne.","A szövegben található aktív hivatkozások előtérszíne.","Az előformázott szövegrészek előtérszíne.","A szövegben található idézetblokkok háttérszíne.","A szövegben található idézetblokkok keretszíne.","A szövegben található kódblokkok háttérszíne.","A szerkesztőablakon belül található modulok, pl. a keresés/csere árnyékának színe.","A beviteli mezők háttérszíne.","A beviteli mezők előtérszíne.","A beviteli mezők kerete.","A beviteli mezőben található aktivált beállítások keretszíne.","A beviteli mezőkben használt helykitöltő szövegek előtérszíne.","Beviteli mezők háttérszíne információs szintű validációs állapot esetén.","Beviteli mezők keretszíne információs szintű validációs állapot esetén.","Beviteli mezők háttérszíne figyelmeztetés szintű validációs állapot esetén.","Beviteli mezők keretszíne figyelmeztetés szintű validációs állapot esetén.","Beviteli mezők háttérszíne hiba szintű validációs állapot esetén.","Beviteli mezők keretszíne hiba szintű validációs állapot esetén.","A legördülő menük háttérszíne.","A legördülő menük előtérszíne.","A legördülő menük kerete.","Listák/fák fókuszált elemének háttérszine, amikor a lista aktív. Egy aktív listának/fának van billentyűfőkusza, míg egy inaktívnak nincs.","Listák/fák fókuszált elemének előtérszíne, amikor a lista aktív. Egy aktív listának/fának van billentyűfőkusza, míg egy inaktívnak nincs.","Listák/fák kiválasztott elemének háttérszíne, amikor a lista aktív. Egy aktív listának/fának van billentyűfőkusza, míg egy inaktívnak nincs.","Listák/fák kiválasztott elemének előtérszíne, amikor a lista aktív. Egy aktív listának/fának van billentyűfőkusza, míg egy inaktívnak nincs.","Listák/fák kiválasztott elemének háttérszíne, amikor a lista inaktív. Egy aktív listának/fának van billentyűfőkusza, míg egy inaktívnak nincs.","Listák/fák kiválasztott elemének előtérszíne, amikor a lista inaktív. Egy aktív listának/fának van billentyűfőkusza, míg egy inaktívnak nincs.","Listák/fák kiválasztott elemének háttérszíne, amikor a lista inaktív. Egy aktív listának/fának van billentyűfőkusza, míg egy inaktívnak nincs.","Listák/fák kiválasztott elemének előtérszíne, amikor a lista inaktív. Egy aktív listának/fának van billentyűfőkusza, míg egy inaktívnak nincs.","A lista/fa háttérszíne, amikor az egérkurzor egy adott elem fölé kerül.","A lista/fa előtérszíne, amikor az egérkurzor egy adott elem fölé kerül.","A lista/fa háttérszíne, amikor az elemek az egérkurzorral vannak mozgatva egyik helyről a másikra.","Kiemelt találatok előtérszíne a listában/fában való keresés esetén.","Csoportcímkék színe a gyorsválasztóban.","Csoportok keretszíne a gyorsválasztóban.","A gombok előtérszíne.","A gombok háttérszíne.","A gomb háttérszine, ha az egérkurzor fölötte van.","A jelvények háttérszíne. A jelvények apró információs címkék, pl. a keresési eredmények számának jelzésére.","A jelvények előtérszíne. A jelvények apró információs címkék, pl. a keresési eredmények számának jelzésére.","A görgetősáv árnyéka, ami jelzi, hogy a nézet el van görgetve.","A görgetősáv csúszkájának háttérszíne.","A görgetősáv csúszkájának háttérszíne, ha az egérkurzor fölötte van.","A görgetősáv csúszkájának háttérszíne, ha aktív.","A hosszú ideig tartó folyamatok esetén megjelenített folyamatjelző háttérszíne.","A szerkesztőablak háttérszíne.","A szerkesztőablak alapértelmezett előtérszíne.","A szerkesztőablak moduljainak háttérszíne, pl. a keresés/cserének.","A szerkesztőablak-modulok keretszíne. A szín csak akkor van használva, ha a modul beállítása alapján rendelkezik kerettel, és a színt nem írja felül a modul.","A szerkesztőablak-szakasz színe.","A kijelölt szöveg színe nagy kontrasztú téma esetén.","Az inaktív szerkesztőablakban található kijelölések színe.","A kijelöléssel megegyező tartalmú területek színe.","A keresés jelenlegi találatának színe.","A keresés további találatainak színe.","A keresést korlátozó terület színe.","Kiemelés azon szó alatt, amely fölött lebegő elem jelenik meg.","A szerkesztőablakban lebegő elemek háttérszíne.","A szerkesztőablakban lebegő elemek keretszíne.","Az aktív hivatkozások háttérszíne.","A beillesztett szövegek háttérszíne.","Az eltávolított szövegek háttérszíne.","A beillesztett szövegek körvonalának színe.","Az eltávolított szövegek körvonalának színe.","A helyi tartalom fejlécének háttérszíne sorok között megjelenített összeolvasztási konfliktusok esetén.","A helyi tartalom háttérszíne sorok között megjelenített összeolvasztási konfliktusok esetén.","A beérkező tartalom fejlécének háttérszíne sorok között megjelenített összeolvasztási konfliktusok esetén.","A beérkező tartalom háttérszíne sorok között megjelenített összeolvasztási konfliktusok esetén.","A közös ős tartalom fejlécének háttérszíne sorok között megjelenített összeolvasztási konfliktusok esetén. ","A közös ős tartalom háttérszíne sorok között megjelenített összeolvasztási konfliktusok esetén. ","A fejlécek és az elválasztó sáv keretszíne a sorok között megjelenített összeolvasztási konfliktusok esetén.","A helyi tartalom előtérszíne az áttekintő sávon összeolvasztási konfliktusok esetén.","A beérkező tartalom előtérszíne az áttekintő sávon összeolvasztási konfliktusok esetén.","A közös ős tartalom előtérszíne az áttekintő sávon összeolvasztási konfliktusok esetén. ","A keresési találatokat jelölő jelzések színe az áttekintősávon.","A kiemelt kijelöléseket jelölő jelzések színe az áttekintősávon."],"vs/platform/workspaces/common/workspaces":["Code-munkaterület","Névtelen (munkaterület)","{0} (munkaterület)","{0} (munkaterület)"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.hu.js.map