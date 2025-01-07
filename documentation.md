# Dokumentace k projektu

---

## Popis aplikace a jejích funkcí

**Název aplikace:**  **News Site** 

**Účel aplikace:** **News Site**  webová aplikace pro správu a prohlížení novin a uživatelských účtů. Cílem aplikace je nabídnout uživatelům jednoduché a intuitivní rozhraní pro publikování, úpravy a prohlížení novin.

---

# Použité technologie v projektu

## **Frontend**
1. **`React.js`**
   - Knihovna pro tvorbu uživatelského rozhraní.
   

2. **`React Router`**
   - Pro správu směrování v aplikaci a navigaci mezi stránkami.


3. **`Redux Toolkit`**
   - Pro správu stavu aplikace. Zajišťuje centralizovanou správu dat.


4. **`SCSS`**
   - Pro lepší organizaci a rozšířené možnosti stylování aplikace.


5. **`Bootstrap`**
   - CSS framework pro rychlé stylování a tvorbu responzivního designu. Používá se k usnadnění návrhu komponent.


7. **`Vite.js`**
   - Nástroj pro rychlou vývojovou konfiguraci a optimalizaci aplikace.


8. **`Axios`**
   - Pro práci s HTTP požadavky a komunikaci s API.

---

## **Backend**
**`JSON Server`** 

Slouží jako mock server pro testování API požadavků. Data jsou uložena v souboru [db.json](db.json).

---


## **Knihovny a další nástroje**
**`React Icons`** 

Sada ikon používaná v projektu.


---

##  Hlavní funkce aplikace v závislosti na roli:

1. **`Uživatel není přihlášen`**


   - Povolené akce:
   Prohlížení článků.
   Přístup na stránku přihlášení.


  - Dostupné stránky:
   `HomePage`
  `LogInPage`
  `NewsDetailsPage`

---

2. **_`READER`_**


   - Povolené akce:
   Prohlížení článků.
   Úprava vlastního uživatelského účtu (změna hesla, avataru apod.).


  - Dostupné stránky:
  `HomePage`
  `NewsDetailsPage`
  `UserAccountPage`

---

3. `NEWS-CREATOR`


   - Povolené akce:
   Prohlížení článků.
   Vytváření nových článků.
   Editace a mazání vlastních článků.
   Úprava vlastního uživatelského účtu.


   - Dostupné stránky:
   `HomePage`
   `NewsDetailsPage`
   `UserAccountPage`
   `CreateNewsPage`
   `EditNewsPage`

 ---    

4`ADMIN`
   - Povolené akce:
   Plný přístup ke správě článků a uživatelů.
   Správa  článků (mazání).
   Prohlížení seznamu všech uživatelů a filtrování podle rolí.
   Správa uživatelských účtů (vytváření nových uživatelů).


   - Dostupné stránky:
   `HomePage`
   `NewsDetailsPage`
   `UserAccountPage`
   `AllUsersPage`
   `CreateNewUserPage`

---

# Popis struktury projektu

- `news-site/` - hlavní adresář projektu, který obsahuje soubory a složky související s vývojem a provozem aplikace.

---

### Kořenové soubory a složky:

- `README.md` - Dokumentace projektu popisující instalaci a spuštění.


- `db.json` - Soubor, který se používá jako simulace databáze pomocí serveru JSON.


- `documentation.md` - Další dokumentace podrobnější informace o kódu.


- `eslint.config.js` - Konfigurace `ESLint` pro ověřování kódu a zajištění kvality.


- `index.html` - Hlavní soubor `HTML` používaný k načtení aplikace.


- `package.json` - Seznam závislostí projektu, skriptů a metainformací.


- `vite.config.js` - Konfigurace `Vite` pro spuštění projektu.


- `public/` - Složka pro statické soubory, jako jsou obrázky, písma a další prostředky. (obsahuje logo webu [web-logo.png](public/web-logo.png))
  


   <img src="public/web-logo.png" width="100">


