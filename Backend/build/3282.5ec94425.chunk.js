"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[3282],{13282:(i,e,t)=>{t.r(e),t.d(e,{configurations:()=>o,default:()=>n,from:()=>a});const o="Ustawienia",a="z",n={"attribute.boolean":"Typ logiczny","attribute.boolean.description":"Tak lub nie, 1 lub 0, true lub false","attribute.component":"Komponent","attribute.component.description":"Grupa p\xF3l do powtarzania lub ponownego u\u017Cywania","attribute.date":"Data","attribute.date.description":"Wyb\xF3r daty z godzinami, minutami i sekundami","attribute.datetime":"Data i godzina","attribute.dynamiczone":"Strefa dynamiczna","attribute.dynamiczone.description":"Dynamicznie wybierz komponent podczas edycji tre\u015Bci","attribute.email":"Email","attribute.email.description":"Pole email ze sprawdzaniem poprawno\u015Bci","attribute.enumeration":"Wyliczenie","attribute.enumeration.description":"Lista warto\u015Bci do jednokrotnego wyboru","attribute.json":"JSON","attribute.json.description":"Dane w formacie JSON","attribute.media":"Media","attribute.media.description":"Pliki takie jak obrazki, filmy, itp.","attribute.null":" ","attribute.number":"Liczba","attribute.number.description":"Liczby (ca\u0142kowita, zmiennoprzecinkowa, dziesi\u0119tna)","attribute.password":"Has\u0142o","attribute.password.description":"Pole has\u0142a z szyfrowaniem","attribute.relation":"Relacja","attribute.relation.description":"Odno\u015Bnik do innego modelu","attribute.richtext":"Tekst sformatowany","attribute.richtext.description":"Edytor tekstu z mo\u017Cliwo\u015Bci\u0105 formatowania","attribute.text":"Tekst","attribute.text.description":"Kr\xF3tki lub d\u0142ugi tekst jak tytu\u0142 lub opis","attribute.time":"Czas","attribute.timestamp":"Znacznik czasu","attribute.uid":"UID","attribute.uid.description":"Unikalny identyfikator","button.attributes.add.another":"Dodaj kolejne pole","button.component.add":"Dodaj komponent","button.component.create":"Nowy komponent","button.model.create":"Nowa kolekcja","button.single-types.create":"Nowy pojedynczy typ","component.repeatable":"(powtarzalne)","components.SelectComponents.displayed-value":"{number, plural, =0 {# } one {# } other {# }} wybrano","components.componentSelect.no-component-available":"Doda\u0142e\u015B ju\u017C wszystkie swoje komponenty","components.componentSelect.no-component-available.with-search":"Brak element\xF3w pasuj\u0105cych do twojego wyszukiwania","components.componentSelect.value-component":"{number} wybrany komponent (wpisz, aby wyszuka\u0107 komponent)","components.componentSelect.value-components":"{number} wybranych komponent\xF3w",configurations:o,"contentType.apiId-plural.description":"API ID w liczbie mnogiej","contentType.apiId-plural.label":"API ID (liczba mnoga)","contentType.apiId-singular.description":"UID jest u\u017Cywane do generowania \u015Bcie\u017Cek API i tabel/kolekcji w bazie danych","contentType.apiId-singular.label":"API ID (liczba pojedyncza)","contentType.collectionName.description":"Przydatne, gdy nazwa typu zawarto\u015Bci i nazwa tabeli r\xF3\u017Cni\u0105 si\u0119","contentType.collectionName.label":"Nazwa kolekcji","contentType.displayName.label":"Nazwa","contentType.draftAndPublish.description":"Napisz szkic ka\u017Cdego wpisu przed publikacj\u0105","contentType.draftAndPublish.label":"System szkicu/publikacji","contentType.kind.change.warning":"W\u0142a\u015Bnie zmieni\u0142e\u015B rodzaj typu tre\u015Bci: API zostanie zresetowane (\u015Bcie\u017Cki, kontrolery i us\u0142ugi zostan\u0105 nadpisane).","error.attributeName.reserved-name":"Ta nazwa nie mo\u017Ce by\u0107 u\u017Cywana w tym typie tre\u015Bci, poniewa\u017C mo\u017Ce uszkodzi\u0107 inne funkcje","error.contentType.pluralName-used":"Ta warto\u015B\u0107 nie mo\u017Ce by\u0107 taka sama jak pojedyncza","error.contentType.singularName-used":"Ta warto\u015B\u0107 nie mo\u017Ce by\u0107 taka sama jak mnoga","error.contentTypeName.reserved-name":"Ta nazwa nie mo\u017Ce by\u0107 u\u017Cywana w tym typie tre\u015Bci, poniewa\u017C mo\u017Ce uszkodzi\u0107 inne funkcje","error.validation.enum-duplicate":"Zduplikowane warto\u015Bci nie s\u0105 dozwolone","error.validation.enum-empty-string":"Puste pola nie s\u0105 dozwolone","error.validation.enum-number":"Warto\u015B\u0107 nie mo\u017Ce zaczyna\u0107 si\u0119 liczb\u0105","error.validation.minSupMax":"Nie mo\u017Ce by\u0107 wy\u017Cszy","error.validation.positive":"Musi by\u0107 liczb\u0105 dodatni\u0105","error.validation.regex":"Regex jest niepoprawny","error.validation.relation.targetAttribute-taken":"Ta nazwa ju\u017C istnieje","form.attribute.component.option.add":"Dodaj komponent","form.attribute.component.option.create":"Utw\xF3rz nowy komponent","form.attribute.component.option.create.description":"Komponent jest wsp\xF3\u0142u\u017Cytkowany przez typy i komponenty, b\u0119dzie dost\u0119pny wsz\u0119dzie.","form.attribute.component.option.repeatable":"Powtarzalny komponent","form.attribute.component.option.repeatable.description":"Najlepsze dla wielu wyst\u0105pie\u0144 (tablicy) np. sk\u0142adnik\xF3w, metatag\xF3w itp.","form.attribute.component.option.reuse-existing":"U\u017Cyj istniej\u0105cego komponentu","form.attribute.component.option.reuse-existing.description":"Ponownie u\u017Cyj utworzonego ju\u017C komponentu, aby zachowa\u0107 sp\xF3jno\u015B\u0107 danych mi\u0119dzy typami tre\u015Bci.","form.attribute.component.option.single":"Pojedynczy komponent","form.attribute.component.option.single.description":"Najlepsze do grupowania p\xF3l takich jak adres, g\u0142\xF3wne informacje itp.","form.attribute.item.customColumnName":"W\u0142asne nazwy tabel","form.attribute.item.customColumnName.description":"Jest to przydatne do zmiany nazwy tabel bazy danych w bardziej wszechstronnym formacie odpowiedzi API","form.attribute.item.date.type.date":"data (np: 01/01/{currentYear})","form.attribute.item.date.type.datetime":"data i czas (np: 01/01/{currentYear} 00:00 AM)","form.attribute.item.date.type.time":"czas (np: 00:00 AM)","form.attribute.item.defineRelation.fieldName":"Nazwa pola","form.attribute.item.enumeration.graphql":"Nadpisanie nazwy dla GraphQL","form.attribute.item.enumeration.graphql.description":"Pozwalaj na nadpisanie domy\u015Blnie wygenerowanej nazwy dla GraphQL.","form.attribute.item.enumeration.placeholder":`Przyk\u0142ad:
rano
po\u0142udnie
wiecz\xF3r`,"form.attribute.item.enumeration.rules":"Warto\u015Bci (ka\u017Cda w osobnej linii)","form.attribute.item.maximum":"Maksymalna warto\u015B\u0107","form.attribute.item.maximumLength":"Maksymalna d\u0142ugo\u015B\u0107","form.attribute.item.minimum":"Minimalna warto\u015B\u0107","form.attribute.item.minimumLength":"Minimalna d\u0142ugo\u015B\u0107","form.attribute.item.number.type":"Format liczby","form.attribute.item.number.type.biginteger":"du\u017Ca liczba ca\u0142kowita (np. 123456789)","form.attribute.item.number.type.decimal":"dziesi\u0119tna (np: 2.22)","form.attribute.item.number.type.float":"zmiennoprzecinkowa (np: 3.33333333)","form.attribute.item.number.type.integer":"ca\u0142kowita (np: 10)","form.attribute.item.privateField":"Pole prywatne","form.attribute.item.privateField.description":"To pole nie pojawi si\u0119 w odpowiedzi API","form.attribute.item.requiredField":"Wymagany","form.attribute.item.requiredField.description":"Nie b\u0119dziesz w stanie stworzy\u0107 wpisu je\u017Celi atrybut b\u0119dzie pusty","form.attribute.item.text.regex":"RegExp","form.attribute.item.text.regex.description":"Wyra\u017Cenie regularne","form.attribute.item.uniqueField":"Pole unikalne","form.attribute.item.uniqueField.description":"Nie b\u0119dziesz w stanie stworzy\u0107 wpisu je\u017Celi b\u0119dzie istnia\u0142 element z tak\u0105 sam\u0105 zawarto\u015Bci\u0105","form.attribute.media.allowed-types":"Wybierz dozwolone media","form.attribute.media.allowed-types.option-files":"Pliki","form.attribute.media.allowed-types.option-images":"Obrazki","form.attribute.media.allowed-types.option-videos":"Filmy","form.attribute.media.option.multiple":"Wiele medi\xF3w","form.attribute.media.option.multiple.description":"Najlepsze dla slajder\xF3w, karuzeli lub pobierania wielu plik\xF3w","form.attribute.media.option.single":"Pojedyncze media","form.attribute.media.option.single.description":"Najlepsze dla awatara, zdj\u0119cia profilowego lub ok\u0142adki","form.attribute.settings.default":"Domy\u015Blna warto\u015B\u0107","form.attribute.text.option.long-text":"D\u0142ugi tekst","form.attribute.text.option.long-text.description":"Najlepszy dla opis\xF3w, biografii. Dok\u0142adne wyszukiwanie jest wy\u0142\u0105czone.","form.attribute.text.option.short-text":"Kr\xF3tki tekst","form.attribute.text.option.short-text.description":"Najlepszy dla tytu\u0142\xF3w, nazw, link\xF3w (URL). Umo\u017Cliwia tak\u017Ce dok\u0142adne wyszukiwanie dla pola.","form.button.add-components-to-dynamiczone":"Dodaj komponenty do strefy","form.button.add-field":"Dodaj kolejne pole","form.button.add-first-field-to-created-component":"Dodaj pierwsze pole do komponentu","form.button.add.field.to.collectionType":"Dodaj kolejne pole","form.button.add.field.to.component":"Dodaj kolejne pole","form.button.add.field.to.contentType":"Dodaj kolejne pole","form.button.add.field.to.singleType":"Dodaj kolejne pole","form.button.cancel":"Anuluj","form.button.collection-type.description":"Najlepsze rozwi\u0105zanie dla wielu wyst\u0105pie\u0144 typu artyku\u0142y, produkty, komentarze itd.","form.button.collection-type.name":"Kolekcja","form.button.configure-component":"Skonfiguruj komponent","form.button.configure-view":"Skonfiguruj widok","form.button.select-component":"Wybierz komponent","form.button.single-type.description":"Najlepsze rozwi\u0105zanie dla pojedynczych wyst\u0105pie\u0144 typu strona g\u0142\xF3wna, strona o nas itd","form.button.single-type.name":"Pojedynczy typ",from:a,"listView.headerLayout.description":"Stw\xF3rz struktur\u0119 danych dla twoich tre\u015Bci","menu.section.components.name":"Komponenty","menu.section.models.name":"Kolekcje","menu.section.single-types.name":"Pojedyncze typy","modalForm.attribute.form.base.name.description":"Spacja nie jest dozwolona dla nazwy","modalForm.attribute.form.base.name.placeholder":"np. slug, seoUrl, canonicalUrl","modalForm.attribute.target-field":"Do\u0142\u0105czone pole","modalForm.attributes.select-component":"Wybierz komponent","modalForm.attributes.select-components":"Wybierz komponenty","modalForm.collectionType.header-create":"Nowa kolekcja","modalForm.component.header-create":"Nowy komponent","modalForm.components.create-component.category.label":"Wybierz kategori\u0119 lub wprowad\u017A nazw\u0119, aby utworzy\u0107 now\u0105","modalForm.components.icon.label":"Ikona","modalForm.editCategory.base.name.description":"Spacja nie jest dozwolona dla nazwy kategorii","modalForm.header-edit":"Edytuj {name}","modalForm.header.categories":"Kategorie","modalForm.header.back":"Z powrotem","modalForm.singleType.header-create":"Nowy pojedynczy typ","modalForm.sub-header.addComponentToDynamicZone":"Dodaj nowy komponent do strefy dynamicznej","modalForm.sub-header.attribute.create":"Dodaj nowe pole {type}","modalForm.sub-header.attribute.create.step":"Dodaj nowy komponent ({step}/2)","modalForm.sub-header.attribute.edit":"Edytuj {name}","modalForm.sub-header.chooseAttribute.collectionType":"Wybierz pole dla kolekcji","modalForm.sub-header.chooseAttribute.component":"Wybierz pole dla komponentu","modalForm.sub-header.chooseAttribute.singleType":"Wybierz pole dla pojedynczego typu","modelPage.attribute.relation-polymorphic":"Relacja","modelPage.attribute.relationWith":"Relacja z","notification.error.dynamiczone-min.validation":"Co najmniej jeden komponent jest wymagany","notification.info.autoreaload-disable":"Funkcja autoReload jest wymagana by u\u017Cy\u0107 tego pluginu. Uruchom serwer u\u017Cywaj\u0105c `strapi develop`","notification.info.creating.notSaved":"Zapisz swoj\u0105 prac\u0119 przed utworzeniem nowego typu tre\u015Bci lub komponentu","plugin.description.long":"Modeluj struktur\u0119 danych swojego API. Tw\xF3rz atrybuty i relacje w minut\u0119. Pliki s\u0105 automatycznie tworzone i aktualizowane w twoim projekcie.","plugin.description.short":"Modeluj struktur\u0119 danych swojego API.","plugin.name":"Kreator typu tre\u015Bci","popUpForm.navContainer.advanced":"Zaawansowane","popUpForm.navContainer.base":"Podstawowe","popUpWarning.bodyMessage.cancel-modifications":"Czy na pewno chcesz anulowa\u0107 swoje zmiany?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Czy na pewno chcesz anulowa\u0107 swoje zmiany? Niekt\xF3re komponenty zosta\u0142y utworzone lub zmodyfikowane ...","popUpWarning.bodyMessage.category.delete":"Czy na pewno chcesz usun\u0105\u0107 t\u0119 kategori\u0119? Wszystkie komponenty r\xF3wnie\u017C zostan\u0105 usuni\u0119te.","popUpWarning.bodyMessage.component.delete":"Czy na pewno chcesz usun\u0105\u0107 ten komponent?","popUpWarning.bodyMessage.contentType.delete":"Czy na pewno chcesz usun\u0105\u0107 t\u0119 kolekcj\u0119?","popUpWarning.draft-publish.button.confirm":"Tak, wy\u0142\u0105cz","popUpWarning.draft-publish.message":"Je\u015Bli wy\u0142\u0105czysz system szkicu/publikacji, wszystkie twoje szkice zostan\u0105 usuni\u0119te.","popUpWarning.draft-publish.second-message":"Czy na pewno chcesz to wy\u0142\u0105czy\u0107?","prompt.unsaved":"Jeste\u015B pewny, \u017Ce chcesz wyj\u015B\u0107? Wszystkie twoje zmiany zostan\u0105 utracone.","relation.attributeName.placeholder":"Np: autor, kategoria, tag","relation.manyToMany":"zawiera i nale\u017Cy do wielu","relation.manyToOne":"zawiera wiele","relation.manyWay":"ma wiele","relation.oneToMany":"nale\u017Cy do wielu","relation.oneToOne":"zawiera i nale\u017Cy do","relation.oneWay":"zawiera","table.button.no-fields":"Dodaj nowe pole","table.content.create-first-content-type":"Stw\xF3rz pierwszy typ tre\u015Bci","table.content.no-fields.collection-type":"Dodaj pierwsze pole do tego typu tre\u015Bci","table.content.no-fields.component":"Dodaj pierwsze pole do tego komponentu"}}}]);
