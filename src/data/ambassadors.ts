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
    name: "",
    role: "Senior Researcher",
    institution: "",
    country: "France",
    image: "",
    bio: ".",
    expertise: ["Agroecology", "Sustainable Agriculture", "Soil Health"],
    linkedIn: "https://linkedin.com",
  },
  {
    id: "2",
    name: "",
    role: "",
    institution: "",
    country: "Hungary",
    image: "",
    bio: "Leading research on integrated pest management and biodiversity conservation in agricultural landscapes.",
    expertise: ["Integrated Pest Management", "Biodiversity", "Climate Adaptation"],
    linkedIn: "https://linkedin.com",
  },
  {
    id: "3",
    name: "",
    role: "",
    institution: "",
    country: "Poland",
    image: "",
    bio: "Expert in precision agriculture technologies and their application in sustainable food production.",
    expertise: ["Precision Agriculture", "AgTech", "Data Science"],
    linkedIn: "https://linkedin.com",
  },
  {
    id: "4",
    name: "Dr.  ",
    role: "",
    institution: "",
    country: "Italy",
    image: "",
    bio: "Pioneering work in organic farming systems and circular economy approaches to agriculture.",
    expertise: ["Organic Farming", "Circular Economy", "Food Systems"],
    linkedIn: "https://linkedin.com",
  },
  {
    id: "5",
    name: "Dr.",
    role: "Environmental Scientist",
    institution: "",
    country: "",
    image: "",
    bio: "Focused on carbon sequestration in agricultural soils and climate-smart farming practices.",
    expertise: ["Carbon Sequestration", "Climate Science", "Soil Biology"],
    linkedIn: "https://linkedin.com",
  },
  {
    id: "6",
    name: "",
    role: "Chair",
    institution: "Technical University",
    country: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Leading interdisciplinary research on ecosystem services and sustainable land management.",
    expertise: ["Ecosystem Services", "Land Management", "Policy"],
    linkedIn: "https://linkedin.com",
  },
];
