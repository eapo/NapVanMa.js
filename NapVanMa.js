console.log("szerző: Nyers Csaba, frissítette és kiegészítette: eaposztrof");

function initArray() {
	this.length = initArray.arguments.length;
	for (var i = 0; i < this.length; i++) this[i + 1] = initArray.arguments[i];
}
function leapyear(year) {
	return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
/* Hónap névnapjainak meghatározása */
function havinev(ev, ho, nap) {
	// TODO https://mai-nevnap.hu/n%C3%A9vnap-keres%C5%91
	if (ho == 1) {
		var napok = new initArray(
			"Újév",
			"Ábel, <I>Turán</I>",
			"Benjámin, <I>Nimród</I>",
			"Titusz, <I>Hunor</I>",
			"Simon, <I>Enikő</I>",
			"Boldizsár, <I>Magyar</I>",
			"Attila, Ramóna, <I>Atilla</I>",
			"Gyöngyvér, <I>Szörény</I>",
			"Marcell, <I>Csöpi</I>",
			"Melánia, <I>Szörényke</I>",
			"Ágota, <I>Alpár</I>",
			"Ernő, <I>Mizse</I>",
			"Veronika, <I>Vidor</I>",
			"Bódog",
			"Lóránt, <I>Ugrin</I>",
			"Gusztáv, <I>Bendegúz</I>",
			"Antal, <I>Edömér</I>",
			"Piroska",
			"Sára, Márió, <I>Dsingiz</I>",
			"Fábián, <I>Balambér</I>",
			"Ágnes, <I>Regehű</I>",
			"Vince, <I>Hunorka</I>",
			"Rajmund, <I>Alirán</I>",
			"Timót, <I>Magyarka</I>",
			"Pál, <I>Úrkund</I>",
			"Vanda, <I>Aba</I>",
			"Angelika, <I>Ur-Engur</I>",
			"Károly, <I>Zalán</I>",
			"Adél, <I>Irnek</I>",
			"Martina, <I>Jászó</I>",
			"Marcella, <I>Anikó</I>",
			""
		);
	}
	if (ho == 2)
		if (!leapyear(ev)) {
			var napok = new initArray(
				"Ignác, <I>Csanád</I>",
				"Karolina, <I>Emese</I>",
				"Balázs, <I>Kund</I>",
				"Ráhel, <I>Lelle</I>",
				"Ágota, <I>Taksony</I>",
				"Dorottya, <I>Gidula</I>",
				"Tódor, <I>Izsép</I>",
				"Aranka, <I>Tarcal</I>",
				"Abigél",
				"Elvira, <I>Ügek</I>",
				"Marietta, <I>Zete</I>",
				"Lívia, <I>Ara</I>",
				"Ella, <I>Kadosa</I>",
				"Valentin, <I>Levente</I>",
				"Kolos, <I>Karcsa</I>",
				"Julianna, <I>Marót</I>",
				"Donát, <I>Zille</I>",
				"Bernadett, <I>Nemere</I>",
				"Zsuzsanna, <I>Farsang</I>",
				"Aladár, <I>Álmos</I>",
				"Eleonóra, <I>Réva</I>",
				"Gerzson, <I>Küne</I>",
				"Alfréd, <I>Gyopár</I>",
				"Mátyás, <I>Solt</I>",
				"Géza, <I>Gejza</I>",
				"Edina, <I>Menyétke</I>",
				"Ákos, <I>Bátor</I>",
				"Elemér",
				"",
				""
			);
		} else {
			var napok = new initArray(
				"Ignác, <I>Csanád</I>",
				"Karolina, <I>Emese</I>",
				"Balázs, <I>Kund</I>",
				"Ráhel, <I>Lelle</I>",
				"Ágota, <I>Taksony</I>",
				"Dorottya, <I>Gidula</I>",
				"Rómeó, <I>Izsép</I>",
				"Aranka, <I>Tarcal</I>",
				"Abigél",
				"Elvira, <I>Ügek</I>",
				"Marietta, <I>Zete</I>",
				"Lívia, <I>Ara</I>",
				"Ella, <I>Kadosa</I>",
				"Valentin, <I>Levente</I>",
				"Kolos, <I>Karcsa</I>",
				"Julianna, <I>Marót</I>",
				"Donát, <I>Zille</I>",
				"Bernadett, <I>Nemere</I>",
				"Zsuzsanna, <I>Farsang</I>",
				"Aladár, <I>Álmos</I>",
				"Eleonóra, <I>Réva</I>",
				"Gerzson, <I>Küne</I>",
				"Alfréd, <I>Gyopár</I>",
				"Szőkőnap, <I>Solt</I>",
				"Mátyás, <I>Gejza</I>",
				"Géza, <I>Menyétke</I>",
				"Edina, <I>Ákos</I>",
				"Ákos, Bátor, <I>Elemér</I>",
				"Elemér, <I>Szökőnap</I>",
				"",
				""
			);
		}
	if (ho == 3) {
		var napok = new initArray(
			"Albin, <I>Acsád</I>",
			"Lujza, <I>Turda</I>",
			"Kornélia, <I>Iboly, Ibolya</I>",
			"Kázmér, <I>Hurbota</I>",
			"Adorján, <I>Adorján</I>",
			"Leonóra, <I>Nyestike</I>",
			"Tamás, <I>Baján</I>",
			"Zoltán, <I>Zoltán</I>",
			"Franciska, <I>Csepel</I>",
			"Ildikó, <I>Seruzád</I>",
			"Szilárd, <I>Aladár</I>",
			"Gergely, <I>Dengizék</I>",
			"Krisztián, <I>Szende</I>",
			"Matild, <I>Kökényes</I>",
			"Kristóf",
			"Henrietta, <I>Ellák</I>",
			"Gertrúd, <I>Gyarmat</I>",
			"Sándor, <I>Kászon</I>",
			"József, <I>Botond</I>",
			"Klaudia, <I>Csilla</I>",
			"Benedek, <I>Tavaszünnep</I>",
			"Beáta, <I>Horka</I>",
			"Emőke, <I>Lengő</I>",
			"Gábor, <I>Gabilla, Jutas</I>",
			"Irén, <I>Gyümölcsoltó Boldogasszony</I>",
			"Emánuel, <I>Iszla</I>",
			"Hajnalka, <I>Hajnalka</I>",
			"Gedeon, <I>Keve</I>",
			"Auguszta, <I>Laborc</I>",
			"Zalán, <I>Dalamér</I>",
			"Árpád, <I>Árpád</I>",
			""
		);
	}
	if (ho == 4) {
		var napok = new initArray(
			"Hugó, <I>Katul</I>",
			"Áron, <I>Ond</I>",
			"Richárd, <I>Gyöngyvirág</I>",
			"Izidor, <I>Pós</I>",
			"Vince, <I>Szilamér</I>",
			"Vilmos, <I>Burtáj</I>",
			"Herman, <I>Tonuzaba</I>",
			"Dénes, <I>Ividő</I>",
			"Erhard, <I>Meggyfavirágzás</I>",
			"Zsolt, <I>Halibán</I>",
			"Leó, <I>Torontál</I>",
			"Gyula, <I>Gyula</I>",
			"Ida, <I>Büvellő</I>",
			"Tibor, <I>Tas</I>",
			"Anasztázia, <I>Askam</I>",
			"Csongor, <I>Ubul</I>",
			"Rudolf, <I>Bíborka</I>",
			"Andrea, <I>Ilma</I>",
			"Emma, <I>Kocsárd</I>",
			"Tivadar, <I>Apor</I>",
			"Konrád, <I>Ekese</I>",
			"Csilla, <I>Aranyos</I>",
			"Béla, <I>Béla</I>",
			"György, <I>Sellő</I>",
			"Márk, <I>Keán</I>",
			"Ervin, <I>Csobánka</I>",
			"Zita, <I>Dancs</I>",
			"Valéria, <I>Bulcsú</I>",
			"Péter, <I>Énee</I>",
			"Katalin, Kitti, <I>Buda</I>",
			""
		);
	}
	if (ho == 5) {
		var napok = new initArray(
			"<I>Fülöp, Jakab</I>",
			"Zsigmond, <I>Csaba</I>",
			"Tímea, <I>Elvő</I>",
			"Mónika, <I>Dalia</I>",
			"Györgyi, <I>Magó</I>",
			"Ivett, <I>Szilas</I>",
			"Gizella, <I>Réka</I>",
			"Mihály, <I>Somogy</I>",
			"Gergely, <I>Zaránd</I>",
			"Ármin, <I>Gyöngyvér</I>",
			"Ferenc, <I>Balmaz</I>",
			"Pongrác, <I>Hulihó</I>",
			"Szervác, <I>Mátka</I>",
			"Bonifác, <I>Bars</I>",
			"Zsófia, <I>Büszke</I>",
			"Mózes, <I>Csongor</I>",
			"Paszkál, <I>Itlár</I>",
			"Erik, <I>Tünde</I>",
			"Ivó, Milán, <I>Oguz</I>",
			"Bernát, <I>Kadarta</I>",
			"Konstantin, <I>Rol</I>",
			"Júlia, Rita, <I>Bogyó</I>",
			"Dezső, <I>Szabolcs</I>",
			"Eszter, <I>Vidorka</I>",
			"Orbán, <I>Törtel</I>",
			"Fülöp, <I>Doboka</I>",
			"Hella, <I>Ede</I>",
			"Emil, <I>Természet Örömünnep</I>",
			"Magdolna, <I>Kalandó</I>",
			"Zsanett, <I>Dsila</I>",
			"Angéla, <I>Kültegin</I>",
			""
		);
	}
	if (ho == 6) {
		var napok = new initArray(
			"Tünde, <I>Napsugárka</I>",
			"Anita, <I>Lápos</I>",
			"Klotild, <I>Csillavér</I>",
			"Bulcsú, <I>Ocsád</I>",
			"Fatime, <I>Rózsa</I>",
			"Norbert, <I>Emőke</I>",
			"Róbert, <I>Retel</I>",
			"Medárd, <I>Tomaj</I>",
			"Félix, <I>Géda</I>",
			"Margit, <I>Üllő</I>",
			"Barnabás, <I>Barna</I>",
			"Villő, <I>Enid</I>",
			"Antal, <I>Fruzsina</I>",
			"Vazul, <I>Vazul</I>",
			"Jolán, <I>Vid</I>",
			"Jusztin, <I>Zerind</I>",
			"Laura, <I>Töhötöm</I>",
			"Levente, <I>Viola</I>",
			"Gyárfás, <I>Gerle</I>",
			"Rafael, <I>Zajzon</I>",
			"Alajos, <I>Napisten Ünnepe</I>",
			"Paulina, <I>Döme</I>",
			"Zoltán, <I>Hajna</I>",
			"Iván, <I>Csörsz</I>",
			"Vilmos, <I>Koppánd</I>",
			"János, <I>Kalli</I>",
			"László, <I>Ünőke</I>",
			"Levente, <I>Gorda</I>",
			"Péter, Pál, <I>Bihar</I>",
			"Pál, <I>Ogmánd</I>",
			""
		);
	}
	if (ho == 7) {
		var napok = new initArray(
			"Tihamér, <I>Boglár</I>",
			"Ottó, <I>Sarlós Boldogasszony</I>",
			"Kornél, <I>Pirota</I>",
			"Ulrik, <I>Öcsöd</I>",
			"Sarolta, <I>Ajtony</I>",
			"Csaba, <I>Ung</I>",
			"Appolónia, <I>Tarján</I>",
			"Ellák, <I>Baba</I>",
			"Lukrécia, <I>Vata</I>",
			"Amália, <I>Zsombor</I>",
			"Nóra, <I>Csengele</I>",
			"Izabella, <I>Zila</I>",
			"Jenő, <I>Jenő</I>",
			"Őrs, <I>Örs</I>",
			"Henrik, <I>Ildikó</I>",
			"Valter, <I>Aszlár</I>",
			"Endre, <I>Elek</I>",
			"Frigyes, <I>Lilla</I>",
			"Emília, <I>Kamorka</I>",
			"Illés, <I>Bátor</I>",
			"Dániel, <I>Csóbán</I>",
			"Magdolna, <I>Obi</I>",
			"Lenke, <I>Izár</I>",
			"Kinga, Kincső, <I>Mandula</I>",
			"Kristóf, Jakab, <I>Olgya</I>",
			"Anna, Anikó, <I>Kádán</I>",
			"Olga, <I>Tardos</I>",
			"Szabolcs, <I>Délceg</I>",
			"Márta, <I>Rába</I>",
			"Judit, <I>Csaba</I>",
			"Oszkár, <I>Árboc</I>",
			""
		);
	}
	if (ho == 8) {
		var napok = new initArray(
			"Boglárka, <I>Szerény</I>",
			"Lehel, <I>Lehel</I>",
			"Hermina, <I>Bács</I>",
			"Domonkos, <I>Délibáb</I>",
			"Krisztina, <I>Kende, Havas Boldogasszony</I>",
			"Berta, <I>Oldamur</I>",
			"Ibolya, <I>Csiperke</I>",
			"László, <I>Sudár</I>",
			"Emőd, <I>Emőd</I>",
			"Lörinc, <I>Becse</I>",
			"Zsuzsanna, <I>Szalók</I>",
			"Klára, <I>Delinke</I>",
			"Ipoly, <I>Ipoly</I>",
			"Marcell, <I>Özséb</I>",
			"Mária, <I>Nagyboldogasszony</I>",
			"Ábrahám, <I>Estilla</I>",
			"Jácint, <I>Tomor</I>",
			"Ilona, <I>Ilona</I>",
			"Huba, <I>Huba</I>",
			"István, <I>Vajk</I>",
			"Sámuel, <I>Zelemér</I>",
			"Menyhért, <I>Ella</I>",
			"Bence, <I>Tuli</I>",
			"Bertalan, <I>Vázsoly</I>",
			"Lajos, <I>Koppány</I>",
			"Izsó, <I>Füvellő</I>",
			"Gáspár, <I>Maglód</I>",
			"Ágoston, <I>Kajtár</I>",
			"Beatrix, <I>Edő</I>",
			"Rózsa, <I>Szalárd</I>",
			"Erika, <I>Atád</I>"
		);
	}
	if (ho == 9) {
		var napok = new initArray(
			"Egon, <I>Egyed</I>",
			"Rebeka, <I>Filéne</I>",
			"Hilda, <I>Turzó</I>",
			"Rozália, <I>Zicsi</I>",
			"Viktor, <I>Hajnácska</I>",
			"Zakariás, <I>Zandirhám</I>",
			"Regina, <I>Ugocsa</I>",
			"Mária, <I>Kisboldogasszony</I>",
			"Ádám, <I>Kajár</I>",
			"Nikolett, <I>Tápé</I>",
			"Teodóra, <I>Irmén</I>",
			"Mária, <I>Agárd</I>",
			"Kornél, <I>Csele</I>",
			"Szeréna, <I>Hali</I>",
			"Enikő, <I>Báta</I>",
			"Edit, <I>Pille</I>",
			"Zsófia, <I>Dizavul</I>",
			"Diána, <I>Tardos</I>",
			"Vilhelmina, <I>Ovola</I>",
			"Friderika, <I>Kál</I>",
			"Máté, <I>Földanya Ünnepe</I>",
			"Móric, <I>Senyő</I>",
			"Tekla, <I>Pöszke</I>",
			"Gellért, <I>Zobor</I>",
			"Eufrozina, <I>Szübál</I>",
			"Jusztina, <I>Balassa</I>",
			"Adalbert, <I>Sugárka</I>",
			"Vencel, <I>Csoma</I>",
			"Mihály, <I>Uzonka</I>",
			"Jeromos, <I>Zsadán</I>",
			""
		);
	}
	if (ho == 10) {
		var napok = new initArray(
			"Malvin, <I>Tanhu</I>",
			"Petra, <I>Imola</I>",
			"Helga, <I>Sebős</I>",
			"Ferenc, <I>Öcsény</I>",
			"Aurél, <I>Hímes</I>",
			"Renáta",
			"Amália, <I>Kulpa</I>",
			"Koppány, <I>Etelka</I>",
			"Dénes, <I>Gyalán</I>",
			"Gedeon, <I>Szellő</I>",
			"Brigitta, <I>Hohat</I>",
			"Miksa, <I>Illangó</I>",
			"Kálmán, <I>Batu</I>",
			"Helén, <I>Dorozsma</I>",
			"Teréz, <I>Táltos</I>",
			"Gál, <I>Kedves</I>",
			"Hedvig, <I>Balajtár, Magyarok Nagyasszonya</I>",
			"Lukács, <I>Szívölő</I>",
			"Nándor, <I>Villám</I>",
			"Vendel, <i>Iringó</I>",
			"Orsolya, <I>Bise</I>",
			"<i>Előd</I>",
			"Gyöngyi, <I>Gyöngy</I>",
			"Salamon, <I>Káldor</I>",
			"Bianka, <I>Barakon</I>",
			"Dömötör, <I>Hülek</I>",
			"Szabina, <I>Ibla</I>",
			"Simon, <I>Ozul</I>",
			"Nárcisz, <I>Zenő</I>",
			"Alfonz, <I>Vitéz</I>",
			"Farkas, <I>Szemőke</I>",
			""
		);
	}
	if (ho == 11) {
		var napok = new initArray(
			"Marianna, <I>Ősök Napja</I>",
			"Achilles, <I>Turul</I>",
			"Győző, <I>Győző</I>",
			"Károly, <I>Karcsú</I>",
			"Imre, <I>Sólyom</I>",
			"Lénárd, <I>Méhike</I>",
			"Rezső, <I>Türje</I>",
			"Zsombor, <I>Surbán</I>",
			"Tivadar, <I>Olna</I>",
			"Réka, <I>Picur</I>",
			"Márton, <I>Kaplony</I>",
			"Jónás, Renátó, <I>Csát</I>",
			"Szilvia, <I>Szömér</I>",
			"Aliz, <I>Berke</I>",
			"Albert, Lipót, <I>Nyilas</I>",
			"Ödön, <I>Tuga</I>",
			"Hortenzia, Gergő, <I>Érd</I>",
			"Jenő, <I>Kartal</I>",
			"Erzsébet, <I>Timur</I>",
			"Jolán, <I>Jolán</I>",
			"Olivér, <I>Úz, Uzor</I>",
			"Cecília, <I>Nyék</I>",
			"Kelemen, Klementina, <I>Makár</I>",
			"Emma, <I>Virág</I>",
			"Katalin, <I>Csete</I>",
			"Virág, <I>Kötöny</I>",
			"Virgil, <I>Csagatáj</I>",
			"Stefánia, <I>Bájos</I>",
			"Taksony, <I>Maksa</I>",
			"András, Andor, <I>Szüvellő</I>",
			""
		);
	}
	if (ho == 12) {
		var napok = new initArray(
			"Elza, <I>Csák</I>",
			"Melinda, <I>Aranka</I>",
			"Ferenc, <I>Kemecse</I>",
			"Barbara, <I>Zala</I>",
			"Vilma, <I>Sejbán</I>",
			"Miklós, <I>Torzon</I>",
			"Ambrus, <I>Csáb</I>",
			"Mária, <I>Nyalka</I>",
			"Natália, <I>Bojta</I>",
			"Judit, <I>Rugacs</I>",
			"Árpád, <I>Gilvád</I>",
			"Gabriella, <I>Viritó</I>",
			"Luca, <I>Kurszán</I>",
			"Szilárda, <I>Szlárdka</I>",
			"Valér, <I>Bábolna</I>",
			"Etelka, <I>Szepes</I>",
			"Lázár, <I>Tugurkán</I>",
			"Auguszta, <I>Csekő</I>",
			"Viola, <I>Bodony</I>",
			"Teofil, <I>Csellőke</I>",
			"Tamás, <I>Kocsobur</I>",
			"Zéno, <I>Écska</I>",
			"Viktória, <I>Kinga</I>",
			"Ádám, Éva, <I>Újjászülető Napisten</I>",
			"Karácsony, <I>Kerecsen</I>",
			"Karácsony, <I>Edua</I>",
			"János, <I>Bölöjte</I>",
			"Kamilla, <I>Szubotáj</I>",
			"Tamás, <I>Üdvöske</I>",
			"Dávid, <I>Zoárd</I>",
			"Szilveszter, <I>Szittya</I>",
			""
		);
	}
	return napok[nap];
}

/* Hónapok nevei */
function romai_honev(ho) {
	var month = new initArray(
		"I.",
		"II.",
		"III.",
		"IV.",
		"V.",
		"VI.",
		"VII.",
		"VIII.",
		"IX.",
		"X.",
		"XI.",
		"XII."
	);
	return month[ho];
}
function honev(ho) {
	var month = new initArray(
		"január",
		"február",
		"március",
		"április",
		"május",
		"június",
		"július",
		"augusztus",
		"szeptember",
		"október",
		"november",
		"december"
	);
	return month[ho];
}
function irodalmi_honev(ho) {
	var month = new initArray(
		"télhó",
		"télutó",
		"tavaszelő",
		"tavaszhó",
		"tavaszutó",
		"nyárelő",
		"nyárhó",
		"nyárutó",
		"őszelő",
		"őszhó",
		"őszutó",
		"télelő"
	);
	return month[ho];
}
function kalendarium_honev(ho) {
	// TODO http://mek.niif.hu/04800/04832/html/megszenteltorszag0002.html
	var month = new initArray(
		"Boldogasszony hava",
		"böjtelő hava",
		"böjtmás hava",
		"Szent György hava",
		"pünkösd hava",
		"Szent Iván hava",
		"Szent Jakab hava",
		"Kisasszony hava",
		"Szent Mihály hava",
		"mindszent hava",
		"Szent András hava",
		"karácsony hava"
	);
	return month[ho];
}
function eosi_honev(ho) {
	// TODO https://www.youtube.com/watch?v=eK8Qlwkl-QI https://www.youtube.com/watch?v=XPrUe4qI6dE
	var month = new initArray(
		"fergeteg hava",
		"jégbontó hava",
		"kikelet hava",
		"szelek hava",
		"ígéret hava",
		"Napisten hava",
		"áldás hava",
		"új kenyér hava",
		"Földanya hava",
		"magvető hava",
		"enyészet hava",
		"álom hava"
	);
	return month[ho];
}
function arvisura_honev(ho) {
	var month = new initArray(
		"medvetor hava",
		"szarvastor hava",
		"bölénytor és fák hava",
		"báránytor és rügyezés hava",
		"borjútor és virágzó élet hava",
		"gödölyetor és eper hava",
		"tehéntor és aratás hava",
		"Aranyasszony és bőség hava",
		"tigris és almaszüret hava",
		"halak és begyűjtés hava",
		"disznótor hava",
		"Istenfiak és tárkányok hava"
	);
	return month[ho];
}

/* Napok nevei */
function napnev(szam) {
	var napok = new initArray(
		"vasárnap",
		"hétfő",
		"kedd",
		"szerda",
		"csütörtök",
		"péntek",
		"szombat",
		"vasárnap"
	);
	return napok[szam];
}

var ido = new Date();
var ev = ido.getYear();
var ho = ido.getMonth() + 1;
var nap = ido.getDate();
if (ev < 1900) ev += 1900;

// building HTML string and insert to #NapVanMa DOM
// forrás: https://hu.wikipedia.org/wiki/H%C3%B3nap#Magyar_h%C3%B3napnevek
var htmlStr =
	'Ma a <span class="year">' +
	ev +
	'</span>. év <span class="month" title="római szám">' +
	romai_honev(ho) +
	'</span> hónap, azaz <span class="month" title="mai hivatalos név">' +
	honev(ho) +
	'</span>, <span class="month" title="irodalmi hónapnév">' +
	irodalmi_honev(ho) +
	'</span>, <span class="month" title="kalendáriumi hónapnév">' +
	kalendarium_honev(ho) +
	'</span>, <span class="month" title="ősi - székelyföldi - hónapnév">' +
	eosi_honev(ho) +
	'</span>, <span class="month" title="hónapnév az Arvisurában">' +
	arvisura_honev(ho) +
	'</span> <span class="day">' +
	nap +
	"</span>. napja, " +
	'<span class="dayname">' +
	napnev(ido.getDay() + 1) +
	'</span>, <span class="nameday" title="naptári névnap és Magyar ősi személynevek, -ünnepnapok">' +
	havinev(ev, ho, nap) +
	"</span> napja van.";
document.getElementById("NapVanMa").insertAdjacentHTML("beforeend", htmlStr);

// create <sytle> element and append to <head>
var element = document.createElement("style");
document.head.appendChild(element);
sheet = element.sheet;
var styles1 = ".month {font-style: italic;padding: 0.2em 0;line-height: 1.2em;}";
var styles2 =
	".month:hover, .nameday:hover {cursor: help;text-decoration: underline;}";
sheet.insertRule(styles1, 0);
sheet.insertRule(styles2, 1);

console.log("source: https://codepen.io/eaposztrof/pen/RwKzOzO");