import React, { useState, useRef } from "react";
// import uuid from "react-uuid";
import "./project.css";
import ButtonIx from "./button";

const ProjectTodo = () => {
  const [projectAddToggler, setProjectAddToggler] = useState(true);
  const [projectActiveIndex, setprojectActiveIndex] = useState(0) || null;
  const projectTitleRef = useRef("");
  const projectDescriptionRef = useRef("");
  const projectDateRef = useRef("");
  const projectTaskRef = useRef("");

  const [projectList, setProjectList] = useState([]);

  const projectAddHandler = () => {
    const currentProject = {
      name: projectTitleRef.current.value,
      description: projectDescriptionRef.current.value,
      date: projectDateRef.current.value,
      //   id: uuid(),
      tasks: [],
    };
    setProjectList([...projectList, currentProject]);
  };

  const addTaskHandler = (activeIndex) => {
    const updatetData = projectList.map((item, index) => {
      if (index == activeIndex) {
        return {
          ...item,
          tasks: [
            ...projectList[projectActiveIndex].tasks,
            projectTaskRef.current.value,
          ],
        };
      } else {
        return item;
      }
    });
    setProjectList(updatetData);
  };

  const changeProjectHandler = (index) => {
    setprojectActiveIndex(index);
    setProjectAddToggler(false);
  };

  const projectDeleteHandler = (activeIndex) => {
    const deleteProject = projectList.filter((item, index) => {
      return index !== activeIndex;
    });

    setProjectList(deleteProject);
    setprojectActiveIndex(undefined);
  };

  const taskDeleteHandler = (projectIndex, taskIndexToDelete) => {
    setProjectList((prevProjectList) => {
      const updatedProjectList = prevProjectList.map((project, index) => {
        if (index === projectIndex) {
          // Delete the specified task in the tasks array of the clicked project
          return {
            ...project,
            tasks: [
              ...project.tasks.slice(0, taskIndexToDelete),
              ...project.tasks.slice(taskIndexToDelete + 1),
            ],
          };
        }
        return project;
      });
      return updatedProjectList;
    });
  };

  const testiko = () => {
    alert("s");
  };
  return (
    <div className="project_fluid">
      <ButtonIx onClick={testiko}></ButtonIx>
      <div className="project_container">
        <h2>Your Projects</h2>
        <button onClick={() => setProjectAddToggler(true)}>Add Projects</button>

        {projectList.map((item, index) => {
          return (
            <div
              onClick={() => changeProjectHandler(index)}
              key={item.id}
              className="project_list"
            >
              {item.name}
            </div>
          );
        })}
      </div>

      {projectAddToggler && (
        <div className="project_add_container">
          <div className="project_button_cont">
            <button className="cansel">Cansel</button>
            <button className="save" onClick={projectAddHandler}>
              Save
            </button>
          </div>
          <label>Tittle</label>
          <input type="text" ref={projectTitleRef}></input>
          <label>Description</label>
          <textarea ref={projectDescriptionRef}></textarea>
          <label>Due Date</label>
          <input type="date" ref={projectDateRef} />
        </div>
      )}

      {console.log(projectList[projectActiveIndex], projectActiveIndex)}

      {projectList[projectActiveIndex] == undefined ? (
        <p className="del_p">Project Deleted</p>
      ) : (
        !projectAddToggler && (
          <div className="project_inner">
            <div className="project_name">
              {projectList[projectActiveIndex].name}
            </div>
            <div className="project_date">
              {projectList[projectActiveIndex].date}
            </div>
            <div className="project_text">
              {projectList[projectActiveIndex].description}
            </div>
            <div
              className="project_delete"
              onClick={() => projectDeleteHandler(projectActiveIndex)}
            >
              Delete
            </div>
            <div className="project_tasks_container">
              <div className="tasks_title">Tasks</div>
              <input type="text" ref={projectTaskRef} />{" "}
              <span onClick={() => addTaskHandler(projectActiveIndex)}>
                add task
              </span>
            </div>

            <div className="project_task_list">
              {projectList[projectActiveIndex].tasks.map((item, index) => {
                return (
                  <div key={index} className="project_task">
                    <span>{item}</span>
                    <span
                      onClick={() =>
                        taskDeleteHandler(projectActiveIndex, index)
                      }
                    >
                      clear
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )
      )}

      {/* {!projectAddToggler && 
            
       
           
            } */}
    </div>
  );
};

export default ProjectTodo;