- `src/` je hlavní zdroj kódu aplikace.

---

# Složka `src/`

- [App.jsx](src/App.jsx) — Hlavní komponenta, která integruje všechny stránky a logiku aplikace.


- [index.jsx](src/index.jsx) — Vstupní bod aplikace, kde se vykresluje komponenta `App.jsx`


---

# Složka `Components/` - komponenty aplikace rozdělené podle stránek a funkcí.

---

**`all-news-page/`** - Komponenty související s all-news-page: <br>

- [MainAllNews.jsx](src/components/all-news-page/MainAllNews.jsx)- Hlavní komponenta stránky. 


- [MainAllNewsCards.jsx](src/components/all-news-page/MainAllNewsCards.jsx) - Komponenta pro zobrazování karet zpráv. 


- [MainAllNewsFilterButtons.jsx](src/components/all-news-page/MainAllNewsFilterButtons.jsx) - Filtrační tlačítka pro třídění zpráv.

---

**`all-users-page/`** - Komponenty pro stránku se seznamem uživatelů:

- [MainAllUsers.jsx](src/components/all-users-page/MainAllUsers.jsx) - Hlavní komponenta pro stránku.


- [MainAllUsersCard.jsx](src/components/all-users-page/MainAllUsersCard.jsx) - Karta uživatele.


- [MainAllUsersFilterButtons.jsx](src/components/all-users-page/MainAllUsersFilterButtons.jsx) - Tlačítka pro filtrování uživatelů.

---

**`create-new-user-page/`** - Komponenty pro vytvoření nového uživatele:

- [MainCreateNewUser.jsx](src/components/create-new-user-page/MainCreateNewUser.jsx) - Komponenta hlavní stránky.<br>



- [MainCreateNewUserForm.jsx](src/components/create-new-user-page/MainCreateNewUserForm.jsx) - Formulář pro zadávání údajů nového uživatele.

---

**`create-news-page/`** - Komponenty pro vytváření novinek:

- [MainCreateForm.jsx](src/components/create-news-page/MainCreateForm.jsx) - Formulář pro vytvoření nové zprávy.


- [MainCreateNews.jsx](src/components/create-news-page/MainCreateNews.jsx) - Hlavní komponenta stránky.

---

**`edit-news-page/`** - Komponenty pro editaci novinek:

- [MainEditNews.jsx](src/components/edit-news-page/MainEditNews.jsx) - Hlavní komponenta editační stránky.


- [MainEditNewsForm.jsx](src/components/edit-news-page/MainEditNewsForm.jsx) - Formulář pro editaci novinek.

---

**`globals/`** - Globální komponenty, které se používají na všech stránkách:

- **`Footer/`** - Komponenta zápatí aplikace.
  - [Footer.jsx](src/components/globals/Footer/Footer.jsx)


- **`Header/`** - Komponenta záhlaví aplikace s různými prvky: navigace, tlačítko profilu, vyhledávání.

  - [Header.jsx](src/components/globals/Header/Header.jsx) - Hlavní komponenta záhlaví aplikace, která zajišťuje zobrazení a správu všech prvků v záhlaví.

  - [HeaderDefaultNavLinks.jsx](src/components/globals/Header/HeaderDefaultNavLinks.jsx) - Komponenta pro výchozí navigační odkazy v záhlaví.

  - [HeaderNavbarBrand.jsx](src/components/globals/Header/HeaderNavbarBrand.jsx) - Komponenta pro zobrazení loga v záhlaví.

  - [LoginProfileButton.jsx](src/components/globals/Header/LoginProfileButton.jsx) - Tlačítko pro přihlášení nebo přístup k profilu uživatele.

  - [SearchInputForm.jsx](src/components/globals/Header/SearchInputForm.jsx) - Komponenta pro vyhledávací pole v záhlaví aplikace.

---

