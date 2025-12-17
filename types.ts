import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}