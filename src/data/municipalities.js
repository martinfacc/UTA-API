const municipalities = [
	{
		id: 1,
		name: 'LA ESCONDIDA',
		departmentId: 1
	},
	{
		id: 2,
		name: 'LAPACHITO',
		departmentId: 1
	},
	{
		id: 3,
		name: 'MAKALLE',
		departmentId: 1
	},
	{
		id: 4,
		name: 'LA VERDE',
		departmentId: 1
	},
	{
		id: 5,
		name: 'GANCEDO',
		departmentId: 2
	},
	{
		id: 6,
		name: 'GENERAL CAPDEVILA',
		departmentId: 2
	},
	{
		id: 7,
		name: 'GENERAL PINEDO',
		departmentId: 2
	},
	{
		id: 8,
		name: 'CORZUELA',
		departmentId: 3
	},
	{
		id: 9,
		name: 'ENRIQUE URIEN',
		departmentId: 4
	},
	{
		id: 10,
		name: 'CORONEL DU GRATY',
		departmentId: 4
	},
	{
		id: 11,
		name: 'VILLA ANGELA',
		departmentId: 4
	},
	{
		id: 12,
		name: 'MIRAFLORES',
		departmentId: 5
	},
	{
		id: 13,
		name: 'EL ESPINILLO',
		departmentId: 5
	},
	{
		id: 14,
		name: 'MISION NUEVA POMPEYA',
		departmentId: 5
	},
	{
		id: 15,
		name: 'FUERTE ESPERANZA',
		departmentId: 5
	},
	{
		id: 16,
		name: 'JUAN JOSE CASTELLI',
		departmentId: 5
	},
	{
		id: 17,
		name: 'EL SAUZALITO',
		departmentId: 5
	},
	{
		id: 18,
		name: 'VILLA RIO BERMEJITO',
		departmentId: 5
	},
	{
		id: 19,
		name: 'COLONIAS UNIDAS',
		departmentId: 6
	},
	{
		id: 20,
		name: 'CAPITAN SOLARI',
		departmentId: 6
	},
	{
		id: 21,
		name: 'LAS GARCITAS',
		departmentId: 6
	},
	{
		id: 22,
		name: 'COLONIA ELISA',
		departmentId: 6
	},
	{
		id: 23,
		name: 'COLONIA ABORIGEN',
		departmentId: 7
	},
	{
		id: 24,
		name: 'MACHAGAI',
		departmentId: 7
	},
	{
		id: 25,
		name: 'PUERTO EVA PERON',
		departmentId: 8
	},
	{
		id: 26,
		name: 'LA LEONESA',
		departmentId: 8
	},
	{
		id: 27,
		name: 'LAS PALMAS',
		departmentId: 8
	},
	{
		id: 28,
		name: 'ISLA DEL CERRITO',
		departmentId: 8
	},
	{
		id: 29,
		name: 'GENERAL VEDIA',
		departmentId: 8
	},
	{
		id: 30,
		name: 'PUERTO BERMEJO',
		departmentId: 8
	},
	{
		id: 31,
		name: 'LA EDUVIGIS',
		departmentId: 9
	},
	{
		id: 32,
		name: 'LAGUNA LIMPIA',
		departmentId: 9
	},
	{
		id: 33,
		name: 'PRESIDENCIA ROCA',
		departmentId: 9
	},
	{
		id: 34,
		name: 'GENERAL SAN MARTIN',
		departmentId: 9
	},
	{
		id: 35,
		name: 'CIERVO PETISO',
		departmentId: 9
	},
	{
		id: 36,
		name: 'PAMPA ALMIRON',
		departmentId: 9
	},
	{
		id: 37,
		name: 'PAMPA DEL INDIO',
		departmentId: 9
	},
	{
		id: 38,
		name: 'BARRANQUERAS',
		departmentId: 10
	},
	{
		id: 39,
		name: 'RESISTENCIA',
		departmentId: 10
	},
	{
		id: 40,
		name: 'BASAIL',
		departmentId: 10
	},
	{
		id: 41,
		name: 'PUERTO VILELAS',
		departmentId: 10
	},
	{
		id: 42,
		name: 'FONTANA',
		departmentId: 10
	},
	{
		id: 43,
		name: 'LAGUNA BLANCA',
		departmentId: 11
	},
	{
		id: 44,
		name: 'PUERTO TIROL',
		departmentId: 11
	},
	{
		id: 45,
		name: 'COLONIA POPULAR',
		departmentId: 11
	},
	{
		id: 46,
		name: 'LA CLOTILDE',
		departmentId: 12
	},
	{
		id: 47,
		name: 'LA TIGRA',
		departmentId: 12
	},
	{
		id: 48,
		name: 'SAN BERNARDO',
		departmentId: 12
	},
	{
		id: 49,
		name: 'PRESIDENCIA DE LA PLAZA',
		departmentId: 13
	},
	{
		id: 50,
		name: 'VILLA BERTHET',
		departmentId: 14
	},
	{
		id: 51,
		name: 'SAMUHU',
		departmentId: 14
	},
	{
		id: 52,
		name: 'MARGARITA BELEN',
		departmentId: 15
	},
	{
		id: 53,
		name: 'COLONIA BENITEZ',
		departmentId: 15
	},
	{
		id: 54,
		name: 'NAPENAY',
		departmentId: 16
	},
	{
		id: 55,
		name: 'AVIA TERAI',
		departmentId: 16
	},
	{
		id: 56,
		name: 'CAMPO LARGO',
		departmentId: 16
	},
	{
		id: 57,
		name: 'HERMOSO CAMPO',
		departmentId: 17
	},
	{
		id: 58,
		name: 'TRES ISLETAS',
		departmentId: 18
	},
	{
		id: 59,
		name: 'COTE LAI',
		departmentId: 19
	},
	{
		id: 60,
		name: 'CHARADAI',
		departmentId: 19
	},
	{
		id: 61,
		name: 'TACO POZO',
		departmentId: 20
	},
	{
		id: 62,
		name: 'LOS FRENTONES',
		departmentId: 20
	},
	{
		id: 63,
		name: 'CONCEPCION DEL BERMEJO',
		departmentId: 20
	},
	{
		id: 64,
		name: 'PAMPA DEL INFIERNO',
		departmentId: 20
	},
	{
		id: 65,
		name: 'PRESIDENCIA ROQUE SAENZ PEÑA',
		departmentId: 21
	},
	{
		id: 66,
		name: 'CHARATA',
		departmentId: 22
	},
	{
		id: 67,
		name: 'LAS BREÑAS',
		departmentId: 23
	},
	{
		id: 68,
		name: 'SANTA SYLVINA',
		departmentId: 24
	},
	{
		id: 69,
		name: 'CHOROTIS',
		departmentId: 24
	},
	{
		id: 70,
		name: 'QUITILIPI',
		departmentId: 25
	},
	{
		id: 71,
		name: 'QUILINO',
		departmentId: 26
	},
	{
		id: 72,
		name: 'DEAN FUNES',
		departmentId: 26
	},
	{
		id: 73,
		name: 'CHUÑA',
		departmentId: 26
	},
	{
		id: 74,
		name: 'COPACABANA',
		departmentId: 26
	},
	{
		id: 75,
		name: 'VILLA GUTIERREZ',
		departmentId: 26
	},
	{
		id: 76,
		name: 'LOS POZOS',
		departmentId: 26
	},
	{
		id: 77,
		name: 'CAÑADA DE RIO PINTO',
		departmentId: 26
	},
	{
		id: 78,
		name: 'OLIVARES DE SAN NICOLAS',
		departmentId: 26
	},
	{
		id: 79,
		name: 'AREA SIN GOBIERNO',
		departmentId: 26
	},
	{
		id: 80,
		name: 'AVELLANEDA',
		departmentId: 26
	},
	{
		id: 81,
		name: 'ESTANCIA DE GUADALUPE',
		departmentId: 27
	},
	{
		id: 82,
		name: 'LA PLAYA',
		departmentId: 27
	},
	{
		id: 83,
		name: 'TALAINI',
		departmentId: 27
	},
	{
		id: 84,
		name: 'EL CHACHO',
		departmentId: 27
	},
	{
		id: 85,
		name: 'AREA SIN GOBIERNO',
		departmentId: 27
	},
	{
		id: 86,
		name: 'SAN CARLOS MINAS',
		departmentId: 27
	},
	{
		id: 87,
		name: 'GUASAPAMPA',
		departmentId: 27
	},
	{
		id: 88,
		name: 'CIENAGA DEL CORO',
		departmentId: 27
	},
	{
		id: 89,
		name: 'TOSNO',
		departmentId: 27
	},
	{
		id: 90,
		name: 'LABORDE',
		departmentId: 28
	},
	{
		id: 91,
		name: 'BELL VILLE',
		departmentId: 28
	},
	{
		id: 92,
		name: 'AREA SIN GOBIERNO',
		departmentId: 28
	},
	{
		id: 93,
		name: 'MONTE MAIZ',
		departmentId: 28
	},
	{
		id: 94,
		name: 'PUEBLO ITALIANO',
		departmentId: 28
	},
	{
		id: 95,
		name: 'ORDOÑEZ',
		departmentId: 28
	},
	{
		id: 96,
		name: 'CHILIBROSTE',
		departmentId: 28
	},
	{
		id: 97,
		name: 'ALTO ALEGRE',
		departmentId: 28
	},
	{
		id: 98,
		name: 'COLONIA BISMARCK',
		departmentId: 28
	},
	{
		id: 99,
		name: 'WENCESLAO ESCALANTE',
		departmentId: 28
	},
	{
		id: 100,
		name: 'CINTRA',
		departmentId: 28
	},
	{
		id: 101,
		name: 'MORRISON',
		departmentId: 28
	},
	{
		id: 102,
		name: 'IDIAZABAL',
		departmentId: 28
	},
	{
		id: 103,
		name: 'VILLA LOS PATOS',
		departmentId: 28
	},
	{
		id: 104,
		name: 'SAN MARCOS SUD',
		departmentId: 28
	},
	{
		id: 105,
		name: 'VIAMONTE',
		departmentId: 28
	},
	{
		id: 106,
		name: 'NOETINGER',
		departmentId: 28
	},
	{
		id: 107,
		name: 'COLONIA BREMEN',
		departmentId: 28
	},
	{
		id: 108,
		name: 'PASCANAS',
		departmentId: 28
	},
	{
		id: 109,
		name: 'CANALS',
		departmentId: 28
	},
	{
		id: 110,
		name: 'BALLESTEROS',
		departmentId: 28
	},
	{
		id: 111,
		name: 'JUSTINIANO POSSE',
		departmentId: 28
	},
	{
		id: 112,
		name: 'ALDEA SANTA MARIA',
		departmentId: 28
	},
	{
		id: 113,
		name: 'ANA ZUMARAN',
		departmentId: 28
	},
	{
		id: 114,
		name: 'SAN ANTONIO DE LITIN',
		departmentId: 28
	},
	{
		id: 115,
		name: 'MONTE LEÑA',
		departmentId: 28
	},
	{
		id: 116,
		name: 'BENJAMIN GOULD',
		departmentId: 28
	},
	{
		id: 117,
		name: 'BALLESTEROS SUD',
		departmentId: 28
	},
	{
		id: 118,
		name: 'AMBOY',
		departmentId: 29
	},
	{
		id: 119,
		name: 'SANTA ROSA DE CALAMUCHITA',
		departmentId: 29
	},
	{
		id: 120,
		name: 'CAÑADA DEL SAUCE',
		departmentId: 29
	},
	{
		id: 121,
		name: 'LUTTI',
		departmentId: 29
	},
	{
		id: 122,
		name: 'VILLA YACANTO',
		departmentId: 29
	},
	{
		id: 123,
		name: 'LAS CALERAS',
		departmentId: 29
	},
	{
		id: 124,
		name: 'EMBALSE',
		departmentId: 29
	},
	{
		id: 125,
		name: 'VILLA GENERAL BELGRANO',
		departmentId: 29
	},
	{
		id: 126,
		name: 'AREA SIN GOBIERNO',
		departmentId: 29
	},
	{
		id: 127,
		name: 'LAS BAJADAS',
		departmentId: 29
	},
	{
		id: 128,
		name: 'VILLA AMANCAY',
		departmentId: 29
	},
	{
		id: 129,
		name: 'VILLA QUILLINZO',
		departmentId: 29
	},
	{
		id: 130,
		name: 'RIO DE LOS SAUCES',
		departmentId: 29
	},
	{
		id: 131,
		name: 'LA CUMBRECITA',
		departmentId: 29
	},
	{
		id: 132,
		name: 'LA CRUZ',
		departmentId: 29
	},
	{
		id: 133,
		name: 'CALMAYO',
		departmentId: 29
	},
	{
		id: 134,
		name: 'LOS REARTES',
		departmentId: 29
	},
	{
		id: 135,
		name: 'VILLA CIUDAD PARQUE LOS REARTES',
		departmentId: 29
	},
	{
		id: 136,
		name: 'SAN IGNACIO',
		departmentId: 29
	},
	{
		id: 137,
		name: 'LOS MOLINOS',
		departmentId: 29
	},
	{
		id: 138,
		name: 'SEGUNDA USINA',
		departmentId: 29
	},
	{
		id: 139,
		name: 'VILLA RUMIPAL',
		departmentId: 29
	},
	{
		id: 140,
		name: 'LOS CONDORES',
		departmentId: 29
	},
	{
		id: 141,
		name: 'VILLA DEL DIQUE',
		departmentId: 29
	},
	{
		id: 142,
		name: 'SAN AGUSTIN',
		departmentId: 29
	},
	{
		id: 143,
		name: 'AREA SIN GOBIERNO',
		departmentId: 30
	},
	{
		id: 144,
		name: 'CERRO COLORADO',
		departmentId: 30
	},
	{
		id: 145,
		name: 'LA RINCONADA',
		departmentId: 30
	},
	{
		id: 146,
		name: 'GUTEMBERG',
		departmentId: 30
	},
	{
		id: 147,
		name: 'LOS HOYOS',
		departmentId: 30
	},
	{
		id: 148,
		name: 'RAYO CORTADO',
		departmentId: 30
	},
	{
		id: 149,
		name: 'EUFRASIO LOZA',
		departmentId: 30
	},
	{
		id: 150,
		name: 'VILLA CANDELARIA NORTE',
		departmentId: 30
	},
	{
		id: 151,
		name: 'SEBASTIAN ELCANO',
		departmentId: 30
	},
	{
		id: 152,
		name: 'CHAÑAR VIEJO',
		departmentId: 30
	},
	{
		id: 153,
		name: 'SANTA ELENA',
		departmentId: 30
	},
	{
		id: 154,
		name: 'PUESTO DE CASTRO',
		departmentId: 30
	},
	{
		id: 155,
		name: 'VILLA DE MARIA',
		departmentId: 30
	},
	{
		id: 156,
		name: 'SALSACATE',
		departmentId: 31
	},
	{
		id: 157,
		name: 'LOS TALARES',
		departmentId: 31
	},
	{
		id: 158,
		name: 'SAN GERONIMO',
		departmentId: 31
	},
	{
		id: 159,
		name: 'CHANCANI',
		departmentId: 31
	},
	{
		id: 160,
		name: 'LAS PALMAS',
		departmentId: 31
	},
	{
		id: 161,
		name: 'AREA SIN GOBIERNO',
		departmentId: 31
	},
	{
		id: 162,
		name: 'VILLA DE POCHO',
		departmentId: 31
	},
	{
		id: 163,
		name: 'TALA CAÑADA',
		departmentId: 31
	},
	{
		id: 164,
		name: 'LUCA',
		departmentId: 32
	},
	{
		id: 165,
		name: 'TICINO',
		departmentId: 32
	},
	{
		id: 166,
		name: 'VILLA NUEVA',
		departmentId: 32
	},
	{
		id: 167,
		name: 'ARROYO CABRAL',
		departmentId: 32
	},
	{
		id: 168,
		name: 'LA PLAYOSA',
		departmentId: 32
	},
	{
		id: 169,
		name: 'ARROYO ALGODON',
		departmentId: 32
	},
	{
		id: 170,
		name: 'CHAZON',
		departmentId: 32
	},
	{
		id: 171,
		name: 'VILLA MARIA',
		departmentId: 32
	},
	{
		id: 172,
		name: 'AREA SIN GOBIERNO',
		departmentId: 32
	},
	{
		id: 173,
		name: 'LA LAGUNA',
		departmentId: 32
	},
	{
		id: 174,
		name: 'SILVIO PELLICO',
		departmentId: 32
	},
	{
		id: 175,
		name: 'ETRURIA',
		departmentId: 32
	},
	{
		id: 176,
		name: 'AUSONIA',
		departmentId: 32
	},
	{
		id: 177,
		name: 'PASCO',
		departmentId: 32
	},
	{
		id: 178,
		name: 'LA PALESTINA',
		departmentId: 32
	},
	{
		id: 179,
		name: 'TIO PUJIO',
		departmentId: 32
	},
	{
		id: 180,
		name: 'LEONES',
		departmentId: 33
	},
	{
		id: 181,
		name: 'CAVANAGH',
		departmentId: 33
	},
	{
		id: 182,
		name: 'ISLA VERDE',
		departmentId: 33
	},
	{
		id: 183,
		name: 'ALEJO LEDESMA',
		departmentId: 33
	},
	{
		id: 184,
		name: 'GUATIMOZIN',
		departmentId: 33
	},
	{
		id: 185,
		name: 'GENERAL ROCA',
		departmentId: 33
	},
	{
		id: 186,
		name: 'CAPITAN GENERAL BERNARDO O HIGGINS',
		departmentId: 33
	},
	{
		id: 187,
		name: 'COLONIA BARGE',
		departmentId: 33
	},
	{
		id: 188,
		name: 'INRIVILLE',
		departmentId: 33
	},
	{
		id: 189,
		name: 'GENERAL BALDISSERA',
		departmentId: 33
	},
	{
		id: 190,
		name: 'SAIRA',
		departmentId: 33
	},
	{
		id: 191,
		name: 'CAMILO ALDAO',
		departmentId: 33
	},
	{
		id: 192,
		name: 'AREA SIN GOBIERNO',
		departmentId: 33
	},
	{
		id: 193,
		name: 'MARCOS JUAREZ',
		departmentId: 33
	},
	{
		id: 194,
		name: 'CRUZ ALTA',
		departmentId: 33
	},
	{
		id: 195,
		name: 'VILLA ELISA',
		departmentId: 33
	},
	{
		id: 196,
		name: 'LOS SURGENTES',
		departmentId: 33
	},
	{
		id: 197,
		name: 'SALADILLO',
		departmentId: 33
	},
	{
		id: 198,
		name: 'COLONIA ITALIANA',
		departmentId: 33
	},
	{
		id: 199,
		name: 'MONTE BUEY',
		departmentId: 33
	},
	{
		id: 200,
		name: 'ARIAS',
		departmentId: 33
	},
	{
		id: 201,
		name: 'CORRAL DE BUSTOS',
		departmentId: 33
	},
	{
		id: 202,
		name: 'COLONIA TIROLESA',
		departmentId: 34
	},
	{
		id: 203,
		name: 'SALSIPUEDES',
		departmentId: 34
	},
	{
		id: 204,
		name: 'SALDAN',
		departmentId: 34
	},
	{
		id: 205,
		name: 'AGUA DE ORO',
		departmentId: 34
	},
	{
		id: 206,
		name: 'COLONIA VICENTE AG├£ERO',
		departmentId: 34
	},
	{
		id: 207,
		name: 'JESUS MARIA',
		departmentId: 34
	},
	{
		id: 208,
		name: 'ESTACION JUAREZ CELMAN',
		departmentId: 34
	},
	{
		id: 209,
		name: 'AREA SIN GOBIERNO',
		departmentId: 34
	},
	{
		id: 210,
		name: 'MI GRANJA',
		departmentId: 34
	},
	{
		id: 211,
		name: 'ESTACION GENERAL PAZ',
		departmentId: 34
	},
	{
		id: 212,
		name: 'MALVINAS ARGENTINAS',
		departmentId: 34
	},
	{
		id: 213,
		name: 'COLONIA CAROYA',
		departmentId: 34
	},
	{
		id: 214,
		name: 'VILLA ALLENDE',
		departmentId: 34
	},
	{
		id: 215,
		name: 'EL MANZANO',
		departmentId: 34
	},
	{
		id: 216,
		name: 'UNQUILLO',
		departmentId: 34
	},
	{
		id: 217,
		name: 'LA GRANJA',
		departmentId: 34
	},
	{
		id: 218,
		name: 'LA CALERA',
		departmentId: 34
	},
	{
		id: 219,
		name: 'RIO CEBALLOS',
		departmentId: 34
	},
	{
		id: 220,
		name: 'MENDIOLAZA',
		departmentId: 34
	},
	{
		id: 221,
		name: 'TINOCO',
		departmentId: 34
	},
	{
		id: 222,
		name: 'VILLA CERRO AZUL',
		departmentId: 34
	},
	{
		id: 223,
		name: 'LOZADA',
		departmentId: 35
	},
	{
		id: 224,
		name: 'LA RANCHERITA',
		departmentId: 35
	},
	{
		id: 225,
		name: 'VILLA DEL PRADO',
		departmentId: 35
	},
	{
		id: 226,
		name: 'AREA SIN GOBIERNO',
		departmentId: 35
	},
	{
		id: 227,
		name: 'DESPEÑADEROS',
		departmentId: 35
	},
	{
		id: 228,
		name: 'ANISACATE',
		departmentId: 35
	},
	{
		id: 229,
		name: 'VILLA LA BOLSA',
		departmentId: 35
	},
	{
		id: 230,
		name: 'MONTE RALO',
		departmentId: 35
	},
	{
		id: 231,
		name: 'LOS CEDROS',
		departmentId: 35
	},
	{
		id: 232,
		name: 'RAFAEL GARCIA',
		departmentId: 35
	},
	{
		id: 233,
		name: 'VILLA PARQUE SANTA ANA',
		departmentId: 35
	},
	{
		id: 234,
		name: 'FALDA DEL CARMEN',
		departmentId: 35
	},
	{
		id: 235,
		name: 'ALTA GRACIA',
		departmentId: 35
	},
	{
		id: 236,
		name: 'DIQUE CHICO',
		departmentId: 35
	},
	{
		id: 237,
		name: 'SAN CLEMENTE',
		departmentId: 35
	},
	{
		id: 238,
		name: 'VILLA LOS AROMOS',
		departmentId: 35
	},
	{
		id: 239,
		name: 'TOLEDO',
		departmentId: 35
	},
	{
		id: 240,
		name: 'VILLA CIUDAD DE AMERICA',
		departmentId: 35
	},
	{
		id: 241,
		name: 'BOUWER',
		departmentId: 35
	},
	{
		id: 242,
		name: 'LA SERRANITA',
		departmentId: 35
	},
	{
		id: 243,
		name: 'VALLE DE ANISACATE',
		departmentId: 35
	},
	{
		id: 244,
		name: 'VILLA SAN ISIDRO',
		departmentId: 35
	},
	{
		id: 245,
		name: 'POTRERO DE GARAY',
		departmentId: 35
	},
	{
		id: 246,
		name: 'LA PAISANITA',
		departmentId: 35
	},
	{
		id: 247,
		name: 'MALAGUEÑO',
		departmentId: 35
	},
	{
		id: 248,
		name: 'LA PUERTA',
		departmentId: 36
	},
	{
		id: 249,
		name: 'PIQUILLIN',
		departmentId: 36
	},
	{
		id: 250,
		name: 'EL CRISPIN',
		departmentId: 36
	},
	{
		id: 251,
		name: 'MONTE CRISTO',
		departmentId: 36
	},
	{
		id: 252,
		name: 'LAS GRAMILLAS',
		departmentId: 36
	},
	{
		id: 253,
		name: 'CAÑADA DE MACHADO',
		departmentId: 36
	},
	{
		id: 254,
		name: 'LA QUINTA',
		departmentId: 36
	},
	{
		id: 255,
		name: 'KILOMETRO 658',
		departmentId: 36
	},
	{
		id: 256,
		name: 'LAS SALADAS',
		departmentId: 36
	},
	{
		id: 257,
		name: 'AREA SIN GOBIERNO',
		departmentId: 36
	},
	{
		id: 258,
		name: 'SANTA ROSA DE RIO PRIMERO',
		departmentId: 36
	},
	{
		id: 259,
		name: 'LA POSTA',
		departmentId: 36
	},
	{
		id: 260,
		name: 'RIO PRIMERO',
		departmentId: 36
	},
	{
		id: 261,
		name: 'OBISPO TREJO',
		departmentId: 36
	},
	{
		id: 262,
		name: 'COMECHINGONES',
		departmentId: 36
	},
	{
		id: 263,
		name: 'ESQUINA',
		departmentId: 36
	},
	{
		id: 264,
		name: 'COLONIA LAS CUATRO ESQUINAS',
		departmentId: 36
	},
	{
		id: 265,
		name: 'PLAZA DE MERCEDES',
		departmentId: 36
	},
	{
		id: 266,
		name: 'CHALACEA',
		departmentId: 36
	},
	{
		id: 267,
		name: 'SAGRADA FAMILIA',
		departmentId: 36
	},
	{
		id: 268,
		name: 'DIEGO DE ROJAS',
		departmentId: 36
	},
	{
		id: 269,
		name: 'LA PARA',
		departmentId: 36
	},
	{
		id: 270,
		name: 'CAPILLA DE LOS REMEDIOS',
		departmentId: 36
	},
	{
		id: 271,
		name: 'VILLA FONTANA',
		departmentId: 36
	},
	{
		id: 272,
		name: 'ATAHONA',
		departmentId: 36
	},
	{
		id: 273,
		name: 'MAQUINISTA GALLINI',
		departmentId: 36
	},
	{
		id: 274,
		name: 'LA CUMBRE',
		departmentId: 37
	},
	{
		id: 275,
		name: 'CUESTA BLANCA',
		departmentId: 37
	},
	{
		id: 276,
		name: 'SAN ESTEBAN',
		departmentId: 37
	},
	{
		id: 277,
		name: 'CAPILLA DEL MONTE',
		departmentId: 37
	},
	{
		id: 278,
		name: 'CABALANGO',
		departmentId: 37
	},
	{
		id: 279,
		name: 'VILLA CARLOS PAZ',
		departmentId: 37
	},
	{
		id: 280,
		name: 'COSQUIN',
		departmentId: 37
	},
	{
		id: 281,
		name: 'SAN ROQUE',
		departmentId: 37
	},
	{
		id: 282,
		name: 'SANTA MARIA DE PUNILLA',
		departmentId: 37
	},
	{
		id: 283,
		name: 'VILLA SANTA CRUZ DEL LAGO',
		departmentId: 37
	},
	{
		id: 284,
		name: 'AREA SIN GOBIERNO',
		departmentId: 37
	},
	{
		id: 285,
		name: 'VILLA GIARDINO',
		departmentId: 37
	},
	{
		id: 286,
		name: 'VILLA PARQUE SIQUIMAN',
		departmentId: 37
	},
	{
		id: 287,
		name: 'CHARBONIER',
		departmentId: 37
	},
	{
		id: 288,
		name: 'HUERTA GRANDE',
		departmentId: 37
	},
	{
		id: 289,
		name: 'BIALET MASSE',
		departmentId: 37
	},
	{
		id: 290,
		name: 'MAYU SUMAJ',
		departmentId: 37
	},
	{
		id: 291,
		name: 'TANTI',
		departmentId: 37
	},
	{
		id: 292,
		name: 'TALA HUASI',
		departmentId: 37
	},
	{
		id: 293,
		name: 'LA FALDA',
		departmentId: 37
	},
	{
		id: 294,
		name: 'SAN ANTONIO DE ARREDONDO',
		departmentId: 37
	},
	{
		id: 295,
		name: 'CASA GRANDE',
		departmentId: 37
	},
	{
		id: 296,
		name: 'VALLE HERMOSO',
		departmentId: 37
	},
	{
		id: 297,
		name: 'LOS COCOS',
		departmentId: 37
	},
	{
		id: 298,
		name: 'ESTANCIA VIEJA',
		departmentId: 37
	},
	{
		id: 299,
		name: 'VILLA RIO ICHO CRUZ',
		departmentId: 37
	},
	{
		id: 300,
		name: 'LOS CHAÑARITOS (RÍO SEGUNDO)',
		departmentId: 38
	},
	{
		id: 301,
		name: 'MANFREDI',
		departmentId: 38
	},
	{
		id: 302,
		name: 'LAS JUNTURAS',
		departmentId: 38
	},
	{
		id: 303,
		name: 'LAGUNA LARGA',
		departmentId: 38
	},
	{
		id: 304,
		name: 'PILAR',
		departmentId: 38
	},
	{
		id: 305,
		name: 'ONCATIVO',
		departmentId: 38
	},
	{
		id: 306,
		name: 'COLONIA VIDELA',
		departmentId: 38
	},
	{
		id: 307,
		name: 'MATORRALES',
		departmentId: 38
	},
	{
		id: 308,
		name: 'RIO SEGUNDO',
		departmentId: 38
	},
	{
		id: 309,
		name: 'AREA SIN GOBIERNO',
		departmentId: 38
	},
	{
		id: 310,
		name: 'RINCON',
		departmentId: 38
	},
	{
		id: 311,
		name: 'LUQUE',
		departmentId: 38
	},
	{
		id: 312,
		name: 'CARRILOBO',
		departmentId: 38
	},
	{
		id: 313,
		name: 'CALCHIN OESTE',
		departmentId: 38
	},
	{
		id: 314,
		name: 'SANTIAGO TEMPLE',
		departmentId: 38
	},
	{
		id: 315,
		name: 'POZO DEL MOLLE',
		departmentId: 38
	},
	{
		id: 316,
		name: 'VILLA DEL ROSARIO',
		departmentId: 38
	},
	{
		id: 317,
		name: 'IMPIRA',
		departmentId: 38
	},
	{
		id: 318,
		name: 'COLAZO',
		departmentId: 38
	},
	{
		id: 319,
		name: 'COSTA SACATE',
		departmentId: 38
	},
	{
		id: 320,
		name: 'CAPILLA DEL CARMEN',
		departmentId: 38
	},
	{
		id: 321,
		name: 'CALCHIN',
		departmentId: 38
	},
	{
		id: 322,
		name: 'VILLA HUIDOBRO',
		departmentId: 39
	},
	{
		id: 323,
		name: 'ONAGOITY',
		departmentId: 39
	},
	{
		id: 324,
		name: 'MATTALDI',
		departmentId: 39
	},
	{
		id: 325,
		name: 'VILLA SARMIENTO',
		departmentId: 39
	},
	{
		id: 326,
		name: 'AREA SIN GOBIERNO',
		departmentId: 39
	},
	{
		id: 327,
		name: 'PINCEN',
		departmentId: 39
	},
	{
		id: 328,
		name: 'ITALO',
		departmentId: 39
	},
	{
		id: 329,
		name: 'RANQUELES',
		departmentId: 39
	},
	{
		id: 330,
		name: 'JOVITA',
		departmentId: 39
	},
	{
		id: 331,
		name: 'NICOLAS BRUZZONE',
		departmentId: 39
	},
	{
		id: 332,
		name: 'BUCHARDO',
		departmentId: 39
	},
	{
		id: 333,
		name: 'VILLA VALERIA',
		departmentId: 39
	},
	{
		id: 334,
		name: 'HUINCA RENANCO',
		departmentId: 39
	},
	{
		id: 335,
		name: 'DEL CAMPILLO',
		departmentId: 39
	},
	{
		id: 336,
		name: 'LAS PEÑAS',
		departmentId: 40
	},
	{
		id: 337,
		name: 'SINSACATE',
		departmentId: 40
	},
	{
		id: 338,
		name: 'CAÑADA DE LUQUE',
		departmentId: 40
	},
	{
		id: 339,
		name: 'LA PAMPA',
		departmentId: 40
	},
	{
		id: 340,
		name: 'SIMBOLAR',
		departmentId: 40
	},
	{
		id: 341,
		name: 'CAPILLA DEL SITON',
		departmentId: 40
	},
	{
		id: 342,
		name: 'CANDELARIA SUD',
		departmentId: 40
	},
	{
		id: 343,
		name: 'VILLA DEL TOTORAL',
		departmentId: 40
	},
	{
		id: 344,
		name: 'AREA SIN GOBIERNO',
		departmentId: 40
	},
	{
		id: 345,
		name: 'LOS MISTOLES',
		departmentId: 40
	},
	{
		id: 346,
		name: 'SARMIENTO',
		departmentId: 40
	},
	{
		id: 347,
		name: 'AREA SIN GOBIERNO',
		departmentId: 41
	},
	{
		id: 348,
		name: 'LOS ZORROS',
		departmentId: 41
	},
	{
		id: 349,
		name: 'PAMPAYASTA NORTE',
		departmentId: 41
	},
	{
		id: 350,
		name: 'GENERAL FOTHERINGHAM',
		departmentId: 41
	},
	{
		id: 351,
		name: 'VILLA ASCASUBI',
		departmentId: 41
	},
	{
		id: 352,
		name: 'OLIVA',
		departmentId: 41
	},
	{
		id: 353,
		name: 'LAS ISLETILLAS',
		departmentId: 41
	},
	{
		id: 354,
		name: 'PAMPAYASTA SUD',
		departmentId: 41
	},
	{
		id: 355,
		name: 'LAS PERDICES',
		departmentId: 41
	},
	{
		id: 356,
		name: 'JAMES CRAIK',
		departmentId: 41
	},
	{
		id: 357,
		name: 'CORRALITO',
		departmentId: 41
	},
	{
		id: 358,
		name: 'COLONIA ALMADA',
		departmentId: 41
	},
	{
		id: 359,
		name: 'TANCACHA',
		departmentId: 41
	},
	{
		id: 360,
		name: 'HERNANDO',
		departmentId: 41
	},
	{
		id: 361,
		name: 'PUNTA DEL AGUA',
		departmentId: 41
	},
	{
		id: 362,
		name: 'RIO TERCERO',
		departmentId: 41
	},
	{
		id: 363,
		name: 'DALMACIO VELEZ',
		departmentId: 41
	},
	{
		id: 364,
		name: 'ALMAFUERTE',
		departmentId: 41
	},
	{
		id: 365,
		name: 'CARNERILLO',
		departmentId: 42
	},
	{
		id: 366,
		name: 'BENGOLEA',
		departmentId: 42
	},
	{
		id: 367,
		name: 'EL RASTREADOR',
		departmentId: 42
	},
	{
		id: 368,
		name: 'CHARRAS',
		departmentId: 42
	},
	{
		id: 369,
		name: 'LOS CISNES',
		departmentId: 42
	},
	{
		id: 370,
		name: 'GENERAL CABRERA',
		departmentId: 42
	},
	{
		id: 371,
		name: 'ASSUNTA',
		departmentId: 42
	},
	{
		id: 372,
		name: 'GENERAL DEHEZA',
		departmentId: 42
	},
	{
		id: 373,
		name: 'UCACHA',
		departmentId: 42
	},
	{
		id: 374,
		name: 'PASO DEL DURAZNO',
		departmentId: 42
	},
	{
		id: 375,
		name: 'PACHECO DE MELO',
		departmentId: 42
	},
	{
		id: 376,
		name: 'HUANCHILLA',
		departmentId: 42
	},
	{
		id: 377,
		name: 'ALEJANDRO ROCA',
		departmentId: 42
	},
	{
		id: 378,
		name: 'SANTA EUFEMIA',
		departmentId: 42
	},
	{
		id: 379,
		name: 'LA CARLOTA',
		departmentId: 42
	},
	{
		id: 380,
		name: 'AREA SIN GOBIERNO',
		departmentId: 42
	},
	{
		id: 381,
		name: 'REDUCCION',
		departmentId: 42
	},
	{
		id: 382,
		name: 'OLAETA',
		departmentId: 42
	},
	{
		id: 383,
		name: 'ARROYO LOS PATOS',
		departmentId: 43
	},
	{
		id: 384,
		name: 'SAN VICENTE',
		departmentId: 43
	},
	{
		id: 385,
		name: 'VILLA CURA BROCHERO',
		departmentId: 43
	},
	{
		id: 386,
		name: 'LAS RABONAS',
		departmentId: 43
	},
	{
		id: 387,
		name: 'MINA CLAVERO',
		departmentId: 43
	},
	{
		id: 388,
		name: 'PANAHOLMA',
		departmentId: 43
	},
	{
		id: 389,
		name: 'AMBUL',
		departmentId: 43
	},
	{
		id: 390,
		name: 'SAN PEDRO',
		departmentId: 43
	},
	{
		id: 391,
		name: 'LAS CALLES',
		departmentId: 43
	},
	{
		id: 392,
		name: 'SAN LORENZO',
		departmentId: 43
	},
	{
		id: 393,
		name: 'NONO',
		departmentId: 43
	},
	{
		id: 394,
		name: 'AREA SIN GOBIERNO',
		departmentId: 43
	},
	{
		id: 395,
		name: 'VILLA SARMIENTO',
		departmentId: 43
	},
	{
		id: 396,
		name: 'SAUCE ARRIBA',
		departmentId: 43
	},
	{
		id: 397,
		name: 'TORO PUJIO',
		departmentId: 44
	},
	{
		id: 398,
		name: 'TRANSITO',
		departmentId: 44
	},
	{
		id: 399,
		name: 'PORTEÑA',
		departmentId: 44
	},
	{
		id: 400,
		name: 'PLAZA LUXARDO',
		departmentId: 44
	},
	{
		id: 401,
		name: 'EL TIO',
		departmentId: 44
	},
	{
		id: 402,
		name: 'COLONIA ITURRASPE',
		departmentId: 44
	},
	{
		id: 403,
		name: 'MARULL',
		departmentId: 44
	},
	{
		id: 404,
		name: 'COLONIA LAS PICHANAS',
		departmentId: 44
	},
	{
		id: 405,
		name: 'LAS VARAS',
		departmentId: 44
	},
	{
		id: 406,
		name: 'LA PAQUITA',
		departmentId: 44
	},
	{
		id: 407,
		name: 'SAN FRANCISCO',
		departmentId: 44
	},
	{
		id: 408,
		name: 'BALNEARIA',
		departmentId: 44
	},
	{
		id: 409,
		name: 'MIRAMAR',
		departmentId: 44
	},
	{
		id: 410,
		name: 'COLONIA PROSPERIDAD',
		departmentId: 44
	},
	{
		id: 411,
		name: 'VILLA SAN ESTEBAN',
		departmentId: 44
	},
	{
		id: 412,
		name: 'SATURNINO MARIA LASPIUR',
		departmentId: 44
	},
	{
		id: 413,
		name: 'ALTOS DE CHIPION',
		departmentId: 44
	},
	{
		id: 414,
		name: 'SEEBER',
		departmentId: 44
	},
	{
		id: 415,
		name: 'COLONIA VALTELINA',
		departmentId: 44
	},
	{
		id: 416,
		name: 'COLONIA SAN BARTOLOME',
		departmentId: 44
	},
	{
		id: 417,
		name: 'COLONIA ANITA',
		departmentId: 44
	},
	{
		id: 418,
		name: 'AREA SIN GOBIERNO',
		departmentId: 44
	},
	{
		id: 419,
		name: 'SACANTA',
		departmentId: 44
	},
	{
		id: 420,
		name: 'COLONIA MARINA',
		departmentId: 44
	},
	{
		id: 421,
		name: 'VILLA CONCEPCION DEL TIO',
		departmentId: 44
	},
	{
		id: 422,
		name: 'DEVOTO',
		departmentId: 44
	},
	{
		id: 423,
		name: 'ALICIA',
		departmentId: 44
	},
	{
		id: 424,
		name: 'EL ARAÑADO',
		departmentId: 44
	},
	{
		id: 425,
		name: 'LA FRANCIA',
		departmentId: 44
	},
	{
		id: 426,
		name: 'QUEBRACHO HERRADO',
		departmentId: 44
	},
	{
		id: 427,
		name: 'ARROYITO',
		departmentId: 44
	},
	{
		id: 428,
		name: 'FREYRE',
		departmentId: 44
	},
	{
		id: 429,
		name: 'LA TORDILLA',
		departmentId: 44
	},
	{
		id: 430,
		name: 'EL FORTIN',
		departmentId: 44
	},
	{
		id: 431,
		name: 'LAS VARILLAS',
		departmentId: 44
	},
	{
		id: 432,
		name: 'MORTEROS',
		departmentId: 44
	},
	{
		id: 433,
		name: 'COLONIA SAN PEDRO',
		departmentId: 44
	},
	{
		id: 434,
		name: 'BRINKMANN',
		departmentId: 44
	},
	{
		id: 435,
		name: 'COLONIA VIGNAUD',
		departmentId: 44
	},
	{
		id: 436,
		name: 'ALPA CORRAL',
		departmentId: 45
	},
	{
		id: 437,
		name: 'LAS ACEQUIAS',
		departmentId: 45
	},
	{
		id: 438,
		name: 'TOSQUITA',
		departmentId: 45
	},
	{
		id: 439,
		name: 'LAS VERTIENTES',
		departmentId: 45
	},
	{
		id: 440,
		name: 'CORONEL BAIGORRIA',
		departmentId: 45
	},
	{
		id: 441,
		name: 'LAS HIGUERAS',
		departmentId: 45
	},
	{
		id: 442,
		name: 'ADELIA MARIA',
		departmentId: 45
	},
	{
		id: 443,
		name: 'CHAJAN',
		departmentId: 45
	},
	{
		id: 444,
		name: 'BERROTARAN',
		departmentId: 45
	},
	{
		id: 445,
		name: 'CORONEL MOLDES',
		departmentId: 45
	},
	{
		id: 446,
		name: 'ELENA',
		departmentId: 45
	},
	{
		id: 447,
		name: 'SUCO',
		departmentId: 45
	},
	{
		id: 448,
		name: 'LAS PEÑAS SUD',
		departmentId: 45
	},
	{
		id: 449,
		name: 'LAS ALBAHACAS',
		departmentId: 45
	},
	{
		id: 450,
		name: 'MONTE DE LOS GAUCHOS',
		departmentId: 45
	},
	{
		id: 451,
		name: 'LA CAUTIVA',
		departmentId: 45
	},
	{
		id: 452,
		name: 'AREA SIN GOBIERNO',
		departmentId: 45
	},
	{
		id: 453,
		name: 'LA CAROLINA EL POTOSI',
		departmentId: 45
	},
	{
		id: 454,
		name: 'ALCIRA',
		departmentId: 45
	},
	{
		id: 455,
		name: 'MALENA',
		departmentId: 45
	},
	{
		id: 456,
		name: 'RIO CUARTO',
		departmentId: 45
	},
	{
		id: 457,
		name: 'SAN BASILIO',
		departmentId: 45
	},
	{
		id: 458,
		name: 'SANTA CATALINA',
		departmentId: 45
	},
	{
		id: 459,
		name: 'WASHINGTON',
		departmentId: 45
	},
	{
		id: 460,
		name: 'SAMPACHO',
		departmentId: 45
	},
	{
		id: 461,
		name: 'CHUCUL',
		departmentId: 45
	},
	{
		id: 462,
		name: 'ACHIRAS',
		departmentId: 45
	},
	{
		id: 463,
		name: 'VICUÑA MACKENNA',
		departmentId: 45
	},
	{
		id: 464,
		name: 'VILLA EL CHACAY',
		departmentId: 45
	},
	{
		id: 465,
		name: 'BULNES',
		departmentId: 45
	},
	{
		id: 466,
		name: 'EL BRETE',
		departmentId: 46
	},
	{
		id: 467,
		name: 'ALTO DE LOS QUEBRACHOS',
		departmentId: 46
	},
	{
		id: 468,
		name: 'CRUZ DEL EJE',
		departmentId: 46
	},
	{
		id: 469,
		name: 'BAÑADO DE SOTO',
		departmentId: 46
	},
	{
		id: 470,
		name: 'LAS PLAYAS',
		departmentId: 46
	},
	{
		id: 471,
		name: 'AREA SIN GOBIERNO',
		departmentId: 46
	},
	{
		id: 472,
		name: 'MEDIA NARANJA',
		departmentId: 46
	},
	{
		id: 473,
		name: 'PASO VIEJO',
		departmentId: 46
	},
	{
		id: 474,
		name: 'LAS CAÑADAS',
		departmentId: 46
	},
	{
		id: 475,
		name: 'TUCLAME',
		departmentId: 46
	},
	{
		id: 476,
		name: 'VILLA DE SOTO',
		departmentId: 46
	},
	{
		id: 477,
		name: 'LA HIGUERA',
		departmentId: 46
	},
	{
		id: 478,
		name: 'SAN MARCOS SIERRAS',
		departmentId: 46
	},
	{
		id: 479,
		name: 'LOS CHAÑARITOS (CRUZ DEL EJE)',
		departmentId: 46
	},
	{
		id: 480,
		name: 'GUANACO MUERTO',
		departmentId: 46
	},
	{
		id: 481,
		name: 'SERREZUELA',
		departmentId: 46
	},
	{
		id: 482,
		name: 'CRUZ DE CAÑA',
		departmentId: 46
	},
	{
		id: 483,
		name: 'LA BATEA',
		departmentId: 46
	},
	{
		id: 484,
		name: 'CAMINIAGA',
		departmentId: 47
	},
	{
		id: 485,
		name: 'POZO NUEVO',
		departmentId: 47
	},
	{
		id: 486,
		name: 'SAN FRANCISCO DEL CHAÑAR',
		departmentId: 47
	},
	{
		id: 487,
		name: 'AREA SIN GOBIERNO',
		departmentId: 47
	},
	{
		id: 488,
		name: 'CHUÑA HUASI',
		departmentId: 47
	},
	{
		id: 489,
		name: 'SAN PEDRO NORTE',
		departmentId: 48
	},
	{
		id: 490,
		name: 'ROSARIO DEL SALADILLO',
		departmentId: 48
	},
	{
		id: 491,
		name: 'LUCIO VICTORIO MANSILLA',
		departmentId: 48
	},
	{
		id: 492,
		name: 'VILLA TULUMBA',
		departmentId: 48
	},
	{
		id: 493,
		name: 'SAN JOSE DE LA DORMIDA',
		departmentId: 48
	},
	{
		id: 494,
		name: 'LAS ARRIAS',
		departmentId: 48
	},
	{
		id: 495,
		name: 'EL RODEO',
		departmentId: 48
	},
	{
		id: 496,
		name: 'CHURQUI CAÑADA',
		departmentId: 48
	},
	{
		id: 497,
		name: 'AREA SIN GOBIERNO',
		departmentId: 48
	},
	{
		id: 498,
		name: 'SAN JOSE DE LAS SALINAS',
		departmentId: 48
	},
	{
		id: 499,
		name: 'ROSALES',
		departmentId: 49
	},
	{
		id: 500,
		name: 'SAN JOAQUIN',
		departmentId: 49
	},
	{
		id: 501,
		name: 'VILLA ROSSI',
		departmentId: 49
	},
	{
		id: 502,
		name: 'RIOBAMBA',
		departmentId: 49
	},
	{
		id: 503,
		name: 'LABOULAYE',
		departmentId: 49
	},
	{
		id: 504,
		name: 'GENERAL LEVALLE',
		departmentId: 49
	},
	{
		id: 505,
		name: 'SERRANO',
		departmentId: 49
	},
	{
		id: 506,
		name: 'LA CESIRA',
		departmentId: 49
	},
	{
		id: 507,
		name: 'AREA SIN GOBIERNO',
		departmentId: 49
	},
	{
		id: 508,
		name: 'LEGUIZAMON',
		departmentId: 49
	},
	{
		id: 509,
		name: 'MELO',
		departmentId: 49
	},
	{
		id: 510,
		name: 'AREA SIN GOBIERNO',
		departmentId: 50
	},
	{
		id: 511,
		name: 'LOS HORNILLOS',
		departmentId: 50
	},
	{
		id: 512,
		name: 'CONLARA',
		departmentId: 50
	},
	{
		id: 513,
		name: 'SAN JOSE',
		departmentId: 50
	},
	{
		id: 514,
		name: 'LOS CERRILLOS',
		departmentId: 50
	},
	{
		id: 515,
		name: 'VILLA DE LAS ROSAS',
		departmentId: 50
	},
	{
		id: 516,
		name: 'SAN JAVIER Y YACANTO',
		departmentId: 50
	},
	{
		id: 517,
		name: 'LA POBLACION',
		departmentId: 50
	},
	{
		id: 518,
		name: 'LA PAZ',
		departmentId: 50
	},
	{
		id: 519,
		name: 'VILLA DOLORES',
		departmentId: 50
	},
	{
		id: 520,
		name: 'LAS TAPIAS',
		departmentId: 50
	},
	{
		id: 521,
		name: 'LUYABA',
		departmentId: 50
	},
	{
		id: 522,
		name: 'CORDOBA',
		departmentId: 51
	},
	{
		id: 523,
		name: 'CARRENLEUFU',
		departmentId: 52
	},
	{
		id: 524,
		name: 'PASO DEL SAPO',
		departmentId: 52
	},
	{
		id: 525,
		name: 'TECKA',
		departmentId: 52
	},
	{
		id: 526,
		name: 'ALDEA EPULEF',
		departmentId: 52
	},
	{
		id: 527,
		name: 'COLAN CONHUE',
		departmentId: 52
	},
	{
		id: 528,
		name: 'AREA SIN GOBIERNO',
		departmentId: 52
	},
	{
		id: 529,
		name: 'LAGO BLANCO',
		departmentId: 53
	},
	{
		id: 530,
		name: 'ALDEA APELEG',
		departmentId: 53
	},
	{
		id: 531,
		name: 'RIO MAYO',
		departmentId: 53
	},
	{
		id: 532,
		name: 'FACUNDO',
		departmentId: 53
	},
	{
		id: 533,
		name: 'ALTO RIO SENGUER',
		departmentId: 53
	},
	{
		id: 534,
		name: 'ALDEA BELEIRO',
		departmentId: 53
	},
	{
		id: 535,
		name: 'DOCTOR RICARDO ROJAS',
		departmentId: 53
	},
	{
		id: 536,
		name: 'AREA SIN GOBIERNO',
		departmentId: 53
	},
	{
		id: 537,
		name: '28 DE JULIO',
		departmentId: 54
	},
	{
		id: 538,
		name: 'AREA SIN GOBIERNO',
		departmentId: 54
	},
	{
		id: 539,
		name: 'GAIMAN',
		departmentId: 54
	},
	{
		id: 540,
		name: 'DOLAVON',
		departmentId: 54
	},
	{
		id: 541,
		name: 'DIQUE FLORENTINO AMEGHINO',
		departmentId: 54
	},
	{
		id: 542,
		name: 'CHOLILA',
		departmentId: 55
	},
	{
		id: 543,
		name: 'EPUYEN',
		departmentId: 55
	},
	{
		id: 544,
		name: 'GUALJAINA',
		departmentId: 55
	},
	{
		id: 545,
		name: 'CUSHAMEN',
		departmentId: 55
	},
	{
		id: 546,
		name: 'EL MAITEN',
		departmentId: 55
	},
	{
		id: 547,
		name: 'EL HOYO',
		departmentId: 55
	},
	{
		id: 548,
		name: 'AREA SIN GOBIERNO',
		departmentId: 55
	},
	{
		id: 549,
		name: 'LAGO PUELO',
		departmentId: 55
	},
	{
		id: 550,
		name: 'TREVELIN',
		departmentId: 56
	},
	{
		id: 551,
		name: 'ESQUEL',
		departmentId: 56
	},
	{
		id: 552,
		name: 'CERRO CENTINELA',
		departmentId: 56
	},
	{
		id: 553,
		name: 'CORCOVADO',
		departmentId: 56
	},
	{
		id: 554,
		name: 'PUERTO MADRYN',
		departmentId: 57
	},
	{
		id: 555,
		name: 'AREA SIN GOBIERNO',
		departmentId: 57
	},
	{
		id: 556,
		name: 'PUERTO PIRAMIDES',
		departmentId: 57
	},
	{
		id: 557,
		name: 'VIGLIONE',
		departmentId: 58
	},
	{
		id: 558,
		name: 'GOBERNADOR COSTA',
		departmentId: 58
	},
	{
		id: 559,
		name: 'RIO PICO',
		departmentId: 58
	},
	{
		id: 560,
		name: 'AREA SIN GOBIERNO',
		departmentId: 58
	},
	{
		id: 561,
		name: 'JOSE DE SAN MARTIN',
		departmentId: 58
	},
	{
		id: 562,
		name: 'COMODORO RIVADAVIA',
		departmentId: 59
	},
	{
		id: 563,
		name: 'RADA TILLY',
		departmentId: 59
	},
	{
		id: 564,
		name: 'AREA SIN GOBIERNO',
		departmentId: 59
	},
	{
		id: 565,
		name: 'RAWSON',
		departmentId: 60
	},
	{
		id: 566,
		name: 'TRELEW',
		departmentId: 60
	},
	{
		id: 567,
		name: 'CAMARONES',
		departmentId: 61
	},
	{
		id: 568,
		name: 'AREA SIN GOBIERNO',
		departmentId: 61
	},
	{
		id: 569,
		name: 'AREA SIN GOBIERNO',
		departmentId: 62
	},
	{
		id: 570,
		name: 'GAN GAN',
		departmentId: 62
	},
	{
		id: 571,
		name: 'TELSEN',
		departmentId: 62
	},
	{
		id: 572,
		name: 'LOS ALTARES',
		departmentId: 63
	},
	{
		id: 573,
		name: 'AREA SIN GOBIERNO',
		departmentId: 63
	},
	{
		id: 574,
		name: 'PASO DE INDIOS',
		departmentId: 63
	},
	{
		id: 575,
		name: 'SARMIENTO',
		departmentId: 64
	},
	{
		id: 576,
		name: 'BUEN PASTO',
		departmentId: 64
	},
	{
		id: 577,
		name: 'AREA SIN GOBIERNO',
		departmentId: 64
	},
	{
		id: 578,
		name: 'LAS PLUMAS',
		departmentId: 65
	},
	{
		id: 579,
		name: 'AREA SIN GOBIERNO',
		departmentId: 65
	},
	{
		id: 580,
		name: 'AREA SIN GOBIERNO',
		departmentId: 66
	},
	{
		id: 581,
		name: 'GASTRE',
		departmentId: 66
	},
	{
		id: 582,
		name: 'LAGUNITA SALADA',
		departmentId: 66
	},
	{
		id: 583,
		name: 'HURLINGHAM',
		departmentId: 67
	},
	{
		id: 584,
		name: 'COLON',
		departmentId: 68
	},
	{
		id: 585,
		name: 'BENITO JUAREZ',
		departmentId: 69
	},
	{
		id: 586,
		name: 'OLAVARRIA',
		departmentId: 70
	},
	{
		id: 587,
		name: 'ALMIRANTE BROWN',
		departmentId: 71
	},
	{
		id: 588,
		name: 'JOSE C PAZ',
		departmentId: 72
	},
	{
		id: 589,
		name: 'ROJAS',
		departmentId: 73
	},
	{
		id: 590,
		name: 'GENERAL BELGRANO',
		departmentId: 74
	},
	{
		id: 591,
		name: 'SUIPACHA',
		departmentId: 75
	},
	{
		id: 592,
		name: 'LOBERIA',
		departmentId: 76
	},
	{
		id: 593,
		name: 'GENERAL VILLEGAS',
		departmentId: 77
	},
	{
		id: 594,
		name: 'ESTEBAN ECHEVERRIA',
		departmentId: 78
	},
	{
		id: 595,
		name: 'MONTE',
		departmentId: 79
	},
	{
		id: 596,
		name: 'BALCARCE',
		departmentId: 80
	},
	{
		id: 597,
		name: 'PRESIDENTE PERON',
		departmentId: 81
	},
	{
		id: 598,
		name: 'CARMEN DE ARECO',
		departmentId: 82
	},
	{
		id: 599,
		name: 'GUAMINI',
		departmentId: 83
	},
	{
		id: 600,
		name: 'CHACABUCO',
		departmentId: 84
	},
	{
		id: 601,
		name: 'GENERAL PUEYRREDON',
		departmentId: 85
	},
	{
		id: 602,
		name: 'PILAR',
		departmentId: 86
	},
	{
		id: 603,
		name: 'GENERAL PINTO',
		departmentId: 87
	},
	{
		id: 604,
		name: 'VICENTE LOPEZ',
		departmentId: 88
	},
	{
		id: 605,
		name: 'GENERAL JUAN MADARIAGA',
		departmentId: 89
	},
	{
		id: 606,
		name: 'SALADILLO',
		departmentId: 90
	},
	{
		id: 607,
		name: 'VILLARINO',
		departmentId: 91
	},
	{
		id: 608,
		name: 'SAN PEDRO',
		departmentId: 92
	},
	{
		id: 609,
		name: 'GENERAL GUIDO',
		departmentId: 93
	},
	{
		id: 610,
		name: 'SAN ISIDRO',
		departmentId: 94
	},
	{
		id: 611,
		name: 'TIGRE',
		departmentId: 95
	},
	{
		id: 612,
		name: 'CASTELLI',
		departmentId: 96
	},
	{
		id: 613,
		name: 'SAN CAYETANO',
		departmentId: 97
	},
	{
		id: 614,
		name: 'PINAMAR',
		departmentId: 98
	},
	{
		id: 615,
		name: 'TRENQUE LAUQUEN',
		departmentId: 99
	},
	{
		id: 616,
		name: 'CORONEL DORREGO',
		departmentId: 100
	},
	{
		id: 617,
		name: 'ENSENADA',
		departmentId: 101
	},
	{
		id: 618,
		name: 'ALBERTI',
		departmentId: 102
	},
	{
		id: 619,
		name: 'LOMAS DE ZAMORA',
		departmentId: 103
	},
	{
		id: 620,
		name: 'CAMPANA',
		departmentId: 104
	},
	{
		id: 621,
		name: 'GENERAL ALVARADO',
		departmentId: 105
	},
	{
		id: 622,
		name: 'EZEIZA',
		departmentId: 106
	},
	{
		id: 623,
		name: 'SAN MIGUEL',
		departmentId: 107
	},
	{
		id: 624,
		name: 'ADOLFO ALSINA',
		departmentId: 108
	},
	{
		id: 625,
		name: 'SAAVEDRA',
		departmentId: 109
	},
	{
		id: 626,
		name: 'ADOLFO GONZALES CHAVES',
		departmentId: 110
	},
	{
		id: 627,
		name: 'TRES DE FEBRERO',
		departmentId: 111
	},
	{
		id: 628,
		name: 'SAN ANDRES DE GILES',
		departmentId: 112
	},
	{
		id: 629,
		name: 'SALLIQUELO',
		departmentId: 113
	},
	{
		id: 630,
		name: 'BRANDSEN',
		departmentId: 114
	},
	{
		id: 631,
		name: 'MONTE HERMOSO',
		departmentId: 115
	},
	{
		id: 632,
		name: 'TRES LOMAS',
		departmentId: 116
	},
	{
		id: 633,
		name: 'MERLO',
		departmentId: 117
	},
	{
		id: 634,
		name: 'QUILMES',
		departmentId: 118
	},
	{
		id: 635,
		name: 'JUNIN',
		departmentId: 119
	},
	{
		id: 636,
		name: 'BERAZATEGUI',
		departmentId: 120
	},
	{
		id: 637,
		name: 'BRAGADO',
		departmentId: 121
	},
	{
		id: 638,
		name: 'MAGDALENA',
		departmentId: 122
	},
	{
		id: 639,
		name: 'HIPOLITO YRIGOYEN',
		departmentId: 123
	},
	{
		id: 640,
		name: 'PATAGONES',
		departmentId: 124
	},
	{
		id: 641,
		name: 'LANÚS',
		departmentId: 125
	},
	{
		id: 642,
		name: 'CHASCOMUS',
		departmentId: 126
	},
	{
		id: 643,
		name: 'MERCEDES',
		departmentId: 127
	},
	{
		id: 644,
		name: 'RIVADAVIA',
		departmentId: 128
	},
	{
		id: 645,
		name: 'CORONEL PRINGLES',
		departmentId: 129
	},
	{
		id: 646,
		name: 'CAPITAN SARMIENTO',
		departmentId: 130
	},
	{
		id: 647,
		name: 'GENERAL SAN MARTIN',
		departmentId: 131
	},
	{
		id: 648,
		name: 'RAMALLO',
		departmentId: 132
	},
	{
		id: 649,
		name: 'PILA',
		departmentId: 133
	},
	{
		id: 650,
		name: 'LAS FLORES',
		departmentId: 134
	},
	{
		id: 651,
		name: 'NECOCHEA',
		departmentId: 135
	},
	{
		id: 652,
		name: 'GENERAL RODRIGUEZ',
		departmentId: 136
	},
	{
		id: 653,
		name: 'AZUL',
		departmentId: 137
	},
	{
		id: 654,
		name: 'CAÑUELAS',
		departmentId: 138
	},
	{
		id: 655,
		name: 'CARLOS CASARES',
		departmentId: 139
	},
	{
		id: 656,
		name: 'SAN NICOLAS',
		departmentId: 140
	},
	{
		id: 657,
		name: 'MAIPU',
		departmentId: 141
	},
	{
		id: 658,
		name: 'MALVINAS ARGENTINAS',
		departmentId: 142
	},
	{
		id: 659,
		name: 'PEHUAJO',
		departmentId: 143
	},
	{
		id: 660,
		name: 'SAN VICENTE',
		departmentId: 144
	},
	{
		id: 661,
		name: 'PERGAMINO',
		departmentId: 145
	},
	{
		id: 662,
		name: 'MORENO',
		departmentId: 146
	},
	{
		id: 663,
		name: 'CORONEL DE MARINA L ROSALES',
		departmentId: 147
	},
	{
		id: 664,
		name: 'LINCOLN',
		departmentId: 148
	},
	{
		id: 665,
		name: 'FLORENTINO AMEGHINO',
		departmentId: 149
	},
	{
		id: 666,
		name: 'LEZAMA',
		departmentId: 150
	},
	{
		id: 667,
		name: 'MORON',
		departmentId: 151
	},
	{
		id: 668,
		name: 'ESCOBAR',
		departmentId: 152
	},
	{
		id: 669,
		name: 'BERISSO',
		departmentId: 153
	},
	{
		id: 670,
		name: 'BOLIVAR',
		departmentId: 154
	},
	{
		id: 671,
		name: 'EXALTACION DE LA CRUZ',
		departmentId: 155
	},
	{
		id: 672,
		name: 'GENERAL ALVEAR',
		departmentId: 156
	},
	{
		id: 673,
		name: 'TORNQUIST',
		departmentId: 157
	},
	{
		id: 674,
		name: 'ZARATE',
		departmentId: 158
	},
	{
		id: 675,
		name: 'LEANDRO N ALEM',
		departmentId: 159
	},
	{
		id: 676,
		name: 'LUJAN',
		departmentId: 160
	},
	{
		id: 677,
		name: 'LA COSTA',
		departmentId: 161
	},
	{
		id: 678,
		name: 'GENERAL PAZ',
		departmentId: 162
	},
	{
		id: 679,
		name: 'RAUCH',
		departmentId: 163
	},
	{
		id: 680,
		name: 'CHIVILCOY',
		departmentId: 164
	},
	{
		id: 681,
		name: 'SAN FERNANDO',
		departmentId: 165
	},
	{
		id: 682,
		name: 'BARADERO',
		departmentId: 166
	},
	{
		id: 683,
		name: 'MARCOS PAZ',
		departmentId: 167
	},
	{
		id: 684,
		name: 'ITUZAINGO',
		departmentId: 168
	},
	{
		id: 685,
		name: 'LOBOS',
		departmentId: 169
	},
	{
		id: 686,
		name: '9 DE JULIO',
		departmentId: 170
	},
	{
		id: 687,
		name: 'BAHIA BLANCA',
		departmentId: 171
	},
	{
		id: 688,
		name: 'GENERAL LAVALLE',
		departmentId: 172
	},
	{
		id: 689,
		name: 'DAIREAUX',
		departmentId: 173
	},
	{
		id: 690,
		name: 'CARLOS TEJEDOR',
		departmentId: 174
	},
	{
		id: 691,
		name: 'LA MATANZA',
		departmentId: 175
	},
	{
		id: 692,
		name: '25 DE MAYO',
		departmentId: 176
	},
	{
		id: 693,
		name: 'AVELLANEDA',
		departmentId: 177
	},
	{
		id: 694,
		name: 'ARRECIFES',
		departmentId: 178
	},
	{
		id: 695,
		name: 'LAPRIDA',
		departmentId: 179
	},
	{
		id: 696,
		name: 'TAPALQUE',
		departmentId: 180
	},
	{
		id: 697,
		name: 'PUAN',
		departmentId: 181
	},
	{
		id: 698,
		name: 'PELLEGRINI',
		departmentId: 182
	},
	{
		id: 699,
		name: 'DOLORES',
		departmentId: 183
	},
	{
		id: 700,
		name: 'GENERAL ARENALES',
		departmentId: 184
	},
	{
		id: 701,
		name: 'GENERAL LAS HERAS',
		departmentId: 185
	},
	{
		id: 702,
		name: 'GENERAL VIAMONTE',
		departmentId: 186
	},
	{
		id: 703,
		name: 'SAN ANTONIO DE ARECO',
		departmentId: 187
	},
	{
		id: 704,
		name: 'SALTO',
		departmentId: 188
	},
	{
		id: 705,
		name: 'NAVARRO',
		departmentId: 189
	},
	{
		id: 706,
		name: 'LA PLATA',
		departmentId: 190
	},
	{
		id: 707,
		name: 'PUNTA INDIO',
		departmentId: 191
	},
	{
		id: 708,
		name: 'TRES ARROYOS',
		departmentId: 192
	},
	{
		id: 709,
		name: 'GENERAL LA MADRID',
		departmentId: 193
	},
	{
		id: 710,
		name: 'CORONEL SUAREZ',
		departmentId: 194
	},
	{
		id: 711,
		name: 'VILLA GESELL',
		departmentId: 195
	},
	{
		id: 712,
		name: 'TANDIL',
		departmentId: 196
	},
	{
		id: 713,
		name: 'FLORENCIO VARELA',
		departmentId: 197
	},
	{
		id: 714,
		name: 'MAR CHIQUITA',
		departmentId: 198
	},
	{
		id: 715,
		name: 'AYACUCHO',
		departmentId: 199
	},
	{
		id: 716,
		name: 'TORDILLO',
		departmentId: 200
	},
	{
		id: 717,
		name: 'ROQUE PEREZ',
		departmentId: 201
	},
	{
		id: 718,
		name: 'GODOY',
		departmentId: 202
	},
	{
		id: 719,
		name: 'GENERAL GELLY',
		departmentId: 202
	},
	{
		id: 720,
		name: 'SANTA TERESA',
		departmentId: 202
	},
	{
		id: 721,
		name: 'PAVON',
		departmentId: 202
	},
	{
		id: 722,
		name: 'PEYRANO',
		departmentId: 202
	},
	{
		id: 723,
		name: 'EMPALME VILLA CONSTITUCION',
		departmentId: 202
	},
	{
		id: 724,
		name: 'PAVON ARRIBA',
		departmentId: 202
	},
	{
		id: 725,
		name: 'LA VANGUARDIA',
		departmentId: 202
	},
	{
		id: 726,
		name: 'BOMBAL',
		departmentId: 202
	},
	{
		id: 727,
		name: 'CAÑADA RICA',
		departmentId: 202
	},
	{
		id: 728,
		name: 'JUNCAL',
		departmentId: 202
	},
	{
		id: 729,
		name: 'JUAN B MOLINA',
		departmentId: 202
	},
	{
		id: 730,
		name: 'THEOBALD',
		departmentId: 202
	},
	{
		id: 731,
		name: 'SARGENTO CABRAL',
		departmentId: 202
	},
	{
		id: 732,
		name: 'CEPEDA',
		departmentId: 202
	},
	{
		id: 733,
		name: 'VILLA CONSTITUCION',
		departmentId: 202
	},
	{
		id: 734,
		name: 'RUEDA',
		departmentId: 202
	},
	{
		id: 735,
		name: 'ALCORTA',
		departmentId: 202
	},
	{
		id: 736,
		name: 'MAXIMO PAZ',
		departmentId: 202
	},
	{
		id: 737,
		name: 'CORREA',
		departmentId: 203
	},
	{
		id: 738,
		name: 'TOTORAS',
		departmentId: 203
	},
	{
		id: 739,
		name: 'VILLA ELOISA',
		departmentId: 203
	},
	{
		id: 740,
		name: 'CLASSON',
		departmentId: 203
	},
	{
		id: 741,
		name: 'LUCIO V LOPEZ',
		departmentId: 203
	},
	{
		id: 742,
		name: 'CARRIZALES',
		departmentId: 203
	},
	{
		id: 743,
		name: 'SALTO GRANDE',
		departmentId: 203
	},
	{
		id: 744,
		name: 'OLIVEROS',
		departmentId: 203
	},
	{
		id: 745,
		name: 'PUEBLO ANDINO',
		departmentId: 203
	},
	{
		id: 746,
		name: 'CAÑADA DE GOMEZ',
		departmentId: 203
	},
	{
		id: 747,
		name: 'SERODINO',
		departmentId: 203
	},
	{
		id: 748,
		name: 'BUSTINZA',
		departmentId: 203
	},
	{
		id: 749,
		name: 'COLONIA ITURRASPE',
		departmentId: 204
	},
	{
		id: 750,
		name: 'RAMONA',
		departmentId: 204
	},
	{
		id: 751,
		name: 'VILLA SAN JOSE',
		departmentId: 204
	},
	{
		id: 752,
		name: 'PUEBLO MARINI',
		departmentId: 204
	},
	{
		id: 753,
		name: 'ZENON PEREYRA',
		departmentId: 204
	},
	{
		id: 754,
		name: 'COLONIA RAQUEL',
		departmentId: 204
	},
	{
		id: 755,
		name: 'CASTELLANOS',
		departmentId: 204
	},
	{
		id: 756,
		name: 'SAN ANTONIO',
		departmentId: 204
	},
	{
		id: 757,
		name: 'TACURAL',
		departmentId: 204
	},
	{
		id: 758,
		name: 'GALISTEO',
		departmentId: 204
	},
	{
		id: 759,
		name: 'SUNCHALES',
		departmentId: 204
	},
	{
		id: 760,
		name: 'COLONIA CELLO',
		departmentId: 204
	},
	{
		id: 761,
		name: 'EUSEBIA Y CAROLINA',
		departmentId: 204
	},
	{
		id: 762,
		name: 'SANTA CLARA DE SAGUIER',
		departmentId: 204
	},
	{
		id: 763,
		name: 'HUGENTOBLER',
		departmentId: 204
	},
	{
		id: 764,
		name: 'ESMERALDA',
		departmentId: 204
	},
	{
		id: 765,
		name: 'PRESIDENTE ROCA',
		departmentId: 204
	},
	{
		id: 766,
		name: 'FIDELA',
		departmentId: 204
	},
	{
		id: 767,
		name: 'EUSTOLIA',
		departmentId: 204
	},
	{
		id: 768,
		name: 'CORONEL FRAGA',
		departmentId: 204
	},
	{
		id: 769,
		name: 'SUSANA',
		departmentId: 204
	},
	{
		id: 770,
		name: 'ATALIVA',
		departmentId: 204
	},
	{
		id: 771,
		name: 'SAGUIER',
		departmentId: 204
	},
	{
		id: 772,
		name: 'TACURALES',
		departmentId: 204
	},
	{
		id: 773,
		name: 'HUMBERTO PRIMO',
		departmentId: 204
	},
	{
		id: 774,
		name: 'EGUSQUIZA',
		departmentId: 204
	},
	{
		id: 775,
		name: 'COLONIA BICHA',
		departmentId: 204
	},
	{
		id: 776,
		name: 'RAFAELA',
		departmentId: 204
	},
	{
		id: 777,
		name: 'VIRGINIA',
		departmentId: 204
	},
	{
		id: 778,
		name: 'MARIA JUANA',
		departmentId: 204
	},
	{
		id: 779,
		name: 'GARIBALDI',
		departmentId: 204
	},
	{
		id: 780,
		name: 'COLONIA MARGARITA',
		departmentId: 204
	},
	{
		id: 781,
		name: 'JOSEFINA',
		departmentId: 204
	},
	{
		id: 782,
		name: 'COLONIA BIGAND',
		departmentId: 204
	},
	{
		id: 783,
		name: 'COLONIA ALDAO',
		departmentId: 204
	},
	{
		id: 784,
		name: 'PLAZA CLUCELLAS',
		departmentId: 204
	},
	{
		id: 785,
		name: 'ESTACION CLUCELLAS',
		departmentId: 204
	},
	{
		id: 786,
		name: 'LEHMANN',
		departmentId: 204
	},
	{
		id: 787,
		name: 'BELLA ITALIA',
		departmentId: 204
	},
	{
		id: 788,
		name: 'ANGELICA',
		departmentId: 204
	},
	{
		id: 789,
		name: 'BAUER Y SIGEL',
		departmentId: 204
	},
	{
		id: 790,
		name: 'SAN VICENTE',
		departmentId: 204
	},
	{
		id: 791,
		name: 'FRONTERA',
		departmentId: 204
	},
	{
		id: 792,
		name: 'AURELIA',
		departmentId: 204
	},
	{
		id: 793,
		name: 'VILA',
		departmentId: 204
	},
	{
		id: 794,
		name: 'AREQUITO',
		departmentId: 205
	},
	{
		id: 795,
		name: 'CHABAS',
		departmentId: 205
	},
	{
		id: 796,
		name: 'LOS MOLINOS',
		departmentId: 205
	},
	{
		id: 797,
		name: 'VILLADA',
		departmentId: 205
	},
	{
		id: 798,
		name: 'GODEKEN',
		departmentId: 205
	},
	{
		id: 799,
		name: 'BERABEVU',
		departmentId: 205
	},
	{
		id: 800,
		name: 'CASILDA',
		departmentId: 205
	},
	{
		id: 801,
		name: 'LOS QUIRQUINCHOS',
		departmentId: 205
	},
	{
		id: 802,
		name: 'SAN JOSE DE LA ESQUINA',
		departmentId: 205
	},
	{
		id: 803,
		name: 'CHAÑAR LADEADO',
		departmentId: 205
	},
	{
		id: 804,
		name: 'SANFORD',
		departmentId: 205
	},
	{
		id: 805,
		name: 'ARTEAGA',
		departmentId: 205
	},
	{
		id: 806,
		name: 'BIGAND',
		departmentId: 205
	},
	{
		id: 807,
		name: 'GENERAL LAGOS',
		departmentId: 206
	},
	{
		id: 808,
		name: 'ALVEAR',
		departmentId: 206
	},
	{
		id: 809,
		name: 'FUNES',
		departmentId: 206
	},
	{
		id: 810,
		name: 'GRANADERO BAIGORRIA',
		departmentId: 206
	},
	{
		id: 811,
		name: 'ALVAREZ',
		departmentId: 206
	},
	{
		id: 812,
		name: 'PEREZ',
		departmentId: 206
	},
	{
		id: 813,
		name: 'IBARLUCEA',
		departmentId: 206
	},
	{
		id: 814,
		name: 'PIÑERO',
		departmentId: 206
	},
	{
		id: 815,
		name: 'ARMINDA',
		departmentId: 206
	},
	{
		id: 816,
		name: 'ROSARIO',
		departmentId: 206
	},
	{
		id: 817,
		name: 'ARROYO SECO',
		departmentId: 206
	},
	{
		id: 818,
		name: 'FIGHIERA',
		departmentId: 206
	},
	{
		id: 819,
		name: 'CORONEL BOGADO',
		departmentId: 206
	},
	{
		id: 820,
		name: 'URANGA',
		departmentId: 206
	},
	{
		id: 821,
		name: 'VILLA AMELIA',
		departmentId: 206
	},
	{
		id: 822,
		name: 'VILLA GOBERNADOR GALVEZ',
		departmentId: 206
	},
	{
		id: 823,
		name: 'PUEBLO ESTHER',
		departmentId: 206
	},
	{
		id: 824,
		name: 'ACEBAL',
		departmentId: 206
	},
	{
		id: 825,
		name: 'ZAVALLA',
		departmentId: 206
	},
	{
		id: 826,
		name: 'CORONEL DOMINGUEZ',
		departmentId: 206
	},
	{
		id: 827,
		name: 'CARMEN DEL SAUCE',
		departmentId: 206
	},
	{
		id: 828,
		name: 'PUEBLO MUÑOZ',
		departmentId: 206
	},
	{
		id: 829,
		name: 'SOLDINI',
		departmentId: 206
	},
	{
		id: 830,
		name: 'ALBARELLOS',
		departmentId: 206
	},
	{
		id: 831,
		name: 'SUARDI',
		departmentId: 207
	},
	{
		id: 832,
		name: 'LAS AVISPAS',
		departmentId: 207
	},
	{
		id: 833,
		name: 'DOS ROSAS Y LA LEGUA',
		departmentId: 207
	},
	{
		id: 834,
		name: 'PALACIOS',
		departmentId: 207
	},
	{
		id: 835,
		name: 'MONIGOTES',
		departmentId: 207
	},
	{
		id: 836,
		name: 'CONSTANZA',
		departmentId: 207
	},
	{
		id: 837,
		name: 'VILLA SARALEGUI',
		departmentId: 207
	},
	{
		id: 838,
		name: 'AGUARA GRANDE',
		departmentId: 207
	},
	{
		id: 839,
		name: 'ARRUFO',
		departmentId: 207
	},
	{
		id: 840,
		name: 'LAS PALMERAS',
		departmentId: 207
	},
	{
		id: 841,
		name: 'SAN GUILLERMO',
		departmentId: 207
	},
	{
		id: 842,
		name: 'CERES',
		departmentId: 207
	},
	{
		id: 843,
		name: 'HUANQUEROS',
		departmentId: 207
	},
	{
		id: 844,
		name: 'COLONIA ROSA',
		departmentId: 207
	},
	{
		id: 845,
		name: 'ÑANDUCITA',
		departmentId: 207
	},
	{
		id: 846,
		name: 'CURUPAITY',
		departmentId: 207
	},
	{
		id: 847,
		name: 'CAPIVARA',
		departmentId: 207
	},
	{
		id: 848,
		name: 'HERSILIA',
		departmentId: 207
	},
	{
		id: 849,
		name: 'COLONIA BOSSI',
		departmentId: 207
	},
	{
		id: 850,
		name: 'PORTUGALETE',
		departmentId: 207
	},
	{
		id: 851,
		name: 'AMBROSETTI',
		departmentId: 207
	},
	{
		id: 852,
		name: 'SANTURCE',
		departmentId: 207
	},
	{
		id: 853,
		name: 'VILLA TRINIDAD',
		departmentId: 207
	},
	{
		id: 854,
		name: 'LA CABRAL',
		departmentId: 207
	},
	{
		id: 855,
		name: 'LA LUCILA',
		departmentId: 207
	},
	{
		id: 856,
		name: 'SAN CRISTOBAL',
		departmentId: 207
	},
	{
		id: 857,
		name: 'SOLEDAD',
		departmentId: 207
	},
	{
		id: 858,
		name: 'MONTE OSCURIDAD',
		departmentId: 207
	},
	{
		id: 859,
		name: 'COLONIA ANA',
		departmentId: 207
	},
	{
		id: 860,
		name: 'LA RUBIA',
		departmentId: 207
	},
	{
		id: 861,
		name: 'MOISES VILLE',
		departmentId: 207
	},
	{
		id: 862,
		name: 'SANTA CLARA DE BUENA VISTA',
		departmentId: 208
	},
	{
		id: 863,
		name: 'SANTO DOMINGO',
		departmentId: 208
	},
	{
		id: 864,
		name: 'SANTA MARIA NORTE',
		departmentId: 208
	},
	{
		id: 865,
		name: 'PROVIDENCIA',
		departmentId: 208
	},
	{
		id: 866,
		name: 'SAN CARLOS CENTRO',
		departmentId: 208
	},
	{
		id: 867,
		name: 'FELICIA',
		departmentId: 208
	},
	{
		id: 868,
		name: 'EMPALME SAN CARLOS',
		departmentId: 208
	},
	{
		id: 869,
		name: 'SAN CARLOS NORTE',
		departmentId: 208
	},
	{
		id: 870,
		name: 'SAN JERONIMO DEL SAUCE',
		departmentId: 208
	},
	{
		id: 871,
		name: 'RIVADAVIA',
		departmentId: 208
	},
	{
		id: 872,
		name: 'ITUZAINGO',
		departmentId: 208
	},
	{
		id: 873,
		name: 'GRUTLY',
		departmentId: 208
	},
	{
		id: 874,
		name: 'PUJATO NORTE',
		departmentId: 208
	},
	{
		id: 875,
		name: 'SAN AGUSTIN',
		departmentId: 208
	},
	{
		id: 876,
		name: 'LA PELADA',
		departmentId: 208
	},
	{
		id: 877,
		name: 'PILAR',
		departmentId: 208
	},
	{
		id: 878,
		name: 'SANTA MARIA CENTRO',
		departmentId: 208
	},
	{
		id: 879,
		name: 'JACINTO L',
		departmentId: 208
	},
	{
		id: 880,
		name: 'SA PEREYRA',
		departmentId: 208
	},
	{
		id: 881,
		name: 'ELISA',
		departmentId: 208
	},
	{
		id: 882,
		name: 'CAVOUR',
		departmentId: 208
	},
	{
		id: 883,
		name: 'SOUTOMAYOR',
		departmentId: 208
	},
	{
		id: 884,
		name: 'ESPERANZA',
		departmentId: 208
	},
	{
		id: 885,
		name: 'MATILDE',
		departmentId: 208
	},
	{
		id: 886,
		name: 'SAN MARIANO',
		departmentId: 208
	},
	{
		id: 887,
		name: 'HIPATIA',
		departmentId: 208
	},
	{
		id: 888,
		name: 'PROGRESO',
		departmentId: 208
	},
	{
		id: 889,
		name: 'NUEVO TORINO',
		departmentId: 208
	},
	{
		id: 890,
		name: 'LAS TUNAS',
		departmentId: 208
	},
	{
		id: 891,
		name: 'SAN JERONIMO NORTE',
		departmentId: 208
	},
	{
		id: 892,
		name: 'SAN CARLOS SUD',
		departmentId: 208
	},
	{
		id: 893,
		name: 'MARIA LUISA',
		departmentId: 208
	},
	{
		id: 894,
		name: 'SAN JOSE',
		departmentId: 208
	},
	{
		id: 895,
		name: 'CULULU',
		departmentId: 208
	},
	{
		id: 896,
		name: 'SARMIENTO',
		departmentId: 208
	},
	{
		id: 897,
		name: 'HUMBOLDT',
		departmentId: 208
	},
	{
		id: 898,
		name: 'FRANCK',
		departmentId: 208
	},
	{
		id: 899,
		name: 'LABORDEBOY',
		departmentId: 209
	},
	{
		id: 900,
		name: 'CAFERATA',
		departmentId: 209
	},
	{
		id: 901,
		name: 'SAN FRANCISCO DE SANTA FE',
		departmentId: 209
	},
	{
		id: 902,
		name: 'MURPHY',
		departmentId: 209
	},
	{
		id: 903,
		name: 'CARRERAS',
		departmentId: 209
	},
	{
		id: 904,
		name: 'VILLA CAÑAS',
		departmentId: 209
	},
	{
		id: 905,
		name: 'AMENABAR',
		departmentId: 209
	},
	{
		id: 906,
		name: 'VENADO TUERTO',
		departmentId: 209
	},
	{
		id: 907,
		name: 'MIGUEL TORRES',
		departmentId: 209
	},
	{
		id: 908,
		name: 'ELORTONDO',
		departmentId: 209
	},
	{
		id: 909,
		name: 'MARIA TERESA',
		departmentId: 209
	},
	{
		id: 910,
		name: 'SAN GREGORIO',
		departmentId: 209
	},
	{
		id: 911,
		name: 'AARON CASTELLANOS',
		departmentId: 209
	},
	{
		id: 912,
		name: 'CHRISTOPHERSEN',
		departmentId: 209
	},
	{
		id: 913,
		name: 'CHOVET',
		departmentId: 209
	},
	{
		id: 914,
		name: 'SANTA ISABEL',
		departmentId: 209
	},
	{
		id: 915,
		name: 'WHEELWRIGHT',
		departmentId: 209
	},
	{
		id: 916,
		name: 'SANCTI SPIRITU',
		departmentId: 209
	},
	{
		id: 917,
		name: 'MELINCUE',
		departmentId: 209
	},
	{
		id: 918,
		name: 'MAGGIOLO',
		departmentId: 209
	},
	{
		id: 919,
		name: 'LA CHISPA',
		departmentId: 209
	},
	{
		id: 920,
		name: 'SAN EDUARDO',
		departmentId: 209
	},
	{
		id: 921,
		name: 'CHAPUY',
		departmentId: 209
	},
	{
		id: 922,
		name: 'CAÑADA DEL UCLE',
		departmentId: 209
	},
	{
		id: 923,
		name: 'DIEGO DE ALVEAR',
		departmentId: 209
	},
	{
		id: 924,
		name: 'FIRMAT',
		departmentId: 209
	},
	{
		id: 925,
		name: 'LAZZARINO',
		departmentId: 209
	},
	{
		id: 926,
		name: 'CARMEN',
		departmentId: 209
	},
	{
		id: 927,
		name: 'HUGHES',
		departmentId: 209
	},
	{
		id: 928,
		name: 'RUFINO',
		departmentId: 209
	},
	{
		id: 929,
		name: 'TEODELINA',
		departmentId: 209
	},
	{
		id: 930,
		name: 'EL TREBOL',
		departmentId: 210
	},
	{
		id: 931,
		name: 'LOS CARDOS',
		departmentId: 210
	},
	{
		id: 932,
		name: 'MARIA SUSANA',
		departmentId: 210
	},
	{
		id: 933,
		name: 'SAN MARTIN DE LAS ESCOBAS',
		departmentId: 210
	},
	{
		id: 934,
		name: 'CRISPI',
		departmentId: 210
	},
	{
		id: 935,
		name: 'PIAMONTE',
		departmentId: 210
	},
	{
		id: 936,
		name: 'SASTRE',
		departmentId: 210
	},
	{
		id: 937,
		name: 'CAÑADA ROSQUIN',
		departmentId: 210
	},
	{
		id: 938,
		name: 'SAN JORGE',
		departmentId: 210
	},
	{
		id: 939,
		name: 'LAS PETACAS',
		departmentId: 210
	},
	{
		id: 940,
		name: 'COLONIA BELGRANO',
		departmentId: 210
	},
	{
		id: 941,
		name: 'LAS BANDURRIAS',
		departmentId: 210
	},
	{
		id: 942,
		name: 'LANDETA',
		departmentId: 210
	},
	{
		id: 943,
		name: 'TRAILL',
		departmentId: 210
	},
	{
		id: 944,
		name: 'CASAS',
		departmentId: 210
	},
	{
		id: 945,
		name: 'CASTELAR',
		departmentId: 210
	},
	{
		id: 946,
		name: 'CARLOS PELLEGRINI',
		departmentId: 210
	},
	{
		id: 947,
		name: 'LANTERI',
		departmentId: 211
	},
	{
		id: 948,
		name: 'NICANOR MOLINAS',
		departmentId: 211
	},
	{
		id: 949,
		name: 'HARDY',
		departmentId: 211
	},
	{
		id: 950,
		name: 'SAN ANTONIO DE OBLIGADO',
		departmentId: 211
	},
	{
		id: 951,
		name: 'LOS LAURELES',
		departmentId: 211
	},
	{
		id: 952,
		name: 'VILLA GUILLERMINA',
		departmentId: 211
	},
	{
		id: 953,
		name: 'BERNA',
		departmentId: 211
	},
	{
		id: 954,
		name: 'RECONQUISTA',
		departmentId: 211
	},
	{
		id: 955,
		name: 'VILLA OCAMPO',
		departmentId: 211
	},
	{
		id: 956,
		name: 'TACUARENDI',
		departmentId: 211
	},
	{
		id: 957,
		name: 'LA SARITA',
		departmentId: 211
	},
	{
		id: 958,
		name: 'AVELLANEDA',
		departmentId: 211
	},
	{
		id: 959,
		name: 'MALABRIGO',
		departmentId: 211
	},
	{
		id: 960,
		name: 'EL ARAZA',
		departmentId: 211
	},
	{
		id: 961,
		name: 'EL RABON',
		departmentId: 211
	},
	{
		id: 962,
		name: 'INGENIERO CHANOURDIE',
		departmentId: 211
	},
	{
		id: 963,
		name: 'VILLA ANA',
		departmentId: 211
	},
	{
		id: 964,
		name: 'GUADALUPE NORTE',
		departmentId: 211
	},
	{
		id: 965,
		name: 'FLORENCIA',
		departmentId: 211
	},
	{
		id: 966,
		name: 'LAS TOSCAS',
		departmentId: 211
	},
	{
		id: 967,
		name: 'ARROYO CEIBAL',
		departmentId: 211
	},
	{
		id: 968,
		name: 'LAS GARZAS',
		departmentId: 211
	},
	{
		id: 969,
		name: 'EL SOMBRERITO',
		departmentId: 211
	},
	{
		id: 970,
		name: 'COLONIA TERESA',
		departmentId: 212
	},
	{
		id: 971,
		name: 'SAN JAVIER',
		departmentId: 212
	},
	{
		id: 972,
		name: 'COLONIA DURAN',
		departmentId: 212
	},
	{
		id: 973,
		name: 'ALEJANDRA',
		departmentId: 212
	},
	{
		id: 974,
		name: 'CACIQUE ARIACAIQUIN',
		departmentId: 212
	},
	{
		id: 975,
		name: 'ROMANG',
		departmentId: 212
	},
	{
		id: 976,
		name: 'LA BRAVA',
		departmentId: 212
	},
	{
		id: 977,
		name: 'CAMPO PIAGGIO',
		departmentId: 213
	},
	{
		id: 978,
		name: 'DIAZ',
		departmentId: 213
	},
	{
		id: 979,
		name: 'BARRANCAS',
		departmentId: 213
	},
	{
		id: 980,
		name: 'GESSLER',
		departmentId: 213
	},
	{
		id: 981,
		name: 'AROCENA',
		departmentId: 213
	},
	{
		id: 982,
		name: 'GALVEZ',
		departmentId: 213
	},
	{
		id: 983,
		name: 'GABOTO',
		departmentId: 213
	},
	{
		id: 984,
		name: 'CORONDA',
		departmentId: 213
	},
	{
		id: 985,
		name: 'CASALEGNO',
		departmentId: 213
	},
	{
		id: 986,
		name: 'MONJE',
		departmentId: 213
	},
	{
		id: 987,
		name: 'SAN GENARO',
		departmentId: 213
	},
	{
		id: 988,
		name: 'SAN FABIAN',
		departmentId: 213
	},
	{
		id: 989,
		name: 'BERNARDO DE IRIGOYEN',
		departmentId: 213
	},
	{
		id: 990,
		name: 'SAN EUGENIO',
		departmentId: 213
	},
	{
		id: 991,
		name: 'LARRECHEA',
		departmentId: 213
	},
	{
		id: 992,
		name: 'LOMA ALTA',
		departmentId: 213
	},
	{
		id: 993,
		name: 'CENTENO',
		departmentId: 213
	},
	{
		id: 994,
		name: 'IRIGOYEN',
		departmentId: 213
	},
	{
		id: 995,
		name: 'MACIEL',
		departmentId: 213
	},
	{
		id: 996,
		name: 'LOPEZ',
		departmentId: 213
	},
	{
		id: 997,
		name: 'DESVIO ARIJON',
		departmentId: 213
	},
	{
		id: 998,
		name: 'LOS TABANOS',
		departmentId: 214
	},
	{
		id: 999,
		name: 'TOBA',
		departmentId: 214
	},
	{
		id: 1000,
		name: 'VERA',
		departmentId: 214
	},
	{
		id: 1001,
		name: 'MARGARITA',
		departmentId: 214
	},
	{
		id: 1002,
		name: 'GOLONDRINA',
		departmentId: 214
	},
	{
		id: 1003,
		name: 'CAÑADA OMBU',
		departmentId: 214
	},
	{
		id: 1004,
		name: 'TARTAGAL',
		departmentId: 214
	},
	{
		id: 1005,
		name: 'LOS AMORES',
		departmentId: 214
	},
	{
		id: 1006,
		name: 'FORTIN OLMOS',
		departmentId: 214
	},
	{
		id: 1007,
		name: 'LA GALLARETA',
		departmentId: 214
	},
	{
		id: 1008,
		name: 'GARABATO',
		departmentId: 214
	},
	{
		id: 1009,
		name: 'CALCHAQUI',
		departmentId: 214
	},
	{
		id: 1010,
		name: 'INTIYACO',
		departmentId: 214
	},
	{
		id: 1011,
		name: 'PEDRO GOMEZ CELLO',
		departmentId: 215
	},
	{
		id: 1012,
		name: 'NARE',
		departmentId: 215
	},
	{
		id: 1013,
		name: 'VERA Y PINTADO',
		departmentId: 215
	},
	{
		id: 1014,
		name: 'RAMAYON',
		departmentId: 215
	},
	{
		id: 1015,
		name: 'GOBERNADOR CRESPO',
		departmentId: 215
	},
	{
		id: 1016,
		name: 'SILVA',
		departmentId: 215
	},
	{
		id: 1017,
		name: 'ANGELONI',
		departmentId: 215
	},
	{
		id: 1018,
		name: 'COLONIA DOLORES',
		departmentId: 215
	},
	{
		id: 1019,
		name: 'LA PENCA Y CARAGUATA',
		departmentId: 215
	},
	{
		id: 1020,
		name: 'MARCELINO ESCALADA',
		departmentId: 215
	},
	{
		id: 1021,
		name: 'CAYASTACITO',
		departmentId: 215
	},
	{
		id: 1022,
		name: 'SAN JUSTO',
		departmentId: 215
	},
	{
		id: 1023,
		name: 'VIDELA',
		departmentId: 215
	},
	{
		id: 1024,
		name: 'ESTHER',
		departmentId: 215
	},
	{
		id: 1025,
		name: 'LA CAMILA',
		departmentId: 215
	},
	{
		id: 1026,
		name: 'LA CRIOLLA',
		departmentId: 215
	},
	{
		id: 1027,
		name: 'SAN MARTIN NORTE',
		departmentId: 215
	},
	{
		id: 1028,
		name: 'SAN BERNARDO',
		departmentId: 215
	},
	{
		id: 1029,
		name: 'LLAMBI CAMPBELL',
		departmentId: 216
	},
	{
		id: 1030,
		name: 'SANTO TOME',
		departmentId: 216
	},
	{
		id: 1031,
		name: 'CANDIOTI',
		departmentId: 216
	},
	{
		id: 1032,
		name: 'SAN JOSE DEL RINCON',
		departmentId: 216
	},
	{
		id: 1033,
		name: 'LAGUNA PAIVA',
		departmentId: 216
	},
	{
		id: 1034,
		name: 'SANTA FE',
		departmentId: 216
	},
	{
		id: 1035,
		name: 'RECREO',
		departmentId: 216
	},
	{
		id: 1036,
		name: 'CAMPO ANDINO',
		departmentId: 216
	},
	{
		id: 1037,
		name: 'ARROYO AGUIAR',
		departmentId: 216
	},
	{
		id: 1038,
		name: 'NELSON',
		departmentId: 216
	},
	{
		id: 1039,
		name: 'ARROYO LEYES',
		departmentId: 216
	},
	{
		id: 1040,
		name: 'CABAL',
		departmentId: 216
	},
	{
		id: 1041,
		name: 'EMILIA',
		departmentId: 216
	},
	{
		id: 1042,
		name: 'SAUCE VIEJO',
		departmentId: 216
	},
	{
		id: 1043,
		name: 'MONTE VERA',
		departmentId: 216
	},
	{
		id: 1044,
		name: 'MONTES DE OCA',
		departmentId: 217
	},
	{
		id: 1045,
		name: 'LAS PAREJAS',
		departmentId: 217
	},
	{
		id: 1046,
		name: 'TORTUGAS',
		departmentId: 217
	},
	{
		id: 1047,
		name: 'BOUQUET',
		departmentId: 217
	},
	{
		id: 1048,
		name: 'ARMSTRONG',
		departmentId: 217
	},
	{
		id: 1049,
		name: 'LAS ROSAS',
		departmentId: 217
	},
	{
		id: 1050,
		name: 'GATO COLORADO',
		departmentId: 218
	},
	{
		id: 1051,
		name: 'SANTA MARGARITA',
		departmentId: 218
	},
	{
		id: 1052,
		name: 'ESTEBAN RAMS',
		departmentId: 218
	},
	{
		id: 1053,
		name: 'POZO BORRADO',
		departmentId: 218
	},
	{
		id: 1054,
		name: 'VILLA MINETTI',
		departmentId: 218
	},
	{
		id: 1055,
		name: 'JUAN DE GARAY',
		departmentId: 218
	},
	{
		id: 1056,
		name: 'MONTEFIORE',
		departmentId: 218
	},
	{
		id: 1057,
		name: 'SAN BERNARDO',
		departmentId: 218
	},
	{
		id: 1058,
		name: 'GREGORIA PEREZ DE DENIS',
		departmentId: 218
	},
	{
		id: 1059,
		name: 'LOGROÑO',
		departmentId: 218
	},
	{
		id: 1060,
		name: 'TOSTADO',
		departmentId: 218
	},
	{
		id: 1061,
		name: 'SALADERO MARIANO CABAL',
		departmentId: 219
	},
	{
		id: 1062,
		name: 'COLONIA MASCIAS',
		departmentId: 219
	},
	{
		id: 1063,
		name: 'CAYASTA',
		departmentId: 219
	},
	{
		id: 1064,
		name: 'HELVECIA',
		departmentId: 219
	},
	{
		id: 1065,
		name: 'SANTA ROSA DE CALCHINES',
		departmentId: 219
	},
	{
		id: 1066,
		name: 'LUIS PALACIOS',
		departmentId: 220
	},
	{
		id: 1067,
		name: 'TIMBUES',
		departmentId: 220
	},
	{
		id: 1068,
		name: 'PUJATO',
		departmentId: 220
	},
	{
		id: 1069,
		name: 'FRAY LUIS BELTRAN',
		departmentId: 220
	},
	{
		id: 1070,
		name: 'PUERTO GENERAL SAN MARTIN',
		departmentId: 220
	},
	{
		id: 1071,
		name: 'ALDAO',
		departmentId: 220
	},
	{
		id: 1072,
		name: 'RICARDONE',
		departmentId: 220
	},
	{
		id: 1073,
		name: 'FUENTES',
		departmentId: 220
	},
	{
		id: 1074,
		name: 'VILLA MUGUETA',
		departmentId: 220
	},
	{
		id: 1075,
		name: 'CAPITAN BERMUDEZ',
		departmentId: 220
	},
	{
		id: 1076,
		name: 'CORONEL ARNOLD',
		departmentId: 220
	},
	{
		id: 1077,
		name: 'SAN LORENZO',
		departmentId: 220
	},
	{
		id: 1078,
		name: 'ROLDAN',
		departmentId: 220
	},
	{
		id: 1079,
		name: 'CARCARAÑA',
		departmentId: 220
	},
	{
		id: 1080,
		name: 'SAN JERONIMO SUD',
		departmentId: 220
	},
	{
		id: 1081,
		name: 'VILLA MERCEDES',
		departmentId: 221
	},
	{
		id: 1082,
		name: 'NACION RANQUEL',
		departmentId: 221
	},
	{
		id: 1083,
		name: 'JUAN JORBA',
		departmentId: 221
	},
	{
		id: 1084,
		name: 'LA PUNILLA',
		departmentId: 221
	},
	{
		id: 1085,
		name: 'JUSTO DARACT',
		departmentId: 221
	},
	{
		id: 1086,
		name: 'AREA SIN GOBIERNO',
		departmentId: 221
	},
	{
		id: 1087,
		name: 'LAVAISSE',
		departmentId: 221
	},
	{
		id: 1088,
		name: 'ALTO PELADO',
		departmentId: 221
	},
	{
		id: 1089,
		name: 'SAN JOSE DEL MORRO',
		departmentId: 221
	},
	{
		id: 1090,
		name: 'LAS AGUADAS',
		departmentId: 222
	},
	{
		id: 1091,
		name: 'LAS LAGUNAS',
		departmentId: 222
	},
	{
		id: 1092,
		name: 'VILLA DE PRAGA',
		departmentId: 222
	},
	{
		id: 1093,
		name: 'LA VERTIENTE',
		departmentId: 222
	},
	{
		id: 1094,
		name: 'LAS CHACRAS',
		departmentId: 222
	},
	{
		id: 1095,
		name: 'PASO GRANDE',
		departmentId: 222
	},
	{
		id: 1096,
		name: 'SAN MARTIN',
		departmentId: 222
	},
	{
		id: 1097,
		name: 'AREA SIN GOBIERNO',
		departmentId: 222
	},
	{
		id: 1098,
		name: 'LA TOMA',
		departmentId: 223
	},
	{
		id: 1099,
		name: 'ESTANCIA GRANDE',
		departmentId: 223
	},
	{
		id: 1100,
		name: 'EL TRAPICHE',
		departmentId: 223
	},
	{
		id: 1101,
		name: 'CAROLINA',
		departmentId: 223
	},
	{
		id: 1102,
		name: 'SALADILLO',
		departmentId: 223
	},
	{
		id: 1103,
		name: 'VILLA LA FLORIDA',
		departmentId: 223
	},
	{
		id: 1104,
		name: 'JUAN LLERENA',
		departmentId: 223
	},
	{
		id: 1105,
		name: 'FRAGA',
		departmentId: 223
	},
	{
		id: 1106,
		name: 'AREA SIN GOBIERNO',
		departmentId: 223
	},
	{
		id: 1107,
		name: 'LOS CAJONES',
		departmentId: 224
	},
	{
		id: 1108,
		name: 'SANTA ROSA DEL CONLARA',
		departmentId: 224
	},
	{
		id: 1109,
		name: 'LAFINUR',
		departmentId: 224
	},
	{
		id: 1110,
		name: 'CARPINTERIA',
		departmentId: 224
	},
	{
		id: 1111,
		name: 'LOS MOLLES',
		departmentId: 224
	},
	{
		id: 1112,
		name: 'VILLA DE MERLO',
		departmentId: 224
	},
	{
		id: 1113,
		name: 'TALITA',
		departmentId: 224
	},
	{
		id: 1114,
		name: 'AREA SIN GOBIERNO',
		departmentId: 224
	},
	{
		id: 1115,
		name: 'QUINES',
		departmentId: 225
	},
	{
		id: 1116,
		name: 'LEANDRO N ALEM',
		departmentId: 225
	},
	{
		id: 1117,
		name: 'AREA SIN GOBIERNO',
		departmentId: 225
	},
	{
		id: 1118,
		name: 'CANDELARIA',
		departmentId: 225
	},
	{
		id: 1119,
		name: 'SAN FRANCISCO DEL MONTE DE ORO',
		departmentId: 225
	},
	{
		id: 1120,
		name: 'LUJAN',
		departmentId: 225
	},
	{
		id: 1121,
		name: 'CORTADERAS',
		departmentId: 226
	},
	{
		id: 1122,
		name: 'VILLA LARCA',
		departmentId: 226
	},
	{
		id: 1123,
		name: 'SAN PABLO',
		departmentId: 226
	},
	{
		id: 1124,
		name: 'TILISARAO',
		departmentId: 226
	},
	{
		id: 1125,
		name: 'NASCHEL',
		departmentId: 226
	},
	{
		id: 1126,
		name: 'VILLA DEL CARMEN',
		departmentId: 226
	},
	{
		id: 1127,
		name: 'RENCA',
		departmentId: 226
	},
	{
		id: 1128,
		name: 'AREA SIN GOBIERNO',
		departmentId: 226
	},
	{
		id: 1129,
		name: 'PAPAGAYOS',
		departmentId: 226
	},
	{
		id: 1130,
		name: 'CONCARAN',
		departmentId: 226
	},
	{
		id: 1131,
		name: 'AREA SIN GOBIERNO',
		departmentId: 227
	},
	{
		id: 1132,
		name: 'ZANJITAS',
		departmentId: 227
	},
	{
		id: 1133,
		name: 'EL VOLCAN',
		departmentId: 227
	},
	{
		id: 1134,
		name: 'SAN LUIS',
		departmentId: 227
	},
	{
		id: 1135,
		name: 'NAVIA',
		departmentId: 227
	},
	{
		id: 1136,
		name: 'ALTO PENCOSO',
		departmentId: 227
	},
	{
		id: 1137,
		name: 'BEAZLEY',
		departmentId: 227
	},
	{
		id: 1138,
		name: 'JUANA KOSLAY',
		departmentId: 227
	},
	{
		id: 1139,
		name: 'LA PUNTA',
		departmentId: 227
	},
	{
		id: 1140,
		name: 'SAN JERONIMO',
		departmentId: 227
	},
	{
		id: 1141,
		name: 'POTRERO DE LOS FUNES',
		departmentId: 227
	},
	{
		id: 1142,
		name: 'DESAGUADERO',
		departmentId: 227
	},
	{
		id: 1143,
		name: 'BALDE',
		departmentId: 227
	},
	{
		id: 1144,
		name: 'BAGUAL',
		departmentId: 228
	},
	{
		id: 1145,
		name: 'AREA SIN GOBIERNO',
		departmentId: 228
	},
	{
		id: 1146,
		name: 'FORTIN EL PATRIA',
		departmentId: 228
	},
	{
		id: 1147,
		name: 'UNION',
		departmentId: 228
	},
	{
		id: 1148,
		name: 'BUENA ESPERANZA',
		departmentId: 228
	},
	{
		id: 1149,
		name: 'FORTUNA',
		departmentId: 228
	},
	{
		id: 1150,
		name: 'ARIZONA',
		departmentId: 228
	},
	{
		id: 1151,
		name: 'NUEVA GALIA',
		departmentId: 228
	},
	{
		id: 1152,
		name: 'ANCHORENA',
		departmentId: 228
	},
	{
		id: 1153,
		name: 'BATAVIA',
		departmentId: 228
	},
	{
		id: 1154,
		name: 'NOGOLI',
		departmentId: 229
	},
	{
		id: 1155,
		name: 'VILLA DE LA QUEBRADA',
		departmentId: 229
	},
	{
		id: 1156,
		name: 'AREA SIN GOBIERNO',
		departmentId: 229
	},
	{
		id: 1157,
		name: 'LA CALERA',
		departmentId: 229
	},
	{
		id: 1158,
		name: 'VILLA GENERAL ROCA',
		departmentId: 229
	},
	{
		id: 1159,
		name: 'ABDON CASTRO TOLAY',
		departmentId: 230
	},
	{
		id: 1160,
		name: 'ABRALAITE',
		departmentId: 230
	},
	{
		id: 1161,
		name: 'ABRA PAMPA',
		departmentId: 230
	},
	{
		id: 1162,
		name: 'PUESTO DEL MARQUEZ',
		departmentId: 230
	},
	{
		id: 1163,
		name: 'HUACALERA',
		departmentId: 231
	},
	{
		id: 1164,
		name: 'TILCARA',
		departmentId: 231
	},
	{
		id: 1165,
		name: 'MAIMARA',
		departmentId: 231
	},
	{
		id: 1166,
		name: 'TUMBAYA',
		departmentId: 232
	},
	{
		id: 1167,
		name: 'PURMAMARCA',
		departmentId: 232
	},
	{
		id: 1168,
		name: 'VOLCAN',
		departmentId: 232
	},
	{
		id: 1169,
		name: 'CALILEGUA',
		departmentId: 233
	},
	{
		id: 1170,
		name: 'LIBERTADOR GENERAL SAN MARTIN',
		departmentId: 233
	},
	{
		id: 1171,
		name: 'CAIMANCITO',
		departmentId: 233
	},
	{
		id: 1172,
		name: 'YUTO',
		departmentId: 233
	},
	{
		id: 1173,
		name: 'FRAILE PINTADO',
		departmentId: 233
	},
	{
		id: 1174,
		name: 'LA ESPERANZA',
		departmentId: 234
	},
	{
		id: 1175,
		name: 'ROSARIO DE RIO GRANDE',
		departmentId: 234
	},
	{
		id: 1176,
		name: 'RODEITO',
		departmentId: 234
	},
	{
		id: 1177,
		name: 'ARRAYANAL',
		departmentId: 234
	},
	{
		id: 1178,
		name: 'LA MENDIETA',
		departmentId: 234
	},
	{
		id: 1179,
		name: 'SAN PEDRO DE JUJUY',
		departmentId: 234
	},
	{
		id: 1180,
		name: 'PERICO',
		departmentId: 235
	},
	{
		id: 1181,
		name: 'AGUAS CALIENTES',
		departmentId: 235
	},
	{
		id: 1182,
		name: 'EL CARMEN',
		departmentId: 235
	},
	{
		id: 1183,
		name: 'PAMPA BLANCA',
		departmentId: 235
	},
	{
		id: 1184,
		name: 'MONTERRICO',
		departmentId: 235
	},
	{
		id: 1185,
		name: 'PUESTO VIEJO',
		departmentId: 235
	},
	{
		id: 1186,
		name: 'PALMA SOLA',
		departmentId: 236
	},
	{
		id: 1187,
		name: 'EL FUERTE',
		departmentId: 236
	},
	{
		id: 1188,
		name: 'VINALITO',
		departmentId: 236
	},
	{
		id: 1189,
		name: 'SANTA CLARA',
		departmentId: 236
	},
	{
		id: 1190,
		name: 'EL PIQUETE',
		departmentId: 236
	},
	{
		id: 1191,
		name: 'EL TALAR',
		departmentId: 236
	},
	{
		id: 1192,
		name: 'CUSI CUSI',
		departmentId: 237
	},
	{
		id: 1193,
		name: 'SANTA CATALINA',
		departmentId: 237
	},
	{
		id: 1194,
		name: 'CIENEGUILLAS',
		departmentId: 237
	},
	{
		id: 1195,
		name: 'SAN SALVADOR DE JUJUY',
		departmentId: 238
	},
	{
		id: 1196,
		name: 'YALA',
		departmentId: 238
	},
	{
		id: 1197,
		name: 'CASPALA',
		departmentId: 239
	},
	{
		id: 1198,
		name: 'SAN FRANCISCO',
		departmentId: 239
	},
	{
		id: 1199,
		name: 'PAMPICHUELA',
		departmentId: 239
	},
	{
		id: 1200,
		name: 'SANTA ANA',
		departmentId: 239
	},
	{
		id: 1201,
		name: 'VALLE GRANDE',
		departmentId: 239
	},
	{
		id: 1202,
		name: 'CATUA',
		departmentId: 240
	},
	{
		id: 1203,
		name: 'CORANZULI',
		departmentId: 240
	},
	{
		id: 1204,
		name: 'SUSQUES',
		departmentId: 240
	},
	{
		id: 1205,
		name: 'EL AGUILAR',
		departmentId: 241
	},
	{
		id: 1206,
		name: 'HUMAHUACA',
		departmentId: 241
	},
	{
		id: 1207,
		name: 'TRES CRUCES',
		departmentId: 241
	},
	{
		id: 1208,
		name: 'HIPOLITO YRIGOYEN',
		departmentId: 241
	},
	{
		id: 1209,
		name: 'SAN ANTONIO',
		departmentId: 242
	},
	{
		id: 1210,
		name: 'EL CONDOR',
		departmentId: 243
	},
	{
		id: 1211,
		name: 'YAVI',
		departmentId: 243
	},
	{
		id: 1212,
		name: 'BARRIOS',
		departmentId: 243
	},
	{
		id: 1213,
		name: 'CANGREJILLOS',
		departmentId: 243
	},
	{
		id: 1214,
		name: 'LA QUIACA',
		departmentId: 243
	},
	{
		id: 1215,
		name: 'PUMAHUASI',
		departmentId: 243
	},
	{
		id: 1216,
		name: 'MINA PIRQUITAS',
		departmentId: 244
	},
	{
		id: 1217,
		name: 'RINCONADA',
		departmentId: 244
	},
	{
		id: 1218,
		name: 'PALPALA',
		departmentId: 245
	},
	{
		id: 1219,
		name: 'NAUPA HUEN',
		departmentId: 246
	},
	{
		id: 1220,
		name: 'EL CUY',
		departmentId: 246
	},
	{
		id: 1221,
		name: 'VALLE AZUL',
		departmentId: 246
	},
	{
		id: 1222,
		name: 'CERRO POLICIA',
		departmentId: 246
	},
	{
		id: 1223,
		name: 'MENCUE',
		departmentId: 246
	},
	{
		id: 1224,
		name: 'AGUADA GUZMAN',
		departmentId: 246
	},
	{
		id: 1225,
		name: 'MAQUINCHAO',
		departmentId: 247
	},
	{
		id: 1226,
		name: 'PILQUINIYEU',
		departmentId: 247
	},
	{
		id: 1227,
		name: 'AREA SIN GOBIERNO',
		departmentId: 247
	},
	{
		id: 1228,
		name: 'INGENIERO JACOBACCI',
		departmentId: 247
	},
	{
		id: 1229,
		name: 'EL CAIN',
		departmentId: 247
	},
	{
		id: 1230,
		name: 'CLEMENTE ONELLI',
		departmentId: 247
	},
	{
		id: 1231,
		name: 'AGUADA DE GUERRA',
		departmentId: 247
	},
	{
		id: 1232,
		name: 'COLAN CONUE',
		departmentId: 247
	},
	{
		id: 1233,
		name: 'LOS MENUCOS',
		departmentId: 247
	},
	{
		id: 1234,
		name: 'AREA SIN GOBIERNO',
		departmentId: 248
	},
	{
		id: 1235,
		name: 'ARROYO LOS BERROS',
		departmentId: 248
	},
	{
		id: 1236,
		name: 'CHIPAUQUIL',
		departmentId: 248
	},
	{
		id: 1237,
		name: 'ARROYO VENTANA',
		departmentId: 248
	},
	{
		id: 1238,
		name: 'NAHUEL NIYEU',
		departmentId: 248
	},
	{
		id: 1239,
		name: 'VALCHETA',
		departmentId: 248
	},
	{
		id: 1240,
		name: 'AGUADA CECILIO',
		departmentId: 248
	},
	{
		id: 1241,
		name: 'SIERRA PAILEMAN',
		departmentId: 248
	},
	{
		id: 1242,
		name: 'PASO FLORES',
		departmentId: 249
	},
	{
		id: 1243,
		name: 'LAGUNA BLANCA',
		departmentId: 249
	},
	{
		id: 1244,
		name: 'PILCANIYEU',
		departmentId: 249
	},
	{
		id: 1245,
		name: 'VILLA LLANQUIN',
		departmentId: 249
	},
	{
		id: 1246,
		name: 'DINA HUAPI',
		departmentId: 249
	},
	{
		id: 1247,
		name: 'AREA SIN GOBIERNO',
		departmentId: 249
	},
	{
		id: 1248,
		name: 'COMALLO',
		departmentId: 249
	},
	{
		id: 1249,
		name: 'PILQUINIYEU DEL LIMAY',
		departmentId: 249
	},
	{
		id: 1250,
		name: 'CUBANEA',
		departmentId: 250
	},
	{
		id: 1251,
		name: 'GUARDIA MITRE',
		departmentId: 250
	},
	{
		id: 1252,
		name: 'SAN JAVIER',
		departmentId: 250
	},
	{
		id: 1253,
		name: 'AREA SIN GOBIERNO',
		departmentId: 250
	},
	{
		id: 1254,
		name: 'VIEDMA',
		departmentId: 250
	},
	{
		id: 1255,
		name: 'PICHI MAHUIDA',
		departmentId: 251
	},
	{
		id: 1256,
		name: 'AREA SIN GOBIERNO',
		departmentId: 251
	},
	{
		id: 1257,
		name: 'RIO COLORADO',
		departmentId: 251
	},
	{
		id: 1258,
		name: 'LAS GRUTAS',
		departmentId: 252
	},
	{
		id: 1259,
		name: 'SAN ANTONIO OESTE',
		departmentId: 252
	},
	{
		id: 1260,
		name: 'SIERRA GRANDE',
		departmentId: 252
	},
	{
		id: 1261,
		name: 'CONTRALMIRANTE CORDERO',
		departmentId: 253
	},
	{
		id: 1262,
		name: 'CINCO SALTOS',
		departmentId: 253
	},
	{
		id: 1263,
		name: 'INGENIERO HUERGO',
		departmentId: 253
	},
	{
		id: 1264,
		name: 'GENERAL ENRIQUE GODOY',
		departmentId: 253
	},
	{
		id: 1265,
		name: 'CIPOLLETTI',
		departmentId: 253
	},
	{
		id: 1266,
		name: 'CATRIEL',
		departmentId: 253
	},
	{
		id: 1267,
		name: 'MAINQUE',
		departmentId: 253
	},
	{
		id: 1268,
		name: 'CERVANTES',
		departmentId: 253
	},
	{
		id: 1269,
		name: 'PEÑAS BLANCAS',
		departmentId: 253
	},
	{
		id: 1270,
		name: 'GENERAL ROCA',
		departmentId: 253
	},
	{
		id: 1271,
		name: 'VILLA REGINA',
		departmentId: 253
	},
	{
		id: 1272,
		name: 'AREA SIN GOBIERNO',
		departmentId: 253
	},
	{
		id: 1273,
		name: 'GENERAL FERNANDEZ ORO',
		departmentId: 253
	},
	{
		id: 1274,
		name: 'CAMPO GRANDE',
		departmentId: 253
	},
	{
		id: 1275,
		name: 'CHICHINALES',
		departmentId: 253
	},
	{
		id: 1276,
		name: 'ALLEN',
		departmentId: 253
	},
	{
		id: 1277,
		name: 'VILLA MASCARDI',
		departmentId: 254
	},
	{
		id: 1278,
		name: 'SAN CARLOS DE BARILOCHE',
		departmentId: 254
	},
	{
		id: 1279,
		name: 'AREA SIN GOBIERNO',
		departmentId: 254
	},
	{
		id: 1280,
		name: 'EL MANSO',
		departmentId: 254
	},
	{
		id: 1281,
		name: 'EL BOLSON',
		departmentId: 254
	},
	{
		id: 1282,
		name: 'OJOS DE AGUA',
		departmentId: 255
	},
	{
		id: 1283,
		name: 'RIO CHICO',
		departmentId: 255
	},
	{
		id: 1284,
		name: 'AREA SIN GOBIERNO',
		departmentId: 255
	},
	{
		id: 1285,
		name: 'ÑORQUINCO',
		departmentId: 255
	},
	{
		id: 1286,
		name: 'MAMUEL CHOIQUE',
		departmentId: 255
	},
	{
		id: 1287,
		name: 'DARWIN',
		departmentId: 256
	},
	{
		id: 1288,
		name: 'CHELFORO',
		departmentId: 256
	},
	{
		id: 1289,
		name: 'AREA SIN GOBIERNO',
		departmentId: 256
	},
	{
		id: 1290,
		name: 'LAMARQUE',
		departmentId: 256
	},
	{
		id: 1291,
		name: 'CHIMPAY',
		departmentId: 256
	},
	{
		id: 1292,
		name: 'LUIS BELTRAN',
		departmentId: 256
	},
	{
		id: 1293,
		name: 'POMONA',
		departmentId: 256
	},
	{
		id: 1294,
		name: 'CORONEL BELISLE',
		departmentId: 256
	},
	{
		id: 1295,
		name: 'CHOELE CHOEL',
		departmentId: 256
	},
	{
		id: 1296,
		name: 'AREA SIN GOBIERNO',
		departmentId: 257
	},
	{
		id: 1297,
		name: 'GENERAL CONESA',
		departmentId: 257
	},
	{
		id: 1298,
		name: 'COMICO',
		departmentId: 258
	},
	{
		id: 1299,
		name: 'AREA SIN GOBIERNO',
		departmentId: 258
	},
	{
		id: 1300,
		name: 'RINCON TRENETA',
		departmentId: 258
	},
	{
		id: 1301,
		name: 'MINISTRO RAMOS MEXIA',
		departmentId: 258
	},
	{
		id: 1302,
		name: 'SIERRA COLORADA',
		departmentId: 258
	},
	{
		id: 1303,
		name: 'CONA NIYEU',
		departmentId: 258
	},
	{
		id: 1304,
		name: 'YAMINUE',
		departmentId: 258
	},
	{
		id: 1305,
		name: 'PRAHUANIYEU',
		departmentId: 258
	},
	{
		id: 1306,
		name: 'CHILCA JULIANA',
		departmentId: 259
	},
	{
		id: 1307,
		name: 'SABAGASTA',
		departmentId: 259
	},
	{
		id: 1308,
		name: 'VACA HUMAN',
		departmentId: 259
	},
	{
		id: 1309,
		name: 'VILLA SALAVINA',
		departmentId: 259
	},
	{
		id: 1310,
		name: 'AREA SIN GOBIERNO',
		departmentId: 259
	},
	{
		id: 1311,
		name: 'LOS TELARES',
		departmentId: 259
	},
	{
		id: 1312,
		name: 'GARZA',
		departmentId: 260
	},
	{
		id: 1313,
		name: 'AREA SIN GOBIERNO',
		departmentId: 260
	},
	{
		id: 1314,
		name: 'PINTO',
		departmentId: 261
	},
	{
		id: 1315,
		name: 'MALBRAN',
		departmentId: 261
	},
	{
		id: 1316,
		name: 'AREA SIN GOBIERNO',
		departmentId: 261
	},
	{
		id: 1317,
		name: 'CASARES',
		departmentId: 261
	},
	{
		id: 1318,
		name: 'ARGENTINA',
		departmentId: 261
	},
	{
		id: 1319,
		name: 'CAMPO GALLO',
		departmentId: 262
	},
	{
		id: 1320,
		name: 'HUACHANA',
		departmentId: 262
	},
	{
		id: 1321,
		name: 'AREA SIN GOBIERNO',
		departmentId: 262
	},
	{
		id: 1322,
		name: 'DONADEU',
		departmentId: 262
	},
	{
		id: 1323,
		name: 'SANTOS LUGARES',
		departmentId: 262
	},
	{
		id: 1324,
		name: 'SACHAYOJ',
		departmentId: 262
	},
	{
		id: 1325,
		name: 'DOÑA LUISA',
		departmentId: 263
	},
	{
		id: 1326,
		name: 'GUAMPACHA',
		departmentId: 263
	},
	{
		id: 1327,
		name: 'VILLA GUASAYAN',
		departmentId: 263
	},
	{
		id: 1328,
		name: 'SANTA CATALINA',
		departmentId: 263
	},
	{
		id: 1329,
		name: 'SAN PEDRO DE GUASAYAN',
		departmentId: 263
	},
	{
		id: 1330,
		name: 'LAVALLE',
		departmentId: 263
	},
	{
		id: 1331,
		name: 'AREA SIN GOBIERNO',
		departmentId: 263
	},
	{
		id: 1332,
		name: 'SAN RAMON - LA DARSENA',
		departmentId: 264
	},
	{
		id: 1333,
		name: 'EL AIBE',
		departmentId: 264
	},
	{
		id: 1334,
		name: 'ABRA GRANDE',
		departmentId: 264
	},
	{
		id: 1335,
		name: 'NEGRA MUERTA',
		departmentId: 264
	},
	{
		id: 1336,
		name: 'LA BANDA',
		departmentId: 264
	},
	{
		id: 1337,
		name: 'LOS QUIROGA',
		departmentId: 264
	},
	{
		id: 1338,
		name: 'LA AURORA',
		departmentId: 264
	},
	{
		id: 1339,
		name: 'CHAUPI POZO',
		departmentId: 264
	},
	{
		id: 1340,
		name: 'ANTAJE',
		departmentId: 264
	},
	{
		id: 1341,
		name: 'ARDILES',
		departmentId: 264
	},
	{
		id: 1342,
		name: 'ESTACION SIMBOLAR',
		departmentId: 264
	},
	{
		id: 1343,
		name: 'AREA SIN GOBIERNO',
		departmentId: 264
	},
	{
		id: 1344,
		name: 'CAÑADA ESCOBAR',
		departmentId: 264
	},
	{
		id: 1345,
		name: 'CLODOMIRA',
		departmentId: 264
	},
	{
		id: 1346,
		name: 'VILLA ZANJON',
		departmentId: 265
	},
	{
		id: 1347,
		name: 'SOL DE MAYO',
		departmentId: 265
	},
	{
		id: 1348,
		name: 'REMES',
		departmentId: 265
	},
	{
		id: 1349,
		name: 'SAN BENITO',
		departmentId: 265
	},
	{
		id: 1350,
		name: 'EL DEAN',
		departmentId: 265
	},
	{
		id: 1351,
		name: 'SANTA MARIA',
		departmentId: 265
	},
	{
		id: 1352,
		name: 'VUELTA DE LA BARRANCA',
		departmentId: 265
	},
	{
		id: 1353,
		name: 'SAN PEDRO',
		departmentId: 265
	},
	{
		id: 1354,
		name: 'AREA SIN GOBIERNO',
		departmentId: 265
	},
	{
		id: 1355,
		name: 'SANTIAGO DEL ESTERO',
		departmentId: 265
	},
	{
		id: 1356,
		name: 'VILLA MATOQUE',
		departmentId: 266
	},
	{
		id: 1357,
		name: 'AHI VEREMOS',
		departmentId: 266
	},
	{
		id: 1358,
		name: 'AREA SIN GOBIERNO',
		departmentId: 266
	},
	{
		id: 1359,
		name: 'PAMPA DE LOS GUANACOS',
		departmentId: 266
	},
	{
		id: 1360,
		name: 'SAN JOSE DEL BOQUERON',
		departmentId: 266
	},
	{
		id: 1361,
		name: 'EL CABURE',
		departmentId: 266
	},
	{
		id: 1362,
		name: 'MONTE QUEMADO',
		departmentId: 266
	},
	{
		id: 1363,
		name: 'LOS PIRPINTOS',
		departmentId: 266
	},
	{
		id: 1364,
		name: 'POZO DEL TOBA',
		departmentId: 267
	},
	{
		id: 1365,
		name: 'MELERO',
		departmentId: 267
	},
	{
		id: 1366,
		name: 'YUCHAN',
		departmentId: 267
	},
	{
		id: 1367,
		name: 'SAN ANTONIO - ROLDAN',
		departmentId: 267
	},
	{
		id: 1368,
		name: 'EL COLORADO',
		departmentId: 267
	},
	{
		id: 1369,
		name: 'MATARA',
		departmentId: 267
	},
	{
		id: 1370,
		name: 'EL CUADRADO',
		departmentId: 267
	},
	{
		id: 1371,
		name: 'VILELAS',
		departmentId: 267
	},
	{
		id: 1372,
		name: 'SUNCHO CORRAL',
		departmentId: 267
	},
	{
		id: 1373,
		name: 'AREA SIN GOBIERNO',
		departmentId: 267
	},
	{
		id: 1374,
		name: 'QUEBRACHO COTO',
		departmentId: 268
	},
	{
		id: 1375,
		name: 'CAMPO GRANDE',
		departmentId: 268
	},
	{
		id: 1376,
		name: 'VILLA MERCEDES',
		departmentId: 268
	},
	{
		id: 1377,
		name: 'SANTO DOMINGO',
		departmentId: 268
	},
	{
		id: 1378,
		name: 'AHI VEREMOS',
		departmentId: 268
	},
	{
		id: 1379,
		name: 'POZO BETBEDER',
		departmentId: 268
	},
	{
		id: 1380,
		name: 'RAPELLI',
		departmentId: 268
	},
	{
		id: 1381,
		name: 'AREA SIN GOBIERNO',
		departmentId: 268
	},
	{
		id: 1382,
		name: 'NUEVA ESPERANZA',
		departmentId: 268
	},
	{
		id: 1383,
		name: 'LAS DELICIAS',
		departmentId: 268
	},
	{
		id: 1384,
		name: 'EL MOJON',
		departmentId: 268
	},
	{
		id: 1385,
		name: 'VILLA ROBLES',
		departmentId: 269
	},
	{
		id: 1386,
		name: 'LOS ROMANOS - SANTO DOMINGO',
		departmentId: 269
	},
	{
		id: 1387,
		name: 'VILLA HIPOLITA',
		departmentId: 269
	},
	{
		id: 1388,
		name: 'COLONIA EL SIMBOLAR',
		departmentId: 269
	},
	{
		id: 1389,
		name: 'FORRES',
		departmentId: 269
	},
	{
		id: 1390,
		name: 'AREA SIN GOBIERNO',
		departmentId: 269
	},
	{
		id: 1391,
		name: 'VILMER',
		departmentId: 269
	},
	{
		id: 1392,
		name: 'FERNANDEZ',
		departmentId: 269
	},
	{
		id: 1393,
		name: 'BELTRAN',
		departmentId: 269
	},
	{
		id: 1394,
		name: 'JUANILLO',
		departmentId: 270
	},
	{
		id: 1395,
		name: 'HOYON',
		departmentId: 270
	},
	{
		id: 1396,
		name: 'VILLA ATAMISQUI',
		departmentId: 270
	},
	{
		id: 1397,
		name: 'MEDELLIN',
		departmentId: 270
	},
	{
		id: 1398,
		name: 'AREA SIN GOBIERNO',
		departmentId: 270
	},
	{
		id: 1399,
		name: 'ESTACION ATAMISQUI',
		departmentId: 270
	},
	{
		id: 1400,
		name: 'PUNTA POZO',
		departmentId: 271
	},
	{
		id: 1401,
		name: 'LUGONES',
		departmentId: 271
	},
	{
		id: 1402,
		name: 'AREA SIN GOBIERNO',
		departmentId: 271
	},
	{
		id: 1403,
		name: 'REAL SAYANA',
		departmentId: 271
	},
	{
		id: 1404,
		name: 'ICAÑO',
		departmentId: 271
	},
	{
		id: 1405,
		name: 'HERRERA',
		departmentId: 271
	},
	{
		id: 1406,
		name: 'COLONIA DORA',
		departmentId: 271
	},
	{
		id: 1407,
		name: 'VILLA MAILIN',
		departmentId: 271
	},
	{
		id: 1408,
		name: 'SAN VICENTE',
		departmentId: 272
	},
	{
		id: 1409,
		name: 'LA NORIA',
		departmentId: 272
	},
	{
		id: 1410,
		name: 'SAUCE SOLO',
		departmentId: 272
	},
	{
		id: 1411,
		name: 'TIO POZO',
		departmentId: 272
	},
	{
		id: 1412,
		name: 'LORETO',
		departmentId: 272
	},
	{
		id: 1413,
		name: 'AREA SIN GOBIERNO',
		departmentId: 272
	},
	{
		id: 1414,
		name: 'CASPI CORRAL',
		departmentId: 273
	},
	{
		id: 1415,
		name: 'VACA HUAÑUNA',
		departmentId: 273
	},
	{
		id: 1416,
		name: 'EL CRUCE',
		departmentId: 273
	},
	{
		id: 1417,
		name: 'VILLA FIGUEROA',
		departmentId: 273
	},
	{
		id: 1418,
		name: 'LA CAÑADA',
		departmentId: 273
	},
	{
		id: 1419,
		name: 'AREA SIN GOBIERNO',
		departmentId: 273
	},
	{
		id: 1420,
		name: 'COLONIA SAN JUAN',
		departmentId: 273
	},
	{
		id: 1421,
		name: 'LA INVERNADA',
		departmentId: 273
	},
	{
		id: 1422,
		name: 'BANDERA BAJADA',
		departmentId: 273
	},
	{
		id: 1423,
		name: 'LA NENA - LA SIMONA',
		departmentId: 274
	},
	{
		id: 1424,
		name: 'TACAÑITAS',
		departmentId: 274
	},
	{
		id: 1425,
		name: 'TOMAS YOUNG',
		departmentId: 274
	},
	{
		id: 1426,
		name: 'AÑATUYA',
		departmentId: 274
	},
	{
		id: 1427,
		name: 'LOS JURIES',
		departmentId: 274
	},
	{
		id: 1428,
		name: 'AVERIAS',
		departmentId: 274
	},
	{
		id: 1429,
		name: 'AREA SIN GOBIERNO',
		departmentId: 274
	},
	{
		id: 1430,
		name: 'TRES CRUCES',
		departmentId: 275
	},
	{
		id: 1431,
		name: 'POZO HONDO',
		departmentId: 275
	},
	{
		id: 1432,
		name: 'EL CHARCO',
		departmentId: 275
	},
	{
		id: 1433,
		name: 'AREA SIN GOBIERNO',
		departmentId: 275
	},
	{
		id: 1434,
		name: 'EL BOBADAL',
		departmentId: 275
	},
	{
		id: 1435,
		name: 'GRAMILLA',
		departmentId: 275
	},
	{
		id: 1436,
		name: 'EL ARENAL',
		departmentId: 275
	},
	{
		id: 1437,
		name: 'AMAMA',
		departmentId: 276
	},
	{
		id: 1438,
		name: 'VILLA BRANA',
		departmentId: 276
	},
	{
		id: 1439,
		name: 'LIBERTAD',
		departmentId: 276
	},
	{
		id: 1440,
		name: 'LAS TINAJAS',
		departmentId: 276
	},
	{
		id: 1441,
		name: 'TINTINA',
		departmentId: 276
	},
	{
		id: 1442,
		name: 'WEISBURD',
		departmentId: 276
	},
	{
		id: 1443,
		name: 'QUIMILI',
		departmentId: 276
	},
	{
		id: 1444,
		name: 'LILO VIEJO - PATAY',
		departmentId: 276
	},
	{
		id: 1445,
		name: 'OTUMPA',
		departmentId: 276
	},
	{
		id: 1446,
		name: 'AREA SIN GOBIERNO',
		departmentId: 276
	},
	{
		id: 1447,
		name: 'KILOMETRO 49',
		departmentId: 277
	},
	{
		id: 1448,
		name: 'AREA SIN GOBIERNO',
		departmentId: 277
	},
	{
		id: 1449,
		name: 'SOL DE JULIO',
		departmentId: 277
	},
	{
		id: 1450,
		name: 'VILLA OJO DE AGUA',
		departmentId: 277
	},
	{
		id: 1451,
		name: 'AMICHA',
		departmentId: 278
	},
	{
		id: 1452,
		name: 'LESCANO',
		departmentId: 278
	},
	{
		id: 1453,
		name: 'LOS OVEJEROS',
		departmentId: 278
	},
	{
		id: 1454,
		name: 'SOTELO',
		departmentId: 278
	},
	{
		id: 1455,
		name: 'ACOS - POZO DEL ARBOLITO',
		departmentId: 278
	},
	{
		id: 1456,
		name: 'EL SAUZAL',
		departmentId: 278
	},
	{
		id: 1457,
		name: 'COLONIA TINCO',
		departmentId: 278
	},
	{
		id: 1458,
		name: 'VILLA RIO HONDO',
		departmentId: 278
	},
	{
		id: 1459,
		name: 'POZUELOS',
		departmentId: 278
	},
	{
		id: 1460,
		name: 'TERMAS DE RIO HONDO',
		departmentId: 278
	},
	{
		id: 1461,
		name: 'CHAUCHILLAS',
		departmentId: 278
	},
	{
		id: 1462,
		name: 'AREA SIN GOBIERNO',
		departmentId: 278
	},
	{
		id: 1463,
		name: 'LOS NUÑEZ',
		departmentId: 278
	},
	{
		id: 1464,
		name: 'VINARA',
		departmentId: 278
	},
	{
		id: 1465,
		name: 'VILLA NUEVA',
		departmentId: 279
	},
	{
		id: 1466,
		name: 'ATOJ POZO',
		departmentId: 279
	},
	{
		id: 1467,
		name: 'TABOADA',
		departmentId: 279
	},
	{
		id: 1468,
		name: 'AREA SIN GOBIERNO',
		departmentId: 279
	},
	{
		id: 1469,
		name: 'ESTACION ROBLES',
		departmentId: 279
	},
	{
		id: 1470,
		name: 'BREA POZO',
		departmentId: 279
	},
	{
		id: 1471,
		name: 'SUMAMAO',
		departmentId: 280
	},
	{
		id: 1472,
		name: 'AREA SIN GOBIERNO',
		departmentId: 280
	},
	{
		id: 1473,
		name: 'VILLA SILIPICA',
		departmentId: 280
	},
	{
		id: 1474,
		name: 'NUEVA FRANCIA',
		departmentId: 280
	},
	{
		id: 1475,
		name: 'ARRAGA',
		departmentId: 280
	},
	{
		id: 1476,
		name: 'AREA SIN GOBIERNO',
		departmentId: 281
	},
	{
		id: 1477,
		name: 'LAPRIDA',
		departmentId: 281
	},
	{
		id: 1478,
		name: 'TAPSO',
		departmentId: 281
	},
	{
		id: 1479,
		name: 'CHOYA',
		departmentId: 281
	},
	{
		id: 1480,
		name: 'FRIAS',
		departmentId: 281
	},
	{
		id: 1481,
		name: 'VILLA LA PUNTA',
		departmentId: 281
	},
	{
		id: 1482,
		name: 'RAMIREZ DE VELAZCO',
		departmentId: 282
	},
	{
		id: 1483,
		name: 'SUMAMPA',
		departmentId: 282
	},
	{
		id: 1484,
		name: 'AREA SIN GOBIERNO',
		departmentId: 282
	},
	{
		id: 1485,
		name: 'AREA SIN GOBIERNO',
		departmentId: 283
	},
	{
		id: 1486,
		name: 'VILLA UNION',
		departmentId: 283
	},
	{
		id: 1487,
		name: 'BANDERA',
		departmentId: 284
	},
	{
		id: 1488,
		name: 'FORTIN INCA',
		departmentId: 284
	},
	{
		id: 1489,
		name: 'CUATRO BOCAS',
		departmentId: 284
	},
	{
		id: 1490,
		name: 'AREA SIN GOBIERNO',
		departmentId: 284
	},
	{
		id: 1491,
		name: 'GUARDIA ESCOLTA',
		departmentId: 284
	},
	{
		id: 1492,
		name: 'COLONIA ALPINA',
		departmentId: 285
	},
	{
		id: 1493,
		name: 'PALO NEGRO',
		departmentId: 285
	},
	{
		id: 1494,
		name: 'SELVA',
		departmentId: 285
	},
	{
		id: 1495,
		name: 'AREA SIN GOBIERNO',
		departmentId: 285
	},
	{
		id: 1496,
		name: 'MALARGUE',
		departmentId: 286
	},
	{
		id: 1497,
		name: 'SAN CARLOS',
		departmentId: 287
	},
	{
		id: 1498,
		name: 'SAN MARTIN',
		departmentId: 288
	},
	{
		id: 1499,
		name: 'LA PAZ',
		departmentId: 289
	},
	{
		id: 1500,
		name: 'LAVALLE',
		departmentId: 290
	},
	{
		id: 1501,
		name: 'SANTA ROSA',
		departmentId: 291
	},
	{
		id: 1502,
		name: 'GENERAL ALVEAR',
		departmentId: 292
	},
	{
		id: 1503,
		name: 'LAS HERAS',
		departmentId: 293
	},
	{
		id: 1504,
		name: 'CAPITAL',
		departmentId: 294
	},
	{
		id: 1505,
		name: 'GUAYMALLEN',
		departmentId: 295
	},
	{
		id: 1506,
		name: 'GODOY CRUZ',
		departmentId: 296
	},
	{
		id: 1507,
		name: 'MAIPU',
		departmentId: 297
	},
	{
		id: 1508,
		name: 'TUPUNGATO',
		departmentId: 298
	},
	{
		id: 1509,
		name: 'LUJAN DE CUYO',
		departmentId: 299
	},
	{
		id: 1510,
		name: 'TUNUYAN',
		departmentId: 300
	},
	{
		id: 1511,
		name: 'RIVADAVIA',
		departmentId: 301
	},
	{
		id: 1512,
		name: 'JUNIN',
		departmentId: 302
	},
	{
		id: 1513,
		name: 'SAN RAFAEL',
		departmentId: 303
	},
	{
		id: 1514,
		name: 'EL CHALTEN',
		departmentId: 304
	},
	{
		id: 1515,
		name: 'AREA SIN GOBIERNO',
		departmentId: 304
	},
	{
		id: 1516,
		name: 'EL CALAFATE',
		departmentId: 304
	},
	{
		id: 1517,
		name: 'TRES LAGOS',
		departmentId: 304
	},
	{
		id: 1518,
		name: 'CAÑADON SECO',
		departmentId: 305
	},
	{
		id: 1519,
		name: 'CALETA OLIVIA',
		departmentId: 305
	},
	{
		id: 1520,
		name: 'LAS HERAS',
		departmentId: 305
	},
	{
		id: 1521,
		name: 'PUERTO DESEADO',
		departmentId: 305
	},
	{
		id: 1522,
		name: 'AREA SIN GOBIERNO',
		departmentId: 305
	},
	{
		id: 1523,
		name: 'NUESTRA SEÑORA DE LOS DOLORES DE KOLUEL KAIKE',
		departmentId: 305
	},
	{
		id: 1524,
		name: 'JARAMILLO',
		departmentId: 305
	},
	{
		id: 1525,
		name: 'FITZ ROY',
		departmentId: 305
	},
	{
		id: 1526,
		name: 'PICO TRUNCADO',
		departmentId: 305
	},
	{
		id: 1527,
		name: 'TELLIER',
		departmentId: 305
	},
	{
		id: 1528,
		name: 'AREA SIN GOBIERNO',
		departmentId: 306
	},
	{
		id: 1529,
		name: 'PUERTO SAN JULIAN',
		departmentId: 306
	},
	{
		id: 1530,
		name: 'MINA 3',
		departmentId: 307
	},
	{
		id: 1531,
		name: 'RIO GALLEGOS',
		departmentId: 307
	},
	{
		id: 1532,
		name: 'ROSPENTEK',
		departmentId: 307
	},
	{
		id: 1533,
		name: '28 DE NOVIEMBRE',
		departmentId: 307
	},
	{
		id: 1534,
		name: 'EL TURBIO',
		departmentId: 307
	},
	{
		id: 1535,
		name: 'AREA SIN GOBIERNO',
		departmentId: 307
	},
	{
		id: 1536,
		name: 'RIO TURBIO',
		departmentId: 307
	},
	{
		id: 1537,
		name: 'JULIA DUFOUR',
		departmentId: 307
	},
	{
		id: 1538,
		name: 'LAGO POSADAS',
		departmentId: 308
	},
	{
		id: 1539,
		name: 'GOBERNADOR GREGORES',
		departmentId: 308
	},
	{
		id: 1540,
		name: 'BAJO CARACOLES',
		departmentId: 308
	},
	{
		id: 1541,
		name: 'AREA SIN GOBIERNO',
		departmentId: 308
	},
	{
		id: 1542,
		name: 'COMANDANTE LUIS PIEDRA BUENA',
		departmentId: 309
	},
	{
		id: 1543,
		name: 'AREA SIN GOBIERNO',
		departmentId: 309
	},
	{
		id: 1544,
		name: 'PUERTO SANTA CRUZ',
		departmentId: 309
	},
	{
		id: 1545,
		name: 'LOS ANTIGUOS',
		departmentId: 310
	},
	{
		id: 1546,
		name: 'AREA SIN GOBIERNO',
		departmentId: 310
	},
	{
		id: 1547,
		name: 'PERITO MORENO',
		departmentId: 310
	},
	{
		id: 1548,
		name: 'LOS CONQUISTADORES',
		departmentId: 311
	},
	{
		id: 1549,
		name: 'LA FLORIDA',
		departmentId: 311
	},
	{
		id: 1550,
		name: 'SAN ROQUE',
		departmentId: 311
	},
	{
		id: 1551,
		name: 'COLONIA TUNAS',
		departmentId: 311
	},
	{
		id: 1552,
		name: 'VILLA DEL ROSARIO',
		departmentId: 311
	},
	{
		id: 1553,
		name: 'GUALEGUAYCITO',
		departmentId: 311
	},
	{
		id: 1554,
		name: 'SANTA ANA',
		departmentId: 311
	},
	{
		id: 1555,
		name: 'AREA SIN GOBIERNO',
		departmentId: 311
	},
	{
		id: 1556,
		name: 'COLONIA SANTA MARIA Y LAS MARGARITAS',
		departmentId: 311
	},
	{
		id: 1557,
		name: 'PARAJE GUAYAQUIL',
		departmentId: 311
	},
	{
		id: 1558,
		name: 'LA FRATERNIDAD Y SANTA JUANA',
		departmentId: 311
	},
	{
		id: 1559,
		name: 'SAN PEDRO',
		departmentId: 311
	},
	{
		id: 1560,
		name: 'SAN RAMON',
		departmentId: 311
	},
	{
		id: 1561,
		name: 'SAN JAIME DE LA FRONTERA',
		departmentId: 311
	},
	{
		id: 1562,
		name: 'CHAJARI',
		departmentId: 311
	},
	{
		id: 1563,
		name: 'COLONIA ALEMANA',
		departmentId: 311
	},
	{
		id: 1564,
		name: 'FEDERACION',
		departmentId: 311
	},
	{
		id: 1565,
		name: 'GENERAL GALARZA',
		departmentId: 312
	},
	{
		id: 1566,
		name: 'ISLAS LAS LECHIGUANAS',
		departmentId: 312
	},
	{
		id: 1567,
		name: 'ALBARDON - PUNTA DEL MONTE',
		departmentId: 312
	},
	{
		id: 1568,
		name: 'GONZALEZ CALDERON',
		departmentId: 312
	},
	{
		id: 1569,
		name: 'MONTE REDONDO (O 7° DISTRITO)',
		departmentId: 312
	},
	{
		id: 1570,
		name: 'DISTRITO SEXTO COSTA DE NOGOYA',
		departmentId: 312
	},
	{
		id: 1571,
		name: 'ESTACION LAZO',
		departmentId: 312
	},
	{
		id: 1572,
		name: 'GUALEGUAY',
		departmentId: 312
	},
	{
		id: 1573,
		name: 'AREA SIN GOBIERNO',
		departmentId: 312
	},
	{
		id: 1574,
		name: 'ALDEA ASUNCION',
		departmentId: 312
	},
	{
		id: 1575,
		name: 'DISTRITO PRIMERO (PRIMER DISTRITO CUCHILLA)',
		departmentId: 312
	},
	{
		id: 1576,
		name: 'SAN RAMIREZ',
		departmentId: 313
	},
	{
		id: 1577,
		name: 'LA PROVIDENCIA',
		departmentId: 313
	},
	{
		id: 1578,
		name: 'SAUCECITO',
		departmentId: 313
	},
	{
		id: 1579,
		name: 'COLONIA OFICIAL N° 13',
		departmentId: 313
	},
	{
		id: 1580,
		name: 'LAS TOSCAS',
		departmentId: 313
	},
	{
		id: 1581,
		name: 'ALCARAZ',
		departmentId: 313
	},
	{
		id: 1582,
		name: 'PICADA BERON',
		departmentId: 313
	},
	{
		id: 1583,
		name: 'ALCARAZ NORTE',
		departmentId: 313
	},
	{
		id: 1584,
		name: 'COLONIA VIRARO',
		departmentId: 313
	},
	{
		id: 1585,
		name: 'PUERTO ALGARROBO',
		departmentId: 313
	},
	{
		id: 1586,
		name: 'COLONIA AVIGDOR',
		departmentId: 313
	},
	{
		id: 1587,
		name: 'LA PAZ',
		departmentId: 313
	},
	{
		id: 1588,
		name: 'PIEDRAS BLANCAS',
		departmentId: 313
	},
	{
		id: 1589,
		name: 'SIR LEONARD',
		departmentId: 313
	},
	{
		id: 1590,
		name: 'COLONIA CARRASCO',
		departmentId: 313
	},
	{
		id: 1591,
		name: 'ESTAQUITAS',
		departmentId: 313
	},
	{
		id: 1592,
		name: 'EL QUEBRACHO',
		departmentId: 313
	},
	{
		id: 1593,
		name: 'YESO OESTE',
		departmentId: 313
	},
	{
		id: 1594,
		name: 'ALCARAZ SUR',
		departmentId: 313
	},
	{
		id: 1595,
		name: 'SAN GUSTAVO',
		departmentId: 313
	},
	{
		id: 1596,
		name: 'OMBU',
		departmentId: 313
	},
	{
		id: 1597,
		name: 'YACARE',
		departmentId: 313
	},
	{
		id: 1598,
		name: 'COLONIA OFICIAL N° 3 Y 14',
		departmentId: 313
	},
	{
		id: 1599,
		name: 'SANTA ELENA',
		departmentId: 313
	},
	{
		id: 1600,
		name: 'AREA SIN GOBIERNO',
		departmentId: 313
	},
	{
		id: 1601,
		name: 'EL SOLAR, SAN CARLOS Y COLONIA BERTOZZI',
		departmentId: 313
	},
	{
		id: 1602,
		name: 'BOVRIL',
		departmentId: 313
	},
	{
		id: 1603,
		name: 'NUEVA VIZCAYA',
		departmentId: 314
	},
	{
		id: 1604,
		name: 'BANDERAS',
		departmentId: 314
	},
	{
		id: 1605,
		name: 'DISTRITO DIEGO LOPEZ',
		departmentId: 314
	},
	{
		id: 1606,
		name: 'SANTA LUCIA',
		departmentId: 314
	},
	{
		id: 1607,
		name: 'EL GATO - LOMA LIMPIA',
		departmentId: 314
	},
	{
		id: 1608,
		name: 'EL CIMARRON',
		departmentId: 314
	},
	{
		id: 1609,
		name: 'AREA SIN GOBIERNO',
		departmentId: 314
	},
	{
		id: 1610,
		name: 'CONSCRIPTO BERNARDI',
		departmentId: 314
	},
	{
		id: 1611,
		name: 'PASO DUARTE',
		departmentId: 314
	},
	{
		id: 1612,
		name: 'FEDERAL',
		departmentId: 314
	},
	{
		id: 1613,
		name: 'EL GRAMIYAL',
		departmentId: 314
	},
	{
		id: 1614,
		name: 'ARROYO DEL MEDIO',
		departmentId: 314
	},
	{
		id: 1615,
		name: 'SAUCE DE LUNA',
		departmentId: 314
	},
	{
		id: 1616,
		name: 'ENRIQUE CARBO',
		departmentId: 315
	},
	{
		id: 1617,
		name: 'PASTOR BRITOS',
		departmentId: 315
	},
	{
		id: 1618,
		name: 'RINCON DEL GATO',
		departmentId: 315
	},
	{
		id: 1619,
		name: 'PERDICES',
		departmentId: 315
	},
	{
		id: 1620,
		name: 'COSTA URUGUAY SUR',
		departmentId: 315
	},
	{
		id: 1621,
		name: 'ALDEA SAN JUAN',
		departmentId: 315
	},
	{
		id: 1622,
		name: 'GENERAL ALMADA',
		departmentId: 315
	},
	{
		id: 1623,
		name: 'AREA SIN GOBIERNO',
		departmentId: 315
	},
	{
		id: 1624,
		name: 'IRAZUSTA',
		departmentId: 315
	},
	{
		id: 1625,
		name: 'LAS MERCEDES',
		departmentId: 315
	},
	{
		id: 1626,
		name: 'ESTACION ESCRIÑA',
		departmentId: 315
	},
	{
		id: 1627,
		name: 'CUCHILLA REDONDA',
		departmentId: 315
	},
	{
		id: 1628,
		name: 'URDINARRAIN',
		departmentId: 315
	},
	{
		id: 1629,
		name: 'GUALEGUAYCHU',
		departmentId: 315
	},
	{
		id: 1630,
		name: 'PUEBLO GENERAL BELGRANO',
		departmentId: 315
	},
	{
		id: 1631,
		name: 'FAUSTINO M PARERA',
		departmentId: 315
	},
	{
		id: 1632,
		name: 'ALDEA SAN ANTONIO',
		departmentId: 315
	},
	{
		id: 1633,
		name: 'COSTA URUGUAY NORTE',
		departmentId: 315
	},
	{
		id: 1634,
		name: 'LARROQUE',
		departmentId: 315
	},
	{
		id: 1635,
		name: 'GILBERT',
		departmentId: 315
	},
	{
		id: 1636,
		name: 'DISTRITO TALITAS',
		departmentId: 315
	},
	{
		id: 1637,
		name: 'EL CARMEN - ESTACION RACEDO',
		departmentId: 316
	},
	{
		id: 1638,
		name: 'COSTA GRANDE',
		departmentId: 316
	},
	{
		id: 1639,
		name: 'COLONIA ENSAYO',
		departmentId: 316
	},
	{
		id: 1640,
		name: 'ALDEA VALLE MARIA',
		departmentId: 316
	},
	{
		id: 1641,
		name: 'ISLETAS',
		departmentId: 316
	},
	{
		id: 1642,
		name: 'DIAMANTE',
		departmentId: 316
	},
	{
		id: 1643,
		name: 'ALDEA SPATZENKUTTER',
		departmentId: 316
	},
	{
		id: 1644,
		name: 'AREA SIN GOBIERNO',
		departmentId: 316
	},
	{
		id: 1645,
		name: 'ALDEA SALTO',
		departmentId: 316
	},
	{
		id: 1646,
		name: 'ALDEA GRAPSCHENTAL',
		departmentId: 316
	},
	{
		id: 1647,
		name: 'ALDEA BRASILERA',
		departmentId: 316
	},
	{
		id: 1648,
		name: 'ESTACION CAMPS',
		departmentId: 316
	},
	{
		id: 1649,
		name: 'VILLA LIBERTADOR SAN MARTIN',
		departmentId: 316
	},
	{
		id: 1650,
		name: 'ALDEA PROTESTANTE',
		departmentId: 316
	},
	{
		id: 1651,
		name: 'GENERAL RAMIREZ',
		departmentId: 316
	},
	{
		id: 1652,
		name: 'GENERAL ALVEAR',
		departmentId: 316
	},
	{
		id: 1653,
		name: 'LAS CUEVAS',
		departmentId: 316
	},
	{
		id: 1654,
		name: 'LUCAS SUR PRIMERO',
		departmentId: 317
	},
	{
		id: 1655,
		name: 'COLONIA ADIVINO',
		departmentId: 317
	},
	{
		id: 1656,
		name: 'PARAJE LOS ALGARROBOS',
		departmentId: 317
	},
	{
		id: 1657,
		name: 'VILLAGUAY',
		departmentId: 317
	},
	{
		id: 1658,
		name: 'JUBILEO',
		departmentId: 317
	},
	{
		id: 1659,
		name: 'AREA SIN GOBIERNO',
		departmentId: 317
	},
	{
		id: 1660,
		name: 'LUCAS NORTE',
		departmentId: 317
	},
	{
		id: 1661,
		name: 'MOJONES NORTE',
		departmentId: 317
	},
	{
		id: 1662,
		name: 'ESTACION RAICES',
		departmentId: 317
	},
	{
		id: 1663,
		name: 'LUCAS SUR SEGUNDO',
		departmentId: 317
	},
	{
		id: 1664,
		name: 'MOJONES SUR',
		departmentId: 317
	},
	{
		id: 1665,
		name: 'INGENIERO SAJAROFF',
		departmentId: 317
	},
	{
		id: 1666,
		name: 'RAICES OESTE',
		departmentId: 317
	},
	{
		id: 1667,
		name: 'VILLA CLARA',
		departmentId: 317
	},
	{
		id: 1668,
		name: 'PASO DE LA LAGUNA',
		departmentId: 317
	},
	{
		id: 1669,
		name: 'VILLA DOMINGUEZ',
		departmentId: 317
	},
	{
		id: 1670,
		name: 'COLONIA SAN ANSELMO Y ALEDAÑAS',
		departmentId: 318
	},
	{
		id: 1671,
		name: 'SAN MIGUEL',
		departmentId: 318
	},
	{
		id: 1672,
		name: 'PUEBLO CAZES',
		departmentId: 318
	},
	{
		id: 1673,
		name: 'HOCKER',
		departmentId: 318
	},
	{
		id: 1674,
		name: 'LA CLARITA',
		departmentId: 318
	},
	{
		id: 1675,
		name: 'VILLA ELISA',
		departmentId: 318
	},
	{
		id: 1676,
		name: 'PUEBLO LIEBIG S',
		departmentId: 318
	},
	{
		id: 1677,
		name: 'ARROYO BARU',
		departmentId: 318
	},
	{
		id: 1678,
		name: 'SAN JOSE',
		departmentId: 318
	},
	{
		id: 1679,
		name: 'COLON',
		departmentId: 318
	},
	{
		id: 1680,
		name: 'UBAJAY',
		departmentId: 318
	},
	{
		id: 1681,
		name: 'HAMBIS',
		departmentId: 318
	},
	{
		id: 1682,
		name: 'AREA SIN GOBIERNO',
		departmentId: 318
	},
	{
		id: 1683,
		name: 'DISTRITO CHAÑAR',
		departmentId: 319
	},
	{
		id: 1684,
		name: 'LAS MULITAS',
		departmentId: 319
	},
	{
		id: 1685,
		name: 'SAN VICTOR',
		departmentId: 319
	},
	{
		id: 1686,
		name: 'LAGUNA BENITEZ',
		departmentId: 319
	},
	{
		id: 1687,
		name: 'SAN JOSE DE FELICIANO',
		departmentId: 319
	},
	{
		id: 1688,
		name: 'MULAS GRANDES',
		departmentId: 319
	},
	{
		id: 1689,
		name: 'LA VERBENA',
		departmentId: 319
	},
	{
		id: 1690,
		name: 'LA ESMERALDA',
		departmentId: 319
	},
	{
		id: 1691,
		name: 'LA HIERRA',
		departmentId: 319
	},
	{
		id: 1692,
		name: 'ÑANCAY',
		departmentId: 320
	},
	{
		id: 1693,
		name: 'AREA SIN GOBIERNO',
		departmentId: 320
	},
	{
		id: 1694,
		name: 'CEIBAS',
		departmentId: 320
	},
	{
		id: 1695,
		name: 'VILLA PARANACITO',
		departmentId: 320
	},
	{
		id: 1696,
		name: 'MEDANOS',
		departmentId: 320
	},
	{
		id: 1697,
		name: 'IBICUY',
		departmentId: 320
	},
	{
		id: 1698,
		name: 'CRUCESITAS OCTAVA',
		departmentId: 321
	},
	{
		id: 1699,
		name: 'CRUCESITAS TERCERA',
		departmentId: 321
	},
	{
		id: 1700,
		name: 'GOBERNADOR FEBRE',
		departmentId: 321
	},
	{
		id: 1701,
		name: 'DISTRITO CHIQUEROS',
		departmentId: 321
	},
	{
		id: 1702,
		name: 'AREA SIN GOBIERNO',
		departmentId: 321
	},
	{
		id: 1703,
		name: 'DON CRISTOBAL PRIMERO',
		departmentId: 321
	},
	{
		id: 1704,
		name: 'NOGOYA',
		departmentId: 321
	},
	{
		id: 1705,
		name: 'LUCAS GONZALEZ',
		departmentId: 321
	},
	{
		id: 1706,
		name: 'DON CRISTOBAL SEGUNDO',
		departmentId: 321
	},
	{
		id: 1707,
		name: 'XX DE SETIEMBRE',
		departmentId: 321
	},
	{
		id: 1708,
		name: 'ARANGUREN',
		departmentId: 321
	},
	{
		id: 1709,
		name: 'HERNANDEZ',
		departmentId: 321
	},
	{
		id: 1710,
		name: 'BETBEDER',
		departmentId: 321
	},
	{
		id: 1711,
		name: 'LAURENCENA',
		departmentId: 321
	},
	{
		id: 1712,
		name: 'ALDEA SAN MIGUEL',
		departmentId: 321
	},
	{
		id: 1713,
		name: 'ORO VERDE',
		departmentId: 322
	},
	{
		id: 1714,
		name: 'ARROYO CORRALITO',
		departmentId: 322
	},
	{
		id: 1715,
		name: 'ALDEA SANTA ROSA',
		departmentId: 322
	},
	{
		id: 1716,
		name: 'DISTRITO TALA',
		departmentId: 322
	},
	{
		id: 1717,
		name: 'COLONIA REFFINO',
		departmentId: 322
	},
	{
		id: 1718,
		name: 'SOSA',
		departmentId: 322
	},
	{
		id: 1719,
		name: 'PARANA',
		departmentId: 322
	},
	{
		id: 1720,
		name: 'VILLA URQUIZA',
		departmentId: 322
	},
	{
		id: 1721,
		name: 'EL PALENQUE',
		departmentId: 322
	},
	{
		id: 1722,
		name: 'HERNANDARIAS',
		departmentId: 322
	},
	{
		id: 1723,
		name: 'CERRITO',
		departmentId: 322
	},
	{
		id: 1724,
		name: 'LAS TUNAS',
		departmentId: 322
	},
	{
		id: 1725,
		name: 'TABOSSI',
		departmentId: 322
	},
	{
		id: 1726,
		name: 'COLONIA CRESPO',
		departmentId: 322
	},
	{
		id: 1727,
		name: 'PUEBLO BRUGO',
		departmentId: 322
	},
	{
		id: 1728,
		name: 'MARIA GRANDE 2°',
		departmentId: 322
	},
	{
		id: 1729,
		name: 'ALDEA EIGENFELD',
		departmentId: 322
	},
	{
		id: 1730,
		name: 'PASO DE LAS PIEDRAS',
		departmentId: 322
	},
	{
		id: 1731,
		name: 'VILLA FONTANA',
		departmentId: 322
	},
	{
		id: 1732,
		name: 'COLONIA AVELLANEDA',
		departmentId: 322
	},
	{
		id: 1733,
		name: 'SAN BENITO',
		departmentId: 322
	},
	{
		id: 1734,
		name: 'PASO DE LA ARENA',
		departmentId: 322
	},
	{
		id: 1735,
		name: 'COLONIA CELINA',
		departmentId: 322
	},
	{
		id: 1736,
		name: 'QUEBRACHO',
		departmentId: 322
	},
	{
		id: 1737,
		name: 'SEGUI',
		departmentId: 322
	},
	{
		id: 1738,
		name: 'TEZANOS PINTO',
		departmentId: 322
	},
	{
		id: 1739,
		name: 'ANTONIO TOMAS',
		departmentId: 322
	},
	{
		id: 1740,
		name: 'VIALE',
		departmentId: 322
	},
	{
		id: 1741,
		name: 'LAS GARZAS',
		departmentId: 322
	},
	{
		id: 1742,
		name: 'COLONIA MEROU',
		departmentId: 322
	},
	{
		id: 1743,
		name: 'HASENKAMP',
		departmentId: 322
	},
	{
		id: 1744,
		name: 'ESPINILLO NORTE',
		departmentId: 322
	},
	{
		id: 1745,
		name: 'ALDEA SAN ANTONIO',
		departmentId: 322
	},
	{
		id: 1746,
		name: 'SANTA LUISA',
		departmentId: 322
	},
	{
		id: 1747,
		name: 'LA PICADA',
		departmentId: 322
	},
	{
		id: 1748,
		name: 'MARIA GRANDE',
		departmentId: 322
	},
	{
		id: 1749,
		name: 'SAUCE MONTRULL',
		departmentId: 322
	},
	{
		id: 1750,
		name: 'CRESPO',
		departmentId: 322
	},
	{
		id: 1751,
		name: 'ALDEA SANTA MARIA',
		departmentId: 322
	},
	{
		id: 1752,
		name: 'ALDEA SAN RAFAEL',
		departmentId: 322
	},
	{
		id: 1753,
		name: 'ALDEA MARIA LUISA',
		departmentId: 322
	},
	{
		id: 1754,
		name: 'CURTIEMBRE',
		departmentId: 322
	},
	{
		id: 1755,
		name: 'SAUCE PINTO',
		departmentId: 322
	},
	{
		id: 1756,
		name: 'EL PINGO',
		departmentId: 322
	},
	{
		id: 1757,
		name: 'ARROYO BURGOS',
		departmentId: 322
	},
	{
		id: 1758,
		name: 'VILLA GOBERNADOR ETCHEVEHERE',
		departmentId: 322
	},
	{
		id: 1759,
		name: 'COLONIA OFICIAL N° 5',
		departmentId: 323
	},
	{
		id: 1760,
		name: 'AREA SIN GOBIERNO',
		departmentId: 323
	},
	{
		id: 1761,
		name: 'GENERAL CAMPOS',
		departmentId: 323
	},
	{
		id: 1762,
		name: 'SAN ERNESTO',
		departmentId: 323
	},
	{
		id: 1763,
		name: 'WALTER MOSS',
		departmentId: 323
	},
	{
		id: 1764,
		name: 'SAN SALVADOR',
		departmentId: 323
	},
	{
		id: 1765,
		name: 'COLONIA BAYLINA',
		departmentId: 323
	},
	{
		id: 1766,
		name: 'ARROYO GENA',
		departmentId: 324
	},
	{
		id: 1767,
		name: 'SAN CIPRIANO',
		departmentId: 324
	},
	{
		id: 1768,
		name: 'TALA',
		departmentId: 324
	},
	{
		id: 1769,
		name: 'CONCEPCION DEL URUGUAY',
		departmentId: 324
	},
	{
		id: 1770,
		name: 'ESTACION LIBAROS',
		departmentId: 324
	},
	{
		id: 1771,
		name: 'SANTA ANITA',
		departmentId: 324
	},
	{
		id: 1772,
		name: 'SAN MARCIAL',
		departmentId: 324
	},
	{
		id: 1773,
		name: 'BASAVILBASO',
		departmentId: 324
	},
	{
		id: 1774,
		name: 'SAN JUSTO',
		departmentId: 324
	},
	{
		id: 1775,
		name: 'ROCAMORA',
		departmentId: 324
	},
	{
		id: 1776,
		name: 'VILLA MANTERO',
		departmentId: 324
	},
	{
		id: 1777,
		name: 'AREA SIN GOBIERNO',
		departmentId: 324
	},
	{
		id: 1778,
		name: '1° DE MAYO',
		departmentId: 324
	},
	{
		id: 1779,
		name: 'PRONUNCIAMIENTO',
		departmentId: 324
	},
	{
		id: 1780,
		name: 'HERRERA',
		departmentId: 324
	},
	{
		id: 1781,
		name: 'LAS MOSCAS',
		departmentId: 324
	},
	{
		id: 1782,
		name: 'COLONIA ELIA',
		departmentId: 324
	},
	{
		id: 1783,
		name: 'CASEROS',
		departmentId: 324
	},
	{
		id: 1784,
		name: 'CHILCAS',
		departmentId: 325
	},
	{
		id: 1785,
		name: 'HINOJAL',
		departmentId: 325
	},
	{
		id: 1786,
		name: 'RINCON DEL DOLL',
		departmentId: 325
	},
	{
		id: 1787,
		name: 'MONTOYA',
		departmentId: 325
	},
	{
		id: 1788,
		name: 'ANTELO',
		departmentId: 325
	},
	{
		id: 1789,
		name: 'MOLINO DOLL',
		departmentId: 325
	},
	{
		id: 1790,
		name: 'LAGUNA DEL PESCADO',
		departmentId: 325
	},
	{
		id: 1791,
		name: 'RINCON DE NOGOYA',
		departmentId: 325
	},
	{
		id: 1792,
		name: 'PAJONAL',
		departmentId: 325
	},
	{
		id: 1793,
		name: 'AREA SIN GOBIERNO',
		departmentId: 325
	},
	{
		id: 1794,
		name: 'VICTORIA',
		departmentId: 325
	},
	{
		id: 1795,
		name: 'ESTACION YUQUERI',
		departmentId: 326
	},
	{
		id: 1796,
		name: 'PEDERNAL',
		departmentId: 326
	},
	{
		id: 1797,
		name: 'CONCORDIA',
		departmentId: 326
	},
	{
		id: 1798,
		name: 'EL REDOMON',
		departmentId: 326
	},
	{
		id: 1799,
		name: 'COLONIA SAN JUSTO',
		departmentId: 326
	},
	{
		id: 1800,
		name: 'NUEVA ESCOCIA',
		departmentId: 326
	},
	{
		id: 1801,
		name: 'LOS CHARRUAS',
		departmentId: 326
	},
	{
		id: 1802,
		name: 'COLONIA GENERAL ROCA',
		departmentId: 326
	},
	{
		id: 1803,
		name: 'ESTACION YERUA',
		departmentId: 326
	},
	{
		id: 1804,
		name: 'ESTANCIA GRANDE',
		departmentId: 326
	},
	{
		id: 1805,
		name: 'AREA SIN GOBIERNO',
		departmentId: 326
	},
	{
		id: 1806,
		name: 'CLODOMIRO LEDESMA',
		departmentId: 326
	},
	{
		id: 1807,
		name: 'COLONIA AYUI',
		departmentId: 326
	},
	{
		id: 1808,
		name: 'PUERTO YERUA',
		departmentId: 326
	},
	{
		id: 1809,
		name: 'LA CRIOLLA',
		departmentId: 326
	},
	{
		id: 1810,
		name: 'SAUCE SUR',
		departmentId: 327
	},
	{
		id: 1811,
		name: 'ALTAMIRANO SUR',
		departmentId: 327
	},
	{
		id: 1812,
		name: 'LAS GUACHAS',
		departmentId: 327
	},
	{
		id: 1813,
		name: 'GOBERNADOR ECHAGUE',
		departmentId: 327
	},
	{
		id: 1814,
		name: 'GOBERNADOR MANSILLA',
		departmentId: 327
	},
	{
		id: 1815,
		name: 'LA OLLITA',
		departmentId: 327
	},
	{
		id: 1816,
		name: 'MACIA',
		departmentId: 327
	},
	{
		id: 1817,
		name: 'GUARDAMONTE',
		departmentId: 327
	},
	{
		id: 1818,
		name: 'DURAZNO',
		departmentId: 327
	},
	{
		id: 1819,
		name: 'ROSARIO DEL TALA',
		departmentId: 327
	},
	{
		id: 1820,
		name: 'AREA SIN GOBIERNO',
		departmentId: 327
	},
	{
		id: 1821,
		name: 'ARROYO CLE',
		departmentId: 327
	},
	{
		id: 1822,
		name: 'GOBERNADOR SOLA',
		departmentId: 327
	},
	{
		id: 1823,
		name: 'LA CALDERA',
		departmentId: 328
	},
	{
		id: 1824,
		name: 'VAQUEROS',
		departmentId: 328
	},
	{
		id: 1825,
		name: 'SANTA VICTORIA OESTE',
		departmentId: 329
	},
	{
		id: 1826,
		name: 'NAZARENO',
		departmentId: 329
	},
	{
		id: 1827,
		name: 'LOS TOLDOS',
		departmentId: 329
	},
	{
		id: 1828,
		name: 'RIO PIEDRAS',
		departmentId: 330
	},
	{
		id: 1829,
		name: 'EL GALPON',
		departmentId: 330
	},
	{
		id: 1830,
		name: 'METAN',
		departmentId: 330
	},
	{
		id: 1831,
		name: 'EL JARDIN',
		departmentId: 331
	},
	{
		id: 1832,
		name: 'EL TALA',
		departmentId: 331
	},
	{
		id: 1833,
		name: 'LA CANDELARIA',
		departmentId: 331
	},
	{
		id: 1834,
		name: 'CAFAYATE',
		departmentId: 332
	},
	{
		id: 1835,
		name: 'AGUAS BLANCAS',
		departmentId: 333
	},
	{
		id: 1836,
		name: 'SAN RAMON DE LA NUEVA ORAN',
		departmentId: 333
	},
	{
		id: 1837,
		name: 'PICHANAL',
		departmentId: 333
	},
	{
		id: 1838,
		name: 'COLONIA SANTA ROSA',
		departmentId: 333
	},
	{
		id: 1839,
		name: 'HIPOLITO YRIGOYEN',
		departmentId: 333
	},
	{
		id: 1840,
		name: 'URUNDEL',
		departmentId: 333
	},
	{
		id: 1841,
		name: 'JOAQUIN V GONZALEZ',
		departmentId: 334
	},
	{
		id: 1842,
		name: 'GENERAL PIZARRO',
		departmentId: 334
	},
	{
		id: 1843,
		name: 'EL QUEBRACHAL',
		departmentId: 334
	},
	{
		id: 1844,
		name: 'LAS LAJITAS',
		departmentId: 334
	},
	{
		id: 1845,
		name: 'APOLINARIO SARAVIA',
		departmentId: 334
	},
	{
		id: 1846,
		name: 'GENERAL MOSCONI',
		departmentId: 335
	},
	{
		id: 1847,
		name: 'AGUARAY',
		departmentId: 335
	},
	{
		id: 1848,
		name: 'TARTAGAL',
		departmentId: 335
	},
	{
		id: 1849,
		name: 'PROFESOR SALVADOR MAZZA',
		departmentId: 335
	},
	{
		id: 1850,
		name: 'GENERAL BALLIVIAN',
		departmentId: 335
	},
	{
		id: 1851,
		name: 'EMBARCACION',
		departmentId: 335
	},
	{
		id: 1852,
		name: 'CHICOANA',
		departmentId: 336
	},
	{
		id: 1853,
		name: 'EL CARRIL',
		departmentId: 336
	},
	{
		id: 1854,
		name: 'RIVADAVIA BANDA NORTE',
		departmentId: 337
	},
	{
		id: 1855,
		name: 'RIVADAVIA BANDA SUR',
		departmentId: 337
	},
	{
		id: 1856,
		name: 'SANTA VICTORIA ESTE',
		departmentId: 337
	},
	{
		id: 1857,
		name: 'EL BORDO',
		departmentId: 338
	},
	{
		id: 1858,
		name: 'GENERAL GUEMES',
		departmentId: 338
	},
	{
		id: 1859,
		name: 'CAMPO SANTO',
		departmentId: 338
	},
	{
		id: 1860,
		name: 'LA POMA',
		departmentId: 339
	},
	{
		id: 1861,
		name: 'SAN ANTONIO DE LOS COBRES',
		departmentId: 340
	},
	{
		id: 1862,
		name: 'TOLAR GRANDE',
		departmentId: 340
	},
	{
		id: 1863,
		name: 'LA MERCED',
		departmentId: 341
	},
	{
		id: 1864,
		name: 'CERRILLOS',
		departmentId: 341
	},
	{
		id: 1865,
		name: 'SECLANTAS',
		departmentId: 342
	},
	{
		id: 1866,
		name: 'MOLINOS',
		departmentId: 342
	},
	{
		id: 1867,
		name: 'ISLA DE CAÑAS',
		departmentId: 343
	},
	{
		id: 1868,
		name: 'IRUYA',
		departmentId: 343
	},
	{
		id: 1869,
		name: 'ANIMANA',
		departmentId: 344
	},
	{
		id: 1870,
		name: 'ANGASTACO',
		departmentId: 344
	},
	{
		id: 1871,
		name: 'SAN CARLOS',
		departmentId: 344
	},
	{
		id: 1872,
		name: 'GUACHIPAS',
		departmentId: 345
	},
	{
		id: 1873,
		name: 'SALTA',
		departmentId: 346
	},
	{
		id: 1874,
		name: 'SAN LORENZO',
		departmentId: 346
	},
	{
		id: 1875,
		name: 'EL POTRERO',
		departmentId: 347
	},
	{
		id: 1876,
		name: 'ROSARIO DE LA FRONTERA',
		departmentId: 347
	},
	{
		id: 1877,
		name: 'PAYOGASTA',
		departmentId: 348
	},
	{
		id: 1878,
		name: 'CACHI',
		departmentId: 348
	},
	{
		id: 1879,
		name: 'CORONEL MOLDES',
		departmentId: 349
	},
	{
		id: 1880,
		name: 'LA VIÑA',
		departmentId: 349
	},
	{
		id: 1881,
		name: 'ROSARIO DE LERMA',
		departmentId: 350
	},
	{
		id: 1882,
		name: 'CAMPO QUIJANO',
		departmentId: 350
	},
	{
		id: 1883,
		name: 'FRAY MAMERTO ESQUIU',
		departmentId: 351
	},
	{
		id: 1884,
		name: 'VILLA VIL',
		departmentId: 352
	},
	{
		id: 1885,
		name: 'BELEN',
		departmentId: 352
	},
	{
		id: 1886,
		name: 'SAN FERNANDO',
		departmentId: 352
	},
	{
		id: 1887,
		name: 'PUERTA DE CORRAL QUEMADO',
		departmentId: 352
	},
	{
		id: 1888,
		name: 'LONDRES',
		departmentId: 352
	},
	{
		id: 1889,
		name: 'POZO DE PIEDRA',
		departmentId: 352
	},
	{
		id: 1890,
		name: 'CORRAL QUEMADO',
		departmentId: 352
	},
	{
		id: 1891,
		name: 'PUERTA DE SAN JOSE',
		departmentId: 352
	},
	{
		id: 1892,
		name: 'HUALFIN',
		departmentId: 352
	},
	{
		id: 1893,
		name: 'LAS JUNTAS',
		departmentId: 353
	},
	{
		id: 1894,
		name: 'EL RODEO',
		departmentId: 353
	},
	{
		id: 1895,
		name: 'LA PUERTA',
		departmentId: 353
	},
	{
		id: 1896,
		name: 'LOS VARELA',
		departmentId: 353
	},
	{
		id: 1897,
		name: 'SANTA MARIA',
		departmentId: 354
	},
	{
		id: 1898,
		name: 'SAN JOSE',
		departmentId: 354
	},
	{
		id: 1899,
		name: 'ICAÑO',
		departmentId: 355
	},
	{
		id: 1900,
		name: 'RECREO',
		departmentId: 355
	},
	{
		id: 1901,
		name: 'POMAN',
		departmentId: 356
	},
	{
		id: 1902,
		name: 'MUTQUIN',
		departmentId: 356
	},
	{
		id: 1903,
		name: 'SAUJIL',
		departmentId: 356
	},
	{
		id: 1904,
		name: 'EL ALTO',
		departmentId: 357
	},
	{
		id: 1905,
		name: 'TAPSO',
		departmentId: 357
	},
	{
		id: 1906,
		name: 'ACONQUIJA',
		departmentId: 358
	},
	{
		id: 1907,
		name: 'ANDALGALA',
		departmentId: 358
	},
	{
		id: 1908,
		name: 'HUILLAPIMA',
		departmentId: 359
	},
	{
		id: 1909,
		name: 'CAPAYAN',
		departmentId: 359
	},
	{
		id: 1910,
		name: 'VALLE VIEJO',
		departmentId: 360
	},
	{
		id: 1911,
		name: 'ANCASTI',
		departmentId: 361
	},
	{
		id: 1912,
		name: 'PACLIN',
		departmentId: 362
	},
	{
		id: 1913,
		name: 'SANTA ROSA',
		departmentId: 363
	},
	{
		id: 1914,
		name: 'LOS ALTOS',
		departmentId: 363
	},
	{
		id: 1915,
		name: 'TINOGASTA',
		departmentId: 364
	},
	{
		id: 1916,
		name: 'FIAMBALA',
		departmentId: 364
	},
	{
		id: 1917,
		name: 'SAN FERNANDO DEL VALLE DE CATAMARCA',
		departmentId: 365
	},
	{
		id: 1918,
		name: 'ANTOFAGASTA DE LA SIERRA',
		departmentId: 366
	},
	{
		id: 1919,
		name: 'PUELCHES',
		departmentId: 367
	},
	{
		id: 1920,
		name: 'GOBERNADOR DUVAL',
		departmentId: 367
	},
	{
		id: 1921,
		name: 'CHACHARRAMENDI',
		departmentId: 368
	},
	{
		id: 1922,
		name: 'COLONIA SANTA MARIA',
		departmentId: 368
	},
	{
		id: 1923,
		name: 'ATALIVA ROCA',
		departmentId: 368
	},
	{
		id: 1924,
		name: 'GENERAL ACHA',
		departmentId: 368
	},
	{
		id: 1925,
		name: 'UNANUE',
		departmentId: 368
	},
	{
		id: 1926,
		name: 'QUEHUE',
		departmentId: 368
	},
	{
		id: 1927,
		name: 'ALTA ITALIA',
		departmentId: 369
	},
	{
		id: 1928,
		name: 'MAISONAVE',
		departmentId: 369
	},
	{
		id: 1929,
		name: 'REALICO',
		departmentId: 369
	},
	{
		id: 1930,
		name: 'FALUCHO',
		departmentId: 369
	},
	{
		id: 1931,
		name: 'ADOLFO VAN PRAET',
		departmentId: 369
	},
	{
		id: 1932,
		name: 'INGENIERO LUIGGI',
		departmentId: 369
	},
	{
		id: 1933,
		name: 'EMBAJADOR MARTINI',
		departmentId: 369
	},
	{
		id: 1934,
		name: 'SANTA ROSA',
		departmentId: 370
	},
	{
		id: 1935,
		name: 'ANGUIL',
		departmentId: 370
	},
	{
		id: 1936,
		name: 'TOAY',
		departmentId: 371
	},
	{
		id: 1937,
		name: 'PUELEN',
		departmentId: 372
	},
	{
		id: 1938,
		name: 'CASA DE PIEDRA',
		departmentId: 372
	},
	{
		id: 1939,
		name: 'COLONIA 25 DE MAYO',
		departmentId: 372
	},
	{
		id: 1940,
		name: 'MAURICIO MAYER',
		departmentId: 373
	},
	{
		id: 1941,
		name: 'WINIFREDA',
		departmentId: 373
	},
	{
		id: 1942,
		name: 'MONTE NIEVAS',
		departmentId: 373
	},
	{
		id: 1943,
		name: 'CONHELO',
		departmentId: 373
	},
	{
		id: 1944,
		name: 'EDUARDO CASTEX',
		departmentId: 373
	},
	{
		id: 1945,
		name: 'RUCANELO',
		departmentId: 373
	},
	{
		id: 1946,
		name: 'PARERA',
		departmentId: 374
	},
	{
		id: 1947,
		name: 'QUETREQUEN',
		departmentId: 374
	},
	{
		id: 1948,
		name: 'PICHI HUINCA',
		departmentId: 374
	},
	{
		id: 1949,
		name: 'LA MARUJA',
		departmentId: 374
	},
	{
		id: 1950,
		name: 'RANCUL',
		departmentId: 374
	},
	{
		id: 1951,
		name: 'CALEUFU',
		departmentId: 374
	},
	{
		id: 1952,
		name: 'LIMAY MAHUIDA',
		departmentId: 375
	},
	{
		id: 1953,
		name: 'LA REFORMA',
		departmentId: 375
	},
	{
		id: 1954,
		name: 'MIGUEL CANE',
		departmentId: 376
	},
	{
		id: 1955,
		name: 'QUEMU QUEMU',
		departmentId: 376
	},
	{
		id: 1956,
		name: 'RELMO',
		departmentId: 376
	},
	{
		id: 1957,
		name: 'COLONIA BARON',
		departmentId: 376
	},
	{
		id: 1958,
		name: 'VILLA MIRASOL',
		departmentId: 376
	},
	{
		id: 1959,
		name: 'BERNARDO LARROUDE',
		departmentId: 377
	},
	{
		id: 1960,
		name: 'SARAH',
		departmentId: 377
	},
	{
		id: 1961,
		name: 'INTENDENTE ALVEAR',
		departmentId: 377
	},
	{
		id: 1962,
		name: 'CORONEL HILARIO LAGOS',
		departmentId: 377
	},
	{
		id: 1963,
		name: 'VERTIZ',
		departmentId: 377
	},
	{
		id: 1964,
		name: 'CEBALLOS',
		departmentId: 377
	},
	{
		id: 1965,
		name: 'BERNASCONI',
		departmentId: 378
	},
	{
		id: 1966,
		name: 'GENERAL SAN MARTIN',
		departmentId: 378
	},
	{
		id: 1967,
		name: 'ABRAMO',
		departmentId: 378
	},
	{
		id: 1968,
		name: 'JACINTO ARAUZ',
		departmentId: 378
	},
	{
		id: 1969,
		name: 'LONQUIMAY',
		departmentId: 379
	},
	{
		id: 1970,
		name: 'CATRILO',
		departmentId: 379
	},
	{
		id: 1971,
		name: 'URIBURU',
		departmentId: 379
	},
	{
		id: 1972,
		name: 'SPELUZZI',
		departmentId: 380
	},
	{
		id: 1973,
		name: 'DORILA',
		departmentId: 380
	},
	{
		id: 1974,
		name: 'GENERAL PICO',
		departmentId: 380
	},
	{
		id: 1975,
		name: 'AGUSTONI',
		departmentId: 380
	},
	{
		id: 1976,
		name: 'LUAN TORO',
		departmentId: 381
	},
	{
		id: 1977,
		name: 'CARRO QUEMADO',
		departmentId: 381
	},
	{
		id: 1978,
		name: 'VICTORICA',
		departmentId: 381
	},
	{
		id: 1979,
		name: 'LOVENTUE',
		departmentId: 381
	},
	{
		id: 1980,
		name: 'TELEN',
		departmentId: 381
	},
	{
		id: 1981,
		name: 'CUCHILLO CO',
		departmentId: 382
	},
	{
		id: 1982,
		name: 'ALPACHIRI',
		departmentId: 383
	},
	{
		id: 1983,
		name: 'GUATRACHE',
		departmentId: 383
	},
	{
		id: 1984,
		name: 'COLONIA SANTA TERESA',
		departmentId: 383
	},
	{
		id: 1985,
		name: 'GENERAL CAMPOS',
		departmentId: 383
	},
	{
		id: 1986,
		name: 'PERU',
		departmentId: 383
	},
	{
		id: 1987,
		name: 'MACACHIN',
		departmentId: 384
	},
	{
		id: 1988,
		name: 'MIGUEL RIGLOS',
		departmentId: 384
	},
	{
		id: 1989,
		name: 'TOMAS M ANCHORENA',
		departmentId: 384
	},
	{
		id: 1990,
		name: 'ROLON',
		departmentId: 384
	},
	{
		id: 1991,
		name: 'DOBLAS',
		departmentId: 384
	},
	{
		id: 1992,
		name: 'LA ADELA',
		departmentId: 385
	},
	{
		id: 1993,
		name: 'ALGARROBO DEL AGUILA',
		departmentId: 386
	},
	{
		id: 1994,
		name: 'LA HUMADA',
		departmentId: 386
	},
	{
		id: 1995,
		name: 'TRENEL',
		departmentId: 387
	},
	{
		id: 1996,
		name: 'ARATA',
		departmentId: 387
	},
	{
		id: 1997,
		name: 'METILEO',
		departmentId: 387
	},
	{
		id: 1998,
		name: 'SANTA ISABEL',
		departmentId: 388
	},
	{
		id: 1999,
		name: 'SANAGASTA',
		departmentId: 389
	},
	{
		id: 2000,
		name: 'ARAUCO',
		departmentId: 390
	},
	{
		id: 2001,
		name: 'CHAMICAL',
		departmentId: 391
	},
	{
		id: 2002,
		name: 'GENERAL OCAMPO',
		departmentId: 392
	},
	{
		id: 2003,
		name: 'SAN BLAS DE LOS SAUCES',
		departmentId: 393
	},
	{
		id: 2004,
		name: 'GENERAL BELGRANO',
		departmentId: 394
	},
	{
		id: 2005,
		name: 'ROSARIO VERA PEÑALOZA',
		departmentId: 395
	},
	{
		id: 2006,
		name: 'CHILECITO',
		departmentId: 396
	},
	{
		id: 2007,
		name: 'VINCHINA',
		departmentId: 397
	},
	{
		id: 2008,
		name: 'FAMATINA',
		departmentId: 398
	},
	{
		id: 2009,
		name: 'CAPITAL',
		departmentId: 399
	},
	{
		id: 2010,
		name: 'GENERAL LAMADRID',
		departmentId: 400
	},
	{
		id: 2011,
		name: 'CORONEL FELIPE VARELA',
		departmentId: 401
	},
	{
		id: 2012,
		name: 'GENERAL JUAN F QUIROGA',
		departmentId: 402
	},
	{
		id: 2013,
		name: 'GENERAL SAN MARTIN',
		departmentId: 403
	},
	{
		id: 2014,
		name: 'INDEPENDENCIA',
		departmentId: 404
	},
	{
		id: 2015,
		name: 'CASTRO BARROS',
		departmentId: 405
	},
	{
		id: 2016,
		name: 'GENERAL ANGEL V PEÑALOZA',
		departmentId: 406
	},
	{
		id: 2017,
		name: 'LAVALLE',
		departmentId: 407
	},
	{
		id: 2018,
		name: 'CECILIO ECHAVARRIA',
		departmentId: 407
	},
	{
		id: 2019,
		name: 'GOBERNADOR MARTINEZ',
		departmentId: 407
	},
	{
		id: 2020,
		name: 'CRUZ DE LOS MILAGROS',
		departmentId: 407
	},
	{
		id: 2021,
		name: 'YATAYTI CALLE',
		departmentId: 407
	},
	{
		id: 2022,
		name: 'SANTA LUCIA',
		departmentId: 407
	},
	{
		id: 2023,
		name: 'EL SOMBRERO',
		departmentId: 408
	},
	{
		id: 2024,
		name: 'EMPEDRADO',
		departmentId: 408
	},
	{
		id: 2025,
		name: 'SAN ISIDRO',
		departmentId: 409
	},
	{
		id: 2026,
		name: 'CAROLINA',
		departmentId: 409
	},
	{
		id: 2027,
		name: 'GOYA',
		departmentId: 409
	},
	{
		id: 2028,
		name: 'PAGO DE LOS DESEOS',
		departmentId: 410
	},
	{
		id: 2029,
		name: 'SALADAS',
		departmentId: 410
	},
	{
		id: 2030,
		name: 'SAN LORENZO',
		departmentId: 410
	},
	{
		id: 2031,
		name: '3 DE ABRIL',
		departmentId: 411
	},
	{
		id: 2032,
		name: 'BELLA VISTA',
		departmentId: 411
	},
	{
		id: 2033,
		name: 'VILLA OLIVARI',
		departmentId: 412
	},
	{
		id: 2034,
		name: 'SAN ANTONIO ISLA APIPE GRANDE',
		departmentId: 412
	},
	{
		id: 2035,
		name: 'ITUZAINGO',
		departmentId: 412
	},
	{
		id: 2036,
		name: 'COLONIA LIEBIG S',
		departmentId: 412
	},
	{
		id: 2037,
		name: 'SAN CARLOS',
		departmentId: 412
	},
	{
		id: 2038,
		name: 'COLONIA PANDO',
		departmentId: 413
	},
	{
		id: 2039,
		name: '9 DE JULIO',
		departmentId: 413
	},
	{
		id: 2040,
		name: 'PEDRO R FERNANDEZ',
		departmentId: 413
	},
	{
		id: 2041,
		name: 'SAN ROQUE',
		departmentId: 413
	},
	{
		id: 2042,
		name: 'CHAVARRIA',
		departmentId: 413
	},
	{
		id: 2043,
		name: 'CAZADORES CORRENTINOS',
		departmentId: 414
	},
	{
		id: 2044,
		name: 'PERUGORRIA',
		departmentId: 414
	},
	{
		id: 2045,
		name: 'CURUZU CUATIA',
		departmentId: 414
	},
	{
		id: 2046,
		name: 'SAN LUIS DEL PALMAR',
		departmentId: 415
	},
	{
		id: 2047,
		name: 'HERLITZKA',
		departmentId: 415
	},
	{
		id: 2048,
		name: 'ESTACION TORRENT',
		departmentId: 416
	},
	{
		id: 2049,
		name: 'ALVEAR',
		departmentId: 416
	},
	{
		id: 2050,
		name: 'SAN COSME',
		departmentId: 417
	},
	{
		id: 2051,
		name: 'SANTA ANA DE LOS GUÁCARAS',
		departmentId: 417
	},
	{
		id: 2052,
		name: 'PASO DE LA PATRIA',
		departmentId: 417
	},
	{
		id: 2053,
		name: 'CONCEPCION DEL YAGUARETE CORA',
		departmentId: 418
	},
	{
		id: 2054,
		name: 'TABAY',
		departmentId: 418
	},
	{
		id: 2055,
		name: 'COLONIA SANTA ROSA',
		departmentId: 418
	},
	{
		id: 2056,
		name: 'TATACUA',
		departmentId: 418
	},
	{
		id: 2057,
		name: 'PALMAR GRANDE',
		departmentId: 419
	},
	{
		id: 2058,
		name: 'CAA CATI',
		departmentId: 419
	},
	{
		id: 2059,
		name: 'ITA IBATE',
		departmentId: 419
	},
	{
		id: 2060,
		name: 'LOMAS DE VALLEJOS',
		departmentId: 419
	},
	{
		id: 2061,
		name: 'MOCORETA',
		departmentId: 420
	},
	{
		id: 2062,
		name: 'MONTE CASEROS',
		departmentId: 420
	},
	{
		id: 2063,
		name: 'JUAN PUJOL',
		departmentId: 420
	},
	{
		id: 2064,
		name: 'COLONIA LIBERTAD',
		departmentId: 420
	},
	{
		id: 2065,
		name: 'ITATI',
		departmentId: 421
	},
	{
		id: 2066,
		name: 'RAMADA PASO',
		departmentId: 421
	},
	{
		id: 2067,
		name: 'TAPEBICUA',
		departmentId: 422
	},
	{
		id: 2068,
		name: 'BONPLAND',
		departmentId: 422
	},
	{
		id: 2069,
		name: 'PASO DE LOS LIBRES',
		departmentId: 422
	},
	{
		id: 2070,
		name: 'PARADA PUCHETA',
		departmentId: 422
	},
	{
		id: 2071,
		name: 'ESQUINA',
		departmentId: 423
	},
	{
		id: 2072,
		name: 'PUEBLO LIBERTADOR',
		departmentId: 423
	},
	{
		id: 2073,
		name: 'COLONIA CARLOS PELLEGRINI',
		departmentId: 424
	},
	{
		id: 2074,
		name: 'YAPEYU',
		departmentId: 424
	},
	{
		id: 2075,
		name: 'GUAVIRAVI',
		departmentId: 424
	},
	{
		id: 2076,
		name: 'LA CRUZ',
		departmentId: 424
	},
	{
		id: 2077,
		name: 'GOBERNADOR VIRASORO',
		departmentId: 425
	},
	{
		id: 2078,
		name: 'SANTO TOME',
		departmentId: 425
	},
	{
		id: 2079,
		name: 'GARAVI',
		departmentId: 425
	},
	{
		id: 2080,
		name: 'GARRUCHOS',
		departmentId: 425
	},
	{
		id: 2081,
		name: 'MARIANO I LOZA',
		departmentId: 426
	},
	{
		id: 2082,
		name: 'MERCEDES',
		departmentId: 426
	},
	{
		id: 2083,
		name: 'FELIPE YOFRE',
		departmentId: 426
	},
	{
		id: 2084,
		name: 'SAN MIGUEL',
		departmentId: 427
	},
	{
		id: 2085,
		name: 'LORETO',
		departmentId: 427
	},
	{
		id: 2086,
		name: 'BERÓN DE ASTRADA',
		departmentId: 428
	},
	{
		id: 2087,
		name: 'CORRIENTES',
		departmentId: 429
	},
	{
		id: 2088,
		name: 'RIACHUELO',
		departmentId: 429
	},
	{
		id: 2089,
		name: 'MBURUCUYA',
		departmentId: 430
	},
	{
		id: 2090,
		name: 'SAUCE',
		departmentId: 431
	},
	{
		id: 2091,
		name: 'GARUHAPE',
		departmentId: 432
	},
	{
		id: 2092,
		name: 'EL ALCAZAR',
		departmentId: 432
	},
	{
		id: 2093,
		name: 'PUERTO RICO',
		departmentId: 432
	},
	{
		id: 2094,
		name: 'PUERTO LEONI',
		departmentId: 432
	},
	{
		id: 2095,
		name: 'CAPIOVI',
		departmentId: 432
	},
	{
		id: 2096,
		name: 'RUIZ DE MONTOYA',
		departmentId: 432
	},
	{
		id: 2097,
		name: 'POZO AZUL',
		departmentId: 433
	},
	{
		id: 2098,
		name: 'SAN PEDRO',
		departmentId: 433
	},
	{
		id: 2099,
		name: 'SALTO ENCANTADO',
		departmentId: 434
	},
	{
		id: 2100,
		name: 'CAMPO GRANDE',
		departmentId: 434
	},
	{
		id: 2101,
		name: 'ARISTOBULO DEL VALLE',
		departmentId: 434
	},
	{
		id: 2102,
		name: 'DOS DE MAYO',
		departmentId: 434
	},
	{
		id: 2103,
		name: 'TRES CAPONES',
		departmentId: 435
	},
	{
		id: 2104,
		name: 'SAN JOSE',
		departmentId: 435
	},
	{
		id: 2105,
		name: 'AZARA',
		departmentId: 435
	},
	{
		id: 2106,
		name: 'APOSTOLES',
		departmentId: 435
	},
	{
		id: 2107,
		name: 'GENERAL URQUIZA',
		departmentId: 436
	},
	{
		id: 2108,
		name: 'GOBERNADOR ROCA',
		departmentId: 436
	},
	{
		id: 2109,
		name: 'CORPUS',
		departmentId: 436
	},
	{
		id: 2110,
		name: 'JARDIN AMERICA',
		departmentId: 436
	},
	{
		id: 2111,
		name: 'COLONIA POLANA',
		departmentId: 436
	},
	{
		id: 2112,
		name: 'SAN IGNACIO',
		departmentId: 436
	},
	{
		id: 2113,
		name: 'SANTO PIPO',
		departmentId: 436
	},
	{
		id: 2114,
		name: 'HIPOLITO YRIGOYEN',
		departmentId: 436
	},
	{
		id: 2115,
		name: 'CAMPO VIERA',
		departmentId: 437
	},
	{
		id: 2116,
		name: 'OBERA',
		departmentId: 437
	},
	{
		id: 2117,
		name: 'CAMPO RAMON',
		departmentId: 437
	},
	{
		id: 2118,
		name: 'COLONIA ALBERDI',
		departmentId: 437
	},
	{
		id: 2119,
		name: 'GENERAL ALVEAR',
		departmentId: 437
	},
	{
		id: 2120,
		name: 'GUARANI',
		departmentId: 437
	},
	{
		id: 2121,
		name: 'SAN MARTIN',
		departmentId: 437
	},
	{
		id: 2122,
		name: 'LOS HELECHOS',
		departmentId: 437
	},
	{
		id: 2123,
		name: 'PANAMBI',
		departmentId: 437
	},
	{
		id: 2124,
		name: 'MOJON GRANDE',
		departmentId: 438
	},
	{
		id: 2125,
		name: 'SAN JAVIER',
		departmentId: 438
	},
	{
		id: 2126,
		name: 'ITACARUARE',
		departmentId: 438
	},
	{
		id: 2127,
		name: 'FLORENTINO AMEGHINO',
		departmentId: 438
	},
	{
		id: 2128,
		name: 'CERRO CORA',
		departmentId: 439
	},
	{
		id: 2129,
		name: 'PROFUNDIDAD',
		departmentId: 439
	},
	{
		id: 2130,
		name: 'BONPLAND',
		departmentId: 439
	},
	{
		id: 2131,
		name: 'MARTIRES',
		departmentId: 439
	},
	{
		id: 2132,
		name: 'LORETO',
		departmentId: 439
	},
	{
		id: 2133,
		name: 'CANDELARIA',
		departmentId: 439
	},
	{
		id: 2134,
		name: 'SANTA ANA',
		departmentId: 439
	},
	{
		id: 2135,
		name: 'CONCEPCION DE LA SIERRA',
		departmentId: 440
	},
	{
		id: 2136,
		name: 'SANTA MARIA',
		departmentId: 440
	},
	{
		id: 2137,
		name: 'COLONIA VICTORIA',
		departmentId: 441
	},
	{
		id: 2138,
		name: '9 DE JULIO',
		departmentId: 441
	},
	{
		id: 2139,
		name: 'COLONIA DELICIA',
		departmentId: 441
	},
	{
		id: 2140,
		name: 'SANTIAGO DE LINIERS',
		departmentId: 441
	},
	{
		id: 2141,
		name: 'ELDORADO',
		departmentId: 441
	},
	{
		id: 2142,
		name: 'OLEGARIO VICTOR ANDRADE',
		departmentId: 442
	},
	{
		id: 2143,
		name: 'LEANDRO N ALEM',
		departmentId: 442
	},
	{
		id: 2144,
		name: 'DOS ARROYOS',
		departmentId: 442
	},
	{
		id: 2145,
		name: 'ALMAFUERTE',
		departmentId: 442
	},
	{
		id: 2146,
		name: 'CERRO AZUL',
		departmentId: 442
	},
	{
		id: 2147,
		name: 'ARROYO DEL MEDIO',
		departmentId: 442
	},
	{
		id: 2148,
		name: 'GOBERNADOR LOPEZ',
		departmentId: 442
	},
	{
		id: 2149,
		name: 'CAA YARI',
		departmentId: 442
	},
	{
		id: 2150,
		name: 'MONTECARLO',
		departmentId: 443
	},
	{
		id: 2151,
		name: 'PUERTO PIRAY',
		departmentId: 443
	},
	{
		id: 2152,
		name: 'CARAGUATAY',
		departmentId: 443
	},
	{
		id: 2153,
		name: 'EL SOBERBIO',
		departmentId: 444
	},
	{
		id: 2154,
		name: 'SAN VICENTE',
		departmentId: 444
	},
	{
		id: 2155,
		name: 'PUERTO IGUAZU',
		departmentId: 445
	},
	{
		id: 2156,
		name: 'PUERTO LIBERTAD',
		departmentId: 445
	},
	{
		id: 2157,
		name: 'WANDA',
		departmentId: 445
	},
	{
		id: 2158,
		name: 'PUERTO ESPERANZA',
		departmentId: 445
	},
	{
		id: 2159,
		name: 'POSADAS',
		departmentId: 446
	},
	{
		id: 2160,
		name: 'GARUPA',
		departmentId: 446
	},
	{
		id: 2161,
		name: 'FACHINAL',
		departmentId: 446
	},
	{
		id: 2162,
		name: 'ALBA POSSE',
		departmentId: 447
	},
	{
		id: 2163,
		name: 'COLONIA AURORA',
		departmentId: 447
	},
	{
		id: 2164,
		name: '25 DE MAYO',
		departmentId: 447
	},
	{
		id: 2165,
		name: 'SAN ANTONIO',
		departmentId: 448
	},
	{
		id: 2166,
		name: 'ANDRESITO',
		departmentId: 448
	},
	{
		id: 2167,
		name: 'BERNARDO DE IRIGOYEN',
		departmentId: 448
	},
	{
		id: 2168,
		name: 'LOS RALOS',
		departmentId: 449
	},
	{
		id: 2169,
		name: 'LOS PEREYRA',
		departmentId: 449
	},
	{
		id: 2170,
		name: 'LA FLORIDA Y LUISIANA',
		departmentId: 449
	},
	{
		id: 2171,
		name: 'DELFIN GALLO',
		departmentId: 449
	},
	{
		id: 2172,
		name: 'SAN ANDRES',
		departmentId: 449
	},
	{
		id: 2173,
		name: 'EL BRACHO Y EL CEVILAR',
		departmentId: 449
	},
	{
		id: 2174,
		name: 'LAS CEJAS',
		departmentId: 449
	},
	{
		id: 2175,
		name: 'EL NARANJITO',
		departmentId: 449
	},
	{
		id: 2176,
		name: 'COLOMBRES',
		departmentId: 449
	},
	{
		id: 2177,
		name: 'RANCHILLOS Y SAN MIGUEL',
		departmentId: 449
	},
	{
		id: 2178,
		name: 'LOS PEREZ',
		departmentId: 449
	},
	{
		id: 2179,
		name: 'BANDA DEL RIO SALI',
		departmentId: 449
	},
	{
		id: 2180,
		name: 'LOS BULACIO Y LOS VILLAGRA',
		departmentId: 449
	},
	{
		id: 2181,
		name: 'ALDERETES',
		departmentId: 449
	},
	{
		id: 2182,
		name: 'ALPACHIRI Y EL MOLINO',
		departmentId: 450
	},
	{
		id: 2183,
		name: 'ARCADIA',
		departmentId: 450
	},
	{
		id: 2184,
		name: 'GASTONA Y BELICHA',
		departmentId: 450
	},
	{
		id: 2185,
		name: 'LA TRINIDAD',
		departmentId: 450
	},
	{
		id: 2186,
		name: 'MEDINA',
		departmentId: 450
	},
	{
		id: 2187,
		name: 'ALTO VERDE Y LOS GUCHEA',
		departmentId: 450
	},
	{
		id: 2188,
		name: 'CONCEPCION',
		departmentId: 450
	},
	{
		id: 2189,
		name: 'SIMOCA',
		departmentId: 451
	},
	{
		id: 2190,
		name: 'YERBA BUENA',
		departmentId: 451
	},
	{
		id: 2191,
		name: 'RIO CHICO Y NUEVA TRINIDAD',
		departmentId: 451
	},
	{
		id: 2192,
		name: 'ATAHONA',
		departmentId: 451
	},
	{
		id: 2193,
		name: 'MANUELA PEDRAZA',
		departmentId: 451
	},
	{
		id: 2194,
		name: 'SANTA CRUZ Y LA TUNA',
		departmentId: 451
	},
	{
		id: 2195,
		name: 'MONTEAGUDO',
		departmentId: 451
	},
	{
		id: 2196,
		name: 'CHICLIGASTA',
		departmentId: 451
	},
	{
		id: 2197,
		name: 'PAMPA MAYO',
		departmentId: 451
	},
	{
		id: 2198,
		name: 'CIUDACITA',
		departmentId: 451
	},
	{
		id: 2199,
		name: 'BUENA VISTA',
		departmentId: 451
	},
	{
		id: 2200,
		name: 'SAN PEDRO Y SAN ANTONIO',
		departmentId: 451
	},
	{
		id: 2201,
		name: 'SOLDADO MALDONADO',
		departmentId: 452
	},
	{
		id: 2202,
		name: 'ACHERAL',
		departmentId: 452
	},
	{
		id: 2203,
		name: 'LOS SOSA',
		departmentId: 452
	},
	{
		id: 2204,
		name: 'MONTEROS',
		departmentId: 452
	},
	{
		id: 2205,
		name: 'SARGENTO MOYA',
		departmentId: 452
	},
	{
		id: 2206,
		name: 'VILLA QUINTEROS',
		departmentId: 452
	},
	{
		id: 2207,
		name: 'SANTA LUCIA',
		departmentId: 452
	},
	{
		id: 2208,
		name: 'TENIENTE BERDINA',
		departmentId: 452
	},
	{
		id: 2209,
		name: 'EL CERCADO',
		departmentId: 452
	},
	{
		id: 2210,
		name: 'RIO SECO',
		departmentId: 452
	},
	{
		id: 2211,
		name: 'LEON ROUGES Y STA',
		departmentId: 452
	},
	{
		id: 2212,
		name: 'AMBERES',
		departmentId: 452
	},
	{
		id: 2213,
		name: 'CAPITAN CACERES',
		departmentId: 452
	},
	{
		id: 2214,
		name: 'TAFI DEL VALLE',
		departmentId: 453
	},
	{
		id: 2215,
		name: 'EL MOLLAR',
		departmentId: 453
	},
	{
		id: 2216,
		name: 'COLALAO DEL VALLE',
		departmentId: 453
	},
	{
		id: 2217,
		name: 'AMAICHA DEL VALLE',
		departmentId: 453
	},
	{
		id: 2218,
		name: 'SANTA ROSA DE LEALES Y LAGUNA BLAN',
		departmentId: 454
	},
	{
		id: 2219,
		name: 'AGUA DULCE Y LA SOLEDAD',
		departmentId: 454
	},
	{
		id: 2220,
		name: 'RIO COLORADO',
		departmentId: 454
	},
	{
		id: 2221,
		name: 'BELLA VISTA',
		departmentId: 454
	},
	{
		id: 2222,
		name: 'MANUEL GARCIA FERNANDEZ',
		departmentId: 454
	},
	{
		id: 2223,
		name: 'LOS GOMEZ',
		departmentId: 454
	},
	{
		id: 2224,
		name: 'EL MOJON',
		departmentId: 454
	},
	{
		id: 2225,
		name: 'ESTACION ARAOZ Y TACANAS',
		departmentId: 454
	},
	{
		id: 2226,
		name: 'ESQUINA Y MANCOPA',
		departmentId: 454
	},
	{
		id: 2227,
		name: 'LAS TALAS',
		departmentId: 454
	},
	{
		id: 2228,
		name: 'LEALES',
		departmentId: 454
	},
	{
		id: 2229,
		name: 'QUILMES Y LOS SUELDOS',
		departmentId: 454
	},
	{
		id: 2230,
		name: 'LOS PUESTOS',
		departmentId: 454
	},
	{
		id: 2231,
		name: 'SAN PABLO Y VILLA NOUGUES',
		departmentId: 455
	},
	{
		id: 2232,
		name: 'SAN FELIPE Y SANTA BARBARA',
		departmentId: 455
	},
	{
		id: 2233,
		name: 'EL MANANTIAL',
		departmentId: 455
	},
	{
		id: 2234,
		name: 'SAN ISIDRO DE LULES',
		departmentId: 455
	},
	{
		id: 2235,
		name: 'BURRUYACU',
		departmentId: 456
	},
	{
		id: 2236,
		name: 'VILLA PADRE MONTI',
		departmentId: 456
	},
	{
		id: 2237,
		name: 'PIEDRABUENA',
		departmentId: 456
	},
	{
		id: 2238,
		name: 'GARMENDIA',
		departmentId: 456
	},
	{
		id: 2239,
		name: 'EL CHAÑAR',
		departmentId: 456
	},
	{
		id: 2240,
		name: 'LA RAMADA Y LA CRUZ',
		departmentId: 456
	},
	{
		id: 2241,
		name: 'EL NARANJO Y EL SUNCHAL',
		departmentId: 456
	},
	{
		id: 2242,
		name: '7 DE ABRIL',
		departmentId: 456
	},
	{
		id: 2243,
		name: 'EL TIMBO',
		departmentId: 456
	},
	{
		id: 2244,
		name: 'BENJAMIN ARAOZ  Y EL TAJAMAR',
		departmentId: 456
	},
	{
		id: 2245,
		name: 'EL PUESTITO',
		departmentId: 456
	},
	{
		id: 2246,
		name: 'MONTE BELLO',
		departmentId: 457
	},
	{
		id: 2247,
		name: 'SANTA ANA',
		departmentId: 457
	},
	{
		id: 2248,
		name: 'EL POLEAR',
		departmentId: 457
	},
	{
		id: 2249,
		name: 'AGUILARES',
		departmentId: 457
	},
	{
		id: 2250,
		name: 'LOS SARMIENTOS Y LA TIPA',
		departmentId: 457
	},
	{
		id: 2251,
		name: 'ANCAJULI',
		departmentId: 458
	},
	{
		id: 2252,
		name: 'LOS NOGALES',
		departmentId: 458
	},
	{
		id: 2253,
		name: 'TAFI VIEJO',
		departmentId: 458
	},
	{
		id: 2254,
		name: 'LAS TALITAS',
		departmentId: 458
	},
	{
		id: 2255,
		name: 'RACO',
		departmentId: 458
	},
	{
		id: 2256,
		name: 'LA ESPERANZA',
		departmentId: 458
	},
	{
		id: 2257,
		name: 'EL CADILLAL',
		departmentId: 458
	},
	{
		id: 2258,
		name: 'YERBA BUENA',
		departmentId: 459
	},
	{
		id: 2259,
		name: 'CEVIL REDONDO',
		departmentId: 459
	},
	{
		id: 2260,
		name: 'SAN JAVIER',
		departmentId: 459
	},
	{
		id: 2261,
		name: 'LA COCHA',
		departmentId: 460
	},
	{
		id: 2262,
		name: 'AREA SIN GOBIERNO',
		departmentId: 460
	},
	{
		id: 2263,
		name: 'SAN JOSE DE LA COCHA',
		departmentId: 460
	},
	{
		id: 2264,
		name: 'HUASA PAMPA',
		departmentId: 460
	},
	{
		id: 2265,
		name: 'EL SACRIFICIO',
		departmentId: 460
	},
	{
		id: 2266,
		name: 'YANIMA',
		departmentId: 460
	},
	{
		id: 2267,
		name: 'RUMI PUNCO',
		departmentId: 460
	},
	{
		id: 2268,
		name: 'ESCABA',
		departmentId: 461
	},
	{
		id: 2269,
		name: 'JUAN BAUTISTA ALBERDI',
		departmentId: 461
	},
	{
		id: 2270,
		name: 'VILLA BELGRANO',
		departmentId: 461
	},
	{
		id: 2271,
		name: 'TRANCAS',
		departmentId: 462
	},
	{
		id: 2272,
		name: 'TAPIA',
		departmentId: 462
	},
	{
		id: 2273,
		name: 'SAN PEDRO DE COLALAO',
		departmentId: 462
	},
	{
		id: 2274,
		name: 'CHOROMORO',
		departmentId: 462
	},
	{
		id: 2275,
		name: 'LAMADRID',
		departmentId: 463
	},
	{
		id: 2276,
		name: 'TACO RALO',
		departmentId: 463
	},
	{
		id: 2277,
		name: 'GRANEROS',
		departmentId: 463
	},
	{
		id: 2278,
		name: 'SAN MIGUEL DE TUCUMAN',
		departmentId: 464
	},
	{
		id: 2279,
		name: 'FAMAILLA',
		departmentId: 465
	},
	{
		id: 2280,
		name: 'FORMOSA',
		departmentId: 466
	},
	{
		id: 2281,
		name: 'MOJON DE FIERRO',
		departmentId: 466
	},
	{
		id: 2282,
		name: 'COLONIA PASTORIL',
		departmentId: 466
	},
	{
		id: 2283,
		name: 'SAN HILARIO',
		departmentId: 466
	},
	{
		id: 2284,
		name: 'AREA SIN GOBIERNO',
		departmentId: 466
	},
	{
		id: 2285,
		name: 'VILLA DEL CARMEN',
		departmentId: 466
	},
	{
		id: 2286,
		name: 'MARIANO BOEDO',
		departmentId: 466
	},
	{
		id: 2287,
		name: 'GRAN GUARDIA',
		departmentId: 466
	},
	{
		id: 2288,
		name: 'POSTA CAMBIO ZALAZAR',
		departmentId: 467
	},
	{
		id: 2289,
		name: 'IBARRETA',
		departmentId: 467
	},
	{
		id: 2290,
		name: 'JUAN G BAZAN',
		departmentId: 467
	},
	{
		id: 2291,
		name: 'ESTANISLAO DEL CAMPO',
		departmentId: 467
	},
	{
		id: 2292,
		name: 'SAN MARTIN I',
		departmentId: 467
	},
	{
		id: 2293,
		name: 'COLONIA SARMIENTO',
		departmentId: 467
	},
	{
		id: 2294,
		name: 'EL RECREO',
		departmentId: 467
	},
	{
		id: 2295,
		name: 'VILLA GENERAL GUEMES',
		departmentId: 467
	},
	{
		id: 2296,
		name: 'LAS LOMITAS',
		departmentId: 467
	},
	{
		id: 2297,
		name: 'POZO DEL TIGRE',
		departmentId: 467
	},
	{
		id: 2298,
		name: 'SAN MARTIN DOS',
		departmentId: 467
	},
	{
		id: 2299,
		name: 'GENERAL BELGRANO',
		departmentId: 467
	},
	{
		id: 2300,
		name: 'SUBTENIENTE PERIN',
		departmentId: 467
	},
	{
		id: 2301,
		name: 'AREA SIN GOBIERNO',
		departmentId: 467
	},
	{
		id: 2302,
		name: 'FORTIN SARGENTO 1° LEYES',
		departmentId: 467
	},
	{
		id: 2303,
		name: 'BARTOLOME DE LAS CASAS',
		departmentId: 467
	},
	{
		id: 2304,
		name: 'FORTIN CABO 1°  LUGONES',
		departmentId: 467
	},
	{
		id: 2305,
		name: 'COMANDANTE FONTANA',
		departmentId: 467
	},
	{
		id: 2306,
		name: 'AREA SIN GOBIERNO',
		departmentId: 468
	},
	{
		id: 2307,
		name: 'POZO DE MAZA',
		departmentId: 468
	},
	{
		id: 2308,
		name: 'POZO DEL MORTERO',
		departmentId: 468
	},
	{
		id: 2309,
		name: 'LAGUNA YEMA',
		departmentId: 468
	},
	{
		id: 2310,
		name: 'LOS CHIRIGUANOS',
		departmentId: 468
	},
	{
		id: 2311,
		name: 'AREA SIN GOBIERNO',
		departmentId: 469
	},
	{
		id: 2312,
		name: 'RIACHO NEGRO',
		departmentId: 469
	},
	{
		id: 2313,
		name: 'SIETE PALMAS',
		departmentId: 469
	},
	{
		id: 2314,
		name: 'RIACHO HE-HE',
		departmentId: 469
	},
	{
		id: 2315,
		name: 'PALMA SOLA',
		departmentId: 469
	},
	{
		id: 2316,
		name: 'CLORINDA',
		departmentId: 469
	},
	{
		id: 2317,
		name: 'LAGUNA NAICK NECK',
		departmentId: 469
	},
	{
		id: 2318,
		name: 'LAGUNA BLANCA',
		departmentId: 469
	},
	{
		id: 2319,
		name: 'VILLA DOS TRECE',
		departmentId: 470
	},
	{
		id: 2320,
		name: 'EL COLORADO',
		departmentId: 470
	},
	{
		id: 2321,
		name: 'PALO SANTO',
		departmentId: 470
	},
	{
		id: 2322,
		name: 'AREA SIN GOBIERNO',
		departmentId: 470
	},
	{
		id: 2323,
		name: 'PIRANE',
		departmentId: 470
	},
	{
		id: 2324,
		name: 'MAYOR VICENTE E',
		departmentId: 470
	},
	{
		id: 2325,
		name: 'BUENA VISTA',
		departmentId: 471
	},
	{
		id: 2326,
		name: 'LAGUNA GALLO',
		departmentId: 471
	},
	{
		id: 2327,
		name: 'TRES LAGUNAS',
		departmentId: 471
	},
	{
		id: 2328,
		name: 'PORTON NEGRO',
		departmentId: 471
	},
	{
		id: 2329,
		name: 'MISION TACAAGLE',
		departmentId: 471
	},
	{
		id: 2330,
		name: 'AREA SIN GOBIERNO',
		departmentId: 471
	},
	{
		id: 2331,
		name: 'EL ESPINILLO',
		departmentId: 471
	},
	{
		id: 2332,
		name: 'MISION SAN FRANCISCO DE LAISHI',
		departmentId: 472
	},
	{
		id: 2333,
		name: 'AREA SIN GOBIERNO',
		departmentId: 472
	},
	{
		id: 2334,
		name: 'VILLA ESCOLAR',
		departmentId: 472
	},
	{
		id: 2335,
		name: 'BANCO PAYAGUA',
		departmentId: 472
	},
	{
		id: 2336,
		name: 'TATANE',
		departmentId: 472
	},
	{
		id: 2337,
		name: 'GENERAL LUCIO V MANSILLA',
		departmentId: 472
	},
	{
		id: 2338,
		name: 'HERRADURA',
		departmentId: 472
	},
	{
		id: 2339,
		name: 'AREA SIN GOBIERNO',
		departmentId: 473
	},
	{
		id: 2340,
		name: 'INGENIERO GUILLERMO NICASIO JUAREZ',
		departmentId: 473
	},
	{
		id: 2341,
		name: 'EL POTRILLO',
		departmentId: 474
	},
	{
		id: 2342,
		name: 'GENERAL MOSCONI',
		departmentId: 474
	},
	{
		id: 2343,
		name: 'AREA SIN GOBIERNO',
		departmentId: 474
	},
	{
		id: 2344,
		name: 'VISTA ALEGRE',
		departmentId: 475
	},
	{
		id: 2345,
		name: 'SENILLOSA',
		departmentId: 475
	},
	{
		id: 2346,
		name: 'NEUQUEN',
		departmentId: 475
	},
	{
		id: 2347,
		name: 'SAUZAL BONITO',
		departmentId: 475
	},
	{
		id: 2348,
		name: 'PLOTTIER',
		departmentId: 475
	},
	{
		id: 2349,
		name: 'CENTENARIO',
		departmentId: 475
	},
	{
		id: 2350,
		name: 'AREA SIN GOBIERNO',
		departmentId: 475
	},
	{
		id: 2351,
		name: 'CUTRAL CO',
		departmentId: 475
	},
	{
		id: 2352,
		name: 'PLAZA HUINCUL',
		departmentId: 475
	},
	{
		id: 2353,
		name: 'VILLA EL CHOCON',
		departmentId: 475
	},
	{
		id: 2354,
		name: 'PILO LIL',
		departmentId: 476
	},
	{
		id: 2355,
		name: 'AREA SIN GOBIERNO',
		departmentId: 476
	},
	{
		id: 2356,
		name: 'VILLA PUENTE PICUN LEUFU',
		departmentId: 476
	},
	{
		id: 2357,
		name: 'LAS COLORADAS',
		departmentId: 476
	},
	{
		id: 2358,
		name: 'GUAÑACOS',
		departmentId: 477
	},
	{
		id: 2359,
		name: 'VILLA DEL NAHUEVE',
		departmentId: 477
	},
	{
		id: 2360,
		name: 'HUINGANCO',
		departmentId: 477
	},
	{
		id: 2361,
		name: 'LOS MICHES',
		departmentId: 477
	},
	{
		id: 2362,
		name: 'VARVARCO - INVERNADA VIEJA',
		departmentId: 477
	},
	{
		id: 2363,
		name: 'LAS OVEJAS',
		departmentId: 477
	},
	{
		id: 2364,
		name: 'MANZANO AMARGO',
		departmentId: 477
	},
	{
		id: 2365,
		name: 'ANDACOLLO',
		departmentId: 477
	},
	{
		id: 2366,
		name: 'VILLA LAGO MELIQUINA',
		departmentId: 478
	},
	{
		id: 2367,
		name: 'AREA SIN GOBIERNO',
		departmentId: 478
	},
	{
		id: 2368,
		name: 'SAN MARTIN DE LOS ANDES',
		departmentId: 478
	},
	{
		id: 2369,
		name: 'TRICAO MALAL',
		departmentId: 479
	},
	{
		id: 2370,
		name: 'COYUCO COCHICO',
		departmentId: 479
	},
	{
		id: 2371,
		name: 'AREA SIN GOBIERNO',
		departmentId: 479
	},
	{
		id: 2372,
		name: 'CHOS MALAL',
		departmentId: 479
	},
	{
		id: 2373,
		name: 'VILLA CURI LEUVU',
		departmentId: 479
	},
	{
		id: 2374,
		name: 'LONCOPUE',
		departmentId: 480
	},
	{
		id: 2375,
		name: 'AREA SIN GOBIERNO',
		departmentId: 480
	},
	{
		id: 2376,
		name: 'CHORRIACA',
		departmentId: 480
	},
	{
		id: 2377,
		name: 'AREA SIN GOBIERNO',
		departmentId: 481
	},
	{
		id: 2378,
		name: 'PASO AGUERRE',
		departmentId: 481
	},
	{
		id: 2379,
		name: 'EL SAUCE',
		departmentId: 481
	},
	{
		id: 2380,
		name: 'PICUN LEUFU',
		departmentId: 481
	},
	{
		id: 2381,
		name: 'PIEDRA DEL AGUILA',
		departmentId: 482
	},
	{
		id: 2382,
		name: 'SANTO TOMAS',
		departmentId: 482
	},
	{
		id: 2383,
		name: 'AREA SIN GOBIERNO',
		departmentId: 482
	},
	{
		id: 2384,
		name: 'AREA SIN GOBIERNO',
		departmentId: 483
	},
	{
		id: 2385,
		name: 'AÑELO',
		departmentId: 483
	},
	{
		id: 2386,
		name: 'LOS CHIHUIDOS',
		departmentId: 483
	},
	{
		id: 2387,
		name: 'AGUADA SAN ROQUE',
		departmentId: 483
	},
	{
		id: 2388,
		name: 'SAN PATRICIO DEL CHAÑAR',
		departmentId: 483
	},
	{
		id: 2389,
		name: 'VILLA LA ANGOSTURA',
		departmentId: 484
	},
	{
		id: 2390,
		name: 'AREA SIN GOBIERNO',
		departmentId: 484
	},
	{
		id: 2391,
		name: 'VILLA TRAFUL',
		departmentId: 484
	},
	{
		id: 2392,
		name: 'BUTA RANQUIL',
		departmentId: 485
	},
	{
		id: 2393,
		name: 'BARRANCAS',
		departmentId: 485
	},
	{
		id: 2394,
		name: 'RINCON DE LOS SAUCES',
		departmentId: 485
	},
	{
		id: 2395,
		name: 'OCTAVIO PICO',
		departmentId: 485
	},
	{
		id: 2396,
		name: 'AREA SIN GOBIERNO',
		departmentId: 485
	},
	{
		id: 2397,
		name: 'AREA SIN GOBIERNO',
		departmentId: 486
	},
	{
		id: 2398,
		name: 'VILLA PEHUENIA',
		departmentId: 486
	},
	{
		id: 2399,
		name: 'ALUMINE',
		departmentId: 486
	},
	{
		id: 2400,
		name: 'TAQUIMILAN',
		departmentId: 487
	},
	{
		id: 2401,
		name: 'AREA SIN GOBIERNO',
		departmentId: 487
	},
	{
		id: 2402,
		name: 'CAVIAHUE - COPAHUE',
		departmentId: 487
	},
	{
		id: 2403,
		name: 'EL CHOLAR',
		departmentId: 487
	},
	{
		id: 2404,
		name: 'EL HUECU',
		departmentId: 487
	},
	{
		id: 2405,
		name: 'BAJADA DEL AGRIO',
		departmentId: 488
	},
	{
		id: 2406,
		name: 'QUILI MALAL',
		departmentId: 488
	},
	{
		id: 2407,
		name: 'AREA SIN GOBIERNO',
		departmentId: 488
	},
	{
		id: 2408,
		name: 'LAS LAJAS',
		departmentId: 488
	},
	{
		id: 2409,
		name: 'RAMON M CASTRO',
		departmentId: 489
	},
	{
		id: 2410,
		name: 'MARIANO MORENO',
		departmentId: 489
	},
	{
		id: 2411,
		name: 'LOS CATUTOS',
		departmentId: 489
	},
	{
		id: 2412,
		name: 'ZAPALA',
		departmentId: 489
	},
	{
		id: 2413,
		name: 'COVUNCO ABAJO',
		departmentId: 489
	},
	{
		id: 2414,
		name: 'AREA SIN GOBIERNO',
		departmentId: 489
	},
	{
		id: 2415,
		name: 'AREA SIN GOBIERNO',
		departmentId: 490
	},
	{
		id: 2416,
		name: 'JUNIN DE LOS ANDES',
		departmentId: 490
	},
	{
		id: 2417,
		name: 'USHUAIA',
		departmentId: 491
	},
	{
		id: 2418,
		name: 'AREA SIN GOBIERNO',
		departmentId: 491
	},
	{
		id: 2419,
		name: 'AREA SIN GOBIERNO',
		departmentId: 492
	},
	{
		id: 2420,
		name: 'AREA SIN GOBIERNO',
		departmentId: 493
	},
	{
		id: 2421,
		name: 'RIO GRANDE',
		departmentId: 493
	},
	{
		id: 2422,
		name: 'AREA SIN GOBIERNO',
		departmentId: 494
	},
	{
		id: 2423,
		name: 'TOLHUIN',
		departmentId: 495
	},
	{
		id: 2424,
		name: 'ZONDA',
		departmentId: 496
	},
	{
		id: 2425,
		name: 'JACHAL',
		departmentId: 497
	},
	{
		id: 2426,
		name: 'POCITO',
		departmentId: 498
	},
	{
		id: 2427,
		name: 'CAUCETE',
		departmentId: 499
	},
	{
		id: 2428,
		name: 'CALINGASTA',
		departmentId: 500
	},
	{
		id: 2429,
		name: 'ULLUM',
		departmentId: 501
	},
	{
		id: 2430,
		name: 'SAN JUAN',
		departmentId: 502
	},
	{
		id: 2431,
		name: '9 DE JULIO',
		departmentId: 503
	},
	{
		id: 2432,
		name: 'IGLESIA',
		departmentId: 504
	},
	{
		id: 2433,
		name: '25 DE MAYO',
		departmentId: 505
	},
	{
		id: 2434,
		name: 'ANGACO',
		departmentId: 506
	},
	{
		id: 2435,
		name: 'VALLE FERTIL',
		departmentId: 507
	},
	{
		id: 2436,
		name: 'SARMIENTO',
		departmentId: 508
	},
	{
		id: 2437,
		name: 'RIVADAVIA',
		departmentId: 509
	},
	{
		id: 2438,
		name: 'SANTA LUCIA',
		departmentId: 510
	},
	{
		id: 2439,
		name: 'ALBARDON',
		departmentId: 511
	},
	{
		id: 2440,
		name: 'CHIMBAS',
		departmentId: 512
	},
	{
		id: 2441,
		name: 'RAWSON',
		departmentId: 513
	},
	{
		id: 2442,
		name: 'SAN MARTIN',
		departmentId: 514
	},
	{
		id: 2443,
		name: 'COMUNA 9',
		departmentId: 515
	},
	{
		id: 2444,
		name: 'COMUNA 6',
		departmentId: 516
	},
	{
		id: 2445,
		name: 'COMUNA 3',
		departmentId: 517
	},
	{
		id: 2446,
		name: 'COMUNA 7',
		departmentId: 518
	},
	{
		id: 2447,
		name: 'COMUNA 12',
		departmentId: 519
	},
	{
		id: 2448,
		name: 'COMUNA 11',
		departmentId: 520
	},
	{
		id: 2449,
		name: 'COMUNA 14',
		departmentId: 521
	},
	{
		id: 2450,
		name: 'COMUNA 10',
		departmentId: 522
	},
	{
		id: 2451,
		name: 'COMUNA 13',
		departmentId: 523
	},
	{
		id: 2452,
		name: 'COMUNA 2',
		departmentId: 524
	},
	{
		id: 2453,
		name: 'COMUNA 5',
		departmentId: 525
	},
	{
		id: 2454,
		name: 'COMUNA 15',
		departmentId: 526
	},
	{
		id: 2455,
		name: 'COMUNA 1',
		departmentId: 527
	},
	{
		id: 2456,
		name: 'COMUNA 8',
		departmentId: 528
	},
	{
		id: 2457,
		name: 'COMUNA 4',
		departmentId: 529
	}
]

export default municipalities