**`home-page/`** - Komponenty hlavní stránky:

- [MainHome.jsx](src/components/home-page/MainHome.jsx) - Komponenta hlavní stránky.


- [MainHomeNewsCards.jsx](src/components/home-page/MainHomeNewsCards.jsx) - Karty novinek na domovské stránce.


- [MainHomeNewsSlider.jsx](src/components/home-page/MainHomeNewsSlider.jsx) - Posuvník novinek.


- [NewsHomeCard.jsx](src/components/home-page/NewsHomeCard.jsx) - Samostatná karta novinek.


- [SliderIndicator.jsx](src/components/home-page/SliderIndicator.jsx) - Indikátor posuvníku.


- [SliderItem.jsx](src/components/home-page/SliderItem.jsx) - Položky posuvníku.

---


**`login-page/`** - Komponenty přihlašovací stránky:

- [LoginMain.jsx](src/components/login-page/LoginMain.jsx) - Hlavní komponenta přihlašovací stránky.

--- 

**`my-account-page/`** - Komponenty stránky profilu:

- [MainMyAccount.jsx](src/components/my-account-page/MainMyAccount.jsx) - Hlavní komponenta profilové stránky.

---

**`news-details-page/`** - Komponenty stránky s podrobnostmi o novinkách:

- [NewsDetailsMain.jsx](src/components/news-details-page/NewsDetailsMain.jsx) - Hlavní komponenta stránky.

---

# Složka `/hooks` 
vlastní hooky pro každou stranku



## **[useAccount.js](src/hooks/useAccount.js)**
- Hook pro správu údajů o uživatelském účtu.
- Používá se k načítání, aktualizaci nebo mazání dat o aktuálním uživateli.
- Řeší logiku související s uživatelským profilem (např. aktualizace avataru nebo jména).

---

## **[useAllNewsPage.js](src/hooks/useAllNewsPage.js)**
- Hook pro práci se stránkou, která zobrazuje všechny články.
- Zodpovídá za API požadavky k načtení seznamu článků.
- Podporuje filtrování, třídění a správu stavu zobrazených článků.

---

## **[useAllUsers.js](src/hooks/useAllUsers.js)**
- Hook pro správu seznamu uživatelů.
- Používá se k načítání všech uživatelů (např. pro administrátory).
- Zajišťuje filtrování, třídění a mazání uživatelských účtů.

---

## **[useCreateNews.js](src/hooks/useCreateNews.js)**
- Hook pro vytvoření nového článku.
- Obsahuje logiku a stavy potřebné pro přidání článku (např. odesílání formuláře a validace).
- Podporuje například náhled článku před uložením.

---

## **[useCreateUser.js](src/hooks/useCreateUser.js)**
- Hook pro vytvoření nového uživatele.
- Řeší validaci dat a odesílání formuláře na server při registraci nového uživatele.
- Obsahuje logiku pro zachycení chyb, například pokud je e-mail již používán.

---

## **[useEditNews.js](src/hooks/useEditNews.js)**
- Hook pro úpravu existujícího článku.
- Načítá data článku, která je třeba upravit, a umožňuje aktualizaci jeho obsahu.
- Řeší odesílání aktualizovaných dat na server.

---

## **[useLogin.js](src/hooks/useLogin.js)**
- Hook pro správu přihlašování uživatele.
- Udržuje stav přihlášení: ověřuje přihlašovací údaje a aktualizuje token.
- Zpracovává také chyby při přihlášení.

---

## **[useMainHome.js](src/hooks/useMainHome.js)**
- Hook pro logiku na hlavní stránce aplikace.
- Zajišťuje správu prvků jako slider nebo seznam populárních článků.
- Podporuje filtrování obsahu na hlavní stránce (např. zobrazení nejčtenějších článků).

---

## **[useNewsDetail.js](src/hooks/useNewsDetail.js)**
- Hook pro stránku s podrobnostmi článku.
- Načítá podrobné informace o vybraném článku a spravuje jejich stav.

