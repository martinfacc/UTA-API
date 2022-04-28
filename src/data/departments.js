const departments = [
	{
		id: 1,
		name: 'GENERAL DONOVAN',
		provinceId: 1
	},
	{
		id: 2,
		name: '12 DE OCTUBRE',
		provinceId: 1
	},
	{
		id: 3,
		name: 'GENERAL BELGRANO',
		provinceId: 1
	},
	{
		id: 4,
		name: 'MAYOR LUIS J FONTANA',
		provinceId: 1
	},
	{
		id: 5,
		name: 'GENERAL GUEMES',
		provinceId: 1
	},
	{
		id: 6,
		name: 'SARGENTO CABRAL',
		provinceId: 1
	},
	{
		id: 7,
		name: '25 DE MAYO',
		provinceId: 1
	},
	{
		id: 8,
		name: 'BERMEJO',
		provinceId: 1
	},
	{
		id: 9,
		name: 'LIBERTADOR GENERAL SAN MARTÍN',
		provinceId: 1
	},
	{
		id: 10,
		name: 'SAN FERNANDO',
		provinceId: 1
	},
	{
		id: 11,
		name: 'LIBERTAD',
		provinceId: 1
	},
	{
		id: 12,
		name: 'O HIGGINS',
		provinceId: 1
	},
	{
		id: 13,
		name: 'PRESIDENCIA DE LA PLAZA',
		provinceId: 1
	},
	{
		id: 14,
		name: 'SAN LORENZO',
		provinceId: 1
	},
	{
		id: 15,
		name: '1° DE MAYO',
		provinceId: 1
	},
	{
		id: 16,
		name: 'INDEPENDENCIA',
		provinceId: 1
	},
	{
		id: 17,
		name: '2 DE ABRIL',
		provinceId: 1
	},
	{
		id: 18,
		name: 'MAIPU',
		provinceId: 1
	},
	{
		id: 19,
		name: 'TAPENAGA',
		provinceId: 1
	},
	{
		id: 20,
		name: 'ALMIRANTE BROWN',
		provinceId: 1
	},
	{
		id: 21,
		name: 'COMANDANTE FERNANDEZ',
		provinceId: 1
	},
	{
		id: 22,
		name: 'CHACABUCO',
		provinceId: 1
	},
	{
		id: 23,
		name: '9 DE JULIO',
		provinceId: 1
	},
	{
		id: 24,
		name: 'FRAY JUSTO SANTA MARÍA DE ORO',
		provinceId: 1
	},
	{
		id: 25,
		name: 'QUITILIPI',
		provinceId: 1
	},
	{
		id: 26,
		name: 'ISCHILIN',
		provinceId: 2
	},
	{
		id: 27,
		name: 'MINAS',
		provinceId: 2
	},
	{
		id: 28,
		name: 'UNION',
		provinceId: 2
	},
	{
		id: 29,
		name: 'CALAMUCHITA',
		provinceId: 2
	},
	{
		id: 30,
		name: 'RIO SECO',
		provinceId: 2
	},
	{
		id: 31,
		name: 'POCHO',
		provinceId: 2
	},
	{
		id: 32,
		name: 'GENERAL SAN MARTIN',
		provinceId: 2
	},
	{
		id: 33,
		name: 'MARCOS JUAREZ',
		provinceId: 2
	},
	{
		id: 34,
		name: 'COLON',
		provinceId: 2
	},
	{
		id: 35,
		name: 'SANTA MARÍA',
		provinceId: 2
	},
	{
		id: 36,
		name: 'RIO PRIMERO',
		provinceId: 2
	},
	{
		id: 37,
		name: 'PUNILLA',
		provinceId: 2
	},
	{
		id: 38,
		name: 'RIO SEGUNDO',
		provinceId: 2
	},
	{
		id: 39,
		name: 'GENERAL ROCA',
		provinceId: 2
	},
	{
		id: 40,
		name: 'TOTORAL',
		provinceId: 2
	},
	{
		id: 41,
		name: 'TERCERO ARRIBA',
		provinceId: 2
	},
	{
		id: 42,
		name: 'JUAREZ CELMAN',
		provinceId: 2
	},
	{
		id: 43,
		name: 'SAN ALBERTO',
		provinceId: 2
	},
	{
		id: 44,
		name: 'SAN JUSTO',
		provinceId: 2
	},
	{
		id: 45,
		name: 'RIO CUARTO',
		provinceId: 2
	},
	{
		id: 46,
		name: 'CRUZ DEL EJE',
		provinceId: 2
	},
	{
		id: 47,
		name: 'SOBREMONTE',
		provinceId: 2
	},
	{
		id: 48,
		name: 'TULUMBA',
		provinceId: 2
	},
	{
		id: 49,
		name: 'PRESIDENTE ROQUE SAENZ PEÑA',
		provinceId: 2
	},
	{
		id: 50,
		name: 'SAN JAVIER',
		provinceId: 2
	},
	{
		id: 51,
		name: 'CAPITAL',
		provinceId: 2
	},
	{
		id: 52,
		name: 'LANGUIÑEO',
		provinceId: 3
	},
	{
		id: 53,
		name: 'RIO SENGUER',
		provinceId: 3
	},
	{
		id: 54,
		name: 'GAIMAN',
		provinceId: 3
	},
	{
		id: 55,
		name: 'CUSHAMEN',
		provinceId: 3
	},
	{
		id: 56,
		name: 'FUTALEUFU',
		provinceId: 3
	},
	{
		id: 57,
		name: 'BIEDMA',
		provinceId: 3
	},
	{
		id: 58,
		name: 'TEHUELCHES',
		provinceId: 3
	},
	{
		id: 59,
		name: 'ESCALANTE',
		provinceId: 3
	},
	{
		id: 60,
		name: 'RAWSON',
		provinceId: 3
	},
	{
		id: 61,
		name: 'FLORENTINO AMEGHINO',
		provinceId: 3
	},
	{
		id: 62,
		name: 'TELSEN',
		provinceId: 3
	},
	{
		id: 63,
		name: 'PASO DE INDIOS',
		provinceId: 3
	},
	{
		id: 64,
		name: 'SARMIENTO',
		provinceId: 3
	},
	{
		id: 65,
		name: 'MARTIRES',
		provinceId: 3
	},
	{
		id: 66,
		name: 'GASTRE',
		provinceId: 3
	},
	{
		id: 67,
		name: 'HURLINGHAM',
		provinceId: 4
	},
	{
		id: 68,
		name: 'COLON',
		provinceId: 4
	},
	{
		id: 69,
		name: 'BENITO JUAREZ',
		provinceId: 4
	},
	{
		id: 70,
		name: 'OLAVARRIA',
		provinceId: 4
	},
	{
		id: 71,
		name: 'ALMIRANTE BROWN',
		provinceId: 4
	},
	{
		id: 72,
		name: 'JOSE C PAZ',
		provinceId: 4
	},
	{
		id: 73,
		name: 'ROJAS',
		provinceId: 4
	},
	{
		id: 74,
		name: 'GENERAL BELGRANO',
		provinceId: 4
	},
	{
		id: 75,
		name: 'SUIPACHA',
		provinceId: 4
	},
	{
		id: 76,
		name: 'LOBERIA',
		provinceId: 4
	},
	{
		id: 77,
		name: 'GENERAL VILLEGAS',
		provinceId: 4
	},
	{
		id: 78,
		name: 'ESTEBAN ECHEVERRIA',
		provinceId: 4
	},
	{
		id: 79,
		name: 'MONTE',
		provinceId: 4
	},
	{
		id: 80,
		name: 'BALCARCE',
		provinceId: 4
	},
	{
		id: 81,
		name: 'PRESIDENTE PERON',
		provinceId: 4
	},
	{
		id: 82,
		name: 'CARMEN DE ARECO',
		provinceId: 4
	},
	{
		id: 83,
		name: 'GUAMINI',
		provinceId: 4
	},
	{
		id: 84,
		name: 'CHACABUCO',
		provinceId: 4
	},
	{
		id: 85,
		name: 'GENERAL PUEYRREDON',
		provinceId: 4
	},
	{
		id: 86,
		name: 'PILAR',
		provinceId: 4
	},
	{
		id: 87,
		name: 'GENERAL PINTO',
		provinceId: 4
	},
	{
		id: 88,
		name: 'VICENTE LOPEZ',
		provinceId: 4
	},
	{
		id: 89,
		name: 'GENERAL JUAN MADARIAGA',
		provinceId: 4
	},
	{
		id: 90,
		name: 'SALADILLO',
		provinceId: 4
	},
	{
		id: 91,
		name: 'VILLARINO',
		provinceId: 4
	},
	{
		id: 92,
		name: 'SAN PEDRO',
		provinceId: 4
	},
	{
		id: 93,
		name: 'GENERAL GUIDO',
		provinceId: 4
	},
	{
		id: 94,
		name: 'SAN ISIDRO',
		provinceId: 4
	},
	{
		id: 95,
		name: 'TIGRE',
		provinceId: 4
	},
	{
		id: 96,
		name: 'CASTELLI',
		provinceId: 4
	},
	{
		id: 97,
		name: 'SAN CAYETANO',
		provinceId: 4
	},
	{
		id: 98,
		name: 'PINAMAR',
		provinceId: 4
	},
	{
		id: 99,
		name: 'TRENQUE LAUQUEN',
		provinceId: 4
	},
	{
		id: 100,
		name: 'CORONEL DORREGO',
		provinceId: 4
	},
	{
		id: 101,
		name: 'ENSENADA',
		provinceId: 4
	},
	{
		id: 102,
		name: 'ALBERTI',
		provinceId: 4
	},
	{
		id: 103,
		name: 'LOMAS DE ZAMORA',
		provinceId: 4
	},
	{
		id: 104,
		name: 'CAMPANA',
		provinceId: 4
	},
	{
		id: 105,
		name: 'GENERAL ALVARADO',
		provinceId: 4
	},
	{
		id: 106,
		name: 'EZEIZA',
		provinceId: 4
	},
	{
		id: 107,
		name: 'SAN MIGUEL',
		provinceId: 4
	},
	{
		id: 108,
		name: 'ADOLFO ALSINA',
		provinceId: 4
	},
	{
		id: 109,
		name: 'SAAVEDRA',
		provinceId: 4
	},
	{
		id: 110,
		name: 'ADOLFO GONZALES CHAVES',
		provinceId: 4
	},
	{
		id: 111,
		name: 'TRES DE FEBRERO',
		provinceId: 4
	},
	{
		id: 112,
		name: 'SAN ANDRES DE GILES',
		provinceId: 4
	},
	{
		id: 113,
		name: 'SALLIQUELO',
		provinceId: 4
	},
	{
		id: 114,
		name: 'BRANDSEN',
		provinceId: 4
	},
	{
		id: 115,
		name: 'MONTE HERMOSO',
		provinceId: 4
	},
	{
		id: 116,
		name: 'TRES LOMAS',
		provinceId: 4
	},
	{
		id: 117,
		name: 'MERLO',
		provinceId: 4
	},
	{
		id: 118,
		name: 'QUILMES',
		provinceId: 4
	},
	{
		id: 119,
		name: 'JUNIN',
		provinceId: 4
	},
	{
		id: 120,
		name: 'BERAZATEGUI',
		provinceId: 4
	},
	{
		id: 121,
		name: 'BRAGADO',
		provinceId: 4
	},
	{
		id: 122,
		name: 'MAGDALENA',
		provinceId: 4
	},
	{
		id: 123,
		name: 'HIPOLITO YRIGOYEN',
		provinceId: 4
	},
	{
		id: 124,
		name: 'PATAGONES',
		provinceId: 4
	},
	{
		id: 125,
		name: 'LANÚS',
		provinceId: 4
	},
	{
		id: 126,
		name: 'CHASCOMUS',
		provinceId: 4
	},
	{
		id: 127,
		name: 'MERCEDES',
		provinceId: 4
	},
	{
		id: 128,
		name: 'RIVADAVIA',
		provinceId: 4
	},
	{
		id: 129,
		name: 'CORONEL PRINGLES',
		provinceId: 4
	},
	{
		id: 130,
		name: 'CAPITAN SARMIENTO',
		provinceId: 4
	},
	{
		id: 131,
		name: 'GENERAL SAN MARTIN',
		provinceId: 4
	},
	{
		id: 132,
		name: 'RAMALLO',
		provinceId: 4
	},
	{
		id: 133,
		name: 'PILA',
		provinceId: 4
	},
	{
		id: 134,
		name: 'LAS FLORES',
		provinceId: 4
	},
	{
		id: 135,
		name: 'NECOCHEA',
		provinceId: 4
	},
	{
		id: 136,
		name: 'GENERAL RODRIGUEZ',
		provinceId: 4
	},
	{
		id: 137,
		name: 'AZUL',
		provinceId: 4
	},
	{
		id: 138,
		name: 'CAÑUELAS',
		provinceId: 4
	},
	{
		id: 139,
		name: 'CARLOS CASARES',
		provinceId: 4
	},
	{
		id: 140,
		name: 'SAN NICOLAS',
		provinceId: 4
	},
	{
		id: 141,
		name: 'MAIPU',
		provinceId: 4
	},
	{
		id: 142,
		name: 'MALVINAS ARGENTINAS',
		provinceId: 4
	},
	{
		id: 143,
		name: 'PEHUAJO',
		provinceId: 4
	},
	{
		id: 144,
		name: 'SAN VICENTE',
		provinceId: 4
	},
	{
		id: 145,
		name: 'PERGAMINO',
		provinceId: 4
	},
	{
		id: 146,
		name: 'MORENO',
		provinceId: 4
	},
	{
		id: 147,
		name: 'CORONEL DE MARINA L ROSALES',
		provinceId: 4
	},
	{
		id: 148,
		name: 'LINCOLN',
		provinceId: 4
	},
	{
		id: 149,
		name: 'FLORENTINO AMEGHINO',
		provinceId: 4
	},
	{
		id: 150,
		name: 'LEZAMA',
		provinceId: 4
	},
	{
		id: 151,
		name: 'MORON',
		provinceId: 4
	},
	{
		id: 152,
		name: 'ESCOBAR',
		provinceId: 4
	},
	{
		id: 153,
		name: 'BERISSO',
		provinceId: 4
	},
	{
		id: 154,
		name: 'BOLIVAR',
		provinceId: 4
	},
	{
		id: 155,
		name: 'EXALTACIÓN DE LA CRUZ',
		provinceId: 4
	},
	{
		id: 156,
		name: 'GENERAL ALVEAR',
		provinceId: 4
	},
	{
		id: 157,
		name: 'TORNQUIST',
		provinceId: 4
	},
	{
		id: 158,
		name: 'ZARATE',
		provinceId: 4
	},
	{
		id: 159,
		name: 'LEANDRO N ALEM',
		provinceId: 4
	},
	{
		id: 160,
		name: 'LUJAN',
		provinceId: 4
	},
	{
		id: 161,
		name: 'LA COSTA',
		provinceId: 4
	},
	{
		id: 162,
		name: 'GENERAL PAZ',
		provinceId: 4
	},
	{
		id: 163,
		name: 'RAUCH',
		provinceId: 4
	},
	{
		id: 164,
		name: 'CHIVILCOY',
		provinceId: 4
	},
	{
		id: 165,
		name: 'SAN FERNANDO',
		provinceId: 4
	},
	{
		id: 166,
		name: 'BARADERO',
		provinceId: 4
	},
	{
		id: 167,
		name: 'MARCOS PAZ',
		provinceId: 4
	},
	{
		id: 168,
		name: 'ITUZAINGO',
		provinceId: 4
	},
	{
		id: 169,
		name: 'LOBOS',
		provinceId: 4
	},
	{
		id: 170,
		name: '9 DE JULIO',
		provinceId: 4
	},
	{
		id: 171,
		name: 'BAHÍA BLANCA',
		provinceId: 4
	},
	{
		id: 172,
		name: 'GENERAL LAVALLE',
		provinceId: 4
	},
	{
		id: 173,
		name: 'DAIREAUX',
		provinceId: 4
	},
	{
		id: 174,
		name: 'CARLOS TEJEDOR',
		provinceId: 4
	},
	{
		id: 175,
		name: 'LA MATANZA',
		provinceId: 4
	},
	{
		id: 176,
		name: '25 DE MAYO',
		provinceId: 4
	},
	{
		id: 177,
		name: 'AVELLANEDA',
		provinceId: 4
	},
	{
		id: 178,
		name: 'ARRECIFES',
		provinceId: 4
	},
	{
		id: 179,
		name: 'LAPRIDA',
		provinceId: 4
	},
	{
		id: 180,
		name: 'TAPALQUE',
		provinceId: 4
	},
	{
		id: 181,
		name: 'PUAN',
		provinceId: 4
	},
	{
		id: 182,
		name: 'PELLEGRINI',
		provinceId: 4
	},
	{
		id: 183,
		name: 'DOLORES',
		provinceId: 4
	},
	{
		id: 184,
		name: 'GENERAL ARENALES',
		provinceId: 4
	},
	{
		id: 185,
		name: 'GENERAL LAS HERAS',
		provinceId: 4
	},
	{
		id: 186,
		name: 'GENERAL VIAMONTE',
		provinceId: 4
	},
	{
		id: 187,
		name: 'SAN ANTONIO DE ARECO',
		provinceId: 4
	},
	{
		id: 188,
		name: 'SALTO',
		provinceId: 4
	},
	{
		id: 189,
		name: 'NAVARRO',
		provinceId: 4
	},
	{
		id: 190,
		name: 'LA PLATA',
		provinceId: 4
	},
	{
		id: 191,
		name: 'PUNTA INDIO',
		provinceId: 4
	},
	{
		id: 192,
		name: 'TRES ARROYOS',
		provinceId: 4
	},
	{
		id: 193,
		name: 'GENERAL LA MADRID',
		provinceId: 4
	},
	{
		id: 194,
		name: 'CORONEL SUAREZ',
		provinceId: 4
	},
	{
		id: 195,
		name: 'VILLA GESELL',
		provinceId: 4
	},
	{
		id: 196,
		name: 'TANDIL',
		provinceId: 4
	},
	{
		id: 197,
		name: 'FLORENCIO VARELA',
		provinceId: 4
	},
	{
		id: 198,
		name: 'MAR CHIQUITA',
		provinceId: 4
	},
	{
		id: 199,
		name: 'AYACUCHO',
		provinceId: 4
	},
	{
		id: 200,
		name: 'TORDILLO',
		provinceId: 4
	},
	{
		id: 201,
		name: 'ROQUE PEREZ',
		provinceId: 4
	},
	{
		id: 202,
		name: 'CONSTITUCION',
		provinceId: 5
	},
	{
		id: 203,
		name: 'IRIONDO',
		provinceId: 5
	},
	{
		id: 204,
		name: 'CASTELLANOS',
		provinceId: 5
	},
	{
		id: 205,
		name: 'CASEROS',
		provinceId: 5
	},
	{
		id: 206,
		name: 'ROSARIO',
		provinceId: 5
	},
	{
		id: 207,
		name: 'SAN CRISTOBAL',
		provinceId: 5
	},
	{
		id: 208,
		name: 'LAS COLONIAS',
		provinceId: 5
	},
	{
		id: 209,
		name: 'GENERAL LOPEZ',
		provinceId: 5
	},
	{
		id: 210,
		name: 'SAN MARTIN',
		provinceId: 5
	},
	{
		id: 211,
		name: 'GENERAL OBLIGADO',
		provinceId: 5
	},
	{
		id: 212,
		name: 'SAN JAVIER',
		provinceId: 5
	},
	{
		id: 213,
		name: 'SAN JERONIMO',
		provinceId: 5
	},
	{
		id: 214,
		name: 'VERA',
		provinceId: 5
	},
	{
		id: 215,
		name: 'SAN JUSTO',
		provinceId: 5
	},
	{
		id: 216,
		name: 'LA CAPITAL',
		provinceId: 5
	},
	{
		id: 217,
		name: 'BELGRANO',
		provinceId: 5
	},
	{
		id: 218,
		name: '9 DE JULIO',
		provinceId: 5
	},
	{
		id: 219,
		name: 'GARAY',
		provinceId: 5
	},
	{
		id: 220,
		name: 'SAN LORENZO',
		provinceId: 5
	},
	{
		id: 221,
		name: 'GENERAL PEDERNERA',
		provinceId: 6
	},
	{
		id: 222,
		name: 'LIBERTADOR GENERAL SAN MARTÍN',
		provinceId: 6
	},
	{
		id: 223,
		name: 'CORONEL PRINGLES',
		provinceId: 6
	},
	{
		id: 224,
		name: 'JUNIN',
		provinceId: 6
	},
	{
		id: 225,
		name: 'AYACUCHO',
		provinceId: 6
	},
	{
		id: 226,
		name: 'CHACABUCO',
		provinceId: 6
	},
	{
		id: 227,
		name: 'JUAN MARTÍN DE PUEYRREDÓN',
		provinceId: 6
	},
	{
		id: 228,
		name: 'GOBERNADOR DUPUY',
		provinceId: 6
	},
	{
		id: 229,
		name: 'BELGRANO',
		provinceId: 6
	},
	{
		id: 230,
		name: 'COCHINOCA',
		provinceId: 7
	},
	{
		id: 231,
		name: 'TILCARA',
		provinceId: 7
	},
	{
		id: 232,
		name: 'TUMBAYA',
		provinceId: 7
	},
	{
		id: 233,
		name: 'LEDESMA',
		provinceId: 7
	},
	{
		id: 234,
		name: 'SAN PEDRO',
		provinceId: 7
	},
	{
		id: 235,
		name: 'EL CARMEN',
		provinceId: 7
	},
	{
		id: 236,
		name: 'SANTA BARBARA',
		provinceId: 7
	},
	{
		id: 237,
		name: 'SANTA CATALINA',
		provinceId: 7
	},
	{
		id: 238,
		name: 'DOCTOR MANUEL BELGRANO',
		provinceId: 7
	},
	{
		id: 239,
		name: 'VALLE GRANDE',
		provinceId: 7
	},
	{
		id: 240,
		name: 'SUSQUES',
		provinceId: 7
	},
	{
		id: 241,
		name: 'HUMAHUACA',
		provinceId: 7
	},
	{
		id: 242,
		name: 'SAN ANTONIO',
		provinceId: 7
	},
	{
		id: 243,
		name: 'YAVI',
		provinceId: 7
	},
	{
		id: 244,
		name: 'RINCONADA',
		provinceId: 7
	},
	{
		id: 245,
		name: 'PALPALA',
		provinceId: 7
	},
	{
		id: 246,
		name: 'EL CUY',
		provinceId: 8
	},
	{
		id: 247,
		name: '25 DE MAYO',
		provinceId: 8
	},
	{
		id: 248,
		name: 'VALCHETA',
		provinceId: 8
	},
	{
		id: 249,
		name: 'PILCANIYEU',
		provinceId: 8
	},
	{
		id: 250,
		name: 'ADOLFO ALSINA',
		provinceId: 8
	},
	{
		id: 251,
		name: 'PICHI MAHUIDA',
		provinceId: 8
	},
	{
		id: 252,
		name: 'SAN ANTONIO',
		provinceId: 8
	},
	{
		id: 253,
		name: 'GENERAL ROCA',
		provinceId: 8
	},
	{
		id: 254,
		name: 'BARILOCHE',
		provinceId: 8
	},
	{
		id: 255,
		name: 'ÑORQUINCO',
		provinceId: 8
	},
	{
		id: 256,
		name: 'AVELLANEDA',
		provinceId: 8
	},
	{
		id: 257,
		name: 'CONESA',
		provinceId: 8
	},
	{
		id: 258,
		name: '9 DE JULIO',
		provinceId: 8
	},
	{
		id: 259,
		name: 'SALAVINA',
		provinceId: 9
	},
	{
		id: 260,
		name: 'SARMIENTO',
		provinceId: 9
	},
	{
		id: 261,
		name: 'AGUIRRE',
		provinceId: 9
	},
	{
		id: 262,
		name: 'ALBERDI',
		provinceId: 9
	},
	{
		id: 263,
		name: 'GUASAYAN',
		provinceId: 9
	},
	{
		id: 264,
		name: 'BANDA',
		provinceId: 9
	},
	{
		id: 265,
		name: 'CAPITAL',
		provinceId: 9
	},
	{
		id: 266,
		name: 'COPO',
		provinceId: 9
	},
	{
		id: 267,
		name: 'JUAN F IBARRA',
		provinceId: 9
	},
	{
		id: 268,
		name: 'PELLEGRINI',
		provinceId: 9
	},
	{
		id: 269,
		name: 'ROBLES',
		provinceId: 9
	},
	{
		id: 270,
		name: 'ATAMISQUI',
		provinceId: 9
	},
	{
		id: 271,
		name: 'AVELLANEDA',
		provinceId: 9
	},
	{
		id: 272,
		name: 'LORETO',
		provinceId: 9
	},
	{
		id: 273,
		name: 'FIGUEROA',
		provinceId: 9
	},
	{
		id: 274,
		name: 'GENERAL TABOADA',
		provinceId: 9
	},
	{
		id: 275,
		name: 'JIMENEZ',
		provinceId: 9
	},
	{
		id: 276,
		name: 'MORENO',
		provinceId: 9
	},
	{
		id: 277,
		name: 'OJO DE AGUA',
		provinceId: 9
	},
	{
		id: 278,
		name: 'RIO HONDO',
		provinceId: 9
	},
	{
		id: 279,
		name: 'SAN MARTIN',
		provinceId: 9
	},
	{
		id: 280,
		name: 'SILIPICA',
		provinceId: 9
	},
	{
		id: 281,
		name: 'CHOYA',
		provinceId: 9
	},
	{
		id: 282,
		name: 'QUEBRACHOS',
		provinceId: 9
	},
	{
		id: 283,
		name: 'MITRE',
		provinceId: 9
	},
	{
		id: 284,
		name: 'BELGRANO',
		provinceId: 9
	},
	{
		id: 285,
		name: 'RIVADAVIA',
		provinceId: 9
	},
	{
		id: 286,
		name: 'MALARGUE',
		provinceId: 10
	},
	{
		id: 287,
		name: 'SAN CARLOS',
		provinceId: 10
	},
	{
		id: 288,
		name: 'SAN MARTIN',
		provinceId: 10
	},
	{
		id: 289,
		name: 'LA PAZ',
		provinceId: 10
	},
	{
		id: 290,
		name: 'LAVALLE',
		provinceId: 10
	},
	{
		id: 291,
		name: 'SANTA ROSA',
		provinceId: 10
	},
	{
		id: 292,
		name: 'GENERAL ALVEAR',
		provinceId: 10
	},
	{
		id: 293,
		name: 'LAS HERAS',
		provinceId: 10
	},
	{
		id: 294,
		name: 'CAPITAL',
		provinceId: 10
	},
	{
		id: 295,
		name: 'GUAYMALLEN',
		provinceId: 10
	},
	{
		id: 296,
		name: 'GODOY CRUZ',
		provinceId: 10
	},
	{
		id: 297,
		name: 'MAIPU',
		provinceId: 10
	},
	{
		id: 298,
		name: 'TUPUNGATO',
		provinceId: 10
	},
	{
		id: 299,
		name: 'LUJAN DE CUYO',
		provinceId: 10
	},
	{
		id: 300,
		name: 'TUNUYAN',
		provinceId: 10
	},
	{
		id: 301,
		name: 'RIVADAVIA',
		provinceId: 10
	},
	{
		id: 302,
		name: 'JUNIN',
		provinceId: 10
	},
	{
		id: 303,
		name: 'SAN RAFAEL',
		provinceId: 10
	},
	{
		id: 304,
		name: 'LAGO ARGENTINO',
		provinceId: 11
	},
	{
		id: 305,
		name: 'DESEADO',
		provinceId: 11
	},
	{
		id: 306,
		name: 'MAGALLANES',
		provinceId: 11
	},
	{
		id: 307,
		name: 'GUER AIKE',
		provinceId: 11
	},
	{
		id: 308,
		name: 'RÍO CHICO',
		provinceId: 11
	},
	{
		id: 309,
		name: 'CORPEN AIKE',
		provinceId: 11
	},
	{
		id: 310,
		name: 'LAGO BUENOS AIRES',
		provinceId: 11
	},
	{
		id: 311,
		name: 'FEDERACION',
		provinceId: 12
	},
	{
		id: 312,
		name: 'GUALEGUAY',
		provinceId: 12
	},
	{
		id: 313,
		name: 'LA PAZ',
		provinceId: 12
	},
	{
		id: 314,
		name: 'FEDERAL',
		provinceId: 12
	},
	{
		id: 315,
		name: 'GUALEGUAYCHU',
		provinceId: 12
	},
	{
		id: 316,
		name: 'DIAMANTE',
		provinceId: 12
	},
	{
		id: 317,
		name: 'VILLAGUAY',
		provinceId: 12
	},
	{
		id: 318,
		name: 'COLON',
		provinceId: 12
	},
	{
		id: 319,
		name: 'FELICIANO',
		provinceId: 12
	},
	{
		id: 320,
		name: 'ISLAS DEL IBICUY',
		provinceId: 12
	},
	{
		id: 321,
		name: 'NOGOYA',
		provinceId: 12
	},
	{
		id: 322,
		name: 'PARANA',
		provinceId: 12
	},
	{
		id: 323,
		name: 'SAN SALVADOR',
		provinceId: 12
	},
	{
		id: 324,
		name: 'URUGUAY',
		provinceId: 12
	},
	{
		id: 325,
		name: 'VICTORIA',
		provinceId: 12
	},
	{
		id: 326,
		name: 'CONCORDIA',
		provinceId: 12
	},
	{
		id: 327,
		name: 'TALA',
		provinceId: 12
	},
	{
		id: 328,
		name: 'LA CALDERA',
		provinceId: 13
	},
	{
		id: 329,
		name: 'SANTA VICTORIA',
		provinceId: 13
	},
	{
		id: 330,
		name: 'METAN',
		provinceId: 13
	},
	{
		id: 331,
		name: 'LA CANDELARIA',
		provinceId: 13
	},
	{
		id: 332,
		name: 'CAFAYATE',
		provinceId: 13
	},
	{
		id: 333,
		name: 'ORAN',
		provinceId: 13
	},
	{
		id: 334,
		name: 'ANTA',
		provinceId: 13
	},
	{
		id: 335,
		name: 'GENERAL JOSE DE SAN MARTÍN',
		provinceId: 13
	},
	{
		id: 336,
		name: 'CHICOANA',
		provinceId: 13
	},
	{
		id: 337,
		name: 'RIVADAVIA',
		provinceId: 13
	},
	{
		id: 338,
		name: 'GENERAL GUEMES',
		provinceId: 13
	},
	{
		id: 339,
		name: 'LA POMA',
		provinceId: 13
	},
	{
		id: 340,
		name: 'LOS ANDES',
		provinceId: 13
	},
	{
		id: 341,
		name: 'CERRILLOS',
		provinceId: 13
	},
	{
		id: 342,
		name: 'MOLINOS',
		provinceId: 13
	},
	{
		id: 343,
		name: 'IRUYA',
		provinceId: 13
	},
	{
		id: 344,
		name: 'SAN CARLOS',
		provinceId: 13
	},
	{
		id: 345,
		name: 'GUACHIPAS',
		provinceId: 13
	},
	{
		id: 346,
		name: 'CAPITAL',
		provinceId: 13
	},
	{
		id: 347,
		name: 'ROSARIO DE LA FRONTERA',
		provinceId: 13
	},
	{
		id: 348,
		name: 'CACHI',
		provinceId: 13
	},
	{
		id: 349,
		name: 'LA VIÑA',
		provinceId: 13
	},
	{
		id: 350,
		name: 'ROSARIO DE LERMA',
		provinceId: 13
	},
	{
		id: 351,
		name: 'FRAY MAMERTO ESQUIU',
		provinceId: 14
	},
	{
		id: 352,
		name: 'BELEN',
		provinceId: 14
	},
	{
		id: 353,
		name: 'AMBATO',
		provinceId: 14
	},
	{
		id: 354,
		name: 'SANTA MARIA',
		provinceId: 14
	},
	{
		id: 355,
		name: 'LA PAZ',
		provinceId: 14
	},
	{
		id: 356,
		name: 'POMAN',
		provinceId: 14
	},
	{
		id: 357,
		name: 'EL ALTO',
		provinceId: 14
	},
	{
		id: 358,
		name: 'ANDALGALÁ',
		provinceId: 14
	},
	{
		id: 359,
		name: 'CAPAYAN',
		provinceId: 14
	},
	{
		id: 360,
		name: 'VALLE VIEJO',
		provinceId: 14
	},
	{
		id: 361,
		name: 'ANCASTI',
		provinceId: 14
	},
	{
		id: 362,
		name: 'PACLIN',
		provinceId: 14
	},
	{
		id: 363,
		name: 'SANTA ROSA',
		provinceId: 14
	},
	{
		id: 364,
		name: 'TINOGASTA',
		provinceId: 14
	},
	{
		id: 365,
		name: 'CAPITAL',
		provinceId: 14
	},
	{
		id: 366,
		name: 'ANTOFAGASTA DE LA SIERRA',
		provinceId: 14
	},
	{
		id: 367,
		name: 'CURACO',
		provinceId: 15
	},
	{
		id: 368,
		name: 'UTRACAN',
		provinceId: 15
	},
	{
		id: 369,
		name: 'REALICO',
		provinceId: 15
	},
	{
		id: 370,
		name: 'CAPITAL',
		provinceId: 15
	},
	{
		id: 371,
		name: 'TOAY',
		provinceId: 15
	},
	{
		id: 372,
		name: 'PUELEN',
		provinceId: 15
	},
	{
		id: 373,
		name: 'CONHELO',
		provinceId: 15
	},
	{
		id: 374,
		name: 'RANCUL',
		provinceId: 15
	},
	{
		id: 375,
		name: 'LIMAY MAHUIDA',
		provinceId: 15
	},
	{
		id: 376,
		name: 'QUEMU QUEMU',
		provinceId: 15
	},
	{
		id: 377,
		name: 'CHAPALEUFU',
		provinceId: 15
	},
	{
		id: 378,
		name: 'HUCAL',
		provinceId: 15
	},
	{
		id: 379,
		name: 'CATRILO',
		provinceId: 15
	},
	{
		id: 380,
		name: 'MARACO',
		provinceId: 15
	},
	{
		id: 381,
		name: 'LOVENTUE',
		provinceId: 15
	},
	{
		id: 382,
		name: 'LIHUEL CALEL',
		provinceId: 15
	},
	{
		id: 383,
		name: 'GUATRACHE',
		provinceId: 15
	},
	{
		id: 384,
		name: 'ATREUCO',
		provinceId: 15
	},
	{
		id: 385,
		name: 'CALEU CALEU',
		provinceId: 15
	},
	{
		id: 386,
		name: 'CHICAL CO',
		provinceId: 15
	},
	{
		id: 387,
		name: 'TRENEL',
		provinceId: 15
	},
	{
		id: 388,
		name: 'CHALILEO',
		provinceId: 15
	},
	{
		id: 389,
		name: 'SANAGASTA',
		provinceId: 16
	},
	{
		id: 390,
		name: 'ARAUCO',
		provinceId: 16
	},
	{
		id: 391,
		name: 'CHAMICAL',
		provinceId: 16
	},
	{
		id: 392,
		name: 'GENERAL OCAMPO',
		provinceId: 16
	},
	{
		id: 393,
		name: 'SAN BLAS DE LOS SAUCES',
		provinceId: 16
	},
	{
		id: 394,
		name: 'GENERAL BELGRANO',
		provinceId: 16
	},
	{
		id: 395,
		name: 'ROSARIO VERA PEÑALOZA',
		provinceId: 16
	},
	{
		id: 396,
		name: 'CHILECITO',
		provinceId: 16
	},
	{
		id: 397,
		name: 'VINCHINA',
		provinceId: 16
	},
	{
		id: 398,
		name: 'FAMATINA',
		provinceId: 16
	},
	{
		id: 399,
		name: 'CAPITAL',
		provinceId: 16
	},
	{
		id: 400,
		name: 'GENERAL LAMADRID',
		provinceId: 16
	},
	{
		id: 401,
		name: 'CORONEL FELIPE VARELA',
		provinceId: 16
	},
	{
		id: 402,
		name: 'GENERAL JUAN F QUIROGA',
		provinceId: 16
	},
	{
		id: 403,
		name: 'GENERAL SAN MARTÍN',
		provinceId: 16
	},
	{
		id: 404,
		name: 'INDEPENDENCIA',
		provinceId: 16
	},
	{
		id: 405,
		name: 'CASTRO BARROS',
		provinceId: 16
	},
	{
		id: 406,
		name: 'GENERAL ÁNGEL VERA PEÑALOZA',
		provinceId: 16
	},
	{
		id: 407,
		name: 'LAVALLE',
		provinceId: 17
	},
	{
		id: 408,
		name: 'EMPEDRADO',
		provinceId: 17
	},
	{
		id: 409,
		name: 'GOYA',
		provinceId: 17
	},
	{
		id: 410,
		name: 'SALADAS',
		provinceId: 17
	},
	{
		id: 411,
		name: 'BELLA VISTA',
		provinceId: 17
	},
	{
		id: 412,
		name: 'ITUZAINGO',
		provinceId: 17
	},
	{
		id: 413,
		name: 'SAN ROQUE',
		provinceId: 17
	},
	{
		id: 414,
		name: 'CURUZU CUATIA',
		provinceId: 17
	},
	{
		id: 415,
		name: 'SAN LUIS DEL PALMAR',
		provinceId: 17
	},
	{
		id: 416,
		name: 'GENERAL ALVEAR',
		provinceId: 17
	},
	{
		id: 417,
		name: 'SAN COSME',
		provinceId: 17
	},
	{
		id: 418,
		name: 'CONCEPCION',
		provinceId: 17
	},
	{
		id: 419,
		name: 'GENERAL PAZ',
		provinceId: 17
	},
	{
		id: 420,
		name: 'MONTE CASEROS',
		provinceId: 17
	},
	{
		id: 421,
		name: 'ITATI',
		provinceId: 17
	},
	{
		id: 422,
		name: 'PASO DE LOS LIBRES',
		provinceId: 17
	},
	{
		id: 423,
		name: 'ESQUINA',
		provinceId: 17
	},
	{
		id: 424,
		name: 'SAN MARTIN',
		provinceId: 17
	},
	{
		id: 425,
		name: 'SANTO TOME',
		provinceId: 17
	},
	{
		id: 426,
		name: 'MERCEDES',
		provinceId: 17
	},
	{
		id: 427,
		name: 'SAN MIGUEL',
		provinceId: 17
	},
	{
		id: 428,
		name: 'BERON DE ASTRADA',
		provinceId: 17
	},
	{
		id: 429,
		name: 'CAPITAL',
		provinceId: 17
	},
	{
		id: 430,
		name: 'MBURUCUYA',
		provinceId: 17
	},
	{
		id: 431,
		name: 'SAUCE',
		provinceId: 17
	},
	{
		id: 432,
		name: 'LIBERTADOR GENERAL SAN MARTÍN',
		provinceId: 18
	},
	{
		id: 433,
		name: 'SAN PEDRO',
		provinceId: 18
	},
	{
		id: 434,
		name: 'CAINGUAS',
		provinceId: 18
	},
	{
		id: 435,
		name: 'APOSTOLES',
		provinceId: 18
	},
	{
		id: 436,
		name: 'SAN IGNACIO',
		provinceId: 18
	},
	{
		id: 437,
		name: 'OBERA',
		provinceId: 18
	},
	{
		id: 438,
		name: 'SAN JAVIER',
		provinceId: 18
	},
	{
		id: 439,
		name: 'CANDELARIA',
		provinceId: 18
	},
	{
		id: 440,
		name: 'CONCEPCION',
		provinceId: 18
	},
	{
		id: 441,
		name: 'ELDORADO',
		provinceId: 18
	},
	{
		id: 442,
		name: 'LEANDRO N. ALEM',
		provinceId: 18
	},
	{
		id: 443,
		name: 'MONTECARLO',
		provinceId: 18
	},
	{
		id: 444,
		name: 'GUARANI',
		provinceId: 18
	},
	{
		id: 445,
		name: 'IGUAZU',
		provinceId: 18
	},
	{
		id: 446,
		name: 'CAPITAL',
		provinceId: 18
	},
	{
		id: 447,
		name: '25 DE MAYO',
		provinceId: 18
	},
	{
		id: 448,
		name: 'GENERAL MANUEL BELGRANO',
		provinceId: 18
	},
	{
		id: 449,
		name: 'CRUZ ALTA',
		provinceId: 19
	},
	{
		id: 450,
		name: 'CHICLIGASTA',
		provinceId: 19
	},
	{
		id: 451,
		name: 'SIMOCA',
		provinceId: 19
	},
	{
		id: 452,
		name: 'MONTEROS',
		provinceId: 19
	},
	{
		id: 453,
		name: 'TAFI DEL VALLE',
		provinceId: 19
	},
	{
		id: 454,
		name: 'LEALES',
		provinceId: 19
	},
	{
		id: 455,
		name: 'LULES',
		provinceId: 19
	},
	{
		id: 456,
		name: 'BURRUYACU',
		provinceId: 19
	},
	{
		id: 457,
		name: 'RIO CHICO',
		provinceId: 19
	},
	{
		id: 458,
		name: 'TAFI VIEJO',
		provinceId: 19
	},
	{
		id: 459,
		name: 'YERBA BUENA',
		provinceId: 19
	},
	{
		id: 460,
		name: 'LA COCHA',
		provinceId: 19
	},
	{
		id: 461,
		name: 'JUAN B ALBERDI',
		provinceId: 19
	},
	{
		id: 462,
		name: 'TRANCAS',
		provinceId: 19
	},
	{
		id: 463,
		name: 'GRANEROS',
		provinceId: 19
	},
	{
		id: 464,
		name: 'CAPITAL',
		provinceId: 19
	},
	{
		id: 465,
		name: 'FAMAILLA',
		provinceId: 19
	},
	{
		id: 466,
		name: 'FORMOSA',
		provinceId: 20
	},
	{
		id: 467,
		name: 'PATIÑO',
		provinceId: 20
	},
	{
		id: 468,
		name: 'BERMEJO',
		provinceId: 20
	},
	{
		id: 469,
		name: 'PILCOMAYO',
		provinceId: 20
	},
	{
		id: 470,
		name: 'PIRANE',
		provinceId: 20
	},
	{
		id: 471,
		name: 'PILAGAS',
		provinceId: 20
	},
	{
		id: 472,
		name: 'LAISHI',
		provinceId: 20
	},
	{
		id: 473,
		name: 'MATACOS',
		provinceId: 20
	},
	{
		id: 474,
		name: 'RAMON LISTA',
		provinceId: 20
	},
	{
		id: 475,
		name: 'CONFLUENCIA',
		provinceId: 21
	},
	{
		id: 476,
		name: 'CATAN LIL',
		provinceId: 21
	},
	{
		id: 477,
		name: 'MINAS',
		provinceId: 21
	},
	{
		id: 478,
		name: 'LACAR',
		provinceId: 21
	},
	{
		id: 479,
		name: 'CHOS MALAL',
		provinceId: 21
	},
	{
		id: 480,
		name: 'LONCOPUE',
		provinceId: 21
	},
	{
		id: 481,
		name: 'PICUN LEUFU',
		provinceId: 21
	},
	{
		id: 482,
		name: 'COLLON CURA',
		provinceId: 21
	},
	{
		id: 483,
		name: 'AÑELO',
		provinceId: 21
	},
	{
		id: 484,
		name: 'LOS LAGOS',
		provinceId: 21
	},
	{
		id: 485,
		name: 'PEHUENCHES',
		provinceId: 21
	},
	{
		id: 486,
		name: 'ALUMINE',
		provinceId: 21
	},
	{
		id: 487,
		name: 'ÑORQUIN',
		provinceId: 21
	},
	{
		id: 488,
		name: 'PICUNCHES',
		provinceId: 21
	},
	{
		id: 489,
		name: 'ZAPALA',
		provinceId: 21
	},
	{
		id: 490,
		name: 'HUILICHES',
		provinceId: 21
	},
	{
		id: 491,
		name: 'USHUAIA',
		provinceId: 22
	},
	{
		id: 492,
		name: 'ISLAS DEL ATLANTICO SUR',
		provinceId: 22
	},
	{
		id: 493,
		name: 'RIO GRANDE',
		provinceId: 22
	},
	{
		id: 494,
		name: 'ANTÁRTIDA ARGENTINA',
		provinceId: 22
	},
	{
		id: 495,
		name: 'TOLHUIN',
		provinceId: 22
	},
	{
		id: 496,
		name: 'ZONDA',
		provinceId: 23
	},
	{
		id: 497,
		name: 'JACHAL',
		provinceId: 23
	},
	{
		id: 498,
		name: 'POCITO',
		provinceId: 23
	},
	{
		id: 499,
		name: 'CAUCETE',
		provinceId: 23
	},
	{
		id: 500,
		name: 'CALINGASTA',
		provinceId: 23
	},
	{
		id: 501,
		name: 'ULLUM',
		provinceId: 23
	},
	{
		id: 502,
		name: 'CAPITAL',
		provinceId: 23
	},
	{
		id: 503,
		name: '9 DE JULIO',
		provinceId: 23
	},
	{
		id: 504,
		name: 'IGLESIA',
		provinceId: 23
	},
	{
		id: 505,
		name: '25 DE MAYO',
		provinceId: 23
	},
	{
		id: 506,
		name: 'ANGACO',
		provinceId: 23
	},
	{
		id: 507,
		name: 'VALLE FERTIL',
		provinceId: 23
	},
	{
		id: 508,
		name: 'SARMIENTO',
		provinceId: 23
	},
	{
		id: 509,
		name: 'RIVADAVIA',
		provinceId: 23
	},
	{
		id: 510,
		name: 'SANTA LUCIA',
		provinceId: 23
	},
	{
		id: 511,
		name: 'ALBARDON',
		provinceId: 23
	},
	{
		id: 512,
		name: 'CHIMBAS',
		provinceId: 23
	},
	{
		id: 513,
		name: 'RAWSON',
		provinceId: 23
	},
	{
		id: 514,
		name: 'SAN MARTIN',
		provinceId: 23
	},
	{
		id: 515,
		name: 'COMUNA 9',
		provinceId: 24
	},
	{
		id: 516,
		name: 'COMUNA 6',
		provinceId: 24
	},
	{
		id: 517,
		name: 'COMUNA 3',
		provinceId: 24
	},
	{
		id: 518,
		name: 'COMUNA 7',
		provinceId: 24
	},
	{
		id: 519,
		name: 'COMUNA 12',
		provinceId: 24
	},
	{
		id: 520,
		name: 'COMUNA 11',
		provinceId: 24
	},
	{
		id: 521,
		name: 'COMUNA 14',
		provinceId: 24
	},
	{
		id: 522,
		name: 'COMUNA 10',
		provinceId: 24
	},
	{
		id: 523,
		name: 'COMUNA 13',
		provinceId: 24
	},
	{
		id: 524,
		name: 'COMUNA 2',
		provinceId: 24
	},
	{
		id: 525,
		name: 'COMUNA 5',
		provinceId: 24
	},
	{
		id: 526,
		name: 'COMUNA 15',
		provinceId: 24
	},
	{
		id: 527,
		name: 'COMUNA 1',
		provinceId: 24
	},
	{
		id: 528,
		name: 'COMUNA 8',
		provinceId: 24
	},
	{
		id: 529,
		name: 'COMUNA 4',
		provinceId: 24
	}
]

export default departments