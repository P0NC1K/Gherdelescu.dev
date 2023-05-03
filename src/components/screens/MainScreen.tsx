import React from "react";

import PageLayout from "../layouts/PageLayout";
import type { Profile as ProfileType } from "../../types/Profile";
import Profile from "../elements/Profile";
import SEO from "../shared/SEO";
import { projects } from "../../data/projects";
import ProjectsScreen from "./ProjectsScreen";

type MainScreenProps = {
  profile: ProfileType;
};

const MainScreen = (props: MainScreenProps): React.ReactElement => {
  const { profile } = props;

  const summary: string =
    profile.summary && profile.summary.length ? profile.summary[0] : "";

  return (
    <PageLayout>
      <SEO
        title={`${profile.position}. ${summary}`}
        description={`${profile.firstName} ${profile.lastName}. ${profile.position}. ${summary}`}
      />
      <Profile profile={profile} />
      <ProjectsScreen projects={projects} />
    </PageLayout>
  );
};

export default MainScreen;
