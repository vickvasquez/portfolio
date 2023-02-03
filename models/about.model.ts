export interface Skill {
  name: string;
  level: string;
}

export interface About {
  description: string
  services?: string
  skills: Skill[]
}