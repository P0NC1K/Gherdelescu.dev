import { Project, ProjectID, Projects } from "@/types/Project";

export function projectMapToArray(projects: Projects): Project[] {
    return Object.keys(projects)
      .map<Project>((projectID: ProjectID) => {
        const project: Project = { ...projects[projectID] };
        // Make sure that the project ID is the same as the project key in the projects map.
        project.id = projectID;
        return project;
      });
  }