---

# Složka `/pages` 
slouží k uchování hlavních stránek aplikace. Každý soubor ve složce představuje jednu stránku (route) aplikace, která je odpovědná za konkrétní funkčnost nebo zobrazení obsahu.

## **[AllNewsPage.jsx](src/pages/AllNewsPage.jsx)**
- Stránka pro zobrazení všech článků.


- Zajišťuje načítání a zobrazení seznamu článků pomocí filtrů a možností třídění.


- Obsahuje prvky jako seznam článků a tlačítka filtrů.

---

## **[AllUsersPage.jsx](src/pages/AllUsersPage.jsx)**
- Stránka určená pro administrátory ke správě všech uživatelů.


- Umožňuje zobrazit seznam uživatelů s možností filtrování, třídění a mazání účtů.


- Využívá komponenty pro zobrazení uživatelských karet.

---

## **[CreateNewsPage.jsx](src/pages/CreateNewsPage.jsx)**
- Stránka pro vytvoření nového článku.


- Obsahuje formulář pro zadání detailů článku (např. název, obsah, obrázky).


---

## **[CreateNewUserPage.jsx](src/pages/CreateNewUserPage.jsx)**
- Stránka pro registraci nového uživatele.


- Obsahuje formulář pro vytvoření nového uživatelského účtu.


---

## **[EditNewsPage.jsx](src/pages/EditNewsPage.jsx)**
- Stránka pro úpravu existujícího článku.


- Načítá aktuální data článku, která je možné editovat.


- Obsahuje formulář pro aktualizaci obsahu článku a jeho odeslání.

---

## **[HomePage.jsx](src/pages/HomePage.jsx)**
- Hlavní stránka aplikace.


- Zobrazuje populární články, nejnovější zprávy a prvky jako slider.


- Slouží jako výchozí bod pro uživatele, kteří chtějí prozkoumat obsah aplikace.

---

## **[LogInPage.jsx](src/pages/LogInPage.jsx)**
- Stránka pro přihlášení uživatele.


- Obsahuje formulář pro zadání přihlašovacích údajů.


- Zpracovává chyby při přihlášení a přesměruje úspěšně přihlášené uživatele.

---

## **[NewsDetailsPage.jsx](src/pages/NewsDetailsPage.jsx)**
- Stránka s podrobnými informacemi o konkrétním článku.


- Zobrazuje kompletní obsah článku a další relevantní informace.


---

## **[UserAccountPage.jsx](src/pages/UserAccountPage.jsx)**
- Stránka s detailem účtu přihlášeného uživatele.


- Umožňuje uživatelům spravovat své údaje (např. avatar, e-mail, heslo).


---

# Složka `/router`

Složka `/router` obsahuje logiku a implementaci ochrany jednotlivých cest (routes) v aplikaci. Jejím hlavním úkolem je zajistit, že přístup k určitým stránkám nebo sekcím aplikace je řízen podle rolí nebo stavu přihlášení uživatele.



## [ProtectedRoutes.jsx](src/router/ProtectedRoutes.jsx)

Komponenta [ProtectedRoutes.jsx](src/router/ProtectedRoutes.jsx) je zodpovědná za ochranu jednotlivých cest v aplikaci. Umožňuje přístup pouze uživatelům, kteří splňují specifické podmínky, například:


- Přihlášení uživatele.


- Specifická role uživatele (např. administrátor, editor, čtenář).

### Jak funguje:
1. **Ověření uživatelského stavu:**
   Komponenta kontroluje, zda je uživatel přihlášen, a zda má požadovanou roli.


2. **Přesměrování nepovolených uživatelů:**
   Pokud uživatel nesplňuje požadavky (např. není přihlášen nebo nemá oprávnění), je přesměrován na stránku s přihlášením nebo jinou veřejně dostupnou stránku.


