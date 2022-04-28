const localities = [
	{
		id: 1,
		name: 'LA ESCONDIDA',
		uta2020: '220560140010000',
		uta2010: '220560140010000',
		latitude: -27.107324847,
		longitude: -59.44753251,
		municipalityId: 1
	},
	{
		id: 2,
		name: 'KILOMETRO 548',
		uta2020: '220560140000017',
		uta2010: '220560140000017',
		latitude: -27.09668174,
		longitude: -59.421151046,
		municipalityId: 1
	},
	{
		id: 3,
		name: 'COLONIA EL CACIQUE LLORON',
		uta2020: '220560140000004',
		uta2010: '220560140000004',
		latitude: -27.048592084,
		longitude: -59.437435934,
		municipalityId: 1
	},
	{
		id: 4,
		name: 'LEGUA 41',
		uta2020: '220560140000019',
		uta2010: '220560140000019',
		latitude: -27.08111444,
		longitude: -59.385775809,
		municipalityId: 1
	},
	{
		id: 5,
		name: 'LAS CHACRAS',
		uta2020: '140490378000078',
		uta2010: '140490378000078',
		latitude: -30.285767867,
		longitude: -64.378978077,
		municipalityId: 71
	},
	{
		id: 6,
		name: 'LOS CADILLOS',
		uta2020: '140490378000092',
		uta2010: '140490378000092',
		latitude: -30.101866886,
		longitude: -64.451999841,
		municipalityId: 71
	},
	{
		id: 7,
		name: 'VILLA QUILINO',
		uta2020: '140490378130000',
		uta2010: '140490378130000',
		latitude: -30.210115748,
		longitude: -64.477567416,
		municipalityId: 71
	},
	{
		id: 8,
		name: 'QUILINO',
		uta2020: '140490378100000',
		uta2010: '140490378100000',
		latitude: -30.215955221,
		longitude: -64.502977704,
		municipalityId: 71
	},
	{
		id: 9,
		name: 'CARRENLEUFU',
		uta2020: '260568056020000',
		uta2010: '260568056020000',
		latitude: -43.585688544,
		longitude: -71.700902024,
		municipalityId: 523
	},
	{
		id: 10,
		name: 'LAGO BLANCO',
		uta2020: '260848112060000',
		uta2010: '260848112060000',
		latitude: -45.946859419,
		longitude: -71.264110664,
		municipalityId: 529
	},
	{
		id: 11,
		name: 'VILLA SANTOS TESEI',
		uta2020: '064080408010002',
		uta2010: '064080408010002',
		latitude: -34.612394445,
		longitude: -58.653810369,
		municipalityId: 583
	},
	{
		id: 12,
		name: 'HURLINGHAM',
		uta2020: '064080408010001',
		uta2010: '064080408010001',
		latitude: -34.593093136,
		longitude: -58.635720951,
		municipalityId: 583
	},
	{
		id: 13,
		name: 'WILLIAM C. MORRIS',
		uta2020: '064080408010003',
		uta2010: '064080408010003',
		latitude: -34.581562283,
		longitude: -58.658300537,
		municipalityId: 583
	},
	{
		id: 14,
		name: 'ORATORIO MORANTE',
		uta2020: '820282455000018',
		uta2010: '820282455000018',
		latitude: -33.433502197,
		longitude: -60.402519226,
		municipalityId: 718
	},
	{
		id: 15,
		name: 'GODOY',
		uta2020: '820282455100000',
		uta2010: '820282455100000',
		latitude: -33.369709873,
		longitude: -60.509413022,
		municipalityId: 718
	},
	{
		id: 16,
		name: 'CAMPO LA VICTORIA',
		uta2020: '820282455000004',
		uta2010: '820282455000004',
		latitude: -33.406167903,
		longitude: -60.477660698,
		municipalityId: 718
	},
	{
		id: 17,
		name: 'VILLA MERCEDES',
		uta2020: '740350077070002',
		uta2010: '740350077070002',
		latitude: -33.677369777,
		longitude: -65.473143366,
		municipalityId: 1081
	},
	{
		id: 18,
		name: 'LA RIVERA',
		uta2020: '740350077000076',
		uta2010: '740350077000076',
		latitude: -33.694173663,
		longitude: -65.503894189,
		municipalityId: 1081
	},
	{
		id: 19,
		name: 'DIQUE VULPIANI',
		uta2020: '740350077000024',
		uta2010: '740350077000024',
		latitude: -33.661546991,
		longitude: -65.535726893,
		municipalityId: 1081
	},
	{
		id: 20,
		name: 'LA RIBERA',
		uta2020: '740350077070001',
		uta2010: '740350077070001',
		latitude: -33.691812234,
		longitude: -65.50073106,
		municipalityId: 1081
	},
	{
		id: 21,
		name: 'SAN FRANCISCO DE ALFARCITO',
		uta2020: '380076007080000',
		uta2010: '380076007080000',
		latitude: -23.275302523,
		longitude: -65.946380462,
		municipalityId: 1159
	},
	{
		id: 22,
		name: 'SANTA ANA DE LA PUNA',
		uta2020: '380076007085000',
		uta2010: '380076007085000',
		latitude: -23.1466006,
		longitude: -66.032103332,
		municipalityId: 1159
	},
	{
		id: 23,
		name: 'TUSAQUILLAS',
		uta2020: '380076007100000',
		uta2010: '380076007100000',
		latitude: -23.170945539,
		longitude: -65.973242795,
		municipalityId: 1159
	},
	{
		id: 24,
		name: 'SANTA ANA',
		uta2020: '380076007000119',
		uta2010: '380076007000119',
		latitude: -23.147424698,
		longitude: -66.031219482,
		municipalityId: 1159
	},
	{
		id: 25,
		name: 'TRANCAS',
		uta2020: '380076007000136',
		uta2010: '380076007000136',
		latitude: -23.048007965,
		longitude: -66.13256073,
		municipalityId: 1159
	},
	{
		id: 26,
		name: 'RINCONADILLAS',
		uta2020: '380076007070000',
		uta2010: '380076007070000',
		latitude: -23.288664351,
		longitude: -65.941233536,
		municipalityId: 1159
	},
	{
		id: 27,
		name: 'SALADO',
		uta2020: '380076007000116',
		uta2010: '380076007000116',
		latitude: -23.048610687,
		longitude: -66.092857361,
		municipalityId: 1159
	},
	{
		id: 28,
		name: 'ABDON CASTRO TOLAY',
		uta2020: '380076007010000',
		uta2010: '380076007010000',
		latitude: -23.338641103,
		longitude: -66.090143228,
		municipalityId: 1159
	},
	{
		id: 29,
		name: 'SANTUARIO DE TRES POZOS',
		uta2020: '380076007090000',
		uta2010: '380076007090000',
		latitude: -23.515506956,
		longitude: -65.947612869,
		municipalityId: 1159
	},
	{
		id: 30,
		name: 'TOLARITO',
		uta2020: '380076007000132',
		uta2010: '380076007000132',
		latitude: -23.29167366,
		longitude: -66.081336975,
		municipalityId: 1159
	},
	{
		id: 31,
		name: '28 DE JULIO',
		uta2020: '260425014040000',
		uta2010: '260425014040000',
		latitude: -43.38097713,
		longitude: -65.838687743,
		municipalityId: 537
	},
	{
		id: 32,
		name: 'NAUPA HUEN',
		uta2020: '620355098060000',
		uta2010: '620355098060000',
		latitude: -39.828284593,
		longitude: -69.508972688,
		municipalityId: 1219
	},
	{
		id: 33,
		name: 'CHILCA JULIANA',
		uta2020: '861686259010000',
		uta2010: '861686259010000',
		latitude: -28.807483356,
		longitude: -63.486777342,
		municipalityId: 1306
	},
	{
		id: 34,
		name: 'EL MANZANO',
		uta2020: '500770077000049',
		uta2010: '500770077000049',
		latitude: -36.107008,
		longitude: -69.761199,
		municipalityId: 1496
	},
	{
		id: 35,
		name: 'LAS CHACRAS',
		uta2020: '500770077000092',
		uta2010: '500770077000092',
		latitude: -36.188674927,
		longitude: -69.664405823,
		municipalityId: 1496
	},
	{
		id: 36,
		name: 'MALARGUE',
		uta2020: '500770077040000',
		uta2010: '500770077040000',
		latitude: -35.477010712,
		longitude: -69.588649187,
		municipalityId: 1496
	},
	{
		id: 37,
		name: 'LA JUNTA',
		uta2020: '500770077000079',
		uta2010: '500770077000079',
		latitude: -35.267583702,
		longitude: -69.500300167,
		municipalityId: 1496
	},
	{
		id: 38,
		name: 'LUANCO',
		uta2020: '500770077000112',
		uta2010: '500770077000112',
		latitude: -37.185493469,
		longitude: -68.392372131,
		municipalityId: 1496
	},
	{
		id: 39,
		name: 'LAS LEÑAS',
		uta2020: '500770077030000',
		uta2010: '500770077030000',
		latitude: -35.153965078,
		longitude: -70.081791099,
		municipalityId: 1496
	},
	{
		id: 40,
		name: 'EL CHACAY',
		uta2020: '500770077000044',
		uta2010: '500770077000044',
		latitude: -35.357404049,
		longitude: -69.582385228,
		municipalityId: 1496
	},
	{
		id: 41,
		name: 'AGUA ESCONDIDA',
		uta2020: '500770077010000',
		uta2010: '500770077010000',
		latitude: -36.153239036,
		longitude: -68.304842854,
		municipalityId: 1496
	},
	{
		id: 42,
		name: 'MINACAR',
		uta2020: '500770077000124',
		uta2010: '500770077000124',
		latitude: -35.869655609,
		longitude: -70.069244385,
		municipalityId: 1496
	},
	{
		id: 43,
		name: 'EL INFIERNILLO',
		uta2020: '500770077000048',
		uta2010: '500770077000048',
		latitude: -36.757041931,
		longitude: -69.184188843,
		municipalityId: 1496
	},
	{
		id: 44,
		name: 'LOS CARRIZALES',
		uta2020: '500770077000106',
		uta2010: '500770077000106',
		latitude: -36.700206757,
		longitude: -68.372016907,
		municipalityId: 1496
	},
	{
		id: 45,
		name: 'EL VATRO',
		uta2020: '500770077000054',
		uta2010: '500770077000054',
		latitude: -36.702293396,
		longitude: -69.942199707,
		municipalityId: 1496
	},
	{
		id: 46,
		name: 'RINCON CHICO',
		uta2020: '500770077000141',
		uta2010: '500770077000141',
		latitude: -37.137336731,
		longitude: -69.583343506,
		municipalityId: 1496
	},
	{
		id: 47,
		name: 'LA SALINILLA',
		uta2020: '500770077000084',
		uta2010: '500770077000084',
		latitude: -36.280342102,
		longitude: -68.570884705,
		municipalityId: 1496
	},
	{
		id: 48,
		name: 'EL ALAMBRADO',
		uta2020: '500770077000038',
		uta2010: '500770077000038',
		latitude: -36.26989321,
		longitude: -69.85749485,
		municipalityId: 1496
	},
	{
		id: 49,
		name: 'CALMUCO',
		uta2020: '500770077000027',
		uta2010: '500770077000027',
		latitude: -36.479148865,
		longitude: -69.826599121,
		municipalityId: 1496
	},
	{
		id: 50,
		name: 'LLANO BLANCO',
		uta2020: '500770077000097',
		uta2010: '500770077000097',
		latitude: -35.916114807,
		longitude: -69.768753052,
		municipalityId: 1496
	},
	{
		id: 51,
		name: 'PATA MORA',
		uta2020: '500770077000129',
		uta2010: '500770077000129',
		latitude: -37.201000214,
		longitude: -69.107246399,
		municipalityId: 1496
	},
	{
		id: 52,
		name: 'RIO GRANDE',
		uta2020: '500770077000149',
		uta2010: '500770077000149',
		latitude: -35.870882529,
		longitude: -69.806678072,
		municipalityId: 1496
	},
	{
		id: 53,
		name: 'LOS CORRALES',
		uta2020: '500770077000108',
		uta2010: '500770077000108',
		latitude: -36.149475098,
		longitude: -68.346611023,
		municipalityId: 1496
	},
	{
		id: 54,
		name: 'EL CARAPACHO',
		uta2020: '500770077000042',
		uta2010: '500770077000042',
		latitude: -35.813093855,
		longitude: -69.190692234,
		municipalityId: 1496
	},
	{
		id: 55,
		name: 'LA VALENCIANA',
		uta2020: '500770077000086',
		uta2010: '500770077000086',
		latitude: -35.546673212,
		longitude: -69.901221615,
		municipalityId: 1496
	},
	{
		id: 56,
		name: 'LOS MOLLES',
		uta2020: '500770077000109',
		uta2010: '500770077000109',
		latitude: -35.1541609,
		longitude: -69.95182839,
		municipalityId: 1496
	},
	{
		id: 57,
		name: 'MOGOTES ASPEROS',
		uta2020: '140702371000035',
		uta2010: '140702371000035',
		latitude: -31.18595404,
		longitude: -65.247435865,
		municipalityId: 81
	},
	{
		id: 58,
		name: 'OJO DE AGUA',
		uta2020: '140702371000037',
		uta2010: '140702371000037',
		latitude: -31.191163672,
		longitude: -65.363438827,
		municipalityId: 81
	},
	{
		id: 59,
		name: 'ESTANCIA DE GUADALUPE',
		uta2020: '140702371030000',
		uta2010: '140702371030000',
		latitude: -31.124210161,
		longitude: -65.226900206,
		municipalityId: 81
	},
	{
		id: 60,
		name: 'SAN FELIPE',
		uta2020: '140702371000052',
		uta2010: '140702371000052',
		latitude: -31.215607141,
		longitude: -65.355274494,
		municipalityId: 81
	},
	{
		id: 61,
		name: 'TRES LOMAS',
		uta2020: '140702371000060',
		uta2010: '140702371000060',
		latitude: -31.147468567,
		longitude: -65.182685852,
		municipalityId: 81
	},
	{
		id: 62,
		name: 'LA ARGENTINA',
		uta2020: '140702371000020',
		uta2010: '140702371000020',
		latitude: -31.222911549,
		longitude: -65.302735852,
		municipalityId: 81
	},
	{
		id: 63,
		name: 'CORREA',
		uta2020: '820562903070000',
		uta2010: '820562903070000',
		latitude: -32.84946108,
		longitude: -61.254556908,
		municipalityId: 737
	},
	{
		id: 64,
		name: 'BERRETTA',
		uta2020: '820562903000001',
		uta2010: '820562903000001',
		latitude: -32.929034308,
		longitude: -61.265623766,
		municipalityId: 737
	},
	{
		id: 65,
		name: 'ESTACION BERRETA',
		uta2020: '820562903000023',
		uta2010: '820562903000023',
		latitude: -32.9365041,
		longitude: -61.2560121,
		municipalityId: 737
	},
	{
		id: 66,
		name: 'EL CHALTEN',
		uta2020: '780285028020000',
		uta2010: '780285028020000',
		latitude: -49.331973118,
		longitude: -72.891626709,
		municipalityId: 1514
	},
	{
		id: 67,
		name: 'EL ARBOLITO',
		uta2020: '061750175020000',
		uta2010: '061750175020000',
		latitude: -33.914783802,
		longitude: -60.943808185,
		municipalityId: 584
	},
	{
		id: 68,
		name: 'LOS BARRILES',
		uta2020: '061750175000009',
		uta2010: '061750175000009',
		latitude: -33.9462889,
		longitude: -61.2276668,
		municipalityId: 584
	},
	{
		id: 69,
		name: 'COLONIA LA PERLA',
		uta2020: '061750175000004',
		uta2010: '061750175000004',
		latitude: -33.970424262,
		longitude: -61.076205346,
		municipalityId: 584
	},
	{
		id: 70,
		name: 'SARASA',
		uta2020: '061750175040000',
		uta2010: '061750175040000',
		latitude: -34.052335309,
		longitude: -61.201904091,
		municipalityId: 584
	},
	{
		id: 71,
		name: 'PEARSON',
		uta2020: '061750175030000',
		uta2010: '061750175030000',
		latitude: -33.651896303,
		longitude: -60.892223988,
		municipalityId: 584
	},
	{
		id: 72,
		name: 'COLON',
		uta2020: '061750175010000',
		uta2010: '061750175010000',
		latitude: -33.897863361,
		longitude: -61.099560506,
		municipalityId: 584
	},
	{
		id: 73,
		name: 'KILOMETRO 404',
		uta2020: '060840084000007',
		uta2010: '060840084000007',
		latitude: -37.6438,
		longitude: -59.8529,
		municipalityId: 585
	},
	{
		id: 74,
		name: 'VILLA CACIQUE',
		uta2020: '060840084050000',
		uta2010: '060840084050000',
		latitude: -37.670477889,
		longitude: -59.400353339,
		municipalityId: 585
	},
	{
		id: 75,
		name: 'EL SAUCE',
		uta2020: '060840084000005',
		uta2010: '060840084000005',
		latitude: -37.660797119,
		longitude: -59.566123966,
		municipalityId: 585
	},
	{
		id: 76,
		name: 'BARKER',
		uta2020: '060840084010000',
		uta2010: '060840084010000',
		latitude: -37.64241113,
		longitude: -59.388938031,
		municipalityId: 585
	},
	{
		id: 77,
		name: 'BENITO JUAREZ',
		uta2020: '060840084020000',
		uta2010: '060840084020000',
		latitude: -37.676641021,
		longitude: -59.805767711,
		municipalityId: 585
	},
	{
		id: 78,
		name: 'CORONEL RODOLFO BUNGE',
		uta2020: '060840084000003',
		uta2010: '060840084000003',
		latitude: -37.5763984,
		longitude: -60.1392005,
		municipalityId: 585
	},
	{
		id: 79,
		name: 'LOPEZ',
		uta2020: '060840084030000',
		uta2010: '060840084030000',
		latitude: -37.554512085,
		longitude: -59.627846154,
		municipalityId: 585
	},
	{
		id: 80,
		name: 'SAN ANTONIO',
		uta2020: '060840084000017',
		uta2010: '060840084000017',
		latitude: -37.747276306,
		longitude: -59.816402438,
		municipalityId: 585
	},
	{
		id: 81,
		name: 'EL LUCHADOR',
		uta2020: '060840084000004',
		uta2010: '060840084000004',
		latitude: -37.3214623,
		longitude: -60.292086,
		municipalityId: 585
	},
	{
		id: 82,
		name: 'LA TINTA',
		uta2020: '060840084000011',
		uta2010: '060840084000011',
		latitude: -37.608386994,
		longitude: -59.514564518,
		municipalityId: 585
	},
	{
		id: 83,
		name: 'TEDIN URIBURU',
		uta2020: '060840084040000',
		uta2010: '060840084040000',
		latitude: -37.368368625,
		longitude: -59.76303916,
		municipalityId: 585
	},
	{
		id: 84,
		name: 'LOS CONQUISTADORES',
		uta2020: '300280115080000',
		uta2010: '300280115080000',
		latitude: -30.594407458,
		longitude: -58.468262706,
		municipalityId: 1548
	},
	{
		id: 85,
		name: 'GANCEDO',
		uta2020: '220360091010000',
		uta2010: '220360091010000',
		latitude: -27.48964879,
		longitude: -61.673877171,
		municipalityId: 5
	},
	{
		id: 86,
		name: 'LA BOLSA',
		uta2020: '220360091000022',
		uta2010: '220360091000022',
		latitude: -27.38206532,
		longitude: -61.62596109,
		municipalityId: 5
	},
	{
		id: 87,
		name: 'LABORDE',
		uta2020: '141821666150000',
		uta2010: '141821666150000',
		latitude: -33.152989183,
		longitude: -62.856073778,
		municipalityId: 90
	},
	{
		id: 88,
		name: 'GENERAL GALARZA',
		uta2020: '300490168030000',
		uta2010: '300490168030000',
		latitude: -32.721271306,
		longitude: -59.395888703,
		municipalityId: 1565
	},
	{
		id: 89,
		name: 'MOJOTORO',
		uta2020: '660770189000049',
		uta2010: '660770189000049',
		latitude: -24.709346771,
		longitude: -65.288383484,
		municipalityId: 1823
	},
	{
		id: 90,
		name: 'ISLAS DE VAQUEROS',
		uta2020: '660770189000028',
		uta2010: '660770189000028',
		latitude: -24.603539,
		longitude: -65.380166,
		municipalityId: 1823
	},
	{
		id: 91,
		name: 'SANTA GERTRUDIS',
		uta2020: '660770189000059',
		uta2010: '660770189000059',
		latitude: -24.6632061,
		longitude: -65.310188294,
		municipalityId: 1823
	},
	{
		id: 92,
		name: 'LA CALDERILLA',
		uta2020: '660770189000029',
		uta2010: '660770189000029',
		latitude: -24.64152455,
		longitude: -65.38083679,
		municipalityId: 1823
	},
	{
		id: 93,
		name: 'LOS SAUCES',
		uta2020: '660770189000045',
		uta2010: '660770189000045',
		latitude: -24.471033096,
		longitude: -65.376625061,
		municipalityId: 1823
	},
	{
		id: 94,
		name: 'LOS PORONGOS',
		uta2020: '660770189000044',
		uta2010: '660770189000044',
		latitude: -24.53203392,
		longitude: -65.293510437,
		municipalityId: 1823
	},
	{
		id: 95,
		name: 'LA CALDERA',
		uta2020: '660770189010000',
		uta2010: '660770189010000',
		latitude: -24.604948623,
		longitude: -65.38233773,
		municipalityId: 1823
	},
	{
		id: 96,
		name: 'EL GALLINATO',
		uta2020: '660770189000010',
		uta2010: '660770189000010',
		latitude: -24.686607223,
		longitude: -65.286726845,
		municipalityId: 1823
	},
	{
		id: 97,
		name: 'CAMPO ALEGRE',
		uta2020: '660770189000005',
		uta2010: '660770189000005',
		latitude: -24.57701543,
		longitude: -65.368728969,
		municipalityId: 1823
	},
	{
		id: 98,
		name: 'LA FALDA DE SAN ANTONIO',
		uta2020: '100630161040003',
		uta2010: '100630161040003',
		latitude: -28.419848734,
		longitude: -65.698837796,
		municipalityId: 1883
	},
	{
		id: 99,
		name: 'EL HUECO',
		uta2020: '100630161040001',
		uta2010: '100630161040001',
		latitude: -28.412788451,
		longitude: -65.717536986,
		municipalityId: 1883
	},
	{
		id: 100,
		name: 'LA TERCENA',
		uta2020: '100630161040004',
		uta2010: '100630161040004',
		latitude: -28.373447348,
		longitude: -65.708129252,
		municipalityId: 1883
	},
	{
		id: 101,
		name: 'LA CARRERA',
		uta2020: '100630161040002',
		uta2010: '100630161040002',
		latitude: -28.349557681,
		longitude: -65.709119588,
		municipalityId: 1883
	},
	{
		id: 102,
		name: 'POMANCILLO',
		uta2020: '100630161000004',
		uta2010: '100630161000004',
		latitude: -28.301939011,
		longitude: -65.72743988,
		municipalityId: 1883
	},
	{
		id: 103,
		name: 'VILLA LAS PIRQUITAS',
		uta2020: '100630161050000',
		uta2010: '100630161050000',
		latitude: -28.275466521,
		longitude: -65.733431478,
		municipalityId: 1883
	},
	{
		id: 104,
		name: 'COLLAGASTA',
		uta2020: '100630161010000',
		uta2010: '100630161010000',
		latitude: -28.36167764,
		longitude: -65.728269016,
		municipalityId: 1883
	},
	{
		id: 105,
		name: 'SAN JOSE',
		uta2020: '100630161040006',
		uta2010: '100630161040006',
		latitude: -28.388732146,
		longitude: -65.706270125,
		municipalityId: 1883
	},
	{
		id: 106,
		name: 'POMANCILLO OESTE',
		uta2020: '100630161030000',
		uta2010: '100630161030000',
		latitude: -28.317843246,
		longitude: -65.742344719,
		municipalityId: 1883
	},
	{
		id: 107,
		name: 'POMANCILLO ESTE',
		uta2020: '100630161020000',
		uta2010: '100630161020000',
		latitude: -28.308717374,
		longitude: -65.722209844,
		municipalityId: 1883
	},
	{
		id: 108,
		name: 'SAN ANTONIO',
		uta2020: '100630161040005',
		uta2010: '100630161040005',
		latitude: -28.423776679,
		longitude: -65.706213432,
		municipalityId: 1883
	},
	{
		id: 109,
		name: 'CRUCE MUÑOZ',
		uta2020: '065950595000012',
		uta2010: '065950595000012',
		latitude: -37.1820692,
		longitude: -60.6463365,
		municipalityId: 586
	},
	{
		id: 110,
		name: 'VILLA ALFREDO FORTABAT',
		uta2020: '065950595120000',
		uta2010: '065950595120000',
		latitude: -36.980271464,
		longitude: -60.279082844,
		municipalityId: 586
	},
	{
		id: 111,
		name: 'CUARTEL II - AEROPUERTO',
		uta2020: '065950595000013',
		uta2010: '065950595000013',
		latitude: -36.9138115,
		longitude: -60.2275544,
		municipalityId: 586
	},
	{
		id: 112,
		name: 'ESPIGAS',
		uta2020: '065950595050000',
		uta2010: '065950595050000',
		latitude: -36.41227324,
		longitude: -60.673069465,
		municipalityId: 586
	},
	{
		id: 113,
		name: 'RECALDE',
		uta2020: '065950595080000',
		uta2010: '065950595080000',
		latitude: -36.651501617,
		longitude: -61.084504027,
		municipalityId: 586
	},
	{
		id: 114,
		name: 'CAMPO ELSSIRY',
		uta2020: '065950595000006',
		uta2010: '065950595000006',
		latitude: -37.28472315,
		longitude: -60.342755627,
		municipalityId: 586
	},
	{
		id: 115,
		name: 'EL PORVENIR',
		uta2020: '065950595000016',
		uta2010: '065950595000016',
		latitude: -36.5143954,
		longitude: -60.5474023,
		municipalityId: 586
	},
	{
		id: 116,
		name: 'SIERRAS BAYAS',
		uta2020: '065950595110001',
		uta2010: '065950595110001',
		latitude: -36.922523815,
		longitude: -60.215792542,
		municipalityId: 586
	},
	{
		id: 117,
		name: 'OLAVARRIA',
		uta2020: '065950595070000',
		uta2010: '065950595070000',
		latitude: -36.892093579,
		longitude: -60.318004656,
		municipalityId: 586
	},
	{
		id: 118,
		name: 'CHACRAS DE PIBUEL',
		uta2020: '065950595000010',
		uta2010: '065950595000010',
		latitude: -36.908140792,
		longitude: -60.365176129,
		municipalityId: 586
	},
	{
		id: 119,
		name: 'VIRGEN DE LA LOMA',
		uta2020: '065950595000057',
		uta2010: '065950595000057',
		latitude: -36.8185482,
		longitude: -60.385061,
		municipalityId: 586
	},
	{
		id: 120,
		name: 'SAN PEDRO',
		uta2020: '065950595000048',
		uta2010: '065950595000048',
		latitude: -36.7927946,
		longitude: -60.6360127,
		municipalityId: 586
	},
	{
		id: 121,
		name: 'CALERA AVELLANEDA',
		uta2020: '065950595000004',
		uta2010: '065950595000004',
		latitude: -36.98256235,
		longitude: -60.24344894,
		municipalityId: 586
	},
	{
		id: 122,
		name: 'EL MIRADOR',
		uta2020: '065950595000015',
		uta2010: '065950595000015',
		latitude: -36.812599182,
		longitude: -60.350936891,
		municipalityId: 586
	},
	{
		id: 123,
		name: 'SAN QUILCO',
		uta2020: '065950595000049',
		uta2010: '065950595000049',
		latitude: -37.0438314,
		longitude: -61.1407248,
		municipalityId: 586
	},
	{
		id: 124,
		name: 'COLONIA SAN MIGUEL',
		uta2020: '065950595040000',
		uta2010: '065950595040000',
		latitude: -36.949565979,
		longitude: -60.110895408,
		municipalityId: 586
	},
	{
		id: 125,
		name: 'SIERRA CHICA',
		uta2020: '065950595100000',
		uta2010: '065950595100000',
		latitude: -36.843238222,
		longitude: -60.223427138,
		municipalityId: 586
	},
	{
		id: 126,
		name: 'LAS PIEDRITAS',
		uta2020: '065950595000035',
		uta2010: '065950595000035',
		latitude: -36.7335474,
		longitude: -60.5955954,
		municipalityId: 586
	},
	{
		id: 127,
		name: 'VILLA LA SERRANIA',
		uta2020: '065950595130000',
		uta2010: '065950595130000',
		latitude: -36.990363212,
		longitude: -60.310808118,
		municipalityId: 586
	},
	{
		id: 128,
		name: 'ITURREGUI',
		uta2020: '065950595000020',
		uta2010: '065950595000020',
		latitude: -36.8293322,
		longitude: -61.1255567,
		municipalityId: 586
	},
	{
		id: 129,
		name: 'VILLA MONICA',
		uta2020: '065950595000055',
		uta2010: '065950595000055',
		latitude: -36.8993962,
		longitude: -60.1455471,
		municipalityId: 586
	},
	{
		id: 130,
		name: 'BLANCAGRANDE',
		uta2020: '065950595010000',
		uta2010: '065950595010000',
		latitude: -36.532888708,
		longitude: -60.882454913,
		municipalityId: 586
	},
	{
		id: 131,
		name: 'CERRO SOTUYO',
		uta2020: '065950595000009',
		uta2010: '065950595000009',
		latitude: -36.961201976,
		longitude: -60.100827933,
		municipalityId: 586
	},
	{
		id: 132,
		name: 'COLONIA HINOJO',
		uta2020: '065950595060001',
		uta2010: '065950595060001',
		latitude: -36.88006945,
		longitude: -60.178055297,
		municipalityId: 586
	},
	{
		id: 133,
		name: 'MAPIS',
		uta2020: '065950595000038',
		uta2010: '065950595000038',
		latitude: -36.7705364,
		longitude: -61.2818613,
		municipalityId: 586
	},
	{
		id: 134,
		name: 'CAMPO BELGRANO',
		uta2020: '065950595000005',
		uta2010: '065950595000005',
		latitude: -36.7250646,
		longitude: -60.276205,
		municipalityId: 586
	},
	{
		id: 135,
		name: 'VILLA ARRIETA',
		uta2020: '065950595110002',
		uta2010: '065950595110002',
		latitude: -36.943660537,
		longitude: -60.157827183,
		municipalityId: 586
	},
	{
		id: 136,
		name: 'BLANCA CHICA',
		uta2020: '065950595000002',
		uta2010: '065950595000002',
		latitude: -36.8410918,
		longitude: -60.4478581,
		municipalityId: 586
	},
	{
		id: 137,
		name: 'SAN GREGORIO',
		uta2020: '065950595000044',
		uta2010: '065950595000044',
		latitude: -36.7044536,
		longitude: -60.4280269,
		municipalityId: 586
	},
	{
		id: 138,
		name: 'ROCHA',
		uta2020: '065950595000041',
		uta2010: '065950595000041',
		latitude: -37.145768713,
		longitude: -60.977484401,
		municipalityId: 586
	},
	{
		id: 139,
		name: 'HINOJO',
		uta2020: '065950595060002',
		uta2010: '065950595060002',
		latitude: -36.875899595,
		longitude: -60.147319691,
		municipalityId: 586
	},
	{
		id: 140,
		name: 'COLONIA NIEVAS',
		uta2020: '065950595030000',
		uta2010: '065950595030000',
		latitude: -36.864137026,
		longitude: -60.08164247,
		municipalityId: 586
	},
	{
		id: 141,
		name: 'LA PARDA',
		uta2020: '065950595000029',
		uta2010: '065950595000029',
		latitude: -36.6551192,
		longitude: -60.7438976,
		municipalityId: 586
	},
	{
		id: 142,
		name: 'SAN JACINTO',
		uta2020: '065950595000045',
		uta2010: '065950595000045',
		latitude: -36.9661162,
		longitude: -60.2584252,
		municipalityId: 586
	},
	{
		id: 143,
		name: 'LA PROVIDENCIA',
		uta2020: '065950595000032',
		uta2010: '065950595000032',
		latitude: -37.0009645,
		longitude: -60.1886992,
		municipalityId: 586
	},
	{
		id: 144,
		name: 'SANTA LUISA',
		uta2020: '065950595090000',
		uta2010: '065950595090000',
		latitude: -37.128965369,
		longitude: -60.40993039,
		municipalityId: 586
	},
	{
		id: 145,
		name: 'POURTALE',
		uta2020: '065950595000039',
		uta2010: '065950595000039',
		latitude: -36.972646979,
		longitude: -60.436308622,
		municipalityId: 586
	},
	{
		id: 146,
		name: 'LA MODERNA',
		uta2020: '065950595000025',
		uta2010: '065950595000025',
		latitude: -36.977116,
		longitude: -60.9859857,
		municipalityId: 586
	},
	{
		id: 147,
		name: 'SAN ANTONIO',
		uta2020: '065950595000043',
		uta2010: '065950595000043',
		latitude: -36.6721853,
		longitude: -60.5713249,
		municipalityId: 586
	},
	{
		id: 148,
		name: 'LA CARMELITA',
		uta2020: '065950595000022',
		uta2010: '065950595000022',
		latitude: -36.481060756,
		longitude: -60.814847883,
		municipalityId: 586
	},
	{
		id: 149,
		name: 'LOS CHILENOS',
		uta2020: '065950595000037',
		uta2010: '065950595000037',
		latitude: -36.9332836,
		longitude: -60.721619,
		municipalityId: 586
	},
	{
		id: 150,
		name: 'CAMPO STRIEBECK',
		uta2020: '065950595000007',
		uta2010: '065950595000007',
		latitude: -36.796281877,
		longitude: -60.311721086,
		municipalityId: 586
	},
	{
		id: 151,
		name: 'COLONIA ITURRASPE',
		uta2020: '820212182000028',
		uta2010: '820212182000028',
		latitude: -31.4788195,
		longitude: -61.62158,
		municipalityId: 749
	},
	{
		id: 152,
		name: 'COLONIA LA POSTA',
		uta2020: '820142028000009',
		uta2010: '820142028000009',
		latitude: -33.050945267,
		longitude: -61.487723342,
		municipalityId: 794
	},
	{
		id: 153,
		name: 'AREQUITO',
		uta2020: '820142028010000',
		uta2010: '820142028010000',
		latitude: -33.148300838,
		longitude: -61.471334935,
		municipalityId: 794
	},
	{
		id: 154,
		name: 'SAN JOSE DE AGUILAR',
		uta2020: '661610413000134',
		uta2010: '661610413000134',
		latitude: -22.34120267,
		longitude: -65.17109986,
		municipalityId: 1825
	},
	{
		id: 155,
		name: 'PUCALLPA',
		uta2020: '661610413000104',
		uta2010: '661610413000104',
		latitude: -22.27221734,
		longitude: -64.96329924,
		municipalityId: 1825
	},
	{
		id: 156,
		name: 'LIZOITE',
		uta2020: '661610413000079',
		uta2010: '661610413000079',
		latitude: -22.26085,
		longitude: -65.16353,
		municipalityId: 1825
	},
	{
		id: 157,
		name: 'LA SOLEDAD',
		uta2020: '661610413000070',
		uta2010: '661610413000070',
		latitude: -22.21907088,
		longitude: -64.89133406,
		municipalityId: 1825
	},
	{
		id: 158,
		name: 'HORNILLOS',
		uta2020: '661610413000056',
		uta2010: '661610413000056',
		latitude: -22.33043511,
		longitude: -65.1269968,
		municipalityId: 1825
	},
	{
		id: 159,
		name: 'EL PUESTO',
		uta2020: '661610413000050',
		uta2010: '661610413000050',
		latitude: -22.20926263,
		longitude: -64.9669281,
		municipalityId: 1825
	},
	{
		id: 160,
		name: 'LA FALDA',
		uta2020: '661610413000065',
		uta2010: '661610413000065',
		latitude: -22.2361511,
		longitude: -64.93101785,
		municipalityId: 1825
	},
	{
		id: 161,
		name: 'RODEO PAMPA',
		uta2020: '661610413000127',
		uta2010: '661610413000127',
		latitude: -22.245227814,
		longitude: -65.078018188,
		municipalityId: 1825
	},
	{
		id: 162,
		name: 'PUCARA',
		uta2020: '661610413000105',
		uta2010: '661610413000105',
		latitude: -22.18128,
		longitude: -64.95977,
		municipalityId: 1825
	},
	{
		id: 163,
		name: 'LA HUERTA',
		uta2020: '661610413000066',
		uta2010: '661610413000066',
		latitude: -22.23831,
		longitude: -65.01659,
		municipalityId: 1825
	},
	{
		id: 164,
		name: 'CAMPO LA PAZ',
		uta2020: '661610413000029',
		uta2010: '661610413000029',
		latitude: -22.36944976,
		longitude: -65.14637476,
		municipalityId: 1825
	},
	{
		id: 165,
		name: 'PUEBLO VIEJO',
		uta2020: '661610413000106',
		uta2010: '661610413000106',
		latitude: -22.395233154,
		longitude: -64.82989502,
		municipalityId: 1825
	},
	{
		id: 166,
		name: 'SAN FRANCISCO',
		uta2020: '661610413000132',
		uta2010: '661610413000132',
		latitude: -22.408863068,
		longitude: -65.259094238,
		municipalityId: 1825
	},
	{
		id: 167,
		name: 'SAN JOSE',
		uta2020: '661610413000133',
		uta2010: '661610413000133',
		latitude: -22.334178925,
		longitude: -65.175895691,
		municipalityId: 1825
	},
	{
		id: 168,
		name: 'ABRA DE SANTA CRUZ',
		uta2020: '661610413000007',
		uta2010: '661610413000007',
		latitude: -22.10361871,
		longitude: -65.02203878,
		municipalityId: 1825
	},
	{
		id: 169,
		name: 'SANTA CRUZ',
		uta2020: '661610413000140',
		uta2010: '661610413000140',
		latitude: -22.149839401,
		longitude: -65.02141571,
		municipalityId: 1825
	},
	{
		id: 170,
		name: 'CHORRO',
		uta2020: '661610413000035',
		uta2010: '661610413000035',
		latitude: -22.287244797,
		longitude: -64.920921326,
		municipalityId: 1825
	},
	{
		id: 171,
		name: 'SANTA VICTORIA',
		uta2020: '661610413070000',
		uta2010: '661610413070000',
		latitude: -22.229461501,
		longitude: -64.950325547,
		municipalityId: 1825
	},
	{
		id: 172,
		name: 'ABRA DE SAN ANTONIO',
		uta2020: '661610413000006',
		uta2010: '661610413000006',
		latitude: -22.17502,
		longitude: -64.93502,
		municipalityId: 1825
	},
	{
		id: 173,
		name: 'ANTIGAL',
		uta2020: '661610413000014',
		uta2010: '661610413000014',
		latitude: -22.16734,
		longitude: -64.9073,
		municipalityId: 1825
	},
	{
		id: 174,
		name: 'LAGUNA',
		uta2020: '661610413000071',
		uta2010: '661610413000071',
		latitude: -22.37389946,
		longitude: -65.178741455,
		municipalityId: 1825
	},
	{
		id: 175,
		name: 'SAN FELIPE',
		uta2020: '661610413000131',
		uta2010: '661610413000131',
		latitude: -22.30340389,
		longitude: -64.98355327,
		municipalityId: 1825
	},
	{
		id: 176,
		name: 'SANTA CRUZ DE AGUILAR',
		uta2020: '661610413000141',
		uta2010: '661610413000141',
		latitude: -22.15450164,
		longitude: -65.0182986,
		municipalityId: 1825
	},
	{
		id: 177,
		name: 'MECOYITA',
		uta2020: '661610413000081',
		uta2010: '661610413000081',
		latitude: -22.12536665,
		longitude: -64.90085004,
		municipalityId: 1825
	},
	{
		id: 178,
		name: 'ACOYTE',
		uta2020: '661610413010000',
		uta2010: '661610413010000',
		latitude: -22.262570806,
		longitude: -64.999342591,
		municipalityId: 1825
	},
	{
		id: 179,
		name: 'RIO PIEDRAS',
		uta2020: '661120280070000',
		uta2010: '661120280070000',
		latitude: -25.321181876,
		longitude: -64.917329425,
		municipalityId: 1828
	},
	{
		id: 180,
		name: 'LUMBRERAS',
		uta2020: '661120280030000',
		uta2010: '661120280030000',
		latitude: -25.217257579,
		longitude: -64.930686146,
		municipalityId: 1828
	},
	{
		id: 181,
		name: 'ARENALES',
		uta2020: '661120280000005',
		uta2010: '661120280000005',
		latitude: -25.145547867,
		longitude: -65.154006958,
		municipalityId: 1828
	},
	{
		id: 182,
		name: 'SAN RAMIREZ',
		uta2020: '300709495000106',
		uta2010: '300709495000106',
		latitude: -30.46341428,
		longitude: -59.34085823,
		municipalityId: 1576
	},
	{
		id: 183,
		name: 'LIHUEL CALEL',
		uta2020: '420840280000005',
		uta2010: '420840280000005',
		latitude: -38.01481736,
		longitude: -65.584818951,
		municipalityId: 1919
	},
	{
		id: 184,
		name: 'PUELCHES',
		uta2020: '420420280020000',
		uta2010: '420420280020000',
		latitude: -38.143772231,
		longitude: -65.910279081,
		municipalityId: 1919
	},
	{
		id: 185,
		name: 'GENERAL LAGOS',
		uta2020: '820843407150000',
		uta2010: '820843407150000',
		latitude: -33.112158888,
		longitude: -60.566573784,
		municipalityId: 807
	},
	{
		id: 186,
		name: 'PAMPA LA PORTEÑA',
		uta2020: '220490133000011',
		uta2010: '220490133000011',
		latitude: -26.891746562,
		longitude: -61.119342344,
		municipalityId: 8
	},
	{
		id: 187,
		name: 'CORZUELA NORTE',
		uta2020: '220490133000006',
		uta2010: '220490133000006',
		latitude: -26.89782559,
		longitude: -61.02852309,
		municipalityId: 8
	},
	{
		id: 188,
		name: 'SAN ANTONIO',
		uta2020: '220490133000013',
		uta2010: '220490133000013',
		latitude: -26.845151262,
		longitude: -61.156831641,
		municipalityId: 8
	},
	{
		id: 189,
		name: 'COLONIA JUAN LAVALLE',
		uta2020: '220490133000004',
		uta2010: '220490133000004',
		latitude: -27.10585501,
		longitude: -60.857506708,
		municipalityId: 8
	},
	{
		id: 190,
		name: 'PAMPA ZAPPA',
		uta2020: '220490133000012',
		uta2010: '220490133000012',
		latitude: -26.95941313,
		longitude: -61.07284844,
		municipalityId: 8
	},
	{
		id: 191,
		name: 'COLONIA SAN LORENZO',
		uta2020: '220490133000005',
		uta2010: '220490133000005',
		latitude: -26.968568802,
		longitude: -60.873462677,
		municipalityId: 8
	},
	{
		id: 192,
		name: 'CAMPO CANTON',
		uta2020: '220490133000002',
		uta2010: '220490133000002',
		latitude: -26.965077007,
		longitude: -61.030713589,
		municipalityId: 8
	},
	{
		id: 193,
		name: 'PAMPA ALSINA',
		uta2020: '220490133000009',
		uta2010: '220490133000009',
		latitude: -26.993965072,
		longitude: -60.857751949,
		municipalityId: 8
	},
	{
		id: 194,
		name: 'CORZUELA',
		uta2020: '220490133010000',
		uta2010: '220490133010000',
		latitude: -26.955676009,
		longitude: -60.970757406,
		municipalityId: 8
	},
	{
		id: 195,
		name: 'LA CIENAGA',
		uta2020: '740636294000091',
		uta2010: '740636294000091',
		latitude: -32.417919159,
		longitude: -65.48777771,
		municipalityId: 1090
	},
	{
		id: 196,
		name: 'LAS AGUADAS',
		uta2020: '740636294020000',
		uta2010: '740636294020000',
		latitude: -32.376358046,
		longitude: -65.501204138,
		municipalityId: 1090
	},
	{
		id: 197,
		name: 'TALA VERDE',
		uta2020: '740636294000181',
		uta2010: '740636294000181',
		latitude: -32.40896557,
		longitude: -65.56209159,
		municipalityId: 1090
	},
	{
		id: 198,
		name: 'EL PUESTO',
		uta2020: '740636294000067',
		uta2010: '740636294000067',
		latitude: -32.34642911,
		longitude: -65.46720015,
		municipalityId: 1090
	},
	{
		id: 199,
		name: 'LOS MOLLES',
		uta2020: '740636294000133',
		uta2010: '740636294000133',
		latitude: -32.358093262,
		longitude: -65.529525757,
		municipalityId: 1090
	},
	{
		id: 200,
		name: 'CAÑADON SECO',
		uta2020: '780145007020000',
		uta2010: '780145007020000',
		latitude: -46.55884577,
		longitude: -67.616856369,
		municipalityId: 1518
	},
	{
		id: 201,
		name: 'LA ESCALERA',
		uta2020: '461260126000005',
		uta2010: '461260126000005',
		latitude: -29.140890122,
		longitude: -67.157470703,
		municipalityId: 1999
	},
	{
		id: 202,
		name: 'LA TORRECITA',
		uta2020: '461260126000007',
		uta2010: '461260126000007',
		latitude: -29.177150726,
		longitude: -67.043296814,
		municipalityId: 1999
	},
	{
		id: 203,
		name: 'HUACO',
		uta2020: '461260126000004',
		uta2010: '461260126000004',
		latitude: -29.160524552,
		longitude: -67.091955631,
		municipalityId: 1999
	},
	{
		id: 204,
		name: 'VILLA SANAGASTA',
		uta2020: '461260126010000',
		uta2010: '461260126010000',
		latitude: -29.306449146,
		longitude: -67.041409736,
		municipalityId: 1999
	},
	{
		id: 205,
		name: 'ADROGUE',
		uta2020: '060280028010001',
		uta2010: '060280028010001',
		latitude: -34.801558074,
		longitude: -58.391467719,
		municipalityId: 587
	},
	{
		id: 206,
		name: 'JOSE MARMOL',
		uta2020: '060280028010006',
		uta2010: '060280028010006',
		latitude: -34.785144251,
		longitude: -58.36814756,
		municipalityId: 587
	},
	{
		id: 207,
		name: 'SAN JOSE',
		uta2020: '060280028010012',
		uta2010: '060280028010012',
		latitude: -34.767377192,
		longitude: -58.34327714,
		municipalityId: 587
	},
	{
		id: 208,
		name: 'RAFAEL CALZADA',
		uta2020: '060280028010010',
		uta2010: '060280028010010',
		latitude: -34.791136751,
		longitude: -58.350598184,
		municipalityId: 587
	},
	{
		id: 209,
		name: 'CLAYPOLE',
		uta2020: '060280028010003',
		uta2010: '060280028010003',
		latitude: -34.804475908,
		longitude: -58.344782553,
		municipalityId: 587
	},
	{
		id: 210,
		name: 'MINISTRO RIVADAVIA',
		uta2020: '060280028010009',
		uta2010: '060280028010009',
		latitude: -34.855689501,
		longitude: -58.361646543,
		municipalityId: 587
	},
	{
		id: 211,
		name: 'BURZACO',
		uta2020: '060280028010002',
		uta2010: '060280028010002',
		latitude: -34.831541589,
		longitude: -58.398687487,
		municipalityId: 587
	},
	{
		id: 212,
		name: 'MALVINAS ARGENTINAS',
		uta2020: '060280028010008',
		uta2010: '060280028010008',
		latitude: -34.818958317,
		longitude: -58.423561061,
		municipalityId: 587
	},
	{
		id: 213,
		name: 'GLEW',
		uta2020: '060280028010005',
		uta2010: '060280028010005',
		latitude: -34.886011418,
		longitude: -58.381830184,
		municipalityId: 587
	},
	{
		id: 214,
		name: 'LONGCHAMPS',
		uta2020: '060280028010007',
		uta2010: '060280028010007',
		latitude: -34.860945026,
		longitude: -58.389147692,
		municipalityId: 587
	},
	{
		id: 215,
		name: 'DON ORIONE',
		uta2020: '060280028010004',
		uta2010: '060280028010004',
		latitude: -34.821075164,
		longitude: -58.344745799,
		municipalityId: 587
	},
	{
		id: 216,
		name: 'SAN FRANCISCO SOLANO',
		uta2020: '060280028010011',
		uta2010: '060280028010011',
		latitude: -34.786674358,
		longitude: -58.321936352,
		municipalityId: 587
	},
	{
		id: 217,
		name: 'BELL VILLE',
		uta2020: '141821610060000',
		uta2010: '141821610060000',
		latitude: -32.628560075,
		longitude: -62.689114908,
		municipalityId: 91
	},
	{
		id: 218,
		name: 'COLONIA COMPIANI',
		uta2020: '141821610000022',
		uta2010: '141821610000022',
		latitude: -32.567857,
		longitude: -62.6776939,
		municipalityId: 91
	},
	{
		id: 219,
		name: 'CALETA OLIVIA',
		uta2020: '780140021010000',
		uta2010: '780140021010000',
		latitude: -46.44594923,
		longitude: -67.525156497,
		municipalityId: 1519
	},
	{
		id: 220,
		name: 'NUEVA VIZCAYA',
		uta2020: '300359215040000',
		uta2010: '300359215040000',
		latitude: -30.968514977,
		longitude: -58.612747928,
		municipalityId: 1603
	},
	{
		id: 221,
		name: 'TORTUGUITAS',
		uta2020: '064120412010003',
		uta2010: '064120412010003',
		latitude: -34.491848399,
		longitude: -58.786378032,
		municipalityId: 588
	},
	{
		id: 222,
		name: 'DEL VISO',
		uta2020: '064120412010001',
		uta2010: '064120412010001',
		latitude: -34.480495795,
		longitude: -58.804258898,
		municipalityId: 588
	},
	{
		id: 223,
		name: 'JOSE C. PAZ',
		uta2020: '064120412010002',
		uta2010: '064120412010002',
		latitude: -34.521161197,
		longitude: -58.770881113,
		municipalityId: 588
	},
	{
		id: 224,
		name: 'GARZA',
		uta2020: '861826287010000',
		uta2010: '861826287010000',
		latitude: -28.164064062,
		longitude: -63.469345611,
		municipalityId: 1312
	},
	{
		id: 225,
		name: 'LA VIGIA',
		uta2020: '066860686000018',
		uta2010: '066860686000018',
		latitude: -34.3064955,
		longitude: -60.6245184,
		municipalityId: 589
	},
	{
		id: 226,
		name: 'LA VUELTA',
		uta2020: '066860686000019',
		uta2010: '066860686000019',
		latitude: -34.3166668,
		longitude: -60.7466182,
		municipalityId: 589
	},
	{
		id: 227,
		name: 'ROBERTO CANO',
		uta2020: '066860686050000',
		uta2010: '066860686050000',
		latitude: -34.087651518,
		longitude: -60.667256401,
		municipalityId: 589
	},
	{
		id: 228,
		name: 'SANTA FELISA',
		uta2020: '066860686000028',
		uta2010: '066860686000028',
		latitude: -34.2870114,
		longitude: -60.6908135,
		municipalityId: 589
	},
	{
		id: 229,
		name: 'LA SOLEDAD',
		uta2020: '066860686000014',
		uta2010: '066860686000014',
		latitude: -34.307846,
		longitude: -61.0004538,
		municipalityId: 589
	},
	{
		id: 230,
		name: 'LA CALDERA',
		uta2020: '066860686000007',
		uta2010: '066860686000007',
		latitude: -34.181495666,
		longitude: -60.797481537,
		municipalityId: 589
	},
	{
		id: 231,
		name: 'LOS INDIOS',
		uta2020: '066860686030000',
		uta2010: '066860686030000',
		latitude: -34.373569611,
		longitude: -60.652371027,
		municipalityId: 589
	},
	{
		id: 232,
		name: 'LA CONCEPCION',
		uta2020: '066860686000008',
		uta2010: '066860686000008',
		latitude: -34.20364677,
		longitude: -60.952852022,
		municipalityId: 589
	},
	{
		id: 233,
		name: 'LA ROJERA',
		uta2020: '066860686000012',
		uta2010: '066860686000012',
		latitude: -34.1578906,
		longitude: -60.7016991,
		municipalityId: 589
	},
	{
		id: 234,
		name: 'LA BEBA',
		uta2020: '066860686010000',
		uta2010: '066860686010000',
		latitude: -34.154438787,
		longitude: -61.012871117,
		municipalityId: 589
	},
	{
		id: 235,
		name: 'BARRIO LAS MARGARITAS',
		uta2020: '066860686060001',
		uta2010: '066860686060001',
		latitude: -34.193237415,
		longitude: -60.6820265,
		municipalityId: 589
	},
	{
		id: 236,
		name: 'LAS CARABELAS',
		uta2020: '066860686020000',
		uta2010: '066860686020000',
		latitude: -34.038100265,
		longitude: -60.868526417,
		municipalityId: 589
	},
	{
		id: 237,
		name: 'LAS POLVAREDAS',
		uta2020: '066860686000021',
		uta2010: '066860686000021',
		latitude: -34.1614703,
		longitude: -60.6092371,
		municipalityId: 589
	},
	{
		id: 238,
		name: 'LA VUELTA CHICA',
		uta2020: '066860686000020',
		uta2010: '066860686000020',
		latitude: -34.352424622,
		longitude: -60.745353699,
		municipalityId: 589
	},
	{
		id: 239,
		name: 'HUNTER',
		uta2020: '066860686000004',
		uta2010: '066860686000004',
		latitude: -34.2433108,
		longitude: -60.532499,
		municipalityId: 589
	},
	{
		id: 240,
		name: 'VILLA MANUEL POMAR',
		uta2020: '066860686080000',
		uta2010: '066860686080000',
		latitude: -33.91595088,
		longitude: -60.937938024,
		municipalityId: 589
	},
	{
		id: 241,
		name: 'LA TIGRA',
		uta2020: '066860686000015',
		uta2010: '066860686000015',
		latitude: -34.006214142,
		longitude: -60.98638916,
		municipalityId: 589
	},
	{
		id: 242,
		name: 'ROJAS',
		uta2020: '066860686060002',
		uta2010: '066860686060002',
		latitude: -34.187229226,
		longitude: -60.717941192,
		municipalityId: 589
	},
	{
		id: 243,
		name: 'ESTACION SOL DE MAYO',
		uta2020: '066860686070000',
		uta2010: '066860686070000',
		latitude: -34.268944851,
		longitude: -60.871777342,
		municipalityId: 589
	},
	{
		id: 244,
		name: 'RAFAEL OBLIGADO',
		uta2020: '066860686040000',
		uta2010: '066860686040000',
		latitude: -34.358813249,
		longitude: -60.784569326,
		municipalityId: 589
	},
	{
		id: 245,
		name: 'VILLA PARQUE CECIR',
		uta2020: '066860686060003',
		uta2010: '066860686060003',
		latitude: -34.170717599,
		longitude: -60.743833682,
		municipalityId: 589
	},
	{
		id: 246,
		name: 'LA VERDE',
		uta2020: '066860686000017',
		uta2010: '066860686000017',
		latitude: -34.0764093,
		longitude: -60.9715417,
		municipalityId: 589
	},
	{
		id: 247,
		name: 'SAN BASILIO',
		uta2020: '066860686000027',
		uta2010: '066860686000027',
		latitude: -34.4720436,
		longitude: -60.6832105,
		municipalityId: 589
	},
	{
		id: 248,
		name: 'VILLA GENERAL MITRE',
		uta2020: '860070007040000',
		uta2010: '860070007040000',
		latitude: -29.139635716,
		longitude: -62.562396054,
		municipalityId: 1314
	},
	{
		id: 249,
		name: 'SAN ROQUE',
		uta2020: '140072007000058',
		uta2010: '140072007000058',
		latitude: -32.2162493,
		longitude: -64.6720222,
		municipalityId: 118
	},
	{
		id: 250,
		name: 'CERRO PELADO',
		uta2020: '140072007000016',
		uta2010: '140072007000016',
		latitude: -32.2183924,
		longitude: -64.6415206,
		municipalityId: 118
	},
	{
		id: 251,
		name: 'AMBOY',
		uta2020: '140072007010000',
		uta2010: '140072007010000',
		latitude: -32.175916522,
		longitude: -64.576548317,
		municipalityId: 118
	},
	{
		id: 252,
		name: 'FLORIDA NEGRA',
		uta2020: '780420000000029',
		uta2010: '780420000000029',
		latitude: -48.420131683,
		longitude: -67.354904175,
		municipalityId: 1528
	},
	{
		id: 253,
		name: 'BELLA VISTA',
		uta2020: '780420000000002',
		uta2010: '780420000000002',
		latitude: -49.064224243,
		longitude: -68.324668884,
		municipalityId: 1528
	},
	{
		id: 254,
		name: 'EL SALADO',
		uta2020: '780420000000004',
		uta2010: '780420000000004',
		latitude: -48.731674194,
		longitude: -67.701408386,
		municipalityId: 1528
	},
	{
		id: 255,
		name: 'SUARDI',
		uta2020: '820913666260000',
		uta2010: '820913666260000',
		latitude: -30.536145346,
		longitude: -61.961680584,
		municipalityId: 831
	},
	{
		id: 256,
		name: 'COLONIA SAN JOSE',
		uta2020: '380946175010001',
		uta2010: '380946175010001',
		latitude: -23.402354468,
		longitude: -65.391045155,
		municipalityId: 1163
	},
	{
		id: 257,
		name: 'ALONSO',
		uta2020: '380946175000005',
		uta2010: '380946175000005',
		latitude: -23.44775,
		longitude: -65.24884,
		municipalityId: 1163
	},
	{
		id: 258,
		name: 'VOLCAN DE YACORAITE',
		uta2020: '380946175000075',
		uta2010: '380946175000075',
		latitude: -23.326789,
		longitude: -65.47565899,
		municipalityId: 1163
	},
	{
		id: 259,
		name: 'YACORAITE',
		uta2020: '380946175010002',
		uta2010: '380946175010002',
		latitude: -23.402354468,
		longitude: -65.391045155,
		municipalityId: 1163
	},
	{
		id: 260,
		name: 'HUACALERA',
		uta2020: '380946175020000',
		uta2010: '380946175020000',
		latitude: -23.43416426,
		longitude: -65.351334137,
		municipalityId: 1163
	},
	{
		id: 261,
		name: 'LA TOMA',
		uta2020: '740210042060000',
		uta2010: '740210042060000',
		latitude: -33.05443762,
		longitude: -65.62269821,
		municipalityId: 1098
	},
	{
		id: 262,
		name: 'MAQUINCHAO',
		uta2020: '620910266070000',
		uta2010: '620910266070000',
		latitude: -41.247516564,
		longitude: -68.700341069,
		municipalityId: 1225
	},
	{
		id: 263,
		name: 'CALLE ANGOSTA',
		uta2020: '063010301000003',
		uta2010: '063010301000003',
		latitude: -35.834410002,
		longitude: -58.477360025,
		municipalityId: 590
	},
	{
		id: 264,
		name: 'NEWTON',
		uta2020: '063010301000013',
		uta2010: '063010301000013',
		latitude: -35.9302358,
		longitude: -58.7735013,
		municipalityId: 590
	},
	{
		id: 265,
		name: 'SAN MARTIN',
		uta2020: '063010301000014',
		uta2010: '063010301000014',
		latitude: -35.8099286,
		longitude: -58.7384442,
		municipalityId: 590
	},
	{
		id: 266,
		name: 'CHAS',
		uta2020: '063010301000004',
		uta2010: '063010301000004',
		latitude: -35.8738986,
		longitude: -58.5835485,
		municipalityId: 590
	},
	{
		id: 267,
		name: 'GENERAL BELGRANO',
		uta2020: '063010301010000',
		uta2010: '063010301010000',
		latitude: -35.769457736,
		longitude: -58.49446151,
		municipalityId: 590
	},
	{
		id: 268,
		name: 'LA VERDE',
		uta2020: '063010301000012',
		uta2010: '063010301000012',
		latitude: -35.7960497,
		longitude: -58.5902581,
		municipalityId: 590
	},
	{
		id: 269,
		name: 'GORCHS',
		uta2020: '063010301020000',
		uta2010: '063010301020000',
		latitude: -35.673372963,
		longitude: -58.958299957,
		municipalityId: 590
	},
	{
		id: 270,
		name: 'EL DESCANSO',
		uta2020: '063010301000006',
		uta2010: '063010301000006',
		latitude: -35.780645752,
		longitude: -58.495208405,
		municipalityId: 590
	},
	{
		id: 271,
		name: 'COLONIA EL SALADO',
		uta2020: '063010301000005',
		uta2010: '063010301000005',
		latitude: -35.848590002,
		longitude: -58.416280028,
		municipalityId: 590
	},
	{
		id: 272,
		name: 'LAVALLE',
		uta2020: '180910203030000',
		uta2010: '180910203030000',
		latitude: -29.02498125,
		longitude: -59.18185701,
		municipalityId: 2017
	},
	{
		id: 273,
		name: 'PUERTO VIEJO',
		uta2020: '180910203000039',
		uta2010: '180910203000039',
		latitude: -29.0035214,
		longitude: -59.1726468,
		municipalityId: 2017
	},
	{
		id: 274,
		name: 'LA LOMA',
		uta2020: '180910203000027',
		uta2010: '180910203000027',
		latitude: -28.9843867,
		longitude: -59.1486856,
		municipalityId: 2017
	},
	{
		id: 275,
		name: 'RINCON DE SANTA LUCIA',
		uta2020: '180910203000042',
		uta2010: '180910203000042',
		latitude: -29.023997348,
		longitude: -59.143363895,
		municipalityId: 2017
	},
	{
		id: 276,
		name: 'RINCON DE SOTO',
		uta2020: '180910203000043',
		uta2010: '180910203000043',
		latitude: -29.065367,
		longitude: -59.2059937,
		municipalityId: 2017
	},
	{
		id: 277,
		name: 'ENRIQUE URIEN',
		uta2020: '220980315020000',
		uta2010: '220980315020000',
		latitude: -27.558725149,
		longitude: -60.525990754,
		municipalityId: 9
	},
	{
		id: 278,
		name: 'LA VIRUELA',
		uta2020: '220980315000024',
		uta2010: '220980315000024',
		latitude: -27.864801534,
		longitude: -60.367819508,
		municipalityId: 9
	},
	{
		id: 279,
		name: 'LA MANUELA',
		uta2020: '220980315000018',
		uta2010: '220980315000018',
		latitude: -27.87571085,
		longitude: -60.648021505,
		municipalityId: 9
	},
	{
		id: 280,
		name: 'LA CARLOTA',
		uta2020: '220980315000016',
		uta2010: '220980315000016',
		latitude: -27.644956582,
		longitude: -60.707730774,
		municipalityId: 9
	},
	{
		id: 281,
		name: 'CAMPO COLLA',
		uta2020: '820703239000005',
		uta2010: '820703239000005',
		latitude: -31.768503,
		longitude: -61.3988686,
		municipalityId: 862
	},
	{
		id: 282,
		name: 'LAS HIGUERITAS',
		uta2020: '820703239000031',
		uta2010: '820703239000031',
		latitude: -31.8169489,
		longitude: -61.1663277,
		municipalityId: 862
	},
	{
		id: 283,
		name: 'CORONEL RODRIGUEZ',
		uta2020: '820703239000018',
		uta2010: '820703239000018',
		latitude: -31.7032972,
		longitude: -61.2418905,
		municipalityId: 862
	},
	{
		id: 284,
		name: 'SANTA CLARA DE BUENA VISTA',
		uta2020: '820703239290000',
		uta2010: '820703239290000',
		latitude: -31.76579633,
		longitude: -61.321023639,
		municipalityId: 862
	},
	{
		id: 285,
		name: 'EL MOJON',
		uta2020: '141120000000030',
		uta2010: '141120000000030',
		latitude: -30.088494983,
		longitude: -63.453583662,
		municipalityId: 143
	},
	{
		id: 286,
		name: 'EL GUANACO',
		uta2020: '141120000000026',
		uta2010: '141120000000026',
		latitude: -29.954778771,
		longitude: -63.333269786,
		municipalityId: 143
	},
	{
		id: 287,
		name: 'LA MAZA',
		uta2020: '141120000000050',
		uta2010: '141120000000050',
		latitude: -30.148834229,
		longitude: -63.717662811,
		municipalityId: 143
	},
	{
		id: 288,
		name: 'SANTA CATALINA',
		uta2020: '141120000000106',
		uta2010: '141120000000106',
		latitude: -29.899700165,
		longitude: -63.525772095,
		municipalityId: 143
	},
	{
		id: 289,
		name: 'LA PIEDRA BLANCA',
		uta2020: '141120000000054',
		uta2010: '141120000000054',
		latitude: -29.958992368,
		longitude: -63.829392382,
		municipalityId: 143
	},
	{
		id: 290,
		name: 'AGUA DE ORO',
		uta2020: '141120000000001',
		uta2010: '141120000000001',
		latitude: -29.8135599,
		longitude: -63.75524,
		municipalityId: 143
	},
	{
		id: 291,
		name: 'POZO DE MOLINA',
		uta2020: '141120000000087',
		uta2010: '141120000000087',
		latitude: -29.951206207,
		longitude: -63.025436401,
		municipalityId: 143
	},
	{
		id: 292,
		name: 'POZO DEL SIMBOL',
		uta2020: '141120000000088',
		uta2010: '141120000000088',
		latitude: -29.852395572,
		longitude: -63.086078117,
		municipalityId: 143
	},
	{
		id: 293,
		name: 'EL JORDAN',
		uta2020: '141120000000027',
		uta2010: '141120000000027',
		latitude: -29.89233017,
		longitude: -63.827648163,
		municipalityId: 143
	},
	{
		id: 294,
		name: 'LA BARRANCA',
		uta2020: '141120000000045',
		uta2010: '141120000000045',
		latitude: -29.670793014,
		longitude: -63.72388041,
		municipalityId: 143
	},
	{
		id: 295,
		name: 'POZO DE LAS OLLAS',
		uta2020: '141120000000085',
		uta2010: '141120000000085',
		latitude: -30.017289173,
		longitude: -63.053073115,
		municipalityId: 143
	},
	{
		id: 296,
		name: 'PUNTA DEL MONTE',
		uta2020: '141120000000091',
		uta2010: '141120000000091',
		latitude: -29.720791317,
		longitude: -63.582044188,
		municipalityId: 143
	},
	{
		id: 297,
		name: 'LA VICTORIA',
		uta2020: '141120000000059',
		uta2010: '141120000000059',
		latitude: -30.139223099,
		longitude: -63.438087463,
		municipalityId: 143
	},
	{
		id: 298,
		name: 'SAN MIGUEL',
		uta2020: '141120000000104',
		uta2010: '141120000000104',
		latitude: -29.787164688,
		longitude: -63.731506348,
		municipalityId: 143
	},
	{
		id: 299,
		name: 'ALTO DE FIERRO',
		uta2020: '141120000000002',
		uta2010: '141120000000002',
		latitude: -29.701099214,
		longitude: -63.614692906,
		municipalityId: 143
	},
	{
		id: 300,
		name: 'SANTA ISABEL',
		uta2020: '141120000000107',
		uta2010: '141120000000107',
		latitude: -29.773042678,
		longitude: -63.455763055,
		municipalityId: 143
	},
	{
		id: 301,
		name: 'LA PENCA',
		uta2020: '141120000000053',
		uta2010: '141120000000053',
		latitude: -30.1320698,
		longitude: -63.5176265,
		municipalityId: 143
	},
	{
		id: 302,
		name: 'SAN ANTONIO',
		uta2020: '141120000000098',
		uta2010: '141120000000098',
		latitude: -29.757294391,
		longitude: -63.39076668,
		municipalityId: 143
	},
	{
		id: 303,
		name: 'LA VICTORIA OESTE',
		uta2020: '141120000000061',
		uta2010: '141120000000061',
		latitude: -30.182365813,
		longitude: -63.484456548,
		municipalityId: 143
	},
	{
		id: 304,
		name: 'CAMPO GRANDE',
		uta2020: '141120000000010',
		uta2010: '141120000000010',
		latitude: -30.049170141,
		longitude: -63.544547132,
		municipalityId: 143
	},
	{
		id: 305,
		name: 'LA VICTORIA (E)',
		uta2020: '141120000000060',
		uta2010: '141120000000060',
		latitude: -30.135083115,
		longitude: -63.442940927,
		municipalityId: 143
	},
	{
		id: 306,
		name: '3 DE MAYO',
		uta2020: '540770308000001',
		uta2010: '540770308000001',
		latitude: -26.785012551,
		longitude: -54.901151033,
		municipalityId: 2091
	},
	{
		id: 307,
		name: 'GARUHAPE',
		uta2020: '540770308030000',
		uta2010: '540770308030000',
		latitude: -26.818682882,
		longitude: -54.957612007,
		municipalityId: 2091
	},
	{
		id: 308,
		name: 'SAN MIGUEL',
		uta2020: '540770308100000',
		uta2010: '540770308100000',
		latitude: -26.853336701,
		longitude: -54.88929241,
		municipalityId: 2091
	},
	{
		id: 309,
		name: 'PUERTO GARUHAPE',
		uta2020: '540770308000010',
		uta2010: '540770308000010',
		latitude: -26.793895721,
		longitude: -54.966495514,
		municipalityId: 2091
	},
	{
		id: 310,
		name: 'SALSACATE',
		uta2020: '140770609040000',
		uta2010: '140770609040000',
		latitude: -31.315161675,
		longitude: -65.091026059,
		municipalityId: 156
	},
	{
		id: 311,
		name: 'VILLA VISO',
		uta2020: '140770609000051',
		uta2010: '140770609000051',
		latitude: -31.357051652,
		longitude: -65.101950716,
		municipalityId: 156
	},
	{
		id: 312,
		name: 'CASA BLANCA',
		uta2020: '140770609000009',
		uta2010: '140770609000009',
		latitude: -31.373725053,
		longitude: -65.158272,
		municipalityId: 156
	},
	{
		id: 313,
		name: 'TANINGA',
		uta2020: '140770609070000',
		uta2010: '140770609070000',
		latitude: -31.345400053,
		longitude: -65.080116874,
		municipalityId: 156
	},
	{
		id: 314,
		name: 'PUEBLO VIEJO',
		uta2020: '141820000000071',
		uta2010: '141820000000071',
		latitude: -32.847225189,
		longitude: -62.834190369,
		municipalityId: 92
	},
	{
		id: 315,
		name: 'SAN EUSEBIO',
		uta2020: '141820000000073',
		uta2010: '141820000000073',
		latitude: -32.237827301,
		longitude: -62.487499237,
		municipalityId: 92
	},
	{
		id: 316,
		name: 'LAS LAGUNITAS',
		uta2020: '141820000000060',
		uta2010: '141820000000060',
		latitude: -32.724636034,
		longitude: -62.925200879,
		municipalityId: 92
	},
	{
		id: 317,
		name: 'LA TIGRA',
		uta2020: '141820000000059',
		uta2010: '141820000000059',
		latitude: -32.036872223,
		longitude: -62.468902893,
		municipalityId: 92
	},
	{
		id: 318,
		name: 'COLONIA LA VERDE',
		uta2020: '141820000000037',
		uta2010: '141820000000037',
		latitude: -32.761426847,
		longitude: -62.4990827,
		municipalityId: 92
	},
	{
		id: 319,
		name: 'COLONIA MARCOS SASTRE',
		uta2020: '141820000000038',
		uta2010: '141820000000038',
		latitude: -32.539891132,
		longitude: -62.417149197,
		municipalityId: 92
	},
	{
		id: 320,
		name: 'CAMPO LOS CORRALITOS',
		uta2020: '141820000000007',
		uta2010: '141820000000007',
		latitude: -32.9425718,
		longitude: -62.6497689,
		municipalityId: 92
	},
	{
		id: 321,
		name: 'COLONIA EL DORADO',
		uta2020: '141820000000029',
		uta2010: '141820000000029',
		latitude: -33.8033612,
		longitude: -62.8044841,
		municipalityId: 92
	},
	{
		id: 322,
		name: 'CAMPO LOS ALGARROBOS',
		uta2020: '141820000000006',
		uta2010: '141820000000006',
		latitude: -32.951595809,
		longitude: -62.50754552,
		municipalityId: 92
	},
	{
		id: 323,
		name: 'COLONIA LA CONCORDIA',
		uta2020: '141820000000033',
		uta2010: '141820000000033',
		latitude: -32.6640192,
		longitude: -62.7458186,
		municipalityId: 92
	},
	{
		id: 324,
		name: 'SAN MELITON',
		uta2020: '141820000000075',
		uta2010: '141820000000075',
		latitude: -33.551448822,
		longitude: -62.734004974,
		municipalityId: 92
	},
	{
		id: 325,
		name: 'CAYUQUEO',
		uta2020: '141820000000019',
		uta2010: '141820000000019',
		latitude: -32.8009107,
		longitude: -63.1176321,
		municipalityId: 92
	},
	{
		id: 326,
		name: 'CAMPO COSTA',
		uta2020: '141820000000002',
		uta2010: '141820000000002',
		latitude: -33.4792553,
		longitude: -62.9564065,
		municipalityId: 92
	},
	{
		id: 327,
		name: 'COLONIA LA UNION',
		uta2020: '141820000000036',
		uta2010: '141820000000036',
		latitude: -32.970558162,
		longitude: -62.868255574,
		municipalityId: 92
	},
	{
		id: 328,
		name: 'LA HERRADURA',
		uta2020: '141820000000056',
		uta2010: '141820000000056',
		latitude: -32.548580177,
		longitude: -63.119600141,
		municipalityId: 92
	},
	{
		id: 329,
		name: 'SAN SEVERO',
		uta2020: '141820000260000',
		uta2010: '141820000260000',
		latitude: -33.538325471,
		longitude: -63.047927679,
		municipalityId: 92
	},
	{
		id: 330,
		name: 'CAMPO SANTA RITA',
		uta2020: '141820000000012',
		uta2010: '141820000000012',
		latitude: -32.662101492,
		longitude: -62.450894402,
		municipalityId: 92
	},
	{
		id: 331,
		name: 'COLONIA 10 DE MAYO',
		uta2020: '141820000000021',
		uta2010: '141820000000021',
		latitude: -32.520112892,
		longitude: -62.507923349,
		municipalityId: 92
	},
	{
		id: 332,
		name: 'COLONIA EL BALQUIN',
		uta2020: '141820000000027',
		uta2010: '141820000000027',
		latitude: -33.594585,
		longitude: -62.9826062,
		municipalityId: 92
	},
	{
		id: 333,
		name: 'COLONIA EL PIQUILLIN',
		uta2020: '141820000000030',
		uta2010: '141820000000030',
		latitude: -32.783660703,
		longitude: -62.807724497,
		municipalityId: 92
	},
	{
		id: 334,
		name: 'COLONIA CORRAL DEL BAJO',
		uta2020: '141820000000024',
		uta2010: '141820000000024',
		latitude: -32.0755992,
		longitude: -62.800031,
		municipalityId: 92
	},
	{
		id: 335,
		name: 'CAMPO LAS CHACRAS',
		uta2020: '141820000000005',
		uta2010: '141820000000005',
		latitude: -32.774095601,
		longitude: -62.721423967,
		municipalityId: 92
	},
	{
		id: 336,
		name: 'CUATRO CAMINOS',
		uta2020: '141820000000044',
		uta2010: '141820000000044',
		latitude: -32.71482226,
		longitude: -62.592300765,
		municipalityId: 92
	},
	{
		id: 337,
		name: 'POTRO MUERTO',
		uta2020: '141820000000070',
		uta2010: '141820000000070',
		latitude: -32.120219367,
		longitude: -62.428029601,
		municipalityId: 92
	},
	{
		id: 338,
		name: 'EL UCLE',
		uta2020: '141820000000051',
		uta2010: '141820000000051',
		latitude: -32.106007745,
		longitude: -62.662229286,
		municipalityId: 92
	},
	{
		id: 339,
		name: 'CORRAL DEL BAJO',
		uta2020: '141820000000043',
		uta2010: '141820000000043',
		latitude: -32.073730469,
		longitude: -62.803035736,
		municipalityId: 92
	},
	{
		id: 340,
		name: 'CAMPO VIONNET',
		uta2020: '141820000000015',
		uta2010: '141820000000015',
		latitude: -32.475955474,
		longitude: -63.02852347,
		municipalityId: 92
	},
	{
		id: 341,
		name: 'COLONIA PICO CHACO',
		uta2020: '141820000000041',
		uta2010: '141820000000041',
		latitude: -32.38023581,
		longitude: -62.789546484,
		municipalityId: 92
	},
	{
		id: 342,
		name: 'RAMON J. CARCANO',
		uta2020: '141820000230000',
		uta2010: '141820000230000',
		latitude: -32.491108912,
		longitude: -63.102807514,
		municipalityId: 92
	},
	{
		id: 343,
		name: 'COLONIA LA LOLA',
		uta2020: '141820000000035',
		uta2010: '141820000000035',
		latitude: -33.730895616,
		longitude: -62.785148672,
		municipalityId: 92
	},
	{
		id: 344,
		name: 'COLONIA LA CELINA',
		uta2020: '141820000000032',
		uta2010: '141820000000032',
		latitude: -33.7998069,
		longitude: -62.9152446,
		municipalityId: 92
	},
	{
		id: 345,
		name: 'COLONIA EL DESCANSO',
		uta2020: '141820000000028',
		uta2010: '141820000000028',
		latitude: -32.188166049,
		longitude: -62.722882956,
		municipalityId: 92
	},
	{
		id: 346,
		name: 'CNIA NORTE',
		uta2020: '141820000000020',
		uta2010: '141820000000020',
		latitude: -32.5153117,
		longitude: -62.8032808,
		municipalityId: 92
	},
	{
		id: 347,
		name: 'COLONIA ESPERANZA',
		uta2020: '141820000000031',
		uta2010: '141820000000031',
		latitude: -32.6391643,
		longitude: -62.8533637,
		municipalityId: 92
	},
	{
		id: 348,
		name: 'COLONIA CORRAL DE GUARDIA',
		uta2020: '141820000000023',
		uta2010: '141820000000023',
		latitude: -32.032381317,
		longitude: -62.631689462,
		municipalityId: 92
	},
	{
		id: 349,
		name: 'CAMPO SANTA ELENA',
		uta2020: '141820000000010',
		uta2010: '141820000000010',
		latitude: -33.137123485,
		longitude: -62.959982987,
		municipalityId: 92
	},
	{
		id: 350,
		name: 'COLONIA LA LEONCITA',
		uta2020: '141820000000034',
		uta2010: '141820000000034',
		latitude: -32.118394115,
		longitude: -62.562812241,
		municipalityId: 92
	},
	{
		id: 351,
		name: 'CAMPO SAN ELIAS',
		uta2020: '141820000000009',
		uta2010: '141820000000009',
		latitude: -33.234234193,
		longitude: -62.876571583,
		municipalityId: 92
	},
	{
		id: 352,
		name: 'CAMPO LA LUISITA',
		uta2020: '141820000000004',
		uta2010: '141820000000004',
		latitude: -32.9980972,
		longitude: -62.7185441,
		municipalityId: 92
	},
	{
		id: 353,
		name: 'CAMPO LOS GALGOS',
		uta2020: '141820000000008',
		uta2010: '141820000000008',
		latitude: -33.152621585,
		longitude: -62.682291088,
		municipalityId: 92
	},
	{
		id: 354,
		name: 'CAMPO CRESPO-P/BALLESTERS',
		uta2020: '141820000000003',
		uta2010: '141820000000003',
		latitude: -32.4378502,
		longitude: -62.9397616,
		municipalityId: 92
	},
	{
		id: 355,
		name: 'CAMPO YANZI',
		uta2020: '141820000000016',
		uta2010: '141820000000016',
		latitude: -32.46431231,
		longitude: -62.742529038,
		municipalityId: 92
	},
	{
		id: 356,
		name: 'COLONIA SANTA RITA',
		uta2020: '141820000000042',
		uta2010: '141820000000042',
		latitude: -33.036563276,
		longitude: -63.019451004,
		municipalityId: 92
	},
	{
		id: 357,
		name: 'LUCA',
		uta2020: '140420322100000',
		uta2010: '140420322100000',
		latitude: -32.54019796,
		longitude: -63.476253638,
		municipalityId: 164
	},
	{
		id: 358,
		name: 'ENRIQUE CARBO',
		uta2020: '300560184030000',
		uta2010: '300560184030000',
		latitude: -33.147848356,
		longitude: -59.208940114,
		municipalityId: 1616
	},
	{
		id: 359,
		name: 'ALARCON',
		uta2020: '300560184000002',
		uta2010: '300560184000002',
		latitude: -33.154505087,
		longitude: -58.988901125,
		municipalityId: 1616
	},
	{
		id: 360,
		name: 'GENERAL RACEDO',
		uta2020: '300219115110000',
		uta2010: '300219115110000',
		latitude: -31.984016449,
		longitude: -60.408391229,
		municipalityId: 1637
	},
	{
		id: 361,
		name: 'CARCEL',
		uta2020: '380986196000024',
		uta2010: '380986196000024',
		latitude: -23.817407608,
		longitude: -65.53327179,
		municipalityId: 1166
	},
	{
		id: 362,
		name: 'PUNTA CORRAL',
		uta2020: '380986196000098',
		uta2010: '380986196000098',
		latitude: -23.717283249,
		longitude: -65.387329102,
		municipalityId: 1166
	},
	{
		id: 363,
		name: 'COIRURO',
		uta2020: '380986196000035',
		uta2010: '380986196000035',
		latitude: -23.887716293,
		longitude: -65.457740784,
		municipalityId: 1166
	},
	{
		id: 364,
		name: 'AGUA BENDITA',
		uta2020: '380986196000004',
		uta2010: '380986196000004',
		latitude: -23.832056045,
		longitude: -65.475578308,
		municipalityId: 1166
	},
	{
		id: 365,
		name: 'TUMBAYA',
		uta2020: '380986196040000',
		uta2010: '380986196040000',
		latitude: -23.85230341,
		longitude: -65.467254668,
		municipalityId: 1166
	},
	{
		id: 366,
		name: 'TUMBAYA GRANDE',
		uta2020: '380986196000128',
		uta2010: '380986196000128',
		latitude: -23.83077,
		longitude: -65.48998,
		municipalityId: 1166
	},
	{
		id: 367,
		name: 'LEONES',
		uta2020: '140630567160000',
		uta2010: '140630567160000',
		latitude: -32.658391411,
		longitude: -62.299914625,
		municipalityId: 180
	},
	{
		id: 368,
		name: 'EL PALMAR',
		uta2020: '220630189000062',
		uta2010: '220630189000062',
		latitude: -25.289866904,
		longitude: -60.686208931,
		municipalityId: 12
	},
	{
		id: 369,
		name: 'GUEMES',
		uta2020: '220630189000089',
		uta2010: '220630189000089',
		latitude: -25.77302557,
		longitude: -60.81551973,
		municipalityId: 12
	},
	{
		id: 370,
		name: 'LA ARMONIA',
		uta2020: '220630189000093',
		uta2010: '220630189000093',
		latitude: -25.18170007,
		longitude: -61.09499711,
		municipalityId: 12
	},
	{
		id: 371,
		name: 'EL QUEBRACHO',
		uta2020: '220630189000071',
		uta2010: '220630189000071',
		latitude: -25.237790917,
		longitude: -61.280372493,
		municipalityId: 12
	},
	{
		id: 372,
		name: 'LOTE 126',
		uta2020: '220630189000152',
		uta2010: '220630189000152',
		latitude: -25.67820965,
		longitude: -60.95518998,
		municipalityId: 12
	},
	{
		id: 373,
		name: 'EL DESCANSO',
		uta2020: '220630189000049',
		uta2010: '220630189000049',
		latitude: -25.640911181,
		longitude: -61.01546461,
		municipalityId: 12
	},
	{
		id: 374,
		name: 'LA GRINGA',
		uta2020: '220630189000110',
		uta2010: '220630189000110',
		latitude: -25.3091259,
		longitude: -60.987510681,
		municipalityId: 12
	},
	{
		id: 375,
		name: 'LOS CIENAGOS',
		uta2020: '220630189000143',
		uta2010: '220630189000143',
		latitude: -25.141615154,
		longitude: -61.258010943,
		municipalityId: 12
	},
	{
		id: 376,
		name: '4 DE FEBRERO',
		uta2020: '220630189000002',
		uta2010: '220630189000002',
		latitude: -25.574103686,
		longitude: -60.791869365,
		municipalityId: 12
	},
	{
		id: 377,
		name: 'LOS PEREYRAS',
		uta2020: '220630189000146',
		uta2010: '220630189000146',
		latitude: -25.47515938,
		longitude: -61.1766573,
		municipalityId: 12
	},
	{
		id: 378,
		name: 'TORRE DEL MIRADOR',
		uta2020: '220630189000248',
		uta2010: '220630189000248',
		latitude: -25.563774649,
		longitude: -61.294017692,
		municipalityId: 12
	},
	{
		id: 379,
		name: 'MONTE CASEROS',
		uta2020: '220630189000166',
		uta2010: '220630189000166',
		latitude: -25.594114857,
		longitude: -61.094311639,
		municipalityId: 12
	},
	{
		id: 380,
		name: 'POZO EL ZAPALLAR',
		uta2020: '220630189000215',
		uta2010: '220630189000215',
		latitude: -25.271381348,
		longitude: -60.853594364,
		municipalityId: 12
	},
	{
		id: 381,
		name: 'EL MOJO',
		uta2020: '220630189000057',
		uta2010: '220630189000057',
		latitude: -25.213444695,
		longitude: -60.641178364,
		municipalityId: 12
	},
	{
		id: 382,
		name: 'CRUCE PEÑALOZA',
		uta2020: '220630189000030',
		uta2010: '220630189000030',
		latitude: -25.4759368,
		longitude: -61.09373572,
		municipalityId: 12
	},
	{
		id: 383,
		name: 'LAS MARGARITAS',
		uta2020: '220630189000136',
		uta2010: '220630189000136',
		latitude: -25.67516433,
		longitude: -61.19567793,
		municipalityId: 12
	},
	{
		id: 384,
		name: 'ROSALES',
		uta2020: '220630189000227',
		uta2010: '220630189000227',
		latitude: -25.298093796,
		longitude: -61.174240112,
		municipalityId: 12
	},
	{
		id: 385,
		name: 'CENTRAL NORTE',
		uta2020: '220630189000021',
		uta2010: '220630189000021',
		latitude: -25.61122223,
		longitude: -60.9338287,
		municipalityId: 12
	},
	{
		id: 386,
		name: 'POZO DE LA PAVA',
		uta2020: '220630189000193',
		uta2010: '220630189000193',
		latitude: -25.42782402,
		longitude: -60.93699646,
		municipalityId: 12
	},
	{
		id: 387,
		name: 'LAS CUATRO BOCAS',
		uta2020: '220630189000131',
		uta2010: '220630189000131',
		latitude: -25.7529841,
		longitude: -60.87629431,
		municipalityId: 12
	},
	{
		id: 388,
		name: 'EL MILAGRO',
		uta2020: '220630189000056',
		uta2010: '220630189000056',
		latitude: -25.49876282,
		longitude: -61.02292096,
		municipalityId: 12
	},
	{
		id: 389,
		name: 'LOS PLACERES',
		uta2020: '220630189000147',
		uta2010: '220630189000147',
		latitude: -25.481537794,
		longitude: -61.282597106,
		municipalityId: 12
	},
	{
		id: 390,
		name: 'POZO DE LA MULA',
		uta2020: '220630189000192',
		uta2010: '220630189000192',
		latitude: -25.28162384,
		longitude: -61.056972504,
		municipalityId: 12
	},
	{
		id: 391,
		name: 'MANANTIALES',
		uta2020: '220630189000160',
		uta2010: '220630189000160',
		latitude: -25.149277968,
		longitude: -60.730189967,
		municipalityId: 12
	},
	{
		id: 392,
		name: 'LA ESMERALDA',
		uta2020: '220630189000101',
		uta2010: '220630189000101',
		latitude: -25.346116117,
		longitude: -60.786686769,
		municipalityId: 12
	},
	{
		id: 393,
		name: 'POZO DEL NEGRO',
		uta2020: '220630189000204',
		uta2010: '220630189000204',
		latitude: -25.210477829,
		longitude: -61.119625092,
		municipalityId: 12
	},
	{
		id: 394,
		name: 'BALBUENA',
		uta2020: '220630189000009',
		uta2010: '220630189000009',
		latitude: -25.722097369,
		longitude: -60.976436298,
		municipalityId: 12
	},
	{
		id: 395,
		name: 'MIRAFLORES',
		uta2020: '220630189070000',
		uta2010: '220630189070000',
		latitude: -25.648933497,
		longitude: -60.93004019,
		municipalityId: 12
	},
	{
		id: 396,
		name: 'EL RETIRO',
		uta2020: '220630189000074',
		uta2010: '220630189000074',
		latitude: -25.588741645,
		longitude: -60.968009238,
		municipalityId: 12
	},
	{
		id: 397,
		name: 'CAMPO LA CHINA',
		uta2020: '220630189000019',
		uta2010: '220630189000019',
		latitude: -25.477611131,
		longitude: -60.977506302,
		municipalityId: 12
	},
	{
		id: 398,
		name: 'LA MEDIA LUNA',
		uta2020: '220630189000114',
		uta2010: '220630189000114',
		latitude: -25.212692574,
		longitude: -60.86084485,
		municipalityId: 12
	},
	{
		id: 399,
		name: '1° DE MAYO',
		uta2020: '220630189000001',
		uta2010: '220630189000001',
		latitude: -25.704138218,
		longitude: -61.031502727,
		municipalityId: 12
	},
	{
		id: 400,
		name: 'PASO DE LA CRUZ',
		uta2020: '220630189000185',
		uta2010: '220630189000185',
		latitude: -25.261796,
		longitude: -61.077585,
		municipalityId: 12
	},
	{
		id: 401,
		name: 'LOTE 76',
		uta2020: '220630189000156',
		uta2010: '220630189000156',
		latitude: -25.64150311,
		longitude: -60.94504947,
		municipalityId: 12
	},
	{
		id: 402,
		name: 'SANTA VICTORIA',
		uta2020: '220630189000239',
		uta2010: '220630189000239',
		latitude: -25.496005445,
		longitude: -60.889394154,
		municipalityId: 12
	},
	{
		id: 403,
		name: 'PALO MARCADO',
		uta2020: '220630189000175',
		uta2010: '220630189000175',
		latitude: -25.404797274,
		longitude: -60.728636526,
		municipalityId: 12
	},
	{
		id: 404,
		name: 'TECHAT',
		uta2020: '220630189000245',
		uta2010: '220630189000245',
		latitude: -25.547068796,
		longitude: -60.894028391,
		municipalityId: 12
	},
	{
		id: 405,
		name: 'LOTE 71',
		uta2020: '220630189000155',
		uta2010: '220630189000155',
		latitude: -25.642583286,
		longitude: -60.904380382,
		municipalityId: 12
	},
	{
		id: 406,
		name: 'LAS PUERTAS',
		uta2020: '220630189000138',
		uta2010: '220630189000138',
		latitude: -25.566435584,
		longitude: -61.157420602,
		municipalityId: 12
	},
	{
		id: 407,
		name: 'POZO LA GRINGA',
		uta2020: '220630189000217',
		uta2010: '220630189000217',
		latitude: -25.316372823,
		longitude: -60.984442425,
		municipalityId: 12
	},
	{
		id: 408,
		name: 'EL CAÑON',
		uta2020: '220630189000041',
		uta2010: '220630189000041',
		latitude: -25.73502646,
		longitude: -60.93668274,
		municipalityId: 12
	},
	{
		id: 409,
		name: 'LAS HACHERAS',
		uta2020: '220630189000134',
		uta2010: '220630189000134',
		latitude: -25.389855618,
		longitude: -60.988590012,
		municipalityId: 12
	},
	{
		id: 410,
		name: 'LOS QUIRQUINCHOS',
		uta2020: '220630189000150',
		uta2010: '220630189000150',
		latitude: -25.696930564,
		longitude: -60.917099133,
		municipalityId: 12
	},
	{
		id: 411,
		name: 'YAPEYU',
		uta2020: '220630189000253',
		uta2010: '220630189000253',
		latitude: -25.708138208,
		longitude: -60.865919548,
		municipalityId: 12
	},
	{
		id: 412,
		name: 'LA CHEOGUE',
		uta2020: '220630189000097',
		uta2010: '220630189000097',
		latitude: -25.551770832,
		longitude: -60.842660618,
		municipalityId: 12
	},
	{
		id: 413,
		name: 'NUEVA UNION',
		uta2020: '220630189000171',
		uta2010: '220630189000171',
		latitude: -25.73468399,
		longitude: -61.011539459,
		municipalityId: 12
	},
	{
		id: 414,
		name: 'BAJADA ALTA',
		uta2020: '220630189000005',
		uta2010: '220630189000005',
		latitude: -25.38190432,
		longitude: -60.892793566,
		municipalityId: 12
	},
	{
		id: 415,
		name: 'EL ALGARROBO',
		uta2020: '220630189000036',
		uta2010: '220630189000036',
		latitude: -25.645636017,
		longitude: -61.173217677,
		municipalityId: 12
	},
	{
		id: 416,
		name: 'BAJO HONDO',
		uta2020: '220630189000006',
		uta2010: '220630189000006',
		latitude: -25.122100706,
		longitude: -61.200023375,
		municipalityId: 12
	},
	{
		id: 417,
		name: 'EL QUEBRACHO BALEADO',
		uta2020: '220630189000072',
		uta2010: '220630189000072',
		latitude: -25.355828739,
		longitude: -60.920490357,
		municipalityId: 12
	},
	{
		id: 418,
		name: 'SAN LORENZO',
		uta2020: '220630189000231',
		uta2010: '220630189000231',
		latitude: -25.69571207,
		longitude: -61.09074212,
		municipalityId: 12
	},
	{
		id: 419,
		name: 'LOS ROSALES',
		uta2020: '220630189000151',
		uta2010: '220630189000151',
		latitude: -25.31201469,
		longitude: -61.17818046,
		municipalityId: 12
	},
	{
		id: 420,
		name: 'LAS CHACRAS',
		uta2020: '140210098000065',
		uta2010: '140210098000065',
		latitude: -31.291504473,
		longitude: -64.116614974,
		municipalityId: 202
	},
	{
		id: 421,
		name: 'EL VERGEL',
		uta2020: '140210098000042',
		uta2010: '140210098000042',
		latitude: -31.25832604,
		longitude: -64.074634547,
		municipalityId: 202
	},
	{
		id: 422,
		name: 'ESTACION COLONIA TIROLESA',
		uta2020: '140210098120000',
		uta2010: '140210098120000',
		latitude: -31.27355505,
		longitude: -64.015054573,
		municipalityId: 202
	},
	{
		id: 423,
		name: 'EL QUEBRACHAL',
		uta2020: '140210098000036',
		uta2010: '140210098000036',
		latitude: -31.321594188,
		longitude: -64.060362899,
		municipalityId: 202
	},
	{
		id: 424,
		name: 'COLONIA LOS ALGARROBOS',
		uta2020: '140210098000021',
		uta2010: '140210098000021',
		latitude: -31.256244809,
		longitude: -63.953403942,
		municipalityId: 202
	},
	{
		id: 425,
		name: 'LA CORINA',
		uta2020: '140210098000053',
		uta2010: '140210098000053',
		latitude: -31.297188,
		longitude: -64.1435174,
		municipalityId: 202
	},
	{
		id: 426,
		name: 'COLONIA RIO CHICO',
		uta2020: '140210098000023',
		uta2010: '140210098000023',
		latitude: -31.272163391,
		longitude: -64.026573181,
		municipalityId: 202
	},
	{
		id: 427,
		name: 'COLONIA TIROLESA',
		uta2020: '140210098060000',
		uta2010: '140210098060000',
		latitude: -31.235785928,
		longitude: -64.067254101,
		municipalityId: 202
	},
	{
		id: 428,
		name: 'SANTA ELENA',
		uta2020: '140210098260000',
		uta2010: '140210098260000',
		latitude: -31.259305801,
		longitude: -64.075318964,
		municipalityId: 202
	},
	{
		id: 429,
		name: 'LA PUERTA',
		uta2020: '140210098170000',
		uta2010: '140210098170000',
		latitude: -31.14193006,
		longitude: -64.040218817,
		municipalityId: 202
	},
	{
		id: 430,
		name: 'LAS AVISPAS',
		uta2020: '820913589160000',
		uta2010: '820913589160000',
		latitude: -29.895312796,
		longitude: -61.291199245,
		municipalityId: 832
	},
	{
		id: 431,
		name: 'LABORDEBOY',
		uta2020: '820422665150000',
		uta2010: '820422665150000',
		latitude: -33.719652745,
		longitude: -61.314920817,
		municipalityId: 899
	},
	{
		id: 432,
		name: 'GENERAL GELLY',
		uta2020: '820282448090000',
		uta2010: '820282448090000',
		latitude: -33.601843491,
		longitude: -60.598938352,
		municipalityId: 719
	},
	{
		id: 433,
		name: 'CAMPO FONDATO',
		uta2020: '820282448000002',
		uta2010: '820282448000002',
		latitude: -33.611016425,
		longitude: -60.525991594,
		municipalityId: 719
	},
	{
		id: 434,
		name: 'CAMPO GHIANO',
		uta2020: '821260308000014',
		uta2010: '821260308000014',
		latitude: -32.2424536,
		longitude: -61.6430165,
		municipalityId: 930
	},
	{
		id: 435,
		name: 'CAMPO ULLA',
		uta2020: '821260308000025',
		uta2010: '821260308000025',
		latitude: -32.263337897,
		longitude: -61.75813468,
		municipalityId: 930
	},
	{
		id: 436,
		name: 'EL TREBOL',
		uta2020: '821260308070000',
		uta2010: '821260308070000',
		latitude: -32.203024246,
		longitude: -61.702894491,
		municipalityId: 930
	},
	{
		id: 437,
		name: 'CAMPO RIBERI',
		uta2020: '821260308000023',
		uta2010: '821260308000023',
		latitude: -32.23693962,
		longitude: -61.58475561,
		municipalityId: 930
	},
	{
		id: 438,
		name: 'POTRERILLOS',
		uta2020: '660840203000014',
		uta2010: '660840203000014',
		latitude: -26.070972443,
		longitude: -65.475334167,
		municipalityId: 1831
	},
	{
		id: 439,
		name: 'EL JARDIN',
		uta2020: '660840203010000',
		uta2010: '660840203010000',
		latitude: -26.09388342,
		longitude: -65.413841562,
		municipalityId: 1831
	},
	{
		id: 440,
		name: 'LOZADA',
		uta2020: '141471386200000',
		uta2010: '141471386200000',
		latitude: -31.648454532,
		longitude: -64.089979611,
		municipalityId: 223
	},
	{
		id: 441,
		name: 'SALSIPUEDES',
		uta2020: '140210161250002',
		uta2010: '140210161250002',
		latitude: -31.134926931,
		longitude: -64.287333107,
		municipalityId: 203
	},
	{
		id: 442,
		name: 'LA ESTANCITA',
		uta2020: '140210161000056',
		uta2010: '140210161000056',
		latitude: -31.113978708,
		longitude: -64.365991909,
		municipalityId: 203
	},
	{
		id: 443,
		name: 'EL PUEBLITO',
		uta2020: '140210161250001',
		uta2010: '140210161250001',
		latitude: -31.106556412,
		longitude: -64.297194511,
		municipalityId: 203
	},
	{
		id: 444,
		name: 'LA JAULA',
		uta2020: '500910091000093',
		uta2010: '500910091000093',
		latitude: -34.66436573,
		longitude: -69.3184,
		municipalityId: 1497
	},
	{
		id: 445,
		name: 'CAPIZ',
		uta2020: '500910091000023',
		uta2010: '500910091000023',
		latitude: -33.670943614,
		longitude: -68.98052274,
		municipalityId: 1497
	},
	{
		id: 446,
		name: 'SAN CARLOS',
		uta2020: '500910091060000',
		uta2010: '500910091060000',
		latitude: -33.774449456,
		longitude: -69.049090918,
		municipalityId: 1497
	},
	{
		id: 447,
		name: 'PAREDITAS',
		uta2020: '500910091050000',
		uta2010: '500910091050000',
		latitude: -33.945256304,
		longitude: -69.082485903,
		municipalityId: 1497
	},
	{
		id: 448,
		name: 'CHILECITO',
		uta2020: '500910091020000',
		uta2010: '500910091020000',
		latitude: -33.893402097,
		longitude: -69.080463358,
		municipalityId: 1497
	},
	{
		id: 449,
		name: 'EL PARRAL',
		uta2020: '500910091000075',
		uta2010: '500910091000075',
		latitude: -34.011520386,
		longitude: -69.14201355,
		municipalityId: 1497
	},
	{
		id: 450,
		name: 'PIEDRAS BLANCAS',
		uta2020: '500910091000142',
		uta2010: '500910091000142',
		latitude: -33.97281823,
		longitude: -69.10149772,
		municipalityId: 1497
	},
	{
		id: 451,
		name: 'TRES ESQUINAS',
		uta2020: '500910091000188',
		uta2010: '500910091000188',
		latitude: -33.82490815,
		longitude: -69.05606379,
		municipalityId: 1497
	},
	{
		id: 452,
		name: 'LA CONSULTA',
		uta2020: '500910091040000',
		uta2010: '500910091040000',
		latitude: -33.738675738,
		longitude: -69.128125565,
		municipalityId: 1497
	},
	{
		id: 453,
		name: 'BARRIO EL CEPILLO',
		uta2020: '500910091010000',
		uta2010: '500910091010000',
		latitude: -33.838653381,
		longitude: -69.130349722,
		municipalityId: 1497
	},
	{
		id: 454,
		name: 'PASO DE LAS CARRETAS',
		uta2020: '500910091000137',
		uta2010: '500910091000137',
		latitude: -34.016553213,
		longitude: -69.032185491,
		municipalityId: 1497
	},
	{
		id: 455,
		name: 'EUGENIO BUSTOS',
		uta2020: '500910091030000',
		uta2010: '500910091030000',
		latitude: -33.785022449,
		longitude: -69.072904526,
		municipalityId: 1497
	},
	{
		id: 456,
		name: 'EL CAPACHO',
		uta2020: '500910091000070',
		uta2010: '500910091000070',
		latitude: -33.66641784,
		longitude: -69.04254797,
		municipalityId: 1497
	},
	{
		id: 457,
		name: 'BARRIO CARRASCO',
		uta2020: '500910091005000',
		uta2010: '500910091005000',
		latitude: -33.832106613,
		longitude: -69.049003207,
		municipalityId: 1497
	},
	{
		id: 458,
		name: 'LOS ALAMITOS',
		uta2020: '500910091000112',
		uta2010: '500910091000112',
		latitude: -34.059944153,
		longitude: -69.118385315,
		municipalityId: 1497
	},
	{
		id: 459,
		name: 'VILLA EL CHACON',
		uta2020: '500910091000192',
		uta2010: '500910091000192',
		latitude: -33.736912,
		longitude: -69.07205059,
		municipalityId: 1497
	},
	{
		id: 460,
		name: 'CAMPAMENTO VILLEGAS',
		uta2020: '260420000000008',
		uta2010: '260420000000008',
		latitude: -43.483531952,
		longitude: -66.1457901,
		municipalityId: 538
	},
	{
		id: 461,
		name: 'SANTA TERESA',
		uta2020: '820282518190000',
		uta2010: '820282518190000',
		latitude: -33.438547162,
		longitude: -60.791154277,
		municipalityId: 720
	},
	{
		id: 462,
		name: 'FRANCISCO PAZ',
		uta2020: '820282518000013',
		uta2010: '820282518000013',
		latitude: -33.418814374,
		longitude: -60.866668094,
		municipalityId: 720
	},
	{
		id: 463,
		name: 'CHACHARRAMENDI',
		uta2020: '421545049020000',
		uta2010: '421545049020000',
		latitude: -37.331814776,
		longitude: -65.650772795,
		municipalityId: 1921
	},
	{
		id: 464,
		name: 'VALLE DAZA',
		uta2020: '421545049000062',
		uta2010: '421545049000062',
		latitude: -37.069911957,
		longitude: -65.424552917,
		municipalityId: 1921
	},
	{
		id: 465,
		name: 'BARRIO CHIVILCOY',
		uta2020: '500980098030000',
		uta2010: '500980098030000',
		latitude: -33.041146736,
		longitude: -68.354152737,
		municipalityId: 1498
	},
	{
		id: 466,
		name: 'EL DIVISADERO',
		uta2020: '500980098000016',
		uta2010: '500980098000016',
		latitude: -32.868529915,
		longitude: -68.32065226,
		municipalityId: 1498
	},
	{
		id: 467,
		name: 'BUEN ORDEN',
		uta2020: '500980098000012',
		uta2010: '500980098000012',
		latitude: -33.096786738,
		longitude: -68.430821201,
		municipalityId: 1498
	},
	{
		id: 468,
		name: 'MONTECASEROS',
		uta2020: '500980098080000',
		uta2010: '500980098080000',
		latitude: -33.010996635,
		longitude: -68.393680127,
		municipalityId: 1498
	},
	{
		id: 469,
		name: 'BARRIO LA ESTACION',
		uta2020: '500980098045000',
		uta2010: '500980098045000',
		latitude: -33.155290161,
		longitude: -68.354362164,
		municipalityId: 1498
	},
	{
		id: 470,
		name: 'CHAPANAY',
		uta2020: '500980098060000',
		uta2010: '500980098060000',
		latitude: -32.98011773,
		longitude: -68.476525384,
		municipalityId: 1498
	},
	{
		id: 471,
		name: 'BARRIO NTRA. SRA. DE FATIMA',
		uta2020: '500980098055000',
		uta2010: '500980098055000',
		latitude: -33.130971482,
		longitude: -68.351277983,
		municipalityId: 1498
	},
	{
		id: 472,
		name: 'TRES PORTEÑAS',
		uta2020: '500980098110000',
		uta2010: '500980098110000',
		latitude: -32.899480178,
		longitude: -68.399096289,
		municipalityId: 1498
	},
	{
		id: 473,
		name: 'CHIVILCOY',
		uta2020: '500980098070000',
		uta2010: '500980098070000',
		latitude: -33.038335583,
		longitude: -68.45940294,
		municipalityId: 1498
	},
	{
		id: 474,
		name: 'BARRIO LOS CHARABONES',
		uta2020: '500980098050000',
		uta2010: '500980098050000',
		latitude: -32.978511568,
		longitude: -68.305101824,
		municipalityId: 1498
	},
	{
		id: 475,
		name: 'ALTO VERDE',
		uta2020: '500980098020000',
		uta2010: '500980098020000',
		latitude: -33.119503739,
		longitude: -68.418021896,
		municipalityId: 1498
	},
	{
		id: 476,
		name: 'CIUDAD DE SAN MARTIN',
		uta2020: '500980098100002',
		uta2010: '500980098100002',
		latitude: -33.073217803,
		longitude: -68.460512551,
		municipalityId: 1498
	},
	{
		id: 477,
		name: 'EL RAMBLON',
		uta2020: '500980098077000',
		uta2010: '500980098077000',
		latitude: -33.161770974,
		longitude: -68.295484426,
		municipalityId: 1498
	},
	{
		id: 478,
		name: 'BARRIO EMANUEL',
		uta2020: '500980098040000',
		uta2010: '500980098040000',
		latitude: -32.846855596,
		longitude: -68.410019923,
		municipalityId: 1498
	},
	{
		id: 479,
		name: 'VILLA CENTENARIO',
		uta2020: '500980098000047',
		uta2010: '500980098000047',
		latitude: -33.085887909,
		longitude: -68.448974609,
		municipalityId: 1498
	},
	{
		id: 480,
		name: 'EL ESPINO',
		uta2020: '500980098073000',
		uta2010: '500980098073000',
		latitude: -33.077333062,
		longitude: -68.39828382,
		municipalityId: 1498
	},
	{
		id: 481,
		name: 'PALMIRA',
		uta2020: '500980098100001',
		uta2010: '500980098100001',
		latitude: -33.049993282,
		longitude: -68.549089678,
		municipalityId: 1498
	},
	{
		id: 482,
		name: 'NUEVA CALIFORNIA',
		uta2020: '500980098090000',
		uta2010: '500980098090000',
		latitude: -32.74506061,
		longitude: -68.335450804,
		municipalityId: 1498
	},
	{
		id: 483,
		name: 'TRES ESQUINAS',
		uta2020: '500980098000045',
		uta2010: '500980098000045',
		latitude: -33.020016735,
		longitude: -68.39828469,
		municipalityId: 1498
	},
	{
		id: 484,
		name: 'ALTO SALVADOR',
		uta2020: '500980098000002',
		uta2010: '500980098000002',
		latitude: -33.035971682,
		longitude: -68.47084072,
		municipalityId: 1498
	},
	{
		id: 485,
		name: 'COLONIA LAMBARE',
		uta2020: '500980098000015',
		uta2010: '500980098000015',
		latitude: -33.053769055,
		longitude: -68.277002899,
		municipalityId: 1498
	},
	{
		id: 486,
		name: 'EL RINCON',
		uta2020: '260140014000018',
		uta2010: '260140014000018',
		latitude: -42.518827788,
		longitude: -71.438412841,
		municipalityId: 542
	},
	{
		id: 487,
		name: 'EL BLANCO',
		uta2020: '260140014000011',
		uta2010: '260140014000011',
		latitude: -42.46413206,
		longitude: -71.44447184,
		municipalityId: 542
	},
	{
		id: 488,
		name: 'EL CAJON',
		uta2020: '260140014000012',
		uta2010: '260140014000012',
		latitude: -42.467824552,
		longitude: -71.357360187,
		municipalityId: 542
	},
	{
		id: 489,
		name: 'CHOLILA',
		uta2020: '260140014020000',
		uta2010: '260140014020000',
		latitude: -42.510531365,
		longitude: -71.435154829,
		municipalityId: 542
	},
	{
		id: 490,
		name: 'VILLA LAGO RIVADAVIA',
		uta2020: '260140014000034',
		uta2010: '260140014000034',
		latitude: -42.56195994,
		longitude: -71.59802269,
		municipalityId: 542
	},
	{
		id: 491,
		name: 'LA PUERTA',
		uta2020: '141050910130000',
		uta2010: '141050910130000',
		latitude: -30.892605116,
		longitude: -63.253271201,
		municipalityId: 248
	},
	{
		id: 492,
		name: 'PINTOS',
		uta2020: '140910693000077',
		uta2010: '140910693000077',
		latitude: -30.956590882,
		longitude: -64.611907399,
		municipalityId: 274
	},
	{
		id: 493,
		name: 'EL ROSARIO',
		uta2020: '140910693000040',
		uta2010: '140910693000040',
		latitude: -30.992074966,
		longitude: -64.447227478,
		municipalityId: 274
	},
	{
		id: 494,
		name: 'LA CUMBRE',
		uta2020: '140910693110000',
		uta2010: '140910693110000',
		latitude: -30.979246152,
		longitude: -64.490908714,
		municipalityId: 274
	},
	{
		id: 495,
		name: 'VILLA TERCERA',
		uta2020: '900148140100003',
		uta2010: '900148140100003',
		latitude: -26.891469273,
		longitude: -65.013182212,
		municipalityId: 2168
	},
	{
		id: 496,
		name: 'EX INGENIO LOS RALOS',
		uta2020: '900148140100001',
		uta2010: '900148140100001',
		latitude: -26.877099845,
		longitude: -64.974898751,
		municipalityId: 2168
	},
	{
		id: 497,
		name: 'LAS MERCEDES',
		uta2020: '900148140000169',
		uta2010: '900148140000169',
		latitude: -26.910024643,
		longitude: -64.998146057,
		municipalityId: 2168
	},
	{
		id: 498,
		name: 'VILLA RECASTE',
		uta2020: '900148140100002',
		uta2010: '900148140100002',
		latitude: -26.886808405,
		longitude: -65.007435603,
		municipalityId: 2168
	},
	{
		id: 499,
		name: 'CAMPO LA FLOR',
		uta2020: '900148140000018',
		uta2010: '900148140000018',
		latitude: -26.95146,
		longitude: -65.01144,
		municipalityId: 2168
	},
	{
		id: 500,
		name: 'RUTA 5 KM 132',
		uta2020: '067840784000012',
		uta2010: '067840784000012',
		latitude: -34.802573066,
		longitude: -59.735773749,
		municipalityId: 591
	},
	{
		id: 501,
		name: 'SUIPACHA',
		uta2020: '067840784020000',
		uta2010: '067840784020000',
		latitude: -34.771261784,
		longitude: -59.687918182,
		municipalityId: 591
	},
	{
		id: 502,
		name: 'GENERAL RIVAS',
		uta2020: '067840784010000',
		uta2010: '067840784010000',
		latitude: -34.610037068,
		longitude: -59.750423421,
		municipalityId: 591
	},
	{
		id: 503,
		name: 'LOS CARDALES',
		uta2020: '067840784000011',
		uta2010: '067840784000011',
		latitude: -34.8524384,
		longitude: -59.727194,
		municipalityId: 591
	},
	{
		id: 504,
		name: 'CUARTEL VIII',
		uta2020: '067840784000005',
		uta2010: '067840784000005',
		latitude: -34.782941448,
		longitude: -59.556606682,
		municipalityId: 591
	},
	{
		id: 505,
		name: 'ESTACION LA NEGRA',
		uta2020: '067840784000006',
		uta2010: '067840784000006',
		latitude: -34.6532056,
		longitude: -59.8279581,
		municipalityId: 591
	},
	{
		id: 506,
		name: 'LA DULCE',
		uta2020: '067840784000008',
		uta2010: '067840784000008',
		latitude: -34.896172884,
		longitude: -59.618020061,
		municipalityId: 591
	},
	{
		id: 507,
		name: 'CUARTEL IX',
		uta2020: '067840784000004',
		uta2010: '067840784000004',
		latitude: -34.8439555,
		longitude: -59.5955827,
		municipalityId: 591
	},
	{
		id: 508,
		name: 'CUARTEL IV',
		uta2020: '067840784000003',
		uta2010: '067840784000003',
		latitude: -34.7224296,
		longitude: -59.7512909,
		municipalityId: 591
	},
	{
		id: 509,
		name: 'FORTIN ARENALES',
		uta2020: '820492826000058',
		uta2010: '820492826000058',
		latitude: -28.8541597,
		longitude: -59.699156,
		municipalityId: 947
	},
	{
		id: 510,
		name: 'CAMPO BONAZOLA',
		uta2020: '820492826000005',
		uta2010: '820492826000005',
		latitude: -28.796693479,
		longitude: -59.691840854,
		municipalityId: 947
	},
	{
		id: 511,
		name: 'LAS TAPERITAS',
		uta2020: '820492826000097',
		uta2010: '820492826000097',
		latitude: -28.8612678,
		longitude: -59.7337052,
		municipalityId: 947
	},
	{
		id: 512,
		name: 'LANTERI',
		uta2020: '820492826110000',
		uta2010: '820492826110000',
		latitude: -28.842970621,
		longitude: -59.637928772,
		municipalityId: 947
	},
	{
		id: 513,
		name: 'CAMPO SIETE PROVINCIAS',
		uta2020: '820492826000023',
		uta2010: '820492826000023',
		latitude: -28.888199101,
		longitude: -59.766199716,
		municipalityId: 947
	},
	{
		id: 514,
		name: 'FLOR DE ORO',
		uta2020: '820492826000056',
		uta2010: '820492826000056',
		latitude: -28.92052269,
		longitude: -59.657196045,
		municipalityId: 947
	},
	{
		id: 515,
		name: 'LA BRITANICA',
		uta2020: '820492826000077',
		uta2010: '820492826000077',
		latitude: -28.843116269,
		longitude: -59.566355827,
		municipalityId: 947
	},
	{
		id: 516,
		name: 'DIVISADERO',
		uta2020: '660210056000018',
		uta2010: '660210056000018',
		latitude: -26.10228924,
		longitude: -66.015506705,
		municipalityId: 1834
	},
	{
		id: 517,
		name: 'YACOCHUYA',
		uta2020: '660210056000098',
		uta2010: '660210056000098',
		latitude: -26.042573353,
		longitude: -66.018255919,
		municipalityId: 1834
	},
	{
		id: 518,
		name: 'EL PASO',
		uta2020: '660210056000031',
		uta2010: '660210056000031',
		latitude: -25.989030838,
		longitude: -65.783988953,
		municipalityId: 1834
	},
	{
		id: 519,
		name: 'LAS CONCHAS',
		uta2020: '660210056000065',
		uta2010: '660210056000065',
		latitude: -25.99422315,
		longitude: -65.82933223,
		municipalityId: 1834
	},
	{
		id: 520,
		name: 'CAFAYATE',
		uta2020: '660210056010000',
		uta2010: '660210056010000',
		latitude: -26.076538436,
		longitude: -65.986289732,
		municipalityId: 1834
	},
	{
		id: 521,
		name: 'SANTA BARBARA',
		uta2020: '660210056000095',
		uta2010: '660210056000095',
		latitude: -25.928335652,
		longitude: -65.71896432,
		municipalityId: 1834
	},
	{
		id: 522,
		name: 'TOLOMBOM',
		uta2020: '660210056020000',
		uta2010: '660210056020000',
		latitude: -26.202957468,
		longitude: -65.946795771,
		municipalityId: 1834
	},
	{
		id: 523,
		name: 'OJEDA',
		uta2020: '421330021070000',
		uta2010: '421330021070000',
		latitude: -35.306827769,
		longitude: -64.005472555,
		municipalityId: 1927
	},
	{
		id: 524,
		name: 'ALTA ITALIA',
		uta2020: '421330021020000',
		uta2010: '421330021020000',
		latitude: -35.333859555,
		longitude: -64.118240536,
		municipalityId: 1927
	},
	{
		id: 525,
		name: 'CAMPO GALLO',
		uta2020: '860140014010000',
		uta2010: '860140014010000',
		latitude: -26.58141906,
		longitude: -62.826200321,
		municipalityId: 1319
	},
	{
		id: 526,
		name: 'CAITA TORO',
		uta2020: '620840000000007',
		uta2010: '620840000000007',
		latitude: -40.286151886,
		longitude: -66.82636261,
		municipalityId: 1234
	},
	{
		id: 527,
		name: 'CHANQUIN',
		uta2020: '620840000000011',
		uta2010: '620840000000011',
		latitude: -40.725391388,
		longitude: -66.314201355,
		municipalityId: 1234
	},
	{
		id: 528,
		name: 'SAN ANTONIO',
		uta2020: '340140028000120',
		uta2010: '340140028000120',
		latitude: -26.167814399,
		longitude: -58.210542984,
		municipalityId: 2280
	},
	{
		id: 529,
		name: 'ISLA OCA',
		uta2020: '340140028000060',
		uta2010: '340140028000060',
		latitude: -26.214321329,
		longitude: -58.196192898,
		municipalityId: 2280
	},
	{
		id: 530,
		name: 'COLONIA FORMOSA',
		uta2020: '340140028000019',
		uta2010: '340140028000019',
		latitude: -26.175888062,
		longitude: -58.231647491,
		municipalityId: 2280
	},
	{
		id: 531,
		name: 'LA COLONIA',
		uta2020: '340140028000068',
		uta2010: '340140028000068',
		latitude: -26.157927217,
		longitude: -58.189651129,
		municipalityId: 2280
	},
	{
		id: 532,
		name: 'FORMOSA',
		uta2020: '340140028020000',
		uta2010: '340140028020000',
		latitude: -26.182822306,
		longitude: -58.173393055,
		municipalityId: 2280
	},
	{
		id: 533,
		name: 'GARRIDO',
		uta2020: '064760476000011',
		uta2010: '064760476000011',
		latitude: -37.841876612,
		longitude: -58.755234671,
		municipalityId: 592
	},
	{
		id: 534,
		name: 'LAVALLE',
		uta2020: '064760476000033',
		uta2010: '064760476000033',
		latitude: -38.1041853,
		longitude: -58.9135956,
		municipalityId: 592
	},
	{
		id: 535,
		name: 'EL EDEN',
		uta2020: '064760476000005',
		uta2010: '064760476000005',
		latitude: -38.067905427,
		longitude: -58.402553577,
		municipalityId: 592
	},
	{
		id: 536,
		name: 'LA LOMA',
		uta2020: '064760476000023',
		uta2010: '064760476000023',
		latitude: -37.9713408,
		longitude: -58.5655521,
		municipalityId: 592
	},
	{
		id: 537,
		name: 'PIERES',
		uta2020: '064760476040000',
		uta2010: '064760476040000',
		latitude: -38.396230618,
		longitude: -58.670580007,
		municipalityId: 592
	},
	{
		id: 538,
		name: 'EL MORO',
		uta2020: '064760476000008',
		uta2010: '064760476000008',
		latitude: -38.109558931,
		longitude: -58.574535909,
		municipalityId: 592
	},
	{
		id: 539,
		name: 'LA GUITARRA',
		uta2020: '064760476000020',
		uta2010: '064760476000020',
		latitude: -37.851345063,
		longitude: -59.007972726,
		municipalityId: 592
	},
	{
		id: 540,
		name: 'NAPALEOFU',
		uta2020: '064760476000038',
		uta2010: '064760476000038',
		latitude: -37.626755834,
		longitude: -58.749926268,
		municipalityId: 592
	},
	{
		id: 541,
		name: 'LA ALIANZA',
		uta2020: '064760476000014',
		uta2010: '064760476000014',
		latitude: -38.277751924,
		longitude: -58.566612259,
		municipalityId: 592
	},
	{
		id: 542,
		name: 'SANTA MARIA',
		uta2020: '064760476000044',
		uta2010: '064760476000044',
		latitude: -38.2341558,
		longitude: -58.5681713,
		municipalityId: 592
	},
	{
		id: 543,
		name: 'EL PAMPERO',
		uta2020: '064760476000009',
		uta2010: '064760476000009',
		latitude: -37.9636901,
		longitude: -58.6886606,
		municipalityId: 592
	},
	{
		id: 544,
		name: 'PUERTA DEL DIABLO',
		uta2020: '064760476000041',
		uta2010: '064760476000041',
		latitude: -37.8398293,
		longitude: -58.5715713,
		municipalityId: 592
	},
	{
		id: 545,
		name: 'LA FLORESTA',
		uta2020: '064760476000018',
		uta2010: '064760476000018',
		latitude: -38.1713501,
		longitude: -58.4334892,
		municipalityId: 592
	},
	{
		id: 546,
		name: 'ARENAS VERDES',
		uta2020: '064760476010000',
		uta2010: '064760476010000',
		latitude: -38.546378239,
		longitude: -58.557322113,
		municipalityId: 592
	},
	{
		id: 547,
		name: 'LA MALACARA',
		uta2020: '064760476000024',
		uta2010: '064760476000024',
		latitude: -38.2403704,
		longitude: -58.4298848,
		municipalityId: 592
	},
	{
		id: 548,
		name: 'SAN PASCUAL',
		uta2020: '064760476000043',
		uta2010: '064760476000043',
		latitude: -38.4257932,
		longitude: -58.4589128,
		municipalityId: 592
	},
	{
		id: 549,
		name: 'DOS NACIONES',
		uta2020: '064760476000003',
		uta2010: '064760476000003',
		latitude: -37.7714343,
		longitude: -58.6447231,
		municipalityId: 592
	},
	{
		id: 550,
		name: 'SAN MANUEL',
		uta2020: '064760476050000',
		uta2010: '064760476050000',
		latitude: -37.789282901,
		longitude: -58.848647671,
		municipalityId: 592
	},
	{
		id: 551,
		name: 'LA PROVIDENCIA',
		uta2020: '064760476000028',
		uta2010: '064760476000028',
		latitude: -37.94847107,
		longitude: -58.925014505,
		municipalityId: 592
	},
	{
		id: 552,
		name: 'LAS TOSCAS',
		uta2020: '064760476000032',
		uta2010: '064760476000032',
		latitude: -38.3291054,
		longitude: -58.3463982,
		municipalityId: 592
	},
	{
		id: 553,
		name: 'LAS NUTRIAS',
		uta2020: '064760476000031',
		uta2010: '064760476000031',
		latitude: -38.0791707,
		longitude: -58.4533151,
		municipalityId: 592
	},
	{
		id: 554,
		name: 'LAHORE',
		uta2020: '064760476000030',
		uta2010: '064760476000030',
		latitude: -38.0559666,
		longitude: -58.9705728,
		municipalityId: 592
	},
	{
		id: 555,
		name: 'TOME Y TRAIGA',
		uta2020: '064760476000045',
		uta2010: '064760476000045',
		latitude: -38.1158516,
		longitude: -58.8521239,
		municipalityId: 592
	},
	{
		id: 556,
		name: 'LOBERIA',
		uta2020: '064760476030000',
		uta2010: '064760476030000',
		latitude: -38.165273387,
		longitude: -58.782230332,
		municipalityId: 592
	},
	{
		id: 557,
		name: 'EL LENGUARAZ',
		uta2020: '064760476000006',
		uta2010: '064760476000006',
		latitude: -38.067058507,
		longitude: -58.858409568,
		municipalityId: 592
	},
	{
		id: 558,
		name: 'LA BODEGA',
		uta2020: '064760476000015',
		uta2010: '064760476000015',
		latitude: -37.741172791,
		longitude: -58.939025879,
		municipalityId: 592
	},
	{
		id: 559,
		name: 'TAMANGUEYU',
		uta2020: '064760476060000',
		uta2010: '064760476060000',
		latitude: -38.201011243,
		longitude: -58.737314396,
		municipalityId: 592
	},
	{
		id: 560,
		name: 'LICENCIADO MATIENZO',
		uta2020: '064760476020000',
		uta2010: '064760476020000',
		latitude: -37.909792712,
		longitude: -58.912096594,
		municipalityId: 592
	},
	{
		id: 561,
		name: 'SAN ANTONIO',
		uta2020: '064760476000042',
		uta2010: '064760476000042',
		latitude: -37.9550232,
		longitude: -59.0866501,
		municipalityId: 592
	},
	{
		id: 562,
		name: 'MOROMAR',
		uta2020: '064760476000037',
		uta2010: '064760476000037',
		latitude: -38.4179912,
		longitude: -58.3813524,
		municipalityId: 592
	},
	{
		id: 563,
		name: 'ALTO EL BOLSON',
		uta2020: '100350119000004',
		uta2010: '100350119000004',
		latitude: -26.94426,
		longitude: -66.73487,
		municipalityId: 1884
	},
	{
		id: 564,
		name: 'LAS CUEVAS',
		uta2020: '100350119000067',
		uta2010: '100350119000067',
		latitude: -27.0183,
		longitude: -66.66805,
		municipalityId: 1884
	},
	{
		id: 565,
		name: 'CORRAL BLANCO',
		uta2020: '100350119000020',
		uta2010: '100350119000020',
		latitude: -26.49624358,
		longitude: -66.91953963,
		municipalityId: 1884
	},
	{
		id: 566,
		name: 'LAGUNA BLANCA',
		uta2020: '100350119000062',
		uta2010: '100350119000062',
		latitude: -26.59043061,
		longitude: -66.930476,
		municipalityId: 1884
	},
	{
		id: 567,
		name: 'BARRANCA LARGA',
		uta2020: '100350119010000',
		uta2010: '100350119010000',
		latitude: -26.93667259,
		longitude: -66.747373673,
		municipalityId: 1884
	},
	{
		id: 568,
		name: 'VILLA VIL',
		uta2020: '100350119150000',
		uta2010: '100350119150000',
		latitude: -27.071080675,
		longitude: -66.830769697,
		municipalityId: 1884
	},
	{
		id: 569,
		name: 'SAN IGNACIO (LOTEO VELEZ CRESPO)',
		uta2020: '140070035210003',
		uta2010: '140070035210003',
		latitude: -32.099451267,
		longitude: -64.533759176,
		municipalityId: 119
	},
	{
		id: 570,
		name: 'SANTA MONICA',
		uta2020: '140070035210001',
		uta2010: '140070035210001',
		latitude: -32.066595144,
		longitude: -64.579101856,
		municipalityId: 119
	},
	{
		id: 571,
		name: 'SANTA ROSA DE CALAMUCHITA',
		uta2020: '140070035210002',
		uta2010: '140070035210002',
		latitude: -32.073157375,
		longitude: -64.544732376,
		municipalityId: 119
	},
	{
		id: 572,
		name: 'ARROYO SECO',
		uta2020: '140070035000004',
		uta2010: '140070035000004',
		latitude: -32.092862143,
		longitude: -64.563878452,
		municipalityId: 119
	},
	{
		id: 573,
		name: 'CAMPANA MAHUIDA',
		uta2020: '620845147000008',
		uta2010: '620845147000008',
		latitude: -41.579502106,
		longitude: -66.476715088,
		municipalityId: 1235
	},
	{
		id: 574,
		name: 'ARROYO LOS BERROS',
		uta2020: '620845147020000',
		uta2010: '620845147020000',
		latitude: -41.437253642,
		longitude: -66.095077317,
		municipalityId: 1235
	},
	{
		id: 575,
		name: 'LAS HERAS',
		uta2020: '780140028060000',
		uta2010: '780140028060000',
		latitude: -46.542455379,
		longitude: -68.934177323,
		municipalityId: 1520
	},
	{
		id: 576,
		name: 'COLONIA LA SARITA',
		uta2020: '301139940000025',
		uta2010: '301139940000025',
		latitude: -31.652869773,
		longitude: -58.972338706,
		municipalityId: 1654
	},
	{
		id: 577,
		name: 'RINCON LUCAS SUD',
		uta2020: '301139940000095',
		uta2010: '301139940000095',
		latitude: -31.652073201,
		longitude: -59.10623363,
		municipalityId: 1654
	},
	{
		id: 578,
		name: 'VISTA ALEGRE NORTE',
		uta2020: '580350091130000',
		uta2010: '580350091130000',
		latitude: -38.727712313,
		longitude: -68.172143886,
		municipalityId: 2344
	},
	{
		id: 579,
		name: 'VISTA ALEGRE SUR',
		uta2020: '580350091140000',
		uta2010: '580350091140000',
		latitude: -38.771553725,
		longitude: -68.13691872,
		municipalityId: 2344
	},
	{
		id: 580,
		name: 'BARRIO RUCA LUHE',
		uta2020: '580350091020000',
		uta2010: '580350091020000',
		latitude: -38.754390712,
		longitude: -68.180339974,
		municipalityId: 2344
	},
	{
		id: 581,
		name: 'MUYO',
		uta2020: '900218161000106',
		uta2010: '900218161000106',
		latitude: -27.37255,
		longitude: -65.67885,
		municipalityId: 2182
	},
	{
		id: 582,
		name: 'ALPACHIRI',
		uta2020: '900218161010000',
		uta2010: '900218161010000',
		latitude: -27.336464448,
		longitude: -65.75607064,
		municipalityId: 2182
	},
	{
		id: 583,
		name: 'LAS LENGUAS',
		uta2020: '900218161000086',
		uta2010: '900218161000086',
		latitude: -27.328924179,
		longitude: -65.923538208,
		municipalityId: 2182
	},
	{
		id: 584,
		name: 'EL MOLINO',
		uta2020: '900218161000026',
		uta2010: '900218161000026',
		latitude: -27.33829,
		longitude: -65.6892568,
		municipalityId: 2182
	},
	{
		id: 585,
		name: 'COCHUNA',
		uta2020: '900218161000013',
		uta2010: '900218161000013',
		latitude: -27.318277359,
		longitude: -65.91885376,
		municipalityId: 2182
	},
	{
		id: 586,
		name: 'LA CALERA',
		uta2020: '900218161000072',
		uta2010: '900218161000072',
		latitude: -27.3516953,
		longitude: -65.707406,
		municipalityId: 2182
	},
	{
		id: 587,
		name: 'LAS PAVAS',
		uta2020: '900218161000087',
		uta2010: '900218161000087',
		latitude: -27.253322601,
		longitude: -65.889328003,
		municipalityId: 2182
	},
	{
		id: 588,
		name: 'POSTA CAMBIO ZALAZAR',
		uta2020: '340359084110000',
		uta2010: '340359084110000',
		latitude: -24.211584863,
		longitude: -60.198666969,
		municipalityId: 2288
	},
	{
		id: 589,
		name: 'PASO FLORES',
		uta2020: '620705035000029',
		uta2010: '620705035000029',
		latitude: -40.602085545,
		longitude: -70.696542459,
		municipalityId: 1242
	},
	{
		id: 590,
		name: 'EL SOMBRERO',
		uta2020: '180420073010000',
		uta2010: '180420073010000',
		latitude: -27.703544087,
		longitude: -58.768606058,
		municipalityId: 2023
	},
	{
		id: 591,
		name: 'LA MARTA',
		uta2020: '180700143000058',
		uta2010: '180700143000058',
		latitude: -29.598489979,
		longitude: -59.281754751,
		municipalityId: 2025
	},
	{
		id: 592,
		name: 'SAN GREGORIO',
		uta2020: '180700143000094',
		uta2010: '180700143000094',
		latitude: -29.5080239,
		longitude: -59.3903817,
		municipalityId: 2025
	},
	{
		id: 593,
		name: 'SAN ISIDRO',
		uta2020: '180700143000095',
		uta2010: '180700143000095',
		latitude: -29.4985488,
		longitude: -59.3165807,
		municipalityId: 2025
	},
	{
		id: 594,
		name: 'PASO SAN JUAN',
		uta2020: '180700143000076',
		uta2010: '180700143000076',
		latitude: -29.6438333,
		longitude: -59.3453214,
		municipalityId: 2025
	},
	{
		id: 595,
		name: 'PASO LOS ANGELES',
		uta2020: '180700143000074',
		uta2010: '180700143000074',
		latitude: -29.705629669,
		longitude: -59.29345145,
		municipalityId: 2025
	},
	{
		id: 596,
		name: 'ISLA TALAR',
		uta2020: '180700143000043',
		uta2010: '180700143000043',
		latitude: -29.7441129,
		longitude: -59.5974119,
		municipalityId: 2025
	},
	{
		id: 597,
		name: 'LA CUCUCHA',
		uta2020: '180700143000054',
		uta2010: '180700143000054',
		latitude: -29.548913,
		longitude: -59.368162,
		municipalityId: 2025
	},
	{
		id: 598,
		name: 'BUENA ESPERANZA',
		uta2020: '180700143000009',
		uta2010: '180700143000009',
		latitude: -29.7031516,
		longitude: -59.3843856,
		municipalityId: 2025
	},
	{
		id: 599,
		name: 'STELLA MARIS',
		uta2020: '180700143000109',
		uta2010: '180700143000109',
		latitude: -29.5282997,
		longitude: -59.4387122,
		municipalityId: 2025
	},
	{
		id: 600,
		name: 'SAN MARTIN',
		uta2020: '180700143000099',
		uta2010: '180700143000099',
		latitude: -29.5942151,
		longitude: -59.3481365,
		municipalityId: 2025
	},
	{
		id: 601,
		name: 'EL QUEBRACHO',
		uta2020: '180700143000031',
		uta2010: '180700143000031',
		latitude: -29.6034037,
		longitude: -59.4124626,
		municipalityId: 2025
	},
	{
		id: 602,
		name: 'ESTANCIA SANTA RITA',
		uta2020: '180700143000043',
		uta2010: '180700143000043',
		latitude: -29.720927601,
		longitude: -59.430301571,
		municipalityId: 2025
	},
	{
		id: 603,
		name: 'CAMPO MORATO',
		uta2020: '180700143000013',
		uta2010: '180700143000013',
		latitude: -29.7044818,
		longitude: -59.3492784,
		municipalityId: 2025
	},
	{
		id: 604,
		name: 'SAN ANTONIO',
		uta2020: '180700143000091',
		uta2010: '180700143000091',
		latitude: -29.6085849,
		longitude: -59.4568672,
		municipalityId: 2025
	},
	{
		id: 605,
		name: 'RINCON DEL PAGO',
		uta2020: '180700143000088',
		uta2010: '180700143000088',
		latitude: -29.670117649,
		longitude: -59.163211892,
		municipalityId: 2025
	},
	{
		id: 606,
		name: 'INVERNADA',
		uta2020: '180700143000047',
		uta2010: '180700143000047',
		latitude: -29.753004769,
		longitude: -59.29881732,
		municipalityId: 2025
	},
	{
		id: 607,
		name: 'PAGO DE LOS DESEOS',
		uta2020: '181260318000043',
		uta2010: '181260318000043',
		latitude: -28.204321187,
		longitude: -58.466297626,
		municipalityId: 2028
	},
	{
		id: 608,
		name: 'COLONIA 3 DE ABRIL',
		uta2020: '180070010000005',
		uta2010: '180070010000005',
		latitude: -28.380884847,
		longitude: -58.948096277,
		municipalityId: 2031
	},
	{
		id: 609,
		name: 'EL ESPINILLO',
		uta2020: '220630165010000',
		uta2010: '220630165010000',
		latitude: -25.417669864,
		longitude: -60.413967702,
		municipalityId: 13
	},
	{
		id: 610,
		name: 'AGUAS BLANCAS',
		uta2020: '661260290010000',
		uta2010: '661260290010000',
		latitude: -22.72456119,
		longitude: -64.34631922,
		municipalityId: 1835
	},
	{
		id: 611,
		name: 'COLONIA TERESA',
		uta2020: '820983704000015',
		uta2010: '820983704000015',
		latitude: -30.2584345,
		longitude: -59.9707229,
		municipalityId: 970
	},
	{
		id: 612,
		name: 'CUBANEA',
		uta2020: '620075007000005',
		uta2010: '620075007000005',
		latitude: -40.633583069,
		longitude: -63.509506226,
		municipalityId: 1250
	},
	{
		id: 613,
		name: 'CHIPAUQUIL',
		uta2020: '620845175000013',
		uta2010: '620845175000013',
		latitude: -40.960491209,
		longitude: -66.642187585,
		municipalityId: 1236
	},
	{
		id: 614,
		name: 'PILO LIL',
		uta2020: '580215028000000',
		uta2010: '580215028000000',
		latitude: -39.60386091,
		longitude: -70.934991533,
		municipalityId: 2354
	},
	{
		id: 615,
		name: 'GUAÑACOS',
		uta2020: '580775077000000',
		uta2010: '580775077000000',
		latitude: -37.2692894,
		longitude: -70.7661301,
		municipalityId: 2358
	},
	{
		id: 616,
		name: 'LOS CHAÑARITOS',
		uta2020: '141192819110000',
		uta2010: '141192819110000',
		latitude: -31.402137754,
		longitude: -63.332103043,
		municipalityId: 300
	},
	{
		id: 617,
		name: 'DOÑA LUISA',
		uta2020: '860846462000000',
		uta2010: '860846462000000',
		latitude: -27.7,
		longitude: -64.7333,
		municipalityId: 1325
	},
	{
		id: 618,
		name: 'SABAGASTA',
		uta2020: '861686602000058',
		uta2010: '861686602000058',
		latitude: -28.628066707,
		longitude: -63.493911072,
		municipalityId: 1307
	},
	{
		id: 619,
		name: 'NUEVA POMPEYA',
		uta2020: '220630196080000',
		uta2010: '220630196080000',
		latitude: -24.933441884,
		longitude: -61.48469984,
		municipalityId: 14
	},
	{
		id: 620,
		name: 'ALDEA APELEG',
		uta2020: '260848140010000',
		uta2010: '260848140010000',
		latitude: -44.705252114,
		longitude: -70.846001014,
		municipalityId: 530
	},
	{
		id: 621,
		name: 'CAMPO PIAGGIO',
		uta2020: '821053743100000',
		uta2010: '821053743100000',
		latitude: -31.95373,
		longitude: -61.290612,
		municipalityId: 977
	},
	{
		id: 622,
		name: 'LAPACHITO',
		uta2020: '220560147030000',
		uta2010: '220560147030000',
		latitude: -27.158790347,
		longitude: -59.390397501,
		municipalityId: 2
	},
	{
		id: 623,
		name: 'COLONIAS UNIDAS',
		uta2020: '221540448030000',
		uta2010: '221540448030000',
		latitude: -26.700097178,
		longitude: -59.627742183,
		municipalityId: 19
	},
	{
		id: 624,
		name: 'LOS TALARES',
		uta2020: '140772420030000',
		uta2010: '140772420030000',
		latitude: -31.375411502,
		longitude: -65.038601146,
		municipalityId: 157
	},
	{
		id: 625,
		name: 'LA RANCHERITA',
		uta2020: '141473029170000',
		uta2010: '141473029170000',
		latitude: -31.757467541,
		longitude: -64.448690278,
		municipalityId: 224
	},
	{
		id: 626,
		name: 'COLONIA CAROLINA',
		uta2020: '180700137010000',
		uta2010: '180700137010000',
		latitude: -29.14577068,
		longitude: -59.182083828,
		municipalityId: 2026
	},
	{
		id: 627,
		name: 'COLONIA ISABEL VICTORIA',
		uta2020: '180700137000018',
		uta2010: '180700137000018',
		latitude: -29.121004804,
		longitude: -59.09647952,
		municipalityId: 2026
	},
	{
		id: 628,
		name: 'VILLA OLIVARI',
		uta2020: '180840186050000',
		uta2010: '180840186050000',
		latitude: -27.632947331,
		longitude: -56.906201483,
		municipalityId: 2033
	},
	{
		id: 629,
		name: 'COLONIA PANDO',
		uta2020: '181610417020000',
		uta2010: '181610417020000',
		latitude: -28.525214883,
		longitude: -58.486934549,
		municipalityId: 2038
	},
	{
		id: 630,
		name: 'COLONIA PEREIRA',
		uta2020: '300089007000025',
		uta2010: '300089007000025',
		latitude: -32.30106483,
		longitude: -58.27904075,
		municipalityId: 1670
	},
	{
		id: 631,
		name: 'COLONIA SAN ANSELMO',
		uta2020: '300089007000027',
		uta2010: '300089007000027',
		latitude: -32.33264884,
		longitude: -58.1803689,
		municipalityId: 1670
	},
	{
		id: 632,
		name: 'MOLINO DOLL',
		uta2020: '300219105000027',
		uta2010: '300219105000027',
		latitude: -32.281285153,
		longitude: -60.431193463,
		municipalityId: 1638
	},
	{
		id: 633,
		name: 'COLONIA OFICIAL 16',
		uta2020: '300289155000020',
		uta2010: '300289155000020',
		latitude: -30.67149184,
		longitude: -58.01593122,
		municipalityId: 1549
	},
	{
		id: 634,
		name: 'COLONIA AYMAN',
		uta2020: '300289185000007',
		uta2010: '300289185000007',
		latitude: -30.706810067,
		longitude: -57.887849136,
		municipalityId: 1550
	},
	{
		id: 635,
		name: 'BANDERITAS',
		uta2020: '300359193000004',
		uta2010: '300359193000004',
		latitude: -30.789240542,
		longitude: -59.160120376,
		municipalityId: 1604
	},
	{
		id: 636,
		name: 'COLONIA LA BERTA',
		uta2020: '300359193000012',
		uta2010: '300359193000012',
		latitude: -30.892422635,
		longitude: -59.155012372,
		municipalityId: 1604
	},
	{
		id: 637,
		name: 'COLONIA SAN LORENZO',
		uta2020: '300359195000015',
		uta2010: '300359195000015',
		latitude: -31.155743694,
		longitude: -58.918162213,
		municipalityId: 1605
	},
	{
		id: 638,
		name: 'COLONIA LA MARTA',
		uta2020: '300359195000014',
		uta2010: '300359195000014',
		latitude: -31.036307597,
		longitude: -58.809606214,
		municipalityId: 1605
	},
	{
		id: 639,
		name: 'DIEGO LOPEZ',
		uta2020: '300359195000018',
		uta2010: '300359195000018',
		latitude: -31.049381161,
		longitude: -58.984874573,
		municipalityId: 1605
	},
	{
		id: 640,
		name: 'COLONIA LA LATA',
		uta2020: '300359195000013',
		uta2010: '300359195000013',
		latitude: -31.103940439,
		longitude: -58.823566137,
		municipalityId: 1605
	},
	{
		id: 641,
		name: 'COLONIA SANTA LUCIA',
		uta2020: '300359225000016',
		uta2010: '300359225000016',
		latitude: -30.874467495,
		longitude: -58.523085674,
		municipalityId: 1606
	},
	{
		id: 642,
		name: 'COLONIA OFICIAL 18',
		uta2020: '300429230000005',
		uta2010: '300429230000005',
		latitude: -30.30815813,
		longitude: -58.81806904,
		municipalityId: 1683
	},
	{
		id: 643,
		name: 'LAS MULITAS',
		uta2020: '300429255000020',
		uta2010: '300429255000020',
		latitude: -30.37970606,
		longitude: -58.99523657,
		municipalityId: 1684
	},
	{
		id: 644,
		name: 'ARROYO SEPULTURA',
		uta2020: '300499302000004',
		uta2010: '300499302000004',
		latitude: -33.44138931,
		longitude: -59.8906592,
		municipalityId: 1566
	},
	{
		id: 645,
		name: 'ARROYO LAS LECHIGUANAS',
		uta2020: '300499302000003',
		uta2010: '300499302000003',
		latitude: -33.558718237,
		longitude: -59.480520131,
		municipalityId: 1566
	},
	{
		id: 646,
		name: 'PASTOR BRITOS',
		uta2020: '300569380095000',
		uta2010: '300569380095000',
		latitude: -32.769742613,
		longitude: -58.907020041,
		municipalityId: 1617
	},
	{
		id: 647,
		name: 'RINCON DEL GATO',
		uta2020: '300569400000124',
		uta2010: '300569400000124',
		latitude: -32.697677313,
		longitude: -58.617448789,
		municipalityId: 1618
	},
	{
		id: 648,
		name: 'PERDICES',
		uta2020: '300569385000117',
		uta2010: '300569385000117',
		latitude: -33.299770355,
		longitude: -58.705184936,
		municipalityId: 1619
	},
	{
		id: 649,
		name: 'DISTRITO PERDICES',
		uta2020: '300569385000083',
		uta2010: '300569385000083',
		latitude: -33.32658691,
		longitude: -58.63670125,
		municipalityId: 1619
	},
	{
		id: 650,
		name: 'ÑANCAY',
		uta2020: '300639410000000',
		uta2010: '300639410000000',
		latitude: -33.44864594,
		longitude: -58.66964192,
		municipalityId: 1692
	},
	{
		id: 651,
		name: 'LA PROVIDENCIA',
		uta2020: '300709465000A36',
		uta2010: null,
		latitude: -31.246829,
		longitude: -59.7497,
		municipalityId: 1577
	},
	{
		id: 652,
		name: 'COLONIA EL SAUCESITO',
		uta2020: '300709497000025',
		uta2010: '300709497000025',
		latitude: -30.63413672,
		longitude: -59.26126334,
		municipalityId: 1578
	},
	{
		id: 653,
		name: 'CRUCESITAS',
		uta2020: '300779525000020',
		uta2010: '300779525000020',
		latitude: -32.040561055,
		longitude: -59.528795103,
		municipalityId: 1698
	},
	{
		id: 654,
		name: 'ORO VERDE',
		uta2020: '300840329150000',
		uta2010: '300840329150000',
		latitude: -31.825735547,
		longitude: -60.518272816,
		municipalityId: 1713
	},
	{
		id: 655,
		name: 'ARROYO CORRALITO',
		uta2020: '300849615000001',
		uta2010: null,
		latitude: -31.532554,
		longitude: -60.050345,
		municipalityId: 1714
	},
	{
		id: 656,
		name: 'ALDEA SANTA ROSA',
		uta2020: '300849600040000',
		uta2010: '300849600040000',
		latitude: -32.01645446,
		longitude: -60.241107347,
		municipalityId: 1715
	},
	{
		id: 657,
		name: 'ARROYO GRANDE',
		uta2020: '300889775000001',
		uta2010: '300889775000001',
		latitude: -31.593985089,
		longitude: -58.371160151,
		municipalityId: 1759
	},
	{
		id: 658,
		name: 'COLONIA OFICIAL N° 5',
		uta2020: '300889775000006',
		uta2010: '300889775000006',
		latitude: -31.575582725,
		longitude: -58.334395782,
		municipalityId: 1759
	},
	{
		id: 659,
		name: 'COLONIA SAN MARTIN',
		uta2020: '300989832000035',
		uta2010: '300989832000035',
		latitude: -32.34236749,
		longitude: -58.64816979,
		municipalityId: 1766
	},
	{
		id: 660,
		name: 'ESTANCIA LA SILVIA',
		uta2020: '300989832000056',
		uta2010: '300989832000056',
		latitude: -32.11986266,
		longitude: -58.70650683,
		municipalityId: 1766
	},
	{
		id: 661,
		name: 'COLONIA SAGASTUME',
		uta2020: '300989832000034',
		uta2010: '300989832000034',
		latitude: -32.050010197,
		longitude: -58.749899021,
		municipalityId: 1766
	},
	{
		id: 662,
		name: 'COLONIA SAN RAMON',
		uta2020: '300989860000036',
		uta2010: '300989860000036',
		latitude: -32.388415873,
		longitude: -58.335042065,
		municipalityId: 1767
	},
	{
		id: 663,
		name: 'SAN CIPRIANO',
		uta2020: '300989860000107',
		uta2010: '300989860000107',
		latitude: -32.341733,
		longitude: -58.354468,
		municipalityId: 1767
	},
	{
		id: 664,
		name: 'LAS ACHIRAS',
		uta2020: '300989860000082',
		uta2010: '300989860000082',
		latitude: -32.3053893,
		longitude: -58.35851754,
		municipalityId: 1767
	},
	{
		id: 665,
		name: 'LOS CEIBOS',
		uta2020: '300989872000092',
		uta2010: '300989872000092',
		latitude: -32.61841391,
		longitude: -58.42112859,
		municipalityId: 1768
	},
	{
		id: 666,
		name: 'DISTRITO CHILCAS',
		uta2020: '301059880000009',
		uta2010: '301059880000009',
		latitude: -32.312292219,
		longitude: -60.311258623,
		municipalityId: 1784
	},
	{
		id: 667,
		name: 'DISTRITO HINOJAL',
		uta2020: '301059890000011',
		uta2010: '301059890000011',
		latitude: -32.333431074,
		longitude: -60.162989466,
		municipalityId: 1785
	},
	{
		id: 668,
		name: 'RINCON DEL DOLL',
		uta2020: '301059915000037',
		uta2010: '301059915000037',
		latitude: -32.362622704,
		longitude: -60.345355254,
		municipalityId: 1786
	},
	{
		id: 669,
		name: 'MONTOYA',
		uta2020: '301059905000024',
		uta2010: '301059905000024',
		latitude: -32.641140103,
		longitude: -59.874377587,
		municipalityId: 1787
	},
	{
		id: 670,
		name: 'COLONIA ADIVINOS',
		uta2020: '301139917000021',
		uta2010: '301139917000021',
		latitude: -31.316926088,
		longitude: -59.308566952,
		municipalityId: 1655
	},
	{
		id: 671,
		name: 'EL CHAJARI',
		uta2020: '301139957000045',
		uta2010: '301139957000045',
		latitude: -31.540698367,
		longitude: -59.341990253,
		municipalityId: 1656
	},
	{
		id: 672,
		name: 'PICHI MAHUIDA',
		uta2020: '620635133017000',
		uta2010: '620635133017000',
		latitude: -38.829613618,
		longitude: -64.937419806,
		municipalityId: 1255
	},
	{
		id: 673,
		name: 'MINA 3',
		uta2020: '780219035030000',
		uta2010: '780219035030000',
		latitude: -51.548766046,
		longitude: -72.233390977,
		municipalityId: 1530
	},
	{
		id: 674,
		name: 'LA POTASA',
		uta2020: '820492847000085',
		uta2010: '820492847000085',
		latitude: -29.141320195,
		longitude: -59.761140808,
		municipalityId: 948
	},
	{
		id: 675,
		name: 'DOS ROSAS Y LA LEGUA',
		uta2020: '820913540000008',
		uta2010: '820913540000008',
		latitude: -30.588125,
		longitude: -61.9758256,
		municipalityId: 833
	},
	{
		id: 676,
		name: 'LA DARSENA',
		uta2020: '860356378100000',
		uta2010: '860356378100000',
		latitude: -27.727552273,
		longitude: -64.245798473,
		municipalityId: 1332
	},
	{
		id: 677,
		name: 'SAN RAMON',
		uta2020: '860356378000144',
		uta2010: '860356378000144',
		latitude: -27.7004,
		longitude: -64.27837,
		municipalityId: 1332
	},
	{
		id: 678,
		name: 'EL ZANJON',
		uta2020: '860496399030000',
		uta2010: '860496399030000',
		latitude: -27.886040581,
		longitude: -64.173079775,
		municipalityId: 1346
	},
	{
		id: 679,
		name: 'VILLA MATOQUE',
		uta2020: '860566420000132',
		uta2010: '860566420000132',
		latitude: -25.83161256,
		longitude: -63.79513141,
		municipalityId: 1356
	},
	{
		id: 680,
		name: 'GUAMPACHA',
		uta2020: '860846469000043',
		uta2010: '860846469000043',
		latitude: -28.01271,
		longitude: -64.79012,
		municipalityId: 1326
	},
	{
		id: 681,
		name: 'VILLA GUASAYAN',
		uta2020: '860846476000108',
		uta2010: '860846476000108',
		latitude: -27.88479,
		longitude: -64.85159,
		municipalityId: 1327
	},
	{
		id: 682,
		name: 'POZO DEL TOBA',
		uta2020: '860986504000065',
		uta2010: '860986504000065',
		latitude: -27.95090645,
		longitude: -61.99804769,
		municipalityId: 1364
	},
	{
		id: 683,
		name: 'QUEBRACHO COTO',
		uta2020: '861336546000108',
		uta2010: '861336546000108',
		latitude: -26.283780487,
		longitude: -64.467463769,
		municipalityId: 1374
	},
	{
		id: 684,
		name: 'VILLA ROBLES',
		uta2020: '861616595000137',
		uta2010: '861616595000137',
		latitude: -27.92487,
		longitude: -64.10821,
		municipalityId: 1385
	},
	{
		id: 685,
		name: 'SIMOCA',
		uta2020: '900910098050000',
		uta2010: '900910098050000',
		latitude: -27.262422671,
		longitude: -65.355289474,
		municipalityId: 2189
	},
	{
		id: 686,
		name: 'SOLDADO MALDONADO',
		uta2020: '900708441080000',
		uta2010: '900708441080000',
		latitude: -27.142336008,
		longitude: -65.565682202,
		municipalityId: 2201
	},
	{
		id: 687,
		name: 'LOS PEREYRA NORTE',
		uta2020: '900148126000180',
		uta2010: '900148126000180',
		latitude: -26.940437317,
		longitude: -64.876953125,
		municipalityId: 2169
	},
	{
		id: 688,
		name: 'SOL DE MAYO',
		uta2020: '860496396000061',
		uta2010: '860496396000061',
		latitude: -27.70388,
		longitude: -64.58849,
		municipalityId: 1347
	},
	{
		id: 689,
		name: 'JUANILLO',
		uta2020: '860216026000051',
		uta2010: '860216026000051',
		latitude: -28.59715,
		longitude: -63.69028,
		municipalityId: 1394
	},
	{
		id: 690,
		name: 'PUNTA POZO',
		uta2020: '860286340000068',
		uta2010: '860286340000068',
		latitude: -28.49739679,
		longitude: -63.622774783,
		municipalityId: 1400
	},
	{
		id: 691,
		name: 'EL AIBE',
		uta2020: '860356368000028',
		uta2010: '860356368000028',
		latitude: -27.58601488,
		longitude: -64.2608784,
		municipalityId: 1333
	},
	{
		id: 692,
		name: 'ABRA GRANDE',
		uta2020: '860356342010000',
		uta2010: '860356342010000',
		latitude: -27.293133016,
		longitude: -64.379064525,
		municipalityId: 1334
	},
	{
		id: 693,
		name: 'REMES',
		uta2020: '860496390000049',
		uta2010: '860496390000049',
		latitude: -27.85658967,
		longitude: -64.53379074,
		municipalityId: 1348
	},
	{
		id: 694,
		name: 'SAN BENITO',
		uta2020: '860496391000053',
		uta2010: '860496391000053',
		latitude: -28.14621,
		longitude: -64.48821,
		municipalityId: 1349
	},
	{
		id: 695,
		name: 'EL DEAN',
		uta2020: '860496388010000',
		uta2010: '860496388010000',
		latitude: -27.735169777,
		longitude: -64.305769166,
		municipalityId: 1350
	},
	{
		id: 696,
		name: 'SAN VICENTE',
		uta2020: '861056185000056',
		uta2010: '861056185000056',
		latitude: -28.48865398,
		longitude: -64.13637705,
		municipalityId: 1408
	},
	{
		id: 697,
		name: 'SANTA CATALINA',
		uta2020: '860846474000099',
		uta2010: '860846474000099',
		latitude: -28.12767215,
		longitude: -64.78335763,
		municipalityId: 1328
	},
	{
		id: 698,
		name: 'SANTA MARIA',
		uta2020: '860496394100000',
		uta2010: '860496394100000',
		latitude: -27.963543299,
		longitude: -64.152936395,
		municipalityId: 1351
	},
	{
		id: 699,
		name: 'CASPI CORRAL',
		uta2020: '860706424020000',
		uta2010: '860706424020000',
		latitude: -27.390761513,
		longitude: -63.548956189,
		municipalityId: 1414
	},
	{
		id: 700,
		name: 'VACA HUAÑUNA',
		uta2020: '860706438090000',
		uta2010: '860706438090000',
		latitude: -27.474492606,
		longitude: -63.469937534,
		municipalityId: 1415
	},
	{
		id: 701,
		name: 'CANAL MELERO',
		uta2020: '860986501000009',
		uta2010: '860986501000009',
		latitude: -28.3169,
		longitude: -62.96468,
		municipalityId: 1365
	},
	{
		id: 702,
		name: 'LA SIMONA',
		uta2020: '860776459000042',
		uta2010: '860776459000042',
		latitude: -28.37352779,
		longitude: -61.87555346,
		municipalityId: 1423
	},
	{
		id: 703,
		name: 'LA NENA',
		uta2020: '860776459040000',
		uta2010: '860776459040000',
		latitude: -28.454624159,
		longitude: -61.741883132,
		municipalityId: 1423
	},
	{
		id: 704,
		name: 'TRES CRUCES',
		uta2020: '860916487000089',
		uta2010: '860916487000089',
		latitude: -27.20007,
		longitude: -64.68089,
		municipalityId: 1430
	},
	{
		id: 705,
		name: 'YUCHAN',
		uta2020: '860986183060000',
		uta2010: '860986183060000',
		latitude: -27.782216214,
		longitude: -62.900345101,
		municipalityId: 1366
	},
	{
		id: 706,
		name: 'LA NORIA',
		uta2020: '861050770000',
		uta2010: null,
		latitude: -28.578263,
		longitude: -64.115681,
		municipalityId: 1409
	},
	{
		id: 707,
		name: 'SAUCE SOLO',
		uta2020: '861056186000061',
		uta2010: '861056186000061',
		latitude: -28.57126879,
		longitude: -64.2544732,
		municipalityId: 1410
	},
	{
		id: 708,
		name: 'AMAMA',
		uta2020: '861196507000005',
		uta2010: '861196507000005',
		latitude: -27.20879,
		longitude: -63.03976,
		municipalityId: 1437
	},
	{
		id: 709,
		name: 'VILLA BRANA',
		uta2020: '861196527000157',
		uta2010: '861196527000157',
		latitude: -27.34717422,
		longitude: -62.91397135,
		municipalityId: 1438
	},
	{
		id: 710,
		name: 'LIBERTAD',
		uta2020: '861196515060000',
		uta2010: '861196515060000',
		latitude: -27.075866881,
		longitude: -63.070890376,
		municipalityId: 1439
	},
	{
		id: 711,
		name: 'NEGRA MUERTA',
		uta2020: '860356382000103',
		uta2010: '860356382000103',
		latitude: -27.50989965,
		longitude: -64.11713354,
		municipalityId: 1335
	},
	{
		id: 712,
		name: 'KM 49',
		uta2020: '861266200010000',
		uta2010: '861266200010000',
		latitude: -29.086799377,
		longitude: -63.875828156,
		municipalityId: 1447
	},
	{
		id: 713,
		name: 'CAMPO GRANDE',
		uta2020: '861336529000015',
		uta2010: '861336529000015',
		latitude: -26.372054029,
		longitude: -63.973543649,
		municipalityId: 1375
	},
	{
		id: 714,
		name: 'VILLA MERCEDES',
		uta2020: '861336557000147',
		uta2010: '861336557000147',
		latitude: -26.468147288,
		longitude: -64.167850181,
		municipalityId: 1376
	},
	{
		id: 715,
		name: 'SANTO DOMINGO',
		uta2020: '861336555060000',
		uta2010: '861336555060000',
		latitude: -26.254688546,
		longitude: -63.755245864,
		municipalityId: 1377
	},
	{
		id: 716,
		name: 'AMICHA',
		uta2020: '861476565000009',
		uta2010: '861476565000009',
		latitude: -27.639726183,
		longitude: -64.864054427,
		municipalityId: 1451
	},
	{
		id: 717,
		name: 'LEZCANOS',
		uta2020: '861476578000076',
		uta2010: '861476578000076',
		latitude: -27.50364,
		longitude: -64.76452,
		municipalityId: 1452
	},
	{
		id: 718,
		name: 'LOS OVEJEROS',
		uta2020: '861476579000083',
		uta2010: '861476579000083',
		latitude: -27.497077387,
		longitude: -64.708892716,
		municipalityId: 1453
	},
	{
		id: 719,
		name: 'SOTELOS',
		uta2020: '861476585000109',
		uta2010: '861476585000109',
		latitude: -27.46616,
		longitude: -64.72653,
		municipalityId: 1454
	},
	{
		id: 720,
		name: 'LOS ROMANOS',
		uta2020: '861616590000077',
		uta2010: '861616590000077',
		latitude: -27.80840504,
		longitude: -64.1842269,
		municipalityId: 1386
	},
	{
		id: 721,
		name: 'VILLA HIPOLITA',
		uta2020: '861616594000135',
		uta2010: '861616594000135',
		latitude: -27.76267,
		longitude: -63.98916,
		municipalityId: 1387
	},
	{
		id: 722,
		name: 'VACA HUMAN',
		uta2020: '861686604000073',
		uta2010: '861686604000073',
		latitude: -28.919499805,
		longitude: -63.628810103,
		municipalityId: 1308
	},
	{
		id: 723,
		name: 'TIO POZO',
		uta2020: '861056187000067',
		uta2010: '861056187000067',
		latitude: -28.404929221,
		longitude: -63.982684182,
		municipalityId: 1411
	},
	{
		id: 724,
		name: 'VILLA NUEVA',
		uta2020: '861756613040000',
		uta2010: '861756613040000',
		latitude: -28.330048232,
		longitude: -63.928170394,
		municipalityId: 1465
	},
	{
		id: 725,
		name: 'HUACHANA',
		uta2020: '860146325000062',
		uta2010: '860146325000062',
		latitude: -26.41494,
		longitude: -63.50093,
		municipalityId: 1320
	},
	{
		id: 726,
		name: 'SUMAMAO',
		uta2020: '861896620040000',
		uta2010: '861896620040000',
		latitude: -28.196757533,
		longitude: -64.035717273,
		municipalityId: 1471
	},
	{
		id: 727,
		name: 'AHI VEREMOS',
		uta2020: '860566405000002',
		uta2010: '860566405000002',
		latitude: -25.72948778,
		longitude: -63.46601397,
		municipalityId: 1357
	},
	{
		id: 728,
		name: 'POZO DEL ARBOLITO',
		uta2020: '861476564000096',
		uta2010: '861476564000096',
		latitude: -27.68314,
		longitude: -64.97924,
		municipalityId: 1455
	},
	{
		id: 729,
		name: 'COLONIA PUENTE DEL GUALEG',
		uta2020: '300089035000026',
		uta2010: '300089035000026',
		latitude: -32.149167419,
		longitude: -58.563439582,
		municipalityId: 1671
	},
	{
		id: 730,
		name: 'COLONIA LAS PEPAS',
		uta2020: '300089035000019',
		uta2010: '300089035000019',
		latitude: -32.100137627,
		longitude: -58.626900666,
		municipalityId: 1671
	},
	{
		id: 731,
		name: 'COLONIA SANTA ROSA',
		uta2020: '300089035000034',
		uta2010: '300089035000034',
		latitude: -31.942653182,
		longitude: -58.665305945,
		municipalityId: 1671
	},
	{
		id: 732,
		name: 'SAN MIGUEL',
		uta2020: '300089035000083',
		uta2010: '300089035000083',
		latitude: -32.046596527,
		longitude: -58.577224731,
		municipalityId: 1671
	},
	{
		id: 733,
		name: 'COLONIA NUEVA SAN MIGUEL',
		uta2020: '300089035000022',
		uta2010: '300089035000022',
		latitude: -32.061631328,
		longitude: -58.553944426,
		municipalityId: 1671
	},
	{
		id: 734,
		name: 'ROLDAN',
		uta2020: '860986505000075',
		uta2010: '860986505000075',
		latitude: -27.80385,
		longitude: -63.11604,
		municipalityId: 1367
	},
	{
		id: 735,
		name: 'SAN ANTONIO',
		uta2020: '860986505000077',
		uta2010: '860986505000077',
		latitude: -27.790009075,
		longitude: -63.155518688,
		municipalityId: 1367
	},
	{
		id: 736,
		name: 'PUNTA DEL MONTE',
		uta2020: '300499310000039',
		uta2010: '300499310000039',
		latitude: -33.06751963,
		longitude: -59.64367116,
		municipalityId: 1567
	},
	{
		id: 737,
		name: 'EL HOYON',
		uta2020: '860216024000039',
		uta2010: '860216024000039',
		latitude: -28.62926,
		longitude: -63.95973,
		municipalityId: 1395
	},
	{
		id: 738,
		name: 'POZO AZUL',
		uta2020: '541120501000025',
		uta2010: '541120501000025',
		latitude: -26.34695049,
		longitude: -54.15002011,
		municipalityId: 2097
	},
	{
		id: 739,
		name: 'NUESTRA SEÑORA DE ITATI',
		uta2020: '541120501000027',
		uta2010: '541120501000027',
		latitude: -26.273115634,
		longitude: -53.827376992,
		municipalityId: 2097
	},
	{
		id: 740,
		name: 'DURAN',
		uta2020: '541120501000009',
		uta2010: '541120501000009',
		latitude: -26.382340039,
		longitude: -53.899561012,
		municipalityId: 2097
	},
	{
		id: 741,
		name: 'TRES VECINOS',
		uta2020: '541120501000037',
		uta2010: '541120501000037',
		latitude: -26.31016634,
		longitude: -53.82321692,
		municipalityId: 2097
	},
	{
		id: 742,
		name: 'FORESTAL (SAN ANTONIO)',
		uta2020: '541120501000020',
		uta2010: '541120501000020',
		latitude: -26.33169752,
		longitude: -53.87092839,
		municipalityId: 2097
	},
	{
		id: 743,
		name: 'DISTRITO TALA',
		uta2020: '300849670000045',
		uta2010: '300849670000045',
		latitude: -31.735879,
		longitude: -60.044546,
		municipalityId: 1716
	},
	{
		id: 744,
		name: 'LAGO MELIQUINA',
		uta2020: '580565161020000',
		uta2010: '580565161020000',
		latitude: -40.381687551,
		longitude: -71.261615279,
		municipalityId: 2366
	},
	{
		id: 745,
		name: 'AHI VEREMOS',
		uta2020: '861336528000004',
		uta2010: '861336528000004',
		latitude: -25.85492,
		longitude: -63.91247,
		municipalityId: 1378
	},
	{
		id: 746,
		name: 'EL SAUZAL',
		uta2020: '861476576000044',
		uta2010: '861476576000044',
		latitude: -27.489104672,
		longitude: -64.581838645,
		municipalityId: 1456
	},
	{
		id: 747,
		name: 'COLONIA ABORIGEN CHACO',
		uta2020: '221330473000005',
		uta2010: '221330473000005',
		latitude: -26.98340491,
		longitude: -60.23453298,
		municipalityId: 23
	},
	{
		id: 748,
		name: 'COLONIA ABORIGEN',
		uta2020: '221680473010000',
		uta2010: '221680473010000',
		latitude: -26.958343635,
		longitude: -60.190237046,
		municipalityId: 23
	},
	{
		id: 749,
		name: 'ATOJ POZO',
		uta2020: '861756606000003',
		uta2010: '861756606000003',
		latitude: -28.2954,
		longitude: -63.86655,
		municipalityId: 1466
	},
	{
		id: 750,
		name: 'VUELTA DE LA BARRANCA',
		uta2020: '860496403120000',
		uta2010: '860496403120000',
		latitude: -27.872981127,
		longitude: -64.127603811,
		municipalityId: 1352
	},
	{
		id: 751,
		name: 'COLONIA REFFINO',
		uta2020: '300849655000033',
		uta2010: '300849655000033',
		latitude: -31.93650466,
		longitude: -60.374539185,
		municipalityId: 1717
	},
	{
		id: 752,
		name: 'ESTACION YUQUERI',
		uta2020: '300159055083000',
		uta2010: '300159055083000',
		latitude: -31.396381239,
		longitude: -58.161153544,
		municipalityId: 1795
	},
	{
		id: 753,
		name: 'LOMA LIMPIA',
		uta2020: '300359210000034',
		uta2010: '300359210000034',
		latitude: -30.817385675,
		longitude: -59.04020264,
		municipalityId: 1607
	},
	{
		id: 754,
		name: 'EL GATO',
		uta2020: '300359210000021',
		uta2010: '300359210000021',
		latitude: -30.730064901,
		longitude: -59.013136677,
		municipalityId: 1607
	},
	{
		id: 755,
		name: 'COLONIA OFICIAL Nº 13',
		uta2020: '3007000000A18000000',
		uta2010: null,
		latitude: -30.6792,
		longitude: -59.1646,
		municipalityId: 1579
	},
	{
		id: 756,
		name: 'GONZALEZ CALDERON',
		uta2020: '300499300000024',
		uta2010: '300499300000024',
		latitude: -32.977748988,
		longitude: -59.412168071,
		municipalityId: 1568
	},
	{
		id: 757,
		name: 'LAS TOSCAS',
		uta2020: '300709470000079',
		uta2010: '300709470000079',
		latitude: -30.494583172,
		longitude: -59.102198129,
		municipalityId: 1580
	},
	{
		id: 758,
		name: 'CRUCESITAS TERCERA',
		uta2020: '300779535000A11',
		uta2010: null,
		latitude: -32.3889,
		longitude: -59.9333,
		municipalityId: 1699
	},
	{
		id: 759,
		name: 'DISTRITO COSTA URUGUAY SUR',
		uta2020: '300569335000079',
		uta2010: '300569335000079',
		latitude: -33.07416698,
		longitude: -58.50488032,
		municipalityId: 1620
	},
	{
		id: 760,
		name: 'MONTE REDONDO',
		uta2020: '300499305000033',
		uta2010: '300499305000033',
		latitude: -32.953317596,
		longitude: -59.753801232,
		municipalityId: 1569
	},
	{
		id: 761,
		name: 'LAS TUNAS',
		uta2020: '300289145000052',
		uta2010: '300289145000052',
		latitude: -30.339389359,
		longitude: -58.211966115,
		municipalityId: 1551
	},
	{
		id: 762,
		name: 'SAUCE SUD',
		uta2020: '300919830000037',
		uta2010: '300919830000037',
		latitude: -32.663736526,
		longitude: -59.212647335,
		municipalityId: 1810
	},
	{
		id: 763,
		name: 'LOS CAJONES',
		uta2020: '740499014040000',
		uta2010: '740499014040000',
		latitude: -32.025751305,
		longitude: -65.374936148,
		municipalityId: 1107
	},
	{
		id: 764,
		name: 'LAS BARRANCAS',
		uta2020: '740499014000039',
		uta2010: '740499014000039',
		latitude: -32.036628723,
		longitude: -65.392280579,
		municipalityId: 1107
	},
	{
		id: 765,
		name: 'LAS ISLITAS',
		uta2020: '740499014000041',
		uta2010: '740499014000041',
		latitude: -32.092670441,
		longitude: -65.454498291,
		municipalityId: 1107
	},
	{
		id: 766,
		name: 'SANTA ANA',
		uta2020: '740499014000072',
		uta2010: '740499014000072',
		latitude: -32.039221541,
		longitude: -65.393463284,
		municipalityId: 1107
	},
	{
		id: 767,
		name: 'BALDE DE ESCUDERO',
		uta2020: '740499014000005',
		uta2010: '740499014000005',
		latitude: -32.09212653,
		longitude: -65.56649133,
		municipalityId: 1107
	},
	{
		id: 768,
		name: 'LAS PALOMAS',
		uta2020: '740499014000042',
		uta2010: '740499014000042',
		latitude: -32.06323545,
		longitude: -65.4731808,
		municipalityId: 1107
	},
	{
		id: 769,
		name: 'COLONIA CECILIO ECHEVERRIA',
		uta2020: '180910188000009',
		uta2010: '180910188000009',
		latitude: -28.939317,
		longitude: -59.147804,
		municipalityId: 2018
	},
	{
		id: 770,
		name: 'CAZADORES CORRENTINOS',
		uta2020: '180350059010000',
		uta2010: '180350059010000',
		latitude: -29.978782726,
		longitude: -58.302435672,
		municipalityId: 2043
	},
	{
		id: 771,
		name: 'LAS GRUTAS',
		uta2020: '620770228010000',
		uta2010: '620770228010000',
		latitude: -40.80609332,
		longitude: -65.084701976,
		municipalityId: 1258
	},
	{
		id: 772,
		name: 'CAMPO HARDY',
		uta2020: '820492808000012',
		uta2010: '820492808000012',
		latitude: -28.14476068,
		longitude: -59.261155344,
		municipalityId: 949
	},
	{
		id: 773,
		name: 'LOS TABANOS',
		uta2020: '821334188000084',
		uta2010: '821334188000084',
		latitude: -28.456547965,
		longitude: -59.982616002,
		municipalityId: 998
	},
	{
		id: 774,
		name: 'EL CRUCERO',
		uta2020: '860706431040000',
		uta2010: '860706431040000',
		latitude: -27.582545733,
		longitude: -63.288605805,
		municipalityId: 1416
	},
	{
		id: 775,
		name: 'SALTO ENCANTADO',
		uta2020: '540140050080000',
		uta2010: '540140035080000',
		latitude: -27.082279787,
		longitude: -54.833485609,
		municipalityId: 2099
	},
	{
		id: 776,
		name: 'ALGARROBAL',
		uta2020: '181610399000002',
		uta2010: '181610399000002',
		latitude: -28.883931336,
		longitude: -58.78485627,
		municipalityId: 2039
	},
	{
		id: 777,
		name: 'CERNA',
		uta2020: '181610399000017',
		uta2010: '181610399000017',
		latitude: -28.871640644,
		longitude: -58.867777267,
		municipalityId: 2039
	},
	{
		id: 778,
		name: 'COSTA SANTA LUCIA',
		uta2020: '181610399000024',
		uta2010: '181610399000024',
		latitude: -28.8131898,
		longitude: -58.9311883,
		municipalityId: 2039
	},
	{
		id: 779,
		name: '9 DE JULIO',
		uta2020: '181610399030000',
		uta2010: '181610399030000',
		latitude: -28.841834863,
		longitude: -58.828046384,
		municipalityId: 2039
	},
	{
		id: 780,
		name: 'COLONIA JUAN RAMON VIDAL',
		uta2020: '181610399000020',
		uta2010: '181610399000020',
		latitude: -28.863767687,
		longitude: -58.821718289,
		municipalityId: 2039
	},
	{
		id: 781,
		name: 'ARROYO VENTANA',
		uta2020: '620845154030000',
		uta2010: '620845154030000',
		latitude: -41.665393782,
		longitude: -66.086013555,
		municipalityId: 1237
	},
	{
		id: 782,
		name: 'CAÑADA SECA',
		uta2020: '063920392020000',
		uta2010: '063920392020000',
		latitude: -34.415505456,
		longitude: -62.961855381,
		municipalityId: 593
	},
	{
		id: 783,
		name: 'SAN GENARO',
		uta2020: '063920392000025',
		uta2010: '063920392000025',
		latitude: -34.7236644,
		longitude: -63.2305756,
		municipalityId: 593
	},
	{
		id: 784,
		name: 'LOS LAURELES',
		uta2020: '063920392000023',
		uta2010: '063920392000023',
		latitude: -35.1243704,
		longitude: -62.8879677,
		municipalityId: 593
	},
	{
		id: 785,
		name: 'MASSEY',
		uta2020: '063920392060000',
		uta2010: '063920392060000',
		latitude: -35.049089229,
		longitude: -63.121887684,
		municipalityId: 593
	},
	{
		id: 786,
		name: 'ESTANCIA EL MERIDIANO',
		uta2020: '063920392000013',
		uta2010: '063920392000013',
		latitude: -35.221642,
		longitude: -63.3265828,
		municipalityId: 593
	},
	{
		id: 787,
		name: 'GENERAL VILLEGAS',
		uta2020: '063920392050000',
		uta2010: '063920392050000',
		latitude: -35.033841989,
		longitude: -63.014663711,
		municipalityId: 593
	},
	{
		id: 788,
		name: 'COLONIA LA BELITA',
		uta2020: '063920392000005',
		uta2010: '063920392000005',
		latitude: -34.7937801,
		longitude: -62.7583179,
		municipalityId: 593
	},
	{
		id: 789,
		name: 'LA JOSEFA',
		uta2020: '063920392000018',
		uta2010: '063920392000018',
		latitude: -34.62654,
		longitude: -62.9779,
		municipalityId: 593
	},
	{
		id: 790,
		name: 'GONDRA',
		uta2020: '063920392000016',
		uta2010: '063920392000016',
		latitude: -34.748626709,
		longitude: -63.351810455,
		municipalityId: 593
	},
	{
		id: 791,
		name: 'VILLA CICLON',
		uta2020: '063920392000028',
		uta2010: '063920392000028',
		latitude: -35.026413451,
		longitude: -63.024581303,
		municipalityId: 593
	},
	{
		id: 792,
		name: 'MOORES',
		uta2020: '063920392000024',
		uta2010: '063920392000024',
		latitude: -34.9561332,
		longitude: -62.9115124,
		municipalityId: 593
	},
	{
		id: 793,
		name: 'CAMPOS FRIA',
		uta2020: '063920392000004',
		uta2010: '063920392000004',
		latitude: -34.8659429,
		longitude: -63.2990358,
		municipalityId: 593
	},
	{
		id: 794,
		name: 'PICHINCHA',
		uta2020: '063920392070000',
		uta2010: '063920392070000',
		latitude: -34.580451668,
		longitude: -62.351639524,
		municipalityId: 593
	},
	{
		id: 795,
		name: 'DRABBLE',
		uta2020: '063920392000007',
		uta2010: '063920392000007',
		latitude: -34.919540278,
		longitude: -62.763161696,
		municipalityId: 593
	},
	{
		id: 796,
		name: 'EL RECAO',
		uta2020: '063920392000010',
		uta2010: '063920392000010',
		latitude: -35.0650802,
		longitude: -62.7519696,
		municipalityId: 593
	},
	{
		id: 797,
		name: 'SAN JOSE',
		uta2020: '063920392000026',
		uta2010: '063920392000026',
		latitude: -35.2006073,
		longitude: -63.050292969,
		municipalityId: 593
	},
	{
		id: 798,
		name: 'ESCUELA AGRARIA',
		uta2020: '063920392000011',
		uta2010: '063920392000011',
		latitude: -34.9939394,
		longitude: -63.036951,
		municipalityId: 593
	},
	{
		id: 799,
		name: 'FORTIN REPUBLICA',
		uta2020: '063920392000014',
		uta2010: '063920392000014',
		latitude: -34.493797302,
		longitude: -63.302417755,
		municipalityId: 593
	},
	{
		id: 800,
		name: 'LA MARGARITA',
		uta2020: '063920392000019',
		uta2010: '063920392000019',
		latitude: -34.4708095,
		longitude: -62.2909553,
		municipalityId: 593
	},
	{
		id: 801,
		name: 'ESTACION MILLACO',
		uta2020: '063920392000012',
		uta2010: '063920392000012',
		latitude: -35.2372804,
		longitude: -62.9909231,
		municipalityId: 593
	},
	{
		id: 802,
		name: 'VILLA SABOYA',
		uta2020: '063920392110000',
		uta2010: '063920392110000',
		latitude: -34.460791634,
		longitude: -62.649344457,
		municipalityId: 593
	},
	{
		id: 803,
		name: 'EL DIA',
		uta2020: '063920392000009',
		uta2010: '063920392000009',
		latitude: -34.7401431,
		longitude: -62.8363789,
		municipalityId: 593
	},
	{
		id: 804,
		name: 'CUARTEL II',
		uta2020: '063920392000006',
		uta2010: '063920392000006',
		latitude: -35.0480151,
		longitude: -62.9429754,
		municipalityId: 593
	},
	{
		id: 805,
		name: 'CORONEL CHARLONE',
		uta2020: '063920392030000',
		uta2010: '063920392030000',
		latitude: -34.672994562,
		longitude: -63.372445484,
		municipalityId: 593
	},
	{
		id: 806,
		name: 'PIEDRITAS',
		uta2020: '063920392080000',
		uta2010: '063920392080000',
		latitude: -34.771104541,
		longitude: -62.984696576,
		municipalityId: 593
	},
	{
		id: 807,
		name: 'VILLA SAUZE',
		uta2020: '063920392120000',
		uta2010: '063920392120000',
		latitude: -35.28582982,
		longitude: -63.368205548,
		municipalityId: 593
	},
	{
		id: 808,
		name: 'LA CATALINA',
		uta2020: '063920392000017',
		uta2010: '063920392000017',
		latitude: -34.98356,
		longitude: -63.1568703,
		municipalityId: 593
	},
	{
		id: 809,
		name: 'SANTA ELEODORA',
		uta2020: '063920392090000',
		uta2010: '063920392090000',
		latitude: -34.692118007,
		longitude: -62.695793268,
		municipalityId: 593
	},
	{
		id: 810,
		name: 'TAMBEROS UNIDOS',
		uta2020: '063920392000027',
		uta2010: '063920392000027',
		latitude: -34.5923089,
		longitude: -63.3831985,
		municipalityId: 593
	},
	{
		id: 811,
		name: 'LOS ANGELES',
		uta2020: '063920392000021',
		uta2010: '063920392000021',
		latitude: -34.492135,
		longitude: -62.5510671,
		municipalityId: 593
	},
	{
		id: 812,
		name: 'EMILIO V. BUNGE',
		uta2020: '063920392040000',
		uta2010: '063920392040000',
		latitude: -34.779832826,
		longitude: -63.196096486,
		municipalityId: 593
	},
	{
		id: 813,
		name: 'BANDERALO',
		uta2020: '063920392010000',
		uta2010: '063920392010000',
		latitude: -35.012466661,
		longitude: -63.374156346,
		municipalityId: 593
	},
	{
		id: 814,
		name: 'VOLTA',
		uta2020: '063920392000029',
		uta2010: '063920392000029',
		latitude: -34.967210405,
		longitude: -62.661796063,
		municipalityId: 593
	},
	{
		id: 815,
		name: 'CAMPESINOS UNIDOS',
		uta2020: '063920392000002',
		uta2010: '063920392000002',
		latitude: -34.8579191,
		longitude: -63.1611931,
		municipalityId: 593
	},
	{
		id: 816,
		name: 'SANTA REGINA',
		uta2020: '063920392100000',
		uta2010: '063920392100000',
		latitude: -34.548335664,
		longitude: -63.173272873,
		municipalityId: 593
	},
	{
		id: 817,
		name: 'LA TRADICION',
		uta2020: '063920392000020',
		uta2010: '063920392000020',
		latitude: -34.434653,
		longitude: -63.2803744,
		municipalityId: 593
	},
	{
		id: 818,
		name: 'CANNING',
		uta2020: '062600260010001',
		uta2010: '062600260010001',
		latitude: -34.884979135,
		longitude: -58.477809937,
		municipalityId: 594
	},
	{
		id: 819,
		name: 'LUIS GUILLON',
		uta2020: '062600260010003',
		uta2010: '062600260010003',
		latitude: -34.800196436,
		longitude: -58.453096405,
		municipalityId: 594
	},
	{
		id: 820,
		name: '9 DE ABRIL',
		uta2020: '062600260010005',
		uta2010: '062600260010005',
		latitude: -34.756507577,
		longitude: -58.490292351,
		municipalityId: 594
	},
	{
		id: 821,
		name: 'MONTE GRANDE',
		uta2020: '062600260010004',
		uta2010: '062600260010004',
		latitude: -34.819136863,
		longitude: -58.47269476,
		municipalityId: 594
	},
	{
		id: 822,
		name: 'EL JAGUEL',
		uta2020: '062600260010002',
		uta2010: '062600260010002',
		latitude: -34.830450504,
		longitude: -58.49486942,
		municipalityId: 594
	},
	{
		id: 823,
		name: 'VILLA HUIDOBRO',
		uta2020: '140350252120000',
		uta2010: '140350252120000',
		latitude: -34.837181772,
		longitude: -64.583357166,
		municipalityId: 322
	},
	{
		id: 824,
		name: 'LA JUANITA',
		uta2020: '300219100123000',
		uta2010: '300219100123000',
		latitude: -31.875376802,
		longitude: -60.649121973,
		municipalityId: 1639
	},
	{
		id: 825,
		name: 'LA JAULA',
		uta2020: '300219100127000',
		uta2010: '300219100127000',
		latitude: -31.832718484,
		longitude: -60.604847156,
		municipalityId: 1639
	},
	{
		id: 826,
		name: 'COLONIA ENSAYO',
		uta2020: '300219100070000',
		uta2010: '300219100070000',
		latitude: -31.867257261,
		longitude: -60.575290187,
		municipalityId: 1639
	},
	{
		id: 827,
		name: 'LOS CERRILLOS',
		uta2020: '065470547000014',
		uta2010: '065470547000014',
		latitude: -35.704696756,
		longitude: -58.711562654,
		municipalityId: 595
	},
	{
		id: 828,
		name: 'FUNKE',
		uta2020: '065470547000007',
		uta2010: '065470547000007',
		latitude: -35.461845398,
		longitude: -58.98197937,
		municipalityId: 595
	},
	{
		id: 829,
		name: 'SAN MIGUEL DEL MONTE',
		uta2020: '065470547020000',
		uta2010: '065470547020000',
		latitude: -35.439164324,
		longitude: -58.809459836,
		municipalityId: 595
	},
	{
		id: 830,
		name: 'LA ELINA',
		uta2020: '065470547000013',
		uta2010: '065470547000013',
		latitude: -35.3966223,
		longitude: -58.9963732,
		municipalityId: 595
	},
	{
		id: 831,
		name: 'SAN GENARO',
		uta2020: '065470547000017',
		uta2010: '065470547000017',
		latitude: -35.617645264,
		longitude: -58.848487861,
		municipalityId: 595
	},
	{
		id: 832,
		name: 'ABBOTT',
		uta2020: '065470547010000',
		uta2010: '065470547010000',
		latitude: -35.282506211,
		longitude: -58.804261909,
		municipalityId: 595
	},
	{
		id: 833,
		name: 'SANTA MARIA',
		uta2020: '065470547000019',
		uta2010: '065470547000019',
		latitude: -35.5434312,
		longitude: -58.6674757,
		municipalityId: 595
	},
	{
		id: 834,
		name: 'EL ROSARIO',
		uta2020: '065470547000004',
		uta2010: '065470547000004',
		latitude: -35.480861664,
		longitude: -58.809951782,
		municipalityId: 595
	},
	{
		id: 835,
		name: 'EL SIASGO',
		uta2020: '065470547000005',
		uta2010: '065470547000005',
		latitude: -35.6888332,
		longitude: -58.5679214,
		municipalityId: 595
	},
	{
		id: 836,
		name: 'ZENON VIDELA DORNA',
		uta2020: '065470547030000',
		uta2010: '065470547030000',
		latitude: -35.544773404,
		longitude: -58.885591192,
		municipalityId: 595
	},
	{
		id: 837,
		name: 'GOYENECHE',
		uta2020: '065470547000008',
		uta2010: '065470547000008',
		latitude: -35.335578918,
		longitude: -58.721755981,
		municipalityId: 595
	},
	{
		id: 838,
		name: 'SAN MARCELO',
		uta2020: '065470547000018',
		uta2010: '065470547000018',
		latitude: -35.4898149,
		longitude: -58.5680359,
		municipalityId: 595
	},
	{
		id: 839,
		name: 'EL DORADO',
		uta2020: '065470547000003',
		uta2010: '065470547000003',
		latitude: -35.5785579,
		longitude: -58.9391774,
		municipalityId: 595
	},
	{
		id: 840,
		name: 'LA COSTA',
		uta2020: '065470547000012',
		uta2010: '065470547000012',
		latitude: -35.50542465,
		longitude: -58.953416024,
		municipalityId: 595
	},
	{
		id: 841,
		name: 'MAHON',
		uta2020: '065470547000016',
		uta2010: '065470547000016',
		latitude: -35.3743493,
		longitude: -58.692644,
		municipalityId: 595
	},
	{
		id: 842,
		name: 'SANTO DOMINGO',
		uta2020: '820703260300000',
		uta2010: '820703260300000',
		latitude: -31.122276836,
		longitude: -60.888885457,
		municipalityId: 863
	},
	{
		id: 843,
		name: 'TRES CAPONES',
		uta2020: '540070028070000',
		uta2010: '540070028070000',
		latitude: -28.00008727,
		longitude: -55.608042878,
		municipalityId: 2103
	},
	{
		id: 844,
		name: 'LAS TUNAS',
		uta2020: '540070028000018',
		uta2010: '540070028000018',
		latitude: -27.957632868,
		longitude: -55.661198535,
		municipalityId: 2103
	},
	{
		id: 845,
		name: 'COLONIA SANTA ELOISA',
		uta2020: '300280133000024',
		uta2010: '300280133000024',
		latitude: -30.775064998,
		longitude: -57.842010243,
		municipalityId: 1552
	},
	{
		id: 846,
		name: 'VILLA DEL ROSARIO',
		uta2020: '300280133120000',
		uta2010: '300280133120000',
		latitude: -30.796831861,
		longitude: -57.911571917,
		municipalityId: 1552
	},
	{
		id: 847,
		name: 'MANFREDI',
		uta2020: '141191036130000',
		uta2010: '141191036130000',
		latitude: -31.844058563,
		longitude: -63.746074607,
		municipalityId: 301
	},
	{
		id: 848,
		name: 'LAS TINAJAS',
		uta2020: '861196511050000',
		uta2010: '861196511050000',
		latitude: -27.46147289,
		longitude: -62.918808896,
		municipalityId: 1440
	},
	{
		id: 849,
		name: 'ARAUCO',
		uta2020: '460070007020000',
		uta2010: '460070007020000',
		latitude: -28.583403187,
		longitude: -66.803641294,
		municipalityId: 2000
	},
	{
		id: 850,
		name: 'AIMOGASTA',
		uta2020: '460070007010001',
		uta2010: '460070007010001',
		latitude: -28.558989845,
		longitude: -66.827285102,
		municipalityId: 2000
	},
	{
		id: 851,
		name: 'UDPINANGO',
		uta2020: '460070007000013',
		uta2010: '460070007000013',
		latitude: -28.67756725,
		longitude: -66.81429788,
		municipalityId: 2000
	},
	{
		id: 852,
		name: 'LA CAUCHITA',
		uta2020: '460070007000005',
		uta2010: '460070007000005',
		latitude: -28.390656291,
		longitude: -66.571572733,
		municipalityId: 2000
	},
	{
		id: 853,
		name: 'TINOCAN',
		uta2020: '460070007000012',
		uta2010: '460070007000012',
		latitude: -28.628946304,
		longitude: -66.593231201,
		municipalityId: 2000
	},
	{
		id: 854,
		name: 'LA CIMBRITA',
		uta2020: '460070007000006',
		uta2010: '460070007000006',
		latitude: -28.34101992,
		longitude: -66.67336582,
		municipalityId: 2000
	},
	{
		id: 855,
		name: 'TERMAS DE SANTA TERESITA',
		uta2020: '460070007045000',
		uta2010: '460070007045000',
		latitude: -28.591774967,
		longitude: -66.556388593,
		municipalityId: 2000
	},
	{
		id: 856,
		name: 'SAN ANTONIO',
		uta2020: '460070007010003',
		uta2010: '460070007010003',
		latitude: -28.555380138,
		longitude: -66.801385653,
		municipalityId: 2000
	},
	{
		id: 857,
		name: 'ESTACION MAZAN',
		uta2020: '460070007040000',
		uta2010: '460070007040000',
		latitude: -28.664826299,
		longitude: -66.516619561,
		municipalityId: 2000
	},
	{
		id: 858,
		name: 'VILLA MAZAN',
		uta2020: '460070007050000',
		uta2010: '460070007050000',
		latitude: -28.658628183,
		longitude: -66.555275885,
		municipalityId: 2000
	},
	{
		id: 859,
		name: 'BAÑADO DE LOS PANTANOS',
		uta2020: '460070007030000',
		uta2010: '460070007030000',
		latitude: -28.387178803,
		longitude: -66.836912235,
		municipalityId: 2000
	},
	{
		id: 860,
		name: 'MACHIGASTA',
		uta2020: '460070007010002',
		uta2010: '460070007010002',
		latitude: -28.541084377,
		longitude: -66.80702961,
		municipalityId: 2000
	},
	{
		id: 861,
		name: 'LA CANCHITA',
		uta2020: '460070007000004',
		uta2010: '460070007000004',
		latitude: -28.39283371,
		longitude: -66.568237305,
		municipalityId: 2000
	},
	{
		id: 862,
		name: 'CUESTA BLANCA',
		uta2020: '140912490080000',
		uta2010: '140912490080000',
		latitude: -31.478778189,
		longitude: -64.577346691,
		municipalityId: 275
	},
	{
		id: 863,
		name: 'TRES LOMAS',
		uta2020: '060630063000049',
		uta2010: '060630063000049',
		latitude: -37.4085551,
		longitude: -58.1355794,
		municipalityId: 596
	},
	{
		id: 864,
		name: 'EL PANTANOSO',
		uta2020: '060630063000015',
		uta2010: '060630063000015',
		latitude: -37.630111696,
		longitude: -58.065959958,
		municipalityId: 596
	},
	{
		id: 865,
		name: 'SAN SILVERIO',
		uta2020: '060630063000045',
		uta2010: '060630063000045',
		latitude: -38.0435607,
		longitude: -58.1828041,
		municipalityId: 596
	},
	{
		id: 866,
		name: 'LOS CARDOS',
		uta2020: '060630063000040',
		uta2010: '060630063000040',
		latitude: -37.732262292,
		longitude: -58.029609885,
		municipalityId: 596
	},
	{
		id: 867,
		name: 'BALCARCE',
		uta2020: '060630063010000',
		uta2010: '060630063010000',
		latitude: -37.848277929,
		longitude: -58.255166584,
		municipalityId: 596
	},
	{
		id: 868,
		name: 'LA SARA',
		uta2020: '060630063000036',
		uta2010: '060630063000036',
		latitude: -37.547756197,
		longitude: -58.21223452,
		municipalityId: 596
	},
	{
		id: 869,
		name: 'EL GLIPTODONTE',
		uta2020: '060630063000012',
		uta2010: '060630063000012',
		latitude: -37.5886373,
		longitude: -57.9930625,
		municipalityId: 596
	},
	{
		id: 870,
		name: 'TRES ESQUINAS',
		uta2020: '060630063000048',
		uta2010: '060630063000048',
		latitude: -37.921346304,
		longitude: -58.400841863,
		municipalityId: 596
	},
	{
		id: 871,
		name: 'ALELUYA',
		uta2020: '060630063000001',
		uta2010: '060630063000001',
		latitude: -37.5739424,
		longitude: -58.6177189,
		municipalityId: 596
	},
	{
		id: 872,
		name: 'BOSCH',
		uta2020: '060630063000003',
		uta2010: '060630063000003',
		latitude: -37.6488543,
		longitude: -58.2319235,
		municipalityId: 596
	},
	{
		id: 873,
		name: 'COLONIA BALCARCE',
		uta2020: '060630063000007',
		uta2010: '060630063000007',
		latitude: -37.7549509,
		longitude: -58.3270049,
		municipalityId: 596
	},
	{
		id: 874,
		name: 'SAN SIMON',
		uta2020: '060630063000046',
		uta2010: '060630063000046',
		latitude: -37.561848014,
		longitude: -58.555322845,
		municipalityId: 596
	},
	{
		id: 875,
		name: 'BELLA VISTA',
		uta2020: '060630063000002',
		uta2010: '060630063000002',
		latitude: -37.89504121,
		longitude: -58.237092043,
		municipalityId: 596
	},
	{
		id: 876,
		name: 'EL CAPRICHO',
		uta2020: '060630063000009',
		uta2010: '060630063000009',
		latitude: -37.857051,
		longitude: -58.3920838,
		municipalityId: 596
	},
	{
		id: 877,
		name: 'JUAN VICENTY',
		uta2020: '060630063000028',
		uta2010: '060630063000028',
		latitude: -37.7626686,
		longitude: -58.1461758,
		municipalityId: 596
	},
	{
		id: 878,
		name: 'EL VOLCAN',
		uta2020: '060630063000021',
		uta2010: '060630063000021',
		latitude: -37.794147493,
		longitude: -58.025726347,
		municipalityId: 596
	},
	{
		id: 879,
		name: 'ESQ DE LAHITTE',
		uta2020: '060630063000022',
		uta2010: '060630063000022',
		latitude: -38.0503027,
		longitude: -58.338549,
		municipalityId: 596
	},
	{
		id: 880,
		name: 'CUARTEL III',
		uta2020: '060630063000008',
		uta2010: '060630063000008',
		latitude: -37.840806515,
		longitude: -58.226633922,
		municipalityId: 596
	},
	{
		id: 881,
		name: 'LOS PINOS',
		uta2020: '060630063020000',
		uta2010: '060630063020000',
		latitude: -37.94120576,
		longitude: -58.322592015,
		municipalityId: 596
	},
	{
		id: 882,
		name: 'RAMOS OTERO',
		uta2020: '060630063040000',
		uta2010: '060630063040000',
		latitude: -37.542635371,
		longitude: -58.340718551,
		municipalityId: 596
	},
	{
		id: 883,
		name: 'LA ESPERANZA',
		uta2020: '060630063000032',
		uta2010: '060630063000032',
		latitude: -37.7863609,
		longitude: -57.9695415,
		municipalityId: 596
	},
	{
		id: 884,
		name: 'CINCO CERROS',
		uta2020: '060630063000006',
		uta2010: '060630063000006',
		latitude: -37.796384986,
		longitude: -58.266454941,
		municipalityId: 596
	},
	{
		id: 885,
		name: 'EL PARQUE',
		uta2020: '060630063000016',
		uta2010: '060630063000016',
		latitude: -37.8896836,
		longitude: -58.3094936,
		municipalityId: 596
	},
	{
		id: 886,
		name: 'LA PALOMA',
		uta2020: '060630063000033',
		uta2010: '060630063000033',
		latitude: -37.64469,
		longitude: -57.94601,
		municipalityId: 596
	},
	{
		id: 887,
		name: 'ESTACION LA ALBORADA',
		uta2020: '060630063000023',
		uta2010: '060630063000023',
		latitude: -37.4628225,
		longitude: -58.2487315,
		municipalityId: 596
	},
	{
		id: 888,
		name: 'LLANOS',
		uta2020: '060630063000039',
		uta2010: '060630063000039',
		latitude: -37.8875805,
		longitude: -58.1224812,
		municipalityId: 596
	},
	{
		id: 889,
		name: 'SAN AGUSTIN',
		uta2020: '060630063050000',
		uta2010: '060630063050000',
		latitude: -38.012283856,
		longitude: -58.355377762,
		municipalityId: 596
	},
	{
		id: 890,
		name: 'CABAÑA SAN JUAN',
		uta2020: '060630063000004',
		uta2010: '060630063000004',
		latitude: -37.5618482,
		longitude: -58.5553242,
		municipalityId: 596
	},
	{
		id: 891,
		name: 'LA DELIA',
		uta2020: '060630063000031',
		uta2010: '060630063000031',
		latitude: -37.964065553,
		longitude: -58.223571801,
		municipalityId: 596
	},
	{
		id: 892,
		name: 'NAPALEOFU',
		uta2020: '060630063030000',
		uta2010: '060630063030000',
		latitude: -37.625498021,
		longitude: -58.746186236,
		municipalityId: 596
	},
	{
		id: 893,
		name: 'VILLA LAGUNA LA BRAVA',
		uta2020: '060630063060000',
		uta2010: '060630063060000',
		latitude: -37.859628528,
		longitude: -57.980600874,
		municipalityId: 596
	},
	{
		id: 894,
		name: 'SAN ALBERTO',
		uta2020: '060630063000043',
		uta2010: '060630063000043',
		latitude: -37.673091,
		longitude: -58.4530676,
		municipalityId: 596
	},
	{
		id: 895,
		name: 'EL VIGILANTE',
		uta2020: '060630063000019',
		uta2010: '060630063000019',
		latitude: -37.6750758,
		longitude: -57.7660283,
		municipalityId: 596
	},
	{
		id: 896,
		name: 'EL CERRO',
		uta2020: '060630063000010',
		uta2010: '060630063000010',
		latitude: -37.760051729,
		longitude: -58.158931757,
		municipalityId: 596
	},
	{
		id: 897,
		name: 'EL VERANO',
		uta2020: '060630063000018',
		uta2010: '060630063000018',
		latitude: -37.7435626,
		longitude: -58.5568858,
		municipalityId: 596
	},
	{
		id: 898,
		name: 'LA ADELA',
		uta2020: '060630063000029',
		uta2010: '060630063000029',
		latitude: -37.707252505,
		longitude: -57.788246193,
		municipalityId: 596
	},
	{
		id: 899,
		name: 'PUERTA DEL ABRA',
		uta2020: '060630063000041',
		uta2010: '060630063000041',
		latitude: -37.864705255,
		longitude: -58.009749125,
		municipalityId: 596
	},
	{
		id: 900,
		name: 'DEAN FUNES',
		uta2020: '140490371050000',
		uta2010: '140490371050000',
		latitude: -30.422940937,
		longitude: -64.351669766,
		municipalityId: 72
	},
	{
		id: 901,
		name: 'VILLA DEL PRADO',
		uta2020: '141473085320000',
		uta2010: '141473085320000',
		latitude: -31.617939758,
		longitude: -64.392492525,
		municipalityId: 225
	},
	{
		id: 902,
		name: 'CAVANAGH',
		uta2020: '140630504050000',
		uta2010: '140630504050000',
		latitude: -33.478334899,
		longitude: -62.339346455,
		municipalityId: 181
	},
	{
		id: 903,
		name: 'GASTONA',
		uta2020: '900218175000059',
		uta2010: '900218175000059',
		latitude: -27.306110382,
		longitude: -65.534507752,
		municipalityId: 2183
	},
	{
		id: 904,
		name: 'FINCA LEON CORNET',
		uta2020: '900218175000055',
		uta2010: '900218175000055',
		latitude: -27.3046126,
		longitude: -65.61996,
		municipalityId: 2183
	},
	{
		id: 905,
		name: 'GASTONILLA',
		uta2020: '900218175000062',
		uta2010: '900218175000062',
		latitude: -27.334474564,
		longitude: -65.536354065,
		municipalityId: 2183
	},
	{
		id: 906,
		name: 'LA HIGUERA',
		uta2020: '900218175000075',
		uta2010: '900218175000075',
		latitude: -27.304216385,
		longitude: -65.689605713,
		municipalityId: 2183
	},
	{
		id: 907,
		name: 'LAS FALDAS',
		uta2020: '900218175000082',
		uta2010: '900218175000082',
		latitude: -27.282312393,
		longitude: -65.613647461,
		municipalityId: 2183
	},
	{
		id: 908,
		name: 'FINCA LA FALDA',
		uta2020: '900218175000054',
		uta2010: '900218175000054',
		latitude: -27.28382,
		longitude: -65.61723,
		municipalityId: 2183
	},
	{
		id: 909,
		name: 'ARCADIA',
		uta2020: '900218175030000',
		uta2010: '900218175030000',
		latitude: -27.306948484,
		longitude: -65.576067488,
		municipalityId: 2183
	},
	{
		id: 910,
		name: 'CAVIA CUE',
		uta2020: '181400350000010',
		uta2010: '181400350000010',
		latitude: -27.52812434,
		longitude: -58.62991619,
		municipalityId: 2046
	},
	{
		id: 911,
		name: 'COSTA CHICA',
		uta2020: '181400350000014',
		uta2010: '181400350000014',
		latitude: -27.645535691,
		longitude: -58.067176019,
		municipalityId: 2046
	},
	{
		id: 912,
		name: 'TRES CRUCES',
		uta2020: '181400350000077',
		uta2010: '181400350000077',
		latitude: -27.577695168,
		longitude: -58.032899303,
		municipalityId: 2046
	},
	{
		id: 913,
		name: 'MEDIO',
		uta2020: '181400350000054',
		uta2010: '181400350000054',
		latitude: -27.53128983,
		longitude: -58.494191024,
		municipalityId: 2046
	},
	{
		id: 914,
		name: 'EMPEDRADO LIMPIO',
		uta2020: '181400350000020',
		uta2010: '181400350000020',
		latitude: -27.789698731,
		longitude: -58.358207324,
		municipalityId: 2046
	},
	{
		id: 915,
		name: 'INDIO MUERTO',
		uta2020: '181400350000032',
		uta2010: '181400350000032',
		latitude: -27.680973743,
		longitude: -58.224182177,
		municipalityId: 2046
	},
	{
		id: 916,
		name: 'COSTA GRANDE',
		uta2020: '181400350000015',
		uta2010: '181400350000015',
		latitude: -27.439287276,
		longitude: -58.059398722,
		municipalityId: 2046
	},
	{
		id: 917,
		name: 'LAGUNITA',
		uta2020: '181400350000047',
		uta2010: '181400350000047',
		latitude: -27.511921449,
		longitude: -58.434982625,
		municipalityId: 2046
	},
	{
		id: 918,
		name: 'ESPINALLAR',
		uta2020: '181400350000021',
		uta2010: '181400350000021',
		latitude: -27.544004205,
		longitude: -58.565052463,
		municipalityId: 2046
	},
	{
		id: 919,
		name: 'PASO LOVERA',
		uta2020: '181400350000058',
		uta2010: '181400350000058',
		latitude: -27.57539802,
		longitude: -58.63460351,
		municipalityId: 2046
	},
	{
		id: 920,
		name: 'ALBARDONES',
		uta2020: '181400350000002',
		uta2010: '181400350000002',
		latitude: -27.600101792,
		longitude: -58.512793049,
		municipalityId: 2046
	},
	{
		id: 921,
		name: 'RAMONES',
		uta2020: '181400350000064',
		uta2010: '181400350000064',
		latitude: -27.83155477,
		longitude: -58.29555176,
		municipalityId: 2046
	},
	{
		id: 922,
		name: 'ORATORIO',
		uta2020: '181400350000056',
		uta2010: '181400350000056',
		latitude: -27.463206165,
		longitude: -58.347601775,
		municipalityId: 2046
	},
	{
		id: 923,
		name: 'SANTOS LUGARES',
		uta2020: '181400350000073',
		uta2010: '181400350000073',
		latitude: -27.466203512,
		longitude: -58.453865407,
		municipalityId: 2046
	},
	{
		id: 924,
		name: 'ARROYO PONTON',
		uta2020: '181400350000003',
		uta2010: '181400350000003',
		latitude: -27.583343486,
		longitude: -58.599899221,
		municipalityId: 2046
	},
	{
		id: 925,
		name: 'CAMPO GRANDE',
		uta2020: '181400350000006',
		uta2010: '181400350000006',
		latitude: -27.449747291,
		longitude: -58.422386914,
		municipalityId: 2046
	},
	{
		id: 926,
		name: 'AGUIRRE CUE',
		uta2020: '181400350000001',
		uta2010: '181400350000001',
		latitude: -27.41325145,
		longitude: -58.37888858,
		municipalityId: 2046
	},
	{
		id: 927,
		name: 'LOMAS DE GALARZA',
		uta2020: '181400350000050',
		uta2010: '181400350000050',
		latitude: -27.50527435,
		longitude: -58.07111314,
		municipalityId: 2046
	},
	{
		id: 928,
		name: 'EL POLLO',
		uta2020: '181400350000018',
		uta2010: '181400350000018',
		latitude: -27.852492502,
		longitude: -58.380730473,
		municipalityId: 2046
	},
	{
		id: 929,
		name: 'PEICHOTO CUE',
		uta2020: '181400350000059',
		uta2010: '181400350000059',
		latitude: -27.500478743,
		longitude: -58.500933694,
		municipalityId: 2046
	},
	{
		id: 930,
		name: 'MALOYAS',
		uta2020: '181400350000053',
		uta2010: '181400350000053',
		latitude: -27.546982429,
		longitude: -57.917961038,
		municipalityId: 2046
	},
	{
		id: 931,
		name: 'CHAÑAR',
		uta2020: '181400350000012',
		uta2010: '181400350000012',
		latitude: -27.580341357,
		longitude: -57.960112123,
		municipalityId: 2046
	},
	{
		id: 932,
		name: 'ESQUIVEL CUE',
		uta2020: '181400350000022',
		uta2010: '181400350000022',
		latitude: -27.46618962,
		longitude: -58.45410987,
		municipalityId: 2046
	},
	{
		id: 933,
		name: 'CERRUDO CUE',
		uta2020: '181400350000011',
		uta2010: '181400350000011',
		latitude: -27.56861496,
		longitude: -57.937828064,
		municipalityId: 2046
	},
	{
		id: 934,
		name: 'COLONIA LLANO',
		uta2020: '181400350000013',
		uta2010: '181400350000013',
		latitude: -27.502832462,
		longitude: -58.497020612,
		municipalityId: 2046
	},
	{
		id: 935,
		name: 'SAN LUIS DEL PALMAR',
		uta2020: '181400350010000',
		uta2010: '181400350010000',
		latitude: -27.508107841,
		longitude: -58.555474416,
		municipalityId: 2046
	},
	{
		id: 936,
		name: 'TACUARAL',
		uta2020: '181400350000075',
		uta2010: '181400350000075',
		latitude: -27.69394906,
		longitude: -58.1584809,
		municipalityId: 2046
	},
	{
		id: 937,
		name: 'COLONIA EL SIMBOLAR',
		uta2020: '861616245020000',
		uta2010: '861616245020000',
		latitude: -27.750315946,
		longitude: -63.795424786,
		municipalityId: 1388
	},
	{
		id: 938,
		name: 'CAMPO LA UNION',
		uta2020: '821264107000017',
		uta2010: '821264107000017',
		latitude: -32.3729135,
		longitude: -61.5457161,
		municipalityId: 931
	},
	{
		id: 939,
		name: 'LOS CARDOS',
		uta2020: '821264107110000',
		uta2010: '821264107110000',
		latitude: -32.324303114,
		longitude: -61.632111122,
		municipalityId: 931
	},
	{
		id: 940,
		name: 'BARDA DEL MEDIO',
		uta2020: '620420140030000',
		uta2010: '620420140030000',
		latitude: -38.724663336,
		longitude: -68.158056091,
		municipalityId: 1261
	},
	{
		id: 941,
		name: 'CONTRALMIRANTE CORDERO',
		uta2020: '620420140410000',
		uta2010: '620420140410000',
		latitude: -38.757006261,
		longitude: -68.099497211,
		municipalityId: 1261
	},
	{
		id: 942,
		name: 'SANTA MARIA NORTE',
		uta2020: '820703253000045',
		uta2010: '820703253000045',
		latitude: -31.547888772,
		longitude: -61.151227777,
		municipalityId: 864
	},
	{
		id: 943,
		name: 'BUENA VISTA',
		uta2020: '140772427000006',
		uta2010: '140772427000006',
		latitude: -31.391979365,
		longitude: -64.923013659,
		municipalityId: 158
	},
	{
		id: 944,
		name: 'SAN GERONIMO',
		uta2020: '140772427050000',
		uta2010: '140772427050000',
		latitude: -31.340952,
		longitude: -64.913194967,
		municipalityId: 158
	},
	{
		id: 945,
		name: 'PALACIOS',
		uta2020: '820913631210000',
		uta2010: '820913631210000',
		latitude: -30.710669405,
		longitude: -61.623695205,
		municipalityId: 834
	},
	{
		id: 946,
		name: 'EL BRETE',
		uta2020: '660840210000004',
		uta2010: '660840210000004',
		latitude: -26.061208725,
		longitude: -65.316596985,
		municipalityId: 1832
	},
	{
		id: 947,
		name: 'EL TALA',
		uta2020: '660840210020000',
		uta2010: '660840210020000',
		latitude: -26.120891758,
		longitude: -65.287305879,
		municipalityId: 1832
	},
	{
		id: 948,
		name: 'LOS MOGOTES',
		uta2020: '660840210000011',
		uta2010: '660840210000011',
		latitude: -26.032829285,
		longitude: -65.179283142,
		municipalityId: 1832
	},
	{
		id: 949,
		name: 'SENILLOSA',
		uta2020: '580350077110000',
		uta2010: '580350077110000',
		latitude: -39.01130348,
		longitude: -68.433383391,
		municipalityId: 2345
	},
	{
		id: 950,
		name: 'AGUADA TOLEDO',
		uta2020: '580350077000001',
		uta2010: '580350077000001',
		latitude: -38.752823157,
		longitude: -68.837738725,
		municipalityId: 2345
	},
	{
		id: 951,
		name: 'ARROYITO',
		uta2020: '580350077010000',
		uta2010: '580350077010000',
		latitude: -39.074399796,
		longitude: -68.570335064,
		municipalityId: 2345
	},
	{
		id: 952,
		name: 'CHINA MUERTA',
		uta2020: '580350077000013',
		uta2010: '580350077000013',
		latitude: -38.983252348,
		longitude: -68.389051893,
		municipalityId: 2345
	},
	{
		id: 953,
		name: 'LAS PEÑAS',
		uta2020: '141681519060000',
		uta2010: '141681519060000',
		latitude: -30.561752596,
		longitude: -64.001984207,
		municipalityId: 336
	},
	{
		id: 954,
		name: 'LOS ROBLES',
		uta2020: '900708378000105',
		uta2010: '900708378000105',
		latitude: -27.164539093,
		longitude: -65.429218168,
		municipalityId: 2202
	},
	{
		id: 955,
		name: 'SAN JOSE DE FLORES',
		uta2020: '900708378000128',
		uta2010: '900708378000128',
		latitude: -27.141168038,
		longitude: -65.42310723,
		municipalityId: 2202
	},
	{
		id: 956,
		name: 'LA CIENAGA',
		uta2020: '900708378000085',
		uta2010: '900708378000085',
		latitude: -27.1078831,
		longitude: -65.5046157,
		municipalityId: 2202
	},
	{
		id: 957,
		name: 'RINCON DE BALDERRAMA',
		uta2020: '900708378000124',
		uta2010: '900708378000124',
		latitude: -27.1582735,
		longitude: -65.3992214,
		municipalityId: 2202
	},
	{
		id: 958,
		name: 'ACHERAL',
		uta2020: '900708378010000',
		uta2010: '900708378010000',
		latitude: -27.120720505,
		longitude: -65.470564718,
		municipalityId: 2202
	},
	{
		id: 959,
		name: 'ALTO DE LEIVA',
		uta2020: '900708378000002',
		uta2010: '900708378000002',
		latitude: -27.138624191,
		longitude: -65.443618774,
		municipalityId: 2202
	},
	{
		id: 960,
		name: 'ALDEA SAN JUAN',
		uta2020: '300569320020000',
		uta2010: '300569320020000',
		latitude: -32.703788501,
		longitude: -58.779062501,
		municipalityId: 1621
	},
	{
		id: 961,
		name: 'CAMPO SCARAFIOCCA',
		uta2020: '141610000000029',
		uta2010: '141610000000029',
		latitude: -32.029159934,
		longitude: -63.651490793,
		municipalityId: 347
	},
	{
		id: 962,
		name: 'COLONIA GARZON',
		uta2020: '141610000000033',
		uta2010: '141610000000033',
		latitude: -32.0377388,
		longitude: -63.767742157,
		municipalityId: 347
	},
	{
		id: 963,
		name: 'CAMPO EL CHILO',
		uta2020: '141610000000011',
		uta2010: '141610000000011',
		latitude: -32.407674142,
		longitude: -63.900343074,
		municipalityId: 347
	},
	{
		id: 964,
		name: 'CAMPO FIORETTA',
		uta2020: '141610000000012',
		uta2010: '141610000000012',
		latitude: -32.2375162,
		longitude: -63.6930005,
		municipalityId: 347
	},
	{
		id: 965,
		name: 'CAPILLA GARZON',
		uta2020: '141610000000031',
		uta2010: '141610000000031',
		latitude: -32.08147638,
		longitude: -63.735859406,
		municipalityId: 347
	},
	{
		id: 966,
		name: 'CAMPO PEROTTI',
		uta2020: '141610000000023',
		uta2010: '141610000000023',
		latitude: -32.082973383,
		longitude: -63.455066173,
		municipalityId: 347
	},
	{
		id: 967,
		name: 'COLONIA LOLA',
		uta2020: '141610000000034',
		uta2010: '141610000000034',
		latitude: -32.69231463,
		longitude: -63.950359442,
		municipalityId: 347
	},
	{
		id: 968,
		name: 'CAMPO CAPRIVI',
		uta2020: '141610000000009',
		uta2010: '141610000000009',
		latitude: -32.634239536,
		longitude: -63.84590208,
		municipalityId: 347
	},
	{
		id: 969,
		name: 'LAS PETACAS',
		uta2020: '141610000000045',
		uta2010: '141610000000045',
		latitude: -32.478052516,
		longitude: -63.984056494,
		municipalityId: 347
	},
	{
		id: 970,
		name: 'CAMPO LAS SELVAS',
		uta2020: '141610000000017',
		uta2010: '141610000000017',
		latitude: -32.55647951,
		longitude: -63.890563806,
		municipalityId: 347
	},
	{
		id: 971,
		name: 'CAMPO SAN ALFREDO',
		uta2020: '141610000000028',
		uta2010: '141610000000028',
		latitude: -31.96706495,
		longitude: -63.097019855,
		municipalityId: 347
	},
	{
		id: 972,
		name: 'CAMPO MACAGNO',
		uta2020: '141610000000018',
		uta2010: '141610000000018',
		latitude: -32.1601435,
		longitude: -63.7514118,
		municipalityId: 347
	},
	{
		id: 973,
		name: 'CAMPO ROSSI',
		uta2020: '141610000000026',
		uta2010: '141610000000026',
		latitude: -32.237706715,
		longitude: -63.467613889,
		municipalityId: 347
	},
	{
		id: 974,
		name: 'CAMPO BERTOGLIO',
		uta2020: '141610000000006',
		uta2010: '141610000000006',
		latitude: -32.135877548,
		longitude: -63.697770634,
		municipalityId: 347
	},
	{
		id: 975,
		name: 'CUESTA DEL RIO',
		uta2020: '141610000000038',
		uta2010: '141610000000038',
		latitude: -32.1759434,
		longitude: -63.9855225,
		municipalityId: 347
	},
	{
		id: 976,
		name: 'COLONIA BELLA VISTA',
		uta2020: '141610000000032',
		uta2010: '141610000000032',
		latitude: -32.275995332,
		longitude: -64.040136412,
		municipalityId: 347
	},
	{
		id: 977,
		name: 'CAMPO NIGRO SUR',
		uta2020: '141610000000021',
		uta2010: '141610000000021',
		latitude: -32.12448934,
		longitude: -63.568090049,
		municipalityId: 347
	},
	{
		id: 978,
		name: 'CAMPO JANON',
		uta2020: '141610000000015',
		uta2010: '141610000000015',
		latitude: -32.320025951,
		longitude: -63.616118208,
		municipalityId: 347
	},
	{
		id: 979,
		name: 'CAMPO NIGRO NORTE',
		uta2020: '141610000000020',
		uta2010: '141610000000020',
		latitude: -32.031386827,
		longitude: -63.478522151,
		municipalityId: 347
	},
	{
		id: 980,
		name: 'CAMPO LA ROSA',
		uta2020: '141610000000016',
		uta2010: '141610000000016',
		latitude: -32.632001919,
		longitude: -63.746644375,
		municipalityId: 347
	},
	{
		id: 981,
		name: 'COLONIA SANTA CATALINA',
		uta2020: '141610000000036',
		uta2010: '141610000000036',
		latitude: -32.078188318,
		longitude: -63.986324659,
		municipalityId: 347
	},
	{
		id: 982,
		name: 'CAMPO DEL BEL',
		uta2020: '141610000000010',
		uta2010: '141610000000010',
		latitude: -32.180753827,
		longitude: -63.642154378,
		municipalityId: 347
	},
	{
		id: 983,
		name: 'CAMPO MARENGO',
		uta2020: '141610000000019',
		uta2010: '141610000000019',
		latitude: -32.199746804,
		longitude: -63.582437835,
		municipalityId: 347
	},
	{
		id: 984,
		name: 'PUENTE LAS SELVAS',
		uta2020: '141610000000048',
		uta2010: '141610000000048',
		latitude: -32.612702755,
		longitude: -63.93644148,
		municipalityId: 347
	},
	{
		id: 985,
		name: 'COLONIA LOS TAMARINDOS',
		uta2020: '141610000000035',
		uta2010: '141610000000035',
		latitude: -32.759304998,
		longitude: -63.580901202,
		municipalityId: 347
	},
	{
		id: 986,
		name: 'CAMPO BOAGLIO',
		uta2020: '141610000000007',
		uta2010: '141610000000007',
		latitude: -32.378883251,
		longitude: -63.572601365,
		municipalityId: 347
	},
	{
		id: 987,
		name: 'CAMPO BATTISTON',
		uta2020: '141610000000005',
		uta2010: '141610000000005',
		latitude: -32.245436662,
		longitude: -63.563008562,
		municipalityId: 347
	},
	{
		id: 988,
		name: 'MONIGOTES',
		uta2020: '820913610190000',
		uta2010: '820913610190000',
		latitude: -30.490135992,
		longitude: -61.63482247,
		municipalityId: 835
	},
	{
		id: 989,
		name: 'SIERRITA SAN JOS',
		uta2020: '540070021000023',
		uta2010: '540070021000023',
		latitude: -27.72963082,
		longitude: -55.730343864,
		municipalityId: 2104
	},
	{
		id: 990,
		name: 'TARANCO',
		uta2020: '540070021000024',
		uta2010: '540070021000024',
		latitude: -27.709356299,
		longitude: -55.496861405,
		municipalityId: 2104
	},
	{
		id: 991,
		name: 'SAN JOSE',
		uta2020: '540070021060000',
		uta2010: '540070021060000',
		latitude: -27.765317999,
		longitude: -55.774692076,
		municipalityId: 2104
	},
	{
		id: 992,
		name: 'COLONIA SAN JOSE',
		uta2020: '540070021000008',
		uta2010: '540070021000008',
		latitude: -27.777122498,
		longitude: -55.791481018,
		municipalityId: 2104
	},
	{
		id: 993,
		name: 'PINDAPOY',
		uta2020: '540070021040000',
		uta2010: '540070021040000',
		latitude: -27.74742723,
		longitude: -55.793248575,
		municipalityId: 2104
	},
	{
		id: 994,
		name: 'MONTE GRANDE',
		uta2020: '180840175000039',
		uta2010: '180840175000039',
		latitude: -27.453404151,
		longitude: -56.914652525,
		municipalityId: 2034
	},
	{
		id: 995,
		name: 'SAN ANTONIO',
		uta2020: '180840175030000',
		uta2010: '180840175030000',
		latitude: -27.50738546,
		longitude: -56.74116707,
		municipalityId: 2034
	},
	{
		id: 996,
		name: 'PUERTO TALA',
		uta2020: '180840175000049',
		uta2010: '180840175000049',
		latitude: -27.543702026,
		longitude: -56.804390336,
		municipalityId: 2034
	},
	{
		id: 997,
		name: 'SAN ESTEBAN',
		uta2020: '140910714190000',
		uta2010: '140910714190000',
		latitude: -30.919978406,
		longitude: -64.536003665,
		municipalityId: 276
	},
	{
		id: 998,
		name: 'POTRILLO OSCURO',
		uta2020: '420210336000022',
		uta2010: '420210336000022',
		latitude: -36.799221039,
		longitude: -64.125617981,
		municipalityId: 1934
	},
	{
		id: 999,
		name: 'BARRANCAS COLORADAS',
		uta2020: '420210336000001',
		uta2010: '420210336000001',
		latitude: -36.68302536,
		longitude: -64.193794251,
		municipalityId: 1934
	},
	{
		id: 1000,
		name: 'SANTA ROSA',
		uta2020: '420210336020000',
		uta2010: '420210336020000',
		latitude: -36.618289799,
		longitude: -64.291677039,
		municipalityId: 1934
	},
	{
		id: 1001,
		name: 'BERMEJITO',
		uta2020: '380350126020000',
		uta2010: '380350126020000',
		latitude: -23.787050688,
		longitude: -64.730065776,
		municipalityId: 1169
	},
	{
		id: 1002,
		name: 'LIBERTAD',
		uta2020: '380350126070000',
		uta2010: '380350126070000',
		latitude: -23.762893508,
		longitude: -64.726803683,
		municipalityId: 1169
	},
	{
		id: 1003,
		name: 'CALILEGUA',
		uta2020: '380350126040000',
		uta2010: '380350126040000',
		latitude: -23.769472138,
		longitude: -64.766556218,
		municipalityId: 1169
	},
	{
		id: 1004,
		name: 'PILQUINIYEU',
		uta2020: '620915252090000',
		uta2010: '620915252090000',
		latitude: -41.908386541,
		longitude: -68.342473245,
		municipalityId: 1226
	},
	{
		id: 1005,
		name: 'COLONIA EL CLAVO',
		uta2020: '300919790000006',
		uta2010: '300919790000006',
		latitude: -32.159522191,
		longitude: -59.184184576,
		municipalityId: 1811
	},
	{
		id: 1006,
		name: 'ALTAMIRANO SUR',
		uta2020: '300919790010000',
		uta2010: '300919790010000',
		latitude: -32.088834282,
		longitude: -59.174070554,
		municipalityId: 1811
	},
	{
		id: 1007,
		name: 'SALDAN',
		uta2020: '140210154240000',
		uta2010: '140210154240000',
		latitude: -31.314269681,
		longitude: -64.312904304,
		municipalityId: 204
	},
	{
		id: 1008,
		name: 'LAS JUNTAS',
		uta2020: '100070021080000',
		uta2010: '100070021080000',
		latitude: -28.103883632,
		longitude: -65.899651364,
		municipalityId: 1893
	},
	{
		id: 1009,
		name: 'LA SALVIA',
		uta2020: '100070021000032',
		uta2010: '100070021000032',
		latitude: -28.090665973,
		longitude: -65.899530041,
		municipalityId: 1893
	},
	{
		id: 1010,
		name: 'LAS BOLIVIANAS',
		uta2020: '340070000000152',
		uta2010: '340070000000152',
		latitude: -24.31902043,
		longitude: -61.25791818,
		municipalityId: 2306
	},
	{
		id: 1011,
		name: 'RIO MUERTO',
		uta2020: '340070000000216',
		uta2010: '340070000000216',
		latitude: -23.6109724,
		longitude: -61.3171703,
		municipalityId: 2306
	},
	{
		id: 1012,
		name: 'CAMPO DEL MEDIO',
		uta2020: '340070000000017',
		uta2010: '340070000000017',
		latitude: -24.323335648,
		longitude: -61.523353577,
		municipalityId: 2306
	},
	{
		id: 1013,
		name: 'LA LINEA',
		uta2020: '340070000000122',
		uta2010: '340070000000122',
		latitude: -24.246185303,
		longitude: -60.684928894,
		municipalityId: 2306
	},
	{
		id: 1014,
		name: 'EL REMANSO',
		uta2020: '340070000000080',
		uta2010: '340070000000080',
		latitude: -23.985755717,
		longitude: -60.458325135,
		municipalityId: 2306
	},
	{
		id: 1015,
		name: 'PESCADO NEGRO',
		uta2020: '340070000000193',
		uta2010: '340070000000193',
		latitude: -23.38393,
		longitude: -61.77758,
		municipalityId: 2306
	},
	{
		id: 1016,
		name: 'LAS AVISPAS',
		uta2020: '340070000000150',
		uta2010: '340070000000150',
		latitude: -23.599384308,
		longitude: -61.578697205,
		municipalityId: 2306
	},
	{
		id: 1017,
		name: 'AHI VEREMOS',
		uta2020: '340070000000002',
		uta2010: '340070000000002',
		latitude: -23.755783081,
		longitude: -61.170639038,
		municipalityId: 2306
	},
	{
		id: 1018,
		name: 'AIBAL EL SILENCIO',
		uta2020: '340070000000003',
		uta2010: '340070000000003',
		latitude: -24.39266333,
		longitude: -61.69829968,
		municipalityId: 2306
	},
	{
		id: 1019,
		name: 'LA LAGUNA',
		uta2020: '340070000000120',
		uta2010: '340070000000120',
		latitude: -24.32621227,
		longitude: -61.30093712,
		municipalityId: 2306
	},
	{
		id: 1020,
		name: 'LAS MARAVILLAS',
		uta2020: '340070000000157',
		uta2010: '340070000000157',
		latitude: -23.715578079,
		longitude: -61.284572601,
		municipalityId: 2306
	},
	{
		id: 1021,
		name: 'VACA PERDIDA',
		uta2020: '340070000050000',
		uta2010: '340070000050000',
		latitude: -23.494864689,
		longitude: -61.649998269,
		municipalityId: 2306
	},
	{
		id: 1022,
		name: 'EL QUEMADO',
		uta2020: '340070000000078',
		uta2010: '340070000000078',
		latitude: -23.99989698,
		longitude: -60.9855603,
		municipalityId: 2306
	},
	{
		id: 1023,
		name: 'PASO DE LOS TOBAS',
		uta2020: '340070000000191',
		uta2010: '340070000000191',
		latitude: -24.025680542,
		longitude: -60.906532287,
		municipalityId: 2306
	},
	{
		id: 1024,
		name: 'LA PALMITA',
		uta2020: '340070000000129',
		uta2010: '340070000000129',
		latitude: -23.482337952,
		longitude: -61.315288544,
		municipalityId: 2306
	},
	{
		id: 1025,
		name: 'LAMADRID',
		uta2020: '340070000015000',
		uta2010: '340070000015000',
		latitude: -23.937698264,
		longitude: -60.740098564,
		municipalityId: 2306
	},
	{
		id: 1026,
		name: 'ALTO ALEGRE',
		uta2020: '340070000000005',
		uta2010: '340070000000005',
		latitude: -23.9867533,
		longitude: -60.8231372,
		municipalityId: 2306
	},
	{
		id: 1027,
		name: 'EL CAVADO',
		uta2020: '340070000000043',
		uta2010: '340070000000043',
		latitude: -23.592475891,
		longitude: -61.484985352,
		municipalityId: 2306
	},
	{
		id: 1028,
		name: 'LA TUSCA',
		uta2020: '340070000000140',
		uta2010: '340070000000140',
		latitude: -23.689287186,
		longitude: -61.553012848,
		municipalityId: 2306
	},
	{
		id: 1029,
		name: 'EL RETIRO',
		uta2020: '340070000000081',
		uta2010: '340070000000081',
		latitude: -23.994857788,
		longitude: -60.394519806,
		municipalityId: 2306
	},
	{
		id: 1030,
		name: 'EL COLORADO',
		uta2020: '340070000000052',
		uta2010: '340070000000052',
		latitude: -24.037799835,
		longitude: -61.405208587,
		municipalityId: 2306
	},
	{
		id: 1031,
		name: 'LA PAZ',
		uta2020: '340070000000130',
		uta2010: '340070000000130',
		latitude: -24.417835236,
		longitude: -61.628826141,
		municipalityId: 2306
	},
	{
		id: 1032,
		name: 'LAGUNITA',
		uta2020: '340070000000148',
		uta2010: '340070000000148',
		latitude: -23.41157,
		longitude: -61.76015,
		municipalityId: 2306
	},
	{
		id: 1033,
		name: 'EL CORRALITO',
		uta2020: '340070000000053',
		uta2010: '340070000000053',
		latitude: -23.817634582,
		longitude: -61.83688736,
		municipalityId: 2306
	},
	{
		id: 1034,
		name: 'LAGUNA YACARE',
		uta2020: '340070000000147',
		uta2010: '340070000000147',
		latitude: -24.490009946,
		longitude: -61.559878472,
		municipalityId: 2306
	},
	{
		id: 1035,
		name: 'LOS YUCHANES',
		uta2020: '340070000000168',
		uta2010: '340070000000168',
		latitude: -24.208875656,
		longitude: -61.227817535,
		municipalityId: 2306
	},
	{
		id: 1036,
		name: 'LA PUERTA',
		uta2020: '340070000000132',
		uta2010: '340070000000132',
		latitude: -23.674411774,
		longitude: -61.136287689,
		municipalityId: 2306
	},
	{
		id: 1037,
		name: 'BAJO VERDE',
		uta2020: '340070000000010',
		uta2010: '340070000000010',
		latitude: -23.935466766,
		longitude: -60.607948303,
		municipalityId: 2306
	},
	{
		id: 1038,
		name: 'EL LECHERON',
		uta2020: '340070000000059',
		uta2010: '340070000000059',
		latitude: -23.502969742,
		longitude: -61.547672272,
		municipalityId: 2306
	},
	{
		id: 1039,
		name: 'LA PALIZADA',
		uta2020: '340070000000128',
		uta2010: '340070000000128',
		latitude: -24.37461994,
		longitude: -60.81989475,
		municipalityId: 2306
	},
	{
		id: 1040,
		name: 'EL DESPUNTE',
		uta2020: '340070000000056',
		uta2010: '340070000000056',
		latitude: -23.651659012,
		longitude: -61.413879395,
		municipalityId: 2306
	},
	{
		id: 1041,
		name: 'SOMBRERO NEGRO',
		uta2020: '340070000000231',
		uta2010: '340070000000231',
		latitude: -23.49471809,
		longitude: -61.5768014,
		municipalityId: 2306
	},
	{
		id: 1042,
		name: 'LA SOLEDAD',
		uta2020: '340070000003000',
		uta2010: '340070000003000',
		latitude: -24.149060721,
		longitude: -60.692324165,
		municipalityId: 2306
	},
	{
		id: 1043,
		name: 'EL QUIMIL',
		uta2020: '340070000000079',
		uta2010: '340070000000079',
		latitude: -23.51707899,
		longitude: -61.70755188,
		municipalityId: 2306
	},
	{
		id: 1044,
		name: 'EL CASTOR',
		uta2020: '340070000000042',
		uta2010: '340070000000042',
		latitude: -24.633543014,
		longitude: -61.223987579,
		municipalityId: 2306
	},
	{
		id: 1045,
		name: 'EL PALO SANTO',
		uta2020: '340070000000068',
		uta2010: '340070000000068',
		latitude: -23.861371994,
		longitude: -60.972278595,
		municipalityId: 2306
	},
	{
		id: 1046,
		name: 'CORRALITO',
		uta2020: '340070000000024',
		uta2010: '340070000000024',
		latitude: -24.21846962,
		longitude: -61.006340027,
		municipalityId: 2306
	},
	{
		id: 1047,
		name: 'LA MOCHA',
		uta2020: '340070000000126',
		uta2010: '340070000000126',
		latitude: -23.49651,
		longitude: -61.62924,
		municipalityId: 2306
	},
	{
		id: 1048,
		name: 'LOS POCITOS',
		uta2020: '340070000000166',
		uta2010: '340070000000166',
		latitude: -23.45882518,
		longitude: -61.73813291,
		municipalityId: 2306
	},
	{
		id: 1049,
		name: 'TRES YUCHAN',
		uta2020: '340070000000240',
		uta2010: '340070000000240',
		latitude: -23.47677746,
		longitude: -61.57769046,
		municipalityId: 2306
	},
	{
		id: 1050,
		name: 'EL ESCONDIDO',
		uta2020: '340070000000058',
		uta2010: '340070000000058',
		latitude: -24.259288788,
		longitude: -60.993389129,
		municipalityId: 2306
	},
	{
		id: 1051,
		name: 'FORTIN PILCOMAYO',
		uta2020: '340070000000099',
		uta2010: '340070000000099',
		latitude: -23.843732834,
		longitude: -60.879844666,
		municipalityId: 2306
	},
	{
		id: 1052,
		name: 'LA PRIMAVERA',
		uta2020: '340070000000131',
		uta2010: '340070000000131',
		latitude: -23.532625198,
		longitude: -61.266872406,
		municipalityId: 2306
	},
	{
		id: 1053,
		name: 'LA RINCONADA',
		uta2020: '340070000007000',
		uta2010: '340070000007000',
		latitude: -23.494275191,
		longitude: -61.57638887,
		municipalityId: 2306
	},
	{
		id: 1054,
		name: 'LA REPRESA',
		uta2020: '340070000000135',
		uta2010: '340070000000135',
		latitude: -23.81632,
		longitude: -61.21118,
		municipalityId: 2306
	},
	{
		id: 1055,
		name: 'EL CHURCALITO',
		uta2020: '340070000000050',
		uta2010: '340070000000050',
		latitude: -24.07432401,
		longitude: -60.85246415,
		municipalityId: 2306
	},
	{
		id: 1056,
		name: 'EL PARAGUAYO MUERTO',
		uta2020: '340070000000070',
		uta2010: '340070000000070',
		latitude: -24.114086151,
		longitude: -60.551380157,
		municipalityId: 2306
	},
	{
		id: 1057,
		name: 'SAN ANTONIO',
		uta2020: '340070000000217',
		uta2010: '340070000000217',
		latitude: -23.557861328,
		longitude: -61.18870163,
		municipalityId: 2306
	},
	{
		id: 1058,
		name: 'LAS PALMITAS',
		uta2020: '340070000000159',
		uta2010: '340070000000159',
		latitude: -24.297809601,
		longitude: -60.902435303,
		municipalityId: 2306
	},
	{
		id: 1059,
		name: 'LAS VIDALITAS',
		uta2020: '340070000000160',
		uta2010: '340070000000160',
		latitude: -23.740461349,
		longitude: -61.092292786,
		municipalityId: 2306
	},
	{
		id: 1060,
		name: 'POZO RAMON',
		uta2020: '340070000000209',
		uta2010: '340070000000209',
		latitude: -23.46268446,
		longitude: -61.57889695,
		municipalityId: 2306
	},
	{
		id: 1061,
		name: 'POZO EL ESCONDIDO',
		uta2020: '340070000000204',
		uta2010: '340070000000204',
		latitude: -23.180248261,
		longitude: -61.797618866,
		municipalityId: 2306
	},
	{
		id: 1062,
		name: 'EL BAJO',
		uta2020: '340070000000036',
		uta2010: '340070000000036',
		latitude: -23.8608345,
		longitude: -61.05229676,
		municipalityId: 2306
	},
	{
		id: 1063,
		name: 'EL PARAISO',
		uta2020: '340070000000071',
		uta2010: '340070000000071',
		latitude: -24.048061008,
		longitude: -60.577177086,
		municipalityId: 2306
	},
	{
		id: 1064,
		name: 'EL YACARE',
		uta2020: '340070000000086',
		uta2010: '340070000000086',
		latitude: -24.44585228,
		longitude: -61.570625305,
		municipalityId: 2306
	},
	{
		id: 1065,
		name: 'LAS BANDERITAS',
		uta2020: '340070000000151',
		uta2010: '340070000000151',
		latitude: -23.944426,
		longitude: -60.837689,
		municipalityId: 2306
	},
	{
		id: 1066,
		name: 'EL AIBALITO',
		uta2020: '340070000000030',
		uta2010: '340070000000030',
		latitude: -24.117563248,
		longitude: -60.922355652,
		municipalityId: 2306
	},
	{
		id: 1067,
		name: 'SANTA ISABEL',
		uta2020: '340070000000226',
		uta2010: '340070000000226',
		latitude: -24.35626569,
		longitude: -61.532041637,
		municipalityId: 2306
	},
	{
		id: 1068,
		name: 'EL AZOTADO',
		uta2020: '340070000000035',
		uta2010: '340070000000035',
		latitude: -24.233027936,
		longitude: -61.76727436,
		municipalityId: 2306
	},
	{
		id: 1069,
		name: 'EL SOLITARIO',
		uta2020: '340070000000083',
		uta2010: '340070000000083',
		latitude: -23.4613347,
		longitude: -61.4709325,
		municipalityId: 2306
	},
	{
		id: 1070,
		name: 'LA UNION',
		uta2020: '340070000000141',
		uta2010: '340070000000141',
		latitude: -23.599191666,
		longitude: -61.373744965,
		municipalityId: 2306
	},
	{
		id: 1071,
		name: 'LA MADRUGADA',
		uta2020: '340070000000123',
		uta2010: '340070000000123',
		latitude: -23.43160403,
		longitude: -61.58929563,
		municipalityId: 2306
	},
	{
		id: 1072,
		name: 'SAN CAYETANO',
		uta2020: '340070000000219',
		uta2010: '340070000000219',
		latitude: -23.8232703,
		longitude: -60.9788771,
		municipalityId: 2306
	},
	{
		id: 1073,
		name: 'ISLA GARCIA',
		uta2020: '340070000000105',
		uta2010: '340070000000105',
		latitude: -24.347414017,
		longitude: -61.71138382,
		municipalityId: 2306
	},
	{
		id: 1074,
		name: 'EL SIMBOLAR',
		uta2020: '340070000000082',
		uta2010: '340070000000082',
		latitude: -24.26304692,
		longitude: -61.24316418,
		municipalityId: 2306
	},
	{
		id: 1075,
		name: 'EL BRAGADO',
		uta2020: '340070000000038',
		uta2010: '340070000000038',
		latitude: -24.040811539,
		longitude: -61.701976776,
		municipalityId: 2306
	},
	{
		id: 1076,
		name: 'EL CAJON',
		uta2020: '340070000000041',
		uta2010: '340070000000041',
		latitude: -23.606107,
		longitude: -61.222148,
		municipalityId: 2306
	},
	{
		id: 1077,
		name: 'SUMAYEN',
		uta2020: '340070000000232',
		uta2010: '340070000000232',
		latitude: -24.46675181,
		longitude: -61.57228774,
		municipalityId: 2306
	},
	{
		id: 1078,
		name: 'SANTA ROSA',
		uta2020: '340070000000228',
		uta2010: '340070000000228',
		latitude: -23.786643646,
		longitude: -61.484412197,
		municipalityId: 2306
	},
	{
		id: 1079,
		name: 'SAN CAMILO',
		uta2020: '340070000000218',
		uta2010: '340070000000218',
		latitude: -24.602310181,
		longitude: -61.40000534,
		municipalityId: 2306
	},
	{
		id: 1080,
		name: 'MATIAS GULACSI',
		uta2020: '340070000000171',
		uta2010: '340070000000171',
		latitude: -24.623871378,
		longitude: -61.166987328,
		municipalityId: 2306
	},
	{
		id: 1081,
		name: 'LA IGUANA',
		uta2020: '340070000000118',
		uta2010: '340070000000118',
		latitude: -23.243850708,
		longitude: -61.8200531,
		municipalityId: 2306
	},
	{
		id: 1082,
		name: 'SAN ISIDRO',
		uta2020: '340070000000223',
		uta2010: '340070000000223',
		latitude: -24.45989418,
		longitude: -60.8985672,
		municipalityId: 2306
	},
	{
		id: 1083,
		name: 'LOS CLAVELES',
		uta2020: '340070000000163',
		uta2010: '340070000000163',
		latitude: -24.104528427,
		longitude: -61.231487274,
		municipalityId: 2306
	},
	{
		id: 1084,
		name: 'GUADALCAZAR',
		uta2020: '340070000005000',
		uta2010: '340070000005000',
		latitude: -23.682393855,
		longitude: -61.161108948,
		municipalityId: 2306
	},
	{
		id: 1085,
		name: 'PALOS BLANCOS',
		uta2020: '340070000000188',
		uta2010: '340070000000188',
		latitude: -24.311496735,
		longitude: -61.678852081,
		municipalityId: 2306
	},
	{
		id: 1086,
		name: 'POZO SARGENTO',
		uta2020: '340070000000210',
		uta2010: '340070000000210',
		latitude: -23.65180149,
		longitude: -61.79673482,
		municipalityId: 2306
	},
	{
		id: 1087,
		name: 'LA ZANJA',
		uta2020: '340070000000142',
		uta2010: '340070000000142',
		latitude: -24.0723633,
		longitude: -60.6197921,
		municipalityId: 2306
	},
	{
		id: 1088,
		name: 'FORTIN PILCOMAYO NUEVO',
		uta2020: '340070000000100',
		uta2010: '340070000000100',
		latitude: -23.8710562,
		longitude: -60.8774613,
		municipalityId: 2306
	},
	{
		id: 1089,
		name: 'EL BORDO SANTO',
		uta2020: '340070000000037',
		uta2010: '340070000000037',
		latitude: -24.26921463,
		longitude: -61.764175415,
		municipalityId: 2306
	},
	{
		id: 1090,
		name: 'BAJO HONDO',
		uta2020: '340070000000009',
		uta2010: '340070000000009',
		latitude: -24.0339571,
		longitude: -60.7654318,
		municipalityId: 2306
	},
	{
		id: 1091,
		name: 'EL CUCHILLO',
		uta2020: '340070000000055',
		uta2010: '340070000000055',
		latitude: -24.025348663,
		longitude: -61.261669159,
		municipalityId: 2306
	},
	{
		id: 1092,
		name: 'EL ALAMBRADO',
		uta2020: '340070000000031',
		uta2010: '340070000000031',
		latitude: -23.268596649,
		longitude: -61.693031311,
		municipalityId: 2306
	},
	{
		id: 1093,
		name: 'EL LINDERO',
		uta2020: '340070000000060',
		uta2010: '340070000000060',
		latitude: -23.73132,
		longitude: -61.33636,
		municipalityId: 2306
	},
	{
		id: 1094,
		name: 'LOS GALPONES',
		uta2020: '340070000000164',
		uta2010: '340070000000164',
		latitude: -24.617307663,
		longitude: -61.265407562,
		municipalityId: 2306
	},
	{
		id: 1095,
		name: 'PALMA SOLA',
		uta2020: '340070000000185',
		uta2010: '340070000000185',
		latitude: -23.635229111,
		longitude: -61.341293335,
		municipalityId: 2306
	},
	{
		id: 1096,
		name: 'PRALINE',
		uta2020: '340070000000211',
		uta2010: '340070000000211',
		latitude: -24.188005447,
		longitude: -61.279129028,
		municipalityId: 2306
	},
	{
		id: 1097,
		name: 'ISLA CHICA',
		uta2020: '340070000000104',
		uta2010: '340070000000104',
		latitude: -24.315717697,
		longitude: -61.733612061,
		municipalityId: 2306
	},
	{
		id: 1098,
		name: 'CAMPO AZUL',
		uta2020: '340070000000015',
		uta2010: '340070000000015',
		latitude: -23.44351387,
		longitude: -61.825653076,
		municipalityId: 2306
	},
	{
		id: 1099,
		name: 'PONCHO QUEMADO',
		uta2020: '340070000000194',
		uta2010: '340070000000194',
		latitude: -24.349769592,
		longitude: -61.650203705,
		municipalityId: 2306
	},
	{
		id: 1100,
		name: 'EL COLETO',
		uta2020: '340070000000051',
		uta2010: '340070000000051',
		latitude: -24.21481888,
		longitude: -60.695932502,
		municipalityId: 2306
	},
	{
		id: 1101,
		name: 'LAS FLORES',
		uta2020: '340070000000155',
		uta2010: '340070000000155',
		latitude: -23.516641617,
		longitude: -61.756633759,
		municipalityId: 2306
	},
	{
		id: 1102,
		name: 'TRES POZOS',
		uta2020: '340070000000239',
		uta2010: '340070000000239',
		latitude: -23.92363739,
		longitude: -61.35162735,
		municipalityId: 2306
	},
	{
		id: 1103,
		name: 'LA LIBERTAD',
		uta2020: '340070000000121',
		uta2010: '340070000000121',
		latitude: -23.982064,
		longitude: -60.6117724,
		municipalityId: 2306
	},
	{
		id: 1104,
		name: 'SAN CRISTOBAL',
		uta2020: '340070000000220',
		uta2010: '340070000000220',
		latitude: -24.501745224,
		longitude: -61.524356842,
		municipalityId: 2306
	},
	{
		id: 1105,
		name: 'PUERTO CABO IRIGOYEN',
		uta2020: '340070000000213',
		uta2010: '340070000000213',
		latitude: -23.2342833,
		longitude: -61.76244706,
		municipalityId: 2306
	},
	{
		id: 1106,
		name: 'POZO DE MOLINA',
		uta2020: '340070000000198',
		uta2010: '340070000000198',
		latitude: -24.1413879,
		longitude: -60.5121952,
		municipalityId: 2306
	},
	{
		id: 1107,
		name: 'LOS CIENEGUITOS',
		uta2020: '340070000000162',
		uta2010: '340070000000162',
		latitude: -23.64058005,
		longitude: -61.47602452,
		municipalityId: 2306
	},
	{
		id: 1108,
		name: 'EL NARANJO',
		uta2020: '340070000000065',
		uta2010: '340070000000065',
		latitude: -24.574920654,
		longitude: -61.459651947,
		municipalityId: 2306
	},
	{
		id: 1109,
		name: 'LA ESQUINA',
		uta2020: '340070000000116',
		uta2010: '340070000000116',
		latitude: -23.392942429,
		longitude: -61.589805603,
		municipalityId: 2306
	},
	{
		id: 1110,
		name: 'LAGUNA TRES PACES',
		uta2020: '340070000000146',
		uta2010: '340070000000146',
		latitude: -23.3866677,
		longitude: -61.540966,
		municipalityId: 2306
	},
	{
		id: 1111,
		name: 'PALO MARCADO',
		uta2020: '340070000000186',
		uta2010: '340070000000186',
		latitude: -23.677890778,
		longitude: -61.233695984,
		municipalityId: 2306
	},
	{
		id: 1112,
		name: 'EL CHAÑARAL',
		uta2020: '340070000000045',
		uta2010: '340070000000045',
		latitude: -23.55716016,
		longitude: -61.54133564,
		municipalityId: 2306
	},
	{
		id: 1113,
		name: 'SANTA RITA',
		uta2020: '340070000000227',
		uta2010: '340070000000227',
		latitude: -24.204324722,
		longitude: -61.616149902,
		municipalityId: 2306
	},
	{
		id: 1114,
		name: 'EL CHURCAL',
		uta2020: '340070000000049',
		uta2010: '340070000000049',
		latitude: -23.43689251,
		longitude: -61.59104602,
		municipalityId: 2306
	},
	{
		id: 1115,
		name: 'MEDIA LUNA',
		uta2020: '340070000000172',
		uta2010: '340070000000172',
		latitude: -23.7583298,
		longitude: -61.0213934,
		municipalityId: 2306
	},
	{
		id: 1116,
		name: 'LA ESPERANZA',
		uta2020: '340070000000115',
		uta2010: '340070000000115',
		latitude: -23.5413003,
		longitude: -61.4202262,
		municipalityId: 2306
	},
	{
		id: 1117,
		name: 'SOSA',
		uta2020: '300849750240000',
		uta2010: '300849750240000',
		latitude: -31.738574273,
		longitude: -59.911508144,
		municipalityId: 1718
	},
	{
		id: 1118,
		name: 'IBARRETA',
		uta2020: '340350126080000',
		uta2010: '340350126080000',
		latitude: -25.211319123,
		longitude: -59.857039844,
		municipalityId: 2289
	},
	{
		id: 1119,
		name: 'LAS BARRANQUITAS',
		uta2020: '740210038000074',
		uta2010: '740210038000074',
		latitude: -33.16844847,
		longitude: -66.06146551,
		municipalityId: 1099
	},
	{
		id: 1120,
		name: 'ESTANCIA GRANDE',
		uta2020: '740210038000045',
		uta2010: '740210038000045',
		latitude: -33.21809147,
		longitude: -66.17707132,
		municipalityId: 1099
	},
	{
		id: 1121,
		name: 'ESTANCIA GRANDE',
		uta2020: '740210038025000',
		uta2010: '740210038025000',
		latitude: -33.190546553,
		longitude: -66.152798557,
		municipalityId: 1099
	},
	{
		id: 1122,
		name: 'EL DURAZNO',
		uta2020: '740210038000035',
		uta2010: '740210038000035',
		latitude: -33.193300068,
		longitude: -66.156898153,
		municipalityId: 1099
	},
	{
		id: 1123,
		name: 'TICINO',
		uta2020: '140420343140000',
		uta2010: '140420343140000',
		latitude: -32.691927138,
		longitude: -63.435304438,
		municipalityId: 165
	},
	{
		id: 1124,
		name: 'PUERTO EVA PERON',
		uta2020: '220140070070000',
		uta2010: '220140070070000',
		latitude: -26.661480093,
		longitude: -58.635581818,
		municipalityId: 25
	},
	{
		id: 1125,
		name: 'EL RODEO',
		uta2020: '100070007040000',
		uta2010: '100070007040000',
		latitude: -28.214151642,
		longitude: -65.873860063,
		municipalityId: 1894
	},
	{
		id: 1126,
		name: 'COLONIA LA GLORIA',
		uta2020: '300289150000016',
		uta2010: '300289150000016',
		latitude: -31.0659142,
		longitude: -58.09292394,
		municipalityId: 1553
	},
	{
		id: 1127,
		name: 'COLONIA LA PAZ',
		uta2020: '300289150000018',
		uta2010: '300289150000018',
		latitude: -31.038490556,
		longitude: -58.162161138,
		municipalityId: 1553
	},
	{
		id: 1128,
		name: 'LAS TACANAS',
		uta2020: '900980105000177',
		uta2010: '900980105000177',
		latitude: -26.816356394,
		longitude: -65.71792781,
		municipalityId: 2214
	},
	{
		id: 1129,
		name: 'LA CIENAGA',
		uta2020: '900980105000134',
		uta2010: '900980105000134',
		latitude: -26.7807304,
		longitude: -65.6533452,
		municipalityId: 2214
	},
	{
		id: 1130,
		name: 'LA BOLSA',
		uta2020: '900980105000130',
		uta2010: '900980105000130',
		latitude: -26.799970627,
		longitude: -65.729194641,
		municipalityId: 2214
	},
	{
		id: 1131,
		name: 'EL INFIERNILLO',
		uta2020: '900980105000064',
		uta2010: '900980105000064',
		latitude: -26.740341437,
		longitude: -65.774162237,
		municipalityId: 2214
	},
	{
		id: 1132,
		name: 'TAFI DEL VALLE',
		uta2020: '900980105040000',
		uta2010: '900980105040000',
		latitude: -26.852797899,
		longitude: -65.708557379,
		municipalityId: 2214
	},
	{
		id: 1133,
		name: 'ESTACION TORRENT',
		uta2020: '180560105020000',
		uta2010: '180560105020000',
		latitude: -28.826623916,
		longitude: -56.469525963,
		municipalityId: 2048
	},
	{
		id: 1134,
		name: 'AQUIHUECO',
		uta2020: '580420105000002',
		uta2010: '580420105000002',
		latitude: -37.06895161,
		longitude: -70.38454137,
		municipalityId: 2369
	},
	{
		id: 1135,
		name: 'TRICAO MALAL',
		uta2020: '580420105020000',
		uta2010: '580420105020000',
		latitude: -37.04284904,
		longitude: -70.334717578,
		municipalityId: 2369
	},
	{
		id: 1136,
		name: 'CANCHA HUINGANCO',
		uta2020: '580420105000009',
		uta2010: '580420105000009',
		latitude: -37.02906724,
		longitude: -70.42160825,
		municipalityId: 2369
	},
	{
		id: 1137,
		name: 'PEDRO GOMEZ CELLO',
		uta2020: '821123932100000',
		uta2010: '821123932100000',
		latitude: -30.038474343,
		longitude: -60.315243129,
		municipalityId: 1011
	},
	{
		id: 1138,
		name: 'LA CLARA',
		uta2020: '821123932000029',
		uta2010: '821123932000029',
		latitude: -30.020418497,
		longitude: -60.646870624,
		municipalityId: 1011
	},
	{
		id: 1139,
		name: 'COLONIA LA OSCA',
		uta2020: '821123932000009',
		uta2010: '821123932000009',
		latitude: -30.0009955,
		longitude: -60.4843047,
		municipalityId: 1011
	},
	{
		id: 1140,
		name: 'LA MORA Y PANTANOSO',
		uta2020: '821123932000034',
		uta2010: '821123932000034',
		latitude: -30.038330946,
		longitude: -60.328288988,
		municipalityId: 1011
	},
	{
		id: 1141,
		name: 'RAMONA',
		uta2020: '820212329320000',
		uta2010: '820212329320000',
		latitude: -31.093704177,
		longitude: -61.903231867,
		municipalityId: 750
	},
	{
		id: 1142,
		name: 'EL TROPEZON',
		uta2020: '620910000000021',
		uta2010: '620910000000021',
		latitude: -41.769252777,
		longitude: -68.917778015,
		municipalityId: 1227
	},
	{
		id: 1143,
		name: 'VACA LAUFQUEN',
		uta2020: '620910000000047',
		uta2010: '620910000000047',
		latitude: -41.403579712,
		longitude: -68.272331238,
		municipalityId: 1227
	},
	{
		id: 1144,
		name: 'CERRO MESA',
		uta2020: '620910000000015',
		uta2010: '620910000000015',
		latitude: -41.473292047,
		longitude: -69.483502236,
		municipalityId: 1227
	},
	{
		id: 1145,
		name: 'ATRAICO',
		uta2020: '620910000000006',
		uta2010: '620910000000006',
		latitude: -41.5127138,
		longitude: -69.51735638,
		municipalityId: 1227
	},
	{
		id: 1146,
		name: 'LA ESPERANZA',
		uta2020: '620910000000029',
		uta2010: '620910000000029',
		latitude: -40.418816897,
		longitude: -68.486245556,
		municipalityId: 1227
	},
	{
		id: 1147,
		name: 'MINA SANTA TERESITA',
		uta2020: '620910000080000',
		uta2010: '620910000080000',
		latitude: -40.934343558,
		longitude: -69.411658785,
		municipalityId: 1227
	},
	{
		id: 1148,
		name: 'FINCA LOS TAPIRES',
		uta2020: '660070028000190',
		uta2010: '660070028000190',
		latitude: -24.907824078,
		longitude: -64.286735717,
		municipalityId: 1841
	},
	{
		id: 1149,
		name: 'LOS VIBORONES',
		uta2020: '660070028000340',
		uta2010: '660070028000340',
		latitude: -24.868589401,
		longitude: -63.75630188,
		municipalityId: 1841
	},
	{
		id: 1150,
		name: 'EL 93',
		uta2020: '660070028000058',
		uta2010: '660070028000058',
		latitude: -24.55175972,
		longitude: -63.377475739,
		municipalityId: 1841
	},
	{
		id: 1151,
		name: 'SAN ROQUE',
		uta2020: '660070028000489',
		uta2010: '660070028000489',
		latitude: -24.985435486,
		longitude: -63.873466492,
		municipalityId: 1841
	},
	{
		id: 1152,
		name: 'POZO NUEVO',
		uta2020: '660070028000403',
		uta2010: '660070028000403',
		latitude: -24.989839554,
		longitude: -63.813152313,
		municipalityId: 1841
	},
	{
		id: 1153,
		name: 'FINCA EL MILAGRO',
		uta2020: '660070028000171',
		uta2010: '660070028000171',
		latitude: -25.045117202,
		longitude: -64.002150996,
		municipalityId: 1841
	},
	{
		id: 1154,
		name: 'SANTA CECILIA',
		uta2020: '660070028000496',
		uta2010: '660070028000496',
		latitude: -24.687732696,
		longitude: -63.980365753,
		municipalityId: 1841
	},
	{
		id: 1155,
		name: 'FINCA LA FLORESTA',
		uta2020: '660070028000181',
		uta2010: '660070028000181',
		latitude: -24.621636644,
		longitude: -62.939590645,
		municipalityId: 1841
	},
	{
		id: 1156,
		name: 'EL YUCHAN',
		uta2020: '660070028000146',
		uta2010: '660070028000146',
		latitude: -25.007806778,
		longitude: -63.878993988,
		municipalityId: 1841
	},
	{
		id: 1157,
		name: 'PUERTA BLANCA',
		uta2020: '660070028000408',
		uta2010: '660070028000408',
		latitude: -24.834606171,
		longitude: -63.56067276,
		municipalityId: 1841
	},
	{
		id: 1158,
		name: 'EL TOTORAL',
		uta2020: '660070028000139',
		uta2010: '660070028000139',
		latitude: -24.431413651,
		longitude: -63.225372314,
		municipalityId: 1841
	},
	{
		id: 1159,
		name: 'LUJAN',
		uta2020: '660070028000344',
		uta2010: '660070028000344',
		latitude: -24.810710907,
		longitude: -63.631828308,
		municipalityId: 1841
	},
	{
		id: 1160,
		name: 'EL CARDITO',
		uta2020: '660070028000066',
		uta2010: '660070028000066',
		latitude: -24.609884262,
		longitude: -63.10615921,
		municipalityId: 1841
	},
	{
		id: 1161,
		name: 'LOS LAURELES',
		uta2020: '660070028000331',
		uta2010: '660070028000331',
		latitude: -24.752103805,
		longitude: -63.408859253,
		municipalityId: 1841
	},
	{
		id: 1162,
		name: 'SAN NICOLAS',
		uta2020: '660070028000484',
		uta2010: '660070028000484',
		latitude: -24.997068405,
		longitude: -63.382171631,
		municipalityId: 1841
	},
	{
		id: 1163,
		name: 'BALBUENA',
		uta2020: '660070028000017',
		uta2010: '660070028000017',
		latitude: -25.198133,
		longitude: -64.359772358,
		municipalityId: 1841
	},
	{
		id: 1164,
		name: 'SAN DAVID',
		uta2020: '660070028000464',
		uta2010: '660070028000464',
		latitude: -24.965808868,
		longitude: -63.191238403,
		municipalityId: 1841
	},
	{
		id: 1165,
		name: 'SAN JOSE',
		uta2020: '660070028000473',
		uta2010: '660070028000473',
		latitude: -24.86343956,
		longitude: -63.721721649,
		municipalityId: 1841
	},
	{
		id: 1166,
		name: 'ESPERANZA',
		uta2020: '660070028000150',
		uta2010: '660070028000150',
		latitude: -25.073022842,
		longitude: -63.375728607,
		municipalityId: 1841
	},
	{
		id: 1167,
		name: 'LA CANDELARIA',
		uta2020: '660070028000242',
		uta2010: '660070028000242',
		latitude: -25.039005279,
		longitude: -64.422393799,
		municipalityId: 1841
	},
	{
		id: 1168,
		name: 'SANTA LAURA',
		uta2020: '660070028000500',
		uta2010: '660070028000500',
		latitude: -25.03014,
		longitude: -63.33826,
		municipalityId: 1841
	},
	{
		id: 1169,
		name: 'SANTA TERESA',
		uta2020: '660070028000507',
		uta2010: '660070028000507',
		latitude: -24.63895,
		longitude: -63.64141,
		municipalityId: 1841
	},
	{
		id: 1170,
		name: 'JUME POZO',
		uta2020: '660070028000233',
		uta2010: '660070028000233',
		latitude: -24.93649292,
		longitude: -63.663280487,
		municipalityId: 1841
	},
	{
		id: 1171,
		name: 'LAGUNA VERDE',
		uta2020: '660070028000284',
		uta2010: '660070028000284',
		latitude: -24.610735274,
		longitude: -64.013015559,
		municipalityId: 1841
	},
	{
		id: 1172,
		name: 'EL RETIRO',
		uta2020: '660070028000123',
		uta2010: '660070028000123',
		latitude: -24.529513176,
		longitude: -63.587622498,
		municipalityId: 1841
	},
	{
		id: 1173,
		name: 'CENTRO 25 DE JUNIO',
		uta2020: '660070028030000',
		uta2010: '660070028030000',
		latitude: -24.977318968,
		longitude: -63.86985644,
		municipalityId: 1841
	},
	{
		id: 1174,
		name: 'RESISTENCIA',
		uta2020: '660070028000445',
		uta2010: '660070028000445',
		latitude: -24.605293274,
		longitude: -63.886501312,
		municipalityId: 1841
	},
	{
		id: 1175,
		name: 'EL DESTIERRO',
		uta2020: '660070028000076',
		uta2010: '660070028000076',
		latitude: -25.202717176,
		longitude: -63.56866182,
		municipalityId: 1841
	},
	{
		id: 1176,
		name: 'EL POTRERILLO',
		uta2020: '660070028000114',
		uta2010: '660070028000114',
		latitude: -25.130346298,
		longitude: -64.407653809,
		municipalityId: 1841
	},
	{
		id: 1177,
		name: 'LA ARGENTINA',
		uta2020: '660070028000236',
		uta2010: '660070028000236',
		latitude: -24.501581662,
		longitude: -63.032637672,
		municipalityId: 1841
	},
	{
		id: 1178,
		name: 'SALTA FORESTAL',
		uta2020: '660070028000454',
		uta2010: '660070028000454',
		latitude: -24.966926698,
		longitude: -63.836166382,
		municipalityId: 1841
	},
	{
		id: 1179,
		name: 'SAN FELIPE',
		uta2020: '660070028000465',
		uta2010: '660070028000465',
		latitude: -24.925369263,
		longitude: -63.643966675,
		municipalityId: 1841
	},
	{
		id: 1180,
		name: 'LAGUNA BLANCA',
		uta2020: '660070028000282',
		uta2010: '660070028000282',
		latitude: -25.163279626,
		longitude: -64.086177897,
		municipalityId: 1841
	},
	{
		id: 1181,
		name: 'SAN CRISTOBAL',
		uta2020: '660070028000463',
		uta2010: '660070028000463',
		latitude: -25.080705643,
		longitude: -63.299690247,
		municipalityId: 1841
	},
	{
		id: 1182,
		name: 'SAN JORGE',
		uta2020: '660070028000472',
		uta2010: '660070028000472',
		latitude: -25.01571846,
		longitude: -63.798309326,
		municipalityId: 1841
	},
	{
		id: 1183,
		name: 'SANTA ANA',
		uta2020: '660070028000494',
		uta2010: '660070028000494',
		latitude: -24.689550526,
		longitude: -63.454024325,
		municipalityId: 1841
	},
	{
		id: 1184,
		name: 'BELLA VISTA',
		uta2020: '660070028000020',
		uta2010: '660070028000020',
		latitude: -25.162651062,
		longitude: -64.019104004,
		municipalityId: 1841
	},
	{
		id: 1185,
		name: 'SAN ANTONIO',
		uta2020: '660070028000457',
		uta2010: '660070028000457',
		latitude: -24.839763641,
		longitude: -63.750328064,
		municipalityId: 1841
	},
	{
		id: 1186,
		name: 'CORONEL OLLEROS',
		uta2020: '660070028050000',
		uta2010: '660070028050000',
		latitude: -25.114692315,
		longitude: -64.225866443,
		municipalityId: 1841
	},
	{
		id: 1187,
		name: 'SAN ANDRES',
		uta2020: '660070028000456',
		uta2010: '660070028000456',
		latitude: -24.781723022,
		longitude: -63.760238648,
		municipalityId: 1841
	},
	{
		id: 1188,
		name: 'EL SUNCHAL',
		uta2020: '660070028000134',
		uta2010: '660070028000134',
		latitude: -24.965797424,
		longitude: -63.770259857,
		municipalityId: 1841
	},
	{
		id: 1189,
		name: 'PILCOMAYO',
		uta2020: '660070028000383',
		uta2010: '660070028000383',
		latitude: -24.561891556,
		longitude: -63.976055145,
		municipalityId: 1841
	},
	{
		id: 1190,
		name: 'EL GRITAO',
		uta2020: '660070028000085',
		uta2010: '660070028000085',
		latitude: -25.197834015,
		longitude: -63.755413055,
		municipalityId: 1841
	},
	{
		id: 1191,
		name: 'SAN SIMON',
		uta2020: '660070028000491',
		uta2010: '660070028000491',
		latitude: -24.437774658,
		longitude: -63.712814331,
		municipalityId: 1841
	},
	{
		id: 1192,
		name: 'EL VALLE (FINCA)',
		uta2020: '660070028000143',
		uta2010: '660070028000143',
		latitude: -24.936498785,
		longitude: -63.67436887,
		municipalityId: 1841
	},
	{
		id: 1193,
		name: 'LA UNION',
		uta2020: '660070028000279',
		uta2010: '660070028000279',
		latitude: -24.83741951,
		longitude: -63.465942383,
		municipalityId: 1841
	},
	{
		id: 1194,
		name: 'POZO VERDE',
		uta2020: '660070028000405',
		uta2010: '660070028000405',
		latitude: -24.527322769,
		longitude: -63.922187805,
		municipalityId: 1841
	},
	{
		id: 1195,
		name: 'EL MANANTIAL',
		uta2020: '660070028000095',
		uta2010: '660070028000095',
		latitude: -24.266395569,
		longitude: -63.440284729,
		municipalityId: 1841
	},
	{
		id: 1196,
		name: 'PIQUETE CABADO',
		uta2020: '660070028140000',
		uta2010: '660070028140000',
		latitude: -24.826040667,
		longitude: -64.185579067,
		municipalityId: 1841
	},
	{
		id: 1197,
		name: 'EL GUAYACAN',
		uta2020: '660070028000087',
		uta2010: '660070028000087',
		latitude: -25.124595642,
		longitude: -63.672809601,
		municipalityId: 1841
	},
	{
		id: 1198,
		name: 'PUESTO DEL MEDIO',
		uta2020: '660070028000418',
		uta2010: '660070028000418',
		latitude: -25.239773409,
		longitude: -63.825092084,
		municipalityId: 1841
	},
	{
		id: 1199,
		name: 'CEIBALITO',
		uta2020: '660070028020000',
		uta2010: '660070028020000',
		latitude: -25.127860362,
		longitude: -64.289673506,
		municipalityId: 1841
	},
	{
		id: 1200,
		name: 'SAN ALFONSO',
		uta2020: '660070028000455',
		uta2010: '660070028000455',
		latitude: -24.887432098,
		longitude: -63.219612122,
		municipalityId: 1841
	},
	{
		id: 1201,
		name: 'LOS BLANCOS',
		uta2020: '660070028000322',
		uta2010: '660070028000322',
		latitude: -24.72470665,
		longitude: -63.735897064,
		municipalityId: 1841
	},
	{
		id: 1202,
		name: 'POZO GRANDE',
		uta2020: '660070028000397',
		uta2010: '660070028000397',
		latitude: -24.408157349,
		longitude: -63.259719849,
		municipalityId: 1841
	},
	{
		id: 1203,
		name: 'CAMPO REDONDO (PUESTO)',
		uta2020: '660070028000031',
		uta2010: '660070028000031',
		latitude: -25.097419696,
		longitude: -63.967137672,
		municipalityId: 1841
	},
	{
		id: 1204,
		name: 'SANTA MARIA',
		uta2020: '660070028000503',
		uta2010: '660070028000503',
		latitude: -24.92288208,
		longitude: -63.690582275,
		municipalityId: 1841
	},
	{
		id: 1205,
		name: 'LA LAGUNITA',
		uta2020: '660070028000259',
		uta2010: '660070028000259',
		latitude: -25.036680222,
		longitude: -63.942188263,
		municipalityId: 1841
	},
	{
		id: 1206,
		name: 'SAN IGNACIO',
		uta2020: '660070028000469',
		uta2010: '660070028000469',
		latitude: -25.2318,
		longitude: -64.52968,
		municipalityId: 1841
	},
	{
		id: 1207,
		name: 'POZO LARGO',
		uta2020: '660070028000401',
		uta2010: '660070028000401',
		latitude: -25.133811951,
		longitude: -64.502235413,
		municipalityId: 1841
	},
	{
		id: 1208,
		name: 'EL ESTANQUE',
		uta2020: '660070028000081',
		uta2010: '660070028000081',
		latitude: -24.342855454,
		longitude: -63.252223968,
		municipalityId: 1841
	},
	{
		id: 1209,
		name: 'VIZCACHERAL',
		uta2020: '660070028000537',
		uta2010: '660070028000537',
		latitude: -25.035060883,
		longitude: -63.840431213,
		municipalityId: 1841
	},
	{
		id: 1210,
		name: 'TORO POZO',
		uta2020: '660070028000525',
		uta2010: '660070028000525',
		latitude: -24.629678726,
		longitude: -63.242668152,
		municipalityId: 1841
	},
	{
		id: 1211,
		name: 'FINCA EL ALGARROBAL',
		uta2020: '660070028000167',
		uta2010: '660070028000167',
		latitude: -25.103107776,
		longitude: -64.167421253,
		municipalityId: 1841
	},
	{
		id: 1212,
		name: 'SANTOS LUGARES',
		uta2020: '660070028000510',
		uta2010: '660070028000510',
		latitude: -25.128341675,
		longitude: -63.995182037,
		municipalityId: 1841
	},
	{
		id: 1213,
		name: 'LA POSICION',
		uta2020: '660070028000271',
		uta2010: '660070028000271',
		latitude: -24.621440888,
		longitude: -63.149036407,
		municipalityId: 1841
	},
	{
		id: 1214,
		name: 'BELLA FLOR',
		uta2020: '660070028000019',
		uta2010: '660070028000019',
		latitude: -24.83455658,
		longitude: -63.678314209,
		municipalityId: 1841
	},
	{
		id: 1215,
		name: 'LUZ DE ANTA',
		uta2020: '660070028000346',
		uta2010: '660070028000346',
		latitude: -24.634065628,
		longitude: -63.093093872,
		municipalityId: 1841
	},
	{
		id: 1216,
		name: 'EL 103',
		uta2020: '660070028000050',
		uta2010: '660070028000050',
		latitude: -24.538944244,
		longitude: -63.270885468,
		municipalityId: 1841
	},
	{
		id: 1217,
		name: 'LOS POZOS',
		uta2020: '660070028000337',
		uta2010: '660070028000337',
		latitude: -24.684482592,
		longitude: -63.06798802,
		municipalityId: 1841
	},
	{
		id: 1218,
		name: 'LAS MERCEDES',
		uta2020: '660070028000301',
		uta2010: '660070028000301',
		latitude: -24.710859299,
		longitude: -63.720947266,
		municipalityId: 1841
	},
	{
		id: 1219,
		name: 'JOAQUIN V. GONZALEZ',
		uta2020: '660070028090000',
		uta2010: '660070028090000',
		latitude: -25.129432471,
		longitude: -64.138589369,
		municipalityId: 1841
	},
	{
		id: 1220,
		name: 'POZO HALLADO',
		uta2020: '660070028000398',
		uta2010: '660070028000398',
		latitude: -24.291440964,
		longitude: -63.398727417,
		municipalityId: 1841
	},
	{
		id: 1221,
		name: 'BUEN LUGAR',
		uta2020: '660070028000022',
		uta2010: '660070028000022',
		latitude: -24.671134949,
		longitude: -63.758548737,
		municipalityId: 1841
	},
	{
		id: 1222,
		name: 'INDEPENDENCIA',
		uta2020: '660070028000228',
		uta2010: '660070028000228',
		latitude: -25.086958409,
		longitude: -63.203914964,
		municipalityId: 1841
	},
	{
		id: 1223,
		name: 'LA AGUADA',
		uta2020: '660070028000235',
		uta2010: '660070028000235',
		latitude: -25.090553284,
		longitude: -63.83807373,
		municipalityId: 1841
	},
	{
		id: 1224,
		name: 'SAN MARTIN',
		uta2020: '660070028000481',
		uta2010: '660070028000481',
		latitude: -24.700847626,
		longitude: -64.127098084,
		municipalityId: 1841
	},
	{
		id: 1225,
		name: 'SANTO DOMINGO',
		uta2020: '660070028000509',
		uta2010: '660070028000509',
		latitude: -24.652648926,
		longitude: -64.033126831,
		municipalityId: 1841
	},
	{
		id: 1226,
		name: 'EL RECREO',
		uta2020: '660070028000121',
		uta2010: '660070028000121',
		latitude: -24.529401779,
		longitude: -63.841594696,
		municipalityId: 1841
	},
	{
		id: 1227,
		name: 'REMANCITO',
		uta2020: '660070028000444',
		uta2010: '660070028000444',
		latitude: -24.858459473,
		longitude: -63.576648712,
		municipalityId: 1841
	},
	{
		id: 1228,
		name: 'EL 21',
		uta2020: '660070028000053',
		uta2010: '660070028000053',
		latitude: -24.90237236,
		longitude: -63.998321533,
		municipalityId: 1841
	},
	{
		id: 1229,
		name: 'EL YESO',
		uta2020: '660070028000145',
		uta2010: '660070028000145',
		latitude: -24.971961975,
		longitude: -64.429130554,
		municipalityId: 1841
	},
	{
		id: 1230,
		name: 'RETIRO',
		uta2020: '660070028000446',
		uta2010: '660070028000446',
		latitude: -24.507669449,
		longitude: -63.629142761,
		municipalityId: 1841
	},
	{
		id: 1231,
		name: 'SAN PEDRO',
		uta2020: '660070028000486',
		uta2010: '660070028000486',
		latitude: -24.732366562,
		longitude: -63.483890533,
		municipalityId: 1841
	},
	{
		id: 1232,
		name: 'EL JARDIN',
		uta2020: '660070028000090',
		uta2010: '660070028000090',
		latitude: -24.579835892,
		longitude: -63.632591248,
		municipalityId: 1841
	},
	{
		id: 1233,
		name: 'SAN BERNARDO',
		uta2020: '660070028000459',
		uta2010: '660070028000459',
		latitude: -24.679985046,
		longitude: -63.684440613,
		municipalityId: 1841
	},
	{
		id: 1234,
		name: 'LAS VACAS',
		uta2020: '660070028000310',
		uta2010: '660070028000310',
		latitude: -24.81619072,
		longitude: -63.794002533,
		municipalityId: 1841
	},
	{
		id: 1235,
		name: 'EL QUEBRACHALITO',
		uta2020: '660070028000117',
		uta2010: '660070028000117',
		latitude: -24.307559967,
		longitude: -63.50541687,
		municipalityId: 1841
	},
	{
		id: 1236,
		name: 'PUESTO LA PROVIDENCIA',
		uta2020: '660070028000429',
		uta2010: '660070028000429',
		latitude: -24.636650787,
		longitude: -63.271057484,
		municipalityId: 1841
	},
	{
		id: 1237,
		name: 'LA POBLACION',
		uta2020: '660070028000270',
		uta2010: '660070028000270',
		latitude: -24.846818924,
		longitude: -63.38401413,
		municipalityId: 1841
	},
	{
		id: 1238,
		name: 'NOLASCO',
		uta2020: '660070028000363',
		uta2010: '660070028000363',
		latitude: -24.832666397,
		longitude: -63.715831757,
		municipalityId: 1841
	},
	{
		id: 1239,
		name: 'MIRAFLORES',
		uta2020: '380630196100000',
		uta2010: '380630196100000',
		latitude: -24.22614768,
		longitude: -64.810173553,
		municipalityId: 1174
	},
	{
		id: 1240,
		name: 'EL PUESTO',
		uta2020: '380630196050000',
		uta2010: '380630196050000',
		latitude: -24.198825499,
		longitude: -64.789344164,
		municipalityId: 1174
	},
	{
		id: 1241,
		name: 'LA ESPERANZA',
		uta2020: '380630196070000',
		uta2010: '380630196070000',
		latitude: -24.222214548,
		longitude: -64.83680705,
		municipalityId: 1174
	},
	{
		id: 1242,
		name: 'PARAPETI',
		uta2020: '380630196120000',
		uta2010: '380630196120000',
		latitude: -24.234857985,
		longitude: -64.844033655,
		municipalityId: 1174
	},
	{
		id: 1243,
		name: 'SAN ANTONIO',
		uta2020: '380630196160000',
		uta2010: '380630196160000',
		latitude: -24.213962515,
		longitude: -64.805744324,
		municipalityId: 1174
	},
	{
		id: 1244,
		name: 'ESTANCIA LA MARKONIA',
		uta2020: '820632994000010',
		uta2010: '820632994000010',
		latitude: -31.181964929,
		longitude: -60.630110505,
		municipalityId: 1029
	},
	{
		id: 1245,
		name: 'LLAMBI CAMPBELL',
		uta2020: '820632994090000',
		uta2010: '820632994090000',
		latitude: -31.186257404,
		longitude: -60.748478594,
		municipalityId: 1029
	},
	{
		id: 1246,
		name: 'AROMOS',
		uta2020: '820632994000001',
		uta2010: '820632994000001',
		latitude: -31.188581467,
		longitude: -60.626773834,
		municipalityId: 1029
	},
	{
		id: 1247,
		name: 'ISLA VERDE',
		uta2020: '140630560150000',
		uta2010: '140630560150000',
		latitude: -33.24010715,
		longitude: -62.404426547,
		municipalityId: 182
	},
	{
		id: 1248,
		name: 'COLONIA PERFECCION',
		uta2020: '300980427000032',
		uta2010: '300980427000032',
		latitude: -32.475718164,
		longitude: -58.298985561,
		municipalityId: 1769
	},
	{
		id: 1249,
		name: 'CONCEPCION DEL URUGUAY',
		uta2020: '300980427040000',
		uta2010: '300980427040000',
		latitude: -32.485360167,
		longitude: -58.232051738,
		municipalityId: 1769
	},
	{
		id: 1250,
		name: 'ARROYO URQUIZA',
		uta2020: '300980427000004',
		uta2010: '300980427000004',
		latitude: -32.380954743,
		longitude: -58.236881266,
		municipalityId: 1769
	},
	{
		id: 1251,
		name: 'TALITA',
		uta2020: '300980427000117',
		uta2010: '300980427000117',
		latitude: -32.528509963,
		longitude: -58.295789869,
		municipalityId: 1769
	},
	{
		id: 1252,
		name: 'COLONIA SANTA ANA',
		uta2020: '300980427000037',
		uta2010: '300980427000037',
		latitude: -32.54099655,
		longitude: -58.34553908,
		municipalityId: 1769
	},
	{
		id: 1253,
		name: 'DISTRITO MOLINO',
		uta2020: '300980427000045',
		uta2010: '300980427000045',
		latitude: -32.406749,
		longitude: -58.277803,
		municipalityId: 1769
	},
	{
		id: 1254,
		name: 'VILLA MASCARDI',
		uta2020: '620215049110000',
		uta2010: '620215049110000',
		latitude: -41.349553644,
		longitude: -71.509041629,
		municipalityId: 1277
	},
	{
		id: 1255,
		name: 'CACHIRULO',
		uta2020: '421400357005000',
		uta2010: '421400357005000',
		latitude: -36.747396152,
		longitude: -64.367390702,
		municipalityId: 1936
	},
	{
		id: 1256,
		name: 'EL TROPEZON',
		uta2020: '421400357000005',
		uta2010: '421400357000005',
		latitude: -36.703842163,
		longitude: -64.920448303,
		municipalityId: 1936
	},
	{
		id: 1257,
		name: 'TOAY',
		uta2020: '421400357020000',
		uta2010: '421400357020000',
		latitude: -36.675157765,
		longitude: -64.380325381,
		municipalityId: 1936
	},
	{
		id: 1258,
		name: 'SINSACATE',
		uta2020: '141681533110000',
		uta2010: '141681533110000',
		latitude: -30.942857479,
		longitude: -64.088497437,
		municipalityId: 337
	},
	{
		id: 1259,
		name: 'ALGARROBO',
		uta2020: '340490000000004',
		uta2010: '340490000000004',
		latitude: -25.117113113,
		longitude: -58.188476565,
		municipalityId: 2311
	},
	{
		id: 1260,
		name: 'JOSE MARIA PAZ',
		uta2020: '340490000000068',
		uta2010: '340490000000068',
		latitude: -25.11076,
		longitude: -58.36485,
		municipalityId: 2311
	},
	{
		id: 1261,
		name: 'BOQUERON',
		uta2020: '340490000000012',
		uta2010: '340490000000012',
		latitude: -25.549552917,
		longitude: -57.785747533,
		municipalityId: 2311
	},
	{
		id: 1262,
		name: 'COLONIA BOUVIER',
		uta2020: '340490000000018',
		uta2010: '340490000000018',
		latitude: -25.433051541,
		longitude: -57.570272474,
		municipalityId: 2311
	},
	{
		id: 1263,
		name: 'TRANQUERITA',
		uta2020: '340490000000110',
		uta2010: '340490000000110',
		latitude: -25.419837951,
		longitude: -58.121852877,
		municipalityId: 2311
	},
	{
		id: 1264,
		name: 'EL RECODO',
		uta2020: '340490000000038',
		uta2010: '340490000000038',
		latitude: -25.29602395,
		longitude: -58.36936942,
		municipalityId: 2311
	},
	{
		id: 1265,
		name: 'COLONIA SUDAMERICANA',
		uta2020: '340490000000025',
		uta2010: '340490000000025',
		latitude: -25.20787566,
		longitude: -58.31159053,
		municipalityId: 2311
	},
	{
		id: 1266,
		name: 'MARCA M',
		uta2020: '340490000000078',
		uta2010: '340490000000078',
		latitude: -25.23162,
		longitude: -58.25221,
		municipalityId: 2311
	},
	{
		id: 1267,
		name: 'CEIBO TRECE',
		uta2020: '340490000000015',
		uta2010: '340490000000015',
		latitude: -25.23457,
		longitude: -58.20043,
		municipalityId: 2311
	},
	{
		id: 1268,
		name: 'SAN FRANCISCO',
		uta2020: '340490000000102',
		uta2010: '340490000000102',
		latitude: -25.517774581,
		longitude: -58.429462434,
		municipalityId: 2311
	},
	{
		id: 1269,
		name: 'SOL DE MAYO',
		uta2020: '340490000000105',
		uta2010: '340490000000105',
		latitude: -25.164043395,
		longitude: -58.352947637,
		municipalityId: 2311
	},
	{
		id: 1270,
		name: 'POLVORIN',
		uta2020: '340490000000086',
		uta2010: '340490000000086',
		latitude: -25.115051269,
		longitude: -57.99847031,
		municipalityId: 2311
	},
	{
		id: 1271,
		name: 'MARTIN FIERRO',
		uta2020: '340490000000080',
		uta2010: '340490000000080',
		latitude: -25.312885946,
		longitude: -58.283924957,
		municipalityId: 2311
	},
	{
		id: 1272,
		name: 'VIRASOL',
		uta2020: '340490000000114',
		uta2010: '340490000000114',
		latitude: -25.456455231,
		longitude: -58.571430206,
		municipalityId: 2311
	},
	{
		id: 1273,
		name: 'LUCERO CUE',
		uta2020: '340490000000077',
		uta2010: '340490000000077',
		latitude: -25.24968617,
		longitude: -58.054367008,
		municipalityId: 2311
	},
	{
		id: 1274,
		name: 'EL PARAISO',
		uta2020: '340490000000037',
		uta2010: '340490000000037',
		latitude: -25.19513,
		longitude: -58.00583,
		municipalityId: 2311
	},
	{
		id: 1275,
		name: 'ISLA PUEN',
		uta2020: '340490000000064',
		uta2010: '340490000000064',
		latitude: -25.19173,
		longitude: -58.12341,
		municipalityId: 2311
	},
	{
		id: 1276,
		name: 'ISLA LEONA',
		uta2020: '340490000000061',
		uta2010: '340490000000061',
		latitude: -25.523719787,
		longitude: -57.715736395,
		municipalityId: 2311
	},
	{
		id: 1277,
		name: 'PRESIDENTE AVELLANEDA',
		uta2020: '340490000000087',
		uta2010: '340490000000087',
		latitude: -25.22113,
		longitude: -57.99249,
		municipalityId: 2311
	},
	{
		id: 1278,
		name: 'COSTA ALEGRE',
		uta2020: '340490000000026',
		uta2010: '340490000000026',
		latitude: -25.1517144,
		longitude: -58.21655961,
		municipalityId: 2311
	},
	{
		id: 1279,
		name: 'COLONIA SARMIENTO',
		uta2020: '340490000000024',
		uta2010: '340490000000024',
		latitude: -25.21223,
		longitude: -58.07312,
		municipalityId: 2311
	},
	{
		id: 1280,
		name: 'COLONIA LOS SANTAFESINOS',
		uta2020: '340490000000022',
		uta2010: '340490000000022',
		latitude: -25.27805,
		longitude: -58.05819,
		municipalityId: 2311
	},
	{
		id: 1281,
		name: 'LOMA HERMOSA',
		uta2020: '340490000000074',
		uta2010: '340490000000074',
		latitude: -25.3182007,
		longitude: -58.31636897,
		municipalityId: 2311
	},
	{
		id: 1282,
		name: 'AURORA',
		uta2020: '340490000000007',
		uta2010: '340490000000007',
		latitude: -25.096738815,
		longitude: -57.923084263,
		municipalityId: 2311
	},
	{
		id: 1283,
		name: 'ISLA YOBAI GUAZU',
		uta2020: '340490000000066',
		uta2010: '340490000000066',
		latitude: -25.11531892,
		longitude: -58.33376268,
		municipalityId: 2311
	},
	{
		id: 1284,
		name: 'NUEVA MORADA',
		uta2020: '340490000000083',
		uta2010: '340490000000083',
		latitude: -25.4202919,
		longitude: -58.064380649,
		municipalityId: 2311
	},
	{
		id: 1285,
		name: 'BUEY MUERTO',
		uta2020: '340490000000013',
		uta2010: '340490000000013',
		latitude: -25.51729462,
		longitude: -57.58541194,
		municipalityId: 2311
	},
	{
		id: 1286,
		name: 'COLONIA SAN JUAN',
		uta2020: '340490000000023',
		uta2010: '340490000000023',
		latitude: -25.17541917,
		longitude: -57.94635857,
		municipalityId: 2311
	},
	{
		id: 1287,
		name: 'RODEO TAPITI',
		uta2020: '340490000000099',
		uta2010: '340490000000099',
		latitude: -25.107477521,
		longitude: -58.280956498,
		municipalityId: 2311
	},
	{
		id: 1288,
		name: 'COLONIA LA PRIMAVERA',
		uta2020: '340490000000021',
		uta2010: '340490000000021',
		latitude: -25.18686,
		longitude: -58.1336,
		municipalityId: 2311
	},
	{
		id: 1289,
		name: 'PASO ANGELITO',
		uta2020: '340490000000085',
		uta2010: '340490000000085',
		latitude: -25.20277,
		longitude: -58.15092,
		municipalityId: 2311
	},
	{
		id: 1290,
		name: 'ESPERANZA',
		uta2020: '340490000000039',
		uta2010: '340490000000039',
		latitude: -25.35277228,
		longitude: -58.31308486,
		municipalityId: 2311
	},
	{
		id: 1291,
		name: 'ISLA APANDO',
		uta2020: '340490000000058',
		uta2010: '340490000000058',
		latitude: -25.40788497,
		longitude: -57.6190963,
		municipalityId: 2311
	},
	{
		id: 1292,
		name: 'RIACHO',
		uta2020: '340490000000097',
		uta2010: '340490000000097',
		latitude: -25.562166213,
		longitude: -58.153354647,
		municipalityId: 2311
	},
	{
		id: 1293,
		name: 'SOLEDAD',
		uta2020: '340490000000108',
		uta2010: '340490000000108',
		latitude: -25.571985244,
		longitude: -58.602230073,
		municipalityId: 2311
	},
	{
		id: 1294,
		name: 'PUNTA GUIA',
		uta2020: '340490000000092',
		uta2010: '340490000000092',
		latitude: -25.21997,
		longitude: -58.20972,
		municipalityId: 2311
	},
	{
		id: 1295,
		name: 'VISTA ALEGRE',
		uta2020: '340490000000115',
		uta2010: '340490000000115',
		latitude: -25.536849975,
		longitude: -58.040634158,
		municipalityId: 2311
	},
	{
		id: 1296,
		name: 'LOMA TUYUTU',
		uta2020: '340490000000076',
		uta2010: '340490000000076',
		latitude: -25.08621703,
		longitude: -58.3377787,
		municipalityId: 2311
	},
	{
		id: 1297,
		name: 'GENERAL ALMADA',
		uta2020: '300569365050000',
		uta2010: '300569365050000',
		latitude: -32.837633475,
		longitude: -58.803816047,
		municipalityId: 1622
	},
	{
		id: 1298,
		name: 'SAN JUANCITO',
		uta2020: '380140077120000',
		uta2010: '380140077120000',
		latitude: -24.383194475,
		longitude: -64.995837064,
		municipalityId: 1180
	},
	{
		id: 1299,
		name: 'SEVERINO',
		uta2020: '380140077000042',
		uta2010: '380140077000042',
		latitude: -24.35132,
		longitude: -65.20059,
		municipalityId: 1180
	},
	{
		id: 1300,
		name: 'EL CADILLAL',
		uta2020: '380140077000012',
		uta2010: '380140077000012',
		latitude: -24.389146805,
		longitude: -65.098731995,
		municipalityId: 1180
	},
	{
		id: 1301,
		name: 'EL CHAMICAL',
		uta2020: '380140077000013',
		uta2010: '380140077000013',
		latitude: -24.39489,
		longitude: -65.19883,
		municipalityId: 1180
	},
	{
		id: 1302,
		name: 'LAS PAMPITAS',
		uta2020: '380140077000030',
		uta2010: '380140077000030',
		latitude: -24.40575,
		longitude: -65.05195,
		municipalityId: 1180
	},
	{
		id: 1303,
		name: 'PERICO',
		uta2020: '380140077090000',
		uta2010: '380140077090000',
		latitude: -24.379815283,
		longitude: -65.113279381,
		municipalityId: 1180
	},
	{
		id: 1304,
		name: 'CORONEL ARIAS',
		uta2020: '380140077000006',
		uta2010: '380140077000006',
		latitude: -24.41798053,
		longitude: -65.15520149,
		municipalityId: 1180
	},
	{
		id: 1305,
		name: 'BARRIO LA UNION',
		uta2020: '380140077030000',
		uta2010: '380140077030000',
		latitude: -24.403542069,
		longitude: -65.068590109,
		municipalityId: 1180
	},
	{
		id: 1306,
		name: 'LA POSTA',
		uta2020: '380140077000027',
		uta2010: '380140077000027',
		latitude: -24.382409365,
		longitude: -65.130152224,
		municipalityId: 1180
	},
	{
		id: 1307,
		name: 'BORDO LA ISLA',
		uta2020: '380140077000003',
		uta2010: '380140077000003',
		latitude: -24.395370483,
		longitude: -65.176597595,
		municipalityId: 1180
	},
	{
		id: 1308,
		name: 'FINCA LA MORALEJA',
		uta2020: '660070021000183',
		uta2010: '660070021000183',
		latitude: -24.19111798,
		longitude: -64.093690355,
		municipalityId: 1842
	},
	{
		id: 1309,
		name: 'EL DESMONTE',
		uta2020: '660070021000075',
		uta2010: '660070021000075',
		latitude: -24.379634857,
		longitude: -63.795555115,
		municipalityId: 1842
	},
	{
		id: 1310,
		name: 'GENERAL PIZARRO',
		uta2020: '660070021080000',
		uta2010: '660070021080000',
		latitude: -24.23422485,
		longitude: -63.99109154,
		municipalityId: 1842
	},
	{
		id: 1311,
		name: 'LOMA DE BURRO',
		uta2020: '660070021000317',
		uta2010: '660070021000317',
		latitude: -24.285627365,
		longitude: -63.532920837,
		municipalityId: 1842
	},
	{
		id: 1312,
		name: 'LAS AVISPAS',
		uta2020: '660070021000288',
		uta2010: '660070021000288',
		latitude: -24.303386688,
		longitude: -63.582920075,
		municipalityId: 1842
	},
	{
		id: 1313,
		name: 'LAS BEBIDAS',
		uta2020: '660070021000289',
		uta2010: '660070021000289',
		latitude: -24.329229355,
		longitude: -64.131652832,
		municipalityId: 1842
	},
	{
		id: 1314,
		name: 'ARRAYANAL',
		uta2020: '660070021000013',
		uta2010: '660070021000013',
		latitude: -24.423805237,
		longitude: -64.217887878,
		municipalityId: 1842
	},
	{
		id: 1315,
		name: 'LUIS BURELA',
		uta2020: '660070021110000',
		uta2010: '660070021110000',
		latitude: -24.397713501,
		longitude: -63.996110804,
		municipalityId: 1842
	},
	{
		id: 1316,
		name: 'LA ESMERALDA',
		uta2020: '660070021000247',
		uta2010: '660070021000247',
		latitude: -24.366136551,
		longitude: -63.757293701,
		municipalityId: 1842
	},
	{
		id: 1317,
		name: 'EL PUESTITO (FINCA)',
		uta2020: '660070021000116',
		uta2010: '660070021000116',
		latitude: -24.207752979,
		longitude: -63.656979421,
		municipalityId: 1842
	},
	{
		id: 1318,
		name: 'EL REAL',
		uta2020: '660070021000120',
		uta2010: '660070021000120',
		latitude: -24.262302399,
		longitude: -64.052474976,
		municipalityId: 1842
	},
	{
		id: 1319,
		name: 'CORRAL QUEMADO',
		uta2020: '660070021000043',
		uta2010: '660070021000043',
		latitude: -24.340145111,
		longitude: -64.088401794,
		municipalityId: 1842
	},
	{
		id: 1320,
		name: 'EL CEBILAR',
		uta2020: '660070021000069',
		uta2010: '660070021000069',
		latitude: -24.252550125,
		longitude: -64.069740295,
		municipalityId: 1842
	},
	{
		id: 1321,
		name: 'PALO SANTO',
		uta2020: '660070021000374',
		uta2010: '660070021000374',
		latitude: -24.19877243,
		longitude: -63.375385284,
		municipalityId: 1842
	},
	{
		id: 1322,
		name: 'AGUA CALIENTE',
		uta2020: '660070021000002',
		uta2010: '660070021000002',
		latitude: -24.250011444,
		longitude: -64.140953064,
		municipalityId: 1842
	},
	{
		id: 1323,
		name: 'PALO A PIQUE',
		uta2020: '660070021000370',
		uta2010: '660070021000370',
		latitude: -24.24558,
		longitude: -63.39939,
		municipalityId: 1842
	},
	{
		id: 1324,
		name: 'EL LINDERO',
		uta2020: '660070021000093',
		uta2010: '660070021000093',
		latitude: -24.348775864,
		longitude: -63.817337036,
		municipalityId: 1842
	},
	{
		id: 1325,
		name: 'FEBRE',
		uta2020: '300779555040000',
		uta2010: '300779555040000',
		latitude: -32.4774516,
		longitude: -59.92171173,
		municipalityId: 1700
	},
	{
		id: 1326,
		name: 'DISTRITO MONTOYA',
		uta2020: '300779555000022',
		uta2010: '300779555000022',
		latitude: -32.519884518,
		longitude: -59.869705941,
		municipalityId: 1700
	},
	{
		id: 1327,
		name: 'USHUAIA',
		uta2020: '940140014020000',
		uta2010: '940140014020000',
		latitude: -54.80364046,
		longitude: -68.316062477,
		municipalityId: 2417
	},
	{
		id: 1328,
		name: 'EL ZAPALLAR',
		uta2020: '740070021000083',
		uta2010: '740070021000083',
		latitude: -32.28351144,
		longitude: -65.80227972,
		municipalityId: 1115
	},
	{
		id: 1329,
		name: 'LA BREA',
		uta2020: '740070021000092',
		uta2010: '740070021000092',
		latitude: -32.218073281,
		longitude: -65.874884266,
		municipalityId: 1115
	},
	{
		id: 1330,
		name: 'LA AGUADA',
		uta2020: '740070021000086',
		uta2010: '740070021000086',
		latitude: -32.28028097,
		longitude: -65.83553852,
		municipalityId: 1115
	},
	{
		id: 1331,
		name: 'QUINES',
		uta2020: '740070021050000',
		uta2010: '740070021050000',
		latitude: -32.233082237,
		longitude: -65.805632997,
		municipalityId: 1115
	},
	{
		id: 1332,
		name: 'MONTES DE OCA',
		uta2020: '820072014050000',
		uta2010: '820072014050000',
		latitude: -32.56799702,
		longitude: -61.768076235,
		municipalityId: 1044
	},
	{
		id: 1333,
		name: 'CAMPO LOS TRONCOS',
		uta2020: '820072014000009',
		uta2010: '820072014000009',
		latitude: -32.6634482,
		longitude: -61.8390628,
		municipalityId: 1044
	},
	{
		id: 1334,
		name: 'COLONIA LA PERLA',
		uta2020: '300880000000005',
		uta2010: '300880000000005',
		latitude: -31.45813887,
		longitude: -58.452086436,
		municipalityId: 1760
	},
	{
		id: 1335,
		name: 'COLONIA SANTA MARGARITA',
		uta2020: '300880000000011',
		uta2010: '300880000000011',
		latitude: -31.673065714,
		longitude: -58.441432188,
		municipalityId: 1760
	},
	{
		id: 1336,
		name: 'COLONIA CAÑADA GRANDE',
		uta2020: '300880000000002',
		uta2010: '300880000000002',
		latitude: -31.688765013,
		longitude: -58.526291334,
		municipalityId: 1760
	},
	{
		id: 1337,
		name: 'LOS CUARTOS',
		uta2020: '900988581000187',
		uta2010: '900988581000187',
		latitude: -26.8576011,
		longitude: -65.6752299,
		municipalityId: 2215
	},
	{
		id: 1338,
		name: 'RODEO GRANDE',
		uta2020: '900988581000232',
		uta2010: '900988581000232',
		latitude: -26.8837258,
		longitude: -65.7564601,
		municipalityId: 2215
	},
	{
		id: 1339,
		name: 'EL RINCON',
		uta2020: '900988581000082',
		uta2010: '900988581000082',
		latitude: -26.96472168,
		longitude: -65.774635315,
		municipalityId: 2215
	},
	{
		id: 1340,
		name: 'LA ANGOSTURA',
		uta2020: '900988581000127',
		uta2010: '900988581000127',
		latitude: -26.938554998,
		longitude: -65.674605669,
		municipalityId: 2215
	},
	{
		id: 1341,
		name: 'LA JUNTA',
		uta2020: '900988581000144',
		uta2010: '900988581000144',
		latitude: -26.86065565,
		longitude: -65.668963993,
		municipalityId: 2215
	},
	{
		id: 1342,
		name: 'ESQUINA DEL VALLE',
		uta2020: '900988581000113',
		uta2010: '900988581000113',
		latitude: -26.9299872,
		longitude: -65.7740426,
		municipalityId: 2215
	},
	{
		id: 1343,
		name: 'OJO DE AGUA',
		uta2020: '900988581000202',
		uta2010: '900988581000202',
		latitude: -26.89992603,
		longitude: -65.708592935,
		municipalityId: 2215
	},
	{
		id: 1344,
		name: 'SANTA CRUZ',
		uta2020: '900988581000236',
		uta2010: '900988581000236',
		latitude: -26.90155,
		longitude: -65.76092,
		municipalityId: 2215
	},
	{
		id: 1345,
		name: 'LAS CARRERAS',
		uta2020: '900988581000170',
		uta2010: '900988581000170',
		latitude: -26.95357132,
		longitude: -65.781188965,
		municipalityId: 2215
	},
	{
		id: 1346,
		name: 'EL MOLLAR',
		uta2020: '900988581030000',
		uta2010: '900988581030000',
		latitude: -26.939220922,
		longitude: -65.708154245,
		municipalityId: 2215
	},
	{
		id: 1347,
		name: 'SAN ANTONIO DE OBLIGADO',
		uta2020: '820492854190000',
		uta2010: '820492854190000',
		latitude: -28.382347094,
		longitude: -59.26457429,
		municipalityId: 950
	},
	{
		id: 1348,
		name: 'EL TREMENTINAL',
		uta2020: '660560147000110',
		uta2010: '660560147000110',
		latitude: -22.36534361,
		longitude: -64.105525713,
		municipalityId: 1846
	},
	{
		id: 1349,
		name: 'POCOY',
		uta2020: '660560147000256',
		uta2010: '660560147000256',
		latitude: -22.735750198,
		longitude: -64.02117157,
		municipalityId: 1846
	},
	{
		id: 1350,
		name: 'RECAREDO',
		uta2020: '660560147110002',
		uta2010: '660560147110002',
		latitude: -22.449765209,
		longitude: -63.885619216,
		municipalityId: 1846
	},
	{
		id: 1351,
		name: 'MADREJONES',
		uta2020: '660560147000226',
		uta2010: '660560147000226',
		latitude: -22.331416,
		longitude: -64.094482,
		municipalityId: 1846
	},
	{
		id: 1352,
		name: 'BARRIO EL JARDIN DE SAN MARTIN',
		uta2020: '660560147140002',
		uta2010: '660560147140002',
		latitude: -22.449765209,
		longitude: -63.885619216,
		municipalityId: 1846
	},
	{
		id: 1353,
		name: 'CORONEL CORNEJO',
		uta2020: '660560147070000',
		uta2010: '660560147070000',
		latitude: -22.736606161,
		longitude: -63.821234043,
		municipalityId: 1846
	},
	{
		id: 1354,
		name: 'GENERAL MOSCONI',
		uta2020: '660560147110000',
		uta2010: '660560147110000',
		latitude: -22.588862647,
		longitude: -63.811889812,
		municipalityId: 1846
	},
	{
		id: 1355,
		name: 'CAMPAMENTO VESPUCIO',
		uta2020: '660560147020000',
		uta2010: '660560147020000',
		latitude: -22.580047166,
		longitude: -63.852323185,
		municipalityId: 1846
	},
	{
		id: 1356,
		name: 'SAN TELMO',
		uta2020: '660560147000318',
		uta2010: '660560147000318',
		latitude: -22.572227478,
		longitude: -64.222732544,
		municipalityId: 1846
	},
	{
		id: 1357,
		name: 'LA LATA',
		uta2020: '066480648000001',
		uta2010: '066480648000001',
		latitude: -34.9075871,
		longitude: -58.4348955,
		municipalityId: 597
	},
	{
		id: 1358,
		name: 'GUERNICA',
		uta2020: '066480648010002',
		uta2010: '066480648010002',
		latitude: -34.923059211,
		longitude: -58.365027266,
		municipalityId: 597
	},
	{
		id: 1359,
		name: 'BARRIO AMERICA UNIDA',
		uta2020: '066480648010001',
		uta2010: '066480648010001',
		latitude: -34.886197582,
		longitude: -58.417334837,
		municipalityId: 597
	},
	{
		id: 1360,
		name: 'DAMIAN MAISONAVE',
		uta2020: '421335098030000',
		uta2010: '421335098030000',
		latitude: -35.04155585,
		longitude: -64.384712611,
		municipalityId: 1928
	},
	{
		id: 1361,
		name: 'EL CORTADERAL',
		uta2020: '900568343000048',
		uta2010: '900568343000048',
		latitude: -27.0940176,
		longitude: -65.1534815,
		municipalityId: 2218
	},
	{
		id: 1362,
		name: 'ROMERA POZO',
		uta2020: '900568343000213',
		uta2010: '900568343000213',
		latitude: -27.11202,
		longitude: -65.17929,
		municipalityId: 2218
	},
	{
		id: 1363,
		name: 'MIXTA',
		uta2020: '900568343000184',
		uta2010: '900568343000184',
		latitude: -27.21154,
		longitude: -65.13135,
		municipalityId: 2218
	},
	{
		id: 1364,
		name: 'LOS CAMPEROS',
		uta2020: '900568343000167',
		uta2010: '900568343000167',
		latitude: -27.11252,
		longitude: -65.27363,
		municipalityId: 2218
	},
	{
		id: 1365,
		name: 'LOMA VERDE',
		uta2020: '900568343000162',
		uta2010: '900568343000162',
		latitude: -27.15529,
		longitude: -65.20634,
		municipalityId: 2218
	},
	{
		id: 1366,
		name: 'PUMA POZO',
		uta2020: '900568343000206',
		uta2010: '900568343000206',
		latitude: -27.1619412,
		longitude: -65.1519499,
		municipalityId: 2218
	},
	{
		id: 1367,
		name: 'LAS MERCEDES',
		uta2020: '900568343000157',
		uta2010: '900568343000157',
		latitude: -27.1704837,
		longitude: -65.2899396,
		municipalityId: 2218
	},
	{
		id: 1368,
		name: 'SANTA ROSA DE LEALES',
		uta2020: '900568343070000',
		uta2010: '900568343070000',
		latitude: -27.137892877,
		longitude: -65.261417388,
		municipalityId: 2218
	},
	{
		id: 1369,
		name: 'AGUA AZUL',
		uta2020: '900568343000005',
		uta2010: '900568343000005',
		latitude: -27.140039444,
		longitude: -65.134643555,
		municipalityId: 2218
	},
	{
		id: 1370,
		name: 'CARNERILLO',
		uta2020: '140560399000023',
		uta2010: '140560399000023',
		latitude: -32.91412735,
		longitude: -64.022483826,
		municipalityId: 365
	},
	{
		id: 1371,
		name: 'CARNERILLO',
		uta2020: '140560399040000',
		uta2010: '140560399040000',
		latitude: -32.915314206,
		longitude: -64.025658055,
		municipalityId: 365
	},
	{
		id: 1372,
		name: 'CONSTANZA',
		uta2020: '820913526100000',
		uta2010: '820913526100000',
		latitude: -30.664633909,
		longitude: -61.320755216,
		municipalityId: 836
	},
	{
		id: 1373,
		name: 'CERRO COLORADO',
		uta2020: '141122735010000',
		uta2010: '141122735010000',
		latitude: -30.096059933,
		longitude: -63.928773173,
		municipalityId: 144
	},
	{
		id: 1374,
		name: 'BALCARCE',
		uta2020: '740286070000003',
		uta2010: '740286070000003',
		latitude: -32.563397622,
		longitude: -65.031530745,
		municipalityId: 1121
	},
	{
		id: 1375,
		name: 'CORTADERAS',
		uta2020: '740286070020000',
		uta2010: '740286070020000',
		latitude: -32.507650425,
		longitude: -64.986965516,
		municipalityId: 1121
	},
	{
		id: 1376,
		name: 'LA BANDA',
		uta2020: '860350042090000',
		uta2010: '860350042090000',
		latitude: -27.733906,
		longitude: -64.238961,
		municipalityId: 1336
	},
	{
		id: 1377,
		name: 'LA BAJADA',
		uta2020: '860350042000061',
		uta2010: '860350042000061',
		latitude: -27.78495843,
		longitude: -64.22611362,
		municipalityId: 1336
	},
	{
		id: 1378,
		name: 'SAN CARLOS',
		uta2020: '860350042000130',
		uta2010: '860350042000130',
		latitude: -27.72835,
		longitude: -64.24289,
		municipalityId: 1336
	},
	{
		id: 1379,
		name: 'SAN VICTOR',
		uta2020: '300429265020000',
		uta2010: '300429265020000',
		latitude: -30.48692836,
		longitude: -59.031651954,
		municipalityId: 1685
	},
	{
		id: 1380,
		name: 'ESTACION PALO A PIQUE',
		uta2020: '300429265000011',
		uta2010: '300429265000011',
		latitude: -30.42127242,
		longitude: -58.89678794,
		municipalityId: 1685
	},
	{
		id: 1381,
		name: 'LOS ZORROS',
		uta2020: '141611470100000',
		uta2010: '141611470100000',
		latitude: -32.045928188,
		longitude: -63.201798167,
		municipalityId: 348
	},
	{
		id: 1382,
		name: 'BARRIO PRESIDENTE PERON',
		uta2020: '620420126390001',
		uta2010: '620420126390001',
		latitude: -38.796184831,
		longitude: -68.073433435,
		municipalityId: 1262
	},
	{
		id: 1383,
		name: 'CINCO SALTOS',
		uta2020: '620420126390002',
		uta2010: '620420126390002',
		latitude: -38.840554101,
		longitude: -68.06230058,
		municipalityId: 1262
	},
	{
		id: 1384,
		name: 'LA PARRA',
		uta2020: '620420126000026',
		uta2010: '620420126000026',
		latitude: -38.860009534,
		longitude: -68.057511404,
		municipalityId: 1262
	},
	{
		id: 1385,
		name: 'COLONIA SAN MIGUEL',
		uta2020: '300089025000033',
		uta2010: '300089025000033',
		latitude: -31.993610038,
		longitude: -58.550952228,
		municipalityId: 1672
	},
	{
		id: 1386,
		name: 'PUEBLO CAZES',
		uta2020: '300089025070000',
		uta2010: '300089025070000',
		latitude: -32.003049252,
		longitude: -58.493483259,
		municipalityId: 1672
	},
	{
		id: 1387,
		name: 'PELON ARROYO',
		uta2020: '180420077000041',
		uta2010: '180420077000041',
		latitude: -27.774806039,
		longitude: -58.499562731,
		municipalityId: 2024
	},
	{
		id: 1388,
		name: 'ESTACION MANUEL DERQUI',
		uta2020: '180420077000024',
		uta2010: '180420077000024',
		latitude: -27.843304661,
		longitude: -58.778985342,
		municipalityId: 2024
	},
	{
		id: 1389,
		name: 'PASO QUINTANA',
		uta2020: '180420077000039',
		uta2010: '180420077000039',
		latitude: -27.800656647,
		longitude: -58.677783799,
		municipalityId: 2024
	},
	{
		id: 1390,
		name: 'ARROYO SOLIS',
		uta2020: '180420077000003',
		uta2010: '180420077000003',
		latitude: -27.792209119,
		longitude: -58.604218393,
		municipalityId: 2024
	},
	{
		id: 1391,
		name: 'ARROYO EL SOMBRERO',
		uta2020: '180420077000002',
		uta2010: '180420077000002',
		latitude: -27.668420609,
		longitude: -58.709334303,
		municipalityId: 2024
	},
	{
		id: 1392,
		name: 'EL POLLO ESTE',
		uta2020: '180420077000017',
		uta2010: '180420077000017',
		latitude: -27.861892825,
		longitude: -58.349268555,
		municipalityId: 2024
	},
	{
		id: 1393,
		name: 'COSTA DE EMPEDRADO',
		uta2020: '180420077000012',
		uta2010: '180420077000012',
		latitude: -27.791720785,
		longitude: -58.421562811,
		municipalityId: 2024
	},
	{
		id: 1394,
		name: 'COSTA GRANDE',
		uta2020: '180420077000014',
		uta2010: '180420077000014',
		latitude: -27.973385112,
		longitude: -58.474489614,
		municipalityId: 2024
	},
	{
		id: 1395,
		name: 'COLONIA SANZ',
		uta2020: '180420077000011',
		uta2010: '180420077000011',
		latitude: -28.075958263,
		longitude: -58.743373136,
		municipalityId: 2024
	},
	{
		id: 1396,
		name: 'SAN JUANCITO',
		uta2020: '180420077000051',
		uta2010: '180420077000051',
		latitude: -27.86544616,
		longitude: -58.68568032,
		municipalityId: 2024
	},
	{
		id: 1397,
		name: 'RINCON DEL MADREGON',
		uta2020: '180420077000049',
		uta2010: '180420077000049',
		latitude: -28.003114735,
		longitude: -58.624177363,
		municipalityId: 2024
	},
	{
		id: 1398,
		name: 'SAN LORENCITO',
		uta2020: '180420077000052',
		uta2010: '180420077000052',
		latitude: -27.923681095,
		longitude: -58.361468836,
		municipalityId: 2024
	},
	{
		id: 1399,
		name: 'OCANTO CUE',
		uta2020: '180420077000037',
		uta2010: '180420077000037',
		latitude: -27.931078157,
		longitude: -58.772138091,
		municipalityId: 2024
	},
	{
		id: 1400,
		name: 'EMPEDRADO',
		uta2020: '180420077020000',
		uta2010: '180420077020000',
		latitude: -27.952455693,
		longitude: -58.807476389,
		municipalityId: 2024
	},
	{
		id: 1401,
		name: 'SANTA ROSA',
		uta2020: '180420077000053',
		uta2010: '180420077000053',
		latitude: -27.645966328,
		longitude: -58.741924867,
		municipalityId: 2024
	},
	{
		id: 1402,
		name: 'COLONIA BROUGNES',
		uta2020: '180420077000008',
		uta2010: '180420077000008',
		latitude: -28.066698621,
		longitude: -58.819680162,
		municipalityId: 2024
	},
	{
		id: 1403,
		name: 'CAMPO GRANDE',
		uta2020: '180420077000007',
		uta2010: '180420077000007',
		latitude: -27.757319434,
		longitude: -58.564465936,
		municipalityId: 2024
	},
	{
		id: 1404,
		name: 'PEHUAJO',
		uta2020: '180420077000040',
		uta2010: '180420077000040',
		latitude: -27.73161139,
		longitude: -58.71274791,
		municipalityId: 2024
	},
	{
		id: 1405,
		name: 'RINCON DEL SOMBRERO',
		uta2020: '180420077000050',
		uta2010: '180420077000050',
		latitude: -27.637506138,
		longitude: -58.664779485,
		municipalityId: 2024
	},
	{
		id: 1406,
		name: 'COLONIA IMPARCIALES',
		uta2020: '180420077000009',
		uta2010: '180420077000009',
		latitude: -28.129080783,
		longitude: -58.823599964,
		municipalityId: 2024
	},
	{
		id: 1407,
		name: 'VILLA SAN ISIDRO',
		uta2020: '180420077000056',
		uta2010: '180420077000056',
		latitude: -27.813165587,
		longitude: -58.720381559,
		municipalityId: 2024
	},
	{
		id: 1408,
		name: 'EL POLLO',
		uta2020: '180420077000016',
		uta2010: '180420077000016',
		latitude: -27.832331253,
		longitude: -58.469682228,
		municipalityId: 2024
	},
	{
		id: 1409,
		name: 'RINCON DE EMPEDRADO',
		uta2020: '180420077000047',
		uta2010: '180420077000047',
		latitude: -27.888988507,
		longitude: -58.773247926,
		municipalityId: 2024
	},
	{
		id: 1410,
		name: 'LOMAS DE EMPEDRADO',
		uta2020: '180420077000033',
		uta2010: '180420077000033',
		latitude: -27.88419255,
		longitude: -58.70775735,
		municipalityId: 2024
	},
	{
		id: 1411,
		name: 'REAL CUE',
		uta2020: '180420077000046',
		uta2010: '180420077000046',
		latitude: -28.029649547,
		longitude: -58.674650674,
		municipalityId: 2024
	},
	{
		id: 1412,
		name: 'AHOMA SUR',
		uta2020: '180420077000001',
		uta2010: '180420077000001',
		latitude: -27.70578113,
		longitude: -58.68808341,
		municipalityId: 2024
	},
	{
		id: 1413,
		name: 'BERNACHEA',
		uta2020: '180420077000005',
		uta2010: '180420077000005',
		latitude: -27.927702832,
		longitude: -58.329764806,
		municipalityId: 2024
	},
	{
		id: 1414,
		name: 'EL CARRIZAL',
		uta2020: '180420077000015',
		uta2010: '180420077000015',
		latitude: -28.161054416,
		longitude: -58.865828202,
		municipalityId: 2024
	},
	{
		id: 1415,
		name: 'ARROYO LOS PATOS',
		uta2020: '141262840020000',
		uta2010: '141262840020000',
		latitude: -31.750081658,
		longitude: -65.004300188,
		municipalityId: 383
	},
	{
		id: 1416,
		name: 'PUELEN',
		uta2020: '421120287010000',
		uta2010: '421120287010000',
		latitude: -37.340065549,
		longitude: -67.621850051,
		municipalityId: 1937
	},
	{
		id: 1417,
		name: 'TORO PUJIO',
		uta2020: '141402973390000',
		uta2010: '141402973390000',
		latitude: -31.109040183,
		longitude: -62.987650622,
		municipalityId: 397
	},
	{
		id: 1418,
		name: 'PUERTO ESPAÑA',
		uta2020: '540980434000033',
		uta2010: '540980434000033',
		latitude: -27.042231279,
		longitude: -55.438123292,
		municipalityId: 2107
	},
	{
		id: 1419,
		name: 'GENERAL URQUIZA',
		uta2020: '540980434040000',
		uta2010: '540980434040000',
		latitude: -27.107731779,
		longitude: -55.373766082,
		municipalityId: 2107
	},
	{
		id: 1420,
		name: 'EL DESTIERRO',
		uta2020: '540980434000009',
		uta2010: '540980434000009',
		latitude: -27.075466156,
		longitude: -55.443500519,
		municipalityId: 2107
	},
	{
		id: 1421,
		name: 'BARRIO TUNGOIL',
		uta2020: '540980434005000',
		uta2010: '540980434005000',
		latitude: -27.107756855,
		longitude: -55.388115137,
		municipalityId: 2107
	},
	{
		id: 1422,
		name: 'PUERTO NUEVO',
		uta2020: '540980434000037',
		uta2010: '540980434000037',
		latitude: -26.972278595,
		longitude: -55.377349854,
		municipalityId: 2107
	},
	{
		id: 1423,
		name: 'PUERTO GISELA',
		uta2020: '540980434000034',
		uta2010: '540980434000034',
		latitude: -27.020950237,
		longitude: -55.367600458,
		municipalityId: 2107
	},
	{
		id: 1424,
		name: 'CAMPANA MAHUIDA',
		uta2020: '580630126000008',
		uta2010: '580630126000008',
		latitude: -38.195521663,
		longitude: -70.599224337,
		municipalityId: 2374
	},
	{
		id: 1425,
		name: 'LONCOPUE',
		uta2020: '580630126020000',
		uta2010: '580630126020000',
		latitude: -38.069943272,
		longitude: -70.612403905,
		municipalityId: 2374
	},
	{
		id: 1426,
		name: 'SEGUIN',
		uta2020: '540910364000030',
		uta2010: '540910364000030',
		latitude: -27.217711287,
		longitude: -55.083183556,
		municipalityId: 2115
	},
	{
		id: 1427,
		name: 'CAMPO VIERA',
		uta2020: '540910364030000',
		uta2010: '540910364030000',
		latitude: -27.331055877,
		longitude: -55.052854816,
		municipalityId: 2115
	},
	{
		id: 1428,
		name: 'YAZA',
		uta2020: '540910364000042',
		uta2010: '540910364000042',
		latitude: -27.36161012,
		longitude: -55.06613237,
		municipalityId: 2115
	},
	{
		id: 1429,
		name: 'ALEJO LEDESMA',
		uta2020: '140630476010000',
		uta2010: '140630476010000',
		latitude: -33.607612594,
		longitude: -62.626140572,
		municipalityId: 183
	},
	{
		id: 1430,
		name: 'ARROYO DEL MEDIO',
		uta2020: '380700245000011',
		uta2010: '380700245000011',
		latitude: -23.940021515,
		longitude: -64.349639893,
		municipalityId: 1186
	},
	{
		id: 1431,
		name: 'OJO DE AGUA',
		uta2020: '380700245000081',
		uta2010: '380700245000081',
		latitude: -24.264734268,
		longitude: -64.316398621,
		municipalityId: 1186
	},
	{
		id: 1432,
		name: 'SANTA CORNELIA',
		uta2020: '380700245000110',
		uta2010: '380700245000110',
		latitude: -23.803043365,
		longitude: -64.415969849,
		municipalityId: 1186
	},
	{
		id: 1433,
		name: 'REAL DE LOS TOROS',
		uta2020: '380700245000099',
		uta2010: '380700245000099',
		latitude: -24.00476075,
		longitude: -64.33108715,
		municipalityId: 1186
	},
	{
		id: 1434,
		name: 'LAS DELICIAS',
		uta2020: '380700245000065',
		uta2010: '380700245000065',
		latitude: -24.052583695,
		longitude: -64.22567749,
		municipalityId: 1186
	},
	{
		id: 1435,
		name: 'PALMA SOLA',
		uta2020: '380700245040000',
		uta2010: '380700245040000',
		latitude: -23.979101577,
		longitude: -64.306641163,
		municipalityId: 1186
	},
	{
		id: 1436,
		name: 'VILLA MONTES',
		uta2020: '380700245000118',
		uta2010: '380700245000118',
		latitude: -24.10286154,
		longitude: -64.40124829,
		municipalityId: 1186
	},
	{
		id: 1437,
		name: 'ISLA CHICA',
		uta2020: '380700245000043',
		uta2010: '380700245000043',
		latitude: -24.021064758,
		longitude: -64.324951172,
		municipalityId: 1186
	},
	{
		id: 1438,
		name: 'SAN ANTONIO',
		uta2020: '380700245000106',
		uta2010: '380700245000106',
		latitude: -23.836555481,
		longitude: -64.271713257,
		municipalityId: 1186
	},
	{
		id: 1439,
		name: 'SAN RAFAEL',
		uta2020: '380700245000109',
		uta2010: '380700245000109',
		latitude: -24.087533951,
		longitude: -64.396080017,
		municipalityId: 1186
	},
	{
		id: 1440,
		name: 'LAS PALMAS',
		uta2020: '820492840000096',
		uta2010: '820492840000096',
		latitude: -29.419324875,
		longitude: -59.719028473,
		municipalityId: 951
	},
	{
		id: 1441,
		name: 'LA ESMERALDA',
		uta2020: '820492840000080',
		uta2010: '820492840000080',
		latitude: -29.3218713,
		longitude: -59.713095,
		municipalityId: 951
	},
	{
		id: 1442,
		name: 'CAMPO MENDOZA',
		uta2020: '820492840000015',
		uta2010: '820492840000015',
		latitude: -29.40878815,
		longitude: -59.722262592,
		municipalityId: 951
	},
	{
		id: 1443,
		name: 'LAS AMINTAS',
		uta2020: '820492840000091',
		uta2010: '820492840000091',
		latitude: -29.279267018,
		longitude: -59.751406397,
		municipalityId: 951
	},
	{
		id: 1444,
		name: 'LOS LAURELES',
		uta2020: '820492840140000',
		uta2010: '820492840140000',
		latitude: -29.370121103,
		longitude: -59.737867777,
		municipalityId: 951
	},
	{
		id: 1445,
		name: 'LA SOLEDAD',
		uta2020: '100910210000037',
		uta2010: '100910210000037',
		latitude: -26.708156586,
		longitude: -66.057388306,
		municipalityId: 1897
	},
	{
		id: 1446,
		name: 'LAMPACITO',
		uta2020: '100910210030002',
		uta2010: '100910210030002',
		latitude: -26.726598197,
		longitude: -66.043697913,
		municipalityId: 1897
	},
	{
		id: 1447,
		name: 'EL RECREO',
		uta2020: '100910210000020',
		uta2010: '100910210000020',
		latitude: -26.720064163,
		longitude: -66.053138733,
		municipalityId: 1897
	},
	{
		id: 1448,
		name: 'FUERTE QUEMADO',
		uta2020: '100910210080000',
		uta2010: '100910210080000',
		latitude: -26.630433641,
		longitude: -66.064437373,
		municipalityId: 1897
	},
	{
		id: 1449,
		name: 'SANTA MARIA',
		uta2020: '100910210150000',
		uta2010: '100910210150000',
		latitude: -26.689116712,
		longitude: -66.018884441,
		municipalityId: 1897
	},
	{
		id: 1450,
		name: 'CASPICHANGO',
		uta2020: '100910210020000',
		uta2010: '100910210020000',
		latitude: -26.685929005,
		longitude: -65.970794987,
		municipalityId: 1897
	},
	{
		id: 1451,
		name: 'EL CAJON',
		uta2020: '100910210040000',
		uta2010: '100910210040000',
		latitude: -26.395547691,
		longitude: -66.264193016,
		municipalityId: 1897
	},
	{
		id: 1452,
		name: 'LA OVEJERIA',
		uta2020: '100910210000035',
		uta2010: '100910210000035',
		latitude: -26.235347161,
		longitude: -66.201381324,
		municipalityId: 1897
	},
	{
		id: 1453,
		name: 'EL PUESTO',
		uta2020: '100910210060000',
		uta2010: '100910210060000',
		latitude: -26.630767948,
		longitude: -66.014041897,
		municipalityId: 1897
	},
	{
		id: 1454,
		name: 'LAS MOJARRAS',
		uta2020: '100910210110002',
		uta2010: '100910210110002',
		latitude: -26.698860498,
		longitude: -66.038733441,
		municipalityId: 1897
	},
	{
		id: 1455,
		name: 'EL CERRITO',
		uta2020: '100910210110001',
		uta2010: '100910210110001',
		latitude: -26.698860498,
		longitude: -66.038733441,
		municipalityId: 1897
	},
	{
		id: 1456,
		name: 'LORO HUASI',
		uta2020: '100910210120000',
		uta2010: '100910210120000',
		latitude: -26.736138373,
		longitude: -66.021784581,
		municipalityId: 1897
	},
	{
		id: 1457,
		name: 'RECREO',
		uta2020: '100910210000047',
		uta2010: '100910210000047',
		latitude: -26.72164444,
		longitude: -66.05743549,
		municipalityId: 1897
	},
	{
		id: 1458,
		name: 'OVEJERIA',
		uta2020: '100910210000042',
		uta2010: '100910210000042',
		latitude: -26.241483688,
		longitude: -66.201652527,
		municipalityId: 1897
	},
	{
		id: 1459,
		name: 'NEUQUEN',
		uta2020: '580350056070000',
		uta2010: '580350056070000',
		latitude: -38.94928568,
		longitude: -68.083905762,
		municipalityId: 2346
	},
	{
		id: 1460,
		name: 'COLONIA VALENTINA',
		uta2020: '580350056000016',
		uta2010: '580350056000016',
		latitude: -38.938947582,
		longitude: -68.159065578,
		municipalityId: 2346
	},
	{
		id: 1461,
		name: 'PANAMBI',
		uta2020: '541050490000017',
		uta2010: '541050490000017',
		latitude: -27.750768837,
		longitude: -55.070987829,
		municipalityId: 2124
	},
	{
		id: 1462,
		name: 'MOJON GRANDE',
		uta2020: '541050490030000',
		uta2010: '541050490030000',
		latitude: -27.707767829,
		longitude: -55.158202166,
		municipalityId: 2124
	},
	{
		id: 1463,
		name: 'MONTE MAIZ',
		uta2020: '141821680170000',
		uta2010: '141821680170000',
		latitude: -33.20456209,
		longitude: -62.601248151,
		municipalityId: 93
	},
	{
		id: 1464,
		name: 'LOS NOGALITOS',
		uta2020: '900638371000095',
		uta2010: '900638371000095',
		latitude: -26.783210754,
		longitude: -65.469711304,
		municipalityId: 2231
	},
	{
		id: 1465,
		name: 'EL NOGALITO',
		uta2020: '900638371000032',
		uta2010: '900638371000032',
		latitude: -26.7931657,
		longitude: -65.4684938,
		municipalityId: 2231
	},
	{
		id: 1466,
		name: 'PUNTA DEL MONTE',
		uta2020: '900638371000109',
		uta2010: '900638371000109',
		latitude: -26.894067205,
		longitude: -65.321784007,
		municipalityId: 2231
	},
	{
		id: 1467,
		name: 'POTRERO DE LAS TABLAS',
		uta2020: '900638371000105',
		uta2010: '900638371000105',
		latitude: -26.85455,
		longitude: -65.43219,
		municipalityId: 2231
	},
	{
		id: 1468,
		name: 'MUNDO NUEVO',
		uta2020: '900638371000104',
		uta2010: '900638371000104',
		latitude: -26.866693263,
		longitude: -65.349880813,
		municipalityId: 2231
	},
	{
		id: 1469,
		name: 'EL DURAZNILLO',
		uta2020: '900638371000031',
		uta2010: '900638371000031',
		latitude: -26.806142807,
		longitude: -65.466697693,
		municipalityId: 2231
	},
	{
		id: 1470,
		name: 'MALA MALA',
		uta2020: '900638371000099',
		uta2010: '900638371000099',
		latitude: -26.7990175,
		longitude: -65.5656894,
		municipalityId: 2231
	},
	{
		id: 1471,
		name: 'INGENIO SAN PABLO',
		uta2020: '900638371030000',
		uta2010: '900638371030000',
		latitude: -26.873996559,
		longitude: -65.310349989,
		municipalityId: 2231
	},
	{
		id: 1472,
		name: 'VILLA TACU',
		uta2020: '701330133010002',
		uta2010: '701330133010002',
		latitude: -31.529332145,
		longitude: -68.725341068,
		municipalityId: 2424
	},
	{
		id: 1473,
		name: 'VILLA BASILIO NIEVAS',
		uta2020: '701330133010001',
		uta2010: '701330133010001',
		latitude: -31.543878932,
		longitude: -68.740775882,
		municipalityId: 2424
	},
	{
		id: 1474,
		name: 'LOS PARAMILLOS',
		uta2020: '701330133000028',
		uta2010: '701330133000028',
		latitude: -31.774671555,
		longitude: -68.914604187,
		municipalityId: 2424
	},
	{
		id: 1475,
		name: 'ZONDA ARRIBA',
		uta2020: '701330133000034',
		uta2010: '701330133000034',
		latitude: -31.544731701,
		longitude: -68.752172012,
		municipalityId: 2424
	},
	{
		id: 1476,
		name: 'PACHACO',
		uta2020: '701330133000030',
		uta2010: '701330133000030',
		latitude: -31.29467392,
		longitude: -69.076782227,
		municipalityId: 2424
	},
	{
		id: 1477,
		name: 'MAURICIO MAYER',
		uta2020: '420350238030000',
		uta2010: '420350238030000',
		latitude: -36.210663164,
		longitude: -64.033541226,
		municipalityId: 1940
	},
	{
		id: 1478,
		name: 'COLONIA INES Y CARLOTA',
		uta2020: '420210238000002',
		uta2010: '420210238000002',
		latitude: -36.31182712,
		longitude: -63.943948,
		municipalityId: 1940
	},
	{
		id: 1479,
		name: 'EX INGENIO ESPERANZA',
		uta2020: '900148105060002',
		uta2010: '900148105060002',
		latitude: -26.844019209,
		longitude: -65.092475857,
		municipalityId: 2170
	},
	{
		id: 1480,
		name: 'INGENIO LA FLORIDA',
		uta2020: '900148105080001',
		uta2010: '900148105080001',
		latitude: -26.816717915,
		longitude: -65.080267102,
		municipalityId: 2170
	},
	{
		id: 1481,
		name: 'EL FORTIN',
		uta2020: '900148105000074',
		uta2010: '900148105000074',
		latitude: -26.822684986,
		longitude: -65.042069237,
		municipalityId: 2170
	},
	{
		id: 1482,
		name: 'LA FLORIDA',
		uta2020: '900148105080002',
		uta2010: '900148105080002',
		latitude: -26.819059254,
		longitude: -65.094321085,
		municipalityId: 2170
	},
	{
		id: 1483,
		name: 'EL TALAR',
		uta2020: '900148105000085',
		uta2010: '900148105000085',
		latitude: -26.8029631,
		longitude: -65.1085172,
		municipalityId: 2170
	},
	{
		id: 1484,
		name: 'EL PARAISO',
		uta2020: '900148105060001',
		uta2010: '900148105060001',
		latitude: -26.834647397,
		longitude: -65.095558866,
		municipalityId: 2170
	},
	{
		id: 1485,
		name: 'VILLA BURRUYACU',
		uta2020: '900070007100000',
		uta2010: '900070007100000',
		latitude: -26.50033232,
		longitude: -64.741993821,
		municipalityId: 2235
	},
	{
		id: 1486,
		name: 'GUATIMOZIN',
		uta2020: '140630546130000',
		uta2010: '140630546130000',
		latitude: -33.461741129,
		longitude: -62.43914345,
		municipalityId: 184
	},
	{
		id: 1487,
		name: 'ONAGOITY',
		uta2020: '140352231080000',
		uta2010: '140352231080000',
		latitude: -34.770302122,
		longitude: -63.670323072,
		municipalityId: 323
	},
	{
		id: 1488,
		name: 'QUIROS',
		uta2020: '100700168120000',
		uta2010: '100700168120000',
		latitude: -28.788305606,
		longitude: -65.100730234,
		municipalityId: 1899
	},
	{
		id: 1489,
		name: 'ANCASTILLO',
		uta2020: '100700168000005',
		uta2010: '100700168000005',
		latitude: -28.71805191,
		longitude: -65.296485901,
		municipalityId: 1899
	},
	{
		id: 1490,
		name: 'PALO PARADO',
		uta2020: '100700168000146',
		uta2010: '100700168000146',
		latitude: -28.69758046,
		longitude: -64.96933228,
		municipalityId: 1899
	},
	{
		id: 1491,
		name: 'ANJULI',
		uta2020: '100700168000007',
		uta2010: '100700168000007',
		latitude: -28.67426743,
		longitude: -65.27945557,
		municipalityId: 1899
	},
	{
		id: 1492,
		name: 'EL VALLECITO',
		uta2020: '100700168000065',
		uta2010: '100700168000065',
		latitude: -28.62224099,
		longitude: -65.25218254,
		municipalityId: 1899
	},
	{
		id: 1493,
		name: 'LA RENOVACION',
		uta2020: '100700168000103',
		uta2010: '100700168000103',
		latitude: -28.68693,
		longitude: -65.02329,
		municipalityId: 1899
	},
	{
		id: 1494,
		name: 'SAN ANTONIO',
		uta2020: '100700168150000',
		uta2010: '100700168150000',
		latitude: -28.933105316,
		longitude: -65.094965587,
		municipalityId: 1899
	},
	{
		id: 1495,
		name: 'LAS ESQUINAS',
		uta2020: '100700168100000',
		uta2010: '100700168100000',
		latitude: -28.764462806,
		longitude: -65.112021017,
		municipalityId: 1899
	},
	{
		id: 1496,
		name: 'CABALLA',
		uta2020: '100700168000014',
		uta2010: '100700168000014',
		latitude: -29.00061,
		longitude: -65.35047,
		municipalityId: 1899
	},
	{
		id: 1497,
		name: 'LA BARRANQUITA',
		uta2020: '100700168000082',
		uta2010: '100700168000082',
		latitude: -28.77488441,
		longitude: -64.96500043,
		municipalityId: 1899
	},
	{
		id: 1498,
		name: 'PUERTA DE CORDOBA',
		uta2020: '100700168000159',
		uta2010: '100700168000159',
		latitude: -28.876059121,
		longitude: -64.93633007,
		municipalityId: 1899
	},
	{
		id: 1499,
		name: 'POZANCONES',
		uta2020: '100700168000155',
		uta2010: '100700168000155',
		latitude: -28.86139,
		longitude: -64.83046,
		municipalityId: 1899
	},
	{
		id: 1500,
		name: 'LA CERRILLADA',
		uta2020: '100700168000087',
		uta2010: '100700168000087',
		latitude: -28.93696,
		longitude: -64.92055,
		municipalityId: 1899
	},
	{
		id: 1501,
		name: 'PAMPA POZO',
		uta2020: '100700168000149',
		uta2010: '100700168000149',
		latitude: -29.04527092,
		longitude: -65.14831543,
		municipalityId: 1899
	},
	{
		id: 1502,
		name: 'EL TALA',
		uta2020: '100700168000063',
		uta2010: '100700168000063',
		latitude: -28.841532477,
		longitude: -64.995986692,
		municipalityId: 1899
	},
	{
		id: 1503,
		name: 'BAVIANO',
		uta2020: '100700168000011',
		uta2010: '100700168000011',
		latitude: -28.78897607,
		longitude: -65.29965822,
		municipalityId: 1899
	},
	{
		id: 1504,
		name: 'LA ALBIGASTA',
		uta2020: '100700168000080',
		uta2010: '100700168000080',
		latitude: -28.64432,
		longitude: -65.17819,
		municipalityId: 1899
	},
	{
		id: 1505,
		name: 'RIO CHICO',
		uta2020: '100700168000164',
		uta2010: '100700168000164',
		latitude: -28.94401597,
		longitude: -65.351182425,
		municipalityId: 1899
	},
	{
		id: 1506,
		name: 'SANTA ROSA',
		uta2020: '100700168000188',
		uta2010: '100700168000188',
		latitude: -28.972539942,
		longitude: -65.044537598,
		municipalityId: 1899
	},
	{
		id: 1507,
		name: 'LAS IGUANAS',
		uta2020: '100700168000116',
		uta2010: '100700168000116',
		latitude: -28.65143432,
		longitude: -65.03051514,
		municipalityId: 1899
	},
	{
		id: 1508,
		name: 'ESTACION KILOMETRO 1017',
		uta2020: '100700168000068',
		uta2010: '100700168000068',
		latitude: -29.011490771,
		longitude: -65.101118892,
		municipalityId: 1899
	},
	{
		id: 1509,
		name: 'LAS PALMITAS',
		uta2020: '100700168110000',
		uta2010: '100700168110000',
		latitude: -28.640239695,
		longitude: -64.987071693,
		municipalityId: 1899
	},
	{
		id: 1510,
		name: 'LA PARADA',
		uta2020: '100700168000100',
		uta2010: '100700168000100',
		latitude: -28.92427415,
		longitude: -65.29737709,
		municipalityId: 1899
	},
	{
		id: 1511,
		name: 'ICAÑO',
		uta2020: '100700168070000',
		uta2010: '100700168070000',
		latitude: -28.930888612,
		longitude: -65.290215808,
		municipalityId: 1899
	},
	{
		id: 1512,
		name: 'LAS TOSCAS',
		uta2020: '100700168000121',
		uta2010: '100700168000121',
		latitude: -28.907280698,
		longitude: -65.285556074,
		municipalityId: 1899
	},
	{
		id: 1513,
		name: 'LAS TEJAS',
		uta2020: '100700168000120',
		uta2010: '100700168000120',
		latitude: -28.77124,
		longitude: -64.82143,
		municipalityId: 1899
	},
	{
		id: 1514,
		name: 'VILLA SANTA EUGENIA',
		uta2020: '140980777310000',
		uta2010: '140980777310000',
		latitude: -32.665106639,
		longitude: -64.74150181,
		municipalityId: 436
	},
	{
		id: 1515,
		name: 'ALPA CORRAL',
		uta2020: '140980777040000',
		uta2010: '140980777040000',
		latitude: -32.690403667,
		longitude: -64.721171055,
		municipalityId: 436
	},
	{
		id: 1516,
		name: 'OBRAJE SAN JUAN',
		uta2020: '820492875000106',
		uta2010: '820492875000106',
		latitude: -28.2253457,
		longitude: -59.5851593,
		municipalityId: 952
	},
	{
		id: 1517,
		name: 'VILLA GUILLERMINA',
		uta2020: '820492875220000',
		uta2010: '820492875220000',
		latitude: -28.245075433,
		longitude: -59.454759831,
		municipalityId: 952
	},
	{
		id: 1518,
		name: 'RAMAL SAN JUAN',
		uta2020: '820492875000111',
		uta2010: '820492875000111',
		latitude: -28.235396596,
		longitude: -59.703221671,
		municipalityId: 952
	},
	{
		id: 1519,
		name: 'NOGHE',
		uta2020: '820492875000104',
		uta2010: '820492875000104',
		latitude: -28.065277601,
		longitude: -59.705837396,
		municipalityId: 952
	},
	{
		id: 1520,
		name: 'RIOCITO',
		uta2020: '740216042070000',
		uta2010: '740216042070000',
		latitude: -33.096430444,
		longitude: -65.990838383,
		municipalityId: 1100
	},
	{
		id: 1521,
		name: 'BALDE DE LA ISLA',
		uta2020: '740216042000007',
		uta2010: '740216042000007',
		latitude: -33.120748488,
		longitude: -65.966843949,
		municipalityId: 1100
	},
	{
		id: 1522,
		name: 'PASO DEL REY',
		uta2020: '740216042000109',
		uta2010: '740216042000109',
		latitude: -32.944943421,
		longitude: -66.004031367,
		municipalityId: 1100
	},
	{
		id: 1523,
		name: 'PAMPA DEL TAMBOREO',
		uta2020: '740216042000104',
		uta2010: '740216042000104',
		latitude: -33.060181026,
		longitude: -65.984939664,
		municipalityId: 1100
	},
	{
		id: 1524,
		name: 'RIO GRANDE',
		uta2020: '740216042080000',
		uta2010: '740216042080000',
		latitude: -33.048504602,
		longitude: -66.071754309,
		municipalityId: 1100
	},
	{
		id: 1525,
		name: 'LAS PIRCAS',
		uta2020: '740216042000079',
		uta2010: '740216042000079',
		latitude: -33.07680507,
		longitude: -66.109908607,
		municipalityId: 1100
	},
	{
		id: 1526,
		name: 'EL TRAPICHE',
		uta2020: '740216042020000',
		uta2010: '740216042020000',
		latitude: -33.108271528,
		longitude: -66.063371212,
		municipalityId: 1100
	},
	{
		id: 1527,
		name: 'LAGO ROSARIO',
		uta2020: '260350084040000',
		uta2010: '260350084040000',
		latitude: -43.250016852,
		longitude: -71.351231844,
		municipalityId: 550
	},
	{
		id: 1528,
		name: 'TREVELIN',
		uta2020: '260350084060000',
		uta2010: '260350084060000',
		latitude: -43.090871191,
		longitude: -71.46548537,
		municipalityId: 550
	},
	{
		id: 1529,
		name: 'LOS CIPRESES',
		uta2020: '260350084050000',
		uta2010: '260350084050000',
		latitude: -43.184714621,
		longitude: -71.64139193,
		municipalityId: 550
	},
	{
		id: 1530,
		name: 'ALDEA ESCOLAR',
		uta2020: '260350084010000',
		uta2010: '260350084010000',
		latitude: -43.119818761,
		longitude: -71.558896746,
		municipalityId: 550
	},
	{
		id: 1531,
		name: 'COLONIA 16 DE OCTUBRE',
		uta2020: '260350084000008',
		uta2010: '260350084000008',
		latitude: -43.19092538,
		longitude: -71.34659644,
		municipalityId: 550
	},
	{
		id: 1532,
		name: 'DIQUE PACHIMOCO',
		uta2020: '700560056000037',
		uta2010: '700560056000037',
		latitude: -30.197818,
		longitude: -68.82920967,
		municipalityId: 2425
	},
	{
		id: 1533,
		name: 'LA FRONTERA',
		uta2020: '700560056000074',
		uta2010: '700560056000074',
		latitude: -30.10100685,
		longitude: -68.71806899,
		municipalityId: 2425
	},
	{
		id: 1534,
		name: 'NIQUIVIL',
		uta2020: '700560056050000',
		uta2010: '700560056050000',
		latitude: -30.400675007,
		longitude: -68.691063097,
		municipalityId: 2425
	},
	{
		id: 1535,
		name: 'HUACO',
		uta2020: '700560056030000',
		uta2010: '700560056030000',
		latitude: -30.157066719,
		longitude: -68.480936579,
		municipalityId: 2425
	},
	{
		id: 1536,
		name: 'GUALCAMAYO',
		uta2020: '700560056000063',
		uta2010: '700560056000063',
		latitude: -29.75339198,
		longitude: -68.75794438,
		municipalityId: 2425
	},
	{
		id: 1537,
		name: 'OTRA BANDA',
		uta2020: '700560056000109',
		uta2010: '700560056000109',
		latitude: -30.229423523,
		longitude: -68.685577393,
		municipalityId: 2425
	},
	{
		id: 1538,
		name: 'LA FALDA',
		uta2020: '700560056060002',
		uta2010: '700560056060002',
		latitude: -30.162872967,
		longitude: -68.665263316,
		municipalityId: 2425
	},
	{
		id: 1539,
		name: 'CRUZ DE PIEDRA',
		uta2020: '700560056000035',
		uta2010: '700560056000035',
		latitude: -30.292581558,
		longitude: -68.699172974,
		municipalityId: 2425
	},
	{
		id: 1540,
		name: 'LA CIENAGA',
		uta2020: '700560056000068',
		uta2010: '700560056000068',
		latitude: -30.15111538,
		longitude: -68.57321763,
		municipalityId: 2425
	},
	{
		id: 1541,
		name: 'EL FISCAL',
		uta2020: '700560056060001',
		uta2010: '700560056060001',
		latitude: -30.220275058,
		longitude: -68.69099676,
		municipalityId: 2425
	},
	{
		id: 1542,
		name: 'NIQUIVIL VIEJO',
		uta2020: '700560056000107',
		uta2010: '700560056000107',
		latitude: -30.416566849,
		longitude: -68.646759033,
		municipalityId: 2425
	},
	{
		id: 1543,
		name: 'INDIO MUERTO',
		uta2020: '700560056000065',
		uta2010: '700560056000065',
		latitude: -29.924283981,
		longitude: -68.664772034,
		municipalityId: 2425
	},
	{
		id: 1544,
		name: 'SAN ISIDRO',
		uta2020: '700560056070000',
		uta2010: '700560056070000',
		latitude: -30.148892347,
		longitude: -68.704494553,
		municipalityId: 2425
	},
	{
		id: 1545,
		name: 'PANACAN',
		uta2020: '700560056000112',
		uta2010: '700560056000112',
		latitude: -29.92990303,
		longitude: -68.719306946,
		municipalityId: 2425
	},
	{
		id: 1546,
		name: 'BELLA VISTA',
		uta2020: '700560056000014',
		uta2010: '700560056000014',
		latitude: -30.20949542,
		longitude: -68.74673275,
		municipalityId: 2425
	},
	{
		id: 1547,
		name: 'LA TOMA',
		uta2020: '700560056000077',
		uta2010: '700560056000077',
		latitude: -30.685493469,
		longitude: -68.376037598,
		municipalityId: 2425
	},
	{
		id: 1548,
		name: 'EL MEDANO',
		uta2020: '700560056010000',
		uta2010: '700560056010000',
		latitude: -30.12938321,
		longitude: -68.679173304,
		municipalityId: 2425
	},
	{
		id: 1549,
		name: 'EL VOLCAN',
		uta2020: '700560056000054',
		uta2010: '700560056000054',
		latitude: -30.32570134,
		longitude: -68.69716841,
		municipalityId: 2425
	},
	{
		id: 1550,
		name: 'TAMBERIAS',
		uta2020: '700560056090000',
		uta2010: '700560056090000',
		latitude: -30.182286449,
		longitude: -68.727785784,
		municipalityId: 2425
	},
	{
		id: 1551,
		name: 'MOGNA',
		uta2020: '700560056040000',
		uta2010: '700560056040000',
		latitude: -30.684510066,
		longitude: -68.377554357,
		municipalityId: 2425
	},
	{
		id: 1552,
		name: 'VILLA MERCEDES',
		uta2020: '700560056110000',
		uta2010: '700560056110000',
		latitude: -30.10887219,
		longitude: -68.700942919,
		municipalityId: 2425
	},
	{
		id: 1553,
		name: 'PAMPA VIEJA',
		uta2020: '700560056060003',
		uta2010: '700560056060003',
		latitude: -30.220275058,
		longitude: -68.69099676,
		municipalityId: 2425
	},
	{
		id: 1554,
		name: 'SAN JOSE DE JACHAL',
		uta2020: '700560056080000',
		uta2010: '700560056080000',
		latitude: -30.242767285,
		longitude: -68.745493456,
		municipalityId: 2425
	},
	{
		id: 1555,
		name: 'LOS PUESTOS',
		uta2020: '700560056000089',
		uta2010: '700560056000089',
		latitude: -30.682201095,
		longitude: -68.318005949,
		municipalityId: 2425
	},
	{
		id: 1556,
		name: 'LAS AGUADITAS',
		uta2020: '700560056000081',
		uta2010: '700560056000081',
		latitude: -30.429386074,
		longitude: -68.681937327,
		municipalityId: 2425
	},
	{
		id: 1557,
		name: 'BOCA DE LA QUEBRADA',
		uta2020: '700560056000015',
		uta2010: '700560056000015',
		latitude: -30.1497731,
		longitude: -68.66115327,
		municipalityId: 2425
	},
	{
		id: 1558,
		name: 'VILLA MALVINAS ARGENTINAS',
		uta2020: '700560056100000',
		uta2010: '700560056100000',
		latitude: -30.21424136,
		longitude: -68.716555833,
		municipalityId: 2425
	},
	{
		id: 1559,
		name: 'GRAN CHINA',
		uta2020: '700560056020000',
		uta2010: '700560056020000',
		latitude: -30.122527325,
		longitude: -68.716199914,
		municipalityId: 2425
	},
	{
		id: 1560,
		name: 'MONTE BELLO',
		uta2020: '900778476000070',
		uta2010: '900778476000070',
		latitude: -27.4738951,
		longitude: -65.6832192,
		municipalityId: 2246
	},
	{
		id: 1561,
		name: 'LAS ANIMAS',
		uta2020: '900778476000051',
		uta2010: '900778476000051',
		latitude: -27.365036011,
		longitude: -65.785606384,
		municipalityId: 2246
	},
	{
		id: 1562,
		name: 'JUAN G. BAZAN',
		uta2020: '340359077090000',
		uta2010: '340359077090000',
		latitude: -24.541813713,
		longitude: -60.8341897,
		municipalityId: 2290
	},
	{
		id: 1563,
		name: 'EL SALITRAL',
		uta2020: '820773288000034',
		uta2010: '820773288000034',
		latitude: -28.490138058,
		longitude: -61.160907125,
		municipalityId: 1050
	},
	{
		id: 1564,
		name: 'GATO COLORADO',
		uta2020: '820773288020000',
		uta2010: '820773288020000',
		latitude: -28.02457851,
		longitude: -61.18793733,
		municipalityId: 1050
	},
	{
		id: 1565,
		name: 'CAMPO EL DORMIDO',
		uta2020: '820773288000006',
		uta2010: '820773288000006',
		latitude: -28.041722556,
		longitude: -61.07175897,
		municipalityId: 1050
	},
	{
		id: 1566,
		name: 'FORTIN 6',
		uta2020: '820773288000048',
		uta2010: '820773288000048',
		latitude: -28.34939047,
		longitude: -61.20711279,
		municipalityId: 1050
	},
	{
		id: 1567,
		name: 'SAN JOSE',
		uta2020: '180910196000049',
		uta2010: '180910196000049',
		latitude: -28.930866557,
		longitude: -58.971335779,
		municipalityId: 2019
	},
	{
		id: 1568,
		name: 'SALINAS GRANDE',
		uta2020: '180910196000045',
		uta2010: '180910196000045',
		latitude: -28.8455781,
		longitude: -58.9703282,
		municipalityId: 2019
	},
	{
		id: 1569,
		name: 'CAMPO VALLEJOS',
		uta2020: '180910196000006',
		uta2010: '180910196000006',
		latitude: -28.9356733,
		longitude: -58.8052348,
		municipalityId: 2019
	},
	{
		id: 1570,
		name: 'LAGUNA SIRENA',
		uta2020: '180910196000029',
		uta2010: '180910196000029',
		latitude: -29.004684405,
		longitude: -58.890305637,
		municipalityId: 2019
	},
	{
		id: 1571,
		name: 'GOBERNADOR JUAN E. MARTINEZ',
		uta2020: '180910196020000',
		uta2010: '180910196020000',
		latitude: -28.910868874,
		longitude: -58.935957755,
		municipalityId: 2019
	},
	{
		id: 1572,
		name: 'COLONIA GOBERNADOR GALLINO',
		uta2020: '180910196000011',
		uta2010: '180910196000011',
		latitude: -28.906804853,
		longitude: -58.89339772,
		municipalityId: 2019
	},
	{
		id: 1573,
		name: 'CASUALIDAD',
		uta2020: '180910196000007',
		uta2010: '180910196000007',
		latitude: -28.940262344,
		longitude: -58.867791224,
		municipalityId: 2019
	},
	{
		id: 1574,
		name: 'PALERMO',
		uta2020: '180910196000034',
		uta2010: '180910196000034',
		latitude: -28.952295539,
		longitude: -58.906746586,
		municipalityId: 2019
	},
	{
		id: 1575,
		name: 'MONTE FLORIDO',
		uta2020: '180910196000032',
		uta2010: '180910196000032',
		latitude: -28.944637338,
		longitude: -59.026922701,
		municipalityId: 2019
	},
	{
		id: 1576,
		name: 'EL BONETE',
		uta2020: '180910196000017',
		uta2010: '180910196000017',
		latitude: -28.891799019,
		longitude: -58.996755837,
		municipalityId: 2019
	},
	{
		id: 1577,
		name: 'LAS JUNTURAS',
		uta2020: '141191022100000',
		uta2010: '141191022100000',
		latitude: -31.8313973,
		longitude: -63.450636455,
		municipalityId: 302
	},
	{
		id: 1578,
		name: 'CHASQUIVIL',
		uta2020: '901058595000014',
		uta2010: '901058595000014',
		latitude: -26.62702,
		longitude: -65.60313,
		municipalityId: 2251
	},
	{
		id: 1579,
		name: 'SAN JOSE DE CHASQUIVIL',
		uta2020: '901058595000092',
		uta2010: '901058595000092',
		latitude: -26.68929,
		longitude: -65.60443,
		municipalityId: 2251
	},
	{
		id: 1580,
		name: 'ANCAJULI',
		uta2020: '901058595000004',
		uta2010: '901058595000004',
		latitude: -26.56402,
		longitude: -65.55717,
		municipalityId: 2251
	},
	{
		id: 1581,
		name: 'CHICOANA',
		uta2020: '660420091010000',
		uta2010: '660420091010000',
		latitude: -25.105602371,
		longitude: -65.536890354,
		municipalityId: 1852
	},
	{
		id: 1582,
		name: 'SANTA ANA',
		uta2020: '660420091000115',
		uta2010: '660420091000115',
		latitude: -25.163665333,
		longitude: -65.461098473,
		municipalityId: 1852
	},
	{
		id: 1583,
		name: 'BARRIO SANTA TERESITA',
		uta2020: '660420091007000',
		uta2010: '660420091007000',
		latitude: -25.037026026,
		longitude: -65.572645957,
		municipalityId: 1852
	},
	{
		id: 1584,
		name: 'EL CANDADO',
		uta2020: '660420091000030',
		uta2010: '660420091000030',
		latitude: -25.193365097,
		longitude: -65.829833984,
		municipalityId: 1852
	},
	{
		id: 1585,
		name: 'CHIVILME',
		uta2020: '660420091000016',
		uta2010: '660420091000016',
		latitude: -25.14762,
		longitude: -65.50126,
		municipalityId: 1852
	},
	{
		id: 1586,
		name: 'BELLA VISTA',
		uta2020: '660420091000008',
		uta2010: '660420091000008',
		latitude: -25.05593816,
		longitude: -65.57263996,
		municipalityId: 1852
	},
	{
		id: 1587,
		name: 'LAS ANIMAS',
		uta2020: '660420091000075',
		uta2010: '660420091000075',
		latitude: -25.164699554,
		longitude: -65.623252869,
		municipalityId: 1852
	},
	{
		id: 1588,
		name: 'ESCOIPE',
		uta2020: '660420091000050',
		uta2010: '660420091000050',
		latitude: -25.177745819,
		longitude: -65.810668945,
		municipalityId: 1852
	},
	{
		id: 1589,
		name: 'BARRIO LA ROTONDA',
		uta2020: '660420091005000',
		uta2010: '660420091005000',
		latitude: -25.082565344,
		longitude: -65.536994415,
		municipalityId: 1852
	},
	{
		id: 1590,
		name: 'MOLINO DE GONGORA',
		uta2020: '660420091000089',
		uta2010: '660420091000089',
		latitude: -25.115499497,
		longitude: -65.606575012,
		municipalityId: 1852
	},
	{
		id: 1591,
		name: 'EL RODEO',
		uta2020: '660420091000044',
		uta2010: '660420091000044',
		latitude: -25.154556274,
		longitude: -65.760536194,
		municipalityId: 1852
	},
	{
		id: 1592,
		name: 'EL TIPAL',
		uta2020: '660420091000048',
		uta2010: '660420091000048',
		latitude: -25.082595456,
		longitude: -65.535102968,
		municipalityId: 1852
	},
	{
		id: 1593,
		name: 'VILLA FANNY',
		uta2020: '660420091000129',
		uta2010: '660420091000129',
		latitude: -25.1234388,
		longitude: -65.53105147,
		municipalityId: 1852
	},
	{
		id: 1594,
		name: 'QUEBRADA DE ESCOIPE',
		uta2020: '660420091000098',
		uta2010: '660420091000098',
		latitude: -25.18402,
		longitude: -65.74068,
		municipalityId: 1852
	},
	{
		id: 1595,
		name: 'SAN MARTIN',
		uta2020: '660420091000109',
		uta2010: '660420091000109',
		latitude: -25.18624,
		longitude: -65.81178,
		municipalityId: 1852
	},
	{
		id: 1596,
		name: 'PULARES',
		uta2020: '660420091000096',
		uta2010: '660420091000096',
		latitude: -25.09262,
		longitude: -65.56609,
		municipalityId: 1852
	},
	{
		id: 1597,
		name: 'EL SIMBOLAR',
		uta2020: '660420091000046',
		uta2010: '660420091000046',
		latitude: -25.14613649,
		longitude: -65.46983047,
		municipalityId: 1852
	},
	{
		id: 1598,
		name: 'LA ZANJA',
		uta2020: '660420091000073',
		uta2010: '660420091000073',
		latitude: -25.10017336,
		longitude: -65.766563891,
		municipalityId: 1852
	},
	{
		id: 1599,
		name: 'POTRERO DIAZ',
		uta2020: '660420091000073',
		uta2010: '660420091000073',
		latitude: -25.231365767,
		longitude: -65.660269256,
		municipalityId: 1852
	},
	{
		id: 1600,
		name: 'LAS MORAS',
		uta2020: '660420091000081',
		uta2010: '660420091000081',
		latitude: -25.1165,
		longitude: -65.48954,
		municipalityId: 1852
	},
	{
		id: 1601,
		name: 'EL NOGALAR',
		uta2020: '660420091000037',
		uta2010: '660420091000037',
		latitude: -25.16513902,
		longitude: -65.62895604,
		municipalityId: 1852
	},
	{
		id: 1602,
		name: 'EL MOLLAR',
		uta2020: '660420091000034',
		uta2010: '660420091000034',
		latitude: -25.03864,
		longitude: -65.57035,
		municipalityId: 1852
	},
	{
		id: 1603,
		name: 'LA MAROMA',
		uta2020: '660420091003000',
		uta2010: '660420091003000',
		latitude: -25.151234705,
		longitude: -65.442610686,
		municipalityId: 1852
	},
	{
		id: 1604,
		name: 'SUNCHAL',
		uta2020: '660420091000122',
		uta2010: '660420091000122',
		latitude: -25.115034103,
		longitude: -65.735939026,
		municipalityId: 1852
	},
	{
		id: 1605,
		name: 'AGUA NEGRA',
		uta2020: '660420091000004',
		uta2010: '660420091000004',
		latitude: -25.15339187,
		longitude: -65.69363231,
		municipalityId: 1852
	},
	{
		id: 1606,
		name: 'CAMPO CHIODI',
		uta2020: '820070014000003',
		uta2010: '820070014000003',
		latitude: -32.71768772,
		longitude: -61.586297625,
		municipalityId: 1045
	},
	{
		id: 1607,
		name: 'ESTACION KILOMETRO 405',
		uta2020: '820070014000016',
		uta2010: '820070014000016',
		latitude: -32.682740353,
		longitude: -61.570037592,
		municipalityId: 1045
	},
	{
		id: 1608,
		name: 'COLONIA LOS TRONCOS',
		uta2020: '820070014000013',
		uta2010: '820070014000013',
		latitude: -32.6596397,
		longitude: -61.61969,
		municipalityId: 1045
	},
	{
		id: 1609,
		name: 'LAS PAREJAS',
		uta2020: '820070014030000',
		uta2010: '820070014030000',
		latitude: -32.682684255,
		longitude: -61.518579835,
		municipalityId: 1045
	},
	{
		id: 1610,
		name: 'CAMPO ALBERTENGO',
		uta2020: '820070014000001',
		uta2010: '820070014000001',
		latitude: -32.7494032,
		longitude: -61.5381149,
		municipalityId: 1045
	},
	{
		id: 1611,
		name: 'EPUYEN',
		uta2020: '260140035060000',
		uta2010: '260140035060000',
		latitude: -42.232924712,
		longitude: -71.369506658,
		municipalityId: 543
	},
	{
		id: 1612,
		name: 'EL COIHUE',
		uta2020: '260140035000013',
		uta2010: '260140035000013',
		latitude: -42.17219917,
		longitude: -71.32219169,
		municipalityId: 543
	},
	{
		id: 1613,
		name: 'LAGO EPUYEN',
		uta2020: '260140035080000',
		uta2010: '260140035080000',
		latitude: -42.213535683,
		longitude: -71.429662543,
		municipalityId: 543
	},
	{
		id: 1614,
		name: 'PAICONE',
		uta2020: '380776140080000',
		uta2010: '380776140080000',
		latitude: -22.195691522,
		longitude: -66.420168475,
		municipalityId: 1192
	},
	{
		id: 1615,
		name: 'CIENEGA',
		uta2020: '380776140020000',
		uta2010: '380776140020000',
		latitude: -22.18644457,
		longitude: -66.409389831,
		municipalityId: 1192
	},
	{
		id: 1616,
		name: 'SAN JUAN DE ORO',
		uta2020: '380776140000046',
		uta2010: '380776140000046',
		latitude: -22.22501,
		longitude: -66.24875,
		municipalityId: 1192
	},
	{
		id: 1617,
		name: 'LAGUNILLAS DE FARALLON',
		uta2020: '380496140010000',
		uta2010: '380496140010000',
		latitude: -22.407562343,
		longitude: -66.655405101,
		municipalityId: 1192
	},
	{
		id: 1618,
		name: 'MISARRUMI',
		uta2020: '380776140060000',
		uta2010: '380776140060000',
		latitude: -22.214344337,
		longitude: -66.336561617,
		municipalityId: 1192
	},
	{
		id: 1619,
		name: 'SAN JUAN DE OROS',
		uta2020: '380776140090000',
		uta2010: '380776140090000',
		latitude: -22.192824829,
		longitude: -66.349215985,
		municipalityId: 1192
	},
	{
		id: 1620,
		name: 'SAN JUAN Y MISA RUMI',
		uta2020: '380776140000032',
		uta2010: '380776140000032',
		latitude: -22.25962,
		longitude: -66.36779,
		municipalityId: 1192
	},
	{
		id: 1621,
		name: 'CUSI CUSI',
		uta2020: '380776140040000',
		uta2010: '380776140040000',
		latitude: -22.340214736,
		longitude: -66.494020551,
		municipalityId: 1192
	},
	{
		id: 1622,
		name: 'OJO DE AGUA',
		uta2020: '380776140000028',
		uta2010: '380776140000028',
		latitude: -22.162714004,
		longitude: -66.237594605,
		municipalityId: 1192
	},
	{
		id: 1623,
		name: 'EL BRETE',
		uta2020: '140282154060000',
		uta2010: '140282154060000',
		latitude: -30.672210058,
		longitude: -64.869907029,
		municipalityId: 466
	},
	{
		id: 1624,
		name: 'EL SIMBOLAR',
		uta2020: '140282154000042',
		uta2010: '140282154000042',
		latitude: -30.638182993,
		longitude: -64.893646409,
		municipalityId: 466
	},
	{
		id: 1625,
		name: 'EL TROPIEZO',
		uta2020: '140282154000043',
		uta2010: '140282154000043',
		latitude: -30.650665254,
		longitude: -64.856700534,
		municipalityId: 466
	},
	{
		id: 1626,
		name: 'LA ESTELA',
		uta2020: '220980308000017',
		uta2010: '220980308000017',
		latitude: -27.889902115,
		longitude: -60.733386993,
		municipalityId: 10
	},
	{
		id: 1627,
		name: 'CORONEL DU GRATY',
		uta2020: '220980308010000',
		uta2010: '220980308010000',
		latitude: -27.682571156,
		longitude: -60.909195631,
		municipalityId: 10
	},
	{
		id: 1628,
		name: 'EL CABURE',
		uta2020: '220980308000008',
		uta2010: '220980308000008',
		latitude: -27.480689497,
		longitude: -60.996783178,
		municipalityId: 10
	},
	{
		id: 1629,
		name: 'LOS FORTINES',
		uta2020: '220980308000030',
		uta2010: '220980308000030',
		latitude: -27.769077443,
		longitude: -60.768722372,
		municipalityId: 10
	},
	{
		id: 1630,
		name: 'COLONIA LA AVANZADA',
		uta2020: '220980308000004',
		uta2010: '220980308000004',
		latitude: -27.786237389,
		longitude: -60.891130855,
		municipalityId: 10
	},
	{
		id: 1631,
		name: 'CAMPO UGARTE',
		uta2020: '220980308000002',
		uta2010: '220980308000002',
		latitude: -27.689552867,
		longitude: -60.834887832,
		municipalityId: 10
	},
	{
		id: 1632,
		name: 'EL PALMAR',
		uta2020: '220980308000010',
		uta2010: '220980308000010',
		latitude: -27.923891958,
		longitude: -60.847039436,
		municipalityId: 10
	},
	{
		id: 1633,
		name: 'LAS GOLONDRINAS NORTE',
		uta2020: '220980308000026',
		uta2010: '220980308000026',
		latitude: -27.558747624,
		longitude: -60.958563511,
		municipalityId: 10
	},
	{
		id: 1634,
		name: 'COLONIA LA COLORADA',
		uta2020: '220980308000006',
		uta2010: '220980308000006',
		latitude: -27.625687908,
		longitude: -60.885316665,
		municipalityId: 10
	},
	{
		id: 1635,
		name: 'GOLONDRINAS SUR',
		uta2020: '220980308000015',
		uta2010: '220980308000015',
		latitude: -27.616073293,
		longitude: -61.001329278,
		municipalityId: 10
	},
	{
		id: 1636,
		name: 'ESTANISLAO DEL CAMPO',
		uta2020: '340350098050000',
		uta2010: '340350098050000',
		latitude: -25.053192265,
		longitude: -60.093927183,
		municipalityId: 2291
	},
	{
		id: 1637,
		name: 'ESTACION BOUCHARD',
		uta2020: '340350098000196',
		uta2010: '340350098000196',
		latitude: -25.0505745,
		longitude: -60.090963735,
		municipalityId: 2291
	},
	{
		id: 1638,
		name: 'INGENIERO FORRES',
		uta2020: '861610189040000',
		uta2010: '861610189040000',
		latitude: -27.898804531,
		longitude: -63.915324063,
		municipalityId: 1389
	},
	{
		id: 1639,
		name: 'PIQUILLIN',
		uta2020: '141050931210000',
		uta2010: '141050931210000',
		latitude: -31.299584445,
		longitude: -63.759105072,
		municipalityId: 249
	},
	{
		id: 1640,
		name: 'CAMINIAGA',
		uta2020: '141543120010000',
		uta2010: '141543120010000',
		latitude: -30.068225078,
		longitude: -64.052875898,
		municipalityId: 484
	},
	{
		id: 1641,
		name: 'LA CENTRAL',
		uta2020: '061610161000010',
		uta2010: '061610161000010',
		latitude: -34.268046,
		longitude: -59.9192997,
		municipalityId: 598
	},
	{
		id: 1642,
		name: 'CUARTEL VII',
		uta2020: '061610161000004',
		uta2010: '061610161000004',
		latitude: -34.3250111,
		longitude: -59.7470206,
		municipalityId: 598
	},
	{
		id: 1643,
		name: 'KENNY',
		uta2020: '061610161000009',
		uta2010: '061610161000009',
		latitude: -34.3605423,
		longitude: -60.0031342,
		municipalityId: 598
	},
	{
		id: 1644,
		name: 'LA CRIOLLA',
		uta2020: '061610161000011',
		uta2010: '061610161000011',
		latitude: -34.3734875,
		longitude: -59.8916892,
		municipalityId: 598
	},
	{
		id: 1645,
		name: 'ESCOBEDO',
		uta2020: '061610161000005',
		uta2010: '061610161000005',
		latitude: -34.3315903,
		longitude: -59.8419225,
		municipalityId: 598
	},
	{
		id: 1646,
		name: 'TATAY',
		uta2020: '061610161000016',
		uta2010: '061610161000016',
		latitude: -34.3292908,
		longitude: -59.9101174,
		municipalityId: 598
	},
	{
		id: 1647,
		name: 'CUARTEL VI',
		uta2020: '061610161000003',
		uta2010: '061610161000003',
		latitude: -34.302276767,
		longitude: -59.695100172,
		municipalityId: 598
	},
	{
		id: 1648,
		name: 'TRES SARGENTOS',
		uta2020: '061610161030000',
		uta2010: '061610161030000',
		latitude: -34.46647783,
		longitude: -60.000869742,
		municipalityId: 598
	},
	{
		id: 1649,
		name: 'PUEBLO GOUIN',
		uta2020: '061610161020000',
		uta2010: '061610161020000',
		latitude: -34.495119142,
		longitude: -59.802973738,
		municipalityId: 598
	},
	{
		id: 1650,
		name: 'CARMEN DE ARECO',
		uta2020: '061610161010000',
		uta2010: '061610161010000',
		latitude: -34.377698725,
		longitude: -59.82290198,
		municipalityId: 598
	},
	{
		id: 1651,
		name: 'EX-SANTAMARINA',
		uta2020: '061610161000007',
		uta2010: '061610161000007',
		latitude: -34.2743155,
		longitude: -59.8021634,
		municipalityId: 598
	},
	{
		id: 1652,
		name: 'CUARTEL I',
		uta2020: '061610161000002',
		uta2010: '061610161000002',
		latitude: -34.4145467,
		longitude: -59.8540512,
		municipalityId: 598
	},
	{
		id: 1653,
		name: 'LAS PIEDRAS',
		uta2020: '300840336000071',
		uta2010: '300840336000071',
		latitude: -31.776236481,
		longitude: -60.543361135,
		municipalityId: 1719
	},
	{
		id: 1654,
		name: 'PARANA',
		uta2020: '300840336160000',
		uta2010: '300840336160000',
		latitude: -31.741567643,
		longitude: -60.528414592,
		municipalityId: 1719
	},
	{
		id: 1655,
		name: 'VILLA URANGA',
		uta2020: '300840336000101',
		uta2010: '300840336000101',
		latitude: -31.77016449,
		longitude: -60.478565216,
		municipalityId: 1719
	},
	{
		id: 1656,
		name: 'BAJADA GRANDE',
		uta2020: '300840336000016',
		uta2010: '300840336000016',
		latitude: -31.713911056,
		longitude: -60.572509766,
		municipalityId: 1719
	},
	{
		id: 1657,
		name: 'GENERAL CAMPOS',
		uta2020: '300880378010000',
		uta2010: '300880378010000',
		latitude: -31.524607834,
		longitude: -58.404773513,
		municipalityId: 1761
	},
	{
		id: 1658,
		name: 'CERRO CORA',
		uta2020: '540210070030000',
		uta2010: '540210070030000',
		latitude: -27.50860997,
		longitude: -55.603862144,
		municipalityId: 2128
	},
	{
		id: 1659,
		name: 'VILLA VENECIA',
		uta2020: '540210070000038',
		uta2010: '540210070000038',
		latitude: -27.569487789,
		longitude: -55.583941956,
		municipalityId: 2128
	},
	{
		id: 1660,
		name: 'LA INVERNADA',
		uta2020: '540210070000019',
		uta2010: '540210070000019',
		latitude: -27.468524687,
		longitude: -55.590794143,
		municipalityId: 2128
	},
	{
		id: 1661,
		name: 'LAS QUEMADAS',
		uta2020: '540210070000020',
		uta2010: '540210070000020',
		latitude: -27.545759201,
		longitude: -55.615505218,
		municipalityId: 2128
	},
	{
		id: 1662,
		name: 'BELLA VISTA',
		uta2020: '540210070000007',
		uta2010: '540210070000007',
		latitude: -27.517599106,
		longitude: -55.551216125,
		municipalityId: 2128
	},
	{
		id: 1663,
		name: 'EL CHENQUE',
		uta2020: '580980000000006',
		uta2010: '580980000000006',
		latitude: -39.183082581,
		longitude: -69.37890625,
		municipalityId: 2377
	},
	{
		id: 1664,
		name: 'PANTANITOS',
		uta2020: '580980000000011',
		uta2010: '580980000000011',
		latitude: -39.650730133,
		longitude: -69.353088379,
		municipalityId: 2377
	},
	{
		id: 1665,
		name: 'INGENIERO JACOBACCI',
		uta2020: '620910252050000',
		uta2010: '620910252050000',
		latitude: -41.326813424,
		longitude: -69.544126389,
		municipalityId: 1228
	},
	{
		id: 1666,
		name: 'CERRO COLORADO',
		uta2020: '140072021000015',
		uta2010: '140072021000015',
		latitude: -32.418596127,
		longitude: -64.687170815,
		municipalityId: 120
	},
	{
		id: 1667,
		name: 'CAÑADA DEL SAUCE',
		uta2020: '140072021030000',
		uta2010: '140072021030000',
		latitude: -32.36799916,
		longitude: -64.642522343,
		municipalityId: 120
	},
	{
		id: 1668,
		name: 'TALA CRUZ',
		uta2020: '140072021000064',
		uta2010: '140072021000064',
		latitude: -32.35507446,
		longitude: -64.700161888,
		municipalityId: 120
	},
	{
		id: 1669,
		name: 'RESERVA AREA PROTEGIDA EL DORADILLO',
		uta2020: '260070007050000',
		uta2010: '260070007050000',
		latitude: -42.645615896,
		longitude: -65.064722967,
		municipalityId: 554
	},
	{
		id: 1670,
		name: 'QUINTA EL MIRADOR',
		uta2020: '260070007040000',
		uta2010: '260070007040000',
		latitude: -42.811590013,
		longitude: -65.051417804,
		municipalityId: 554
	},
	{
		id: 1671,
		name: 'PUERTO MADRYN',
		uta2020: '260070007020000',
		uta2010: '260070007020000',
		latitude: -42.755099678,
		longitude: -65.042229818,
		municipalityId: 554
	},
	{
		id: 1672,
		name: 'PIEDRA DEL AGUILA',
		uta2020: '580280035010000',
		uta2010: '580280035010000',
		latitude: -40.046553864,
		longitude: -70.077319579,
		municipalityId: 2381
	},
	{
		id: 1673,
		name: 'CHABAS',
		uta2020: '820142056060000',
		uta2010: '820142056060000',
		latitude: -33.247067464,
		longitude: -61.357593556,
		municipalityId: 795
	},
	{
		id: 1674,
		name: 'LOS QUEBRACHALES',
		uta2020: '820773337000073',
		uta2010: '820773337000073',
		latitude: -28.290949211,
		longitude: -61.703482025,
		municipalityId: 1051
	},
	{
		id: 1675,
		name: 'CAMPO DEROTIER',
		uta2020: '820773337000004',
		uta2010: '820773337000004',
		latitude: -28.4694956,
		longitude: -61.3088606,
		municipalityId: 1051
	},
	{
		id: 1676,
		name: 'SANTA MARGARITA',
		uta2020: '820773337070000',
		uta2010: '820773337070000',
		latitude: -28.314954914,
		longitude: -61.550329937,
		municipalityId: 1051
	},
	{
		id: 1677,
		name: 'LOS CHARCOS',
		uta2020: '140282133000081',
		uta2010: '140282133000081',
		latitude: -30.51295505,
		longitude: -65.157031069,
		municipalityId: 467
	},
	{
		id: 1678,
		name: 'ALTO DE LOS QUEBRACHOS',
		uta2020: '140282133010000',
		uta2010: '140282133010000',
		latitude: -30.540965815,
		longitude: -65.038438772,
		municipalityId: 467
	},
	{
		id: 1679,
		name: 'LA RINCONADA',
		uta2020: '141122763050000',
		uta2010: '141122763050000',
		latitude: -30.184653789,
		longitude: -62.830142634,
		municipalityId: 145
	},
	{
		id: 1680,
		name: 'LOS EUCALIPTOS',
		uta2020: '141122763000074',
		uta2010: '141122763000074',
		latitude: -30.114797982,
		longitude: -62.931628467,
		municipalityId: 145
	},
	{
		id: 1681,
		name: 'EL ZAPALLAR',
		uta2020: '141122763000042',
		uta2010: '141122763000042',
		latitude: -30.184340839,
		longitude: -63.052282201,
		municipalityId: 145
	},
	{
		id: 1682,
		name: 'ESTANCIA MARULL',
		uta2020: '141122763000043',
		uta2010: '141122763000043',
		latitude: -30.184499322,
		longitude: -63.142218937,
		municipalityId: 145
	},
	{
		id: 1683,
		name: 'CAMPO ALEGRE',
		uta2020: '141122763000009',
		uta2010: '141122763000009',
		latitude: -30.279247503,
		longitude: -62.981246492,
		municipalityId: 145
	},
	{
		id: 1684,
		name: 'CONDOR HUASI',
		uta2020: '900568273000039',
		uta2010: '900568273000039',
		latitude: -27.03225,
		longitude: -65.05974,
		municipalityId: 2219
	},
	{
		id: 1685,
		name: 'TUSCA POZO',
		uta2020: '900568273000240',
		uta2010: '900568273000240',
		latitude: -27.14492,
		longitude: -65.08539,
		municipalityId: 2219
	},
	{
		id: 1686,
		name: 'AGUA DULCE',
		uta2020: '900568273000007',
		uta2010: '900568273000007',
		latitude: -27.06945,
		longitude: -64.98035,
		municipalityId: 2219
	},
	{
		id: 1687,
		name: 'ESTACION CACHI YACO',
		uta2020: '900568273000115',
		uta2010: '900568273000115',
		latitude: -27.165015,
		longitude: -64.989297,
		municipalityId: 2219
	},
	{
		id: 1688,
		name: 'ORAN',
		uta2020: '900568273000189',
		uta2010: '900568273000189',
		latitude: -27.0886052,
		longitude: -65.0392269,
		municipalityId: 2219
	},
	{
		id: 1689,
		name: 'LAGUNA BLANCA',
		uta2020: '900568273000151',
		uta2010: '900568273000151',
		latitude: -27.110107422,
		longitude: -65.0676651,
		municipalityId: 2219
	},
	{
		id: 1690,
		name: 'VILLA SAN JOSE',
		uta2020: '820212392410000',
		uta2010: '820212392410000',
		latitude: -31.339134634,
		longitude: -61.622588386,
		municipalityId: 751
	},
	{
		id: 1691,
		name: 'EL CRISPIN',
		uta2020: '141052658080000',
		uta2010: '141052658080000',
		latitude: -31.017971601,
		longitude: -63.605165059,
		municipalityId: 250
	},
	{
		id: 1692,
		name: 'COLONIA INDIGENA',
		uta2020: '820980238000010',
		uta2010: '820980238000010',
		latitude: -30.5951232,
		longitude: -59.9436425,
		municipalityId: 971
	},
	{
		id: 1693,
		name: 'COLONIA CRIOLLA',
		uta2020: '820980238000008',
		uta2010: '820980238000008',
		latitude: -30.5611448,
		longitude: -59.9208146,
		municipalityId: 971
	},
	{
		id: 1694,
		name: 'COLONIA SAN IGNACIO',
		uta2020: '820980238000013',
		uta2010: '820980238000013',
		latitude: -30.33971815,
		longitude: -59.978214158,
		municipalityId: 971
	},
	{
		id: 1695,
		name: 'SAN JAVIER',
		uta2020: '820980238060000',
		uta2010: '820980238060000',
		latitude: -30.582206841,
		longitude: -59.931398518,
		municipalityId: 971
	},
	{
		id: 1696,
		name: 'ISLA LAS PALMAS',
		uta2020: '820980238000025',
		uta2010: '820980238000025',
		latitude: -30.5858599,
		longitude: -59.9340509,
		municipalityId: 971
	},
	{
		id: 1697,
		name: 'COLONIA SAN JOSE',
		uta2020: '820980238000014',
		uta2010: '820980238000014',
		latitude: -30.41127354,
		longitude: -59.948660813,
		municipalityId: 971
	},
	{
		id: 1698,
		name: 'COLONIA CALIFORNIA',
		uta2020: '820980238000007',
		uta2010: '820980238000007',
		latitude: -30.514011,
		longitude: -59.9296428,
		municipalityId: 971
	},
	{
		id: 1699,
		name: 'LAS CAÑAS',
		uta2020: '821123925000042',
		uta2010: '821123925000042',
		latitude: -30.932459372,
		longitude: -60.500455822,
		municipalityId: 1012
	},
	{
		id: 1700,
		name: 'MIGUEL ESCALADA',
		uta2020: '821123925000049',
		uta2010: '821123925000049',
		latitude: -31.0380617,
		longitude: -60.5066958,
		municipalityId: 1012
	},
	{
		id: 1701,
		name: 'NARE',
		uta2020: '821123925090000',
		uta2010: '821123925090000',
		latitude: -30.951076187,
		longitude: -60.468210221,
		municipalityId: 1012
	},
	{
		id: 1702,
		name: 'ESTACION EL CANTOR',
		uta2020: '820422588000038',
		uta2010: '820422588000038',
		latitude: -33.51620194,
		longitude: -62.134782229,
		municipalityId: 900
	},
	{
		id: 1703,
		name: 'CAFFERATA',
		uta2020: '820422588030000',
		uta2010: '820422588030000',
		latitude: -33.441415876,
		longitude: -62.086871469,
		municipalityId: 900
	},
	{
		id: 1704,
		name: 'SELVAS DEL RIO DE ORO',
		uta2020: '220840266080000',
		uta2010: '220840266080000',
		latitude: -26.804475578,
		longitude: -58.958545445,
		municipalityId: 31
	},
	{
		id: 1705,
		name: 'CAMPO ANTONIELI',
		uta2020: '220840266000006',
		uta2010: '220840266000006',
		latitude: -26.795977689,
		longitude: -59.022674971,
		municipalityId: 31
	},
	{
		id: 1706,
		name: 'LOMA FLORIDA',
		uta2020: '220840266000079',
		uta2010: '220840266000079',
		latitude: -26.815224859,
		longitude: -59.114392314,
		municipalityId: 31
	},
	{
		id: 1707,
		name: 'LA EDUVIGIS',
		uta2020: '220840266030000',
		uta2010: '220840266030000',
		latitude: -26.837412046,
		longitude: -59.06411758,
		municipalityId: 31
	},
	{
		id: 1708,
		name: 'LA BLANCA',
		uta2020: '220840266000060',
		uta2010: '220840266000060',
		latitude: -26.730930951,
		longitude: -59.055711568,
		municipalityId: 31
	},
	{
		id: 1709,
		name: 'LA TEXTIL',
		uta2020: '220840266000068',
		uta2010: '220840266000068',
		latitude: -26.619339924,
		longitude: -58.720844025,
		municipalityId: 31
	},
	{
		id: 1710,
		name: 'RESERVA FISCAL',
		uta2020: '220840266000100',
		uta2010: '220840266000100',
		latitude: -26.650359144,
		longitude: -58.804357505,
		municipalityId: 31
	},
	{
		id: 1711,
		name: 'LOTE 51',
		uta2020: '220840266000084',
		uta2010: '220840266000084',
		latitude: -26.835227475,
		longitude: -59.065754328,
		municipalityId: 31
	},
	{
		id: 1712,
		name: 'LOTE 18',
		uta2020: '220840266000082',
		uta2010: '220840266000082',
		latitude: -26.699293631,
		longitude: -59.122956995,
		municipalityId: 31
	},
	{
		id: 1713,
		name: 'VILLA ANTIGUA',
		uta2020: '500420042030000',
		uta2010: '500420042030000',
		latitude: -33.464515641,
		longitude: -67.605578504,
		municipalityId: 1499
	},
	{
		id: 1714,
		name: 'CRUZ DEL YUGO',
		uta2020: '500420042000031',
		uta2010: '500420042000031',
		latitude: -33.13476944,
		longitude: -67.527854919,
		municipalityId: 1499
	},
	{
		id: 1715,
		name: 'DESAGUADERO',
		uta2020: '500420042010000',
		uta2010: '500420042010000',
		latitude: -33.405226577,
		longitude: -67.164166436,
		municipalityId: 1499
	},
	{
		id: 1716,
		name: 'CHAMUSCAO',
		uta2020: '500420042000023',
		uta2010: '500420042000023',
		latitude: -33.300132752,
		longitude: -67.519355774,
		municipalityId: 1499
	},
	{
		id: 1717,
		name: 'MAQUINISTA LEVET',
		uta2020: '500420042000156',
		uta2010: '500420042000156',
		latitude: -33.606063843,
		longitude: -67.100959778,
		municipalityId: 1499
	},
	{
		id: 1718,
		name: 'LAS CHACRITAS',
		uta2020: '500420042000129',
		uta2010: '500420042000129',
		latitude: -33.453685988,
		longitude: -67.649883318,
		municipalityId: 1499
	},
	{
		id: 1719,
		name: 'EL CAMPAMENTO',
		uta2020: '500420042000047',
		uta2010: '500420042000047',
		latitude: -33.801441211,
		longitude: -67.41035956,
		municipalityId: 1499
	},
	{
		id: 1720,
		name: 'LA GLORIOSA',
		uta2020: '500420042000118',
		uta2010: '500420042000118',
		latitude: -33.613119315,
		longitude: -67.429251843,
		municipalityId: 1499
	},
	{
		id: 1721,
		name: 'CADETES DE CHILE',
		uta2020: '500420042000020',
		uta2010: '500420042000020',
		latitude: -33.558452606,
		longitude: -67.252449036,
		municipalityId: 1499
	},
	{
		id: 1722,
		name: 'LA MENTA',
		uta2020: '500420042000122',
		uta2010: '500420042000122',
		latitude: -33.405839415,
		longitude: -67.755158002,
		municipalityId: 1499
	},
	{
		id: 1723,
		name: 'LA PAZ',
		uta2020: '500420042020000',
		uta2010: '500420042020000',
		latitude: -33.461019318,
		longitude: -67.559578527,
		municipalityId: 1499
	},
	{
		id: 1724,
		name: 'EL LECHUCITO',
		uta2020: '500420042000058',
		uta2010: '500420042000058',
		latitude: -33.298249244,
		longitude: -67.473628467,
		municipalityId: 1499
	},
	{
		id: 1725,
		name: 'BARRIO CICARELLI',
		uta2020: '820560133010000',
		uta2010: '820560133010000',
		latitude: -32.610377611,
		longitude: -61.324440932,
		municipalityId: 738
	},
	{
		id: 1726,
		name: 'COLONIA MEDICI',
		uta2020: '820560133060000',
		uta2010: '820560133060000',
		latitude: -32.598890325,
		longitude: -61.376712167,
		municipalityId: 738
	},
	{
		id: 1727,
		name: 'LARGUIA',
		uta2020: '820560133080000',
		uta2010: '820560133080000',
		latitude: -32.553981054,
		longitude: -61.219799543,
		municipalityId: 738
	},
	{
		id: 1728,
		name: 'CAMPO RASETTO',
		uta2020: '820560133000016',
		uta2010: '820560133000016',
		latitude: -32.65458958,
		longitude: -61.143349836,
		municipalityId: 738
	},
	{
		id: 1729,
		name: 'CAMPO ROVETTO',
		uta2020: '820560133000017',
		uta2010: '820560133000017',
		latitude: -32.609630568,
		longitude: -61.324568546,
		municipalityId: 738
	},
	{
		id: 1730,
		name: 'CAMPO BARBERO',
		uta2020: '820560133000002',
		uta2010: '820560133000002',
		latitude: -32.5924299,
		longitude: -61.2758577,
		municipalityId: 738
	},
	{
		id: 1731,
		name: 'TOTORAS',
		uta2020: '820560133140000',
		uta2010: '820560133140000',
		latitude: -32.586351551,
		longitude: -61.167329256,
		municipalityId: 738
	},
	{
		id: 1732,
		name: 'PASO BRAVO',
		uta2020: '300429250000025',
		uta2010: '300429250000025',
		latitude: -30.476279489,
		longitude: -58.729636431,
		municipalityId: 1686
	},
	{
		id: 1733,
		name: 'LAGUNA BENITEZ',
		uta2020: '300429250000018',
		uta2010: '300429250000018',
		latitude: -30.630488486,
		longitude: -58.652554743,
		municipalityId: 1686
	},
	{
		id: 1734,
		name: 'AUCA MAHUIDA',
		uta2020: '580140000000013',
		uta2010: '580140000000013',
		latitude: -37.888034232,
		longitude: -68.514489997,
		municipalityId: 2384
	},
	{
		id: 1735,
		name: 'AGUA DE ORO',
		uta2020: '140210084010000',
		uta2010: '140210084010000',
		latitude: -31.058228128,
		longitude: -64.295579358,
		municipalityId: 205
	},
	{
		id: 1736,
		name: 'VILLA URQUIZA',
		uta2020: '300840371300000',
		uta2010: '300840371300000',
		latitude: -31.65075061,
		longitude: -60.377585516,
		municipalityId: 1720
	},
	{
		id: 1737,
		name: 'LOS AROMOS',
		uta2020: '300840371000072',
		uta2010: '300840371000072',
		latitude: -31.64880541,
		longitude: -60.37621136,
		municipalityId: 1720
	},
	{
		id: 1738,
		name: 'LA BALSA',
		uta2020: '300840371000064',
		uta2010: '300840371000064',
		latitude: -31.67611013,
		longitude: -60.33931129,
		municipalityId: 1720
	},
	{
		id: 1739,
		name: 'VILLA KILOMETRO 213',
		uta2020: '340560252050000',
		uta2010: '340560252050000',
		latitude: -26.186462649,
		longitude: -59.368395058,
		municipalityId: 2319
	},
	{
		id: 1740,
		name: 'EL PALMAR',
		uta2020: '221400385000010',
		uta2010: '221400385000010',
		latitude: -27.518580789,
		longitude: -59.003673945,
		municipalityId: 38
	},
	{
		id: 1741,
		name: 'BARRANQUERAS',
		uta2020: '221400385010000',
		uta2010: '221400385010000',
		latitude: -27.487773929,
		longitude: -58.932741689,
		municipalityId: 38
	},
	{
		id: 1742,
		name: 'GENERAL ROCA',
		uta2020: '140630539120000',
		uta2010: '140630539120000',
		latitude: -32.73051153,
		longitude: -61.917138712,
		municipalityId: 185
	},
	{
		id: 1743,
		name: 'ENSENADITA',
		uta2020: '181330329000016',
		uta2010: '181330329000016',
		latitude: -27.40298521,
		longitude: -58.54733407,
		municipalityId: 2050
	},
	{
		id: 1744,
		name: 'RIACHUELO SAN JOSE',
		uta2020: '181330329000027',
		uta2010: '181330329000027',
		latitude: -27.430893157,
		longitude: -58.499032289,
		municipalityId: 2050
	},
	{
		id: 1745,
		name: 'ENSENADA GRANDE',
		uta2020: '181330329000015',
		uta2010: '181330329000015',
		latitude: -27.365666824,
		longitude: -58.369425839,
		municipalityId: 2050
	},
	{
		id: 1746,
		name: 'PUERTO GONZALEZ',
		uta2020: '181330329000025',
		uta2010: '181330329000025',
		latitude: -27.30581448,
		longitude: -58.38424881,
		municipalityId: 2050
	},
	{
		id: 1747,
		name: 'SAN COSME',
		uta2020: '181330329030000',
		uta2010: '181330329030000',
		latitude: -27.371180162,
		longitude: -58.511529111,
		municipalityId: 2050
	},
	{
		id: 1748,
		name: 'SANTO DOMINGO',
		uta2020: '181330329000032',
		uta2010: '181330329000032',
		latitude: -27.360179901,
		longitude: -58.466957092,
		municipalityId: 2050
	},
	{
		id: 1749,
		name: 'LAS LAGUNAS',
		uta2020: '740636308040000',
		uta2010: '740636308040000',
		latitude: -32.62981203,
		longitude: -65.551144129,
		municipalityId: 1091
	},
	{
		id: 1750,
		name: 'CAMPO LA CRUZ',
		uta2020: '661610406020000',
		uta2010: '661610406020000',
		latitude: -22.42822668,
		longitude: -65.145404966,
		municipalityId: 1826
	},
	{
		id: 1751,
		name: 'NAZARENO',
		uta2020: '661610406040000',
		uta2010: '661610406040000',
		latitude: -22.481854451,
		longitude: -65.094973341,
		municipalityId: 1826
	},
	{
		id: 1752,
		name: 'SAN F. DE TUCTUCA',
		uta2020: '661610406000130',
		uta2010: '661610406000130',
		latitude: -22.41537,
		longitude: -65.25836,
		municipalityId: 1826
	},
	{
		id: 1753,
		name: 'BARITU',
		uta2020: '661610406000020',
		uta2010: '661610406000020',
		latitude: -22.49883978,
		longitude: -64.76756495,
		municipalityId: 1826
	},
	{
		id: 1754,
		name: 'KELLOTICAR',
		uta2020: '661610406000062',
		uta2010: '661610406000062',
		latitude: -22.520534596,
		longitude: -65.112535737,
		municipalityId: 1826
	},
	{
		id: 1755,
		name: 'CUESTA AZUL',
		uta2020: '661610406000043',
		uta2010: '661610406000043',
		latitude: -22.54504,
		longitude: -65.12086,
		municipalityId: 1826
	},
	{
		id: 1756,
		name: 'LIPEO',
		uta2020: '661610406000076',
		uta2010: '661610406000076',
		latitude: -22.431518962,
		longitude: -64.737902789,
		municipalityId: 1826
	},
	{
		id: 1757,
		name: 'SAN JUANCITO',
		uta2020: '661610406000136',
		uta2010: '661610406000136',
		latitude: -22.487356795,
		longitude: -65.114966912,
		municipalityId: 1826
	},
	{
		id: 1758,
		name: 'POSCAYA',
		uta2020: '661610406050000',
		uta2010: '661610406050000',
		latitude: -22.433626613,
		longitude: -65.067895714,
		municipalityId: 1826
	},
	{
		id: 1759,
		name: 'EL MOLINO DE CUESTA AZUL',
		uta2020: '661610406000048',
		uta2010: '661610406000048',
		latitude: -22.587629389,
		longitude: -65.132772409,
		municipalityId: 1826
	},
	{
		id: 1760,
		name: 'BACOYA',
		uta2020: '661610406000018',
		uta2010: '661610406000018',
		latitude: -22.540138424,
		longitude: -65.225521119,
		municipalityId: 1826
	},
	{
		id: 1761,
		name: 'SAN MARCOS',
		uta2020: '661610406060000',
		uta2010: '661610406060000',
		latitude: -22.509005448,
		longitude: -65.101242384,
		municipalityId: 1826
	},
	{
		id: 1762,
		name: 'EL PABELLON',
		uta2020: '661610406000049',
		uta2010: '661610406000049',
		latitude: -22.500583167,
		longitude: -65.281797123,
		municipalityId: 1826
	},
	{
		id: 1763,
		name: 'AZARA',
		uta2020: '540070014020000',
		uta2010: '540070014020000',
		latitude: -28.057251205,
		longitude: -55.676799377,
		municipalityId: 2105
	},
	{
		id: 1764,
		name: 'COLONIA APOSTOLES',
		uta2020: '540070014000007',
		uta2010: '540070014000007',
		latitude: -28.017595291,
		longitude: -55.745738983,
		municipalityId: 2105
	},
	{
		id: 1765,
		name: 'RINCON DE AZARA',
		uta2020: '540070014050000',
		uta2010: '540070014050000',
		latitude: -28.10807791,
		longitude: -55.631887985,
		municipalityId: 2105
	},
	{
		id: 1766,
		name: 'CAPON BONITO',
		uta2020: '540070014000003',
		uta2010: '540070014000003',
		latitude: -28.066221237,
		longitude: -55.598537445,
		municipalityId: 2105
	},
	{
		id: 1767,
		name: 'LOS QUIROGA',
		uta2020: '860356070110000',
		uta2010: '860356070110000',
		latitude: -27.677625832,
		longitude: -64.297813648,
		municipalityId: 1337
	},
	{
		id: 1768,
		name: 'REALICO',
		uta2020: '421330315080000',
		uta2010: '421330315080000',
		latitude: -35.036885754,
		longitude: -64.245420967,
		municipalityId: 1929
	},
	{
		id: 1769,
		name: 'COLONIA V. AGUERO',
		uta2020: '140212098000024',
		uta2010: '140212098000024',
		latitude: -31.028374846,
		longitude: -64.017590367,
		municipalityId: 206
	},
	{
		id: 1770,
		name: 'COLONIA VICENTE AGUERO',
		uta2020: '140212098070000',
		uta2010: '140212098070000',
		latitude: -31.027784931,
		longitude: -64.019045654,
		municipalityId: 206
	},
	{
		id: 1771,
		name: 'TRANSITO',
		uta2020: '141401358400000',
		uta2010: '141401358400000',
		latitude: -31.425110953,
		longitude: -63.195403858,
		municipalityId: 398
	},
	{
		id: 1772,
		name: 'VILLA DEL TRANSITO',
		uta2020: '141401358430000',
		uta2010: '141401358430000',
		latitude: -31.447403769,
		longitude: -63.194013975,
		municipalityId: 398
	},
	{
		id: 1773,
		name: 'LA ARGENTINA',
		uta2020: '300630000000028',
		uta2010: '300630000000028',
		latitude: -33.548707497,
		longitude: -59.315149035,
		municipalityId: 1693
	},
	{
		id: 1774,
		name: 'DISTRITO CEIBAS',
		uta2020: '300630000000014',
		uta2010: '300630000000014',
		latitude: -33.498277864,
		longitude: -58.759115952,
		municipalityId: 1693
	},
	{
		id: 1775,
		name: 'EL EMPALME',
		uta2020: '300630000000018',
		uta2010: '300630000000018',
		latitude: -33.585132599,
		longitude: -58.777690888,
		municipalityId: 1693
	},
	{
		id: 1776,
		name: 'EL SALADERO',
		uta2020: '300630000000019',
		uta2010: '300630000000019',
		latitude: -33.238199452,
		longitude: -59.448833094,
		municipalityId: 1693
	},
	{
		id: 1777,
		name: 'EL SAUCE',
		uta2020: '300630000000020',
		uta2010: '300630000000020',
		latitude: -33.484987,
		longitude: -58.946015,
		municipalityId: 1693
	},
	{
		id: 1778,
		name: 'ARROYO HONDO',
		uta2020: '300630000000005',
		uta2010: '300630000000005',
		latitude: -33.546795,
		longitude: -58.625641,
		municipalityId: 1693
	},
	{
		id: 1779,
		name: 'ESQUINA',
		uta2020: '300630000000021',
		uta2010: '300630000000021',
		latitude: -33.544086812,
		longitude: -58.950202104,
		municipalityId: 1693
	},
	{
		id: 1780,
		name: 'GUALJAINA',
		uta2020: '260145007070000',
		uta2010: '260145007070000',
		latitude: -42.726757895,
		longitude: -70.535487613,
		municipalityId: 544
	},
	{
		id: 1781,
		name: 'ESTEBAN RAMS',
		uta2020: '820773281010000',
		uta2010: '820773281010000',
		latitude: -29.772671796,
		longitude: -61.488151235,
		municipalityId: 1052
	},
	{
		id: 1782,
		name: 'NUEVA ITALIA',
		uta2020: '820773281000074',
		uta2010: '820773281000074',
		latitude: -29.827972412,
		longitude: -61.386566162,
		municipalityId: 1052
	},
	{
		id: 1783,
		name: 'POZO BORRADO',
		uta2020: '820773323060000',
		uta2010: '820773323060000',
		latitude: -28.939942303,
		longitude: -61.705599974,
		municipalityId: 1053
	},
	{
		id: 1784,
		name: 'EL PIRINCHO',
		uta2020: '820773323000033',
		uta2010: '820773323000033',
		latitude: -28.8454228,
		longitude: -61.712704,
		municipalityId: 1053
	},
	{
		id: 1785,
		name: 'EL TUNALITO',
		uta2020: '820773323000036',
		uta2010: '820773323000036',
		latitude: -28.906559978,
		longitude: -61.141271151,
		municipalityId: 1053
	},
	{
		id: 1786,
		name: 'CAMPO CONTARDE',
		uta2020: '820773323000003',
		uta2010: '820773323000003',
		latitude: -29.074976935,
		longitude: -61.090190331,
		municipalityId: 1053
	},
	{
		id: 1787,
		name: 'CAMPO LAS MELLIZAS',
		uta2020: '820773323000009',
		uta2010: '820773323000009',
		latitude: -28.929324952,
		longitude: -61.489662018,
		municipalityId: 1053
	},
	{
		id: 1788,
		name: 'CAMPO LOS CLAVELES',
		uta2020: '820773323000011',
		uta2010: '820773323000011',
		latitude: -28.9383058,
		longitude: -61.4296546,
		municipalityId: 1053
	},
	{
		id: 1789,
		name: 'LUTTI',
		uta2020: '140072056140000',
		uta2010: '140072056140000',
		latitude: -32.298944103,
		longitude: -64.725437923,
		municipalityId: 121
	},
	{
		id: 1790,
		name: 'LOS VALLECITOS',
		uta2020: '140072056000042',
		uta2010: '140072056000042',
		latitude: -32.357231693,
		longitude: -64.851721754,
		municipalityId: 121
	},
	{
		id: 1791,
		name: 'CARAHUASI',
		uta2020: '140072056000012',
		uta2010: '140072056000012',
		latitude: -32.316272736,
		longitude: -64.702919006,
		municipalityId: 121
	},
	{
		id: 1792,
		name: 'EL ESPINILLO',
		uta2020: '140072056000024',
		uta2010: '140072056000024',
		latitude: -32.3079691,
		longitude: -64.6693938,
		municipalityId: 121
	},
	{
		id: 1793,
		name: 'FRONTERA DE RIO PICO',
		uta2020: '260988147010000',
		uta2010: '260988147010000',
		latitude: -44.19885565,
		longitude: -71.666668164,
		municipalityId: 557
	},
	{
		id: 1794,
		name: 'CAYANTA',
		uta2020: '580775098000010',
		uta2010: '580775098000010',
		latitude: -37.14198741,
		longitude: -70.73181913,
		municipalityId: 2359
	},
	{
		id: 1795,
		name: 'LOS CARRIZOS',
		uta2020: '580775098000038',
		uta2010: '580775098000038',
		latitude: -37.12107079,
		longitude: -70.76817589,
		municipalityId: 2359
	},
	{
		id: 1796,
		name: 'VILLA DEL NAHUEVE',
		uta2020: '580775098070000',
		uta2010: '580775098070000',
		latitude: -37.120983889,
		longitude: -70.768746593,
		municipalityId: 2359
	},
	{
		id: 1797,
		name: 'BELLA VISTA',
		uta2020: '580775098000005',
		uta2010: '580775098000005',
		latitude: -37.05693858,
		longitude: -70.77617021,
		municipalityId: 2359
	},
	{
		id: 1798,
		name: 'SAN FERMIN',
		uta2020: '063990399000029',
		uta2010: '063990399000029',
		latitude: -36.816944122,
		longitude: -62.621276855,
		municipalityId: 599
	},
	{
		id: 1799,
		name: 'COCHICO',
		uta2020: '063990399000005',
		uta2010: '063990399000005',
		latitude: -37.0242075,
		longitude: -62.2255125,
		municipalityId: 599
	},
	{
		id: 1800,
		name: 'LA FLORIDA',
		uta2020: '063990399000016',
		uta2010: '063990399000016',
		latitude: -36.629371643,
		longitude: -62.33449173,
		municipalityId: 599
	},
	{
		id: 1801,
		name: 'LA FLORA',
		uta2020: '063990399000015',
		uta2010: '063990399000015',
		latitude: -36.7139479,
		longitude: -62.6257639,
		municipalityId: 599
	},
	{
		id: 1802,
		name: 'SATURNO',
		uta2020: '063990399000032',
		uta2010: '063990399000032',
		latitude: -36.9150065,
		longitude: -62.6805709,
		municipalityId: 599
	},
	{
		id: 1803,
		name: 'FORTIN PAUNERO',
		uta2020: '063990399000011',
		uta2010: '063990399000011',
		latitude: -36.813896179,
		longitude: -62.402019501,
		municipalityId: 599
	},
	{
		id: 1804,
		name: 'LA LEGUA',
		uta2020: '063990399000020',
		uta2010: '063990399000020',
		latitude: -36.8168384,
		longitude: -62.5517608,
		municipalityId: 599
	},
	{
		id: 1805,
		name: 'GARRE',
		uta2020: '063990399030000',
		uta2010: '063990399030000',
		latitude: -36.560437877,
		longitude: -62.598112038,
		municipalityId: 599
	},
	{
		id: 1806,
		name: 'GUAMINI',
		uta2020: '063990399040000',
		uta2010: '063990399040000',
		latitude: -37.012088131,
		longitude: -62.41668573,
		municipalityId: 599
	},
	{
		id: 1807,
		name: 'ARROYO VENADO',
		uta2020: '063990399010000',
		uta2010: '063990399010000',
		latitude: -37.086466284,
		longitude: -62.539148229,
		municipalityId: 599
	},
	{
		id: 1808,
		name: 'FATRALO',
		uta2020: '063990399000010',
		uta2010: '063990399000010',
		latitude: -36.9597136,
		longitude: -62.8382735,
		municipalityId: 599
	},
	{
		id: 1809,
		name: 'CASEY',
		uta2020: '063990399000007',
		uta2010: '063990399000007',
		latitude: -36.711449073,
		longitude: -62.320968164,
		municipalityId: 599
	},
	{
		id: 1810,
		name: 'VICTORINO DE LA PLAZA',
		uta2020: '063990399000033',
		uta2010: '063990399000033',
		latitude: -36.6276983,
		longitude: -62.6766272,
		municipalityId: 599
	},
	{
		id: 1811,
		name: 'EL GAUCHITO',
		uta2020: '063990399000006',
		uta2010: '063990399000006',
		latitude: -36.8621813,
		longitude: -62.4994077,
		municipalityId: 599
	},
	{
		id: 1812,
		name: 'LAGUNA ALSINA',
		uta2020: '063990399050000',
		uta2010: '063990399050000',
		latitude: -36.809052438,
		longitude: -62.245148075,
		municipalityId: 599
	},
	{
		id: 1813,
		name: 'LA CUADRADA',
		uta2020: '063990399000014',
		uta2010: '063990399000014',
		latitude: -36.97055,
		longitude: -62.0869,
		municipalityId: 599
	},
	{
		id: 1814,
		name: 'LA NEVADA',
		uta2020: '063990399000022',
		uta2010: '063990399000022',
		latitude: -36.93797,
		longitude: -61.96075,
		municipalityId: 599
	},
	{
		id: 1815,
		name: 'LA ATREVIDA',
		uta2020: '063990399000013',
		uta2010: '063990399000013',
		latitude: -36.834663391,
		longitude: -62.476661682,
		municipalityId: 599
	},
	{
		id: 1816,
		name: 'ALAMOS',
		uta2020: '063990399000001',
		uta2010: '063990399000001',
		latitude: -36.894233704,
		longitude: -62.356311798,
		municipalityId: 599
	},
	{
		id: 1817,
		name: 'CASBAS',
		uta2020: '063990399020000',
		uta2010: '063990399020000',
		latitude: -36.75809534,
		longitude: -62.501775409,
		municipalityId: 599
	},
	{
		id: 1818,
		name: 'LA MARIA',
		uta2020: '063990399000021',
		uta2010: '063990399000021',
		latitude: -36.5378436,
		longitude: -62.5230189,
		municipalityId: 599
	},
	{
		id: 1819,
		name: 'LA INDIANA',
		uta2020: '063990399000019',
		uta2010: '063990399000019',
		latitude: -36.82514,
		longitude: -62.79523,
		municipalityId: 599
	},
	{
		id: 1820,
		name: 'LOS ANGELES',
		uta2020: '062100210030000',
		uta2010: '062100210030000',
		latitude: -34.4575064,
		longitude: -60.180184513,
		municipalityId: 600
	},
	{
		id: 1821,
		name: 'LA TABLADA',
		uta2020: '062100210000017',
		uta2010: '062100210000017',
		latitude: -34.5877361,
		longitude: -60.485011,
		municipalityId: 600
	},
	{
		id: 1822,
		name: 'LA DELIA',
		uta2020: '062100210000015',
		uta2010: '062100210000015',
		latitude: -34.6510832,
		longitude: -60.62368,
		municipalityId: 600
	},
	{
		id: 1823,
		name: 'SAN PATRICIO',
		uta2020: '062100210000029',
		uta2010: '062100210000029',
		latitude: -34.61564,
		longitude: -60.251370001,
		municipalityId: 600
	},
	{
		id: 1824,
		name: 'MEMBRILLAR',
		uta2020: '062100210000024',
		uta2010: '062100210000024',
		latitude: -34.592646019,
		longitude: -60.606345581,
		municipalityId: 600
	},
	{
		id: 1825,
		name: 'LAS CAÑAS',
		uta2020: '062100210000022',
		uta2010: '062100210000022',
		latitude: -34.78227,
		longitude: -60.533330001,
		municipalityId: 600
	},
	{
		id: 1826,
		name: 'CUARTEL I',
		uta2020: '062100210000007',
		uta2010: '062100210000007',
		latitude: -34.6947159,
		longitude: -60.4717389,
		municipalityId: 600
	},
	{
		id: 1827,
		name: 'CHACABUCO',
		uta2020: '062100210020000',
		uta2010: '062100210020000',
		latitude: -34.6429844,
		longitude: -60.47018435,
		municipalityId: 600
	},
	{
		id: 1828,
		name: 'COLIQUEO',
		uta2020: '062100210000005',
		uta2010: '062100210000005',
		latitude: -34.6600434,
		longitude: -60.5366433,
		municipalityId: 600
	},
	{
		id: 1829,
		name: 'INGENIERO SILVEYRA',
		uta2020: '062100210000013',
		uta2010: '062100210000013',
		latitude: -34.5155723,
		longitude: -60.2188365,
		municipalityId: 600
	},
	{
		id: 1830,
		name: 'RAWSON',
		uta2020: '062100210050000',
		uta2010: '062100210050000',
		latitude: -34.608637434,
		longitude: -60.067710676,
		municipalityId: 600
	},
	{
		id: 1831,
		name: 'RUTA NACIONAL 7 KM 205',
		uta2020: '062100210000028',
		uta2010: '062100210000028',
		latitude: -34.611347535,
		longitude: -60.44517562,
		municipalityId: 600
	},
	{
		id: 1832,
		name: 'MEDANOS BLANCOS',
		uta2020: '062100210000023',
		uta2010: '062100210000023',
		latitude: -34.7631375,
		longitude: -60.2385358,
		municipalityId: 600
	},
	{
		id: 1833,
		name: 'CASTILLA',
		uta2020: '062100210010000',
		uta2010: '062100210010000',
		latitude: -34.613124701,
		longitude: -59.900519458,
		municipalityId: 600
	},
	{
		id: 1834,
		name: 'CUARTEL IV',
		uta2020: '062100210000008',
		uta2010: '062100210000008',
		latitude: -34.7936922,
		longitude: -60.3986485,
		municipalityId: 600
	},
	{
		id: 1835,
		name: 'O"HIGGINS',
		uta2020: '062100210040000',
		uta2010: '062100210040000',
		latitude: -34.585470787,
		longitude: -60.698632584,
		municipalityId: 600
	},
	{
		id: 1836,
		name: 'EL TEJADO',
		uta2020: '062100210000012',
		uta2010: '062100210000012',
		latitude: -34.7625627,
		longitude: -60.5806973,
		municipalityId: 600
	},
	{
		id: 1837,
		name: 'CIRCUNSCRIPCION I SERIE H',
		uta2020: '062100210000004',
		uta2010: '062100210000004',
		latitude: -34.66495,
		longitude: -60.441390001,
		municipalityId: 600
	},
	{
		id: 1838,
		name: 'LA VERDE',
		uta2020: '062100210000018',
		uta2010: '062100210000018',
		latitude: -34.4991375,
		longitude: -60.5639829,
		municipalityId: 600
	},
	{
		id: 1839,
		name: 'SAUCE VERDE',
		uta2020: '062100210000031',
		uta2010: '062100210000031',
		latitude: -34.6556733,
		longitude: -60.404273,
		municipalityId: 600
	},
	{
		id: 1840,
		name: 'SAN VICENTE',
		uta2020: '062100210000030',
		uta2010: '062100210000030',
		latitude: -34.7604368,
		longitude: -60.3258427,
		municipalityId: 600
	},
	{
		id: 1841,
		name: 'LA VICTORIA',
		uta2020: '062100210000019',
		uta2010: '062100210000019',
		latitude: -34.67999,
		longitude: -60.345910001,
		municipalityId: 600
	},
	{
		id: 1842,
		name: 'CUCHA CUCHA',
		uta2020: '062100210000009',
		uta2010: '062100210000009',
		latitude: -34.62261,
		longitude: -60.407360001,
		municipalityId: 600
	},
	{
		id: 1843,
		name: 'LAS ACEQUIAS',
		uta2020: '140980833150000',
		uta2010: '140980833150000',
		latitude: -33.282248697,
		longitude: -63.975876387,
		municipalityId: 437
	},
	{
		id: 1844,
		name: 'COLONIA SURIZ',
		uta2020: '220770238000006',
		uta2010: '220770238000006',
		latitude: -27.21034133,
		longitude: -59.2276375,
		municipalityId: 43
	},
	{
		id: 1845,
		name: 'LAGUNA BLANCA',
		uta2020: '220770238030000',
		uta2010: '220770238030000',
		latitude: -27.257219551,
		longitude: -59.234048613,
		municipalityId: 43
	},
	{
		id: 1846,
		name: 'BUENA VISTA',
		uta2020: '340425056010000',
		uta2010: '340425056010000',
		latitude: -25.071212266,
		longitude: -58.386779908,
		municipalityId: 2325
	},
	{
		id: 1847,
		name: 'LA CLOTILDE',
		uta2020: '221120336010000',
		uta2010: '221120336010000',
		latitude: -27.178199339,
		longitude: -60.631574185,
		municipalityId: 46
	},
	{
		id: 1848,
		name: 'COLONIA GENERAL URQUIZA',
		uta2020: '221120336000003',
		uta2010: '221120336000003',
		latitude: -27.132035897,
		longitude: -60.762883508,
		municipalityId: 46
	},
	{
		id: 1849,
		name: 'COLONIA N. AVELLAN',
		uta2020: '221120336000005',
		uta2010: '221120336000005',
		latitude: -27.158390577,
		longitude: -60.51564098,
		municipalityId: 46
	},
	{
		id: 1850,
		name: 'EL TABACAL',
		uta2020: '221120336000006',
		uta2010: '221120336000006',
		latitude: -27.173122585,
		longitude: -60.575828474,
		municipalityId: 46
	},
	{
		id: 1851,
		name: 'COLONIA JOSE MARMOL',
		uta2020: '221120336000004',
		uta2010: '221120336000004',
		latitude: -27.16662459,
		longitude: -60.69603989,
		municipalityId: 46
	},
	{
		id: 1852,
		name: 'VILLA SAN JAVIER',
		uta2020: '901190133000045',
		uta2010: '901190133000045',
		latitude: -26.782594681,
		longitude: -65.359565735,
		municipalityId: 2258
	},
	{
		id: 1853,
		name: 'EL CORTE',
		uta2020: '901190133000012',
		uta2010: '901190133000012',
		latitude: -26.8071568,
		longitude: -65.3294665,
		municipalityId: 2258
	},
	{
		id: 1854,
		name: 'BARRIO SAN JOSE III',
		uta2020: '901190133010000',
		uta2010: '901190133010000',
		latitude: -26.796443122,
		longitude: -65.265715912,
		municipalityId: 2258
	},
	{
		id: 1855,
		name: 'EX INGENIO SAN JOSE',
		uta2020: '901190133030001',
		uta2010: '901190133030001',
		latitude: -26.799205031,
		longitude: -65.264676414,
		municipalityId: 2258
	},
	{
		id: 1856,
		name: 'YERBA BUENA - MARCOS PAZ',
		uta2020: '901190133030002',
		uta2010: '901190133030002',
		latitude: -26.808845258,
		longitude: -65.310698827,
		municipalityId: 2258
	},
	{
		id: 1857,
		name: 'COLONIA RIVADAVIA',
		uta2020: '300849675000034',
		uta2010: '300849675000034',
		latitude: -31.619064233,
		longitude: -60.135412718,
		municipalityId: 1721
	},
	{
		id: 1858,
		name: 'VILLA OESTE',
		uta2020: '140420364190000',
		uta2010: '140420364190000',
		latitude: -32.434331967,
		longitude: -63.287559164,
		municipalityId: 166
	},
	{
		id: 1859,
		name: 'VILLA NUEVA',
		uta2020: '140420364180000',
		uta2010: '140420364180000',
		latitude: -32.428825178,
		longitude: -63.24935925,
		municipalityId: 166
	},
	{
		id: 1860,
		name: 'RINCON DE LUNA',
		uta2020: '180280042000068',
		uta2010: '180280042000068',
		latitude: -28.456798553,
		longitude: -58.230693821,
		municipalityId: 2053
	},
	{
		id: 1861,
		name: 'LOS LAPACHOS',
		uta2020: '180280042000046',
		uta2010: '180280042000046',
		latitude: -28.473987134,
		longitude: -57.890534124,
		municipalityId: 2053
	},
	{
		id: 1862,
		name: 'LOMA ALTA',
		uta2020: '180280042000044',
		uta2010: '180280042000044',
		latitude: -28.414425131,
		longitude: -57.964088598,
		municipalityId: 2053
	},
	{
		id: 1863,
		name: 'CONCEPCION',
		uta2020: '180280042010000',
		uta2010: '180280042010000',
		latitude: -28.392491008,
		longitude: -57.886680771,
		municipalityId: 2053
	},
	{
		id: 1864,
		name: 'PAIRIRI',
		uta2020: '180280042000054',
		uta2010: '180280042000054',
		latitude: -28.316220982,
		longitude: -57.95838883,
		municipalityId: 2053
	},
	{
		id: 1865,
		name: 'YUQUERI',
		uta2020: '180280042000095',
		uta2010: '180280042000095',
		latitude: -28.334352493,
		longitude: -57.699737559,
		municipalityId: 2053
	},
	{
		id: 1866,
		name: 'CARAMBOLA',
		uta2020: '180280042000011',
		uta2010: '180280042000011',
		latitude: -28.435006885,
		longitude: -57.664192725,
		municipalityId: 2053
	},
	{
		id: 1867,
		name: 'YAJARAVE',
		uta2020: '180280042000094',
		uta2010: '180280042000094',
		latitude: -28.51418359,
		longitude: -57.76117526,
		municipalityId: 2053
	},
	{
		id: 1868,
		name: 'PASO LUCERO',
		uta2020: '180280042000062',
		uta2010: '180280042000062',
		latitude: -28.239709028,
		longitude: -57.826169888,
		municipalityId: 2053
	},
	{
		id: 1869,
		name: 'ESPINILLOS',
		uta2020: '180280042000024',
		uta2010: '180280042000024',
		latitude: -28.230713117,
		longitude: -57.783252484,
		municipalityId: 2053
	},
	{
		id: 1870,
		name: 'ARROYO CAABI',
		uta2020: '180280042000004',
		uta2010: '180280042000004',
		latitude: -28.301816431,
		longitude: -57.827892766,
		municipalityId: 2053
	},
	{
		id: 1871,
		name: 'BATEL',
		uta2020: '180280042000007',
		uta2010: '180280042000007',
		latitude: -28.302286723,
		longitude: -58.02032697,
		municipalityId: 2053
	},
	{
		id: 1872,
		name: 'ORATORIO',
		uta2020: '180280042000053',
		uta2010: '180280042000053',
		latitude: -28.376450219,
		longitude: -57.963388655,
		municipalityId: 2053
	},
	{
		id: 1873,
		name: 'RODEO PORA',
		uta2020: '180280042000071',
		uta2010: '180280042000071',
		latitude: -28.55784618,
		longitude: -58.1220389,
		municipalityId: 2053
	},
	{
		id: 1874,
		name: 'PASO BATALLA',
		uta2020: '180280042000058',
		uta2010: '180280042000058',
		latitude: -28.403279785,
		longitude: -57.883761756,
		municipalityId: 2053
	},
	{
		id: 1875,
		name: 'SAN PEDRO NORTE',
		uta2020: '141751575100000',
		uta2010: '141751575100000',
		latitude: -30.088758998,
		longitude: -64.155953673,
		municipalityId: 489
	},
	{
		id: 1876,
		name: 'LA LAGUNA',
		uta2020: '141751575000038',
		uta2010: '141751575000038',
		latitude: -30.178234625,
		longitude: -64.112946676,
		municipalityId: 489
	},
	{
		id: 1877,
		name: 'AÑELO',
		uta2020: '580140014010000',
		uta2010: '580140014010000',
		latitude: -38.351444022,
		longitude: -68.791971559,
		municipalityId: 2385
	},
	{
		id: 1878,
		name: 'LAS LIMPIAS',
		uta2020: '821264114000033',
		uta2010: '821264114000033',
		latitude: -32.26666958,
		longitude: -61.916566196,
		municipalityId: 932
	},
	{
		id: 1879,
		name: 'CAMPO EL 51',
		uta2020: '821264114000011',
		uta2010: '821264114000011',
		latitude: -32.2699496,
		longitude: -61.9850081,
		municipalityId: 932
	},
	{
		id: 1880,
		name: 'MARIA SUSANA',
		uta2020: '821264114120000',
		uta2010: '821264114120000',
		latitude: -32.265485669,
		longitude: -61.901025325,
		municipalityId: 932
	},
	{
		id: 1881,
		name: 'CAMPO BAJO LAS LIEBRES',
		uta2020: '821264114000004',
		uta2010: '821264114000004',
		latitude: -32.338884702,
		longitude: -61.976068554,
		municipalityId: 932
	},
	{
		id: 1882,
		name: 'EL RICARDITO',
		uta2020: '820492770000048',
		uta2010: '820492770000048',
		latitude: -29.177899818,
		longitude: -59.944625308,
		municipalityId: 953
	},
	{
		id: 1883,
		name: 'LA DIAMELA',
		uta2020: '820492770000079',
		uta2010: '820492770000079',
		latitude: -29.226667,
		longitude: -59.9534931,
		municipalityId: 953
	},
	{
		id: 1884,
		name: 'BERNA',
		uta2020: '820492770030000',
		uta2010: '820492770030000',
		latitude: -29.275268108,
		longitude: -59.847222184,
		municipalityId: 953
	},
	{
		id: 1885,
		name: 'CAMPO FURRER',
		uta2020: '820492770000009',
		uta2010: '820492770000009',
		latitude: -29.168971014,
		longitude: -60.001861639,
		municipalityId: 953
	},
	{
		id: 1886,
		name: 'BARRIO SANTA ISABEL',
		uta2020: '140910672010000',
		uta2010: '140910672010000',
		latitude: -30.837526709,
		longitude: -64.536700457,
		municipalityId: 277
	},
	{
		id: 1887,
		name: 'CAPILLA DEL MONTE',
		uta2020: '140910672040000',
		uta2010: '140910672040000',
		latitude: -30.856396671,
		longitude: -64.526268882,
		municipalityId: 277
	},
	{
		id: 1888,
		name: 'LAGUNA BLANCA',
		uta2020: '620705231030000',
		uta2010: '620705231030000',
		latitude: -40.792595485,
		longitude: -69.881039958,
		municipalityId: 1243
	},
	{
		id: 1889,
		name: 'LAS LAGUNITAS',
		uta2020: '500560056000057',
		uta2010: '500560056000057',
		latitude: -32.40057462,
		longitude: -67.515305787,
		municipalityId: 1500
	},
	{
		id: 1890,
		name: 'LA ASUNCION',
		uta2020: '500560056000043',
		uta2010: '500560056000043',
		latitude: -32.57598865,
		longitude: -68.27142017,
		municipalityId: 1500
	},
	{
		id: 1891,
		name: 'EL 15',
		uta2020: '500560056000017',
		uta2010: '500560056000017',
		latitude: -32.64935998,
		longitude: -68.3373497,
		municipalityId: 1500
	},
	{
		id: 1892,
		name: 'LAS VIOLETAS',
		uta2020: '500560056140000',
		uta2010: '500560056140000',
		latitude: -32.820815191,
		longitude: -68.616414076,
		municipalityId: 1500
	},
	{
		id: 1893,
		name: 'EL CARMEN',
		uta2020: '500560056000020',
		uta2010: '500560056000020',
		latitude: -32.716704863,
		longitude: -68.400061864,
		municipalityId: 1500
	},
	{
		id: 1894,
		name: 'ARROYITO',
		uta2020: '500560056000009',
		uta2010: '500560056000009',
		latitude: -32.810136757,
		longitude: -67.221782078,
		municipalityId: 1500
	},
	{
		id: 1895,
		name: 'EL PLUMERO',
		uta2020: '500560056000027',
		uta2010: '500560056000027',
		latitude: -32.709433123,
		longitude: -68.462756543,
		municipalityId: 1500
	},
	{
		id: 1896,
		name: 'INGENIERO GUSTAVO ANDRE',
		uta2020: '500560056110002',
		uta2010: '500560056110002',
		latitude: -32.682400204,
		longitude: -68.326896907,
		municipalityId: 1500
	},
	{
		id: 1897,
		name: 'VILLA TULUMAYA',
		uta2020: '500560056160000',
		uta2010: '500560056160000',
		latitude: -32.719614243,
		longitude: -68.603043854,
		municipalityId: 1500
	},
	{
		id: 1898,
		name: 'EL RETAMO',
		uta2020: '500560056000028',
		uta2010: '500560056000028',
		latitude: -32.470096514,
		longitude: -67.379268536,
		municipalityId: 1500
	},
	{
		id: 1899,
		name: 'ESTACION KILOMETRO 976',
		uta2020: '500560056000034',
		uta2010: '500560056000034',
		latitude: -32.369623055,
		longitude: -68.219090154,
		municipalityId: 1500
	},
	{
		id: 1900,
		name: 'BARRIO LA PEGA',
		uta2020: '500560056040000',
		uta2010: '500560056040000',
		latitude: -32.812859004,
		longitude: -68.683537323,
		municipalityId: 1500
	},
	{
		id: 1901,
		name: 'BARRIO LOS OLIVOS',
		uta2020: '500560056070000',
		uta2010: '500560056070000',
		latitude: -32.697215573,
		longitude: -68.32955801,
		municipalityId: 1500
	},
	{
		id: 1902,
		name: 'EL RETIRO',
		uta2020: '500560056000029',
		uta2010: '500560056000029',
		latitude: -32.564445759,
		longitude: -67.806652362,
		municipalityId: 1500
	},
	{
		id: 1903,
		name: 'BARRIO VIRGEN DEL ROSARIO',
		uta2020: '500560056075000',
		uta2010: '500560056075000',
		latitude: -32.702759716,
		longitude: -68.31249219,
		municipalityId: 1500
	},
	{
		id: 1904,
		name: 'SAN MIGUEL',
		uta2020: '500560056000076',
		uta2010: '500560056000076',
		latitude: -32.295516968,
		longitude: -67.524353027,
		municipalityId: 1500
	},
	{
		id: 1905,
		name: 'BARRIO LA ESPERANZA',
		uta2020: '500560056110001',
		uta2010: '500560056110001',
		latitude: -32.673572861,
		longitude: -68.384080298,
		municipalityId: 1500
	},
	{
		id: 1906,
		name: '3 DE MAYO',
		uta2020: '500560056150000',
		uta2010: '500560056150000',
		latitude: -32.675527945,
		longitude: -68.646211303,
		municipalityId: 1500
	},
	{
		id: 1907,
		name: 'COSTA DE ARAUJO',
		uta2020: '500560056080000',
		uta2010: '500560056080000',
		latitude: -32.756894357,
		longitude: -68.408595187,
		municipalityId: 1500
	},
	{
		id: 1908,
		name: 'BARRIO LAGUNAS DE BARTOLUZZI',
		uta2020: '500560056050000',
		uta2010: '500560056050000',
		latitude: -32.611108867,
		longitude: -68.571474633,
		municipalityId: 1500
	},
	{
		id: 1909,
		name: 'EL FORZUDO',
		uta2020: '500560056000023',
		uta2010: '500560056000023',
		latitude: -32.602838626,
		longitude: -67.287811555,
		municipalityId: 1500
	},
	{
		id: 1910,
		name: 'LA POLVOSA',
		uta2020: '500560056000050',
		uta2010: '500560056000050',
		latitude: -32.692925935,
		longitude: -68.685752075,
		municipalityId: 1500
	},
	{
		id: 1911,
		name: 'SAN FRANCISCO',
		uta2020: '500560056000073',
		uta2010: '500560056000073',
		latitude: -32.594975605,
		longitude: -68.558213123,
		municipalityId: 1500
	},
	{
		id: 1912,
		name: 'LOS SAUCES',
		uta2020: '500560056000062',
		uta2010: '500560056000062',
		latitude: -32.297720415,
		longitude: -67.535042045,
		municipalityId: 1500
	},
	{
		id: 1913,
		name: 'EL PARAMILLO',
		uta2020: '500560056090000',
		uta2010: '500560056090000',
		latitude: -32.781308825,
		longitude: -68.533683093,
		municipalityId: 1500
	},
	{
		id: 1914,
		name: 'JOCOLI',
		uta2020: '500560056120000',
		uta2010: '500560056120000',
		latitude: -32.612541051,
		longitude: -68.679040897,
		municipalityId: 1500
	},
	{
		id: 1915,
		name: 'BARRIO ALTO DEL OLVIDO',
		uta2020: '500560056010000',
		uta2010: '500560056010000',
		latitude: -32.672779422,
		longitude: -68.592247377,
		municipalityId: 1500
	},
	{
		id: 1916,
		name: 'BARRIO JOCOLI II',
		uta2020: '500560056020000',
		uta2010: '500560056020000',
		latitude: -32.674079309,
		longitude: -68.669269621,
		municipalityId: 1500
	},
	{
		id: 1917,
		name: 'BARRIO LOS JARILLEROS',
		uta2020: '500560056060000',
		uta2010: '500560056060000',
		latitude: -32.715396574,
		longitude: -68.658402182,
		municipalityId: 1500
	},
	{
		id: 1918,
		name: 'LAGUNITA',
		uta2020: '500560056000053',
		uta2010: '500560056000053',
		latitude: -32.404121399,
		longitude: -67.513305664,
		municipalityId: 1500
	},
	{
		id: 1919,
		name: 'LA HOLANDA',
		uta2020: '500560056000048',
		uta2010: '500560056000048',
		latitude: -32.771697998,
		longitude: -68.580032349,
		municipalityId: 1500
	},
	{
		id: 1920,
		name: 'JOCOLI VIEJO',
		uta2020: '500560056130000',
		uta2010: '500560056130000',
		latitude: -32.727462342,
		longitude: -68.660231958,
		municipalityId: 1500
	},
	{
		id: 1921,
		name: 'CAPILLA DEL ROSARIO',
		uta2020: '500560056000012',
		uta2010: '500560056000012',
		latitude: -32.147569701,
		longitude: -68.194229088,
		municipalityId: 1500
	},
	{
		id: 1922,
		name: 'EL VERGEL',
		uta2020: '500560056100000',
		uta2010: '500560056100000',
		latitude: -32.762313222,
		longitude: -68.647601179,
		municipalityId: 1500
	},
	{
		id: 1923,
		name: 'BARRIO LA PALMERA',
		uta2020: '500560056030000',
		uta2010: '500560056030000',
		latitude: -32.696932827,
		longitude: -68.550621322,
		municipalityId: 1500
	},
	{
		id: 1924,
		name: 'PAMPAYASTA NORTE',
		uta2020: '141613155120000',
		uta2010: '141613155120000',
		latitude: -32.24168273,
		longitude: -63.642186874,
		municipalityId: 349
	},
	{
		id: 1925,
		name: 'CAMPO ASINARI',
		uta2020: '141613155000003',
		uta2010: '141613155000003',
		latitude: -32.2185332,
		longitude: -63.7033208,
		municipalityId: 349
	},
	{
		id: 1926,
		name: 'SAN PEDRO DE GUTEMBERG',
		uta2020: '141122756090000',
		uta2010: '141122756090000',
		latitude: -29.698228417,
		longitude: -63.561080947,
		municipalityId: 146
	},
	{
		id: 1927,
		name: 'GUTEMBERG',
		uta2020: '141122756040000',
		uta2010: '141122756040000',
		latitude: -29.722709249,
		longitude: -63.514995192,
		municipalityId: 146
	},
	{
		id: 1928,
		name: 'VILLA CATEDRAL',
		uta2020: '620210077080000',
		uta2010: '620210077080000',
		latitude: -41.166635126,
		longitude: -71.43757454,
		municipalityId: 1278
	},
	{
		id: 1929,
		name: 'COLONIA SUIZA',
		uta2020: '620210077020000',
		uta2010: '620210077020000',
		latitude: -41.094749736,
		longitude: -71.505527377,
		municipalityId: 1278
	},
	{
		id: 1930,
		name: 'SAN CARLOS DE BARILOCHE',
		uta2020: '620210077060000',
		uta2010: '620210077060000',
		latitude: -41.136928285,
		longitude: -71.29906454,
		municipalityId: 1278
	},
	{
		id: 1931,
		name: 'VILLA LOS COIHUES',
		uta2020: '620210077100000',
		uta2010: '620210077100000',
		latitude: -41.157579375,
		longitude: -71.413155861,
		municipalityId: 1278
	},
	{
		id: 1932,
		name: 'VILLA LLAO LLAO',
		uta2020: '620210077060003',
		uta2010: '620210077060003',
		latitude: -41.069760439,
		longitude: -71.539651354,
		municipalityId: 1278
	},
	{
		id: 1933,
		name: 'VILLA ARELAUQUEN',
		uta2020: '620210077005000',
		uta2010: '620210077005000',
		latitude: -41.170088108,
		longitude: -71.385111926,
		municipalityId: 1278
	},
	{
		id: 1934,
		name: 'BARRIO EL PILAR',
		uta2020: '620210077010000',
		uta2010: '620210077010000',
		latitude: -41.181420303,
		longitude: -71.349343771,
		municipalityId: 1278
	},
	{
		id: 1935,
		name: 'VILLA CAMPANARIO',
		uta2020: '620210077060002',
		uta2010: '620210077060002',
		latitude: -41.064970271,
		longitude: -71.47267368,
		municipalityId: 1278
	},
	{
		id: 1936,
		name: 'PENINSULA SAN PEDRO',
		uta2020: '620210077000018',
		uta2010: '620210077000018',
		latitude: -41.061188766,
		longitude: -71.489772664,
		municipalityId: 1278
	},
	{
		id: 1937,
		name: 'VILLA MARTTOS',
		uta2020: '540910399000036',
		uta2010: '540910399000036',
		latitude: -27.508067952,
		longitude: -55.128771871,
		municipalityId: 2116
	},
	{
		id: 1938,
		name: 'OBERA',
		uta2020: '540910399080000',
		uta2010: '540910399080000',
		latitude: -27.481655938,
		longitude: -55.125154693,
		municipalityId: 2116
	},
	{
		id: 1939,
		name: 'PICADA VIEJA',
		uta2020: '540910399000026',
		uta2010: '540910399000026',
		latitude: -27.430694644,
		longitude: -55.11072453,
		municipalityId: 2116
	},
	{
		id: 1940,
		name: 'GUAYABERA',
		uta2020: '540910399000012',
		uta2010: '540910399000012',
		latitude: -27.392909097,
		longitude: -55.122770418,
		municipalityId: 2116
	},
	{
		id: 1941,
		name: 'TRES ESQUINAS',
		uta2020: '540910399000032',
		uta2010: '540910399000032',
		latitude: -27.502087389,
		longitude: -55.126934254,
		municipalityId: 2116
	},
	{
		id: 1942,
		name: 'VILLA BARREYRO',
		uta2020: '540910399000034',
		uta2010: '540910399000034',
		latitude: -27.482090967,
		longitude: -55.102428567,
		municipalityId: 2116
	},
	{
		id: 1943,
		name: 'EL SALTO',
		uta2020: '540910399040000',
		uta2010: '540910399040000',
		latitude: -27.491733441,
		longitude: -55.198960808,
		municipalityId: 2116
	},
	{
		id: 1944,
		name: 'SAN FRANCISCO DE LAISHI',
		uta2020: '340210063040000',
		uta2010: '340210063040000',
		latitude: -26.242301025,
		longitude: -58.630064242,
		municipalityId: 2332
	},
	{
		id: 1945,
		name: 'LAGUNA GALLO',
		uta2020: '340429098030000',
		uta2010: '340429098030000',
		latitude: -25.267775283,
		longitude: -58.742794835,
		municipalityId: 2326
	},
	{
		id: 1946,
		name: 'POZO HONDO',
		uta2020: '860910105070000',
		uta2010: '860910105070000',
		latitude: -27.193792707,
		longitude: -64.439314088,
		municipalityId: 1431
	},
	{
		id: 1947,
		name: 'GENERAL FOTHERINGHAM',
		uta2020: '141613141050000',
		uta2010: '141613141050000',
		latitude: -32.323429584,
		longitude: -63.870425743,
		municipalityId: 350
	},
	{
		id: 1948,
		name: 'CAROLINA',
		uta2020: '740216035010000',
		uta2010: '740216035010000',
		latitude: -32.812857164,
		longitude: -66.093232758,
		municipalityId: 1101
	},
	{
		id: 1949,
		name: 'SALADERO CABAL',
		uta2020: '820352560000019',
		uta2010: '820352560000019',
		latitude: -30.900007464,
		longitude: -60.016594886,
		municipalityId: 1061
	},
	{
		id: 1950,
		name: 'SALADERO MARIANO CABAL',
		uta2020: '820352560040000',
		uta2010: '820352560040000',
		latitude: -30.922984997,
		longitude: -60.048115459,
		municipalityId: 1061
	},
	{
		id: 1951,
		name: 'EL LAUREL',
		uta2020: '820352560000006',
		uta2010: '820352560000006',
		latitude: -30.97300911,
		longitude: -60.063095093,
		municipalityId: 1061
	},
	{
		id: 1952,
		name: 'PASO DEL SAPO',
		uta2020: '260568070040000',
		uta2010: '260568070040000',
		latitude: -42.737110995,
		longitude: -69.611002088,
		municipalityId: 524
	},
	{
		id: 1953,
		name: 'LAS ROSAS',
		uta2020: '740286105000049',
		uta2010: '740286105000049',
		latitude: -32.602006,
		longitude: -65.05370603,
		municipalityId: 1122
	},
	{
		id: 1954,
		name: 'MINA LOS CONDORES',
		uta2020: '740286105000062',
		uta2010: '740286105000062',
		latitude: -32.627372875,
		longitude: -65.048807459,
		municipalityId: 1122
	},
	{
		id: 1955,
		name: 'SAN ANTONIO',
		uta2020: '740286105000078',
		uta2010: '740286105000078',
		latitude: -32.579120636,
		longitude: -64.989830017,
		municipalityId: 1122
	},
	{
		id: 1956,
		name: 'VILLA LARCA',
		uta2020: '740286105090000',
		uta2010: '740286105090000',
		latitude: -32.617543301,
		longitude: -64.980908754,
		municipalityId: 1122
	},
	{
		id: 1957,
		name: 'CUSHAMEN CENTRO',
		uta2020: '260148014030000',
		uta2010: '260148014030000',
		latitude: -42.176661103,
		longitude: -70.662618843,
		municipalityId: 545
	},
	{
		id: 1958,
		name: 'BARRIO LA BARDA',
		uta2020: '620420168180000',
		uta2010: '620420168180000',
		latitude: -39.049464802,
		longitude: -67.217793659,
		municipalityId: 1263
	},
	{
		id: 1959,
		name: 'BARRIO LA COSTA',
		uta2020: '620420168200000',
		uta2010: '620420168200000',
		latitude: -39.092345048,
		longitude: -67.200728187,
		municipalityId: 1263
	},
	{
		id: 1960,
		name: 'INGENIERO LUIS A. HUERGO',
		uta2020: '620420168460000',
		uta2010: '620420168460000',
		latitude: -39.071175747,
		longitude: -67.232887635,
		municipalityId: 1263
	},
	{
		id: 1961,
		name: 'KILOMETRO 101',
		uta2020: '820843372180000',
		uta2010: '820843372180000',
		latitude: -33.060584803,
		longitude: -60.685644012,
		municipalityId: 808
	},
	{
		id: 1962,
		name: 'MONTE FLORES',
		uta2020: '820843372200000',
		uta2010: '820843372200000',
		latitude: -33.080007399,
		longitude: -60.635522668,
		municipalityId: 808
	},
	{
		id: 1963,
		name: 'ARBILLA',
		uta2020: '820843372050000',
		uta2010: '820843372050000',
		latitude: -33.091951665,
		longitude: -60.699315932,
		municipalityId: 808
	},
	{
		id: 1964,
		name: 'ALVEAR',
		uta2020: '820843372040000',
		uta2010: '820843372040000',
		latitude: -33.06145847,
		longitude: -60.615976561,
		municipalityId: 808
	},
	{
		id: 1965,
		name: 'BARRIO LOMAS DE TAFI',
		uta2020: '901058616020000',
		uta2010: '901058616020000',
		latitude: -26.746581459,
		longitude: -65.233417403,
		municipalityId: 2252
	},
	{
		id: 1966,
		name: 'BARRIO LOS POCITOS (LAS TALITAS)',
		uta2020: '901058616000011',
		uta2010: '901058616000011',
		latitude: -26.754919606,
		longitude: -65.234303789,
		municipalityId: 2252
	},
	{
		id: 1967,
		name: 'LA AGUADITA',
		uta2020: '901058616000059',
		uta2010: '901058616000059',
		latitude: -26.73539409,
		longitude: -65.164603488,
		municipalityId: 2252
	},
	{
		id: 1968,
		name: 'BARRIO EL CRUCE',
		uta2020: '901058616010000',
		uta2010: '901058616010000',
		latitude: -26.708144178,
		longitude: -65.220081558,
		municipalityId: 2252
	},
	{
		id: 1969,
		name: 'BARRIO MUTUAL SAN MARTIN',
		uta2020: '901058616030000',
		uta2010: '901058616030000',
		latitude: -26.71801675,
		longitude: -65.224910937,
		municipalityId: 2252
	},
	{
		id: 1970,
		name: 'LOS NOGALES',
		uta2020: '901058616000079',
		uta2010: '901058616000079',
		latitude: -26.712934422,
		longitude: -65.218735282,
		municipalityId: 2252
	},
	{
		id: 1971,
		name: 'COLONIA EL DESTINO',
		uta2020: '420350413000006',
		uta2010: '420350413000006',
		latitude: -36.21609983,
		longitude: -64.60941881,
		municipalityId: 1941
	},
	{
		id: 1972,
		name: 'WINIFREDA',
		uta2020: '420350413060000',
		uta2010: '420350413060000',
		latitude: -36.22727414,
		longitude: -64.234876796,
		municipalityId: 1941
	},
	{
		id: 1973,
		name: 'BARRIO GASODUCTO',
		uta2020: '260210049030006',
		uta2010: '260210049030006',
		latitude: -45.793575686,
		longitude: -67.503963496,
		municipalityId: 562
	},
	{
		id: 1974,
		name: 'BARRIO MILITAR - AEROPUERTO MILITAR',
		uta2020: '260210049030010',
		uta2010: '260210049030010',
		latitude: -45.788020204,
		longitude: -67.466685949,
		municipalityId: 562
	},
	{
		id: 1975,
		name: 'BARRIO RESTINGA ALI',
		uta2020: '260210049030012',
		uta2010: '260210049030012',
		latitude: -45.793309527,
		longitude: -67.409786122,
		municipalityId: 562
	},
	{
		id: 1976,
		name: 'BARRIO MANANTIAL ROSALES',
		uta2020: '260210049030009',
		uta2010: '260210049030009',
		latitude: -45.817196236,
		longitude: -67.53840371,
		municipalityId: 562
	},
	{
		id: 1977,
		name: 'BARRIO CASTELLI',
		uta2020: '260210049030004',
		uta2010: '260210049030004',
		latitude: -45.818047202,
		longitude: -67.482028381,
		municipalityId: 562
	},
	{
		id: 1978,
		name: 'ASTRA',
		uta2020: '260210049010000',
		uta2010: '260210049010000',
		latitude: -45.736607546,
		longitude: -67.485214728,
		municipalityId: 562
	},
	{
		id: 1979,
		name: 'BARRIO CALETA CORDOVA',
		uta2020: '260210049030002',
		uta2010: '260210049030002',
		latitude: -45.748250856,
		longitude: -67.378650177,
		municipalityId: 562
	},
	{
		id: 1980,
		name: 'BARRIO CIUDADELA',
		uta2020: '260210049030005',
		uta2010: '260210049030005',
		latitude: -45.796933516,
		longitude: -67.503853799,
		municipalityId: 562
	},
	{
		id: 1981,
		name: 'COMODORO RIVADAVIA',
		uta2020: '260210049030018',
		uta2010: '260210049030018',
		latitude: -45.872984678,
		longitude: -67.543055998,
		municipalityId: 562
	},
	{
		id: 1982,
		name: 'BARRIO PROSPERO PALAZZO',
		uta2020: '260210049030011',
		uta2010: '260210049030011',
		latitude: -45.795420585,
		longitude: -67.472832044,
		municipalityId: 562
	},
	{
		id: 1983,
		name: 'BARRIO GÜEMES',
		uta2020: '260210049030007',
		uta2010: '260210049030007',
		latitude: -45.821712332,
		longitude: -67.4921205,
		municipalityId: 562
	},
	{
		id: 1984,
		name: 'KM. 11 - CUARTELES',
		uta2020: '260210049030021',
		uta2010: '260210049030021',
		latitude: -45.770767961,
		longitude: -67.435804674,
		municipalityId: 562
	},
	{
		id: 1985,
		name: 'DIADEMA ARGENTINA',
		uta2020: '260210049040000',
		uta2010: '260210049040000',
		latitude: -45.790608916,
		longitude: -67.673892573,
		municipalityId: 562
	},
	{
		id: 1986,
		name: 'BARRIO LAPRIDA',
		uta2020: '260210049030008',
		uta2010: '260210049030008',
		latitude: -45.828680617,
		longitude: -67.542917581,
		municipalityId: 562
	},
	{
		id: 1987,
		name: 'BARRIO RODRIGUEZ PEÑA',
		uta2020: '260210049030013',
		uta2010: '260210049030013',
		latitude: -45.804208486,
		longitude: -67.485501664,
		municipalityId: 562
	},
	{
		id: 1988,
		name: 'BARRIO VILLA S.U.P.E.',
		uta2020: '260210049030017',
		uta2010: '260210049030017',
		latitude: -45.836738026,
		longitude: -67.502111203,
		municipalityId: 562
	},
	{
		id: 1989,
		name: 'BARRIO SAAVEDRA',
		uta2020: '260210049030014',
		uta2010: '260210049030014',
		latitude: -45.845530762,
		longitude: -67.514585299,
		municipalityId: 562
	},
	{
		id: 1990,
		name: 'KM. 8 - DON BOSCO',
		uta2020: '260210049030020',
		uta2010: '260210049030020',
		latitude: -45.798898239,
		longitude: -67.431497023,
		municipalityId: 562
	},
	{
		id: 1991,
		name: 'BARRIO SARMIENTO',
		uta2020: '260210049030015',
		uta2010: '260210049030015',
		latitude: -45.819133352,
		longitude: -67.502587141,
		municipalityId: 562
	},
	{
		id: 1992,
		name: 'ACCESO NORTE',
		uta2020: '260210049030001',
		uta2010: '260210049030001',
		latitude: -45.782807332,
		longitude: -67.503336787,
		municipalityId: 562
	},
	{
		id: 1993,
		name: 'BARRIO CALETA OLIVARES',
		uta2020: '260210049030003',
		uta2010: '260210049030003',
		latitude: -45.775727487,
		longitude: -67.389560939,
		municipalityId: 562
	},
	{
		id: 1994,
		name: 'KM. 5 - PRESIDENTE ORTIZ',
		uta2020: '260210049030019',
		uta2010: '260210049030019',
		latitude: -45.787552279,
		longitude: -67.469573624,
		municipalityId: 562
	},
	{
		id: 1995,
		name: 'KM. 3 - GENERAL MOSCONI',
		uta2020: '260210049030022',
		uta2010: '260210049030022',
		latitude: -45.831828125,
		longitude: -67.491709642,
		municipalityId: 562
	},
	{
		id: 1996,
		name: 'BARRIO 25 DE MAYO',
		uta2020: '260210049030016',
		uta2010: '260210049030016',
		latitude: -45.824845463,
		longitude: -67.461649599,
		municipalityId: 562
	},
	{
		id: 1997,
		name: 'PARERA',
		uta2020: '421260273040000',
		uta2010: '421260273040000',
		latitude: -35.146293075,
		longitude: -64.500649123,
		municipalityId: 1946
	},
	{
		id: 1998,
		name: 'CAMET',
		uta2020: '063570357110001',
		uta2010: '063570357110001',
		latitude: -37.913076391,
		longitude: -57.552463852,
		municipalityId: 601
	},
	{
		id: 1999,
		name: 'SANTA ISABEL',
		uta2020: '063570357000024',
		uta2010: '063570357000024',
		latitude: -38.1317989,
		longitude: -57.7427587,
		municipalityId: 601
	},
	{
		id: 2000,
		name: 'SIERRA DE LOS PADRES',
		uta2020: '063570357120004',
		uta2010: '063570357120004',
		latitude: -37.950485069,
		longitude: -57.777469663,
		municipalityId: 601
	},
	{
		id: 2001,
		name: 'BARRIO SANTA  PAULA',
		uta2020: '063570357060000',
		uta2010: '063570357060000',
		latitude: -37.931715784,
		longitude: -57.683162033,
		municipalityId: 601
	},
	{
		id: 2002,
		name: 'LAGUNA DE LOS PADRES',
		uta2020: '063570357000013',
		uta2010: '063570357000013',
		latitude: -37.9309012,
		longitude: -57.7077287,
		municipalityId: 601
	},
	{
		id: 2003,
		name: 'ESTACION CAMET',
		uta2020: '063570357110002',
		uta2010: '063570357110002',
		latitude: -37.888665237,
		longitude: -57.60001215,
		municipalityId: 601
	},
	{
		id: 2004,
		name: 'LA BRAVA',
		uta2020: '063570357000010',
		uta2010: '063570357000010',
		latitude: -37.899272921,
		longitude: -57.975807221,
		municipalityId: 601
	},
	{
		id: 2005,
		name: 'EL DORADO',
		uta2020: '063570357000005',
		uta2010: '063570357000005',
		latitude: -37.868770599,
		longitude: -57.935932159,
		municipalityId: 601
	},
	{
		id: 2006,
		name: 'BARRIO EL CASAL',
		uta2020: '063570357110005',
		uta2010: '063570357110005',
		latitude: -37.832414523,
		longitude: -57.631115547,
		municipalityId: 601
	},
	{
		id: 2007,
		name: 'COLONIA BARRAGAN',
		uta2020: '063570357000002',
		uta2010: '063570357000002',
		latitude: -37.807662538,
		longitude: -57.629890858,
		municipalityId: 601
	},
	{
		id: 2008,
		name: 'ESTACION CHAPADMALAL',
		uta2020: '063570357100000',
		uta2010: '063570357100000',
		latitude: -38.036727731,
		longitude: -57.71298974,
		municipalityId: 601
	},
	{
		id: 2009,
		name: 'LOMA ALTA',
		uta2020: '063570357000017',
		uta2010: '063570357000017',
		latitude: -37.891760503,
		longitude: -57.716819657,
		municipalityId: 601
	},
	{
		id: 2010,
		name: 'LA PEREGRINA',
		uta2020: '063570357000012',
		uta2010: '063570357000012',
		latitude: -37.938438416,
		longitude: -57.803955078,
		municipalityId: 601
	},
	{
		id: 2011,
		name: 'LAS DOS MARIAS',
		uta2020: '063570357000015',
		uta2010: '063570357000015',
		latitude: -38.013341179,
		longitude: -57.661920284,
		municipalityId: 601
	},
	{
		id: 2012,
		name: 'MAR DEL PLATA',
		uta2020: '063570357110003',
		uta2010: '063570357110003',
		latitude: -38.012091478,
		longitude: -57.606494715,
		municipalityId: 601
	},
	{
		id: 2013,
		name: 'QUINTAS DE PERALTA RAMOS',
		uta2020: '063570357000022',
		uta2010: '063570357000022',
		latitude: -38.08521268,
		longitude: -57.632349598,
		municipalityId: 601
	},
	{
		id: 2014,
		name: 'BARRIO LA GLORIA',
		uta2020: '063570357050000',
		uta2010: '063570357050000',
		latitude: -37.90682683,
		longitude: -57.785886064,
		municipalityId: 601
	},
	{
		id: 2015,
		name: 'CHAPADMALAL',
		uta2020: '063570357080000',
		uta2010: '063570357080000',
		latitude: -38.175777928,
		longitude: -57.651339,
		municipalityId: 601
	},
	{
		id: 2016,
		name: 'LAS HERMANAS',
		uta2020: '063570357000016',
		uta2010: '063570357000016',
		latitude: -37.8110691,
		longitude: -57.8448886,
		municipalityId: 601
	},
	{
		id: 2017,
		name: 'BARRIO EL COYUNCO',
		uta2020: '063570357120002',
		uta2010: '063570357120002',
		latitude: -37.905081014,
		longitude: -57.739182409,
		municipalityId: 601
	},
	{
		id: 2018,
		name: 'EL SIGLO',
		uta2020: '063570357000006',
		uta2010: '063570357000006',
		latitude: -37.9927475,
		longitude: -57.922082,
		municipalityId: 601
	},
	{
		id: 2019,
		name: 'BARRIO COLINAS VERDES',
		uta2020: '063570357120001',
		uta2010: '063570357120001',
		latitude: -37.893102479,
		longitude: -57.826164564,
		municipalityId: 601
	},
	{
		id: 2020,
		name: 'BARRIO EL BOQUERON',
		uta2020: '063570357020000',
		uta2010: '063570357020000',
		latitude: -38.029722916,
		longitude: -57.799548505,
		municipalityId: 601
	},
	{
		id: 2021,
		name: 'BATAN',
		uta2020: '063570357070000',
		uta2010: '063570357070000',
		latitude: -38.008621156,
		longitude: -57.70855004,
		municipalityId: 601
	},
	{
		id: 2022,
		name: 'EL MARQUESADO',
		uta2020: '063570357090000',
		uta2010: '063570357090000',
		latitude: -38.236931252,
		longitude: -57.763418078,
		municipalityId: 601
	},
	{
		id: 2023,
		name: 'PUNTA MOGOTES',
		uta2020: '063570357110004',
		uta2010: '063570357110004',
		latitude: -38.083377429,
		longitude: -57.585935094,
		municipalityId: 601
	},
	{
		id: 2024,
		name: 'SAN JOSE DE CHIJRA',
		uta2020: '380210035000077',
		uta2010: '380210035000077',
		latitude: -24.1587721,
		longitude: -65.29728933,
		municipalityId: 1195
	},
	{
		id: 2025,
		name: 'TERMAS DE REYES',
		uta2020: '380210035000079',
		uta2010: '380210035000079',
		latitude: -24.17034952,
		longitude: -65.48924539,
		municipalityId: 1195
	},
	{
		id: 2026,
		name: 'SAN SALVADOR DE JUJUY',
		uta2020: '380210035060000',
		uta2010: '380210035060000',
		latitude: -24.195357794,
		longitude: -65.302450637,
		municipalityId: 1195
	},
	{
		id: 2027,
		name: 'GUERRERO',
		uta2020: '380210035010000',
		uta2010: '380210035010000',
		latitude: -24.186182803,
		longitude: -65.444631252,
		municipalityId: 1195
	},
	{
		id: 2028,
		name: 'LA ALMONA',
		uta2020: '380210035020000',
		uta2010: '380210035020000',
		latitude: -24.260753823,
		longitude: -65.395737692,
		municipalityId: 1195
	},
	{
		id: 2029,
		name: 'REYES',
		uta2020: '380210035000074',
		uta2010: '380210035000074',
		latitude: -24.161814902,
		longitude: -65.380857488,
		municipalityId: 1195
	},
	{
		id: 2030,
		name: 'JUAN GALAN',
		uta2020: '380210035000035',
		uta2010: '380210035000035',
		latitude: -24.216997147,
		longitude: -65.386985779,
		municipalityId: 1195
	},
	{
		id: 2031,
		name: 'TILQUIZA',
		uta2020: '380210035000080',
		uta2010: '380210035000080',
		latitude: -24.07627356,
		longitude: -65.27857992,
		municipalityId: 1195
	},
	{
		id: 2032,
		name: 'BALDE DE LA PAMPA',
		uta2020: '100840189000001',
		uta2010: '100840189000001',
		latitude: -28.33781745,
		longitude: -66.54987231,
		municipalityId: 1901
	},
	{
		id: 2033,
		name: 'POMAN',
		uta2020: '100840189070000',
		uta2010: '100840189070000',
		latitude: -28.392780115,
		longitude: -66.2220824,
		municipalityId: 1901
	},
	{
		id: 2034,
		name: 'EL PAJONAL',
		uta2020: '100840189040000',
		uta2010: '100840189040000',
		latitude: -28.377314849,
		longitude: -66.301709265,
		municipalityId: 1901
	},
	{
		id: 2035,
		name: 'LOS CIENAGOS',
		uta2020: '100840189000019',
		uta2010: '100840189000019',
		latitude: -28.48496,
		longitude: -66.16788,
		municipalityId: 1901
	},
	{
		id: 2036,
		name: 'PORTEÑA',
		uta2020: '141401316330000',
		uta2010: '141401316330000',
		latitude: -31.013921147,
		longitude: -62.0633288,
		municipalityId: 399
	},
	{
		id: 2037,
		name: 'CEVIL POZO',
		uta2020: '900148084000026',
		uta2010: '900148084000026',
		latitude: -26.85468,
		longitude: -65.12602,
		municipalityId: 2171
	},
	{
		id: 2038,
		name: 'EX INGENIO LUJAN',
		uta2020: '900148084060003',
		uta2010: '900148084060003',
		latitude: -26.85416706,
		longitude: -65.091519995,
		municipalityId: 2171
	},
	{
		id: 2039,
		name: 'BARRIO AEROPUERTO',
		uta2020: '900148084020002',
		uta2010: '900148084020002',
		latitude: -26.849877949,
		longitude: -65.129313729,
		municipalityId: 2171
	},
	{
		id: 2040,
		name: 'COLONIA LA BONARIA',
		uta2020: '900148084000039',
		uta2010: '900148084000039',
		latitude: -26.8701,
		longitude: -65.03775,
		municipalityId: 2171
	},
	{
		id: 2041,
		name: 'EL COLORADO',
		uta2020: '340560224020000',
		uta2010: '340560224020000',
		latitude: -26.311735464,
		longitude: -59.368443468,
		municipalityId: 2320
	},
	{
		id: 2042,
		name: 'EL CHARCO',
		uta2020: '860916161020000',
		uta2010: '860916161020000',
		latitude: -27.261711295,
		longitude: -64.653897342,
		municipalityId: 1432
	},
	{
		id: 2043,
		name: 'PUEBLO CLODOMIRO DIAZ',
		uta2020: '220980322000040',
		uta2010: '220980322000040',
		latitude: -27.63381406,
		longitude: -60.793422896,
		municipalityId: 11
	},
	{
		id: 2044,
		name: 'COLONIA LA CHAQUEÑA',
		uta2020: '220980322000005',
		uta2010: '220980322000005',
		latitude: -27.51000661,
		longitude: -60.67067559,
		municipalityId: 11
	},
	{
		id: 2045,
		name: 'COLONIA PEGOURIEL',
		uta2020: '220980322000007',
		uta2010: '220980322000007',
		latitude: -27.617472743,
		longitude: -60.811283461,
		municipalityId: 11
	},
	{
		id: 2046,
		name: 'MESON DE FIERRO',
		uta2020: '220980322000039',
		uta2010: '220980322000039',
		latitude: -27.465782684,
		longitude: -60.923501657,
		municipalityId: 11
	},
	{
		id: 2047,
		name: 'LOTE 11',
		uta2020: '220980322000032',
		uta2010: '220980322000032',
		latitude: -27.953332998,
		longitude: -60.649045843,
		municipalityId: 11
	},
	{
		id: 2048,
		name: 'LOTE 88',
		uta2020: '220980322000037',
		uta2010: '220980322000037',
		latitude: -27.508823778,
		longitude: -60.751171544,
		municipalityId: 11
	},
	{
		id: 2049,
		name: 'EL PASTORIL',
		uta2020: '220980322000011',
		uta2010: '220980322000011',
		latitude: -27.61970862,
		longitude: -60.75385525,
		municipalityId: 11
	},
	{
		id: 2050,
		name: 'COLONIA JUAN JOSE PASO',
		uta2020: '220980322000003',
		uta2010: '220980322000003',
		latitude: -27.490074561,
		longitude: -60.875940317,
		municipalityId: 11
	},
	{
		id: 2051,
		name: 'LOTE 20',
		uta2020: '220980322000034',
		uta2010: '220980322000034',
		latitude: -27.559678499,
		longitude: -60.698913323,
		municipalityId: 11
	},
	{
		id: 2052,
		name: 'VILLA ANGELA',
		uta2020: '220980322030000',
		uta2010: '220980322030000',
		latitude: -27.578859243,
		longitude: -60.714112007,
		municipalityId: 11
	},
	{
		id: 2053,
		name: 'KILOMETRO 691',
		uta2020: '141050917000048',
		uta2010: '141050917000048',
		latitude: -31.323035329,
		longitude: -63.856128743,
		municipalityId: 251
	},
	{
		id: 2054,
		name: 'MONTECRISTO',
		uta2020: '141050917190000',
		uta2010: '141050917190000',
		latitude: -31.343853871,
		longitude: -63.945773558,
		municipalityId: 251
	},
	{
		id: 2055,
		name: 'MEDIA LUNA SUR',
		uta2020: '141050917000089',
		uta2010: '141050917000089',
		latitude: -31.25599193,
		longitude: -63.883573972,
		municipalityId: 251
	},
	{
		id: 2056,
		name: 'RINCON DEL QUEBRACHO',
		uta2020: '820913673000054',
		uta2010: '820913673000054',
		latitude: -30.7124095,
		longitude: -60.6588438,
		municipalityId: 837
	},
	{
		id: 2057,
		name: 'VILLA SARALEGUI',
		uta2020: '820913673270000',
		uta2010: '820913673270000',
		latitude: -30.542702788,
		longitude: -60.747710262,
		municipalityId: 837
	},
	{
		id: 2058,
		name: 'PETRONILA',
		uta2020: '820913673000015',
		uta2010: '820913673000015',
		latitude: -30.6563874,
		longitude: -60.6625313,
		municipalityId: 837
	},
	{
		id: 2059,
		name: 'MARIA EUGENIA',
		uta2020: '820913673000012',
		uta2010: '820913673000012',
		latitude: -30.481723,
		longitude: -60.8744605,
		municipalityId: 837
	},
	{
		id: 2060,
		name: 'VILLAGUAY',
		uta2020: '301130490080000',
		uta2010: '301130490080000',
		latitude: -31.865441374,
		longitude: -59.029062835,
		municipalityId: 1657
	},
	{
		id: 2061,
		name: 'POZANCONES',
		uta2020: '860630000000120',
		uta2010: '860630000000120',
		latitude: -28.854589462,
		longitude: -64.83126831,
		municipalityId: 1476
	},
	{
		id: 2062,
		name: 'SAN JUAN',
		uta2020: '860630000000147',
		uta2010: '860630000000147',
		latitude: -28.602878826,
		longitude: -64.74149006,
		municipalityId: 1476
	},
	{
		id: 2063,
		name: 'LA VUELTA',
		uta2020: '860630000000088',
		uta2010: '860630000000088',
		latitude: -29.048887445,
		longitude: -64.731311599,
		municipalityId: 1476
	},
	{
		id: 2064,
		name: 'SHISHI POZO',
		uta2020: '860630000000173',
		uta2010: '860630000000173',
		latitude: -28.552364349,
		longitude: -64.616439819,
		municipalityId: 1476
	},
	{
		id: 2065,
		name: '25 DE MAYO DE BANEGAS',
		uta2020: '860630000000002',
		uta2010: '860630000000002',
		latitude: -28.59477,
		longitude: -64.66479,
		municipalityId: 1476
	},
	{
		id: 2066,
		name: 'MONTE REDONDO',
		uta2020: '860630000000111',
		uta2010: '860630000000111',
		latitude: -28.564114688,
		longitude: -64.983612973,
		municipalityId: 1476
	},
	{
		id: 2067,
		name: 'SAN DELFIN',
		uta2020: '860630000000143',
		uta2010: '860630000000143',
		latitude: -29.038761139,
		longitude: -64.737815857,
		municipalityId: 1476
	},
	{
		id: 2068,
		name: 'PICHANA',
		uta2020: '860630000000117',
		uta2010: '860630000000117',
		latitude: -28.37181282,
		longitude: -64.82674408,
		municipalityId: 1476
	},
	{
		id: 2069,
		name: 'SOL DE MAYO',
		uta2020: '860630000000176',
		uta2010: '860630000000176',
		latitude: -28.28136223,
		longitude: -64.7724744,
		municipalityId: 1476
	},
	{
		id: 2070,
		name: 'ALTO BELLO',
		uta2020: '860630000000005',
		uta2010: '860630000000005',
		latitude: -28.239044189,
		longitude: -64.829841614,
		municipalityId: 1476
	},
	{
		id: 2071,
		name: 'SAN PEDRO',
		uta2020: '860630000070000',
		uta2010: '860630000070000',
		latitude: -28.469252807,
		longitude: -64.789164215,
		municipalityId: 1476
	},
	{
		id: 2072,
		name: 'SAN ANTONIO',
		uta2020: '860630000000138',
		uta2010: '860630000000138',
		latitude: -28.67345047,
		longitude: -64.635108948,
		municipalityId: 1476
	},
	{
		id: 2073,
		name: 'ESTACION LA PUNTA',
		uta2020: '860630000030000',
		uta2010: '860630000030000',
		latitude: -28.433698581,
		longitude: -64.66303903,
		municipalityId: 1476
	},
	{
		id: 2074,
		name: 'EL QUEBRACHO',
		uta2020: '860630000000041',
		uta2010: '860630000000041',
		latitude: -29.208843518,
		longitude: -64.708985966,
		municipalityId: 1476
	},
	{
		id: 2075,
		name: 'ANCAJAN',
		uta2020: '860630000010000',
		uta2010: '860630000010000',
		latitude: -28.443597581,
		longitude: -64.862205198,
		municipalityId: 1476
	},
	{
		id: 2076,
		name: 'LOS RALOS',
		uta2020: '860630000000104',
		uta2010: '860630000000104',
		latitude: -28.535498842,
		longitude: -64.993682454,
		municipalityId: 1476
	},
	{
		id: 2077,
		name: 'EL SALVADOR',
		uta2020: '860630000000047',
		uta2010: '860630000000047',
		latitude: -28.963262391,
		longitude: -64.576198389,
		municipalityId: 1476
	},
	{
		id: 2078,
		name: 'RUMI ESQUINA',
		uta2020: '860630000000136',
		uta2010: '860630000000136',
		latitude: -28.449928284,
		longitude: -65.065818787,
		municipalityId: 1476
	},
	{
		id: 2079,
		name: 'LA AURORA',
		uta2020: '860630000000072',
		uta2010: '860630000000072',
		latitude: -28.752338409,
		longitude: -64.881080627,
		municipalityId: 1476
	},
	{
		id: 2080,
		name: 'SAN JUSTO',
		uta2020: '860630000000149',
		uta2010: '860630000000149',
		latitude: -28.19581,
		longitude: -64.69992,
		municipalityId: 1476
	},
	{
		id: 2081,
		name: 'MONTE PAMPA',
		uta2020: '860630000000110',
		uta2010: '860630000000110',
		latitude: -28.333650589,
		longitude: -64.771308899,
		municipalityId: 1476
	},
	{
		id: 2082,
		name: '25 DE MAYO',
		uta2020: '860630000000001',
		uta2010: '860630000000001',
		latitude: -28.599575043,
		longitude: -64.665016174,
		municipalityId: 1476
	},
	{
		id: 2083,
		name: 'LA LAGUNA',
		uta2020: '860630000000079',
		uta2010: '860630000000079',
		latitude: -28.269712448,
		longitude: -64.669792175,
		municipalityId: 1476
	},
	{
		id: 2084,
		name: 'KILOMETRO 55',
		uta2020: '860630000000070',
		uta2010: '860630000000070',
		latitude: -28.39534,
		longitude: -64.66931,
		municipalityId: 1476
	},
	{
		id: 2085,
		name: 'CERRO CHICO',
		uta2020: '860630000000017',
		uta2010: '860630000000017',
		latitude: -28.975947394,
		longitude: -64.69899156,
		municipalityId: 1476
	},
	{
		id: 2086,
		name: 'PUERTA DE CHAVEZ',
		uta2020: '860630000000126',
		uta2010: '860630000000126',
		latitude: -28.313838791,
		longitude: -64.588445392,
		municipalityId: 1476
	},
	{
		id: 2087,
		name: 'PALO PARADO',
		uta2020: '860630000000114',
		uta2010: '860630000000114',
		latitude: -28.699678421,
		longitude: -64.96295929,
		municipalityId: 1476
	},
	{
		id: 2088,
		name: 'VIVA MERCEDES',
		uta2020: '860630000000185',
		uta2010: '860630000000185',
		latitude: -28.470759388,
		longitude: -64.722342908,
		municipalityId: 1476
	},
	{
		id: 2089,
		name: 'LAS BARRANCAS',
		uta2020: '860630000000090',
		uta2010: '860630000000090',
		latitude: -28.525053024,
		longitude: -64.676795959,
		municipalityId: 1476
	},
	{
		id: 2090,
		name: 'LAS TEJAS',
		uta2020: '860630000000099',
		uta2010: '860630000000099',
		latitude: -28.763599396,
		longitude: -64.817840576,
		municipalityId: 1476
	},
	{
		id: 2091,
		name: 'POZO DEL SIMBOL',
		uta2020: '860630000000124',
		uta2010: '860630000000124',
		latitude: -28.28095,
		longitude: -64.52768,
		municipalityId: 1476
	},
	{
		id: 2092,
		name: 'SANTA CRUZ',
		uta2020: '860630000000164',
		uta2010: '860630000000164',
		latitude: -28.81429085,
		longitude: -64.695786013,
		municipalityId: 1476
	},
	{
		id: 2093,
		name: 'VILLA ADELA',
		uta2020: '860630000000182',
		uta2010: '860630000000182',
		latitude: -29.319292069,
		longitude: -64.799232483,
		municipalityId: 1476
	},
	{
		id: 2094,
		name: 'EL PUESTITO',
		uta2020: '860630000000039',
		uta2010: '860630000000039',
		latitude: -28.27024,
		longitude: -64.84244,
		municipalityId: 1476
	},
	{
		id: 2095,
		name: 'LAS LOMITAS',
		uta2020: '860630000000094',
		uta2010: '860630000000094',
		latitude: -28.575340271,
		longitude: -64.741172791,
		municipalityId: 1476
	},
	{
		id: 2096,
		name: 'LA REPRESA',
		uta2020: '860630000000085',
		uta2010: '860630000000085',
		latitude: -28.29752,
		longitude: -64.86338,
		municipalityId: 1476
	},
	{
		id: 2097,
		name: 'SAN RAFAEL',
		uta2020: '860630000000157',
		uta2010: '860630000000157',
		latitude: -28.17599,
		longitude: -64.64739,
		municipalityId: 1476
	},
	{
		id: 2098,
		name: 'LA TUSCA',
		uta2020: '860630000000086',
		uta2010: '860630000000086',
		latitude: -28.534856796,
		longitude: -65.000343323,
		municipalityId: 1476
	},
	{
		id: 2099,
		name: 'EL DESMONTE',
		uta2020: '860630000000032',
		uta2010: '860630000000032',
		latitude: -28.5629215,
		longitude: -64.62461427,
		municipalityId: 1476
	},
	{
		id: 2100,
		name: 'SOBREMONTE',
		uta2020: '860630000000175',
		uta2010: '860630000000175',
		latitude: -28.680684759,
		longitude: -64.75846242,
		municipalityId: 1476
	},
	{
		id: 2101,
		name: 'EL CANARIO',
		uta2020: '860630000000029',
		uta2010: '860630000000029',
		latitude: -28.712617874,
		longitude: -64.709129334,
		municipalityId: 1476
	},
	{
		id: 2102,
		name: 'SANTA LUCIA',
		uta2020: '860630000000168',
		uta2010: '860630000000168',
		latitude: -28.745275497,
		longitude: -64.689147949,
		municipalityId: 1476
	},
	{
		id: 2103,
		name: 'PUNTA DEL MONTE',
		uta2020: '860630000000131',
		uta2010: '860630000000131',
		latitude: -28.285287857,
		longitude: -64.63293457,
		municipalityId: 1476
	},
	{
		id: 2104,
		name: 'SAN MIGUEL',
		uta2020: '860630000000153',
		uta2010: '860630000000153',
		latitude: -28.980190277,
		longitude: -64.711982727,
		municipalityId: 1476
	},
	{
		id: 2105,
		name: 'POZO DE LA PUERTA',
		uta2020: '860630000000122',
		uta2010: '860630000000122',
		latitude: -28.542509079,
		longitude: -65.07875824,
		municipalityId: 1476
	},
	{
		id: 2106,
		name: 'EL MILAGRO',
		uta2020: '860630000000036',
		uta2010: '860630000000036',
		latitude: -29.12351799,
		longitude: -64.810264587,
		municipalityId: 1476
	},
	{
		id: 2107,
		name: 'LAS PALMITAS',
		uta2020: '860630000000095',
		uta2010: '860630000000095',
		latitude: -28.637235641,
		longitude: -64.985740662,
		municipalityId: 1476
	},
	{
		id: 2108,
		name: 'LA NEGRA',
		uta2020: '821123967000035',
		uta2010: '821123967000035',
		latitude: -30.0995961,
		longitude: -60.4496565,
		municipalityId: 1013
	},
	{
		id: 2109,
		name: 'LA CABAÑA',
		uta2020: '821123967000026',
		uta2010: '821123967000026',
		latitude: -30.173342,
		longitude: -60.2563139,
		municipalityId: 1013
	},
	{
		id: 2110,
		name: 'VERA Y PINTADO',
		uta2020: '821123967160000',
		uta2010: '821123967160000',
		latitude: -30.143642579,
		longitude: -60.337353055,
		municipalityId: 1013
	},
	{
		id: 2111,
		name: 'CAPITAN GENERAL BERNARDO O`HIGGINS',
		uta2020: '140630497040000',
		uta2010: '140630497040000',
		latitude: -33.247202805,
		longitude: -62.269738359,
		municipalityId: 186
	},
	{
		id: 2112,
		name: 'SAN MARTIN I',
		uta2020: '340359091130000',
		uta2010: '340359091130000',
		latitude: -24.531905301,
		longitude: -59.90205123,
		municipalityId: 2292
	},
	{
		id: 2113,
		name: 'GOBERNADOR COSTA',
		uta2020: '260980147020000',
		uta2010: '260980147020000',
		latitude: -44.052982606,
		longitude: -70.597920256,
		municipalityId: 558
	},
	{
		id: 2114,
		name: 'LUIS PALACIOS',
		uta2020: '821194002070000',
		uta2010: '821194002070000',
		latitude: -32.784870423,
		longitude: -60.907637961,
		municipalityId: 1066
	},
	{
		id: 2115,
		name: 'LAS TOSCAS',
		uta2020: '141262875000063',
		uta2010: '141262875000063',
		latitude: -31.854927457,
		longitude: -65.492127946,
		municipalityId: 384
	},
	{
		id: 2116,
		name: 'SAN RAFAEL',
		uta2020: '141262875000092',
		uta2010: '141262875000092',
		latitude: -31.834878445,
		longitude: -65.549874089,
		municipalityId: 384
	},
	{
		id: 2117,
		name: 'SANTA MARIA',
		uta2020: '141262875000095',
		uta2010: '141262875000095',
		latitude: -31.90529997,
		longitude: -65.438065967,
		municipalityId: 384
	},
	{
		id: 2118,
		name: 'BALDE DE LA MORA',
		uta2020: '141262875000008',
		uta2010: '141262875000008',
		latitude: -31.801065147,
		longitude: -65.691078845,
		municipalityId: 384
	},
	{
		id: 2119,
		name: 'SAN MIGUEL',
		uta2020: '141262875000091',
		uta2010: '141262875000091',
		latitude: -31.765654121,
		longitude: -65.416887474,
		municipalityId: 384
	},
	{
		id: 2120,
		name: 'LA LINEA',
		uta2020: '141262875000051',
		uta2010: '141262875000051',
		latitude: -31.907220003,
		longitude: -65.506027738,
		municipalityId: 384
	},
	{
		id: 2121,
		name: 'SAN VICENTE',
		uta2020: '141262875170000',
		uta2010: '141262875170000',
		latitude: -31.854984652,
		longitude: -65.430449983,
		municipalityId: 384
	},
	{
		id: 2122,
		name: 'LA REDUCCION',
		uta2020: '141262875000055',
		uta2010: '141262875000055',
		latitude: -31.830566122,
		longitude: -65.578375822,
		municipalityId: 384
	},
	{
		id: 2123,
		name: 'EL CADILLO',
		uta2020: '141262875000026',
		uta2010: '141262875000026',
		latitude: -31.880912781,
		longitude: -65.77318573,
		municipalityId: 384
	},
	{
		id: 2124,
		name: 'PUERTO SAN ISIDRO',
		uta2020: '540350126000015',
		uta2010: '540350126000015',
		latitude: -28.008006445,
		longitude: -55.442124228,
		municipalityId: 2135
	},
	{
		id: 2125,
		name: 'BARRA CONCEPCION',
		uta2020: '540350126010000',
		uta2010: '540350126010000',
		latitude: -28.110952203,
		longitude: -55.582004814,
		municipalityId: 2135
	},
	{
		id: 2126,
		name: 'SAN ISIDRO',
		uta2020: '540350126000017',
		uta2010: '540350126000017',
		latitude: -28.034402847,
		longitude: -55.411594391,
		municipalityId: 2135
	},
	{
		id: 2127,
		name: 'CONCEPCION DE LA SIERRA',
		uta2020: '540350126020000',
		uta2010: '540350126020000',
		latitude: -27.98131556,
		longitude: -55.520934306,
		municipalityId: 2135
	},
	{
		id: 2128,
		name: 'PUERTO SAN LUCAS',
		uta2020: '540350126000016',
		uta2010: '540350126000016',
		latitude: -28.03328294,
		longitude: -55.489131397,
		municipalityId: 2135
	},
	{
		id: 2129,
		name: 'CIEN HECTAREAS',
		uta2020: '540350126000007',
		uta2010: '540350126000007',
		latitude: -27.98794926,
		longitude: -55.52528322,
		municipalityId: 2135
	},
	{
		id: 2130,
		name: 'EL TIGRE',
		uta2020: '540350126000009',
		uta2010: '540350126000009',
		latitude: -27.943964613,
		longitude: -55.484023838,
		municipalityId: 2135
	},
	{
		id: 2131,
		name: 'ILOGA',
		uta2020: '100560147000027',
		uta2010: '100560147000027',
		latitude: -28.395515442,
		longitude: -65.398735046,
		municipalityId: 1904
	},
	{
		id: 2132,
		name: 'LOS POZOS',
		uta2020: '100560147000058',
		uta2010: '100560147000058',
		latitude: -28.263735682,
		longitude: -65.352704938,
		municipalityId: 1904
	},
	{
		id: 2133,
		name: 'EL PANTANILLO',
		uta2020: '100560147000015',
		uta2010: '100560147000015',
		latitude: -28.41198,
		longitude: -65.48484,
		municipalityId: 1904
	},
	{
		id: 2134,
		name: 'EL SAUCE',
		uta2020: '100560147000020',
		uta2010: '100560147000020',
		latitude: -28.43379451,
		longitude: -65.35028651,
		municipalityId: 1904
	},
	{
		id: 2135,
		name: 'VILISMAN',
		uta2020: '100560147060000',
		uta2010: '100560147060000',
		latitude: -28.502113315,
		longitude: -65.438549,
		municipalityId: 1904
	},
	{
		id: 2136,
		name: 'EL ALTO',
		uta2020: '100560147010000',
		uta2010: '100560147010000',
		latitude: -28.302747756,
		longitude: -65.369376719,
		municipalityId: 1904
	},
	{
		id: 2137,
		name: 'RIO DE AVILA',
		uta2020: '100560147000069',
		uta2010: '100560147000069',
		latitude: -28.430735572,
		longitude: -65.394470487,
		municipalityId: 1904
	},
	{
		id: 2138,
		name: 'TINTIGASTA',
		uta2020: '100560147000083',
		uta2010: '100560147000083',
		latitude: -28.369856855,
		longitude: -65.445756503,
		municipalityId: 1904
	},
	{
		id: 2139,
		name: 'LOS ALAMOS',
		uta2020: '100560147000050',
		uta2010: '100560147000050',
		latitude: -28.408475876,
		longitude: -65.38898468,
		municipalityId: 1904
	},
	{
		id: 2140,
		name: 'LOS CORRALES',
		uta2020: '100560147040000',
		uta2010: '100560147040000',
		latitude: -28.510829024,
		longitude: -65.330877222,
		municipalityId: 1904
	},
	{
		id: 2141,
		name: 'LA HUERTA',
		uta2020: '100560147000036',
		uta2010: '100560147000036',
		latitude: -28.25,
		longitude: -65.28082,
		municipalityId: 1904
	},
	{
		id: 2142,
		name: 'SAUCE HUACHO',
		uta2020: '100560147000075',
		uta2010: '100560147000075',
		latitude: -28.297481403,
		longitude: -65.434631823,
		municipalityId: 1904
	},
	{
		id: 2143,
		name: 'OYOLA',
		uta2020: '100560147000064',
		uta2010: '100560147000064',
		latitude: -28.483199282,
		longitude: -65.405343451,
		municipalityId: 1904
	},
	{
		id: 2144,
		name: 'BELLA VISTA',
		uta2020: '100560147000007',
		uta2010: '100560147000007',
		latitude: -28.62486,
		longitude: -65.49142,
		municipalityId: 1904
	},
	{
		id: 2145,
		name: 'INFANZON',
		uta2020: '100560147030000',
		uta2010: '100560147030000',
		latitude: -28.597324408,
		longitude: -65.411660266,
		municipalityId: 1904
	},
	{
		id: 2146,
		name: 'GUAYAMBA',
		uta2020: '100560147020000',
		uta2010: '100560147020000',
		latitude: -28.344126664,
		longitude: -65.412747668,
		municipalityId: 1904
	},
	{
		id: 2147,
		name: 'LOS PEDRAZA',
		uta2020: '100560147000057',
		uta2010: '100560147000057',
		latitude: -28.50708,
		longitude: -65.51532,
		municipalityId: 1904
	},
	{
		id: 2148,
		name: 'SANTO TOME',
		uta2020: '820630154180000',
		uta2010: '820630154180000',
		latitude: -31.66484233,
		longitude: -60.762639984,
		municipalityId: 1030
	},
	{
		id: 2149,
		name: 'CAMPO JULLIER',
		uta2020: '820630154000008',
		uta2010: '820630154000008',
		latitude: -31.62888784,
		longitude: -60.797846496,
		municipalityId: 1030
	},
	{
		id: 2150,
		name: 'LA LOMA',
		uta2020: '661330329000195',
		uta2010: '661330329000195',
		latitude: -23.206073761,
		longitude: -63.180274963,
		municipalityId: 1854
	},
	{
		id: 2151,
		name: 'CASAS VIEJAS',
		uta2020: '661330329000029',
		uta2010: '661330329000029',
		latitude: -23.86231041,
		longitude: -62.689281464,
		municipalityId: 1854
	},
	{
		id: 2152,
		name: 'EL TRAMPEADERO',
		uta2020: '661330329000137',
		uta2010: '661330329000137',
		latitude: -23.045923533,
		longitude: -62.6131851,
		municipalityId: 1854
	},
	{
		id: 2153,
		name: 'EL POTRERITO',
		uta2020: '661330329000111',
		uta2010: '661330329000111',
		latitude: -23.931591034,
		longitude: -62.488193512,
		municipalityId: 1854
	},
	{
		id: 2154,
		name: 'POZO EL CHAÑAR',
		uta2020: '661330329000321',
		uta2010: '661330329000321',
		latitude: -23.552910422,
		longitude: -62.984976592,
		municipalityId: 1854
	},
	{
		id: 2155,
		name: 'LAS JUNTAS',
		uta2020: '661330329000241',
		uta2010: '661330329000241',
		latitude: -22.85394,
		longitude: -62.62769,
		municipalityId: 1854
	},
	{
		id: 2156,
		name: 'LAS HORQUETAS',
		uta2020: '661330329000239',
		uta2010: '661330329000239',
		latitude: -22.834951401,
		longitude: -62.7445755,
		municipalityId: 1854
	},
	{
		id: 2157,
		name: 'POZO EL ANTA',
		uta2020: '661330329000318',
		uta2010: '661330329000318',
		latitude: -23.26556015,
		longitude: -62.923843384,
		municipalityId: 1854
	},
	{
		id: 2158,
		name: 'EL NARANJO',
		uta2020: '661330329000094',
		uta2010: '661330329000094',
		latitude: -23.04817009,
		longitude: -62.880657196,
		municipalityId: 1854
	},
	{
		id: 2159,
		name: 'LA BREA',
		uta2020: '661330329000167',
		uta2010: '661330329000167',
		latitude: -23.115302807,
		longitude: -62.784658333,
		municipalityId: 1854
	},
	{
		id: 2160,
		name: 'TRES DE MAYO',
		uta2020: '661330329000384',
		uta2010: '661330329000384',
		latitude: -23.024356842,
		longitude: -63.134487152,
		municipalityId: 1854
	},
	{
		id: 2161,
		name: 'LA TRAMPA',
		uta2020: '661330329000226',
		uta2010: '661330329000226',
		latitude: -23.615423203,
		longitude: -62.990074158,
		municipalityId: 1854
	},
	{
		id: 2162,
		name: 'CAPITAN JUAN PAGE',
		uta2020: '661330329020000',
		uta2010: '661330329020000',
		latitude: -23.708487671,
		longitude: -62.381794945,
		municipalityId: 1854
	},
	{
		id: 2163,
		name: 'LA RINCONADA',
		uta2020: '661330329000216',
		uta2010: '661330329000216',
		latitude: -23.886850357,
		longitude: -62.874519348,
		municipalityId: 1854
	},
	{
		id: 2164,
		name: 'EL MADREJON',
		uta2020: '661330329000086',
		uta2010: '661330329000086',
		latitude: -24.026395798,
		longitude: -62.739742279,
		municipalityId: 1854
	},
	{
		id: 2165,
		name: 'SAN ANTONIO',
		uta2020: '661330329000348',
		uta2010: '661330329000348',
		latitude: -23.21770668,
		longitude: -62.696086884,
		municipalityId: 1854
	},
	{
		id: 2166,
		name: 'EL ROSARIO',
		uta2020: '661330329000123',
		uta2010: '661330329000123',
		latitude: -23.686323166,
		longitude: -62.655025482,
		municipalityId: 1854
	},
	{
		id: 2167,
		name: 'ALTO VERDE',
		uta2020: '661330329000006',
		uta2010: '661330329000006',
		latitude: -23.283489227,
		longitude: -62.444530487,
		municipalityId: 1854
	},
	{
		id: 2168,
		name: 'SAN ROQUE',
		uta2020: '661330329000368',
		uta2010: '661330329000368',
		latitude: -23.599521637,
		longitude: -63.06684494,
		municipalityId: 1854
	},
	{
		id: 2169,
		name: 'FORTIN BELGRANO',
		uta2020: '661330329000156',
		uta2010: '661330329000156',
		latitude: -24.123095918,
		longitude: -62.355749163,
		municipalityId: 1854
	},
	{
		id: 2170,
		name: 'EL PERTIGO',
		uta2020: '661330329000106',
		uta2010: '661330329000106',
		latitude: -23.652299881,
		longitude: -62.834247589,
		municipalityId: 1854
	},
	{
		id: 2171,
		name: 'EL CHORRO',
		uta2020: '661330329000058',
		uta2010: '661330329000058',
		latitude: -24.032674789,
		longitude: -62.553596497,
		municipalityId: 1854
	},
	{
		id: 2172,
		name: 'EL PUESTO',
		uta2020: '661330329000113',
		uta2010: '661330329000113',
		latitude: -23.866462707,
		longitude: -62.611328125,
		municipalityId: 1854
	},
	{
		id: 2173,
		name: 'SAN NICOLAS',
		uta2020: '661330329000363',
		uta2010: '661330329000363',
		latitude: -24.079639435,
		longitude: -62.651794434,
		municipalityId: 1854
	},
	{
		id: 2174,
		name: 'LOS BLANCOS',
		uta2020: '661330329050000',
		uta2010: '661330329050000',
		latitude: -23.630147809,
		longitude: -62.597237301,
		municipalityId: 1854
	},
	{
		id: 2175,
		name: 'LA PROVIDENCIA',
		uta2020: '661330329000213',
		uta2010: '661330329000213',
		latitude: -22.725206375,
		longitude: -62.796230316,
		municipalityId: 1854
	},
	{
		id: 2176,
		name: 'PLUMA DE PATO',
		uta2020: '661330329060000',
		uta2010: '661330329060000',
		latitude: -23.380842632,
		longitude: -63.09805565,
		municipalityId: 1854
	},
	{
		id: 2177,
		name: 'BALBUENA',
		uta2020: '661330329000010',
		uta2010: '661330329000010',
		latitude: -22.793876648,
		longitude: -63.050220489,
		municipalityId: 1854
	},
	{
		id: 2178,
		name: 'EL QUEBRACHO',
		uta2020: '661330329000115',
		uta2010: '661330329000115',
		latitude: -23.610282898,
		longitude: -62.954071045,
		municipalityId: 1854
	},
	{
		id: 2179,
		name: 'EL CARPINTERO',
		uta2020: '661330329000048',
		uta2010: '661330329000048',
		latitude: -23.325889996,
		longitude: -63.253271556,
		municipalityId: 1854
	},
	{
		id: 2180,
		name: 'EL ESPINILLO',
		uta2020: '661330329000075',
		uta2010: '661330329000075',
		latitude: -23.901298756,
		longitude: -62.615057822,
		municipalityId: 1854
	},
	{
		id: 2181,
		name: 'EL YACON',
		uta2020: '661330329000144',
		uta2010: '661330329000144',
		latitude: -23.123332977,
		longitude: -62.977844238,
		municipalityId: 1854
	},
	{
		id: 2182,
		name: 'EL SAUZAL',
		uta2020: '661330329000126',
		uta2010: '661330329000126',
		latitude: -24.077264786,
		longitude: -62.580245972,
		municipalityId: 1854
	},
	{
		id: 2183,
		name: 'EL TRASLADO',
		uta2020: '661330329000138',
		uta2010: '661330329000138',
		latitude: -23.266004562,
		longitude: -62.833724976,
		municipalityId: 1854
	},
	{
		id: 2184,
		name: 'LAS MARAVILLAS',
		uta2020: '661330329000245',
		uta2010: '661330329000245',
		latitude: -22.77388382,
		longitude: -62.418430328,
		municipalityId: 1854
	},
	{
		id: 2185,
		name: 'LA VICTORIA',
		uta2020: '661330329000227',
		uta2010: '661330329000227',
		latitude: -23.609558105,
		longitude: -63.203186035,
		municipalityId: 1854
	},
	{
		id: 2186,
		name: 'LOS BALDES',
		uta2020: '661330329000256',
		uta2010: '661330329000256',
		latitude: -23.684736115,
		longitude: -62.781585298,
		municipalityId: 1854
	},
	{
		id: 2187,
		name: 'POZO DE ALGARROBO',
		uta2020: '661330329000304',
		uta2010: '661330329000304',
		latitude: -24.024940628,
		longitude: -62.387604492,
		municipalityId: 1854
	},
	{
		id: 2188,
		name: 'PALMAR',
		uta2020: '661330329000293',
		uta2010: '661330329000293',
		latitude: -22.966806412,
		longitude: -62.79492569,
		municipalityId: 1854
	},
	{
		id: 2189,
		name: 'EL GANSO',
		uta2020: '661330329000078',
		uta2010: '661330329000078',
		latitude: -24.089981079,
		longitude: -62.425998688,
		municipalityId: 1854
	},
	{
		id: 2190,
		name: 'BUENA VISTA',
		uta2020: '661330329000017',
		uta2010: '661330329000017',
		latitude: -23.239291378,
		longitude: -62.671076343,
		municipalityId: 1854
	},
	{
		id: 2191,
		name: 'EL CAMPAMENTO',
		uta2020: '661330329000045',
		uta2010: '661330329000045',
		latitude: -23.294239044,
		longitude: -62.870960236,
		municipalityId: 1854
	},
	{
		id: 2192,
		name: 'LA IGUANA',
		uta2020: '661330329000190',
		uta2010: '661330329000190',
		latitude: -23.129592896,
		longitude: -62.875091553,
		municipalityId: 1854
	},
	{
		id: 2193,
		name: 'LA JUNTA',
		uta2020: '661330329000192',
		uta2010: '661330329000192',
		latitude: -22.85235405,
		longitude: -62.632377625,
		municipalityId: 1854
	},
	{
		id: 2194,
		name: 'BELLA VISTA',
		uta2020: '661330329000012',
		uta2010: '661330329000012',
		latitude: -22.958307266,
		longitude: -63.105564117,
		municipalityId: 1854
	},
	{
		id: 2195,
		name: 'SAN PATRICIO',
		uta2020: '661330329000365',
		uta2010: '661330329000365',
		latitude: -23.911190818,
		longitude: -62.571140613,
		municipalityId: 1854
	},
	{
		id: 2196,
		name: 'CORONEL JUAN SOLA',
		uta2020: '661330329030000',
		uta2010: '661330329030000',
		latitude: -23.483643208,
		longitude: -62.891310873,
		municipalityId: 1854
	},
	{
		id: 2197,
		name: 'EL PUESTITO',
		uta2020: '661330329000112',
		uta2010: '661330329000112',
		latitude: -23.938659668,
		longitude: -62.749980927,
		municipalityId: 1854
	},
	{
		id: 2198,
		name: 'MONTE RICO',
		uta2020: '661330329000286',
		uta2010: '661330329000286',
		latitude: -23.007900238,
		longitude: -62.77122879,
		municipalityId: 1854
	},
	{
		id: 2199,
		name: 'LA BOLSA',
		uta2020: '661330329000166',
		uta2010: '661330329000166',
		latitude: -23.880466461,
		longitude: -62.556594849,
		municipalityId: 1854
	},
	{
		id: 2200,
		name: 'LAS DELICIAS',
		uta2020: '661330329000236',
		uta2010: '661330329000236',
		latitude: -23.150848389,
		longitude: -62.827800751,
		municipalityId: 1854
	},
	{
		id: 2201,
		name: 'LA PALMITA',
		uta2020: '661330329000207',
		uta2010: '661330329000207',
		latitude: -22.899459839,
		longitude: -62.489253998,
		municipalityId: 1854
	},
	{
		id: 2202,
		name: 'EL CARANCHO',
		uta2020: '661330329000046',
		uta2010: '661330329000046',
		latitude: -23.190927505,
		longitude: -62.713687897,
		municipalityId: 1854
	},
	{
		id: 2203,
		name: 'POZO DEL SAUCE',
		uta2020: '661330329000314',
		uta2010: '661330329000314',
		latitude: -23.661727271,
		longitude: -63.061205354,
		municipalityId: 1854
	},
	{
		id: 2204,
		name: 'EL SALADO',
		uta2020: '661330329000124',
		uta2010: '661330329000124',
		latitude: -23.698692322,
		longitude: -62.359683991,
		municipalityId: 1854
	},
	{
		id: 2205,
		name: 'LA ELENITA',
		uta2020: '661330329000179',
		uta2010: '661330329000179',
		latitude: -23.685552597,
		longitude: -63.097553253,
		municipalityId: 1854
	},
	{
		id: 2206,
		name: 'EL CIENEGO',
		uta2020: '661330329000060',
		uta2010: '661330329000060',
		latitude: -23.503097534,
		longitude: -62.950454712,
		municipalityId: 1854
	},
	{
		id: 2207,
		name: 'EL SUNCHAL',
		uta2020: '661330329000130',
		uta2010: '661330329000130',
		latitude: -23.153190613,
		longitude: -62.925159454,
		municipalityId: 1854
	},
	{
		id: 2208,
		name: 'LOS NOGALES',
		uta2020: '661330329000260',
		uta2010: '661330329000260',
		latitude: -22.888277054,
		longitude: -62.974243164,
		municipalityId: 1854
	},
	{
		id: 2209,
		name: 'LA INVERNADA',
		uta2020: '661330329000191',
		uta2010: '661330329000191',
		latitude: -23.733100891,
		longitude: -62.951839447,
		municipalityId: 1854
	},
	{
		id: 2210,
		name: 'EL QUIRQUINCHO',
		uta2020: '661330329000117',
		uta2010: '661330329000117',
		latitude: -22.845825195,
		longitude: -62.796844482,
		municipalityId: 1854
	},
	{
		id: 2211,
		name: 'LAS HORQUETASAS',
		uta2020: '661330329000240',
		uta2010: '661330329000240',
		latitude: -22.836929,
		longitude: -62.749836,
		municipalityId: 1854
	},
	{
		id: 2212,
		name: 'SAN AGUSTIN',
		uta2020: '661330329000346',
		uta2010: '661330329000346',
		latitude: -24.028535843,
		longitude: -62.463447571,
		municipalityId: 1854
	},
	{
		id: 2213,
		name: 'LA ENTRADA',
		uta2020: '661330329000181',
		uta2010: '661330329000181',
		latitude: -23.730733117,
		longitude: -62.790588448,
		municipalityId: 1854
	},
	{
		id: 2214,
		name: 'EL BOTIN',
		uta2020: '661330329000042',
		uta2010: '661330329000042',
		latitude: -23.755012512,
		longitude: -62.710063934,
		municipalityId: 1854
	},
	{
		id: 2215,
		name: 'EL GRITAO',
		uta2020: '661330329000079',
		uta2010: '661330329000079',
		latitude: -23.901898292,
		longitude: -62.735120461,
		municipalityId: 1854
	},
	{
		id: 2216,
		name: 'EL PERGAMINO',
		uta2020: '661330329000105',
		uta2010: '661330329000105',
		latitude: -23.642873764,
		longitude: -63.104354858,
		municipalityId: 1854
	},
	{
		id: 2217,
		name: 'EL ESCONDIDO',
		uta2020: '661330329000074',
		uta2010: '661330329000074',
		latitude: -23.4715271,
		longitude: -62.671920776,
		municipalityId: 1854
	},
	{
		id: 2218,
		name: 'FINCA RESISTENCIA',
		uta2020: '661330329000151',
		uta2010: '661330329000151',
		latitude: -23.96409821,
		longitude: -62.518899751,
		municipalityId: 1854
	},
	{
		id: 2219,
		name: 'LA MESADA',
		uta2020: '661330329000201',
		uta2010: '661330329000201',
		latitude: -23.253530502,
		longitude: -62.953826904,
		municipalityId: 1854
	},
	{
		id: 2220,
		name: 'EL PORONGAL',
		uta2020: '661330329000109',
		uta2010: '661330329000109',
		latitude: -23.768728256,
		longitude: -62.788673401,
		municipalityId: 1854
	},
	{
		id: 2221,
		name: 'FORTALEZA',
		uta2020: '661330329000155',
		uta2010: '661330329000155',
		latitude: -24.04240036,
		longitude: -62.678504944,
		municipalityId: 1854
	},
	{
		id: 2222,
		name: 'EL QUEJON',
		uta2020: '661330329000116',
		uta2010: '661330329000116',
		latitude: -23.812051773,
		longitude: -62.781967163,
		municipalityId: 1854
	},
	{
		id: 2223,
		name: 'FINCA LA ARGENTINA',
		uta2020: '661330329000149',
		uta2010: '661330329000149',
		latitude: -23.540010416,
		longitude: -62.580426412,
		municipalityId: 1854
	},
	{
		id: 2224,
		name: 'LA ENSENADA',
		uta2020: '661330329000180',
		uta2010: '661330329000180',
		latitude: -23.961294174,
		longitude: -62.692989349,
		municipalityId: 1854
	},
	{
		id: 2225,
		name: 'EL PARAISO',
		uta2020: '661330329000102',
		uta2010: '661330329000102',
		latitude: -23.843034744,
		longitude: -62.775810242,
		municipalityId: 1854
	},
	{
		id: 2226,
		name: 'CAMPO ARGENTINO',
		uta2020: '661330329000019',
		uta2010: '661330329000019',
		latitude: -23.264427185,
		longitude: -63.216083527,
		municipalityId: 1854
	},
	{
		id: 2227,
		name: 'POZO EL MULATO',
		uta2020: '661330329000323',
		uta2010: '661330329000323',
		latitude: -22.79493,
		longitude: -62.40336,
		municipalityId: 1854
	},
	{
		id: 2228,
		name: 'EL AZUL',
		uta2020: '661330329000040',
		uta2010: '661330329000040',
		latitude: -23.507736206,
		longitude: -62.663974762,
		municipalityId: 1854
	},
	{
		id: 2229,
		name: 'DOS YUCHANES',
		uta2020: '661330329000036',
		uta2010: '661330329000036',
		latitude: -23.986051559,
		longitude: -62.673404694,
		municipalityId: 1854
	},
	{
		id: 2230,
		name: 'PUESTO EL PANCHO',
		uta2020: '661330329000336',
		uta2010: '661330329000336',
		latitude: -23.025703,
		longitude: -62.411309,
		municipalityId: 1854
	},
	{
		id: 2231,
		name: 'EL RONDADERO',
		uta2020: '661330329000121',
		uta2010: '661330329000121',
		latitude: -23.087171555,
		longitude: -62.812576294,
		municipalityId: 1854
	},
	{
		id: 2232,
		name: 'EL COLETO',
		uta2020: '661330329000063',
		uta2010: '661330329000063',
		latitude: -23.564638871,
		longitude: -63.08870993,
		municipalityId: 1854
	},
	{
		id: 2233,
		name: 'EL TALAR',
		uta2020: '661330329000132',
		uta2010: '661330329000132',
		latitude: -23.616466522,
		longitude: -63.285308838,
		municipalityId: 1854
	},
	{
		id: 2234,
		name: 'LA MORA (FINCA)',
		uta2020: '661330329000204',
		uta2010: '661330329000204',
		latitude: -23.040570202,
		longitude: -62.917446337,
		municipalityId: 1854
	},
	{
		id: 2235,
		name: 'MONTEVIDEO',
		uta2020: '661330329000288',
		uta2010: '661330329000288',
		latitude: -23.692179794,
		longitude: -63.151776695,
		municipalityId: 1854
	},
	{
		id: 2236,
		name: 'PALO SANTO',
		uta2020: '661330329000295',
		uta2010: '661330329000295',
		latitude: -23.002187729,
		longitude: -62.48052597,
		municipalityId: 1854
	},
	{
		id: 2237,
		name: 'EL CORTADERAL',
		uta2020: '661330329000064',
		uta2010: '661330329000064',
		latitude: -23.234939575,
		longitude: -62.610092163,
		municipalityId: 1854
	},
	{
		id: 2238,
		name: 'SAN MARTIN',
		uta2020: '661330329000361',
		uta2010: '661330329000361',
		latitude: -23.681798935,
		longitude: -63.225219727,
		municipalityId: 1854
	},
	{
		id: 2239,
		name: 'CAMPO ALEGRE',
		uta2020: '661330329000018',
		uta2010: '661330329000018',
		latitude: -22.958213806,
		longitude: -62.53137207,
		municipalityId: 1854
	},
	{
		id: 2240,
		name: 'EL DESEMBOQUE',
		uta2020: '661330329000068',
		uta2010: '661330329000068',
		latitude: -22.80528,
		longitude: -62.94038,
		municipalityId: 1854
	},
	{
		id: 2241,
		name: 'EL TARTAGAL',
		uta2020: '661330329000133',
		uta2010: '661330329000133',
		latitude: -23.832551956,
		longitude: -62.870410919,
		municipalityId: 1854
	},
	{
		id: 2242,
		name: 'LA SALVACION',
		uta2020: '661330329000218',
		uta2010: '661330329000218',
		latitude: -24.047137404,
		longitude: -62.678595465,
		municipalityId: 1854
	},
	{
		id: 2243,
		name: 'LA ESPERANZA',
		uta2020: '661330329000182',
		uta2010: '661330329000182',
		latitude: -22.93815,
		longitude: -62.94045,
		municipalityId: 1854
	},
	{
		id: 2244,
		name: 'EL CHIVIL',
		uta2020: '661330329000056',
		uta2010: '661330329000056',
		latitude: -23.010969162,
		longitude: -62.963401794,
		municipalityId: 1854
	},
	{
		id: 2245,
		name: 'LOS RANCHITOS',
		uta2020: '661330329000265',
		uta2010: '661330329000265',
		latitude: -23.437578201,
		longitude: -62.942264557,
		municipalityId: 1854
	},
	{
		id: 2246,
		name: 'PUEBLO MARINI',
		uta2020: '820212322300000',
		uta2010: '820212322300000',
		latitude: -31.040974548,
		longitude: -61.889882637,
		municipalityId: 752
	},
	{
		id: 2247,
		name: 'LAS PIEDRITAS',
		uta2020: '700700070025000',
		uta2010: '700700070025000',
		latitude: -31.629474322,
		longitude: -68.608076564,
		municipalityId: 2426
	},
	{
		id: 2248,
		name: 'VILLA BARBOZA',
		uta2020: '700700070050001',
		uta2010: '700700070050001',
		latitude: -31.592179975,
		longitude: -68.572392443,
		municipalityId: 2426
	},
	{
		id: 2249,
		name: 'ESTACION SANCHEZ DE LORIA',
		uta2020: '700700070000011',
		uta2010: '700700070000011',
		latitude: -31.59750975,
		longitude: -68.55525748,
		municipalityId: 2426
	},
	{
		id: 2250,
		name: 'COLONIA CANTONI',
		uta2020: '700700070000004',
		uta2010: '700700070000004',
		latitude: -31.838895798,
		longitude: -68.530181885,
		municipalityId: 2426
	},
	{
		id: 2251,
		name: 'SEGUNDO CUARTEL',
		uta2020: '700700070000021',
		uta2010: '700700070000021',
		latitude: -31.61058619,
		longitude: -68.57718822,
		municipalityId: 2426
	},
	{
		id: 2252,
		name: 'BARRIO RUTA 40',
		uta2020: '700700070010000',
		uta2010: '700700070010000',
		latitude: -31.859530823,
		longitude: -68.534516649,
		municipalityId: 2426
	},
	{
		id: 2253,
		name: 'VILLA AEROPUERTO',
		uta2020: '700700070000022',
		uta2010: '700700070000022',
		latitude: -31.594893115,
		longitude: -68.554633793,
		municipalityId: 2426
	},
	{
		id: 2254,
		name: 'EL ABANICO',
		uta2020: '700700070000008',
		uta2010: '700700070000008',
		latitude: -31.686860438,
		longitude: -68.600539677,
		municipalityId: 2426
	},
	{
		id: 2255,
		name: 'QUINTO CUARTEL',
		uta2020: '700700070030000',
		uta2010: '700700070030000',
		latitude: -31.614035943,
		longitude: -68.600174509,
		municipalityId: 2426
	},
	{
		id: 2256,
		name: 'VILLA CABECERA',
		uta2020: '700700070000006',
		uta2010: '700700070000006',
		latitude: -31.655716002,
		longitude: -68.580557974,
		municipalityId: 2426
	},
	{
		id: 2257,
		name: 'CAMPO DE BATALLA',
		uta2020: '700700070000001',
		uta2010: '700700070000001',
		latitude: -31.72999788,
		longitude: -68.56591515,
		municipalityId: 2426
	},
	{
		id: 2258,
		name: 'VILLA ABERASTAIN',
		uta2020: '700700070040002',
		uta2010: '700700070040002',
		latitude: -31.657012772,
		longitude: -68.573608949,
		municipalityId: 2426
	},
	{
		id: 2259,
		name: 'BARRIO MUNICIPAL',
		uta2020: '700700070005000',
		uta2010: '700700070005000',
		latitude: -31.752348678,
		longitude: -68.559721374,
		municipalityId: 2426
	},
	{
		id: 2260,
		name: 'CARPINTERIA',
		uta2020: '700700070020000',
		uta2010: '700700070020000',
		latitude: -31.830140985,
		longitude: -68.542098926,
		municipalityId: 2426
	},
	{
		id: 2261,
		name: 'VILLA NACUSI',
		uta2020: '700700070050002',
		uta2010: '700700070050002',
		latitude: -31.621938389,
		longitude: -68.53595804,
		municipalityId: 2426
	},
	{
		id: 2262,
		name: 'LA CALLECITA',
		uta2020: '700700070000013',
		uta2010: '700700070000013',
		latitude: -31.623044765,
		longitude: -68.551245637,
		municipalityId: 2426
	},
	{
		id: 2263,
		name: 'VILLA CENTENARIO',
		uta2020: '700700070060000',
		uta2010: '700700070060000',
		latitude: -31.668402703,
		longitude: -68.52229193,
		municipalityId: 2426
	},
	{
		id: 2264,
		name: 'LA RINCONADA',
		uta2020: '700700070040001',
		uta2010: '700700070040001',
		latitude: -31.695237868,
		longitude: -68.592302577,
		municipalityId: 2426
	},
	{
		id: 2265,
		name: 'LUGONES',
		uta2020: '860286049040000',
		uta2010: '860286049040000',
		latitude: -28.341885204,
		longitude: -63.270669194,
		municipalityId: 1401
	},
	{
		id: 2266,
		name: 'ESTACION TACAÑITAS',
		uta2020: '860776455030000',
		uta2010: '860776455030000',
		latitude: -28.613854158,
		longitude: -62.523836188,
		municipalityId: 1424
	},
	{
		id: 2267,
		name: 'ESTACION PALAVECINO',
		uta2020: '300560000000088',
		uta2010: '300560000000088',
		latitude: -32.94896159,
		longitude: -58.639889737,
		municipalityId: 1623
	},
	{
		id: 2268,
		name: 'COSTA LAS MASITAS',
		uta2020: '300560000000074',
		uta2010: '300560000000074',
		latitude: -32.57076731,
		longitude: -59.02767622,
		municipalityId: 1623
	},
	{
		id: 2269,
		name: 'GUALEYANCITO',
		uta2020: '300560000000091',
		uta2010: '300560000000091',
		latitude: -32.925487566,
		longitude: -58.623018477,
		municipalityId: 1623
	},
	{
		id: 2270,
		name: 'DISTRITO PEHUAJO SUD',
		uta2020: '300560000000082',
		uta2010: '300560000000082',
		latitude: -33.079362,
		longitude: -58.78212845,
		municipalityId: 1623
	},
	{
		id: 2271,
		name: 'DISTRITO PEHUAJO NORTE',
		uta2020: '300560000000081',
		uta2010: '300560000000081',
		latitude: -32.945226973,
		longitude: -58.527917317,
		municipalityId: 1623
	},
	{
		id: 2272,
		name: 'DISTRITO CEIBAS',
		uta2020: '300560000000077',
		uta2010: '300560000000077',
		latitude: -33.31853114,
		longitude: -58.94727029,
		municipalityId: 1623
	},
	{
		id: 2273,
		name: 'TRES ESQUINAS',
		uta2020: '300560000000139',
		uta2010: '300560000000139',
		latitude: -32.9161086,
		longitude: -58.74910894,
		municipalityId: 1623
	},
	{
		id: 2274,
		name: 'COLONIA STAUBER',
		uta2020: '300560000000072',
		uta2010: '300560000000072',
		latitude: -32.874169909,
		longitude: -58.950009156,
		municipalityId: 1623
	},
	{
		id: 2275,
		name: 'COLONIA LAS PIEDRAS',
		uta2020: '300560000000071',
		uta2010: '300560000000071',
		latitude: -32.8869524,
		longitude: -58.51826245,
		municipalityId: 1623
	},
	{
		id: 2276,
		name: 'COLONIA ITALIANA',
		uta2020: '300560000000068',
		uta2010: '300560000000068',
		latitude: -32.808539884,
		longitude: -58.993624858,
		municipalityId: 1623
	},
	{
		id: 2277,
		name: 'ESTANCIA EL REFUGIO',
		uta2020: '300560000000089',
		uta2010: '300560000000089',
		latitude: -33.320059892,
		longitude: -58.898273205,
		municipalityId: 1623
	},
	{
		id: 2278,
		name: 'VILLA CURA BROCHERO',
		uta2020: '141261113200000',
		uta2010: '141261113200000',
		latitude: -31.706369083,
		longitude: -65.019110978,
		municipalityId: 385
	},
	{
		id: 2279,
		name: 'VILLA SALAVINA',
		uta2020: '861686266030000',
		uta2010: '861686266030000',
		latitude: -28.815150316,
		longitude: -63.341063155,
		municipalityId: 1309
	},
	{
		id: 2280,
		name: 'TOBA',
		uta2020: '821334205160000',
		uta2010: '821334205160000',
		latitude: -29.267588428,
		longitude: -60.172655901,
		municipalityId: 999
	},
	{
		id: 2281,
		name: 'KILOMETRO 12',
		uta2020: '821334205000060',
		uta2010: '821334205000060',
		latitude: -29.245111243,
		longitude: -60.305253479,
		municipalityId: 999
	},
	{
		id: 2282,
		name: 'GUAYCURU',
		uta2020: '821334205000058',
		uta2010: '821334205000058',
		latitude: -29.131354953,
		longitude: -60.150159704,
		municipalityId: 999
	},
	{
		id: 2283,
		name: 'LOTE 127',
		uta2020: '821334205000088',
		uta2010: '821334205000088',
		latitude: -29.240186093,
		longitude: -60.221049847,
		municipalityId: 999
	},
	{
		id: 2284,
		name: 'LA ZULEMA',
		uta2020: '821334205000080',
		uta2010: '821334205000080',
		latitude: -29.093544006,
		longitude: -60.130561828,
		municipalityId: 999
	},
	{
		id: 2285,
		name: 'KILOMETRO 302',
		uta2020: '821334205000061',
		uta2010: '821334205000061',
		latitude: -29.014105375,
		longitude: -60.139230388,
		municipalityId: 999
	},
	{
		id: 2286,
		name: 'CHANCANI',
		uta2020: '140772406010000',
		uta2010: '140772406010000',
		latitude: -31.41728202,
		longitude: -65.445342134,
		municipalityId: 159
	},
	{
		id: 2287,
		name: 'COLONIA PASTORIL',
		uta2020: '221190357000006',
		uta2010: '221190357000006',
		latitude: -26.887390483,
		longitude: -59.7405352,
		municipalityId: 49
	},
	{
		id: 2288,
		name: 'COLONIA BRANDSEN SUR',
		uta2020: '221190357000003',
		uta2010: '221190357000003',
		latitude: -27.092947177,
		longitude: -60.000016336,
		municipalityId: 49
	},
	{
		id: 2289,
		name: 'COLONIA BRANDSEN NORTE',
		uta2020: '221190357000002',
		uta2010: '221190357000002',
		latitude: -26.84889313,
		longitude: -59.87023116,
		municipalityId: 49
	},
	{
		id: 2290,
		name: 'GUAYAIBI',
		uta2020: '221190357000012',
		uta2010: '221190357000012',
		latitude: -26.954424238,
		longitude: -59.896142497,
		municipalityId: 49
	},
	{
		id: 2291,
		name: 'COLONIA HIPOLITO VIEYTES',
		uta2020: '221190357000005',
		uta2010: '221190357000005',
		latitude: -26.9544202,
		longitude: -59.89616326,
		municipalityId: 49
	},
	{
		id: 2292,
		name: 'COLONIA SANTA ELENA',
		uta2020: '221190357000007',
		uta2010: '221190357000007',
		latitude: -26.922257091,
		longitude: -59.775203627,
		municipalityId: 49
	},
	{
		id: 2293,
		name: 'PRESIDENCIA DE LA PLAZA',
		uta2020: '221190357010000',
		uta2010: '221190357010000',
		latitude: -27.002971436,
		longitude: -59.847600386,
		municipalityId: 49
	},
	{
		id: 2294,
		name: 'CUATRO ARBOLES',
		uta2020: '221190357000008',
		uta2010: '221190357000008',
		latitude: -26.90167423,
		longitude: -59.90023887,
		municipalityId: 49
	},
	{
		id: 2295,
		name: 'FORTIN AGUILAR',
		uta2020: '221190357000010',
		uta2010: '221190357000010',
		latitude: -27.073792645,
		longitude: -59.645408832,
		municipalityId: 49
	},
	{
		id: 2296,
		name: 'VILLA FIGUEROA',
		uta2020: '860706441100000',
		uta2010: '860706441100000',
		latitude: -27.719163512,
		longitude: -63.462754109,
		municipalityId: 1417
	},
	{
		id: 2297,
		name: 'RIO MAYO',
		uta2020: '260840133070000',
		uta2010: '260840133070000',
		latitude: -45.696453817,
		longitude: -70.255980448,
		municipalityId: 531
	},
	{
		id: 2298,
		name: 'ALTO RIO MAYO',
		uta2020: '260840133000001',
		uta2010: '260840133000001',
		latitude: -45.68628224,
		longitude: -70.26062851,
		municipalityId: 531
	},
	{
		id: 2299,
		name: 'GORGONTA',
		uta2020: '740560000000047',
		uta2010: '740560000000047',
		latitude: -33.790293261,
		longitude: -66.753123863,
		municipalityId: 1131
	},
	{
		id: 2300,
		name: 'SANTA CECILIA',
		uta2020: '740560000000129',
		uta2010: '740560000000129',
		latitude: -34.62758255,
		longitude: -66.696868897,
		municipalityId: 1131
	},
	{
		id: 2301,
		name: 'EL CALDEN',
		uta2020: '740560000000028',
		uta2010: '740560000000028',
		latitude: -31.895373096,
		longitude: -65.85838098,
		municipalityId: 1131
	},
	{
		id: 2302,
		name: 'MOSMOTA',
		uta2020: '740560000110000',
		uta2010: '740560000110000',
		latitude: -33.645891553,
		longitude: -66.993449532,
		municipalityId: 1131
	},
	{
		id: 2303,
		name: 'EL MILAGRO',
		uta2020: '740560000000035',
		uta2010: '740560000000035',
		latitude: -33.126567841,
		longitude: -66.35874939,
		municipalityId: 1131
	},
	{
		id: 2304,
		name: 'LAS PIEDRITAS',
		uta2020: '740560000000082',
		uta2010: '740560000000082',
		latitude: -34.017375946,
		longitude: -66.409713745,
		municipalityId: 1131
	},
	{
		id: 2305,
		name: 'EL MATACO',
		uta2020: '740560000000034',
		uta2010: '740560000000034',
		latitude: -33.252864665,
		longitude: -66.902174583,
		municipalityId: 1131
	},
	{
		id: 2306,
		name: 'LAS VIZCACHERAS',
		uta2020: '740560000000084',
		uta2010: '740560000000084',
		latitude: -33.565990448,
		longitude: -66.517753601,
		municipalityId: 1131
	},
	{
		id: 2307,
		name: 'SUYUQUE NUEVO',
		uta2020: '740560000000138',
		uta2010: '740560000000138',
		latitude: -33.134731293,
		longitude: -66.256767273,
		municipalityId: 1131
	},
	{
		id: 2308,
		name: 'CHARLONE',
		uta2020: '740560000000022',
		uta2010: '740560000000022',
		latitude: -33.833909847,
		longitude: -66.319749164,
		municipalityId: 1131
	},
	{
		id: 2309,
		name: 'DONADO',
		uta2020: '740560000000027',
		uta2010: '740560000000027',
		latitude: -33.787441254,
		longitude: -66.867179871,
		municipalityId: 1131
	},
	{
		id: 2310,
		name: 'EL CHARABON',
		uta2020: '740560000000030',
		uta2010: '740560000000030',
		latitude: -33.5760067,
		longitude: -66.16051798,
		municipalityId: 1131
	},
	{
		id: 2311,
		name: 'LA IRENE',
		uta2020: '740560000000063',
		uta2010: '740560000000063',
		latitude: -34.366882324,
		longitude: -66.305229187,
		municipalityId: 1131
	},
	{
		id: 2312,
		name: 'LA FORTUNA',
		uta2020: '740560000000062',
		uta2010: '740560000000062',
		latitude: -33.881061554,
		longitude: -66.600158691,
		municipalityId: 1131
	},
	{
		id: 2313,
		name: 'EL MOLLE',
		uta2020: '740560000000036',
		uta2010: '740560000000036',
		latitude: -34.14025116,
		longitude: -66.443283081,
		municipalityId: 1131
	},
	{
		id: 2314,
		name: 'JUAN W. GEZ',
		uta2020: '740560000000050',
		uta2010: '740560000000050',
		latitude: -33.390975213,
		longitude: -66.13228318,
		municipalityId: 1131
	},
	{
		id: 2315,
		name: 'EL PORTEZUELO',
		uta2020: '740560000000038',
		uta2010: '740560000000038',
		latitude: -33.120174408,
		longitude: -66.847434998,
		municipalityId: 1131
	},
	{
		id: 2316,
		name: 'EL RECUERDO',
		uta2020: '740560000000040',
		uta2010: '740560000000040',
		latitude: -34.651153564,
		longitude: -66.234802246,
		municipalityId: 1131
	},
	{
		id: 2317,
		name: 'LOS PUQUIOS',
		uta2020: '740560000000092',
		uta2010: '740560000000092',
		latitude: -33.315963745,
		longitude: -66.154716492,
		municipalityId: 1131
	},
	{
		id: 2318,
		name: 'CHOSMES',
		uta2020: '740560000060000',
		uta2010: '740560000060000',
		latitude: -33.395996895,
		longitude: -66.746397383,
		municipalityId: 1131
	},
	{
		id: 2319,
		name: 'SANTA ROSA',
		uta2020: '740560000000133',
		uta2010: '740560000000133',
		latitude: -33.636913872,
		longitude: -66.419041943,
		municipalityId: 1131
	},
	{
		id: 2320,
		name: 'VARELA',
		uta2020: '740560000000146',
		uta2010: '740560000000146',
		latitude: -34.12261759,
		longitude: -66.46370684,
		municipalityId: 1131
	},
	{
		id: 2321,
		name: 'LAS GAMAS',
		uta2020: '740560000000079',
		uta2010: '740560000000079',
		latitude: -34.259960175,
		longitude: -66.301620483,
		municipalityId: 1131
	},
	{
		id: 2322,
		name: 'DANIEL DONOVAN',
		uta2020: '740560000000026',
		uta2010: '740560000000026',
		latitude: -33.342046432,
		longitude: -66.228894186,
		municipalityId: 1131
	},
	{
		id: 2323,
		name: 'PUNTA DEL CERRO',
		uta2020: '740560000000113',
		uta2010: '740560000000113',
		latitude: -33.947845459,
		longitude: -66.516571045,
		municipalityId: 1131
	},
	{
		id: 2324,
		name: 'LOS CERRILLOS',
		uta2020: '740560000000087',
		uta2010: '740560000000087',
		latitude: -33.877292633,
		longitude: -66.469306946,
		municipalityId: 1131
	},
	{
		id: 2325,
		name: 'PASO DE LAS VACAS',
		uta2020: '740560000000104',
		uta2010: '740560000000104',
		latitude: -34.519591879,
		longitude: -66.744379749,
		municipalityId: 1131
	},
	{
		id: 2326,
		name: 'PESCADORES',
		uta2020: '740560000000107',
		uta2010: '740560000000107',
		latitude: -33.318824768,
		longitude: -66.48274231,
		municipalityId: 1131
	},
	{
		id: 2327,
		name: 'LAS BARRANCAS',
		uta2020: '740560000000076',
		uta2010: '740560000000076',
		latitude: -33.631122516,
		longitude: -66.284116613,
		municipalityId: 1131
	},
	{
		id: 2328,
		name: 'SAN MARTIN DEL ALTO NEGRO',
		uta2020: '740560000000126',
		uta2010: '740560000000126',
		latitude: -34.156228494,
		longitude: -66.099586553,
		municipalityId: 1131
	},
	{
		id: 2329,
		name: 'HIPOLITO YRIGOYEN',
		uta2020: '780495042030000',
		uta2010: '780495042030000',
		latitude: -47.566781236,
		longitude: -71.743475631,
		municipalityId: 1538
	},
	{
		id: 2330,
		name: 'LIMAY MAHUIDA',
		uta2020: '420915084020000',
		uta2010: '420915084020000',
		latitude: -37.159712053,
		longitude: -66.674540036,
		municipalityId: 1952
	},
	{
		id: 2331,
		name: 'LAS FLORES',
		uta2020: '460350035000029',
		uta2010: '460350035000029',
		latitude: -29.933307648,
		longitude: -65.767944336,
		municipalityId: 2001
	},
	{
		id: 2332,
		name: 'POLCO',
		uta2020: '460350035020000',
		uta2010: '460350035020000',
		latitude: -30.429315381,
		longitude: -66.358642246,
		municipalityId: 2001
	},
	{
		id: 2333,
		name: 'EL GARABATO',
		uta2020: '460350035000010',
		uta2010: '460350035000010',
		latitude: -30.298702643,
		longitude: -66.132382749,
		municipalityId: 2001
	},
	{
		id: 2334,
		name: 'SANTA RITA DE LA ZANJA',
		uta2020: '460350035000049',
		uta2010: '460350035000049',
		latitude: -30.24124624,
		longitude: -65.847528784,
		municipalityId: 2001
	},
	{
		id: 2335,
		name: 'VILLA CARMELA',
		uta2020: '460350035000051',
		uta2010: '460350035000051',
		latitude: -30.299029245,
		longitude: -66.308808436,
		municipalityId: 2001
	},
	{
		id: 2336,
		name: 'SANTA LUCIA',
		uta2020: '460350035000048',
		uta2010: '460350035000048',
		latitude: -30.475311,
		longitude: -66.33928,
		municipalityId: 2001
	},
	{
		id: 2337,
		name: 'BASE CHAMICAL',
		uta2020: '460350035000004',
		uta2010: '460350035000004',
		latitude: -30.352056,
		longitude: -66.310107,
		municipalityId: 2001
	},
	{
		id: 2338,
		name: 'ESQUINA DEL NORTE',
		uta2020: '460350035000016',
		uta2010: '460350035000016',
		latitude: -30.42337525,
		longitude: -66.092553727,
		municipalityId: 2001
	},
	{
		id: 2339,
		name: 'CHAMICAL',
		uta2020: '460350035010000',
		uta2010: '460350035010000',
		latitude: -30.377295161,
		longitude: -66.324036884,
		municipalityId: 2001
	},
	{
		id: 2340,
		name: 'LA RESISTENCIA',
		uta2020: '460350035000024',
		uta2010: '460350035000024',
		latitude: -30.229141956,
		longitude: -65.606696016,
		municipalityId: 2001
	},
	{
		id: 2341,
		name: 'EL RETAMO',
		uta2020: '460350035000014',
		uta2010: '460350035000014',
		latitude: -30.149127116,
		longitude: -65.865359665,
		municipalityId: 2001
	},
	{
		id: 2342,
		name: 'POZO REDONDO',
		uta2020: '460350035000039',
		uta2010: '460350035000039',
		latitude: -30.141009375,
		longitude: -65.578907204,
		municipalityId: 2001
	},
	{
		id: 2343,
		name: 'POZO DE LA VACA',
		uta2020: '460350035000038',
		uta2010: '460350035000038',
		latitude: -30.380110815,
		longitude: -65.632356122,
		municipalityId: 2001
	},
	{
		id: 2344,
		name: 'LA AGUADITA',
		uta2020: '460350035000018',
		uta2010: '460350035000018',
		latitude: -30.40431767,
		longitude: -66.36689997,
		municipalityId: 2001
	},
	{
		id: 2345,
		name: 'ROSILLO MUERTO',
		uta2020: '460350035000044',
		uta2010: '460350035000044',
		latitude: -30.327407837,
		longitude: -66.421470642,
		municipalityId: 2001
	},
	{
		id: 2346,
		name: 'CHULO',
		uta2020: '460350035000007',
		uta2010: '460350035000007',
		latitude: -30.40560563,
		longitude: -66.26235978,
		municipalityId: 2001
	},
	{
		id: 2347,
		name: 'EL QUEBRACHAL',
		uta2020: '460350035000012',
		uta2010: '460350035000012',
		latitude: -30.491977254,
		longitude: -66.180231281,
		municipalityId: 2001
	},
	{
		id: 2348,
		name: 'EL CARMEN',
		uta2020: '460350035000008',
		uta2010: '460350035000008',
		latitude: -30.123502731,
		longitude: -66.246025085,
		municipalityId: 2001
	},
	{
		id: 2349,
		name: 'BELLA VISTA',
		uta2020: '460350035000005',
		uta2010: '460350035000005',
		latitude: -30.50524115,
		longitude: -66.25970943,
		municipalityId: 2001
	},
	{
		id: 2350,
		name: 'LAS TALAS',
		uta2020: '460350035000032',
		uta2010: '460350035000032',
		latitude: -30.383011083,
		longitude: -66.301500851,
		municipalityId: 2001
	},
	{
		id: 2351,
		name: 'LOS BALDES',
		uta2020: '460350035000033',
		uta2010: '460350035000033',
		latitude: -30.185417175,
		longitude: -65.818000794,
		municipalityId: 2001
	},
	{
		id: 2352,
		name: 'LOS BORDOS',
		uta2020: '460350035000035',
		uta2010: '460350035000035',
		latitude: -30.33850146,
		longitude: -66.37398209,
		municipalityId: 2001
	},
	{
		id: 2353,
		name: 'EL MOLLAR',
		uta2020: '460350035000011',
		uta2010: '460350035000011',
		latitude: -30.472563221,
		longitude: -66.28024807,
		municipalityId: 2001
	},
	{
		id: 2354,
		name: 'LAS AMOLADERAS',
		uta2020: '460350035000027',
		uta2010: '460350035000027',
		latitude: -30.387260437,
		longitude: -66.368331909,
		municipalityId: 2001
	},
	{
		id: 2355,
		name: 'BAJO DE LUCAS',
		uta2020: '460350035000003',
		uta2010: '460350035000003',
		latitude: -30.38569434,
		longitude: -66.26041862,
		municipalityId: 2001
	},
	{
		id: 2356,
		name: 'SANTA BARBARA',
		uta2020: '460350035000047',
		uta2010: '460350035000047',
		latitude: -30.511174167,
		longitude: -66.321996615,
		municipalityId: 2001
	},
	{
		id: 2357,
		name: 'LA CORTADA',
		uta2020: '460350035000021',
		uta2010: '460350035000021',
		latitude: -30.25122053,
		longitude: -66.42726618,
		municipalityId: 2001
	},
	{
		id: 2358,
		name: 'LA SERENA',
		uta2020: '460350035000025',
		uta2010: '460350035000025',
		latitude: -30.249882519,
		longitude: -66.255025326,
		municipalityId: 2001
	},
	{
		id: 2359,
		name: 'SAN RAFAEL',
		uta2020: '460350035000046',
		uta2010: '460350035000046',
		latitude: -30.235923767,
		longitude: -66.185264587,
		municipalityId: 2001
	},
	{
		id: 2360,
		name: 'VILLA ASTOLFI',
		uta2020: '066380638040013',
		uta2010: '066380638040013',
		latitude: -34.485898345,
		longitude: -58.87683357,
		municipalityId: 602
	},
	{
		id: 2361,
		name: 'MAQUINISTA F. SAVIO (OESTE)',
		uta2020: '066380638040007',
		uta2010: '066380638040007',
		latitude: -34.410617255,
		longitude: -58.782170109,
		municipalityId: 602
	},
	{
		id: 2362,
		name: 'TORTUGUITAS',
		uta2020: '066380638040012',
		uta2010: '066380638040012',
		latitude: -34.457806172,
		longitude: -58.762090721,
		municipalityId: 602
	},
	{
		id: 2363,
		name: 'LOS CACHORROS',
		uta2020: '066380638040004',
		uta2010: '066380638040004',
		latitude: -34.425002827,
		longitude: -58.7950004,
		municipalityId: 602
	},
	{
		id: 2364,
		name: 'ROBERTO DE VICENZO',
		uta2020: '066380638040010',
		uta2010: '066380638040010',
		latitude: -34.436965278,
		longitude: -58.766994178,
		municipalityId: 602
	},
	{
		id: 2365,
		name: 'LA LONJA',
		uta2020: '066380638040003',
		uta2010: '066380638040003',
		latitude: -34.44481494,
		longitude: -58.839373086,
		municipalityId: 602
	},
	{
		id: 2366,
		name: 'FATIMA',
		uta2020: '066380638040002',
		uta2010: '066380638040002',
		latitude: -34.407257584,
		longitude: -58.974691291,
		municipalityId: 602
	},
	{
		id: 2367,
		name: 'MANZONE',
		uta2020: '066380638040006',
		uta2010: '066380638040006',
		latitude: -34.528730877,
		longitude: -58.877599509,
		municipalityId: 602
	},
	{
		id: 2368,
		name: 'PILAR',
		uta2020: '066380638040008',
		uta2010: '066380638040008',
		latitude: -34.46633184,
		longitude: -58.922719789,
		municipalityId: 602
	},
	{
		id: 2369,
		name: 'BARRIO PARQUE ALMIRANTE IRIZAR',
		uta2020: '066380638000001',
		uta2010: '066380638000001',
		latitude: -34.422005581,
		longitude: -58.952837882,
		municipalityId: 602
	},
	{
		id: 2370,
		name: 'MANZANARES',
		uta2020: '066380638040005',
		uta2010: '066380638040005',
		latitude: -34.452630933,
		longitude: -59.013660663,
		municipalityId: 602
	},
	{
		id: 2371,
		name: 'DEL VISO',
		uta2020: '066380638040001',
		uta2010: '066380638040001',
		latitude: -34.449400946,
		longitude: -58.800911973,
		municipalityId: 602
	},
	{
		id: 2372,
		name: 'SANTA TERESA',
		uta2020: '066380638040011',
		uta2010: '066380638040011',
		latitude: -34.436691416,
		longitude: -58.757347016,
		municipalityId: 602
	},
	{
		id: 2373,
		name: 'ZELAYA',
		uta2020: '066380638040015',
		uta2010: '066380638040015',
		latitude: -34.365718284,
		longitude: -58.893696089,
		municipalityId: 602
	},
	{
		id: 2374,
		name: 'PRESIDENTE DERQUI',
		uta2020: '066380638040009',
		uta2010: '066380638040009',
		latitude: -34.492861693,
		longitude: -58.841698522,
		municipalityId: 602
	},
	{
		id: 2375,
		name: 'VILLA ROSA',
		uta2020: '066380638040014',
		uta2010: '066380638040014',
		latitude: -34.407732713,
		longitude: -58.853934578,
		municipalityId: 602
	},
	{
		id: 2376,
		name: 'CLUB DE CAMPO LARENA - LOS QUINCHOS',
		uta2020: '066380638000003',
		uta2010: '066380638000003',
		latitude: -34.391141268,
		longitude: -59.00073321,
		municipalityId: 602
	},
	{
		id: 2377,
		name: 'LOS NOQUES',
		uta2020: '660490112000114',
		uta2010: '660490112000114',
		latitude: -24.55378446,
		longitude: -65.10780492,
		municipalityId: 1857
	},
	{
		id: 2378,
		name: 'EL SAUCE',
		uta2020: '660490112000053',
		uta2010: '660490112000053',
		latitude: -24.59677887,
		longitude: -65.173278809,
		municipalityId: 1857
	},
	{
		id: 2379,
		name: 'EL CEIBAL',
		uta2020: '660490112000041',
		uta2010: '660490112000041',
		latitude: -24.561146344,
		longitude: -65.184716643,
		municipalityId: 1857
	},
	{
		id: 2380,
		name: 'EL BORDO',
		uta2020: '660490112030000',
		uta2010: '660490112030000',
		latitude: -24.661074329,
		longitude: -65.105429887,
		municipalityId: 1857
	},
	{
		id: 2381,
		name: 'EL PRADO',
		uta2020: '660490112000049',
		uta2010: '660490112000049',
		latitude: -24.63009,
		longitude: -65.09369,
		municipalityId: 1857
	},
	{
		id: 2382,
		name: 'CAMPO DONNET',
		uta2020: '821264128000009',
		uta2010: '821264128000009',
		latitude: -31.793093413,
		longitude: -61.546051117,
		municipalityId: 933
	},
	{
		id: 2383,
		name: 'AVENA',
		uta2020: '821264128000001',
		uta2010: '821264128000001',
		latitude: -31.842542648,
		longitude: -61.562709808,
		municipalityId: 933
	},
	{
		id: 2384,
		name: 'SAN MARTIN DE LAS ESCOBAS',
		uta2020: '821264128150000',
		uta2010: '821264128150000',
		latitude: -31.859673747,
		longitude: -61.570215776,
		municipalityId: 933
	},
	{
		id: 2385,
		name: 'CAMPO EL DANUBIO',
		uta2020: '821264128000012',
		uta2010: '821264128000012',
		latitude: -31.897760138,
		longitude: -61.512587007,
		municipalityId: 933
	},
	{
		id: 2386,
		name: 'CAMPO OITANA',
		uta2020: '821264128000021',
		uta2010: '821264128000021',
		latitude: -31.832900503,
		longitude: -61.649189888,
		municipalityId: 933
	},
	{
		id: 2387,
		name: 'VILLA ELOISA',
		uta2020: '820562945150000',
		uta2010: '820562945150000',
		latitude: -32.964324157,
		longitude: -61.547833326,
		municipalityId: 739
	},
	{
		id: 2388,
		name: 'CAMPO LOMA PARTIDA',
		uta2020: '820562945000011',
		uta2010: '820562945000011',
		latitude: -32.934202425,
		longitude: -61.6156673,
		municipalityId: 739
	},
	{
		id: 2389,
		name: 'SAN RICARDO',
		uta2020: '820562945000036',
		uta2010: '820562945000036',
		latitude: -33.027848898,
		longitude: -61.601181763,
		municipalityId: 739
	},
	{
		id: 2390,
		name: 'FUNES',
		uta2020: '820840189140000',
		uta2010: '820840189140000',
		latitude: -32.922782783,
		longitude: -60.812180283,
		municipalityId: 809
	},
	{
		id: 2391,
		name: 'PASO ITU',
		uta2020: '180560098000034',
		uta2010: '180560098000034',
		latitude: -29.05258734,
		longitude: -56.56060936,
		municipalityId: 2049
	},
	{
		id: 2392,
		name: 'LAS PALMITAS',
		uta2020: '180560098000026',
		uta2010: '180560098000026',
		latitude: -29.021003788,
		longitude: -56.516769635,
		municipalityId: 2049
	},
	{
		id: 2393,
		name: 'PANCHO CUE',
		uta2020: '180560098000033',
		uta2010: '180560098000033',
		latitude: -29.081435408,
		longitude: -56.555991812,
		municipalityId: 2049
	},
	{
		id: 2394,
		name: 'ALVEAR',
		uta2020: '180560098010000',
		uta2010: '180560098010000',
		latitude: -29.098599096,
		longitude: -56.55216313,
		municipalityId: 2049
	},
	{
		id: 2395,
		name: 'ALTAMIRA',
		uta2020: '180560098000003',
		uta2010: '180560098000003',
		latitude: -28.748365404,
		longitude: -56.607341811,
		municipalityId: 2049
	},
	{
		id: 2396,
		name: 'SANTA ROSA',
		uta2020: '180560098000045',
		uta2010: '180560098000045',
		latitude: -28.945953656,
		longitude: -56.558871851,
		municipalityId: 2049
	},
	{
		id: 2397,
		name: 'AGUAPEY',
		uta2020: '180560098000002',
		uta2010: '180560098000002',
		latitude: -29.106201172,
		longitude: -56.559669495,
		municipalityId: 2049
	},
	{
		id: 2398,
		name: 'PIRAYU',
		uta2020: '180560098000035',
		uta2010: '180560098000035',
		latitude: -28.875062374,
		longitude: -56.400329814,
		municipalityId: 2049
	},
	{
		id: 2399,
		name: 'ARROYO MENDEZ',
		uta2020: '180560098000004',
		uta2010: '180560098000004',
		latitude: -29.082409825,
		longitude: -56.539718997,
		municipalityId: 2049
	},
	{
		id: 2400,
		name: 'SANTA ANA',
		uta2020: '180560098000042',
		uta2010: '180560098000042',
		latitude: -29.02926636,
		longitude: -56.505584769,
		municipalityId: 2049
	},
	{
		id: 2401,
		name: 'SANTA ISABEL',
		uta2020: '180560098000043',
		uta2010: '180560098000043',
		latitude: -28.574937822,
		longitude: -56.554878281,
		municipalityId: 2049
	},
	{
		id: 2402,
		name: 'LAS PALMAS',
		uta2020: '140772413020000',
		uta2010: '140772413020000',
		latitude: -31.380007624,
		longitude: -65.289975724,
		municipalityId: 160
	},
	{
		id: 2403,
		name: 'EL POTRERO',
		uta2020: '140772413000015',
		uta2010: '140772413000015',
		latitude: -31.3737451,
		longitude: -65.3745605,
		municipalityId: 160
	},
	{
		id: 2404,
		name: 'BALDERRAMA SUR',
		uta2020: '900918560000011',
		uta2010: '900918560000011',
		latitude: -27.21457,
		longitude: -65.40006,
		municipalityId: 2190
	},
	{
		id: 2405,
		name: 'YERBA BUENA',
		uta2020: '900918560000146',
		uta2010: '900918560000146',
		latitude: -27.23765,
		longitude: -65.41795,
		municipalityId: 2190
	},
	{
		id: 2406,
		name: 'EL JARDIN',
		uta2020: '900918560000030',
		uta2010: '900918560000030',
		latitude: -27.2462,
		longitude: -65.40203,
		municipalityId: 2190
	},
	{
		id: 2407,
		name: 'SAN FRANCISCO DE SANTA FE',
		uta2020: '820422721240000',
		uta2010: '820422721240000',
		latitude: -33.590540004,
		longitude: -62.124469393,
		municipalityId: 901
	},
	{
		id: 2408,
		name: 'JAIME PETER',
		uta2020: '140492273000047',
		uta2010: '140492273000047',
		latitude: -30.409496725,
		longitude: -64.538726844,
		municipalityId: 73
	},
	{
		id: 2409,
		name: 'CHUÑA',
		uta2020: '140492273030000',
		uta2010: '140492273030000',
		latitude: -30.468727461,
		longitude: -64.671228766,
		municipalityId: 73
	},
	{
		id: 2410,
		name: 'COLONIA BARGE',
		uta2020: '140632336060000',
		uta2010: '140632336060000',
		latitude: -33.258541155,
		longitude: -62.608162827,
		municipalityId: 187
	},
	{
		id: 2411,
		name: 'CASTRO URDIALES',
		uta2020: '140632336000020',
		uta2010: '140632336000020',
		latitude: -33.258171082,
		longitude: -62.607509613,
		municipalityId: 187
	},
	{
		id: 2412,
		name: 'DOS HERMANOS',
		uta2020: '063510351000002',
		uta2010: '063510351000002',
		latitude: -34.471866608,
		longitude: -62.092647552,
		municipalityId: 603
	},
	{
		id: 2413,
		name: 'COLONIA GENERAL PINTO',
		uta2020: '063510351000001',
		uta2010: '063510351000001',
		latitude: -34.8011277,
		longitude: -61.8636453,
		municipalityId: 603
	},
	{
		id: 2414,
		name: 'LOS CALLEJONES',
		uta2020: '063510351000010',
		uta2010: '063510351000010',
		latitude: -34.75596,
		longitude: -62.18387,
		municipalityId: 603
	},
	{
		id: 2415,
		name: 'DUSSAUD',
		uta2020: '063510351000003',
		uta2010: '063510351000003',
		latitude: -34.7922211,
		longitude: -61.7788899,
		municipalityId: 603
	},
	{
		id: 2416,
		name: 'VILLA FRANCIA',
		uta2020: '063510351040000',
		uta2010: '063510351040000',
		latitude: -34.791316021,
		longitude: -62.201109069,
		municipalityId: 603
	},
	{
		id: 2417,
		name: 'EL PEREGRINO',
		uta2020: '063510351000004',
		uta2010: '063510351000004',
		latitude: -34.595745087,
		longitude: -62.121814728,
		municipalityId: 603
	},
	{
		id: 2418,
		name: 'SANTA ANGELA',
		uta2020: '063510351000014',
		uta2010: '063510351000014',
		latitude: -34.85986,
		longitude: -61.87374,
		municipalityId: 603
	},
	{
		id: 2419,
		name: 'GENERAL PINTO',
		uta2020: '063510351020000',
		uta2010: '063510351020000',
		latitude: -34.764155991,
		longitude: -61.890067492,
		municipalityId: 603
	},
	{
		id: 2420,
		name: 'VILLA ROTH',
		uta2020: '063510351050000',
		uta2010: '063510351050000',
		latitude: -34.579830228,
		longitude: -62.171048923,
		municipalityId: 603
	},
	{
		id: 2421,
		name: 'LA MARGARITA',
		uta2020: '063510351000008',
		uta2010: '063510351000008',
		latitude: -34.5284039,
		longitude: -62.0821514,
		municipalityId: 603
	},
	{
		id: 2422,
		name: 'GERMANIA',
		uta2020: '063510351030000',
		uta2010: '063510351030000',
		latitude: -34.576111833,
		longitude: -62.051830689,
		municipalityId: 603
	},
	{
		id: 2423,
		name: 'PAZOS KANKI',
		uta2020: '063510351000012',
		uta2010: '063510351000012',
		latitude: -34.72372,
		longitude: -62.0962,
		municipalityId: 603
	},
	{
		id: 2424,
		name: 'PERISEE',
		uta2020: '063510351000013',
		uta2010: '063510351000013',
		latitude: -34.748565,
		longitude: -61.8409659,
		municipalityId: 603
	},
	{
		id: 2425,
		name: 'GUNTHER',
		uta2020: '063510351035000',
		uta2010: '063510351035000',
		latitude: -34.599499531,
		longitude: -61.916498908,
		municipalityId: 603
	},
	{
		id: 2426,
		name: 'COLONIA SAN RICARDO',
		uta2020: '063510351010000',
		uta2010: '063510351010000',
		latitude: -34.41621373,
		longitude: -61.928014175,
		municipalityId: 603
	},
	{
		id: 2427,
		name: 'VILLA SAN MARTIN',
		uta2020: '861050119010000',
		uta2010: '861050119010000',
		latitude: -28.326665429,
		longitude: -64.105600189,
		municipalityId: 1412
	},
	{
		id: 2428,
		name: 'POZO BETBEDER',
		uta2020: '861336539040000',
		uta2010: '861336539040000',
		latitude: -26.437038187,
		longitude: -64.318435103,
		municipalityId: 1379
	},
	{
		id: 2429,
		name: 'ROSALES',
		uta2020: '140840644070000',
		uta2010: '140840644070000',
		latitude: -34.171790726,
		longitude: -63.153479847,
		municipalityId: 499
	},
	{
		id: 2430,
		name: 'DIAZ',
		uta2020: '821053771110000',
		uta2010: '821053771110000',
		latitude: -32.375058824,
		longitude: -61.091442512,
		municipalityId: 978
	},
	{
		id: 2431,
		name: 'GRANADERO BAIGORRIA',
		uta2020: '820840196160000',
		uta2010: '820840196160000',
		latitude: -32.861364166,
		longitude: -60.706215977,
		municipalityId: 810
	},
	{
		id: 2432,
		name: 'EL PRADO',
		uta2020: '820840196000012',
		uta2010: '820840196000012',
		latitude: -32.85000565,
		longitude: -60.699902169,
		municipalityId: 810
	},
	{
		id: 2433,
		name: 'LAS GRAMILLAS',
		uta2020: '141052693150000',
		uta2010: '141052693150000',
		latitude: -31.088255513,
		longitude: -63.241844462,
		municipalityId: 252
	},
	{
		id: 2434,
		name: 'RAMAYON',
		uta2020: '821123939110000',
		uta2010: '821123939110000',
		latitude: -30.675815339,
		longitude: -60.499555379,
		municipalityId: 1014
	},
	{
		id: 2435,
		name: 'VILLA MERCEDES',
		uta2020: '821123939000065',
		uta2010: '821123939000065',
		latitude: -30.6726767,
		longitude: -60.5057233,
		municipalityId: 1014
	},
	{
		id: 2436,
		name: 'ESTANCIA SAN JUAN',
		uta2020: '821123939000022',
		uta2010: '821123939000022',
		latitude: -30.534691905,
		longitude: -60.589973071,
		municipalityId: 1014
	},
	{
		id: 2437,
		name: 'VILLA LASTENIA',
		uta2020: '821123939000064',
		uta2010: '821123939000064',
		latitude: -30.6845252,
		longitude: -60.4595357,
		municipalityId: 1014
	},
	{
		id: 2438,
		name: 'SAN JUAN',
		uta2020: '821123939000055',
		uta2010: '821123939000055',
		latitude: -30.530651093,
		longitude: -60.592327118,
		municipalityId: 1014
	},
	{
		id: 2439,
		name: 'PEDERNAL',
		uta2020: '300159065130000',
		uta2010: '300159065130000',
		latitude: -31.671472966,
		longitude: -58.230791274,
		municipalityId: 1796
	},
	{
		id: 2440,
		name: 'COLONIA SANTA ISABEL',
		uta2020: '300159065000018',
		uta2010: '300159065000018',
		latitude: -31.717716031,
		longitude: -58.195432047,
		municipalityId: 1796
	},
	{
		id: 2441,
		name: 'PLAYA MAGAGNA',
		uta2020: '260770112010000',
		uta2010: '260770112010000',
		latitude: -43.382120862,
		longitude: -65.044932568,
		municipalityId: 565
	},
	{
		id: 2442,
		name: 'RAWSON',
		uta2020: '260770112030000',
		uta2010: '260770112030000',
		latitude: -43.301051678,
		longitude: -65.095520234,
		municipalityId: 565
	},
	{
		id: 2443,
		name: 'PLAYA UNION',
		uta2020: '260770112020000',
		uta2010: '260770112020000',
		latitude: -43.321940853,
		longitude: -65.047598735,
		municipalityId: 565
	},
	{
		id: 2444,
		name: 'LA RAMADITA',
		uta2020: '900708413000092',
		uta2010: '900708413000092',
		latitude: -27.09195137,
		longitude: -65.648391724,
		municipalityId: 2203
	},
	{
		id: 2445,
		name: 'LOS SOSA',
		uta2020: '900708413000108',
		uta2010: '900708413000108',
		latitude: -27.1497326,
		longitude: -65.5230978,
		municipalityId: 2203
	},
	{
		id: 2446,
		name: 'LAS MESADAS',
		uta2020: '900708413000096',
		uta2010: '900708413000096',
		latitude: -27.0983483,
		longitude: -65.5664878,
		municipalityId: 2203
	},
	{
		id: 2447,
		name: 'EL NARANJAL',
		uta2020: '900708413000045',
		uta2010: '900708413000045',
		latitude: -27.048265457,
		longitude: -65.662994385,
		municipalityId: 2203
	},
	{
		id: 2448,
		name: 'FLORIDA',
		uta2020: '068610861010002',
		uta2010: '068610861010002',
		latitude: -34.532743264,
		longitude: -58.49109796,
		municipalityId: 604
	},
	{
		id: 2449,
		name: 'LA LUCILA',
		uta2020: '068610861010004',
		uta2010: '068610861010004',
		latitude: -34.498543333,
		longitude: -58.48658249,
		municipalityId: 604
	},
	{
		id: 2450,
		name: 'MUNRO',
		uta2020: '068610861010005',
		uta2010: '068610861010005',
		latitude: -34.527262308,
		longitude: -58.525506059,
		municipalityId: 604
	},
	{
		id: 2451,
		name: 'OLIVOS',
		uta2020: '068610861010006',
		uta2010: '068610861010006',
		latitude: -34.512161434,
		longitude: -58.498544423,
		municipalityId: 604
	},
	{
		id: 2452,
		name: 'VILLA ADELINA',
		uta2020: '068610861010008',
		uta2010: '068610861010008',
		latitude: -34.528759649,
		longitude: -58.546024262,
		municipalityId: 604
	},
	{
		id: 2453,
		name: 'VILLA MARTELLI',
		uta2020: '068610861010009',
		uta2010: '068610861010009',
		latitude: -34.552597953,
		longitude: -58.509143264,
		municipalityId: 604
	},
	{
		id: 2454,
		name: 'FLORIDA OESTE',
		uta2020: '068610861010003',
		uta2010: '068610861010003',
		latitude: -34.539422337,
		longitude: -58.514813794,
		municipalityId: 604
	},
	{
		id: 2455,
		name: 'VICENTE LOPEZ',
		uta2020: '068610861010007',
		uta2010: '068610861010007',
		latitude: -34.525536745,
		longitude: -58.473649503,
		municipalityId: 604
	},
	{
		id: 2456,
		name: 'CARAPACHAY',
		uta2020: '068610861010001',
		uta2010: '068610861010001',
		latitude: -34.525914969,
		longitude: -58.535763943,
		municipalityId: 604
	},
	{
		id: 2457,
		name: 'JUBILEO',
		uta2020: '301139930030000',
		uta2010: '301139930030000',
		latitude: -31.733673335,
		longitude: -58.634038044,
		municipalityId: 1658
	},
	{
		id: 2458,
		name: 'EL MANZANO',
		uta2020: '580770147000020',
		uta2010: '580770147000020',
		latitude: -37.115215302,
		longitude: -70.619155884,
		municipalityId: 2360
	},
	{
		id: 2459,
		name: 'HUINGANCO',
		uta2020: '580770147020000',
		uta2010: '580770147020000',
		latitude: -37.162253742,
		longitude: -70.624035077,
		municipalityId: 2360
	},
	{
		id: 2460,
		name: 'BUTALON NORTE',
		uta2020: '580770147000008',
		uta2010: '580770147000008',
		latitude: -36.98749803,
		longitude: -70.69145901,
		municipalityId: 2360
	},
	{
		id: 2461,
		name: 'CHARRA RUCA',
		uta2020: '580770147000012',
		uta2010: '580770147000012',
		latitude: -37.136264985,
		longitude: -70.616336885,
		municipalityId: 2360
	},
	{
		id: 2462,
		name: 'CAPILLA DEL CARMEN',
		uta2020: '140070070000011',
		uta2010: '140070070000011',
		latitude: -32.200447531,
		longitude: -64.821341085,
		municipalityId: 122
	},
	{
		id: 2463,
		name: 'EL DURAZNO',
		uta2020: '140070070055000',
		uta2010: '140070070055000',
		latitude: -32.169565612,
		longitude: -64.774771053,
		municipalityId: 122
	},
	{
		id: 2464,
		name: 'RIO DEL DURAZNO',
		uta2020: '140070070000052',
		uta2010: '140070070000052',
		latitude: -32.170738803,
		longitude: -64.772251938,
		municipalityId: 122
	},
	{
		id: 2465,
		name: 'VILLA YACANTO',
		uta2020: '140070070360000',
		uta2010: '140070070360000',
		latitude: -32.103782531,
		longitude: -64.754102829,
		municipalityId: 122
	},
	{
		id: 2466,
		name: 'QUETREQUEN',
		uta2020: '421265119060000',
		uta2010: '421265119060000',
		latitude: -35.054843932,
		longitude: -64.52136934,
		municipalityId: 1947
	},
	{
		id: 2467,
		name: 'OVEJERIA',
		uta2020: '661120259000124',
		uta2010: '661120259000124',
		latitude: -25.387624741,
		longitude: -64.714851379,
		municipalityId: 1829
	},
	{
		id: 2468,
		name: 'EL GALPON',
		uta2020: '661120259010000',
		uta2010: '661120259010000',
		latitude: -25.39158645,
		longitude: -64.659506293,
		municipalityId: 1829
	},
	{
		id: 2469,
		name: 'PRINGLES',
		uta2020: '661120259000135',
		uta2010: '661120259000135',
		latitude: -25.389692457,
		longitude: -64.065499566,
		municipalityId: 1829
	},
	{
		id: 2470,
		name: 'LAGUNITA',
		uta2020: '661120259000102',
		uta2010: '661120259000102',
		latitude: -25.50881,
		longitude: -64.02082,
		municipalityId: 1829
	},
	{
		id: 2471,
		name: 'SANTA ANA',
		uta2020: '661120259000151',
		uta2010: '661120259000151',
		latitude: -25.556015015,
		longitude: -64.002113342,
		municipalityId: 1829
	},
	{
		id: 2472,
		name: 'EL ALTAMISQUI',
		uta2020: '661120259000024',
		uta2010: '661120259000024',
		latitude: -25.141799839,
		longitude: -64.164992428,
		municipalityId: 1829
	},
	{
		id: 2473,
		name: 'CUCHI POZO',
		uta2020: '661120259000019',
		uta2010: '661120259000019',
		latitude: -25.244243622,
		longitude: -64.383293152,
		municipalityId: 1829
	},
	{
		id: 2474,
		name: 'EL VALLECITO',
		uta2020: '661120259000044',
		uta2010: '661120259000044',
		latitude: -25.677926677,
		longitude: -63.993130393,
		municipalityId: 1829
	},
	{
		id: 2475,
		name: 'AGUA BLANCA',
		uta2020: '661120259000002',
		uta2010: '661120259000002',
		latitude: -25.51643753,
		longitude: -64.605926514,
		municipalityId: 1829
	},
	{
		id: 2476,
		name: 'SAN JOSE DE ORQUERA',
		uta2020: '661120259080000',
		uta2010: '661120259080000',
		latitude: -25.278309417,
		longitude: -64.085056165,
		municipalityId: 1829
	},
	{
		id: 2477,
		name: 'POTRERO',
		uta2020: '661120259000133',
		uta2010: '661120259000133',
		latitude: -25.55793,
		longitude: -63.99448,
		municipalityId: 1829
	},
	{
		id: 2478,
		name: 'EL MOJON',
		uta2020: '661120259000033',
		uta2010: '661120259000033',
		latitude: -25.541513443,
		longitude: -63.994903564,
		municipalityId: 1829
	},
	{
		id: 2479,
		name: 'EL GUAYACAN',
		uta2020: '661120259000030',
		uta2010: '661120259000030',
		latitude: -25.571641922,
		longitude: -64.774848938,
		municipalityId: 1829
	},
	{
		id: 2480,
		name: 'LOS ROSALES',
		uta2020: '661120259000114',
		uta2010: '661120259000114',
		latitude: -25.601090048,
		longitude: -63.98209267,
		municipalityId: 1829
	},
	{
		id: 2481,
		name: 'BAJO GRANDE',
		uta2020: '661120259000008',
		uta2010: '661120259000008',
		latitude: -25.339698791,
		longitude: -64.46232605,
		municipalityId: 1829
	},
	{
		id: 2482,
		name: 'LAS VERTIENTES',
		uta2020: '661120259000109',
		uta2010: '661120259000109',
		latitude: -25.503425598,
		longitude: -64.731445313,
		municipalityId: 1829
	},
	{
		id: 2483,
		name: 'SALADILLO',
		uta2020: '661120259000148',
		uta2010: '661120259000148',
		latitude: -25.493717194,
		longitude: -64.598884583,
		municipalityId: 1829
	},
	{
		id: 2484,
		name: 'EL SAUZAL',
		uta2020: '661120259000042',
		uta2010: '661120259000042',
		latitude: -25.362768173,
		longitude: -64.570053101,
		municipalityId: 1829
	},
	{
		id: 2485,
		name: 'ALTO DEL MISTOL',
		uta2020: '661120259000004',
		uta2010: '661120259000004',
		latitude: -25.262626622,
		longitude: -64.130074309,
		municipalityId: 1829
	},
	{
		id: 2486,
		name: 'EL BORDO',
		uta2020: '661120259000025',
		uta2010: '661120259000025',
		latitude: -25.375354969,
		longitude: -64.772932665,
		municipalityId: 1829
	},
	{
		id: 2487,
		name: 'QUEBRACHO HERRADO',
		uta2020: '661120259000140',
		uta2010: '661120259000140',
		latitude: -25.340673447,
		longitude: -64.551467895,
		municipalityId: 1829
	},
	{
		id: 2488,
		name: 'EL PACARA',
		uta2020: '661120259000036',
		uta2010: '661120259000036',
		latitude: -25.125185013,
		longitude: -64.186203003,
		municipalityId: 1829
	},
	{
		id: 2489,
		name: 'POBLACION DE ORTEGA',
		uta2020: '661120259000132',
		uta2010: '661120259000132',
		latitude: -25.33388784,
		longitude: -64.581177065,
		municipalityId: 1829
	},
	{
		id: 2490,
		name: 'EL PORVENIR',
		uta2020: '661120259000039',
		uta2010: '661120259000039',
		latitude: -25.580785751,
		longitude: -64.630973816,
		municipalityId: 1829
	},
	{
		id: 2491,
		name: 'EL TUNAL',
		uta2020: '661120259020000',
		uta2010: '661120259020000',
		latitude: -25.265264577,
		longitude: -64.406104223,
		municipalityId: 1829
	},
	{
		id: 2492,
		name: 'CORRAL QUEMADO',
		uta2020: '661120259000017',
		uta2010: '661120259000017',
		latitude: -25.331406545,
		longitude: -64.073004991,
		municipalityId: 1829
	},
	{
		id: 2493,
		name: 'PASO DE LAS CARRERAS',
		uta2020: '661120259000126',
		uta2010: '661120259000126',
		latitude: -25.170207243,
		longitude: -64.299068011,
		municipalityId: 1829
	},
	{
		id: 2494,
		name: 'LA POBLACION',
		uta2020: '661120259000095',
		uta2010: '661120259000095',
		latitude: -25.337371826,
		longitude: -64.576057434,
		municipalityId: 1829
	},
	{
		id: 2495,
		name: 'LONKOY',
		uta2020: '063150315000022',
		uta2010: '063150315000022',
		latitude: -37.202106,
		longitude: -57.4168401,
		municipalityId: 605
	},
	{
		id: 2496,
		name: 'EL MODELO',
		uta2020: '063150315000008',
		uta2010: '063150315000008',
		latitude: -36.974829377,
		longitude: -57.154190477,
		municipalityId: 605
	},
	{
		id: 2497,
		name: 'LOS ZORZALES',
		uta2020: '063150315000023',
		uta2010: '063150315000023',
		latitude: -36.9515672,
		longitude: -57.0925546,
		municipalityId: 605
	},
	{
		id: 2498,
		name: 'TRELLES',
		uta2020: '063150315000030',
		uta2010: '063150315000030',
		latitude: -37.3508571,
		longitude: -57.4659245,
		municipalityId: 605
	},
	{
		id: 2499,
		name: 'MEDALAND',
		uta2020: '063150315000025',
		uta2010: '063150315000025',
		latitude: -37.41266985,
		longitude: -57.211128743,
		municipalityId: 605
	},
	{
		id: 2500,
		name: 'LA FLORIDA',
		uta2020: '063150315000021',
		uta2010: '063150315000021',
		latitude: -37.1158188,
		longitude: -57.1679508,
		municipalityId: 605
	},
	{
		id: 2501,
		name: 'LA FELICIDAD',
		uta2020: '063150315000020',
		uta2010: '063150315000020',
		latitude: -37.1922666,
		longitude: -57.5504315,
		municipalityId: 605
	},
	{
		id: 2502,
		name: 'GENERAL JUAN MADARIAGA',
		uta2020: '063150315010002',
		uta2010: '063150315010002',
		latitude: -36.996773001,
		longitude: -57.137476907,
		municipalityId: 605
	},
	{
		id: 2503,
		name: 'INVERNADAS',
		uta2020: '063150315000015',
		uta2010: '063150315000015',
		latitude: -36.950082,
		longitude: -57.231462,
		municipalityId: 605
	},
	{
		id: 2504,
		name: 'BARRIO KENNEDY',
		uta2020: '063150315010001',
		uta2010: '063150315010001',
		latitude: -37.00622177,
		longitude: -57.141725586,
		municipalityId: 605
	},
	{
		id: 2505,
		name: 'COLONIA TIO DOMINGO',
		uta2020: '063150315000003',
		uta2010: '063150315000003',
		latitude: -37.024627686,
		longitude: -56.956073761,
		municipalityId: 605
	},
	{
		id: 2506,
		name: 'JUAN CHICO',
		uta2020: '063150315000017',
		uta2010: '063150315000017',
		latitude: -36.9071257,
		longitude: -57.199715,
		municipalityId: 605
	},
	{
		id: 2507,
		name: 'EL CARDALITO',
		uta2020: '063150315000005',
		uta2010: '063150315000005',
		latitude: -37.0895031,
		longitude: -57.3784537,
		municipalityId: 605
	},
	{
		id: 2508,
		name: 'SANTA LA VICTORIA',
		uta2020: '063150315000027',
		uta2010: '063150315000027',
		latitude: -37.0505963,
		longitude: -57.1208502,
		municipalityId: 605
	},
	{
		id: 2509,
		name: 'SANTA YOLA',
		uta2020: '063150315000028',
		uta2010: '063150315000028',
		latitude: -37.0444176,
		longitude: -57.0622156,
		municipalityId: 605
	},
	{
		id: 2510,
		name: 'MACEDO',
		uta2020: '063150315000024',
		uta2010: '063150315000024',
		latitude: -37.2631732,
		longitude: -57.2100286,
		municipalityId: 605
	},
	{
		id: 2511,
		name: 'CAÑADA DE MACHADO',
		uta2020: '141052616020000',
		uta2010: '141052616020000',
		latitude: -31.428924271,
		longitude: -63.587026451,
		municipalityId: 253
	},
	{
		id: 2512,
		name: 'BENGOLEA',
		uta2020: '140560392030000',
		uta2010: '140560392030000',
		latitude: -33.027417314,
		longitude: -63.671927788,
		municipalityId: 366
	},
	{
		id: 2513,
		name: 'NUEVA GRANADA',
		uta2020: '067070707000025',
		uta2010: '067070707000025',
		latitude: -35.5801859,
		longitude: -59.8586723,
		municipalityId: 606
	},
	{
		id: 2514,
		name: 'DEL CARRIL',
		uta2020: '067070707040000',
		uta2010: '067070707040000',
		latitude: -35.512717229,
		longitude: -59.515820203,
		municipalityId: 606
	},
	{
		id: 2515,
		name: 'EMILIANO REYNOSO',
		uta2020: '067070707000012',
		uta2010: '067070707000012',
		latitude: -35.5364063,
		longitude: -59.8604326,
		municipalityId: 606
	},
	{
		id: 2516,
		name: 'SALADILLO NORTE',
		uta2020: '067070707000027',
		uta2010: '067070707000027',
		latitude: -35.608752,
		longitude: -59.79383,
		municipalityId: 606
	},
	{
		id: 2517,
		name: 'SAN BLAS',
		uta2020: '067070707000029',
		uta2010: '067070707000029',
		latitude: -35.5435797,
		longitude: -59.6995418,
		municipalityId: 606
	},
	{
		id: 2518,
		name: 'DAMAS DE LA MISERICORDIA',
		uta2020: '067070707000007',
		uta2010: '067070707000007',
		latitude: -35.57929,
		longitude: -59.774650003,
		municipalityId: 606
	},
	{
		id: 2519,
		name: 'ACUÑA',
		uta2020: '067070707000001',
		uta2010: '067070707000001',
		latitude: -35.6504504,
		longitude: -59.8096018,
		municipalityId: 606
	},
	{
		id: 2520,
		name: 'ALVAREZ DE TOLEDO',
		uta2020: '067070707010000',
		uta2010: '067070707010000',
		latitude: -35.639160918,
		longitude: -59.629238344,
		municipalityId: 606
	},
	{
		id: 2521,
		name: 'LOS GUAYCOS',
		uta2020: '067070707000023',
		uta2010: '067070707000023',
		latitude: -35.56692,
		longitude: -59.439630006,
		municipalityId: 606
	},
	{
		id: 2522,
		name: 'LA CAMPANA',
		uta2020: '067070707000018',
		uta2010: '067070707000018',
		latitude: -35.73963,
		longitude: -59.653020004,
		municipalityId: 606
	},
	{
		id: 2523,
		name: 'CAZON',
		uta2020: '067070707030000',
		uta2010: '067070707030000',
		latitude: -35.576803202,
		longitude: -59.664503763,
		municipalityId: 606
	},
	{
		id: 2524,
		name: 'SAN BENITO',
		uta2020: '067070707000028',
		uta2010: '067070707000028',
		latitude: -35.6681262,
		longitude: -59.8863734,
		municipalityId: 606
	},
	{
		id: 2525,
		name: 'LA GARITA',
		uta2020: '067070707000013',
		uta2010: '067070707000013',
		latitude: -35.6409262,
		longitude: -59.7742664,
		municipalityId: 606
	},
	{
		id: 2526,
		name: 'EL ARENAL DEL CARMEN',
		uta2020: '067070707000008',
		uta2010: '067070707000008',
		latitude: -35.685592,
		longitude: -60.1005982,
		municipalityId: 606
	},
	{
		id: 2527,
		name: 'POLVAREDAS',
		uta2020: '067070707050000',
		uta2010: '067070707050000',
		latitude: -35.593907231,
		longitude: -59.507973485,
		municipalityId: 606
	},
	{
		id: 2528,
		name: 'EL NARANJO',
		uta2020: '067070707000010',
		uta2010: '067070707000010',
		latitude: -35.5710586,
		longitude: -59.9701915,
		municipalityId: 606
	},
	{
		id: 2529,
		name: 'LA FORTUNA',
		uta2020: '067070707000019',
		uta2010: '067070707000019',
		latitude: -35.5046535,
		longitude: -59.6568722,
		municipalityId: 606
	},
	{
		id: 2530,
		name: 'MARIA ANTONIETA',
		uta2020: '067070707000024',
		uta2010: '067070707000024',
		latitude: -35.7069881,
		longitude: -59.5466503,
		municipalityId: 606
	},
	{
		id: 2531,
		name: 'RENACO',
		uta2020: '067070707000026',
		uta2010: '067070707000026',
		latitude: -35.622787446,
		longitude: -59.533165738,
		municipalityId: 606
	},
	{
		id: 2532,
		name: 'EL PUENTE',
		uta2020: '067070707000011',
		uta2010: '067070707000011',
		latitude: -35.4603636,
		longitude: -59.5772119,
		municipalityId: 606
	},
	{
		id: 2533,
		name: 'ATUCHA',
		uta2020: '067070707000002',
		uta2010: '067070707000002',
		latitude: -35.5393828,
		longitude: -59.7763591,
		municipalityId: 606
	},
	{
		id: 2534,
		name: 'EL MANGRULLO',
		uta2020: '067070707000009',
		uta2010: '067070707000009',
		latitude: -35.7662444,
		longitude: -60.0395255,
		municipalityId: 606
	},
	{
		id: 2535,
		name: 'BLAQUIER',
		uta2020: '067070707000003',
		uta2010: '067070707000003',
		latitude: -35.767700735,
		longitude: -59.303864287,
		municipalityId: 606
	},
	{
		id: 2536,
		name: 'LA ARGENTINA',
		uta2020: '067070707000015',
		uta2010: '067070707000015',
		latitude: -35.6923572,
		longitude: -59.4561347,
		municipalityId: 606
	},
	{
		id: 2537,
		name: 'LA MARGARITA',
		uta2020: '067070707000020',
		uta2010: '067070707000020',
		latitude: -35.6049561,
		longitude: -59.9302997,
		municipalityId: 606
	},
	{
		id: 2538,
		name: 'LA BLANQUEADA',
		uta2020: '067070707000017',
		uta2010: '067070707000017',
		latitude: -35.66865,
		longitude: -59.737580004,
		municipalityId: 606
	},
	{
		id: 2539,
		name: 'CUARTEL I',
		uta2020: '067070707000006',
		uta2010: '067070707000006',
		latitude: -35.602851,
		longitude: -59.7406808,
		municipalityId: 606
	},
	{
		id: 2540,
		name: 'CAMPO VELA',
		uta2020: '067070707000004',
		uta2010: '067070707000004',
		latitude: -35.56105,
		longitude: -59.574290005,
		municipalityId: 606
	},
	{
		id: 2541,
		name: 'SAN PEDRO',
		uta2020: '067070707000030',
		uta2010: '067070707000030',
		latitude: -35.792991638,
		longitude: -59.486179355,
		municipalityId: 606
	},
	{
		id: 2542,
		name: 'LA BARRANCOSA',
		uta2020: '067070707000016',
		uta2010: '067070707000016',
		latitude: -35.813497,
		longitude: -59.9082616,
		municipalityId: 606
	},
	{
		id: 2543,
		name: 'SALADILLO',
		uta2020: '067070707060000',
		uta2010: '067070707060000',
		latitude: -35.640429881,
		longitude: -59.779058984,
		municipalityId: 606
	},
	{
		id: 2544,
		name: 'LA QUINTA',
		uta2020: '141052686140000',
		uta2010: '141052686140000',
		latitude: -31.062258846,
		longitude: -63.150128183,
		municipalityId: 254
	},
	{
		id: 2545,
		name: 'LOTE 19',
		uta2020: '221470427000011',
		uta2010: '221470427000011',
		latitude: -27.21971406,
		longitude: -60.332806224,
		municipalityId: 50
	},
	{
		id: 2546,
		name: 'VILLA BERTHET',
		uta2020: '221470427020000',
		uta2010: '221470427020000',
		latitude: -27.289549241,
		longitude: -60.415596208,
		municipalityId: 50
	},
	{
		id: 2547,
		name: 'LOTE 15',
		uta2020: '221470427000008',
		uta2010: '221470427000008',
		latitude: -27.195709877,
		longitude: -60.415205969,
		municipalityId: 50
	},
	{
		id: 2548,
		name: 'LOTE 5',
		uta2020: '221470427000019',
		uta2010: '221470427000019',
		latitude: -27.339888246,
		longitude: -60.277676101,
		municipalityId: 50
	},
	{
		id: 2549,
		name: 'LOTE 21',
		uta2020: '221470427000013',
		uta2010: '221470427000013',
		latitude: -27.11031396,
		longitude: -60.29517412,
		municipalityId: 50
	},
	{
		id: 2550,
		name: 'LOTE 20',
		uta2020: '221470427000012',
		uta2010: '221470427000012',
		latitude: -27.196346235,
		longitude: -60.283647657,
		municipalityId: 50
	},
	{
		id: 2551,
		name: 'LOTE 18',
		uta2020: '221470427000010',
		uta2010: '221470427000010',
		latitude: -27.138004416,
		longitude: -60.403312443,
		municipalityId: 50
	},
	{
		id: 2552,
		name: 'LOTE 17',
		uta2020: '221470427000009',
		uta2010: '221470427000009',
		latitude: -27.07135697,
		longitude: -60.36661174,
		municipalityId: 50
	},
	{
		id: 2553,
		name: 'COLONIA TINCO',
		uta2020: '861476574030000',
		uta2010: '861476574030000',
		latitude: -27.47067281,
		longitude: -64.880761177,
		municipalityId: 1457
	},
	{
		id: 2554,
		name: 'ALTO DE LAS JUNTAS',
		uta2020: '100210042060002',
		uta2010: '100210042060002',
		latitude: -27.451195979,
		longitude: -66.019968827,
		municipalityId: 1906
	},
	{
		id: 2555,
		name: 'ACONQUIJA',
		uta2020: '100210042060001',
		uta2010: '100210042060001',
		latitude: -27.474379888,
		longitude: -66.026688435,
		municipalityId: 1906
	},
	{
		id: 2556,
		name: 'EL LINDERO',
		uta2020: '100210042060003',
		uta2010: '100210042060003',
		latitude: -27.474379888,
		longitude: -66.026688435,
		municipalityId: 1906
	},
	{
		id: 2557,
		name: 'LA MESADA',
		uta2020: '100210042060004',
		uta2010: '100210042060004',
		latitude: -27.451195979,
		longitude: -66.019968827,
		municipalityId: 1906
	},
	{
		id: 2558,
		name: 'LAS PAMPITAS',
		uta2020: '100210042000039',
		uta2010: '100210042000039',
		latitude: -27.52216602,
		longitude: -66.128063774,
		municipalityId: 1906
	},
	{
		id: 2559,
		name: 'AGUA DE LAS PALOMAS',
		uta2020: '100210042000001',
		uta2010: '100210042000001',
		latitude: -27.619059558,
		longitude: -66.115185422,
		municipalityId: 1906
	},
	{
		id: 2560,
		name: 'BUENA VISTA',
		uta2020: '100210042050001',
		uta2010: '100210042050001',
		latitude: -27.33919224,
		longitude: -66.024189216,
		municipalityId: 1906
	},
	{
		id: 2561,
		name: 'EL PUCARA',
		uta2020: '100210042000023',
		uta2010: '100210042000023',
		latitude: -27.70432125,
		longitude: -66.00877687,
		municipalityId: 1906
	},
	{
		id: 2562,
		name: 'EL ESPINILLO',
		uta2020: '100210042000018',
		uta2010: '100210042000018',
		latitude: -27.56772281,
		longitude: -66.147231513,
		municipalityId: 1906
	},
	{
		id: 2563,
		name: 'CONDOR HUASI',
		uta2020: '100210042000012',
		uta2010: '100210042000012',
		latitude: -27.59687028,
		longitude: -65.97936947,
		municipalityId: 1906
	},
	{
		id: 2564,
		name: 'PUNTA DEL AGUA',
		uta2020: '100210042000047',
		uta2010: '100210042000047',
		latitude: -27.512729645,
		longitude: -66.128013611,
		municipalityId: 1906
	},
	{
		id: 2565,
		name: 'RIO POTRERO',
		uta2020: '100210042000048',
		uta2010: '100210042000048',
		latitude: -27.38805251,
		longitude: -65.98344315,
		municipalityId: 1906
	},
	{
		id: 2566,
		name: 'EL ALAMITO',
		uta2020: '100210042050002',
		uta2010: '100210042050002',
		latitude: -27.333537876,
		longitude: -66.022985174,
		municipalityId: 1906
	},
	{
		id: 2567,
		name: 'COLONIA SAN MIGUEL',
		uta2020: '221260371000009',
		uta2010: '221260371000009',
		latitude: -26.916816527,
		longitude: -58.987718188,
		municipalityId: 52
	},
	{
		id: 2568,
		name: 'MARGARITA BELEN',
		uta2020: '221260371030000',
		uta2010: '221260371030000',
		latitude: -27.261647323,
		longitude: -58.974147312,
		municipalityId: 52
	},
	{
		id: 2569,
		name: 'COSTA INE',
		uta2020: '221260371000010',
		uta2010: '221260371000010',
		latitude: -27.184049941,
		longitude: -58.940886287,
		municipalityId: 52
	},
	{
		id: 2570,
		name: 'COLONIA AMADEO',
		uta2020: '221260371000008',
		uta2010: '221260371000008',
		latitude: -27.278138817,
		longitude: -59.022639391,
		municipalityId: 52
	},
	{
		id: 2571,
		name: 'CAMPO LARGO',
		uta2020: '660560126000030',
		uta2010: '660560126000030',
		latitude: -22.04019646,
		longitude: -63.947694681,
		municipalityId: 1847
	},
	{
		id: 2572,
		name: 'EL PAJEAL',
		uta2020: '660560126000086',
		uta2010: '660560126000086',
		latitude: -22.025205612,
		longitude: -63.539260864,
		municipalityId: 1847
	},
	{
		id: 2573,
		name: 'PIQUIRENDA',
		uta2020: '660560126190000',
		uta2010: '660560126190000',
		latitude: -22.333549081,
		longitude: -63.759684714,
		municipalityId: 1847
	},
	{
		id: 2574,
		name: 'CAPIAZUTI',
		uta2020: '660560126050000',
		uta2010: '660560126050000',
		latitude: -22.167338875,
		longitude: -63.708620992,
		municipalityId: 1847
	},
	{
		id: 2575,
		name: 'MACUETA',
		uta2020: '660560126000224',
		uta2010: '660560126000224',
		latitude: -22.052397526,
		longitude: -63.885822855,
		municipalityId: 1847
	},
	{
		id: 2576,
		name: 'DIQUE ITIYURO',
		uta2020: '660560126000051',
		uta2010: '660560126000051',
		latitude: -22.10209,
		longitude: -63.73327,
		municipalityId: 1847
	},
	{
		id: 2577,
		name: 'LA REPRESA',
		uta2020: '660560126000177',
		uta2010: '660560126000177',
		latitude: -22.292564392,
		longitude: -63.558509827,
		municipalityId: 1847
	},
	{
		id: 2578,
		name: 'TOBANTIRENDA',
		uta2020: '660560126230000',
		uta2010: '660560126230000',
		latitude: -22.138332472,
		longitude: -63.706181968,
		municipalityId: 1847
	},
	{
		id: 2579,
		name: 'SAN FRANCISCO',
		uta2020: '660560126000310',
		uta2010: '660560126000310',
		latitude: -22.077846527,
		longitude: -63.893505096,
		municipalityId: 1847
	},
	{
		id: 2580,
		name: 'AGUARAY',
		uta2020: '660560126010000',
		uta2010: '660560126010000',
		latitude: -22.238814309,
		longitude: -63.728388921,
		municipalityId: 1847
	},
	{
		id: 2581,
		name: 'TIMBOIRENDA',
		uta2020: '660560126000334',
		uta2010: '660560126000334',
		latitude: -22.24919267,
		longitude: -63.59426958,
		municipalityId: 1847
	},
	{
		id: 2582,
		name: 'EL CHILCAR',
		uta2020: '660560126000068',
		uta2010: '660560126000068',
		latitude: -22.330989838,
		longitude: -63.638744354,
		municipalityId: 1847
	},
	{
		id: 2583,
		name: 'ACAMBUCO',
		uta2020: '660560126000001',
		uta2010: '660560126000001',
		latitude: -22.164599818,
		longitude: -63.9088426,
		municipalityId: 1847
	},
	{
		id: 2584,
		name: 'MONTE GRANDE',
		uta2020: '900490063000076',
		uta2010: '900490063000076',
		latitude: -27.766714096,
		longitude: -65.600608826,
		municipalityId: 2261
	},
	{
		id: 2585,
		name: 'LA COCHA',
		uta2020: '900490063010000',
		uta2010: '900490063010000',
		latitude: -27.773004836,
		longitude: -65.586456836,
		municipalityId: 2261
	},
	{
		id: 2586,
		name: 'ALTO DE LA COCHA',
		uta2020: '900490063000001',
		uta2010: '900490063000001',
		latitude: -27.756055832,
		longitude: -65.599121094,
		municipalityId: 2261
	},
	{
		id: 2587,
		name: 'VILLA NUEVA',
		uta2020: '900490063000097',
		uta2010: '900490063000097',
		latitude: -27.77787,
		longitude: -65.58898,
		municipalityId: 2261
	},
	{
		id: 2588,
		name: 'EL PORVENIR',
		uta2020: '900490063000021',
		uta2010: '900490063000021',
		latitude: -27.76226,
		longitude: -65.57094,
		municipalityId: 2261
	},
	{
		id: 2589,
		name: 'LA POSTA',
		uta2020: '900490063000061',
		uta2010: '900490063000061',
		latitude: -27.8286203,
		longitude: -65.5822189,
		municipalityId: 2261
	},
	{
		id: 2590,
		name: 'CAMARONES',
		uta2020: '260280063010000',
		uta2010: '260280063010000',
		latitude: -44.798290873,
		longitude: -65.710599293,
		municipalityId: 567
	},
	{
		id: 2591,
		name: 'SANTA ANA',
		uta2020: '300280126110000',
		uta2010: '300280126110000',
		latitude: -30.900497031,
		longitude: -57.931080953,
		municipalityId: 1554
	},
	{
		id: 2592,
		name: 'COLONIA ENSANCHE SAUCE',
		uta2020: '300280126000013',
		uta2010: '300280126000013',
		latitude: -30.856713299,
		longitude: -57.864891807,
		municipalityId: 1554
	},
	{
		id: 2593,
		name: 'EL RASTREADOR',
		uta2020: '140562315060000',
		uta2010: '140562315060000',
		latitude: -33.664478732,
		longitude: -63.539236804,
		municipalityId: 367
	},
	{
		id: 2594,
		name: 'VILLA TRONQUILS',
		uta2020: '140072035000078',
		uta2010: '140072035000078',
		latitude: -32.413348605,
		longitude: -64.551332706,
		municipalityId: 123
	},
	{
		id: 2595,
		name: 'LAS CALERAS',
		uta2020: '140072035100000',
		uta2010: '140072035100000',
		latitude: -32.389361246,
		longitude: -64.518592342,
		municipalityId: 123
	},
	{
		id: 2596,
		name: 'CHOSOICO-ALGARRO',
		uta2020: '068750875000003',
		uta2010: '068750875000003',
		latitude: -38.7426179,
		longitude: -63.1062383,
		municipalityId: 607
	},
	{
		id: 2597,
		name: 'LEJARRAGA',
		uta2020: '068750875000043',
		uta2010: '068750875000043',
		latitude: -39.3670833,
		longitude: -62.8442687,
		municipalityId: 607
	},
	{
		id: 2598,
		name: 'COLONIA SAN ENRIQUE',
		uta2020: '068750875000014',
		uta2010: '068750875000014',
		latitude: -39.4124142,
		longitude: -63.0401743,
		municipalityId: 607
	},
	{
		id: 2599,
		name: 'ARGERICH',
		uta2020: '068750875010000',
		uta2010: '068750875010000',
		latitude: -38.768656084,
		longitude: -62.602527677,
		municipalityId: 607
	},
	{
		id: 2600,
		name: 'LOS ACEBOS',
		uta2020: '068750875000044',
		uta2010: '068750875000044',
		latitude: -39.6156519,
		longitude: -62.4704663,
		municipalityId: 607
	},
	{
		id: 2601,
		name: 'SAN JOSE',
		uta2020: '068750875000060',
		uta2010: '068750875000060',
		latitude: -39.5378991,
		longitude: -62.575122,
		municipalityId: 607
	},
	{
		id: 2602,
		name: 'COLONIA CRAICO',
		uta2020: '068750875000006',
		uta2010: '068750875000006',
		latitude: -38.8351017,
		longitude: -63.3084367,
		municipalityId: 607
	},
	{
		id: 2603,
		name: 'EL ALBA',
		uta2020: '068750875000017',
		uta2010: '068750875000017',
		latitude: -39.4846833,
		longitude: -62.501435,
		municipalityId: 607
	},
	{
		id: 2604,
		name: 'SALINA LAS BARRANCAS',
		uta2020: '068750875000057',
		uta2010: '068750875000057',
		latitude: -38.776483964,
		longitude: -62.979021396,
		municipalityId: 607
	},
	{
		id: 2605,
		name: 'JUAN COUSTE',
		uta2020: '068750875040000',
		uta2010: '068750875040000',
		latitude: -38.894260419,
		longitude: -63.136158192,
		municipalityId: 607
	},
	{
		id: 2606,
		name: 'COLONIA LEJARRETA',
		uta2020: '068750875000010',
		uta2010: '068750875000010',
		latitude: -39.368576679,
		longitude: -62.844154973,
		municipalityId: 607
	},
	{
		id: 2607,
		name: 'LOTE 39',
		uta2020: '068750875000048',
		uta2010: '068750875000048',
		latitude: -39.0131687,
		longitude: -63.0887441,
		municipalityId: 607
	},
	{
		id: 2608,
		name: 'ISLA VERDE',
		uta2020: '068750875000027',
		uta2010: '068750875000027',
		latitude: -39.364565,
		longitude: -62.0927534,
		municipalityId: 607
	},
	{
		id: 2609,
		name: 'EL CHARA',
		uta2020: '068750875000018',
		uta2010: '068750875000018',
		latitude: -39.4736267,
		longitude: -62.2097704,
		municipalityId: 607
	},
	{
		id: 2610,
		name: 'SANTA CATALINA',
		uta2020: '068750875000061',
		uta2010: '068750875000061',
		latitude: -39.3249695,
		longitude: -62.7078885,
		municipalityId: 607
	},
	{
		id: 2611,
		name: 'TENIENTE ORIGONE',
		uta2020: '068750875080000',
		uta2010: '068750875080000',
		latitude: -39.058058667,
		longitude: -62.56971374,
		municipalityId: 607
	},
	{
		id: 2612,
		name: 'PEDRO LURO',
		uta2020: '068750875070000',
		uta2010: '068750875070000',
		latitude: -39.500776728,
		longitude: -62.687431716,
		municipalityId: 607
	},
	{
		id: 2613,
		name: 'LAS MASCOTAS',
		uta2020: '068750875000042',
		uta2010: '068750875000042',
		latitude: -38.78614,
		longitude: -62.92402,
		municipalityId: 607
	},
	{
		id: 2614,
		name: 'LA SELVA',
		uta2020: '068750875000037',
		uta2010: '068750875000037',
		latitude: -39.472267151,
		longitude: -62.521621704,
		municipalityId: 607
	},
	{
		id: 2615,
		name: 'MAYOR BURATOVICH',
		uta2020: '068750875050000',
		uta2010: '068750875050000',
		latitude: -39.259094679,
		longitude: -62.615788959,
		municipalityId: 607
	},
	{
		id: 2616,
		name: 'HILARIO ASCASUBI',
		uta2020: '068750875030000',
		uta2010: '068750875030000',
		latitude: -39.375860263,
		longitude: -62.647790088,
		municipalityId: 607
	},
	{
		id: 2617,
		name: 'COLONIA RINCON DE LA ESPUELA',
		uta2020: '068750875000013',
		uta2010: '068750875000013',
		latitude: -39.4486101,
		longitude: -62.9672002,
		municipalityId: 607
	},
	{
		id: 2618,
		name: 'NICOLAS LEVALLE',
		uta2020: '068750875000052',
		uta2010: '068750875000052',
		latitude: -38.8500685,
		longitude: -62.878428,
		municipalityId: 607
	},
	{
		id: 2619,
		name: 'BELLA VISTA',
		uta2020: '068750875000001',
		uta2010: '068750875000001',
		latitude: -39.4323988,
		longitude: -62.9350751,
		municipalityId: 607
	},
	{
		id: 2620,
		name: 'COLONIA LA MERCED',
		uta2020: '068750875000008',
		uta2010: '068750875000008',
		latitude: -38.7290922,
		longitude: -62.4558625,
		municipalityId: 607
	},
	{
		id: 2621,
		name: 'EL ZORRO',
		uta2020: '068750875000024',
		uta2010: '068750875000024',
		latitude: -39.5181444,
		longitude: -62.3718602,
		municipalityId: 607
	},
	{
		id: 2622,
		name: 'COUNTRY LOS MEDANOS',
		uta2020: '068750875025000',
		uta2010: '068750875025000',
		latitude: -38.846844592,
		longitude: -62.738741886,
		municipalityId: 607
	},
	{
		id: 2623,
		name: 'EL FORTIN',
		uta2020: '068750875000019',
		uta2010: '068750875000019',
		latitude: -39.4686299,
		longitude: -62.6558703,
		municipalityId: 607
	},
	{
		id: 2624,
		name: 'MONTE PAQUETE',
		uta2020: '068750875000050',
		uta2010: '068750875000050',
		latitude: -39.3841579,
		longitude: -62.4509837,
		municipalityId: 607
	},
	{
		id: 2625,
		name: 'MEDANOS',
		uta2020: '068750875060002',
		uta2010: '068750875060002',
		latitude: -38.829314551,
		longitude: -62.694332157,
		municipalityId: 607
	},
	{
		id: 2626,
		name: 'LA MASCOTA',
		uta2020: '068750875000036',
		uta2010: '068750875000036',
		latitude: -38.7903893,
		longitude: -62.6583838,
		municipalityId: 607
	},
	{
		id: 2627,
		name: 'LA JULITA',
		uta2020: '068750875000035',
		uta2010: '068750875000035',
		latitude: -39.2556331,
		longitude: -62.7331292,
		municipalityId: 607
	},
	{
		id: 2628,
		name: 'COLONIA MASTRANGELO',
		uta2020: '068750875000011',
		uta2010: '068750875000011',
		latitude: -38.8726763,
		longitude: -62.6665711,
		municipalityId: 607
	},
	{
		id: 2629,
		name: 'EL REDUCTO',
		uta2020: '068750875000021',
		uta2010: '068750875000021',
		latitude: -39.7994701,
		longitude: -62.3142074,
		municipalityId: 607
	},
	{
		id: 2630,
		name: 'LOS ALFALFARES',
		uta2020: '068750875000045',
		uta2010: '068750875000045',
		latitude: -38.8052602,
		longitude: -62.7517883,
		municipalityId: 607
	},
	{
		id: 2631,
		name: 'LOS SURGENTES',
		uta2020: '068750875000047',
		uta2010: '068750875000047',
		latitude: -38.6653414,
		longitude: -62.8405229,
		municipalityId: 607
	},
	{
		id: 2632,
		name: 'MONTES DE OCA',
		uta2020: '068750875000051',
		uta2010: '068750875000051',
		latitude: -38.926311493,
		longitude: -63.272689819,
		municipalityId: 607
	},
	{
		id: 2633,
		name: 'LAS ISLETAS',
		uta2020: '068750875000041',
		uta2010: '068750875000041',
		latitude: -39.6629614,
		longitude: -62.1824864,
		municipalityId: 607
	},
	{
		id: 2634,
		name: 'COLONIA SAN ADOLFO',
		uta2020: '068750875020000',
		uta2010: '068750875020000',
		latitude: -39.398395252,
		longitude: -62.571172109,
		municipalityId: 607
	},
	{
		id: 2635,
		name: 'COLONIA ESPIE',
		uta2020: '068750875000007',
		uta2010: '068750875000007',
		latitude: -39.2868046,
		longitude: -62.8234991,
		municipalityId: 607
	},
	{
		id: 2636,
		name: 'LA CARLOTA',
		uta2020: '068750875000031',
		uta2010: '068750875000031',
		latitude: -39.3219359,
		longitude: -62.5005394,
		municipalityId: 607
	},
	{
		id: 2637,
		name: 'VILLA SARITA',
		uta2020: '067700077000040',
		uta2010: '067700077000040',
		latitude: -33.8011746,
		longitude: -59.7339285,
		municipalityId: 608
	},
	{
		id: 2638,
		name: 'LA ESTRELLA',
		uta2020: '067700077000023',
		uta2010: '067700077000023',
		latitude: -33.8857039,
		longitude: -59.683129,
		municipalityId: 608
	},
	{
		id: 2639,
		name: 'LAS FLORES',
		uta2020: '067700077000030',
		uta2010: '067700077000030',
		latitude: -33.747138977,
		longitude: -59.907573701,
		municipalityId: 608
	},
	{
		id: 2640,
		name: 'LAS CANALETAS',
		uta2020: '067700077000029',
		uta2010: '067700077000029',
		latitude: -33.662093905,
		longitude: -59.680325137,
		municipalityId: 608
	},
	{
		id: 2641,
		name: 'VILLA JARDIN',
		uta2020: '067700077000038',
		uta2010: '067700077000038',
		latitude: -33.6971298,
		longitude: -59.7432134,
		municipalityId: 608
	},
	{
		id: 2642,
		name: 'EL ESPINILLO',
		uta2020: '067700077000012',
		uta2010: '067700077000012',
		latitude: -33.6868316,
		longitude: -59.818959,
		municipalityId: 608
	},
	{
		id: 2643,
		name: 'ALMACEN DE BASSO',
		uta2020: '067700077000002',
		uta2010: '067700077000002',
		latitude: -33.6362648,
		longitude: -59.7862782,
		municipalityId: 608
	},
	{
		id: 2644,
		name: 'SANTA LUCIA',
		uta2020: '067700077060000',
		uta2010: '067700077060000',
		latitude: -33.879455953,
		longitude: -59.875328446,
		municipalityId: 608
	},
	{
		id: 2645,
		name: 'DEL PARDO',
		uta2020: '067700077000008',
		uta2010: '067700077000008',
		latitude: -33.719835,
		longitude: -59.6428761,
		municipalityId: 608
	},
	{
		id: 2646,
		name: 'VILLA LEANDRA',
		uta2020: '067700077000039',
		uta2010: '067700077000039',
		latitude: -33.6459095,
		longitude: -59.8818981,
		municipalityId: 608
	},
	{
		id: 2647,
		name: 'OBLIGADO',
		uta2020: '067700077020000',
		uta2010: '067700077020000',
		latitude: -33.596555862,
		longitude: -59.81997924,
		municipalityId: 608
	},
	{
		id: 2648,
		name: 'LOS MATADEROS',
		uta2020: '067700077000031',
		uta2010: '067700077000031',
		latitude: -33.6702352,
		longitude: -59.7020414,
		municipalityId: 608
	},
	{
		id: 2649,
		name: 'COLEGIALES',
		uta2020: '067700077000007',
		uta2010: '067700077000007',
		latitude: -33.7965618,
		longitude: -59.8569919,
		municipalityId: 608
	},
	{
		id: 2650,
		name: 'RIO TALA',
		uta2020: '067700077040000',
		uta2010: '067700077040000',
		latitude: -33.769589928,
		longitude: -59.638370859,
		municipalityId: 608
	},
	{
		id: 2651,
		name: 'LA TOSQUERA',
		uta2020: '067700077000028',
		uta2010: '067700077000028',
		latitude: -33.7147783,
		longitude: -59.6281029,
		municipalityId: 608
	},
	{
		id: 2652,
		name: 'TABLAS',
		uta2020: '067700077000035',
		uta2010: '067700077000035',
		latitude: -33.7147039,
		longitude: -59.8121288,
		municipalityId: 608
	},
	{
		id: 2653,
		name: 'EL CENTRO',
		uta2020: '067700077000010',
		uta2010: '067700077000010',
		latitude: -33.751333245,
		longitude: -59.720391916,
		municipalityId: 608
	},
	{
		id: 2654,
		name: 'SAN PEDRO',
		uta2020: '067700077050000',
		uta2010: '067700077050000',
		latitude: -33.679125225,
		longitude: -59.666895103,
		municipalityId: 608
	},
	{
		id: 2655,
		name: 'GOBERNADOR CASTRO',
		uta2020: '067700077010000',
		uta2010: '067700077010000',
		latitude: -33.660578729,
		longitude: -59.866340829,
		municipalityId: 608
	},
	{
		id: 2656,
		name: 'PUEBLO DOYLE',
		uta2020: '067700077030000',
		uta2010: '067700077030000',
		latitude: -33.905005719,
		longitude: -59.818753227,
		municipalityId: 608
	},
	{
		id: 2657,
		name: 'EL CANTABRICO',
		uta2020: '067700077000009',
		uta2010: '067700077000009',
		latitude: -33.725475311,
		longitude: -59.705825807,
		municipalityId: 608
	},
	{
		id: 2658,
		name: 'BELADRICH',
		uta2020: '067700077000005',
		uta2010: '067700077000005',
		latitude: -33.9812186,
		longitude: -59.802568,
		municipalityId: 608
	},
	{
		id: 2659,
		name: 'EL IDEAL',
		uta2020: '067700077000013',
		uta2010: '067700077000013',
		latitude: -33.701927726,
		longitude: -59.861734009,
		municipalityId: 608
	},
	{
		id: 2660,
		name: 'INGENIERO MONETA',
		uta2020: '067700077015000',
		uta2010: '067700077015000',
		latitude: -33.931463133,
		longitude: -59.748233005,
		municipalityId: 608
	},
	{
		id: 2661,
		name: 'LA CELINA',
		uta2020: '067700077000021',
		uta2010: '067700077000021',
		latitude: -33.800041,
		longitude: -59.6592103,
		municipalityId: 608
	},
	{
		id: 2662,
		name: 'LA BOLSA',
		uta2020: '067700077000019',
		uta2010: '067700077000019',
		latitude: -33.7783203,
		longitude: -59.9921983,
		municipalityId: 608
	},
	{
		id: 2663,
		name: 'LA BUENA MOZA',
		uta2020: '067700077000020',
		uta2010: '067700077000020',
		latitude: -33.7392899,
		longitude: -59.7630599,
		municipalityId: 608
	},
	{
		id: 2664,
		name: 'LA MATILDE',
		uta2020: '067700077000025',
		uta2010: '067700077000025',
		latitude: -33.7411849,
		longitude: -59.8643701,
		municipalityId: 608
	},
	{
		id: 2665,
		name: 'EL DESCANSO',
		uta2020: '067700077000011',
		uta2010: '067700077000011',
		latitude: -33.8398633,
		longitude: -59.9483273,
		municipalityId: 608
	},
	{
		id: 2666,
		name: 'BAJO TALA',
		uta2020: '067700077000004',
		uta2010: '067700077000004',
		latitude: -33.742457342,
		longitude: -59.613938066,
		municipalityId: 608
	},
	{
		id: 2667,
		name: 'CUMELEN',
		uta2020: '580700133000009',
		uta2010: '580700133000009',
		latitude: -40.785526276,
		longitude: -71.6218338,
		municipalityId: 2389
	},
	{
		id: 2668,
		name: 'CORRENTOSO',
		uta2020: '580700133000008',
		uta2010: '580700133000008',
		latitude: -40.727523804,
		longitude: -71.677230835,
		municipalityId: 2389
	},
	{
		id: 2669,
		name: 'VILLA LA ANGOSTURA',
		uta2020: '580700133010000',
		uta2010: '580700133010000',
		latitude: -40.763176069,
		longitude: -71.645196751,
		municipalityId: 2389
	},
	{
		id: 2670,
		name: 'COLONIA LAS FLORES',
		uta2020: '300569370000070',
		uta2010: '300569370000070',
		latitude: -32.95109616,
		longitude: -58.88915796,
		municipalityId: 1624
	},
	{
		id: 2671,
		name: 'IRAZUSTA',
		uta2020: '300569370080000',
		uta2010: '300569370080000',
		latitude: -32.92693733,
		longitude: -58.953483476,
		municipalityId: 1624
	},
	{
		id: 2672,
		name: 'COCHAGOSTA',
		uta2020: '380076014000035',
		uta2010: '380076014000035',
		latitude: -22.969815379,
		longitude: -65.87698176,
		municipalityId: 1160
	},
	{
		id: 2673,
		name: 'RIO GRANDE',
		uta2020: '380076014000109',
		uta2010: '380076014000109',
		latitude: -23.151185989,
		longitude: -65.748596191,
		municipalityId: 1160
	},
	{
		id: 2674,
		name: 'QUERA',
		uta2020: '380076014067000',
		uta2010: '380076014067000',
		latitude: -23.100839356,
		longitude: -65.762863858,
		municipalityId: 1160
	},
	{
		id: 2675,
		name: 'AGUA DE CASTILLA',
		uta2020: '380076014035000',
		uta2010: '380076014035000',
		latitude: -23.216110729,
		longitude: -65.812683283,
		municipalityId: 1160
	},
	{
		id: 2676,
		name: 'QUEBRALEÑA',
		uta2020: '380076014063000',
		uta2010: '380076014063000',
		latitude: -23.285870288,
		longitude: -65.770088249,
		municipalityId: 1160
	},
	{
		id: 2677,
		name: 'ABRALAITE',
		uta2020: '380076014030000',
		uta2010: '380076014030000',
		latitude: -23.153816832,
		longitude: -65.785335196,
		municipalityId: 1160
	},
	{
		id: 2678,
		name: 'TOSQUITAS',
		uta2020: '140980889280000',
		uta2010: '140980889280000',
		latitude: -33.818824822,
		longitude: -64.456932741,
		municipalityId: 438
	},
	{
		id: 2679,
		name: 'PUEBLO ITALIANO',
		uta2020: '141821715220000',
		uta2010: '141821715220000',
		latitude: -33.880722767,
		longitude: -62.840725031,
		municipalityId: 94
	},
	{
		id: 2680,
		name: 'EL SALTO',
		uta2020: '141330000000021',
		uta2010: '141330000000021',
		latitude: -32.197336261,
		longitude: -65.224623904,
		municipalityId: 510
	},
	{
		id: 2681,
		name: 'LOS HOYOS',
		uta2020: '141122770060000',
		uta2010: '141122770060000',
		latitude: -29.802434072,
		longitude: -63.627362284,
		municipalityId: 147
	},
	{
		id: 2682,
		name: 'SANTO DOMINGO',
		uta2020: '141122770000109',
		uta2010: '141122770000109',
		latitude: -29.7918015,
		longitude: -63.5710171,
		municipalityId: 147
	},
	{
		id: 2683,
		name: 'LA COSTA',
		uta2020: '141122770000047',
		uta2010: '141122770000047',
		latitude: -29.7604062,
		longitude: -63.6462156,
		municipalityId: 147
	},
	{
		id: 2684,
		name: 'PAREJHA',
		uta2020: '540420147000011',
		uta2010: '540420147000011',
		latitude: -26.281223527,
		longitude: -54.613845637,
		municipalityId: 2137
	},
	{
		id: 2685,
		name: 'CUATRO BOCAS',
		uta2020: '540420147000002',
		uta2010: '540420147000002',
		latitude: -26.33557541,
		longitude: -54.52488992,
		municipalityId: 2137
	},
	{
		id: 2686,
		name: 'COLONIA VICTORIA',
		uta2020: '540420147010000',
		uta2010: '540420147010000',
		latitude: -26.329888773,
		longitude: -54.621557226,
		municipalityId: 2137
	},
	{
		id: 2687,
		name: 'CASAS VIEJAS',
		uta2020: '900490000000007',
		uta2010: '900490000000007',
		latitude: -27.77762413,
		longitude: -65.509117127,
		municipalityId: 2262
	},
	{
		id: 2688,
		name: 'POZO DE LA ESQUINA',
		uta2020: '900490000000081',
		uta2010: '900490000000081',
		latitude: -27.862895966,
		longitude: -65.446784973,
		municipalityId: 2262
	},
	{
		id: 2689,
		name: 'CAÑADA DE LUQUE',
		uta2020: '141681512020000',
		uta2010: '141681512020000',
		latitude: -30.737087515,
		longitude: -63.723661878,
		municipalityId: 338
	},
	{
		id: 2690,
		name: 'PUERTO ARAGON',
		uta2020: '821053729210000',
		uta2010: '821053729210000',
		latitude: -32.244721828,
		longitude: -60.923983978,
		municipalityId: 979
	},
	{
		id: 2691,
		name: 'BARRANCAS',
		uta2020: '821053729030000',
		uta2010: '821053729030000',
		latitude: -32.236635782,
		longitude: -60.982740133,
		municipalityId: 979
	},
	{
		id: 2692,
		name: 'ESTACION LUXARDO',
		uta2020: '141402966210000',
		uta2010: '141402966210000',
		latitude: -31.304748884,
		longitude: -62.133302336,
		municipalityId: 400
	},
	{
		id: 2693,
		name: 'PLAZA LUXARDO',
		uta2020: '141402966310000',
		uta2010: '141402966310000',
		latitude: -31.301747141,
		longitude: -62.229167287,
		municipalityId: 400
	},
	{
		id: 2694,
		name: 'GOBERNADOR CRESPO',
		uta2020: '821123890050000',
		uta2010: '821123890050000',
		latitude: -30.36483469,
		longitude: -60.401168405,
		municipalityId: 1015
	},
	{
		id: 2695,
		name: 'CABALANGO',
		uta2020: '140912469030000',
		uta2010: '140912469030000',
		latitude: -31.393104901,
		longitude: -64.563565264,
		municipalityId: 278
	},
	{
		id: 2696,
		name: 'BOCA DEL TIGRE',
		uta2020: '660070014000021',
		uta2010: '660070014000021',
		latitude: -25.2675457,
		longitude: -63.958450317,
		municipalityId: 1843
	},
	{
		id: 2697,
		name: 'SANTA CLARA',
		uta2020: '660070014000497',
		uta2010: '660070014000497',
		latitude: -25.246763229,
		longitude: -63.136833191,
		municipalityId: 1843
	},
	{
		id: 2698,
		name: 'MACAPILLO',
		uta2020: '660070014120000',
		uta2010: '660070014120000',
		latitude: -25.421569028,
		longitude: -63.989604902,
		municipalityId: 1843
	},
	{
		id: 2699,
		name: 'SAN FRANCISCO',
		uta2020: '660070014000467',
		uta2010: '660070014000467',
		latitude: -25.377897263,
		longitude: -63.871250153,
		municipalityId: 1843
	},
	{
		id: 2700,
		name: 'EL VENCIDO',
		uta2020: '660070014000144',
		uta2010: '660070014000144',
		latitude: -25.574518043,
		longitude: -63.888403612,
		municipalityId: 1843
	},
	{
		id: 2701,
		name: 'LAGUNITA',
		uta2020: '660070014000285',
		uta2010: '660070014000285',
		latitude: -25.355834961,
		longitude: -63.782211304,
		municipalityId: 1843
	},
	{
		id: 2702,
		name: 'LA JORNADA',
		uta2020: '660070014000256',
		uta2010: '660070014000256',
		latitude: -25.47779274,
		longitude: -63.546821594,
		municipalityId: 1843
	},
	{
		id: 2703,
		name: 'LAS PIEDRAS',
		uta2020: '660070014000305',
		uta2010: '660070014000305',
		latitude: -25.300117493,
		longitude: -63.222415924,
		municipalityId: 1843
	},
	{
		id: 2704,
		name: 'EL QUEBRACHAL',
		uta2020: '660070014060000',
		uta2010: '660070014060000',
		latitude: -25.351982182,
		longitude: -64.028796389,
		municipalityId: 1843
	},
	{
		id: 2705,
		name: 'ANTA POZO',
		uta2020: '660070014000011',
		uta2010: '660070014000011',
		latitude: -25.319395065,
		longitude: -63.960910797,
		municipalityId: 1843
	},
	{
		id: 2706,
		name: 'SAN MARCOS',
		uta2020: '660070014000480',
		uta2010: '660070014000480',
		latitude: -25.189908981,
		longitude: -63.515625,
		municipalityId: 1843
	},
	{
		id: 2707,
		name: 'TOLLOCHE',
		uta2020: '660070014160000',
		uta2010: '660070014160000',
		latitude: -25.546645671,
		longitude: -63.53429186,
		municipalityId: 1843
	},
	{
		id: 2708,
		name: 'EL MOSQUITO',
		uta2020: '660070014000101',
		uta2010: '660070014000101',
		latitude: -25.256576538,
		longitude: -63.939849854,
		municipalityId: 1843
	},
	{
		id: 2709,
		name: 'LA LAGUNA',
		uta2020: '660070014000258',
		uta2010: '660070014000258',
		latitude: -25.306760788,
		longitude: -63.604190826,
		municipalityId: 1843
	},
	{
		id: 2710,
		name: 'ALTO ALEGRE',
		uta2020: '660070014000008',
		uta2010: '660070014000008',
		latitude: -25.598136902,
		longitude: -63.909122467,
		municipalityId: 1843
	},
	{
		id: 2711,
		name: 'SAN RAFAEL',
		uta2020: '660070014000487',
		uta2010: '660070014000487',
		latitude: -25.377986908,
		longitude: -63.352184296,
		municipalityId: 1843
	},
	{
		id: 2712,
		name: 'SAN JUAN',
		uta2020: '660070014000475',
		uta2010: '660070014000475',
		latitude: -25.11475563,
		longitude: -63.355377197,
		municipalityId: 1843
	},
	{
		id: 2713,
		name: 'EL QUIRQUINCHO',
		uta2020: '660070014000119',
		uta2010: '660070014000119',
		latitude: -25.255212784,
		longitude: -63.849956513,
		municipalityId: 1843
	},
	{
		id: 2714,
		name: 'LA BOMBA',
		uta2020: '660070014000240',
		uta2010: '660070014000240',
		latitude: -25.296007156,
		longitude: -63.9401474,
		municipalityId: 1843
	},
	{
		id: 2715,
		name: 'SAN TADEO',
		uta2020: '660070014000492',
		uta2010: '660070014000492',
		latitude: -25.157886505,
		longitude: -63.377807617,
		municipalityId: 1843
	},
	{
		id: 2716,
		name: 'FLOR DE MAYO',
		uta2020: '660070014000219',
		uta2010: '660070014000219',
		latitude: -25.381732941,
		longitude: -63.242904663,
		municipalityId: 1843
	},
	{
		id: 2717,
		name: 'EL PORVENIR',
		uta2020: '660070014000113',
		uta2010: '660070014000113',
		latitude: -25.49515,
		longitude: -63.9675,
		municipalityId: 1843
	},
	{
		id: 2718,
		name: 'LOS JARDINES',
		uta2020: '660070014000329',
		uta2010: '660070014000329',
		latitude: -25.287418365,
		longitude: -63.418418884,
		municipalityId: 1843
	},
	{
		id: 2719,
		name: 'MANGRULLO',
		uta2020: '660070014000351',
		uta2010: '660070014000351',
		latitude: -25.49209681,
		longitude: -63.898869516,
		municipalityId: 1843
	},
	{
		id: 2720,
		name: 'SANTA ROSA',
		uta2020: '660070014000505',
		uta2010: '660070014000505',
		latitude: -25.521585464,
		longitude: -63.957553864,
		municipalityId: 1843
	},
	{
		id: 2721,
		name: 'EL SIMBOL',
		uta2020: '660070014000131',
		uta2010: '660070014000131',
		latitude: -25.690213747,
		longitude: -63.772439979,
		municipalityId: 1843
	},
	{
		id: 2722,
		name: 'NUESTRA SEÑORA DE TALAVERA',
		uta2020: '660070014130000',
		uta2010: '660070014130000',
		latitude: -25.481072558,
		longitude: -63.788000828,
		municipalityId: 1843
	},
	{
		id: 2723,
		name: 'MACAPILLO VIEJO',
		uta2020: '660070014000347',
		uta2010: '660070014000347',
		latitude: -25.482923508,
		longitude: -63.983730316,
		municipalityId: 1843
	},
	{
		id: 2724,
		name: 'SANTA ELENA',
		uta2020: '660070014000498',
		uta2010: '660070014000498',
		latitude: -25.436962128,
		longitude: -63.979324341,
		municipalityId: 1843
	},
	{
		id: 2725,
		name: 'SAN ISIDRO',
		uta2020: '660070014000470',
		uta2010: '660070014000470',
		latitude: -25.359144211,
		longitude: -64.009231567,
		municipalityId: 1843
	},
	{
		id: 2726,
		name: 'EL GEOLOGO',
		uta2020: '660070014000083',
		uta2010: '660070014000083',
		latitude: -25.139476776,
		longitude: -63.465862274,
		municipalityId: 1843
	},
	{
		id: 2727,
		name: 'EL NORTE',
		uta2020: '660070014000104',
		uta2010: '660070014000104',
		latitude: -25.246120453,
		longitude: -63.175834656,
		municipalityId: 1843
	},
	{
		id: 2728,
		name: 'GAONA',
		uta2020: '660070014070000',
		uta2010: '660070014070000',
		latitude: -25.258175033,
		longitude: -64.0470243,
		municipalityId: 1843
	},
	{
		id: 2729,
		name: 'ALGARROBAL',
		uta2020: '660070014000007',
		uta2010: '660070014000007',
		latitude: -25.406223664,
		longitude: -63.979916554,
		municipalityId: 1843
	},
	{
		id: 2730,
		name: 'EL CALEU',
		uta2020: '063080308000001',
		uta2010: '063080308000001',
		latitude: -36.6656205,
		longitude: -58.0745242,
		municipalityId: 609
	},
	{
		id: 2731,
		name: 'LA VERONICA',
		uta2020: '063080308000008',
		uta2010: '063080308000008',
		latitude: -36.4817699,
		longitude: -57.8914222,
		municipalityId: 609
	},
	{
		id: 2732,
		name: 'SANTA ROSA',
		uta2020: '063080308000016',
		uta2010: '063080308000016',
		latitude: -36.7231668,
		longitude: -57.9984018,
		municipalityId: 609
	},
	{
		id: 2733,
		name: 'SANTA FORTUNA',
		uta2020: '063080308000015',
		uta2010: '063080308000015',
		latitude: -36.7239557,
		longitude: -57.7987753,
		municipalityId: 609
	},
	{
		id: 2734,
		name: 'SAN JUAN',
		uta2020: '063080308000013',
		uta2010: '063080308000013',
		latitude: -36.6908429,
		longitude: -57.8600311,
		municipalityId: 609
	},
	{
		id: 2735,
		name: 'LA UNION',
		uta2020: '063080308000007',
		uta2010: '063080308000007',
		latitude: -36.5098111,
		longitude: -58.0390385,
		municipalityId: 609
	},
	{
		id: 2736,
		name: 'LA ESPERANZA',
		uta2020: '063080308000004',
		uta2010: '063080308000004',
		latitude: -36.5891672,
		longitude: -58.1471736,
		municipalityId: 609
	},
	{
		id: 2737,
		name: 'SAN BERNARDO',
		uta2020: '063080308000011',
		uta2010: '063080308000011',
		latitude: -36.8526708,
		longitude: -58.1523679,
		municipalityId: 609
	},
	{
		id: 2738,
		name: 'LA P0STA',
		uta2020: '063080308000005',
		uta2010: '063080308000005',
		latitude: -36.824647,
		longitude: -57.991012,
		municipalityId: 609
	},
	{
		id: 2739,
		name: 'LABARDEN',
		uta2020: '063080308020000',
		uta2010: '063080308020000',
		latitude: -36.948966851,
		longitude: -58.103567182,
		municipalityId: 609
	},
	{
		id: 2740,
		name: 'EL SAUCE',
		uta2020: '063080308000002',
		uta2010: '063080308000002',
		latitude: -36.3388157,
		longitude: -57.9076119,
		municipalityId: 609
	},
	{
		id: 2741,
		name: 'LA QUINUA',
		uta2020: '063080308000006',
		uta2010: '063080308000006',
		latitude: -36.5942935,
		longitude: -57.9259867,
		municipalityId: 609
	},
	{
		id: 2742,
		name: 'LAS ACACIAS',
		uta2020: '063080308000009',
		uta2010: '063080308000009',
		latitude: -36.6895742,
		longitude: -57.7356741,
		municipalityId: 609
	},
	{
		id: 2743,
		name: 'GENERAL GUIDO',
		uta2020: '063080308010000',
		uta2010: '063080308010000',
		latitude: -36.643165178,
		longitude: -57.790501904,
		municipalityId: 609
	},
	{
		id: 2744,
		name: 'PROFUNDIDAD',
		uta2020: '540210091060000',
		uta2010: '540210091060000',
		latitude: -27.558519814,
		longitude: -55.703447407,
		municipalityId: 2129
	},
	{
		id: 2745,
		name: 'TACUARUZU',
		uta2020: '540210091000034',
		uta2010: '540210091000034',
		latitude: -27.60590945,
		longitude: -55.642063687,
		municipalityId: 2129
	},
	{
		id: 2746,
		name: 'LAS VERTIENTES',
		uta2020: '140980847190000',
		uta2010: '140980847190000',
		latitude: -33.283946385,
		longitude: -64.578146226,
		municipalityId: 439
	},
	{
		id: 2747,
		name: 'MIGUEL CANE',
		uta2020: '421190252030000',
		uta2010: '421190252030000',
		latitude: -36.154958179,
		longitude: -63.512154373,
		municipalityId: 1954
	},
	{
		id: 2748,
		name: 'BERNARDO LARROUDE',
		uta2020: '420560049010000',
		uta2010: '420560049010000',
		latitude: -35.024076614,
		longitude: -63.581478678,
		municipalityId: 1959
	},
	{
		id: 2749,
		name: 'CAMPO LA GERMANIA',
		uta2020: '820562896000008',
		uta2010: '820562896000008',
		latitude: -32.5187599,
		longitude: -61.3693487,
		municipalityId: 740
	},
	{
		id: 2750,
		name: 'CAMPO CALCATERRA',
		uta2020: '820562896000003',
		uta2010: '820562896000003',
		latitude: -32.427971,
		longitude: -61.446226069,
		municipalityId: 740
	},
	{
		id: 2751,
		name: 'CLASSON',
		uta2020: '820562896050000',
		uta2010: '820562896050000',
		latitude: -32.46342031,
		longitude: -61.291043409,
		municipalityId: 740
	},
	{
		id: 2752,
		name: 'CAMPO EL ENSAYO',
		uta2020: '820562896000006',
		uta2010: '820562896000006',
		latitude: -32.558298761,
		longitude: -61.336355425,
		municipalityId: 740
	},
	{
		id: 2753,
		name: 'CRISPI',
		uta2020: '821264079060000',
		uta2010: '821264079060000',
		latitude: -31.741725213,
		longitude: -62.037876536,
		municipalityId: 934
	},
	{
		id: 2754,
		name: 'COLONIA LAS YERBAS',
		uta2020: '821264079000027',
		uta2010: '821264079000027',
		latitude: -31.894607496,
		longitude: -62.055687175,
		municipalityId: 934
	},
	{
		id: 2755,
		name: 'CAMPO SEVESO',
		uta2020: '821264079000024',
		uta2010: '821264079000024',
		latitude: -31.787136512,
		longitude: -61.999547111,
		municipalityId: 934
	},
	{
		id: 2756,
		name: 'LAGUNA LARGA',
		uta2020: '141191015090000',
		uta2010: '141191015090000',
		latitude: -31.778398722,
		longitude: -63.802736901,
		municipalityId: 303
	},
	{
		id: 2757,
		name: 'AGUA BLANCA',
		uta2020: '380350140000005',
		uta2010: '380350140000005',
		latitude: -23.884973526,
		longitude: -64.673904419,
		municipalityId: 1170
	},
	{
		id: 2758,
		name: 'BELLA VISTA',
		uta2020: '380350140000020',
		uta2010: '380350140000020',
		latitude: -23.826950073,
		longitude: -64.826347351,
		municipalityId: 1170
	},
	{
		id: 2759,
		name: 'MANANTIAL',
		uta2020: '380350140000085',
		uta2010: '380350140000085',
		latitude: -23.857048035,
		longitude: -64.799095154,
		municipalityId: 1170
	},
	{
		id: 2760,
		name: 'PALMITAS',
		uta2020: '380350140000098',
		uta2010: '380350140000098',
		latitude: -23.841537476,
		longitude: -64.734390259,
		municipalityId: 1170
	},
	{
		id: 2761,
		name: 'RIO BLANCO',
		uta2020: '380350140000115',
		uta2010: '380350140000115',
		latitude: -23.76597786,
		longitude: -64.864830017,
		municipalityId: 1170
	},
	{
		id: 2762,
		name: 'PAULINA',
		uta2020: '380350140100000',
		uta2010: '380350140100000',
		latitude: -23.845942782,
		longitude: -64.740197859,
		municipalityId: 1170
	},
	{
		id: 2763,
		name: 'PUEBLO LEDESMA',
		uta2020: '380350140080002',
		uta2010: '380350140080002',
		latitude: -23.827307205,
		longitude: -64.791360564,
		municipalityId: 1170
	},
	{
		id: 2764,
		name: 'AGUA NEGRA',
		uta2020: '380350140000006',
		uta2010: '380350140000006',
		latitude: -23.831375122,
		longitude: -65.016601563,
		municipalityId: 1170
	},
	{
		id: 2765,
		name: 'LIBERTADOR GENERAL SAN MARTIN',
		uta2020: '380350140080000',
		uta2010: '380350140080000',
		latitude: -23.809107,
		longitude: -64.792782,
		municipalityId: 1170
	},
	{
		id: 2766,
		name: 'SUR DE TREJOS',
		uta2020: '900918532000143',
		uta2010: '900918532000143',
		latitude: -27.5124551,
		longitude: -65.3394543,
		municipalityId: 2191
	},
	{
		id: 2767,
		name: 'LA JUNTA',
		uta2020: '900918532000094',
		uta2010: '900918532000094',
		latitude: -27.48723,
		longitude: -65.40781,
		municipalityId: 2191
	},
	{
		id: 2768,
		name: 'SUR DE LAZARTE',
		uta2020: '900918532000141',
		uta2010: '900918532000141',
		latitude: -27.54669,
		longitude: -65.18099,
		municipalityId: 2191
	},
	{
		id: 2769,
		name: 'NUEVA TRINIDAD',
		uta2020: '900918532030000',
		uta2010: '900918532030000',
		latitude: -27.484511336,
		longitude: -65.491250933,
		municipalityId: 2191
	},
	{
		id: 2770,
		name: 'EL DURAZNO',
		uta2020: '900918532000029',
		uta2010: '900918532000029',
		latitude: -27.50517,
		longitude: -65.42636,
		municipalityId: 2191
	},
	{
		id: 2771,
		name: 'EL PACARA',
		uta2020: '900918532000033',
		uta2010: '900918532000033',
		latitude: -27.4464752,
		longitude: -65.5039795,
		municipalityId: 2191
	},
	{
		id: 2772,
		name: 'SANTA ISABEL',
		uta2020: '900918532000138',
		uta2010: '900918532000138',
		latitude: -27.444952011,
		longitude: -65.529159546,
		municipalityId: 2191
	},
	{
		id: 2773,
		name: 'NIOGASTA',
		uta2020: '900918532000123',
		uta2010: '900918532000123',
		latitude: -27.52347,
		longitude: -65.22743,
		municipalityId: 2191
	},
	{
		id: 2774,
		name: 'PROVIDENCIA',
		uta2020: '820703169200000',
		uta2010: '820703169200000',
		latitude: -30.984586837,
		longitude: -61.02182815,
		municipalityId: 865
	},
	{
		id: 2775,
		name: 'ARROYO CABRAL',
		uta2020: '140420273020000',
		uta2010: '140420273020000',
		latitude: -32.488982497,
		longitude: -63.401479449,
		municipalityId: 167
	},
	{
		id: 2776,
		name: 'COLONIA 25 DE MAYO',
		uta2020: '300700231000019',
		uta2010: '300700231000019',
		latitude: -31.406708234,
		longitude: -59.593953011,
		municipalityId: 1581
	},
	{
		id: 2777,
		name: 'ALCARAZ',
		uta2020: '300700231005000',
		uta2010: '300700231005000',
		latitude: -31.456588967,
		longitude: -59.599138868,
		municipalityId: 1581
	},
	{
		id: 2778,
		name: 'PAVON',
		uta2020: '820282490150000',
		uta2010: '820282490150000',
		latitude: -33.243075481,
		longitude: -60.406275794,
		municipalityId: 721
	},
	{
		id: 2779,
		name: 'LUCIO  V. LOPEZ',
		uta2020: '820562910090000',
		uta2010: '820562910090000',
		latitude: -32.714729723,
		longitude: -61.022607357,
		municipalityId: 741
	},
	{
		id: 2780,
		name: 'LUCIO V. LOPEZ',
		uta2020: '820562910000031',
		uta2010: '820562910000031',
		latitude: -32.7145757,
		longitude: -61.0180654,
		municipalityId: 741
	},
	{
		id: 2781,
		name: 'CAMPO MEDINA',
		uta2020: '820562910000013',
		uta2010: '820562910000013',
		latitude: -32.7512301,
		longitude: -61.0635328,
		municipalityId: 741
	},
	{
		id: 2782,
		name: 'ACASSUSO',
		uta2020: '067560756010001',
		uta2010: '067560756010001',
		latitude: -34.479401812,
		longitude: -58.5074044,
		municipalityId: 610
	},
	{
		id: 2783,
		name: 'SAN ISIDRO',
		uta2020: '067560756010005',
		uta2010: '067560756010005',
		latitude: -34.477041216,
		longitude: -58.5271952,
		municipalityId: 610
	},
	{
		id: 2784,
		name: 'VILLA ADELINA',
		uta2020: '067560756010006',
		uta2010: '067560756010006',
		latitude: -34.515119767,
		longitude: -58.545757922,
		municipalityId: 610
	},
	{
		id: 2785,
		name: 'BOULOGNE SUR MER',
		uta2020: '067560756010003',
		uta2010: '067560756010003',
		latitude: -34.498331289,
		longitude: -58.570013721,
		municipalityId: 610
	},
	{
		id: 2786,
		name: 'BECCAR',
		uta2020: '067560756010002',
		uta2010: '067560756010002',
		latitude: -34.467415946,
		longitude: -58.54003435,
		municipalityId: 610
	},
	{
		id: 2787,
		name: 'MARTINEZ',
		uta2020: '067560756010004',
		uta2010: '067560756010004',
		latitude: -34.494423077,
		longitude: -58.510573276,
		municipalityId: 610
	},
	{
		id: 2788,
		name: 'BARRAGAN',
		uta2020: '300359200000005',
		uta2010: '300359200000005',
		latitude: -30.846564043,
		longitude: -59.077944559,
		municipalityId: 1608
	},
	{
		id: 2789,
		name: 'EL CIMARRON',
		uta2020: '300359200020000',
		uta2010: '300359200020000',
		latitude: -30.986862983,
		longitude: -58.97775691,
		municipalityId: 1608
	},
	{
		id: 2790,
		name: 'ALDEA SAN ISIDRO',
		uta2020: '300359200000001',
		uta2010: '300359200000001',
		latitude: -30.971937142,
		longitude: -58.993275987,
		municipalityId: 1608
	},
	{
		id: 2791,
		name: 'MATADEROS',
		uta2020: '020090001010002',
		uta2010: '020090001010002',
		latitude: -34.658368289,
		longitude: -58.501731952,
		municipalityId: 2443
	},
	{
		id: 2792,
		name: 'PARQUE AVELLANEDA',
		uta2020: '020090001010003',
		uta2010: '020090001010003',
		latitude: -34.648641287,
		longitude: -58.476456404,
		municipalityId: 2443
	},
	{
		id: 2793,
		name: 'LINIERS',
		uta2020: '020090001010001',
		uta2010: '020090001010001',
		latitude: -34.643796083,
		longitude: -58.519129896,
		municipalityId: 2443
	},
	{
		id: 2794,
		name: 'EL MISTOLAR',
		uta2020: '340280000000023',
		uta2010: '340280000000023',
		latitude: -24.24193776,
		longitude: -61.94150345,
		municipalityId: 2339
	},
	{
		id: 2795,
		name: 'LA FLORENCIA',
		uta2020: '340280000000045',
		uta2010: '340280000000045',
		latitude: -24.179523468,
		longitude: -61.945957184,
		municipalityId: 2339
	},
	{
		id: 2796,
		name: 'LAS CALAVERAS',
		uta2020: '340280000000050',
		uta2010: '340280000000050',
		latitude: -23.712820053,
		longitude: -62.298614502,
		municipalityId: 2339
	},
	{
		id: 2797,
		name: 'EL PICASO',
		uta2020: '340280000000025',
		uta2010: '340280000000025',
		latitude: -23.865530014,
		longitude: -62.016155243,
		municipalityId: 2339
	},
	{
		id: 2798,
		name: 'SANTA RITA',
		uta2020: '340280000000076',
		uta2010: '340280000000076',
		latitude: -24.143629272,
		longitude: -62.168996556,
		municipalityId: 2339
	},
	{
		id: 2799,
		name: 'EL TREBOL',
		uta2020: '340280000000029',
		uta2010: '340280000000029',
		latitude: -23.93905778,
		longitude: -61.8726151,
		municipalityId: 2339
	},
	{
		id: 2800,
		name: 'LA ENSENADA',
		uta2020: '340280000000041',
		uta2010: '340280000000041',
		latitude: -24.141633987,
		longitude: -62.200614929,
		municipalityId: 2339
	},
	{
		id: 2801,
		name: 'QUEBRACHO COTO',
		uta2020: '340280000000073',
		uta2010: '340280000000073',
		latitude: -24.070112228,
		longitude: -62.300621033,
		municipalityId: 2339
	},
	{
		id: 2802,
		name: 'CAMPO LA CRUZ',
		uta2020: '340280000000010',
		uta2010: '340280000000010',
		latitude: -24.067728043,
		longitude: -62.015686035,
		municipalityId: 2339
	},
	{
		id: 2803,
		name: 'EL MILAGRO',
		uta2020: '340280000000022',
		uta2010: '340280000000022',
		latitude: -23.497861,
		longitude: -62.034132,
		municipalityId: 2339
	},
	{
		id: 2804,
		name: 'VACA MUERTA',
		uta2020: '340280000000083',
		uta2010: '340280000000083',
		latitude: -24.002761841,
		longitude: -61.961463928,
		municipalityId: 2339
	},
	{
		id: 2805,
		name: 'TRES PALMITAS',
		uta2020: '340280000000082',
		uta2010: '340280000000082',
		latitude: -23.98328045,
		longitude: -61.9162269,
		municipalityId: 2339
	},
	{
		id: 2806,
		name: 'TENIENTE GENERAL ROSENDO M. FRAGA',
		uta2020: '340280000000080',
		uta2010: '340280000000080',
		latitude: -23.75045029,
		longitude: -62.15432827,
		municipalityId: 2339
	},
	{
		id: 2807,
		name: 'BOLSA DEL PALOMO',
		uta2020: '340280000000005',
		uta2010: '340280000000005',
		latitude: -24.19160553,
		longitude: -62.10109304,
		municipalityId: 2339
	},
	{
		id: 2808,
		name: 'POZO EL YACARE',
		uta2020: '340280000000070',
		uta2010: '340280000000070',
		latitude: -24.078222795,
		longitude: -62.333189492,
		municipalityId: 2339
	},
	{
		id: 2809,
		name: 'EL PALMAR',
		uta2020: '340280000000024',
		uta2010: '340280000000024',
		latitude: -24.167581558,
		longitude: -62.038848877,
		municipalityId: 2339
	},
	{
		id: 2810,
		name: 'LA ENTRADA',
		uta2020: '340280000000042',
		uta2010: '340280000000042',
		latitude: -24.10975647,
		longitude: -62.054347992,
		municipalityId: 2339
	},
	{
		id: 2811,
		name: 'EL ROSILLO',
		uta2020: '340280000000027',
		uta2010: '340280000000027',
		latitude: -23.68677,
		longitude: -61.94158,
		municipalityId: 2339
	},
	{
		id: 2812,
		name: 'AGUA VERDE',
		uta2020: '340280000000001',
		uta2010: '340280000000001',
		latitude: -23.675008774,
		longitude: -62.312923431,
		municipalityId: 2339
	},
	{
		id: 2813,
		name: 'LA SOLEDAD',
		uta2020: '340280000000048',
		uta2010: '340280000000048',
		latitude: -23.927713394,
		longitude: -62.106327057,
		municipalityId: 2339
	},
	{
		id: 2814,
		name: 'LA EXTRANJERA',
		uta2020: '340280000000044',
		uta2010: '340280000000044',
		latitude: -23.685117722,
		longitude: -62.136341095,
		municipalityId: 2339
	},
	{
		id: 2815,
		name: 'POZO DE LA YEGUA',
		uta2020: '340280000000063',
		uta2010: '340280000000063',
		latitude: -24.148292541,
		longitude: -62.000793457,
		municipalityId: 2339
	},
	{
		id: 2816,
		name: 'EL TOTORAL',
		uta2020: '340280000000028',
		uta2010: '340280000000028',
		latitude: -23.56922399,
		longitude: -62.08877626,
		municipalityId: 2339
	},
	{
		id: 2817,
		name: 'MONTE RICO',
		uta2020: '340280000000059',
		uta2010: '340280000000059',
		latitude: -23.563488007,
		longitude: -61.996696472,
		municipalityId: 2339
	},
	{
		id: 2818,
		name: 'EL POTRERITO',
		uta2020: '340280000000026',
		uta2010: '340280000000026',
		latitude: -24.30445209,
		longitude: -61.81615175,
		municipalityId: 2339
	},
	{
		id: 2819,
		name: 'CAMPO BANDERA',
		uta2020: '340280000000007',
		uta2010: '340280000000007',
		latitude: -23.999503409,
		longitude: -61.875156915,
		municipalityId: 2339
	},
	{
		id: 2820,
		name: 'CAMPO GRANDE',
		uta2020: '340280000000008',
		uta2010: '340280000000008',
		latitude: -24.10650004,
		longitude: -62.21771013,
		municipalityId: 2339
	},
	{
		id: 2821,
		name: 'ISLA VERDE',
		uta2020: '340280000000036',
		uta2010: '340280000000036',
		latitude: -24.07002449,
		longitude: -62.194725037,
		municipalityId: 2339
	},
	{
		id: 2822,
		name: 'EL VIOLIN',
		uta2020: '340280000000031',
		uta2010: '340280000000031',
		latitude: -23.989778519,
		longitude: -61.851520538,
		municipalityId: 2339
	},
	{
		id: 2823,
		name: 'LA JUNTA',
		uta2020: '340280000000046',
		uta2010: '340280000000046',
		latitude: -23.56923,
		longitude: -62.08886,
		municipalityId: 2339
	},
	{
		id: 2824,
		name: 'COMUNIDAD ABORIGEN WICHI FWINAFWAS',
		uta2020: '340280000000013',
		uta2010: '340280000000013',
		latitude: -24.06407093,
		longitude: -62.03053971,
		municipalityId: 2339
	},
	{
		id: 2825,
		name: 'SANTA TERESA',
		uta2020: '340280000000078',
		uta2010: '340280000000078',
		latitude: -24.042760849,
		longitude: -61.845573425,
		municipalityId: 2339
	},
	{
		id: 2826,
		name: 'LA ESPERANZA',
		uta2020: '340280000000043',
		uta2010: '340280000000043',
		latitude: -24.098777771,
		longitude: -62.248641968,
		municipalityId: 2339
	},
	{
		id: 2827,
		name: 'POZO DE LOS PATOS',
		uta2020: '340280000000065',
		uta2010: '340280000000065',
		latitude: -24.11472168,
		longitude: -61.94735217,
		municipalityId: 2339
	},
	{
		id: 2828,
		name: 'EL CARAMELO',
		uta2020: '820843365120000',
		uta2010: '820843365120000',
		latitude: -33.128873398,
		longitude: -60.713039439,
		municipalityId: 811
	},
	{
		id: 2829,
		name: 'ALVAREZ',
		uta2020: '820843365030000',
		uta2010: '820843365030000',
		latitude: -33.130625358,
		longitude: -60.803962686,
		municipalityId: 811
	},
	{
		id: 2830,
		name: 'SANTA ANA',
		uta2020: '900778483040000',
		uta2010: '900778483040000',
		latitude: -27.472232136,
		longitude: -65.684167542,
		municipalityId: 2247
	},
	{
		id: 2831,
		name: 'VILLA CLODOMIRO HILERET',
		uta2020: '900778483050000',
		uta2010: '900778483050000',
		latitude: -27.473946612,
		longitude: -65.659230021,
		municipalityId: 2247
	},
	{
		id: 2832,
		name: 'PEYRANO',
		uta2020: '820282504170000',
		uta2010: '820282504170000',
		latitude: -33.54113786,
		longitude: -60.804329559,
		municipalityId: 722
	},
	{
		id: 2833,
		name: 'SAN CARLOS CENTRO',
		uta2020: '820700168230000',
		uta2010: '820700168230000',
		latitude: -31.728417999,
		longitude: -61.091395786,
		municipalityId: 866
	},
	{
		id: 2834,
		name: 'SANTA ROSA',
		uta2020: '380986189000116',
		uta2010: '380986189000116',
		latitude: -23.764385223,
		longitude: -65.469772339,
		municipalityId: 1167
	},
	{
		id: 2835,
		name: 'MOLLE PUNCO',
		uta2020: '380986189000074',
		uta2010: '380986189000074',
		latitude: -23.795555115,
		longitude: -65.469825745,
		municipalityId: 1167
	},
	{
		id: 2836,
		name: 'POZO BRAVO',
		uta2020: '380986189000088',
		uta2010: '380986189000088',
		latitude: -23.942234039,
		longitude: -65.783660889,
		municipalityId: 1167
	},
	{
		id: 2837,
		name: 'PUERTA DE LIPAN',
		uta2020: '380986189000093',
		uta2010: '380986189000093',
		latitude: -23.66819,
		longitude: -65.57362,
		municipalityId: 1167
	},
	{
		id: 2838,
		name: 'SALADILLO',
		uta2020: '380986189000110',
		uta2010: '380986189000110',
		latitude: -23.658409119,
		longitude: -65.7603302,
		municipalityId: 1167
	},
	{
		id: 2839,
		name: 'COLORADOS',
		uta2020: '380986189000036',
		uta2010: '380986189000036',
		latitude: -23.57138,
		longitude: -65.69731,
		municipalityId: 1167
	},
	{
		id: 2840,
		name: 'CIENAGA',
		uta2020: '380986189000031',
		uta2010: '380986189000031',
		latitude: -23.70055491,
		longitude: -65.54282981,
		municipalityId: 1167
	},
	{
		id: 2841,
		name: 'PUERTA DE COLORADOS',
		uta2020: '380986189025000',
		uta2010: '380986189025000',
		latitude: -23.561389111,
		longitude: -65.691230625,
		municipalityId: 1167
	},
	{
		id: 2842,
		name: 'SAN JUAN DE POZO COLORA',
		uta2020: '380986189000113',
		uta2010: '380986189000113',
		latitude: -23.55268,
		longitude: -65.81894,
		municipalityId: 1167
	},
	{
		id: 2843,
		name: 'AGUADITA',
		uta2020: '380986189000006',
		uta2010: '380986189000006',
		latitude: -23.780700684,
		longitude: -65.961936951,
		municipalityId: 1167
	},
	{
		id: 2844,
		name: 'CIENAGA GRANDE',
		uta2020: '380986189000032',
		uta2010: '380986189000032',
		latitude: -23.893632889,
		longitude: -65.9972229,
		municipalityId: 1167
	},
	{
		id: 2845,
		name: 'PURMAMARCA',
		uta2020: '380986189030000',
		uta2010: '380986189030000',
		latitude: -23.740998064,
		longitude: -65.505241233,
		municipalityId: 1167
	},
	{
		id: 2846,
		name: 'TRES MORROS',
		uta2020: '380986189000125',
		uta2010: '380986189000125',
		latitude: -23.708406448,
		longitude: -65.83719635,
		municipalityId: 1167
	},
	{
		id: 2847,
		name: 'PIEDRAS BLANCAS',
		uta2020: '380986189000082',
		uta2010: '380986189000082',
		latitude: -23.979476929,
		longitude: -65.805534363,
		municipalityId: 1167
	},
	{
		id: 2848,
		name: 'TUNALITO',
		uta2020: '380986189000129',
		uta2010: '380986189000129',
		latitude: -23.72343,
		longitude: -65.46272,
		municipalityId: 1167
	},
	{
		id: 2849,
		name: 'EL MORENO',
		uta2020: '380986189020000',
		uta2010: '380986189020000',
		latitude: -23.841858334,
		longitude: -65.830008747,
		municipalityId: 1167
	},
	{
		id: 2850,
		name: 'POZO COLORADO',
		uta2020: '380986189000089',
		uta2010: '380986189000089',
		latitude: -23.568201065,
		longitude: -65.838256836,
		municipalityId: 1167
	},
	{
		id: 2851,
		name: 'ESTANCIA GRANDE',
		uta2020: '380986189000048',
		uta2010: '380986189000048',
		latitude: -23.607709885,
		longitude: -65.52734375,
		municipalityId: 1167
	},
	{
		id: 2852,
		name: 'ANTELO',
		uta2020: '301059875010000',
		uta2010: '301059875010000',
		latitude: -32.533810255,
		longitude: -60.035696612,
		municipalityId: 1788
	},
	{
		id: 2853,
		name: 'FELICIA',
		uta2020: '820703071060000',
		uta2010: '820703071060000',
		latitude: -31.246393988,
		longitude: -61.212881667,
		municipalityId: 867
	},
	{
		id: 2854,
		name: 'LA CUCHILLA',
		uta2020: '900078070000184',
		uta2010: '900078070000184',
		latitude: -26.427768707,
		longitude: -65.080795288,
		municipalityId: 2236
	},
	{
		id: 2855,
		name: 'VACAHUASI',
		uta2020: '900078070000327',
		uta2010: '900078070000327',
		latitude: -26.477468491,
		longitude: -65.077560425,
		municipalityId: 2236
	},
	{
		id: 2856,
		name: 'EL TIPAL',
		uta2020: '900078070000095',
		uta2010: '900078070000095',
		latitude: -26.532085419,
		longitude: -65.030708313,
		municipalityId: 2236
	},
	{
		id: 2857,
		name: 'EL NOGALITO',
		uta2020: '900078070000076',
		uta2010: '900078070000076',
		latitude: -26.427000046,
		longitude: -64.939033508,
		municipalityId: 2236
	},
	{
		id: 2858,
		name: 'AGUA NEGRA',
		uta2020: '900078070000004',
		uta2010: '900078070000004',
		latitude: -26.365106583,
		longitude: -65.060394287,
		municipalityId: 2236
	},
	{
		id: 2859,
		name: 'VILLA PADRE MONTI',
		uta2020: '900078070110000',
		uta2010: '900078070110000',
		latitude: -26.506402594,
		longitude: -64.999898538,
		municipalityId: 2236
	},
	{
		id: 2860,
		name: 'LAS LAJITAS',
		uta2020: '900078070000212',
		uta2010: '900078070000212',
		latitude: -26.41756,
		longitude: -64.94562,
		municipalityId: 2236
	},
	{
		id: 2861,
		name: 'LA RINCONADA',
		uta2020: '900078070000194',
		uta2010: '900078070000194',
		latitude: -26.462585449,
		longitude: -65.003120422,
		municipalityId: 2236
	},
	{
		id: 2862,
		name: 'ALTO DE MEDINA',
		uta2020: '900078070000010',
		uta2010: '900078070000010',
		latitude: -26.463720514,
		longitude: -65.105838229,
		municipalityId: 2236
	},
	{
		id: 2863,
		name: 'RIO DEL NIO',
		uta2020: '900078070000277',
		uta2010: '900078070000277',
		latitude: -26.45087,
		longitude: -65.00191,
		municipalityId: 2236
	},
	{
		id: 2864,
		name: 'COLONIA SAN ERNESTO',
		uta2020: '300889780000008',
		uta2010: '300889780000008',
		latitude: -31.837629846,
		longitude: -58.633441222,
		municipalityId: 1762
	},
	{
		id: 2865,
		name: 'COLONIA PUNTAS DEL GUALEGUAYCHU',
		uta2020: '300889780000007',
		uta2010: '300889780000007',
		latitude: -31.826626072,
		longitude: -58.574837107,
		municipalityId: 1762
	},
	{
		id: 2866,
		name: 'LA ALICIA',
		uta2020: '820913477000011',
		uta2010: '820913477000011',
		latitude: -29.854516983,
		longitude: -60.904865265,
		municipalityId: 838
	},
	{
		id: 2867,
		name: 'AGUARA GRANDE',
		uta2020: '820913477010000',
		uta2010: '820913477010000',
		latitude: -30.10930906,
		longitude: -60.943753932,
		municipalityId: 838
	},
	{
		id: 2868,
		name: 'TIMBUES',
		uta2020: '821194030140000',
		uta2010: '821194030140000',
		latitude: -32.669625268,
		longitude: -60.794354824,
		municipalityId: 1067
	},
	{
		id: 2869,
		name: 'VILLA ELVIRA',
		uta2020: '821194030150000',
		uta2010: '821194030150000',
		latitude: -32.642918572,
		longitude: -60.817709512,
		municipalityId: 1067
	},
	{
		id: 2870,
		name: 'MATTALDI',
		uta2020: '140350245060000',
		uta2010: '140350245060000',
		latitude: -34.480386734,
		longitude: -64.169503305,
		municipalityId: 324
	},
	{
		id: 2871,
		name: 'LAS LOLAS',
		uta2020: '340359056000362',
		uta2010: '340359056000362',
		latitude: -24.6432909,
		longitude: -59.4336114,
		municipalityId: 2293
	},
	{
		id: 2872,
		name: 'COLONIA SARMIENTO',
		uta2020: '340359056020000',
		uta2010: '340359056020000',
		latitude: -24.644478966,
		longitude: -59.433280827,
		municipalityId: 2293
	},
	{
		id: 2873,
		name: 'LA PAMPA',
		uta2020: '141683183040000',
		uta2010: '141683183040000',
		latitude: -30.943220475,
		longitude: -64.276534921,
		municipalityId: 339
	},
	{
		id: 2874,
		name: '9 DE JULIO KILOMETRO 20',
		uta2020: '540420161050000',
		uta2010: '540420161050000',
		latitude: -26.414533311,
		longitude: -54.497611623,
		municipalityId: 2138
	},
	{
		id: 2875,
		name: 'VALLE HERMOSO',
		uta2020: '540420161090000',
		uta2010: '540420161090000',
		latitude: -26.382535289,
		longitude: -54.465284839,
		municipalityId: 2138
	},
	{
		id: 2876,
		name: 'MARIANO MORENO',
		uta2020: '540420161000010',
		uta2010: '540420161000010',
		latitude: -26.360984124,
		longitude: -54.49341102,
		municipalityId: 2138
	},
	{
		id: 2877,
		name: '9 DE JULIO',
		uta2020: '540420161040000',
		uta2010: '540420161040000',
		latitude: -26.430281016,
		longitude: -54.46646669,
		municipalityId: 2138
	},
	{
		id: 2878,
		name: 'FRONTERA',
		uta2020: '180630133000028',
		uta2010: '180630133000028',
		latitude: -27.913323542,
		longitude: -57.85867697,
		municipalityId: 2057
	},
	{
		id: 2879,
		name: 'COLONIA JUAN PUJOL',
		uta2020: '180630133000017',
		uta2010: '180630133000017',
		latitude: -27.90456441,
		longitude: -57.97609899,
		municipalityId: 2057
	},
	{
		id: 2880,
		name: 'TIMBOY',
		uta2020: '180630133000078',
		uta2010: '180630133000078',
		latitude: -27.948443575,
		longitude: -57.989949618,
		municipalityId: 2057
	},
	{
		id: 2881,
		name: 'PUISOYE',
		uta2020: '180630133000064',
		uta2010: '180630133000064',
		latitude: -27.875970691,
		longitude: -57.932891248,
		municipalityId: 2057
	},
	{
		id: 2882,
		name: 'PALMAR GRANDE',
		uta2020: '180630133040000',
		uta2010: '180630133040000',
		latitude: -27.940769412,
		longitude: -57.900915663,
		municipalityId: 2057
	},
	{
		id: 2883,
		name: 'FERNANDEZ',
		uta2020: '180630133000027',
		uta2010: '180630133000027',
		latitude: -27.904733666,
		longitude: -57.975997601,
		municipalityId: 2057
	},
	{
		id: 2884,
		name: 'CHARRAS',
		uta2020: '140560406050000',
		uta2010: '140560406050000',
		latitude: -33.024167732,
		longitude: -64.045826241,
		municipalityId: 368
	},
	{
		id: 2885,
		name: 'BELICHA',
		uta2020: '900218182000007',
		uta2010: '900218182000007',
		latitude: -27.3126707,
		longitude: -65.4820785,
		municipalityId: 2184
	},
	{
		id: 2886,
		name: 'BELICHA HUAICO',
		uta2020: '900218182000008',
		uta2010: '900218182000008',
		latitude: -27.314060211,
		longitude: -65.495765686,
		municipalityId: 2184
	},
	{
		id: 2887,
		name: 'YUCUMANITA',
		uta2020: '900218182000133',
		uta2010: '900218182000133',
		latitude: -27.37752,
		longitude: -65.53024,
		municipalityId: 2184
	},
	{
		id: 2888,
		name: 'GASTONA SUR',
		uta2020: '900218182000061',
		uta2010: '900218182000061',
		latitude: -27.35129,
		longitude: -65.50028,
		municipalityId: 2184
	},
	{
		id: 2889,
		name: 'GASTONA NORTE',
		uta2020: '900218182000060',
		uta2010: '900218182000060',
		latitude: -27.3128625,
		longitude: -65.5225756,
		municipalityId: 2184
	},
	{
		id: 2890,
		name: 'LA LEONESA',
		uta2020: '220140049030000',
		uta2010: '220140049030000',
		latitude: -27.037959628,
		longitude: -58.706937718,
		municipalityId: 26
	},
	{
		id: 2891,
		name: 'QUIA',
		uta2020: '220140049000040',
		uta2010: '220140049000040',
		latitude: -26.955772766,
		longitude: -58.925176402,
		municipalityId: 26
	},
	{
		id: 2892,
		name: 'RINCON DE LUNA',
		uta2020: '220140049000044',
		uta2010: '220140049000044',
		latitude: -26.940717697,
		longitude: -58.934318543,
		municipalityId: 26
	},
	{
		id: 2893,
		name: 'MAIPU',
		uta2020: '220140049000031',
		uta2010: '220140049000031',
		latitude: -27.024020204,
		longitude: -58.706790419,
		municipalityId: 26
	},
	{
		id: 2894,
		name: 'RINCON DEL ZORRO',
		uta2020: '220140049000045',
		uta2010: '220140049000045',
		latitude: -27.030723637,
		longitude: -58.810105658,
		municipalityId: 26
	},
	{
		id: 2895,
		name: 'LAPACHO',
		uta2020: '220140049000024',
		uta2010: '220140049000024',
		latitude: -26.988482618,
		longitude: -58.872250356,
		municipalityId: 26
	},
	{
		id: 2896,
		name: 'PILAR',
		uta2020: '141191057160000',
		uta2010: '141191057160000',
		latitude: -31.680451686,
		longitude: -63.88149798,
		municipalityId: 304
	},
	{
		id: 2897,
		name: 'GESSLER',
		uta2020: '821053785140000',
		uta2010: '821053785140000',
		latitude: -31.877044953,
		longitude: -61.128836765,
		municipalityId: 980
	},
	{
		id: 2898,
		name: 'RINCON DEL VILLAGUAY',
		uta2020: '301130000000093',
		uta2010: '301130000000093',
		latitude: -31.723497,
		longitude: -58.872651,
		municipalityId: 1659
	},
	{
		id: 2899,
		name: 'COLONIA ESPINDOLA',
		uta2020: '301130000000018',
		uta2010: '301130000000018',
		latitude: -31.90346808,
		longitude: -58.80676881,
		municipalityId: 1659
	},
	{
		id: 2900,
		name: 'VILLAGUAY ESTE',
		uta2020: '301130000000102',
		uta2010: '301130000000102',
		latitude: -31.89148531,
		longitude: -58.9887924,
		municipalityId: 1659
	},
	{
		id: 2901,
		name: 'COLONIA SAN JORGE',
		uta2020: '301130000000034',
		uta2010: '301130000000034',
		latitude: -31.854709716,
		longitude: -58.74009677,
		municipalityId: 1659
	},
	{
		id: 2902,
		name: 'COLONIA LA GERONIMA',
		uta2020: '301130000000021',
		uta2010: '301130000000021',
		latitude: -31.791198242,
		longitude: -58.873304346,
		municipalityId: 1659
	},
	{
		id: 2903,
		name: 'COLONIA LA ROSADA',
		uta2020: '301130000000024',
		uta2010: '301130000000024',
		latitude: -31.858196098,
		longitude: -58.914671596,
		municipalityId: 1659
	},
	{
		id: 2904,
		name: 'COLONIA SAN VICENTE',
		uta2020: '301130000000036',
		uta2010: '301130000000036',
		latitude: -31.799282672,
		longitude: -58.757382694,
		municipalityId: 1659
	},
	{
		id: 2905,
		name: 'EL CARMEN',
		uta2020: '900148154000065',
		uta2010: '900148154000065',
		latitude: -26.933485031,
		longitude: -65.194259644,
		municipalityId: 2172
	},
	{
		id: 2906,
		name: 'COLONIA SAN JOSE',
		uta2020: '900148154000010',
		uta2010: '900148154000010',
		latitude: -26.9167,
		longitude: -65.15,
		municipalityId: 2172
	},
	{
		id: 2907,
		name: 'LOS PORCELES',
		uta2020: '900148154000183',
		uta2010: '900148154000183',
		latitude: -26.9332049,
		longitude: -65.2018683,
		municipalityId: 2172
	},
	{
		id: 2908,
		name: 'SAN ANDRES',
		uta2020: '900148154130000',
		uta2010: '900148154130000',
		latitude: -26.888496934,
		longitude: -65.196340176,
		municipalityId: 2172
	},
	{
		id: 2909,
		name: 'JESUS MARIA',
		uta2020: '140210112140000',
		uta2010: '140210112140000',
		latitude: -30.981193738,
		longitude: -64.095771287,
		municipalityId: 207
	},
	{
		id: 2910,
		name: 'CHIMEHUIN',
		uta2020: '580560000000011',
		uta2010: '580560000000011',
		latitude: -40.091751099,
		longitude: -70.894638062,
		municipalityId: 2367
	},
	{
		id: 2911,
		name: 'QUECHUQUINA',
		uta2020: '580560000000038',
		uta2010: '580560000000038',
		latitude: -40.154201508,
		longitude: -71.570823668,
		municipalityId: 2367
	},
	{
		id: 2912,
		name: 'AUQUINCO',
		uta2020: '580560000000002',
		uta2010: '580560000000002',
		latitude: -40.200557709,
		longitude: -71.060089111,
		municipalityId: 2367
	},
	{
		id: 2913,
		name: 'TROMPUL (RAI)',
		uta2020: '580560000000044',
		uta2010: '580560000000044',
		latitude: -40.13691165,
		longitude: -71.40881128,
		municipalityId: 2367
	},
	{
		id: 2914,
		name: 'CHAPELCO',
		uta2020: '580560000000009',
		uta2010: '580560000000009',
		latitude: -40.131362915,
		longitude: -71.199417114,
		municipalityId: 2367
	},
	{
		id: 2915,
		name: 'LAGO HERMOSO',
		uta2020: '580560000000025',
		uta2010: '580560000000025',
		latitude: -40.37333857,
		longitude: -71.45790401,
		municipalityId: 2367
	},
	{
		id: 2916,
		name: 'ESTANCIA SANTA LUCIA',
		uta2020: '580560000000020',
		uta2010: '580560000000020',
		latitude: -40.38691448,
		longitude: -71.26625506,
		municipalityId: 2367
	},
	{
		id: 2917,
		name: 'CHACAY OESTE',
		uta2020: '261050000000009',
		uta2010: '261050000000009',
		latitude: -42.679443,
		longitude: -68.060883,
		municipalityId: 569
	},
	{
		id: 2918,
		name: 'TALAGAPA',
		uta2020: '261050000000022',
		uta2010: '261050000000022',
		latitude: -42.176921845,
		longitude: -68.314094544,
		municipalityId: 569
	},
	{
		id: 2919,
		name: 'CHACAY ESTE',
		uta2020: '261050000000008',
		uta2010: '261050000000008',
		latitude: -42.770240784,
		longitude: -67.66608429,
		municipalityId: 569
	},
	{
		id: 2920,
		name: 'MALLIN GRANDE',
		uta2020: '261050000000017',
		uta2010: '261050000000017',
		latitude: -42.372337341,
		longitude: -67.520446777,
		municipalityId: 569
	},
	{
		id: 2921,
		name: 'CHASICO',
		uta2020: '261050000000011',
		uta2010: '261050000000011',
		latitude: -42.822235107,
		longitude: -66.804069519,
		municipalityId: 569
	},
	{
		id: 2922,
		name: 'ISLAS',
		uta2020: '068050805000015',
		uta2010: '068050805000015',
		latitude: -34.3277116,
		longitude: -58.608687,
		municipalityId: 611
	},
	{
		id: 2923,
		name: 'GENERAL PACHECO',
		uta2020: '068050805010006',
		uta2010: '068050805010006',
		latitude: -34.452308812,
		longitude: -58.644893616,
		municipalityId: 611
	},
	{
		id: 2924,
		name: 'DON TORCUATO ESTE',
		uta2020: '068050805010003',
		uta2010: '068050805010003',
		latitude: -34.486937048,
		longitude: -58.61594103,
		municipalityId: 611
	},
	{
		id: 2925,
		name: 'DIQUE LUJAN',
		uta2020: '068050805010002',
		uta2010: '068050805010002',
		latitude: -34.371775015,
		longitude: -58.69179251,
		municipalityId: 611
	},
	{
		id: 2926,
		name: 'LOS TRONCOS DEL TALAR',
		uta2020: '068050805010007',
		uta2010: '068050805010007',
		latitude: -34.442567203,
		longitude: -58.617436413,
		municipalityId: 611
	},
	{
		id: 2927,
		name: 'RINCON DE MILBERG',
		uta2020: '068050805010009',
		uta2010: '068050805010009',
		latitude: -34.409753204,
		longitude: -58.630482702,
		municipalityId: 611
	},
	{
		id: 2928,
		name: 'RICARDO ROJAS',
		uta2020: '068050805010008',
		uta2010: '068050805010008',
		latitude: -34.456333967,
		longitude: -58.680667032,
		municipalityId: 611
	},
	{
		id: 2929,
		name: 'TIGRE',
		uta2020: '068050805010010',
		uta2010: '068050805010010',
		latitude: -34.426692511,
		longitude: -58.577971754,
		municipalityId: 611
	},
	{
		id: 2930,
		name: 'DON TORCUATO OESTE',
		uta2020: '068050805010004',
		uta2010: '068050805010004',
		latitude: -34.503535458,
		longitude: -58.627528655,
		municipalityId: 611
	},
	{
		id: 2931,
		name: 'EL TALAR',
		uta2020: '068050805010005',
		uta2010: '068050805010005',
		latitude: -34.471321337,
		longitude: -58.657030193,
		municipalityId: 611
	},
	{
		id: 2932,
		name: 'BENAVIDEZ',
		uta2020: '068050805010001',
		uta2010: '068050805010001',
		latitude: -34.410434736,
		longitude: -58.688791969,
		municipalityId: 611
	},
	{
		id: 2933,
		name: 'TRES BOCAS',
		uta2020: '068050805000023',
		uta2010: '068050805000023',
		latitude: -34.384868622,
		longitude: -58.553653717,
		municipalityId: 611
	},
	{
		id: 2934,
		name: 'ONCATIVO',
		uta2020: '141191050150000',
		uta2010: '141191050150000',
		latitude: -31.912835805,
		longitude: -63.683682032,
		municipalityId: 305
	},
	{
		id: 2935,
		name: 'BERNASCONI',
		uta2020: '420770056020000',
		uta2010: '420770056020000',
		latitude: -37.902068191,
		longitude: -63.745079353,
		municipalityId: 1965
	},
	{
		id: 2936,
		name: 'SARAH',
		uta2020: '420565140050000',
		uta2010: '420565140050000',
		latitude: -35.024692306,
		longitude: -63.686962378,
		municipalityId: 1960
	},
	{
		id: 2937,
		name: 'ISLA VICTORIA',
		uta2020: '580700000000020',
		uta2010: '580700000000020',
		latitude: -40.97440945,
		longitude: -71.51995356,
		municipalityId: 2390
	},
	{
		id: 2938,
		name: 'NAHUEL HUAPI',
		uta2020: '580700000000026',
		uta2010: '580700000000026',
		latitude: -41.051795959,
		longitude: -71.148498535,
		municipalityId: 2390
	},
	{
		id: 2939,
		name: 'LA LIPELA',
		uta2020: '580700000000023',
		uta2010: '580700000000023',
		latitude: -40.815830231,
		longitude: -71.112861633,
		municipalityId: 2390
	},
	{
		id: 2940,
		name: 'HUEMUL',
		uta2020: '580700000000018',
		uta2010: '580700000000018',
		latitude: -41.022930145,
		longitude: -71.407981871,
		municipalityId: 2390
	},
	{
		id: 2941,
		name: 'SANTA MARIA',
		uta2020: '580700000000042',
		uta2010: '580700000000042',
		latitude: -40.92704773,
		longitude: -71.420356751,
		municipalityId: 2390
	},
	{
		id: 2942,
		name: 'ESPEJO',
		uta2020: '580700000000014',
		uta2010: '580700000000014',
		latitude: -40.688369751,
		longitude: -71.694778442,
		municipalityId: 2390
	},
	{
		id: 2943,
		name: 'COLONIA LOS ROBLES',
		uta2020: '820422707000023',
		uta2010: '820422707000023',
		latitude: -33.4928639,
		longitude: -61.83395,
		municipalityId: 902
	},
	{
		id: 2944,
		name: 'MURPHY',
		uta2020: '820422707210000',
		uta2010: '820422707210000',
		latitude: -33.642862369,
		longitude: -61.857797469,
		municipalityId: 902
	},
	{
		id: 2945,
		name: 'PLAZA VIDELA',
		uta2020: '141192805000059',
		uta2010: '141192805000059',
		latitude: -31.917023912,
		longitude: -63.50329653,
		municipalityId: 306
	},
	{
		id: 2946,
		name: 'COLONIA VIDELA',
		uta2020: '141192805060000',
		uta2010: '141192805060000',
		latitude: -31.917504474,
		longitude: -63.504715946,
		municipalityId: 306
	},
	{
		id: 2947,
		name: 'SAN JOAQUIN',
		uta2020: '140842462080000',
		uta2010: '140842462080000',
		latitude: -34.510639556,
		longitude: -63.713274696,
		municipalityId: 500
	},
	{
		id: 2948,
		name: 'BARRIO MITRE',
		uta2020: '820282441030000',
		uta2010: '820282441030000',
		latitude: -33.255594638,
		longitude: -60.389775871,
		municipalityId: 723
	},
	{
		id: 2949,
		name: 'EMPALME VILLA CONSTITUCION',
		uta2020: '820282441070000',
		uta2010: '820282441070000',
		latitude: -33.262862547,
		longitude: -60.380464464,
		municipalityId: 723
	},
	{
		id: 2950,
		name: 'EL COLORADO',
		uta2020: '820282441000012',
		uta2010: '820282441000012',
		latitude: -33.288511247,
		longitude: -60.39674826,
		municipalityId: 723
	},
	{
		id: 2951,
		name: 'TINTINA',
		uta2020: '861190133120000',
		uta2010: '861190133120000',
		latitude: -27.02592913,
		longitude: -62.662443997,
		municipalityId: 1441
	},
	{
		id: 2952,
		name: 'LOS BAZAN',
		uta2020: '100420133000023',
		uta2010: '100420133000023',
		latitude: -28.515360023,
		longitude: -65.95517749,
		municipalityId: 1908
	},
	{
		id: 2953,
		name: 'LOS ANGELES NORTE',
		uta2020: '100420133110001',
		uta2010: '100420133110001',
		latitude: -28.413052418,
		longitude: -65.997496311,
		municipalityId: 1908
	},
	{
		id: 2954,
		name: 'COLONIA DEL VALLE',
		uta2020: '100420133050000',
		uta2010: '100420133050000',
		latitude: -28.665957232,
		longitude: -65.875205334,
		municipalityId: 1908
	},
	{
		id: 2955,
		name: 'PUESTO DE RUA',
		uta2020: '100420133000030',
		uta2010: '100420133000030',
		latitude: -28.84479,
		longitude: -65.75135,
		municipalityId: 1908
	},
	{
		id: 2956,
		name: 'LA PARAGUAYA',
		uta2020: '100420133000016',
		uta2010: '100420133000016',
		latitude: -28.63483,
		longitude: -65.82516,
		municipalityId: 1908
	},
	{
		id: 2957,
		name: 'HUILLAPIMA',
		uta2020: '100420133100000',
		uta2010: '100420133100000',
		latitude: -28.732653352,
		longitude: -65.969267134,
		municipalityId: 1908
	},
	{
		id: 2958,
		name: 'LOS CHAÑARITOS',
		uta2020: '100420133000024',
		uta2010: '100420133000024',
		latitude: -28.7796952,
		longitude: -65.76250004,
		municipalityId: 1908
	},
	{
		id: 2959,
		name: 'LOS ANGELES SUR',
		uta2020: '100420133110002',
		uta2010: '100420133110002',
		latitude: -28.509625994,
		longitude: -66.013450199,
		municipalityId: 1908
	},
	{
		id: 2960,
		name: 'SISI HUASI',
		uta2020: '100420133000034',
		uta2010: '100420133000034',
		latitude: -28.69752,
		longitude: -65.82864,
		municipalityId: 1908
	},
	{
		id: 2961,
		name: 'EL BAÑADO',
		uta2020: '100420133090000',
		uta2010: '100420133090000',
		latitude: -28.649291044,
		longitude: -65.818408388,
		municipalityId: 1908
	},
	{
		id: 2962,
		name: 'LOS POCITOS',
		uta2020: '100420133000026',
		uta2010: '100420133000026',
		latitude: -28.63478442,
		longitude: -65.82503332,
		municipalityId: 1908
	},
	{
		id: 2963,
		name: 'COLONIA NUEVA CONETA',
		uta2020: '100420133060000',
		uta2010: '100420133060000',
		latitude: -28.58592186,
		longitude: -65.838433049,
		municipalityId: 1908
	},
	{
		id: 2964,
		name: 'SAN PABLO',
		uta2020: '100420133140000',
		uta2010: '100420133140000',
		latitude: -28.718521162,
		longitude: -66.040603175,
		municipalityId: 1908
	},
	{
		id: 2965,
		name: 'CONETA',
		uta2020: '100420133080000',
		uta2010: '100420133080000',
		latitude: -28.582494047,
		longitude: -65.883289952,
		municipalityId: 1908
	},
	{
		id: 2966,
		name: 'MIRAFLORES',
		uta2020: '100420133120000',
		uta2010: '100420133120000',
		latitude: -28.611564378,
		longitude: -65.904551061,
		municipalityId: 1908
	},
	{
		id: 2967,
		name: 'VILLA PASTORA',
		uta2020: '140210105310007',
		uta2010: '140210105310007',
		latitude: -31.306907348,
		longitude: -64.17853146,
		municipalityId: 208
	},
	{
		id: 2968,
		name: 'CIUDAD DE LOS NIÑOS',
		uta2020: '140210105310006',
		uta2010: '140210105310006',
		latitude: -31.295719652,
		longitude: -64.176868528,
		municipalityId: 208
	},
	{
		id: 2969,
		name: 'PARQUE NORTE',
		uta2020: '140210105310002',
		uta2010: '140210105310002',
		latitude: -31.300075437,
		longitude: -64.176742865,
		municipalityId: 208
	},
	{
		id: 2970,
		name: '1 DE AGOSTO',
		uta2020: '140210105310004',
		uta2010: '140210105310004',
		latitude: -31.306907348,
		longitude: -64.17853146,
		municipalityId: 208
	},
	{
		id: 2971,
		name: 'JUAREZ CELMAN',
		uta2020: '140210105320001',
		uta2010: '140210105320001',
		latitude: -31.257022726,
		longitude: -64.165166197,
		municipalityId: 208
	},
	{
		id: 2972,
		name: 'VILLA LOS LLANOS',
		uta2020: '140210105320002',
		uta2010: '140210105320002',
		latitude: -31.275701094,
		longitude: -64.162683539,
		municipalityId: 208
	},
	{
		id: 2973,
		name: 'VILLA EL FACHINAL - PARQUE NORTE - GUIÑA',
		uta2020: '140210105310000',
		uta2010: '140210105310000',
		latitude: -31.310130724,
		longitude: -64.180527081,
		municipalityId: 208
	},
	{
		id: 2974,
		name: 'ALMIRANTE BROWN',
		uta2020: '140210105310005',
		uta2010: '140210105310005',
		latitude: -31.307567214,
		longitude: -64.181482746,
		municipalityId: 208
	},
	{
		id: 2975,
		name: 'GUIÑAZU NORTE',
		uta2020: '140210105310001',
		uta2010: '140210105310001',
		latitude: -31.306715289,
		longitude: -64.170325362,
		municipalityId: 208
	},
	{
		id: 2976,
		name: 'COLONIA SAN GREGORIO',
		uta2020: '181120266000015',
		uta2010: '181120266000015',
		latitude: -30.62171574,
		longitude: -57.89384176,
		municipalityId: 2061
	},
	{
		id: 2977,
		name: 'COLONIA BUENA VISTA',
		uta2020: '181120266000010',
		uta2010: '181120266000010',
		latitude: -30.53469423,
		longitude: -57.96026817,
		municipalityId: 2061
	},
	{
		id: 2978,
		name: 'COLONIA MOCORETA',
		uta2020: '181120266000012',
		uta2010: '181120266000012',
		latitude: -30.63561821,
		longitude: -57.877948761,
		municipalityId: 2061
	},
	{
		id: 2979,
		name: 'PIEDRITAS',
		uta2020: '181120266000059',
		uta2010: '181120266000059',
		latitude: -30.433935682,
		longitude: -58.015275623,
		municipalityId: 2061
	},
	{
		id: 2980,
		name: 'MOCORETA',
		uta2020: '181120266040000',
		uta2010: '181120266040000',
		latitude: -30.617680405,
		longitude: -57.962825459,
		municipalityId: 2061
	},
	{
		id: 2981,
		name: 'COLONIA SAN ANDRES',
		uta2020: '181120266000013',
		uta2010: '181120266000013',
		latitude: -30.584742886,
		longitude: -57.99395157,
		municipalityId: 2061
	},
	{
		id: 2982,
		name: 'GENERAL ENRIQUE GODOY',
		uta2020: '620420147430000',
		uta2010: '620420147430000',
		latitude: -39.079550122,
		longitude: -67.157550826,
		municipalityId: 1264
	},
	{
		id: 2983,
		name: 'PEDRO E. VIVAS',
		uta2020: '141052672000094',
		uta2010: '141052672000094',
		latitude: -31.370747,
		longitude: -63.5325789,
		municipalityId: 255
	},
	{
		id: 2984,
		name: 'KILOMETRO 658',
		uta2020: '141052672100000',
		uta2010: '141052672100000',
		latitude: -31.370180941,
		longitude: -63.532602551,
		municipalityId: 255
	},
	{
		id: 2985,
		name: 'LAS SALADAS',
		uta2020: '141052700160000',
		uta2010: '141052700160000',
		latitude: -30.759468101,
		longitude: -63.203502729,
		municipalityId: 256
	},
	{
		id: 2986,
		name: 'BUENOS AIRES CHICO',
		uta2020: '260140028010000',
		uta2010: '260140028010000',
		latitude: -42.068796126,
		longitude: -71.215834314,
		municipalityId: 546
	},
	{
		id: 2987,
		name: 'EL MAITEN',
		uta2020: '260140028050000',
		uta2010: '260140028050000',
		latitude: -42.054285436,
		longitude: -71.167315331,
		municipalityId: 546
	},
	{
		id: 2988,
		name: 'PICADA BERÓN',
		uta2020: '300709480000A50',
		uta2010: null,
		latitude: -30.8561,
		longitude: -59.3493,
		municipalityId: 1582
	},
	{
		id: 2989,
		name: 'EL YESO',
		uta2020: '300709480000056',
		uta2010: '300709480000056',
		latitude: -30.845171073,
		longitude: -59.372276111,
		municipalityId: 1582
	},
	{
		id: 2990,
		name: 'EL CARMEN',
		uta2020: '300709480000045',
		uta2010: '300709480000045',
		latitude: -30.848651886,
		longitude: -59.345699311,
		municipalityId: 1582
	},
	{
		id: 2991,
		name: 'EL GUAYABO',
		uta2020: '301139935000048',
		uta2010: '301139935000048',
		latitude: -31.29401755,
		longitude: -58.90571994,
		municipalityId: 1660
	},
	{
		id: 2992,
		name: 'EL ACHIRAL',
		uta2020: '301139935000043',
		uta2010: '301139935000043',
		latitude: -31.357686621,
		longitude: -58.805584691,
		municipalityId: 1660
	},
	{
		id: 2993,
		name: 'LUCAS NORTE',
		uta2020: '301139935000075',
		uta2010: '301139935000075',
		latitude: -31.430187914,
		longitude: -58.972851109,
		municipalityId: 1660
	},
	{
		id: 2994,
		name: 'EL CURUPI',
		uta2020: '301139935000046',
		uta2010: '301139935000046',
		latitude: -31.25193989,
		longitude: -58.83520869,
		municipalityId: 1660
	},
	{
		id: 2995,
		name: 'SAUZAL BONITO',
		uta2020: '580355042000033',
		uta2010: '580355042000033',
		latitude: -38.589513864,
		longitude: -69.070450045,
		municipalityId: 2347
	},
	{
		id: 2996,
		name: 'CABALLITO',
		uta2020: '020060001010001',
		uta2010: '020060001010001',
		latitude: -34.6168255,
		longitude: -58.44360311,
		municipalityId: 2444
	},
	{
		id: 2997,
		name: 'CASPALA',
		uta2020: '381056210010000',
		uta2010: '381056210010000',
		latitude: -23.357236293,
		longitude: -65.118399736,
		municipalityId: 1197
	},
	{
		id: 2998,
		name: 'TACO POZO',
		uta2020: '860280000000088',
		uta2010: '860280000000088',
		latitude: -28.557027817,
		longitude: -63.661121368,
		municipalityId: 1402
	},
	{
		id: 2999,
		name: 'SANTA ROSA',
		uta2020: '860280000000083',
		uta2010: '860280000000083',
		latitude: -28.690836115,
		longitude: -63.178370205,
		municipalityId: 1402
	},
	{
		id: 3000,
		name: 'COLONIA LIBANESA',
		uta2020: '860280000000021',
		uta2010: '860280000000021',
		latitude: -28.64566,
		longitude: -63.00711,
		municipalityId: 1402
	},
	{
		id: 3001,
		name: 'LAGO MUYOJ',
		uta2020: '860280000000040',
		uta2010: '860280000000040',
		latitude: -28.70738,
		longitude: -62.8081,
		municipalityId: 1402
	},
	{
		id: 3002,
		name: 'PALERMO',
		uta2020: '860280000000057',
		uta2010: '860280000000057',
		latitude: -28.505710602,
		longitude: -62.967292786,
		municipalityId: 1402
	},
	{
		id: 3003,
		name: 'BLANCA POZO',
		uta2020: '860280000000003',
		uta2010: '860280000000003',
		latitude: -28.70814175,
		longitude: -63.1050531,
		municipalityId: 1402
	},
	{
		id: 3004,
		name: 'PERCAS',
		uta2020: '860280000000059',
		uta2010: '860280000000059',
		latitude: -28.368275053,
		longitude: -63.55839979,
		municipalityId: 1402
	},
	{
		id: 3005,
		name: 'SAN ROQUE',
		uta2020: '860280000000081',
		uta2010: '860280000000081',
		latitude: -28.348436964,
		longitude: -63.434692416,
		municipalityId: 1402
	},
	{
		id: 3006,
		name: 'SAN JOSE',
		uta2020: '860280000000076',
		uta2010: '860280000000076',
		latitude: -28.623285364,
		longitude: -63.214168526,
		municipalityId: 1402
	},
	{
		id: 3007,
		name: 'CAMPO ALEGRE',
		uta2020: '860280000000007',
		uta2010: '860280000000007',
		latitude: -28.53095,
		longitude: -63.05152,
		municipalityId: 1402
	},
	{
		id: 3008,
		name: 'LA COSTA',
		uta2020: '860280000000037',
		uta2010: '860280000000037',
		latitude: -28.605509932,
		longitude: -62.824872682,
		municipalityId: 1402
	},
	{
		id: 3009,
		name: 'COLONIA ISLA',
		uta2020: '860280000000020',
		uta2010: '860280000000020',
		latitude: -28.64575,
		longitude: -62.9686,
		municipalityId: 1402
	},
	{
		id: 3010,
		name: 'YACASNIOJ',
		uta2020: '860280000000103',
		uta2010: '860280000000103',
		latitude: -28.687600233,
		longitude: -62.95328907,
		municipalityId: 1402
	},
	{
		id: 3011,
		name: 'SANTO DOMINGO',
		uta2020: '860280000000084',
		uta2010: '860280000000084',
		latitude: -28.367839589,
		longitude: -63.477713918,
		municipalityId: 1402
	},
	{
		id: 3012,
		name: 'COLONIA ALCIRA',
		uta2020: '860280000000016',
		uta2010: '860280000000016',
		latitude: -28.57629,
		longitude: -63.02401,
		municipalityId: 1402
	},
	{
		id: 3013,
		name: 'BREAYOJ',
		uta2020: '860280000000004',
		uta2010: '860280000000004',
		latitude: -28.585826968,
		longitude: -63.332405838,
		municipalityId: 1402
	},
	{
		id: 3014,
		name: 'POZO MOSOJ',
		uta2020: '860280000000063',
		uta2010: '860280000000063',
		latitude: -28.36269,
		longitude: -63.68208,
		municipalityId: 1402
	},
	{
		id: 3015,
		name: 'PUNTA ISLA',
		uta2020: '860280000000067',
		uta2010: '860280000000067',
		latitude: -28.638289914,
		longitude: -62.772256527,
		municipalityId: 1402
	},
	{
		id: 3016,
		name: 'LORO PAMPA',
		uta2020: '860280000000042',
		uta2010: '860280000000042',
		latitude: -28.770652771,
		longitude: -62.776851654,
		municipalityId: 1402
	},
	{
		id: 3017,
		name: 'LUJAN',
		uta2020: '860280000000044',
		uta2010: '860280000000044',
		latitude: -28.515985861,
		longitude: -62.934389547,
		municipalityId: 1402
	},
	{
		id: 3018,
		name: 'PASO GRANDE',
		uta2020: '860280000000058',
		uta2010: '860280000000058',
		latitude: -28.323678204,
		longitude: -63.183848778,
		municipalityId: 1402
	},
	{
		id: 3019,
		name: 'SAN PEDRO',
		uta2020: '860280000000079',
		uta2010: '860280000000079',
		latitude: -28.42995,
		longitude: -63.71972,
		municipalityId: 1402
	},
	{
		id: 3020,
		name: 'TALA POZO',
		uta2020: '860280000000093',
		uta2010: '860280000000093',
		latitude: -28.501659728,
		longitude: -63.476785593,
		municipalityId: 1402
	},
	{
		id: 3021,
		name: 'GRAMILLA',
		uta2020: '860280000000033',
		uta2010: '860280000000033',
		latitude: -28.39997,
		longitude: -63.09782,
		municipalityId: 1402
	},
	{
		id: 3022,
		name: 'NOVILLO POZO',
		uta2020: '860280000000053',
		uta2010: '860280000000053',
		latitude: -28.55353353,
		longitude: -63.418021218,
		municipalityId: 1402
	},
	{
		id: 3023,
		name: 'TOTORA',
		uta2020: '860280000000098',
		uta2010: '860280000000098',
		latitude: -28.59607,
		longitude: -63.52186,
		municipalityId: 1402
	},
	{
		id: 3024,
		name: 'EL MOLLE',
		uta2020: '860280000000030',
		uta2010: '860280000000030',
		latitude: -28.28852982,
		longitude: -63.516066319,
		municipalityId: 1402
	},
	{
		id: 3025,
		name: 'NAVICHA',
		uta2020: '860280000000051',
		uta2010: '860280000000051',
		latitude: -28.740432796,
		longitude: -62.740220885,
		municipalityId: 1402
	},
	{
		id: 3026,
		name: 'SAN ANTONIO DE COPO',
		uta2020: '860280000000074',
		uta2010: '860280000000074',
		latitude: -28.351659888,
		longitude: -63.15880034,
		municipalityId: 1402
	},
	{
		id: 3027,
		name: 'MANCAPA',
		uta2020: '860280000000047',
		uta2010: '860280000000047',
		latitude: -28.60379,
		longitude: -62.86796,
		municipalityId: 1402
	},
	{
		id: 3028,
		name: 'SALVIAYOJ',
		uta2020: '860280000000072',
		uta2010: '860280000000072',
		latitude: -28.438421249,
		longitude: -63.360034943,
		municipalityId: 1402
	},
	{
		id: 3029,
		name: 'CALOJ',
		uta2020: '860280000000006',
		uta2010: '860280000000006',
		latitude: -28.47772,
		longitude: -63.65911,
		municipalityId: 1402
	},
	{
		id: 3030,
		name: 'TUSCA POZO',
		uta2020: '860280000000101',
		uta2010: '860280000000101',
		latitude: -28.425617218,
		longitude: -63.475097656,
		municipalityId: 1402
	},
	{
		id: 3031,
		name: 'PUNTA CORRAL',
		uta2020: '860280000000066',
		uta2010: '860280000000066',
		latitude: -28.519544605,
		longitude: -63.523013407,
		municipalityId: 1402
	},
	{
		id: 3032,
		name: 'SAN ANTONIO',
		uta2020: '860280000000073',
		uta2010: '860280000000073',
		latitude: -28.601100904,
		longitude: -63.170365692,
		municipalityId: 1402
	},
	{
		id: 3033,
		name: 'HURMANITA ESTANCIA',
		uta2020: '860280000000036',
		uta2010: '860280000000036',
		latitude: -28.797020834,
		longitude: -63.008896783,
		municipalityId: 1402
	},
	{
		id: 3034,
		name: 'PUENTE NEGRO',
		uta2020: '860280000000064',
		uta2010: '860280000000064',
		latitude: -28.560585126,
		longitude: -62.898137238,
		municipalityId: 1402
	},
	{
		id: 3035,
		name: 'TALA ATUN',
		uta2020: '860280000000092',
		uta2010: '860280000000092',
		latitude: -28.418274843,
		longitude: -63.298103432,
		municipalityId: 1402
	},
	{
		id: 3036,
		name: 'EL SALADILLO',
		uta2020: '660910224000034',
		uta2010: '660910224000034',
		latitude: -24.592188174,
		longitude: -66.195291296,
		municipalityId: 1860
	},
	{
		id: 3037,
		name: 'CERRO NEGRO',
		uta2020: '660910224000014',
		uta2010: '660910224000014',
		latitude: -23.500621445,
		longitude: -66.117789638,
		municipalityId: 1860
	},
	{
		id: 3038,
		name: 'HORNADILLAS',
		uta2020: '660910224000044',
		uta2010: '660910224000044',
		latitude: -23.603687286,
		longitude: -66.228355408,
		municipalityId: 1860
	},
	{
		id: 3039,
		name: 'COBRES',
		uta2020: '660910224010000',
		uta2010: '660910224010000',
		latitude: -23.63919985,
		longitude: -66.268403973,
		municipalityId: 1860
	},
	{
		id: 3040,
		name: 'CANGREJILLOS',
		uta2020: '660910224000012',
		uta2010: '660910224000012',
		latitude: -23.78698349,
		longitude: -66.067832947,
		municipalityId: 1860
	},
	{
		id: 3041,
		name: 'LA POMA',
		uta2020: '660910224020000',
		uta2010: '660910224020000',
		latitude: -24.712901049,
		longitude: -66.199738518,
		municipalityId: 1860
	},
	{
		id: 3042,
		name: 'EL RODEO',
		uta2020: '660910224000033',
		uta2010: '660910224000033',
		latitude: -24.89476,
		longitude: -66.1455,
		municipalityId: 1860
	},
	{
		id: 3043,
		name: 'PISCUNO',
		uta2020: '660910224000074',
		uta2010: '660910224000074',
		latitude: -24.067410179,
		longitude: -66.09974263,
		municipalityId: 1860
	},
	{
		id: 3044,
		name: 'CHURCAL',
		uta2020: '660910224000016',
		uta2010: '660910224000016',
		latitude: -23.568397522,
		longitude: -66.211875916,
		municipalityId: 1860
	},
	{
		id: 3045,
		name: 'POZO BRAVO',
		uta2020: '660910224000080',
		uta2010: '660910224000080',
		latitude: -24.724281311,
		longitude: -66.208580017,
		municipalityId: 1860
	},
	{
		id: 3046,
		name: 'PUEBLO VIEJO',
		uta2020: '660910224000083',
		uta2010: '660910224000083',
		latitude: -24.69490242,
		longitude: -66.199745178,
		municipalityId: 1860
	},
	{
		id: 3047,
		name: 'ESQUINA COLORADA',
		uta2020: '660910224000038',
		uta2010: '660910224000038',
		latitude: -23.713697433,
		longitude: -66.269447327,
		municipalityId: 1860
	},
	{
		id: 3048,
		name: 'EL CAJON',
		uta2020: '660910224000024',
		uta2010: '660910224000024',
		latitude: -24.813264847,
		longitude: -66.168334961,
		municipalityId: 1860
	},
	{
		id: 3049,
		name: 'ESQUINA DE GUARDIA',
		uta2020: '660910224000039',
		uta2010: '660910224000039',
		latitude: -23.817133211,
		longitude: -66.234635938,
		municipalityId: 1860
	},
	{
		id: 3050,
		name: 'ESQUINA AZUL',
		uta2020: '660910224000037',
		uta2010: '660910224000037',
		latitude: -24.66096878,
		longitude: -66.194877624,
		municipalityId: 1860
	},
	{
		id: 3051,
		name: 'EL TRIGAL',
		uta2020: '660910224000036',
		uta2010: '660910224000036',
		latitude: -24.682319641,
		longitude: -66.179039002,
		municipalityId: 1860
	},
	{
		id: 3052,
		name: 'LA CARBONADA',
		uta2020: '141470000130000',
		uta2010: '141470000130000',
		latitude: -31.528569462,
		longitude: -64.071255636,
		municipalityId: 226
	},
	{
		id: 3053,
		name: 'CAMPO BUENA ESPERANZA',
		uta2020: '141470000000011',
		uta2010: '141470000000011',
		latitude: -31.7751516,
		longitude: -64.1905623,
		municipalityId: 226
	},
	{
		id: 3054,
		name: 'SAN ANTONIO NORTE',
		uta2020: '141470000000058',
		uta2010: '141470000000058',
		latitude: -31.760219574,
		longitude: -64.211029053,
		municipalityId: 226
	},
	{
		id: 3055,
		name: 'BAJO GRANDE',
		uta2020: '141470000000006',
		uta2010: '141470000000006',
		latitude: -31.6177821,
		longitude: -64.2069795,
		municipalityId: 226
	},
	{
		id: 3056,
		name: 'BAJO CHICO',
		uta2020: '141470000000005',
		uta2010: '141470000000005',
		latitude: -31.699292026,
		longitude: -64.319905385,
		municipalityId: 226
	},
	{
		id: 3057,
		name: 'SOCAVONES',
		uta2020: '141470000270000',
		uta2010: '141470000270000',
		latitude: -31.530086666,
		longitude: -64.145783224,
		municipalityId: 226
	},
	{
		id: 3058,
		name: 'RIO DEL MEDIO',
		uta2020: '141470000000055',
		uta2010: '141470000000055',
		latitude: -31.874669986,
		longitude: -64.685262077,
		municipalityId: 226
	},
	{
		id: 3059,
		name: 'COSME SUR',
		uta2020: '141470000000022',
		uta2010: '141470000000022',
		latitude: -31.717804829,
		longitude: -64.117193395,
		municipalityId: 226
	},
	{
		id: 3060,
		name: 'LA MARIA VIRGINIA',
		uta2020: '141470000000038',
		uta2010: '141470000000038',
		latitude: -31.572052002,
		longitude: -64.09753418,
		municipalityId: 226
	},
	{
		id: 3061,
		name: 'LA ACEQUIECITA',
		uta2020: '141470000000029',
		uta2010: '141470000000029',
		latitude: -31.824145739,
		longitude: -64.662159816,
		municipalityId: 226
	},
	{
		id: 3062,
		name: 'TRES POZOS SUD',
		uta2020: '141470000000064',
		uta2010: '141470000000064',
		latitude: -31.8158388,
		longitude: -64.0321895,
		municipalityId: 226
	},
	{
		id: 3063,
		name: 'COSME NORTE',
		uta2020: '141470000000020',
		uta2010: '141470000000020',
		latitude: -31.753284367,
		longitude: -64.078600199,
		municipalityId: 226
	},
	{
		id: 3064,
		name: 'BUENA VISTA',
		uta2020: '141470000000009',
		uta2010: '141470000000009',
		latitude: -31.831882413,
		longitude: -64.114189218,
		municipalityId: 226
	},
	{
		id: 3065,
		name: 'CARRERAS',
		uta2020: '820422609060000',
		uta2010: '820422609060000',
		latitude: -33.598283457,
		longitude: -61.311768436,
		municipalityId: 903
	},
	{
		id: 3066,
		name: 'LOS TAJAMARES',
		uta2020: '141753218000057',
		uta2010: '141753218000057',
		latitude: -30.3528352,
		longitude: -63.4382652,
		municipalityId: 490
	},
	{
		id: 3067,
		name: 'ROSARIO DEL SALADILLO',
		uta2020: '141753218070000',
		uta2010: '141753218070000',
		latitude: -30.429336912,
		longitude: -63.447861518,
		municipalityId: 490
	},
	{
		id: 3068,
		name: 'PUESTO DE FIERRO',
		uta2020: '141753218000063',
		uta2010: '141753218000063',
		latitude: -30.549508053,
		longitude: -63.449467221,
		municipalityId: 490
	},
	{
		id: 3069,
		name: 'ZENON PEREYRA',
		uta2020: '820212406430000',
		uta2010: '820212406430000',
		latitude: -31.564397214,
		longitude: -61.898425061,
		municipalityId: 753
	},
	{
		id: 3070,
		name: 'ESTACION KILOMETRO 501',
		uta2020: '820212406000038',
		uta2010: '820212406000038',
		latitude: -31.554428,
		longitude: -61.9786715,
		municipalityId: 753
	},
	{
		id: 3071,
		name: 'PUEBLO NUEVO',
		uta2020: '540420140055000',
		uta2010: '540420140055000',
		latitude: -26.244541361,
		longitude: -54.590467561,
		municipalityId: 2139
	},
	{
		id: 3072,
		name: 'AGUARAY GUAZU',
		uta2020: '540420140000001',
		uta2010: '540420140000001',
		latitude: -26.15509937,
		longitude: -54.58240989,
		municipalityId: 2139
	},
	{
		id: 3073,
		name: 'PUERTO MADO',
		uta2020: '540420140060000',
		uta2010: '540420140060000',
		latitude: -26.231089912,
		longitude: -54.624714661,
		municipalityId: 2139
	},
	{
		id: 3074,
		name: 'MARIA MAGDALENA',
		uta2020: '540420140030000',
		uta2010: '540420140030000',
		latitude: -26.238092441,
		longitude: -54.601809612,
		municipalityId: 2139
	},
	{
		id: 3075,
		name: 'NUEVA DELICIA',
		uta2020: '540420140035000',
		uta2010: '540420140035000',
		latitude: -26.179139547,
		longitude: -54.583657282,
		municipalityId: 2139
	},
	{
		id: 3076,
		name: 'YACUTINGA',
		uta2020: '540420140000017',
		uta2010: '540420140000017',
		latitude: -26.25011367,
		longitude: -54.637283231,
		municipalityId: 2139
	},
	{
		id: 3077,
		name: 'LOS TRONCOS',
		uta2020: '141050000000087',
		uta2010: '141050000000087',
		latitude: -31.362777354,
		longitude: -63.791911554,
		municipalityId: 257
	},
	{
		id: 3078,
		name: 'LOS GUINDOS',
		uta2020: '141050000000082',
		uta2010: '141050000000082',
		latitude: -31.2584061,
		longitude: -63.5311157,
		municipalityId: 257
	},
	{
		id: 3079,
		name: 'EL ALCALDE',
		uta2020: '141050000070000',
		uta2010: '141050000070000',
		latitude: -31.116139683,
		longitude: -63.601741048,
		municipalityId: 257
	},
	{
		id: 3080,
		name: 'CAMPO RAMALLO',
		uta2020: '141050000000007',
		uta2010: '141050000000007',
		latitude: -30.70785859,
		longitude: -63.50062696,
		municipalityId: 257
	},
	{
		id: 3081,
		name: 'EL BAGUAL',
		uta2020: '141050000000026',
		uta2010: '141050000000026',
		latitude: -30.824916512,
		longitude: -63.04581222,
		municipalityId: 257
	},
	{
		id: 3082,
		name: 'POZO DE LA LOMA',
		uta2020: '141050000000096',
		uta2010: '141050000000096',
		latitude: -31.2866108,
		longitude: -63.3009832,
		municipalityId: 257
	},
	{
		id: 3083,
		name: 'PASO DEL SAUCE',
		uta2020: '141050000000093',
		uta2010: '141050000000093',
		latitude: -31.4280351,
		longitude: -63.7354801,
		municipalityId: 257
	},
	{
		id: 3084,
		name: 'LA COLORADA',
		uta2020: '141050000000051',
		uta2010: '141050000000051',
		latitude: -31.530755089,
		longitude: -63.843581988,
		municipalityId: 257
	},
	{
		id: 3085,
		name: 'BAJO HONDO',
		uta2020: '141050000000002',
		uta2010: '141050000000002',
		latitude: -30.805935463,
		longitude: -63.173242925,
		municipalityId: 257
	},
	{
		id: 3086,
		name: 'NUEVA ANDALUCIA',
		uta2020: '141050000000092',
		uta2010: '141050000000092',
		latitude: -31.201112934,
		longitude: -63.741842664,
		municipalityId: 257
	},
	{
		id: 3087,
		name: 'PUESTO DE AFUERA',
		uta2020: '141050000000101',
		uta2010: '141050000000101',
		latitude: -31.133736073,
		longitude: -63.51960055,
		municipalityId: 257
	},
	{
		id: 3088,
		name: 'CAPILLA DE DOLORES',
		uta2020: '141050000000010',
		uta2010: '141050000000010',
		latitude: -31.260108104,
		longitude: -63.781782874,
		municipalityId: 257
	},
	{
		id: 3089,
		name: 'MONTE DEL ROSARIO',
		uta2020: '141050000180000',
		uta2010: '141050000180000',
		latitude: -30.982602634,
		longitude: -63.601785042,
		municipalityId: 257
	},
	{
		id: 3090,
		name: 'BARRANCA COLORADA',
		uta2020: '141050000000004',
		uta2010: '141050000000004',
		latitude: -31.349768407,
		longitude: -63.724889194,
		municipalityId: 257
	},
	{
		id: 3091,
		name: 'COLONIA EL FORTIN',
		uta2020: '141050000000018',
		uta2010: '141050000000018',
		latitude: -31.1216187,
		longitude: -63.1790124,
		municipalityId: 257
	},
	{
		id: 3092,
		name: 'LAS ACACIAS',
		uta2020: '141050000000059',
		uta2010: '141050000000059',
		latitude: -31.209503221,
		longitude: -63.541207325,
		municipalityId: 257
	},
	{
		id: 3093,
		name: 'COLONIA SAN RAFAEL',
		uta2020: '141050000000021',
		uta2010: '141050000000021',
		latitude: -31.52735183,
		longitude: -63.797140027,
		municipalityId: 257
	},
	{
		id: 3094,
		name: 'LOS CASTAÑOS',
		uta2020: '141050000000078',
		uta2010: '141050000000078',
		latitude: -30.760171075,
		longitude: -63.097808369,
		municipalityId: 257
	},
	{
		id: 3095,
		name: 'EL QUEBRACHO',
		uta2020: '141050000000032',
		uta2010: '141050000000032',
		latitude: -31.4775763,
		longitude: -63.7339018,
		municipalityId: 257
	},
	{
		id: 3096,
		name: 'LAS AVERIAS',
		uta2020: '141050000000060',
		uta2010: '141050000000060',
		latitude: -31.0821565,
		longitude: -63.0696323,
		municipalityId: 257
	},
	{
		id: 3097,
		name: 'BUEY MUERTO',
		uta2020: '141050000000006',
		uta2010: '141050000000006',
		latitude: -31.2360082,
		longitude: -63.3331474,
		municipalityId: 257
	},
	{
		id: 3098,
		name: 'LA VUELTA',
		uta2020: '141050000000057',
		uta2010: '141050000000057',
		latitude: -31.1049318,
		longitude: -63.3143208,
		municipalityId: 257
	},
	{
		id: 3099,
		name: 'SANTA ISABEL',
		uta2020: '141050000000113',
		uta2010: '141050000000113',
		latitude: -30.751977759,
		longitude: -63.302740145,
		municipalityId: 257
	},
	{
		id: 3100,
		name: 'CHACRAS NORTE',
		uta2020: '141050000000014',
		uta2010: '141050000000014',
		latitude: -31.404284318,
		longitude: -63.690501356,
		municipalityId: 257
	},
	{
		id: 3101,
		name: 'PUESTO PUCHETA',
		uta2020: '141050000000104',
		uta2010: '141050000000104',
		latitude: -30.694156688,
		longitude: -63.384349124,
		municipalityId: 257
	},
	{
		id: 3102,
		name: 'LAS HERAS',
		uta2020: '141050000000066',
		uta2010: '141050000000066',
		latitude: -31.54567759,
		longitude: -63.894247413,
		municipalityId: 257
	},
	{
		id: 3103,
		name: 'ISLA LARGA',
		uta2020: '141050000000043',
		uta2010: '141050000000043',
		latitude: -30.95720699,
		longitude: -63.70688436,
		municipalityId: 257
	},
	{
		id: 3104,
		name: 'CHACRAS SUR',
		uta2020: '141050000000015',
		uta2010: '141050000000015',
		latitude: -31.46230126,
		longitude: -63.683049737,
		municipalityId: 257
	},
	{
		id: 3105,
		name: 'COLONIA LA ARGENTINA',
		uta2020: '141050000000020',
		uta2010: '141050000000020',
		latitude: -30.9849697,
		longitude: -63.0162294,
		municipalityId: 257
	},
	{
		id: 3106,
		name: 'ESPERANZA',
		uta2020: '141050000000037',
		uta2010: '141050000000037',
		latitude: -31.127124786,
		longitude: -63.709300995,
		municipalityId: 257
	},
	{
		id: 3107,
		name: 'EL CARRIZAL',
		uta2020: '141050000000027',
		uta2010: '141050000000027',
		latitude: -31.0322447,
		longitude: -63.4894341,
		municipalityId: 257
	},
	{
		id: 3108,
		name: 'LOS ALVAREZ',
		uta2020: '141050000000075',
		uta2010: '141050000000075',
		latitude: -31.2156658,
		longitude: -63.4829121,
		municipalityId: 257
	},
	{
		id: 3109,
		name: 'LAS BANDURRIAS',
		uta2020: '141050000000061',
		uta2010: '141050000000061',
		latitude: -30.809282406,
		longitude: -63.696977014,
		municipalityId: 257
	},
	{
		id: 3110,
		name: 'LAS PALMITAS',
		uta2020: '141050000000069',
		uta2010: '141050000000069',
		latitude: -30.837057921,
		longitude: -63.512881622,
		municipalityId: 257
	},
	{
		id: 3111,
		name: 'POZO DE LA ESQUINA',
		uta2020: '141050000000095',
		uta2010: '141050000000095',
		latitude: -31.080030985,
		longitude: -63.467599247,
		municipalityId: 257
	},
	{
		id: 3112,
		name: 'EL MANANTIAL SUR',
		uta2020: '141050000000031',
		uta2010: '141050000000031',
		latitude: -31.1721939,
		longitude: -63.1851505,
		municipalityId: 257
	},
	{
		id: 3113,
		name: 'BOCA DEL RIO',
		uta2020: '141050000000005',
		uta2010: '141050000000005',
		latitude: -30.988018028,
		longitude: -62.930963969,
		municipalityId: 257
	},
	{
		id: 3114,
		name: 'ISLA VERDE',
		uta2020: '141050000000044',
		uta2010: '141050000000044',
		latitude: -30.663394928,
		longitude: -63.323413849,
		municipalityId: 257
	},
	{
		id: 3115,
		name: 'NACION RANQUEL',
		uta2020: '740350073055000',
		uta2010: '740350073055000',
		latitude: -34.608619,
		longitude: -65.734852998,
		municipalityId: 1082
	},
	{
		id: 3116,
		name: 'SAN CRISTOBAL',
		uta2020: '020030001010002',
		uta2010: '020030001010002',
		latitude: -34.623864473,
		longitude: -58.401885798,
		municipalityId: 2445
	},
	{
		id: 3117,
		name: 'BALVANERA',
		uta2020: '020030001010001',
		uta2010: '020030001010001',
		latitude: -34.609099774,
		longitude: -58.40306252,
		municipalityId: 2445
	},
	{
		id: 3118,
		name: 'CAMPO LA MALAGUEÑA',
		uta2020: '820282497000003',
		uta2010: '820282497000003',
		latitude: -33.34215,
		longitude: -60.8606515,
		municipalityId: 724
	},
	{
		id: 3119,
		name: 'PAVON ARRIBA',
		uta2020: '820282497160000',
		uta2010: '820282497160000',
		latitude: -33.313417393,
		longitude: -60.824975894,
		municipalityId: 724
	},
	{
		id: 3120,
		name: 'CABO RASO',
		uta2020: '260280000000001',
		uta2010: '260280000000001',
		latitude: -44.338169098,
		longitude: -65.236175537,
		municipalityId: 568
	},
	{
		id: 3121,
		name: 'MALASPINA',
		uta2020: '260280000000008',
		uta2010: '260280000000008',
		latitude: -44.927397699,
		longitude: -66.921383673,
		municipalityId: 568
	},
	{
		id: 3122,
		name: 'GARAYALDE',
		uta2020: '260280000020000',
		uta2010: '260280000020000',
		latitude: -44.679578373,
		longitude: -66.609736455,
		municipalityId: 568
	},
	{
		id: 3123,
		name: 'INRIVILLE',
		uta2020: '140630553140000',
		uta2010: '140630553140000',
		latitude: -32.943840524,
		longitude: -62.230548752,
		municipalityId: 188
	},
	{
		id: 3124,
		name: 'DISTRITO COSTA DE NOGOYA',
		uta2020: '300499290000017',
		uta2010: '300499290000017',
		latitude: -32.819087944,
		longitude: -59.789226787,
		municipalityId: 1570
	},
	{
		id: 3125,
		name: 'PUERTA DE CRESPO',
		uta2020: '300499290000037',
		uta2010: '300499290000037',
		latitude: -32.825308117,
		longitude: -59.74290277,
		municipalityId: 1570
	},
	{
		id: 3126,
		name: 'EL TIO',
		uta2020: '141401246200000',
		uta2010: '141401246200000',
		latitude: -31.384548622,
		longitude: -62.828473765,
		municipalityId: 401
	},
	{
		id: 3127,
		name: 'LOS CISNES',
		uta2020: '140560441110000',
		uta2010: '140560441110000',
		latitude: -33.400060095,
		longitude: -63.471651556,
		municipalityId: 369
	},
	{
		id: 3128,
		name: 'CAMPO AGÑERO',
		uta2020: '141611505000002',
		uta2010: '141611505000002',
		latitude: -32.206674038,
		longitude: -63.810597435,
		municipalityId: 351
	},
	{
		id: 3129,
		name: 'VILLA ASCASUBI',
		uta2020: '141611505170000',
		uta2010: '141611505170000',
		latitude: -32.164358303,
		longitude: -63.892558867,
		municipalityId: 351
	},
	{
		id: 3130,
		name: 'CAMPO CAFFARATTI',
		uta2020: '141611505000008',
		uta2010: '141611505000008',
		latitude: -32.113908603,
		longitude: -63.794082866,
		municipalityId: 351
	},
	{
		id: 3131,
		name: 'CAMPO PICATTO',
		uta2020: '141611505000024',
		uta2010: '141611505000024',
		latitude: -32.184390985,
		longitude: -63.826120813,
		municipalityId: 351
	},
	{
		id: 3132,
		name: 'CAZADOR VIEJO',
		uta2020: '740566280000019',
		uta2010: '740566280000019',
		latitude: -33.773693085,
		longitude: -66.373092651,
		municipalityId: 1132
	},
	{
		id: 3133,
		name: 'CAZADOR',
		uta2020: '740566280050000',
		uta2010: '740566280050000',
		latitude: -33.857658477,
		longitude: -66.369615067,
		municipalityId: 1132
	},
	{
		id: 3134,
		name: 'ZANJITAS',
		uta2020: '740566280160000',
		uta2010: '740566280160000',
		latitude: -33.802274684,
		longitude: -66.415462549,
		municipalityId: 1132
	},
	{
		id: 3135,
		name: 'LA COSTA',
		uta2020: '740566280000058',
		uta2010: '740566280000058',
		latitude: -33.776218414,
		longitude: -66.48789978,
		municipalityId: 1132
	},
	{
		id: 3136,
		name: 'SANTA ROSA DE RIO PRIMERO',
		uta2020: '141050945260000',
		uta2010: '141050945260000',
		latitude: -31.151477207,
		longitude: -63.401591256,
		municipalityId: 258
	},
	{
		id: 3137,
		name: 'PUERTO DESEADO',
		uta2020: '780140042080000',
		uta2010: '780140042080000',
		latitude: -47.751464928,
		longitude: -65.901204368,
		municipalityId: 1521
	},
	{
		id: 3138,
		name: 'BARRIO GORETTI',
		uta2020: '620420133330002',
		uta2010: '620420133330002',
		latitude: -38.965598021,
		longitude: -67.950955022,
		municipalityId: 1265
	},
	{
		id: 3139,
		name: 'BARRIO LA LOR',
		uta2020: '620420133400001',
		uta2010: '620420133400001',
		latitude: -38.924584899,
		longitude: -68.030789944,
		municipalityId: 1265
	},
	{
		id: 3140,
		name: 'BARRIO TRES LUCES',
		uta2020: '620420133330005',
		uta2010: '620420133330005',
		latitude: -38.93867948,
		longitude: -67.944003356,
		municipalityId: 1265
	},
	{
		id: 3141,
		name: 'RENTERIA',
		uta2020: '620350133000047',
		uta2010: '620350133000047',
		latitude: -39.339855194,
		longitude: -68.448684692,
		municipalityId: 1265
	},
	{
		id: 3142,
		name: 'CUATRO ESQUINAS',
		uta2020: '620420133000014',
		uta2010: '620420133000014',
		latitude: -38.906525431,
		longitude: -68.023408646,
		municipalityId: 1265
	},
	{
		id: 3143,
		name: 'COLONIA CURRI LAMUEN',
		uta2020: '620420133000009',
		uta2010: '620420133000009',
		latitude: -38.91665616,
		longitude: -67.96150558,
		municipalityId: 1265
	},
	{
		id: 3144,
		name: 'FERRI',
		uta2020: '620420133420000',
		uta2010: '620420133420000',
		latitude: -38.887175465,
		longitude: -68.006843399,
		municipalityId: 1265
	},
	{
		id: 3145,
		name: 'BARRIO PUENTE DE MADERA',
		uta2020: '620420133330004',
		uta2010: '620420133330004',
		latitude: -38.958964694,
		longitude: -67.949241434,
		municipalityId: 1265
	},
	{
		id: 3146,
		name: 'LA FALDA',
		uta2020: '620420133000024',
		uta2010: '620420133000024',
		latitude: -38.93937347,
		longitude: -67.94911151,
		municipalityId: 1265
	},
	{
		id: 3147,
		name: 'LAS PERLAS',
		uta2020: '620350133040000',
		uta2010: '620350133040000',
		latitude: -38.984069069,
		longitude: -68.140350182,
		municipalityId: 1265
	},
	{
		id: 3148,
		name: 'BARRIO MARIA ELVIRA',
		uta2020: '620420133260000',
		uta2010: '620420133260000',
		latitude: -38.990144263,
		longitude: -67.96130956,
		municipalityId: 1265
	},
	{
		id: 3149,
		name: 'COLONIA CONFLUENCIA',
		uta2020: '620420133000008',
		uta2010: '620420133000008',
		latitude: -38.968524528,
		longitude: -67.991078618,
		municipalityId: 1265
	},
	{
		id: 3150,
		name: 'BARRIO EL TREINTA',
		uta2020: '620420133330001',
		uta2010: '620420133330001',
		latitude: -38.893711936,
		longitude: -67.971068167,
		municipalityId: 1265
	},
	{
		id: 3151,
		name: 'BARRIO NORTE',
		uta2020: '620420133280000',
		uta2010: '620420133280000',
		latitude: -38.863727926,
		longitude: -68.02319056,
		municipalityId: 1265
	},
	{
		id: 3152,
		name: 'TRES LUCES',
		uta2020: '620420133330006',
		uta2010: '620420133330006',
		latitude: -38.965598021,
		longitude: -67.950955022,
		municipalityId: 1265
	},
	{
		id: 3153,
		name: 'BARRIO PUENTE 83',
		uta2020: '620420133330003',
		uta2010: '620420133330003',
		latitude: -38.965598021,
		longitude: -67.950955022,
		municipalityId: 1265
	},
	{
		id: 3154,
		name: 'CIPOLLETTI',
		uta2020: '620420133400002',
		uta2010: '620420133400002',
		latitude: -38.922059628,
		longitude: -67.995549331,
		municipalityId: 1265
	},
	{
		id: 3155,
		name: 'CAMPO BERNARDI',
		uta2020: '821330336000003',
		uta2010: '821330336000003',
		latitude: -29.299720277,
		longitude: -60.890712297,
		municipalityId: 1000
	},
	{
		id: 3156,
		name: 'LOTE 184',
		uta2020: '821330336000089',
		uta2010: '821330336000089',
		latitude: -29.4255356,
		longitude: -60.3848701,
		municipalityId: 1000
	},
	{
		id: 3157,
		name: 'SANTA FELICIA',
		uta2020: '821330336000099',
		uta2010: '821330336000099',
		latitude: -29.362496183,
		longitude: -60.245055236,
		municipalityId: 1000
	},
	{
		id: 3158,
		name: 'PUEBLO SANTA LUCIA',
		uta2020: '821330336140000',
		uta2010: '821330336140000',
		latitude: -29.283815806,
		longitude: -60.403856405,
		municipalityId: 1000
	},
	{
		id: 3159,
		name: 'KILOMETRO 38',
		uta2020: '821330336000063',
		uta2010: '821330336000063',
		latitude: -29.4495739,
		longitude: -60.5184216,
		municipalityId: 1000
	},
	{
		id: 3160,
		name: 'CARAGUATAY',
		uta2020: '821330336000017',
		uta2010: '821330336000017',
		latitude: -29.4108033,
		longitude: -60.1304346,
		municipalityId: 1000
	},
	{
		id: 3161,
		name: 'ESPIN',
		uta2020: '821330336000039',
		uta2010: '821330336000039',
		latitude: -29.549089432,
		longitude: -60.22051239,
		municipalityId: 1000
	},
	{
		id: 3162,
		name: 'LOTE 21',
		uta2020: '821330336000090',
		uta2010: '821330336000090',
		latitude: -29.3238385,
		longitude: -60.5206386,
		municipalityId: 1000
	},
	{
		id: 3163,
		name: 'CAMPO ZAMO',
		uta2020: '821330336000016',
		uta2010: '821330336000016',
		latitude: -29.4231221,
		longitude: -60.1801044,
		municipalityId: 1000
	},
	{
		id: 3164,
		name: 'KILOMETRO 71',
		uta2020: '821330336000068',
		uta2010: '821330336000068',
		latitude: -29.23638062,
		longitude: -60.539839114,
		municipalityId: 1000
	},
	{
		id: 3165,
		name: 'VERA',
		uta2020: '821330336170000',
		uta2010: '821330336170000',
		latitude: -29.462920451,
		longitude: -60.213347784,
		municipalityId: 1000
	},
	{
		id: 3166,
		name: 'EL ÑANDUBAY',
		uta2020: '821330336000034',
		uta2010: '821330336000034',
		latitude: -29.6394127,
		longitude: -60.1410832,
		municipalityId: 1000
	},
	{
		id: 3167,
		name: 'TIERRAS BLANCAS',
		uta2020: '580770161000058',
		uta2010: '580770161000058',
		latitude: -37.1908156,
		longitude: -70.74561356,
		municipalityId: 2361
	},
	{
		id: 3168,
		name: 'LILEO',
		uta2020: '580770161000036',
		uta2010: '580770161000036',
		latitude: -37.22380752,
		longitude: -70.77010087,
		municipalityId: 2361
	},
	{
		id: 3169,
		name: 'LOS MICHES',
		uta2020: '580770161040000',
		uta2010: '580770161040000',
		latitude: -37.207927288,
		longitude: -70.82086086,
		municipalityId: 2361
	},
	{
		id: 3170,
		name: 'INTENDENTE ALVEAR',
		uta2020: '420560175040000',
		uta2010: '420560175040000',
		latitude: -35.236869337,
		longitude: -63.592327452,
		municipalityId: 1961
	},
	{
		id: 3171,
		name: 'TILCARA',
		uta2020: '380940329050000',
		uta2010: '380940329050000',
		latitude: -23.570352014,
		longitude: -65.394079344,
		municipalityId: 1164
	},
	{
		id: 3172,
		name: 'LOMA LARGA',
		uta2020: '380940329000042',
		uta2010: '380940329000042',
		latitude: -23.53812578,
		longitude: -65.16867565,
		municipalityId: 1164
	},
	{
		id: 3173,
		name: 'SAN ANTONIO',
		uta2020: '380940329000066',
		uta2010: '380940329000066',
		latitude: -23.716192246,
		longitude: -65.297035217,
		municipalityId: 1164
	},
	{
		id: 3174,
		name: 'ALFARCITO',
		uta2020: '380940329000004',
		uta2010: '380940329000004',
		latitude: -23.5871507,
		longitude: -65.36320738,
		municipalityId: 1164
	},
	{
		id: 3175,
		name: 'PUNTA CORRAL',
		uta2020: '380940329000060',
		uta2010: '380940329000060',
		latitude: -23.706871033,
		longitude: -65.382843018,
		municipalityId: 1164
	},
	{
		id: 3176,
		name: 'EL PERCHEL',
		uta2020: '380940329000030',
		uta2010: '380940329000030',
		latitude: -23.49314,
		longitude: -65.36696,
		municipalityId: 1164
	},
	{
		id: 3177,
		name: 'HUICHAIRA',
		uta2020: '380940329000036',
		uta2010: '380940329000036',
		latitude: -23.57679536,
		longitude: -65.43257601,
		municipalityId: 1164
	},
	{
		id: 3178,
		name: 'ABRA MAYO',
		uta2020: '380940329000002',
		uta2010: '380940329000002',
		latitude: -23.77525242,
		longitude: -65.29804781,
		municipalityId: 1164
	},
	{
		id: 3179,
		name: 'JUELLA',
		uta2020: '380940329030000',
		uta2010: '380940329030000',
		latitude: -23.502538717,
		longitude: -65.431896213,
		municipalityId: 1164
	},
	{
		id: 3180,
		name: 'DURAZNOS',
		uta2020: '380940329000026',
		uta2010: '380940329000026',
		latitude: -23.61365,
		longitude: -65.21369,
		municipalityId: 1164
	},
	{
		id: 3181,
		name: 'YAQUISPAMPA',
		uta2020: '380940329000077',
		uta2010: '380940329000077',
		latitude: -23.73653,
		longitude: -65.2517,
		municipalityId: 1164
	},
	{
		id: 3182,
		name: 'YALA DE MONTE CARMELO',
		uta2020: '380940329000076',
		uta2010: '380940329000076',
		latitude: -23.43643226,
		longitude: -65.18467502,
		municipalityId: 1164
	},
	{
		id: 3183,
		name: 'MOLULO',
		uta2020: '380940329000053',
		uta2010: '380940329000053',
		latitude: -23.56564,
		longitude: -65.15918,
		municipalityId: 1164
	},
	{
		id: 3184,
		name: 'LA BANDA',
		uta2020: '380940329000037',
		uta2010: '380940329000037',
		latitude: -23.53926,
		longitude: -65.38635,
		municipalityId: 1164
	},
	{
		id: 3185,
		name: 'SANTA ROSA',
		uta2020: '620845182000029',
		uta2010: '620845182000029',
		latitude: -40.253646851,
		longitude: -66.606781006,
		municipalityId: 1238
	},
	{
		id: 3186,
		name: 'NAHUEL NIYEU',
		uta2020: '620845182040000',
		uta2010: '620845182040000',
		latitude: -40.504198321,
		longitude: -66.565752997,
		municipalityId: 1238
	},
	{
		id: 3187,
		name: 'SALITRAL NEGRO',
		uta2020: '620845182000028',
		uta2010: '620845182000028',
		latitude: -40.144039154,
		longitude: -66.360771179,
		municipalityId: 1238
	},
	{
		id: 3188,
		name: 'PASTOREO',
		uta2020: '540980441000029',
		uta2010: '540980441000029',
		latitude: -27.31961712,
		longitude: -55.39536423,
		municipalityId: 2108
	},
	{
		id: 3189,
		name: 'GOBERNADOR ROCA',
		uta2020: '540980441050000',
		uta2010: '540980441050000',
		latitude: -27.191017093,
		longitude: -55.468280286,
		municipalityId: 2108
	},
	{
		id: 3190,
		name: 'ROCA CHICA',
		uta2020: '540980441100000',
		uta2010: '540980441100000',
		latitude: -27.214368713,
		longitude: -55.42027898,
		municipalityId: 2108
	},
	{
		id: 3191,
		name: 'PUJATO',
		uta2020: '821194009090000',
		uta2010: '821194009090000',
		latitude: -33.019573354,
		longitude: -61.043831649,
		municipalityId: 1068
	},
	{
		id: 3192,
		name: 'CAMPO RISSO',
		uta2020: '821194009000006',
		uta2010: '821194009000006',
		latitude: -32.977915028,
		longitude: -61.113149505,
		municipalityId: 1068
	},
	{
		id: 3193,
		name: 'ALMACEN AROSA',
		uta2020: '061680168000002',
		uta2010: '061680168000002',
		latitude: -36.103578,
		longitude: -57.814792,
		municipalityId: 612
	},
	{
		id: 3194,
		name: 'ABETHUR',
		uta2020: '061680168000001',
		uta2010: '061680168000001',
		latitude: -36.1352289,
		longitude: -57.7158097,
		municipalityId: 612
	},
	{
		id: 3195,
		name: 'LAS TORTUGAS',
		uta2020: '061680168000019',
		uta2010: '061680168000019',
		latitude: -36.2366782,
		longitude: -57.9809372,
		municipalityId: 612
	},
	{
		id: 3196,
		name: 'EL MANANTIAL',
		uta2020: '061680168000007',
		uta2010: '061680168000007',
		latitude: -35.839801731,
		longitude: -57.433920499,
		municipalityId: 612
	},
	{
		id: 3197,
		name: 'LOS ALTOS VERDES',
		uta2020: '061680168000020',
		uta2010: '061680168000020',
		latitude: -36.1108248,
		longitude: -57.9085944,
		municipalityId: 612
	},
	{
		id: 3198,
		name: 'LA REDUCCION',
		uta2020: '061680168000014',
		uta2010: '061680168000014',
		latitude: -35.8867172,
		longitude: -57.5669977,
		municipalityId: 612
	},
	{
		id: 3199,
		name: 'LA INDIA MUERTA',
		uta2020: '061680168000013',
		uta2010: '061680168000013',
		latitude: -36.0025291,
		longitude: -57.7240551,
		municipalityId: 612
	},
	{
		id: 3200,
		name: 'EL TRIANGULO',
		uta2020: '061680168000008',
		uta2010: '061680168000008',
		latitude: -35.9336919,
		longitude: -57.6872901,
		municipalityId: 612
	},
	{
		id: 3201,
		name: 'CENTRO GUERRERO',
		uta2020: '061680168020000',
		uta2010: '061680168020000',
		latitude: -36.057062194,
		longitude: -57.823542259,
		municipalityId: 612
	},
	{
		id: 3202,
		name: 'LA CALIFORNIA',
		uta2020: '061680168000009',
		uta2010: '061680168000009',
		latitude: -36.0861086,
		longitude: -57.7203645,
		municipalityId: 612
	},
	{
		id: 3203,
		name: 'EL CALLEJON',
		uta2020: '061680168000005',
		uta2010: '061680168000005',
		latitude: -35.855518343,
		longitude: -57.709472689,
		municipalityId: 612
	},
	{
		id: 3204,
		name: 'LA CORINA',
		uta2020: '061680168000010',
		uta2010: '061680168000010',
		latitude: -36.0624025,
		longitude: -57.8981788,
		municipalityId: 612
	},
	{
		id: 3205,
		name: 'CERRO DE LA GLORIA (CANAL 15)',
		uta2020: '061680168030000',
		uta2010: '061680168030000',
		latitude: -35.97605306,
		longitude: -57.448735445,
		municipalityId: 612
	},
	{
		id: 3206,
		name: 'EL ARAZA',
		uta2020: '061680168000004',
		uta2010: '061680168000004',
		latitude: -36.1486847,
		longitude: -57.8646413,
		municipalityId: 612
	},
	{
		id: 3207,
		name: 'LOS MOLLES',
		uta2020: '061680168000021',
		uta2010: '061680168000021',
		latitude: -36.0894825,
		longitude: -57.6114886,
		municipalityId: 612
	},
	{
		id: 3208,
		name: 'LA SALADA',
		uta2020: '061680168000016',
		uta2010: '061680168000016',
		latitude: -36.0155095,
		longitude: -57.6548984,
		municipalityId: 612
	},
	{
		id: 3209,
		name: 'CASTELLI',
		uta2020: '061680168010000',
		uta2010: '061680168010000',
		latitude: -36.091694119,
		longitude: -57.807180162,
		municipalityId: 612
	},
	{
		id: 3210,
		name: 'COMANDANTE LUIS PIEDRABUENA',
		uta2020: '780070007010000',
		uta2010: '780070007010000',
		latitude: -49.985990981,
		longitude: -68.913081692,
		municipalityId: 1542
	},
	{
		id: 3211,
		name: 'PARQUE CHACABUCO',
		uta2020: '020070001010002',
		uta2010: '020070001010002',
		latitude: -34.635939228,
		longitude: -58.437695602,
		municipalityId: 2446
	},
	{
		id: 3212,
		name: 'FLORES',
		uta2020: '020070001010001',
		uta2010: '020070001010001',
		latitude: -34.63680708,
		longitude: -58.458269851,
		municipalityId: 2446
	},
	{
		id: 3213,
		name: 'LONQUIMAY',
		uta2020: '420280217030000',
		uta2010: '420280217030000',
		latitude: -36.467626342,
		longitude: -63.623722345,
		municipalityId: 1969
	},
	{
		id: 3214,
		name: 'CAMPO LEONHARDT',
		uta2020: '820490112000013',
		uta2010: '820490112000013',
		latitude: -29.2344858,
		longitude: -59.6725019,
		municipalityId: 954
	},
	{
		id: 3215,
		name: 'RECONQUISTA',
		uta2020: '820490112180000',
		uta2010: '820490112180000',
		latitude: -29.145146839,
		longitude: -59.651073056,
		municipalityId: 954
	},
	{
		id: 3216,
		name: 'LA LOLA',
		uta2020: '820490112000084',
		uta2010: '820490112000084',
		latitude: -29.247220487,
		longitude: -59.691268028,
		municipalityId: 954
	},
	{
		id: 3217,
		name: 'PUERTO RECONQUISTA',
		uta2020: '820490112170000',
		uta2010: '820490112170000',
		latitude: -29.23498737,
		longitude: -59.580269179,
		municipalityId: 954
	},
	{
		id: 3218,
		name: 'OLIVA',
		uta2020: '141611477110000',
		uta2010: '141611477110000',
		latitude: -32.041317402,
		longitude: -63.569382066,
		municipalityId: 352
	},
	{
		id: 3219,
		name: 'SPELUZZI',
		uta2020: '421055147040000',
		uta2010: '421055147040000',
		latitude: -35.547293622,
		longitude: -63.820040334,
		municipalityId: 1972
	},
	{
		id: 3220,
		name: 'ALDEA ANDREOLI',
		uta2020: '300779540000001',
		uta2010: '300779540000001',
		latitude: -32.172979005,
		longitude: -59.563413013,
		municipalityId: 1701
	},
	{
		id: 3221,
		name: 'ORDOÑEZ',
		uta2020: '141821701200000',
		uta2010: '141821701200000',
		latitude: -32.841271533,
		longitude: -62.866054921,
		municipalityId: 95
	},
	{
		id: 3222,
		name: 'MOJON DE FIERRO',
		uta2020: '340149021050000',
		uta2010: '340149021050000',
		latitude: -26.034511972,
		longitude: -58.049930762,
		municipalityId: 2281
	},
	{
		id: 3223,
		name: 'EMPALME SAN CARLOS',
		uta2020: '820703064040000',
		uta2010: '820703064040000',
		latitude: -31.548778087,
		longitude: -60.812722336,
		municipalityId: 868
	},
	{
		id: 3224,
		name: 'LA AURORA',
		uta2020: '860356371080000',
		uta2010: '860356371080000',
		latitude: -27.519003369,
		longitude: -64.182073364,
		municipalityId: 1338
	},
	{
		id: 3225,
		name: 'SAN CAYETANO',
		uta2020: '067420742030000',
		uta2010: '067420742030000',
		latitude: -38.346970947,
		longitude: -59.606382606,
		municipalityId: 613
	},
	{
		id: 3226,
		name: 'OCHANDIO',
		uta2020: '067420742020000',
		uta2010: '067420742020000',
		latitude: -38.359824451,
		longitude: -59.793534935,
		municipalityId: 613
	},
	{
		id: 3227,
		name: 'LA GAMA',
		uta2020: '067420742000011',
		uta2010: '067420742000011',
		latitude: -38.127136231,
		longitude: -59.548686985,
		municipalityId: 613
	},
	{
		id: 3228,
		name: 'COLONIA RIVADAVIA',
		uta2020: '067420742000002',
		uta2010: '067420742000002',
		latitude: -38.674057696,
		longitude: -59.499359487,
		municipalityId: 613
	},
	{
		id: 3229,
		name: 'VAGNOLI',
		uta2020: '067420742000018',
		uta2010: '067420742000018',
		latitude: -38.160179,
		longitude: -59.4534746,
		municipalityId: 613
	},
	{
		id: 3230,
		name: 'EL PINO',
		uta2020: '067420742000008',
		uta2010: '067420742000008',
		latitude: -38.2211455,
		longitude: -59.6002078,
		municipalityId: 613
	},
	{
		id: 3231,
		name: 'EL CARRETERO',
		uta2020: '067420742000005',
		uta2010: '067420742000005',
		latitude: -38.4956044,
		longitude: -59.7899924,
		municipalityId: 613
	},
	{
		id: 3232,
		name: 'CRISTIANO MUERTO',
		uta2020: '067420742000004',
		uta2010: '067420742000004',
		latitude: -38.648355531,
		longitude: -59.607180271,
		municipalityId: 613
	},
	{
		id: 3233,
		name: 'EL INDIO',
		uta2020: '067420742000007',
		uta2010: '067420742000007',
		latitude: -38.1317487,
		longitude: -59.6457599,
		municipalityId: 613
	},
	{
		id: 3234,
		name: 'BALNEARIO SAN CAYETANO',
		uta2020: '067420742010000',
		uta2010: '067420742010000',
		latitude: -38.748181502,
		longitude: -59.42920459,
		municipalityId: 613
	},
	{
		id: 3235,
		name: 'DESVIO KM 407',
		uta2020: '820490119000039',
		uta2010: '820490119000039',
		latitude: -28.5214663,
		longitude: -59.3457614,
		municipalityId: 955
	},
	{
		id: 3236,
		name: 'LA ISLETA',
		uta2020: '820490119090000',
		uta2010: '820490119090000',
		latitude: -28.493935731,
		longitude: -59.295074567,
		municipalityId: 955
	},
	{
		id: 3237,
		name: 'VILLA ADELA',
		uta2020: '820490119000120',
		uta2010: '820490119000120',
		latitude: -28.488217785,
		longitude: -59.412676455,
		municipalityId: 955
	},
	{
		id: 3238,
		name: 'ESTACION KILOMETRO 403',
		uta2020: '820490119000053',
		uta2010: '820490119000053',
		latitude: -28.569165,
		longitude: -59.3923268,
		municipalityId: 955
	},
	{
		id: 3239,
		name: 'VILLA OCAMPO',
		uta2020: '820490119230000',
		uta2010: '820490119230000',
		latitude: -28.490450958,
		longitude: -59.358764128,
		municipalityId: 955
	},
	{
		id: 3240,
		name: 'CAMPO BELLO NORTE',
		uta2020: '820490119000003',
		uta2010: '820490119000003',
		latitude: -28.539290229,
		longitude: -59.31474905,
		municipalityId: 955
	},
	{
		id: 3241,
		name: 'CAMPO EL PIAVE',
		uta2020: '820490119000006',
		uta2010: '820490119000006',
		latitude: -28.420974912,
		longitude: -59.460557024,
		municipalityId: 955
	},
	{
		id: 3242,
		name: 'CAMPO YACCUZZI',
		uta2020: '820490119000029',
		uta2010: '820490119000029',
		latitude: -28.541506,
		longitude: -59.4226625,
		municipalityId: 955
	},
	{
		id: 3243,
		name: 'CAMPO BELLO SUR',
		uta2020: '820490119000004',
		uta2010: '820490119000004',
		latitude: -28.573132809,
		longitude: -59.32562923,
		municipalityId: 955
	},
	{
		id: 3244,
		name: 'CAMPO PICCOLI',
		uta2020: '820490119000018',
		uta2010: '820490119000018',
		latitude: -28.467066367,
		longitude: -59.454881909,
		municipalityId: 955
	},
	{
		id: 3245,
		name: 'SAN VICENTE',
		uta2020: '820490119000114',
		uta2010: '820490119000114',
		latitude: -28.539920807,
		longitude: -59.257396698,
		municipalityId: 955
	},
	{
		id: 3246,
		name: 'CAMPO FANTIN',
		uta2020: '820490119000007',
		uta2010: '820490119000007',
		latitude: -28.446198379,
		longitude: -59.35835496,
		municipalityId: 955
	},
	{
		id: 3247,
		name: 'SAN JOSE DE LA COCHA',
		uta2020: '900498259020000',
		uta2010: '900498259020000',
		latitude: -27.731596701,
		longitude: -65.582759521,
		municipalityId: 2263
	},
	{
		id: 3248,
		name: 'GENERAL SAN MARTIN',
		uta2020: '420770154030000',
		uta2010: '420770154030000',
		latitude: -37.978530134,
		longitude: -63.606585453,
		municipalityId: 1966
	},
	{
		id: 3249,
		name: 'OLEGARIO V. ANDRADE',
		uta2020: '540700287080000',
		uta2010: '540700287080000',
		latitude: -27.565822036,
		longitude: -55.501725428,
		municipalityId: 2142
	},
	{
		id: 3250,
		name: 'COLONIA ALEMANA',
		uta2020: '540700287000007',
		uta2010: '540700287000007',
		latitude: -27.551394441,
		longitude: -55.540137661,
		municipalityId: 2142
	},
	{
		id: 3251,
		name: 'PICADA GALITZIANA',
		uta2020: '540700287000020',
		uta2010: '540700287000020',
		latitude: -27.554632544,
		longitude: -55.459544457,
		municipalityId: 2142
	},
	{
		id: 3252,
		name: 'VALERIA DEL MAR',
		uta2020: '066440644010004',
		uta2010: '066440644010004',
		latitude: -37.144555777,
		longitude: -56.890291999,
		municipalityId: 614
	},
	{
		id: 3253,
		name: 'CARILO',
		uta2020: '066440644010001',
		uta2010: '066440644010001',
		latitude: -37.164159375,
		longitude: -56.902791438,
		municipalityId: 614
	},
	{
		id: 3254,
		name: 'OSTENDE',
		uta2020: '066440644010002',
		uta2010: '066440644010002',
		latitude: -37.130047758,
		longitude: -56.88339847,
		municipalityId: 614
	},
	{
		id: 3255,
		name: 'PINAMAR',
		uta2020: '066440644010003',
		uta2010: '066440644010003',
		latitude: -37.077744886,
		longitude: -56.843722744,
		municipalityId: 614
	},
	{
		id: 3256,
		name: 'MANCHALA',
		uta2020: '900568336000180',
		uta2010: '900568336000180',
		latitude: -27.13626,
		longitude: -65.39506,
		municipalityId: 2220
	},
	{
		id: 3257,
		name: 'SAN JOSE DE BUENA VISTA',
		uta2020: '900568336000227',
		uta2010: '900568336000227',
		latitude: -27.1082371,
		longitude: -65.3867174,
		municipalityId: 2220
	},
	{
		id: 3258,
		name: 'ENTRE RIOS',
		uta2020: '900568336000063',
		uta2010: '900568336000063',
		latitude: -27.14276,
		longitude: -65.3378,
		municipalityId: 2220
	},
	{
		id: 3259,
		name: 'RIO COLORADO',
		uta2020: '900568336060000',
		uta2010: '900568336060000',
		latitude: -27.149680022,
		longitude: -65.356051358,
		municipalityId: 2220
	},
	{
		id: 3260,
		name: 'MIÑONES',
		uta2020: '300280000000056',
		uta2010: '300280000000056',
		latitude: -30.681299295,
		longitude: -58.562311359,
		municipalityId: 1555
	},
	{
		id: 3261,
		name: 'CUATRO BOCAS',
		uta2020: '300280000000029',
		uta2010: '300280000000029',
		latitude: -30.36553108,
		longitude: -58.279522382,
		municipalityId: 1555
	},
	{
		id: 3262,
		name: 'COLONIA BELGRANO',
		uta2020: '300280000000008',
		uta2010: '300280000000008',
		latitude: -30.81670312,
		longitude: -58.02462074,
		municipalityId: 1555
	},
	{
		id: 3263,
		name: 'SAN CARLOS NORTE',
		uta2020: '820703204240000',
		uta2010: '820703204240000',
		latitude: -31.674310577,
		longitude: -61.07625852,
		municipalityId: 869
	},
	{
		id: 3264,
		name: 'COLONIA SAN MARTIN',
		uta2020: '180630112000018',
		uta2010: '180630112000018',
		latitude: -27.735075436,
		longitude: -57.605227557,
		municipalityId: 2058
	},
	{
		id: 3265,
		name: 'AYALA CUE',
		uta2020: '180630112000006',
		uta2010: '180630112000006',
		latitude: -27.659622192,
		longitude: -57.739120492,
		municipalityId: 2058
	},
	{
		id: 3266,
		name: 'LA FLECHA',
		uta2020: '180630112000037',
		uta2010: '180630112000037',
		latitude: -27.693532944,
		longitude: -57.926933295,
		municipalityId: 2058
	},
	{
		id: 3267,
		name: 'LOMA ALTA',
		uta2020: '180630112000042',
		uta2010: '180630112000042',
		latitude: -27.75895594,
		longitude: -57.826976894,
		municipalityId: 2058
	},
	{
		id: 3268,
		name: 'VILLA SAN RAMON',
		uta2020: '180630112000082',
		uta2010: '180630112000082',
		latitude: -27.71029055,
		longitude: -57.559110664,
		municipalityId: 2058
	},
	{
		id: 3269,
		name: 'ALGARROBAL',
		uta2020: '180630112000002',
		uta2010: '180630112000002',
		latitude: -27.705562904,
		longitude: -57.794965844,
		municipalityId: 2058
	},
	{
		id: 3270,
		name: 'CAPILLITA',
		uta2020: '180630112000011',
		uta2010: '180630112000011',
		latitude: -27.760778923,
		longitude: -57.64661012,
		municipalityId: 2058
	},
	{
		id: 3271,
		name: 'CERRITO',
		uta2020: '180630112000012',
		uta2010: '180630112000012',
		latitude: -27.842032576,
		longitude: -57.91289789,
		municipalityId: 2058
	},
	{
		id: 3272,
		name: 'LOMA VILLANUEVA',
		uta2020: '180630112000043',
		uta2010: '180630112000043',
		latitude: -27.683956146,
		longitude: -57.835384369,
		municipalityId: 2058
	},
	{
		id: 3273,
		name: 'TIMBO CORA',
		uta2020: '180630112000077',
		uta2010: '180630112000077',
		latitude: -27.543826303,
		longitude: -57.742372679,
		municipalityId: 2058
	},
	{
		id: 3274,
		name: 'TALATY',
		uta2020: '180630112000075',
		uta2010: '180630112000075',
		latitude: -27.843961159,
		longitude: -57.759937109,
		municipalityId: 2058
	},
	{
		id: 3275,
		name: 'VILLANUEVA',
		uta2020: '180630112000083',
		uta2010: '180630112000083',
		latitude: -27.689413339,
		longitude: -57.832417485,
		municipalityId: 2058
	},
	{
		id: 3276,
		name: 'PASO FLORENTIN',
		uta2020: '180630112000059',
		uta2010: '180630112000059',
		latitude: -27.742102901,
		longitude: -57.7727097,
		municipalityId: 2058
	},
	{
		id: 3277,
		name: 'EL ZAPALLO',
		uta2020: '180630112000025',
		uta2010: '180630112000025',
		latitude: -27.821055472,
		longitude: -57.875313214,
		municipalityId: 2058
	},
	{
		id: 3278,
		name: 'NUESTRA SEÑORA DEL ROSARIO DE CAA CATI',
		uta2020: '180630112030000',
		uta2010: '180630112030000',
		latitude: -27.751995828,
		longitude: -57.622513624,
		municipalityId: 2058
	},
	{
		id: 3279,
		name: 'TRES LAGUNAS',
		uta2020: '340425063060000',
		uta2010: '340425063060000',
		latitude: -25.215364437,
		longitude: -58.513269491,
		municipalityId: 2327
	},
	{
		id: 3280,
		name: 'AGUA DE CASTILLA',
		uta2020: '661050245000005',
		uta2010: '661050245000005',
		latitude: -24.26374054,
		longitude: -66.386131287,
		municipalityId: 1861
	},
	{
		id: 3281,
		name: 'SALAR DE POCITOS',
		uta2020: '661050245000087',
		uta2010: '661050245000087',
		latitude: -24.37168,
		longitude: -66.99264,
		municipalityId: 1861
	},
	{
		id: 3282,
		name: 'ACAZOQUE',
		uta2020: '661050245000003',
		uta2010: '661050245000003',
		latitude: -24.27158165,
		longitude: -66.351371765,
		municipalityId: 1861
	},
	{
		id: 3283,
		name: 'CHORRILLOS',
		uta2020: '661050245000018',
		uta2010: '661050245000018',
		latitude: -24.245656967,
		longitude: -66.399597168,
		municipalityId: 1861
	},
	{
		id: 3284,
		name: 'EL RINCON',
		uta2020: '661050245000029',
		uta2010: '661050245000029',
		latitude: -24.015655518,
		longitude: -67.227813721,
		municipalityId: 1861
	},
	{
		id: 3285,
		name: 'TOLAR CHICO',
		uta2020: '661050245000096',
		uta2010: '661050245000096',
		latitude: -24.980852127,
		longitude: -66.996284485,
		municipalityId: 1861
	},
	{
		id: 3286,
		name: 'TORON',
		uta2020: '661050245000097',
		uta2010: '661050245000097',
		latitude: -24.949047089,
		longitude: -66.826477051,
		municipalityId: 1861
	},
	{
		id: 3287,
		name: 'SAN ANTONIO DE LOS COBRES',
		uta2020: '661050245020000',
		uta2010: '661050245020000',
		latitude: -24.209931003,
		longitude: -66.315435998,
		municipalityId: 1861
	},
	{
		id: 3288,
		name: 'OLACAPATO',
		uta2020: '661050245010000',
		uta2010: '661050245010000',
		latitude: -24.119774552,
		longitude: -66.7142594,
		municipalityId: 1861
	},
	{
		id: 3289,
		name: 'CARACHI',
		uta2020: '661050245000013',
		uta2010: '661050245000013',
		latitude: -24.346256256,
		longitude: -66.350898743,
		municipalityId: 1861
	},
	{
		id: 3290,
		name: 'CORRALITOS',
		uta2020: '661050245000025',
		uta2010: '661050245000025',
		latitude: -23.957038879,
		longitude: -66.288970947,
		municipalityId: 1861
	},
	{
		id: 3291,
		name: 'CONDOR HUASI',
		uta2020: '661050245000023',
		uta2010: '661050245000023',
		latitude: -24.339694977,
		longitude: -66.221801758,
		municipalityId: 1861
	},
	{
		id: 3292,
		name: 'SANTA ROSA DE LOS PASTOS GRANDES',
		uta2020: '661050245030000',
		uta2010: '661050245030000',
		latitude: -24.478105777,
		longitude: -66.678540067,
		municipalityId: 1861
	},
	{
		id: 3293,
		name: 'SAN JERONIMO DEL SAUCE',
		uta2020: '820703218260000',
		uta2010: '820703218260000',
		latitude: -31.611212476,
		longitude: -61.142518072,
		municipalityId: 870
	},
	{
		id: 3294,
		name: 'CAMPO LA VIGILANCIA',
		uta2020: '820703218000007',
		uta2010: '820703218000007',
		latitude: -31.5944812,
		longitude: -61.2252482,
		municipalityId: 870
	},
	{
		id: 3295,
		name: 'PIEDRITAS',
		uta2020: '380636112130000',
		uta2010: '380636112130000',
		latitude: -24.293113172,
		longitude: -64.881220845,
		municipalityId: 1175
	},
	{
		id: 3296,
		name: 'BELLA VISTA',
		uta2020: '380636112000004',
		uta2010: '380636112000004',
		latitude: -24.341485977,
		longitude: -64.927932739,
		municipalityId: 1175
	},
	{
		id: 3297,
		name: 'DON EMILIO',
		uta2020: '380636112030000',
		uta2010: '380636112030000',
		latitude: -24.315469273,
		longitude: -64.906666343,
		municipalityId: 1175
	},
	{
		id: 3298,
		name: 'PALOS BLANCOS',
		uta2020: '380636112110000',
		uta2010: '380636112110000',
		latitude: -24.324980135,
		longitude: -64.948936752,
		municipalityId: 1175
	},
	{
		id: 3299,
		name: 'ROSARIO DE RIO GRANDE',
		uta2020: '380636112150000',
		uta2010: '380636112150000',
		latitude: -24.306909666,
		longitude: -64.931781335,
		municipalityId: 1175
	},
	{
		id: 3300,
		name: 'LAS TUNAS',
		uta2020: '068260826000028',
		uta2010: '068260826000028',
		latitude: -36.0130646,
		longitude: -62.6706257,
		municipalityId: 615
	},
	{
		id: 3301,
		name: 'BERUTTI',
		uta2020: '068260826010000',
		uta2010: '068260826010000',
		latitude: -35.858031136,
		longitude: -62.5126329,
		municipalityId: 615
	},
	{
		id: 3302,
		name: 'NUEVA CASTILLA',
		uta2020: '068260826000033',
		uta2010: '068260826000033',
		latitude: -36.056231,
		longitude: -63.0962164,
		municipalityId: 615
	},
	{
		id: 3303,
		name: 'FRANCISCO DE VITORIA',
		uta2020: '068260826000015',
		uta2010: '068260826000015',
		latitude: -35.6285718,
		longitude: -62.705543,
		municipalityId: 615
	},
	{
		id: 3304,
		name: 'TRENQUE LAUQUEN',
		uta2020: '068260826050000',
		uta2010: '068260826050000',
		latitude: -35.974695156,
		longitude: -62.732309966,
		municipalityId: 615
	},
	{
		id: 3305,
		name: 'EL CORRENTINO',
		uta2020: '068260826000009',
		uta2010: '068260826000009',
		latitude: -36.177871647,
		longitude: -62.335495075,
		municipalityId: 615
	},
	{
		id: 3306,
		name: 'COLONIA MARTIN FIERRO',
		uta2020: '068260826000004',
		uta2010: '068260826000004',
		latitude: -35.7564589,
		longitude: -62.8130143,
		municipalityId: 615
	},
	{
		id: 3307,
		name: 'GIRODIAS',
		uta2020: '068260826020000',
		uta2010: '068260826020000',
		latitude: -36.367451804,
		longitude: -62.356966094,
		municipalityId: 615
	},
	{
		id: 3308,
		name: 'LA MARIA',
		uta2020: '068260826000023',
		uta2010: '068260826000023',
		latitude: -36.1531444,
		longitude: -62.6874542,
		municipalityId: 615
	},
	{
		id: 3309,
		name: 'SAN EDUARDO',
		uta2020: '068260826000036',
		uta2010: '068260826000036',
		latitude: -36.218250693,
		longitude: -62.803765562,
		municipalityId: 615
	},
	{
		id: 3310,
		name: 'LAS GUASQUITAS',
		uta2020: '068260826000027',
		uta2010: '068260826000027',
		latitude: -36.147017,
		longitude: -62.5318149,
		municipalityId: 615
	},
	{
		id: 3311,
		name: 'ELVIRA',
		uta2020: '068260826000012',
		uta2010: '068260826000012',
		latitude: -36.255097,
		longitude: -62.6699067,
		municipalityId: 615
	},
	{
		id: 3312,
		name: 'FRANCISCO MAGNANO',
		uta2020: '068260826000016',
		uta2010: '068260826000016',
		latitude: -35.6558591,
		longitude: -62.4971861,
		municipalityId: 615
	},
	{
		id: 3313,
		name: 'PRIMERA JUNTA',
		uta2020: '068260826000034',
		uta2010: '068260826000034',
		latitude: -35.9158419,
		longitude: -62.6370481,
		municipalityId: 615
	},
	{
		id: 3314,
		name: 'MAYA',
		uta2020: '068260826000032',
		uta2010: '068260826000032',
		latitude: -35.727098,
		longitude: -62.4864713,
		municipalityId: 615
	},
	{
		id: 3315,
		name: 'MARI LAUQUEN',
		uta2020: '068260826000031',
		uta2010: '068260826000031',
		latitude: -36.1303803,
		longitude: -62.9769481,
		municipalityId: 615
	},
	{
		id: 3316,
		name: 'COLONIA MANUEL 1°',
		uta2020: '068260826000003',
		uta2010: '068260826000003',
		latitude: -36.4325837,
		longitude: -62.6817288,
		municipalityId: 615
	},
	{
		id: 3317,
		name: 'CORAZZI',
		uta2020: '068260826000007',
		uta2010: '068260826000007',
		latitude: -36.208641052,
		longitude: -62.40026474,
		municipalityId: 615
	},
	{
		id: 3318,
		name: 'SAN PEDRO',
		uta2020: '068260826000037',
		uta2010: '068260826000037',
		latitude: -36.399333,
		longitude: -62.5978776,
		municipalityId: 615
	},
	{
		id: 3319,
		name: 'LA ATALAYA',
		uta2020: '068260826000017',
		uta2010: '068260826000017',
		latitude: -35.9972982,
		longitude: -62.6048496,
		municipalityId: 615
	},
	{
		id: 3320,
		name: 'TRONGE',
		uta2020: '068260826060000',
		uta2010: '068260826060000',
		latitude: -36.46030924,
		longitude: -62.487122904,
		municipalityId: 615
	},
	{
		id: 3321,
		name: 'COLONIA EL MATE',
		uta2020: '068260826000002',
		uta2010: '068260826000002',
		latitude: -36.0383096,
		longitude: -62.8210281,
		municipalityId: 615
	},
	{
		id: 3322,
		name: 'LERTORA',
		uta2020: '068260826000029',
		uta2010: '068260826000029',
		latitude: -35.9207243,
		longitude: -62.9809752,
		municipalityId: 615
	},
	{
		id: 3323,
		name: 'DUHAU',
		uta2020: '068260826000008',
		uta2010: '068260826000008',
		latitude: -36.108634949,
		longitude: -62.27248764,
		municipalityId: 615
	},
	{
		id: 3324,
		name: 'LA ZANJA',
		uta2020: '068260826000025',
		uta2010: '068260826000025',
		latitude: -36.0521385,
		longitude: -62.8766738,
		municipalityId: 615
	},
	{
		id: 3325,
		name: 'LA CANDELARIA',
		uta2020: '068260826000018',
		uta2010: '068260826000018',
		latitude: -36.1213524,
		longitude: -62.2183031,
		municipalityId: 615
	},
	{
		id: 3326,
		name: 'SANTA CATALINA',
		uta2020: '068260826000039',
		uta2010: '068260826000039',
		latitude: -35.794006348,
		longitude: -62.596504211,
		municipalityId: 615
	},
	{
		id: 3327,
		name: 'LA CARRETA',
		uta2020: '068260826030000',
		uta2010: '068260826030000',
		latitude: -36.196481159,
		longitude: -62.22456414,
		municipalityId: 615
	},
	{
		id: 3328,
		name: '30 DE AGOSTO',
		uta2020: '068260826040000',
		uta2010: '068260826040000',
		latitude: -36.277972006,
		longitude: -62.545308865,
		municipalityId: 615
	},
	{
		id: 3329,
		name: 'COLONIA SANTA ANA',
		uta2020: '068260826000005',
		uta2010: '068260826000005',
		latitude: -36.3445703,
		longitude: -62.4794991,
		municipalityId: 615
	},
	{
		id: 3330,
		name: 'LOS CHAÑARES',
		uta2020: '068260826000030',
		uta2010: '068260826000030',
		latitude: -35.9094299,
		longitude: -62.5398718,
		municipalityId: 615
	},
	{
		id: 3331,
		name: 'VILLA CARLOS PAZ',
		uta2020: '140910742250000',
		uta2010: '140910742250000',
		latitude: -31.418238021,
		longitude: -64.493344806,
		municipalityId: 279
	},
	{
		id: 3332,
		name: 'SANTA CRUZ DEL LAGO',
		uta2020: '140910742000084',
		uta2010: '140910742000084',
		latitude: -31.411764347,
		longitude: -64.504345699,
		municipalityId: 279
	},
	{
		id: 3333,
		name: 'EL CAIN',
		uta2020: '620915224040000',
		uta2010: '620915224040000',
		latitude: -41.818287425,
		longitude: -68.077415238,
		municipalityId: 1229
	},
	{
		id: 3334,
		name: 'EL PORTEZUELO',
		uta2020: '101120238010000',
		uta2010: '101120238010000',
		latitude: -28.481868042,
		longitude: -65.635132665,
		municipalityId: 1910
	},
	{
		id: 3335,
		name: 'EL BAÑADO',
		uta2020: '101120238040001',
		uta2010: '101120238040001',
		latitude: -28.459435249,
		longitude: -65.711371721,
		municipalityId: 1910
	},
	{
		id: 3336,
		name: 'ANTAPOCA',
		uta2020: '101120238000002',
		uta2010: '101120238000002',
		latitude: -28.51384818,
		longitude: -65.761993398,
		municipalityId: 1910
	},
	{
		id: 3337,
		name: 'LOS ARBOLITOS',
		uta2020: '101120238000008',
		uta2010: '101120238000008',
		latitude: -28.664079666,
		longitude: -65.742591858,
		municipalityId: 1910
	},
	{
		id: 3338,
		name: 'SAN ISIDRO',
		uta2020: '101120238040004',
		uta2010: '101120238040004',
		latitude: -28.458310967,
		longitude: -65.726757674,
		municipalityId: 1910
	},
	{
		id: 3339,
		name: 'SANTA CRUZ',
		uta2020: '101120238050000',
		uta2010: '101120238050000',
		latitude: -28.492894655,
		longitude: -65.674446559,
		municipalityId: 1910
	},
	{
		id: 3340,
		name: 'SANTA ROSA',
		uta2020: '101120238040005',
		uta2010: '101120238040005',
		latitude: -28.447802287,
		longitude: -65.7055329,
		municipalityId: 1910
	},
	{
		id: 3341,
		name: 'AGUA COLORADA',
		uta2020: '101120238000001',
		uta2010: '101120238000001',
		latitude: -28.560608532,
		longitude: -65.780337085,
		municipalityId: 1910
	},
	{
		id: 3342,
		name: 'POZO DEL MISTOL',
		uta2020: '101120238040003',
		uta2010: '101120238040003',
		latitude: -28.468978986,
		longitude: -65.719504732,
		municipalityId: 1910
	},
	{
		id: 3343,
		name: 'LAS ESQUINAS',
		uta2020: '101120238000007',
		uta2010: '101120238000007',
		latitude: -28.71094,
		longitude: -65.76571,
		municipalityId: 1910
	},
	{
		id: 3344,
		name: 'VILLA DOLORES',
		uta2020: '101120238040007',
		uta2010: '101120238040007',
		latitude: -28.443473922,
		longitude: -65.721536064,
		municipalityId: 1910
	},
	{
		id: 3345,
		name: 'SUMALAO',
		uta2020: '101120238040006',
		uta2010: '101120238040006',
		latitude: -28.474645552,
		longitude: -65.743348003,
		municipalityId: 1910
	},
	{
		id: 3346,
		name: 'LAS TEJAS',
		uta2020: '101120238030000',
		uta2010: '101120238030000',
		latitude: -28.646888961,
		longitude: -65.78899355,
		municipalityId: 1910
	},
	{
		id: 3347,
		name: 'POLCOS',
		uta2020: '101120238040002',
		uta2010: '101120238040002',
		latitude: -28.433381588,
		longitude: -65.720297335,
		municipalityId: 1910
	},
	{
		id: 3348,
		name: 'HUAYCAMA',
		uta2020: '101120238020000',
		uta2010: '101120238020000',
		latitude: -28.533448358,
		longitude: -65.682127951,
		municipalityId: 1910
	},
	{
		id: 3349,
		name: 'LUAN TORO',
		uta2020: '420980224030000',
		uta2010: '420980224030000',
		latitude: -36.201681877,
		longitude: -65.09727824,
		municipalityId: 1976
	},
	{
		id: 3350,
		name: 'LAS TRES HERMANAS',
		uta2020: '780140000000108',
		uta2010: '780140000000108',
		latitude: -47.31357193,
		longitude: -67.243362427,
		municipalityId: 1522
	},
	{
		id: 3351,
		name: 'LOS MONOS',
		uta2020: '780140000000110',
		uta2010: '780140000000110',
		latitude: -46.034641266,
		longitude: -69.573005676,
		municipalityId: 1522
	},
	{
		id: 3352,
		name: 'ALMA GAUCHA',
		uta2020: '780140000000004',
		uta2010: '780140000000004',
		latitude: -47.887138367,
		longitude: -66.951148987,
		municipalityId: 1522
	},
	{
		id: 3353,
		name: 'TEHUELCHES',
		uta2020: '780140000000122',
		uta2010: '780140000000122',
		latitude: -46.928094336,
		longitude: -67.486947729,
		municipalityId: 1522
	},
	{
		id: 3354,
		name: 'TRES CERROS',
		uta2020: '780140000000123',
		uta2010: '780140000000123',
		latitude: -48.137939704,
		longitude: -67.696587104,
		municipalityId: 1522
	},
	{
		id: 3355,
		name: 'LA LOBERIA',
		uta2020: '780140000000099',
		uta2010: '780140000000099',
		latitude: -46.111031881,
		longitude: -67.630347895,
		municipalityId: 1522
	},
	{
		id: 3356,
		name: 'PAMPA ALTA',
		uta2020: '780140000000115',
		uta2010: '780140000000115',
		latitude: -47.574157715,
		longitude: -66.272506714,
		municipalityId: 1522
	},
	{
		id: 3357,
		name: 'BAHIA LAURA',
		uta2020: '780140000000008',
		uta2010: '780140000000008',
		latitude: -48.395423889,
		longitude: -66.478637695,
		municipalityId: 1522
	},
	{
		id: 3358,
		name: 'GOBERNADOR MOYANO',
		uta2020: '780140000000090',
		uta2010: '780140000000090',
		latitude: -47.778594971,
		longitude: -68.581222534,
		municipalityId: 1522
	},
	{
		id: 3359,
		name: 'MINERALES',
		uta2020: '780140000000113',
		uta2010: '780140000000113',
		latitude: -46.841369629,
		longitude: -67.733184815,
		municipalityId: 1522
	},
	{
		id: 3360,
		name: 'PIEDRA CLAVADA',
		uta2020: '780140000000119',
		uta2010: '780140000000119',
		latitude: -46.594806671,
		longitude: -68.506004334,
		municipalityId: 1522
	},
	{
		id: 3361,
		name: 'EL BRACHO',
		uta2020: '900148091070000',
		uta2010: '900148091070000',
		latitude: -26.992101919,
		longitude: -65.181245025,
		municipalityId: 2173
	},
	{
		id: 3362,
		name: 'EL CEVILAR',
		uta2020: '900148091000067',
		uta2010: '900148091000067',
		latitude: -26.99394,
		longitude: -65.15714,
		municipalityId: 2173
	},
	{
		id: 3363,
		name: 'EL DESIERTO',
		uta2020: '660560161000074',
		uta2010: '660560161000074',
		latitude: -22.606262207,
		longitude: -63.394313812,
		municipalityId: 1848
	},
	{
		id: 3364,
		name: 'EL SAUZAL',
		uta2020: '660560161000097',
		uta2010: '660560161000097',
		latitude: -22.46858,
		longitude: -63.3971,
		municipalityId: 1848
	},
	{
		id: 3365,
		name: 'TONONO',
		uta2020: '660560161000336',
		uta2010: '660560161000336',
		latitude: -22.47119752,
		longitude: -63.65398972,
		municipalityId: 1848
	},
	{
		id: 3366,
		name: 'BARRIO EL MILAGRO',
		uta2020: '660560161140001',
		uta2010: '660560161140001',
		latitude: -22.54132491,
		longitude: -63.792788876,
		municipalityId: 1848
	},
	{
		id: 3367,
		name: 'MISION CHERENTA',
		uta2020: '660560161000233',
		uta2010: '660560161000233',
		latitude: -22.514835628,
		longitude: -63.793617255,
		municipalityId: 1848
	},
	{
		id: 3368,
		name: 'YACUY',
		uta2020: '660560161250000',
		uta2010: '660560161250000',
		latitude: -22.376576987,
		longitude: -63.76543049,
		municipalityId: 1848
	},
	{
		id: 3369,
		name: 'YARIGUARENDA',
		uta2020: '660560161000355',
		uta2010: '660560161000355',
		latitude: -22.43424,
		longitude: -63.7839,
		municipalityId: 1848
	},
	{
		id: 3370,
		name: 'SAN RAMON',
		uta2020: '660560161000317',
		uta2010: '660560161000317',
		latitude: -22.676244736,
		longitude: -63.160762787,
		municipalityId: 1848
	},
	{
		id: 3371,
		name: 'TARTAGAL',
		uta2020: '660560161220000',
		uta2010: '660560161220000',
		latitude: -22.50986451,
		longitude: -63.7970473,
		municipalityId: 1848
	},
	{
		id: 3372,
		name: 'TRES POZOS',
		uta2020: '660560161000341',
		uta2010: '660560161000341',
		latitude: -22.520774841,
		longitude: -63.602748871,
		municipalityId: 1848
	},
	{
		id: 3373,
		name: 'PACARA',
		uta2020: '660560161170000',
		uta2010: '660560161170000',
		latitude: -22.445272343,
		longitude: -63.435432126,
		municipalityId: 1848
	},
	{
		id: 3374,
		name: 'MISION KILOMETRO 6',
		uta2020: '660560161150000',
		uta2010: '660560161150000',
		latitude: -22.506022828,
		longitude: -63.73997219,
		municipalityId: 1848
	},
	{
		id: 3375,
		name: 'BOBADAL',
		uta2020: '660560161000017',
		uta2010: '660560161000017',
		latitude: -22.51535,
		longitude: -63.35226,
		municipalityId: 1848
	},
	{
		id: 3376,
		name: 'EL ESCONDIDO',
		uta2020: '660560161000075',
		uta2010: '660560161000075',
		latitude: -22.702867508,
		longitude: -63.503341675,
		municipalityId: 1848
	},
	{
		id: 3377,
		name: 'MISION EL CRUCE',
		uta2020: '660560161140003',
		uta2010: '660560161140003',
		latitude: -22.54132491,
		longitude: -63.792788876,
		municipalityId: 1848
	},
	{
		id: 3378,
		name: 'ZANJA HONDA',
		uta2020: '660560161000358',
		uta2010: '660560161000358',
		latitude: -22.46962,
		longitude: -63.78992,
		municipalityId: 1848
	},
	{
		id: 3379,
		name: 'PALO BLANCO',
		uta2020: '660560161000247',
		uta2010: '660560161000247',
		latitude: -22.53770256,
		longitude: -63.71572876,
		municipalityId: 1848
	},
	{
		id: 3380,
		name: 'TRANQUITAS',
		uta2020: '660560161240000',
		uta2010: '660560161240000',
		latitude: -22.407617416,
		longitude: -63.768139939,
		municipalityId: 1848
	},
	{
		id: 3381,
		name: 'VILLA RIO HONDO',
		uta2020: '861476224150000',
		uta2010: '861476224150000',
		latitude: -27.634837303,
		longitude: -64.820279988,
		municipalityId: 1458
	},
	{
		id: 3382,
		name: 'DESPEÑADEROS',
		uta2020: '141471379080000',
		uta2010: '141471379080000',
		latitude: -31.817051593,
		longitude: -64.288989406,
		municipalityId: 227
	},
	{
		id: 3383,
		name: 'CORRAL QUEMADO',
		uta2020: '860560000000021',
		uta2010: '860560000000021',
		latitude: -25.9057,
		longitude: -63.70832,
		municipalityId: 1358
	},
	{
		id: 3384,
		name: 'RUMI POZO',
		uta2020: '860560000000108',
		uta2010: '860560000000108',
		latitude: -25.68992,
		longitude: -63.76965,
		municipalityId: 1358
	},
	{
		id: 3385,
		name: 'SANTA ROSA',
		uta2020: '860560000000122',
		uta2010: '860560000000122',
		latitude: -25.976,
		longitude: -63.61629,
		municipalityId: 1358
	},
	{
		id: 3386,
		name: 'URUTAU',
		uta2020: '860560000090000',
		uta2010: '860560000090000',
		latitude: -25.71237705,
		longitude: -63.04127532,
		municipalityId: 1358
	},
	{
		id: 3387,
		name: 'ESTADOS UNIDOS',
		uta2020: '860560000000044',
		uta2010: '860560000000044',
		latitude: -25.715909958,
		longitude: -62.648685455,
		municipalityId: 1358
	},
	{
		id: 3388,
		name: 'CABEZA DEL TORO',
		uta2020: '860560000000011',
		uta2010: '860560000000011',
		latitude: -26.16600037,
		longitude: -63.6322251,
		municipalityId: 1358
	},
	{
		id: 3389,
		name: 'EL CEIBAL',
		uta2020: '860560000000027',
		uta2010: '860560000000027',
		latitude: -26.10662573,
		longitude: -63.70514598,
		municipalityId: 1358
	},
	{
		id: 3390,
		name: 'VINAL POZO',
		uta2020: '860560000000134',
		uta2010: '860560000000134',
		latitude: -26.0976,
		longitude: -62.91018,
		municipalityId: 1358
	},
	{
		id: 3391,
		name: 'EL PUESTO',
		uta2020: '860560000000036',
		uta2010: '860560000000036',
		latitude: -26.03981,
		longitude: -63.61539,
		municipalityId: 1358
	},
	{
		id: 3392,
		name: 'RANCHILLOS',
		uta2020: '860560000000103',
		uta2010: '860560000000103',
		latitude: -25.77527485,
		longitude: -63.83715325,
		municipalityId: 1358
	},
	{
		id: 3393,
		name: 'MANGA BAJADA',
		uta2020: '860560000000083',
		uta2010: '860560000000083',
		latitude: -26.01243611,
		longitude: -63.69746145,
		municipalityId: 1358
	},
	{
		id: 3394,
		name: 'LAVALLE',
		uta2020: '860560000000073',
		uta2010: '860560000000073',
		latitude: -25.934764862,
		longitude: -62.710739136,
		municipalityId: 1358
	},
	{
		id: 3395,
		name: 'SAN BERNARDO',
		uta2020: '860560000000109',
		uta2010: '860560000000109',
		latitude: -25.992013386,
		longitude: -63.216344831,
		municipalityId: 1358
	},
	{
		id: 3396,
		name: 'LA ESPERANZA',
		uta2020: '860560000000060',
		uta2010: '860560000000060',
		latitude: -25.683895111,
		longitude: -62.794288635,
		municipalityId: 1358
	},
	{
		id: 3397,
		name: 'CONSUELO',
		uta2020: '860560000000020',
		uta2010: '860560000000020',
		latitude: -25.79441258,
		longitude: -63.55169706,
		municipalityId: 1358
	},
	{
		id: 3398,
		name: 'BELGRANO',
		uta2020: '860560000000008',
		uta2010: '860560000000008',
		latitude: -26.082195282,
		longitude: -63.385074616,
		municipalityId: 1358
	},
	{
		id: 3399,
		name: 'MAILIN',
		uta2020: '860560000000082',
		uta2010: '860560000000082',
		latitude: -26.029088468,
		longitude: -63.413930191,
		municipalityId: 1358
	},
	{
		id: 3400,
		name: 'EL MILAGRO',
		uta2020: '860560000000032',
		uta2010: '860560000000032',
		latitude: -25.706756592,
		longitude: -63.11240387,
		municipalityId: 1358
	},
	{
		id: 3401,
		name: 'LOTE 43',
		uta2020: '860560000000080',
		uta2010: '860560000000080',
		latitude: -26.16476991,
		longitude: -61.8153336,
		municipalityId: 1358
	},
	{
		id: 3402,
		name: 'GUAYACAN POZO',
		uta2020: '860560000000047',
		uta2010: '860560000000047',
		latitude: -25.91323,
		longitude: -63.32574,
		municipalityId: 1358
	},
	{
		id: 3403,
		name: 'SAN JAVIER',
		uta2020: '860560000000115',
		uta2010: '860560000000115',
		latitude: -25.742618113,
		longitude: -62.774958223,
		municipalityId: 1358
	},
	{
		id: 3404,
		name: 'LA VIRTUD',
		uta2020: '860560000000066',
		uta2010: '860560000000066',
		latitude: -26.12942,
		longitude: -63.40059,
		municipalityId: 1358
	},
	{
		id: 3405,
		name: 'LA CANDELARIA',
		uta2020: '860560000000058',
		uta2010: '860560000000058',
		latitude: -25.88743109,
		longitude: -63.78066961,
		municipalityId: 1358
	},
	{
		id: 3406,
		name: 'EL 60',
		uta2020: '860560000000025',
		uta2010: '860560000000025',
		latitude: -25.78522726,
		longitude: -62.756963342,
		municipalityId: 1358
	},
	{
		id: 3407,
		name: 'VINAL SUNI',
		uta2020: '860560000000135',
		uta2010: '860560000000135',
		latitude: -26.06879728,
		longitude: -63.6784166,
		municipalityId: 1358
	},
	{
		id: 3408,
		name: 'PUESTOS UNIDOS',
		uta2020: '860560000000102',
		uta2010: '860560000000102',
		latitude: -25.87233327,
		longitude: -63.57166677,
		municipalityId: 1358
	},
	{
		id: 3409,
		name: 'TORO PAMPA',
		uta2020: '860560000000127',
		uta2010: '860560000000127',
		latitude: -25.76112175,
		longitude: -63.507568359,
		municipalityId: 1358
	},
	{
		id: 3410,
		name: 'LA SALVACION',
		uta2020: '860560000000064',
		uta2010: '860560000000064',
		latitude: -25.65389,
		longitude: -62.33721,
		municipalityId: 1358
	},
	{
		id: 3411,
		name: 'ITATI',
		uta2020: '860560000000050',
		uta2010: '860560000000050',
		latitude: -25.711704551,
		longitude: -63.20692388,
		municipalityId: 1358
	},
	{
		id: 3412,
		name: 'EL RINCON',
		uta2020: '860560000000037',
		uta2010: '860560000000037',
		latitude: -25.66262,
		longitude: -62.55546,
		municipalityId: 1358
	},
	{
		id: 3413,
		name: 'COLOMBIA',
		uta2020: '860560000000019',
		uta2010: '860560000000019',
		latitude: -25.653504749,
		longitude: -62.338391276,
		municipalityId: 1358
	},
	{
		id: 3414,
		name: 'LUJAN',
		uta2020: '860560000000081',
		uta2010: '860560000000081',
		latitude: -25.96134,
		longitude: -63.17917,
		municipalityId: 1358
	},
	{
		id: 3415,
		name: 'NUEVA ESPERANZA',
		uta2020: '860560000060000',
		uta2010: '860560000060000',
		latitude: -26.033845579,
		longitude: -63.318006684,
		municipalityId: 1358
	},
	{
		id: 3416,
		name: 'LA UNION',
		uta2020: '860560000000065',
		uta2010: '860560000000065',
		latitude: -25.688192368,
		longitude: -62.115592957,
		municipalityId: 1358
	},
	{
		id: 3417,
		name: 'DOS ARBOLES',
		uta2020: '860560000000023',
		uta2010: '860560000000023',
		latitude: -25.77517,
		longitude: -63.64016,
		municipalityId: 1358
	},
	{
		id: 3418,
		name: 'CRUZ BAJADA',
		uta2020: '860560000000022',
		uta2010: '860560000000022',
		latitude: -25.69299,
		longitude: -63.87235,
		municipalityId: 1358
	},
	{
		id: 3419,
		name: 'LOS TIGRES',
		uta2020: '860560000040000',
		uta2010: '860560000040000',
		latitude: -25.909496548,
		longitude: -62.592055419,
		municipalityId: 1358
	},
	{
		id: 3420,
		name: 'BELGICA',
		uta2020: '860560000000007',
		uta2010: '860560000000007',
		latitude: -25.777787671,
		longitude: -62.537773194,
		municipalityId: 1358
	},
	{
		id: 3421,
		name: 'TORO POZO',
		uta2020: '860560000000128',
		uta2010: '860560000000128',
		latitude: -25.81963,
		longitude: -63.7242,
		municipalityId: 1358
	},
	{
		id: 3422,
		name: 'LOS POCITOS',
		uta2020: '860560000000077',
		uta2010: '860560000000077',
		latitude: -25.750013008,
		longitude: -63.229624174,
		municipalityId: 1358
	},
	{
		id: 3423,
		name: 'LAS MALVINAS',
		uta2020: '860560000000070',
		uta2010: '860560000000070',
		latitude: -25.95086,
		longitude: -63.0455,
		municipalityId: 1358
	},
	{
		id: 3424,
		name: 'SAN ISIDRO',
		uta2020: '860560000000114',
		uta2010: '860560000000114',
		latitude: -25.84274188,
		longitude: -63.44499484,
		municipalityId: 1358
	},
	{
		id: 3425,
		name: 'LA ARMONIA',
		uta2020: '860560000000057',
		uta2010: '860560000000057',
		latitude: -25.751361847,
		longitude: -62.545009613,
		municipalityId: 1358
	},
	{
		id: 3426,
		name: 'LA FIRMEZA',
		uta2020: '860560000020000',
		uta2010: '860560000020000',
		latitude: -25.973449603,
		longitude: -63.121334125,
		municipalityId: 1358
	},
	{
		id: 3427,
		name: 'SAN IGNACIO',
		uta2020: '860560000000113',
		uta2010: '860560000000113',
		latitude: -25.689727721,
		longitude: -62.938225339,
		municipalityId: 1358
	},
	{
		id: 3428,
		name: 'EL PALMAR',
		uta2020: '860560000000033',
		uta2010: '860560000000033',
		latitude: -26.041024643,
		longitude: -62.955883799,
		municipalityId: 1358
	},
	{
		id: 3429,
		name: 'IFIA',
		uta2020: '860560000000048',
		uta2010: '860560000000048',
		latitude: -25.860091844,
		longitude: -62.721051369,
		municipalityId: 1358
	},
	{
		id: 3430,
		name: 'EL AEROLITO',
		uta2020: '860560000000026',
		uta2010: '860560000000026',
		latitude: -25.739183426,
		longitude: -62.163661957,
		municipalityId: 1358
	},
	{
		id: 3431,
		name: 'BUENOS AIRES',
		uta2020: '860560000000010',
		uta2010: '860560000000010',
		latitude: -25.81851,
		longitude: -63.06335,
		municipalityId: 1358
	},
	{
		id: 3432,
		name: 'RINCON DEL VALLE',
		uta2020: '860560000000105',
		uta2010: '860560000000105',
		latitude: -26.023169688,
		longitude: -62.824776183,
		municipalityId: 1358
	},
	{
		id: 3433,
		name: 'BAHIA BLANCA',
		uta2020: '860560000000005',
		uta2010: '860560000000005',
		latitude: -25.724731445,
		longitude: -63.192127228,
		municipalityId: 1358
	},
	{
		id: 3434,
		name: 'PAAJ POZO',
		uta2020: '860560000000089',
		uta2010: '860560000000089',
		latitude: -25.91119,
		longitude: -63.45274,
		municipalityId: 1358
	},
	{
		id: 3435,
		name: 'SANTO DOMINGO',
		uta2020: '860560000000124',
		uta2010: '860560000000124',
		latitude: -26.20217,
		longitude: -63.74994,
		municipalityId: 1358
	},
	{
		id: 3436,
		name: 'CAMPO ALEGRE',
		uta2020: '860560000000013',
		uta2010: '860560000000013',
		latitude: -26.095485687,
		longitude: -63.032848358,
		municipalityId: 1358
	},
	{
		id: 3437,
		name: 'EL TUNQUELEN',
		uta2020: '860560000000041',
		uta2010: '860560000000041',
		latitude: -25.766637554,
		longitude: -62.396425684,
		municipalityId: 1358
	},
	{
		id: 3438,
		name: 'PUESTO CORDOBA',
		uta2020: '860560000000100',
		uta2010: '860560000000100',
		latitude: -25.924763071,
		longitude: -62.739259437,
		municipalityId: 1358
	},
	{
		id: 3439,
		name: 'SAN CRISTOBAL',
		uta2020: '860560000000111',
		uta2010: '860560000000111',
		latitude: -26.071159363,
		longitude: -63.282123566,
		municipalityId: 1358
	},
	{
		id: 3440,
		name: 'LOS MORTEROS',
		uta2020: '860560000000076',
		uta2010: '860560000000076',
		latitude: -25.947826185,
		longitude: -62.940143174,
		municipalityId: 1358
	},
	{
		id: 3441,
		name: 'ISKOY POZO',
		uta2020: '860560000000049',
		uta2010: '860560000000049',
		latitude: -26.10768,
		longitude: -63.6411,
		municipalityId: 1358
	},
	{
		id: 3442,
		name: 'LOTE 40',
		uta2020: '860560000000079',
		uta2010: '860560000000079',
		latitude: -26.17939155,
		longitude: -61.96097805,
		municipalityId: 1358
	},
	{
		id: 3443,
		name: 'SAN JOSE',
		uta2020: '860560000000116',
		uta2010: '860560000000116',
		latitude: -26.04666253,
		longitude: -63.118132174,
		municipalityId: 1358
	},
	{
		id: 3444,
		name: 'TRES VARONES',
		uta2020: '860560000000129',
		uta2010: '860560000000129',
		latitude: -26.14241,
		longitude: -63.71614,
		municipalityId: 1358
	},
	{
		id: 3445,
		name: 'EL CORRIDO',
		uta2020: '860560000000030',
		uta2010: '860560000000030',
		latitude: -26.18132019,
		longitude: -63.02514267,
		municipalityId: 1358
	},
	{
		id: 3446,
		name: 'LAS LOMAS',
		uta2020: '860560000000068',
		uta2010: '860560000000068',
		latitude: -25.81663914,
		longitude: -62.335531738,
		municipalityId: 1358
	},
	{
		id: 3447,
		name: 'CALOJ POZO',
		uta2020: '860560000000012',
		uta2010: '860560000000012',
		latitude: -25.70824402,
		longitude: -63.58979406,
		municipalityId: 1358
	},
	{
		id: 3448,
		name: 'PIRUAJ BAJO',
		uta2020: '860560000000095',
		uta2010: '860560000000095',
		latitude: -26.143670184,
		longitude: -63.565950144,
		municipalityId: 1358
	},
	{
		id: 3449,
		name: 'LOS POZANCONES',
		uta2020: '860560000000078',
		uta2010: '860560000000078',
		latitude: -25.99963,
		longitude: -63.06103,
		municipalityId: 1358
	},
	{
		id: 3450,
		name: 'SANTA CRUZ',
		uta2020: '860560000000120',
		uta2010: '860560000000120',
		latitude: -25.87135,
		longitude: -63.09966,
		municipalityId: 1358
	},
	{
		id: 3451,
		name: 'EL VALLE',
		uta2020: '860560000000042',
		uta2010: '860560000000042',
		latitude: -26.162843704,
		longitude: -63.235816956,
		municipalityId: 1358
	},
	{
		id: 3452,
		name: 'PUEYRREDON',
		uta2020: '340499119000091',
		uta2010: '340499119000091',
		latitude: -25.42475062,
		longitude: -57.7912538,
		municipalityId: 2312
	},
	{
		id: 3453,
		name: 'RIACHO NEGRO',
		uta2020: '340499119070000',
		uta2010: '340499119070000',
		latitude: -25.422432023,
		longitude: -57.791454514,
		municipalityId: 2312
	},
	{
		id: 3454,
		name: 'GENERAL CABRERA',
		uta2020: '140560413070000',
		uta2010: '140560413070000',
		latitude: -32.811891084,
		longitude: -63.873696571,
		municipalityId: 370
	},
	{
		id: 3455,
		name: 'CHARLES FUHR',
		uta2020: '780280000000002',
		uta2010: '780280000000002',
		latitude: -50.27098465,
		longitude: -71.892753601,
		municipalityId: 1515
	},
	{
		id: 3456,
		name: 'PUNTA BANDERA',
		uta2020: '780280000000084',
		uta2010: '780280000000084',
		latitude: -50.313929308,
		longitude: -72.793038434,
		municipalityId: 1515
	},
	{
		id: 3457,
		name: 'EL CERRITO',
		uta2020: '780280000000004',
		uta2010: '780280000000004',
		latitude: -50.617664337,
		longitude: -71.366348267,
		municipalityId: 1515
	},
	{
		id: 3458,
		name: 'LA LEONA',
		uta2020: '780280000000073',
		uta2010: '780280000000073',
		latitude: -49.819154084,
		longitude: -72.048199146,
		municipalityId: 1515
	},
	{
		id: 3459,
		name: 'GENDARME BARRETO',
		uta2020: '780280000000070',
		uta2010: '780280000000070',
		latitude: -50.283966064,
		longitude: -70.928588867,
		municipalityId: 1515
	},
	{
		id: 3460,
		name: 'HERNANDARIAS',
		uta2020: '300840315110000',
		uta2010: '300840315110000',
		latitude: -31.23245007,
		longitude: -59.987257644,
		municipalityId: 1722
	},
	{
		id: 3461,
		name: 'PUERTO VIBORAS',
		uta2020: '300840315000086',
		uta2010: '300840315000086',
		latitude: -31.269565594,
		longitude: -60.008565252,
		municipalityId: 1722
	},
	{
		id: 3462,
		name: 'GENERAL BALDISSERA',
		uta2020: '140630532110000',
		uta2010: '140630532110000',
		latitude: -33.122017177,
		longitude: -62.303721256,
		municipalityId: 189
	},
	{
		id: 3463,
		name: 'COLONIA ITURRASPE',
		uta2020: '141402938215000',
		uta2010: '141402938215000',
		latitude: -31.207143324,
		longitude: -62.109918203,
		municipalityId: 402
	},
	{
		id: 3464,
		name: 'EL ALTO',
		uta2020: '141472987000026',
		uta2010: '141472987000026',
		latitude: -31.744155795,
		longitude: -64.393263101,
		municipalityId: 228
	},
	{
		id: 3465,
		name: 'ANISACATE',
		uta2020: '141472987020000',
		uta2010: '141472987020000',
		latitude: -31.723137871,
		longitude: -64.414486342,
		municipalityId: 228
	},
	{
		id: 3466,
		name: 'COSTA AZUL',
		uta2020: '141472987070000',
		uta2010: '141472987070000',
		latitude: -31.724728937,
		longitude: -64.393927219,
		municipalityId: 228
	},
	{
		id: 3467,
		name: 'CAMPO MARINZALDA',
		uta2020: '820072021000010',
		uta2010: '820072021000010',
		latitude: -32.751697154,
		longitude: -61.735957449,
		municipalityId: 1046
	},
	{
		id: 3468,
		name: 'CAMPO GIMBATTI',
		uta2020: '820072021000005',
		uta2010: '820072021000005',
		latitude: -32.8943573,
		longitude: -61.713654,
		municipalityId: 1046
	},
	{
		id: 3469,
		name: 'TORTUGAS',
		uta2020: '820072021060000',
		uta2010: '820072021060000',
		latitude: -32.748298262,
		longitude: -61.820335927,
		municipalityId: 1046
	},
	{
		id: 3470,
		name: 'CAMPO CHARO',
		uta2020: '820072021000002',
		uta2010: '820072021000002',
		latitude: -32.808758952,
		longitude: -61.750721249,
		municipalityId: 1046
	},
	{
		id: 3471,
		name: 'APARICIO',
		uta2020: '061890189010000',
		uta2010: '061890189010000',
		latitude: -38.620494912,
		longitude: -60.880960343,
		municipalityId: 616
	},
	{
		id: 3472,
		name: 'CUARTEL II',
		uta2020: '061890189000003',
		uta2010: '061890189000003',
		latitude: -38.9223145,
		longitude: -61.308335,
		municipalityId: 616
	},
	{
		id: 3473,
		name: 'LAS CORTADERAS',
		uta2020: '061890189000015',
		uta2010: '061890189000015',
		latitude: -38.53625,
		longitude: -61.4521,
		municipalityId: 616
	},
	{
		id: 3474,
		name: 'EL PERDIDO',
		uta2020: '061890189040000',
		uta2010: '061890189040000',
		latitude: -38.675775279,
		longitude: -61.08844218,
		municipalityId: 616
	},
	{
		id: 3475,
		name: 'LOS JUNCOS',
		uta2020: '061890189000018',
		uta2010: '061890189000018',
		latitude: -38.941837311,
		longitude: -61.083206177,
		municipalityId: 616
	},
	{
		id: 3476,
		name: 'ZUBIARRE',
		uta2020: '061890189000020',
		uta2010: '061890189000020',
		latitude: -38.7605051,
		longitude: -60.7580466,
		municipalityId: 616
	},
	{
		id: 3477,
		name: 'LA AURORA',
		uta2020: '061890189000010',
		uta2010: '061890189000010',
		latitude: -38.4409955,
		longitude: -61.1222507,
		municipalityId: 616
	},
	{
		id: 3478,
		name: 'EL CALFIAO',
		uta2020: '061890189000004',
		uta2010: '061890189000004',
		latitude: -38.84817,
		longitude: -60.794750001,
		municipalityId: 616
	},
	{
		id: 3479,
		name: 'LA RUTA',
		uta2020: '061890189075000',
		uta2010: '061890189075000',
		latitude: -38.653416411,
		longitude: -60.860855769,
		municipalityId: 616
	},
	{
		id: 3480,
		name: 'NICOLAS DESCALZI',
		uta2020: '061890189000019',
		uta2010: '061890189000019',
		latitude: -38.4405618,
		longitude: -60.9890793,
		municipalityId: 616
	},
	{
		id: 3481,
		name: 'EL ZORRO',
		uta2020: '061890189000007',
		uta2010: '061890189000007',
		latitude: -38.5588093,
		longitude: -61.0924633,
		municipalityId: 616
	},
	{
		id: 3482,
		name: 'CENTRO URQUIZA',
		uta2020: '061890189000002',
		uta2010: '061890189000002',
		latitude: -38.4783937,
		longitude: -61.3763373,
		municipalityId: 616
	},
	{
		id: 3483,
		name: 'FARO',
		uta2020: '061890189050000',
		uta2010: '061890189050000',
		latitude: -38.79667811,
		longitude: -61.068877214,
		municipalityId: 616
	},
	{
		id: 3484,
		name: 'EL LUCERO',
		uta2020: '061890189000005',
		uta2010: '061890189000005',
		latitude: -38.333591461,
		longitude: -61.161254883,
		municipalityId: 616
	},
	{
		id: 3485,
		name: 'LA GLORIA',
		uta2020: '061890189000011',
		uta2010: '061890189000011',
		latitude: -38.4408987,
		longitude: -61.2730285,
		municipalityId: 616
	},
	{
		id: 3486,
		name: 'CORONEL DORREGO',
		uta2020: '061890189030000',
		uta2010: '061890189030000',
		latitude: -38.716623915,
		longitude: -61.288494888,
		municipalityId: 616
	},
	{
		id: 3487,
		name: 'LOMA CHATA',
		uta2020: '061890189000017',
		uta2010: '061890189000017',
		latitude: -38.6193269,
		longitude: -61.4926114,
		municipalityId: 616
	},
	{
		id: 3488,
		name: 'GIL',
		uta2020: '061890189000008',
		uta2010: '061890189000008',
		latitude: -38.7920836,
		longitude: -60.9090365,
		municipalityId: 616
	},
	{
		id: 3489,
		name: 'SAN ROMAN',
		uta2020: '061890189080000',
		uta2010: '061890189080000',
		latitude: -38.741555089,
		longitude: -61.537720011,
		municipalityId: 616
	},
	{
		id: 3490,
		name: 'ORIENTE',
		uta2020: '061890189070000',
		uta2010: '061890189070000',
		latitude: -38.738849115,
		longitude: -60.609223815,
		municipalityId: 616
	},
	{
		id: 3491,
		name: 'CALVO',
		uta2020: '061890189000001',
		uta2010: '061890189000001',
		latitude: -38.7655502,
		longitude: -61.4127594,
		municipalityId: 616
	},
	{
		id: 3492,
		name: 'BALNEARIO MARISOL',
		uta2020: '061890189020000',
		uta2010: '061890189020000',
		latitude: -38.922490689,
		longitude: -60.532977447,
		municipalityId: 616
	},
	{
		id: 3493,
		name: 'IRENE',
		uta2020: '061890189060000',
		uta2010: '061890189060000',
		latitude: -38.554342634,
		longitude: -60.695493875,
		municipalityId: 616
	},
	{
		id: 3494,
		name: 'LA LUNA',
		uta2020: '061890189000013',
		uta2010: '061890189000013',
		latitude: -38.8462744,
		longitude: -61.2219387,
		municipalityId: 616
	},
	{
		id: 3495,
		name: 'RINCON',
		uta2020: '780070000000048',
		uta2010: '780070000000048',
		latitude: -50.305435181,
		longitude: -69.900230408,
		municipalityId: 1543
	},
	{
		id: 3496,
		name: 'LAGUNA GRANDE',
		uta2020: '780070000000043',
		uta2010: '780070000000043',
		latitude: -49.506086554,
		longitude: -70.158902022,
		municipalityId: 1543
	},
	{
		id: 3497,
		name: 'LA BARRANCOSA',
		uta2020: '780070000000041',
		uta2010: '780070000000041',
		latitude: -50.199611664,
		longitude: -70.215667724,
		municipalityId: 1543
	},
	{
		id: 3498,
		name: 'ESTANCIA SAN RAMON',
		uta2020: '780070000000038',
		uta2010: '780070000000038',
		latitude: -50.203589682,
		longitude: -69.91434697,
		municipalityId: 1543
	},
	{
		id: 3499,
		name: 'RAMIREZ DE VELAZCO',
		uta2020: '861406560010000',
		uta2010: '861406560010000',
		latitude: -29.243566964,
		longitude: -63.372447253,
		municipalityId: 1482
	},
	{
		id: 3500,
		name: 'EMBALSE',
		uta2020: '140070007060000',
		uta2010: '140070007060000',
		latitude: -32.206507688,
		longitude: -64.400622683,
		municipalityId: 124
	},
	{
		id: 3501,
		name: 'EL QUEBRACHO',
		uta2020: '140070007000027',
		uta2010: '140070007000027',
		latitude: -32.2474181,
		longitude: -64.3772314,
		municipalityId: 124
	},
	{
		id: 3502,
		name: 'EL RUMICAL',
		uta2020: '660350084000019',
		uta2010: '660350084000019',
		latitude: -25.014152527,
		longitude: -65.393699646,
		municipalityId: 1863
	},
	{
		id: 3503,
		name: 'LA MERCED',
		uta2020: '660350084020000',
		uta2010: '660350084020000',
		latitude: -24.966089649,
		longitude: -65.489590104,
		municipalityId: 1863
	},
	{
		id: 3504,
		name: 'SUMALAO',
		uta2020: '660350084000095',
		uta2010: '660350084000095',
		latitude: -25.05396,
		longitude: -65.45216,
		municipalityId: 1863
	},
	{
		id: 3505,
		name: 'VILLA SARMIENTO',
		uta2020: '660350084000101',
		uta2010: '660350084000101',
		latitude: -24.949760437,
		longitude: -65.421562195,
		municipalityId: 1863
	},
	{
		id: 3506,
		name: 'LAS TIENDITAS',
		uta2020: '660350084000075',
		uta2010: '660350084000075',
		latitude: -25.059627533,
		longitude: -65.381469727,
		municipalityId: 1863
	},
	{
		id: 3507,
		name: 'LAS PIRCAS',
		uta2020: '660350084000074',
		uta2010: '660350084000074',
		latitude: -25.00578236,
		longitude: -65.50595672,
		municipalityId: 1863
	},
	{
		id: 3508,
		name: 'SAN AGUSTIN',
		uta2020: '660350084030000',
		uta2010: '660350084030000',
		latitude: -24.996789609,
		longitude: -65.437759933,
		municipalityId: 1863
	},
	{
		id: 3509,
		name: 'SAN MIGUEL',
		uta2020: '660350084000086',
		uta2010: '660350084000086',
		latitude: -25.080200195,
		longitude: -65.405174255,
		municipalityId: 1863
	},
	{
		id: 3510,
		name: 'EL HUAICO',
		uta2020: '660350084000014',
		uta2010: '660350084000014',
		latitude: -24.95319832,
		longitude: -65.42243492,
		municipalityId: 1863
	},
	{
		id: 3511,
		name: 'SAIRA',
		uta2020: '140630595210000',
		uta2010: '140630595210000',
		latitude: -32.406411637,
		longitude: -62.102983179,
		municipalityId: 190
	},
	{
		id: 3512,
		name: 'VILLA URQUIZA',
		uta2020: '020120001010004',
		uta2010: '020120001010004',
		latitude: -34.57154113,
		longitude: -58.48785606,
		municipalityId: 2447
	},
	{
		id: 3513,
		name: 'VILLA PUEYRREDON',
		uta2020: '020120001010003',
		uta2010: '020120001010003',
		latitude: -34.58211045,
		longitude: -58.503484879,
		municipalityId: 2447
	},
	{
		id: 3514,
		name: 'COGHLAN',
		uta2020: '020120001010001',
		uta2010: '020120001010001',
		latitude: -34.560625135,
		longitude: -58.474944746,
		municipalityId: 2447
	},
	{
		id: 3515,
		name: 'SAAVEDRA',
		uta2020: '020120001010002',
		uta2010: '020120001010002',
		latitude: -34.55306329,
		longitude: -58.488726667,
		municipalityId: 2447
	},
	{
		id: 3516,
		name: 'CERRITO',
		uta2020: '300840294050001',
		uta2010: '300840294050001',
		latitude: -31.582171122,
		longitude: -60.074022315,
		municipalityId: 1723
	},
	{
		id: 3517,
		name: 'PUEBLO MORENO',
		uta2020: '300840294050002',
		uta2010: '300840294050002',
		latitude: -31.588491385,
		longitude: -60.064892934,
		municipalityId: 1723
	},
	{
		id: 3518,
		name: 'PUEBLO GENERAL PAZ',
		uta2020: '300840294000082',
		uta2010: '300840294000082',
		latitude: -31.53255369,
		longitude: -60.0503451,
		municipalityId: 1723
	},
	{
		id: 3519,
		name: 'ARRUFO',
		uta2020: '820913491030000',
		uta2010: '820913491030000',
		latitude: -30.23414953,
		longitude: -61.7285807,
		municipalityId: 839
	},
	{
		id: 3520,
		name: 'SAN RAFAEL',
		uta2020: '820913491000017',
		uta2010: '820913491000017',
		latitude: -30.311371653,
		longitude: -61.655096981,
		municipalityId: 839
	},
	{
		id: 3521,
		name: 'CHILIBROSTE',
		uta2020: '141821631090000',
		uta2010: '141821631090000',
		latitude: -32.332596925,
		longitude: -62.51359951,
		municipalityId: 96
	},
	{
		id: 3522,
		name: 'LAS TUNAS',
		uta2020: '300849700130000',
		uta2010: '300849700130000',
		latitude: -31.870609573,
		longitude: -59.732436108,
		municipalityId: 1724
	},
	{
		id: 3523,
		name: 'MATORRALES',
		uta2020: '141191043140000',
		uta2010: '141191043140000',
		latitude: -31.714472041,
		longitude: -63.511852146,
		municipalityId: 307
	},
	{
		id: 3524,
		name: 'MEDANITOS',
		uta2020: '380846154000023',
		uta2010: '380846154000023',
		latitude: -23.940210342,
		longitude: -66.821815491,
		municipalityId: 1202
	},
	{
		id: 3525,
		name: 'CATUA',
		uta2020: '380846154010000',
		uta2010: '380846154010000',
		latitude: -23.861850794,
		longitude: -67.004124305,
		municipalityId: 1202
	},
	{
		id: 3526,
		name: 'COLONIA EL ACEQUION',
		uta2020: '141821589000026',
		uta2010: '141821589000026',
		latitude: -32.254462126,
		longitude: -62.813781833,
		municipalityId: 97
	},
	{
		id: 3527,
		name: 'ALTO ALEGRE',
		uta2020: '141821589020000',
		uta2010: '141821589020000',
		latitude: -32.346095198,
		longitude: -62.885348599,
		municipalityId: 97
	},
	{
		id: 3528,
		name: 'CAMPO SANTA TERESA',
		uta2020: '141821589000013',
		uta2010: '141821589000013',
		latitude: -32.196415749,
		longitude: -62.871869876,
		municipalityId: 97
	},
	{
		id: 3529,
		name: 'EL RECREO',
		uta2020: '340359063040000',
		uta2010: '340359063040000',
		latitude: -25.066315255,
		longitude: -59.251351463,
		municipalityId: 2294
	},
	{
		id: 3530,
		name: 'GUARDIA MITRE',
		uta2020: '620070007040000',
		uta2010: '620070007040000',
		latitude: -40.430295188,
		longitude: -63.67191401,
		municipalityId: 1251
	},
	{
		id: 3531,
		name: 'LA PUNTILLA',
		uta2020: '100350063090000',
		uta2010: '100350063090000',
		latitude: -27.668799948,
		longitude: -66.983185418,
		municipalityId: 1885
	},
	{
		id: 3532,
		name: 'TALAMAYO',
		uta2020: '100350063000106',
		uta2010: '100350063000106',
		latitude: -27.560386658,
		longitude: -66.849433899,
		municipalityId: 1885
	},
	{
		id: 3533,
		name: 'LA REPRESA',
		uta2020: '100350063000058',
		uta2010: '100350063000058',
		latitude: -27.687675476,
		longitude: -67.021820068,
		municipalityId: 1885
	},
	{
		id: 3534,
		name: 'BARRIO ARTAZA',
		uta2020: '100350063000009',
		uta2010: '100350063000009',
		latitude: -27.698895378,
		longitude: -67.031142996,
		municipalityId: 1885
	},
	{
		id: 3535,
		name: 'HUACO',
		uta2020: '100350063000039',
		uta2010: '100350063000039',
		latitude: -27.66628,
		longitude: -67.02439,
		municipalityId: 1885
	},
	{
		id: 3536,
		name: 'BELEN',
		uta2020: '100350063020000',
		uta2010: '100350063020000',
		latitude: -27.633758227,
		longitude: -67.018122435,
		municipalityId: 1885
	},
	{
		id: 3537,
		name: 'LAS LOMAS',
		uta2020: '100350063000070',
		uta2010: '100350063000070',
		latitude: -27.737100601,
		longitude: -67.006736755,
		municipalityId: 1885
	},
	{
		id: 3538,
		name: 'LUNA AGUADA',
		uta2020: '100350063000078',
		uta2010: '100350063000078',
		latitude: -27.63448143,
		longitude: -66.902496338,
		municipalityId: 1885
	},
	{
		id: 3539,
		name: 'AMPUJACO',
		uta2020: '100350063000005',
		uta2010: '100350063000005',
		latitude: -27.442058431,
		longitude: -66.735595201,
		municipalityId: 1885
	},
	{
		id: 3540,
		name: 'EL POZO',
		uta2020: '100350063000035',
		uta2010: '100350063000035',
		latitude: -27.825668335,
		longitude: -66.786117554,
		municipalityId: 1885
	},
	{
		id: 3541,
		name: 'PICHI HUINCA',
		uta2020: '421265112050000',
		uta2010: '421265112050000',
		latitude: -35.647342393,
		longitude: -64.769528066,
		municipalityId: 1948
	},
	{
		id: 3542,
		name: 'LAS PIEDRITAS',
		uta2020: '421265112000015',
		uta2010: '421265112000015',
		latitude: -35.4924204,
		longitude: -64.84486127,
		municipalityId: 1948
	},
	{
		id: 3543,
		name: 'CHAUPI POZO',
		uta2020: '860356364050000',
		uta2010: '860356364050000',
		latitude: -27.528902881,
		longitude: -64.396358656,
		municipalityId: 1339
	},
	{
		id: 3544,
		name: 'CORONEL BAIGORRIA',
		uta2020: '140980805090000',
		uta2010: '140980805090000',
		latitude: -32.849547895,
		longitude: -64.359859137,
		municipalityId: 440
	},
	{
		id: 3545,
		name: 'MARULL',
		uta2020: '141401295280000',
		uta2010: '141401295280000',
		latitude: -30.994522632,
		longitude: -62.825840108,
		municipalityId: 403
	},
	{
		id: 3546,
		name: 'CAPILLA VIEJA',
		uta2020: '140070049040000',
		uta2010: '140070049040000',
		latitude: -31.942027417,
		longitude: -64.616540614,
		municipalityId: 125
	},
	{
		id: 3547,
		name: 'FALDA DE LOS REARTES',
		uta2020: '140070049000030',
		uta2010: '140070049000030',
		latitude: -31.9525401,
		longitude: -64.5314623,
		municipalityId: 125
	},
	{
		id: 3548,
		name: 'VILLA GENERAL BELGRANO',
		uta2020: '140070049310000',
		uta2010: '140070049310000',
		latitude: -31.980823645,
		longitude: -64.560619151,
		municipalityId: 125
	},
	{
		id: 3549,
		name: 'CERRO HERMOSO',
		uta2020: '140070049000015',
		uta2010: '140070049000015',
		latitude: -31.943088814,
		longitude: -64.638652839,
		municipalityId: 125
	},
	{
		id: 3550,
		name: 'LAS HIGUERAS',
		uta2020: '140980840170000',
		uta2010: '140980840170000',
		latitude: -33.089242221,
		longitude: -64.286822769,
		municipalityId: 441
	},
	{
		id: 3551,
		name: 'DIQUE N° 1',
		uta2020: '062450245010001',
		uta2010: '062450245010001',
		latitude: -34.875848555,
		longitude: -57.933629899,
		municipalityId: 617
	},
	{
		id: 3552,
		name: 'ENSENADA',
		uta2020: '062450245010002',
		uta2010: '062450245010002',
		latitude: -34.867977021,
		longitude: -57.921437925,
		municipalityId: 617
	},
	{
		id: 3553,
		name: 'PUNTA LARA',
		uta2020: '062450245010004',
		uta2010: '062450245010004',
		latitude: -34.834668939,
		longitude: -58.001048187,
		municipalityId: 617
	},
	{
		id: 3554,
		name: 'VILLA CATELA',
		uta2020: '062450245010005',
		uta2010: '062450245010005',
		latitude: -34.884600148,
		longitude: -57.951129026,
		municipalityId: 617
	},
	{
		id: 3555,
		name: 'ISLA SANTIAGO (OESTE)',
		uta2020: '062450245010003',
		uta2010: '062450245010003',
		latitude: -34.837046199,
		longitude: -57.899962041,
		municipalityId: 617
	},
	{
		id: 3556,
		name: 'VILLA BONITA',
		uta2020: '540910357120000',
		uta2010: '540910357120000',
		latitude: -27.479699296,
		longitude: -54.963923404,
		municipalityId: 2117
	},
	{
		id: 3557,
		name: 'YERBAL VIEJO',
		uta2020: '540910357000043',
		uta2010: '540910357000043',
		latitude: -27.493143314,
		longitude: -55.006110034,
		municipalityId: 2117
	},
	{
		id: 3558,
		name: 'PICADA GUARAIPO',
		uta2020: '540910357000021',
		uta2010: '540910357000021',
		latitude: -27.49122083,
		longitude: -55.04937821,
		municipalityId: 2117
	},
	{
		id: 3559,
		name: 'BARRIO ESCUELA 633',
		uta2020: '540910357017000',
		uta2010: '540910357017000',
		latitude: -27.468993347,
		longitude: -55.077106502,
		municipalityId: 2117
	},
	{
		id: 3560,
		name: 'PICADA INTERNACI',
		uta2020: '540910357000022',
		uta2010: '540910357000022',
		latitude: -27.523266652,
		longitude: -54.957727823,
		municipalityId: 2117
	},
	{
		id: 3561,
		name: 'VILLA UNION',
		uta2020: '540910357000040',
		uta2010: '540910357000040',
		latitude: -27.50780485,
		longitude: -54.928512,
		municipalityId: 2117
	},
	{
		id: 3562,
		name: 'CAMPO RAMON',
		uta2020: '540910357020000',
		uta2010: '540910357020000',
		latitude: -27.452270087,
		longitude: -55.023735239,
		municipalityId: 2117
	},
	{
		id: 3563,
		name: 'SAN FRANCISCO',
		uta2020: '381056224030000',
		uta2010: '381056224030000',
		latitude: -23.617466406,
		longitude: -64.954861229,
		municipalityId: 1198
	},
	{
		id: 3564,
		name: 'ALTO CALILEGUA',
		uta2020: '381056224000001',
		uta2010: '381056224000001',
		latitude: -23.56311433,
		longitude: -64.89713769,
		municipalityId: 1198
	},
	{
		id: 3565,
		name: 'VILLA GRISOLIA',
		uta2020: '060210021050000',
		uta2010: '060210021050000',
		latitude: -35.109617833,
		longitude: -60.070551325,
		municipalityId: 618
	},
	{
		id: 3566,
		name: 'PLA',
		uta2020: '060210021040000',
		uta2010: '060210021040000',
		latitude: -35.124381975,
		longitude: -60.220061261,
		municipalityId: 618
	},
	{
		id: 3567,
		name: 'CORONEL SEGUI',
		uta2020: '060210021020000',
		uta2010: '060210021020000',
		latitude: -34.868118998,
		longitude: -60.393970882,
		municipalityId: 618
	},
	{
		id: 3568,
		name: 'LARREA',
		uta2020: '060210021000010',
		uta2010: '060210021000010',
		latitude: -35.054001958,
		longitude: -60.368235997,
		municipalityId: 618
	},
	{
		id: 3569,
		name: 'BAUDRIX',
		uta2020: '060210021000001',
		uta2010: '060210021000001',
		latitude: -35.237293243,
		longitude: -60.303031921,
		municipalityId: 618
	},
	{
		id: 3570,
		name: 'VILLA MARIA',
		uta2020: '060210021060000',
		uta2010: '060210021060000',
		latitude: -34.888125545,
		longitude: -60.346938561,
		municipalityId: 618
	},
	{
		id: 3571,
		name: 'ALBERTI',
		uta2020: '060210021010000',
		uta2010: '060210021010000',
		latitude: -35.033073435,
		longitude: -60.280619729,
		municipalityId: 618
	},
	{
		id: 3572,
		name: 'MECHITA',
		uta2020: '060210021030000',
		uta2010: '060210021030000',
		latitude: -35.068013673,
		longitude: -60.402597163,
		municipalityId: 618
	},
	{
		id: 3573,
		name: 'PRESIDENTE QUINTANA',
		uta2020: '060210021000011',
		uta2010: '060210021000011',
		latitude: -35.2223288,
		longitude: -60.1892658,
		municipalityId: 618
	},
	{
		id: 3574,
		name: 'VILLA ORTIZ',
		uta2020: '060210021070000',
		uta2010: '060210021070000',
		latitude: -34.843532945,
		longitude: -60.304849863,
		municipalityId: 618
	},
	{
		id: 3575,
		name: 'CUARTEL VI',
		uta2020: '060210021000004',
		uta2010: '060210021000004',
		latitude: -35.0984101,
		longitude: -60.2046394,
		municipalityId: 618
	},
	{
		id: 3576,
		name: 'EL RECUERDO',
		uta2020: '060210021000006',
		uta2010: '060210021000006',
		latitude: -35.094841004,
		longitude: -60.377243042,
		municipalityId: 618
	},
	{
		id: 3577,
		name: 'CUARTEL V',
		uta2020: '060210021000003',
		uta2010: '060210021000003',
		latitude: -34.9800093,
		longitude: -60.2888076,
		municipalityId: 618
	},
	{
		id: 3578,
		name: 'LA VANGUARDIA',
		uta2020: '820282476130000',
		uta2010: '820282476130000',
		latitude: -33.359625797,
		longitude: -60.658456866,
		municipalityId: 725
	},
	{
		id: 3579,
		name: 'VILLA SARMIENTO',
		uta2020: '140352252130000',
		uta2010: '140352252130000',
		latitude: -34.121619574,
		longitude: -64.724049936,
		municipalityId: 325
	},
	{
		id: 3580,
		name: 'YACAREY',
		uta2020: '180770147000032',
		uta2010: '180770147000032',
		latitude: -27.33472115,
		longitude: -58.18128404,
		municipalityId: 2065
	},
	{
		id: 3581,
		name: 'SANTA RITA',
		uta2020: '180770147000029',
		uta2010: '180770147000029',
		latitude: -27.35779451,
		longitude: -58.26255832,
		municipalityId: 2065
	},
	{
		id: 3582,
		name: 'RINCON GUAZU',
		uta2020: '180770147000024',
		uta2010: '180770147000024',
		latitude: -27.288724899,
		longitude: -58.318275452,
		municipalityId: 2065
	},
	{
		id: 3583,
		name: 'GUAYU',
		uta2020: '180770147000013',
		uta2010: '180770147000013',
		latitude: -27.299319999,
		longitude: -58.184560007,
		municipalityId: 2065
	},
	{
		id: 3584,
		name: 'VILLA LA PALMIRA',
		uta2020: '180770147000031',
		uta2010: '180770147000031',
		latitude: -27.32299847,
		longitude: -58.03937238,
		municipalityId: 2065
	},
	{
		id: 3585,
		name: 'ITATI',
		uta2020: '180770147010000',
		uta2010: '180770147010000',
		latitude: -27.269303853,
		longitude: -58.243478272,
		municipalityId: 2065
	},
	{
		id: 3586,
		name: 'SCORZA CUE',
		uta2020: '180770147000030',
		uta2010: '180770147000030',
		latitude: -27.341372502,
		longitude: -57.930355927,
		municipalityId: 2065
	},
	{
		id: 3587,
		name: 'ESTANCIA SAN BENITO',
		uta2020: '180770147000012',
		uta2010: '180770147000012',
		latitude: -27.38349754,
		longitude: -58.22473708,
		municipalityId: 2065
	},
	{
		id: 3588,
		name: 'EL ABRA',
		uta2020: '180770147000008',
		uta2010: '180770147000008',
		latitude: -27.351966147,
		longitude: -57.873936254,
		municipalityId: 2065
	},
	{
		id: 3589,
		name: 'LA PLAYOSA',
		uta2020: '140420315080000',
		uta2010: '140420315080000',
		latitude: -32.09969486,
		longitude: -63.032528965,
		municipalityId: 168
	},
	{
		id: 3590,
		name: 'COLONIA BENITEZ',
		uta2020: '221260364020000',
		uta2010: '221260364020000',
		latitude: -27.330588438,
		longitude: -58.945010275,
		municipalityId: 53
	},
	{
		id: 3591,
		name: 'BARRIO DE LOS PESCADORES',
		uta2020: '221260364010000',
		uta2010: '221260364010000',
		latitude: -27.448042621,
		longitude: -58.855101328,
		municipalityId: 53
	},
	{
		id: 3592,
		name: 'PUENTE SAN PEDRO',
		uta2020: '221260364000018',
		uta2010: '221260364000018',
		latitude: -27.313842559,
		longitude: -58.765117123,
		municipalityId: 53
	},
	{
		id: 3593,
		name: 'CAMPO ROSSI',
		uta2020: '221260364000007',
		uta2010: '221260364000007',
		latitude: -27.228550345,
		longitude: -58.904050775,
		municipalityId: 53
	},
	{
		id: 3594,
		name: 'ISLA ANTEQUERA',
		uta2020: '221260364000012',
		uta2010: '221260364000012',
		latitude: -27.408719754,
		longitude: -58.829036139,
		municipalityId: 53
	},
	{
		id: 3595,
		name: 'TRES HORQUETAS',
		uta2020: '221260364000021',
		uta2010: '221260364000021',
		latitude: -27.355303583,
		longitude: -58.97970604,
		municipalityId: 53
	},
	{
		id: 3596,
		name: 'LOTE 1',
		uta2020: '221260364000015',
		uta2010: '221260364000015',
		latitude: -27.31411524,
		longitude: -58.99538317,
		municipalityId: 53
	},
	{
		id: 3597,
		name: 'CAMPO LA ROSARIO',
		uta2020: '821334191000008',
		uta2010: '821334191000008',
		latitude: -29.6901496,
		longitude: -60.055189,
		municipalityId: 1001
	},
	{
		id: 3598,
		name: 'SAN EUGENIO',
		uta2020: '821334191000097',
		uta2010: '821334191000097',
		latitude: -29.7142137,
		longitude: -60.123674,
		municipalityId: 1001
	},
	{
		id: 3599,
		name: 'COLONIA LAS MARGARITAS',
		uta2020: '821334191000021',
		uta2010: '821334191000021',
		latitude: -29.746655,
		longitude: -60.1822107,
		municipalityId: 1001
	},
	{
		id: 3600,
		name: 'MARGARITA',
		uta2020: '821334191110000',
		uta2010: '821334191110000',
		latitude: -29.691087959,
		longitude: -60.252465268,
		municipalityId: 1001
	},
	{
		id: 3601,
		name: 'CAMPO  PAVICICH',
		uta2020: '821334191000001',
		uta2010: '821334191000001',
		latitude: -29.725727982,
		longitude: -60.289512873,
		municipalityId: 1001
	},
	{
		id: 3602,
		name: 'CAMPO MOLASSI',
		uta2020: '821334191000011',
		uta2010: '821334191000011',
		latitude: -29.7974744,
		longitude: -60.1400241,
		municipalityId: 1001
	},
	{
		id: 3603,
		name: 'CAMPO COLNAGHI',
		uta2020: '821334191000004',
		uta2010: '821334191000004',
		latitude: -29.8277667,
		longitude: -60.0849997,
		municipalityId: 1001
	},
	{
		id: 3604,
		name: 'LA NICOLOSA',
		uta2020: '821334191000076',
		uta2010: '821334191000076',
		latitude: -29.785541577,
		longitude: -60.093369008,
		municipalityId: 1001
	},
	{
		id: 3605,
		name: 'REAL SAYANA',
		uta2020: '860286056050000',
		uta2010: '860286056050000',
		latitude: -28.815129489,
		longitude: -62.761034546,
		municipalityId: 1403
	},
	{
		id: 3606,
		name: 'COLONIA SUR',
		uta2020: '501120112000021',
		uta2010: '501120112000021',
		latitude: -33.324573517,
		longitude: -68.010673523,
		municipalityId: 1501
	},
	{
		id: 3607,
		name: 'LA ANGELINA',
		uta2020: '501120112000069',
		uta2010: '501120112000069',
		latitude: -33.166912079,
		longitude: -68.094146728,
		municipalityId: 1501
	},
	{
		id: 3608,
		name: 'MORON VIEJO',
		uta2020: '501120112000102',
		uta2010: '501120112000102',
		latitude: -33.121772766,
		longitude: -67.995834351,
		municipalityId: 1501
	},
	{
		id: 3609,
		name: 'LA DORMIDA',
		uta2020: '501120112040000',
		uta2010: '501120112040000',
		latitude: -33.349924356,
		longitude: -67.916046063,
		municipalityId: 1501
	},
	{
		id: 3610,
		name: 'BARRIO 12 DE OCTUBRE',
		uta2020: '501120112010000',
		uta2010: '501120112010000',
		latitude: -33.191201536,
		longitude: -68.28096244,
		municipalityId: 1501
	},
	{
		id: 3611,
		name: 'MORON CHICO',
		uta2020: '501120112000101',
		uta2010: '501120112000101',
		latitude: -33.137004852,
		longitude: -67.962760925,
		municipalityId: 1501
	},
	{
		id: 3612,
		name: 'LA BANDERA',
		uta2020: '501120112000071',
		uta2010: '501120112000071',
		latitude: -33.433856964,
		longitude: -67.981880188,
		municipalityId: 1501
	},
	{
		id: 3613,
		name: 'GOBERNADOR CIVIT',
		uta2020: '501120112000060',
		uta2010: '501120112000060',
		latitude: -33.337766803,
		longitude: -67.958521907,
		municipalityId: 1501
	},
	{
		id: 3614,
		name: 'PARRALES MENDOCINOS',
		uta2020: '501120112000106',
		uta2010: '501120112000106',
		latitude: -33.390413841,
		longitude: -67.844626808,
		municipalityId: 1501
	},
	{
		id: 3615,
		name: 'LAS CATITAS',
		uta2020: '501120112050000',
		uta2010: '501120112050000',
		latitude: -33.300105879,
		longitude: -68.053218237,
		municipalityId: 1501
	},
	{
		id: 3616,
		name: 'BALDE NUEVO',
		uta2020: '501120112000009',
		uta2010: '501120112000009',
		latitude: -33.919876099,
		longitude: -67.742179871,
		municipalityId: 1501
	},
	{
		id: 3617,
		name: 'LA CIENAGUITA',
		uta2020: '501120112000074',
		uta2010: '501120112000074',
		latitude: -33.161519811,
		longitude: -67.86618057,
		municipalityId: 1501
	},
	{
		id: 3618,
		name: 'LOMAS BLANCAS',
		uta2020: '501120112000090',
		uta2010: '501120112000090',
		latitude: -33.166255951,
		longitude: -67.878952026,
		municipalityId: 1501
	},
	{
		id: 3619,
		name: 'EL ALGARROBO',
		uta2020: '501120112000026',
		uta2010: '501120112000026',
		latitude: -33.474884033,
		longitude: -67.995178223,
		municipalityId: 1501
	},
	{
		id: 3620,
		name: 'SANTA ROSA',
		uta2020: '501120112060000',
		uta2010: '501120112060000',
		latitude: -33.254422789,
		longitude: -68.15674388,
		municipalityId: 1501
	},
	{
		id: 3621,
		name: 'SAN PEDRO',
		uta2020: '501120112000113',
		uta2010: '501120112000113',
		latitude: -33.255168915,
		longitude: -67.730964661,
		municipalityId: 1501
	},
	{
		id: 3622,
		name: 'VILLA CABECERA',
		uta2020: '501120112000121',
		uta2010: '501120112000121',
		latitude: -33.253615974,
		longitude: -68.152618507,
		municipalityId: 1501
	},
	{
		id: 3623,
		name: 'LA COSTA',
		uta2020: '501120112000077',
		uta2010: '501120112000077',
		latitude: -33.24324631,
		longitude: -68.17680332,
		municipalityId: 1501
	},
	{
		id: 3624,
		name: 'BARRIO MOLINA CABRERA',
		uta2020: '501120112030000',
		uta2010: '501120112030000',
		latitude: -33.129711955,
		longitude: -68.203787856,
		municipalityId: 1501
	},
	{
		id: 3625,
		name: 'BALDE DE PIEDRA',
		uta2020: '501120112000007',
		uta2010: '501120112000007',
		latitude: -33.0552929,
		longitude: -68.066892376,
		municipalityId: 1501
	},
	{
		id: 3626,
		name: 'BARRIO MARIA AUXILIADORA',
		uta2020: '501120112020000',
		uta2010: '501120112020000',
		latitude: -33.242513624,
		longitude: -68.182675833,
		municipalityId: 1501
	},
	{
		id: 3627,
		name: 'TALQUENCA',
		uta2020: '501120112000119',
		uta2010: '501120112000119',
		latitude: -33.054985046,
		longitude: -67.678092956,
		municipalityId: 1501
	},
	{
		id: 3628,
		name: 'LOS LOTES',
		uta2020: '501120112000093',
		uta2010: '501120112000093',
		latitude: -33.31721072,
		longitude: -68.007531079,
		municipalityId: 1501
	},
	{
		id: 3629,
		name: 'LA JOSEFA',
		uta2020: '501120112000080',
		uta2010: '501120112000080',
		latitude: -32.899745854,
		longitude: -67.696324438,
		municipalityId: 1501
	},
	{
		id: 3630,
		name: 'CATITAS VIEJAS',
		uta2020: '501120112000014',
		uta2010: '501120112000014',
		latitude: -33.27930216,
		longitude: -68.09402423,
		municipalityId: 1501
	},
	{
		id: 3631,
		name: 'COLONIA SAN JORGE',
		uta2020: '501120112000020',
		uta2010: '501120112000020',
		latitude: -33.362772118,
		longitude: -67.97378607,
		municipalityId: 1501
	},
	{
		id: 3632,
		name: 'BANDERITA',
		uta2020: '501120112000010',
		uta2010: '501120112000010',
		latitude: -33.21390152,
		longitude: -67.734695435,
		municipalityId: 1501
	},
	{
		id: 3633,
		name: 'COLONIA WALTER MOSS',
		uta2020: '300889785000012',
		uta2010: '300889785000012',
		latitude: -31.364642364,
		longitude: -58.634441401,
		municipalityId: 1763
	},
	{
		id: 3634,
		name: 'COLONIA LA ARMONIA',
		uta2020: '300889785000003',
		uta2010: '300889785000003',
		latitude: -31.281746065,
		longitude: -58.586298025,
		municipalityId: 1763
	},
	{
		id: 3635,
		name: 'LA PLAYA',
		uta2020: '140702385050000',
		uta2010: '140702385050000',
		latitude: -31.035025744,
		longitude: -65.345312225,
		municipalityId: 82
	},
	{
		id: 3636,
		name: 'RIVADAVIA',
		uta2020: '820703183000039',
		uta2010: '820703183000039',
		latitude: -31.3087151,
		longitude: -61.0125869,
		municipalityId: 871
	},
	{
		id: 3637,
		name: 'LAS PALMERAS',
		uta2020: '820913596170000',
		uta2010: '820913596170000',
		latitude: -30.632634583,
		longitude: -61.627723389,
		municipalityId: 840
	},
	{
		id: 3638,
		name: 'LOS AGUIRRES',
		uta2020: '460840084000058',
		uta2010: '460840084000058',
		latitude: -30.805494179,
		longitude: -66.092842038,
		municipalityId: 2002
	},
	{
		id: 3639,
		name: 'POZO DEL MEDIO',
		uta2020: '460840084000070',
		uta2010: '460840084000070',
		latitude: -31.0232811,
		longitude: -65.889341394,
		municipalityId: 2002
	},
	{
		id: 3640,
		name: 'LA COLONIA',
		uta2020: '460840084000037',
		uta2010: '460840084000037',
		latitude: -30.963519316,
		longitude: -66.176778145,
		municipalityId: 2002
	},
	{
		id: 3641,
		name: 'MOLLACO',
		uta2020: '460840084000041',
		uta2010: '460840084000041',
		latitude: -30.975303184,
		longitude: -66.414764827,
		municipalityId: 2002
	},
	{
		id: 3642,
		name: 'MILAGRO',
		uta2020: '460840084030000',
		uta2010: '460840084030000',
		latitude: -31.013171752,
		longitude: -65.988255454,
		municipalityId: 2002
	},
	{
		id: 3643,
		name: 'EL QUEMADO',
		uta2020: '460840084000025',
		uta2010: '460840084000025',
		latitude: -30.980688758,
		longitude: -66.346782973,
		municipalityId: 2002
	},
	{
		id: 3644,
		name: 'MOLLACO',
		uta2020: '460840084000064',
		uta2010: '460840084000064',
		latitude: -30.976285934,
		longitude: -66.41934967,
		municipalityId: 2002
	},
	{
		id: 3645,
		name: 'SAN RAMON',
		uta2020: '460840084000079',
		uta2010: '460840084000079',
		latitude: -30.97477148,
		longitude: -65.79596094,
		municipalityId: 2002
	},
	{
		id: 3646,
		name: 'LAS CORTADERAS',
		uta2020: '460840084000054',
		uta2010: '460840084000054',
		latitude: -31.048937287,
		longitude: -66.435757068,
		municipalityId: 2002
	},
	{
		id: 3647,
		name: 'SAN JOSE',
		uta2020: '460840084000076',
		uta2010: '460840084000076',
		latitude: -30.882893758,
		longitude: -66.19546148,
		municipalityId: 2002
	},
	{
		id: 3648,
		name: 'SAN ROQUE',
		uta2020: '460840084000080',
		uta2010: '460840084000080',
		latitude: -30.831159592,
		longitude: -66.075782776,
		municipalityId: 2002
	},
	{
		id: 3649,
		name: 'LA MARAVILLA',
		uta2020: '460840084000046',
		uta2010: '460840084000046',
		latitude: -30.80844307,
		longitude: -65.830810547,
		municipalityId: 2002
	},
	{
		id: 3650,
		name: 'AGUADITA DE LOS PERALTA',
		uta2020: '460840084000004',
		uta2010: '460840084000004',
		latitude: -30.775830205,
		longitude: -66.24760971,
		municipalityId: 2002
	},
	{
		id: 3651,
		name: 'LA REPRESA',
		uta2020: '460840084000050',
		uta2010: '460840084000050',
		latitude: -30.82244873,
		longitude: -66.202102661,
		municipalityId: 2002
	},
	{
		id: 3652,
		name: 'OLPAS',
		uta2020: '460840084040000',
		uta2010: '460840084040000',
		latitude: -30.819524238,
		longitude: -66.248310067,
		municipalityId: 2002
	},
	{
		id: 3653,
		name: 'RIO GRANDE',
		uta2020: '460840084000073',
		uta2010: '460840084000073',
		latitude: -31.056594517,
		longitude: -66.39897581,
		municipalityId: 2002
	},
	{
		id: 3654,
		name: 'SAN CRISTOBAL',
		uta2020: '460840084000074',
		uta2010: '460840084000074',
		latitude: -30.873639459,
		longitude: -65.927622123,
		municipalityId: 2002
	},
	{
		id: 3655,
		name: 'LA BARRERA',
		uta2020: '460840084000035',
		uta2010: '460840084000035',
		latitude: -30.785943985,
		longitude: -66.176765442,
		municipalityId: 2002
	},
	{
		id: 3656,
		name: 'AGUA COLORADA',
		uta2020: '460840084000001',
		uta2010: '460840084000001',
		latitude: -30.878257752,
		longitude: -66.180053711,
		municipalityId: 2002
	},
	{
		id: 3657,
		name: 'EL CERCO',
		uta2020: '460840084000019',
		uta2010: '460840084000019',
		latitude: -31.105102599,
		longitude: -66.430928658,
		municipalityId: 2002
	},
	{
		id: 3658,
		name: 'LA BANDERITA',
		uta2020: '460840084000034',
		uta2010: '460840084000034',
		latitude: -31.33261755,
		longitude: -65.89613096,
		municipalityId: 2002
	},
	{
		id: 3659,
		name: 'LA DORADA',
		uta2020: '460840084000039',
		uta2010: '460840084000039',
		latitude: -31.03788727,
		longitude: -66.309178086,
		municipalityId: 2002
	},
	{
		id: 3660,
		name: 'SANTA RITA DE CATUNA',
		uta2020: '460840084050000',
		uta2010: '460840084050000',
		latitude: -30.966519836,
		longitude: -66.235660796,
		municipalityId: 2002
	},
	{
		id: 3661,
		name: 'LA RIPIEDRA',
		uta2020: '460840084000052',
		uta2010: '460840084000052',
		latitude: -31.33037112,
		longitude: -66.00565729,
		municipalityId: 2002
	},
	{
		id: 3662,
		name: 'LA MARUJA',
		uta2020: '460840084000047',
		uta2010: '460840084000047',
		latitude: -30.84602905,
		longitude: -66.06045047,
		municipalityId: 2002
	},
	{
		id: 3663,
		name: 'EL FRAILE',
		uta2020: '460840084000022',
		uta2010: '460840084000022',
		latitude: -31.06224058,
		longitude: -65.94083777,
		municipalityId: 2002
	},
	{
		id: 3664,
		name: 'LOS TELLOS',
		uta2020: '460840084000063',
		uta2010: '460840084000063',
		latitude: -30.96789949,
		longitude: -65.93517949,
		municipalityId: 2002
	},
	{
		id: 3665,
		name: 'AMBIL',
		uta2020: '460840084010000',
		uta2010: '460840084010000',
		latitude: -31.141335928,
		longitude: -66.360381938,
		municipalityId: 2002
	},
	{
		id: 3666,
		name: 'COLONIA ORTIZ DE OCAMPO',
		uta2020: '460840084020000',
		uta2010: '460840084020000',
		latitude: -30.975290949,
		longitude: -66.19538838,
		municipalityId: 2002
	},
	{
		id: 3667,
		name: 'EL BARRANCO',
		uta2020: '460840084000017',
		uta2010: '460840084000017',
		latitude: -30.897706986,
		longitude: -66.355293274,
		municipalityId: 2002
	},
	{
		id: 3668,
		name: 'LOS BARRIALITOS',
		uta2020: '460840084000060',
		uta2010: '460840084000060',
		latitude: -30.98551632,
		longitude: -66.05022018,
		municipalityId: 2002
	},
	{
		id: 3669,
		name: 'TORRECITAS',
		uta2020: '460840084000084',
		uta2010: '460840084000084',
		latitude: -30.91938797,
		longitude: -66.1322537,
		municipalityId: 2002
	},
	{
		id: 3670,
		name: 'LA ISLA',
		uta2020: '460840084000042',
		uta2010: '460840084000042',
		latitude: -31.231727935,
		longitude: -65.96163844,
		municipalityId: 2002
	},
	{
		id: 3671,
		name: 'LA PLAYA',
		uta2020: '460840084000048',
		uta2010: '460840084000048',
		latitude: -30.999440745,
		longitude: -66.462915231,
		municipalityId: 2002
	},
	{
		id: 3672,
		name: 'LOS MISTOLES',
		uta2020: '460840084000061',
		uta2010: '460840084000061',
		latitude: -30.801229059,
		longitude: -66.312903741,
		municipalityId: 2002
	},
	{
		id: 3673,
		name: 'ESQUINA GRANDE',
		uta2020: '460840084000029',
		uta2010: '460840084000029',
		latitude: -30.94926669,
		longitude: -66.05310473,
		municipalityId: 2002
	},
	{
		id: 3674,
		name: 'BALDE SALADO',
		uta2020: '460840084000008',
		uta2010: '460840084000008',
		latitude: -31.194143295,
		longitude: -65.867240906,
		municipalityId: 2002
	},
	{
		id: 3675,
		name: 'LA AGUADITA',
		uta2020: '460840084000033',
		uta2010: '460840084000033',
		latitude: -31.098190308,
		longitude: -66.341255188,
		municipalityId: 2002
	},
	{
		id: 3676,
		name: 'SAN PEDRO',
		uta2020: '460840084000078',
		uta2010: '460840084000078',
		latitude: -31.10355146,
		longitude: -65.8655371,
		municipalityId: 2002
	},
	{
		id: 3677,
		name: 'YERBA BUENA',
		uta2020: '660560154000356',
		uta2010: '660560154000356',
		latitude: -22.085733414,
		longitude: -63.677333832,
		municipalityId: 1849
	},
	{
		id: 3678,
		name: 'TUYUNTI',
		uta2020: '660560154000345',
		uta2010: '660560154000345',
		latitude: -22.053867748,
		longitude: -63.684936822,
		municipalityId: 1849
	},
	{
		id: 3679,
		name: 'SAUZAL',
		uta2020: '660560154000325',
		uta2010: '660560154000325',
		latitude: -22.016450013,
		longitude: -63.663412373,
		municipalityId: 1849
	},
	{
		id: 3680,
		name: 'PROFESOR SALVADOR MAZZA',
		uta2020: '660560154200000',
		uta2010: '660560154200000',
		latitude: -22.054263442,
		longitude: -63.687282965,
		municipalityId: 1849
	},
	{
		id: 3681,
		name: 'EL CHORRO',
		uta2020: '660560154000071',
		uta2010: '660560154000071',
		latitude: -22.02581,
		longitude: -63.69059,
		municipalityId: 1849
	},
	{
		id: 3682,
		name: 'EL OCULTO',
		uta2020: '660560154000085',
		uta2010: '660560154000085',
		latitude: -22.03412056,
		longitude: -63.803333282,
		municipalityId: 1849
	},
	{
		id: 3683,
		name: 'PLAYA ANCHA',
		uta2020: '660560154000254',
		uta2010: '660560154000254',
		latitude: -22.101657867,
		longitude: -63.680786133,
		municipalityId: 1849
	},
	{
		id: 3684,
		name: 'EL ALGARROBAL',
		uta2020: '660560154000057',
		uta2010: '660560154000057',
		latitude: -22.191269602,
		longitude: -63.63708816,
		municipalityId: 1849
	},
	{
		id: 3685,
		name: 'CAMPO DURAN',
		uta2020: '660560154040000',
		uta2010: '660560154040000',
		latitude: -22.192519119,
		longitude: -63.65561665,
		municipalityId: 1849
	},
	{
		id: 3686,
		name: 'LOS YACONES',
		uta2020: '660770196000046',
		uta2010: '660770196000046',
		latitude: -24.62766,
		longitude: -65.45747,
		municipalityId: 1824
	},
	{
		id: 3687,
		name: 'VAQUEROS',
		uta2020: '660770196020000',
		uta2010: '660770196020000',
		latitude: -24.694521192,
		longitude: -65.402694419,
		municipalityId: 1824
	},
	{
		id: 3688,
		name: 'LESSER',
		uta2020: '660770196000038',
		uta2010: '660770196000038',
		latitude: -24.67813859,
		longitude: -65.477729591,
		municipalityId: 1824
	},
	{
		id: 3689,
		name: 'SECLANTAS',
		uta2020: '661190287030000',
		uta2010: '661190287030000',
		latitude: -25.330509957,
		longitude: -66.248446623,
		municipalityId: 1865
	},
	{
		id: 3690,
		name: 'SECLANTAS ADENTRO',
		uta2020: '661190287000057',
		uta2010: '661190287000057',
		latitude: -25.298129046,
		longitude: -66.252608006,
		municipalityId: 1865
	},
	{
		id: 3691,
		name: 'FRAY LUIS BELTRAN',
		uta2020: '821190280050000',
		uta2010: '821190280050000',
		latitude: -32.785558188,
		longitude: -60.729123644,
		municipalityId: 1069
	},
	{
		id: 3692,
		name: 'LAGUNA LIMPIA',
		uta2020: '220840273040000',
		uta2010: '220840273040000',
		latitude: -26.496701391,
		longitude: -59.679937288,
		municipalityId: 32
	},
	{
		id: 3693,
		name: 'CAMPO PHILIPON',
		uta2020: '220560161000001',
		uta2010: '220560161000001',
		latitude: -27.1738508,
		longitude: -59.26113326,
		municipalityId: 3
	},
	{
		id: 3694,
		name: 'MAKALLE',
		uta2020: '220560161040000',
		uta2010: '220560161040000',
		latitude: -27.211618544,
		longitude: -59.288366213,
		municipalityId: 3
	},
	{
		id: 3695,
		name: 'COLONIA PASTORIL',
		uta2020: '340145014010000',
		uta2010: '340145014010000',
		latitude: -25.670140461,
		longitude: -58.262630283,
		municipalityId: 2282
	},
	{
		id: 3696,
		name: 'BOMBAL',
		uta2020: '820282420040000',
		uta2010: '820282420040000',
		latitude: -33.460061522,
		longitude: -61.318932439,
		municipalityId: 726
	},
	{
		id: 3697,
		name: 'CAMPO CUCO',
		uta2020: '820282420000001',
		uta2010: '820282420000001',
		latitude: -33.3790173,
		longitude: -61.3544315,
		municipalityId: 726
	},
	{
		id: 3698,
		name: 'COLONIA RAQUEL',
		uta2020: '820212196120000',
		uta2010: '820212196120000',
		latitude: -30.839223557,
		longitude: -61.489711164,
		municipalityId: 754
	},
	{
		id: 3699,
		name: 'TABOSSI',
		uta2020: '300840357250000',
		uta2010: '300840357250000',
		latitude: -31.804707756,
		longitude: -59.93791516,
		municipalityId: 1725
	},
	{
		id: 3700,
		name: 'COLONIA GUARAYPO',
		uta2020: '540840343000005',
		uta2010: '540840343000005',
		latitude: -26.536899654,
		longitude: -54.64963662,
		municipalityId: 2150
	},
	{
		id: 3701,
		name: 'LAHARRAGUE',
		uta2020: '540840343020000',
		uta2010: '540840343020000',
		latitude: -26.532818827,
		longitude: -54.650673654,
		municipalityId: 2150
	},
	{
		id: 3702,
		name: 'BARIO ITA',
		uta2020: '540840343007000',
		uta2010: '540840343007000',
		latitude: -26.528325758,
		longitude: -54.70891799,
		municipalityId: 2150
	},
	{
		id: 3703,
		name: 'PUERTO LAHARRAGUE',
		uta2020: '540840343000022',
		uta2010: '540840343000022',
		latitude: -26.501554489,
		longitude: -54.754333496,
		municipalityId: 2150
	},
	{
		id: 3704,
		name: 'GUATAMBU',
		uta2020: '540840343000010',
		uta2010: '540840343000010',
		latitude: -26.591955723,
		longitude: -54.713957001,
		municipalityId: 2150
	},
	{
		id: 3705,
		name: 'BARRIO GUATAMBU',
		uta2020: '540840343005000',
		uta2010: '540840343005000',
		latitude: -26.602793298,
		longitude: -54.695580783,
		municipalityId: 2150
	},
	{
		id: 3706,
		name: 'BARRIO CUATRO BOCAS',
		uta2020: '540840343003000',
		uta2010: '540840343003000',
		latitude: -26.548220944,
		longitude: -54.674883668,
		municipalityId: 2150
	},
	{
		id: 3707,
		name: 'MONTECARLO',
		uta2020: '540840343030000',
		uta2010: '540840343030000',
		latitude: -26.566176491,
		longitude: -54.76142674,
		municipalityId: 2150
	},
	{
		id: 3708,
		name: 'LOMAS DE ZAMORA',
		uta2020: '064900490010003',
		uta2010: '064900490010003',
		latitude: -34.762767641,
		longitude: -58.42679039,
		municipalityId: 619
	},
	{
		id: 3709,
		name: 'BANFIELD',
		uta2020: '064900490010001',
		uta2010: '064900490010001',
		latitude: -34.737902715,
		longitude: -58.440675369,
		municipalityId: 619
	},
	{
		id: 3710,
		name: 'LLAVALLOL',
		uta2020: '064900490010002',
		uta2010: '064900490010002',
		latitude: -34.794618234,
		longitude: -58.432090852,
		municipalityId: 619
	},
	{
		id: 3711,
		name: 'VILLA FIORITO',
		uta2020: '064900490010007',
		uta2010: '064900490010007',
		latitude: -34.706710403,
		longitude: -58.44513045,
		municipalityId: 619
	},
	{
		id: 3712,
		name: 'TEMPERLEY',
		uta2020: '064900490010004',
		uta2010: '064900490010004',
		latitude: -34.767486625,
		longitude: -58.378046134,
		municipalityId: 619
	},
	{
		id: 3713,
		name: 'VILLA CENTENARIO',
		uta2020: '064900490010006',
		uta2010: '064900490010006',
		latitude: -34.728993296,
		longitude: -58.428343642,
		municipalityId: 619
	},
	{
		id: 3714,
		name: 'TURDERA',
		uta2020: '064900490010005',
		uta2010: '064900490010005',
		latitude: -34.789560716,
		longitude: -58.404105649,
		municipalityId: 619
	},
	{
		id: 3715,
		name: 'FALUCHO',
		uta2020: '421335063050000',
		uta2010: '421335063050000',
		latitude: -35.189081443,
		longitude: -64.103873225,
		municipalityId: 1930
	},
	{
		id: 3716,
		name: 'AGUA DEL OVERO',
		uta2020: '580210000000001',
		uta2010: '580210000000001',
		latitude: -39.314510533,
		longitude: -70.154038951,
		municipalityId: 2355
	},
	{
		id: 3717,
		name: 'BELISLE',
		uta2020: '580210000000005',
		uta2010: '580210000000005',
		latitude: -39.351066589,
		longitude: -70.692672729,
		municipalityId: 2355
	},
	{
		id: 3718,
		name: 'CASA DE PIEDRA',
		uta2020: '580210000000009',
		uta2010: '580210000000009',
		latitude: -39.206676483,
		longitude: -70.499275208,
		municipalityId: 2355
	},
	{
		id: 3719,
		name: 'BAJADA DE LOS MOLLES',
		uta2020: '580210000000004',
		uta2010: '580210000000004',
		latitude: -39.18386897,
		longitude: -70.26950604,
		municipalityId: 2355
	},
	{
		id: 3720,
		name: 'EL RINCON',
		uta2020: '580210000000021',
		uta2010: '580210000000021',
		latitude: -39.789318085,
		longitude: -70.518226623,
		municipalityId: 2355
	},
	{
		id: 3721,
		name: 'CATATUN',
		uta2020: '580210000000011',
		uta2010: '580210000000011',
		latitude: -39.374263763,
		longitude: -70.745521545,
		municipalityId: 2355
	},
	{
		id: 3722,
		name: 'CHACAYCO',
		uta2020: '580210000000017',
		uta2010: '580210000000017',
		latitude: -39.317105778,
		longitude: -70.343724883,
		municipalityId: 2355
	},
	{
		id: 3723,
		name: 'CATAN LIL',
		uta2020: '580210000000010',
		uta2010: '580210000000010',
		latitude: -39.743057251,
		longitude: -70.607429504,
		municipalityId: 2355
	},
	{
		id: 3724,
		name: 'LA NEGRA',
		uta2020: '580210000000031',
		uta2010: '580210000000031',
		latitude: -39.546772003,
		longitude: -70.341293335,
		municipalityId: 2355
	},
	{
		id: 3725,
		name: 'LAPA',
		uta2020: '580210000000035',
		uta2010: '580210000000035',
		latitude: -39.389591217,
		longitude: -70.428672791,
		municipalityId: 2355
	},
	{
		id: 3726,
		name: 'MEDIA LUNA',
		uta2020: '580210000000044',
		uta2010: '580210000000044',
		latitude: -39.43266976,
		longitude: -70.48619861,
		municipalityId: 2355
	},
	{
		id: 3727,
		name: 'LAS CORTADERAS',
		uta2020: '580210000000038',
		uta2010: '580210000000038',
		latitude: -39.396407647,
		longitude: -70.190355481,
		municipalityId: 2355
	},
	{
		id: 3728,
		name: 'COSTA DEL CATAN LIL',
		uta2020: '580210000000018',
		uta2010: '580210000000018',
		latitude: -39.80029584,
		longitude: -70.7581637,
		municipalityId: 2355
	},
	{
		id: 3729,
		name: 'ESPINAZO DEL ZORRO',
		uta2020: '580210000000024',
		uta2010: '580210000000024',
		latitude: -39.291278839,
		longitude: -70.616508484,
		municipalityId: 2355
	},
	{
		id: 3730,
		name: 'LOS REMOLINOS',
		uta2020: '580210000000040',
		uta2010: '580210000000040',
		latitude: -39.75189209,
		longitude: -70.710014343,
		municipalityId: 2355
	},
	{
		id: 3731,
		name: 'EL SALITRAL',
		uta2020: '580210000000022',
		uta2010: '580210000000022',
		latitude: -39.82513612,
		longitude: -70.6250243,
		municipalityId: 2355
	},
	{
		id: 3732,
		name: 'EL SAUCE',
		uta2020: '580210000000023',
		uta2010: '580210000000023',
		latitude: -39.66767259,
		longitude: -70.14119771,
		municipalityId: 2355
	},
	{
		id: 3733,
		name: 'LA PICAZA',
		uta2020: '580210000000032',
		uta2010: '580210000000032',
		latitude: -39.604019165,
		longitude: -70.117729187,
		municipalityId: 2355
	},
	{
		id: 3734,
		name: 'PASO BLANCO',
		uta2020: '301139950000085',
		uta2010: '301139950000085',
		latitude: -31.499843648,
		longitude: -59.118323231,
		municipalityId: 1661
	},
	{
		id: 3735,
		name: 'MOJONES NORTE',
		uta2020: '301139950000079',
		uta2010: '301139950000079',
		latitude: -31.50832376,
		longitude: -59.200889846,
		municipalityId: 1661
	},
	{
		id: 3736,
		name: 'MARIANO MORENO',
		uta2020: '540560196000028',
		uta2010: '540560196000028',
		latitude: -27.366389,
		longitude: -54.227239,
		municipalityId: 2153
	},
	{
		id: 3737,
		name: 'MONTEAGUDO',
		uta2020: '540560196000033',
		uta2010: '540560196000033',
		latitude: -27.284549766,
		longitude: -54.096246822,
		municipalityId: 2153
	},
	{
		id: 3738,
		name: 'PEPIRI MINI',
		uta2020: '540560196000035',
		uta2010: '540560196000035',
		latitude: -27.16623592,
		longitude: -53.96285431,
		municipalityId: 2153
	},
	{
		id: 3739,
		name: 'MARTIN GÑEMES',
		uta2020: '540560196000029',
		uta2010: '540560196000029',
		latitude: -27.32368193,
		longitude: -54.23939777,
		municipalityId: 2153
	},
	{
		id: 3740,
		name: 'COLONIA PRIMAVERA',
		uta2020: '540560196000009',
		uta2010: '540560196000009',
		latitude: -27.129076832,
		longitude: -54.151352811,
		municipalityId: 2153
	},
	{
		id: 3741,
		name: 'EL SOBERBIO',
		uta2020: '540560196010000',
		uta2010: '540560196010000',
		latitude: -27.290860102,
		longitude: -54.200777746,
		municipalityId: 2153
	},
	{
		id: 3742,
		name: 'LA BONITA',
		uta2020: '540560196000024',
		uta2010: '540560196000024',
		latitude: -27.047252824,
		longitude: -54.114942465,
		municipalityId: 2153
	},
	{
		id: 3743,
		name: 'ANDRESITO (EL SOBERBIO)',
		uta2020: '540560196000004',
		uta2010: '540560196000004',
		latitude: -27.230711492,
		longitude: -54.178775578,
		municipalityId: 2153
	},
	{
		id: 3744,
		name: 'FRAY LUIS BELTRAN',
		uta2020: '540560196000019',
		uta2010: '540560196000019',
		latitude: -27.376112732,
		longitude: -54.276319087,
		municipalityId: 2153
	},
	{
		id: 3745,
		name: 'PICADA GUARANI',
		uta2020: '540560196000038',
		uta2010: '540560196000038',
		latitude: -27.22040533,
		longitude: -54.355892033,
		municipalityId: 2153
	},
	{
		id: 3746,
		name: 'EL BOTON (EL SOBERBIO)',
		uta2020: '540560196000013',
		uta2010: '540560196000013',
		latitude: -27.155804472,
		longitude: -54.141447463,
		municipalityId: 2153
	},
	{
		id: 3747,
		name: 'NUEVA (EL SOBERBIO)',
		uta2020: '540560196000034',
		uta2010: '540560196000034',
		latitude: -26.850279713,
		longitude: -54.222492651,
		municipalityId: 2153
	},
	{
		id: 3748,
		name: 'ARROYO BONITO (EL SOBERBIO)',
		uta2020: '540560196000005',
		uta2010: '540560196000005',
		latitude: -27.256589364,
		longitude: -54.320413204,
		municipalityId: 2153
	},
	{
		id: 3749,
		name: 'EL PALENQUE',
		uta2020: '300849645080000',
		uta2010: '300849645080000',
		latitude: -31.662574809,
		longitude: -60.175114482,
		municipalityId: 1726
	},
	{
		id: 3750,
		name: 'COLONIA CRESPO',
		uta2020: '300849645065000',
		uta2010: '300849645065000',
		latitude: -31.677772701,
		longitude: -60.243688089,
		municipalityId: 1726
	},
	{
		id: 3751,
		name: 'CARMONA',
		uta2020: '300849645000024',
		uta2010: '300849645000024',
		latitude: -31.71868146,
		longitude: -60.213851592,
		municipalityId: 1726
	},
	{
		id: 3752,
		name: 'BUTA RANQUIL',
		uta2020: '580910203020000',
		uta2010: '580910203020000',
		latitude: -37.050787606,
		longitude: -69.873851086,
		municipalityId: 2392
	},
	{
		id: 3753,
		name: 'AGUADA CHACAYCO',
		uta2020: '580910203000002',
		uta2010: '580910203000002',
		latitude: -37.379860203,
		longitude: -70.076654278,
		municipalityId: 2392
	},
	{
		id: 3754,
		name: 'LAGUNA AUQUINCO',
		uta2020: '580910203000022',
		uta2010: '580910203000022',
		latitude: -37.31896702,
		longitude: -69.96571452,
		municipalityId: 2392
	},
	{
		id: 3755,
		name: 'RANQUIL VEGA',
		uta2020: '580910203000030',
		uta2010: '580910203000030',
		latitude: -37.069668282,
		longitude: -69.774616954,
		municipalityId: 2392
	},
	{
		id: 3756,
		name: 'SAN PEDRO',
		uta2020: '860496392090000',
		uta2010: '860496392090000',
		latitude: -27.955073986,
		longitude: -64.107899764,
		municipalityId: 1353
	},
	{
		id: 3757,
		name: 'COLONIA SAN JUAN',
		uta2020: '300770000000018',
		uta2010: '300770000000018',
		latitude: -32.496192932,
		longitude: -59.700035095,
		municipalityId: 1702
	},
	{
		id: 3758,
		name: 'COLONIA LA ESPERANZA',
		uta2020: '300770000000014',
		uta2010: '300770000000014',
		latitude: -32.46772695,
		longitude: -59.59129676,
		municipalityId: 1702
	},
	{
		id: 3759,
		name: 'COLONIA LA LLAVE',
		uta2020: '300770000000015',
		uta2010: '300770000000015',
		latitude: -32.529440449,
		longitude: -59.582269825,
		municipalityId: 1702
	},
	{
		id: 3760,
		name: 'ALGARROBITOS',
		uta2020: '300770000000005',
		uta2010: '300770000000005',
		latitude: -32.31594522,
		longitude: -59.799823559,
		municipalityId: 1702
	},
	{
		id: 3761,
		name: 'CAMPO MICHELOUD',
		uta2020: '300770000000011',
		uta2010: '300770000000011',
		latitude: -31.966604046,
		longitude: -59.93025784,
		municipalityId: 1702
	},
	{
		id: 3762,
		name: 'COLONIA OFICIAL 21',
		uta2020: '300770000000017',
		uta2010: '300770000000017',
		latitude: -32.102566346,
		longitude: -59.510385542,
		municipalityId: 1702
	},
	{
		id: 3763,
		name: 'VILLA ADELA',
		uta2020: '300150042060004',
		uta2010: '300150042060004',
		latitude: -31.403742646,
		longitude: -58.039412827,
		municipalityId: 1797
	},
	{
		id: 3764,
		name: 'CAMBA PASO',
		uta2020: '300150042000007',
		uta2010: '300150042000007',
		latitude: -31.352304459,
		longitude: -58.05355072,
		municipalityId: 1797
	},
	{
		id: 3765,
		name: 'BENITO LEGEREN',
		uta2020: '300150042060001',
		uta2010: '300150042060001',
		latitude: -31.428878627,
		longitude: -58.076806139,
		municipalityId: 1797
	},
	{
		id: 3766,
		name: 'LAS TEJAS',
		uta2020: '300150042060003',
		uta2010: '300150042060003',
		latitude: -31.411939963,
		longitude: -58.074008249,
		municipalityId: 1797
	},
	{
		id: 3767,
		name: 'VILLA ZORRAQUIN',
		uta2020: '300150042060005',
		uta2010: '300150042060005',
		latitude: -31.329951183,
		longitude: -58.017484845,
		municipalityId: 1797
	},
	{
		id: 3768,
		name: 'CONCORDIA',
		uta2020: '300150042060002',
		uta2010: '300150042060002',
		latitude: -31.368704407,
		longitude: -58.045028843,
		municipalityId: 1797
	},
	{
		id: 3769,
		name: 'EL COLORADO',
		uta2020: '860986490010000',
		uta2010: '860986490010000',
		latitude: -27.917442871,
		longitude: -62.117137896,
		municipalityId: 1368
	},
	{
		id: 3770,
		name: 'ISLA DE CAÑAS',
		uta2020: '660700182020000',
		uta2010: '660700182020000',
		latitude: -22.886420025,
		longitude: -64.657375719,
		municipalityId: 1867
	},
	{
		id: 3771,
		name: 'LUCIO V. MANSILLA',
		uta2020: '141751554060000',
		uta2010: '141751554060000',
		latitude: -29.80637172,
		longitude: -64.706541264,
		municipalityId: 491
	},
	{
		id: 3772,
		name: 'MONTEROS',
		uta2020: '900700084030000',
		uta2010: '900700084030000',
		latitude: -27.167476664,
		longitude: -65.498777449,
		municipalityId: 2204
	},
	{
		id: 3773,
		name: 'ITUZAINGO',
		uta2020: '820703106000026',
		uta2010: '820703106000026',
		latitude: -30.7814056,
		longitude: -61.1753126,
		municipalityId: 872
	},
	{
		id: 3774,
		name: 'TALAINI',
		uta2020: '140702392070000',
		uta2010: '140702392070000',
		latitude: -31.249692473,
		longitude: -65.167200042,
		municipalityId: 83
	},
	{
		id: 3775,
		name: 'COLONIA BISMARCK',
		uta2020: '141821645110000',
		uta2010: '141821645110000',
		latitude: -33.300301709,
		longitude: -62.713298641,
		municipalityId: 98
	},
	{
		id: 3776,
		name: 'CARRI LIL',
		uta2020: '580070000000007',
		uta2010: '580070000000007',
		latitude: -39.19805032,
		longitude: -71.06032829,
		municipalityId: 2397
	},
	{
		id: 3777,
		name: 'RAHUE',
		uta2020: '580070000000038',
		uta2010: '580070000000038',
		latitude: -39.374916077,
		longitude: -70.902755737,
		municipalityId: 2397
	},
	{
		id: 3778,
		name: 'QUILLEN',
		uta2020: '580070000000037',
		uta2010: '580070000000037',
		latitude: -39.375461578,
		longitude: -71.062812805,
		municipalityId: 2397
	},
	{
		id: 3779,
		name: 'ABRA ANCHA',
		uta2020: '580070000000001',
		uta2010: '580070000000001',
		latitude: -39.30917583,
		longitude: -70.92970664,
		municipalityId: 2397
	},
	{
		id: 3780,
		name: 'CURRUMIL QUILLEN',
		uta2020: '580070000000012',
		uta2010: '580070000000012',
		latitude: -39.3755004,
		longitude: -71.07276444,
		municipalityId: 2397
	},
	{
		id: 3781,
		name: 'HARAS PULMARI',
		uta2020: '580070000000020',
		uta2010: '580070000000020',
		latitude: -39.09567643,
		longitude: -70.9990026,
		municipalityId: 2397
	},
	{
		id: 3782,
		name: 'QUILCA',
		uta2020: '580070000000036',
		uta2010: '580070000000036',
		latitude: -39.01536523,
		longitude: -70.87252312,
		municipalityId: 2397
	},
	{
		id: 3783,
		name: 'LONCO MULA',
		uta2020: '580070000000030',
		uta2010: '580070000000030',
		latitude: -39.143548,
		longitude: -71.22882894,
		municipalityId: 2397
	},
	{
		id: 3784,
		name: 'BARRIO LOS PIONEROS',
		uta2020: '061260126020000',
		uta2010: '061260126020000',
		latitude: -34.253040637,
		longitude: -58.958440037,
		municipalityId: 620
	},
	{
		id: 3785,
		name: 'LOMAS DEL RIO LUJAN',
		uta2020: '061260126040000',
		uta2010: '061260126040000',
		latitude: -34.281677064,
		longitude: -58.891190652,
		municipalityId: 620
	},
	{
		id: 3786,
		name: 'EL MOREJON',
		uta2020: '061260126000016',
		uta2010: '061260126000016',
		latitude: -34.2095602,
		longitude: -59.0379424,
		municipalityId: 620
	},
	{
		id: 3787,
		name: 'ESTACION ESPERIMENTAL DELTA DEL PARANA',
		uta2020: '061260126000017',
		uta2010: '061260126000017',
		latitude: -34.173752,
		longitude: -58.8628243,
		municipalityId: 620
	},
	{
		id: 3788,
		name: 'BLONDEAU',
		uta2020: '061260126000013',
		uta2010: '061260126000013',
		latitude: -34.059934,
		longitude: -58.836065,
		municipalityId: 620
	},
	{
		id: 3789,
		name: 'CHACRAS DEL RIO LUJAN',
		uta2020: '061260126035000',
		uta2010: '061260126035000',
		latitude: -34.293415323,
		longitude: -58.921199044,
		municipalityId: 620
	},
	{
		id: 3790,
		name: 'ALTO LOS CARDALES',
		uta2020: '061260126010000',
		uta2010: '061260126010000',
		latitude: -34.316024369,
		longitude: -58.978457482,
		municipalityId: 620
	},
	{
		id: 3791,
		name: 'LA GRANJA',
		uta2020: '061260126000020',
		uta2010: '061260126000020',
		latitude: -34.202480001,
		longitude: -58.828800012,
		municipalityId: 620
	},
	{
		id: 3792,
		name: 'CAMPANA',
		uta2020: '061260126030000',
		uta2010: '061260126030000',
		latitude: -34.163961812,
		longitude: -58.958874104,
		municipalityId: 620
	},
	{
		id: 3793,
		name: 'ISLA TALAVERA',
		uta2020: '061260126000018',
		uta2010: '061260126000018',
		latitude: -33.968385,
		longitude: -58.9665118,
		municipalityId: 620
	},
	{
		id: 3794,
		name: 'DOS HERMANAS',
		uta2020: '300569375000085',
		uta2010: '300569375000085',
		latitude: -33.220262469,
		longitude: -58.850751863,
		municipalityId: 1625
	},
	{
		id: 3795,
		name: 'LAS MERCEDES',
		uta2020: '300569375000103',
		uta2010: '300569375000103',
		latitude: -33.16320678,
		longitude: -58.90074061,
		municipalityId: 1625
	},
	{
		id: 3796,
		name: 'COLONIA 3 DE FEBRERO',
		uta2020: '300709415000020',
		uta2010: '300709415000020',
		latitude: -31.372534919,
		longitude: -59.695860792,
		municipalityId: 1583
	},
	{
		id: 3797,
		name: 'COLONIA TABOADA',
		uta2020: '300709415000035',
		uta2010: '300709415000035',
		latitude: -31.317427638,
		longitude: -59.659842957,
		municipalityId: 1583
	},
	{
		id: 3798,
		name: 'CAMPO JOURBET',
		uta2020: '300709415000011',
		uta2010: '300709415000011',
		latitude: -31.3626382,
		longitude: -59.625690704,
		municipalityId: 1583
	},
	{
		id: 3799,
		name: 'LOS MOLLES',
		uta2020: '100140035000070',
		uta2010: '100140035000070',
		latitude: -29.119796753,
		longitude: -65.396270752,
		municipalityId: 1911
	},
	{
		id: 3800,
		name: 'SAN FRANCISCO',
		uta2020: '100140035000086',
		uta2010: '100140035000086',
		latitude: -28.964917671,
		longitude: -65.423367683,
		municipalityId: 1911
	},
	{
		id: 3801,
		name: 'LOS MOGOTES',
		uta2020: '100140035000069',
		uta2010: '100140035000069',
		latitude: -29.30727,
		longitude: -65.55448,
		municipalityId: 1911
	},
	{
		id: 3802,
		name: 'EL COMEDERO',
		uta2020: '100140035000026',
		uta2010: '100140035000026',
		latitude: -28.931358924,
		longitude: -65.578501683,
		municipalityId: 1911
	},
	{
		id: 3803,
		name: 'EL MOJON',
		uta2020: '100140035000028',
		uta2010: '100140035000028',
		latitude: -28.62642062,
		longitude: -65.34825834,
		municipalityId: 1911
	},
	{
		id: 3804,
		name: 'LA MAJADA',
		uta2020: '100140035040000',
		uta2010: '100140035040000',
		latitude: -29.029510764,
		longitude: -65.549956769,
		municipalityId: 1911
	},
	{
		id: 3805,
		name: 'IPIZCA',
		uta2020: '100140035000044',
		uta2010: '100140035000044',
		latitude: -28.851394653,
		longitude: -65.557655334,
		municipalityId: 1911
	},
	{
		id: 3806,
		name: 'AMANA',
		uta2020: '100140035000007',
		uta2010: '100140035000007',
		latitude: -28.926935319,
		longitude: -65.520772291,
		municipalityId: 1911
	},
	{
		id: 3807,
		name: 'CONCEPCION',
		uta2020: '100140035000015',
		uta2010: '100140035000015',
		latitude: -28.667535782,
		longitude: -65.366767883,
		municipalityId: 1911
	},
	{
		id: 3808,
		name: 'SAN JOSE',
		uta2020: '100140035000087',
		uta2010: '100140035000087',
		latitude: -28.68407,
		longitude: -65.47709,
		municipalityId: 1911
	},
	{
		id: 3809,
		name: 'LA FALDA',
		uta2020: '100140035000053',
		uta2010: '100140035000053',
		latitude: -28.76651001,
		longitude: -65.422729492,
		municipalityId: 1911
	},
	{
		id: 3810,
		name: 'EL SAUCE',
		uta2020: '100140035000033',
		uta2010: '100140035000033',
		latitude: -28.76511,
		longitude: -65.47706,
		municipalityId: 1911
	},
	{
		id: 3811,
		name: 'NAVAGUIN',
		uta2020: '100140035000074',
		uta2010: '100140035000074',
		latitude: -29.089276609,
		longitude: -65.433897753,
		municipalityId: 1911
	},
	{
		id: 3812,
		name: 'ANCASTI',
		uta2020: '100140035010000',
		uta2010: '100140035010000',
		latitude: -28.809829767,
		longitude: -65.502102,
		municipalityId: 1911
	},
	{
		id: 3813,
		name: 'ANQUINCILA',
		uta2020: '100140035020000',
		uta2010: '100140035020000',
		latitude: -28.754593647,
		longitude: -65.54951028,
		municipalityId: 1911
	},
	{
		id: 3814,
		name: 'POTRERO DE LOS CORDOBA',
		uta2020: '100140035000079',
		uta2010: '100140035000079',
		latitude: -28.89277,
		longitude: -65.47126,
		municipalityId: 1911
	},
	{
		id: 3815,
		name: 'EL HUAYCO',
		uta2020: '100140035000027',
		uta2010: '100140035000027',
		latitude: -28.74791,
		longitude: -65.63759,
		municipalityId: 1911
	},
	{
		id: 3816,
		name: 'LA CANDELARIA',
		uta2020: '100140035030000',
		uta2010: '100140035030000',
		latitude: -28.72076229,
		longitude: -65.410691737,
		municipalityId: 1911
	},
	{
		id: 3817,
		name: 'CASA ARMADA',
		uta2020: '100140035000012',
		uta2010: '100140035000012',
		latitude: -28.666616514,
		longitude: -65.519839635,
		municipalityId: 1911
	},
	{
		id: 3818,
		name: 'RIO CHICO',
		uta2020: '100140035000082',
		uta2010: '100140035000082',
		latitude: -28.944671631,
		longitude: -65.335632324,
		municipalityId: 1911
	},
	{
		id: 3819,
		name: 'TACANA',
		uta2020: '100140035000093',
		uta2010: '100140035000093',
		latitude: -28.64025,
		longitude: -65.57978,
		municipalityId: 1911
	},
	{
		id: 3820,
		name: 'LAS JUNTAS',
		uta2020: '100140035000061',
		uta2010: '100140035000061',
		latitude: -29.076270616,
		longitude: -65.52318121,
		municipalityId: 1911
	},
	{
		id: 3821,
		name: 'RINCO DE IPIZCA',
		uta2020: '100140035000081',
		uta2010: '100140035000081',
		latitude: -28.85097256,
		longitude: -65.561427513,
		municipalityId: 1911
	},
	{
		id: 3822,
		name: 'YERBA BUENA',
		uta2020: '100140035000097',
		uta2010: '100140035000097',
		latitude: -29.005746621,
		longitude: -65.463509496,
		municipalityId: 1911
	},
	{
		id: 3823,
		name: 'EL TALITA',
		uta2020: '100140035000036',
		uta2010: '100140035000036',
		latitude: -28.89762,
		longitude: -65.62059,
		municipalityId: 1911
	},
	{
		id: 3824,
		name: 'EL QUEBRACHAL',
		uta2020: '100140035000031',
		uta2010: '100140035000031',
		latitude: -29.211388838,
		longitude: -65.556311298,
		municipalityId: 1911
	},
	{
		id: 3825,
		name: 'LA ESTANCITA',
		uta2020: '100140035000052',
		uta2010: '100140035000052',
		latitude: -28.82036,
		longitude: -65.43609,
		municipalityId: 1911
	},
	{
		id: 3826,
		name: 'LOS BULACIOS',
		uta2020: '100140035000065',
		uta2010: '100140035000065',
		latitude: -28.701002121,
		longitude: -65.531440735,
		municipalityId: 1911
	},
	{
		id: 3827,
		name: 'EL TACO',
		uta2020: '100140035000034',
		uta2010: '100140035000034',
		latitude: -28.7092,
		longitude: -65.6036,
		municipalityId: 1911
	},
	{
		id: 3828,
		name: 'ADELIA MARIA',
		uta2020: '140980763020000',
		uta2010: '140980763020000',
		latitude: -33.631620222,
		longitude: -64.020837296,
		municipalityId: 442
	},
	{
		id: 3829,
		name: 'PIAMONTE',
		uta2020: '821264121130000',
		uta2010: '821264121130000',
		latitude: -32.145866524,
		longitude: -61.981120218,
		municipalityId: 935
	},
	{
		id: 3830,
		name: 'COLONIA GENERAL FERRE',
		uta2020: '180910189000010',
		uta2010: '180910189000010',
		latitude: -28.808971156,
		longitude: -59.092598658,
		municipalityId: 2020
	},
	{
		id: 3831,
		name: 'CRUZ DE LOS MILAGROS',
		uta2020: '180910189010000',
		uta2010: '180910189010000',
		latitude: -28.835735072,
		longitude: -59.006857834,
		municipalityId: 2020
	},
	{
		id: 3832,
		name: 'CEBOLLAS',
		uta2020: '180070007000003',
		uta2010: '180070007000003',
		latitude: -28.520547455,
		longitude: -58.768687164,
		municipalityId: 2032
	},
	{
		id: 3833,
		name: 'LOMAS ESTE',
		uta2020: '180070007000018',
		uta2010: '180070007000018',
		latitude: -28.515470763,
		longitude: -59.00081067,
		municipalityId: 2032
	},
	{
		id: 3834,
		name: 'CARRIZAL NORTE',
		uta2020: '180070007000002',
		uta2010: '180070007000002',
		latitude: -28.489517068,
		longitude: -59.034120641,
		municipalityId: 2032
	},
	{
		id: 3835,
		name: 'LOMAS NORTE',
		uta2020: '180070007000019',
		uta2010: '180070007000019',
		latitude: -28.469992913,
		longitude: -59.000822062,
		municipalityId: 2032
	},
	{
		id: 3836,
		name: 'LOMAS SUR',
		uta2020: '180070007000020',
		uta2010: '180070007000020',
		latitude: -28.5568532,
		longitude: -58.9876642,
		municipalityId: 2032
	},
	{
		id: 3837,
		name: 'MUCHAS ISLAS',
		uta2020: '180070007000023',
		uta2010: '180070007000023',
		latitude: -28.3842031,
		longitude: -58.7927978,
		municipalityId: 2032
	},
	{
		id: 3838,
		name: 'LAS GARZAS',
		uta2020: '180070007000017',
		uta2010: '180070007000017',
		latitude: -28.454780911,
		longitude: -58.945426053,
		municipalityId: 2032
	},
	{
		id: 3839,
		name: 'COLONIA PROGRESO',
		uta2020: '180070007000006',
		uta2010: '180070007000006',
		latitude: -28.602011921,
		longitude: -58.996508162,
		municipalityId: 2032
	},
	{
		id: 3840,
		name: 'ISLA ALTA',
		uta2020: '180070007000014',
		uta2010: '180070007000014',
		latitude: -28.636228173,
		longitude: -58.896858029,
		municipalityId: 2032
	},
	{
		id: 3841,
		name: 'RAICES NORTE',
		uta2020: '180070007000024',
		uta2010: '180070007000024',
		latitude: -28.345622664,
		longitude: -58.837005575,
		municipalityId: 2032
	},
	{
		id: 3842,
		name: 'BELLA VISTA',
		uta2020: '180070007010000',
		uta2010: '180070007010000',
		latitude: -28.50767725,
		longitude: -59.044332835,
		municipalityId: 2032
	},
	{
		id: 3843,
		name: 'JUAN DIAZ',
		uta2020: '180070007000016',
		uta2010: '180070007000016',
		latitude: -28.538421913,
		longitude: -58.806364675,
		municipalityId: 2032
	},
	{
		id: 3844,
		name: 'DESMOCHADO',
		uta2020: '180070007000007',
		uta2010: '180070007000007',
		latitude: -28.7596235,
		longitude: -58.988433,
		municipalityId: 2032
	},
	{
		id: 3845,
		name: 'WENCESLAO ESCALANTE',
		uta2020: '141821743290000',
		uta2010: '141821743290000',
		latitude: -33.172022848,
		longitude: -62.770000327,
		municipalityId: 99
	},
	{
		id: 3846,
		name: 'LOS MOLINOS',
		uta2020: '820142077090000',
		uta2010: '820142077090000',
		latitude: -33.105489996,
		longitude: -61.326501533,
		municipalityId: 796
	},
	{
		id: 3847,
		name: 'CAMPO FORESSI',
		uta2020: '820142077000003',
		uta2010: '820142077000003',
		latitude: -33.0410222,
		longitude: -61.3680515,
		municipalityId: 796
	},
	{
		id: 3848,
		name: 'PUEBLO BRUGO',
		uta2020: '300849720180000',
		uta2010: '300849720180000',
		latitude: -31.388301593,
		longitude: -60.093833404,
		municipalityId: 1727
	},
	{
		id: 3849,
		name: 'LAS CHACRAS MARAYES',
		uta2020: '700350035000021',
		uta2010: '700350035000021',
		latitude: -31.27914956,
		longitude: -67.5278115,
		municipalityId: 2427
	},
	{
		id: 3850,
		name: 'POZO DE LOS ALGARROBOS',
		uta2020: '700350035000030',
		uta2010: '700350035000030',
		latitude: -31.678552798,
		longitude: -68.231093614,
		municipalityId: 2427
	},
	{
		id: 3851,
		name: 'LAS LIEBRES',
		uta2020: '700350035000022',
		uta2010: '700350035000022',
		latitude: -31.88864367,
		longitude: -66.89317888,
		municipalityId: 2427
	},
	{
		id: 3852,
		name: 'BARRIO JUSTO P. CASTRO IV',
		uta2020: '700350035015000',
		uta2010: '700350035015000',
		latitude: -31.628302558,
		longitude: -68.300827278,
		municipalityId: 2427
	},
	{
		id: 3853,
		name: 'VILLA INDEPENDENCIA',
		uta2020: '700350035080000',
		uta2010: '700350035080000',
		latitude: -31.624529207,
		longitude: -68.313815033,
		municipalityId: 2427
	},
	{
		id: 3854,
		name: 'MARAYES',
		uta2020: '700350035050000',
		uta2010: '700350035050000',
		latitude: -31.477669563,
		longitude: -67.309365188,
		municipalityId: 2427
	},
	{
		id: 3855,
		name: 'DIVISORIA',
		uta2020: '700350035000007',
		uta2010: '700350035000007',
		latitude: -31.70272711,
		longitude: -68.28587359,
		municipalityId: 2427
	},
	{
		id: 3856,
		name: 'EL RINCON',
		uta2020: '700350035030000',
		uta2010: '700350035030000',
		latitude: -31.664879345,
		longitude: -68.321158008,
		municipalityId: 2427
	},
	{
		id: 3857,
		name: 'LAS TALAS',
		uta2020: '700350035040001',
		uta2010: '700350035040001',
		latitude: -31.600956989,
		longitude: -68.297974366,
		municipalityId: 2427
	},
	{
		id: 3858,
		name: 'LOS MEDANOS',
		uta2020: '700350035040002',
		uta2010: '700350035040002',
		latitude: -31.626750476,
		longitude: -68.261858518,
		municipalityId: 2427
	},
	{
		id: 3859,
		name: 'LA PUNTILLA',
		uta2020: '700350035000018',
		uta2010: '700350035000018',
		latitude: -31.6010791,
		longitude: -68.29047776,
		municipalityId: 2427
	},
	{
		id: 3860,
		name: 'LAGUNA SECA',
		uta2020: '700350035000019',
		uta2010: '700350035000019',
		latitude: -31.57696227,
		longitude: -67.52600746,
		municipalityId: 2427
	},
	{
		id: 3861,
		name: 'PIE DE PALO',
		uta2020: '700350035060000',
		uta2010: '700350035060000',
		latitude: -31.66093478,
		longitude: -68.220401549,
		municipalityId: 2427
	},
	{
		id: 3862,
		name: 'LAS CHACRAS',
		uta2020: '700350035000020',
		uta2010: '700350035000020',
		latitude: -31.279571533,
		longitude: -67.532432556,
		municipalityId: 2427
	},
	{
		id: 3863,
		name: 'BERMEJO',
		uta2020: '700350035010000',
		uta2010: '700350035010000',
		latitude: -31.591836354,
		longitude: -67.662362049,
		municipalityId: 2427
	},
	{
		id: 3864,
		name: 'VALLECITO',
		uta2020: '700350035070000',
		uta2010: '700350035070000',
		latitude: -31.740374467,
		longitude: -67.98852459,
		municipalityId: 2427
	},
	{
		id: 3865,
		name: 'CAUCETE',
		uta2020: '700350035020000',
		uta2010: '700350035020000',
		latitude: -31.651478787,
		longitude: -68.282140435,
		municipalityId: 2427
	},
	{
		id: 3866,
		name: 'SAN ISIDRO',
		uta2020: '380146035110000',
		uta2010: '380146035110000',
		latitude: -24.555636846,
		longitude: -64.942420794,
		municipalityId: 1181
	},
	{
		id: 3867,
		name: 'FLEMING',
		uta2020: '380146035010002',
		uta2010: '380146035010002',
		latitude: -24.587376343,
		longitude: -64.924057792,
		municipalityId: 1181
	},
	{
		id: 3868,
		name: 'AGUAS CALIENTES',
		uta2020: '380146035010001',
		uta2010: '380146035010001',
		latitude: -24.583875962,
		longitude: -64.923527249,
		municipalityId: 1181
	},
	{
		id: 3869,
		name: 'LAS PICHANAS',
		uta2020: '380146035000031',
		uta2010: '380146035000031',
		latitude: -24.578046799,
		longitude: -64.96295929,
		municipalityId: 1181
	},
	{
		id: 3870,
		name: 'PILA PARDO',
		uta2020: '380146035010003',
		uta2010: '380146035010003',
		latitude: -24.559882788,
		longitude: -64.914197552,
		municipalityId: 1181
	},
	{
		id: 3871,
		name: 'RIO SEGUNDO',
		uta2020: '141191071190000',
		uta2010: '141191071190000',
		latitude: -31.650153972,
		longitude: -63.911863016,
		municipalityId: 308
	},
	{
		id: 3872,
		name: 'POZO LINDO',
		uta2020: '100420126000028',
		uta2010: '100420126000028',
		latitude: -29.059776306,
		longitude: -65.887626648,
		municipalityId: 1909
	},
	{
		id: 3873,
		name: 'SAN PEDRO',
		uta2020: '100420126150000',
		uta2010: '100420126150000',
		latitude: -28.77171776,
		longitude: -66.124060099,
		municipalityId: 1909
	},
	{
		id: 3874,
		name: 'TRAMPASACHA',
		uta2020: '100420126000037',
		uta2010: '100420126000037',
		latitude: -28.841787017,
		longitude: -66.298549224,
		municipalityId: 1909
	},
	{
		id: 3875,
		name: 'CONCEPCION',
		uta2020: '100420126070000',
		uta2010: '100420126070000',
		latitude: -28.702787813,
		longitude: -66.068440443,
		municipalityId: 1909
	},
	{
		id: 3876,
		name: 'TELARITOS',
		uta2020: '100420126000035',
		uta2010: '100420126000035',
		latitude: -29.47719276,
		longitude: -65.65244197,
		municipalityId: 1909
	},
	{
		id: 3877,
		name: 'CAPAYAN',
		uta2020: '100420126030000',
		uta2010: '100420126030000',
		latitude: -28.780710645,
		longitude: -66.038645544,
		municipalityId: 1909
	},
	{
		id: 3878,
		name: 'EL MILAGRO',
		uta2020: '100420126000008',
		uta2010: '100420126000008',
		latitude: -28.847403708,
		longitude: -65.905393662,
		municipalityId: 1909
	},
	{
		id: 3879,
		name: 'EL QUEMADO',
		uta2020: '100420126000009',
		uta2010: '100420126000009',
		latitude: -29.57815,
		longitude: -65.58549,
		municipalityId: 1909
	},
	{
		id: 3880,
		name: 'CARRANZA',
		uta2020: '100420126000003',
		uta2010: '100420126000003',
		latitude: -29.025346811,
		longitude: -66.003835459,
		municipalityId: 1909
	},
	{
		id: 3881,
		name: 'LAS ANIMAS',
		uta2020: '100420126000018',
		uta2010: '100420126000018',
		latitude: -29.08545,
		longitude: -65.76688,
		municipalityId: 1909
	},
	{
		id: 3882,
		name: 'LA LIBERTAD',
		uta2020: '100420126000015',
		uta2010: '100420126000015',
		latitude: -29.313955307,
		longitude: -65.717712402,
		municipalityId: 1909
	},
	{
		id: 3883,
		name: 'EL CARRIZAL',
		uta2020: '100420126000007',
		uta2010: '100420126000007',
		latitude: -28.670881271,
		longitude: -66.122657776,
		municipalityId: 1909
	},
	{
		id: 3884,
		name: 'BALDE DE LA PUNTA',
		uta2020: '100420126020000',
		uta2010: '100420126020000',
		latitude: -29.558948423,
		longitude: -65.580724075,
		municipalityId: 1909
	},
	{
		id: 3885,
		name: 'SAN MARTIN',
		uta2020: '100420126130000',
		uta2010: '100420126130000',
		latitude: -29.251423818,
		longitude: -65.796697163,
		municipalityId: 1909
	},
	{
		id: 3886,
		name: 'ADOLFO E. CARRANZA',
		uta2020: '100420126010000',
		uta2010: '100420126010000',
		latitude: -29.026977524,
		longitude: -65.971931537,
		municipalityId: 1909
	},
	{
		id: 3887,
		name: 'PUESTO NUEVO',
		uta2020: '100420126000031',
		uta2010: '100420126000031',
		latitude: -29.404985428,
		longitude: -65.572738648,
		municipalityId: 1909
	},
	{
		id: 3888,
		name: 'LAS PALMAS',
		uta2020: '100420126000021',
		uta2010: '100420126000021',
		latitude: -28.741629889,
		longitude: -66.181705169,
		municipalityId: 1909
	},
	{
		id: 3889,
		name: 'LAS BREAS',
		uta2020: '100420126000019',
		uta2010: '100420126000019',
		latitude: -28.991264343,
		longitude: -65.770393372,
		municipalityId: 1909
	},
	{
		id: 3890,
		name: 'CHUMBICHA',
		uta2020: '100420126040000',
		uta2010: '100420126040000',
		latitude: -28.847565268,
		longitude: -66.241356784,
		municipalityId: 1909
	},
	{
		id: 3891,
		name: 'JUAN JORBA',
		uta2020: '740356119010000',
		uta2010: '740356119010000',
		latitude: -33.61328063,
		longitude: -65.271750296,
		municipalityId: 1083
	},
	{
		id: 3892,
		name: 'INGENIERO FOSTER',
		uta2020: '421260210020000',
		uta2010: '421260210020000',
		latitude: -35.701488918,
		longitude: -65.10255352,
		municipalityId: 1949
	},
	{
		id: 3893,
		name: 'LA MARUJA',
		uta2020: '421260210030000',
		uta2010: '421260210030000',
		latitude: -35.671688678,
		longitude: -64.940569827,
		municipalityId: 1949
	},
	{
		id: 3894,
		name: 'LOBOCO',
		uta2020: '421260210000016',
		uta2010: '421260210000016',
		latitude: -35.804410987,
		longitude: -64.936131403,
		municipalityId: 1949
	},
	{
		id: 3895,
		name: 'COLONIA LA JOYA',
		uta2020: '300989840000022',
		uta2010: '300989840000022',
		latitude: -32.23889742,
		longitude: -58.94615315,
		municipalityId: 1770
	},
	{
		id: 3896,
		name: 'LIBAROS',
		uta2020: '300989840080000',
		uta2010: '300989840080000',
		latitude: -32.262947933,
		longitude: -58.906610812,
		municipalityId: 1770
	},
	{
		id: 3897,
		name: 'ESTACION ESCRIÑA',
		uta2020: '300569355035000',
		uta2010: '300569355035000',
		latitude: -32.59323583,
		longitude: -58.903741651,
		municipalityId: 1626
	},
	{
		id: 3898,
		name: 'SAN GUILLERMO',
		uta2020: '820913645230000',
		uta2010: '820913645230000',
		latitude: -30.360209853,
		longitude: -61.917827263,
		municipalityId: 841
	},
	{
		id: 3899,
		name: 'RINCON SANTA MARIA',
		uta2020: '180840168000056',
		uta2010: '180840168000056',
		latitude: -27.588180585,
		longitude: -56.69982819,
		municipalityId: 2035
	},
	{
		id: 3900,
		name: 'BUENA VISTA',
		uta2020: '180840168000004',
		uta2010: '180840168000004',
		latitude: -27.715914491,
		longitude: -56.94751639,
		municipalityId: 2035
	},
	{
		id: 3901,
		name: 'PUERTO VALLE',
		uta2020: '180840168000051',
		uta2010: '180840168000051',
		latitude: -27.617000141,
		longitude: -56.414989952,
		municipalityId: 2035
	},
	{
		id: 3902,
		name: 'ISLA APIPE CHICO',
		uta2020: '180840168000019',
		uta2010: '180840168000019',
		latitude: -27.572889363,
		longitude: -56.710538884,
		municipalityId: 2035
	},
	{
		id: 3903,
		name: 'CAA CARAI',
		uta2020: '180840168000005',
		uta2010: '180840168000005',
		latitude: -27.797967104,
		longitude: -56.264187153,
		municipalityId: 2035
	},
	{
		id: 3904,
		name: 'LIBERTAD',
		uta2020: '180840168000031',
		uta2010: '180840168000031',
		latitude: -27.743417361,
		longitude: -56.476001831,
		municipalityId: 2035
	},
	{
		id: 3905,
		name: 'ITUZAINGO',
		uta2020: '180840168020000',
		uta2010: '180840168020000',
		latitude: -27.591042941,
		longitude: -56.703973945,
		municipalityId: 2035
	},
	{
		id: 3906,
		name: 'PASO MORENO',
		uta2020: '180840168000043',
		uta2010: '180840168000043',
		latitude: -27.812499602,
		longitude: -57.071692044,
		municipalityId: 2035
	},
	{
		id: 3907,
		name: 'LOS ROBLES',
		uta2020: '461190119010007',
		uta2010: '461190119010007',
		latitude: -28.451797491,
		longitude: -67.117897851,
		municipalityId: 2003
	},
	{
		id: 3908,
		name: 'ANDOLUCAS',
		uta2020: '461190119010003',
		uta2010: '461190119010003',
		latitude: -28.555581629,
		longitude: -67.159283652,
		municipalityId: 2003
	},
	{
		id: 3909,
		name: 'SHAQUI',
		uta2020: '461190119010010',
		uta2010: '461190119010010',
		latitude: -28.481220138,
		longitude: -67.128235105,
		municipalityId: 2003
	},
	{
		id: 3910,
		name: 'LAS TALAS',
		uta2020: '461190119010006',
		uta2010: '461190119010006',
		latitude: -28.451797491,
		longitude: -67.117897851,
		municipalityId: 2003
	},
	{
		id: 3911,
		name: 'ALPASINCHE',
		uta2020: '461190119010001',
		uta2010: '461190119010001',
		latitude: -28.353642243,
		longitude: -67.080433367,
		municipalityId: 2003
	},
	{
		id: 3912,
		name: 'CUIPAN',
		uta2020: '461190119010005',
		uta2010: '461190119010005',
		latitude: -28.451797491,
		longitude: -67.117897851,
		municipalityId: 2003
	},
	{
		id: 3913,
		name: 'TUYUBIL',
		uta2020: '461190119010012',
		uta2010: '461190119010012',
		latitude: -28.555581629,
		longitude: -67.159283652,
		municipalityId: 2003
	},
	{
		id: 3914,
		name: 'EL RETIRO',
		uta2020: '461190119000004',
		uta2010: '461190119000004',
		latitude: -28.320748457,
		longitude: -67.053376066,
		municipalityId: 2003
	},
	{
		id: 3915,
		name: 'CHAUPIHUASI',
		uta2020: '461190119010004',
		uta2010: '461190119010004',
		latitude: -28.353642243,
		longitude: -67.080433367,
		municipalityId: 2003
	},
	{
		id: 3916,
		name: 'SALICAS',
		uta2020: '461190119010008',
		uta2010: '461190119010008',
		latitude: -28.407625811,
		longitude: -67.096154631,
		municipalityId: 2003
	},
	{
		id: 3917,
		name: 'SAN BLAS',
		uta2020: '461190119010009',
		uta2010: '461190119010009',
		latitude: -28.407625811,
		longitude: -67.096154631,
		municipalityId: 2003
	},
	{
		id: 3918,
		name: 'AMUSCHINA',
		uta2020: '461190119010002',
		uta2010: '461190119010002',
		latitude: -28.555581629,
		longitude: -67.159283652,
		municipalityId: 2003
	},
	{
		id: 3919,
		name: 'SURIYACO',
		uta2020: '461190119010011',
		uta2010: '461190119010011',
		latitude: -28.555581629,
		longitude: -67.159283652,
		municipalityId: 2003
	},
	{
		id: 3920,
		name: 'CERES',
		uta2020: '820910224060000',
		uta2010: '820910224060000',
		latitude: -29.882337128,
		longitude: -61.945237427,
		municipalityId: 842
	},
	{
		id: 3921,
		name: 'OJOS DE AGUA',
		uta2020: '620565245040000',
		uta2010: '620565245040000',
		latitude: -41.534892227,
		longitude: -69.85464597,
		municipalityId: 1282
	},
	{
		id: 3922,
		name: 'LIPETREN',
		uta2020: '620565245000014',
		uta2010: '620565245000014',
		latitude: -41.75757836,
		longitude: -69.78789706,
		municipalityId: 1282
	},
	{
		id: 3923,
		name: 'YUQUICHE',
		uta2020: '620565245000020',
		uta2010: '620565245000020',
		latitude: -41.507900238,
		longitude: -69.790473938,
		municipalityId: 1282
	},
	{
		id: 3924,
		name: 'BAGUAL',
		uta2020: '740426161030000',
		uta2010: '740426161030000',
		latitude: -35.144848451,
		longitude: -65.567665245,
		municipalityId: 1144
	},
	{
		id: 3925,
		name: 'SAN JOSE DE OTAMENDI',
		uta2020: '062800280000029',
		uta2010: '062800280000029',
		latitude: -38.2440211,
		longitude: -58.1036131,
		municipalityId: 621
	},
	{
		id: 3926,
		name: 'MIRAMAR',
		uta2020: '062800280040000',
		uta2010: '062800280040000',
		latitude: -38.270742932,
		longitude: -57.840471458,
		municipalityId: 621
	},
	{
		id: 3927,
		name: 'LAS PIEDRITAS',
		uta2020: '062800280000022',
		uta2010: '062800280000022',
		latitude: -38.011074068,
		longitude: -58.072040586,
		municipalityId: 621
	},
	{
		id: 3928,
		name: 'LA BALLENERA',
		uta2020: '062800280000011',
		uta2010: '062800280000011',
		latitude: -38.1594587,
		longitude: -57.975638,
		municipalityId: 621
	},
	{
		id: 3929,
		name: 'ESTANCIA LA TOTO',
		uta2020: '062800280000010',
		uta2010: '062800280000010',
		latitude: -38.222449169,
		longitude: -57.895726732,
		municipalityId: 621
	},
	{
		id: 3930,
		name: 'COMANDANTE NICANOR OTAMENDI',
		uta2020: '062800280010000',
		uta2010: '062800280010000',
		latitude: -38.111933512,
		longitude: -57.841535312,
		municipalityId: 621
	},
	{
		id: 3931,
		name: 'MECHONGUE',
		uta2020: '062800280030000',
		uta2010: '062800280030000',
		latitude: -38.148654514,
		longitude: -58.223012107,
		municipalityId: 621
	},
	{
		id: 3932,
		name: 'LA REFORMA',
		uta2020: '062800280000019',
		uta2010: '062800280000019',
		latitude: -38.0666494,
		longitude: -57.9716277,
		municipalityId: 621
	},
	{
		id: 3933,
		name: 'LA EUFEMIA',
		uta2020: '062800280000015',
		uta2010: '062800280000015',
		latitude: -38.325186,
		longitude: -58.061113,
		municipalityId: 621
	},
	{
		id: 3934,
		name: 'MAR DEL SUR',
		uta2020: '062800280020000',
		uta2010: '062800280020000',
		latitude: -38.344688153,
		longitude: -57.992039307,
		municipalityId: 621
	},
	{
		id: 3935,
		name: 'CENTINELA DEL MAR',
		uta2020: '062800280005000',
		uta2010: '062800280005000',
		latitude: -38.434880637,
		longitude: -58.216863731,
		municipalityId: 621
	},
	{
		id: 3936,
		name: 'VILLA EL TALA',
		uta2020: '140070000300000',
		uta2010: '140070000300000',
		latitude: -32.254267361,
		longitude: -64.585003919,
		municipalityId: 126
	},
	{
		id: 3937,
		name: 'MONSALVO',
		uta2020: '140070000000044',
		uta2010: '140070000000044',
		latitude: -32.122909546,
		longitude: -64.360206604,
		municipalityId: 126
	},
	{
		id: 3938,
		name: 'LA CASCADA',
		uta2020: '140070000000033',
		uta2010: '140070000000033',
		latitude: -32.200698852,
		longitude: -64.298339844,
		municipalityId: 126
	},
	{
		id: 3939,
		name: 'VILLA ALPINA',
		uta2020: '140070000240000',
		uta2010: '140070000240000',
		latitude: -31.953261101,
		longitude: -64.813254135,
		municipalityId: 126
	},
	{
		id: 3940,
		name: 'CERRO CHAMPAQUI',
		uta2020: '140070000000014',
		uta2010: '140070000000014',
		latitude: -31.99234075,
		longitude: -64.906155239,
		municipalityId: 126
	},
	{
		id: 3941,
		name: 'ARROYO SAN ANTONIO',
		uta2020: '140070000020000',
		uta2010: '140070000020000',
		latitude: -32.26205146,
		longitude: -64.593725321,
		municipalityId: 126
	},
	{
		id: 3942,
		name: 'EL CANO',
		uta2020: '140070000000022',
		uta2010: '140070000000022',
		latitude: -32.609586109,
		longitude: -64.594966297,
		municipalityId: 126
	},
	{
		id: 3943,
		name: 'SOL DE MAYO',
		uta2020: '140070000000063',
		uta2010: '140070000000063',
		latitude: -31.98915492,
		longitude: -64.729216074,
		municipalityId: 126
	},
	{
		id: 3944,
		name: 'LA DORMIDA',
		uta2020: '140070000000035',
		uta2010: '140070000000035',
		latitude: -32.3595285,
		longitude: -64.4328036,
		municipalityId: 126
	},
	{
		id: 3945,
		name: 'ATOS PAMPA',
		uta2020: '140070000000006',
		uta2010: '140070000000006',
		latitude: -31.99106696,
		longitude: -64.691947984,
		municipalityId: 126
	},
	{
		id: 3946,
		name: 'LAS LAGUNITAS',
		uta2020: '140070000000037',
		uta2010: '140070000000037',
		latitude: -32.607128726,
		longitude: -64.729093449,
		municipalityId: 126
	},
	{
		id: 3947,
		name: 'COLONIA SAN ISIDRO',
		uta2020: '340210000000022',
		uta2010: '340210000000022',
		latitude: -26.47047426,
		longitude: -58.84901628,
		municipalityId: 2333
	},
	{
		id: 3948,
		name: 'CANDIA',
		uta2020: '340210000000010',
		uta2010: '340210000000010',
		latitude: -26.652492523,
		longitude: -58.341789248,
		municipalityId: 2333
	},
	{
		id: 3949,
		name: 'COLONIA SAN ANTONIO',
		uta2020: '340210000000021',
		uta2010: '340210000000021',
		latitude: -26.2045619,
		longitude: -58.63168502,
		municipalityId: 2333
	},
	{
		id: 3950,
		name: 'COLONIA EL DORADO',
		uta2020: '340210000000016',
		uta2010: '340210000000016',
		latitude: -26.24447317,
		longitude: -58.61849794,
		municipalityId: 2333
	},
	{
		id: 3951,
		name: 'HERTELENDY',
		uta2020: '340210000000061',
		uta2010: '340210000000061',
		latitude: -26.716234207,
		longitude: -58.524650575,
		municipalityId: 2333
	},
	{
		id: 3952,
		name: 'PASO POLENTA',
		uta2020: '340210000000092',
		uta2010: '340210000000092',
		latitude: -26.383129999,
		longitude: -58.424790003,
		municipalityId: 2333
	},
	{
		id: 3953,
		name: 'POSTA DEL SALADO',
		uta2020: '340210000000094',
		uta2010: '340210000000094',
		latitude: -26.40398213,
		longitude: -58.39251437,
		municipalityId: 2333
	},
	{
		id: 3954,
		name: 'GUAYACANTY',
		uta2020: '340210000000060',
		uta2010: '340210000000060',
		latitude: -26.71949482,
		longitude: -58.28872327,
		municipalityId: 2333
	},
	{
		id: 3955,
		name: 'ESTERITO',
		uta2020: '340210000000051',
		uta2010: '340210000000051',
		latitude: -26.29850258,
		longitude: -58.540821,
		municipalityId: 2333
	},
	{
		id: 3956,
		name: 'COLONIA LAGUNA GOBERNADOR',
		uta2020: '340210000000018',
		uta2010: '340210000000018',
		latitude: -26.21018281,
		longitude: -58.66136559,
		municipalityId: 2333
	},
	{
		id: 3957,
		name: 'TRES MOJONES',
		uta2020: '340210000000114',
		uta2010: '340210000000114',
		latitude: -26.463949999,
		longitude: -58.516290002,
		municipalityId: 2333
	},
	{
		id: 3958,
		name: 'LA PLAYA',
		uta2020: '340210000000080',
		uta2010: '340210000000080',
		latitude: -26.51477253,
		longitude: -58.29005859,
		municipalityId: 2333
	},
	{
		id: 3959,
		name: 'COLONIA EL NARANJITO',
		uta2020: '340210000000017',
		uta2010: '340210000000017',
		latitude: -26.22142948,
		longitude: -58.67991449,
		municipalityId: 2333
	},
	{
		id: 3960,
		name: 'COGORNO',
		uta2020: '340210000000012',
		uta2010: '340210000000012',
		latitude: -26.395370483,
		longitude: -58.598365785,
		municipalityId: 2333
	},
	{
		id: 3961,
		name: 'RIACHO LINDO',
		uta2020: '340210000000099',
		uta2010: '340210000000099',
		latitude: -26.42572252,
		longitude: -58.55420229,
		municipalityId: 2333
	},
	{
		id: 3962,
		name: 'EL CERRITO',
		uta2020: '340210000000036',
		uta2010: '340210000000036',
		latitude: -26.473600387,
		longitude: -58.651031495,
		municipalityId: 2333
	},
	{
		id: 3963,
		name: 'COLONIA CANO',
		uta2020: '340210000000014',
		uta2010: '340210000000014',
		latitude: -26.850309372,
		longitude: -58.329120636,
		municipalityId: 2333
	},
	{
		id: 3964,
		name: 'EL MBIGUA',
		uta2020: '340210000000037',
		uta2010: '340210000000037',
		latitude: -26.48683297,
		longitude: -58.60813019,
		municipalityId: 2333
	},
	{
		id: 3965,
		name: 'KILOMETRO 100',
		uta2020: '340210000000068',
		uta2010: '340210000000068',
		latitude: -26.51678084,
		longitude: -58.80163154,
		municipalityId: 2333
	},
	{
		id: 3966,
		name: 'POTRERO DE LOS CABALLOS',
		uta2020: '340210000000095',
		uta2010: '340210000000095',
		latitude: -26.48685015,
		longitude: -58.60815593,
		municipalityId: 2333
	},
	{
		id: 3967,
		name: 'EL ANGELITO',
		uta2020: '340210000000032',
		uta2010: '340210000000032',
		latitude: -26.34565255,
		longitude: -58.43974581,
		municipalityId: 2333
	},
	{
		id: 3968,
		name: 'PUERTA MISION',
		uta2020: '340210000000097',
		uta2010: '340210000000097',
		latitude: -26.213676582,
		longitude: -58.732768808,
		municipalityId: 2333
	},
	{
		id: 3969,
		name: 'PRESIDENTE YRIGOYEN',
		uta2020: '340210000000096',
		uta2010: '340210000000096',
		latitude: -26.17516388,
		longitude: -58.83242012,
		municipalityId: 2333
	},
	{
		id: 3970,
		name: 'ISLA BANCO ORTELLADO',
		uta2020: '340210000000063',
		uta2010: '340210000000063',
		latitude: -26.51655235,
		longitude: -58.23930542,
		municipalityId: 2333
	},
	{
		id: 3971,
		name: 'MAGLIETTI',
		uta2020: '340210000000084',
		uta2010: '340210000000084',
		latitude: -26.514810562,
		longitude: -58.475402833,
		municipalityId: 2333
	},
	{
		id: 3972,
		name: 'COLONIA YATAY',
		uta2020: '340210000000023',
		uta2010: '340210000000023',
		latitude: -26.414228439,
		longitude: -58.57421875,
		municipalityId: 2333
	},
	{
		id: 3973,
		name: 'LA LUISA',
		uta2020: '340210000000078',
		uta2010: '340210000000078',
		latitude: -26.663650512,
		longitude: -58.374488832,
		municipalityId: 2333
	},
	{
		id: 3974,
		name: 'KILOMETRO 117',
		uta2020: '340210000000069',
		uta2010: '340210000000069',
		latitude: -26.44429975,
		longitude: -58.86838024,
		municipalityId: 2333
	},
	{
		id: 3975,
		name: 'AROCENA',
		uta2020: '821053722010000',
		uta2010: '821053722010000',
		latitude: -32.080027194,
		longitude: -60.977004964,
		municipalityId: 981
	},
	{
		id: 3976,
		name: 'BARRIO EL PACAA - BARRIO COMIPINI',
		uta2020: '821053722050000',
		uta2010: '821053722050000',
		latitude: -32.1313357,
		longitude: -60.928268505,
		municipalityId: 981
	},
	{
		id: 3977,
		name: 'COLONIA BELGRANO',
		uta2020: '820773344000017',
		uta2010: '820773344000017',
		latitude: -28.588630714,
		longitude: -61.558406924,
		municipalityId: 1054
	},
	{
		id: 3978,
		name: 'COLONIA EL DICHOSO',
		uta2020: '820773344000018',
		uta2010: '820773344000018',
		latitude: -28.475607284,
		longitude: -61.695488072,
		municipalityId: 1054
	},
	{
		id: 3979,
		name: 'COLONIA LA HIEDRA',
		uta2020: '820773344000022',
		uta2010: '820773344000022',
		latitude: -28.591861226,
		longitude: -61.726345826,
		municipalityId: 1054
	},
	{
		id: 3980,
		name: 'FORTIN ATAHUALPA',
		uta2020: '820773344000051',
		uta2010: '820773344000051',
		latitude: -28.7783131,
		longitude: -61.663956,
		municipalityId: 1054
	},
	{
		id: 3981,
		name: 'COLONIA EL MATE',
		uta2020: '820773344000020',
		uta2010: '820773344000020',
		latitude: -28.7858771,
		longitude: -61.843181,
		municipalityId: 1054
	},
	{
		id: 3982,
		name: 'VILLA MINETTI',
		uta2020: '820773344090000',
		uta2010: '820773344090000',
		latitude: -28.62470954,
		longitude: -61.627985987,
		municipalityId: 1054
	},
	{
		id: 3983,
		name: 'ESTANCIA LOS GUASUNCHOS',
		uta2020: '820773344000046',
		uta2010: '820773344000046',
		latitude: -28.7358489,
		longitude: -61.7433502,
		municipalityId: 1054
	},
	{
		id: 3984,
		name: 'CAMPO SAN ISIDORO',
		uta2020: '820773344000015',
		uta2010: '820773344000015',
		latitude: -28.649078946,
		longitude: -61.70577201,
		municipalityId: 1054
	},
	{
		id: 3985,
		name: 'EMPALME RUTA 91',
		uta2020: '820773344000037',
		uta2010: '820773344000037',
		latitude: -28.3808448,
		longitude: -61.7185278,
		municipalityId: 1054
	},
	{
		id: 3986,
		name: 'COLONIA LA AVANZADA',
		uta2020: '820773344000021',
		uta2010: '820773344000021',
		latitude: -28.709585496,
		longitude: -61.645758859,
		municipalityId: 1054
	},
	{
		id: 3987,
		name: 'COLONIA LAS PICHANAS',
		uta2020: '141402945080000',
		uta2010: '141402945080000',
		latitude: -31.245406629,
		longitude: -62.925666489,
		municipalityId: 404
	},
	{
		id: 3988,
		name: 'CAMPO GARAY',
		uta2020: '820773302000007',
		uta2010: '820773302000007',
		latitude: -29.69115297,
		longitude: -61.602441092,
		municipalityId: 1055
	},
	{
		id: 3989,
		name: 'HOCKER',
		uta2020: '300089015050000',
		uta2010: '300089015050000',
		latitude: -32.087495845,
		longitude: -58.341705844,
		municipalityId: 1673
	},
	{
		id: 3990,
		name: 'LAS PAJITAS',
		uta2020: '301139920000071',
		uta2010: '301139920000071',
		latitude: -31.920258813,
		longitude: -59.356709473,
		municipalityId: 1662
	},
	{
		id: 3991,
		name: 'ESTACION RAICES',
		uta2020: '301139920010000',
		uta2010: '301139920010000',
		latitude: -31.908248193,
		longitude: -59.260692652,
		municipalityId: 1662
	},
	{
		id: 3992,
		name: 'DISTRITO RAICES',
		uta2020: '301139920000041',
		uta2010: '301139920000041',
		latitude: -31.93312551,
		longitude: -59.14559618,
		municipalityId: 1662
	},
	{
		id: 3993,
		name: 'COLONIA OFICIAL 2',
		uta2020: '301139920000031',
		uta2010: '301139920000031',
		latitude: -31.84565415,
		longitude: -59.31644166,
		municipalityId: 1662
	},
	{
		id: 3994,
		name: 'LOS ALTARES',
		uta2020: '260708084020000',
		uta2010: '260708084020000',
		latitude: -43.871192998,
		longitude: -68.430116878,
		municipalityId: 572
	},
	{
		id: 3995,
		name: 'CUCHILLA REDONDA',
		uta2020: '300569340000076',
		uta2010: '300569340000076',
		latitude: -33.082496643,
		longitude: -59.092739105,
		municipalityId: 1627
	},
	{
		id: 3996,
		name: 'DISTRITO CUCHILLA REDONDA',
		uta2020: '300569340000080',
		uta2010: '300569340000080',
		latitude: -33.085448748,
		longitude: -59.094661871,
		municipalityId: 1627
	},
	{
		id: 3997,
		name: 'LAS VARAS',
		uta2020: '141401281260000',
		uta2010: '141401281260000',
		latitude: -31.801292159,
		longitude: -62.617104724,
		municipalityId: 405
	},
	{
		id: 3998,
		name: 'TABAY',
		uta2020: '180280049030000',
		uta2010: '180280049030000',
		latitude: -28.306267818,
		longitude: -58.286296699,
		municipalityId: 2054
	},
	{
		id: 3999,
		name: 'EL PINDO',
		uta2020: '180280049000022',
		uta2010: '180280049000022',
		latitude: -28.318138694,
		longitude: -58.337801693,
		municipalityId: 2054
	},
	{
		id: 4000,
		name: 'SANTA TERESITA',
		uta2020: '180280049000084',
		uta2010: '180280049000084',
		latitude: -28.26538557,
		longitude: -58.27032273,
		municipalityId: 2054
	},
	{
		id: 4001,
		name: 'URDINARRAIN',
		uta2020: '300560203110000',
		uta2010: '300560203110000',
		latitude: -32.688131155,
		longitude: -58.888994554,
		municipalityId: 1628
	},
	{
		id: 4002,
		name: 'COLONIA LA FLORIDA',
		uta2020: '300560203000069',
		uta2010: '300560203000069',
		latitude: -32.67964999,
		longitude: -58.81941844,
		municipalityId: 1628
	},
	{
		id: 4003,
		name: 'PUERTO GENERAL SAN MARTIN',
		uta2020: '821190287080000',
		uta2010: '821190287080000',
		latitude: -32.719002596,
		longitude: -60.733492539,
		municipalityId: 1070
	},
	{
		id: 4004,
		name: 'BELLA VISTA',
		uta2020: '821190287000002',
		uta2010: '821190287000002',
		latitude: -32.695030212,
		longitude: -60.730968475,
		municipalityId: 1070
	},
	{
		id: 4005,
		name: 'AEROPUERTO INTERNACIONAL EZEIZA',
		uta2020: '062700270010001',
		uta2010: '062700270010001',
		latitude: -34.812821628,
		longitude: -58.552165006,
		municipalityId: 622
	},
	{
		id: 4006,
		name: 'JOSE MARIA EZEIZA',
		uta2020: '062700270010004',
		uta2010: '062700270010004',
		latitude: -34.85361001,
		longitude: -58.519552165,
		municipalityId: 622
	},
	{
		id: 4007,
		name: 'TRISTAN SUAREZ',
		uta2020: '062700270010006',
		uta2010: '062700270010006',
		latitude: -34.885152715,
		longitude: -58.570033585,
		municipalityId: 622
	},
	{
		id: 4008,
		name: 'LA UNION',
		uta2020: '062700270010005',
		uta2010: '062700270010005',
		latitude: -34.850385968,
		longitude: -58.555869546,
		municipalityId: 622
	},
	{
		id: 4009,
		name: 'CANNING',
		uta2020: '062700270010002',
		uta2010: '062700270010002',
		latitude: -34.896228396,
		longitude: -58.5087006,
		municipalityId: 622
	},
	{
		id: 4010,
		name: 'CARLOS SPEGAZZINI',
		uta2020: '062700270010003',
		uta2010: '062700270010003',
		latitude: -34.933848987,
		longitude: -58.578001734,
		municipalityId: 622
	},
	{
		id: 4011,
		name: 'EL PORVENIR',
		uta2020: '062700270000001',
		uta2010: '062700270000001',
		latitude: -34.9645699,
		longitude: -58.5460971,
		municipalityId: 622
	},
	{
		id: 4012,
		name: 'BARRANCAS COLORADAS',
		uta2020: '300849705000018',
		uta2010: '300849705000018',
		latitude: -31.651006976,
		longitude: -59.564455949,
		municipalityId: 1728
	},
	{
		id: 4013,
		name: 'CHAJAN',
		uta2020: '140980798070000',
		uta2010: '140980798070000',
		latitude: -33.556336135,
		longitude: -65.005269917,
		municipalityId: 443
	},
	{
		id: 4014,
		name: 'COLONIA URDANIZ',
		uta2020: '740420000000010',
		uta2010: '740420000000010',
		latitude: -35.214084625,
		longitude: -66.095664978,
		municipalityId: 1145
	},
	{
		id: 4015,
		name: 'MARTIN DE LOYOLA',
		uta2020: '740420000100000',
		uta2010: '740420000100000',
		latitude: -35.711168113,
		longitude: -66.352527584,
		municipalityId: 1145
	},
	{
		id: 4016,
		name: 'COLONIA CALZADA',
		uta2020: '740420000000009',
		uta2010: '740420000000009',
		latitude: -34.823871612,
		longitude: -66.448936462,
		municipalityId: 1145
	},
	{
		id: 4017,
		name: 'LA ESTRELLA',
		uta2020: '740420000000054',
		uta2010: '740420000000054',
		latitude: -35.277011871,
		longitude: -65.961486816,
		municipalityId: 1145
	},
	{
		id: 4018,
		name: 'EL RODEO',
		uta2020: '740420000000026',
		uta2010: '740420000000026',
		latitude: -35.606880188,
		longitude: -65.734214783,
		municipalityId: 1145
	},
	{
		id: 4019,
		name: 'FRISIA',
		uta2020: '740420000000031',
		uta2010: '740420000000031',
		latitude: -34.755512237,
		longitude: -65.383384705,
		municipalityId: 1145
	},
	{
		id: 4020,
		name: 'EL AGUILA',
		uta2020: '740420000000013',
		uta2010: '740420000000013',
		latitude: -34.721290588,
		longitude: -65.617546081,
		municipalityId: 1145
	},
	{
		id: 4021,
		name: 'LOS OVEROS',
		uta2020: '740420000090000',
		uta2010: '740420000090000',
		latitude: -35.880897105,
		longitude: -66.445014255,
		municipalityId: 1145
	},
	{
		id: 4022,
		name: 'NAHUEL MAPA',
		uta2020: '740420000110000',
		uta2010: '740420000110000',
		latitude: -34.783367866,
		longitude: -66.17014983,
		municipalityId: 1145
	},
	{
		id: 4023,
		name: 'LA MAROMA',
		uta2020: '740420000080000',
		uta2010: '740420000080000',
		latitude: -35.212700304,
		longitude: -66.326425225,
		municipalityId: 1145
	},
	{
		id: 4024,
		name: 'NUEVA CONSTITUCION',
		uta2020: '740420000000114',
		uta2010: '740420000000114',
		latitude: -35.943706513,
		longitude: -66.211608887,
		municipalityId: 1145
	},
	{
		id: 4025,
		name: 'LA VERDE',
		uta2020: '740420000000092',
		uta2010: '740420000000092',
		latitude: -35.522815704,
		longitude: -65.358024597,
		municipalityId: 1145
	},
	{
		id: 4026,
		name: 'PEREZ',
		uta2020: '820840203210000',
		uta2010: '820840203210000',
		latitude: -32.998811169,
		longitude: -60.77215921,
		municipalityId: 812
	},
	{
		id: 4027,
		name: 'VILLA AMERICA',
		uta2020: '820840203000035',
		uta2010: '820840203000035',
		latitude: -33.011131287,
		longitude: -60.773845673,
		municipalityId: 812
	},
	{
		id: 4028,
		name: 'TAQUIMILAN',
		uta2020: '580840189050000',
		uta2010: '580840189050000',
		latitude: -37.516910388,
		longitude: -70.250386371,
		municipalityId: 2400
	},
	{
		id: 4029,
		name: 'TAQUIMILAN ARRIBA',
		uta2020: '580840189000037',
		uta2010: '580840189000037',
		latitude: -37.605930328,
		longitude: -70.330490112,
		municipalityId: 2400
	},
	{
		id: 4030,
		name: 'DARWIN',
		uta2020: '620140042060000',
		uta2010: '620140042060000',
		latitude: -39.20269129,
		longitude: -65.74091723,
		municipalityId: 1287
	},
	{
		id: 4031,
		name: 'CANDIOTI',
		uta2020: '820632980060000',
		uta2010: '820632980060000',
		latitude: -31.399524403,
		longitude: -60.749114929,
		municipalityId: 1031
	},
	{
		id: 4032,
		name: 'EL PUEBLITO',
		uta2020: '300779545000023',
		uta2010: '300779545000023',
		latitude: -32.159564972,
		longitude: -59.815734863,
		municipalityId: 1703
	},
	{
		id: 4033,
		name: 'RIO CHICO',
		uta2020: '620565266050000',
		uta2010: '620565266050000',
		latitude: -41.716722784,
		longitude: -70.471083901,
		municipalityId: 1283
	},
	{
		id: 4034,
		name: 'LA HIGUERA',
		uta2020: '100770182040000',
		uta2010: '100770182040000',
		latitude: -27.935282862,
		longitude: -65.699367489,
		municipalityId: 1912
	},
	{
		id: 4035,
		name: 'TIERRA VERDE',
		uta2020: '100770182000038',
		uta2010: '100770182000038',
		latitude: -27.895811081,
		longitude: -65.715423584,
		municipalityId: 1912
	},
	{
		id: 4036,
		name: 'LAS LAJAS',
		uta2020: '100770182070000',
		uta2010: '100770182070000',
		latitude: -27.826913357,
		longitude: -65.740107927,
		municipalityId: 1912
	},
	{
		id: 4037,
		name: 'VILLA DE BALCOZNA',
		uta2020: '100770182110000',
		uta2010: '100770182110000',
		latitude: -27.878357559,
		longitude: -65.719075894,
		municipalityId: 1912
	},
	{
		id: 4038,
		name: 'PALO LABRADO',
		uta2020: '100770182090000',
		uta2010: '100770182090000',
		latitude: -28.336093448,
		longitude: -65.627429915,
		municipalityId: 1912
	},
	{
		id: 4039,
		name: 'SUMAMPA',
		uta2020: '100770182000035',
		uta2010: '100770182000035',
		latitude: -28.077234268,
		longitude: -65.584030151,
		municipalityId: 1912
	},
	{
		id: 4040,
		name: 'LA MERCED',
		uta2020: '100770182050000',
		uta2010: '100770182050000',
		latitude: -28.153764905,
		longitude: -65.669606241,
		municipalityId: 1912
	},
	{
		id: 4041,
		name: 'MONTE POTRERO',
		uta2020: '100770182080000',
		uta2010: '100770182080000',
		latitude: -28.191246073,
		longitude: -65.670675013,
		municipalityId: 1912
	},
	{
		id: 4042,
		name: 'SAN ANTONIO',
		uta2020: '100770182100000',
		uta2010: '100770182100000',
		latitude: -28.007308369,
		longitude: -65.726850393,
		municipalityId: 1912
	},
	{
		id: 4043,
		name: 'EL BASTIDOR',
		uta2020: '100770182000005',
		uta2010: '100770182000005',
		latitude: -28.196598053,
		longitude: -65.662994385,
		municipalityId: 1912
	},
	{
		id: 4044,
		name: 'LA VIÑA',
		uta2020: '100770182060000',
		uta2010: '100770182060000',
		latitude: -28.044445783,
		longitude: -65.607938358,
		municipalityId: 1912
	},
	{
		id: 4045,
		name: 'VILLA COLLANTES',
		uta2020: '100770182000039',
		uta2010: '100770182000039',
		latitude: -27.96842,
		longitude: -65.72288,
		municipalityId: 1912
	},
	{
		id: 4046,
		name: 'SANTA BARBARA',
		uta2020: '100770182000033',
		uta2010: '100770182000033',
		latitude: -28.110385895,
		longitude: -65.682823181,
		municipalityId: 1912
	},
	{
		id: 4047,
		name: 'EL ROSARIO',
		uta2020: '100770182020000',
		uta2010: '100770182020000',
		latitude: -27.987754103,
		longitude: -65.68860694,
		municipalityId: 1912
	},
	{
		id: 4048,
		name: 'AMADORES',
		uta2020: '100770182010000',
		uta2010: '100770182010000',
		latitude: -28.26803638,
		longitude: -65.646210815,
		municipalityId: 1912
	},
	{
		id: 4049,
		name: 'BARRO NEGRO',
		uta2020: '100770182000001',
		uta2010: '100770182000001',
		latitude: -27.854732513,
		longitude: -65.717269898,
		municipalityId: 1912
	},
	{
		id: 4050,
		name: 'LA BAJADA',
		uta2020: '100770182030000',
		uta2010: '100770182030000',
		latitude: -28.392052491,
		longitude: -65.62826499,
		municipalityId: 1912
	},
	{
		id: 4051,
		name: 'COSQUIN',
		uta2020: '140910679070000',
		uta2010: '140910679070000',
		latitude: -31.240571225,
		longitude: -64.465531257,
		municipalityId: 280
	},
	{
		id: 4052,
		name: 'OLAEN',
		uta2020: '140910679000073',
		uta2010: '140910679000073',
		latitude: -31.157274403,
		longitude: -64.616639845,
		municipalityId: 280
	},
	{
		id: 4053,
		name: 'QUEBRADA DE LUNA',
		uta2020: '140910679170000',
		uta2010: '140910679170000',
		latitude: -30.794989887,
		longitude: -64.521097886,
		municipalityId: 280
	},
	{
		id: 4054,
		name: 'BOSQUE ALEGRE',
		uta2020: '140910679000007',
		uta2010: '140910679000007',
		latitude: -31.105800629,
		longitude: -64.591285706,
		municipalityId: 280
	},
	{
		id: 4055,
		name: 'EL CARRIZAL',
		uta2020: '140910679000031',
		uta2010: '140910679000031',
		latitude: -30.731337122,
		longitude: -64.598332029,
		municipalityId: 280
	},
	{
		id: 4056,
		name: 'PUESTO RAMALLO',
		uta2020: '140910679000079',
		uta2010: '140910679000079',
		latitude: -31.120942134,
		longitude: -64.548726734,
		municipalityId: 280
	},
	{
		id: 4057,
		name: 'CUCHILLO CO',
		uta2020: '420845042010000',
		uta2010: '420845042010000',
		latitude: -38.333678474,
		longitude: -64.642252696,
		municipalityId: 1981
	},
	{
		id: 4058,
		name: 'ANIMANA',
		uta2020: '661540385020000',
		uta2010: '661540385020000',
		latitude: -25.925069535,
		longitude: -65.963488639,
		municipalityId: 1869
	},
	{
		id: 4059,
		name: 'CORRALITO',
		uta2020: '661540385000030',
		uta2010: '661540385000030',
		latitude: -25.961971901,
		longitude: -65.864907786,
		municipalityId: 1869
	},
	{
		id: 4060,
		name: 'SAN ANTONIO',
		uta2020: '661540385000138',
		uta2010: '661540385000138',
		latitude: -25.997333527,
		longitude: -66.030990601,
		municipalityId: 1869
	},
	{
		id: 4061,
		name: 'EL BARRIAL',
		uta2020: '661540385030000',
		uta2010: '661540385030000',
		latitude: -25.911918962,
		longitude: -65.950964279,
		municipalityId: 1869
	},
	{
		id: 4062,
		name: 'COLONIA OFICIAL 17',
		uta2020: '300289143000021',
		uta2010: '300289143000021',
		latitude: -30.556074949,
		longitude: -58.089122383,
		municipalityId: 1556
	},
	{
		id: 4063,
		name: 'COLONIA SANTA MARIA',
		uta2020: '300289143000026',
		uta2010: '300289143000026',
		latitude: -30.599337521,
		longitude: -58.185801171,
		municipalityId: 1556
	},
	{
		id: 4064,
		name: 'FORTUNA',
		uta2020: '300289143000033',
		uta2010: '300289143000033',
		latitude: -30.65657029,
		longitude: -58.303423336,
		municipalityId: 1556
	},
	{
		id: 4065,
		name: 'FORTIN MBORORE',
		uta2020: '540630217000009',
		uta2010: '540630217000009',
		latitude: -25.629453164,
		longitude: -54.566203183,
		municipalityId: 2155
	},
	{
		id: 4066,
		name: 'PUERTO PENINSULA',
		uta2020: '540630217000023',
		uta2010: '540630217000023',
		latitude: -25.679050446,
		longitude: -54.646686554,
		municipalityId: 2155
	},
	{
		id: 4067,
		name: 'PUERTO CANOAS',
		uta2020: '540630217000016',
		uta2010: '540630217000016',
		latitude: -25.70662117,
		longitude: -54.421669006,
		municipalityId: 2155
	},
	{
		id: 4068,
		name: 'PUERTO IGUAZU',
		uta2020: '540630217030000',
		uta2010: '540630217030000',
		latitude: -25.601043115,
		longitude: -54.576736881,
		municipalityId: 2155
	},
	{
		id: 4069,
		name: 'VILLA ALTA',
		uta2020: '540630217000035',
		uta2010: '540630217000035',
		latitude: -25.613533874,
		longitude: -54.573543307,
		municipalityId: 2155
	},
	{
		id: 4070,
		name: 'CATARATAS DEL IGUAZU',
		uta2020: '540630217000003',
		uta2010: '540630217000003',
		latitude: -25.668334961,
		longitude: -54.449279785,
		municipalityId: 2155
	},
	{
		id: 4071,
		name: 'YRYAPU',
		uta2020: '540630217000037',
		uta2010: '540630217000037',
		latitude: -25.61555014,
		longitude: -54.55266646,
		municipalityId: 2155
	},
	{
		id: 4072,
		name: 'LA PAQUITA',
		uta2020: '141401267240000',
		uta2010: '141401267240000',
		latitude: -30.907054577,
		longitude: -62.215436182,
		municipalityId: 406
	},
	{
		id: 4073,
		name: 'EL 94',
		uta2020: '820983701000019',
		uta2010: '820983701000019',
		latitude: -29.6104906,
		longitude: -60.0378222,
		municipalityId: 972
	},
	{
		id: 4074,
		name: 'CAMPO BERLI',
		uta2020: '820983701000003',
		uta2010: '820983701000003',
		latitude: -29.55007199,
		longitude: -60.014584343,
		municipalityId: 972
	},
	{
		id: 4075,
		name: 'CAMPO HUBER',
		uta2020: '820983701000004',
		uta2010: '820983701000004',
		latitude: -29.584603127,
		longitude: -59.837989495,
		municipalityId: 972
	},
	{
		id: 4076,
		name: 'EL GUSANO',
		uta2020: '820983701000022',
		uta2010: '820983701000022',
		latitude: -29.595092567,
		longitude: -59.776491771,
		municipalityId: 972
	},
	{
		id: 4077,
		name: 'COLONIA DURAN',
		uta2020: '820983701030000',
		uta2010: '820983701030000',
		latitude: -29.56075372,
		longitude: -59.927069354,
		municipalityId: 972
	},
	{
		id: 4078,
		name: 'GOLONDRINA',
		uta2020: '821334163060000',
		uta2010: '821334163060000',
		latitude: -28.558870958,
		longitude: -60.025191932,
		municipalityId: 1002
	},
	{
		id: 4079,
		name: 'SAN SIMON',
		uta2020: '660420098000114',
		uta2010: '660420098000114',
		latitude: -25.097923279,
		longitude: -65.36340332,
		municipalityId: 1853
	},
	{
		id: 4080,
		name: 'EL CARRIL',
		uta2020: '660420098020000',
		uta2010: '660420098020000',
		latitude: -25.076854703,
		longitude: -65.493847392,
		municipalityId: 1853
	},
	{
		id: 4081,
		name: 'EL PEDREGAL',
		uta2020: '660420098000039',
		uta2010: '660420098000039',
		latitude: -25.039899826,
		longitude: -65.548347473,
		municipalityId: 1853
	},
	{
		id: 4082,
		name: 'LAS GARZAS',
		uta2020: '660420098000077',
		uta2010: '660420098000077',
		latitude: -25.130189896,
		longitude: -65.388534546,
		municipalityId: 1853
	},
	{
		id: 4083,
		name: 'LAS BARRANCAS',
		uta2020: '660420098000076',
		uta2010: '660420098000076',
		latitude: -25.076213837,
		longitude: -65.462539673,
		municipalityId: 1853
	},
	{
		id: 4084,
		name: 'CALVIMONTE',
		uta2020: '660420098000010',
		uta2010: '660420098000010',
		latitude: -25.11119,
		longitude: -65.41985,
		municipalityId: 1853
	},
	{
		id: 4085,
		name: 'SAN GREGORIO',
		uta2020: '740216063000118',
		uta2010: '740216063000118',
		latitude: -33.196651459,
		longitude: -65.932792664,
		municipalityId: 1102
	},
	{
		id: 4086,
		name: 'SALADILLO',
		uta2020: '740216063090000',
		uta2010: '740216063090000',
		latitude: -33.200566492,
		longitude: -65.853136338,
		municipalityId: 1102
	},
	{
		id: 4087,
		name: 'LAS ISLETILLAS',
		uta2020: '141613148080000',
		uta2010: '141613148080000',
		latitude: -32.510097987,
		longitude: -63.929022936,
		municipalityId: 353
	},
	{
		id: 4088,
		name: 'POZUELOS',
		uta2020: '861476581100000',
		uta2010: '861476581100000',
		latitude: -27.34363384,
		longitude: -64.702675251,
		municipalityId: 1459
	},
	{
		id: 4089,
		name: 'PUESTO NUEVO',
		uta2020: '861610000000092',
		uta2010: '861610000000092',
		latitude: -27.98756,
		longitude: -63.89136,
		municipalityId: 1390
	},
	{
		id: 4090,
		name: 'LA FLORIDA',
		uta2020: '861610000000054',
		uta2010: '861610000000054',
		latitude: -27.84263757,
		longitude: -64.13902975,
		municipalityId: 1390
	},
	{
		id: 4091,
		name: 'LA RIVERA',
		uta2020: '861610000000062',
		uta2010: '861610000000062',
		latitude: -27.89341,
		longitude: -64.07962,
		municipalityId: 1390
	},
	{
		id: 4092,
		name: 'SAN RAMON',
		uta2020: '861610000000110',
		uta2010: '861610000000110',
		latitude: -27.96337,
		longitude: -63.88092,
		municipalityId: 1390
	},
	{
		id: 4093,
		name: 'MILI',
		uta2020: '861610000000081',
		uta2010: '861610000000081',
		latitude: -27.961077948,
		longitude: -63.999793078,
		municipalityId: 1390
	},
	{
		id: 4094,
		name: 'CHILCA',
		uta2020: '861610000000019',
		uta2010: '861610000000019',
		latitude: -27.8229292,
		longitude: -64.02343149,
		municipalityId: 1390
	},
	{
		id: 4095,
		name: 'LOS PEREYRA',
		uta2020: '861610000000074',
		uta2010: '861610000000074',
		latitude: -27.94883,
		longitude: -64.06576,
		municipalityId: 1390
	},
	{
		id: 4096,
		name: 'POZO SUMI',
		uta2020: '861610000000090',
		uta2010: '861610000000090',
		latitude: -27.943535807,
		longitude: -63.908917075,
		municipalityId: 1390
	},
	{
		id: 4097,
		name: 'LOS ARIAS',
		uta2020: '861610000000068',
		uta2010: '861610000000068',
		latitude: -27.868019104,
		longitude: -64.135383606,
		municipalityId: 1390
	},
	{
		id: 4098,
		name: 'COLONIA JAIME',
		uta2020: '861610000000020',
		uta2010: '861610000000020',
		latitude: -27.79695,
		longitude: -64.10317,
		municipalityId: 1390
	},
	{
		id: 4099,
		name: 'SAUCE BAJADA',
		uta2020: '861610000000120',
		uta2010: '861610000000120',
		latitude: -27.79950807,
		longitude: -64.2037388,
		municipalityId: 1390
	},
	{
		id: 4100,
		name: 'EL QUEBRACHAL',
		uta2020: '861610000000031',
		uta2010: '861610000000031',
		latitude: -27.92288525,
		longitude: -63.94379061,
		municipalityId: 1390
	},
	{
		id: 4101,
		name: 'LOMITAS',
		uta2020: '861610000000066',
		uta2010: '861610000000066',
		latitude: -27.87719,
		longitude: -63.88819,
		municipalityId: 1390
	},
	{
		id: 4102,
		name: 'NUEVA INDUSTRIA',
		uta2020: '861610000000086',
		uta2010: '861610000000086',
		latitude: -27.91828,
		longitude: -64.00129,
		municipalityId: 1390
	},
	{
		id: 4103,
		name: 'LOAJ',
		uta2020: '861610000000064',
		uta2010: '861610000000064',
		latitude: -27.906133001,
		longitude: -63.843559964,
		municipalityId: 1390
	},
	{
		id: 4104,
		name: 'HIGUERA CHACRA',
		uta2020: '861610000000037',
		uta2010: '861610000000037',
		latitude: -27.85717054,
		longitude: -64.05446247,
		municipalityId: 1390
	},
	{
		id: 4105,
		name: 'EL SOLER',
		uta2020: '861610000000034',
		uta2010: '861610000000034',
		latitude: -27.763551594,
		longitude: -64.12530531,
		municipalityId: 1390
	},
	{
		id: 4106,
		name: 'JANTA',
		uta2020: '861610000000041',
		uta2010: '861610000000041',
		latitude: -27.791078568,
		longitude: -64.008926392,
		municipalityId: 1390
	},
	{
		id: 4107,
		name: 'BUEY MUERTO',
		uta2020: '861610000000012',
		uta2010: '861610000000012',
		latitude: -27.84078886,
		longitude: -63.93408912,
		municipalityId: 1390
	},
	{
		id: 4108,
		name: 'EL REFUGIO',
		uta2020: '861610000000032',
		uta2010: '861610000000032',
		latitude: -27.81263,
		longitude: -64.06808,
		municipalityId: 1390
	},
	{
		id: 4109,
		name: 'MIRELLA',
		uta2020: '861610000000083',
		uta2010: '861610000000083',
		latitude: -27.78736,
		longitude: -64.02837,
		municipalityId: 1390
	},
	{
		id: 4110,
		name: 'TRONCOS',
		uta2020: '861610000000130',
		uta2010: '861610000000130',
		latitude: -27.7943,
		longitude: -63.90269,
		municipalityId: 1390
	},
	{
		id: 4111,
		name: 'MACO',
		uta2020: '861610000000078',
		uta2010: '861610000000078',
		latitude: -27.858430862,
		longitude: -64.202659607,
		municipalityId: 1390
	},
	{
		id: 4112,
		name: 'MORCILLO',
		uta2020: '861610000000084',
		uta2010: '861610000000084',
		latitude: -27.82859,
		longitude: -63.98976,
		municipalityId: 1390
	},
	{
		id: 4113,
		name: 'VILLA SANTA RITA',
		uta2020: '020110001010004',
		uta2010: '020110001010004',
		latitude: -34.61619362,
		longitude: -58.482957352,
		municipalityId: 2448
	},
	{
		id: 4114,
		name: 'VILLA GENERAL MITRE',
		uta2020: '020110001010003',
		uta2010: '020110001010003',
		latitude: -34.610028951,
		longitude: -58.468942554,
		municipalityId: 2448
	},
	{
		id: 4115,
		name: 'VILLA DEL PARQUE',
		uta2020: '020110001010001',
		uta2010: '020110001010001',
		latitude: -34.6042463,
		longitude: -58.490676432,
		municipalityId: 2448
	},
	{
		id: 4116,
		name: 'VILLA DEVOTO',
		uta2020: '020110001010002',
		uta2010: '020110001010002',
		latitude: -34.602380314,
		longitude: -58.51424371,
		municipalityId: 2448
	},
	{
		id: 4117,
		name: 'BONPLAND',
		uta2020: '540210056010000',
		uta2010: '540210056010000',
		latitude: -27.482069689,
		longitude: -55.477420084,
		municipalityId: 2130
	},
	{
		id: 4118,
		name: 'COLONIA VIRARO',
		uta2020: '300709445000036',
		uta2010: '300709445000036',
		latitude: -31.291345184,
		longitude: -59.428147141,
		municipalityId: 1584
	},
	{
		id: 4119,
		name: 'VAQUERIA',
		uta2020: '660630168000116',
		uta2010: '660630168000116',
		latitude: -25.68403,
		longitude: -65.21744,
		municipalityId: 1872
	},
	{
		id: 4120,
		name: 'SANTA BARBARA',
		uta2020: '660630168000103',
		uta2010: '660630168000103',
		latitude: -25.925518036,
		longitude: -65.712768555,
		municipalityId: 1872
	},
	{
		id: 4121,
		name: 'SAUCE REDONDO',
		uta2020: '660630168000109',
		uta2010: '660630168000109',
		latitude: -25.44988,
		longitude: -65.46138,
		municipalityId: 1872
	},
	{
		id: 4122,
		name: 'LOS SAUCES',
		uta2020: '660630168000078',
		uta2010: '660630168000078',
		latitude: -25.958312681,
		longitude: -65.496750786,
		municipalityId: 1872
	},
	{
		id: 4123,
		name: 'CARAHUASI',
		uta2020: '660630168000008',
		uta2010: '660630168000008',
		latitude: -25.74297905,
		longitude: -65.428085327,
		municipalityId: 1872
	},
	{
		id: 4124,
		name: 'ACOSTA',
		uta2020: '660630168000002',
		uta2010: '660630168000002',
		latitude: -25.77241,
		longitude: -65.34234,
		municipalityId: 1872
	},
	{
		id: 4125,
		name: 'SANTA CLARA',
		uta2020: '660630168000104',
		uta2010: '660630168000104',
		latitude: -25.530340195,
		longitude: -65.442481995,
		municipalityId: 1872
	},
	{
		id: 4126,
		name: 'EL SAPO',
		uta2020: '660630168000035',
		uta2010: '660630168000035',
		latitude: -25.938186646,
		longitude: -65.698005676,
		municipalityId: 1872
	},
	{
		id: 4127,
		name: 'LAS JUNTAS',
		uta2020: '660630168000069',
		uta2010: '660630168000069',
		latitude: -25.706632568,
		longitude: -65.548529445,
		municipalityId: 1872
	},
	{
		id: 4128,
		name: 'GUACHIPAS',
		uta2020: '660630168010000',
		uta2010: '660630168010000',
		latitude: -25.523548472,
		longitude: -65.51876445,
		municipalityId: 1872
	},
	{
		id: 4129,
		name: 'COROPAMPA',
		uta2020: '660630168000014',
		uta2010: '660630168000014',
		latitude: -25.501780734,
		longitude: -65.491551212,
		municipalityId: 1872
	},
	{
		id: 4130,
		name: 'LA BODEGUITA',
		uta2020: '660630168000049',
		uta2010: '660630168000049',
		latitude: -25.516390921,
		longitude: -65.241356218,
		municipalityId: 1872
	},
	{
		id: 4131,
		name: 'EL GALPON',
		uta2020: '660630168000027',
		uta2010: '660630168000027',
		latitude: -25.372398377,
		longitude: -65.386306763,
		municipalityId: 1872
	},
	{
		id: 4132,
		name: 'LA FLORIDA',
		uta2020: '660630168000055',
		uta2010: '660630168000055',
		latitude: -25.543487549,
		longitude: -65.472686768,
		municipalityId: 1872
	},
	{
		id: 4133,
		name: 'ALEMANIA',
		uta2020: '660630168000003',
		uta2010: '660630168000003',
		latitude: -25.624862664,
		longitude: -65.612635669,
		municipalityId: 1872
	},
	{
		id: 4134,
		name: 'PAMPA GRANDE',
		uta2020: '660630168000085',
		uta2010: '660630168000085',
		latitude: -25.865511708,
		longitude: -65.504464886,
		municipalityId: 1872
	},
	{
		id: 4135,
		name: 'LOS CASTILLOS',
		uta2020: '660630168000075',
		uta2010: '660630168000075',
		latitude: -25.902008057,
		longitude: -65.71900177,
		municipalityId: 1872
	},
	{
		id: 4136,
		name: 'LA COSTA',
		uta2020: '660630168000054',
		uta2010: '660630168000054',
		latitude: -25.527746201,
		longitude: -65.480041504,
		municipalityId: 1872
	},
	{
		id: 4137,
		name: 'CINCO DURAZNOS',
		uta2020: '660630168000012',
		uta2010: '660630168000012',
		latitude: -25.982606888,
		longitude: -65.517379761,
		municipalityId: 1872
	},
	{
		id: 4138,
		name: 'SANTA ROSA',
		uta2020: '660630168000106',
		uta2010: '660630168000106',
		latitude: -25.763723373,
		longitude: -65.314971924,
		municipalityId: 1872
	},
	{
		id: 4139,
		name: 'SASTRE',
		uta2020: '821260322160000',
		uta2010: '821260322160000',
		latitude: -31.769532524,
		longitude: -61.829452957,
		municipalityId: 936
	},
	{
		id: 4140,
		name: 'ESTACION KILOMETRO 465',
		uta2020: '821260322000031',
		uta2010: '821260322000031',
		latitude: -31.822757011,
		longitude: -61.772193906,
		municipalityId: 936
	},
	{
		id: 4141,
		name: 'ALDEA EIGENFELD',
		uta2020: '300849575000004',
		uta2010: '300849575000004',
		latitude: -31.885412846,
		longitude: -60.234448335,
		municipalityId: 1729
	},
	{
		id: 4142,
		name: 'GALVEZ',
		uta2020: '821050252130000',
		uta2010: '821050252130000',
		latitude: -32.032645592,
		longitude: -61.219961027,
		municipalityId: 982
	},
	{
		id: 4143,
		name: 'CASTELLANO PLAZA',
		uta2020: '820212168000024',
		uta2010: '820212168000024',
		latitude: -31.1551178,
		longitude: -61.7330738,
		municipalityId: 755
	},
	{
		id: 4144,
		name: 'CASTELLANOS',
		uta2020: '820212168080000',
		uta2010: '820212168080000',
		latitude: -31.208539656,
		longitude: -61.725595556,
		municipalityId: 755
	},
	{
		id: 4145,
		name: 'COLONIA LA FRANCIA',
		uta2020: '821264044000026',
		uta2010: '821264044000026',
		latitude: -31.962238253,
		longitude: -61.51263874,
		municipalityId: 937
	},
	{
		id: 4146,
		name: 'CAÑADA ROSQUIN',
		uta2020: '821264044010000',
		uta2010: '821264044010000',
		latitude: -32.056293404,
		longitude: -61.602542995,
		municipalityId: 937
	},
	{
		id: 4147,
		name: 'CINTRA',
		uta2020: '141821638100000',
		uta2010: '141821638100000',
		latitude: -32.308147633,
		longitude: -62.653118415,
		municipalityId: 100
	},
	{
		id: 4148,
		name: 'TALA POZO',
		uta2020: '900078049000312',
		uta2010: '900078049000312',
		latitude: -26.6812057,
		longitude: -64.7328482,
		municipalityId: 2237
	},
	{
		id: 4149,
		name: 'PIEDRABUENA',
		uta2020: '900078049070000',
		uta2010: '900078049070000',
		latitude: -26.73986069,
		longitude: -64.649304022,
		municipalityId: 2237
	},
	{
		id: 4150,
		name: 'LA TUNA',
		uta2020: '900078049000202',
		uta2010: '900078049000202',
		latitude: -26.756958008,
		longitude: -64.694061279,
		municipalityId: 2237
	},
	{
		id: 4151,
		name: 'VILLA DOLORES',
		uta2020: '900078049000331',
		uta2010: '900078049000331',
		latitude: -26.682218552,
		longitude: -64.73059082,
		municipalityId: 2237
	},
	{
		id: 4152,
		name: 'SAN MIGUEL',
		uta2020: '900078049000294',
		uta2010: '900078049000294',
		latitude: -26.720022202,
		longitude: -64.701675415,
		municipalityId: 2237
	},
	{
		id: 4153,
		name: 'SANTA ROSA',
		uta2020: '900078049000303',
		uta2010: '900078049000303',
		latitude: -26.6851027,
		longitude: -64.7944105,
		municipalityId: 2237
	},
	{
		id: 4154,
		name: 'LA UNION',
		uta2020: '900078049000203',
		uta2010: '900078049000203',
		latitude: -26.800081253,
		longitude: -64.726303101,
		municipalityId: 2237
	},
	{
		id: 4155,
		name: 'LA VERDE',
		uta2020: '900078049000204',
		uta2010: '900078049000204',
		latitude: -26.831453323,
		longitude: -64.705986023,
		municipalityId: 2237
	},
	{
		id: 4156,
		name: 'LA SOLEDAD',
		uta2020: '900078049000197',
		uta2010: '900078049000197',
		latitude: -26.6944,
		longitude: -64.66503,
		municipalityId: 2237
	},
	{
		id: 4157,
		name: 'LA VIRGINIA',
		uta2020: '900078049000205',
		uta2010: '900078049000205',
		latitude: -26.7455182,
		longitude: -64.786538,
		municipalityId: 2237
	},
	{
		id: 4158,
		name: 'VILLA MARIA',
		uta2020: '900078049000334',
		uta2010: '900078049000334',
		latitude: -26.7309,
		longitude: -64.61624,
		municipalityId: 2237
	},
	{
		id: 4159,
		name: 'EL ONCE',
		uta2020: '900078049000079',
		uta2010: '900078049000079',
		latitude: -26.808671951,
		longitude: -64.677833557,
		municipalityId: 2237
	},
	{
		id: 4160,
		name: 'PUESTO DEL MEDIO',
		uta2020: '900078049000269',
		uta2010: '900078049000269',
		latitude: -26.78775,
		longitude: -64.66141,
		municipalityId: 2237
	},
	{
		id: 4161,
		name: 'ABRAMO',
		uta2020: '420770007010000',
		uta2010: '420770007010000',
		latitude: -37.894331329,
		longitude: -63.851502591,
		municipalityId: 1967
	},
	{
		id: 4162,
		name: 'HUCAL',
		uta2020: '420770007040000',
		uta2010: '420770007040000',
		latitude: -37.784962918,
		longitude: -64.03066778,
		municipalityId: 1967
	},
	{
		id: 4163,
		name: 'MEDIA LUNA',
		uta2020: '861120000000014',
		uta2010: '861120000000014',
		latitude: -29.519780833,
		longitude: -63.00759897,
		municipalityId: 1485
	},
	{
		id: 4164,
		name: 'SAN NICOLAS',
		uta2020: '861120000000018',
		uta2010: '861120000000018',
		latitude: -29.33767,
		longitude: -63.1146,
		municipalityId: 1485
	},
	{
		id: 4165,
		name: 'EL CUADRO',
		uta2020: '861120000000004',
		uta2010: '861120000000004',
		latitude: -29.35067,
		longitude: -62.84823,
		municipalityId: 1485
	},
	{
		id: 4166,
		name: 'LOTE 24',
		uta2020: '861120000000012',
		uta2010: '861120000000012',
		latitude: -29.163148276,
		longitude: -62.969993115,
		municipalityId: 1485
	},
	{
		id: 4167,
		name: 'LIMACHE',
		uta2020: '861120000000010',
		uta2010: '861120000000010',
		latitude: -29.854269471,
		longitude: -62.729775736,
		municipalityId: 1485
	},
	{
		id: 4168,
		name: 'EL HUAICO',
		uta2020: '861120000000005',
		uta2010: '861120000000005',
		latitude: -29.774368866,
		longitude: -62.554942886,
		municipalityId: 1485
	},
	{
		id: 4169,
		name: 'LAS ABRAS',
		uta2020: '861120000000006',
		uta2010: '861120000000006',
		latitude: -29.241805199,
		longitude: -62.989666335,
		municipalityId: 1485
	},
	{
		id: 4170,
		name: 'EL ALBARDON',
		uta2020: '861120000000002',
		uta2010: '861120000000002',
		latitude: -29.38740724,
		longitude: -63.08189868,
		municipalityId: 1485
	},
	{
		id: 4171,
		name: 'LAS VIBORITAS',
		uta2020: '861120000000009',
		uta2010: '861120000000009',
		latitude: -29.59601,
		longitude: -62.6551,
		municipalityId: 1485
	},
	{
		id: 4172,
		name: 'QUEBRACHITOS',
		uta2020: '861120000000016',
		uta2010: '861120000000016',
		latitude: -29.48666,
		longitude: -62.75711,
		municipalityId: 1485
	},
	{
		id: 4173,
		name: 'DOMINGO DE RAMOS',
		uta2020: '861120000000001',
		uta2010: '861120000000001',
		latitude: -29.291571662,
		longitude: -63.034503114,
		municipalityId: 1485
	},
	{
		id: 4174,
		name: 'SAN ANTONIO',
		uta2020: '820212343330000',
		uta2010: '820212343330000',
		latitude: -31.212813418,
		longitude: -61.725720001,
		municipalityId: 756
	},
	{
		id: 4175,
		name: 'BELLA VISTA',
		uta2020: '067600760010001',
		uta2010: '067600760010001',
		latitude: -34.575140152,
		longitude: -58.696040989,
		municipalityId: 623
	},
	{
		id: 4176,
		name: 'CAMPO DE MAYO',
		uta2020: '067600760010002',
		uta2010: '067600760010002',
		latitude: -34.534681819,
		longitude: -58.651386017,
		municipalityId: 623
	},
	{
		id: 4177,
		name: 'MUÑIZ',
		uta2020: '067600760010003',
		uta2010: '067600760010003',
		latitude: -34.555735163,
		longitude: -58.708022757,
		municipalityId: 623
	},
	{
		id: 4178,
		name: 'SAN MIGUEL',
		uta2020: '067600760010004',
		uta2010: '067600760010004',
		latitude: -34.553622868,
		longitude: -58.73478752,
		municipalityId: 623
	},
	{
		id: 4179,
		name: 'CEIBAS',
		uta2020: '300630210020000',
		uta2010: '300630210020000',
		latitude: -33.499412405,
		longitude: -58.800354171,
		municipalityId: 1694
	},
	{
		id: 4180,
		name: 'SAN ROQUE',
		uta2020: '140912518200000',
		uta2010: '140912518200000',
		latitude: -31.349690437,
		longitude: -64.459929392,
		municipalityId: 281
	},
	{
		id: 4181,
		name: 'CASSAFFOUSTH',
		uta2020: '140912518000014',
		uta2010: '140912518000014',
		latitude: -31.363686689,
		longitude: -64.451495257,
		municipalityId: 281
	},
	{
		id: 4182,
		name: 'SAN JAVIER',
		uta2020: '541050497040000',
		uta2010: '541050497040000',
		latitude: -27.865323157,
		longitude: -55.134837653,
		municipalityId: 2125
	},
	{
		id: 4183,
		name: 'RINCON DEL GUERRERO',
		uta2020: '541050497000023',
		uta2010: '541050497000023',
		latitude: -27.75752912,
		longitude: -55.212953364,
		municipalityId: 2125
	},
	{
		id: 4184,
		name: 'INVERNADA GRANDE',
		uta2020: '541050497000009',
		uta2010: '541050497000009',
		latitude: -27.77098465,
		longitude: -55.238742828,
		municipalityId: 2125
	},
	{
		id: 4185,
		name: 'PICADA SAN JAVIER',
		uta2020: '541050497000018',
		uta2010: '541050497000018',
		latitude: -27.766956135,
		longitude: -55.250256061,
		municipalityId: 2125
	},
	{
		id: 4186,
		name: 'TRES ESQUINAS',
		uta2020: '541050497000025',
		uta2010: '541050497000025',
		latitude: -27.830636978,
		longitude: -55.181602478,
		municipalityId: 2125
	},
	{
		id: 4187,
		name: 'LOS GALPONES',
		uta2020: '541050497000015',
		uta2010: '541050497000015',
		latitude: -27.795886759,
		longitude: -55.194088713,
		municipalityId: 2125
	},
	{
		id: 4188,
		name: 'CAMPO MINETTI',
		uta2020: '141190000000022',
		uta2010: '141190000000022',
		latitude: -31.712992835,
		longitude: -63.105066191,
		municipalityId: 309
	},
	{
		id: 4189,
		name: 'CAMPO SCARAMUZZA',
		uta2020: '141190000000023',
		uta2010: '141190000000023',
		latitude: -31.873368383,
		longitude: -63.577964528,
		municipalityId: 309
	},
	{
		id: 4190,
		name: 'CAMPO LOS MATORRALES',
		uta2020: '141190000000018',
		uta2010: '141190000000018',
		latitude: -31.706091443,
		longitude: -63.626633517,
		municipalityId: 309
	},
	{
		id: 4191,
		name: 'ORATORIO DE PERALTA',
		uta2020: '141190000000053',
		uta2010: '141190000000053',
		latitude: -31.495221923,
		longitude: -63.39678932,
		municipalityId: 309
	},
	{
		id: 4192,
		name: 'COLONIA NORTE',
		uta2020: '141190000000029',
		uta2010: '141190000000029',
		latitude: -31.6042471,
		longitude: -63.8332459,
		municipalityId: 309
	},
	{
		id: 4193,
		name: 'COLONIA DOS HERMANAS',
		uta2020: '141190000000027',
		uta2010: '141190000000027',
		latitude: -31.6781663,
		longitude: -63.9548779,
		municipalityId: 309
	},
	{
		id: 4194,
		name: 'CAMPO CAROLINI',
		uta2020: '141190000000008',
		uta2010: '141190000000008',
		latitude: -31.9438757,
		longitude: -63.6073171,
		municipalityId: 309
	},
	{
		id: 4195,
		name: 'LA LAGUNILLA',
		uta2020: '141190000000040',
		uta2010: '141190000000040',
		latitude: -31.7475625,
		longitude: -63.9549916,
		municipalityId: 309
	},
	{
		id: 4196,
		name: 'CAMPO MARTOLINO',
		uta2020: '141190000000021',
		uta2010: '141190000000021',
		latitude: -32.0057066,
		longitude: -63.3449483,
		municipalityId: 309
	},
	{
		id: 4197,
		name: 'CAMPO LA SIRENA',
		uta2020: '141190000000017',
		uta2010: '141190000000017',
		latitude: -31.9807245,
		longitude: -63.0622295,
		municipalityId: 309
	},
	{
		id: 4198,
		name: 'COSTA DEL CARMEN',
		uta2020: '141190000000033',
		uta2010: '141190000000033',
		latitude: -31.5075216,
		longitude: -63.2733974,
		municipalityId: 309
	},
	{
		id: 4199,
		name: 'LA RAMADA',
		uta2020: '141190000000042',
		uta2010: '141190000000042',
		latitude: -31.981128865,
		longitude: -63.222377928,
		municipalityId: 309
	},
	{
		id: 4200,
		name: 'CAMPO EL POLVORIN',
		uta2020: '141190000000011',
		uta2010: '141190000000011',
		latitude: -31.82874654,
		longitude: -63.158035855,
		municipalityId: 309
	},
	{
		id: 4201,
		name: 'COLONIA ADELA',
		uta2020: '141190000000026',
		uta2010: '141190000000026',
		latitude: -31.7122868,
		longitude: -63.2539693,
		municipalityId: 309
	},
	{
		id: 4202,
		name: 'A. DE ALVAREZ N° 1',
		uta2020: '141190000000001',
		uta2010: '141190000000001',
		latitude: -31.597730006,
		longitude: -63.245539405,
		municipalityId: 309
	},
	{
		id: 4203,
		name: 'COSTA ALEGRE',
		uta2020: '141190000000032',
		uta2010: '141190000000032',
		latitude: -31.498576526,
		longitude: -63.449790435,
		municipalityId: 309
	},
	{
		id: 4204,
		name: 'ARROYO DE ALVAREZ NRO 2',
		uta2020: '141190000000002',
		uta2010: '141190000000002',
		latitude: -31.5895001,
		longitude: -63.1536286,
		municipalityId: 309
	},
	{
		id: 4205,
		name: 'COLONIA SAN JOSE DE AGUAS COLORADAS',
		uta2020: '141190000000030',
		uta2010: '141190000000030',
		latitude: -31.902717095,
		longitude: -63.051246134,
		municipalityId: 309
	},
	{
		id: 4206,
		name: 'CAMPO LOS TRES ARBOLES',
		uta2020: '141190000000019',
		uta2010: '141190000000019',
		latitude: -31.8662543,
		longitude: -63.908558,
		municipalityId: 309
	},
	{
		id: 4207,
		name: 'CORRAL DE ARROYO',
		uta2020: '141190000000031',
		uta2010: '141190000000031',
		latitude: -31.796577282,
		longitude: -63.548502776,
		municipalityId: 309
	},
	{
		id: 4208,
		name: 'CAMPO BAUDIN',
		uta2020: '141190000000007',
		uta2010: '141190000000007',
		latitude: -31.745320122,
		longitude: -63.1760116,
		municipalityId: 309
	},
	{
		id: 4209,
		name: 'LA REPRESA',
		uta2020: '141190000000043',
		uta2010: '141190000000043',
		latitude: -31.3352183,
		longitude: -63.2722682,
		municipalityId: 309
	},
	{
		id: 4210,
		name: 'CAMPO DANIELE',
		uta2020: '141190000000010',
		uta2010: '141190000000010',
		latitude: -31.987674442,
		longitude: -63.809097237,
		municipalityId: 309
	},
	{
		id: 4211,
		name: 'SAN JOSE',
		uta2020: '141190000000063',
		uta2010: '141190000000063',
		latitude: -31.607982636,
		longitude: -63.773227692,
		municipalityId: 309
	},
	{
		id: 4212,
		name: 'CAMPO FICHETTI',
		uta2020: '141190000000014',
		uta2010: '141190000000014',
		latitude: -31.748787949,
		longitude: -63.378547579,
		municipalityId: 309
	},
	{
		id: 4213,
		name: 'CAMPO LA RAMADA',
		uta2020: '141190000000016',
		uta2010: '141190000000016',
		latitude: -31.985097528,
		longitude: -63.285049384,
		municipalityId: 309
	},
	{
		id: 4214,
		name: 'CAMPO LA ANGELINA',
		uta2020: '141190000000015',
		uta2010: '141190000000015',
		latitude: -31.949033,
		longitude: -63.7752293,
		municipalityId: 309
	},
	{
		id: 4215,
		name: 'PASO DE VELEZ',
		uta2020: '141190000000055',
		uta2010: '141190000000055',
		latitude: -31.676657665,
		longitude: -64.013983715,
		municipalityId: 309
	},
	{
		id: 4216,
		name: 'POZO DE LAS YEGUAS',
		uta2020: '141190000000060',
		uta2010: '141190000000060',
		latitude: -31.354188287,
		longitude: -63.312444345,
		municipalityId: 309
	},
	{
		id: 4217,
		name: 'CAMPO MARCHAND',
		uta2020: '141190000000020',
		uta2010: '141190000000020',
		latitude: -31.529815009,
		longitude: -63.267699156,
		municipalityId: 309
	},
	{
		id: 4218,
		name: 'CAMPO YAÑEZ',
		uta2020: '141190000000024',
		uta2010: '141190000000024',
		latitude: -31.4605795,
		longitude: -63.2962703,
		municipalityId: 309
	},
	{
		id: 4219,
		name: 'CAMPO ASINARI',
		uta2020: '141190000000006',
		uta2010: '141190000000006',
		latitude: -31.581029967,
		longitude: -63.360213586,
		municipalityId: 309
	},
	{
		id: 4220,
		name: 'LA ISLA',
		uta2020: '141190000000038',
		uta2010: '141190000000038',
		latitude: -31.657930178,
		longitude: -63.572373787,
		municipalityId: 309
	},
	{
		id: 4221,
		name: 'LA RIBERA',
		uta2020: '141190000000044',
		uta2010: '141190000000044',
		latitude: -31.6505214,
		longitude: -63.8469795,
		municipalityId: 309
	},
	{
		id: 4222,
		name: 'RINCON VIEJO',
		uta2020: '141190000000061',
		uta2010: '141190000000061',
		latitude: -31.597427192,
		longitude: -63.702194355,
		municipalityId: 309
	},
	{
		id: 4223,
		name: 'LAGUNILLA',
		uta2020: '141190000000048',
		uta2010: '141190000000048',
		latitude: -31.749532999,
		longitude: -63.955673973,
		municipalityId: 309
	},
	{
		id: 4224,
		name: 'CAMPO FALCO',
		uta2020: '141190000000013',
		uta2010: '141190000000013',
		latitude: -31.441043538,
		longitude: -63.370965976,
		municipalityId: 309
	},
	{
		id: 4225,
		name: 'CAMPO EL TACO',
		uta2020: '141190000000012',
		uta2010: '141190000000012',
		latitude: -31.9008556,
		longitude: -62.9513001,
		municipalityId: 309
	},
	{
		id: 4226,
		name: 'SAN JUAN DE QUILLAQUES',
		uta2020: '380846168090000',
		uta2010: '380846168090000',
		latitude: -23.146064798,
		longitude: -66.248537489,
		municipalityId: 1203
	},
	{
		id: 4227,
		name: 'POTRERO',
		uta2020: '380846168000046',
		uta2010: '380846168000046',
		latitude: -23.152467728,
		longitude: -66.309783935,
		municipalityId: 1203
	},
	{
		id: 4228,
		name: 'JAMA',
		uta2020: '380846168045000',
		uta2010: '380846168045000',
		latitude: -23.259929196,
		longitude: -67.023688781,
		municipalityId: 1203
	},
	{
		id: 4229,
		name: 'MINA PROVIDENCIA',
		uta2020: '380846168000031',
		uta2010: '380846168000031',
		latitude: -23.274887833,
		longitude: -66.834353427,
		municipalityId: 1203
	},
	{
		id: 4230,
		name: 'OLAROZ CHICO',
		uta2020: '380846168060000',
		uta2010: '380846168060000',
		latitude: -23.398991008,
		longitude: -66.782941462,
		municipalityId: 1203
	},
	{
		id: 4231,
		name: 'LOMA BLANCA',
		uta2020: '380846168000021',
		uta2010: '380846168000021',
		latitude: -23.072246552,
		longitude: -66.485740662,
		municipalityId: 1203
	},
	{
		id: 4232,
		name: 'SALAR DE JAMA',
		uta2020: '380846168000050',
		uta2010: '380846168000050',
		latitude: -23.23839789,
		longitude: -67.02740073,
		municipalityId: 1203
	},
	{
		id: 4233,
		name: 'CORANZULI',
		uta2020: '380846168020000',
		uta2010: '380846168020000',
		latitude: -23.013294948,
		longitude: -66.379288422,
		municipalityId: 1203
	},
	{
		id: 4234,
		name: 'CIENAGA GRANDE',
		uta2020: '380846168000008',
		uta2010: '380846168000008',
		latitude: -23.114919663,
		longitude: -66.250076294,
		municipalityId: 1203
	},
	{
		id: 4235,
		name: 'EL TORO',
		uta2020: '380846168030000',
		uta2010: '380846168030000',
		latitude: -23.138975059,
		longitude: -66.752445875,
		municipalityId: 1203
	},
	{
		id: 4236,
		name: 'OLAROZ GRANDE',
		uta2020: '380846168000041',
		uta2010: '380846168000041',
		latitude: -23.320285797,
		longitude: -66.837631226,
		municipalityId: 1203
	},
	{
		id: 4237,
		name: 'PICADA SUD',
		uta2020: '540700280000028',
		uta2010: '540700280000028',
		latitude: -27.637358375,
		longitude: -55.34714448,
		municipalityId: 2143
	},
	{
		id: 4238,
		name: 'PICADA AFRICANA',
		uta2020: '540700280000016',
		uta2010: '540700280000016',
		latitude: -27.62601533,
		longitude: -55.30052023,
		municipalityId: 2143
	},
	{
		id: 4239,
		name: 'LEANDRO N. ALEM',
		uta2020: '540700280070000',
		uta2010: '540700280070000',
		latitude: -27.601867604,
		longitude: -55.326465922,
		municipalityId: 2143
	},
	{
		id: 4240,
		name: 'SANTA MARIA DE PUNILLA',
		uta2020: '140910721210000',
		uta2010: '140910721210000',
		latitude: -31.270331986,
		longitude: -64.465335768,
		municipalityId: 282
	},
	{
		id: 4241,
		name: 'MALLIN',
		uta2020: '140910721150000',
		uta2010: '140910721150000',
		latitude: -31.297674745,
		longitude: -64.574981348,
		municipalityId: 282
	},
	{
		id: 4242,
		name: 'VILLA SAN JOSE',
		uta2020: '140910721310000',
		uta2010: '140910721310000',
		latitude: -31.2796128,
		longitude: -64.565343691,
		municipalityId: 282
	},
	{
		id: 4243,
		name: 'EL VOLCAN',
		uta2020: '740566259080000',
		uta2010: '740566259080000',
		latitude: -33.251296607,
		longitude: -66.187702297,
		municipalityId: 1133
	},
	{
		id: 4244,
		name: 'CHACAICO',
		uta2020: '580840000000005',
		uta2010: '580840000000005',
		latitude: -37.357940674,
		longitude: -70.870056152,
		municipalityId: 2401
	},
	{
		id: 4245,
		name: 'TAQUIMILAN CENTRO',
		uta2020: '580840000000038',
		uta2010: '580840000000038',
		latitude: -37.563843155,
		longitude: -70.291698358,
		municipalityId: 2401
	},
	{
		id: 4246,
		name: 'RANQUILCO',
		uta2020: '580840000000033',
		uta2010: '580840000000033',
		latitude: -37.550109863,
		longitude: -70.823348999,
		municipalityId: 2401
	},
	{
		id: 4247,
		name: 'LA GREDA',
		uta2020: '580840000000020',
		uta2010: '580840000000020',
		latitude: -37.513175964,
		longitude: -70.609611511,
		municipalityId: 2401
	},
	{
		id: 4248,
		name: 'RAHUECO',
		uta2020: '580840000000031',
		uta2010: '580840000000031',
		latitude: -37.452659607,
		longitude: -70.424736023,
		municipalityId: 2401
	},
	{
		id: 4249,
		name: 'TRES CHORROS',
		uta2020: '580840000000039',
		uta2010: '580840000000039',
		latitude: -37.498335522,
		longitude: -70.380860446,
		municipalityId: 2401
	},
	{
		id: 4250,
		name: 'HUALCUPEN',
		uta2020: '580840000000018',
		uta2010: '580840000000018',
		latitude: -37.983708068,
		longitude: -70.632028779,
		municipalityId: 2401
	},
	{
		id: 4251,
		name: 'COLIPILLI ABAJO',
		uta2020: '580840000000010',
		uta2010: '580840000000010',
		latitude: -37.749685222,
		longitude: -70.31086692,
		municipalityId: 2401
	},
	{
		id: 4252,
		name: 'RANQUILON',
		uta2020: '580840000000034',
		uta2010: '580840000000034',
		latitude: -37.783333,
		longitude: -70.516667,
		municipalityId: 2401
	},
	{
		id: 4253,
		name: 'SIMBOLAR',
		uta2020: '141683197100000',
		uta2010: '141683197100000',
		latitude: -30.4752564,
		longitude: -63.985039522,
		municipalityId: 340
	},
	{
		id: 4254,
		name: 'TACUARENDI',
		uta2020: '820492861200000',
		uta2010: '820492861200000',
		latitude: -28.420206247,
		longitude: -59.255674004,
		municipalityId: 956
	},
	{
		id: 4255,
		name: 'LA HORTENSIA',
		uta2020: '820492861000081',
		uta2010: '820492861000081',
		latitude: -28.41853,
		longitude: -59.3071905,
		municipalityId: 956
	},
	{
		id: 4256,
		name: 'LA POROTA',
		uta2020: '060070007000020',
		uta2010: '060070007000020',
		latitude: -37.2547036,
		longitude: -62.6911852,
		municipalityId: 624
	},
	{
		id: 4257,
		name: 'COLONIA LAPIN',
		uta2020: '060070007000009',
		uta2010: '060070007000009',
		latitude: -37.371538,
		longitude: -63.0543759,
		municipalityId: 624
	},
	{
		id: 4258,
		name: 'DELFIN HUERGO',
		uta2020: '060070007030000',
		uta2010: '060070007030000',
		latitude: -37.317329263,
		longitude: -63.233169062,
		municipalityId: 624
	},
	{
		id: 4259,
		name: 'LEUBUCO',
		uta2020: '060070007000025',
		uta2010: '060070007000025',
		latitude: -36.8702316,
		longitude: -63.0403507,
		municipalityId: 624
	},
	{
		id: 4260,
		name: 'VILLA MARGARITA',
		uta2020: '060070007100000',
		uta2010: '060070007100000',
		latitude: -37.460099285,
		longitude: -63.24056586,
		municipalityId: 624
	},
	{
		id: 4261,
		name: 'LA CONQUISTA',
		uta2020: '060070007000017',
		uta2010: '060070007000017',
		latitude: -37.2436607,
		longitude: -62.5527989,
		municipalityId: 624
	},
	{
		id: 4262,
		name: 'LA SAL',
		uta2020: '060070007000021',
		uta2010: '060070007000021',
		latitude: -37.2606361,
		longitude: -62.9919086,
		municipalityId: 624
	},
	{
		id: 4263,
		name: 'ESTACION LA CONCEPCION',
		uta2020: '060070007000014',
		uta2010: '060070007000014',
		latitude: -37.0303787,
		longitude: -62.7845369,
		municipalityId: 624
	},
	{
		id: 4264,
		name: 'COLONIA SAN MIGUEL ARCANGEL',
		uta2020: '060070007020000',
		uta2010: '060070007020000',
		latitude: -37.448618647,
		longitude: -63.117609405,
		municipalityId: 624
	},
	{
		id: 4265,
		name: 'SAN MARCOS',
		uta2020: '060070007000035',
		uta2010: '060070007000035',
		latitude: -37.4957351,
		longitude: -63.3564779,
		municipalityId: 624
	},
	{
		id: 4266,
		name: 'ARTURO VATTEONE',
		uta2020: '060070007000003',
		uta2010: '060070007000003',
		latitude: -37.1792,
		longitude: -62.8579,
		municipalityId: 624
	},
	{
		id: 4267,
		name: 'THAMES',
		uta2020: '060070007000037',
		uta2010: '060070007000037',
		latitude: -36.929165562,
		longitude: -63.295726532,
		municipalityId: 624
	},
	{
		id: 4268,
		name: 'COLONIA LEVEN',
		uta2020: '060070007000010',
		uta2010: '060070007000010',
		latitude: -37.3087052,
		longitude: -63.3371347,
		municipalityId: 624
	},
	{
		id: 4269,
		name: 'AVESTRUZ',
		uta2020: '060070007000004',
		uta2010: '060070007000004',
		latitude: -37.659236908,
		longitude: -63.349403381,
		municipalityId: 624
	},
	{
		id: 4270,
		name: 'MASALLE',
		uta2020: '060070007000029',
		uta2010: '060070007000029',
		latitude: -37.05896605,
		longitude: -62.951966331,
		municipalityId: 624
	},
	{
		id: 4271,
		name: 'TRES LAGUNAS',
		uta2020: '060070007000038',
		uta2010: '060070007000038',
		latitude: -37.1405176,
		longitude: -63.0115519,
		municipalityId: 624
	},
	{
		id: 4272,
		name: 'LA PALA',
		uta2020: '060070007060000',
		uta2010: '060070007060000',
		latitude: -36.661340085,
		longitude: -63.366128168,
		municipalityId: 624
	},
	{
		id: 4273,
		name: 'SANTA ANITA',
		uta2020: '060070007000036',
		uta2010: '060070007000036',
		latitude: -36.8738749,
		longitude: -63.147085,
		municipalityId: 624
	},
	{
		id: 4274,
		name: 'RIVERA',
		uta2020: '060070007080000',
		uta2010: '060070007080000',
		latitude: -37.158354611,
		longitude: -63.244219494,
		municipalityId: 624
	},
	{
		id: 4275,
		name: 'CANONIGO GORRITI',
		uta2020: '060070007000006',
		uta2010: '060070007000006',
		latitude: -37.548511505,
		longitude: -63.243968964,
		municipalityId: 624
	},
	{
		id: 4276,
		name: 'ESTEBAN AGUSTIN GASCON',
		uta2020: '060070007050000',
		uta2010: '060070007050000',
		latitude: -37.454437802,
		longitude: -63.256595003,
		municipalityId: 624
	},
	{
		id: 4277,
		name: 'ARANO',
		uta2020: '060070007000002',
		uta2010: '060070007000002',
		latitude: -37.046226443,
		longitude: -63.266821042,
		municipalityId: 624
	},
	{
		id: 4278,
		name: 'ESPARTILLAR',
		uta2020: '060070007040000',
		uta2010: '060070007040000',
		latitude: -37.356334564,
		longitude: -62.438763781,
		municipalityId: 624
	},
	{
		id: 4279,
		name: 'CARHUE',
		uta2020: '060070007010000',
		uta2010: '060070007010000',
		latitude: -37.177480103,
		longitude: -62.75789626,
		municipalityId: 624
	},
	{
		id: 4280,
		name: 'LAGO EPECUEN',
		uta2020: '060070007000024',
		uta2010: '060070007000024',
		latitude: -37.126846314,
		longitude: -62.799461365,
		municipalityId: 624
	},
	{
		id: 4281,
		name: 'YUTUYACO',
		uta2020: '060070007110000',
		uta2010: '060070007110000',
		latitude: -36.988430945,
		longitude: -63.133808887,
		municipalityId: 624
	},
	{
		id: 4282,
		name: 'MAZA',
		uta2020: '060070007070000',
		uta2010: '060070007070000',
		latitude: -36.799946814,
		longitude: -63.338515151,
		municipalityId: 624
	},
	{
		id: 4283,
		name: 'GUAYAQUIL',
		uta2020: '300289165000038',
		uta2010: '300289165000038',
		latitude: -30.983411854,
		longitude: -58.03954926,
		municipalityId: 1557
	},
	{
		id: 4284,
		name: 'PUESTO DEL MEDIO',
		uta2020: '861890000000047',
		uta2010: '861890000000047',
		latitude: -27.99388784,
		longitude: -64.20683717,
		municipalityId: 1472
	},
	{
		id: 4285,
		name: 'SAN MIGUEL',
		uta2020: '861890000000062',
		uta2010: '861890000000062',
		latitude: -28.29609108,
		longitude: -64.329208374,
		municipalityId: 1472
	},
	{
		id: 4286,
		name: 'HUACHANA',
		uta2020: '861890000000018',
		uta2010: '861890000000018',
		latitude: -28.220879975,
		longitude: -64.116304633,
		municipalityId: 1472
	},
	{
		id: 4287,
		name: 'SAN ANDRES',
		uta2020: '861890000000051',
		uta2010: '861890000000051',
		latitude: -28.16829,
		longitude: -64.15636,
		municipalityId: 1472
	},
	{
		id: 4288,
		name: 'SAN VICENTE',
		uta2020: '861890000000065',
		uta2010: '861890000000065',
		latitude: -28.22458548,
		longitude: -64.19232189,
		municipalityId: 1472
	},
	{
		id: 4289,
		name: 'CAMPO ALEGRE',
		uta2020: '861890000000005',
		uta2010: '861890000000005',
		latitude: -28.10344,
		longitude: -64.08491,
		municipalityId: 1472
	},
	{
		id: 4290,
		name: 'LA RAMADITA',
		uta2020: '861890000000029',
		uta2010: '861890000000029',
		latitude: -28.22712,
		longitude: -64.1502,
		municipalityId: 1472
	},
	{
		id: 4291,
		name: 'CORO PAMPA',
		uta2020: '861890000000009',
		uta2010: '861890000000009',
		latitude: -28.21269,
		longitude: -64.07726,
		municipalityId: 1472
	},
	{
		id: 4292,
		name: 'LA ABRITA',
		uta2020: '861890000000025',
		uta2010: '861890000000025',
		latitude: -28.02407,
		longitude: -64.20899,
		municipalityId: 1472
	},
	{
		id: 4293,
		name: 'LA HIGUERA',
		uta2020: '861890000000027',
		uta2010: '861890000000027',
		latitude: -28.036513176,
		longitude: -64.097799779,
		municipalityId: 1472
	},
	{
		id: 4294,
		name: 'FACUNDO',
		uta2020: '260848105050000',
		uta2010: '260848105050000',
		latitude: -45.319271038,
		longitude: -69.972112735,
		municipalityId: 532
	},
	{
		id: 4295,
		name: 'LOS ALGARROBOS BLANCOS',
		uta2020: '740560133000086',
		uta2010: '740560133000086',
		latitude: -33.337466193,
		longitude: -66.362460049,
		municipalityId: 1134
	},
	{
		id: 4296,
		name: 'SAN LUIS',
		uta2020: '740560133150000',
		uta2010: '740560133150000',
		latitude: -33.302313966,
		longitude: -66.336087736,
		municipalityId: 1134
	},
	{
		id: 4297,
		name: 'BOCA DEL TIGRE',
		uta2020: '740560133000016',
		uta2010: '740560133000016',
		latitude: -33.368777964,
		longitude: -66.40741813,
		municipalityId: 1134
	},
	{
		id: 4298,
		name: 'COLONIA ARGENTINA',
		uta2020: '300849715000027',
		uta2010: '300849715000027',
		latitude: -31.690563881,
		longitude: -60.159061004,
		municipalityId: 1730
	},
	{
		id: 4299,
		name: 'PASO DE LAS PIEDRAS',
		uta2020: '300849715000081',
		uta2010: '300849715000081',
		latitude: -31.700818572,
		longitude: -60.093089113,
		municipalityId: 1730
	},
	{
		id: 4300,
		name: 'EL CORTAPIE',
		uta2020: '067000700000007',
		uta2010: '067000700000007',
		latitude: -37.951999697,
		longitude: -62.654939731,
		municipalityId: 625
	},
	{
		id: 4301,
		name: 'DUFAUR',
		uta2020: '067000700030000',
		uta2010: '067000700030000',
		latitude: -37.942822301,
		longitude: -62.284864273,
		municipalityId: 625
	},
	{
		id: 4302,
		name: 'LAS ENCADENADAS',
		uta2020: '067000700055000',
		uta2010: '067000700055000',
		latitude: -38.036108272,
		longitude: -62.470414074,
		municipalityId: 625
	},
	{
		id: 4303,
		name: 'LOS CERRITOS',
		uta2020: '067000700000013',
		uta2010: '067000700000013',
		latitude: -38.0226981,
		longitude: -62.4311323,
		municipalityId: 625
	},
	{
		id: 4304,
		name: 'LAS LOMAS',
		uta2020: '067000700000011',
		uta2010: '067000700000011',
		latitude: -37.986358643,
		longitude: -62.539897919,
		municipalityId: 625
	},
	{
		id: 4305,
		name: 'ARROYO CORTO',
		uta2020: '067000700010000',
		uta2010: '067000700010000',
		latitude: -37.512917974,
		longitude: -62.311683775,
		municipalityId: 625
	},
	{
		id: 4306,
		name: 'LA NORMA',
		uta2020: '067000700000009',
		uta2010: '067000700000009',
		latitude: -37.8167505,
		longitude: -62.2477312,
		municipalityId: 625
	},
	{
		id: 4307,
		name: 'ABRA DEL HINOJO',
		uta2020: '067000700000001',
		uta2010: '067000700000001',
		latitude: -37.724466063,
		longitude: -62.10173503,
		municipalityId: 625
	},
	{
		id: 4308,
		name: 'LAS MARIAS',
		uta2020: '067000700000012',
		uta2010: '067000700000012',
		latitude: -37.6667569,
		longitude: -62.4924979,
		municipalityId: 625
	},
	{
		id: 4309,
		name: 'ALTA VISTA',
		uta2020: '067000700000002',
		uta2010: '067000700000002',
		latitude: -37.6497091,
		longitude: -62.7001185,
		municipalityId: 625
	},
	{
		id: 4310,
		name: 'SAAVEDRA',
		uta2020: '067000700070000',
		uta2010: '067000700070000',
		latitude: -37.76364022,
		longitude: -62.350632804,
		municipalityId: 625
	},
	{
		id: 4311,
		name: 'ESPARTILLAR (E)',
		uta2020: '067000700040000',
		uta2010: '067000700040000',
		latitude: -37.360434394,
		longitude: -62.429738683,
		municipalityId: 625
	},
	{
		id: 4312,
		name: 'GOYENA',
		uta2020: '067000700050000',
		uta2010: '067000700050000',
		latitude: -37.71925185,
		longitude: -62.607129633,
		municipalityId: 625
	},
	{
		id: 4313,
		name: 'LA COLONIA NUEVA',
		uta2020: '067000700000008',
		uta2010: '067000700000008',
		latitude: -37.5309121,
		longitude: -62.5709197,
		municipalityId: 625
	},
	{
		id: 4314,
		name: 'COLONIA SAN PEDRO',
		uta2020: '067000700000006',
		uta2010: '067000700000006',
		latitude: -37.95583725,
		longitude: -62.344573975,
		municipalityId: 625
	},
	{
		id: 4315,
		name: 'PIGUE',
		uta2020: '067000700060000',
		uta2010: '067000700060000',
		latitude: -37.606389603,
		longitude: -62.405772876,
		municipalityId: 625
	},
	{
		id: 4316,
		name: 'COLONIA SAN MARTIN',
		uta2020: '067000700020000',
		uta2010: '067000700020000',
		latitude: -37.976915209,
		longitude: -62.332609556,
		municipalityId: 625
	},
	{
		id: 4317,
		name: 'ASSUNTA',
		uta2020: '140562308020000',
		uta2010: '140562308020000',
		latitude: -33.633296201,
		longitude: -63.225906091,
		municipalityId: 371
	},
	{
		id: 4318,
		name: 'PALERMO',
		uta2020: '020140001010001',
		uta2010: '020140001010001',
		latitude: -34.573899984,
		longitude: -58.422436452,
		municipalityId: 2449
	},
	{
		id: 4319,
		name: 'LONCO LUAN',
		uta2020: '580070252000029',
		uta2010: '580070252000029',
		latitude: -38.969904368,
		longitude: -71.045741095,
		municipalityId: 2398
	},
	{
		id: 4320,
		name: 'VILLA PEHUENIA',
		uta2020: '580070252020000',
		uta2010: '580070252020000',
		latitude: -38.883856738,
		longitude: -71.172134142,
		municipalityId: 2398
	},
	{
		id: 4321,
		name: 'VILLA UNION',
		uta2020: '580070252000042',
		uta2010: '580070252000042',
		latitude: -38.890869141,
		longitude: -71.120536804,
		municipalityId: 2398
	},
	{
		id: 4322,
		name: 'MOQUEHUE',
		uta2020: '580070252015000',
		uta2010: '580070252015000',
		latitude: -38.943184151,
		longitude: -71.328293445,
		municipalityId: 2398
	},
	{
		id: 4323,
		name: 'TIRA LARGA',
		uta2020: '700210021000059',
		uta2010: '700210021000059',
		latitude: -31.186006546,
		longitude: -69.462478638,
		municipalityId: 2428
	},
	{
		id: 4324,
		name: 'BARREAL',
		uta2020: '700210021010001',
		uta2010: '700210021010001',
		latitude: -31.652328852,
		longitude: -69.47967385,
		municipalityId: 2428
	},
	{
		id: 4325,
		name: 'LA ALUMBRERA',
		uta2020: '700210021000042',
		uta2010: '700210021000042',
		latitude: -31.420516968,
		longitude: -69.754585266,
		municipalityId: 2428
	},
	{
		id: 4326,
		name: 'PUCHUZUN',
		uta2020: '700210021000054',
		uta2010: '700210021000054',
		latitude: -31.137315223,
		longitude: -69.469780236,
		municipalityId: 2428
	},
	{
		id: 4327,
		name: 'VILLA NUEVA',
		uta2020: '700210021000062',
		uta2010: '700210021000062',
		latitude: -31.054547033,
		longitude: -69.493587797,
		municipalityId: 2428
	},
	{
		id: 4328,
		name: 'LA ISLA',
		uta2020: '700210021000044',
		uta2010: '700210021000044',
		latitude: -31.380557,
		longitude: -69.415964,
		municipalityId: 2428
	},
	{
		id: 4329,
		name: 'COLON',
		uta2020: '700210021000029',
		uta2010: '700210021000029',
		latitude: -31.427810725,
		longitude: -69.407796409,
		municipalityId: 2428
	},
	{
		id: 4330,
		name: 'ALCAPARROSA',
		uta2020: '700210021000002',
		uta2010: '700210021000002',
		latitude: -31.30289373,
		longitude: -69.41260371,
		municipalityId: 2428
	},
	{
		id: 4331,
		name: 'SOROCAYENSE',
		uta2020: '700210021000058',
		uta2010: '700210021000058',
		latitude: -31.55759027,
		longitude: -69.44249182,
		municipalityId: 2428
	},
	{
		id: 4332,
		name: 'TAMBERIAS',
		uta2020: '700210021030000',
		uta2010: '700210021030000',
		latitude: -31.460377262,
		longitude: -69.4229131,
		municipalityId: 2428
	},
	{
		id: 4333,
		name: 'VILLA CORRAL',
		uta2020: '700210021000061',
		uta2010: '700210021000061',
		latitude: -31.251505842,
		longitude: -69.445915424,
		municipalityId: 2428
	},
	{
		id: 4334,
		name: 'VILLA PITUIL',
		uta2020: '700210021010002',
		uta2010: '700210021010002',
		latitude: -31.65283233,
		longitude: -69.481538591,
		municipalityId: 2428
	},
	{
		id: 4335,
		name: 'HILARIO',
		uta2020: '700210021000040',
		uta2010: '700210021000040',
		latitude: -31.47848941,
		longitude: -69.40241936,
		municipalityId: 2428
	},
	{
		id: 4336,
		name: 'BELLA VISTA',
		uta2020: '700210021000005',
		uta2010: '700210021000005',
		latitude: -31.147165298,
		longitude: -69.464767456,
		municipalityId: 2428
	},
	{
		id: 4337,
		name: 'CALINGASTA',
		uta2020: '700210021020000',
		uta2010: '700210021020000',
		latitude: -31.335410441,
		longitude: -69.427381783,
		municipalityId: 2428
	},
	{
		id: 4338,
		name: 'EL LEONCITO',
		uta2020: '700210021000037',
		uta2010: '700210021000037',
		latitude: -31.633333004,
		longitude: -69.466666928,
		municipalityId: 2428
	},
	{
		id: 4339,
		name: 'RINCON',
		uta2020: '141192826180000',
		uta2010: '141192826180000',
		latitude: -31.595385474,
		longitude: -63.615541428,
		municipalityId: 310
	},
	{
		id: 4340,
		name: 'SAN HILARIO',
		uta2020: '340145028060000',
		uta2010: '340145028060000',
		latitude: -26.024867679,
		longitude: -58.650072623,
		municipalityId: 2283
	},
	{
		id: 4341,
		name: 'ALDEA VALLE MARIA',
		uta2020: '300210077060000',
		uta2010: '300210077060000',
		latitude: -31.992244009,
		longitude: -60.587850227,
		municipalityId: 1640
	},
	{
		id: 4342,
		name: 'ALDEA SAN FRANCISCO',
		uta2020: '300210077040000',
		uta2010: '300210077040000',
		latitude: -31.962568123,
		longitude: -60.635713482,
		municipalityId: 1640
	},
	{
		id: 4343,
		name: 'CATRIEL',
		uta2020: '620420105360000',
		uta2010: '620420105360000',
		latitude: -37.881528863,
		longitude: -67.79455697,
		municipalityId: 1266
	},
	{
		id: 4344,
		name: 'LAS BAYAS',
		uta2020: '620700224010000',
		uta2010: '620700224010000',
		latitude: -41.450405781,
		longitude: -70.682789463,
		municipalityId: 1244
	},
	{
		id: 4345,
		name: 'PICHI LEUFU',
		uta2020: '620700224000034',
		uta2010: '620700224000034',
		latitude: -41.04643255,
		longitude: -70.84641064,
		municipalityId: 1244
	},
	{
		id: 4346,
		name: 'PASO CHACABUCO',
		uta2020: '620700224000027',
		uta2010: '620700224000027',
		latitude: -40.660083771,
		longitude: -70.968612671,
		municipalityId: 1244
	},
	{
		id: 4347,
		name: 'PASO MIRANDA',
		uta2020: '620700224000031',
		uta2010: '620700224000031',
		latitude: -40.602848053,
		longitude: -70.85495758,
		municipalityId: 1244
	},
	{
		id: 4348,
		name: 'CORRALITO',
		uta2020: '620700224000012',
		uta2010: '620700224000012',
		latitude: -40.72464298,
		longitude: -70.710142011,
		municipalityId: 1244
	},
	{
		id: 4349,
		name: 'PASO DE LOS MOLLES',
		uta2020: '620700224000028',
		uta2010: '620700224000028',
		latitude: -40.911617279,
		longitude: -70.738754273,
		municipalityId: 1244
	},
	{
		id: 4350,
		name: 'COQUELEN',
		uta2020: '620700224000011',
		uta2010: '620700224000011',
		latitude: -40.753593445,
		longitude: -70.449546814,
		municipalityId: 1244
	},
	{
		id: 4351,
		name: 'PICHI LEUFU ABAJO',
		uta2020: '620700224000035',
		uta2010: '620700224000035',
		latitude: -40.96896574,
		longitude: -70.87986609,
		municipalityId: 1244
	},
	{
		id: 4352,
		name: 'PILCANIYEU',
		uta2020: '620700224060000',
		uta2010: '620700224060000',
		latitude: -41.125290183,
		longitude: -70.721694391,
		municipalityId: 1244
	},
	{
		id: 4353,
		name: 'NAPENAY',
		uta2020: '220700224040000',
		uta2010: '220700224040000',
		latitude: -26.731468711,
		longitude: -60.619028515,
		municipalityId: 54
	},
	{
		id: 4354,
		name: 'LOTE 27',
		uta2020: '220700224000009',
		uta2010: '220700224000009',
		latitude: -26.73654579,
		longitude: -60.68870648,
		municipalityId: 54
	},
	{
		id: 4355,
		name: 'PLOTTIER',
		uta2020: '580350070100000',
		uta2010: '580350070100000',
		latitude: -38.951056161,
		longitude: -68.247840387,
		municipalityId: 2348
	},
	{
		id: 4356,
		name: 'PUERTO DARWIN',
		uta2020: '940210000000003',
		uta2010: '940210000000003',
		latitude: -51.806531825,
		longitude: -58.959658956,
		municipalityId: 2419
	},
	{
		id: 4357,
		name: 'PRADERA DEL GANSO',
		uta2020: '940210000000013',
		uta2010: '940210000000013',
		latitude: -51.827587534,
		longitude: -58.972876213,
		municipalityId: 2419
	},
	{
		id: 4358,
		name: 'PUERTO LEITH',
		uta2020: '940210000000010',
		uta2010: '940210000000010',
		latitude: -54.14137879,
		longitude: -36.686863489,
		municipalityId: 2419
	},
	{
		id: 4359,
		name: 'PUERTO ARGENTINO',
		uta2020: '940210000000011',
		uta2010: '940210000000011',
		latitude: -51.694229126,
		longitude: -57.85905838,
		municipalityId: 2419
	},
	{
		id: 4360,
		name: 'GRYTVIKEN',
		uta2020: '940210000000012',
		uta2010: '940210000000012',
		latitude: -54.280852221,
		longitude: -36.508552759,
		municipalityId: 2419
	},
	{
		id: 4361,
		name: 'CAMPO BALLESTEROS',
		uta2020: '820420084000004',
		uta2010: '820420084000004',
		latitude: -34.1177078,
		longitude: -61.6952619,
		municipalityId: 904
	},
	{
		id: 4362,
		name: 'CAMPO TROFFE',
		uta2020: '820420084000016',
		uta2010: '820420084000016',
		latitude: -34.077582903,
		longitude: -61.797402465,
		municipalityId: 904
	},
	{
		id: 4363,
		name: 'CAMPO CHAPINO',
		uta2020: '820420084000005',
		uta2010: '820420084000005',
		latitude: -34.015269955,
		longitude: -61.522966399,
		municipalityId: 904
	},
	{
		id: 4364,
		name: 'VILLA CAÑAS',
		uta2020: '820420084300000',
		uta2010: '820420084300000',
		latitude: -34.006133996,
		longitude: -61.606388045,
		municipalityId: 904
	},
	{
		id: 4365,
		name: 'VILLA LAGO AZUL',
		uta2020: '140912539280000',
		uta2010: '140912539280000',
		latitude: -31.374025722,
		longitude: -64.483112294,
		municipalityId: 283
	},
	{
		id: 4366,
		name: 'VILLA SANTA CRUZ DEL LAGO',
		uta2020: '140912539320000',
		uta2010: '140912539320000',
		latitude: -31.369322851,
		longitude: -64.520537083,
		municipalityId: 283
	},
	{
		id: 4367,
		name: 'COLONIA SAN SALVADOR',
		uta2020: '300880385000009',
		uta2010: '300880385000009',
		latitude: -31.579278177,
		longitude: -58.506066937,
		municipalityId: 1764
	},
	{
		id: 4368,
		name: 'SAN SALVADOR',
		uta2020: '300880385020000',
		uta2010: '300880385020000',
		latitude: -31.625522552,
		longitude: -58.504073817,
		municipalityId: 1764
	},
	{
		id: 4369,
		name: 'LOS QUEBRACHOS',
		uta2020: '821123960000044',
		uta2010: '821123960000044',
		latitude: -30.490703583,
		longitude: -60.408802032,
		municipalityId: 1016
	},
	{
		id: 4370,
		name: 'SILVA',
		uta2020: '821123960150000',
		uta2010: '821123960150000',
		latitude: -30.448639985,
		longitude: -60.430070013,
		municipalityId: 1016
	},
	{
		id: 4371,
		name: 'SAN MIGUEL',
		uta2020: '821123960000056',
		uta2010: '821123960000056',
		latitude: -30.477170944,
		longitude: -60.571983337,
		municipalityId: 1016
	},
	{
		id: 4372,
		name: 'GENERAL DEHEZA',
		uta2020: '140560420080000',
		uta2010: '140560420080000',
		latitude: -32.754929116,
		longitude: -63.785038352,
		municipalityId: 372
	},
	{
		id: 4373,
		name: 'MATARA',
		uta2020: '860986175030000',
		uta2010: '860986175030000',
		latitude: -28.112422977,
		longitude: -63.127605775,
		municipalityId: 1369
	},
	{
		id: 4374,
		name: 'VILLA LA BOLSA',
		uta2020: '141473092330000',
		uta2010: '141473092330000',
		latitude: -31.728787957,
		longitude: -64.432417498,
		municipalityId: 229
	},
	{
		id: 4375,
		name: 'VILLA IBAÑEZ',
		uta2020: '701120112010000',
		uta2010: '701120112010000',
		latitude: -31.465938511,
		longitude: -68.735333803,
		municipalityId: 2429
	},
	{
		id: 4376,
		name: 'DIQUE ULLUM',
		uta2020: '701120112000011',
		uta2010: '701120112000011',
		latitude: -31.4627522,
		longitude: -68.73605428,
		municipalityId: 2429
	},
	{
		id: 4377,
		name: 'EL CHILOTE',
		uta2020: '701120112000012',
		uta2010: '701120112000012',
		latitude: -31.47333747,
		longitude: -68.74581736,
		municipalityId: 2429
	},
	{
		id: 4378,
		name: 'RANCUL',
		uta2020: '421260308070000',
		uta2010: '421260308070000',
		latitude: -35.066198556,
		longitude: -64.683114986,
		municipalityId: 1950
	},
	{
		id: 4379,
		name: 'CHAMAICO',
		uta2020: '421260308000002',
		uta2010: '421260308000002',
		latitude: -35.08643621,
		longitude: -64.92315252,
		municipalityId: 1950
	},
	{
		id: 4380,
		name: 'LOS HORNILLOS',
		uta2020: '141332917120000',
		uta2010: '141332917120000',
		latitude: -31.90173531,
		longitude: -64.990089004,
		municipalityId: 511
	},
	{
		id: 4381,
		name: 'DOS ARROYOS',
		uta2020: '141332917040000',
		uta2010: '141332917040000',
		latitude: -31.871686754,
		longitude: -64.992749639,
		municipalityId: 511
	},
	{
		id: 4382,
		name: 'EL PANTANILLO',
		uta2020: '141332917050000',
		uta2010: '141332917050000',
		latitude: -31.88626535,
		longitude: -64.99065157,
		municipalityId: 511
	},
	{
		id: 4383,
		name: 'VILLA ESCOLAR',
		uta2020: '340210070060000',
		uta2010: '340210070060000',
		latitude: -26.621184482,
		longitude: -58.671833694,
		municipalityId: 2334
	},
	{
		id: 4384,
		name: 'AMENABAR',
		uta2020: '820422581020000',
		uta2010: '820422581020000',
		latitude: -34.136118441,
		longitude: -62.422908485,
		municipalityId: 905
	},
	{
		id: 4385,
		name: 'COLONIA FALUCHO',
		uta2020: '820422581000021',
		uta2010: '820422581000021',
		latitude: -34.076507543,
		longitude: -62.454248092,
		municipalityId: 905
	},
	{
		id: 4386,
		name: 'ESTANCIA EL ABOLENGO',
		uta2020: '820422581000042',
		uta2010: '820422581000042',
		latitude: -34.0981317,
		longitude: -62.2248277,
		municipalityId: 905
	},
	{
		id: 4387,
		name: 'CAMPO CULLAK',
		uta2020: '820422581000006',
		uta2010: '820422581000006',
		latitude: -34.057867966,
		longitude: -62.561239985,
		municipalityId: 905
	},
	{
		id: 4388,
		name: 'VILLA SILIPICA',
		uta2020: '861896623050000',
		uta2010: '861896623050000',
		latitude: -28.13556544,
		longitude: -64.082415863,
		municipalityId: 1473
	},
	{
		id: 4389,
		name: 'SIMBOL',
		uta2020: '861896623030000',
		uta2010: '861896623030000',
		latitude: -28.128147587,
		longitude: -64.147793433,
		municipalityId: 1473
	},
	{
		id: 4390,
		name: 'EL UNO -LA SARITA',
		uta2020: '820492819000051',
		uta2010: '820492819000051',
		latitude: -28.945835,
		longitude: -59.7883051,
		municipalityId: 957
	},
	{
		id: 4391,
		name: 'CUATRO BOCAS',
		uta2020: '820492819000037',
		uta2010: '820492819000037',
		latitude: -28.8421393,
		longitude: -59.8594745,
		municipalityId: 957
	},
	{
		id: 4392,
		name: 'COLONIA SAN MANUEL',
		uta2020: '820492819000035',
		uta2010: '820492819000035',
		latitude: -28.8707466,
		longitude: -59.8603323,
		municipalityId: 957
	},
	{
		id: 4393,
		name: 'LA VANGUARDIA',
		uta2020: '820492819000088',
		uta2010: '820492819000088',
		latitude: -28.9412074,
		longitude: -59.8440552,
		municipalityId: 957
	},
	{
		id: 4394,
		name: 'LA SARITA',
		uta2020: '820492819100000',
		uta2010: '820492819100000',
		latitude: -28.972852591,
		longitude: -59.848499182,
		municipalityId: 957
	},
	{
		id: 4395,
		name: 'PARAJE SAN MANUEL',
		uta2020: '820492819160000',
		uta2010: '820492819160000',
		latitude: -28.871662388,
		longitude: -59.865604396,
		municipalityId: 957
	},
	{
		id: 4396,
		name: 'LA SELVA',
		uta2020: '820492819000087',
		uta2010: '820492819000087',
		latitude: -29.055241831,
		longitude: -59.943721959,
		municipalityId: 957
	},
	{
		id: 4397,
		name: 'LA CAROLA',
		uta2020: '820492819000078',
		uta2010: '820492819000078',
		latitude: -28.972519995,
		longitude: -59.870099217,
		municipalityId: 957
	},
	{
		id: 4398,
		name: 'BERROTARAN',
		uta2020: '140980784050000',
		uta2010: '140980784050000',
		latitude: -32.452866921,
		longitude: -64.385440468,
		municipalityId: 444
	},
	{
		id: 4399,
		name: 'PAMPA DE LOS GUANACOS',
		uta2020: '860560070070000',
		uta2010: '860560070070000',
		latitude: -26.206285599,
		longitude: -61.817893703,
		municipalityId: 1359
	},
	{
		id: 4400,
		name: 'PORTON NEGRO',
		uta2020: '340429105050000',
		uta2010: '340429105050000',
		latitude: -24.966359898,
		longitude: -58.74197491,
		municipalityId: 2328
	},
	{
		id: 4401,
		name: 'RADA TILLY',
		uta2020: '260210056050000',
		uta2010: '260210056050000',
		latitude: -45.936801919,
		longitude: -67.565396024,
		municipalityId: 563
	},
	{
		id: 4402,
		name: 'PUENTE PICUN LEUFU',
		uta2020: '580215154000047',
		uta2010: '580215154000047',
		latitude: -39.19669664,
		longitude: -70.17122043,
		municipalityId: 2356
	},
	{
		id: 4403,
		name: 'PUENTE PICUN LEUFU',
		uta2020: '580215154000052',
		uta2010: '580215154000052',
		latitude: -39.2019873,
		longitude: -70.10523247,
		municipalityId: 2356
	},
	{
		id: 4404,
		name: 'EL PORVENIR',
		uta2020: '540280119000005',
		uta2010: '540280119000005',
		latitude: -27.476594927,
		longitude: -55.921699607,
		municipalityId: 2159
	},
	{
		id: 4405,
		name: 'NEMESIO PARMA',
		uta2020: '540280119020000',
		uta2010: '540280119020000',
		latitude: -27.367003659,
		longitude: -55.998220846,
		municipalityId: 2159
	},
	{
		id: 4406,
		name: 'POSADAS',
		uta2020: '540280119030000',
		uta2010: '540280119030000',
		latitude: -27.366217043,
		longitude: -55.894002098,
		municipalityId: 2159
	},
	{
		id: 4407,
		name: 'SUMAMPA',
		uta2020: '861400154020000',
		uta2010: '861400154020000',
		latitude: -29.394585995,
		longitude: -63.371686651,
		municipalityId: 1483
	},
	{
		id: 4408,
		name: 'ESCABA DE ARRIBA',
		uta2020: '900428217000015',
		uta2010: '900428217000015',
		latitude: -27.617860794,
		longitude: -65.817527771,
		municipalityId: 2268
	},
	{
		id: 4409,
		name: 'ESCABA DE ABAJO',
		uta2020: '900428217000014',
		uta2010: '900428217000014',
		latitude: -27.68691,
		longitude: -65.79912,
		municipalityId: 2268
	},
	{
		id: 4410,
		name: 'EL MOLLAR',
		uta2020: '900428217000013',
		uta2010: '900428217000013',
		latitude: -27.71165657,
		longitude: -65.794136047,
		municipalityId: 2268
	},
	{
		id: 4411,
		name: 'SANTA ANITA',
		uta2020: '300980455120000',
		uta2010: '300980455120000',
		latitude: -32.176246632,
		longitude: -58.786482246,
		municipalityId: 1771
	},
	{
		id: 4412,
		name: 'COLONIA TUYUTI',
		uta2020: '300980455000040',
		uta2010: '300980455000040',
		latitude: -32.20520058,
		longitude: -58.78310251,
		municipalityId: 1771
	},
	{
		id: 4413,
		name: 'VILLA FONTANA',
		uta2020: '300849760280000',
		uta2010: '300849760280000',
		latitude: -31.908647497,
		longitude: -60.468352081,
		municipalityId: 1731
	},
	{
		id: 4414,
		name: 'SAN JOSE DEL BOQUERON',
		uta2020: '860566413080000',
		uta2010: '860566413080000',
		latitude: -26.115658347,
		longitude: -63.588004293,
		municipalityId: 1360
	},
	{
		id: 4415,
		name: 'IBARLUCEA',
		uta2020: '820843414170000',
		uta2010: '820843414170000',
		latitude: -32.85125613,
		longitude: -60.788493665,
		municipalityId: 813
	},
	{
		id: 4416,
		name: 'LOS ROMEROS',
		uta2020: '141332889000041',
		uta2010: '141332889000041',
		latitude: -32.137966783,
		longitude: -65.223236085,
		municipalityId: 512
	},
	{
		id: 4417,
		name: 'CONLARA',
		uta2020: '141332889010000',
		uta2010: '141332889010000',
		latitude: -32.078860996,
		longitude: -65.231258642,
		municipalityId: 512
	},
	{
		id: 4418,
		name: 'LOS GIGANTES',
		uta2020: '140910000000065',
		uta2010: '140910000000065',
		latitude: -31.407716751,
		longitude: -64.772872925,
		municipalityId: 284
	},
	{
		id: 4419,
		name: 'PUESTO PEDERNERA',
		uta2020: '140910000000078',
		uta2010: '140910000000078',
		latitude: -31.62113488,
		longitude: -64.68745512,
		municipalityId: 284
	},
	{
		id: 4420,
		name: 'RIO TIU MAYU',
		uta2020: '140910000000081',
		uta2010: '140910000000081',
		latitude: -30.9725815,
		longitude: -64.4278031,
		municipalityId: 284
	},
	{
		id: 4421,
		name: 'SAN FRANCISCO',
		uta2020: '060140014000013',
		uta2010: '060140014000013',
		latitude: -38.06703,
		longitude: -59.873740005,
		municipalityId: 626
	},
	{
		id: 4422,
		name: 'LA HISPANO ARGENTINA',
		uta2020: '060140014000007',
		uta2010: '060140014000007',
		latitude: -37.9869681,
		longitude: -59.9183059,
		municipalityId: 626
	},
	{
		id: 4423,
		name: 'EL POLEO',
		uta2020: '060140014000004',
		uta2010: '060140014000004',
		latitude: -37.82831192,
		longitude: -60.161190034,
		municipalityId: 626
	},
	{
		id: 4424,
		name: 'LOS FACHINALES',
		uta2020: '060140014000010',
		uta2010: '060140014000010',
		latitude: -37.853063,
		longitude: -60.6723351,
		municipalityId: 626
	},
	{
		id: 4425,
		name: 'MAULEON',
		uta2020: '060140014000012',
		uta2010: '060140014000012',
		latitude: -37.7294888,
		longitude: -60.5480826,
		municipalityId: 626
	},
	{
		id: 4426,
		name: 'LA SORTIJA',
		uta2020: '060140014000008',
		uta2010: '060140014000008',
		latitude: -38.007530213,
		longitude: -60.563884736,
		municipalityId: 626
	},
	{
		id: 4427,
		name: 'JUAN E. BARRA',
		uta2020: '060140014030000',
		uta2010: '060140014030000',
		latitude: -37.823387172,
		longitude: -60.484639771,
		municipalityId: 626
	},
	{
		id: 4428,
		name: 'LA EMMA',
		uta2020: '060140014000006',
		uta2010: '060140014000006',
		latitude: -37.88867,
		longitude: -60.052030004,
		municipalityId: 626
	},
	{
		id: 4429,
		name: 'EL LUCERO',
		uta2020: '060140014000003',
		uta2010: '060140014000003',
		latitude: -38.17739,
		longitude: -59.912480005,
		municipalityId: 626
	},
	{
		id: 4430,
		name: 'ALZAGA',
		uta2020: '060140014000001',
		uta2010: '060140014000001',
		latitude: -37.854450226,
		longitude: -59.95879364,
		municipalityId: 626
	},
	{
		id: 4431,
		name: 'ADOLFO GONZALES CHAVES',
		uta2020: '060140014010000',
		uta2010: '060140014010000',
		latitude: -38.033399509,
		longitude: -60.100334174,
		municipalityId: 626
	},
	{
		id: 4432,
		name: 'VASQUEZ',
		uta2020: '060140014040000',
		uta2010: '060140014040000',
		latitude: -38.176686139,
		longitude: -60.17084873,
		municipalityId: 626
	},
	{
		id: 4433,
		name: 'SANTA CLARA',
		uta2020: '060140014000014',
		uta2010: '060140014000014',
		latitude: -38.006638,
		longitude: -59.7303478,
		municipalityId: 626
	},
	{
		id: 4434,
		name: 'SANTA MARIA',
		uta2020: '060140014000015',
		uta2010: '060140014000015',
		latitude: -37.889047,
		longitude: -60.3147188,
		municipalityId: 626
	},
	{
		id: 4435,
		name: 'CHAPAR',
		uta2020: '060140014000002',
		uta2010: '060140014000002',
		latitude: -38.0286639,
		longitude: -59.6471098,
		municipalityId: 626
	},
	{
		id: 4436,
		name: 'DE LA GARMA',
		uta2020: '060140014020000',
		uta2010: '060140014020000',
		latitude: -37.963502176,
		longitude: -60.415659384,
		municipalityId: 626
	},
	{
		id: 4437,
		name: 'SARGENTO MOYA',
		uta2020: '900708434070000',
		uta2010: '900708434070000',
		latitude: -27.227820085,
		longitude: -65.6598562,
		municipalityId: 2205
	},
	{
		id: 4438,
		name: 'PAMPAYASTA SUR',
		uta2020: '141611484130000',
		uta2010: '141611484130000',
		latitude: -32.250758115,
		longitude: -63.651014033,
		municipalityId: 354
	},
	{
		id: 4439,
		name: 'COLONIA AVELLANEDA',
		uta2020: '300840297060000',
		uta2010: '300840297060000',
		latitude: -31.768069051,
		longitude: -60.405022063,
		municipalityId: 1732
	},
	{
		id: 4440,
		name: 'ANGELONI',
		uta2020: '821123862010000',
		uta2010: '821123862010000',
		latitude: -30.857517709,
		longitude: -60.648609868,
		municipalityId: 1017
	},
	{
		id: 4441,
		name: 'LUCIANO LEIVA',
		uta2020: '821123862000046',
		uta2010: '821123862000046',
		latitude: -30.867244721,
		longitude: -60.61700058,
		municipalityId: 1017
	},
	{
		id: 4442,
		name: 'MISION TACAAGLE',
		uta2020: '340420175040000',
		uta2010: '340420175040000',
		latitude: -24.979650568,
		longitude: -58.822743444,
		municipalityId: 2329
	},
	{
		id: 4443,
		name: 'BLANCO POZO',
		uta2020: '900148112000015',
		uta2010: '900148112000015',
		latitude: -27.00737,
		longitude: -64.77975,
		municipalityId: 2174
	},
	{
		id: 4444,
		name: 'RAFAELA POZO',
		uta2020: '900148112000199',
		uta2010: '900148112000199',
		latitude: -26.8637291,
		longitude: -64.7996443,
		municipalityId: 2174
	},
	{
		id: 4445,
		name: 'LAS CEJAS',
		uta2020: '900148112090000',
		uta2010: '900148112090000',
		latitude: -26.887817383,
		longitude: -64.743077251,
		municipalityId: 2174
	},
	{
		id: 4446,
		name: 'NOGOYA',
		uta2020: '300770287070000',
		uta2010: '300770287070000',
		latitude: -32.395641642,
		longitude: -59.788076416,
		municipalityId: 1704
	},
	{
		id: 4447,
		name: 'BARRIO SAN FELIPE',
		uta2020: '900638364010000',
		uta2010: '900638364010000',
		latitude: -26.874983553,
		longitude: -65.232226238,
		municipalityId: 2232
	},
	{
		id: 4448,
		name: 'SANTA BARBARA',
		uta2020: '900638364000121',
		uta2010: '900638364000121',
		latitude: -26.932741271,
		longitude: -65.255114413,
		municipalityId: 2232
	},
	{
		id: 4449,
		name: 'LOS AGUIRRE',
		uta2020: '900638364000086',
		uta2010: '900638364000086',
		latitude: -26.906081373,
		longitude: -65.23332927,
		municipalityId: 2232
	},
	{
		id: 4450,
		name: 'PUENTE EL MANANTIAL',
		uta2020: '900638364000107',
		uta2010: '900638364000107',
		latitude: -26.92307,
		longitude: -65.2692,
		municipalityId: 2232
	},
	{
		id: 4451,
		name: 'VIZCARRA',
		uta2020: '380280091000082',
		uta2010: '380280091000082',
		latitude: -23.15337899,
		longitude: -65.5482353,
		municipalityId: 1205
	},
	{
		id: 4452,
		name: 'RIO GRANDE',
		uta2020: '380280091000068',
		uta2010: '380280091000068',
		latitude: -23.348350525,
		longitude: -65.674713135,
		municipalityId: 1205
	},
	{
		id: 4453,
		name: 'EL PORTILLO',
		uta2020: '380280091000029',
		uta2010: '380280091000029',
		latitude: -23.31635,
		longitude: -65.60121,
		municipalityId: 1205
	},
	{
		id: 4454,
		name: 'CASA PUCA',
		uta2020: '380280091000013',
		uta2010: '380280091000013',
		latitude: -23.274686813,
		longitude: -65.659004211,
		municipalityId: 1205
	},
	{
		id: 4455,
		name: 'LA POMA',
		uta2020: '380280091000039',
		uta2010: '380280091000039',
		latitude: -23.3432151,
		longitude: -65.67762699,
		municipalityId: 1205
	},
	{
		id: 4456,
		name: 'CASA GRANDE',
		uta2020: '380280091000012',
		uta2010: '380280091000012',
		latitude: -23.22271,
		longitude: -65.55278,
		municipalityId: 1205
	},
	{
		id: 4457,
		name: 'EL AGUILAR',
		uta2020: '380280091020000',
		uta2010: '380280091020000',
		latitude: -23.210239971,
		longitude: -65.677905034,
		municipalityId: 1205
	},
	{
		id: 4458,
		name: 'LOTEO NAVEA',
		uta2020: '380566084020000',
		uta2010: '380566084020000',
		latitude: -24.271027282,
		longitude: -65.272944492,
		municipalityId: 1209
	},
	{
		id: 4459,
		name: 'LOS ALISOS',
		uta2020: '380566084017000',
		uta2010: '380566084017000',
		latitude: -24.283939599,
		longitude: -65.281827227,
		municipalityId: 1209
	},
	{
		id: 4460,
		name: 'SAN ANTONIO',
		uta2020: '380566084030000',
		uta2010: '380566084030000',
		latitude: -24.367660622,
		longitude: -65.333761264,
		municipalityId: 1209
	},
	{
		id: 4461,
		name: 'PUEBLO VIEJO',
		uta2020: '380566084000027',
		uta2010: '380566084000027',
		latitude: -24.387601852,
		longitude: -65.42640686,
		municipalityId: 1209
	},
	{
		id: 4462,
		name: 'NUESTRA SEÑORA DEL ROSARIO',
		uta2020: '380566084025000',
		uta2010: '380566084025000',
		latitude: -24.318405,
		longitude: -65.400923,
		municipalityId: 1209
	},
	{
		id: 4463,
		name: 'LA TOMA',
		uta2020: '380566084013000',
		uta2010: '380566084013000',
		latitude: -24.33748,
		longitude: -65.36524,
		municipalityId: 1209
	},
	{
		id: 4464,
		name: 'EL CEIBAL',
		uta2020: '380566084010000',
		uta2010: '380566084010000',
		latitude: -24.301633615,
		longitude: -65.281886746,
		municipalityId: 1209
	},
	{
		id: 4465,
		name: 'RIO BLANCO',
		uta2020: '380566084000028',
		uta2010: '380566084000028',
		latitude: -24.38848,
		longitude: -65.36691,
		municipalityId: 1209
	},
	{
		id: 4466,
		name: 'CERRO NEGRO',
		uta2020: '380566084000008',
		uta2010: '380566084000008',
		latitude: -24.373626709,
		longitude: -65.604064941,
		municipalityId: 1209
	},
	{
		id: 4467,
		name: 'EL REDOMON',
		uta2020: '300159045000027',
		uta2010: '300159045000027',
		latitude: -31.095880846,
		longitude: -58.290063733,
		municipalityId: 1798
	},
	{
		id: 4468,
		name: 'PASO DEL GALLO',
		uta2020: '300159045000073',
		uta2010: '300159045000073',
		latitude: -30.940968036,
		longitude: -58.380912309,
		municipalityId: 1798
	},
	{
		id: 4469,
		name: 'LA QUERENCIA',
		uta2020: '300159045000062',
		uta2010: '300159045000062',
		latitude: -31.072881542,
		longitude: -58.439913305,
		municipalityId: 1798
	},
	{
		id: 4470,
		name: 'COLONIA URQUIZA',
		uta2020: '300159045000019',
		uta2010: '300159045000019',
		latitude: -31.106932089,
		longitude: -58.369688369,
		municipalityId: 1798
	},
	{
		id: 4471,
		name: 'YAROS',
		uta2020: '300159045000090',
		uta2010: '300159045000090',
		latitude: -31.073064804,
		longitude: -58.389270782,
		municipalityId: 1798
	},
	{
		id: 4472,
		name: 'TACURAL',
		uta2020: '820212371380000',
		uta2010: '820212371380000',
		latitude: -30.848107149,
		longitude: -61.592401815,
		municipalityId: 757
	},
	{
		id: 4473,
		name: 'LOMA HERMOSA',
		uta2020: '068400840010007',
		uta2010: '068400840010007',
		latitude: -34.568406663,
		longitude: -58.603081886,
		municipalityId: 627
	},
	{
		id: 4474,
		name: 'MARTIN CORONADO',
		uta2020: '068400840010008',
		uta2010: '068400840010008',
		latitude: -34.585203806,
		longitude: -58.591875554,
		municipalityId: 627
	},
	{
		id: 4475,
		name: 'SANTOS LUGARES',
		uta2020: '068400840010013',
		uta2010: '068400840010013',
		latitude: -34.59915335,
		longitude: -58.547883512,
		municipalityId: 627
	},
	{
		id: 4476,
		name: '11 DE SEPTIEMBRE',
		uta2020: '068400840010009',
		uta2010: '068400840010009',
		latitude: -34.566314345,
		longitude: -58.618360068,
		municipalityId: 627
	},
	{
		id: 4477,
		name: 'CIUDADELA',
		uta2020: '068400840010004',
		uta2010: '068400840010004',
		latitude: -34.632696517,
		longitude: -58.542406783,
		municipalityId: 627
	},
	{
		id: 4478,
		name: 'VILLA BOSCH (EST. JUAN MARIA BOSCH)',
		uta2020: '068400840010014',
		uta2010: '068400840010014',
		latitude: -34.582298198,
		longitude: -58.580293264,
		municipalityId: 627
	},
	{
		id: 4479,
		name: 'PABLO PODESTA',
		uta2020: '068400840010010',
		uta2010: '068400840010010',
		latitude: -34.575824615,
		longitude: -58.620249747,
		municipalityId: 627
	},
	{
		id: 4480,
		name: 'JOSE INGENIEROS',
		uta2020: '068400840010006',
		uta2010: '068400840010006',
		latitude: -34.617152869,
		longitude: -58.534218633,
		municipalityId: 627
	},
	{
		id: 4481,
		name: 'CASEROS',
		uta2020: '068400840010001',
		uta2010: '068400840010001',
		latitude: -34.608872951,
		longitude: -58.563664457,
		municipalityId: 627
	},
	{
		id: 4482,
		name: 'EL LIBERTADOR',
		uta2020: '068400840010005',
		uta2010: '068400840010005',
		latitude: -34.55649862,
		longitude: -58.622337838,
		municipalityId: 627
	},
	{
		id: 4483,
		name: 'CHURRUCA',
		uta2020: '068400840010002',
		uta2010: '068400840010002',
		latitude: -34.55896648,
		longitude: -58.62280162,
		municipalityId: 627
	},
	{
		id: 4484,
		name: 'REMEDIOS DE ESCALADA',
		uta2020: '068400840010011',
		uta2010: '068400840010011',
		latitude: -34.570575244,
		longitude: -58.620118067,
		municipalityId: 627
	},
	{
		id: 4485,
		name: 'VILLA RAFFO',
		uta2020: '068400840010015',
		uta2010: '068400840010015',
		latitude: -34.608309075,
		longitude: -58.531971808,
		municipalityId: 627
	},
	{
		id: 4486,
		name: 'SAENZ PEÑA',
		uta2020: '068400840010012',
		uta2010: '068400840010012',
		latitude: -34.599288609,
		longitude: -58.53207964,
		municipalityId: 627
	},
	{
		id: 4487,
		name: 'CIUDAD JARDIN LOMAS DEL PALOMAR',
		uta2020: '068400840010003',
		uta2010: '068400840010003',
		latitude: -34.596119725,
		longitude: -58.596599896,
		municipalityId: 627
	},
	{
		id: 4488,
		name: 'VILLA ROSSI',
		uta2020: '140840658100000',
		uta2010: '140840658100000',
		latitude: -34.297937328,
		longitude: -63.268539714,
		municipalityId: 501
	},
	{
		id: 4489,
		name: 'PALO SANTO',
		uta2020: '340560238030000',
		uta2010: '340560238030000',
		latitude: -25.56390638,
		longitude: -59.336005984,
		municipalityId: 2321
	},
	{
		id: 4490,
		name: 'ALDAO',
		uta2020: '821193981010000',
		uta2010: '821193981010000',
		latitude: -32.706985324,
		longitude: -60.81795182,
		municipalityId: 1071
	},
	{
		id: 4491,
		name: 'ARBOL SOLO',
		uta2020: '861400000000004',
		uta2010: '861400000000004',
		latitude: -29.488334656,
		longitude: -63.509063721,
		municipalityId: 1484
	},
	{
		id: 4492,
		name: 'EL ALGARROBAL',
		uta2020: '861400000000024',
		uta2010: '861400000000024',
		latitude: -29.363018731,
		longitude: -63.15608946,
		municipalityId: 1484
	},
	{
		id: 4493,
		name: 'EL CERRO',
		uta2020: '861400000000029',
		uta2010: '861400000000029',
		latitude: -29.16411812,
		longitude: -63.77015984,
		municipalityId: 1484
	},
	{
		id: 4494,
		name: 'LOS REMANSOS',
		uta2020: '861400000000082',
		uta2010: '861400000000082',
		latitude: -29.280454636,
		longitude: -63.321697235,
		municipalityId: 1484
	},
	{
		id: 4495,
		name: 'EL BAJO',
		uta2020: '861400000000028',
		uta2010: '861400000000028',
		latitude: -29.47579,
		longitude: -63.44565,
		municipalityId: 1484
	},
	{
		id: 4496,
		name: 'CORONEL FERNANDEZ',
		uta2020: '861400000000016',
		uta2010: '861400000000016',
		latitude: -29.536241641,
		longitude: -63.237453615,
		municipalityId: 1484
	},
	{
		id: 4497,
		name: 'EL MISTOL',
		uta2020: '861400000000035',
		uta2010: '861400000000035',
		latitude: -28.946174085,
		longitude: -63.715026781,
		municipalityId: 1484
	},
	{
		id: 4498,
		name: 'CAMPO DEL CISNE',
		uta2020: '861400000000009',
		uta2010: '861400000000009',
		latitude: -29.73191,
		longitude: -63.21774,
		municipalityId: 1484
	},
	{
		id: 4499,
		name: 'RAMA PASO',
		uta2020: '861400000000101',
		uta2010: '861400000000101',
		latitude: -29.21104,
		longitude: -63.32919,
		municipalityId: 1484
	},
	{
		id: 4500,
		name: 'VILLA QUEBRACHOS',
		uta2020: '861400000000130',
		uta2010: '861400000000130',
		latitude: -29.241767234,
		longitude: -63.613072963,
		municipalityId: 1484
	},
	{
		id: 4501,
		name: 'TACO POZO',
		uta2020: '861400000000127',
		uta2010: '861400000000127',
		latitude: -29.72953,
		longitude: -63.06674,
		municipalityId: 1484
	},
	{
		id: 4502,
		name: 'EL ESPARTAL',
		uta2020: '861400000000031',
		uta2010: '861400000000031',
		latitude: -29.59496,
		longitude: -63.23722,
		municipalityId: 1484
	},
	{
		id: 4503,
		name: 'LA BLANQUITA',
		uta2020: '861400000000054',
		uta2010: '861400000000054',
		latitude: -29.228185923,
		longitude: -63.40086509,
		municipalityId: 1484
	},
	{
		id: 4504,
		name: 'BELGRANO',
		uta2020: '861400000000006',
		uta2010: '861400000000006',
		latitude: -29.32646,
		longitude: -63.61173,
		municipalityId: 1484
	},
	{
		id: 4505,
		name: 'SAN CARLOS',
		uta2020: '861400000000110',
		uta2010: '861400000000110',
		latitude: -29.35524,
		longitude: -63.31633,
		municipalityId: 1484
	},
	{
		id: 4506,
		name: 'FUERTE VIEJO',
		uta2020: '861400000000047',
		uta2010: '861400000000047',
		latitude: -29.48361,
		longitude: -63.16794,
		municipalityId: 1484
	},
	{
		id: 4507,
		name: 'LA TRAMPA',
		uta2020: '861400000000066',
		uta2010: '861400000000066',
		latitude: -29.58863444,
		longitude: -63.1645657,
		municipalityId: 1484
	},
	{
		id: 4508,
		name: 'SAN FRANCISCO',
		uta2020: '861400000000111',
		uta2010: '861400000000111',
		latitude: -29.418452501,
		longitude: -63.170681262,
		municipalityId: 1484
	},
	{
		id: 4509,
		name: 'EL PUEBLITO',
		uta2020: '861400000000042',
		uta2010: '861400000000042',
		latitude: -29.170151316,
		longitude: -63.576049758,
		municipalityId: 1484
	},
	{
		id: 4510,
		name: 'EL PARAISO',
		uta2020: '861400000000039',
		uta2010: '861400000000039',
		latitude: -29.621807098,
		longitude: -63.117774963,
		municipalityId: 1484
	},
	{
		id: 4511,
		name: 'EL TALAR',
		uta2020: '861400000000043',
		uta2010: '861400000000043',
		latitude: -29.161277033,
		longitude: -63.703029804,
		municipalityId: 1484
	},
	{
		id: 4512,
		name: 'CUCHI CORRAL',
		uta2020: '861400000000020',
		uta2010: '861400000000020',
		latitude: -29.522363663,
		longitude: -63.257469177,
		municipalityId: 1484
	},
	{
		id: 4513,
		name: 'PUERTA DEL MONTE',
		uta2020: '861400000000097',
		uta2010: '861400000000097',
		latitude: -29.23406,
		longitude: -63.34637,
		municipalityId: 1484
	},
	{
		id: 4514,
		name: 'SUMAMPA VIEJO',
		uta2020: '861400000030000',
		uta2010: '861400000030000',
		latitude: -29.396268752,
		longitude: -63.339044143,
		municipalityId: 1484
	},
	{
		id: 4515,
		name: 'BUENA VISTA',
		uta2020: '861400000000007',
		uta2010: '861400000000007',
		latitude: -29.405632718,
		longitude: -63.530917708,
		municipalityId: 1484
	},
	{
		id: 4516,
		name: 'LA YERBA',
		uta2020: '861400000000068',
		uta2010: '861400000000068',
		latitude: -29.243566513,
		longitude: -63.296951294,
		municipalityId: 1484
	},
	{
		id: 4517,
		name: 'POZO DEL MONTE',
		uta2020: '861400000000093',
		uta2010: '861400000000093',
		latitude: -29.252466562,
		longitude: -63.455675204,
		municipalityId: 1484
	},
	{
		id: 4518,
		name: 'HORCOS TUCUCUNA',
		uta2020: '861400000000049',
		uta2010: '861400000000049',
		latitude: -29.16634,
		longitude: -63.62471,
		municipalityId: 1484
	},
	{
		id: 4519,
		name: 'GAUCHO DE GUEMES',
		uta2020: '861400000000048',
		uta2010: '861400000000048',
		latitude: -29.477739103,
		longitude: -63.498167942,
		municipalityId: 1484
	},
	{
		id: 4520,
		name: 'SAN JUAN',
		uta2020: '861400000000114',
		uta2010: '861400000000114',
		latitude: -29.441265079,
		longitude: -63.341113086,
		municipalityId: 1484
	},
	{
		id: 4521,
		name: 'EL AYUDANTE',
		uta2020: '861400000000027',
		uta2010: '861400000000027',
		latitude: -29.543200634,
		longitude: -63.315356372,
		municipalityId: 1484
	},
	{
		id: 4522,
		name: 'EL UCLE',
		uta2020: '861400000000044',
		uta2010: '861400000000044',
		latitude: -29.62798,
		longitude: -62.91595,
		municipalityId: 1484
	},
	{
		id: 4523,
		name: 'CORRAL DEL REY',
		uta2020: '861400000000018',
		uta2010: '861400000000018',
		latitude: -29.73863,
		longitude: -62.98209,
		municipalityId: 1484
	},
	{
		id: 4524,
		name: 'RIO VIEJO',
		uta2020: '861400000000107',
		uta2010: '861400000000107',
		latitude: -29.29766716,
		longitude: -63.271156231,
		municipalityId: 1484
	},
	{
		id: 4525,
		name: 'LA GRANADA',
		uta2020: '861400000000059',
		uta2010: '861400000000059',
		latitude: -29.448960775,
		longitude: -63.241914279,
		municipalityId: 1484
	},
	{
		id: 4526,
		name: 'EL DESVIO',
		uta2020: '861400000000030',
		uta2010: '861400000000030',
		latitude: -29.103974485,
		longitude: -63.482793027,
		municipalityId: 1484
	},
	{
		id: 4527,
		name: '14 DE MAYO',
		uta2020: '861400000000001',
		uta2010: '861400000000001',
		latitude: -29.79049,
		longitude: -63.18682,
		municipalityId: 1484
	},
	{
		id: 4528,
		name: 'ORATORIO',
		uta2020: '861400000000087',
		uta2010: '861400000000087',
		latitude: -29.15177,
		longitude: -63.37985,
		municipalityId: 1484
	},
	{
		id: 4529,
		name: 'SANTA ANA',
		uta2020: '861400000000120',
		uta2010: '861400000000120',
		latitude: -29.403154405,
		longitude: -63.597952034,
		municipalityId: 1484
	},
	{
		id: 4530,
		name: 'EL LAUREL',
		uta2020: '861400000000034',
		uta2010: '861400000000034',
		latitude: -28.93093,
		longitude: -63.90047,
		municipalityId: 1484
	},
	{
		id: 4531,
		name: 'LA CHICHARRA',
		uta2020: '861400000000055',
		uta2010: '861400000000055',
		latitude: -29.61270961,
		longitude: -63.11872306,
		municipalityId: 1484
	},
	{
		id: 4532,
		name: 'LA HIGUERA',
		uta2020: '861400000000061',
		uta2010: '861400000000061',
		latitude: -29.32947,
		longitude: -63.45177,
		municipalityId: 1484
	},
	{
		id: 4533,
		name: 'LOS ALGARROBOS',
		uta2020: '861400000000076',
		uta2010: '861400000000076',
		latitude: -29.43193,
		longitude: -63.43953,
		municipalityId: 1484
	},
	{
		id: 4534,
		name: 'LUQUE',
		uta2020: '141191029120000',
		uta2010: '141191029120000',
		latitude: -31.646873629,
		longitude: -63.3447983,
		municipalityId: 311
	},
	{
		id: 4535,
		name: 'EL MILAGRO',
		uta2020: '900218189000024',
		uta2010: '900218189000024',
		latitude: -27.421777725,
		longitude: -65.497642517,
		municipalityId: 2185
	},
	{
		id: 4536,
		name: 'LA ESPERANZA',
		uta2020: '900218189000074',
		uta2010: '900218189000074',
		latitude: -27.39838,
		longitude: -65.50881,
		municipalityId: 2185
	},
	{
		id: 4537,
		name: 'LA TRINIDAD',
		uta2020: '900218189070000',
		uta2010: '900218189070000',
		latitude: -27.413472538,
		longitude: -65.51523148,
		municipalityId: 2185
	},
	{
		id: 4538,
		name: 'SAN CARLOS',
		uta2020: '900218189000120',
		uta2010: '900218189000120',
		latitude: -27.4214913,
		longitude: -65.476648,
		municipalityId: 2185
	},
	{
		id: 4539,
		name: 'SEGUNDA ANGOSTURA',
		uta2020: '620280000000030',
		uta2010: '620280000000030',
		latitude: -40.341342926,
		longitude: -63.978088379,
		municipalityId: 1296
	},
	{
		id: 4540,
		name: 'COLONIA CHOCORI',
		uta2020: '620280000000003',
		uta2010: '620280000000003',
		latitude: -39.919062083,
		longitude: -64.903609263,
		municipalityId: 1296
	},
	{
		id: 4541,
		name: 'BOCA DE LA TRAVESIA',
		uta2020: '620280000000002',
		uta2010: '620280000000002',
		latitude: -40.220565796,
		longitude: -64.070602417,
		municipalityId: 1296
	},
	{
		id: 4542,
		name: 'COLONIA LA LUISA',
		uta2020: '620280000000004',
		uta2010: '620280000000004',
		latitude: -40.1737331,
		longitude: -64.25474,
		municipalityId: 1296
	},
	{
		id: 4543,
		name: 'BARRIO PLANTA COMPRESORA DE GAS',
		uta2020: '620280000030000',
		uta2010: '620280000030000',
		latitude: -40.056474492,
		longitude: -64.472608763,
		municipalityId: 1296
	},
	{
		id: 4544,
		name: 'EL PORVENIR',
		uta2020: '620280000000012',
		uta2010: '620280000000012',
		latitude: -40.316509247,
		longitude: -64.05721283,
		municipalityId: 1296
	},
	{
		id: 4545,
		name: 'COLONIA SAN JUAN',
		uta2020: '620280000000006',
		uta2010: '620280000000006',
		latitude: -40.06645572,
		longitude: -64.6129066,
		municipalityId: 1296
	},
	{
		id: 4546,
		name: 'AGUA DEL MOLLE',
		uta2020: '140492280000001',
		uta2010: '140492280000001',
		latitude: -30.643234976,
		longitude: -64.498512768,
		municipalityId: 74
	},
	{
		id: 4547,
		name: 'COPACABANA',
		uta2020: '140492280040000',
		uta2010: '140492280040000',
		latitude: -30.611348622,
		longitude: -64.555568858,
		municipalityId: 74
	},
	{
		id: 4548,
		name: 'LA VALEROSA',
		uta2020: '067280728000011',
		uta2010: '067280728000011',
		latitude: -34.5361827,
		longitude: -59.5038768,
		municipalityId: 628
	},
	{
		id: 4549,
		name: 'AZCUENAGA',
		uta2020: '067280728010000',
		uta2010: '067280728010000',
		latitude: -34.363791091,
		longitude: -59.374599111,
		municipalityId: 628
	},
	{
		id: 4550,
		name: 'SOLIS',
		uta2020: '067280728050000',
		uta2010: '067280728050000',
		latitude: -34.298971295,
		longitude: -59.325054728,
		municipalityId: 628
	},
	{
		id: 4551,
		name: 'VILLA SAN ALBERTO',
		uta2020: '067280728000017',
		uta2010: '067280728000017',
		latitude: -34.4627993,
		longitude: -59.5674946,
		municipalityId: 628
	},
	{
		id: 4552,
		name: 'CAMPO VAZQUEZ',
		uta2020: '067280728000002',
		uta2010: '067280728000002',
		latitude: -34.387887,
		longitude: -59.4326743,
		municipalityId: 628
	},
	{
		id: 4553,
		name: 'VILLA ESPIL',
		uta2020: '067280728060000',
		uta2010: '067280728060000',
		latitude: -34.506681405,
		longitude: -59.337266132,
		municipalityId: 628
	},
	{
		id: 4554,
		name: 'EL CONDOR',
		uta2020: '067280728000004',
		uta2010: '067280728000004',
		latitude: -34.5237034,
		longitude: -59.7473706,
		municipalityId: 628
	},
	{
		id: 4555,
		name: 'LOS MANUELES',
		uta2020: '067280728000012',
		uta2010: '067280728000012',
		latitude: -34.367930197,
		longitude: -59.300176089,
		municipalityId: 628
	},
	{
		id: 4556,
		name: 'LA FLORIDA',
		uta2020: '067280728000009',
		uta2010: '067280728000009',
		latitude: -34.5462789,
		longitude: -59.425496,
		municipalityId: 628
	},
	{
		id: 4557,
		name: 'LA PRIMAVERA',
		uta2020: '067280728000010',
		uta2010: '067280728000010',
		latitude: -34.41261688,
		longitude: -59.411096773,
		municipalityId: 628
	},
	{
		id: 4558,
		name: 'SAN ANDRES DE GILES',
		uta2020: '067280728040000',
		uta2010: '067280728040000',
		latitude: -34.445908082,
		longitude: -59.445167356,
		municipalityId: 628
	},
	{
		id: 4559,
		name: 'SAN ALBERTO',
		uta2020: '067280728000014',
		uta2010: '067280728000014',
		latitude: -34.467453003,
		longitude: -59.561717987,
		municipalityId: 628
	},
	{
		id: 4560,
		name: 'TUYUTI',
		uta2020: '067280728000016',
		uta2010: '067280728000016',
		latitude: -34.5194954,
		longitude: -59.6741961,
		municipalityId: 628
	},
	{
		id: 4561,
		name: 'LA AMALIA',
		uta2020: '067280728000008',
		uta2010: '067280728000008',
		latitude: -34.4787965,
		longitude: -59.5011596,
		municipalityId: 628
	},
	{
		id: 4562,
		name: 'CULULLU',
		uta2020: '067280728020000',
		uta2010: '067280728020000',
		latitude: -34.446087068,
		longitude: -59.36225533,
		municipalityId: 628
	},
	{
		id: 4563,
		name: 'HEAVY',
		uta2020: '067280728000005',
		uta2010: '067280728000005',
		latitude: -34.4300921,
		longitude: -59.6561481,
		municipalityId: 628
	},
	{
		id: 4564,
		name: 'FRANKLIN',
		uta2020: '067280728030000',
		uta2010: '067280728030000',
		latitude: -34.610390872,
		longitude: -59.630179518,
		municipalityId: 628
	},
	{
		id: 4565,
		name: 'VILLA RUIZ',
		uta2020: '067280728070000',
		uta2010: '067280728070000',
		latitude: -34.435202183,
		longitude: -59.26039588,
		municipalityId: 628
	},
	{
		id: 4566,
		name: 'GUALEGUAYCHU',
		uta2020: '300560189070000',
		uta2010: '300560189070000',
		latitude: -33.010032827,
		longitude: -58.516425795,
		municipalityId: 1629
	},
	{
		id: 4567,
		name: 'PUERTO UNZUE',
		uta2020: '300560189000123',
		uta2010: '300560189000123',
		latitude: -33.077457428,
		longitude: -58.212982178,
		municipalityId: 1629
	},
	{
		id: 4568,
		name: 'SARANDI',
		uta2020: '300560189000136',
		uta2010: '300560189000136',
		latitude: -33.046824195,
		longitude: -58.605692712,
		municipalityId: 1629
	},
	{
		id: 4569,
		name: 'GUALEYAN',
		uta2020: '300560189000090',
		uta2010: '300560189000090',
		latitude: -32.981459088,
		longitude: -58.56597797,
		municipalityId: 1629
	},
	{
		id: 4570,
		name: 'COUNTRY JOCKEY CLUB',
		uta2020: '901198644010002',
		uta2010: '901198644010002',
		latitude: -26.762968002,
		longitude: -65.307947671,
		municipalityId: 2259
	},
	{
		id: 4571,
		name: 'CURVA DE LOS VEGAS',
		uta2020: '901198644000011',
		uta2010: '901198644000011',
		latitude: -26.7784074,
		longitude: -65.2696793,
		municipalityId: 2259
	},
	{
		id: 4572,
		name: 'CEVIL REDONDO',
		uta2020: '901198644000005',
		uta2010: '901198644000005',
		latitude: -26.778963958,
		longitude: -65.285320842,
		municipalityId: 2259
	},
	{
		id: 4573,
		name: 'VILLA CARMELA',
		uta2020: '901198644020000',
		uta2010: '901198644020000',
		latitude: -26.76777519,
		longitude: -65.270844409,
		municipalityId: 2259
	},
	{
		id: 4574,
		name: 'VILLA PARANACITO',
		uta2020: '300630224060000',
		uta2010: '300630224060000',
		latitude: -33.715624422,
		longitude: -58.659763145,
		municipalityId: 1695
	},
	{
		id: 4575,
		name: 'ARROYO BRAZO CHICO',
		uta2020: '300630224000002',
		uta2010: '300630224000002',
		latitude: -33.778770704,
		longitude: -58.54070986,
		municipalityId: 1695
	},
	{
		id: 4576,
		name: 'ARROYO MERLO',
		uta2020: '300630224000008',
		uta2010: '300630224000008',
		latitude: -34.005645517,
		longitude: -58.55208275,
		municipalityId: 1695
	},
	{
		id: 4577,
		name: 'BRAZO LARGO',
		uta2020: '300630224000012',
		uta2010: '300630224000012',
		latitude: -33.774465523,
		longitude: -58.608577015,
		municipalityId: 1695
	},
	{
		id: 4578,
		name: 'ARROYO SANTOS GRANDE',
		uta2020: '300630224000011',
		uta2010: '300630224000011',
		latitude: -33.563184415,
		longitude: -58.561465494,
		municipalityId: 1695
	},
	{
		id: 4579,
		name: 'ARROYO NEGRO',
		uta2020: '300630224000009',
		uta2010: '300630224000009',
		latitude: -33.86445548,
		longitude: -58.66956594,
		municipalityId: 1695
	},
	{
		id: 4580,
		name: 'ARROYO GRANDE',
		uta2020: '300630224000004',
		uta2010: '300630224000004',
		latitude: -33.6387532,
		longitude: -58.82767479,
		municipalityId: 1695
	},
	{
		id: 4581,
		name: 'SAGASTUME',
		uta2020: '300630224000034',
		uta2010: '300630224000034',
		latitude: -33.6061207,
		longitude: -58.77857594,
		municipalityId: 1695
	},
	{
		id: 4582,
		name: 'DISTRITO ISLETAS',
		uta2020: '300219125000017',
		uta2010: '300219125000017',
		latitude: -32.220537381,
		longitude: -60.364275802,
		municipalityId: 1641
	},
	{
		id: 4583,
		name: 'ISLETAS',
		uta2020: '300219125000022',
		uta2010: '300219125000022',
		latitude: -32.197724853,
		longitude: -60.290161998,
		municipalityId: 1641
	},
	{
		id: 4584,
		name: 'EL CONDOR',
		uta2020: '381126259030000',
		uta2010: '381126259030000',
		latitude: -22.383451244,
		longitude: -65.327904835,
		municipalityId: 1210
	},
	{
		id: 4585,
		name: 'ESCOBAR',
		uta2020: '381126259000034',
		uta2010: '381126259000034',
		latitude: -22.371126175,
		longitude: -65.330467224,
		municipalityId: 1210
	},
	{
		id: 4586,
		name: 'LLULLUCHAYOC',
		uta2020: '381126259060000',
		uta2010: '381126259060000',
		latitude: -22.515216946,
		longitude: -65.370293752,
		municipalityId: 1210
	},
	{
		id: 4587,
		name: 'CORRAL BLANCO',
		uta2020: '381126259000027',
		uta2010: '381126259000027',
		latitude: -22.47772811,
		longitude: -65.36965348,
		municipalityId: 1210
	},
	{
		id: 4588,
		name: 'SAN JUAN',
		uta2020: '700280028010000',
		uta2010: '700280028010000',
		latitude: -31.537197038,
		longitude: -68.525018317,
		municipalityId: 2430
	},
	{
		id: 4589,
		name: 'MONTE RALO',
		uta2020: '141471400220000',
		uta2010: '141471400220000',
		latitude: -31.911574981,
		longitude: -64.239991846,
		municipalityId: 230
	},
	{
		id: 4590,
		name: 'COLONIA EL EMPALME',
		uta2020: '820420077000020',
		uta2010: '820420077000020',
		latitude: -33.801615968,
		longitude: -62.044360385,
		municipalityId: 906
	},
	{
		id: 4591,
		name: 'VENADO TUERTO',
		uta2020: '820420077290000',
		uta2010: '820420077290000',
		latitude: -33.747315292,
		longitude: -61.969535869,
		municipalityId: 906
	},
	{
		id: 4592,
		name: 'LA ESCONDIDA',
		uta2020: '820420077000050',
		uta2010: '820420077000050',
		latitude: -33.862950522,
		longitude: -61.911297823,
		municipalityId: 906
	},
	{
		id: 4593,
		name: 'SAN MARCOS',
		uta2020: '820420077000067',
		uta2010: '820420077000067',
		latitude: -33.63555436,
		longitude: -62.043163365,
		municipalityId: 906
	},
	{
		id: 4594,
		name: 'TINTITACO',
		uta2020: '740076007000198',
		uta2010: '740076007000198',
		latitude: -32.484916687,
		longitude: -66.128837585,
		municipalityId: 1116
	},
	{
		id: 4595,
		name: 'LEANDRO N ALEM',
		uta2020: '740076007030000',
		uta2010: '740076007030000',
		latitude: -32.104782105,
		longitude: -65.962112427,
		municipalityId: 1116
	},
	{
		id: 4596,
		name: 'LA MAJADA',
		uta2020: '740076007000098',
		uta2010: '740076007000098',
		latitude: -32.529882903,
		longitude: -66.042903251,
		municipalityId: 1116
	},
	{
		id: 4597,
		name: 'POZO DE LOS RAYOS',
		uta2020: '740076007000156',
		uta2010: '740076007000156',
		latitude: -32.502838135,
		longitude: -66.122085571,
		municipalityId: 1116
	},
	{
		id: 4598,
		name: 'CORONEL MOLDES',
		uta2020: '140980812100000',
		uta2010: '140980812100000',
		latitude: -33.623086874,
		longitude: -64.597103351,
		municipalityId: 445
	},
	{
		id: 4599,
		name: 'SAN JOSE DEL RINCON',
		uta2020: '820633022160000',
		uta2010: '820633022160000',
		latitude: -31.606147112,
		longitude: -60.569631685,
		municipalityId: 1032
	},
	{
		id: 4600,
		name: 'PUNTA DEL AGUA',
		uta2020: '661120266000139',
		uta2010: '661120266000139',
		latitude: -25.529679813,
		longitude: -64.924538385,
		municipalityId: 1830
	},
	{
		id: 4601,
		name: 'METAN VIEJO',
		uta2020: '661120266050000',
		uta2010: '661120266050000',
		latitude: -25.541803952,
		longitude: -64.984938509,
		municipalityId: 1830
	},
	{
		id: 4602,
		name: 'EL PASTIADERO',
		uta2020: '661120266000037',
		uta2010: '661120266000037',
		latitude: -25.439782532,
		longitude: -64.878496772,
		municipalityId: 1830
	},
	{
		id: 4603,
		name: 'LAS JUNTAS',
		uta2020: '661120266000107',
		uta2010: '661120266000107',
		latitude: -25.588218689,
		longitude: -64.883926392,
		municipalityId: 1830
	},
	{
		id: 4604,
		name: 'LOS LAPACHOS',
		uta2020: '661120266000110',
		uta2010: '661120266000110',
		latitude: -25.621637344,
		longitude: -64.807487488,
		municipalityId: 1830
	},
	{
		id: 4605,
		name: 'SANTA MARIA',
		uta2020: '661120266000153',
		uta2010: '661120266000153',
		latitude: -25.601615906,
		longitude: -64.850486755,
		municipalityId: 1830
	},
	{
		id: 4606,
		name: 'LA AGUADITA',
		uta2020: '661120266000085',
		uta2010: '661120266000085',
		latitude: -25.451559067,
		longitude: -64.96030426,
		municipalityId: 1830
	},
	{
		id: 4607,
		name: 'VERA CRUZ',
		uta2020: '661120266000157',
		uta2010: '661120266000157',
		latitude: -25.324022293,
		longitude: -65.086830139,
		municipalityId: 1830
	},
	{
		id: 4608,
		name: 'EL GUANACO',
		uta2020: '661120266000029',
		uta2010: '661120266000029',
		latitude: -25.44798851,
		longitude: -64.803764343,
		municipalityId: 1830
	},
	{
		id: 4609,
		name: 'NOGALITO',
		uta2020: '661120266000121',
		uta2010: '661120266000121',
		latitude: -25.58344,
		longitude: -64.92822,
		municipalityId: 1830
	},
	{
		id: 4610,
		name: 'SACHA PERA',
		uta2020: '661120266000147',
		uta2010: '661120266000147',
		latitude: -25.514595032,
		longitude: -64.835136414,
		municipalityId: 1830
	},
	{
		id: 4611,
		name: 'SAN JOSE DE METAN',
		uta2020: '661120266040000',
		uta2010: '661120266040000',
		latitude: -25.507720538,
		longitude: -64.982124541,
		municipalityId: 1830
	},
	{
		id: 4612,
		name: 'LAS CONCHAS',
		uta2020: '661120266000105',
		uta2010: '661120266000105',
		latitude: -25.470228195,
		longitude: -64.93548584,
		municipalityId: 1830
	},
	{
		id: 4613,
		name: 'EL GARABATAL',
		uta2020: '661120266000028',
		uta2010: '661120266000028',
		latitude: -25.531860352,
		longitude: -64.821937561,
		municipalityId: 1830
	},
	{
		id: 4614,
		name: 'VILLA GIARDINO',
		uta2020: '140910749270000',
		uta2010: '140910749270000',
		latitude: -31.036277394,
		longitude: -64.492889912,
		municipalityId: 285
	},
	{
		id: 4615,
		name: 'LOS TRONCOS',
		uta2020: '140910749000072',
		uta2010: '140910749000072',
		latitude: -31.056085587,
		longitude: -64.55909729,
		municipalityId: 285
	},
	{
		id: 4616,
		name: 'MONTEFIORE',
		uta2020: '820773316050000',
		uta2010: '820773316050000',
		latitude: -29.667869823,
		longitude: -61.867108288,
		municipalityId: 1056
	},
	{
		id: 4617,
		name: 'LA ELSA',
		uta2020: '820773316000064',
		uta2010: '820773316000064',
		latitude: -29.66877,
		longitude: -61.86624,
		municipalityId: 1056
	},
	{
		id: 4618,
		name: 'LUCAS GONZALEZ',
		uta2020: '300770280060000',
		uta2010: '300770280060000',
		latitude: -32.385928948,
		longitude: -59.531300465,
		municipalityId: 1705
	},
	{
		id: 4619,
		name: 'ALDEA SAN SIMON',
		uta2020: '300770280000003',
		uta2010: '300770280000003',
		latitude: -32.408166384,
		longitude: -59.543519486,
		municipalityId: 1705
	},
	{
		id: 4620,
		name: 'ITIN',
		uta2020: '220390112020000',
		uta2010: '220390112020000',
		latitude: -27.487621616,
		longitude: -61.323881842,
		municipalityId: 57
	},
	{
		id: 4621,
		name: 'EL ÑANDUBAY',
		uta2020: '220390112000008',
		uta2010: '220390112000008',
		latitude: -27.70611739,
		longitude: -61.184131306,
		municipalityId: 57
	},
	{
		id: 4622,
		name: 'COLONIA TAÑIGO II',
		uta2020: '220390112000006',
		uta2010: '220390112000006',
		latitude: -27.546815139,
		longitude: -61.371942701,
		municipalityId: 57
	},
	{
		id: 4623,
		name: 'EL JACARANDA',
		uta2020: '220390112000007',
		uta2010: '220390112000007',
		latitude: -27.759871463,
		longitude: -61.300965142,
		municipalityId: 57
	},
	{
		id: 4624,
		name: 'LOTE 14',
		uta2020: '220390112000011',
		uta2010: '220390112000011',
		latitude: -27.657966325,
		longitude: -61.252438534,
		municipalityId: 57
	},
	{
		id: 4625,
		name: 'LOTE 40',
		uta2020: '220390112000020',
		uta2010: '220390112000020',
		latitude: -27.678561708,
		longitude: -61.295308234,
		municipalityId: 57
	},
	{
		id: 4626,
		name: 'TAÑIGO',
		uta2020: '220390112000026',
		uta2010: '220390112000026',
		latitude: -27.50130837,
		longitude: -61.41718532,
		municipalityId: 57
	},
	{
		id: 4627,
		name: 'COLONIA PUERTA DEL LEON SUR',
		uta2020: '220390112000005',
		uta2010: '220390112000005',
		latitude: -27.615788135,
		longitude: -61.069901823,
		municipalityId: 57
	},
	{
		id: 4628,
		name: 'COLONIA JACARANDA II',
		uta2020: '220390112000002',
		uta2010: '220390112000002',
		latitude: -27.65793052,
		longitude: -61.3378211,
		municipalityId: 57
	},
	{
		id: 4629,
		name: 'COLONIA CAMPO HERMOSO',
		uta2020: '220390112000001',
		uta2010: '220390112000001',
		latitude: -27.597486358,
		longitude: -61.131970665,
		municipalityId: 57
	},
	{
		id: 4630,
		name: 'EL TIZON',
		uta2020: '220390112000009',
		uta2010: '220390112000009',
		latitude: -27.64925718,
		longitude: -61.42393535,
		municipalityId: 57
	},
	{
		id: 4631,
		name: 'LOTE 33',
		uta2020: '220390112000019',
		uta2010: '220390112000019',
		latitude: -27.546394473,
		longitude: -61.437290932,
		municipalityId: 57
	},
	{
		id: 4632,
		name: 'LOTE 15',
		uta2020: '220390112000013',
		uta2010: '220390112000013',
		latitude: -27.76011696,
		longitude: -61.262539638,
		municipalityId: 57
	},
	{
		id: 4633,
		name: 'HERMOSO CAMPO',
		uta2020: '220390112010000',
		uta2010: '220390112010000',
		latitude: -27.610539212,
		longitude: -61.344844244,
		municipalityId: 57
	},
	{
		id: 4634,
		name: 'COLONIA PUERTA DEL LEON',
		uta2020: '220390112000003',
		uta2010: '220390112000003',
		latitude: -27.56077462,
		longitude: -61.0726896,
		municipalityId: 57
	},
	{
		id: 4635,
		name: 'LOTE 19',
		uta2020: '220390112000017',
		uta2010: '220390112000017',
		latitude: -27.637929407,
		longitude: -61.130427932,
		municipalityId: 57
	},
	{
		id: 4636,
		name: 'SAN FERNANDO',
		uta2020: '100350112000103',
		uta2010: '100350112000103',
		latitude: -27.33518,
		longitude: -66.90081,
		municipalityId: 1886
	},
	{
		id: 4637,
		name: 'SAN FERNANDO NORTE',
		uta2020: '100350112000104',
		uta2010: '100350112000104',
		latitude: -27.28847316,
		longitude: -66.90221156,
		municipalityId: 1886
	},
	{
		id: 4638,
		name: 'EL EJE',
		uta2020: '100350112000032',
		uta2010: '100350112000032',
		latitude: -27.27686355,
		longitude: -66.87507531,
		municipalityId: 1886
	},
	{
		id: 4639,
		name: 'COLONIA MARTIRES',
		uta2020: '540210084000014',
		uta2010: '540210084000014',
		latitude: -27.40588392,
		longitude: -55.33529565,
		municipalityId: 2131
	},
	{
		id: 4640,
		name: 'MARTIRES',
		uta2020: '540210084050000',
		uta2010: '540210084050000',
		latitude: -27.418864759,
		longitude: -55.377793664,
		municipalityId: 2131
	},
	{
		id: 4641,
		name: 'ALPACHIRI',
		uta2020: '420700014010000',
		uta2010: '420700014010000',
		latitude: -37.375881193,
		longitude: -63.773873591,
		municipalityId: 1982
	},
	{
		id: 4642,
		name: 'URDANE',
		uta2020: '420700014000028',
		uta2010: '420700014000028',
		latitude: -37.392609002,
		longitude: -64.00592446,
		municipalityId: 1982
	},
	{
		id: 4643,
		name: 'ESTANCIA LA NATURAL',
		uta2020: '420700014000009',
		uta2010: '420700014000009',
		latitude: -37.30408453,
		longitude: -63.55588826,
		municipalityId: 1982
	},
	{
		id: 4644,
		name: 'EL FUERTE',
		uta2020: '660070035000082',
		uta2010: '660070035000082',
		latitude: -24.771749497,
		longitude: -64.45652771,
		municipalityId: 1844
	},
	{
		id: 4645,
		name: 'EL REY',
		uta2020: '660070035000124',
		uta2010: '660070035000124',
		latitude: -24.718997955,
		longitude: -64.642539978,
		municipalityId: 1844
	},
	{
		id: 4646,
		name: 'PASO DE LA CRUZ',
		uta2020: '660070035000378',
		uta2010: '660070035000378',
		latitude: -25.03301,
		longitude: -64.56961,
		municipalityId: 1844
	},
	{
		id: 4647,
		name: 'RIO DEL VALLE',
		uta2020: '660070035150000',
		uta2010: '660070035150000',
		latitude: -24.683968512,
		longitude: -64.201788826,
		municipalityId: 1844
	},
	{
		id: 4648,
		name: 'LOS NOGALES',
		uta2020: '660070035000335',
		uta2010: '660070035000335',
		latitude: -25.096401215,
		longitude: -64.701278687,
		municipalityId: 1844
	},
	{
		id: 4649,
		name: 'LAS VIBORAS',
		uta2020: '660070035000313',
		uta2010: '660070035000313',
		latitude: -25.04865663,
		longitude: -64.64155301,
		municipalityId: 1844
	},
	{
		id: 4650,
		name: 'LAS LAJITAS',
		uta2020: '660070035100000',
		uta2010: '660070035100000',
		latitude: -24.733198844,
		longitude: -64.19948312,
		municipalityId: 1844
	},
	{
		id: 4651,
		name: 'PANTANILLO',
		uta2020: '660070035000375',
		uta2010: '660070035000375',
		latitude: -25.276397705,
		longitude: -64.579162598,
		municipalityId: 1844
	},
	{
		id: 4652,
		name: 'SAN GABRIEL',
		uta2020: '660070035000468',
		uta2010: '660070035000468',
		latitude: -24.712924957,
		longitude: -64.158584595,
		municipalityId: 1844
	},
	{
		id: 4653,
		name: 'EL PIQUETE',
		uta2020: '660070035000112',
		uta2010: '660070035000112',
		latitude: -24.752635956,
		longitude: -64.46912384,
		municipalityId: 1844
	},
	{
		id: 4654,
		name: 'REINA DEL VALLE',
		uta2020: '660070035000443',
		uta2010: '660070035000443',
		latitude: -24.750728607,
		longitude: -64.27481842,
		municipalityId: 1844
	},
	{
		id: 4655,
		name: 'LOS NOQUES',
		uta2020: '660070035000336',
		uta2010: '660070035000336',
		latitude: -25.077459335,
		longitude: -64.508270264,
		municipalityId: 1844
	},
	{
		id: 4656,
		name: 'PALERMO',
		uta2020: '660070035000368',
		uta2010: '660070035000368',
		latitude: -24.713123321,
		longitude: -64.242149353,
		municipalityId: 1844
	},
	{
		id: 4657,
		name: 'EL GRAMILLAL',
		uta2020: '660070035000084',
		uta2010: '660070035000084',
		latitude: -25.295545578,
		longitude: -64.60610199,
		municipalityId: 1844
	},
	{
		id: 4658,
		name: 'CABEZA DE ANTA',
		uta2020: '660070035000024',
		uta2010: '660070035000024',
		latitude: -24.909982681,
		longitude: -64.45249939,
		municipalityId: 1844
	},
	{
		id: 4659,
		name: 'MIRAFLORES',
		uta2020: '660070035000357',
		uta2010: '660070035000357',
		latitude: -25.348317112,
		longitude: -64.638978871,
		municipalityId: 1844
	},
	{
		id: 4660,
		name: 'ALTO BELLO',
		uta2020: '660070035000009',
		uta2010: '660070035000009',
		latitude: -25.292867661,
		longitude: -64.761306763,
		municipalityId: 1844
	},
	{
		id: 4661,
		name: 'FINCA EL MOLLAR',
		uta2020: '660070035000172',
		uta2010: '660070035000172',
		latitude: -24.687042236,
		longitude: -64.218307495,
		municipalityId: 1844
	},
	{
		id: 4662,
		name: 'EL LIBANO',
		uta2020: '660070035000092',
		uta2010: '660070035000092',
		latitude: -25.118480682,
		longitude: -64.707824707,
		municipalityId: 1844
	},
	{
		id: 4663,
		name: 'EL MOLINO',
		uta2020: '660070035000099',
		uta2010: '660070035000099',
		latitude: -25.132410049,
		longitude: -64.751945496,
		municipalityId: 1844
	},
	{
		id: 4664,
		name: 'LA FLORIDA',
		uta2020: '660070035000252',
		uta2010: '660070035000252',
		latitude: -24.9307,
		longitude: -64.53765,
		municipalityId: 1844
	},
	{
		id: 4665,
		name: 'SALADILLO DE JUAREZ',
		uta2020: '660070035000453',
		uta2010: '660070035000453',
		latitude: -24.96267,
		longitude: -64.48881,
		municipalityId: 1844
	},
	{
		id: 4666,
		name: 'RIO SECO',
		uta2020: '660070035000448',
		uta2010: '660070035000448',
		latitude: -24.63561058,
		longitude: -64.241798401,
		municipalityId: 1844
	},
	{
		id: 4667,
		name: 'ESTANCIA VIEJA DEL REY',
		uta2020: '660070035000157',
		uta2010: '660070035000157',
		latitude: -24.89360375,
		longitude: -64.61382475,
		municipalityId: 1844
	},
	{
		id: 4668,
		name: 'OVEJERIA',
		uta2020: '660070035000366',
		uta2010: '660070035000366',
		latitude: -24.926465988,
		longitude: -64.532844544,
		municipalityId: 1844
	},
	{
		id: 4669,
		name: 'LAS GUACHAS',
		uta2020: '300919825080000',
		uta2010: '300919825080000',
		latitude: -32.470007544,
		longitude: -59.172662503,
		municipalityId: 1812
	},
	{
		id: 4670,
		name: 'SAUCE NORTE',
		uta2020: '300919825000036',
		uta2010: '300919825000036',
		latitude: -32.464208078,
		longitude: -59.172289825,
		municipalityId: 1812
	},
	{
		id: 4671,
		name: 'CHELFORO',
		uta2020: '620145084020000',
		uta2010: '620145084020000',
		latitude: -39.088163116,
		longitude: -66.520954661,
		municipalityId: 1288
	},
	{
		id: 4672,
		name: 'SALLIQUELO',
		uta2020: '067210721020000',
		uta2010: '067210721020000',
		latitude: -36.751165381,
		longitude: -62.959957344,
		municipalityId: 629
	},
	{
		id: 4673,
		name: 'QUENUMA',
		uta2020: '067210721010000',
		uta2010: '067210721010000',
		latitude: -36.568990828,
		longitude: -63.087622957,
		municipalityId: 629
	},
	{
		id: 4674,
		name: 'VILLA GUTIERREZ',
		uta2020: '140492301120000',
		uta2010: '140492301120000',
		latitude: -30.656951171,
		longitude: -64.181959081,
		municipalityId: 75
	},
	{
		id: 4675,
		name: 'LA HUERTA',
		uta2020: '460630063000031',
		uta2010: '460630063000031',
		latitude: -30.554965529,
		longitude: -66.292134268,
		municipalityId: 2004
	},
	{
		id: 4676,
		name: 'SANTA CRUZ',
		uta2020: '460630063000044',
		uta2010: '460630063000044',
		latitude: -30.574954855,
		longitude: -66.191607259,
		municipalityId: 2004
	},
	{
		id: 4677,
		name: 'EL VIRQUE',
		uta2020: '460630063000022',
		uta2010: '460630063000022',
		latitude: -30.57953521,
		longitude: -66.225698676,
		municipalityId: 2004
	},
	{
		id: 4678,
		name: 'CORTADERAS',
		uta2020: '460630063000009',
		uta2010: '460630063000009',
		latitude: -30.54840736,
		longitude: -66.23680805,
		municipalityId: 2004
	},
	{
		id: 4679,
		name: 'EL SIMBOLAR',
		uta2020: '460630063000021',
		uta2010: '460630063000021',
		latitude: -30.542476044,
		longitude: -66.037120337,
		municipalityId: 2004
	},
	{
		id: 4680,
		name: 'CASTRO BARROS',
		uta2020: '460630063010000',
		uta2010: '460630063010000',
		latitude: -30.595692427,
		longitude: -65.741937275,
		municipalityId: 2004
	},
	{
		id: 4681,
		name: 'EL BORDO',
		uta2020: '460630063000011',
		uta2010: '460630063000011',
		latitude: -30.590141296,
		longitude: -65.983688355,
		municipalityId: 2004
	},
	{
		id: 4682,
		name: 'BAJO HONDO',
		uta2020: '460630063000004',
		uta2010: '460630063000004',
		latitude: -30.414343292,
		longitude: -65.867375144,
		municipalityId: 2004
	},
	{
		id: 4683,
		name: 'LA AGUADA',
		uta2020: '460630063000027',
		uta2010: '460630063000027',
		latitude: -30.696236615,
		longitude: -66.247498968,
		municipalityId: 2004
	},
	{
		id: 4684,
		name: 'MONTE GRANDE',
		uta2020: '460630063000038',
		uta2010: '460630063000038',
		latitude: -30.69323592,
		longitude: -65.63043989,
		municipalityId: 2004
	},
	{
		id: 4685,
		name: 'MONTE NEGRO',
		uta2020: '460630063000039',
		uta2010: '460630063000039',
		latitude: -30.521735092,
		longitude: -65.632373327,
		municipalityId: 2004
	},
	{
		id: 4686,
		name: 'SAN ISIDRO',
		uta2020: '460630063000041',
		uta2010: '460630063000041',
		latitude: -30.579328537,
		longitude: -66.142539978,
		municipalityId: 2004
	},
	{
		id: 4687,
		name: 'EL CONSUELO',
		uta2020: '460630063000013',
		uta2010: '460630063000013',
		latitude: -30.765797189,
		longitude: -66.190811455,
		municipalityId: 2004
	},
	{
		id: 4688,
		name: 'TALA VERDE',
		uta2020: '460630063000045',
		uta2010: '460630063000045',
		latitude: -30.523554452,
		longitude: -66.161922152,
		municipalityId: 2004
	},
	{
		id: 4689,
		name: 'NEPES',
		uta2020: '460630063000040',
		uta2010: '460630063000040',
		latitude: -30.681331635,
		longitude: -66.008972168,
		municipalityId: 2004
	},
	{
		id: 4690,
		name: 'COLONIA EL CISCO',
		uta2020: '460630063000007',
		uta2010: '460630063000007',
		latitude: -30.725860596,
		longitude: -66.176750183,
		municipalityId: 2004
	},
	{
		id: 4691,
		name: 'TALVA',
		uta2020: '460630063000046',
		uta2010: '460630063000046',
		latitude: -30.709786294,
		longitude: -66.18397327,
		municipalityId: 2004
	},
	{
		id: 4692,
		name: 'LOMA BLANCA',
		uta2020: '460630063030000',
		uta2010: '460630063030000',
		latitude: -30.644613781,
		longitude: -66.238741687,
		municipalityId: 2004
	},
	{
		id: 4693,
		name: 'AGUA COLORADA',
		uta2020: '460630063000001',
		uta2010: '460630063000001',
		latitude: -30.557228088,
		longitude: -66.160728455,
		municipalityId: 2004
	},
	{
		id: 4694,
		name: 'OLTA',
		uta2020: '460630063040000',
		uta2010: '460630063040000',
		latitude: -30.639975989,
		longitude: -66.278060412,
		municipalityId: 2004
	},
	{
		id: 4695,
		name: 'ESQUINA DEL SUD',
		uta2020: '460630063000023',
		uta2010: '460630063000023',
		latitude: -30.658243209,
		longitude: -66.155712952,
		municipalityId: 2004
	},
	{
		id: 4696,
		name: 'S.DE LAS HIGUERAS',
		uta2020: '460630063000039',
		uta2010: '460630063000039',
		latitude: -30.607443666,
		longitude: -66.359221335,
		municipalityId: 2004
	},
	{
		id: 4697,
		name: 'CHAÑAR',
		uta2020: '460630063020000',
		uta2010: '460630063020000',
		latitude: -30.559030453,
		longitude: -65.973593121,
		municipalityId: 2004
	},
	{
		id: 4698,
		name: 'MIRAFLORES',
		uta2020: '460630063000037',
		uta2010: '460630063000037',
		latitude: -30.75819156,
		longitude: -65.80751371,
		municipalityId: 2004
	},
	{
		id: 4699,
		name: 'LOMA ALTA',
		uta2020: '460630063000035',
		uta2010: '460630063000035',
		latitude: -30.544029236,
		longitude: -66.105392456,
		municipalityId: 2004
	},
	{
		id: 4700,
		name: 'CORRAL DEL NEGRO',
		uta2020: '460630063000008',
		uta2010: '460630063000008',
		latitude: -30.583589351,
		longitude: -66.164405902,
		municipalityId: 2004
	},
	{
		id: 4701,
		name: 'SIERRA DE LOS QUINTEROS',
		uta2020: '460630063000043',
		uta2010: '460630063000043',
		latitude: -30.597936592,
		longitude: -66.386449152,
		municipalityId: 2004
	},
	{
		id: 4702,
		name: 'LA FLORIDA',
		uta2020: '460630063000030',
		uta2010: '460630063000030',
		latitude: -30.533817291,
		longitude: -65.877906799,
		municipalityId: 2004
	},
	{
		id: 4703,
		name: 'SAN PEDRO',
		uta2020: '460630063000042',
		uta2010: '460630063000042',
		latitude: -30.560235764,
		longitude: -65.847699146,
		municipalityId: 2004
	},
	{
		id: 4704,
		name: 'TERMAS DE RIO HONDO',
		uta2020: '861470161130000',
		uta2010: '861470161130000',
		latitude: -27.537764943,
		longitude: -64.80425714,
		municipalityId: 1460
	},
	{
		id: 4705,
		name: 'ATENCIO',
		uta2020: '300420161000001',
		uta2010: '300420161000001',
		latitude: -30.429341534,
		longitude: -58.76618814,
		municipalityId: 1687
	},
	{
		id: 4706,
		name: 'LA TE',
		uta2020: '300420161000016',
		uta2010: '300420161000016',
		latitude: -30.36753956,
		longitude: -58.8033422,
		municipalityId: 1687
	},
	{
		id: 4707,
		name: 'SAN JOSE DE FELICIANO',
		uta2020: '300420161010000',
		uta2010: '300420161010000',
		latitude: -30.385271311,
		longitude: -58.75157196,
		municipalityId: 1687
	},
	{
		id: 4708,
		name: 'MORRISON',
		uta2020: '141821687180000',
		uta2010: '141821687180000',
		latitude: -32.593642308,
		longitude: -62.83600846,
		municipalityId: 101
	},
	{
		id: 4709,
		name: 'EL NARANJITO',
		uta2020: '900148098000076',
		uta2010: '900148098000076',
		latitude: -26.9961211,
		longitude: -65.0865999,
		municipalityId: 2175
	},
	{
		id: 4710,
		name: 'AGUA DULCE',
		uta2020: '900148098000001',
		uta2010: '900148098000001',
		latitude: -27.0201218,
		longitude: -65.0182022,
		municipalityId: 2175
	},
	{
		id: 4711,
		name: 'SAN VICENTE',
		uta2020: '900148098000221',
		uta2010: '900148098000221',
		latitude: -26.982049942,
		longitude: -65.084960938,
		municipalityId: 2175
	},
	{
		id: 4712,
		name: 'FAVORINA',
		uta2020: '900148098000124',
		uta2010: '900148098000124',
		latitude: -26.9916066,
		longitude: -65.0290836,
		municipalityId: 2175
	},
	{
		id: 4713,
		name: 'LA TALA',
		uta2020: '900148098000165',
		uta2010: '900148098000165',
		latitude: -26.9991053,
		longitude: -65.0588603,
		municipalityId: 2175
	},
	{
		id: 4714,
		name: 'LA PUNILLA',
		uta2020: '740356133040000',
		uta2010: '740356133040000',
		latitude: -33.14295371,
		longitude: -65.086130681,
		municipalityId: 1084
	},
	{
		id: 4715,
		name: 'LA POSTA',
		uta2020: '141052679120000',
		uta2010: '141052679120000',
		latitude: -30.5653596,
		longitude: -63.516305369,
		municipalityId: 259
	},
	{
		id: 4716,
		name: 'ICAÑO',
		uta2020: '860286042030000',
		uta2010: '860286042030000',
		latitude: -28.680723899,
		longitude: -62.798982071,
		municipalityId: 1404
	},
	{
		id: 4717,
		name: 'QUEMU QUEMU',
		uta2020: '421190301040000',
		uta2010: '421190301040000',
		latitude: -36.053677481,
		longitude: -63.563243292,
		municipalityId: 1955
	},
	{
		id: 4718,
		name: 'LA PUMA',
		uta2020: '421050301000018',
		uta2010: '421050301000018',
		latitude: -35.88670546,
		longitude: -63.82899967,
		municipalityId: 1955
	},
	{
		id: 4719,
		name: 'EL DURAZNO',
		uta2020: '100350098050000',
		uta2010: '100350098050000',
		latitude: -27.235216069,
		longitude: -67.064430235,
		municipalityId: 1887
	},
	{
		id: 4720,
		name: 'CAMPO DE LAS CALIVAS',
		uta2020: '100350098000012',
		uta2010: '100350098000012',
		latitude: -27.18185,
		longitude: -66.9384,
		municipalityId: 1887
	},
	{
		id: 4721,
		name: 'PUERTA DE CORRAL QUEMADO',
		uta2020: '100350098130000',
		uta2010: '100350098130000',
		latitude: -27.214291934,
		longitude: -66.926317864,
		municipalityId: 1887
	},
	{
		id: 4722,
		name: 'EL TOLAR',
		uta2020: '100350098000038',
		uta2010: '100350098000038',
		latitude: -27.22846,
		longitude: -66.93603,
		municipalityId: 1887
	},
	{
		id: 4723,
		name: 'LOCONTE',
		uta2020: '100350098000073',
		uta2010: '100350098000073',
		latitude: -27.258932114,
		longitude: -66.97971344,
		municipalityId: 1887
	},
	{
		id: 4724,
		name: 'JACIPUNCO',
		uta2020: '100350098080000',
		uta2010: '100350098080000',
		latitude: -27.223250294,
		longitude: -67.01895606,
		municipalityId: 1887
	},
	{
		id: 4725,
		name: 'GALISTEO',
		uta2020: '820212252000041',
		uta2010: '820212252000041',
		latitude: -31.033841699,
		longitude: -61.357886692,
		municipalityId: 758
	},
	{
		id: 4726,
		name: 'LAGUNA PAIVA',
		uta2020: '820630140080000',
		uta2010: '820630140080000',
		latitude: -31.309261927,
		longitude: -60.660781609,
		municipalityId: 1033
	},
	{
		id: 4727,
		name: 'BRYN GWYN',
		uta2020: '260420098000006',
		uta2010: '260420098000006',
		latitude: -43.33395568,
		longitude: -65.47259113,
		municipalityId: 539
	},
	{
		id: 4728,
		name: 'GAIMAN',
		uta2020: '260420098030000',
		uta2010: '260420098030000',
		latitude: -43.28880748,
		longitude: -65.4924135,
		municipalityId: 539
	},
	{
		id: 4729,
		name: 'LA ANGOSTURA',
		uta2020: '260420098000011',
		uta2010: '260420098000011',
		latitude: -43.32807988,
		longitude: -65.5396969,
		municipalityId: 539
	},
	{
		id: 4730,
		name: 'EL BARRERITO',
		uta2020: '541190511000014',
		uta2010: '541190511000014',
		latitude: -27.524727349,
		longitude: -54.773950697,
		municipalityId: 2162
	},
	{
		id: 4731,
		name: 'SANTA RITA',
		uta2020: '541190511050000',
		uta2010: '541190511050000',
		latitude: -27.518352938,
		longitude: -54.730571262,
		municipalityId: 2162
	},
	{
		id: 4732,
		name: 'LA UVA',
		uta2020: '541190511000019',
		uta2010: '541190511000019',
		latitude: -27.523622058,
		longitude: -54.843175619,
		municipalityId: 2162
	},
	{
		id: 4733,
		name: 'SAN FRANCISCO DE ASIS',
		uta2020: '541190511040000',
		uta2010: '541190511040000',
		latitude: -27.459778653,
		longitude: -54.747806915,
		municipalityId: 2162
	},
	{
		id: 4734,
		name: 'CORONEL PRINGLES',
		uta2020: '541190511000012',
		uta2010: '541190511000012',
		latitude: -27.494984446,
		longitude: -54.680816193,
		municipalityId: 2162
	},
	{
		id: 4735,
		name: 'BARRA BONITA',
		uta2020: '541190511000004',
		uta2010: '541190511000004',
		latitude: -27.59895838,
		longitude: -54.84368245,
		municipalityId: 2162
	},
	{
		id: 4736,
		name: 'ALBA POSSE',
		uta2020: '541190511010000',
		uta2010: '541190511010000',
		latitude: -27.564150498,
		longitude: -54.687011236,
		municipalityId: 2162
	},
	{
		id: 4737,
		name: 'COLONIA ACARAGUA',
		uta2020: '541190511000008',
		uta2010: '541190511000008',
		latitude: -27.443856659,
		longitude: -54.868824148,
		municipalityId: 2162
	},
	{
		id: 4738,
		name: '9 DE JULIO',
		uta2020: '541190511000001',
		uta2010: '541190511000001',
		latitude: -27.548253705,
		longitude: -54.761065477,
		municipalityId: 2162
	},
	{
		id: 4739,
		name: 'LAS PERDICES',
		uta2020: '141611463090000',
		uta2010: '141611463090000',
		latitude: -32.698188446,
		longitude: -63.708310318,
		municipalityId: 355
	},
	{
		id: 4740,
		name: 'ELENA',
		uta2020: '140980819110000',
		uta2010: '140980819110000',
		latitude: -32.572068411,
		longitude: -64.392951842,
		municipalityId: 446
	},
	{
		id: 4741,
		name: 'EL CEIBALITO',
		uta2020: '660280063000045',
		uta2010: '660280063000045',
		latitude: -24.774097443,
		longitude: -65.138450623,
		municipalityId: 1873
	},
	{
		id: 4742,
		name: 'SALTA',
		uta2020: '660280063050003',
		uta2010: '660280063050003',
		latitude: -24.786554881,
		longitude: -65.39763542,
		municipalityId: 1873
	},
	{
		id: 4743,
		name: 'LA QUESERA',
		uta2020: '660280063000085',
		uta2010: '660280063000085',
		latitude: -24.876098633,
		longitude: -65.326766968,
		municipalityId: 1873
	},
	{
		id: 4744,
		name: 'LA HIGUERA',
		uta2020: '660280063000080',
		uta2010: '660280063000080',
		latitude: -24.839384079,
		longitude: -65.198722839,
		municipalityId: 1873
	},
	{
		id: 4745,
		name: 'CC LA ALMUDENA',
		uta2020: '660280063050002',
		uta2010: '660280063050002',
		latitude: -24.763544418,
		longitude: -65.463976207,
		municipalityId: 1873
	},
	{
		id: 4746,
		name: 'LA TROJA',
		uta2020: '660280063000087',
		uta2010: '660280063000087',
		latitude: -25.052751879,
		longitude: -65.195093174,
		municipalityId: 1873
	},
	{
		id: 4747,
		name: 'LA UNION',
		uta2020: '660280063000088',
		uta2010: '660280063000088',
		latitude: -24.824962885,
		longitude: -65.428306042,
		municipalityId: 1873
	},
	{
		id: 4748,
		name: 'SAN FRANCISCO',
		uta2020: '660280063000116',
		uta2010: '660280063000116',
		latitude: -24.950323105,
		longitude: -65.264572144,
		municipalityId: 1873
	},
	{
		id: 4749,
		name: 'CHAMICAL',
		uta2020: '660280063000031',
		uta2010: '660280063000031',
		latitude: -24.950847047,
		longitude: -65.263039136,
		municipalityId: 1873
	},
	{
		id: 4750,
		name: 'CC EL TIPAL',
		uta2020: '660280063050001',
		uta2010: '660280063050001',
		latitude: -24.765688229,
		longitude: -65.476299386,
		municipalityId: 1873
	},
	{
		id: 4751,
		name: 'TOMAS YOUNG',
		uta2020: '860776140060000',
		uta2010: '860776140060000',
		latitude: -28.60234676,
		longitude: -62.183515806,
		municipalityId: 1425
	},
	{
		id: 4752,
		name: 'JAMES CRAIK',
		uta2020: '141611456070000',
		uta2010: '141611456070000',
		latitude: -32.161305638,
		longitude: -63.46519195,
		municipalityId: 356
	},
	{
		id: 4753,
		name: 'SIETE PALMAS',
		uta2020: '340495070080000',
		uta2010: '340495070080000',
		latitude: -25.201507662,
		longitude: -58.330676377,
		municipalityId: 2313
	},
	{
		id: 4754,
		name: 'ESTACION GENERAL OBLIGADO',
		uta2020: '220770245020000',
		uta2010: '220770245020000',
		latitude: -27.412867994,
		longitude: -59.420157971,
		municipalityId: 44
	},
	{
		id: 4755,
		name: 'VILLA JALON',
		uta2020: '220770245000026',
		uta2010: '220770245000026',
		latitude: -27.344162981,
		longitude: -59.091541161,
		municipalityId: 44
	},
	{
		id: 4756,
		name: 'KILOMETRO 519',
		uta2020: '220770245000012',
		uta2010: '220770245000012',
		latitude: -27.41218944,
		longitude: -59.331078912,
		municipalityId: 44
	},
	{
		id: 4757,
		name: 'PUERTO TIROL',
		uta2020: '220770245040000',
		uta2010: '220770245040000',
		latitude: -27.374512562,
		longitude: -59.095315992,
		municipalityId: 44
	},
	{
		id: 4758,
		name: 'UNITAN',
		uta2020: '220770245000025',
		uta2010: '220770245000025',
		latitude: -27.378318788,
		longitude: -59.076767888,
		municipalityId: 44
	},
	{
		id: 4759,
		name: 'LA LUCINDA',
		uta2020: '220770245000016',
		uta2010: '220770245000016',
		latitude: -27.361143112,
		longitude: -59.23500061,
		municipalityId: 44
	},
	{
		id: 4760,
		name: 'COLONIA ROCHA',
		uta2020: '140350000000011',
		uta2010: '140350000000011',
		latitude: -34.956524779,
		longitude: -64.699506063,
		municipalityId: 326
	},
	{
		id: 4761,
		name: 'COLONIA STABILE',
		uta2020: '140350000000014',
		uta2010: '140350000000014',
		latitude: -34.5954201,
		longitude: -64.1029823,
		municipalityId: 326
	},
	{
		id: 4762,
		name: 'MODESTINO PIZARRO',
		uta2020: '140350000000035',
		uta2010: '140350000000035',
		latitude: -34.1072218,
		longitude: -65.0725039,
		municipalityId: 326
	},
	{
		id: 4763,
		name: 'EL CAMPITO',
		uta2020: '140350000000019',
		uta2010: '140350000000019',
		latitude: -34.728290291,
		longitude: -63.933841323,
		municipalityId: 326
	},
	{
		id: 4764,
		name: 'LA NACIONAL',
		uta2020: '140350000000029',
		uta2010: '140350000000029',
		latitude: -34.757045559,
		longitude: -64.913571295,
		municipalityId: 326
	},
	{
		id: 4765,
		name: 'COLONIA WHITE',
		uta2020: '140350000000015',
		uta2010: '140350000000015',
		latitude: -34.9109551,
		longitude: -63.43489,
		municipalityId: 326
	},
	{
		id: 4766,
		name: 'PEGASANO',
		uta2020: '140350000000037',
		uta2010: '140350000000037',
		latitude: -34.598888397,
		longitude: -64.726951599,
		municipalityId: 326
	},
	{
		id: 4767,
		name: 'COLONIA LOS CEIBOS',
		uta2020: '140350000000010',
		uta2010: '140350000000010',
		latitude: -34.5629649,
		longitude: -63.5006178,
		municipalityId: 326
	},
	{
		id: 4768,
		name: 'ESTACION LECUEDER',
		uta2020: '140350000020000',
		uta2010: '140350000020000',
		latitude: -34.496411041,
		longitude: -64.809462197,
		municipalityId: 326
	},
	{
		id: 4769,
		name: 'COLONIA SANTA CATALINA',
		uta2020: '140350000000013',
		uta2010: '140350000000013',
		latitude: -34.593718787,
		longitude: -63.691443419,
		municipalityId: 326
	},
	{
		id: 4770,
		name: 'CAMPO SAN JUAN',
		uta2020: '140350000000006',
		uta2010: '140350000000006',
		latitude: -34.607330322,
		longitude: -64.141456604,
		municipalityId: 326
	},
	{
		id: 4771,
		name: 'ESTANCIA LA COLORADA',
		uta2020: '140350000000023',
		uta2010: '140350000000023',
		latitude: -34.554857976,
		longitude: -64.37665398,
		municipalityId: 326
	},
	{
		id: 4772,
		name: 'DE LA SERNA',
		uta2020: '140350000000017',
		uta2010: '140350000000017',
		latitude: -34.377623959,
		longitude: -64.69671879,
		municipalityId: 326
	},
	{
		id: 4773,
		name: 'ESTANCIA LA VANGUARDIA',
		uta2020: '140350000000026',
		uta2010: '140350000000026',
		latitude: -34.8321945,
		longitude: -63.5467371,
		municipalityId: 326
	},
	{
		id: 4774,
		name: 'INGENIERO MALMEN',
		uta2020: '140350000000027',
		uta2010: '140350000000027',
		latitude: -34.777935028,
		longitude: -64.812423706,
		municipalityId: 326
	},
	{
		id: 4775,
		name: 'VILLA MODERNA',
		uta2020: '140350000000039',
		uta2010: '140350000000039',
		latitude: -34.692420334,
		longitude: -64.649273723,
		municipalityId: 326
	},
	{
		id: 4776,
		name: 'EL PAMPERO',
		uta2020: '140350000000022',
		uta2010: '140350000000022',
		latitude: -34.05065155,
		longitude: -65.078147888,
		municipalityId: 326
	},
	{
		id: 4777,
		name: 'ESTANCIA LA PACIFICA',
		uta2020: '140350000000025',
		uta2010: '140350000000025',
		latitude: -34.728304412,
		longitude: -64.134087075,
		municipalityId: 326
	},
	{
		id: 4778,
		name: 'LOS ALFALFARES',
		uta2020: '140350000000033',
		uta2010: '140350000000033',
		latitude: -34.809207204,
		longitude: -64.717665555,
		municipalityId: 326
	},
	{
		id: 4779,
		name: 'COLONIA LA JUANITA',
		uta2020: '140350000000009',
		uta2010: '140350000000009',
		latitude: -34.59069486,
		longitude: -63.882800361,
		municipalityId: 326
	},
	{
		id: 4780,
		name: 'ESTANCIA LA MARGARITA',
		uta2020: '140350000000024',
		uta2010: '140350000000024',
		latitude: -34.725136482,
		longitude: -63.770180238,
		municipalityId: 326
	},
	{
		id: 4781,
		name: 'LA PENCA',
		uta2020: '140350000000030',
		uta2010: '140350000000030',
		latitude: -34.74823761,
		longitude: -65.035743713,
		municipalityId: 326
	},
	{
		id: 4782,
		name: 'CAMPO LA ADELA',
		uta2020: '140350000000004',
		uta2010: '140350000000004',
		latitude: -34.8188719,
		longitude: -63.3857113,
		municipalityId: 326
	},
	{
		id: 4783,
		name: 'LAS CHACRITAS',
		uta2020: '700630063030000',
		uta2010: '700630063030000',
		latitude: -31.593641792,
		longitude: -68.407719672,
		municipalityId: 2431
	},
	{
		id: 4784,
		name: 'LA MAJADITA',
		uta2020: '700630063000002',
		uta2010: '700630063000002',
		latitude: -31.702191264,
		longitude: -68.368622065,
		municipalityId: 2431
	},
	{
		id: 4785,
		name: 'RINCON CERCADO',
		uta2020: '700630063000003',
		uta2010: '700630063000003',
		latitude: -31.648163825,
		longitude: -68.373781193,
		municipalityId: 2431
	},
	{
		id: 4786,
		name: 'COLONIA FIORITO',
		uta2020: '700630063020000',
		uta2010: '700630063020000',
		latitude: -31.555178587,
		longitude: -68.420598744,
		municipalityId: 2431
	},
	{
		id: 4787,
		name: '9 DE JULIO',
		uta2020: '700630063040000',
		uta2010: '700630063040000',
		latitude: -31.66975092,
		longitude: -68.390041638,
		municipalityId: 2431
	},
	{
		id: 4788,
		name: 'CARRILOBO',
		uta2020: '141190994040000',
		uta2010: '141190994040000',
		latitude: -31.87164688,
		longitude: -63.116507442,
		municipalityId: 312
	},
	{
		id: 4789,
		name: 'SUNCHALES',
		uta2020: '820210049360000',
		uta2010: '820210049360000',
		latitude: -30.946855513,
		longitude: -61.561250432,
		municipalityId: 759
	},
	{
		id: 4790,
		name: 'COLONIA LA MANUELITA',
		uta2020: '820210049000029',
		uta2010: '820210049000029',
		latitude: -31.028514116,
		longitude: -61.494834125,
		municipalityId: 759
	},
	{
		id: 4791,
		name: 'CAMPO RISTORTO',
		uta2020: '820210049000018',
		uta2010: '820210049000018',
		latitude: -30.91637,
		longitude: -61.4846945,
		municipalityId: 759
	},
	{
		id: 4792,
		name: 'EL FORTIN',
		uta2020: '820210049000035',
		uta2010: '820210049000035',
		latitude: -30.9610834,
		longitude: -61.6615767,
		municipalityId: 759
	},
	{
		id: 4793,
		name: 'SANTA LUCIA',
		uta2020: '620420175335000',
		uta2010: '620420175335000',
		latitude: -39.028251798,
		longitude: -67.298454912,
		municipalityId: 1267
	},
	{
		id: 4794,
		name: 'MAINQUE',
		uta2020: '620420175480000',
		uta2010: '620420175480000',
		latitude: -39.0637562,
		longitude: -67.304281181,
		municipalityId: 1267
	},
	{
		id: 4795,
		name: 'BARRIO LUISILLO',
		uta2020: '620420175245000',
		uta2010: '620420175245000',
		latitude: -39.051404789,
		longitude: -67.346898607,
		municipalityId: 1267
	},
	{
		id: 4796,
		name: 'COMPUEL',
		uta2020: '661190273000020',
		uta2010: '661190273000020',
		latitude: -25.93857193,
		longitude: -66.524742127,
		municipalityId: 1866
	},
	{
		id: 4797,
		name: 'COCHIYACO',
		uta2020: '661190273000017',
		uta2010: '661190273000017',
		latitude: -25.366411087,
		longitude: -66.422902017,
		municipalityId: 1866
	},
	{
		id: 4798,
		name: 'LA PUERTA',
		uta2020: '661190273010000',
		uta2010: '661190273010000',
		latitude: -25.280453815,
		longitude: -66.450839657,
		municipalityId: 1866
	},
	{
		id: 4799,
		name: 'BANDA GRANDE',
		uta2020: '661190273000007',
		uta2010: '661190273000007',
		latitude: -25.439790726,
		longitude: -66.22290802,
		municipalityId: 1866
	},
	{
		id: 4800,
		name: 'COLOME',
		uta2020: '661190273000019',
		uta2010: '661190273000019',
		latitude: -25.50308,
		longitude: -66.38981,
		municipalityId: 1866
	},
	{
		id: 4801,
		name: 'CUCHIYACO',
		uta2020: '661190273000024',
		uta2010: '661190273000024',
		latitude: -25.375789642,
		longitude: -66.419555664,
		municipalityId: 1866
	},
	{
		id: 4802,
		name: 'MOLINOS',
		uta2020: '661190273020000',
		uta2010: '661190273020000',
		latitude: -25.444243294,
		longitude: -66.308850089,
		municipalityId: 1866
	},
	{
		id: 4803,
		name: 'LURACATAO',
		uta2020: '661190273000037',
		uta2010: '661190273000037',
		latitude: -25.245339996,
		longitude: -66.435239997,
		municipalityId: 1866
	},
	{
		id: 4804,
		name: 'ALUMBRE',
		uta2020: '661190273000003',
		uta2010: '661190273000003',
		latitude: -25.19225,
		longitude: -66.44124,
		municipalityId: 1866
	},
	{
		id: 4805,
		name: 'AGUADITA',
		uta2020: '661190273000002',
		uta2010: '661190273000002',
		latitude: -25.394729614,
		longitude: -66.38092804,
		municipalityId: 1866
	},
	{
		id: 4806,
		name: 'TACUIL',
		uta2020: '661190273000058',
		uta2010: '661190273000058',
		latitude: -25.58285,
		longitude: -66.4561,
		municipalityId: 1866
	},
	{
		id: 4807,
		name: 'AMAICHA',
		uta2020: '661190273000004',
		uta2010: '661190273000004',
		latitude: -25.544574311,
		longitude: -66.38844678,
		municipalityId: 1866
	},
	{
		id: 4808,
		name: 'EL CHURCAL',
		uta2020: '661190273000029',
		uta2010: '661190273000029',
		latitude: -25.42491,
		longitude: -66.24058,
		municipalityId: 1866
	},
	{
		id: 4809,
		name: 'SAN LUCAS',
		uta2020: '661190273000053',
		uta2010: '661190273000053',
		latitude: -25.417953491,
		longitude: -66.32144928,
		municipalityId: 1866
	},
	{
		id: 4810,
		name: 'CORRAL QUEMADO',
		uta2020: '140210000080000',
		uta2010: '140210000080000',
		latitude: -30.989035348,
		longitude: -64.37784489,
		municipalityId: 209
	},
	{
		id: 4811,
		name: 'RIACHO HE-HE',
		uta2020: '340490210060000',
		uta2010: '340490210060000',
		latitude: -25.361711702,
		longitude: -58.278251883,
		municipalityId: 2314
	},
	{
		id: 4812,
		name: 'GRUTLY',
		uta2020: '820703085080000',
		uta2010: '820703085080000',
		latitude: -31.27050269,
		longitude: -61.07275427,
		municipalityId: 873
	},
	{
		id: 4813,
		name: 'FORTIN EL PATRIA',
		uta2020: '740426175060000',
		uta2010: '740426175060000',
		latitude: -34.769756516,
		longitude: -65.522934518,
		municipalityId: 1146
	},
	{
		id: 4814,
		name: 'PASO DE LA PATRIA',
		uta2020: '900078042000252',
		uta2010: '900078042000252',
		latitude: -26.62313,
		longitude: -64.57003,
		municipalityId: 2238
	},
	{
		id: 4815,
		name: 'PUERTA ALEGRE',
		uta2020: '900078042000262',
		uta2010: '900078042000262',
		latitude: -26.4839267,
		longitude: -64.5686407,
		municipalityId: 2238
	},
	{
		id: 4816,
		name: 'EL TRIUNFO',
		uta2020: '900078042000096',
		uta2010: '900078042000096',
		latitude: -26.555625915,
		longitude: -64.598449707,
		municipalityId: 2238
	},
	{
		id: 4817,
		name: 'GARMENDIA',
		uta2020: '900078042040000',
		uta2010: '900078042040000',
		latitude: -26.573689301,
		longitude: -64.55768611,
		municipalityId: 2238
	},
	{
		id: 4818,
		name: 'PAJA COLORADA',
		uta2020: '900078042000249',
		uta2010: '900078042000249',
		latitude: -26.581060965,
		longitude: -64.654379647,
		municipalityId: 2238
	},
	{
		id: 4819,
		name: 'ISLA VUELTA DEL PARAGUAYO',
		uta2020: '820630147000014',
		uta2010: '820630147000014',
		latitude: -31.6437792,
		longitude: -60.6687989,
		municipalityId: 1034
	},
	{
		id: 4820,
		name: 'SANTA FE',
		uta2020: '820630147170000',
		uta2010: '820630147170000',
		latitude: -31.645164805,
		longitude: -60.709314712,
		municipalityId: 1034
	},
	{
		id: 4821,
		name: 'MIGUEL TORRES',
		uta2020: '820422700200000',
		uta2010: '820422700200000',
		latitude: -33.529950262,
		longitude: -61.466206873,
		municipalityId: 907
	},
	{
		id: 4822,
		name: 'POSADA DE LOS LAGOS',
		uta2020: '061190119085000',
		uta2010: '061190119085000',
		latitude: -35.149938398,
		longitude: -58.050452867,
		municipalityId: 630
	},
	{
		id: 4823,
		name: 'CORONEL BRANDSEN',
		uta2020: '061190119050000',
		uta2010: '061190119050000',
		latitude: -35.1690983,
		longitude: -58.237352945,
		municipalityId: 630
	},
	{
		id: 4824,
		name: 'JEPPENER',
		uta2020: '061190119070000',
		uta2010: '061190119070000',
		latitude: -35.280204392,
		longitude: -58.199664943,
		municipalityId: 630
	},
	{
		id: 4825,
		name: 'CLUB DE CAMPO LAS MALVINAS',
		uta2020: '061190119055000',
		uta2010: '061190119055000',
		latitude: -35.213997812,
		longitude: -58.243303092,
		municipalityId: 630
	},
	{
		id: 4826,
		name: 'LA PARADA',
		uta2020: '061190119000015',
		uta2010: '061190119000015',
		latitude: -35.1343506,
		longitude: -58.2212409,
		municipalityId: 630
	},
	{
		id: 4827,
		name: 'CAMPO PORTU',
		uta2020: '061190119000005',
		uta2010: '061190119000005',
		latitude: -35.127463274,
		longitude: -58.294701183,
		municipalityId: 630
	},
	{
		id: 4828,
		name: 'BARRIO LOS BOSQUECITOS',
		uta2020: '061190119030000',
		uta2010: '061190119030000',
		latitude: -35.105038995,
		longitude: -58.183500786,
		municipalityId: 630
	},
	{
		id: 4829,
		name: 'BARRIO PARQUE LAS ACACIAS',
		uta2020: '061190119040000',
		uta2010: '061190119040000',
		latitude: -35.103032946,
		longitude: -58.273040538,
		municipalityId: 630
	},
	{
		id: 4830,
		name: 'OLIDEN',
		uta2020: '061190119080000',
		uta2010: '061190119080000',
		latitude: -35.184258433,
		longitude: -57.947962325,
		municipalityId: 630
	},
	{
		id: 4831,
		name: 'CUARTEL II',
		uta2020: '061190119000006',
		uta2010: '061190119000006',
		latitude: -35.1292772,
		longitude: -58.2957823,
		municipalityId: 630
	},
	{
		id: 4832,
		name: 'BARRIO LAS GOLONDRINAS',
		uta2020: '061190119020000',
		uta2010: '061190119020000',
		latitude: -35.033577778,
		longitude: -58.193538268,
		municipalityId: 630
	},
	{
		id: 4833,
		name: 'CAMPOS DE ROCA',
		uta2020: '061190119045000',
		uta2010: '061190119045000',
		latitude: -35.11497726,
		longitude: -58.095389654,
		municipalityId: 630
	},
	{
		id: 4834,
		name: 'GOBERNADOR OBLIGADO',
		uta2020: '061190119000010',
		uta2010: '061190119000010',
		latitude: -35.1630752,
		longitude: -58.1987499,
		municipalityId: 630
	},
	{
		id: 4835,
		name: 'RUTA 29 KM 2',
		uta2020: '061190119000019',
		uta2010: '061190119000019',
		latitude: -35.314838184,
		longitude: -58.232835562,
		municipalityId: 630
	},
	{
		id: 4836,
		name: 'ALTAMIRANO',
		uta2020: '061190119010000',
		uta2010: '061190119010000',
		latitude: -35.361582802,
		longitude: -58.150486816,
		municipalityId: 630
	},
	{
		id: 4837,
		name: 'LA POSADA',
		uta2020: '061190119000017',
		uta2010: '061190119000017',
		latitude: -35.3246911,
		longitude: -58.050912,
		municipalityId: 630
	},
	{
		id: 4838,
		name: 'BUCHANAN',
		uta2020: '061190119000003',
		uta2010: '061190119000003',
		latitude: -34.9854674,
		longitude: -58.1762428,
		municipalityId: 630
	},
	{
		id: 4839,
		name: 'BARRIO EL MIRADOR',
		uta2020: '061190119015000',
		uta2010: '061190119015000',
		latitude: -35.314537055,
		longitude: -58.04844208,
		municipalityId: 630
	},
	{
		id: 4840,
		name: 'EL CHAJA',
		uta2020: '061190119000008',
		uta2010: '061190119000008',
		latitude: -35.1355896,
		longitude: -58.0558862,
		municipalityId: 630
	},
	{
		id: 4841,
		name: 'LA PEPITA',
		uta2020: '061190119000016',
		uta2010: '061190119000016',
		latitude: -35.1927033,
		longitude: -58.1706068,
		municipalityId: 630
	},
	{
		id: 4842,
		name: 'GOMEZ',
		uta2020: '061190119060000',
		uta2010: '061190119060000',
		latitude: -35.069365533,
		longitude: -58.165689988,
		municipalityId: 630
	},
	{
		id: 4843,
		name: 'SAMBOROMBON',
		uta2020: '061190119090000',
		uta2010: '061190119090000',
		latitude: -35.220624272,
		longitude: -58.280529795,
		municipalityId: 630
	},
	{
		id: 4844,
		name: 'CAMPO MEDINA',
		uta2020: '220840294000012',
		uta2010: '220840294000012',
		latitude: -26.15353262,
		longitude: -59.82025691,
		municipalityId: 33
	},
	{
		id: 4845,
		name: 'PRESIDENCIA ROCA',
		uta2020: '220840294070000',
		uta2010: '220840294070000',
		latitude: -26.140200763,
		longitude: -59.59684529,
		municipalityId: 33
	},
	{
		id: 4846,
		name: 'CAMPO NUEVO',
		uta2020: '220840294000013',
		uta2010: '220840294000013',
		latitude: -26.175913899,
		longitude: -59.837757548,
		municipalityId: 33
	},
	{
		id: 4847,
		name: 'PAMPA CHICA',
		uta2020: '220840294000093',
		uta2010: '220840294000093',
		latitude: -26.13634813,
		longitude: -59.81500305,
		municipalityId: 33
	},
	{
		id: 4848,
		name: 'KOLUEL KAIKE',
		uta2020: '780145021050000',
		uta2010: '780145021050000',
		latitude: -46.71682675,
		longitude: -68.227961459,
		municipalityId: 1523
	},
	{
		id: 4849,
		name: 'VILLA PARQUE SIQUIMAN',
		uta2020: '140912532290000',
		uta2010: '140912532290000',
		latitude: -31.345717088,
		longitude: -64.480257105,
		municipalityId: 286
	},
	{
		id: 4850,
		name: 'GOBERNADOR ECHAGUE',
		uta2020: '300919810040000',
		uta2010: '300919810040000',
		latitude: -32.393370133,
		longitude: -59.275888681,
		municipalityId: 1813
	},
	{
		id: 4851,
		name: 'HUANQUEROS',
		uta2020: '820913554130000',
		uta2010: '820913554130000',
		latitude: -30.013674753,
		longitude: -61.219294765,
		municipalityId: 843
	},
	{
		id: 4852,
		name: 'BALNEARIO LA VERDE',
		uta2020: '820913554040000',
		uta2010: '820913554040000',
		latitude: -29.982737348,
		longitude: -61.242865909,
		municipalityId: 843
	},
	{
		id: 4853,
		name: 'COLONIA ROSA',
		uta2020: '820913519090000',
		uta2010: '820913519090000',
		latitude: -30.302278589,
		longitude: -61.98449137,
		municipalityId: 844
	},
	{
		id: 4854,
		name: 'GENERAL CONESA',
		uta2020: '620280084020000',
		uta2010: '620280084020000',
		latitude: -40.104735426,
		longitude: -64.452961946,
		municipalityId: 1297
	},
	{
		id: 4855,
		name: 'BARRIO COLONIA CONESA',
		uta2020: '620280084010000',
		uta2010: '620280084010000',
		latitude: -40.140571507,
		longitude: -64.329742792,
		municipalityId: 1297
	},
	{
		id: 4856,
		name: 'COLONIA SANTA TERESITA',
		uta2020: '620280084000009',
		uta2010: '620280084000009',
		latitude: -40.12958402,
		longitude: -64.31561944,
		municipalityId: 1297
	},
	{
		id: 4857,
		name: 'COLONIA SANTA ROSA',
		uta2020: '620280084000008',
		uta2010: '620280084000008',
		latitude: -40.105810061,
		longitude: -64.38112846,
		municipalityId: 1297
	},
	{
		id: 4858,
		name: 'ATREUCO',
		uta2020: '420070231000002',
		uta2010: '420070231000002',
		latitude: -37.126296112,
		longitude: -63.82921122,
		municipalityId: 1987
	},
	{
		id: 4859,
		name: 'MACACHIN',
		uta2020: '420070231020000',
		uta2010: '420070231020000',
		latitude: -37.136955536,
		longitude: -63.667141835,
		municipalityId: 1987
	},
	{
		id: 4860,
		name: 'ESTANCIA EL PAMPERO',
		uta2020: '420070231000011',
		uta2010: '420070231000011',
		latitude: -37.033701705,
		longitude: -63.609864459,
		municipalityId: 1987
	},
	{
		id: 4861,
		name: 'COLONIA EL PROVENIR',
		uta2020: '420070231000005',
		uta2010: '420070231000005',
		latitude: -37.03361099,
		longitude: -63.60987828,
		municipalityId: 1987
	},
	{
		id: 4862,
		name: 'CAIMANCITO',
		uta2020: '380350119030000',
		uta2010: '380350119030000',
		latitude: -23.739526932,
		longitude: -64.594100614,
		municipalityId: 1171
	},
	{
		id: 4863,
		name: 'URUNDEL',
		uta2020: '380350119000141',
		uta2010: '380350119000141',
		latitude: -23.710863113,
		longitude: -64.714179993,
		municipalityId: 1171
	},
	{
		id: 4864,
		name: 'NUEVA FRANCIA',
		uta2020: '861896301020000',
		uta2010: '861896301020000',
		latitude: -28.197257042,
		longitude: -64.12895715,
		municipalityId: 1474
	},
	{
		id: 4865,
		name: 'MONTE HERMOSO',
		uta2020: '065530553020000',
		uta2010: '065530553020000',
		latitude: -38.981506538,
		longitude: -61.300545749,
		municipalityId: 631
	},
	{
		id: 4866,
		name: 'BALNEARIO SAUCE GRANDE',
		uta2020: '065530553010000',
		uta2010: '065530553010000',
		latitude: -38.995357691,
		longitude: -61.215201593,
		municipalityId: 631
	},
	{
		id: 4867,
		name: 'LA ADELA',
		uta2020: '068470847000003',
		uta2010: '068470847000003',
		latitude: -36.4465885,
		longitude: -63.0090639,
		municipalityId: 632
	},
	{
		id: 4868,
		name: 'PUELCHES',
		uta2020: '068470847000007',
		uta2010: '068470847000007',
		latitude: -36.3416789,
		longitude: -62.8742086,
		municipalityId: 632
	},
	{
		id: 4869,
		name: 'COLONIA 17',
		uta2020: '068470847000001',
		uta2010: '068470847000001',
		latitude: -36.499723,
		longitude: -62.6930571,
		municipalityId: 632
	},
	{
		id: 4870,
		name: 'LOS AGRARIOS',
		uta2020: '068470847000005',
		uta2010: '068470847000005',
		latitude: -36.4290538,
		longitude: -62.7954486,
		municipalityId: 632
	},
	{
		id: 4871,
		name: 'COLONIA MORENO',
		uta2020: '068470847000002',
		uta2010: '068470847000002',
		latitude: -36.526407,
		longitude: -62.966337,
		municipalityId: 632
	},
	{
		id: 4872,
		name: 'INGENIERO THOMPSON',
		uta2020: '068470847010000',
		uta2010: '068470847010000',
		latitude: -36.610254113,
		longitude: -62.910961214,
		municipalityId: 632
	},
	{
		id: 4873,
		name: 'LA GRANDE DEL SUD',
		uta2020: '068470847000004',
		uta2010: '068470847000004',
		latitude: -36.4922805,
		longitude: -62.7023568,
		municipalityId: 632
	},
	{
		id: 4874,
		name: 'PEHUELCHES',
		uta2020: '068470847000006',
		uta2010: '068470847000006',
		latitude: -36.337471008,
		longitude: -62.875480652,
		municipalityId: 632
	},
	{
		id: 4875,
		name: 'TRES LOMAS',
		uta2020: '068470847020000',
		uta2010: '068470847020000',
		latitude: -36.458109497,
		longitude: -62.862135509,
		municipalityId: 632
	},
	{
		id: 4876,
		name: 'ESTANCIA SANTA RITA',
		uta2020: '181190301000019',
		uta2010: '181190301000019',
		latitude: -29.36232599,
		longitude: -57.069937951,
		municipalityId: 2067
	},
	{
		id: 4877,
		name: 'EL PROGRESO',
		uta2020: '181190301000008',
		uta2010: '181190301000008',
		latitude: -29.309825899,
		longitude: -56.932220492,
		municipalityId: 2067
	},
	{
		id: 4878,
		name: 'SAN JUAN',
		uta2020: '181190301000056',
		uta2010: '181190301000056',
		latitude: -29.447423936,
		longitude: -57.012451202,
		municipalityId: 2067
	},
	{
		id: 4879,
		name: 'TAPEBICUA',
		uta2020: '181190301040000',
		uta2010: '181190301040000',
		latitude: -29.50431144,
		longitude: -56.976030695,
		municipalityId: 2067
	},
	{
		id: 4880,
		name: 'COCHICO',
		uta2020: '580425049000019',
		uta2010: '580425049000019',
		latitude: -36.4849881,
		longitude: -70.22237166,
		municipalityId: 2370
	},
	{
		id: 4881,
		name: 'LONCO VACA',
		uta2020: '580425049000037',
		uta2010: '580425049000037',
		latitude: -36.390079498,
		longitude: -70.228752136,
		municipalityId: 2370
	},
	{
		id: 4882,
		name: 'COYUCO',
		uta2020: '580425049000021',
		uta2010: '580425049000021',
		latitude: -36.67143884,
		longitude: -70.11442734,
		municipalityId: 2370
	},
	{
		id: 4883,
		name: 'UCACHA',
		uta2020: '140560469160000',
		uta2010: '140560469160000',
		latitude: -33.03343928,
		longitude: -63.508257159,
		municipalityId: 373
	},
	{
		id: 4884,
		name: 'PUERTO IRIGOYEN',
		uta2020: '340639126000088',
		uta2010: '340639126000088',
		latitude: -23.15691557,
		longitude: -62.00043309,
		municipalityId: 2341
	},
	{
		id: 4885,
		name: 'EL POTRILLO',
		uta2020: '340639126010000',
		uta2010: '340639126010000',
		latitude: -23.160766319,
		longitude: -62.010778702,
		municipalityId: 2341
	},
	{
		id: 4886,
		name: 'EL PALMAR CHICO',
		uta2020: '220910301000018',
		uta2010: '220910301000018',
		latitude: -26.238541312,
		longitude: -60.342086254,
		municipalityId: 58
	},
	{
		id: 4887,
		name: 'PATO REAL',
		uta2020: '220910301000046',
		uta2010: '220910301000046',
		latitude: -26.588416308,
		longitude: -60.2253326,
		municipalityId: 58
	},
	{
		id: 4888,
		name: 'PAMPA NARDELLI',
		uta2020: '220910301000043',
		uta2010: '220910301000043',
		latitude: -26.336388276,
		longitude: -60.581910428,
		municipalityId: 58
	},
	{
		id: 4889,
		name: 'EL 42',
		uta2020: '220910301000007',
		uta2010: '220910301000007',
		latitude: -26.432941006,
		longitude: -60.412455071,
		municipalityId: 58
	},
	{
		id: 4890,
		name: 'LOTE 20',
		uta2020: '220910301000036',
		uta2010: '220910301000036',
		latitude: -26.433610649,
		longitude: -60.682784343,
		municipalityId: 58
	},
	{
		id: 4891,
		name: 'RIO MUERTO',
		uta2020: '220910301000047',
		uta2010: '220910301000047',
		latitude: -26.262236127,
		longitude: -60.602607609,
		municipalityId: 58
	},
	{
		id: 4892,
		name: 'EL BOQUERON',
		uta2020: '220910301000014',
		uta2010: '220910301000014',
		latitude: -26.266778899,
		longitude: -60.260623089,
		municipalityId: 58
	},
	{
		id: 4893,
		name: 'LAS GOMAS',
		uta2020: '220910301000031',
		uta2010: '220910301000031',
		latitude: -26.144707933,
		longitude: -60.730917297,
		municipalityId: 58
	},
	{
		id: 4894,
		name: 'COLONIA VELEZ SARSFIELD',
		uta2020: '220910301000005',
		uta2010: '220910301000005',
		latitude: -26.29382448,
		longitude: -60.44286342,
		municipalityId: 58
	},
	{
		id: 4895,
		name: 'ESTACION KILOMETRO 884',
		uta2020: '220910301000022',
		uta2010: '220910301000022',
		latitude: -26.18959459,
		longitude: -60.49764821,
		municipalityId: 58
	},
	{
		id: 4896,
		name: 'PAMPA PALANGANA',
		uta2020: '220910301000044',
		uta2010: '220910301000044',
		latitude: -26.35692814,
		longitude: -60.37288098,
		municipalityId: 58
	},
	{
		id: 4897,
		name: 'PAMPA LAGLAIVE',
		uta2020: '220910301000042',
		uta2010: '220910301000042',
		latitude: -26.462861371,
		longitude: -60.605475674,
		municipalityId: 58
	},
	{
		id: 4898,
		name: 'LOTE 12 CHICO',
		uta2020: '220910301000033',
		uta2010: '220910301000033',
		latitude: -26.36297987,
		longitude: -60.50373079,
		municipalityId: 58
	},
	{
		id: 4899,
		name: 'LOTE 18',
		uta2020: '220910301000035',
		uta2010: '220910301000035',
		latitude: -26.481373072,
		longitude: -60.4280741,
		municipalityId: 58
	},
	{
		id: 4900,
		name: 'EL 50',
		uta2020: '220910301000012',
		uta2010: '220910301000012',
		latitude: -26.358809897,
		longitude: -60.424275543,
		municipalityId: 58
	},
	{
		id: 4901,
		name: 'LA LLAVE',
		uta2020: '220910301000024',
		uta2010: '220910301000024',
		latitude: -26.392440024,
		longitude: -60.302632126,
		municipalityId: 58
	},
	{
		id: 4902,
		name: '2 DE ABRIL',
		uta2020: '220910301000001',
		uta2010: '220910301000001',
		latitude: -26.164279026,
		longitude: -60.55151954,
		municipalityId: 58
	},
	{
		id: 4903,
		name: 'EL MARTILLO',
		uta2020: '220910301000016',
		uta2010: '220910301000016',
		latitude: -26.208203582,
		longitude: -60.726608979,
		municipalityId: 58
	},
	{
		id: 4904,
		name: 'TOUNDAIAN',
		uta2020: '220910301000048',
		uta2010: '220910301000048',
		latitude: -26.297713212,
		longitude: -60.755952993,
		municipalityId: 58
	},
	{
		id: 4905,
		name: 'PAMPA DEL GALLO',
		uta2020: '220910301000039',
		uta2010: '220910301000039',
		latitude: -26.447863769,
		longitude: -60.35065984,
		municipalityId: 58
	},
	{
		id: 4906,
		name: 'ESTACION KILOMETRO 841',
		uta2020: '220910301000020',
		uta2010: '220910301000020',
		latitude: -26.559871925,
		longitude: -60.392470379,
		municipalityId: 58
	},
	{
		id: 4907,
		name: 'LOTE 10',
		uta2020: '220910301000032',
		uta2010: '220910301000032',
		latitude: -26.258800521,
		longitude: -60.690131515,
		municipalityId: 58
	},
	{
		id: 4908,
		name: 'TRES ISLETAS',
		uta2020: '220910301010000',
		uta2010: '220910301010000',
		latitude: -26.337834929,
		longitude: -60.429934955,
		municipalityId: 58
	},
	{
		id: 4909,
		name: 'CABA ÑARO',
		uta2020: '220910301000002',
		uta2010: '220910301000002',
		latitude: -26.303373439,
		longitude: -60.302283979,
		municipalityId: 58
	},
	{
		id: 4910,
		name: 'LA PELIGROSA',
		uta2020: '220910301000027',
		uta2010: '220910301000027',
		latitude: -26.195353661,
		longitude: -60.118273979,
		municipalityId: 58
	},
	{
		id: 4911,
		name: 'COLONIA TACURUZAL',
		uta2020: '220910301000004',
		uta2010: '220910301000004',
		latitude: -26.265588209,
		longitude: -60.166561367,
		municipalityId: 58
	},
	{
		id: 4912,
		name: 'PAMPA SENA',
		uta2020: '220910301000045',
		uta2010: '220910301000045',
		latitude: -26.370136147,
		longitude: -60.609884028,
		municipalityId: 58
	},
	{
		id: 4913,
		name: 'PAMPA GHAN',
		uta2020: '220910301000041',
		uta2010: '220910301000041',
		latitude: -26.301775321,
		longitude: -60.361941947,
		municipalityId: 58
	},
	{
		id: 4914,
		name: 'LA MATANZA',
		uta2020: '220910301000025',
		uta2010: '220910301000025',
		latitude: -26.494856447,
		longitude: -60.264694253,
		municipalityId: 58
	},
	{
		id: 4915,
		name: 'EL AGUACERITO',
		uta2020: '220910301000013',
		uta2010: '220910301000013',
		latitude: -26.153290206,
		longitude: -60.200558718,
		municipalityId: 58
	},
	{
		id: 4916,
		name: 'LA CURVA',
		uta2020: '220910301000023',
		uta2010: '220910301000023',
		latitude: -26.33932648,
		longitude: -60.32622538,
		municipalityId: 58
	},
	{
		id: 4917,
		name: 'EL MONTE QUEMADO CHICO',
		uta2020: '220910301000017',
		uta2010: '220910301000017',
		latitude: -26.209789538,
		longitude: -60.567895658,
		municipalityId: 58
	},
	{
		id: 4918,
		name: 'EL QUEMADO GRANDE',
		uta2020: '220910301000019',
		uta2010: '220910301000019',
		latitude: -26.134612659,
		longitude: -60.639368231,
		municipalityId: 58
	},
	{
		id: 4919,
		name: 'LA MEDIA LUNA',
		uta2020: '220910301000026',
		uta2010: '220910301000026',
		latitude: -26.124593615,
		longitude: -60.101457226,
		municipalityId: 58
	},
	{
		id: 4920,
		name: 'COLONIA PAMPA ALELAL',
		uta2020: '220910301000003',
		uta2010: '220910301000003',
		latitude: -26.397130966,
		longitude: -60.235115051,
		municipalityId: 58
	},
	{
		id: 4921,
		name: 'EL 45',
		uta2020: '220910301000009',
		uta2010: '220910301000009',
		latitude: -26.404146515,
		longitude: -60.41546961,
		municipalityId: 58
	},
	{
		id: 4922,
		name: 'PAMPA AGUARA',
		uta2020: '220910301000038',
		uta2010: '220910301000038',
		latitude: -26.565246013,
		longitude: -60.333207628,
		municipalityId: 58
	},
	{
		id: 4923,
		name: 'LA RINCONADA',
		uta2020: '220910301000030',
		uta2010: '220910301000030',
		latitude: -26.2672499,
		longitude: -60.40246826,
		municipalityId: 58
	},
	{
		id: 4924,
		name: 'COLONIA SAUCE NORTE',
		uta2020: '300350000000017',
		uta2010: '300350000000017',
		latitude: -30.898951413,
		longitude: -58.624325357,
		municipalityId: 1609
	},
	{
		id: 4925,
		name: 'ESTACION DON GONZALO',
		uta2020: '300350000000024',
		uta2010: '300350000000024',
		latitude: -31.118799051,
		longitude: -59.173397807,
		municipalityId: 1609
	},
	{
		id: 4926,
		name: 'RAMBLONES',
		uta2020: '300350000000038',
		uta2010: '300350000000038',
		latitude: -30.956924013,
		longitude: -59.235009419,
		municipalityId: 1609
	},
	{
		id: 4927,
		name: 'CARPINCHORI',
		uta2020: '300350000000006',
		uta2010: '300350000000006',
		latitude: -30.717820067,
		longitude: -58.633797333,
		municipalityId: 1609
	},
	{
		id: 4928,
		name: 'LA CALANDRIA',
		uta2020: '300350000000030',
		uta2010: '300350000000030',
		latitude: -30.823116549,
		longitude: -58.668898262,
		municipalityId: 1609
	},
	{
		id: 4929,
		name: 'LOS COMPARTOS',
		uta2020: '500140014040000',
		uta2010: '500140014040000',
		latitude: -34.979260456,
		longitude: -67.659089321,
		municipalityId: 1502
	},
	{
		id: 4930,
		name: 'POSTE DE FIERRO',
		uta2020: '500140014000060',
		uta2010: '500140014000060',
		latitude: -35.028680579,
		longitude: -67.688777989,
		municipalityId: 1502
	},
	{
		id: 4931,
		name: 'EL CEIBO',
		uta2020: '500140014000018',
		uta2010: '500140014000018',
		latitude: -34.92261384,
		longitude: -67.57736983,
		municipalityId: 1502
	},
	{
		id: 4932,
		name: 'COCHICO',
		uta2020: '500140014000008',
		uta2010: '500140014000008',
		latitude: -35.712432534,
		longitude: -67.331243891,
		municipalityId: 1502
	},
	{
		id: 4933,
		name: 'LA MARZOLINA',
		uta2020: '500140014000039',
		uta2010: '500140014000039',
		latitude: -35.01317343,
		longitude: -67.65637464,
		municipalityId: 1502
	},
	{
		id: 4934,
		name: 'GENERAL ALVEAR',
		uta2020: '500140014030000',
		uta2010: '500140014030000',
		latitude: -34.980469477,
		longitude: -67.700995083,
		municipalityId: 1502
	},
	{
		id: 4935,
		name: 'LA ESCANDINAVA',
		uta2020: '500140014000037',
		uta2010: '500140014000037',
		latitude: -35.03213849,
		longitude: -67.52321008,
		municipalityId: 1502
	},
	{
		id: 4936,
		name: 'LA MONTILLA',
		uta2020: '500140014000040',
		uta2010: '500140014000040',
		latitude: -34.987639047,
		longitude: -67.482561053,
		municipalityId: 1502
	},
	{
		id: 4937,
		name: 'EL JUNCALITO',
		uta2020: '500140014000020',
		uta2010: '500140014000020',
		latitude: -34.95948776,
		longitude: -67.70277945,
		municipalityId: 1502
	},
	{
		id: 4938,
		name: 'CORRAL DE LORCA',
		uta2020: '500140014000009',
		uta2010: '500140014000009',
		latitude: -34.701539122,
		longitude: -67.053563766,
		municipalityId: 1502
	},
	{
		id: 4939,
		name: 'LA CALIFORNIA',
		uta2020: '500140014000034',
		uta2010: '500140014000034',
		latitude: -34.924713,
		longitude: -67.65651763,
		municipalityId: 1502
	},
	{
		id: 4940,
		name: 'LA MORA',
		uta2020: '500140014000041',
		uta2010: '500140014000041',
		latitude: -35.113178253,
		longitude: -66.824935913,
		municipalityId: 1502
	},
	{
		id: 4941,
		name: 'GOICO',
		uta2020: '500140014000026',
		uta2010: '500140014000026',
		latitude: -34.626232147,
		longitude: -67.660377502,
		municipalityId: 1502
	},
	{
		id: 4942,
		name: 'CANALEJAS',
		uta2020: '500140014000004',
		uta2010: '500140014000004',
		latitude: -35.16899569,
		longitude: -66.50196772,
		municipalityId: 1502
	},
	{
		id: 4943,
		name: 'OVEJERIA',
		uta2020: '500140014000056',
		uta2010: '500140014000056',
		latitude: -34.676773071,
		longitude: -67.270851135,
		municipalityId: 1502
	},
	{
		id: 4944,
		name: 'CARMENSA',
		uta2020: '500140014020000',
		uta2010: '500140014020000',
		latitude: -35.14490579,
		longitude: -67.662955044,
		municipalityId: 1502
	},
	{
		id: 4945,
		name: 'KILOMETRO 884',
		uta2020: '500140014000030',
		uta2010: '500140014000030',
		latitude: -35.030808171,
		longitude: -67.589328217,
		municipalityId: 1502
	},
	{
		id: 4946,
		name: 'LOS CAMPAMENTOS',
		uta2020: '500140014000050',
		uta2010: '500140014000050',
		latitude: -34.969780062,
		longitude: -67.557175353,
		municipalityId: 1502
	},
	{
		id: 4947,
		name: 'BOWEN',
		uta2020: '500140014010000',
		uta2010: '500140014010000',
		latitude: -35.000912432,
		longitude: -67.516181829,
		municipalityId: 1502
	},
	{
		id: 4948,
		name: 'CAÑADA RICA',
		uta2020: '820282427050000',
		uta2010: '820282427050000',
		latitude: -33.517417556,
		longitude: -60.613296887,
		municipalityId: 727
	},
	{
		id: 4949,
		name: 'MI GRANJA',
		uta2020: '140212119210000',
		uta2010: '140212119210000',
		latitude: -31.350110661,
		longitude: -63.999645099,
		municipalityId: 210
	},
	{
		id: 4950,
		name: 'BANCO PAYAGUA',
		uta2020: '340219035010000',
		uta2010: '340219035010000',
		latitude: -26.707129703,
		longitude: -58.339074583,
		municipalityId: 2335
	},
	{
		id: 4951,
		name: 'LA RINCONADA',
		uta2020: '900638357000076',
		uta2010: '900638357000076',
		latitude: -26.8347321,
		longitude: -65.3144155,
		municipalityId: 2233
	},
	{
		id: 4952,
		name: 'EL MANANTIAL',
		uta2020: '900638357020002',
		uta2010: '900638357020002',
		latitude: -26.844560443,
		longitude: -65.285669042,
		municipalityId: 2233
	},
	{
		id: 4953,
		name: 'BARRIO ARAUJO',
		uta2020: '900638357020001',
		uta2010: '900638357020001',
		latitude: -26.841817573,
		longitude: -65.275355936,
		municipalityId: 2233
	},
	{
		id: 4954,
		name: 'VILMER',
		uta2020: '861616252050000',
		uta2010: '861616252050000',
		latitude: -27.808087616,
		longitude: -64.090076456,
		municipalityId: 1391
	},
	{
		id: 4955,
		name: 'LAPRIDA',
		uta2020: '860636105050000',
		uta2010: '860636105050000',
		latitude: -28.407354817,
		longitude: -64.454192782,
		municipalityId: 1477
	},
	{
		id: 4956,
		name: 'SAN JORGE',
		uta2020: '821260315140000',
		uta2010: '821260315140000',
		latitude: -31.898003817,
		longitude: -61.860328778,
		municipalityId: 938
	},
	{
		id: 4957,
		name: 'CAMPO DURANDO',
		uta2020: '821260315000010',
		uta2010: '821260315000010',
		latitude: -31.8472678,
		longitude: -61.918287,
		municipalityId: 938
	},
	{
		id: 4958,
		name: 'CAMPO EL INJERTO',
		uta2020: '821260315000013',
		uta2010: '821260315000013',
		latitude: -31.960381278,
		longitude: -61.979995572,
		municipalityId: 938
	},
	{
		id: 4959,
		name: 'VILLA SAN MARCIAL',
		uta2020: '300989865150000',
		uta2010: '300989865150000',
		latitude: -32.180062401,
		longitude: -58.930127203,
		municipalityId: 1772
	},
	{
		id: 4960,
		name: 'ÑANDUCITA',
		uta2020: '820913624200000',
		uta2010: '820913624200000',
		latitude: -30.372459923,
		longitude: -61.132601581,
		municipalityId: 845
	},
	{
		id: 4961,
		name: 'EL BARREAL',
		uta2020: '141543134000011',
		uta2010: '141543134000011',
		latitude: -29.702336397,
		longitude: -64.230261022,
		municipalityId: 485
	},
	{
		id: 4962,
		name: 'SAN MIGUEL',
		uta2020: '141543134000047',
		uta2010: '141543134000047',
		latitude: -29.655241053,
		longitude: -64.141028793,
		municipalityId: 485
	},
	{
		id: 4963,
		name: 'SAN MARTIN',
		uta2020: '141543134000046',
		uta2010: '141543134000046',
		latitude: -29.5912504,
		longitude: -64.382192149,
		municipalityId: 485
	},
	{
		id: 4964,
		name: 'POZO NUEVO',
		uta2020: '141543134040000',
		uta2010: '141543134040000',
		latitude: -29.57754569,
		longitude: -64.107099625,
		municipalityId: 485
	},
	{
		id: 4965,
		name: 'RAYO CORTADO',
		uta2020: '141122784080000',
		uta2010: '141122784080000',
		latitude: -30.074259329,
		longitude: -63.824981824,
		municipalityId: 148
	},
	{
		id: 4966,
		name: 'COLONIA CELLO',
		uta2020: '820212175100000',
		uta2010: '820212175100000',
		latitude: -31.433849725,
		longitude: -61.841702171,
		municipalityId: 760
	},
	{
		id: 4967,
		name: 'EL CHAÑAR',
		uta2020: '900078014020000',
		uta2010: '900078014020000',
		latitude: -26.758360561,
		longitude: -65.069388892,
		municipalityId: 2239
	},
	{
		id: 4968,
		name: 'TAQUELLO',
		uta2020: '900078014000313',
		uta2010: '900078014000313',
		latitude: -26.7752746,
		longitude: -65.0671588,
		municipalityId: 2239
	},
	{
		id: 4969,
		name: 'BOCA DEL TIGRE',
		uta2020: '900078014000025',
		uta2010: '900078014000025',
		latitude: -26.7707283,
		longitude: -65.1030407,
		municipalityId: 2239
	},
	{
		id: 4970,
		name: 'EL ESPINILLO',
		uta2020: '900078014000063',
		uta2010: '900078014000063',
		latitude: -26.755054474,
		longitude: -64.979118347,
		municipalityId: 2239
	},
	{
		id: 4971,
		name: 'TACO PALTA',
		uta2020: '900078014000309',
		uta2010: '900078014000309',
		latitude: -26.77489,
		longitude: -65.0238,
		municipalityId: 2239
	},
	{
		id: 4972,
		name: 'LA MARTA',
		uta2020: '900078014000192',
		uta2010: '900078014000192',
		latitude: -26.78326,
		longitude: -64.97979,
		municipalityId: 2239
	},
	{
		id: 4973,
		name: 'SAN ANTONIO DE PADUA',
		uta2020: '065390539010005',
		uta2010: '065390539010005',
		latitude: -34.669858136,
		longitude: -58.697930437,
		municipalityId: 633
	},
	{
		id: 4974,
		name: 'LIBERTAD',
		uta2020: '065390539010001',
		uta2010: '065390539010001',
		latitude: -34.708542242,
		longitude: -58.679586725,
		municipalityId: 633
	},
	{
		id: 4975,
		name: 'MERLO',
		uta2020: '065390539010003',
		uta2010: '065390539010003',
		latitude: -34.682327701,
		longitude: -58.743643208,
		municipalityId: 633
	},
	{
		id: 4976,
		name: 'MARIANO ACOSTA',
		uta2020: '065390539010002',
		uta2010: '065390539010002',
		latitude: -34.715480807,
		longitude: -58.797674041,
		municipalityId: 633
	},
	{
		id: 4977,
		name: 'PONTEVEDRA',
		uta2020: '065390539010004',
		uta2010: '065390539010004',
		latitude: -34.746795949,
		longitude: -58.706043154,
		municipalityId: 633
	},
	{
		id: 4978,
		name: 'CHARBONIER',
		uta2020: '140912483060000',
		uta2010: '140912483060000',
		latitude: -30.77208691,
		longitude: -64.544159553,
		municipalityId: 287
	},
	{
		id: 4979,
		name: 'LAS RABONAS',
		uta2020: '141262854070000',
		uta2010: '141262854070000',
		latitude: -31.854449467,
		longitude: -64.98709706,
		municipalityId: 386
	},
	{
		id: 4980,
		name: 'AGUA DE RAMON',
		uta2020: '140702364000002',
		uta2010: '140702364000002',
		latitude: -30.849700273,
		longitude: -65.365090379,
		municipalityId: 84
	},
	{
		id: 4981,
		name: 'PIEDRITA BLANCA',
		uta2020: '140702364000041',
		uta2010: '140702364000041',
		latitude: -30.806119862,
		longitude: -65.430026518,
		municipalityId: 84
	},
	{
		id: 4982,
		name: 'EL CHACHO',
		uta2020: '140702364020000',
		uta2010: '140702364020000',
		latitude: -30.801797406,
		longitude: -65.644052144,
		municipalityId: 84
	},
	{
		id: 4983,
		name: 'BERNAL OESTE',
		uta2020: '066580658010002',
		uta2010: '066580658010002',
		latitude: -34.726964425,
		longitude: -58.318279562,
		municipalityId: 634
	},
	{
		id: 4984,
		name: 'DON BOSCO',
		uta2020: '066580658010003',
		uta2010: '066580658010003',
		latitude: -34.703213016,
		longitude: -58.298453318,
		municipalityId: 634
	},
	{
		id: 4985,
		name: 'BERNAL',
		uta2020: '066580658010001',
		uta2010: '066580658010001',
		latitude: -34.700378406,
		longitude: -58.276642782,
		municipalityId: 634
	},
	{
		id: 4986,
		name: 'QUILMES OESTE',
		uta2020: '066580658010007',
		uta2010: '066580658010007',
		latitude: -34.747798989,
		longitude: -58.299944015,
		municipalityId: 634
	},
	{
		id: 4987,
		name: 'VILLA LA FLORIDA',
		uta2020: '066580658010009',
		uta2010: '066580658010009',
		latitude: -34.768884134,
		longitude: -58.295709249,
		municipalityId: 634
	},
	{
		id: 4988,
		name: 'EZPELETA OESTE',
		uta2020: '066580658010005',
		uta2010: '066580658010005',
		latitude: -34.763444208,
		longitude: -58.263831435,
		municipalityId: 634
	},
	{
		id: 4989,
		name: 'SAN FRANCISCO SOLANO',
		uta2020: '066580658010008',
		uta2010: '066580658010008',
		latitude: -34.777773073,
		longitude: -58.310156125,
		municipalityId: 634
	},
	{
		id: 4990,
		name: 'EZPELETA',
		uta2020: '066580658010004',
		uta2010: '066580658010004',
		latitude: -34.743564443,
		longitude: -58.228140836,
		municipalityId: 634
	},
	{
		id: 4991,
		name: 'QUILMES',
		uta2020: '066580658010006',
		uta2010: '066580658010006',
		latitude: -34.724134475,
		longitude: -58.249220554,
		municipalityId: 634
	},
	{
		id: 4992,
		name: 'COLONIA NUEVA ITATI',
		uta2020: '301139945000030',
		uta2010: '301139945000030',
		latitude: -31.451146,
		longitude: -58.706144,
		municipalityId: 1663
	},
	{
		id: 4993,
		name: 'COLONIA LA BLANQUITA',
		uta2020: '301139945000019',
		uta2010: '301139945000019',
		latitude: -31.620444383,
		longitude: -58.781812016,
		municipalityId: 1663
	},
	{
		id: 4994,
		name: 'LAGUNA LARGA',
		uta2020: '301139945000070',
		uta2010: '301139945000070',
		latitude: -31.497485091,
		longitude: -58.939343255,
		municipalityId: 1663
	},
	{
		id: 4995,
		name: 'COLONIA CONDOR',
		uta2020: '301139945000014',
		uta2010: '301139945000014',
		latitude: -31.54863278,
		longitude: -58.55298909,
		municipalityId: 1663
	},
	{
		id: 4996,
		name: 'ZENON ROCA',
		uta2020: '301139945000107',
		uta2010: '301139945000107',
		latitude: -31.547761509,
		longitude: -58.771961855,
		municipalityId: 1663
	},
	{
		id: 4997,
		name: 'LUCAS SUD',
		uta2020: '301139945000076',
		uta2010: '301139945000076',
		latitude: -31.62835549,
		longitude: -58.89768899,
		municipalityId: 1663
	},
	{
		id: 4998,
		name: 'COLONIA NUEVA ALEMANIA',
		uta2020: '301139945000029',
		uta2010: '301139945000029',
		latitude: -31.609378815,
		longitude: -58.842308044,
		municipalityId: 1663
	},
	{
		id: 4999,
		name: 'COLONIA SAN GREGORIO',
		uta2020: '301139945000033',
		uta2010: '301139945000033',
		latitude: -31.528456656,
		longitude: -58.671637179,
		municipalityId: 1663
	},
	{
		id: 5000,
		name: 'COLONIA BERRO',
		uta2020: '301139945000012',
		uta2010: '301139945000012',
		latitude: -31.598326875,
		longitude: -58.575385561,
		municipalityId: 1663
	},
	{
		id: 5001,
		name: 'COLONIA LA CHUNGA',
		uta2020: '301139945000020',
		uta2010: '301139945000020',
		latitude: -31.46361631,
		longitude: -58.85882814,
		municipalityId: 1663
	},
	{
		id: 5002,
		name: 'COLONIA LA MORA',
		uta2020: '301139945000022',
		uta2010: '301139945000022',
		latitude: -31.439426982,
		longitude: -58.604290007,
		municipalityId: 1663
	},
	{
		id: 5003,
		name: 'CRUZ DEL EJE',
		uta2020: '140280182050000',
		uta2010: '140280182050000',
		latitude: -30.721859217,
		longitude: -64.807737731,
		municipalityId: 468
	},
	{
		id: 5004,
		name: 'EUSEBIA Y CAROLINA',
		uta2020: '820212231180000',
		uta2010: '820212231180000',
		latitude: -30.94761357,
		longitude: -61.857773527,
		municipalityId: 761
	},
	{
		id: 5005,
		name: 'RIO HONDO',
		uta2020: '141261092000090',
		uta2010: '141261092000090',
		latitude: -31.6858934,
		longitude: -64.9529009,
		municipalityId: 387
	},
	{
		id: 5006,
		name: 'LA GLORIA',
		uta2020: '141261092000049',
		uta2010: '141261092000049',
		latitude: -31.727839331,
		longitude: -65.045808007,
		municipalityId: 387
	},
	{
		id: 5007,
		name: 'LA VENTANA',
		uta2020: '141261092000057',
		uta2010: '141261092000057',
		latitude: -31.529636,
		longitude: -64.8644651,
		municipalityId: 387
	},
	{
		id: 5008,
		name: 'MINA CLAVERO',
		uta2020: '141261092090000',
		uta2010: '141261092090000',
		latitude: -31.726784358,
		longitude: -65.005533264,
		municipalityId: 387
	},
	{
		id: 5009,
		name: 'GIULO CESARE',
		uta2020: '141261092000039',
		uta2010: '141261092000039',
		latitude: -31.61397186,
		longitude: -64.903073002,
		municipalityId: 387
	},
	{
		id: 5010,
		name: 'PUENTE DEL CURA',
		uta2020: '141261092000084',
		uta2010: '141261092000084',
		latitude: -31.677994338,
		longitude: -64.968633357,
		municipalityId: 387
	},
	{
		id: 5011,
		name: 'CAMPO TOYOS',
		uta2020: '064130413000009',
		uta2010: '064130413000009',
		latitude: -34.49188,
		longitude: -60.95047,
		municipalityId: 635
	},
	{
		id: 5012,
		name: 'LA ORIENTAL',
		uta2020: '064130413000012',
		uta2010: '064130413000012',
		latitude: -34.56748,
		longitude: -60.81348,
		municipalityId: 635
	},
	{
		id: 5013,
		name: 'COLONIA SAN LUIS',
		uta2020: '064130413000011',
		uta2010: '064130413000011',
		latitude: -34.5279758,
		longitude: -60.7358645,
		municipalityId: 635
	},
	{
		id: 5014,
		name: 'AGUSTINA',
		uta2020: '064130413020000',
		uta2010: '064130413020000',
		latitude: -34.460706857,
		longitude: -61.06707233,
		municipalityId: 635
	},
	{
		id: 5015,
		name: 'CAMPO MAIPU',
		uta2020: '064130413000007',
		uta2010: '064130413000007',
		latitude: -34.4201706,
		longitude: -60.9927161,
		municipalityId: 635
	},
	{
		id: 5016,
		name: 'BLANDENGUES',
		uta2020: '064130413000002',
		uta2010: '064130413000002',
		latitude: -34.545783997,
		longitude: -61.25553894,
		municipalityId: 635
	},
	{
		id: 5017,
		name: 'CAMPO CAMICCIA',
		uta2020: '064130413000004',
		uta2010: '064130413000004',
		latitude: -34.6283495,
		longitude: -60.9189112,
		municipalityId: 635
	},
	{
		id: 5018,
		name: 'BALNEARIO LAGUNA DE GOMEZ',
		uta2020: '064130413030000',
		uta2010: '064130413030000',
		latitude: -34.660643578,
		longitude: -61.018364593,
		municipalityId: 635
	},
	{
		id: 5019,
		name: 'AGUSTIN ROCA',
		uta2020: '064130413010000',
		uta2010: '064130413010000',
		latitude: -34.508084406,
		longitude: -60.864895655,
		municipalityId: 635
	},
	{
		id: 5020,
		name: 'A. ROCA',
		uta2020: '064130413000001',
		uta2010: '064130413000001',
		latitude: -34.5109222,
		longitude: -60.865793,
		municipalityId: 635
	},
	{
		id: 5021,
		name: 'JUNIN',
		uta2020: '064130413050000',
		uta2010: '064130413050000',
		latitude: -34.583831627,
		longitude: -60.947265171,
		municipalityId: 635
	},
	{
		id: 5022,
		name: 'LA AGRARIA',
		uta2020: '064130413055000',
		uta2010: '064130413055000',
		latitude: -34.656414515,
		longitude: -60.846668158,
		municipalityId: 635
	},
	{
		id: 5023,
		name: 'LAS MERCEDES',
		uta2020: '064130413000014',
		uta2010: '064130413000014',
		latitude: -34.481739044,
		longitude: -60.836322784,
		municipalityId: 635
	},
	{
		id: 5024,
		name: 'SAFORCADA',
		uta2020: '064130413080000',
		uta2010: '064130413080000',
		latitude: -34.575259129,
		longitude: -61.074730819,
		municipalityId: 635
	},
	{
		id: 5025,
		name: 'FORTIN TIBURCIO',
		uta2020: '064130413040000',
		uta2010: '064130413040000',
		latitude: -34.346732237,
		longitude: -61.131078173,
		municipalityId: 635
	},
	{
		id: 5026,
		name: 'CAMPO LA CRUZ',
		uta2020: '064130413000006',
		uta2010: '064130413000006',
		latitude: -34.5441544,
		longitude: -61.0064244,
		municipalityId: 635
	},
	{
		id: 5027,
		name: 'CERRITO COLORADO',
		uta2020: '064130413000010',
		uta2010: '064130413000010',
		latitude: -34.650326673,
		longitude: -60.93276491,
		municipalityId: 635
	},
	{
		id: 5028,
		name: 'RINCON DEL CARPINCHO',
		uta2020: '064130413000016',
		uta2010: '064130413000016',
		latitude: -34.666735,
		longitude: -61.0900506,
		municipalityId: 635
	},
	{
		id: 5029,
		name: 'SANTA ROSA',
		uta2020: '064130413000017',
		uta2010: '064130413000017',
		latitude: -34.39908,
		longitude: -60.86174,
		municipalityId: 635
	},
	{
		id: 5030,
		name: 'MORSE',
		uta2020: '064130413070000',
		uta2010: '064130413070000',
		latitude: -34.760889813,
		longitude: -60.841912249,
		municipalityId: 635
	},
	{
		id: 5031,
		name: 'LAPLACETTE',
		uta2020: '064130413060000',
		uta2010: '064130413060000',
		latitude: -34.724523853,
		longitude: -61.155317147,
		municipalityId: 635
	},
	{
		id: 5032,
		name: 'CAMPO BALESTRASET',
		uta2020: '064130413000003',
		uta2010: '064130413000003',
		latitude: -34.5467395,
		longitude: -60.9714138,
		municipalityId: 635
	},
	{
		id: 5033,
		name: 'TAPSO',
		uta2020: '860636112080000',
		uta2010: '860636112080000',
		latitude: -28.442128141,
		longitude: -65.02445213,
		municipalityId: 1478
	},
	{
		id: 5034,
		name: 'SAN FRANCISCO',
		uta2020: '141401337360000',
		uta2010: '141401337360000',
		latitude: -31.427608887,
		longitude: -62.086633615,
		municipalityId: 407
	},
	{
		id: 5035,
		name: 'PLAZA SAN FRANCISCO',
		uta2020: '141401337320000',
		uta2010: '141401337320000',
		latitude: -31.369805798,
		longitude: -62.098038609,
		municipalityId: 407
	},
	{
		id: 5036,
		name: 'SANTA LIBRADA',
		uta2020: '180490084000104',
		uta2010: '180490084000104',
		latitude: -30.02285,
		longitude: -59.4806088,
		municipalityId: 2071
	},
	{
		id: 5037,
		name: 'LOS FLOTADORES',
		uta2020: '180490084000066',
		uta2010: '180490084000066',
		latitude: -30.0673891,
		longitude: -59.5321193,
		municipalityId: 2071
	},
	{
		id: 5038,
		name: 'SANTO DOMINGO',
		uta2020: '180490084000107',
		uta2010: '180490084000107',
		latitude: -30.154489617,
		longitude: -59.530623664,
		municipalityId: 2071
	},
	{
		id: 5039,
		name: 'CHACRAS NORTE',
		uta2020: '180490084000021',
		uta2010: '180490084000021',
		latitude: -29.9929251,
		longitude: -59.4779693,
		municipalityId: 2071
	},
	{
		id: 5040,
		name: 'EL CARMEN',
		uta2020: '180490084000029',
		uta2010: '180490084000029',
		latitude: -29.8682494,
		longitude: -59.4572865,
		municipalityId: 2071
	},
	{
		id: 5041,
		name: 'SARANDI',
		uta2020: '180490084000108',
		uta2010: '180490084000108',
		latitude: -30.1283168,
		longitude: -59.4521206,
		municipalityId: 2071
	},
	{
		id: 5042,
		name: 'BUENA VISTA',
		uta2020: '180490084000010',
		uta2010: '180490084000010',
		latitude: -29.7846698,
		longitude: -59.2411091,
		municipalityId: 2071
	},
	{
		id: 5043,
		name: 'SANTA BARBARA',
		uta2020: '180490084000100',
		uta2010: '180490084000100',
		latitude: -29.967769623,
		longitude: -59.304084778,
		municipalityId: 2071
	},
	{
		id: 5044,
		name: 'SANTA CATALINA',
		uta2020: '180490084000101',
		uta2010: '180490084000101',
		latitude: -29.8981409,
		longitude: -59.4654021,
		municipalityId: 2071
	},
	{
		id: 5045,
		name: 'SAN ANTONIO',
		uta2020: '180490084000088',
		uta2010: '180490084000088',
		latitude: -30.149227504,
		longitude: -59.249688595,
		municipalityId: 2071
	},
	{
		id: 5046,
		name: 'LA FLORESTA',
		uta2020: '180490084000051',
		uta2010: '180490084000051',
		latitude: -29.826635,
		longitude: -59.1470721,
		municipalityId: 2071
	},
	{
		id: 5047,
		name: 'TRANQUERA CADENA',
		uta2020: '180490084000110',
		uta2010: '180490084000110',
		latitude: -29.939408502,
		longitude: -59.467661686,
		municipalityId: 2071
	},
	{
		id: 5048,
		name: 'EL ROSARIO',
		uta2020: '180490084000036',
		uta2010: '180490084000036',
		latitude: -30.20182232,
		longitude: -59.120037916,
		municipalityId: 2071
	},
	{
		id: 5049,
		name: 'ESQUINA',
		uta2020: '180490084010000',
		uta2010: '180490084010000',
		latitude: -30.015928415,
		longitude: -59.530981213,
		municipalityId: 2071
	},
	{
		id: 5050,
		name: 'GUAYQUIRARO',
		uta2020: '180490084000041',
		uta2010: '180490084000041',
		latitude: -30.299188713,
		longitude: -59.549559107,
		municipalityId: 2071
	},
	{
		id: 5051,
		name: 'CAMPO PERNIZZA',
		uta2020: '180490084000018',
		uta2010: '180490084000018',
		latitude: -29.935738062,
		longitude: -59.403014136,
		municipalityId: 2071
	},
	{
		id: 5052,
		name: 'LA DORITA',
		uta2020: '180490084000048',
		uta2010: '180490084000048',
		latitude: -29.631337,
		longitude: -58.8494691,
		municipalityId: 2071
	},
	{
		id: 5053,
		name: 'CAMPO LA EMILIA',
		uta2020: '180490084000016',
		uta2010: '180490084000016',
		latitude: -29.940827763,
		longitude: -59.206269532,
		municipalityId: 2071
	},
	{
		id: 5054,
		name: 'EL CERRO',
		uta2020: '180490084000032',
		uta2010: '180490084000032',
		latitude: -29.94335556,
		longitude: -59.250198364,
		municipalityId: 2071
	},
	{
		id: 5055,
		name: 'SAN FERNANDO',
		uta2020: '180490084000089',
		uta2010: '180490084000089',
		latitude: -30.000807782,
		longitude: -59.515647488,
		municipalityId: 2071
	},
	{
		id: 5056,
		name: 'PICADA AMARA',
		uta2020: '180490084000081',
		uta2010: '180490084000081',
		latitude: -29.6526366,
		longitude: -58.7378274,
		municipalityId: 2071
	},
	{
		id: 5057,
		name: 'MALVINAS SUR',
		uta2020: '180490084000073',
		uta2010: '180490084000073',
		latitude: -29.702246191,
		longitude: -59.076434179,
		municipalityId: 2071
	},
	{
		id: 5058,
		name: 'MALVINAS NORTE',
		uta2020: '180490084000072',
		uta2010: '180490084000072',
		latitude: -29.559007645,
		longitude: -58.97605896,
		municipalityId: 2071
	},
	{
		id: 5059,
		name: 'ARROYO SORO',
		uta2020: '180490084000007',
		uta2010: '180490084000007',
		latitude: -30.263446,
		longitude: -59.5484967,
		municipalityId: 2071
	},
	{
		id: 5060,
		name: 'RINCON DE SARANDI',
		uta2020: '180490084000085',
		uta2010: '180490084000085',
		latitude: -30.191251937,
		longitude: -59.303465856,
		municipalityId: 2071
	},
	{
		id: 5061,
		name: 'PASO HU',
		uta2020: '180490084000079',
		uta2010: '180490084000079',
		latitude: -29.5774705,
		longitude: -59.0088841,
		municipalityId: 2071
	},
	{
		id: 5062,
		name: 'SANTA MARIA',
		uta2020: '180490084000105',
		uta2010: '180490084000105',
		latitude: -29.653217316,
		longitude: -59.066307069,
		municipalityId: 2071
	},
	{
		id: 5063,
		name: 'INGA',
		uta2020: '180490084000042',
		uta2010: '180490084000042',
		latitude: -30.1133013,
		longitude: -59.5316704,
		municipalityId: 2071
	},
	{
		id: 5064,
		name: 'TRES MOJONES',
		uta2020: '180490084000112',
		uta2010: '180490084000112',
		latitude: -30.2583998,
		longitude: -59.4952106,
		municipalityId: 2071
	},
	{
		id: 5065,
		name: 'CAMPO ROMERO',
		uta2020: '180490084000019',
		uta2010: '180490084000019',
		latitude: -29.5657082,
		longitude: -58.9565861,
		municipalityId: 2071
	},
	{
		id: 5066,
		name: 'ABRA GUAZU',
		uta2020: '180490084000001',
		uta2010: '180490084000001',
		latitude: -30.0784368,
		longitude: -59.4055912,
		municipalityId: 2071
	},
	{
		id: 5067,
		name: 'VILLA ROSA',
		uta2020: '180490084000114',
		uta2010: '180490084000114',
		latitude: -30.237358281,
		longitude: -59.549460672,
		municipalityId: 2071
	},
	{
		id: 5068,
		name: 'COLONIA BONZON',
		uta2020: '180490084000025',
		uta2010: '180490084000025',
		latitude: -30.033255837,
		longitude: -59.528014767,
		municipalityId: 2071
	},
	{
		id: 5069,
		name: 'FLORESTA',
		uta2020: '020100001010001',
		uta2010: '020100001010001',
		latitude: -34.627686291,
		longitude: -58.483587278,
		municipalityId: 2450
	},
	{
		id: 5070,
		name: 'VILLA REAL',
		uta2020: '020100001010006',
		uta2010: '020100001010006',
		latitude: -34.619483134,
		longitude: -58.525986073,
		municipalityId: 2450
	},
	{
		id: 5071,
		name: 'VILLA LURO',
		uta2020: '020100001010005',
		uta2010: '020100001010005',
		latitude: -34.636412778,
		longitude: -58.502728805,
		municipalityId: 2450
	},
	{
		id: 5072,
		name: 'VERSALLES',
		uta2020: '020100001010004',
		uta2010: '020100001010004',
		latitude: -34.630123462,
		longitude: -58.522401748,
		municipalityId: 2450
	},
	{
		id: 5073,
		name: 'VELEZ SARSFIELD',
		uta2020: '020100001010003',
		uta2010: '020100001010003',
		latitude: -34.631361022,
		longitude: -58.493276997,
		municipalityId: 2450
	},
	{
		id: 5074,
		name: 'MONTE CASTRO',
		uta2020: '020100001010002',
		uta2010: '020100001010002',
		latitude: -34.619297483,
		longitude: -58.506580339,
		municipalityId: 2450
	},
	{
		id: 5075,
		name: 'PALMA SOLA',
		uta2020: '340499112040000',
		uta2010: '340499112040000',
		latitude: -25.247551235,
		longitude: -57.976840379,
		municipalityId: 2315
	},
	{
		id: 5076,
		name: 'MONTE NIEVAS',
		uta2020: '420350266040000',
		uta2010: '420350266040000',
		latitude: -35.861746406,
		longitude: -64.156967521,
		municipalityId: 1942
	},
	{
		id: 5077,
		name: 'BAUCHACETA',
		uta2020: '700490049000007',
		uta2010: '700490049000007',
		latitude: -30.51059811,
		longitude: -69.45997571,
		municipalityId: 2432
	},
	{
		id: 5078,
		name: 'ZONDA',
		uta2020: '700490049000138',
		uta2010: '700490049000138',
		latitude: -30.39065198,
		longitude: -69.21060797,
		municipalityId: 2432
	},
	{
		id: 5079,
		name: 'MONDACA',
		uta2020: '700490049000110',
		uta2010: '700490049000110',
		latitude: -30.269397736,
		longitude: -69.511169434,
		municipalityId: 2432
	},
	{
		id: 5080,
		name: 'ACHANGO',
		uta2020: '700490049000002',
		uta2010: '700490049000002',
		latitude: -30.270130157,
		longitude: -69.191162109,
		municipalityId: 2432
	},
	{
		id: 5081,
		name: 'IGLESIA',
		uta2020: '700490049030000',
		uta2010: '700490049030000',
		latitude: -30.412821891,
		longitude: -69.205164205,
		municipalityId: 2432
	},
	{
		id: 5082,
		name: 'TUDCUM',
		uta2020: '700490049070000',
		uta2010: '700490049070000',
		latitude: -30.188378113,
		longitude: -69.270283595,
		municipalityId: 2432
	},
	{
		id: 5083,
		name: 'RODEO',
		uta2020: '700490049060000',
		uta2010: '700490049060000',
		latitude: -30.209958054,
		longitude: -69.133613238,
		municipalityId: 2432
	},
	{
		id: 5084,
		name: 'GUARDIA VIEJA',
		uta2020: '700490049000076',
		uta2010: '700490049000076',
		latitude: -30.405574799,
		longitude: -69.576042175,
		municipalityId: 2432
	},
	{
		id: 5085,
		name: 'MALIMAN DE ARRIBA',
		uta2020: '700490049000107',
		uta2010: '700490049000107',
		latitude: -29.949546814,
		longitude: -69.175285339,
		municipalityId: 2432
	},
	{
		id: 5086,
		name: 'EL RETIRO',
		uta2020: '700490049000069',
		uta2010: '700490049000069',
		latitude: -30.292491913,
		longitude: -69.259040833,
		municipalityId: 2432
	},
	{
		id: 5087,
		name: 'MALIMAN DE ABAJO',
		uta2020: '700490049000106',
		uta2010: '700490049000106',
		latitude: -29.95890996,
		longitude: -69.17922278,
		municipalityId: 2432
	},
	{
		id: 5088,
		name: 'PISMANTA',
		uta2020: '700490049050000',
		uta2010: '700490049050000',
		latitude: -30.270980046,
		longitude: -69.228610488,
		municipalityId: 2432
	},
	{
		id: 5089,
		name: 'BELLA VISTA',
		uta2020: '700490049020000',
		uta2010: '700490049020000',
		latitude: -30.44015318,
		longitude: -69.24478666,
		municipalityId: 2432
	},
	{
		id: 5090,
		name: 'FIERRO NUEVO',
		uta2020: '700490049000073',
		uta2010: '700490049000073',
		latitude: -29.444227219,
		longitude: -69.468002319,
		municipalityId: 2432
	},
	{
		id: 5091,
		name: 'LAS FLORES',
		uta2020: '700490049040000',
		uta2010: '700490049040000',
		latitude: -30.32426445,
		longitude: -69.245306993,
		municipalityId: 2432
	},
	{
		id: 5092,
		name: 'FIERRO VIEJO',
		uta2020: '700490049000074',
		uta2010: '700490049000074',
		latitude: -29.452077866,
		longitude: -69.418029785,
		municipalityId: 2432
	},
	{
		id: 5093,
		name: 'ANGUALASTO',
		uta2020: '700490049010000',
		uta2010: '700490049010000',
		latitude: -30.053645597,
		longitude: -69.171707923,
		municipalityId: 2432
	},
	{
		id: 5094,
		name: 'TOCOTA',
		uta2020: '700490049000132',
		uta2010: '700490049000132',
		latitude: -30.655874252,
		longitude: -69.440505981,
		municipalityId: 2432
	},
	{
		id: 5095,
		name: 'ESTACION PEREYRA',
		uta2020: '060910091000001',
		uta2010: '060910091000001',
		latitude: -34.832640469,
		longitude: -58.100841229,
		municipalityId: 636
	},
	{
		id: 5096,
		name: 'GUILLERMO ENRIQUE HUDSON',
		uta2020: '060910091010005',
		uta2010: '060910091010005',
		latitude: -34.789759486,
		longitude: -58.143969264,
		municipalityId: 636
	},
	{
		id: 5097,
		name: 'PEREYRA',
		uta2020: '060910091010007',
		uta2010: '060910091010007',
		latitude: -34.847194539,
		longitude: -58.13927652,
		municipalityId: 636
	},
	{
		id: 5098,
		name: 'EL PATO',
		uta2020: '060910091010004',
		uta2010: '060910091010004',
		latitude: -34.906755707,
		longitude: -58.196699502,
		municipalityId: 636
	},
	{
		id: 5099,
		name: 'JUAN MARIA GUTIERREZ',
		uta2020: '060910091010006',
		uta2010: '060910091010006',
		latitude: -34.834842076,
		longitude: -58.181906113,
		municipalityId: 636
	},
	{
		id: 5100,
		name: 'RANELAGH',
		uta2020: '060910091010009',
		uta2010: '060910091010009',
		latitude: -34.79414685,
		longitude: -58.198981563,
		municipalityId: 636
	},
	{
		id: 5101,
		name: 'VILLA ESPAÑA',
		uta2020: '060910091010010',
		uta2010: '060910091010010',
		latitude: -34.776063417,
		longitude: -58.200253298,
		municipalityId: 636
	},
	{
		id: 5102,
		name: 'PLATANOS',
		uta2020: '060910091010008',
		uta2010: '060910091010008',
		latitude: -34.767420182,
		longitude: -58.1652686,
		municipalityId: 636
	},
	{
		id: 5103,
		name: 'BERAZATEGUI',
		uta2020: '060910091010001',
		uta2010: '060910091010001',
		latitude: -34.759749326,
		longitude: -58.201964523,
		municipalityId: 636
	},
	{
		id: 5104,
		name: 'BERAZATEGUI OESTE',
		uta2020: '060910091010002',
		uta2010: '060910091010002',
		latitude: -34.780420186,
		longitude: -58.241501026,
		municipalityId: 636
	},
	{
		id: 5105,
		name: 'CARLOS TOMAS SOURIGUES',
		uta2020: '060910091010003',
		uta2010: '060910091010003',
		latitude: -34.802119221,
		longitude: -58.21882125,
		municipalityId: 636
	},
	{
		id: 5106,
		name: 'GENERAL MOSCONI',
		uta2020: '340630259020000',
		uta2010: '340630259020000',
		latitude: -23.182718625,
		longitude: -62.304068544,
		municipalityId: 2342
	},
	{
		id: 5107,
		name: 'COMICO',
		uta2020: '620495210010000',
		uta2010: '620495210010000',
		latitude: -41.063275512,
		longitude: -67.596560098,
		municipalityId: 1298
	},
	{
		id: 5108,
		name: 'CHASICO',
		uta2020: '620495210000006',
		uta2010: '620495210000006',
		latitude: -41.135269165,
		longitude: -67.59538269,
		municipalityId: 1298
	},
	{
		id: 5109,
		name: 'TAMBELEN',
		uta2020: '620495210000033',
		uta2010: '620495210000033',
		latitude: -41.09910965,
		longitude: -67.366836548,
		municipalityId: 1298
	},
	{
		id: 5110,
		name: 'SANTA CLARA DE SAGUIER',
		uta2020: '820212357350000',
		uta2010: '820212357350000',
		latitude: -31.33735905,
		longitude: -61.818178378,
		municipalityId: 762
	},
	{
		id: 5111,
		name: 'CAMPO RIVAROSSA',
		uta2020: '820212357000019',
		uta2010: '820212357000019',
		latitude: -31.3251156,
		longitude: -61.773069,
		municipalityId: 762
	},
	{
		id: 5112,
		name: 'CAÑADA OMBU',
		uta2020: '821334142020000',
		uta2010: '821334142020000',
		latitude: -28.310830422,
		longitude: -59.983716645,
		municipalityId: 1003
	},
	{
		id: 5113,
		name: 'LOS POCITOS',
		uta2020: '901050119000080',
		uta2010: '901050119000080',
		latitude: -26.762775048,
		longitude: -65.237117165,
		municipalityId: 2253
	},
	{
		id: 5114,
		name: 'TAFI VIEJO',
		uta2020: '901050119080000',
		uta2010: '901050119080000',
		latitude: -26.73126828,
		longitude: -65.25581769,
		municipalityId: 2253
	},
	{
		id: 5115,
		name: 'VILLA LAS FLORES',
		uta2020: '901050119090000',
		uta2010: '901050119090000',
		latitude: -26.769577714,
		longitude: -65.233609939,
		municipalityId: 2253
	},
	{
		id: 5116,
		name: 'BARRIO PARADA 14',
		uta2020: '901050119040000',
		uta2010: '901050119040000',
		latitude: -26.752798701,
		longitude: -65.248427031,
		municipalityId: 2253
	},
	{
		id: 5117,
		name: 'BARRIO U.T.A. II',
		uta2020: '901050119050000',
		uta2010: '901050119050000',
		latitude: -26.756263713,
		longitude: -65.239024825,
		municipalityId: 2253
	},
	{
		id: 5118,
		name: 'LA PICADA',
		uta2020: '901050119000070',
		uta2010: '901050119000070',
		latitude: -26.732145,
		longitude: -65.2851763,
		municipalityId: 2253
	},
	{
		id: 5119,
		name: 'HERRERA',
		uta2020: '860286035020000',
		uta2010: '860286035020000',
		latitude: -28.485845127,
		longitude: -62.992646997,
		municipalityId: 1405
	},
	{
		id: 5120,
		name: 'COLONIA 2 DE ABRIL',
		uta2020: '181610406000019',
		uta2010: '181610406000019',
		latitude: -28.78160437,
		longitude: -58.679730741,
		municipalityId: 2040
	},
	{
		id: 5121,
		name: 'PEDRO R. FERNANDEZ',
		uta2020: '181610406040000',
		uta2010: '181610406040000',
		latitude: -28.750543349,
		longitude: -58.654536865,
		municipalityId: 2040
	},
	{
		id: 5122,
		name: 'ESTACION SANTIAGO ALCORTA',
		uta2020: '181610406000030',
		uta2010: '181610406000030',
		latitude: -28.788351224,
		longitude: -58.714345404,
		municipalityId: 2040
	},
	{
		id: 5123,
		name: 'MOJONES SUR',
		uta2020: '301139955000080',
		uta2010: '301139955000080',
		latitude: -31.66580467,
		longitude: -59.308669624,
		municipalityId: 1664
	},
	{
		id: 5124,
		name: 'EL TIGRE',
		uta2020: '301139955000051',
		uta2010: '301139955000051',
		latitude: -31.713375798,
		longitude: -59.180691343,
		municipalityId: 1664
	},
	{
		id: 5125,
		name: 'LOS TASES',
		uta2020: '301139955000073',
		uta2010: '301139955000073',
		latitude: -31.588667501,
		longitude: -59.312832787,
		municipalityId: 1664
	},
	{
		id: 5126,
		name: 'HUGENTOBLER',
		uta2020: '820212266000042',
		uta2010: '820212266000042',
		latitude: -30.9183876,
		longitude: -61.7534509,
		municipalityId: 763
	},
	{
		id: 5127,
		name: 'NAVIA',
		uta2020: '740566189120000',
		uta2010: '740566189120000',
		latitude: -34.772673367,
		longitude: -66.586278867,
		municipalityId: 1135
	},
	{
		id: 5128,
		name: 'SAUCE MEDIO',
		uta2020: '300840343000095',
		uta2010: '300840343000095',
		latitude: -31.805371396,
		longitude: -60.404941064,
		municipalityId: 1733
	},
	{
		id: 5129,
		name: 'SAN BENITO',
		uta2020: '300840343200000',
		uta2010: '300840343200000',
		latitude: -31.78152181,
		longitude: -60.441973991,
		municipalityId: 1733
	},
	{
		id: 5130,
		name: 'CAPILLA DE SITON',
		uta2020: '141683176030000',
		uta2010: '141683176030000',
		latitude: -30.572964085,
		longitude: -63.651741691,
		municipalityId: 341
	},
	{
		id: 5131,
		name: 'PUJATO NORTE',
		uta2020: '820703176000037',
		uta2010: '820703176000037',
		latitude: -31.5197752,
		longitude: -60.9288764,
		municipalityId: 874
	},
	{
		id: 5132,
		name: 'SAN NICOLAS',
		uta2020: '100700175000180',
		uta2010: '100700175000180',
		latitude: -29.286230087,
		longitude: -65.236183166,
		municipalityId: 1900
	},
	{
		id: 5133,
		name: 'EL MILAGRO',
		uta2020: '100700175000048',
		uta2010: '100700175000048',
		latitude: -29.35625267,
		longitude: -65.341056824,
		municipalityId: 1900
	},
	{
		id: 5134,
		name: 'PORTILLO CHICO',
		uta2020: '100700175000153',
		uta2010: '100700175000153',
		latitude: -29.326622009,
		longitude: -65.39705658,
		municipalityId: 1900
	},
	{
		id: 5135,
		name: 'SAN PEDRO',
		uta2020: '100700175000181',
		uta2010: '100700175000181',
		latitude: -29.205974579,
		longitude: -65.243263245,
		municipalityId: 1900
	},
	{
		id: 5136,
		name: 'LA ANTIGUA',
		uta2020: '100700175000081',
		uta2010: '100700175000081',
		latitude: -29.446342468,
		longitude: -65.248901367,
		municipalityId: 1900
	},
	{
		id: 5137,
		name: 'EL CERRITO',
		uta2020: '100700175000039',
		uta2010: '100700175000039',
		latitude: -29.412843659,
		longitude: -65.40544251,
		municipalityId: 1900
	},
	{
		id: 5138,
		name: 'ESQUIU',
		uta2020: '100700175060000',
		uta2010: '100700175060000',
		latitude: -29.379066194,
		longitude: -65.289828786,
		municipalityId: 1900
	},
	{
		id: 5139,
		name: 'SAN AGUSTIN',
		uta2020: '100700175000172',
		uta2010: '100700175000172',
		latitude: -29.913612366,
		longitude: -65.43686676,
		municipalityId: 1900
	},
	{
		id: 5140,
		name: 'RIO DE LA DORADA',
		uta2020: '100700175000167',
		uta2010: '100700175000167',
		latitude: -29.288908031,
		longitude: -65.487025254,
		municipalityId: 1900
	},
	{
		id: 5141,
		name: 'PALO CRUZ',
		uta2020: '100700175000143',
		uta2010: '100700175000143',
		latitude: -29.320138931,
		longitude: -65.249076843,
		municipalityId: 1900
	},
	{
		id: 5142,
		name: 'EL CHAGUARAL',
		uta2020: '100700175000040',
		uta2010: '100700175000040',
		latitude: -29.290315665,
		longitude: -65.047937437,
		municipalityId: 1900
	},
	{
		id: 5143,
		name: 'LA SUERTE',
		uta2020: '100700175000105',
		uta2010: '100700175000105',
		latitude: -29.160775506,
		longitude: -64.797673468,
		municipalityId: 1900
	},
	{
		id: 5144,
		name: 'SANTO DOMINGO',
		uta2020: '100700175000189',
		uta2010: '100700175000189',
		latitude: -29.24367346,
		longitude: -65.482483805,
		municipalityId: 1900
	},
	{
		id: 5145,
		name: 'EL AYBAL',
		uta2020: '100700175020000',
		uta2010: '100700175020000',
		latitude: -29.10661404,
		longitude: -65.339695207,
		municipalityId: 1900
	},
	{
		id: 5146,
		name: 'EL BOSQUECILLO',
		uta2020: '100700175000035',
		uta2010: '100700175000035',
		latitude: -29.57366,
		longitude: -65.32068,
		municipalityId: 1900
	},
	{
		id: 5147,
		name: 'POZO DE LA ORILLA',
		uta2020: '100700175000156',
		uta2010: '100700175000156',
		latitude: -29.767822266,
		longitude: -65.244750977,
		municipalityId: 1900
	},
	{
		id: 5148,
		name: 'SANTA LUCIA',
		uta2020: '100700175000186',
		uta2010: '100700175000186',
		latitude: -29.117681503,
		longitude: -65.170570373,
		municipalityId: 1900
	},
	{
		id: 5149,
		name: 'LA QUINTA',
		uta2020: '100700175000102',
		uta2010: '100700175000102',
		latitude: -29.045600737,
		longitude: -65.351903142,
		municipalityId: 1900
	},
	{
		id: 5150,
		name: 'MARIA ELENA',
		uta2020: '100700175000135',
		uta2010: '100700175000135',
		latitude: -29.073806763,
		longitude: -65.269554138,
		municipalityId: 1900
	},
	{
		id: 5151,
		name: 'RECREO',
		uta2020: '100700175140000',
		uta2010: '100700175140000',
		latitude: -29.276861124,
		longitude: -65.056564155,
		municipalityId: 1900
	},
	{
		id: 5152,
		name: 'ESTACION KILOMETRO 969',
		uta2020: '100700175000070',
		uta2010: '100700175000070',
		latitude: -29.430808214,
		longitude: -64.971198438,
		municipalityId: 1900
	},
	{
		id: 5153,
		name: 'SAN ISIDRO',
		uta2020: '100700175000175',
		uta2010: '100700175000175',
		latitude: -29.928836822,
		longitude: -65.404251099,
		municipalityId: 1900
	},
	{
		id: 5154,
		name: 'EL CERCADO',
		uta2020: '100700175000038',
		uta2010: '100700175000038',
		latitude: -29.322576523,
		longitude: -65.495452881,
		municipalityId: 1900
	},
	{
		id: 5155,
		name: 'LA ZANJA',
		uta2020: '100700175000108',
		uta2010: '100700175000108',
		latitude: -29.508816084,
		longitude: -65.150748919,
		municipalityId: 1900
	},
	{
		id: 5156,
		name: 'RIO DEL MISTOLITO',
		uta2020: '100700175000169',
		uta2010: '100700175000169',
		latitude: -29.33851,
		longitude: -65.4949,
		municipalityId: 1900
	},
	{
		id: 5157,
		name: 'RAMBLONES',
		uta2020: '100700175130000',
		uta2010: '100700175130000',
		latitude: -29.158284451,
		longitude: -65.374945476,
		municipalityId: 1900
	},
	{
		id: 5158,
		name: 'EL DIVISADERO',
		uta2020: '100700175040000',
		uta2010: '100700175040000',
		latitude: -29.193718416,
		longitude: -65.423340352,
		municipalityId: 1900
	},
	{
		id: 5159,
		name: 'LA HORQUETA',
		uta2020: '100700175000093',
		uta2010: '100700175000093',
		latitude: -29.50399,
		longitude: -65.38459,
		municipalityId: 1900
	},
	{
		id: 5160,
		name: 'GARAY',
		uta2020: '100700175000073',
		uta2010: '100700175000073',
		latitude: -29.453795305,
		longitude: -65.14218025,
		municipalityId: 1900
	},
	{
		id: 5161,
		name: 'LA DORADA',
		uta2020: '100700175080000',
		uta2010: '100700175080000',
		latitude: -29.280438784,
		longitude: -65.476632194,
		municipalityId: 1900
	},
	{
		id: 5162,
		name: 'EL ROSARIO',
		uta2020: '100700175000059',
		uta2010: '100700175000059',
		latitude: -29.494335175,
		longitude: -65.3256073,
		municipalityId: 1900
	},
	{
		id: 5163,
		name: 'SAN SALVADOR',
		uta2020: '100700175000184',
		uta2010: '100700175000184',
		latitude: -29.673650742,
		longitude: -65.463127136,
		municipalityId: 1900
	},
	{
		id: 5164,
		name: 'LAS FLORES',
		uta2020: '100700175000115',
		uta2010: '100700175000115',
		latitude: -29.378145218,
		longitude: -65.484901428,
		municipalityId: 1900
	},
	{
		id: 5165,
		name: 'PALO CRUZ DE ABAJO',
		uta2020: '100700175000144',
		uta2010: '100700175000144',
		latitude: -29.322965746,
		longitude: -65.243189042,
		municipalityId: 1900
	},
	{
		id: 5166,
		name: 'SAN RAFAEL',
		uta2020: '100700175000182',
		uta2010: '100700175000182',
		latitude: -29.186933955,
		longitude: -65.346661584,
		municipalityId: 1900
	},
	{
		id: 5167,
		name: 'PALO SANTO',
		uta2020: '100700175000147',
		uta2010: '100700175000147',
		latitude: -29.886242191,
		longitude: -65.294937673,
		municipalityId: 1900
	},
	{
		id: 5168,
		name: 'EL DIQUE',
		uta2020: '100700175000043',
		uta2010: '100700175000043',
		latitude: -29.130321503,
		longitude: -64.975578308,
		municipalityId: 1900
	},
	{
		id: 5169,
		name: 'EL CLERIGO',
		uta2020: '100700175000042',
		uta2010: '100700175000042',
		latitude: -29.591058731,
		longitude: -65.364860535,
		municipalityId: 1900
	},
	{
		id: 5170,
		name: 'SAN BERNARDO',
		uta2020: '100700175000173',
		uta2010: '100700175000173',
		latitude: -29.194835663,
		longitude: -64.906600952,
		municipalityId: 1900
	},
	{
		id: 5171,
		name: 'EL MISTOLITO',
		uta2020: '100700175000049',
		uta2010: '100700175000049',
		latitude: -29.342056274,
		longitude: -65.500160217,
		municipalityId: 1900
	},
	{
		id: 5172,
		name: 'CASA DE PIEDRA',
		uta2020: '100700175010000',
		uta2010: '100700175010000',
		latitude: -29.649289011,
		longitude: -65.51711516,
		municipalityId: 1900
	},
	{
		id: 5173,
		name: 'LA GUARDIA',
		uta2020: '100700175090000',
		uta2010: '100700175090000',
		latitude: -29.54967315,
		longitude: -65.450485799,
		municipalityId: 1900
	},
	{
		id: 5174,
		name: 'EL QUIMILO',
		uta2020: '100700175050000',
		uta2010: '100700175050000',
		latitude: -29.953421444,
		longitude: -65.392640615,
		municipalityId: 1900
	},
	{
		id: 5175,
		name: 'SANTA MARTA',
		uta2020: '100700175000187',
		uta2010: '100700175000187',
		latitude: -29.419725418,
		longitude: -65.472045898,
		municipalityId: 1900
	},
	{
		id: 5176,
		name: 'EL JUMEAL',
		uta2020: '100700175000046',
		uta2010: '100700175000046',
		latitude: -29.415294997,
		longitude: -65.502643145,
		municipalityId: 1900
	},
	{
		id: 5177,
		name: 'EL BAÑADO',
		uta2020: '100700175030000',
		uta2010: '100700175030000',
		latitude: -29.183235409,
		longitude: -65.416145922,
		municipalityId: 1900
	},
	{
		id: 5178,
		name: 'EL MORENO',
		uta2020: '100700175000050',
		uta2010: '100700175000050',
		latitude: -29.25497997,
		longitude: -65.399372309,
		municipalityId: 1900
	},
	{
		id: 5179,
		name: 'LA HORQUETA DE ARRIBA',
		uta2020: '100700175000094',
		uta2010: '100700175000094',
		latitude: -29.501260757,
		longitude: -65.390930176,
		municipalityId: 1900
	},
	{
		id: 5180,
		name: 'SAN LORENZO',
		uta2020: '100700175000177',
		uta2010: '100700175000177',
		latitude: -29.680193882,
		longitude: -65.455910212,
		municipalityId: 1900
	},
	{
		id: 5181,
		name: 'SAN MIGUEL',
		uta2020: '100700175000179',
		uta2010: '100700175000179',
		latitude: -29.458430802,
		longitude: -65.297489608,
		municipalityId: 1900
	},
	{
		id: 5182,
		name: 'SAN JOSE',
		uta2020: '100700175000176',
		uta2010: '100700175000176',
		latitude: -29.73066,
		longitude: -65.51798,
		municipalityId: 1900
	},
	{
		id: 5183,
		name: 'PASO DE LA ARENA',
		uta2020: '300849710000079',
		uta2010: '300849710000079',
		latitude: -31.753732175,
		longitude: -60.176489634,
		municipalityId: 1734
	},
	{
		id: 5184,
		name: 'CAMPO WINTER',
		uta2020: '220840259000016',
		uta2010: '220840259000016',
		latitude: -26.412480425,
		longitude: -59.325469963,
		municipalityId: 34
	},
	{
		id: 5185,
		name: 'CAMPO LA AURORA',
		uta2020: '220840259000010',
		uta2010: '220840259000010',
		latitude: -26.385219953,
		longitude: -59.020935814,
		municipalityId: 34
	},
	{
		id: 5186,
		name: 'EL SOMBRERITO',
		uta2020: '220840259000043',
		uta2010: '220840259000043',
		latitude: -26.381093979,
		longitude: -59.147697448,
		municipalityId: 34
	},
	{
		id: 5187,
		name: 'COLONIA SAN ISIDRO',
		uta2020: '220840259000031',
		uta2010: '220840259000031',
		latitude: -26.16923302,
		longitude: -59.60006314,
		municipalityId: 34
	},
	{
		id: 5188,
		name: 'LOTE 540',
		uta2020: '220840259000086',
		uta2010: '220840259000086',
		latitude: -26.547626562,
		longitude: -59.3338998,
		municipalityId: 34
	},
	{
		id: 5189,
		name: 'CAMPO PITTERI',
		uta2020: '220840259000014',
		uta2010: '220840259000014',
		latitude: -26.635245191,
		longitude: -59.409422078,
		municipalityId: 34
	},
	{
		id: 5190,
		name: 'PUERTO ZAPALLAR',
		uta2020: '220840259000096',
		uta2010: '220840259000096',
		latitude: -26.314904257,
		longitude: -59.384112622,
		municipalityId: 34
	},
	{
		id: 5191,
		name: 'TRES BANDERAS',
		uta2020: '220840259000107',
		uta2010: '220840259000107',
		latitude: -26.500420018,
		longitude: -59.384715779,
		municipalityId: 34
	},
	{
		id: 5192,
		name: 'LA PALMIRA',
		uta2020: '220840259000066',
		uta2010: '220840259000066',
		latitude: -26.48840223,
		longitude: -59.44129506,
		municipalityId: 34
	},
	{
		id: 5193,
		name: 'EL LUNAR',
		uta2020: '220840259000039',
		uta2010: '220840259000039',
		latitude: -26.37140109,
		longitude: -59.094467525,
		municipalityId: 34
	},
	{
		id: 5194,
		name: 'COLONIA ZAPALLAR NORTE',
		uta2020: '220840259000033',
		uta2010: '220840259000033',
		latitude: -26.458211796,
		longitude: -59.373260721,
		municipalityId: 34
	},
	{
		id: 5195,
		name: 'PUESTO EXPEDICION',
		uta2020: '220840259000097',
		uta2010: '220840259000097',
		latitude: -26.469310856,
		longitude: -58.905302241,
		municipalityId: 34
	},
	{
		id: 5196,
		name: 'LOTE 92',
		uta2020: '220840259000089',
		uta2010: '220840259000089',
		latitude: -26.461393179,
		longitude: -59.347661034,
		municipalityId: 34
	},
	{
		id: 5197,
		name: 'COLONIA OESTE',
		uta2020: '220840259000026',
		uta2010: '220840259000026',
		latitude: -26.447655347,
		longitude: -59.429120465,
		municipalityId: 34
	},
	{
		id: 5198,
		name: 'COSTA GUAYCURU',
		uta2020: '220840259000034',
		uta2010: '220840259000034',
		latitude: -26.593138151,
		longitude: -59.381773665,
		municipalityId: 34
	},
	{
		id: 5199,
		name: 'GENERAL JOSE DE SAN MARTIN',
		uta2020: '220840259020000',
		uta2010: '220840259020000',
		latitude: -26.534073062,
		longitude: -59.334711359,
		municipalityId: 34
	},
	{
		id: 5200,
		name: 'LEGUA 131',
		uta2020: '220840259000074',
		uta2010: '220840259000074',
		latitude: -26.578337063,
		longitude: -59.144146591,
		municipalityId: 34
	},
	{
		id: 5201,
		name: 'CAMPO ROFFO',
		uta2020: '220840259000015',
		uta2010: '220840259000015',
		latitude: -26.40264352,
		longitude: -59.377724861,
		municipalityId: 34
	},
	{
		id: 5202,
		name: 'LOTE 532',
		uta2020: '220840259000085',
		uta2010: '220840259000085',
		latitude: -26.545164663,
		longitude: -59.323882019,
		municipalityId: 34
	},
	{
		id: 5203,
		name: 'BUENA VISTA',
		uta2020: '220840259000003',
		uta2010: '220840259000003',
		latitude: -26.514810346,
		longitude: -59.225561265,
		municipalityId: 34
	},
	{
		id: 5204,
		name: 'SIETE ARBOLES',
		uta2020: '220840259000106',
		uta2010: '220840259000106',
		latitude: -26.423654114,
		longitude: -59.419226747,
		municipalityId: 34
	},
	{
		id: 5205,
		name: 'EL CORRENTOSO',
		uta2020: '220840259000037',
		uta2010: '220840259000037',
		latitude: -26.68765825,
		longitude: -59.25292352,
		municipalityId: 34
	},
	{
		id: 5206,
		name: 'COLONIA ESPERANZA',
		uta2020: '220840259000023',
		uta2010: '220840259000023',
		latitude: -26.52265358,
		longitude: -59.199352264,
		municipalityId: 34
	},
	{
		id: 5207,
		name: 'CAMPO BLANCO',
		uta2020: '220840259000009',
		uta2010: '220840259000009',
		latitude: -26.226759255,
		longitude: -59.44976354,
		municipalityId: 34
	},
	{
		id: 5208,
		name: 'CAMPO ARAOZ',
		uta2020: '220840259000007',
		uta2010: '220840259000007',
		latitude: -26.383862273,
		longitude: -59.215211184,
		municipalityId: 34
	},
	{
		id: 5209,
		name: 'LAGUNA LOBO',
		uta2020: '220840259000069',
		uta2010: '220840259000069',
		latitude: -26.48330003,
		longitude: -59.316699994,
		municipalityId: 34
	},
	{
		id: 5210,
		name: 'EL FISCALITO',
		uta2020: '220840259000038',
		uta2010: '220840259000038',
		latitude: -26.530079928,
		longitude: -59.285163681,
		municipalityId: 34
	},
	{
		id: 5211,
		name: 'COLONIA ALCALA',
		uta2020: '220840259000018',
		uta2010: '220840259000018',
		latitude: -26.280303473,
		longitude: -59.706019036,
		municipalityId: 34
	},
	{
		id: 5212,
		name: 'COLONIA SAN FRANCISCO',
		uta2020: '220840259000030',
		uta2010: '220840259000030',
		latitude: -26.179081,
		longitude: -59.58345012,
		municipalityId: 34
	},
	{
		id: 5213,
		name: 'LOTE 551',
		uta2020: '220840259000087',
		uta2010: '220840259000087',
		latitude: -26.548127766,
		longitude: -59.333520148,
		municipalityId: 34
	},
	{
		id: 5214,
		name: 'VILLA JARDIN',
		uta2020: '220840259000111',
		uta2010: '220840259000111',
		latitude: -26.680207611,
		longitude: -59.148593557,
		municipalityId: 34
	},
	{
		id: 5215,
		name: 'RINCON DEL RIO DE ORO',
		uta2020: '220840259000102',
		uta2010: '220840259000102',
		latitude: -26.534457479,
		longitude: -59.322056606,
		municipalityId: 34
	},
	{
		id: 5216,
		name: 'LOS CEDROS',
		uta2020: '141473043190002',
		uta2010: '141473043190002',
		latitude: -31.55717658,
		longitude: -64.402832148,
		municipalityId: 231
	},
	{
		id: 5217,
		name: 'COSTA DE MULAS',
		uta2020: '300429260000007',
		uta2010: '300429260000007',
		latitude: -30.368112262,
		longitude: -59.150675569,
		municipalityId: 1688
	},
	{
		id: 5218,
		name: 'MULAS GRANDES',
		uta2020: '300429260000023',
		uta2010: '300429260000023',
		latitude: -30.319211303,
		longitude: -59.061323542,
		municipalityId: 1688
	},
	{
		id: 5219,
		name: 'CORRALITO',
		uta2020: '141611435030000',
		uta2010: '141611435030000',
		latitude: -32.025257244,
		longitude: -64.193158893,
		municipalityId: 357
	},
	{
		id: 5220,
		name: 'BANDERA',
		uta2020: '860420049010000',
		uta2010: '860420049010000',
		latitude: -28.873512946,
		longitude: -62.169826238,
		municipalityId: 1487
	},
	{
		id: 5221,
		name: 'EL HOYO',
		uta2020: '260140021040000',
		uta2010: '260140021040000',
		latitude: -42.067966664,
		longitude: -71.520670837,
		municipalityId: 547
	},
	{
		id: 5222,
		name: 'RIO PRIMERO',
		uta2020: '141050938240000',
		uta2010: '141050938240000',
		latitude: -31.329183849,
		longitude: -63.621866727,
		municipalityId: 260
	},
	{
		id: 5223,
		name: 'JARAMILLO',
		uta2020: '780145014040000',
		uta2010: '780145014040000',
		latitude: -47.184703217,
		longitude: -67.145582198,
		municipalityId: 1524
	},
	{
		id: 5224,
		name: 'ANZOATEGUI',
		uta2020: '420140189010000',
		uta2010: '420140189010000',
		latitude: -38.963052677,
		longitude: -63.860888246,
		municipalityId: 1992
	},
	{
		id: 5225,
		name: 'GAVIOTAS',
		uta2020: '420140189000006',
		uta2010: '420140189000006',
		latitude: -38.943836212,
		longitude: -63.640460968,
		municipalityId: 1992
	},
	{
		id: 5226,
		name: 'LA ADELA',
		uta2020: '420140189020000',
		uta2010: '420140189020000',
		latitude: -38.973961851,
		longitude: -64.089316695,
		municipalityId: 1992
	},
	{
		id: 5227,
		name: 'OBISPO TREJO',
		uta2020: '141050924200000',
		uta2010: '141050924200000',
		latitude: -30.781192449,
		longitude: -63.413049434,
		municipalityId: 261
	},
	{
		id: 5228,
		name: 'CAMILO ALDAO',
		uta2020: '140630490030000',
		uta2010: '140630490030000',
		latitude: -33.123740826,
		longitude: -62.09659546,
		municipalityId: 191
	},
	{
		id: 5229,
		name: 'USPALLATA',
		uta2020: '500490049110000',
		uta2010: '500490049110000',
		latitude: -32.595534534,
		longitude: -69.358205374,
		municipalityId: 1503
	},
	{
		id: 5230,
		name: 'LA UNION',
		uta2020: '500490049000112',
		uta2010: '500490049000112',
		latitude: -32.790100098,
		longitude: -68.836097717,
		municipalityId: 1503
	},
	{
		id: 5231,
		name: 'LA CIENEGUITA',
		uta2020: '500490049050010',
		uta2010: '500490049050010',
		latitude: -32.844458047,
		longitude: -68.86462065,
		municipalityId: 1503
	},
	{
		id: 5232,
		name: 'EL ZAPALLAR',
		uta2020: '500490049050009',
		uta2010: '500490049050009',
		latitude: -32.855553771,
		longitude: -68.828031775,
		municipalityId: 1503
	},
	{
		id: 5233,
		name: 'HORNITO DEL GRINGO',
		uta2020: '500490049000099',
		uta2010: '500490049000099',
		latitude: -32.762447357,
		longitude: -68.83467102,
		municipalityId: 1503
	},
	{
		id: 5234,
		name: 'PUENTE DEL INCA',
		uta2020: '500490049090000',
		uta2010: '500490049090000',
		latitude: -32.819883558,
		longitude: -69.92500205,
		municipalityId: 1503
	},
	{
		id: 5235,
		name: 'LAS HERAS',
		uta2020: '500490049050002',
		uta2010: '500490049050002',
		latitude: -32.849923688,
		longitude: -68.845256733,
		municipalityId: 1503
	},
	{
		id: 5236,
		name: 'EL CHALLAO',
		uta2020: '500490049050005',
		uta2010: '500490049050005',
		latitude: -32.818750713,
		longitude: -68.916432067,
		municipalityId: 1503
	},
	{
		id: 5237,
		name: 'CAPDEVILA',
		uta2020: '500490049050001',
		uta2010: '500490049050001',
		latitude: -32.724877929,
		longitude: -68.908558486,
		municipalityId: 1503
	},
	{
		id: 5238,
		name: 'VILLAVICENCIO',
		uta2020: '500490049000175',
		uta2010: '500490049000175',
		latitude: -32.592967987,
		longitude: -68.978942871,
		municipalityId: 1503
	},
	{
		id: 5239,
		name: 'LA HULLERA',
		uta2020: '500490049000108',
		uta2010: '500490049000108',
		latitude: -32.704917908,
		longitude: -68.750640869,
		municipalityId: 1503
	},
	{
		id: 5240,
		name: 'JOCOLI',
		uta2020: '500490049030000',
		uta2010: '500490049030000',
		latitude: -32.584319092,
		longitude: -68.680808814,
		municipalityId: 1503
	},
	{
		id: 5241,
		name: 'EL PUESTITO',
		uta2020: '500490049000089',
		uta2010: '500490049000089',
		latitude: -32.240089416,
		longitude: -69.455314636,
		municipalityId: 1503
	},
	{
		id: 5242,
		name: 'GUIDO',
		uta2020: '500490049000098',
		uta2010: '500490049000098',
		latitude: -32.846069336,
		longitude: -69.263496399,
		municipalityId: 1503
	},
	{
		id: 5243,
		name: 'LAS CORTADERAS',
		uta2020: '500490049000114',
		uta2010: '500490049000114',
		latitude: -32.316188812,
		longitude: -69.15512085,
		municipalityId: 1503
	},
	{
		id: 5244,
		name: 'EL PLUMERILLO',
		uta2020: '500490049050007',
		uta2010: '500490049050007',
		latitude: -32.846835863,
		longitude: -68.819147453,
		municipalityId: 1503
	},
	{
		id: 5245,
		name: 'EL ALGARROBAL',
		uta2020: '500490049050003',
		uta2010: '500490049050003',
		latitude: -32.832748754,
		longitude: -68.795717901,
		municipalityId: 1503
	},
	{
		id: 5246,
		name: 'PANQUEHUA',
		uta2020: '500490049050011',
		uta2010: '500490049050011',
		latitude: -32.834923643,
		longitude: -68.845165201,
		municipalityId: 1503
	},
	{
		id: 5247,
		name: 'ESPEJO',
		uta2020: '500490049000092',
		uta2010: '500490049000092',
		latitude: -32.826026916,
		longitude: -68.815826416,
		municipalityId: 1503
	},
	{
		id: 5248,
		name: 'POLVAREDAS',
		uta2020: '500490049080000',
		uta2010: '500490049080000',
		latitude: -32.819038481,
		longitude: -69.709734655,
		municipalityId: 1503
	},
	{
		id: 5249,
		name: 'BLANCO ENCALADA',
		uta2020: '500490049010000',
		uta2010: '500490049010000',
		latitude: -33.035548538,
		longitude: -69.00653159,
		municipalityId: 1503
	},
	{
		id: 5250,
		name: 'LA CASA DEL TIGRE',
		uta2020: '500490049000104',
		uta2010: '500490049000104',
		latitude: -32.150112152,
		longitude: -69.422767639,
		municipalityId: 1503
	},
	{
		id: 5251,
		name: 'PUNTA DE VACAS',
		uta2020: '500490049100000',
		uta2010: '500490049100000',
		latitude: -32.848806359,
		longitude: -69.776300703,
		municipalityId: 1503
	},
	{
		id: 5252,
		name: 'EL RESGUARDO',
		uta2020: '500490049050008',
		uta2010: '500490049050008',
		latitude: -32.765049989,
		longitude: -68.791304728,
		municipalityId: 1503
	},
	{
		id: 5253,
		name: 'LOS PENITENTES',
		uta2020: '500490049060000',
		uta2010: '500490049060000',
		latitude: -32.836950427,
		longitude: -69.85392129,
		municipalityId: 1503
	},
	{
		id: 5254,
		name: 'LAS CUEVAS',
		uta2020: '500490049040000',
		uta2010: '500490049040000',
		latitude: -32.807961944,
		longitude: -70.085182427,
		municipalityId: 1503
	},
	{
		id: 5255,
		name: 'SALAGASTA',
		uta2020: '500490049000154',
		uta2010: '500490049000154',
		latitude: -32.598167419,
		longitude: -68.826805115,
		municipalityId: 1503
	},
	{
		id: 5256,
		name: 'SIERRAS DE ENCALADA',
		uta2020: '500490049050012',
		uta2010: '500490049050012',
		latitude: -32.986946029,
		longitude: -68.948509177,
		municipalityId: 1503
	},
	{
		id: 5257,
		name: 'EL BORBOLLON',
		uta2020: '500490049050004',
		uta2010: '500490049050004',
		latitude: -32.806920801,
		longitude: -68.777286498,
		municipalityId: 1503
	},
	{
		id: 5258,
		name: 'SANTA ELENA',
		uta2020: '500490049000161',
		uta2010: '500490049000161',
		latitude: -32.649475098,
		longitude: -69.20350647,
		municipalityId: 1503
	},
	{
		id: 5259,
		name: 'ZURI POZO',
		uta2020: '140282140000134',
		uta2010: '140282140000134',
		latitude: -30.7758992,
		longitude: -65.0684404,
		municipalityId: 469
	},
	{
		id: 5260,
		name: 'EL QUEBRACHAL',
		uta2020: '140282140000037',
		uta2010: '140282140000037',
		latitude: -30.807524505,
		longitude: -65.033433621,
		municipalityId: 469
	},
	{
		id: 5261,
		name: 'DOMINGUITO',
		uta2020: '140282140000023',
		uta2010: '140282140000023',
		latitude: -30.792236328,
		longitude: -65.062294006,
		municipalityId: 469
	},
	{
		id: 5262,
		name: 'BAÑADO DE SOTO',
		uta2020: '140282140020000',
		uta2010: '140282140020000',
		latitude: -30.804435787,
		longitude: -65.043662019,
		municipalityId: 469
	},
	{
		id: 5263,
		name: 'VILLA DE PRAGA',
		uta2020: '740636322080000',
		uta2010: '740636322080000',
		latitude: -32.533964078,
		longitude: -65.647704279,
		municipalityId: 1092
	},
	{
		id: 5264,
		name: 'EL PARAISO',
		uta2020: '740636322000061',
		uta2010: '740636322000061',
		latitude: -32.57970728,
		longitude: -65.68763951,
		municipalityId: 1092
	},
	{
		id: 5265,
		name: 'LA PUERTA',
		uta2020: '740636322000105',
		uta2010: '740636322000105',
		latitude: -32.494728088,
		longitude: -65.698020935,
		municipalityId: 1092
	},
	{
		id: 5266,
		name: '6A. SECCION',
		uta2020: '500070007010006',
		uta2010: '500070007010006',
		latitude: -32.869913563,
		longitude: -68.862351111,
		municipalityId: 1504
	},
	{
		id: 5267,
		name: '3A. SECCION',
		uta2020: '500070007010003',
		uta2010: '500070007010003',
		latitude: -32.885223417,
		longitude: -68.844560651,
		municipalityId: 1504
	},
	{
		id: 5268,
		name: '8A. SECCION',
		uta2020: '500070007010008',
		uta2010: '500070007010008',
		latitude: -32.866316452,
		longitude: -68.88305727,
		municipalityId: 1504
	},
	{
		id: 5269,
		name: '5A. SECCION',
		uta2020: '500070007010005',
		uta2010: '500070007010005',
		latitude: -32.889712646,
		longitude: -68.867166084,
		municipalityId: 1504
	},
	{
		id: 5270,
		name: '1A. SECCION',
		uta2020: '500070007010001',
		uta2010: '500070007010001',
		latitude: -32.877493847,
		longitude: -68.852787068,
		municipalityId: 1504
	},
	{
		id: 5271,
		name: '2A. SECCION',
		uta2020: '500070007010002',
		uta2010: '500070007010002',
		latitude: -32.89393664,
		longitude: -68.85489899,
		municipalityId: 1504
	},
	{
		id: 5272,
		name: '11A. SECCION',
		uta2020: '500070007010011',
		uta2010: '500070007010011',
		latitude: -32.888501521,
		longitude: -68.905249588,
		municipalityId: 1504
	},
	{
		id: 5273,
		name: '10A. SECCION',
		uta2020: '500070007010010',
		uta2010: '500070007010010',
		latitude: -32.876292613,
		longitude: -68.935890793,
		municipalityId: 1504
	},
	{
		id: 5274,
		name: '7A. SECCION',
		uta2020: '500070007010007',
		uta2010: '500070007010007',
		latitude: -32.873744866,
		longitude: -68.875869922,
		municipalityId: 1504
	},
	{
		id: 5275,
		name: '9A. SECCION',
		uta2020: '500070007010009',
		uta2010: '500070007010009',
		latitude: -32.88882906,
		longitude: -68.894343543,
		municipalityId: 1504
	},
	{
		id: 5276,
		name: '4A. SECCION',
		uta2020: '500070007010004',
		uta2010: '500070007010004',
		latitude: -32.868249251,
		longitude: -68.842426668,
		municipalityId: 1504
	},
	{
		id: 5277,
		name: 'SAN PABLO',
		uta2020: '740286091060000',
		uta2010: '740286091060000',
		latitude: -32.658342389,
		longitude: -65.308092041,
		municipalityId: 1123
	},
	{
		id: 5278,
		name: 'SAN AGUSTIN',
		uta2020: '820703197220000',
		uta2010: '820703197220000',
		latitude: -31.684777887,
		longitude: -60.941314745,
		municipalityId: 875
	},
	{
		id: 5279,
		name: 'CAMPO PERIOTTI',
		uta2020: '820703197000008',
		uta2010: '820703197000008',
		latitude: -31.7143693,
		longitude: -60.9912196,
		municipalityId: 875
	},
	{
		id: 5280,
		name: 'BAJO LAS TUNAS',
		uta2020: '820703197000003',
		uta2010: '820703197000003',
		latitude: -31.6618986,
		longitude: -61.0112577,
		municipalityId: 875
	},
	{
		id: 5281,
		name: 'LOS TRES REYES',
		uta2020: '820703197000032',
		uta2010: '820703197000032',
		latitude: -31.6376205,
		longitude: -60.9702398,
		municipalityId: 875
	},
	{
		id: 5282,
		name: 'RAFAEL GARCIA',
		uta2020: '141473057240000',
		uta2010: '141473057240000',
		latitude: -31.646537395,
		longitude: -64.258478773,
		municipalityId: 232
	},
	{
		id: 5283,
		name: 'LAS TUNAS',
		uta2020: '100980217000038',
		uta2010: '100980217000038',
		latitude: -28.152036469,
		longitude: -65.375723406,
		municipalityId: 1913
	},
	{
		id: 5284,
		name: 'DOS POCITOS',
		uta2020: '100980217000014',
		uta2010: '100980217000014',
		latitude: -28.07132,
		longitude: -65.26508,
		municipalityId: 1913
	},
	{
		id: 5285,
		name: 'POZO DEL BAJO',
		uta2020: '100980217000054',
		uta2010: '100980217000054',
		latitude: -28.02359,
		longitude: -65.23971,
		municipalityId: 1913
	},
	{
		id: 5286,
		name: 'LAS CAÑAS',
		uta2020: '100980217030000',
		uta2010: '100980217030000',
		latitude: -28.209869602,
		longitude: -65.223016705,
		municipalityId: 1913
	},
	{
		id: 5287,
		name: 'PUESTO DEL MEDIO',
		uta2020: '100980217000058',
		uta2010: '100980217000058',
		latitude: -28.10432541,
		longitude: -65.237367625,
		municipalityId: 1913
	},
	{
		id: 5288,
		name: 'SAN PEDRO',
		uta2020: '100980217070000',
		uta2010: '100980217070000',
		latitude: -27.960848588,
		longitude: -65.168007696,
		municipalityId: 1913
	},
	{
		id: 5289,
		name: 'LAS HIGUERITAS',
		uta2020: '100980217000035',
		uta2010: '100980217000035',
		latitude: -28.309684339,
		longitude: -65.168008978,
		municipalityId: 1913
	},
	{
		id: 5290,
		name: 'LAVALLE',
		uta2020: '100980217040000',
		uta2010: '100980217040000',
		latitude: -28.194633813,
		longitude: -65.113780627,
		municipalityId: 1913
	},
	{
		id: 5291,
		name: 'SALAUCA',
		uta2020: '100980217000061',
		uta2010: '100980217000061',
		latitude: -28.178602219,
		longitude: -65.269134522,
		municipalityId: 1913
	},
	{
		id: 5292,
		name: 'BAÑADO DE OVANTA',
		uta2020: '100980217020000',
		uta2010: '100980217020000',
		latitude: -28.103400336,
		longitude: -65.307684605,
		municipalityId: 1913
	},
	{
		id: 5293,
		name: 'CORTADERAS',
		uta2020: '100980217000012',
		uta2010: '100980217000012',
		latitude: -28.276501473,
		longitude: -65.170783459,
		municipalityId: 1913
	},
	{
		id: 5294,
		name: 'POZO DEL CAMPO',
		uta2020: '100980217000055',
		uta2010: '100980217000055',
		latitude: -28.03131808,
		longitude: -65.316386259,
		municipalityId: 1913
	},
	{
		id: 5295,
		name: 'AMPOLLA',
		uta2020: '100980217000005',
		uta2010: '100980217000005',
		latitude: -28.167754495,
		longitude: -65.31532439,
		municipalityId: 1913
	},
	{
		id: 5296,
		name: 'ALTA GRACIA',
		uta2020: '100980217000003',
		uta2010: '100980217000003',
		latitude: -28.045031938,
		longitude: -65.278456151,
		municipalityId: 1913
	},
	{
		id: 5297,
		name: 'CAMPO ALEGRE',
		uta2020: '100980217000008',
		uta2010: '100980217000008',
		latitude: -27.949533462,
		longitude: -65.252433777,
		municipalityId: 1913
	},
	{
		id: 5298,
		name: 'EL QUEBRACHITO',
		uta2020: '100980217000021',
		uta2010: '100980217000021',
		latitude: -28.156719257,
		longitude: -65.225491527,
		municipalityId: 1913
	},
	{
		id: 5299,
		name: 'PUEBLO GENERAL BELGRANO',
		uta2020: '300560199100000',
		uta2010: '300560199100000',
		latitude: -33.016288846,
		longitude: -58.47604376,
		municipalityId: 1630
	},
	{
		id: 5300,
		name: 'CAMPO NOVARINO',
		uta2020: '140630000000018',
		uta2010: '140630000000018',
		latitude: -33.5382835,
		longitude: -62.6366007,
		municipalityId: 192
	},
	{
		id: 5301,
		name: 'COLONIA MOLLES',
		uta2020: '140630000000039',
		uta2010: '140630000000039',
		latitude: -32.441089616,
		longitude: -62.180772736,
		municipalityId: 192
	},
	{
		id: 5302,
		name: 'COLONIA EL OVERO',
		uta2020: '140630000000026',
		uta2010: '140630000000026',
		latitude: -32.258109836,
		longitude: -62.33421692,
		municipalityId: 192
	},
	{
		id: 5303,
		name: 'CAMPO LAS LONJAS',
		uta2020: '140630000000013',
		uta2010: '140630000000013',
		latitude: -33.073930929,
		longitude: -62.386367628,
		municipalityId: 192
	},
	{
		id: 5304,
		name: 'CAMPO SANTA FLORINDA',
		uta2020: '140630000000019',
		uta2010: '140630000000019',
		latitude: -33.201196604,
		longitude: -62.469620758,
		municipalityId: 192
	},
	{
		id: 5305,
		name: 'COLONIA MAIZALES-LEONES',
		uta2020: '140630000000036',
		uta2010: '140630000000036',
		latitude: -32.533957244,
		longitude: -62.194537888,
		municipalityId: 192
	},
	{
		id: 5306,
		name: 'COLONIA LOS VASCOS',
		uta2020: '140630000000032',
		uta2010: '140630000000032',
		latitude: -33.059149742,
		longitude: -61.941099114,
		municipalityId: 192
	},
	{
		id: 5307,
		name: 'COLONIA ERMILA',
		uta2020: '140630000000028',
		uta2010: '140630000000028',
		latitude: -32.541760228,
		longitude: -62.342395402,
		municipalityId: 192
	},
	{
		id: 5308,
		name: 'CAMPO LABORDE',
		uta2020: '140630000000012',
		uta2010: '140630000000012',
		latitude: -33.0384723,
		longitude: -62.0509625,
		municipalityId: 192
	},
	{
		id: 5309,
		name: 'LA CAROLINA',
		uta2020: '140630000000049',
		uta2010: '140630000000049',
		latitude: -33.7165451,
		longitude: -62.7053062,
		municipalityId: 192
	},
	{
		id: 5310,
		name: 'COLONIA ARMANDO',
		uta2020: '140630000000021',
		uta2010: '140630000000021',
		latitude: -32.724096678,
		longitude: -62.233663248,
		municipalityId: 192
	},
	{
		id: 5311,
		name: 'COLONIA EL CHAJA',
		uta2020: '140630000000024',
		uta2010: '140630000000024',
		latitude: -32.739471963,
		longitude: -62.364866012,
		municipalityId: 192
	},
	{
		id: 5312,
		name: 'COLONIA GARIBALDI',
		uta2020: '140630000000029',
		uta2010: '140630000000029',
		latitude: -32.801925659,
		longitude: -62.013820648,
		municipalityId: 192
	},
	{
		id: 5313,
		name: 'CAMPO EVANGELIST',
		uta2020: '140630000000006',
		uta2010: '140630000000006',
		latitude: -33.105243084,
		longitude: -62.490660379,
		municipalityId: 192
	},
	{
		id: 5314,
		name: 'CAMPO NATA',
		uta2020: '140630000000017',
		uta2010: '140630000000017',
		latitude: -33.166627388,
		longitude: -62.419257737,
		municipalityId: 192
	},
	{
		id: 5315,
		name: 'CAMPO LA ALBINA',
		uta2020: '140630000000010',
		uta2010: '140630000000010',
		latitude: -32.760215866,
		longitude: -62.032490091,
		municipalityId: 192
	},
	{
		id: 5316,
		name: 'COLONIA EL DORADO',
		uta2020: '140630000000025',
		uta2010: '140630000000025',
		latitude: -33.862622,
		longitude: -62.7076319,
		municipalityId: 192
	},
	{
		id: 5317,
		name: 'COLONIA CALCHAQUI',
		uta2020: '140630000000022',
		uta2010: '140630000000022',
		latitude: -32.807411612,
		longitude: -62.172626983,
		municipalityId: 192
	},
	{
		id: 5318,
		name: 'COLONIA CARLOS CASADO',
		uta2020: '140630000000023',
		uta2010: '140630000000023',
		latitude: -32.670162669,
		longitude: -61.957814726,
		municipalityId: 192
	},
	{
		id: 5319,
		name: 'CAMPO GAUCHO NUEVO',
		uta2020: '140630000000007',
		uta2010: '140630000000007',
		latitude: -32.843455927,
		longitude: -61.82746389,
		municipalityId: 192
	},
	{
		id: 5320,
		name: 'COLONIA LUIS VELEZ',
		uta2020: '140630000000033',
		uta2010: '140630000000033',
		latitude: -32.509523843,
		longitude: -62.277877989,
		municipalityId: 192
	},
	{
		id: 5321,
		name: 'COLONIA REGERNSBURGER',
		uta2020: '140630000000040',
		uta2010: '140630000000040',
		latitude: -33.324472667,
		longitude: -62.559423377,
		municipalityId: 192
	},
	{
		id: 5322,
		name: 'BARRIO LA FORTUNA',
		uta2020: '140630000000003',
		uta2010: '140630000000003',
		latitude: -32.62947464,
		longitude: -62.309131622,
		municipalityId: 192
	},
	{
		id: 5323,
		name: 'CAMPO CARLITOS',
		uta2020: '140630000000004',
		uta2010: '140630000000004',
		latitude: -33.209205827,
		longitude: -62.049694783,
		municipalityId: 192
	},
	{
		id: 5324,
		name: 'COLONIA JERUSALEN',
		uta2020: '140630000000030',
		uta2010: '140630000000030',
		latitude: -32.833111229,
		longitude: -62.177436668,
		municipalityId: 192
	},
	{
		id: 5325,
		name: 'CAMPO GERBAUDO',
		uta2020: '140630000000008',
		uta2010: '140630000000008',
		latitude: -33.089801204,
		longitude: -62.56395458,
		municipalityId: 192
	},
	{
		id: 5326,
		name: 'COLONIA VEINTICINCO',
		uta2020: '140630000080000',
		uta2010: '140630000080000',
		latitude: -32.888367929,
		longitude: -61.934782591,
		municipalityId: 192
	},
	{
		id: 5327,
		name: 'CAMPO EL ZORRO',
		uta2020: '140630000000005',
		uta2010: '140630000000005',
		latitude: -33.834944075,
		longitude: -62.534097694,
		municipalityId: 192
	},
	{
		id: 5328,
		name: 'COLONIA MACKEY',
		uta2020: '140630000000035',
		uta2010: '140630000000035',
		latitude: -33.548243609,
		longitude: -62.414542909,
		municipalityId: 192
	},
	{
		id: 5329,
		name: 'BALNEARIA',
		uta2020: '141401183040000',
		uta2010: '141401183040000',
		latitude: -31.01070757,
		longitude: -62.667104401,
		municipalityId: 408
	},
	{
		id: 5330,
		name: 'COLONIA DOLORES',
		uta2020: '821123876030000',
		uta2010: '821123876030000',
		latitude: -30.383682587,
		longitude: -60.330725488,
		municipalityId: 1018
	},
	{
		id: 5331,
		name: 'GABOTO',
		uta2020: '821053778120000',
		uta2010: '821053778120000',
		latitude: -32.434376082,
		longitude: -60.818539094,
		municipalityId: 983
	},
	{
		id: 5332,
		name: 'BALNEARIO MONJE',
		uta2020: '821053778020000',
		uta2010: '821053778020000',
		latitude: -32.334956087,
		longitude: -60.876052254,
		municipalityId: 983
	},
	{
		id: 5333,
		name: 'COLONIA ALMADA',
		uta2020: '141611428020000',
		uta2010: '141611428020000',
		latitude: -32.033345653,
		longitude: -63.862884693,
		municipalityId: 358
	},
	{
		id: 5334,
		name: 'BAJADA VIEJA',
		uta2020: '581050224000004',
		uta2010: '581050224000004',
		latitude: -38.478192878,
		longitude: -70.085232529,
		municipalityId: 2405
	},
	{
		id: 5335,
		name: 'BAJADA DEL AGRIO',
		uta2020: '581050224010000',
		uta2010: '581050224010000',
		latitude: -38.407979858,
		longitude: -70.027678599,
		municipalityId: 2405
	},
	{
		id: 5336,
		name: 'AGRIO DEL MEDIO',
		uta2020: '581050224000001',
		uta2010: '581050224000001',
		latitude: -38.34971979,
		longitude: -69.939951421,
		municipalityId: 2405
	},
	{
		id: 5337,
		name: 'LA JOSEFINA',
		uta2020: '821334198000072',
		uta2010: '821334198000072',
		latitude: -28.749804529,
		longitude: -59.86602197,
		municipalityId: 1004
	},
	{
		id: 5338,
		name: 'CAMPO MARIA ROSA',
		uta2020: '821334198000010',
		uta2010: '821334198000010',
		latitude: -28.5623895,
		longitude: -59.8551627,
		municipalityId: 1004
	},
	{
		id: 5339,
		name: 'TARTAGAL',
		uta2020: '821334198150000',
		uta2010: '821334198150000',
		latitude: -28.67221045,
		longitude: -59.846819528,
		municipalityId: 1004
	},
	{
		id: 5340,
		name: 'CAMPO DEAN',
		uta2020: '821334198000005',
		uta2010: '821334198000005',
		latitude: -28.804608306,
		longitude: -59.884987511,
		municipalityId: 1004
	},
	{
		id: 5341,
		name: 'EL TAJAMAR',
		uta2020: '821334198000036',
		uta2010: '821334198000036',
		latitude: -28.6708545,
		longitude: -59.8472567,
		municipalityId: 1004
	},
	{
		id: 5342,
		name: 'DON CRISTOBAL',
		uta2020: '300779550030000',
		uta2010: '300779550030000',
		latitude: -32.075259405,
		longitude: -59.99432302,
		municipalityId: 1706
	},
	{
		id: 5343,
		name: 'LA FLORIDA',
		uta2020: '740216056050000',
		uta2010: '740216056050000',
		latitude: -33.116758725,
		longitude: -66.002009002,
		municipalityId: 1103
	},
	{
		id: 5344,
		name: 'LAS MERCEDES',
		uta2020: '340140000000078',
		uta2010: '340140000000078',
		latitude: -25.906227111,
		longitude: -58.195747378,
		municipalityId: 2284
	},
	{
		id: 5345,
		name: 'SANTA MARIA',
		uta2020: '340140000000136',
		uta2010: '340140000000136',
		latitude: -26.006465911,
		longitude: -58.018901829,
		municipalityId: 2284
	},
	{
		id: 5346,
		name: 'LA ESPERANZA',
		uta2020: '340140000000069',
		uta2010: '340140000000069',
		latitude: -25.743797302,
		longitude: -58.397117616,
		municipalityId: 2284
	},
	{
		id: 5347,
		name: 'LAS PALMAS',
		uta2020: '340140000000080',
		uta2010: '340140000000080',
		latitude: -25.966880798,
		longitude: -58.582019807,
		municipalityId: 2284
	},
	{
		id: 5348,
		name: 'COLONIA TRES MARIAS',
		uta2020: '340140000000024',
		uta2010: '340140000000024',
		latitude: -26.335109999,
		longitude: -58.208760005,
		municipalityId: 2284
	},
	{
		id: 5349,
		name: 'LOMA CLAVEL',
		uta2020: '340140000000081',
		uta2010: '340140000000081',
		latitude: -25.784608061,
		longitude: -58.811995106,
		municipalityId: 2284
	},
	{
		id: 5350,
		name: 'EL TRIANGULO',
		uta2020: '340140000000037',
		uta2010: '340140000000037',
		latitude: -25.933748245,
		longitude: -58.09322739,
		municipalityId: 2284
	},
	{
		id: 5351,
		name: 'SAN ALBERTO',
		uta2020: '340140000000119',
		uta2010: '340140000000119',
		latitude: -25.755048751,
		longitude: -57.864120488,
		municipalityId: 2284
	},
	{
		id: 5352,
		name: 'SAN NICOLAS',
		uta2020: '340140000000131',
		uta2010: '340140000000131',
		latitude: -25.605772018,
		longitude: -58.219177248,
		municipalityId: 2284
	},
	{
		id: 5353,
		name: 'ZANIN',
		uta2020: '340140000000155',
		uta2010: '340140000000155',
		latitude: -26.037647247,
		longitude: -58.365497591,
		municipalityId: 2284
	},
	{
		id: 5354,
		name: 'FRANCESA CUE',
		uta2020: '340140000000050',
		uta2010: '340140000000050',
		latitude: -25.968587875,
		longitude: -57.964176182,
		municipalityId: 2284
	},
	{
		id: 5355,
		name: 'ESPERANZA',
		uta2020: '340140000000039',
		uta2010: '340140000000039',
		latitude: -25.59244728,
		longitude: -58.312061312,
		municipalityId: 2284
	},
	{
		id: 5356,
		name: 'LA AURORA',
		uta2020: '340140000000067',
		uta2010: '340140000000067',
		latitude: -25.701250076,
		longitude: -58.514373779,
		municipalityId: 2284
	},
	{
		id: 5357,
		name: 'AGUA DULCE',
		uta2020: '340140000000003',
		uta2010: '340140000000003',
		latitude: -25.738264083,
		longitude: -57.920059208,
		municipalityId: 2284
	},
	{
		id: 5358,
		name: 'COLONIA PRESIDENTE URIBURU',
		uta2020: '340140000000022',
		uta2010: '340140000000022',
		latitude: -26.275159999,
		longitude: -58.235230005,
		municipalityId: 2284
	},
	{
		id: 5359,
		name: 'SANTA ELENA',
		uta2020: '340140000000135',
		uta2010: '340140000000135',
		latitude: -25.84220314,
		longitude: -57.976238255,
		municipalityId: 2284
	},
	{
		id: 5360,
		name: 'SANTA CATALINA',
		uta2020: '340140000000134',
		uta2010: '340140000000134',
		latitude: -25.841011047,
		longitude: -57.899475102,
		municipalityId: 2284
	},
	{
		id: 5361,
		name: 'TRES ESQUINAS',
		uta2020: '340140000000147',
		uta2010: '340140000000147',
		latitude: -25.739404678,
		longitude: -57.981208805,
		municipalityId: 2284
	},
	{
		id: 5362,
		name: 'LA QUERENCIA',
		uta2020: '340140000000075',
		uta2010: '340140000000075',
		latitude: -26.08719635,
		longitude: -58.193004611,
		municipalityId: 2284
	},
	{
		id: 5363,
		name: 'PUENTE SAN HILARIO',
		uta2020: '340140000000109',
		uta2010: '340140000000109',
		latitude: -26.21976089,
		longitude: -58.28225898,
		municipalityId: 2284
	},
	{
		id: 5364,
		name: 'SAN JUAN',
		uta2020: '340140000000127',
		uta2010: '340140000000127',
		latitude: -26.193670273,
		longitude: -58.4486084,
		municipalityId: 2284
	},
	{
		id: 5365,
		name: 'COLONIA PRESIDENTE YRIGOYEN',
		uta2020: '340140000000023',
		uta2010: '340140000000023',
		latitude: -26.175242882,
		longitude: -58.832339498,
		municipalityId: 2284
	},
	{
		id: 5366,
		name: 'SAN LUIS',
		uta2020: '340140000000128',
		uta2010: '340140000000128',
		latitude: -25.836975097,
		longitude: -57.998779301,
		municipalityId: 2284
	},
	{
		id: 5367,
		name: 'MAGLIETTI',
		uta2020: '340140000000087',
		uta2010: '340140000000087',
		latitude: -25.945083618,
		longitude: -58.494052888,
		municipalityId: 2284
	},
	{
		id: 5368,
		name: 'EL OMBU',
		uta2020: '340140000000032',
		uta2010: '340140000000032',
		latitude: -26.059947967,
		longitude: -58.872814179,
		municipalityId: 2284
	},
	{
		id: 5369,
		name: 'COLONIA ITUZAINGO',
		uta2020: '340140000000020',
		uta2010: '340140000000020',
		latitude: -26.14289565,
		longitude: -58.7200338,
		municipalityId: 2284
	},
	{
		id: 5370,
		name: 'MARIA LUISA',
		uta2020: '340140000000088',
		uta2010: '340140000000088',
		latitude: -25.944711685,
		longitude: -58.303550722,
		municipalityId: 2284
	},
	{
		id: 5371,
		name: 'EL PERDIDO',
		uta2020: '340140000000034',
		uta2010: '340140000000034',
		latitude: -25.903701782,
		longitude: -58.404430391,
		municipalityId: 2284
	},
	{
		id: 5372,
		name: 'ISLA 25 DE MAYO',
		uta2020: '340140000000057',
		uta2010: '340140000000057',
		latitude: -25.78573035,
		longitude: -57.81995419,
		municipalityId: 2284
	},
	{
		id: 5373,
		name: 'SAN MARTIN',
		uta2020: '340140000000129',
		uta2010: '340140000000129',
		latitude: -25.981342315,
		longitude: -58.672344208,
		municipalityId: 2284
	},
	{
		id: 5374,
		name: 'GUAYCOLEC',
		uta2020: '340140000000053',
		uta2010: '340140000000053',
		latitude: -25.98752165,
		longitude: -58.17080364,
		municipalityId: 2284
	},
	{
		id: 5375,
		name: 'SAN CARLOS',
		uta2020: '340140000000121',
		uta2010: '340140000000121',
		latitude: -25.69490242,
		longitude: -58.066287997,
		municipalityId: 2284
	},
	{
		id: 5376,
		name: 'SAN PEDRO',
		uta2020: '340140000000133',
		uta2010: '340140000000133',
		latitude: -25.980226516,
		longitude: -58.460361482,
		municipalityId: 2284
	},
	{
		id: 5377,
		name: 'EL PELIGRO',
		uta2020: '340140000000033',
		uta2010: '340140000000033',
		latitude: -25.787647247,
		longitude: -58.132438662,
		municipalityId: 2284
	},
	{
		id: 5378,
		name: 'SOLEDAD',
		uta2020: '340140000000140',
		uta2010: '340140000000140',
		latitude: -25.592992782,
		longitude: -58.128669741,
		municipalityId: 2284
	},
	{
		id: 5379,
		name: 'YAGUARETE',
		uta2020: '340140000000154',
		uta2010: '340140000000154',
		latitude: -25.850894928,
		longitude: -58.335483553,
		municipalityId: 2284
	},
	{
		id: 5380,
		name: 'COLONIA DALMACIA',
		uta2020: '340140000000018',
		uta2010: '340140000000018',
		latitude: -25.8576045,
		longitude: -57.90649826,
		municipalityId: 2284
	},
	{
		id: 5381,
		name: 'SAN FELIPE',
		uta2020: '340140000000123',
		uta2010: '340140000000123',
		latitude: -25.886795044,
		longitude: -58.452957155,
		municipalityId: 2284
	},
	{
		id: 5382,
		name: 'BANCO LA EMILIA',
		uta2020: '340140000000006',
		uta2010: '340140000000006',
		latitude: -25.988484424,
		longitude: -57.865845273,
		municipalityId: 2284
	},
	{
		id: 5383,
		name: 'PUERTO ALGARROBO',
		uta2020: '300709485000097',
		uta2010: '300709485000097',
		latitude: -31.110953745,
		longitude: -59.846725465,
		municipalityId: 1585
	},
	{
		id: 5384,
		name: 'COLONIA SAN LUIS',
		uta2020: '300709485000033',
		uta2010: '300709485000033',
		latitude: -31.213495857,
		longitude: -59.808901208,
		municipalityId: 1585
	},
	{
		id: 5385,
		name: 'PASO POTRILLO',
		uta2020: '300709485000090',
		uta2010: '300709485000090',
		latitude: -31.14810462,
		longitude: -59.78720581,
		municipalityId: 1585
	},
	{
		id: 5386,
		name: 'LOS PALMARES',
		uta2020: '221400413000039',
		uta2010: '221400413000039',
		latitude: -27.517900467,
		longitude: -59.007217407,
		municipalityId: 39
	},
	{
		id: 5387,
		name: 'COLONIA BARANDA',
		uta2020: '221400413030000',
		uta2010: '221400413030000',
		latitude: -27.562044943,
		longitude: -59.309691177,
		municipalityId: 39
	},
	{
		id: 5388,
		name: 'RESISTENCIA',
		uta2020: '221400413060000',
		uta2010: '221400413060000',
		latitude: -27.452119459,
		longitude: -58.987617441,
		municipalityId: 39
	},
	{
		id: 5389,
		name: 'LA QUERENCIA',
		uta2020: '221400413000033',
		uta2010: '221400413000033',
		latitude: -27.666109263,
		longitude: -59.173723928,
		municipalityId: 39
	},
	{
		id: 5390,
		name: 'COLONIA TACUARI',
		uta2020: '221400413000005',
		uta2010: '221400413000005',
		latitude: -27.881042257,
		longitude: -59.125353434,
		municipalityId: 39
	},
	{
		id: 5391,
		name: 'EL SALADO',
		uta2020: '221400413000014',
		uta2010: '221400413000014',
		latitude: -27.529044561,
		longitude: -59.14814973,
		municipalityId: 39
	},
	{
		id: 5392,
		name: 'LA CLARITA',
		uta2020: '300089020060000',
		uta2010: '300089020060000',
		latitude: -31.977137505,
		longitude: -58.391762889,
		municipalityId: 1674
	},
	{
		id: 5393,
		name: 'COLONIA LUSSINO',
		uta2020: '820072007000014',
		uta2010: '820072007000014',
		latitude: -32.543165117,
		longitude: -61.851019919,
		municipalityId: 1047
	},
	{
		id: 5394,
		name: 'BOUQUET',
		uta2020: '820072007020000',
		uta2010: '820072007020000',
		latitude: -32.424799856,
		longitude: -61.890334586,
		municipalityId: 1047
	},
	{
		id: 5395,
		name: 'DIQUE LA CIENAGA',
		uta2020: '380140056000009',
		uta2010: '380140056000009',
		latitude: -24.39946901,
		longitude: -65.27698224,
		municipalityId: 1182
	},
	{
		id: 5396,
		name: 'AVALOS',
		uta2020: '380140056000002',
		uta2010: '380140056000002',
		latitude: -24.348272324,
		longitude: -65.252029419,
		municipalityId: 1182
	},
	{
		id: 5397,
		name: 'SAN ANTONIO',
		uta2020: '380140056000038',
		uta2010: '380140056000038',
		latitude: -24.34957,
		longitude: -65.24681,
		municipalityId: 1182
	},
	{
		id: 5398,
		name: 'EL CARMEN',
		uta2020: '380140056040000',
		uta2010: '380140056040000',
		latitude: -24.385511917,
		longitude: -65.26051942,
		municipalityId: 1182
	},
	{
		id: 5399,
		name: 'EL SUNCHAL',
		uta2020: '380140056000018',
		uta2010: '380140056000018',
		latitude: -24.40527,
		longitude: -65.24167,
		municipalityId: 1182
	},
	{
		id: 5400,
		name: 'BRAGADO',
		uta2020: '061120112010000',
		uta2010: '061120112010000',
		latitude: -35.1189423,
		longitude: -60.487914757,
		municipalityId: 637
	},
	{
		id: 5401,
		name: 'SANTA ROSA',
		uta2020: '061120112000015',
		uta2010: '061120112000015',
		latitude: -35.2789478,
		longitude: -60.5902038,
		municipalityId: 637
	},
	{
		id: 5402,
		name: 'CUARTEL II',
		uta2020: '061120112000004',
		uta2010: '061120112000004',
		latitude: -35.1481738,
		longitude: -60.513551,
		municipalityId: 637
	},
	{
		id: 5403,
		name: 'OLASCOAGA',
		uta2020: '061120112080000',
		uta2010: '061120112080000',
		latitude: -35.237527793,
		longitude: -60.61153417,
		municipalityId: 637
	},
	{
		id: 5404,
		name: 'ASAMBLEA',
		uta2020: '061120112005000',
		uta2010: '061120112005000',
		latitude: -35.226758127,
		longitude: -60.416895284,
		municipalityId: 637
	},
	{
		id: 5405,
		name: 'EL MATACO',
		uta2020: '061120112000005',
		uta2010: '061120112000005',
		latitude: -34.8008378,
		longitude: -60.6616225,
		municipalityId: 637
	},
	{
		id: 5406,
		name: 'MECHITA',
		uta2020: '061120112070000',
		uta2010: '061120112070000',
		latitude: -35.069937857,
		longitude: -60.408493793,
		municipalityId: 637
	},
	{
		id: 5407,
		name: 'SANTO DOMINGO',
		uta2020: '061120112000016',
		uta2010: '061120112000016',
		latitude: -35.020004586,
		longitude: -60.594717243,
		municipalityId: 637
	},
	{
		id: 5408,
		name: 'RAUCH NUEVO',
		uta2020: '061120112000012',
		uta2010: '061120112000012',
		latitude: -35.1182584,
		longitude: -60.7044234,
		municipalityId: 637
	},
	{
		id: 5409,
		name: 'LA CRIOLLA',
		uta2020: '061120112000009',
		uta2010: '061120112000009',
		latitude: -34.9914819,
		longitude: -60.7280978,
		municipalityId: 637
	},
	{
		id: 5410,
		name: 'LA BLANQUEDA',
		uta2020: '061120112000007',
		uta2010: '061120112000007',
		latitude: -35.2073,
		longitude: -60.484670001,
		municipalityId: 637
	},
	{
		id: 5411,
		name: 'LA LIMPIA',
		uta2020: '061120112050000',
		uta2010: '061120112050000',
		latitude: -35.079727265,
		longitude: -60.592854667,
		municipalityId: 637
	},
	{
		id: 5412,
		name: 'MAXIMO FERNANDEZ',
		uta2020: '061120112060000',
		uta2010: '061120112060000',
		latitude: -35.061524675,
		longitude: -60.706074142,
		municipalityId: 637
	},
	{
		id: 5413,
		name: 'COMODORO PY',
		uta2020: '061120112020000',
		uta2010: '061120112020000',
		latitude: -35.323310038,
		longitude: -60.521731491,
		municipalityId: 637
	},
	{
		id: 5414,
		name: 'CAMPO DE RIANO',
		uta2020: '061120112000001',
		uta2010: '061120112000001',
		latitude: -35.2410531,
		longitude: -60.3474272,
		municipalityId: 637
	},
	{
		id: 5415,
		name: 'WARNES',
		uta2020: '061120112090000',
		uta2010: '061120112090000',
		latitude: -34.909873445,
		longitude: -60.538168163,
		municipalityId: 637
	},
	{
		id: 5416,
		name: 'IRALA',
		uta2020: '061120112040000',
		uta2010: '061120112040000',
		latitude: -34.771823031,
		longitude: -60.691691201,
		municipalityId: 637
	},
	{
		id: 5417,
		name: 'GENERAL O"BRIEN',
		uta2020: '061120112030000',
		uta2010: '061120112030000',
		latitude: -34.906797909,
		longitude: -60.759783824,
		municipalityId: 637
	},
	{
		id: 5418,
		name: 'RAUCH VIEJO',
		uta2020: '061120112000013',
		uta2010: '061120112000013',
		latitude: -35.0591856,
		longitude: -60.7100054,
		municipalityId: 637
	},
	{
		id: 5419,
		name: 'LA MARIA',
		uta2020: '061120112000010',
		uta2010: '061120112000010',
		latitude: -35.0921488,
		longitude: -60.5324127,
		municipalityId: 637
	},
	{
		id: 5420,
		name: 'COLONIA GENERAL ARENALES',
		uta2020: '221680476000006',
		uta2010: '221680476000006',
		latitude: -26.913802693,
		longitude: -59.935868332,
		municipalityId: 24
	},
	{
		id: 5421,
		name: 'LOTE 24',
		uta2020: '221680476000033',
		uta2010: '221680476000033',
		latitude: -27.248878869,
		longitude: -60.081845133,
		municipalityId: 24
	},
	{
		id: 5422,
		name: 'PAMPA OMBU',
		uta2020: '221680476000039',
		uta2010: '221680476000039',
		latitude: -26.30843246,
		longitude: -59.93985242,
		municipalityId: 24
	},
	{
		id: 5423,
		name: 'LOTE 39',
		uta2020: '221680476000036',
		uta2010: '221680476000036',
		latitude: -26.985750381,
		longitude: -60.10652653,
		municipalityId: 24
	},
	{
		id: 5424,
		name: 'COLONIA LA TAMBORA',
		uta2020: '221680476000011',
		uta2010: '221680476000011',
		latitude: -26.653004363,
		longitude: -59.995585246,
		municipalityId: 24
	},
	{
		id: 5425,
		name: 'EL RINCON',
		uta2020: '221680476000017',
		uta2010: '221680476000017',
		latitude: -26.31139039,
		longitude: -59.860928881,
		municipalityId: 24
	},
	{
		id: 5426,
		name: 'PAMPA VERDE',
		uta2020: '221680476000040',
		uta2010: '221680476000040',
		latitude: -26.517083675,
		longitude: -59.972028925,
		municipalityId: 24
	},
	{
		id: 5427,
		name: 'PASO DEL OSO',
		uta2020: '221680476000041',
		uta2010: '221680476000041',
		latitude: -26.69354847,
		longitude: -59.90400511,
		municipalityId: 24
	},
	{
		id: 5428,
		name: 'LOS BLANQUIZALES',
		uta2020: '221680476000026',
		uta2010: '221680476000026',
		latitude: -26.76727418,
		longitude: -60.0586063,
		municipalityId: 24
	},
	{
		id: 5429,
		name: 'COLONIA TRES PALMAS',
		uta2020: '221680476000013',
		uta2010: '221680476000013',
		latitude: -26.73842484,
		longitude: -59.96608132,
		municipalityId: 24
	},
	{
		id: 5430,
		name: 'COLONIA URIBURU',
		uta2020: '221680476000014',
		uta2010: '221680476000014',
		latitude: -26.9400177,
		longitude: -60.144607544,
		municipalityId: 24
	},
	{
		id: 5431,
		name: 'LA LOMITA',
		uta2020: '221680476000022',
		uta2010: '221680476000022',
		latitude: -26.43585717,
		longitude: -59.84445722,
		municipalityId: 24
	},
	{
		id: 5432,
		name: 'COLONIA LA LOLA',
		uta2020: '221680476000010',
		uta2010: '221680476000010',
		latitude: -26.703021179,
		longitude: -60.068080186,
		municipalityId: 24
	},
	{
		id: 5433,
		name: 'LA ESPERANZA',
		uta2020: '221680476000020',
		uta2010: '221680476000020',
		latitude: -26.802625116,
		longitude: -59.945419976,
		municipalityId: 24
	},
	{
		id: 5434,
		name: 'COLONIA BLAS PARERA',
		uta2020: '221680476000004',
		uta2010: '221680476000004',
		latitude: -27.08272723,
		longitude: -60.256786943,
		municipalityId: 24
	},
	{
		id: 5435,
		name: 'PAMPA BANDERA',
		uta2020: '221680476000038',
		uta2010: '221680476000038',
		latitude: -26.35276778,
		longitude: -59.94087803,
		municipalityId: 24
	},
	{
		id: 5436,
		name: 'PUEBLO VIEJO',
		uta2020: '221680476000042',
		uta2010: '221680476000042',
		latitude: -26.935050604,
		longitude: -60.033958201,
		municipalityId: 24
	},
	{
		id: 5437,
		name: 'LOTE 38',
		uta2020: '221680476000035',
		uta2010: '221680476000035',
		latitude: -26.956819038,
		longitude: -60.20422323,
		municipalityId: 24
	},
	{
		id: 5438,
		name: 'COLONIA GUALTIERI',
		uta2020: '221680476000008',
		uta2010: '221680476000008',
		latitude: -26.55688355,
		longitude: -59.93749191,
		municipalityId: 24
	},
	{
		id: 5439,
		name: 'SANTA MARTA',
		uta2020: '221680476000043',
		uta2010: '221680476000043',
		latitude: -26.84550592,
		longitude: -59.99821125,
		municipalityId: 24
	},
	{
		id: 5440,
		name: 'LOTE 22',
		uta2020: '221680476000031',
		uta2010: '221680476000031',
		latitude: -27.196545225,
		longitude: -60.128861098,
		municipalityId: 24
	},
	{
		id: 5441,
		name: 'CAMPO RIAÑO',
		uta2020: '221680476000002',
		uta2010: '221680476000002',
		latitude: -26.612934657,
		longitude: -59.904048807,
		municipalityId: 24
	},
	{
		id: 5442,
		name: 'EL MARTILLO',
		uta2020: '221680476000016',
		uta2010: '221680476000016',
		latitude: -27.06436889,
		longitude: -60.01994041,
		municipalityId: 24
	},
	{
		id: 5443,
		name: 'EL TOTORAL',
		uta2020: '221680476000018',
		uta2010: '221680476000018',
		latitude: -26.82158523,
		longitude: -60.05548823,
		municipalityId: 24
	},
	{
		id: 5444,
		name: 'MACHAGAI',
		uta2020: '221680476020000',
		uta2010: '221680476020000',
		latitude: -26.92873355,
		longitude: -60.047719613,
		municipalityId: 24
	},
	{
		id: 5445,
		name: 'NAPALPI',
		uta2020: '221680476030000',
		uta2010: '221680476030000',
		latitude: -26.903261704,
		longitude: -60.117383926,
		municipalityId: 24
	},
	{
		id: 5446,
		name: 'COLONIA GENERAL LAMADRID',
		uta2020: '221680476000007',
		uta2010: '221680476000007',
		latitude: -26.74579337,
		longitude: -59.88887142,
		municipalityId: 24
	},
	{
		id: 5447,
		name: 'LA PRIMAVERA',
		uta2020: '740070000000105',
		uta2010: '740070000000105',
		latitude: -32.039077759,
		longitude: -65.989936829,
		municipalityId: 1117
	},
	{
		id: 5448,
		name: 'LOS QUEMADOS',
		uta2020: '740070000000138',
		uta2010: '740070000000138',
		latitude: -31.891607758,
		longitude: -65.731320178,
		municipalityId: 1117
	},
	{
		id: 5449,
		name: 'EL RINCON',
		uta2020: '740070000000078',
		uta2010: '740070000000078',
		latitude: -32.6556521,
		longitude: -66.20161387,
		municipalityId: 1117
	},
	{
		id: 5450,
		name: 'BALDE VIEJO',
		uta2020: '740070000000024',
		uta2010: '740070000000024',
		latitude: -32.132526398,
		longitude: -66.152908325,
		municipalityId: 1117
	},
	{
		id: 5451,
		name: 'EL ZAMPAL',
		uta2020: '740070000000082',
		uta2010: '740070000000082',
		latitude: -32.381381989,
		longitude: -66.665527344,
		municipalityId: 1117
	},
	{
		id: 5452,
		name: 'SANTO DOMINGO',
		uta2020: '740070000000189',
		uta2010: '740070000000189',
		latitude: -31.897363331,
		longitude: -65.649155746,
		municipalityId: 1117
	},
	{
		id: 5453,
		name: 'SAN MIGUEL',
		uta2020: '740070000000175',
		uta2010: '740070000000175',
		latitude: -32.14116477,
		longitude: -65.81342262,
		municipalityId: 1117
	},
	{
		id: 5454,
		name: 'EL BALDECITO',
		uta2020: '740070000000051',
		uta2010: '740070000000051',
		latitude: -32.156303406,
		longitude: -65.994880676,
		municipalityId: 1117
	},
	{
		id: 5455,
		name: 'SAN ROQUE',
		uta2020: '740070000000177',
		uta2010: '740070000000177',
		latitude: -32.15448797,
		longitude: -66.96257853,
		municipalityId: 1117
	},
	{
		id: 5456,
		name: 'RODEO DE CADENAS',
		uta2020: '740070000000169',
		uta2010: '740070000000169',
		latitude: -32.701562962,
		longitude: -66.190087335,
		municipalityId: 1117
	},
	{
		id: 5457,
		name: 'LA AVENENCIA',
		uta2020: '740070000000087',
		uta2010: '740070000000087',
		latitude: -32.24501781,
		longitude: -66.41237917,
		municipalityId: 1117
	},
	{
		id: 5458,
		name: 'LA SALVADORA',
		uta2020: '740070000000109',
		uta2010: '740070000000109',
		latitude: -32.28620178,
		longitude: -66.732734,
		municipalityId: 1117
	},
	{
		id: 5459,
		name: 'BALDE DE QUINES',
		uta2020: '740070000000017',
		uta2010: '740070000000017',
		latitude: -32.049993439,
		longitude: -65.733198676,
		municipalityId: 1117
	},
	{
		id: 5460,
		name: 'LOMAS BLANCAS',
		uta2020: '740070000000129',
		uta2010: '740070000000129',
		latitude: -32.333862905,
		longitude: -66.471676532,
		municipalityId: 1117
	},
	{
		id: 5461,
		name: 'PAMPA GRANDE',
		uta2020: '740070000000146',
		uta2010: '740070000000146',
		latitude: -32.372422472,
		longitude: -66.307754867,
		municipalityId: 1117
	},
	{
		id: 5462,
		name: 'EL INJERTO',
		uta2020: '740070000000062',
		uta2010: '740070000000062',
		latitude: -32.22815945,
		longitude: -65.69191327,
		municipalityId: 1117
	},
	{
		id: 5463,
		name: 'LOS POZOS',
		uta2020: '740070000000137',
		uta2010: '740070000000137',
		latitude: -32.202865601,
		longitude: -66.711585998,
		municipalityId: 1117
	},
	{
		id: 5464,
		name: 'LA TRANCA',
		uta2020: '740070000000111',
		uta2010: '740070000000111',
		latitude: -32.33116593,
		longitude: -67.269935644,
		municipalityId: 1117
	},
	{
		id: 5465,
		name: 'EL ALGARROBAL',
		uta2020: '740070000000049',
		uta2010: '740070000000049',
		latitude: -32.455620948,
		longitude: -66.243960915,
		municipalityId: 1117
	},
	{
		id: 5466,
		name: 'LA REPRESITA',
		uta2020: '740070000000107',
		uta2010: '740070000000107',
		latitude: -32.16115324,
		longitude: -65.684074966,
		municipalityId: 1117
	},
	{
		id: 5467,
		name: 'LAS CHIMBAS',
		uta2020: '740070000000117',
		uta2010: '740070000000117',
		latitude: -32.156517718,
		longitude: -66.551114261,
		municipalityId: 1117
	},
	{
		id: 5468,
		name: 'SAN IGNACIO',
		uta2020: '740070000000172',
		uta2010: '740070000000172',
		latitude: -32.086625703,
		longitude: -66.088823113,
		municipalityId: 1117
	},
	{
		id: 5469,
		name: 'BALDE RETAMO',
		uta2020: '740070000000022',
		uta2010: '740070000000022',
		latitude: -32.107183761,
		longitude: -65.959128336,
		municipalityId: 1117
	},
	{
		id: 5470,
		name: 'MONTE CARMELO',
		uta2020: '740070000000143',
		uta2010: '740070000000143',
		latitude: -32.274898529,
		longitude: -66.495262146,
		municipalityId: 1117
	},
	{
		id: 5471,
		name: 'BALDE DE LOS TORRES',
		uta2020: '740070000000014',
		uta2010: '740070000000014',
		latitude: -32.027328415,
		longitude: -66.102316206,
		municipalityId: 1117
	},
	{
		id: 5472,
		name: 'SANTA ANA',
		uta2020: '740070000000180',
		uta2010: '740070000000180',
		latitude: -32.144878219,
		longitude: -66.046039369,
		municipalityId: 1117
	},
	{
		id: 5473,
		name: 'LAS CLARITAS',
		uta2020: '740070000000118',
		uta2010: '740070000000118',
		latitude: -31.953752518,
		longitude: -65.753921509,
		municipalityId: 1117
	},
	{
		id: 5474,
		name: 'BALDE DE AZCURRA',
		uta2020: '740070000000008',
		uta2010: '740070000000008',
		latitude: -32.136513149,
		longitude: -66.854453888,
		municipalityId: 1117
	},
	{
		id: 5475,
		name: 'BALDECITO DE LA PAMPA',
		uta2020: '740070000000026',
		uta2010: '740070000000026',
		latitude: -32.34825343,
		longitude: -66.20247477,
		municipalityId: 1117
	},
	{
		id: 5476,
		name: 'BALDE DEL CARMEN',
		uta2020: '740070000000019',
		uta2010: '740070000000019',
		latitude: -32.27812976,
		longitude: -66.16172942,
		municipalityId: 1117
	},
	{
		id: 5477,
		name: 'LA PLATA',
		uta2020: '740070000000103',
		uta2010: '740070000000103',
		latitude: -32.038833618,
		longitude: -65.919830322,
		municipalityId: 1117
	},
	{
		id: 5478,
		name: 'LA BOTIJA',
		uta2020: '740070000000091',
		uta2010: '740070000000091',
		latitude: -32.23779512,
		longitude: -66.57895642,
		municipalityId: 1117
	},
	{
		id: 5479,
		name: 'SANTA TERESA',
		uta2020: '740070000000186',
		uta2010: '740070000000186',
		latitude: -32.20206139,
		longitude: -66.26698743,
		municipalityId: 1117
	},
	{
		id: 5480,
		name: 'EL BARRIAL',
		uta2020: '740070000000053',
		uta2010: '740070000000053',
		latitude: -32.095035553,
		longitude: -66.592979431,
		municipalityId: 1117
	},
	{
		id: 5481,
		name: 'LAS TOSQUITAS',
		uta2020: '740070000000127',
		uta2010: '740070000000127',
		latitude: -32.543987274,
		longitude: -66.194526672,
		municipalityId: 1117
	},
	{
		id: 5482,
		name: 'EL VINAGRILLO',
		uta2020: '740070000000081',
		uta2010: '740070000000081',
		latitude: -32.4018573,
		longitude: -66.02362281,
		municipalityId: 1117
	},
	{
		id: 5483,
		name: 'LAS LAGUNITAS',
		uta2020: '740070000000120',
		uta2010: '740070000000120',
		latitude: -32.02753784,
		longitude: -66.24032971,
		municipalityId: 1117
	},
	{
		id: 5484,
		name: 'SANTA ROSA DE CATANTAL',
		uta2020: '740070000000184',
		uta2010: '740070000000184',
		latitude: -32.33294095,
		longitude: -66.91334013,
		municipalityId: 1117
	},
	{
		id: 5485,
		name: 'BELLA VISTA',
		uta2020: '740070000000032',
		uta2010: '740070000000032',
		latitude: -32.347835541,
		longitude: -66.553359985,
		municipalityId: 1117
	},
	{
		id: 5486,
		name: 'BALDE ULTIMO',
		uta2020: '740070000000023',
		uta2010: '740070000000023',
		latitude: -31.971033096,
		longitude: -66.133224487,
		municipalityId: 1117
	},
	{
		id: 5487,
		name: 'TALITA',
		uta2020: '740070000000196',
		uta2010: '740070000000196',
		latitude: -32.349651464,
		longitude: -66.726632791,
		municipalityId: 1117
	},
	{
		id: 5488,
		name: 'EL CALDEN',
		uta2020: '740070000000055',
		uta2010: '740070000000055',
		latitude: -31.901352904,
		longitude: -65.85454818,
		municipalityId: 1117
	},
	{
		id: 5489,
		name: 'LA FLORIDA',
		uta2020: '740070000000095',
		uta2010: '740070000000095',
		latitude: -32.646320343,
		longitude: -66.185775757,
		municipalityId: 1117
	},
	{
		id: 5490,
		name: 'VIEYTES',
		uta2020: '065050505060000',
		uta2010: '065050505060000',
		latitude: -35.269568396,
		longitude: -57.575711745,
		municipalityId: 638
	},
	{
		id: 5491,
		name: 'EL PINO',
		uta2020: '065050505000009',
		uta2010: '065050505000009',
		latitude: -35.0096083,
		longitude: -57.6930089,
		municipalityId: 638
	},
	{
		id: 5492,
		name: 'LA CLELIA',
		uta2020: '065050505000018',
		uta2010: '065050505000018',
		latitude: -35.1475289,
		longitude: -57.8180032,
		municipalityId: 638
	},
	{
		id: 5493,
		name: 'SAN MARTIN',
		uta2020: '065050505000029',
		uta2010: '065050505000029',
		latitude: -35.0255176,
		longitude: -57.7529837,
		municipalityId: 638
	},
	{
		id: 5494,
		name: 'MAGDALENA',
		uta2020: '065050505040000',
		uta2010: '065050505040000',
		latitude: -35.080685303,
		longitude: -57.517258584,
		municipalityId: 638
	},
	{
		id: 5495,
		name: 'ATALAYA',
		uta2020: '065050505010000',
		uta2010: '065050505010000',
		latitude: -35.024036346,
		longitude: -57.53402536,
		municipalityId: 638
	},
	{
		id: 5496,
		name: 'CAMPO FERRO',
		uta2020: '065050505000005',
		uta2010: '065050505000005',
		latitude: -35.175444975,
		longitude: -57.518948583,
		municipalityId: 638
	},
	{
		id: 5497,
		name: 'ROBERTO J. PAYRO',
		uta2020: '065050505050000',
		uta2010: '065050505050000',
		latitude: -35.179926706,
		longitude: -57.65198602,
		municipalityId: 638
	},
	{
		id: 5498,
		name: 'GUTIERREZ',
		uta2020: '065050505000012',
		uta2010: '065050505000012',
		latitude: -35.0518237,
		longitude: -57.6889574,
		municipalityId: 638
	},
	{
		id: 5499,
		name: 'LOS NARANJOS',
		uta2020: '065050505030000',
		uta2010: '065050505030000',
		latitude: -34.996551858,
		longitude: -57.703664246,
		municipalityId: 638
	},
	{
		id: 5500,
		name: 'JULIO ARDITI',
		uta2020: '065050505000014',
		uta2010: '065050505000014',
		latitude: -35.1289452,
		longitude: -57.6492935,
		municipalityId: 638
	},
	{
		id: 5501,
		name: 'JOSE FERRARI',
		uta2020: '065050505000013',
		uta2010: '065050505000013',
		latitude: -35.2924873,
		longitude: -57.8618166,
		municipalityId: 638
	},
	{
		id: 5502,
		name: 'SAN JOSE',
		uta2020: '065050505000028',
		uta2010: '065050505000028',
		latitude: -35.342233,
		longitude: -57.7212066,
		municipalityId: 638
	},
	{
		id: 5503,
		name: 'GENERAL MANSILLA',
		uta2020: '065050505020000',
		uta2010: '065050505020000',
		latitude: -35.081683431,
		longitude: -57.746976259,
		municipalityId: 638
	},
	{
		id: 5504,
		name: 'VERGARA',
		uta2020: '065050505000031',
		uta2010: '065050505000031',
		latitude: -35.3825998,
		longitude: -57.8040225,
		municipalityId: 638
	},
	{
		id: 5505,
		name: 'EL DESTINO',
		uta2020: '065050505000008',
		uta2010: '065050505000008',
		latitude: -35.141410006,
		longitude: -57.410240086,
		municipalityId: 638
	},
	{
		id: 5506,
		name: 'UNIDAD PENAL MAGDALENA',
		uta2020: '065050505000030',
		uta2010: '065050505000030',
		latitude: -35.101789,
		longitude: -57.474438,
		municipalityId: 638
	},
	{
		id: 5507,
		name: 'MALAGAMBA',
		uta2020: '065050505000025',
		uta2010: '065050505000025',
		latitude: -35.0723632,
		longitude: -57.8655759,
		municipalityId: 638
	},
	{
		id: 5508,
		name: 'LA MATRACA',
		uta2020: '065050505000019',
		uta2010: '065050505000019',
		latitude: -35.3346736,
		longitude: -57.9156178,
		municipalityId: 638
	},
	{
		id: 5509,
		name: 'SANTA ROSA DEL CONLARA',
		uta2020: '740490098070000',
		uta2010: '740490098070000',
		latitude: -32.342308151,
		longitude: -65.207120661,
		municipalityId: 1108
	},
	{
		id: 5510,
		name: 'EL DURAZNITO',
		uta2020: '740490098000017',
		uta2010: '740490098000017',
		latitude: -32.31004,
		longitude: -65.27742028,
		municipalityId: 1108
	},
	{
		id: 5511,
		name: 'LAS BAJADAS',
		uta2020: '140072028090000',
		uta2010: '140072028090000',
		latitude: -32.095406358,
		longitude: -64.331053555,
		municipalityId: 127
	},
	{
		id: 5512,
		name: 'SOCONCHO',
		uta2020: '140072028000062',
		uta2010: '140072028000062',
		latitude: -32.054688226,
		longitude: -64.379538185,
		municipalityId: 127
	},
	{
		id: 5513,
		name: 'BENJAMIN PAZ',
		uta2020: '901120126000024',
		uta2010: '901120126000024',
		latitude: -26.368832076,
		longitude: -65.295506468,
		municipalityId: 2271
	},
	{
		id: 5514,
		name: 'EL BRETE',
		uta2020: '901120126000045',
		uta2010: '901120126000045',
		latitude: -26.09654,
		longitude: -65.39227,
		municipalityId: 2271
	},
	{
		id: 5515,
		name: 'ARAGON',
		uta2020: '901120126000018',
		uta2010: '901120126000018',
		latitude: -26.385499954,
		longitude: -65.363098145,
		municipalityId: 2271
	},
	{
		id: 5516,
		name: 'LAS JUNTAS',
		uta2020: '901120126000142',
		uta2010: '901120126000142',
		latitude: -26.387214661,
		longitude: -65.507698059,
		municipalityId: 2271
	},
	{
		id: 5517,
		name: 'LAS ARCAS',
		uta2020: '901120126000135',
		uta2010: '901120126000135',
		latitude: -26.166870117,
		longitude: -65.318725586,
		municipalityId: 2271
	},
	{
		id: 5518,
		name: 'LEOCADIO PAZ',
		uta2020: '901120126000146',
		uta2010: '901120126000146',
		latitude: -26.161071593,
		longitude: -65.317207336,
		municipalityId: 2271
	},
	{
		id: 5519,
		name: 'VILLA DE TRANCAS',
		uta2020: '901120126030000',
		uta2010: '901120126030000',
		latitude: -26.230731704,
		longitude: -65.28516649,
		municipalityId: 2271
	},
	{
		id: 5520,
		name: 'TUNA SOLA',
		uta2020: '901120126000225',
		uta2010: '901120126000225',
		latitude: -26.333293536,
		longitude: -65.216578885,
		municipalityId: 2271
	},
	{
		id: 5521,
		name: 'EL SAUCE',
		uta2020: '901120126000067',
		uta2010: '901120126000067',
		latitude: -26.315044403,
		longitude: -65.132736206,
		municipalityId: 2271
	},
	{
		id: 5522,
		name: 'SAN ISIDRO',
		uta2020: '901120126000203',
		uta2010: '901120126000203',
		latitude: -26.282751928,
		longitude: -65.25645348,
		municipalityId: 2271
	},
	{
		id: 5523,
		name: 'LA ESPERANZA',
		uta2020: '901120126000123',
		uta2010: '901120126000123',
		latitude: -26.26524353,
		longitude: -65.099639893,
		municipalityId: 2271
	},
	{
		id: 5524,
		name: 'EL SIMBOLAR',
		uta2020: '901120126000068',
		uta2010: '901120126000068',
		latitude: -26.245276689,
		longitude: -65.332427343,
		municipalityId: 2271
	},
	{
		id: 5525,
		name: 'SAN JOSE',
		uta2020: '901120126000205',
		uta2010: '901120126000205',
		latitude: -26.2685056,
		longitude: -65.2766213,
		municipalityId: 2271
	},
	{
		id: 5526,
		name: 'LOMA ALTA',
		uta2020: '221400392000036',
		uta2010: '221400392000036',
		latitude: -27.767302766,
		longitude: -59.256700222,
		municipalityId: 40
	},
	{
		id: 5527,
		name: 'LA DORILA',
		uta2020: '221400392000028',
		uta2010: '221400392000028',
		latitude: -27.782611847,
		longitude: -59.30184555,
		municipalityId: 40
	},
	{
		id: 5528,
		name: 'PARALELO 28',
		uta2020: '221400392000041',
		uta2010: '221400392000041',
		latitude: -27.88848122,
		longitude: -59.28016898,
		municipalityId: 40
	},
	{
		id: 5529,
		name: 'EL SALADILLO',
		uta2020: '221400392000013',
		uta2010: '221400392000013',
		latitude: -27.820634308,
		longitude: -59.290597042,
		municipalityId: 40
	},
	{
		id: 5530,
		name: 'COLONIA PALMIRA',
		uta2020: '221400392000003',
		uta2010: '221400392000003',
		latitude: -27.925615311,
		longitude: -59.31798172,
		municipalityId: 40
	},
	{
		id: 5531,
		name: 'LAS MERCEDES',
		uta2020: '221400392000034',
		uta2010: '221400392000034',
		latitude: -27.964161929,
		longitude: -59.367156495,
		municipalityId: 40
	},
	{
		id: 5532,
		name: 'KILOMETRO 34',
		uta2020: '221400392000025',
		uta2010: '221400392000025',
		latitude: -27.951069713,
		longitude: -59.238393172,
		municipalityId: 40
	},
	{
		id: 5533,
		name: 'BASAIL',
		uta2020: '221400392020000',
		uta2010: '221400392020000',
		latitude: -27.886865597,
		longitude: -59.279100362,
		municipalityId: 40
	},
	{
		id: 5534,
		name: 'PLAYA FORD',
		uta2020: '221400392000042',
		uta2010: '221400392000042',
		latitude: -27.953480146,
		longitude: -59.298722921,
		municipalityId: 40
	},
	{
		id: 5535,
		name: 'LA CAROLINA',
		uta2020: '820843421000019',
		uta2010: '820843421000019',
		latitude: -33.0759052,
		longitude: -60.7035545,
		municipalityId: 814
	},
	{
		id: 5536,
		name: 'LOS MUCHACHOS - LA ALBORADA',
		uta2020: '820843421190000',
		uta2010: '820843421190000',
		latitude: -33.09157341,
		longitude: -60.735425426,
		municipalityId: 814
	},
	{
		id: 5537,
		name: 'PIÑERO',
		uta2020: '820843421220000',
		uta2010: '820843421220000',
		latitude: -33.111207101,
		longitude: -60.796496163,
		municipalityId: 814
	},
	{
		id: 5538,
		name: 'CLEMENTE ONELLI',
		uta2020: '620915217020000',
		uta2010: '620915217020000',
		latitude: -41.244835005,
		longitude: -70.034202941,
		municipalityId: 1230
	},
	{
		id: 5539,
		name: 'ANECON GRANDE',
		uta2020: '620705217000001',
		uta2010: '620705217000001',
		latitude: -41.32152141,
		longitude: -70.27466678,
		municipalityId: 1230
	},
	{
		id: 5540,
		name: 'LOS CHIHUIDOS',
		uta2020: '580145021000019',
		uta2010: '580145021000019',
		latitude: -38.24221177,
		longitude: -69.4801093,
		municipalityId: 2386
	},
	{
		id: 5541,
		name: 'COLONIA SAN PASCUAL',
		uta2020: '300159070000017',
		uta2010: '300159070000017',
		latitude: -31.111923218,
		longitude: -58.112392425,
		municipalityId: 1799
	},
	{
		id: 5542,
		name: 'COLONIA SAN JUSTO',
		uta2020: '300159070000016',
		uta2010: '300159070000016',
		latitude: -31.085688647,
		longitude: -58.235500305,
		municipalityId: 1799
	},
	{
		id: 5543,
		name: 'PASO DEL DURAZNO',
		uta2020: '140562329140000',
		uta2010: '140562329140000',
		latitude: -33.170455449,
		longitude: -64.047867008,
		municipalityId: 374
	},
	{
		id: 5544,
		name: 'PASO DEL DURAZNO',
		uta2020: '140562329220000',
		uta2010: '140562329220000',
		latitude: -33.170068435,
		longitude: -64.049630768,
		municipalityId: 374
	},
	{
		id: 5545,
		name: 'DOS ARROYOS',
		uta2020: '540700266050000',
		uta2010: '540700266050000',
		latitude: -27.694171423,
		longitude: -55.258780169,
		municipalityId: 2144
	},
	{
		id: 5546,
		name: 'SAN LUCAS',
		uta2020: '381056217000035',
		uta2010: '381056217000035',
		latitude: -23.61138,
		longitude: -65.04423,
		municipalityId: 1199
	},
	{
		id: 5547,
		name: 'PAMPICHUELA',
		uta2020: '381056217020000',
		uta2010: '381056217020000',
		latitude: -23.554409378,
		longitude: -65.052807259,
		municipalityId: 1199
	},
	{
		id: 5548,
		name: 'SANTA BARBARA',
		uta2020: '381056217000038',
		uta2010: '381056217000038',
		latitude: -23.6231,
		longitude: -65.00498,
		municipalityId: 1199
	},
	{
		id: 5549,
		name: 'LA PELADA',
		uta2020: '820703120120000',
		uta2010: '820703120120000',
		latitude: -30.867947769,
		longitude: -60.971811681,
		municipalityId: 876
	},
	{
		id: 5550,
		name: 'MOUSSY',
		uta2020: '820490091000103',
		uta2010: '820490091000103',
		latitude: -29.0165072,
		longitude: -59.6876264,
		municipalityId: 958
	},
	{
		id: 5551,
		name: 'LA VERTIENTE',
		uta2020: '820490091000089',
		uta2010: '820490091000089',
		latitude: -29.10524969,
		longitude: -59.713578455,
		municipalityId: 958
	},
	{
		id: 5552,
		name: 'COLMENA',
		uta2020: '820490091000031',
		uta2010: '820490091000031',
		latitude: -28.9433399,
		longitude: -59.7131145,
		municipalityId: 958
	},
	{
		id: 5553,
		name: 'EL CARMEN DE AVELLANEDA',
		uta2020: '820490091000042',
		uta2010: '820490091000042',
		latitude: -29.0459613,
		longitude: -59.6538053,
		municipalityId: 958
	},
	{
		id: 5554,
		name: 'SANTA ANA',
		uta2020: '820490091000115',
		uta2010: '820490091000115',
		latitude: -28.9777718,
		longitude: -59.6575308,
		municipalityId: 958
	},
	{
		id: 5555,
		name: 'EL TIMBO',
		uta2020: '820490091000050',
		uta2010: '820490091000050',
		latitude: -29.0170999,
		longitude: -59.5990311,
		municipalityId: 958
	},
	{
		id: 5556,
		name: 'AVELLANEDA',
		uta2020: '820490091020000',
		uta2010: '820490091020000',
		latitude: -29.119365978,
		longitude: -59.659251244,
		municipalityId: 958
	},
	{
		id: 5557,
		name: 'SAN PEDRO',
		uta2020: '101050231000115',
		uta2010: '101050231000115',
		latitude: -27.91052043,
		longitude: -67.62126418,
		municipalityId: 1915
	},
	{
		id: 5558,
		name: 'LA ISLA',
		uta2020: '101050231000060',
		uta2010: '101050231000060',
		latitude: -28.28203,
		longitude: -67.26548,
		municipalityId: 1915
	},
	{
		id: 5559,
		name: 'BANDA DE LUCERO',
		uta2020: '101050231030000',
		uta2010: '101050231030000',
		latitude: -28.068785063,
		longitude: -67.507702421,
		municipalityId: 1915
	},
	{
		id: 5560,
		name: 'CACHIYUYO',
		uta2020: '101050231000011',
		uta2010: '101050231000011',
		latitude: -28.00064,
		longitude: -67.5483,
		municipalityId: 1915
	},
	{
		id: 5561,
		name: 'COSTA DE REYES',
		uta2020: '101050231070000',
		uta2010: '101050231070000',
		latitude: -28.294959923,
		longitude: -67.70290249,
		municipalityId: 1915
	},
	{
		id: 5562,
		name: 'SANTA CRUZ',
		uta2020: '101050231000116',
		uta2010: '101050231000116',
		latitude: -28.283086777,
		longitude: -67.199905395,
		municipalityId: 1915
	},
	{
		id: 5563,
		name: 'LOS BALVERDIS',
		uta2020: '101050231120000',
		uta2010: '101050231120000',
		latitude: -28.276985403,
		longitude: -67.10744441,
		municipalityId: 1915
	},
	{
		id: 5564,
		name: 'LA AGUADITA',
		uta2020: '101050231000047',
		uta2010: '101050231000047',
		latitude: -27.775724411,
		longitude: -67.390167236,
		municipalityId: 1915
	},
	{
		id: 5565,
		name: 'VINQUIS',
		uta2020: '101050231000132',
		uta2010: '101050231000132',
		latitude: -28.115091324,
		longitude: -67.210235596,
		municipalityId: 1915
	},
	{
		id: 5566,
		name: 'TINOGASTA',
		uta2020: '101050231180000',
		uta2010: '101050231180000',
		latitude: -28.06375107,
		longitude: -67.580269576,
		municipalityId: 1915
	},
	{
		id: 5567,
		name: 'VILLA LUJAN',
		uta2020: '101050231000130',
		uta2010: '101050231000130',
		latitude: -28.234993889,
		longitude: -67.700177353,
		municipalityId: 1915
	},
	{
		id: 5568,
		name: 'LAS HIGUERITAS',
		uta2020: '101050231000067',
		uta2010: '101050231000067',
		latitude: -28.113601685,
		longitude: -67.691421509,
		municipalityId: 1915
	},
	{
		id: 5569,
		name: 'EL SALADO',
		uta2020: '101050231100000',
		uta2010: '101050231100000',
		latitude: -28.312020634,
		longitude: -67.250879321,
		municipalityId: 1915
	},
	{
		id: 5570,
		name: 'EL PUESTO',
		uta2020: '101050231090000',
		uta2010: '101050231090000',
		latitude: -27.926762147,
		longitude: -67.630400205,
		municipalityId: 1915
	},
	{
		id: 5571,
		name: 'EL PUEBLITO',
		uta2020: '101050231080000',
		uta2010: '101050231080000',
		latitude: -28.288818325,
		longitude: -67.123452298,
		municipalityId: 1915
	},
	{
		id: 5572,
		name: 'COPACABANA',
		uta2020: '101050231050001',
		uta2010: '101050231050001',
		latitude: -28.124391466,
		longitude: -67.498101399,
		municipalityId: 1915
	},
	{
		id: 5573,
		name: 'ANILLACO',
		uta2020: '101050231010000',
		uta2010: '101050231010000',
		latitude: -27.900152846,
		longitude: -67.614283874,
		municipalityId: 1915
	},
	{
		id: 5574,
		name: 'VILLA SAN ROQUE',
		uta2020: '101050231000131',
		uta2010: '101050231000131',
		latitude: -28.02011356,
		longitude: -67.60505912,
		municipalityId: 1915
	},
	{
		id: 5575,
		name: 'RIO COLORADO',
		uta2020: '101050231000109',
		uta2010: '101050231000109',
		latitude: -28.283418655,
		longitude: -67.375305176,
		municipalityId: 1915
	},
	{
		id: 5576,
		name: 'CERRO NEGRO',
		uta2020: '101050231040000',
		uta2010: '101050231040000',
		latitude: -28.243240544,
		longitude: -67.144273179,
		municipalityId: 1915
	},
	{
		id: 5577,
		name: 'CORDOBITA',
		uta2020: '101050231060000',
		uta2010: '101050231060000',
		latitude: -28.297979871,
		longitude: -67.167090445,
]