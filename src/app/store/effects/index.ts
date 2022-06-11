import { AuthEffects } from "./auth/auth.effects";
import { ProjectsEffects } from "./projects/projects.effects";
import { WorksEffects } from "./works/works.effects";

export const effectsArray: any[] = [
     AuthEffects,
     ProjectsEffects,
     WorksEffects
];