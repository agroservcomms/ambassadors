export interface Ambassador {
  id: string;
  name: string;
  role: string;
  institution: string;
  country: string;
  image: string;
  bio: string;
  expertise: string[];
  linkedIn?: string;
  email?: string;
}

export const ambassadors: Ambassador[] = [
  {
    id: "1",
    name: "Isabel Nogués",
    role: "Senior Researcher",
    institution: "Institute of Research on Terrestrial Ecosystems, Italian National Research Council",
    country: "Italy",
    image: "/images/isabel.png",
    bio: "Isabel Nogués is a biochemist who began her scientific path exploring plants at the protein and cellular level. Her curiosity soon pushed her beyond the molecular scale—first to whole‑plant physiology, and later to the fascinating world of plant–soil interactions. Today, her passion for agroecology is driven by understanding how small biological processes influence entire ecosystems. Isabel loves connecting science with real landscapes, and when she’s not researching, she’s happiest outdoors discovering local nature and traditions.",
    expertise: ["Biochar", "Plant physiology", "Biochemistry", "Degraded soils", "Circular economy"],
    linkedIn: "https://www.linkedin.com/in/isabel-nogues-909318b3/",
    email: "mariaisabel.noguesgonzalez@cnr.it"
  },
  {
    id: "2",
    name: "Iman Mirmazloum",
    role: "Senior Researcher",
    institution: "Hungarian University of Agriculture and Life Sciences",
    country: "Hungary",
    image: "/images/iman.png",
    bio: "Iman is a plant biologist and senior research fellow at the Hungarian University of Agriculture and Life Sciences (MATE), fascinated by how plants cope with stress and still manage to grow, survive, and surprise us. His research explores plant physiology and molecular responses to challenging environments, with a special interest in medicinal plants and their bioactive compounds. He is driven by the simple joy of connecting lab science to real-world agroecological solutions.",
    expertise: ["Medicinal and aromatic plants biotechnology", "Metabolic engineering", "Molecular genetics", "Biostimulants and priming strategies", "Abiotic stresses and plant stress physiology"],
    linkedIn: "https://www.linkedin.com/in/iman-mirmazloum/ ",
    email: "Mirmazloum.Seyediman@uni-mate.hu "
  },
  {
    id: "3",
    name: "Mauro Coppa",
    role: "Professor",
    institution: "University of Turin, Department of Agricultural, Forest and Food Sciences",
    country: "Italy",
    image: "/images/mauro.png",
    bio: "Mauro is currently professor in animal scineces at the University of Turin (Italy). Passionate for mountain, plants and animals since his youth, he had his Master in Forestry Science at the University of Turin and spent his Ph.D. between Turin and INRAE in France, studying the relationship between pasture characteristics and quality of derived dairy products. His overview on the effect of dairy farming management on product quality became wider during his post-docs in France and Italy. Before his current position in Turin, he spent 6 years at INRAE as an independent researcher, working on dietary strategies to reduce enteric methane emission, increase feed efficiency, longevity, use of local breeds, and others. He actively participates to farmers’ meetings and networking, aiming at disseminating research results and collecting the request of the primary production.",
    expertise: ["Dairy product quality", "IR spectroscopy", "Dairy farming systems", "Farming practices", "Pasture-based systems", "Ruminant nutrition", "Forages"],
    email: "mauro.coppa@unito.it",
  },
  {
    id: "4",
    name: "Juan Carlos De la Concepcion",
    role: "Junior Group Leader",
    institution: "Center for Molecular Plant Biology, ZMBP",
    country: "Germany",
    image: "/images/juan.png",
    bio: "",
    expertise: [""],
    linkedIn: "",
  },
  {
    id: "5",
    name: "Alberto Akiki",
    role: "PhD candidate",
    institution: "University School for Advanced Studies, IUSS Pavia and University of Teramo",
    country: "Italy",
    image: "/images/alberto.png",
    bio: "I’m Alberto Akiki, a PhD candidate with a background in agricultural engineering. My journey took me from valorizing local essential oils and managing hydroponic projects to Italy, which sparked my passion for agroecology. Today, I aim to hold my PhD in sustainable development and climate change working with local food businesses on ancient emmer wheat supply chain, exploring how sustainable products can be nutritious, socially accepted, and climate-friendly.",
    expertise: ["Emmer wheat", "Sustainable food systems", "Food technology", "Consumer acceptance"],
    linkedIn: "https://www.linkedin.com/in/alberto-akiki-857132186",
    email: "https://www.linkedin.com/in/alberto-akiki-857132186"
  },
];
