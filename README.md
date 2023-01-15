# Frontend-delen i kursen DT162G

Detta repository innehåller filerna till en frontend-applikation som har skapats i kursen DT162G. Applikationen heter Inköpslistan och är en digital handlingslista. Applikationen är skapad med frontend-ramverket Vue och CSS-ramverket Tailwind. Det är en SPA-application som använder Vues routing system.

## Webbtjänst
För att kunna använda denna frontend-applikation behöver du ha kontakt med REST-webbtjänsten: https://github.com/eemmmaf/dt162g_project_webservice.git 

## Instruktioner
* För att kunna använda denna applikation måste du skapa en användare. Att skapa en användare går endast att göra när du är inloggad eller genom att använda REST-webbtjänsten i exempelvis Thunder Client eller Postman. Besök länken till REST-webbtjänsten för en förklaring kring hur du använder denna REST-webbtjänst. 
* Innan du lägger till en vara i listan behöver du lägga till kategorier och mått. Att lägga till kategorier går att göra i både frontend-applikationen och direkt i REST-webbtjänsten. Mått måste läggas till via REST-webbtjänsten eftersom det inte finns någon möjlighet till det i frontend-applikationen. 

### Komma igång
1. Konsumera REST-webbtjänsten genom att besöka repot https://github.com/eemmmaf/dt162g_project_webservice.git 
2. Skapa en användare i REST-webbtjänsten
3. Lägg till en enhet i REST-webbtjänsten
4. Klona detta repo
5. Kör `` npm install `` i terminalen
6. Kör `` npm run dev `` i terminalen för att sätta igång servern
7. Logga in med användaren du skapat enligt steg 1-2

![image](https://user-images.githubusercontent.com/62517390/212564166-9ba7c774-1d14-4a40-87a5-385bc99572ad.png)

