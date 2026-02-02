import { Linkedin, Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";
import type { Ambassador } from "@/data/ambassadors";

interface AmbassadorCardProps extends Ambassador {}

const AmbassadorCard = ({
  name,
  role,
  institution,
  country,
  image,
  bio,
  expertise,
  linkedIn,
  email,
}: AmbassadorCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div 
      className="ambassador-card-container cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={handleFlip}
    >
      <div 
        className={`ambassador-card-inner relative transition-transform duration-500`}
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front Side */}
        <div 
          className="ambassador-card group"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Image */}
          <div className="relative overflow-hidden aspect-square">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Social Links Overlay */}
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-background/90 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-background/90 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Flip hint */}
            <div className="absolute top-4 right-4 bg-background/80 px-2 py-1 rounded text-xs font-medium text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to flip
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="mb-3">
              <h3 className="font-bold text-lg text-foreground">{name}</h3>
              <p className="text-sm text-primary font-medium">{role}</p>
              <p className="text-sm text-muted-foreground">
                {institution} • {country}
              </p>
            </div>

            {/* Contact Links - Always Visible */}
            <div className="flex gap-2 mb-4">
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs bg-card-blue text-foreground/80 px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs bg-card-orange text-foreground/80 px-3 py-1.5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  Email
                </a>
              )}
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2">
              {expertise.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-card-green text-primary px-2 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
              {expertise.length > 2 && (
                <span className="text-xs text-muted-foreground">
                  +{expertise.length - 2} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="ambassador-card absolute inset-0 bg-card p-6 flex flex-col"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg text-foreground">{name}</h3>
            <button 
              onClick={handleFlip}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <p className="text-sm text-primary font-medium mb-1">{role}</p>
          <p className="text-xs text-muted-foreground mb-4">
            {institution} • {country}
          </p>

          <div className="flex-1 overflow-y-auto">
            <h4 className="text-sm font-semibold text-foreground mb-2">About</h4>
            <p className="text-sm text-foreground/70 mb-4">{bio}</p>

            <h4 className="text-sm font-semibold text-foreground mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {expertise.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-card-green text-primary px-2 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex gap-2 pt-4 border-t border-border mt-auto">
            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs bg-card-blue text-foreground/80 px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-3 h-3" />
                LinkedIn
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs bg-card-orange text-foreground/80 px-3 py-1.5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Mail className="w-3 h-3" />
                Email
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorCard;
