import Image from "next/image";
import Button from "../components/Button";

const getproject = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=resumeProject`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function projectContent() {
  const projects = await getproject();
  return (
    <div>
      <div className="md:px-[96px] px-[20px] ">
        <h1 className=" md:ml-[40%] text-4xl md:text-5xl text-orange-500 border-l-4 border-orange-500 p-5 font-extrabold mt-5 ">
          Projects
        </h1>
        <h2 className="md:ml-[30%] text-3xl lg:text-6xl xl:text-6xl text-gray-900 font-bold line">
          My Latest Project
        </h2>
      </div>

      <div>
        <ul className=" mt-3  px-5 md:px-16 md:grid lg:grid-cols-2">
          {projects.items.map((item: any) => (
            <div
              className="border-2 rounded-lg pb-5 m-5 mt-10 "
              key={item.sys.id}
            >
              <div>
                {projects.includes.Asset.map((elem: any) => (
                  <div key={elem.sys.space.sys.id}>
                    {item.fields.projectImage.sys.id == elem.sys.id ? (
                      <Image
                        src={"https:" + elem.fields.file.url}
                        width={700}
                        height={400}
                        alt="project"
                        className="  hover:scale-105 delay-105 duration-500 ease-linear "
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}

                <div className="p-5 ">
                <h3 className="text-1xl md:text-2xl text-gray-400 font-serif mt-3 ">
                    {item.fields.projectTitle}
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-orange-500 mt-2 lg:h-24">
                    {item.fields.projectName}
                  </h2>
                 
                </div>
                <div className=" md:grid xl:grid-cols-2">
                  <div className="mt-3 ">
                    <Button text={"Visit Site"} link={item.fields.siteLink} />
                  </div>
                  <div className="mt-3">
                    <Button
                      text={"View Github"}
                      link={item.fields.githubLink}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
