/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  results: string[];
  beforeImg?: string;
  afterImg?: string;
  launchDate?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  image: string;
  rating: number;
  highlightMetric?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
}

export interface ToolCategory {
  category: string;
  tools: {
    name: string;
    level: string; // e.g. "Advanced", "Expert"
    usage: string; // e.g. "Ad Tracking", "Visuals"
  }[];
}
