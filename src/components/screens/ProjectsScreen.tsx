import React, { useEffect, useState } from "react";

import {
  Project as ProjectType,
  Projects as ProjectsType,
} from "../../types/Project";
import ProjectsList from "../elements/ProjectsList";
import PageHeader from "../shared/PageHeader";
import Badge from "../shared/Badge";
import Row from "../shared/Row";
import ProjectFilters, {
  sortByStarsDesc,
  sortByStartDateAsc,
  sortByStartDateDesc,
  SortOption,
  supportedSortOptions,
} from "../elements/ProjectFilters";
// TODO: Add project stars
// import { getGitHubProjectStars, getTotalGetHubProjectStars } from '../../utils/project';
import { projectMapToArray } from "../../utils/project";
import Stars from "../shared/Stars";
import { getStringSearchParam, setSearchParam } from "../../utils/url";

type ProjectsScreenProps = {
  projects: ProjectsType;
};

type ProjectSorter = {
  // Returns -1, 0, +1.
  sort: (a: ProjectType, b: ProjectType) => number;
};

type ProjectSorters = Record<SortOption, ProjectSorter>;

const SORT_PARAM_NAME = "sort";

// @ts-ignore
const projectSorters: ProjectSorters = {
  [sortByStartDateDesc]: {
    sort: (a: ProjectType, b: ProjectType): number => {
      if (!a?.startDate || !b.startDate || a.startDate === b.startDate) {
        return 0;
      }
      return a.startDate > b.startDate ? -1 : 1;
    },
  },
  [sortByStartDateAsc]: {
    sort: (a: ProjectType, b: ProjectType): number => {
      if (!a?.startDate || !b.startDate || a.startDate === b.startDate) {
        return 0;
      }
      return a.startDate < b.startDate ? -1 : 1;
    },
  },
  [sortByStarsDesc]: {
    sort: (a: ProjectType, b: ProjectType): number => {
      // TODO: Add project stars
      //   const aStars = getGitHubProjectStars(a) || 0;
      const aStars = 10;
      //   const bStars = getGitHubProjectStars(b) || 0;
      const bStars = 10;
      if (aStars === bStars) {
        return 0;
      }
      return aStars > bStars ? -1 : 1;
    },
  },
};

const getDefaultSortOption = (): SortOption => {
  const defaultOption = sortByStartDateDesc;
  // @ts-ignore
  const sortFromURL: SortOption = getStringSearchParam(
    SORT_PARAM_NAME,
    defaultOption
  );
  if (supportedSortOptions.includes(sortFromURL)) {
    return sortFromURL;
  }
  return defaultOption;
};

const ProjectsScreen = (props: ProjectsScreenProps): React.ReactElement => {
  const { projects } = props;

  const [sortBy, setSortBy] = useState<SortOption>(getDefaultSortOption());
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(
    projectMapToArray(projects)
  );

  const onSort = (newSortOption: SortOption): void => {
    setSearchParam(SORT_PARAM_NAME, newSortOption);
    setSortBy(newSortOption);
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const sortedProjects = [...filteredProjects].sort(
      projectSorters[sortBy].sort
    );
    setFilteredProjects(sortedProjects);
  }, [sortBy]);

  const projectsNum = filteredProjects.length;

  return (
    <div id="Projects">
      <Row className="mt-6">
        <PageHeader>Projects</PageHeader>
        <Badge className="ml-3 self-start">{projectsNum}</Badge>
      </Row>
      <Row className="mb-6 justify-between">
        {/* <ProjectFilters onSort={onSort} sortBy={sortBy} /> */}
        <Row className="ml-3">
          {/* <div className="text-sm text-gray-500 mr-1">Total stars:</div> */}
          {/* TODO: Add Project Stars */}
          {/* <Stars stars={getTotalGetHubProjectStars(projects)} /> */}
          {/* <Stars stars={10} /> */}
        </Row>
      </Row>
      <ProjectsList projects={filteredProjects} />
    </div>
  );
};

export default ProjectsScreen;