3. **Zajištění bezpečnosti aplikace:**
   Brání nepovoleným uživatelům v přístupu na chráněné stránky a manipulaci s citlivými daty.

---

# Složka `/services`

 obsahuje soubory, které zajišťují komunikaci mezi frontendem a backendem (JSON server).

---

### **[admin-service.js](src/services/admin-service.js)**

- **Účel:**
  Zpracovává operace související s administrátorskými funkcemi.


- **Funkce:**
   - Správa uživatelů (mazání účtů).
   - Monitorování aktivit uživatelů.

---

### **[auth-service.js](src/services/auth-service.js)**

- **Účel:**
  Spravuje autentizaci uživatelů.


- **Funkce:**

   - Přihlašování uživatelů.

  - Odhlášení uživatelů.

---

### **[homePage-service.js](src/services/homePage-service.js)**

- **Účel:**
  Poskytuje data pro zobrazení na hlavní stránce.


- **Funkce:**

   - Načítání seznamu novinek nebo článků.

---

### **[newsCreator-service.js](src/services/newsCreator-service.js)**
- **Účel:**
  Správa funkcí pro vytváření nových článků.


- **Funkce:**
   - Ukládání nových článků do databáze.
   - Validace obsahu článku.

---

### **[newsDetails-service.js](src/services/newsDetails-service.js)**

- **Účel:**
  Poskytuje detaily konkrétního článku.


- **Funkce:**
   - Načítání obsahu článku podle jeho ID.

---

### **[userData-service.js](src/services/userData-service.js)**
- **Účel:**
  Správa dat souvisejících s uživatelskými účty.


- **Funkce:**
   - Načítání údajů o uživateli.
   - Aktualizace údajů uživatele.

---

# Složka `/store`
 obsahuje soubory potřebné pro správu stavu aplikace pomocí knihovny `Redux Toolkit`. Zajišťuje centralizované řízení stavu, který je sdílen napříč různými komponentami aplikace.

---

### **[authSlice.js](src/store/authSlice.js)**

- **Účel:**
  Správa stavu autentizace uživatele.


- **Funkce:**
   - Obsahuje tzv. *slice* (část stavu) pro autentizaci.
   - Definuje počáteční stav (např. informace o uživateli).
   - Obsahuje Redux reducery a akce pro (Přihlášení uživatele a Odhlášení uživatele)

---

### **[store.js](src/store/store.js)**
- **Účel:**
  Hlavní konfigurace Redux Store pro aplikaci.


- **Funkce:**
   - Kombinuje všechny *slices* do jednoho centrálního úložiště.
   - Zajišťuje propojení s Redux DevTools pro ladění.

---

# Složka `/styles`

obsahuje všechny styly definované pomocí `SCSS` pro různé stránky a komponenty aplikace.

---

## Obsah složky:

- **[all-news-page.scss](src/styles/all-news-page.scss)** – Styly specifické pro stránku se všemi novinkami.


- **[all-users-page.scss](src/styles/all-users-page.scss)** – Styly pro stránku zobrazující seznam uživatelů.


- **[edit-news-page.scss](src/styles/edit-news-page.scss)** – Styly pro stránku určenou k úpravě novinek.


- **[footer.scss](src/styles/footer.scss)** – Styly pro komponentu zápatí aplikace.


- **[globals.scss](src/styles/globals.scss)** – Globální styly používané napříč celou aplikací.


- **[header.scss](src/styles/header.scss)** – Styly pro komponentu záhlaví.


- **[home-page.scss](src/styles/home-page.scss)** – Styly specifické pro domovskou stránku.


- **[login-page.scss](src/styles/login-page.scss)** – Styly pro přihlašovací stránku.


- **[news-details-page.scss](src/styles/news-details-page.scss)** – Styly pro stránku s podrobnostmi o novince.


- **[user-account-page.scss](src/styles/user-account-page.scss)** – Styly pro stránku uživatelského účtu.

---







     
     


