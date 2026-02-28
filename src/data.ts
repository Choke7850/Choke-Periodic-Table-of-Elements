export const categories = [
  { id: 'alkali-metal', label: 'Alkali Metals' },
  { id: 'alkaline-earth-metal', label: 'Alkaline Earth Metals' },
  { id: 'lanthanoid', label: 'Lanthanoids' },
  { id: 'actinoid', label: 'Actinoids' },
  { id: 'transition-metal', label: 'Transition Metals' },
  { id: 'post-transition-metal', label: 'Post-Transition Metals' },
  { id: 'metalloid', label: 'Metalloids' },
  { id: 'other-nonmetal', label: 'Other Nonmetals' },
  { id: 'noble-gas', label: 'Noble Gasses' },
  { id: 'unknown', label: 'Unknown' },
];

const rawElements = `1|H|Hydrogen|1.008|other-nonmetal|1|1|1
2|He|Helium|4.0026|noble-gas|18|1|2
3|Li|Lithium|6.94|alkali-metal|1|2|2,1
4|Be|Beryllium|9.0122|alkaline-earth-metal|2|2|2,2
5|B|Boron|10.81|metalloid|13|2|2,3
6|C|Carbon|12.011|other-nonmetal|14|2|2,4
7|N|Nitrogen|14.007|other-nonmetal|15|2|2,5
8|O|Oxygen|15.999|other-nonmetal|16|2|2,6
9|F|Fluorine|18.998|other-nonmetal|17|2|2,7
10|Ne|Neon|20.18|noble-gas|18|2|2,8
11|Na|Sodium|22.99|alkali-metal|1|3|2,8,1
12|Mg|Magnesium|24.305|alkaline-earth-metal|2|3|2,8,2
13|Al|Aluminium|26.982|post-transition-metal|13|3|2,8,3
14|Si|Silicon|28.085|metalloid|14|3|2,8,4
15|P|Phosphorus|30.974|other-nonmetal|15|3|2,8,5
16|S|Sulfur|32.06|other-nonmetal|16|3|2,8,6
17|Cl|Chlorine|35.45|other-nonmetal|17|3|2,8,7
18|Ar|Argon|39.948|noble-gas|18|3|2,8,8
19|K|Potassium|39.098|alkali-metal|1|4|2,8,8,1
20|Ca|Calcium|40.078|alkaline-earth-metal|2|4|2,8,8,2
21|Sc|Scandium|44.956|transition-metal|3|4|2,8,9,2
22|Ti|Titanium|47.867|transition-metal|4|4|2,8,10,2
23|V|Vanadium|50.942|transition-metal|5|4|2,8,11,2
24|Cr|Chromium|51.996|transition-metal|6|4|2,8,13,1
25|Mn|Manganese|54.938|transition-metal|7|4|2,8,13,2
26|Fe|Iron|55.845|transition-metal|8|4|2,8,14,2
27|Co|Cobalt|58.933|transition-metal|9|4|2,8,15,2
28|Ni|Nickel|58.693|transition-metal|10|4|2,8,16,2
29|Cu|Copper|63.546|transition-metal|11|4|2,8,18,1
30|Zn|Zinc|65.38|transition-metal|12|4|2,8,18,2
31|Ga|Gallium|69.723|post-transition-metal|13|4|2,8,18,3
32|Ge|Germanium|72.63|metalloid|14|4|2,8,18,4
33|As|Arsenic|74.922|metalloid|15|4|2,8,18,5
34|Se|Selenium|78.971|other-nonmetal|16|4|2,8,18,6
35|Br|Bromine|79.904|other-nonmetal|17|4|2,8,18,7
36|Kr|Krypton|83.798|noble-gas|18|4|2,8,18,8
37|Rb|Rubidium|85.468|alkali-metal|1|5|2,8,18,8,1
38|Sr|Strontium|87.62|alkaline-earth-metal|2|5|2,8,18,8,2
39|Y|Yttrium|88.906|transition-metal|3|5|2,8,18,9,2
40|Zr|Zirconium|91.224|transition-metal|4|5|2,8,18,10,2
41|Nb|Niobium|92.906|transition-metal|5|5|2,8,18,12,1
42|Mo|Molybdenum|95.95|transition-metal|6|5|2,8,18,13,1
43|Tc|Technetium|(98)|transition-metal|7|5|2,8,18,13,2
44|Ru|Ruthenium|101.07|transition-metal|8|5|2,8,18,15,1
45|Rh|Rhodium|102.91|transition-metal|9|5|2,8,18,16,1
46|Pd|Palladium|106.42|transition-metal|10|5|2,8,18,18
47|Ag|Silver|107.87|transition-metal|11|5|2,8,18,18,1
48|Cd|Cadmium|112.41|transition-metal|12|5|2,8,18,18,2
49|In|Indium|114.82|post-transition-metal|13|5|2,8,18,18,3
50|Sn|Tin|118.711|post-transition-metal|14|5|2,8,18,18,4
51|Sb|Antimony|121.76|metalloid|15|5|2,8,18,18,5
52|Te|Tellurium|127.6|metalloid|16|5|2,8,18,18,6
53|I|Iodine|126.9|other-nonmetal|17|5|2,8,18,18,7
54|Xe|Xenon|131.29|noble-gas|18|5|2,8,18,18,8
55|Cs|Caesium|132.91|alkali-metal|1|6|2,8,18,18,8,1
56|Ba|Barium|137.33|alkaline-earth-metal|2|6|2,8,18,18,8,2
57|La|Lanthanum|138.91|lanthanoid|4|9|2,8,18,18,9,2
58|Ce|Cerium|140.12|lanthanoid|5|9|2,8,18,19,9,2
59|Pr|Praseodymium|140.91|lanthanoid|6|9|2,8,18,21,8,2
60|Nd|Neodymium|144.24|lanthanoid|7|9|2,8,18,22,8,2
61|Pm|Promethium|145|lanthanoid|8|9|2,8,18,23,8,2
62|Sm|Samarium|150.36|lanthanoid|9|9|2,8,18,24,8,2
63|Eu|Europium|151.96|lanthanoid|10|9|2,8,18,25,8,2
64|Gd|Gadolinium|157.25|lanthanoid|11|9|2,8,18,25,9,2
65|Tb|Terbium|158.93|lanthanoid|12|9|2,8,18,27,8,2
66|Dy|Dysprosium|162.5|lanthanoid|13|9|2,8,18,28,8,2
67|Ho|Holmium|164.93|lanthanoid|14|9|2,8,18,29,8,2
68|Er|Erbium|167.26|lanthanoid|15|9|2,8,18,30,8,2
69|Tm|Thulium|168.93|lanthanoid|16|9|2,8,18,31,8,2
70|Yb|Ytterbium|173.05|lanthanoid|17|9|2,8,18,32,8,2
71|Lu|Lutetium|174.97|lanthanoid|18|9|2,8,18,32,9,2
72|Hf|Hafnium|178.49|transition-metal|4|6|2,8,18,32,10,2
73|Ta|Tantalum|180.95|transition-metal|5|6|2,8,18,32,11,2
74|W|Tungsten|183.84|transition-metal|6|6|2,8,18,32,12,2
75|Re|Rhenium|186.21|transition-metal|7|6|2,8,18,32,13,2
76|Os|Osmium|190.23|transition-metal|8|6|2,8,18,32,14,2
77|Ir|Iridium|192.22|transition-metal|9|6|2,8,18,32,15,2
78|Pt|Platinum|195.08|transition-metal|10|6|2,8,18,32,17,1
79|Au|Gold|196.97|transition-metal|11|6|2,8,18,32,18,1
80|Hg|Mercury|200.59|transition-metal|12|6|2,8,18,32,18,2
81|Tl|Thallium|204.38|post-transition-metal|13|6|2,8,18,32,18,3
82|Pb|Lead|207.2|post-transition-metal|14|6|2,8,18,32,18,4
83|Bi|Bismuth|208.98|post-transition-metal|15|6|2,8,18,32,18,5
84|Po|Polonium|(209)|post-transition-metal|16|6|2,8,18,32,18,6
85|At|Astatine|(210)|metalloid|17|6|2,8,18,32,18,7
86|Rn|Radon|(222)|noble-gas|18|6|2,8,18,32,18,8
87|Fr|Francium|(223)|alkali-metal|1|7|2,8,18,32,18,8,1
88|Ra|Radium|(226)|alkaline-earth-metal|2|7|2,8,18,32,18,8,2
89|Ac|Actinium|(227)|actinoid|4|10|2,8,18,32,18,9,2
90|Th|Thorium|232.04|actinoid|5|10|2,8,18,32,18,10,2
91|Pa|Protactinium|231.04|actinoid|6|10|2,8,18,32,20,9,2
92|U|Uranium|238.03|actinoid|7|10|2,8,18,32,21,9,2
93|Np|Neptunium|(237)|actinoid|8|10|2,8,18,32,22,9,2
94|Pu|Plutonium|(244)|actinoid|9|10|2,8,18,32,24,8,2
95|Am|Americium|(243)|actinoid|10|10|2,8,18,32,25,8,2
96|Cm|Curium|(247)|actinoid|11|10|2,8,18,32,25,9,2
97|Bk|Berkelium|(247)|actinoid|12|10|2,8,18,32,27,8,2
98|Cf|Californium|(251)|actinoid|13|10|2,8,18,32,28,8,2
99|Es|Einsteinium|(252)|actinoid|14|10|2,8,18,32,29,8,2
100|Fm|Fermium|(257)|actinoid|15|10|2,8,18,32,30,8,2
101|Md|Mendelevium|(258)|actinoid|16|10|2,8,18,32,31,8,2
102|No|Nobelium|(259)|actinoid|17|10|2,8,18,32,32,8,2
103|Lr|Lawrencium|(266)|actinoid|18|10|2,8,18,32,32,8,3
104|Rf|Rutherfordium|(267)|transition-metal|4|7|2,8,18,32,32,10,2
105|Db|Dubnium|(268)|transition-metal|5|7|2,8,18,32,32,11,2
106|Sg|Seaborgium|(269)|transition-metal|6|7|2,8,18,32,32,12,2
107|Bh|Bohrium|(270)|transition-metal|7|7|2,8,18,32,32,13,2
108|Hs|Hassium|(277)|transition-metal|8|7|2,8,18,32,32,14,2
109|Mt|Meitnerium|(278)|unknown|9|7|2,8,18,32,32,15,2
110|Ds|Darmstadtium|(281)|unknown|10|7|2,8,18,32,32,16,2
111|Rg|Roentgenium|(282)|unknown|11|7|2,8,18,32,32,17,2
112|Cn|Copernicium|(285)|transition-metal|12|7|2,8,18,32,32,18,2
113|Nh|Nihonium|(286)|unknown|13|7|2,8,18,32,32,18,3
114|Fl|Flerovium|(289)|post-transition-metal|14|7|2,8,18,32,32,18,4
115|Mc|Moscovium|(290)|unknown|15|7|2,8,18,32,32,18,5
116|Lv|Livermorium|(293)|unknown|16|7|2,8,18,32,32,18,6
117|Ts|Tennessine|(294)|unknown|17|7|2,8,18,32,32,18,7
118|Og|Oganesson|(294)|unknown|18|7|2,8,18,32,32,18,8`;

export const elements = rawElements.split('\n').map(line => {
  const [number, symbol, name, mass, category, col, row, orbitals] = line.split('|');
  return {
    number: parseInt(number),
    symbol,
    name,
    mass,
    category,
    col: parseInt(col),
    row: parseInt(row),
    orbitals: orbitals.split(',').map(Number)
  };
});
