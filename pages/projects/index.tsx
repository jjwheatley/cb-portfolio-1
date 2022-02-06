import type { NextPage } from "next";
import BaseLayout from "../../layout/BaseLayout";
import { Footer } from "../../components";

const ProjectPage: NextPage = () => {
  return (
    <BaseLayout
      head={{
        title: "Projects",
        description:
          "A list of projects created during our codebuddies collaboration",
      }}
    >
      <div>{`I am a placeholder for the 'Projects' page`}</div>
    </BaseLayout>
  );
};

export default ProjectPage;
