/* eslint-disable @next/next/no-img-element */

"use client";

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const languages = [
  "python",
  "typescript",
  "javascript",
  "java",
  "csharp",
  "c",
  "cpp",
  "go",
  "rust",
  "html",
  "css",
];

const tagMappings: { [key: string]: string[] } = {
  project: ["project"],
  fullstack: ["fullstack"],
  frontend: ["frontend", "react", "nextjs", "eslint", "tailwindcss"],
  backend: ["backend", "spring-boot", "nodejs", "expressjs"],
  cloud: ["cloud", "firebase", "docker", "google-cloud", "mongod"],
  game: ["game", "unity", "godot", "sfml"],
  simulator: ["simulator", "rendering-engine"],
  tool: ["tool", "pyqt", "sfml", "blender", "javafx", "mobile-app", "android"],
};

const tagsToExclude = [
  "project",
  "fullstack",
  "frontend",
  "backend",
  "cloud",
  "game",
  "simulator",
  "tool",
];

const getTagClass = (topic: string) => {
  const isLanguage = languages.includes(topic.toLowerCase());
  return isLanguage
    ? "px-3 py-1 text-md rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
    : "px-3 py-1 text-md rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
};

type Project = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  topics: string[];
  created_at: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLabel, setFilterLabel] = useState("project");
  const [languageFilter, setLanguageFilter] = useState("any");
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(8);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [isMobile, setIsMobile] = useState(false);

  const updateProjectsPerPage = () => {
    const width = window.innerWidth;
    setIsMobile(width < 768);

    if (width >= 1536) {
      setProjectsPerPage(8);
    } else if (width >= 1280) {
      setProjectsPerPage(6);
    } else if (width >= 768) {
      setProjectsPerPage(4);
    } else {
      setProjectsPerPage(2);
    }
  };

  useEffect(() => {
    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        "https://api.github.com/users/KaiChuuu/repos"
      );
      const data = await response.json();

      const filterTags = tagMappings[filterLabel] || [];
      const filteredProjects = data.filter((repo: Project) => {
        const hasProjectTag = repo.topics.includes("project");
        const matchesAnyMappedTag = filterTags.some((tag) =>
          repo.topics.includes(tag)
        );
        return (
          hasProjectTag && (filterLabel === "project" || matchesAnyMappedTag)
        );
      });

      setProjects(filteredProjects);
      setCurrentPage(1);
    };

    fetchProjects();
  }, [filterLabel]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredProjects = projects
    .filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.topics.some((topic) =>
          topic.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )
    .filter((project) =>
      languageFilter === "any"
        ? true
        : project.language?.toLowerCase() === languageFilter.toLowerCase()
    )
    .sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  useEffect(() => {
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [currentPage, projectsPerPage, filteredProjects.length]);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-16 max-w-[1700px] mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Projects
      </h2>

      {/* Search and Filter Section */}
      <div className="flex flex-wrap justify-between mb-8 gap-4">
        <div className="flex items-center space-x-4">
          <FaSearch />
          <input
            type="text"
            placeholder="Search projects or tags..."
            className="border px-3 py-1.5 text-lg bg-black rounded w-64"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="border px-4 py-2 text-lg bg-black text-white rounded"
          >
            <option value="desc">Newest</option>
            <option value="asc">Oldest</option>
          </select>

          <select
            value={filterLabel}
            onChange={(e) => setFilterLabel(e.target.value)}
            className="border px-4 py-2 text-lg bg-black text-white rounded"
          >
            <option value="project">Any Project</option>
            <option value="fullstack">Fullstack</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="cloud">Cloud</option>
            <option value="game">Game</option>
            <option value="simulator">Simulator</option>
            <option value="tool">Tool</option>
          </select>

          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="border px-4 py-2 text-lg bg-black text-white rounded"
          >
            <option value="any">Any Language</option>
            <option value="python">Python</option>
            <option value="c++">C++</option>
            <option value="java">Java</option>
            <option value="c">C</option>
            <option value="c#">C#</option>
            <option value="javascript">JavaScript</option>
            <option value="typeScript">TypeScript</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-8 2xl:gap-12">
        {currentProjects.map((project) => {
          const languageTags = project.topics.filter((topic) =>
            languages.includes(topic.toLowerCase())
          );
          const otherTags = project.topics.filter(
            (topic) =>
              !languages.includes(topic.toLowerCase()) &&
              !tagsToExclude.includes(topic.toLowerCase())
          );
          const sortedTags = [...languageTags, ...otherTags];

          return (
            <a
              key={project.id}
              href={`https://github.com/KaiChuuu/${project.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-[0_6px_10px_rgba(255,255,255,0.2)] transition-shadow duration-150"
            >
              <div className="dark:bg-neutral-900 p-6 shadow-md rounded-lg flex flex-col h-full border border-white/30">
                <div className="mb-4 relative">
                  <img
                    src={`https://raw.githubusercontent.com/KaiChuuu/${project.name}/main/cover.jpg`}
                    alt={project.name}
                    className="w-full h-60 md:h-50 xl:h-50 object-cover rounded-md border border-white/30"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = "/images/default-cover.jpg";
                      target.style.filter = "brightness(0.5)";
                    }}
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {sortedTags
                    .filter((tag) => tag !== "project")
                    .map((topic) => (
                      <span key={topic} className={getTagClass(topic)}>
                        {topic}
                      </span>
                    ))}
                </div>

                <p className="text-lg text-gray-500 mt-auto">
                  {project.description || "No description available"}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gray-700 text-white rounded transition duration-200 hover:bg-gray-600"
          >
            Prev
          </button>

          {isMobile ? (
            <span className="px-4 py-2 bg-gray-700 text-white rounded">
              Page {currentPage} of {totalPages}
            </span>
          ) : (
            Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded transition duration-200 ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                {index + 1}
              </button>
            ))
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-4 py-2 bg-gray-700 text-white rounded transition duration-200 hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
