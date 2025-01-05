export interface Step {
  number: string;
  title: string;
  description: string;
  icon: any; // Using any for Lucide icons
}

export interface StepProps extends Step {
  isActive: boolean;
}