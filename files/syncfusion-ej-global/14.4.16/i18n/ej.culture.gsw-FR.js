ej.addCulture( "gsw-FR", {
	name: "gsw-FR",
	englishName: "Alsatian (France)",
	nativeName: "Elsässisch (Frànkrisch)",
	language: "gsw",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "Ohne Nummer",
		negativeInfinity: "-Unendlich",
		positiveInfinity: "+Unendlich",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Sundi","Manti","Zischti","Mettwuch","Dunnerschti","Friti","Sàmschti"],
				namesAbbr: ["Su.","Ma.","Zi.","Me.","Du.","Fr.","Sà."],
				namesShort: ["Su","Ma","Zi","Me","Du","Fr","Sà"]
			},
			months: {
				names: ["Jänner","Feverje","März","Àpril","Mai","Jüni","Jüli","Augscht","September","Oktower","Nowember","Dezember",""],
				namesAbbr: ["Jän.","Fev.","März","Apr.","Mai","Jüni","Jüli","Aug.","Sept.","Okt.","Now.","Dez.",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy HH:mm:ss",
				M: "d. MMMM"
			}
		}
	}
});