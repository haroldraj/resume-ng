import { ProcessedResume } from "../schema/resume";
import Project from "./Project";
import Title from "./Title";

interface Page2Props
{
    projects: ProcessedResume["page1"];
}

const Page1 = ({ projects }: Page2Props) =>
{
    return (
        <>
            <Title title="Projects" />
            <div className="print:columns-2">
                {projects?.map((project, i) => (
                    <Project key={`${project.name}-${i}`} project={project} index={i} incolumns={true} />
                ))}
            </div>
        </>

    );
};

export default Page1;
