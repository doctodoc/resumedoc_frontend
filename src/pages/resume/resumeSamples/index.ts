import ClassicResume from "./classic/ClassicResume";

export const getTemplate = (template: string) => {
    switch (template) {
      case "classic": {
        return ClassicResume;
      }
      
      default: {
        return ClassicResume;
      }
    }
  };
  