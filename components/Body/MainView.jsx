import { Box, Button, Typography } from "@mui/material";
import PreviewCard from "../Reusables/PreviewCard";
import SkillSet from "../Reusables/SkillSet";

const MainView = () => {
  return (
    <Box sx={{ width: { lg:'75rem' }, mx:'auto', mb:7 }} >

      <SkillSet />

      <Box sx={{ py:5, px:{ xs:5, sm:2, md:0, } }} >
        <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center' }} >
          <Typography variant="h4" 
            sx={{ py:1, fontSize:'1.1rem', 
              fontWeight:600, textDecoration:'underline'
            }}
          >
            PROJECTS
          </Typography>
          <Button sx={{ display:{xs:'none', sm:'block'},
              color:'#FFFFFF',
              borderBottom:2, borderBottomColor:'teal', 
              borderRadius:0 }}
            >
              CONTACT ME
          </Button>
        </Box>
        {/** grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 */}
        <Box sx={{ display:'flex', flexDirection:{xs:'column', sm:'row'}, 
          flexWrap:'wrap', justifyContent:{xs:'space-around', sm:'space-between'}, 
          alignItems:'center', gap:3 }}
        >
            {
              [
                {
                  title: 'Dev Jobs App',
                  dependency: ['JavaScript', 'Material UI', 'React',],
                  projectLink: "https://software-developers-jobs.netlify.app/",
                  projectCode: "https://github.com/isanamoa/devjobs-nextapp",
                  projectImages: [
                    "/assets/project-pics/devjobs-app-light-desk.png",
                    "/assets/project-pics/devjobs-app-dark-desk.png",
                  ]
                },
                {
                  title: 'Country API App',
                  dependency: ['JavaScript', 'Tailwind', 'React',],
                  projectLink: "https://next-country-api-app.netlify.app/",
                  projectCode: "https://github.com/isanamoa/countries_api_nextapp",
                  projectImages: [
                    "/assets/project-pics/countryApi-light-desk.png",
                    "/assets/project-pics/countryApi-dark-desk.png",
                  ]
                },
                {
                  title: 'TODO App',
                  dependency: ['JavaScript', 'Tailwind', 'React',],
                  projectLink: "https://isanamoa.github.io/todo_app/",
                  projectCode: "https://github.com/isanamoa/todo_app",
                  projectImages: [
                    "/assets/project-pics/todo-app-light-desk.png",
                    "/assets/project-pics/todo-app-dark-desk.png",
                  ]
                },
                {
                  title: 'GitHub Devfinder App',
                  dependency: ['JavaScript', 'Tailwind', 'React',],
                  projectLink: "https://isanamoa.github.io/devfinder_app/",
                  projectCode: "https://github.com/isanamoa/devfinder_app",
                  projectImages: [
                    "/assets/project-pics/devfinder-app-dark-desk.png",
                    "/assets/project-pics/devfinder-app-light-desk.png",
                  ]
                },
                {
                  title: 'FLYO Landing Page',
                  dependency: ['JavaScript', 'Tailwind', 'React',],
                  projectLink: "https://isanamoa.github.io/flyo_landing_page/",
                  projectCode: "https://github.com/isanamoa/flyo_landing_page",
                  projectImages: [
                    "/assets/project-pics/flyo-landing-page-app-mobile.PNG",
                    "/assets/project-pics/flyo-landing-page-app-desk2.PNG",
                  ]
                },
              ].map((item, index) => (
                <PreviewCard key={index} projectData={item}/>
              ))
            }

            
        
        </Box>
      </Box>
    </Box>
  )
}

export default MainView;
