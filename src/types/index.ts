// Global Mobility Connections Type Definitions

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  serviceInterest: string;
  message: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ClientType {
  title: string;
  description: string;
}

export interface CharmStep {
  letter: string;
  title: string;
  description: string;
}

export interface StatsData {
  aum: string;
  investmentMigration: string;
  goldenVisaSupport: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  locations: string[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  contactInfo: ContactInfo;
  stats: StatsData;
}

