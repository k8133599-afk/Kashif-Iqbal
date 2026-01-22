
import { Experience, SkillGroup, ContactInfo, CaseStudy } from './types';

export const PERSONAL_INFO = {
  name: "Kashif Iqbal",
  title: "Senior UX/UI Product Designer",
  specialization: "B2B, B2C, EUX, SaaS, E-commerce",
  experience_years: "8 Years",
  summary: "Dedicated to user-centric design principles and tailored for supply chain professionals, I play a pivotal role in developing sophisticated digital ecosystems that facilitate streamlined operations and enhanced user satisfaction."
};

export const CONTACT: ContactInfo = {
  email: "kashif._iqbal@outlook.com",
  phone: "+923364828583",
  linkedin: "linkedin.com/in/ka5hif"
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "g-wms",
    title: "G-WMS: Warehouse Management System Suite",
    category: "Logistics & Supply Chain",
    description: "Architected a full-stack Warehouse Management System Suite that unified fragmented logistics operations. Reduced order fulfillment cycles from 120 minutes to 45 minutes (62% faster) for enterprise-scale retail partners.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Full-Stack Suite", "Omni-Channel Sync", "B2B UX"],
    link: "https://www.notion.so/Warehouse-Management-System-Suite-2cdae18c1b7f803cba7aded91c87d421",
    details: {
      challenge: "Enterprise logistics faced critical bottlenecks due to legacy systems that failed to sync real-time stock across POS and online channels. This led to a 40% error rate in fulfillment and significant revenue loss during peak retail seasons.",
      solution: "Designed a centralized WMS Suite featuring a modular dashboard for inventory control, automated inbound/outbound routing, and a real-time synchronization engine that acts as the backbone for multi-tenant retail operations.",
      process: ["On-site Ethnographic Research", "Inventory Flow Mapping", "Interactive Prototyping", "Design System for Scale", "End-to-End UAT"],
      results: ["62% faster fulfillment cycles", "99.9% inventory accuracy via double-scan", "78% reduction in workforce training time", "Zero downtime during 11.11 & Black Friday sales"]
    }
  },
  {
    id: "last-mile",
    title: "Last-Mile: The Rider App",
    category: "Mobile Product",
    description: "Designed a high-efficiency mobile application for delivery personnel featuring real-time synchronization with the WMS. Achieved 99.9% inventory accuracy through double-scan verification workflows.",
    image: "https://images.unsplash.com/photo-1580674271209-40b46033610e?q=80&w=2070&auto=format&fit=crop",
    tags: ["iOS/Android", "Real-time Tracking", "Field Operations"],
    link: "https://www.notion.so/Last-Mile-The-Rider-App-178ae18c1b7f80789729df9994c927f8",
    details: {
      challenge: "Riders struggled with complex interfaces while navigating high-traffic routes, leading to data entry errors and lack of transparency for customers awaiting deliveries.",
      solution: "A streamlined, gesture-driven mobile app optimized for field use, featuring offline-first data sync and a 'Double-Scan' verification process to ensure parcel integrity at every hop.",
      process: ["Field Observation Sessions", "Rapid Prototyping", "A/B Testing Scan Workflows", "Accessibility Optimization"],
      results: ["99.9% delivery inventory accuracy", "25% increase in daily deliveries per rider", "Real-time tracking enabled for 1M+ customers"]
    }
  },
  {
    id: "omni-retail-pos",
    title: "Omni-Channel Retail POS",
    category: "E-commerce",
    description: "Developed a scalable Point-of-Sale framework that bridges the gap between offline retail and digital fulfillment centers, ensuring real-time stock updates across all sales channels.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
    tags: ["Retail Design", "Inventory Systems", "Interaction Design"],
    link: "https://www.notion.so/Omni-Channel-Retail-POS-177ae18c1b7f80c3b885e7834a36f736",
    details: {
      challenge: "Store managers were unable to fulfill online orders from store inventory due to lack of a unified interface, causing missed sales opportunities and high shipping costs from central hubs.",
      solution: "A modern POS system that turns every physical store into a local fulfillment center, allowing for Ship-from-Store and Click-and-Collect capabilities with zero UI friction.",
      process: ["Retail Staff Interviews", "Inventory Flow Logic Design", "Modular Component Library", "Cross-Platform Integration"],
      results: ["30% reduction in average shipping distance", "Increased in-store productivity by 40%", "Enabled same-day delivery for urban customers"]
    }
  },
  {
    id: "fieldops-crm",
    title: "FieldOps Manager & CRM",
    category: "Business Intelligence",
    description: "Translated complex supply chain data into actionable intelligence. Built an operations dashboard for managers to monitor field agent performance and customer relationships in a single pane.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["Data Visualization", "CRM Integration", "B2B UX"],
    link: "https://www.notion.so/FieldOps-Manager-CRM-177ae18c1b7f80f6993ce838386b71f9",
    details: {
      challenge: "Operations managers were overwhelmed by 'Data Noise'—thousands of raw data points from field agents without any way to prioritize urgent issues or identify performance trends.",
      solution: "A comprehensive BI dashboard that filters noise through intelligent status indicators and predictive alerting, giving managers a high-level view and granular control in one place.",
      process: ["Manager Persona Mapping", "Data Visualization Audits", "Iterative Dashboard Design", "Stakeholder Feedback Cycles"],
      results: ["50% faster response time to field issues", "Clear visibility into agent ROI", "Standardized reporting across 12 regional hubs"]
    }
  },
  {
    id: "intercargo-brand",
    title: "Intercargo: Brand Transformation",
    category: "Digital Strategy",
    description: "Executed a comprehensive brand strategy and UI overhaul for Intercargo Logistics. The project resulted in a 70% increase in brand awareness and standardized the design system.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
    tags: ["Brand Identity", "Design Systems", "Web Strategy"],
    details: {
      challenge: "As Intercargo expanded globally, their visual identity became fragmented across regions, weakening brand trust and making digital product updates slow and expensive.",
      solution: "A complete brand refresh and a scalable 'Core Design System' (CDS) that standardized all digital touchpoints, from marketing websites to internal logistics tools.",
      process: ["Competitive Brand Analysis", "Logo & Visual Language Refinement", "Design System Documentation", "Global Component Deployment"],
      results: ["70% increase in global brand awareness", "80% faster design-to-dev handoff", "Unified customer experience across 4 continents"]
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior UX/UI Product Designer",
    company: "Genesis AI",
    period: "Sep 2024 - Present",
    achievements: [
      "WMS Ecosystem: Synchronized retail and backend operations by integrating E-commerce, POS, and WMS.",
      "Workflow Automation: Automated 'Inbound-to-Outbound' processes via mobile and web interfaces.",
      "Ecommerce Mobile App: Optimized checkout-to-delivery journeys through a B2C app linked to fulfillment.",
      "Data Visualization: Reduced operational errors by translating complex supply chain data into intuitive UIs.",
      "Cross-Platform Scalability: Scaled a unified UI/UX framework ensuring consistency across Web, iOS, and Android.",
      "Business Intelligence: Led CRM and Fieldops integration to convert raw data into actionable intelligence."
    ],
    metrics: [
      "62% Faster Fulfillment: Cycles dropped from 120m to 45m.",
      "99.9% Inventory Accuracy: Eliminated discrepancies via Double-Scan verification.",
      "78% Reduction in Training: Proficiency achieved in 3 days vs 14 days."
    ]
  },
  {
    role: "Senior UX/UI Product Designer",
    company: "Intercargo Logistics",
    period: "Feb 2023 - July 2024",
    description: "Played a pivotal role in developing a sophisticated digital ecosystem for supply chain professionals.",
    achievements: [
      "Created and executed Brand Strategy that delivered 70% increase in brand awareness.",
      "Developed Brand Guidelines leading to 80% increase in brand usage consistency.",
      "Led Website Redesign project resulting in 70% increase in user satisfaction."
    ]
  },
  {
    role: "UX/UI Product Designer",
    company: "Buraq Studio",
    period: "March 2022 - Jan 2023",
    achievements: [
      "End-to-End Product Design: Spearheaded full design lifecycle for diverse web and mobile apps.",
      "Cross-Platform Delivery: Designed seamless interfaces for iOS/Android focusing on usability.",
      "Strategy & Research: Conducted stakeholder workshops, user journey mapping, and wireframing.",
      "Scalable Design Systems: Developed comprehensive systems to accelerate handoff.",
      "Collaborative Execution: Partnered with engineering teams through UAT for pixel-perfect launches."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Core Skills",
    items: [
      "Product Design", "UX Design", "UI Design", "Visual Design", "Design Systems", 
      "User Research", "User Flows", "Information Architecture", "Usability Testing", 
      "Interaction Design", "Prototyping", "Brand Strategy"
    ]
  },
  {
    category: "Tools",
    items: [
      "Figma", "Adobe XD", "Sketch", "Framer", "Illustrator", "Miro", 
      "Maze", "Hotjar", "AI Studio", "Zeplin"
    ]
  }
];

export const PERSONALITY = [
  "Empathetic", "Creative", "Detail-Oriented", "Collaborative", "Adaptable", "Passionate"
];

export const EDUCATION = {
  degree: "BSSE (Software Engineering)",
  university: "University of AJK",
  period: "2012-2016",
  courses: "Human Computer Interaction, Software Quality Engineering, Software Design & Architecture, Data Structures, etc."
};
