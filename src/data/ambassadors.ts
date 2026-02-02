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
    name: "Dr.  ",
    role: "Senior Researcher",
    institution: "institution",
    country: "France",
    image: "",
    bio: "Expert in agroecological transitions in arable cropping systems, focusing on diversifying crop rotations and reducing pesticide use.",
    expertise: ["Agroecology", "Sustainable Agriculture", "Soil Health"],
    linkedIn: "https://linkedin.com",
    email: "marie.dubois@example.com"
  },
  {
    id: "2",
    name: "Prof. Laszlo",
    role: "Professor of Ecology",
    institution: "Agriculture",
    country: "Hungary",
    image: "https://images..com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Leading research on integrated pest management and biodiversity conservation in agricultural landscapes.",
    expertise: ["Integrated Pest Management", "Biodiversity", "Climate Adaptation"],
    linkedIn: "https://linkedin.com",
  },
  {
    id: "3",
    name: "Dr. Anna",
    role: "Agricultural Engineer",
    institution: "University of Life Sciences",
    country: "Poland",
    image: "https://images.unsplash./photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Expert in precision agriculture technologies and their application in sustainable food production.",
    expertise: ["Precision Agriculture", "AgTech", "Data Science"],
    linkedIn: "https://linkedin.com",
  },
  {
    id: "4",
    name: "Dr. Rossi",
    role: "Sustainability Director",
    institution: "",
    country: "Italy",
    image: "https://.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Pioneering work in organic farming systems and circular economy approaches to agriculture.",
    expertise: ["Organic Farming", "Circular Economy", "Food Systems"],
    linkedIn: "https://linkedin.com",
  },
  {
    id: "5",
    name: "Dr. Sarah ",
    role: "Environmental Scientist",
    institution: " Research",
    country: "United Kingdom",
    image: "https://.unsplash.com/photo-1598550874175-4d7112ee7f1c?w=400&h=400&fit=crop",
    bio: "Focused on carbon sequestration in agricultural soils and climate-smart farming practices.",
    expertise: ["Carbon Sequestration", "Climate Science", "Soil Biology"],
    linkedIn: "https://linkedin.com",
  },
  {
    id: "6",
    name: "Prof. Thomas",
    role: "Chair",
    institution: "Technical University",
    country: "Germany",
    image: "https://images.unsplash./photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Leading interdisciplinary research on ecosystem services and sustainable land management.",
    expertise: ["Ecosystem Services", "Land Management", "Policy"],
    linkedIn: "https://linkedin.com",
  },
];
