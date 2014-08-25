var map = {
	lines:[
		"M 247 100 l 35 0","M 265 163 l 12 -18","M 289 425 l 69 -121","M 380 95 l 11 11",
		"M 434 115 l -37 60","M 385 150 l 15 -25","M 384 187 l 17 28",
		"M 433 232 l 13 21","M 480 254 l 12 21","M 508 263 l 7 12","M 400 177 l 45 0",
		"M 8 137 l 26 0 l 16 -31","M 882 145 l 30 0","M 824 254 l 57 0","M 814 312 l 58 0",
		"M 549 437 l 22 39","M 520 507 l 23 0","M 694 386 l 23 41","M 751 488 l 16 28",
		"M 781 393 l 16 33","M 817 464 l 13 19","M 848 496 l -13 20","M 780 453 l 27 53"
	],	

    continents: [
    	{
    		id : "AMERICANORTE",
    		color : ["#FF8000", "#BB4000"],
    		countries : [{
				id : "ALASKA",
				display:"Alaska",
				coords: ["40", "75"],  
				path : "M 22 115 l 18 -30 l 12 0 l 7 -9 l 56 -2 l -12 20 l -11 1 l -6 10 l 6 9 l -26 1 l -4 -9 l -23 -2 l -5 11 z"
			},{
				id : "MACKENZIE",
				display :"Mackenzie",
				coords : ["150","110"],
				path : "M 115 74 l 5 10 l 46 1 l 6 10 l 40 -1 l -4 -9 l 16 0 l 5 7 l 12 3 l 7 11 l -25 -2 l -6 11 l -23 -1 l -6 9 l -13 1 l -22 1 l -23 0 l -6 -11 l -32 0 l -6 -9 l 6 -10 l 11 -1 z"
			},{
				id : "GROELANDIA",
				display :"Groelândia",
				coords : ["330","60"],
				path : "M 285 74 l 17 -29 l 13 0 l 10 -20 l 83 0 l 6 10 l 22 0 l -5 9 l -13 2 l -15 30 l -15 0 l -16 30 l -13 -1 l -4 9 l -34 0 l -8 10 l -11 1 l -10 17 l -13 2 l -13 -19 l 26 -39 z"
			},{
				id : "VANCOUVER",
				display :"Vancouver",
				coords : ["65","140"],
				path : "M 66 115 l 58 -1 l 6 11 l 23 0 l -5 9 l 7 10 l -21 28 l -10 2 l -9 -12 l -43 2 l -6 -12 l 13 -18 z"
			},{
				id : "OTTAWA",
				display :"Ottawa",
				coords : ["150","165"],
				path : "M 134 172 l 21 -28 l -7 -10 l 5 -9 l 22 -1 l 10 19 l 14 1 l -13 18 l 6 11 l 8 12 l -7 7 l -25 2 l 7 -13 l -6 -9 l -8 11 l -2 -10 l -15 1 z"
			},{
				id : "LABRADOR",
				display :"Labrador",
				coords : ["210","175"],
				path : "M 193 192 l 7 -7 l -8 -12 l 29 -48 l 14 -1 l 7 19 l 14 1 l 7 9 l -7 9 l 13 3 l -8 9 l -31 -1 l 9 20 l -9 12 l -10 -1 l 7 -13 z"
			},{
				id : "CALIFORNIA",
				display :"Califórnia",
				coords : ["35","210"],
				path : "M 115 162 l 9 12 l 10 -2 l 10 2 l -16 29 l 7 12 l -15 17 l -9 -18 l -34 0 l -13 20 l -13 0 l -2 -10 l -15 0 l -3 -12 l 29 -50 l 12 2 z"
			},{
				id : "NOVAYORK",
				display :"Nova York",
				coords : ["160","230"],
				path : "M 64 234 l 13 -20 l 34 0 l 9 18 l 15 -17 l -7 -12 l 16 -29 l 15 -1 l -12 19 l 2 8 l 8 -5 l 4 6 l 11 1 l -4 -8 l 25 -2 l 22 2 l -12 19 l -12 2 l -6 9 l -11 -1 l -13 19 l -9 -1 l -7 9 l 6 11 l -8 12 l -9 0 l 3 -12 l -5 -10 l -34 -1 l -6 14 l -6 -11 l -12 -1 z"
			},{
				id : "MEXICO",
				display :"México",
				coords : ["50","320"],
				path : "M 34 224 l 15 0 l 2 10 l 13 0 l 10 18 l 12 1 l 6 11 l -13 15 l 5 11 l 13 -1 l 6 -7 l 12 0 l 7 11 l -7 8 l 7 12 l -10 10 l 7 7 l 10 0 l 7 13 l -6 10 l -4 -9 l -12 -1 l -24 -39 l -22 0 l -16 -33 l 11 0 l -22 -35 l -8 8 l 12 19 l -13 2 l -11 -20 z M 122 293 l 23 -1 l 8 12 l 19 0 l 1 14 l -20 0 l -10 -10 l -18 -3 z"
			}]
    	},{
	  		id : "AMERICASUL",
    		color : ["#22CCDD", "#008899"],
    		countries : [{
    			id : "ARGENTINA",
				display :"Argentina",
				coords : ["185","550"],
    			path : "M 197 603 l -6 -7 l 8 -12 l -6 -10 l 4 -10 l -5 -10 l 9 -18 l 12 1 l 12 -22 l -23 -2 l 11 -19 l -10 -17 l -34 0 l -5 9 l 6 8 l -8 12 l 11 17 l -4 14 l 6 6 l -6 13 l 10 15 l -7 13 l 14 19 z"
    		},{
    			id : "CHILE",
				display :"Chile",
				coords : ["130","465"],
    			path : "M 109 395 l 12 -22 l 22 0 l 12 19 l -10 3 l -6 7 l 10 21 l 13 2 l 6 11 l 11 -1 l 24 42 l -34 0 l -5 9 l 6 8 l -8 12 l 11 17 l -4 14 l 6 6 l -6 13 l 10 15 l -7 13 l 14 19 l -12 1 l -12 -20 l 8 -11 l -14 -19 l 5 -13 l -6 -6 l 7 -12 l -12 -20 l 6 -12 l -9 -7 l 9 -11 l -6 -10 l 5 -8 l -5 -10 l -12 -1 z"
    		},{
    			id : "COLOMBIA",
				display :"Colômbia",
				coords : ["175","345"],
    			path : "M 149 322 l 7 12 l 33 -1 l 12 22 l 14 0 l 5 9 l -6 9 l -11 2 l -7 -10 l -23 -2 l 6 11 l -23 -1 l 8 10 l -9 9 l -12 -19 l -22 0 z"
    		},{
    			id : "BRASIL",
				display :"Brasil",
				coords : ["215","460"],
    			path : "M 225 515 l -23 -2 l 11 -19 l -10 -17 l -24 -42 l -11 1 l -6 -11 l -13 -2 l -10 -21 l 6 -7 l 10 -3 l 9 -9 l -8 -10 l 23 1 l -6 -11 l 23 2 l 7 10 l 11 -2 l 6 -9 l 18 31 l 23 -1 l 6 11 l 13 -1 l 9 21 l -5 11 l -11 0 l -13 20 l 8 8 l -13 20 l -11 1 z"
    		}]
    	},{
    		id : "EUROPA",
    		color : ["#AA44FF","#6600CC"],
    		countries : [{
    			id : "ISLANDIA",
				display :"Islândia",
				coords : ["",""],
    			path : "M 392 123 l -4 -9 l 7 -10 l 13 -1 l 4 9 l -6 12 z"
    		},{
    			id : "SUECIA",
				display :"",
				coords : ["",""],
    			path : "M 432 113 l 13 -18 l 23 0 l 10 -11 l 8 0 l 5 -11 l 34 0 l -15 29 l 11 21 l -6 9 l -23 0 l 4 -7 l 11 -4 l -5 -10 l -11 3 l -17 26 l -5 0 l -6 -18 l -12 4 l -7 9 l -10 1 l 6 -14 z"
    		},{
    			id : "MOSCOU",
				display :"",
				coords : ["",""],
    			path : "M 515 132 l 6 -9 l -11 -21 l 15 -29 l 13 0 l 6 9 l -11 2 l -11 17 l 10 4 l 8 -10 l 19 -1 l 6 9 l 11 0 l -4 -8 l 12 0 l 26 46 l -9 2 l -13 20 l 17 31 l -3 7 l -11 0 l -7 10 l 6 12 l -14 0 l -4 8 l 11 22 l -13 0 l -4 -9 l -10 0 l 4 -10 l -11 -1 l 5 -11 l -4 -12 l -6 13 l -10 0 l -7 -13 l -6 13 l -5 -12 l -12 1 l -7 -9 l 9 -9 l -21 -30 l 6 -8 l 11 -4 l 4 12 l 10 -12 l -8 -10 l 12 1 z"
    		},{
    			id : "INGLATERRA",
				display :"Inglaterra",
				coords : ["",""],
    			path : "M 376 174 l -12 2 l -5 -13 l 12 0 l 5 11 l 7 -10 l -6 -10 l 13 -3 l 7 12 l -8 10 l 11 1 l 6 11 l -35 1 z"
    		},{
    			id : "ALEMANHA",
				display :"Alemanha",
				coords : ["",""],
    			path : "M 441 184 l 9 -20 l -5 -11 l 6 -9 l 6 8 l 13 2 l 6 10 l -2 21 l 12 19 l -8 10 l -9 0 l -10 1 z"
    		},{
    			id : "PORTUGAL",
				display :"Portugal",
				coords : ["",""],
    			path : "M 441 184 l 18 31 l 10 -1 l 7 9 l 9 21 l -5 10 l -13 1 l 6 -12 l -11 -20 l -23 0 l -1 9 l -15 2 l 5 10 l -25 0 l -3 -8 l 6 -12 l -7 -11 l 20 0 l -9 -22 l 10 3 l 10 -13 z"
    		},{
    			id : "POLONIA",
				display :"Polônia",
				coords : ["",""],
    			path : "M 476 223 l -7 -9 l 9 0 l 8 -10 l -12 -19 l 2 -21 l 9 0 l 21 30 l -9 9 l 7 9 l 12 -1 l 5 12 l -6 10 l -6 11 l -4 8 l 4 12 l -13 0 l -6 -9 l 6 -16 l -12 -16 z"
    		}]
    	},{
    		id : "OCEANIA",
    		color : ["#3399FF", "#0055BB"],
    		countries : [{
    			id : "SUMATRA",
				display :"Sumatra",
				coords : ["",""],
    			path : "M 715 426 l 14 -1 l 23 37 l -7 13 l 23 -1 l 6 11 l -23 2 l -6 -12 l -19 -26 z"
    		},{
    			id : "BORNEO",
				display :"Borneo",
				coords : ["",""],
    			path : "M 770 437 l 10 -2 l 4 -11 l 12 0 l 8 -11 l 12 -1 l -19 33 l 33 1 l 3 -11 l 9 0 l 1 9 l -13 2 l -4 10 l -11 -2 l 4 11 l -11 0 l -8 -11 l -3 -9 l -5 10 l -11 3 l -11 -21 z"
    		},{
    			id : "NOVAGUINE",
				display :"Nova Guiné",
				coords : ["",""],
    			path : "M 831 484 l 10 -19 l 5 7 l 12 3 l 26 40 l -9 10 l -8 -9 l -10 -2 l -17 -31 z"
    		},{
    			id : "AUSTRALIA",
				display :"Austrália",
				coords : ["",""],
    			path : "M 690 567 l 12 -1 l -5 -10 l 18 -30 l 32 -1 l 8 -10 l 13 -2 l 6 -9 l 11 -1 l -6 12 l 11 1 l 9 -13 l 10 0 l 5 10 l -7 11 l 1 12 l 17 -20 l 1 -13 l 11 9 l -2 14 l -9 26 l 9 20 l -19 32 l -10 -2 l -6 11 l -12 5 l -3 8 l -24 0 l -12 -16 l 1 -16 l 3 -11 l -6 -2 l -12 6 l -32 1 l -8 -8 z"
    		}]
    	},{
    		id : "ASIA",
    		color : ["#FFCC55", "#BB8811"],
     		countries : [{
    			id : "OMSK",
				display :"Omsk",
				coords : ["",""],
    			path : "M 605 194 l -17 -31 l 13 -20 l 9 -2 l -26 -46 l -8 -11 l 15 0 l 14 26 l 12 3 l 13 1 l 7 8 l -7 9 l 42 72 l 13 1 l 2 9 l -8 20 l -8 11 l -10 0 l -6 -9 l 7 -10 l -21 -31 l -36 0 z"
    		},{
    			id : "DUDINKA",
				display :"Dudinka",
				coords : ["",""],
    			path : "M 687 213 l -2 -9 l -13 -1 l -42 -72 l 7 -9 l -7 -8 l -13 -1 l -13 -19 l 10 -1 l -5 -9 l 12 -1 l 6 8 l 42 2 l 9 -11 l 9 10 l -9 8 l 12 22 l -12 0 l 15 19 l -14 2 l -4 -11 l -10 0 l -9 9 l 14 22 l 10 20 l 14 1 l 6 9 l -4 11 l 5 10 l 23 -1 l -8 8 l -21 2 z"
    		},{
    			id : "SIBERIA",
				display :"Sibéria",
				coords : ["",""],
    			path : "M 670 163 l -14 -22 l 9 -9 l 10 0 l 4 11 l 14 -2 l -15 -19 l 12 0 l -12 -22 l -9 -7 l 9 -11 l 9 10 l 22 2 l 4 10 l 16 0 l 15 25 l -8 14 l 12 16 l 26 4 l -6 10 l -23 -3 l -4 10 l -11 2 l -14 -22 l -46 3 z"
    		},{
    			id : "VLADIVOSTOK",
				display :"Vladivostok",
				coords : ["",""],
    			path : "M 774 163 l -26 -4 l -12 -16 l 8 -14 l -13 -26 l 8 -2 l 5 12 l 12 -1 l 9 11 l 13 0 l 4 9 l 31 1 l 9 10 l 57 0 l 4 10 l -13 0 l 6 8 l -5 10 l -12 3 l 12 13 l 6 14 l -5 11 l -14 -19 l -11 -21 l -11 0 l 8 12 l -28 -1 l -9 14 l 13 4 l 17 28 l -15 31 l 11 24 l -8 12 l -17 -33 l 15 -32 l -4 -8 l -22 1 l -6 -11 l -10 1 l -12 -21 l 9 -1 l -6 -9 l 11 0 l 8 -12 l -5 -9 z"
    		},{
    			id : "TCHITA",
				display :"Tchita",
				coords : ["",""],
    			path : "M 724 213 l -23 1 l -5 -10 l 4 -11 l -6 -9 l -14 -1 l -10 -20 l 46 -3 l 14 22 l 11 -2 l 4 -10 l 23 3 l 6 -10 l 12 -1 l 5 9 l -8 12 l -11 0 l 6 9 l -9 1 l 12 21 l -6 9 l -34 0 l -8 -12 z"
    		},{
    			id : "ARAL",
				display :"Aral",
				coords : ["",""],
    			path : "M 590 223 l -6 -12 l 7 -10 l 11 0 l 3 -7 l 36 0 l 21 31 l -7 10 l 6 9 l 10 0 l 6 10 l -23 -1 l 6 11 l -7 11 l -3 -12 l -26 0 l -5 9 l -11 -17 l -14 -23 l 7 -8 z"
    		},{
    			id : "MONGOLIA",
				display :"Mongólia",
				coords : ["",""],
    			path : "M 679 233 l 8 -20 l 8 10 l 21 -2 l 8 -8 l 9 -2 l 8 12 l 34 0 l 7 9 l -7 12 l -14 0 l -3 9 l -33 3 l -7 -13 l -15 0 l -3 -12 z"
    		},{
    			id : "CHINA",
				display :"China",
				coords : ["",""],
    			path : "M 653 275 l 7 -11 l -6 -11 l 23 1 l -6 -10 l 8 -11 l 21 -2 l 3 12 l 15 0 l 7 13 l 33 -3 l 3 -9 l 14 0 l 7 -12 l -6 -10 l 5 -8 l 10 -1 l 6 11 l 22 -1 l 4 8 l -15 32 l -9 1 l -6 10 l 23 40 l -19 29 l -21 0 l -8 -11 l -11 -2 l -3 11 l -18 -29 l -36 1 l -5 -9 l -10 1 l -8 -11 l 9 -9 l -7 -11 z"
    		},{
    			id : "JAPAO",
				display :"Japão",
				coords : ["",""],
    			path : "M 880 252 l 17 1 l 4 8 l -6 8 l 7 13 l -4 10 l -26 1 l 9 10 l -8 9 l -9 -9 l 8 -10 l 5 -11 l 10 -1 l -9 -12 l 9 -10 z"
    		},{
    			id : "ORIENTEMEDIO",
				display :"Oriente Médio",
				coords : ["",""],
    			path : "M 539 293 l -6 -9 l 12 -20 l -24 0 l -12 -20 l 6 -11 l 9 10 l 32 1 l 10 0 l 4 9 l 13 0 l 7 10 l 11 2 l 7 -10 l 11 17 l -7 10 l 13 23 l -22 -1 l -9 -12 l -17 -1 l 3 12 l 10 1 l 4 10 l 15 0 l 6 8 l -13 25 l -6 -2 l -19 17 l -21 -37 z"
    		},{
    			id : "INDIA",
				display :"Índia",
				coords : ["",""],
    			path : "M 625 305 l -13 -23 l 7 -10 l 5 -9 l 26 0 l 3 12 l 26 -1 l 7 11 l -9 9 l 8 11 l 10 -1 l 5 9 l 35 0 l -10 21 l -24 -2 l -11 20 l 6 11 l -7 12 l 6 10 l -8 11 l -12 0 l -19 -31 l 9 -11 l -12 -24 l -11 4 z"
    		},{
    			id : "VIETNA",
				display :"Vietnã",
				coords : ["",""],
    			path : "M 725 334 l 11 -22 l 18 29 l 3 -11 l 11 2 l 8 11 l 17 30 l -11 19 l -13 4 l -3 -12 l -9 9 l 18 29 l -15 3 l -16 -32 l 7 -9 z"
    		}]
    	},{
    		id : "AFRICA",
    		color : ["#FF99FF", "#BB55BB"],
    		countries : [{
    			id : "ARGELIA",
				display :"Argélia",
				coords : ["",""],
    			path : "M 374 276 l 13 0 l 11 -21 l 58 -3 l 7 9 l -15 29 l 1 12 l 13 2 l 6 8 l -5 11 l 6 11 l -9 23 l 9 16 l -6 14 l 7 8 l -38 1 l -3 -11 l -47 1 l -19 -25 l -10 -27 l 8 -21 l -4 -10 z"
    		},{
    			id : "EGITO",
				display :"Egito",
				coords : ["",""],
    			path : "M 468 312 l -6 -8 l -13 -2 l -1 -12 l 15 -29 l 12 6 l 5 7 l 34 1 l 5 9 l 14 0 l 6 9 l -12 1 l 11 21 l -34 0 l -4 8 l -16 1 l -5 -10 z"
    		},{
    			id : "SUDAO",
				display :"Sudão",
				coords : ["",""],
    			path : "M 470 395 l -7 -8 l 6 -14 l -9 -16 l 9 -23 l -6 -11 l 5 -11 l 11 2 l 5 10 l 16 -1 l 4 -8 l 34 0 l 33 58 l 25 2 l -18 31 l -12 -2 l -27 54 l -25 -2 l -16 -34 l 16 -27 l -6 -12 l -33 1 z"
    		},{
    			id : "CONGO",
				display :"Congo",
				coords : ["",""],
    			path : "M 445 396 l 25 -1 l 5 -11 l 33 -1 l 6 12 l -16 27 l 16 34 l -17 29 l -23 2 l -5 -10 l -25 -2 l -5 -9 l 12 -22 l -19 -31 z"
    		},{
    			id : "AFRICASUL",
				display :"Africa do Sul",
				coords : ["",""],
    			path : "M 444 475 l 25 2 l 5 10 l 23 -2 l 17 -29 l 25 2 l 11 18 l -8 11 l -20 -1 l -7 9 l 5 13 l -24 41 l -35 -1 l -17 -32 l 8 -12 l -19 -21 z"
    		},{
    			id : "MADAGASCAR",
				display :"Madagascar",
				coords : ["",""],
    			path : "M 564 478 l 11 -2 l 11 -13 l 9 13 l -6 9 l -12 2 l 2 9 l -7 18 l -10 4 l -11 2 l -6 -11 l 8 -17 z"
    		}]
    	}
    ]
}